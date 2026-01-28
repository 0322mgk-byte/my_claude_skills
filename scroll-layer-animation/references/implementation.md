# Implementation Reference

## Table of Contents
1. [Full HTML Structure](#full-html-structure)
2. [Complete CSS](#complete-css)
3. [JavaScript (Intersection Observer)](#javascript)
4. [Customization Options](#customization-options)

---

## Full HTML Structure

```html
<section class="section section-animation" id="animationSection">
    <div class="brand-obj">
        <!-- bg 레이어 - 외곽선 -->
        <div class="brand-obj-bg">
            <img src="{name}-obj-bg.png" alt="Background outline">
        </div>
        <!-- fill 레이어 - 채우기 -->
        <div class="brand-obj-fill">
            <img src="{name}-obj-fill.png" alt="Fill">
        </div>
        <!-- text 레이어 - 아이콘/텍스트 -->
        <div class="brand-obj-text">
            <img src="{name}-obj-text.png" alt="Text/Icons">
        </div>
    </div>
</section>
```

---

## Complete CSS

```css
/* 컨테이너 - 스크롤시 위로 올라오며 페이드인 */
.brand-obj {
    position: relative;
    width: 400px;
    height: 400px;
    transform: translateY(100px);
    opacity: 0;
    transition: none; /* 리셋 시 즉시 초기화 */
}

.active .brand-obj {
    transform: translateY(0);
    opacity: 1;
    transition: transform 1s, opacity 1s; /* 활성화 시에만 transition */
}

/* 공통 이미지 스타일 */
.brand-obj img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* 외곽선 레이어 (기본, 가장 아래) */
.brand-obj-bg {
    position: relative;
    z-index: 1;
}

/* 채우기 레이어 - 아래에서 위로 채워지는 효과 */
.brand-obj-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: inset(100% 0 0 0);
    transition: none; /* 리셋 시 즉시 초기화 */
    z-index: 2;
}

.active .brand-obj-fill {
    clip-path: inset(0);
    transition: clip-path 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.6s;
}

/* 텍스트/아이콘 레이어 - 마지막에 페이드인 */
.brand-obj-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: none; /* 리셋 시 즉시 초기화 */
    z-index: 3;
}

.active .brand-obj-text {
    opacity: 1;
    transition: opacity 1s 2.2s;
}
```

---

## JavaScript

```javascript
const animationSection = document.getElementById('animationSection');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // 50% 이상 보이면 애니메이션 시작
            animationSection.classList.add('active');
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            // 거의 안 보이면 리셋
            animationSection.classList.remove('active');
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.5]
});

observer.observe(animationSection);
```

---

## Customization Options

### 컨테이너 크기
```css
.brand-obj {
    width: 400px;  /* 원하는 크기로 변경 */
    height: 400px;
}
```

### 이동 거리
```css
.brand-obj {
    transform: translateY(100px); /* 값 증가 = 더 멀리서 시작 */
}
```

### 타이밍 조절
```css
/* 컨테이너 애니메이션 속도 */
.active .brand-obj {
    transition: transform 1s, opacity 1s; /* 1s → 원하는 값 */
}

/* fill 채우기 속도와 딜레이 */
.active .brand-obj-fill {
    transition: clip-path 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.6s;
    /*           지속시간^                              딜레이^ */
}

/* text 페이드인 딜레이 */
.active .brand-obj-text {
    transition: opacity 1s 2.2s;
    /*         지속시간^ 딜레이^ */
}
```

### 채우기 방향 변경
```css
/* 아래→위 (기본) */
.brand-obj-fill { clip-path: inset(100% 0 0 0); }
.active .brand-obj-fill { clip-path: inset(0); }

/* 위→아래 */
.brand-obj-fill { clip-path: inset(0 0 100% 0); }
.active .brand-obj-fill { clip-path: inset(0); }

/* 왼쪽→오른쪽 */
.brand-obj-fill { clip-path: inset(0 100% 0 0); }
.active .brand-obj-fill { clip-path: inset(0); }

/* 오른쪽→왼쪽 */
.brand-obj-fill { clip-path: inset(0 0 0 100%); }
.active .brand-obj-fill { clip-path: inset(0); }
```

### 리셋 동작 원리
1. 기본 상태: `transition: none` → 클래스 제거 시 즉시 초기 상태로
2. `.active` 추가: transition 적용 → 애니메이션 실행
3. 스크롤로 벗어남 → active 제거 → 즉시 리셋
4. 다시 진입 → active 추가 → 처음부터 재시작
