---
name: scroll-layer-animation
description: 3개 PNG 레이어(bg, fill, text)를 스크롤 트리거로 순차 애니메이션하는 컴포넌트 생성. "3레이어 애니메이션", "브랜드 오브젝트 애니메이션", "스크롤 애니메이션 만들어줘" 요청 시 사용. 외곽선 페이드인 → fill이 clip-path로 채워짐 → 텍스트 페이드인 순서로 동작.
---

# 3 Layer Scroll Animation

스크롤 트리거로 3개 PNG 레이어를 순차 애니메이션하는 컴포넌트.

## 레이어 구성

| 레이어 | 파일명 패턴 | 효과 |
|--------|-------------|------|
| bg | `{name}-obj-bg.png` | 컨테이너와 함께 페이드인 + 위로 이동 |
| fill | `{name}-obj-fill.png` | clip-path로 아래→위 채우기 |
| text | `{name}-obj-text.png` | 마지막 페이드인 |

## Quick Start

상세 구현은 `references/implementation.md` 참조.

### HTML
```html
<section class="section-animation" id="animationSection">
  <div class="brand-obj">
    <div class="brand-obj-bg"><img src="{name}-obj-bg.png" alt=""></div>
    <div class="brand-obj-fill"><img src="{name}-obj-fill.png" alt=""></div>
    <div class="brand-obj-text"><img src="{name}-obj-text.png" alt=""></div>
  </div>
</section>
```

### 핵심 원리
1. 기본 상태: `transition: none` → 리셋 시 즉시 초기화
2. `.active` 추가 시: transition 적용 → 애니메이션 실행
3. Intersection Observer로 50% 이상 보이면 active, 벗어나면 제거

## 타이밍 조절

| 레이어 | 딜레이 | 지속시간 |
|--------|--------|----------|
| container | 0s | 1s |
| fill | 0.6s | 2.5s |
| text | 2.2s | 1s |

## 채우기 방향 옵션

```css
/* 아래→위 (기본) */ clip-path: inset(100% 0 0 0) → inset(0)
/* 위→아래 */       clip-path: inset(0 0 100% 0) → inset(0)
/* 왼→오 */         clip-path: inset(0 100% 0 0) → inset(0)
/* 오→왼 */         clip-path: inset(0 0 0 100%) → inset(0)
```
