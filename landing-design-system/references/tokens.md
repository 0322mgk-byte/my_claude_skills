# Design Tokens Reference

## Table of Contents
1. [Typography](#typography)
2. [Spacing](#spacing)
3. [Copy Spacing](#copy-spacing)
4. [Button](#button)
5. [Header](#header)
6. [Colors](#colors)

---

## Typography

### Hero MainCopy
```
모바일: text-3xl leading-tight tracking-tight font-bold
태블릿(md): text-5xl leading-tight tracking-tight font-bold
데스크탑(lg): text-6xl leading-tight tracking-tight font-bold
```

### Hero SubCopy
```
모바일: text-sm leading-normal tracking-wide font-medium
태블릿(md): text-base leading-normal tracking-wide font-medium
데스크탑(lg): text-base leading-normal tracking-wide font-medium
```

### Hero Description
```
모바일: text-base leading-relaxed tracking-normal font-normal
태블릿(md): text-lg leading-relaxed tracking-normal font-normal
데스크탑(lg): text-lg leading-relaxed tracking-normal font-normal
```

### Section MainCopy
```
모바일: text-2xl leading-tight tracking-tight font-bold
태블릿(md): text-3xl leading-tight tracking-tight font-bold
데스크탑(lg): text-4xl leading-tight tracking-tight font-bold
```

### Section SubCopy
```
text-sm leading-normal tracking-wide font-medium
```

### Section Description
```
모바일: text-base leading-relaxed tracking-normal font-normal
태블릿(md): text-base leading-relaxed tracking-normal font-normal
데스크탑(lg): text-lg leading-relaxed tracking-normal font-normal
```

### Navigation
```
text-sm tracking-normal font-medium
```

### Button Text
```
모바일: text-sm tracking-normal font-medium
태블릿(md): text-base tracking-normal font-medium
```

---

## Spacing

### Header Height
```
모바일: h-16 (64px)
태블릿(md): h-18 (72px)
데스크탑(lg): h-20 (80px)
```

### Hero Padding (상단/하단 분리 - GNB 높이 보정)
```
상단(pt):
  모바일: pt-20 (80px)
  태블릿(md): pt-28 (112px)
  데스크탑(lg): pt-36 (144px)

하단(pb):
  모바일: pb-16 (64px)
  태블릿(md): pb-24 (96px)
  데스크탑(lg): pb-32 (128px)
```

### Section Padding
```
모바일: py-12 (48px)
태블릿(md): py-16 (64px)
데스크탑(lg): py-20 (80px)
```

### Footer Padding
```
모바일: py-12 (48px)
태블릿(md): py-16 (64px)
데스크탑(lg): py-16 (64px)
```

### Container
```
최대 너비: max-w-6xl (1152px)
좌우 패딩: px-4 md:px-6 lg:px-8
중앙 정렬: mx-auto
```

---

## Copy Spacing

```
서브카피 → 메인카피: mb-2 (8px)
메인카피 → 설명: mb-4 (16px)
설명 → 버튼: mt-6 (24px)
네비게이션 항목 간격: gap-8 (32px)
```

---

## Button

### Size Options
```
sm: px-4 py-2 text-sm
md: px-6 py-3 text-base (기본값)
lg: px-8 py-4 text-lg
```

### Corner Options
```
full: rounded-full
lg: rounded-lg
md: rounded-md
none: rounded-none
```

### Variant Options
```
primary: bg-primary text-white hover:bg-primary/90
secondary: bg-secondary text-white hover:bg-secondary/90
outline: border-2 border-primary text-primary bg-transparent hover:bg-primary/10
```

---

## Header

### Structure
```
레이아웃: 좌측 로고 / 중앙 네비게이션 / 우측 CTA 버튼
로고 높이: h-8 (32px)
위치: sticky top-0 z-50
배경: bg-white/80 backdrop-blur-md
```

---

## Colors

### CSS Variables
```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-background: #ffffff;
  --color-text: #0f172a;
}
```

### Tailwind Usage
```
bg-primary → background-color: var(--color-primary)
bg-secondary → background-color: var(--color-secondary)
bg-background → background-color: var(--color-background)
text-text → color: var(--color-text)
```

---

## Font Configuration

### Default: Pretendard
```css
font-family: 'Pretendard', system-ui, sans-serif;
```

### Alternative Options
- Paperlogy
- Noto Sans KR

### Fallback
```
system-ui, sans-serif
```
