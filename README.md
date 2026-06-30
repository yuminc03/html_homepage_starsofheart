# 🌟 Stars Of Heart

> **"내 맘의 별들"** — 우주를 사랑하는 마음으로 만든 한국어 천문학 소개 웹사이트

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://yuminc03.github.io/html_homepage_starsofheart/)

🔗 **라이브 데모**: [https://yuminc03.github.io/html_homepage_starsofheart/](https://yuminc03.github.io/html_homepage_starsofheart/)

---

## 📖 프로젝트 소개

**Stars Of Heart**는 별자리, 태양계, 은하, 성운 등 우주에 관한 다양한 정보를 소개하는 **한국어 정적 웹사이트**입니다. 마스코트 캐릭터 **'로란'** 이 방문자를 맞이하며, 우주를 주제로 한 미니게임과 K-POP 가사 속 천문학적 요소를 해석하는 독특한 콘텐츠도 포함되어 있습니다.

---

## 🛠️ 기술 스택

| 구분 | 기술 |
|------|------|
| 마크업 | HTML5 |
| 스타일링 | Vanilla CSS (각 페이지별 개별 CSS 파일) |
| 스크립트 | Vanilla JavaScript |
| 라이브러리 | jQuery 1.12.4 |
| 호스팅 | GitHub Pages |
| 언어 | 한국어 (`lang="ko"`) |

> 별도의 빌드 도구, 프레임워크, 패키지 매니저 없이 순수 HTML/CSS/JavaScript만으로 구성된 정적 웹사이트입니다.

---

## 🗂️ 페이지 구성

### 🏠 메인
- **`index.html`** — 메인 홈페이지. 마스코트 '로란'의 인사말, 드롭다운 네비게이션 메뉴, 탄생별자리/행성 페이지 배너 포함

### ⭐ 별자리 (`constellation/`)
- **`birth.html`** — 12개 탄생 별자리 목록. 각 별자리 캐릭터 이미지를 클릭하면 상세 페이지로 이동
- **`season.html`** — 계절별 별자리 소개 (봄, 여름, 가을, 겨울)
- 개별 탄생 별자리 페이지 (12개): `aries.html`, `taurus.html`, `gemini.html`, `cancer.html`, `leo.html`, `virgo.html`, `libra.html`, `scorpio.html`, `sagittarius.html`, `capricorn.html`, `aquarius.html`, `pisces.html`

### 🪐 태양계 (`solar-system/`)
- **`planet.html`** — 8개 행성(수성~해왕성) 소개. 각 행성의 이미지, 어원, 특징 설명
- **`sun.html`** — 태양 소개

### 🌌 태양계 외 (`deep-space/`)
- **`asteroid.html`** — 소행성 소개
- **`nebula.html`** — 성운 소개 (오리온 대성운, 런닝맨 성운, 말머리 암흑성운 등)
- **`galaxy.html`** — 은하 소개 (타원은하, 정상 나선은하, 막대 나선은하, 불규칙 은하)

### 🎵 음악 가사 속 우주 (`music/`)
- **`lovelyz_destiny.html`** — 러블리즈 - *Destiny(나의 지구)* 가사를 천문학적 관점에서 해석 (달-지구-태양의 관계)
- **`bts_pluto.html`** — 방탄소년단(BTS) - *134340* 가사를 천문학적 관점에서 해석 (명왕성의 왜소행성 퇴출 이야기)

### 🎮 미니게임 (`games/`)
- **`random_game.html`** — **"운에 맡기자! 게임"**: 무작위로 등장하는 별자리 중 내 별자리가 몇 번 만에 나올지 예측하는 게임
- **`star_quiz.html`** — **"☆STAR QUIZ☆"**: 10개 문항의 천문학 OX/선택 퀴즈 (북극성, 명왕성, 큰곰자리, 화성, 유성, 여름의 대삼각형, 태양과 달 등)

---

## 📁 디렉토리 구조

```
html_homepage_starsofheart/
├── index.html                    # 메인 홈페이지 (GitHub Pages 진입점)
│
├── constellation/                # ⭐ 별자리
│   ├── birth.html               # 탄생 별자리 목록
│   ├── season.html              # 계절별 별자리
│   ├── aries.html               # 양자리
│   ├── taurus.html              # 황소자리
│   ├── gemini.html              # 쌍둥이자리
│   ├── cancer.html              # 게자리
│   ├── leo.html                 # 사자자리
│   ├── virgo.html               # 처녀자리
│   ├── libra.html               # 천칭자리
│   ├── scorpio.html             # 전갈자리
│   ├── sagittarius.html         # 사수자리
│   ├── capricorn.html           # 염소자리
│   ├── aquarius.html            # 물병자리
│   └── pisces.html              # 물고기자리
│
├── solar-system/                 # 🪐 태양계
│   ├── planet.html              # 8개 행성 소개
│   └── sun.html                 # 태양 소개
│
├── deep-space/                   # 🌌 태양계 외
│   ├── asteroid.html            # 소행성
│   ├── nebula.html              # 성운
│   └── galaxy.html              # 은하
│
├── music/                        # 🎵 음악 가사 속 우주
│   ├── lovelyz_destiny.html     # 러블리즈 - Destiny(나의지구)
│   └── bts_pluto.html           # 방탄소년단 - 134340
│
├── games/                        # 🎮 미니게임
│   ├── random_game.html         # 운에 맡기자! 게임
│   └── star_quiz.html           # Star Quiz
│
├── css/                          # 각 페이지별 CSS 스타일시트 (24개)
│   ├── index.css
│   └── ...
│
├── js/                           # jQuery 및 메인 스크립트
│   ├── jquery-1.12.4.js
│   ├── index.js                 # 드롭다운 메뉴 (jQuery slideDown/slideUp)
│   └── constellation_birth.js
│
├── javascript/                   # 게임 로직 스크립트
│   ├── random_game.js
│   └── star_quiz.js
│
└── image/                        # 이미지 리소스 (72개)
    ├── icon.png                 # 파비콘 / 앱 아이콘
    ├── main_background.jpg      # 전체 배경 이미지
    ├── main_logo.png            # 사이트 로고
    ├── my_site_char.png         # 마스코트 '로란' 캐릭터
    ├── char_*.png               # 12개 탄생 별자리 캐릭터 이미지
    ├── star_*.jpg               # 별자리 실제 사진
    ├── *_big.jpg                # 별자리 대형 이미지
    └── (행성, 은하, 성운 등 각종 천체 이미지)
```

---

## ✨ 주요 특징

- **모바일 지원**: `<meta name="apple-mobile-web-app-capable">` 설정으로 iOS 홈 화면 추가 및 앱 아이콘 지원
- **반응형 레이아웃**: 일부 페이지에 `@media` 쿼리 적용 (최대 780px 기준)
- **드롭다운 메뉴**: jQuery `slideDown` / `slideUp` 효과가 적용된 호버 드롭다운 네비게이션
- **마스코트 툴팁**: '로란' 캐릭터에 마우스를 올리면 CSS `visibility` + `opacity` 트랜지션을 이용한 말풍선 안내문이 표시됨
- **페이지별 개별 스타일**: 각 HTML 파일마다 전용 CSS 파일을 분리하여 스타일을 관리

---

## 🚀 로컬 실행 방법

별도의 빌드 과정이 필요 없습니다. 아래 방법 중 하나를 선택하세요.

**방법 1: 직접 파일 열기**
```
index.html 파일을 브라우저로 드래그 앤 드롭하거나 더블클릭하여 실행
```

**방법 2: VS Code Live Server 확장 사용**
1. VS Code에서 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 확장을 설치
2. `index.html`을 우클릭 → **"Open with Live Server"** 클릭
3. 브라우저에서 `http://localhost:5500` 자동 열림

**방법 3: Python 간이 서버**
```bash
# Python 3
python3 -m http.server 8080

# 브라우저에서 http://localhost:8080 접속
```

---

## 👤 제작자

**Chu Yumin**

- GitHub: [yuminc03](https://github.com/yuminc03)
- 사이트: [Stars Of Heart](https://yuminc03.github.io/html_homepage_starsofheart/)
