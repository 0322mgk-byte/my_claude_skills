---
name: scroll-layer-animation
description: 3개 레이어(bg, fill, text)로 구성된 스크롤 트리거 애니메이션을 생성합니다. PNG 이미지를 겹쳐서 순차적으로 애니메이션되는 효과를 만들 때 사용하세요. 외곽선이 먼저 페이드인되고, fill이 clip-path로 아래에서 위로 채워지고, 마지막에 텍스트/아이콘이 페이드인됩니다.
---

# 3 Layer Scroll Animation Skill

스크롤 트리거로 3개의 PNG 이미지 레이어를 순차적으로 애니메이션하는 컴포넌트를 생성합니다.

## 레이어 구성

1. **bg (외곽선)**: 도형의 테두리만 있는 이미지 - 컨테이너와 함께 페이드인하며 위로 올라옴
2. **fill (채우기)**: 도형이 색으로 채워진 이미지 - `clip-path: inset()`로 아래에서 위로 채워지는 효과
3. **text (아이콘/텍스트)**: 내부 콘텐츠 이미지 - 마지막에 페이드인

## 필수 이미지 파일

- `{name}-obj-bg.png` - 외곽선 레이어
- `{name}-obj-fill.png` - 채우기 레이어
- `{name}-obj-text.png` - 텍스트/아이콘 레이어

## HTML 구조

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

## CSS 스타일

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
    transition: clip-path 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.6s; /* 활성화 시에만 transition */
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
    transition: opacity 1s 1.7s; /* 활성화 시에만 transition */
}
```

## JavaScript (Intersection Observer)

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

## 애니메이션 타이밍 조절

| 레이어 | 기본 딜레이 | 지속 시간 | 조절 방법 |
|--------|------------|----------|----------|
| brand-obj (컨테이너) | 0s | 1s | `transition: transform 1s, opacity 1s` |
| brand-obj-fill | 0.6s | 2.5s | `transition: clip-path 2.5s ... 0.6s` |
| brand-obj-text | 2.2s | 1s | `transition: opacity 1s 2.2s` |

## 리셋 동작

- 기본 상태에서 `transition: none` 설정으로 리셋 시 즉시 초기 상태로 복귀
- `.active` 클래스가 추가될 때만 transition이 적용되어 애니메이션 실행
- 스크롤로 섹션이 화면에서 벗어나면 `active` 클래스 제거 → 즉시 리셋
- 다시 스크롤하면 처음부터 애니메이션 재시작

## 사용 예시

사용자가 "3개 레이어 스크롤 애니메이션 만들어줘" 또는 "브랜드 오브젝트 애니메이션" 요청 시 이 스킬을 적용하세요.

### 커스터마이징 옵션

- **컨테이너 크기**: `.brand-obj`의 `width`, `height` 조절
- **이동 거리**: `transform: translateY(100px)` 값 조절
- **채우기 방향**: `clip-path: inset(100% 0 0 0)` 값 변경
  - 아래→위: `inset(100% 0 0 0)` → `inset(0)`
  - 위→아래: `inset(0 0 100% 0)` → `inset(0)`
  - 왼쪽→오른쪽: `inset(0 100% 0 0)` → `inset(0)`
  - 오른쪽→왼쪽: `inset(0 0 0 100%)` → `inset(0)`
