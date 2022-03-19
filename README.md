## 🗺️ 과제 가이드북 🗺️

![screenshot](https://user-images.githubusercontent.com/88700967/158895727-a78f0ff5-a90e-481e-934f-0487bcab018f.png)

### 🗣️ 과제 조건

---

- Next.js로 구성
- 반응형 레이아웃 구성(웹앱)
- 헤더/사이드바(2depth)/본문 및 브래드크럼/푸터 포함
- API를 활용하여 리스트 및 상세페이지 구성
- 상세페이지는 정적 생성으로 구성 (10개 이상)
- http://makeup-api.herokuapp.com/api/v1/products.json (화장품 api)

### 0. 과제 코드

```
1. Clone this project locally
2. yarn in your bash/command line
3. yarn run dev in your bash/command line
```

### 1. 과제 타이틀

---

화장품 소개/판매 웹사이트

### 2. 과제 소개

---

Next.js 를 활용한 화장품 브랜드 및 타입별 소개 웹앱 반응형 사이트. 디자인/개발 과정에 참여하였음.

### 3. 사용된 스킬 (플러그인 및 라이브러리 포함)

---

- [nextjs](https://nextjs.org/)
- [reactjs](https://ko.reactjs.org/)
- [redux](https://ko.redux.js.org/introduction/getting-started/)
- [font-awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=building)
- [axios](https://www.npmjs.com/package/axios)
- [swiper](https://swiperjs.com/)
- [google-font](https://fonts.google.com/)
- [react-reveal](https://www.react-reveal.com/)
- clsx
- nprogress
- style jsx (스타일링)
- [emailjs](https://www.emailjs.com/)

### 4. 사용된 주요 색상

---

- #f5f2ee
- #e5e0e0

### 5. 과제 페이지 구성

---

> Home 페이지(단일메뉴)

> About 페이지(단일메뉴)

> Brands 페이지

- 화장품 브랜드1
- 화장품 브랜드2
- 화장품 브랜드3
- 화장품 브랜드4

> Makeup 페이지(단일메뉴)

> Community 페이지

- contact 페이지
- info 페이지
  - faq 페이지
  - qna 페이지

> My 페이지

> Login 페이지

> Search 페이지

### 6. 과제 폴더 구성

---

> components

- common : 재활용 가능한 공통 컴포넌트
- sub : 페이지에 쓰이는 부수적 컴포넌트
- layout : 레이아웃에 쓰이는 컴포넌트

> constants

- index.js : 메뉴 관련 constants 모음 (header와 sidebar에 사용)

> pages (각 컴포넌트에 -Page를 붙여 다른 컴포넌트와 비교 )

- api 폴더: 로그인 관련
- view, detail 폴더: 아이템 상세페이지 (ssg/ csr 로 구분)
- brands, community. makeup, search, about, index, login, my 폴더 : 메뉴별 각 페이지
- \_app 파일 : 레이아웃, 리덕스, nprogress, css 설정
- \_document 파일: Seo 관련 Head 태그 및 meta 태그 설정을 통해 mixed content error 해결

> public

- dbs : 데이터 바인딩을 위해 생성한 json 파일 모음
- img : 과제에 사용되는 이미지 파일

> store

- store : 리덕스 관련 reducer

> styles

- fonts : 폰트 설정
- globals : 글로벌 css 설정

### 7. 반응형 웹사이트

---

미디어 쿼리 적용을 통한 반응형 웹사이트 구현
1180px/539px 를 기준으로 웹,태블릿,모바일 기기에서 구현 가능한 ui 제작

### 8.페이지 및 내부 컴포넌트 주요 기능 및 로직 안내

---

- 넥스트js 사용으로 모든 페이지는 pre-rendering
- data-fetch 시 커스텀(csr/ssg/ssr) 가능
- 공통적으로 Header/ SearchBox/ Breadcrumbs/ Footer/ ArrowBtn 공통 컴포넌트 공유
- brands 페이지와 community 페이지에 sidebar 컴포넌트 적용

> Home(pages/index.jsx + components/sub/Reviews.jsx)

- react-reveal fade효과를 이용한 애니메이션 효과
- swiper-slider 라이브러리 옵션 및 효과 적용
- public/dbs/reviews 폴더 내 json 파일을 생성/ fetch(csr)를 통해 Reviews 컴포넌트 작성
- slice 및 map 매서드를 이용한 코드 간소화

> About 페이지(pages/about.jsx + components/sub/Members.jsx)

- public/dbs/members 폴더 내 json 파일을 생성/ fetch를 통해 Members 컴포넌트 작성
- clsx를 통한 클래스네임 다중생성
- map 매서드를 이용한 코드 간소화
- flex 활용 및 css 적용을 통한 페이지 커스텀

> Brands 페이지(pages/brands/index.jsx + page/brands/[brand].jsx + page/detail/[id].jsx + components/sub/List.jsx + components/sub/Loading.jsx)

- List 및 상세페이지(정적생성과 비교하기 위해 클라이언트사이드랜더링 방식 활용) 컴포넌트 작성
- length 매서드를 이용한 전체 아이템 개수 파악 기능
- 로딩 컴포넌트 및 로딩기능 구현
- useRouter() 활용을 이용한 동적라우팅 및 페이지 변경(router.push() 및 next link와 동일기능)
- handleError()함수 정의를 통해 이미지 오류 시 대체 이미지 제공
- 상세페이지에 탭메뉴 작성/ useState 를 활용해 탭메뉴 변경 기능 구현
- setTimeout 적용을 통해 상세페이지 내 알람기능(상품매진임박) 구현
- data sort 시 switch문을 통해 가독성을 높임
- useMemo를 통해 불필요한 state 및 props 변경에 따른 리랜더링 방지

> Makeup 페이지(pages/makeup.index.jsx + pages/view/[id].jsx + components/sub/ListTwo.jsx)

- List 및 상세페이지(클라이언트사이드렌더링과 비교하기 위해 정적생성 방식 활용) 컴포넌트 작성
- handleInputChange() : 서치박스에 입력한 값을 통해 indexOf() 매서드를 이용해 검색어와 동일한 이름의 아이템을 검색
- viewType 에 관한 useState()를 작성해서 뷰타입 변경
- useCallback()을 활용 다른 state나 props 에 영향을 받지 않고 해당 함수를 저장.
- getStaticProps를 활용 build 시 html로 데이터 미리 저장.
- 상세페이지도 마찬가지로 getStaticProps를 활용 / 추가적으로 동적라우팅 페이지이기 때문에 paths를 지정하여 상세페이지 정적 생성 (나머지는 fallback:true를 지정하여 처음 사용자가 방문 후 저장되도록 구현)
- 메타태그 작성을 통한 seo 최적화

> Community 페이지(pages/community.contact.jsx + pages/community/info/[section].jsx)

- 페이지네이션 기능 구현 (페이지별 글 갯수/페이지 숫자버튼/페이지클릭 시 해당 버튼 활성화)
- classList toggle을 통한 글 open/off 기능 구현
- contact form 팝업기능 및 이메일 전송 구현
- 따로 index.js를 만들지 않았기 때문에 redirect 설정

> My 페이지(pages/my.jsx + pages/api 내 파일)

- 로그인 기능(아직 따로 유효성 검사 등 기능 구현하지 않았음)
- 로그인 시 쿠키 저장을 통해 간단한 user 체크
- 리덕스 활용을 통해 장바구니 기능 생성 useDispatch/ useSelector

> Login 페이지 (pages/login.jsx)

> Search 페이지(pages/search/[input].jsx + components/sub/list)

- 연습을 위해 ssr 방식의 data-fetch를 이용(사실 ssr 방식보다 csr 방식이 더 좋을 것 같음)

### 9. Next js 의 장점

---

- 모든 페이지 pre-rendering 을 통해 사용자에게 비교적 짧은 로딩시간의 UI 경험을 줄 수 있음
- 정적 생성 및 동적 생성을 통한 data fetch 가능 -> seo에 최적화
- 동적 라우팅의 장점
- 기존의 csr 방식에 비해 로딩이 굉장히 짧아짐 (미리 서버에서 html을 제공하기 때문에)
- 리액트에 비해 페이지 관리에 용이함(라우팅 장점)
- next 자체가 제공하는 다양한 기능 (링크나 이미지 등등)

### 10. Next js의 단점

---

- 지나치게 많은 데이터를 처리하다 보면 서버에 과부하가 올 수 있음

### 11. 궁금한 점 및 어려웠던 점

---

- 사이드바 로직 (이벤트 버블링 / stoppropagation)
- 리스트는 정적 생성/ 상세페이지는 동적생성을 해야 효과적인 것이 아닌가?
- useRef로 querySelectorAlL을 구현하고 싶을 떄 children 사용
- 정적 생성으로 얻은 데이터를 업데이트하고 싶을 때는? -> revalidate
- useMemo 와 useCallback의 사용 메모리에 대한...
- 서버사이드렌더링과 클라이언트사이드렌더링 스태틱사이드렌더링에 대한 이해
- string 이용 전체
- absolute url (index.jsx 에서 public 폴더 내의 json 파일 가져오는 법 )
- 변수/함수/useEffect 정렬 순서
- 혼합 컨텐츠 문제(https에서 보안이 취약한 http 요청을 보냈을 때)
- 비동기에 따른 페이지 이동 시 unmount 문제 메모리 누수
- 리스트에서 쿼리 전달을 통해 상세페이지 구성도 생각을 해 보았으나 사용자가 해당링크로 먼저 들어왔을 시 페이지 생성에 어려움이 있을 수 있어 보류
- auto-complete 기능
- 전체 검색어 문자열 검색 기능
- 브랜드 검색 시 동적 라우팅을 이용한 이유? 브래드크럼을 위해서
- 브래드크럼을 위해 리다이렉트 처리
- 변수 및 함수 관리
- 오류 메시지 
- 컴포넌트 목록 관리

### 12. 추가하고 싶은 내용

---

- 리덕스를 활용한 장바구니 기능(개발진행 중/리덕스 추가)
- 글작성 및 수정 기능 (개발진행 중/로컬스토리지 활용)
- 상품 더 보기 버튼
- 넥스트 js 이미지 처리방식
- 로그인 유효성 검사 및 회원가입
- 애니메이션 효과
- 컴포넌트 폴더 및 constants 정리
