# My Claude Skills

재사용 가능한 Claude Skills 컬렉션

## Skills 목록

| Skill | 설명 | 트리거 |
|-------|------|--------|
| [scroll-layer-animation](./scroll-layer-animation/) | 3개 레이어 스크롤 트리거 애니메이션 | `/scroll-layer-animation` |

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

scroll-layer-animation/
└── SKILL.md          # 스킬 문서 (HTML, CSS, JS 템플릿 포함)



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
/scroll-layer-animation
생성된 코드의 CSS에서 타이밍 조절

/* 채우기 딜레이/속도 조절 */
transition: clip-path 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.6s;

/* 텍스트 딜레이 조절 */
transition: opacity 1s 1.7s;
설치 방법

# 전체 클론
git clone https://github.com/0322mgk-byte/my_claude_skills.git .claude/skills/

# 또는 원하는 스킬 폴더만 .claude/skills/에 복사
라이선스
MIT License
