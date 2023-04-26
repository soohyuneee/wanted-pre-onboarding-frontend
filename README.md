# 원티드 프리온보딩 프론트엔드 - 선발 과제

### URL

- [배포링크](https://wanted-pre-onboarding-todo.netlify.app/)

---
### 파일 구조
```
.root
┣ node_modules
┣ public
┗ src
   ┣ components
   ┃    ┣ style
   ┃    ┃   ┣ FormStyle.js
   ┃    ┃   ┣ GlobalStyle.js
   ┃    ┃   ┗ TodoStyle.js
   ┃    ┣ SignIn.js
   ┃    ┣ SignUp.js
   ┃    ┣ Todo.js
   ┃    ┗ TodoItem.js
   ┣ hooks
   ┃    ┣ useEmail.js
   ┃    ┗ usePassword.js
   ┣ modules
   ┃    ┣ API.js
   ┃    ┣ routes.js
   ┃    ┗ url.js
   ┣ App.js
   ┗ index.js
```
- components : 로그인, 회원가입, 투두리스트, 투두아이템 컴포넌트가 있고, 스타일드 컴포넌트 파일들은 style 폴더에서 관리합니다.
- hooks : 로그인과 회원가입에 사용되는 유효성 검사 로직들을 커스텀훅으로 작성하여 hooks 폴더에서 관리합니다.
- modules : API, URL, Route를 상수로 작성하여 modules 폴더에서 관리합니다.

---

### 이미지

- 로그인
  <img width="1440" alt="스크린샷 2023-04-08 오후 11 02 19" src="https://user-images.githubusercontent.com/105588175/230727382-6cb6b20d-44c6-4bb9-877b-2f0fd12b6f0a.png">

- 회원가입
  <img width="1440" alt="스크린샷 2023-04-08 오후 11 02 25" src="https://user-images.githubusercontent.com/105588175/230727402-eeca4b20-92d6-4ddf-ba4e-915edaa70280.png">

- 투두리스트 
  <img width="1440" alt="스크린샷 2023-04-08 오후 11 03 20" src="https://user-images.githubusercontent.com/105588175/230727414-e43c2773-8a35-4e5e-bb36-64b31ef7d4be.png">
  <img width="1440" alt="스크린샷 2023-04-08 오후 11 03 26" src="https://user-images.githubusercontent.com/105588175/230727423-1630b392-2496-4ac5-a19a-f4cf5226b2b7.png">


---
### 프로젝트 소개

- 기술스택 : React, Styled-Component, Axios, React Router, React-Icons <br >
- 기능 : 회원가입, 로그인, 로그아웃, 투두리스트 CRUD<br >

---
### 프로잭트 실행 방법

1. 설치
   ```
   npm install
   ```
2. 실행
   ```
   npm start
   ```
3. 첫 실행 시 토큰이 없는 상태이므로, 로그인 화면으로 리다이렉트 

4. 회원가입과 로그인 후 투두리스트로 진입 가능

5. 로그인 한 상태에서는 투두리스트를 기본 페이지로 사용

6. 로그아웃을 하면 로그인 화면으로 리다이렉트
