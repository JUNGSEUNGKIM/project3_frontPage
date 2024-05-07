# GARAGE
## 목차

### -팀원소개
    
 |  이름  | 백엔드(주요 프레임워크) | 개발환경 | DataBase | 프론트엔드 
|--------|---------------------|-------------------------------|-----------------------------|-----------------------------|
| 김정승 |    nodejs, Nginx, ejs    |    IntelliJ IDEA , vim      | oracle 11g | HTML, javascript, css, React|
| 노가현 |    nodejs, Nginx, ejs    |    IntelliJ IDEA , vim      | oracle 11g | HTML, javascript, css, React|
| 배호진 |    nodejs, Nginx, ejs    |    IntelliJ IDEA , vim      | oracle 11g | HTML, javascript, css, React|
| 배은지 |    nodejs, Nginx, ejs    |    IntelliJ IDEA , vim      | oracle 11g | HTML, javascript, css, React|

<a href="https://github.com/JUNGSEUNGKIM/codelap_allola/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=JUNGSEUNGKIM/codelap_allola" />
</a>

<a href="http://3.143.252.195:3000/mainPage">
    <img src="./main.png"/>
</a>

[AWS 실행환경](http://3.143.252.195:3000/mainPage)

---
    
### 프로젝트개요
+ 기간 : 2024.03.29(금) ~ 2024.05.08(수)
+ 주제 :  대한민국 구석구석 축제, 공연, 맛집을 소개하며 국내 여행 코스를 편하게 제공, 유저들끼리 소통할 수 있는 웹 서비스 제작
+ 선정이유 : 기존 한공광관공사에서 운영하고 있는 사이트(구석구석)을 분석하여, 보완할 부분을 찾아 제작 선정
+ 보완점 : 주변 시장, 맛집도 함께 제공하여 사용자들과 소통할 수 있는 게시판 구성

---
### 워크플로우

---
### 담당업무

* 김정승 -  
    + 데이터베이스 구성 및 제작 / 공공데이터 입력
    + 데이터베이스를 활용한 정보제공 페이지 제작 및 정렬기능 구현
    + 유저 참여를 위한 CRUD가 가능한 게시판 구현
    + 페이지 템플릿 구현
    + chatbot 구현
    + 회원가입, 로그인 등 페이지 기본 기능 구현
    + 필요한 실데이터 수집 및 import
    + 실시간 날씨 데이터 
  
* 노가현 -  
    + 데이터 조사 및 웹 서비스 기획
    + 지역, 축제 (상세페이지) 구현(UI는 PC 및 모바일 기기에서 동일 한 UI유지)
    + 필요한 실데이터 수집 및 import
    + 지도 데이터 제공
    + 지역별 데이터로 원하는 위치에 따른 데이터 제공

* 배호진 -
    + 게시판 제작 담당
    + 데이터베이스 구성 및 제작 / 공공데이터 입력
    + 필요한 실데이터 수집 및 import
    + 여행추천 화면 구현((UI는 PC 및 모바일 기기에서 동일 한 UI유지)
    + 회원가입, 로그인 등 기본 기능 백엔드 구현

* 배은지 - 
  +  자료조사 및 웹서비스 기획
  +  메인화면 구현(UI는 PC 및 모바일 기기에서 동일 한 UI유지)
  +  공공데이터 입력
  +  실시간 onpeAPI를 활용한 차트 구현
  +  필요한 실데이터 수집 및 import
    
---
### 주요기능 
* 김정승 -
  + 공공 API 및 지도 API, Weather API 등을 활용한 정보제공 기능
  + 이미지와 comment 를 남길 수 있는 게시판 기능
  + 검색 및 페이지 안내를 하는 chatbot 기능
  + 페이지 이동없이 javascript를 통한 DB 와의 통신기능

* 노가현 -  
  + 데이터 정제 후 DB에 적재하여 데이터 활용 
  + 축제 및 전시 장소와 주변 시장/맛집 간 직선거리계산
  + kakao map API를 활용한 축제 및 전시 지도정보 제공기능
  + 지역별 카테고리 및 시장/맛집 페이징 처리   

* 배호진 -  
  +  로그인, 로그아웃, 회원가입 기능 구현
  +  oracle be table 생성
  +  게시판 페이징 처리 및 검색 기능
  +  자유게시판 기능 구현  CRUD
  +  댓글, 대댓글  CRUD
  +  여행추천 화면 구현( 버튼 별 주제에 맞는 축제를 추천, 로그인시 성향에 맞는 랜덤 추천)

* 배은지 -  
  +  oracle be table 생성
  +  게시판 페이징 처리 및 검색 기능
  +  자유게시판 기능 구현  CRUD
  +  댓글, 대댓글  CRUD


### -향후과제
    + 프로젝트 과제

    + 조원별 개인 과제
    
     - 김정승 -  
         Main Page 컨텐츠 추가 및 추가 기능 구현
         chatbot 기능 추가 
         산 정보 제공 페이지 정리
         
     - 노가현 -     
         전체적인 UI 개선 및 반응형 구현
         맛집/시장 이미지 추가
         축제와 전시 정보 이미지 슬라이더 추가
         직선거리가 아닌 kakaomap API를 활용한 길찾기 기능 추가
 
     - 배호진 - 
         버튼 별 주제에 맞는 데이터를 불러와 축제 추천 구현
         축제, 맛집, 관광지 이미지 추가 및 버튼에 이미지 연동

     - 배은지 - 
         CRUD UI 개선
         게시판 좋아요 기능
         대댓글을 연속으로 누르면 계속해서 댓글창 수정

