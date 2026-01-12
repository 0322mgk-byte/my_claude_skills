# My Claude Skills

랜딩페이지 제작을 위한 재사용 가능한 Claude Skills 컬렉션

## Skills 목록

| Skill | 설명 | 트리거 |
|-------|------|--------|
| [apt-landing-builder](./apt-landing-builder/) | 아파트 분양 랜딩페이지 빌더 (Header, Hero, Footer) | `/apt-landing-builder` |
| [landing-hero-section](./landing-hero-section/) | GSAP 애니메이션 히어로 섹션 | `/landing-hero-section` |
| [scroll-layer-animation](./scroll-layer-animation/) | 3개 레이어 스크롤 트리거 애니메이션 | `/scroll-layer-animation` |

---

## apt-landing-builder

아파트 분양 랜딩페이지를 위한 Config 패턴 디자인 시스템입니다.

### 주요 기능

- Header, Hero, Footer 컴포넌트 템플릿 제공
- Config 패턴으로 비개발자도 쉽게 커스터마이징 가능
- 모든 색상은 `rgba(R,G,B,투명도)` 형식 통일
- 한글 주석으로 각 설정값 설명

### 포함 파일

```
apt-landing-builder/
├── Skill.md          # 스킬 문서
├── QUICK_GUIDE.md    # 빠른 시작 가이드
└── templates/
    ├── Header.tsx    # 헤더 컴포넌트
    ├── Hero.tsx      # 히어로 섹션
    └── Footer.tsx    # 푸터 컴포넌트
```

### 기술 스택

- Next.js 15+ (App Router)
- TypeScript
- GSAP, Tailwind CSS
- Lucide React, shadcn/ui

---

## landing-hero-section

Next.js + GSAP 기반 히어로 섹션을 생성합니다.

### 주요 기능

- 이미지/비디오 배경 지원
- 확대/축소 애니메이션 (GSAP)
- 클릭 시 애니메이션 리플레이
- 파일 상단에서 모든 설정값 조절 가능

### 포함 파일

```
landing-hero-section/
├── Skill.md          # 스킬 문서
└── template.tsx      # 히어로 컴포넌트 템플릿
```

### 기술 스택

- Next.js (App Router)
- TypeScript
- GSAP
- Tailwind CSS

---

## scroll-layer-animation

3개의 PNG 이미지 레이어를 순차적으로 애니메이션하는 스크롤 트리거 컴포넌트입니다.

### 주요 기능

- 3개 레이어 순차 애니메이션 (bg → fill → text)
- bg: 페이드인 + 위로 올라오는 효과
- fill: `clip-path: inset()`로 아래에서 위로 채워지는 효과
- text: 마지막에 페이드인
- Intersection Observer 기반 스크롤 트리거
- 스크롤 시 자동 리셋 및 재시작

### 포함 파일

```
scroll-layer-animation/
└── SKILL.md          # 스킬 문서 (HTML, CSS, JS 템플릿 포함)
```

### 기술 스택

- Vanilla HTML/CSS/JavaScript
- Intersection Observer API
- CSS clip-path, transition

### 필수 이미지 파일

- `{name}-obj-bg.png` - 외곽선 레이어
- `{name}-obj-fill.png` - 채우기 레이어
- `{name}-obj-text.png` - 텍스트/아이콘 레이어

---

## 사용법

1. 원하는 스킬 폴더를 프로젝트의 `.claude/skills/`에 복사
2. Claude에게 트리거 명령어 입력

```bash
# 예시
/apt-landing-builder
/landing-hero-section
/scroll-layer-animation
```

3. 생성된 코드의 상단 설정값 수정

```javascript
// 예시: Config 패턴
const HERO_TYPE = "image"          // "image" 또는 "video"
const IMAGE_SCALE = 120            // 확대/축소 (%)
const HEADER_BG = "rgba(0,0,0,0.8)" // 배경색
```

## 설치 방법

```bash
# 전체 클론
git clone https://github.com/0322mgk-byte/my_claude_skills.git .claude/skills/

# 또는 원하는 스킬 폴더만 .claude/skills/에 복사
```

## 라이선스

MIT License
