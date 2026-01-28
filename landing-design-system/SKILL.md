---
name: landing-design-system
description: Next.js + Tailwind CSS 기반 랜딩페이지 제작용 디자인 시스템. Header, HeroSection, Section, Footer, Button 컴포넌트와 디자인 토큰(타이포그래피, 여백, 색상)을 포함. "랜딩페이지 만들어줘", "landing page", "웹사이트 만들어줘" 요청 시 이 시스템의 규칙과 컴포넌트를 사용해서 일관된 스타일로 제작. 21st.dev 컴포넌트 사용 시에도 이 디자인 토큰으로 클래스를 교체해서 일관성 유지.
---

# Landing Page Design System

Next.js + Tailwind CSS 기반 랜딩페이지용 디자인 시스템.

## Quick Start

랜딩페이지 요청 시:
1. `assets/components/`에서 컴포넌트 복사
2. `references/tokens.md`의 디자인 토큰 적용
3. `globals.css`에서 색상만 프로젝트에 맞게 변경

## 컴포넌트 사용

### 필수 파일 복사
```
assets/components/ → src/components/
assets/styles/globals.css → src/app/globals.css (기존 파일에 병합)
```

### 컴포넌트 구조
- **Header**: sticky 헤더, 좌측 로고/중앙 네비/우측 CTA
- **HeroSection**: 서브카피 → 메인카피 → 설명 → 버튼
- **Section**: 일반 바디 섹션, 같은 카피 구조 + children
- **Footer**: 기본 푸터
- **Button**: 사이즈(sm/md/lg), 모서리(full/lg/md/none), variant(primary/secondary/outline)

## 디자인 토큰

상세 토큰은 `references/tokens.md` 참조.

### 핵심 규칙

**타이포그래피 계층**
- 히어로 메인카피: text-3xl → md:text-5xl → lg:text-6xl
- 섹션 메인카피: text-2xl → md:text-3xl → lg:text-4xl

**여백 규칙**
- 히어로: pt-20/pb-16 → md:pt-28/pb-24 → lg:pt-36/pb-32 (상단이 더 넓음)
- 섹션: py-12 → md:py-16 → lg:py-20
- 컨테이너: max-w-6xl mx-auto px-4 md:px-6 lg:px-8

**카피 간격**
- 서브카피 → 메인카피: mb-2
- 메인카피 → 설명: mb-4
- 설명 → 버튼: mt-6

## 색상 커스터마이징

`globals.css`에서 CSS 변수 수정:
```css
:root {
  --color-primary: #2563eb;     /* 메인 색상 */
  --color-secondary: #64748b;   /* 보조 색상 */
  --color-background: #ffffff;  /* 배경 */
  --color-text: #0f172a;        /* 텍스트 */
}
```

## 폰트 변경

기본: Pretendard. 변경 시:

1. `tailwind.config.js` fontFamily 수정
2. `globals.css` @font-face 수정

대체 옵션: Paperlogy, Noto Sans KR

## 21st.dev 연동

21st.dev 컴포넌트 사용 시:
1. 컴포넌트 import
2. `references/tokens.md`의 토큰으로 클래스 교체
3. 색상은 CSS 변수 사용 (bg-primary 등)
