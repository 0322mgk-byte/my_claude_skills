# Claude Skills Collection

Claude Desktop에서 사용할 수 있는 커스텀 스킬 모음입니다.

## 설치

`.skill` 파일을 Claude Desktop의 Skills 폴더에 추가하세요.

| OS | 경로 |
|----|------|
| macOS | `~/Library/Application Support/Claude/skills/` |
| Windows | `%APPDATA%\Claude\skills\` |

---

## 스킬 목록

### 1. Landing Design System

Next.js + Tailwind CSS 기반 랜딩페이지 제작용 디자인 시스템

**트리거**: "랜딩페이지 만들어줘", "웹사이트 만들어줘", "landing page"

**포함 내용**
- 컴포넌트: Header, HeroSection, Section, Footer, Button
- 디자인 토큰: 반응형 타이포그래피, 여백, 색상 (CSS 변수)
- 폰트: Pretendard 기본 (Paperlogy, Noto Sans KR 대체 가능)

**커스터마이징**: `globals.css`에서 색상 변수만 변경
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

---

### 2. Scroll Layer Animation

3개 PNG 레이어를 스크롤 트리거로 순차 애니메이션하는 컴포넌트

**트리거**: "3레이어 애니메이션", "브랜드 오브젝트 애니메이션", "스크롤 애니메이션 만들어줘"

**애니메이션 순서**
1. 컨테이너 페이드인 + 위로 이동 (0s~1s)
2. fill 레이어 clip-path로 채워짐 (0.6s~3.1s)
3. text 레이어 페이드인 (2.2s~3.2s)

**필요한 이미지**
| 레이어 | 파일명 | 역할 |
|--------|--------|------|
| bg | `{name}-obj-bg.png` | 외곽선/테두리 |
| fill | `{name}-obj-fill.png` | 색으로 채워진 도형 |
| text | `{name}-obj-text.png` | 내부 아이콘/텍스트 |

**커스터마이징**: 채우기 방향 변경
```css
/* 아래→위 (기본) */ inset(100% 0 0 0)
/* 위→아래 */       inset(0 0 100% 0)
/* 왼→오 */         inset(0 100% 0 0)
/* 오→왼 */         inset(0 0 0 100%)
```

---

## 라이선스

MIT
