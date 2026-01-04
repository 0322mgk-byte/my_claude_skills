# My Claude Skills

랜딩페이지 제작을 위한 재사용 가능한 Claude Skills 컬렉션

## Skills 목록

| Skill | 설명 | 트리거 |
|-------|------|--------|
| [landing-hero-section](./landing-hero-section/) | GSAP 애니메이션 히어로 섹션 | `/landing-hero-section` |

---

## landing-hero-section

Next.js + GSAP 기반 히어로 섹션을 생성합니다.

### 주요 기능

- 이미지/비디오 배경 지원
- 확대/축소 애니메이션 (GSAP)
- 클릭 시 애니메이션 리플레이
- 파일 상단에서 모든 설정값 조절 가능

### 기술 스택

- Next.js (App Router)
- TypeScript
- GSAP
- Tailwind CSS

### 사용법

1. 프로젝트의 `.claude/skills/` 폴더에 복사
2. Claude에게 요청: "히어로 섹션 만들어줘" 또는 `/landing-hero-section`
3. 생성된 코드의 상단 설정값 수정

```typescript
// 예시: 설정값 수정
const HERO_TYPE = "image"          // "image" 또는 "video"
const IMAGE_SCALE = 120            // 확대/축소 (%)
const IMAGE_ANIM_DURATION = 3      // 애니메이션 시간 (초)
설치 방법

# 프로젝트 루트에서
git clone https://github.com/0322mgk-byte/my_claude_skills.git .claude/skills/
또는 원하는 스킬 폴더만 .claude/skills/에 복사
라이선스
MIT License
