# verda
---
## 목차
<details>
  <summary>목차</summary>

  1. [소개](#1-verda-소개)
  2. [팀 소개](#2-개발팀-소개)
  3. [개발 기간](#3-개발-기간)
  4. [기술 스택 및 협업 방식](#4-기술-스택-및-협업-방식)
  5. [주요 기능](#5-주요-기능)
  6. [추가 개발/개선 사항](#6-추가-개발/개선-사항)
</details>

## 1.📱verda 소개

<img width="706" alt="image" src="https://github.com/kdt8-Team5-verda-project/verda-frontend/assets/138414160/757b99b9-ced2-4986-ac85-8f799d12f646">

투자에 대한 관심은 증가하지만,투자 상담받기에 어려움을 느끼고 대부분 금융지식이 부족한 상태에서 투자를 진행합니다. 또한 문자나 인터넷에서 투자와 관련된 위험한 경로로부터 투자 제안을 종종 받습니다. 이러한 문제점을 극복하기 위한 펀드매니저 매칭 서비스입니다.

일반 회원은 투자 금액, 투자 상황, 투자 방법 등 자신이 고려하고 있는 모든 상황에 대해 게시글을 올리 수 있으며, 펀드매니저 회원이 작성한 댓글의 수락버튼을 눌러 1대1 채팅을 만들 수 있습니다. 펀드매니저 회원은 일반 회원이 작성한 게시글에 답변을 할 수 있으며, 1대1 채팅을 통해 일반회원을 상담할 수 있으며, 자신의 고객으로 유치할 수 있습니다.

<br />

> **verda 바로가기👉https://verda1.vercel.app/**
<br/>
--현재 서버가 닫혀 동작하지 않습니다.--
>

## 2.🤼 팀원 소개
<table>
  <tbody>
    <tr>
      <th scope="col" colspan="3">프론트엔드</th>
       <th scope="col" colspan="3">백엔드</th>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/fun1ty"><img src="https://github.com/fun1ty.png" width="100px;" alt=""/><br /><b>김미리</b></a><br /></td>
      <td align="center"><a href="https://github.com/learnttuce0321"><img src="https://github.com/learnttuce0321.png" width="100px;" alt=""/><br /><b>주상후</b></a><br /></td>
      <td align="center"><a href="https://github.com/sonys95"><img src="https://github.com/sonys95.png" width="100px;" alt=""/> <br /><b>손영석</b></a><br /></td>
      <td align="center"><a href="https://github.com/changhyun-jang"><img src="https://github.com/changhyun-jang.png" width="100px;" alt=""/><br /><b>장창현</b></a><br /></td>
      <td align="center"><a href="https://github.com/Kimjonghyeon6084"><img src="https://github.com/Kimjonghyeon6084.png" width="100px;" alt=""/><br /><b>김종현</b></a><br /></td>
      <td align="center"><a href="https://github.com/saebyeok1"><img src="https://github.com/saebyeok1.png" width="100px;" alt=""/><br /><b>김보영</b></a><br /></td>
    </tr>
    <tr>
      <td >펀드매니저 모든 페이지,<br/> UI/UX디자인</td>
      <td >프론트엔드 조장<br/>유저 모든 페이지 <br/>채팅 구현 <br/></td>
      <td >로그인,<br/>회원가입,<br/>메인 페이지</td>
      <td >백엔드 조장<br/>채팅 기능 구현<br/> 데이터 캐싱<br/></td>
      <td >회원가입<br/>로그인<br/>사용자 관리<br/></td>
      <td >게시판 CRUD<br/>CI/CD 파이프라인<br/></td>
    </tr>
    
  </tbody>
</table>

## 3.📆 개발 기간

## 4.⚙️ 기술 스택 및 협업 방식

<details>
  <summary>협업 관련 링크</summary>
  <div markdown="1">

  - [🔗노션링크](https://kimmr.notion.site/kimmr/verda-9362c1a22c00470da7a544b8f068bea1) <br />
  - [🔗Figma링크](https://www.figma.com/file/Rz26FVSiEqupqRsqmCwoZO/%EB%B2%8C%EB%8B%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%84%A4%EA%B3%84?type=design&node-id=0-1&mode=design&t=eJhMSC9r8uShcRzO-0)
    
  </div>
</details>

### 개발환경
- 매일 아침 현재 진행 상황 보고 및 당일 및 추후 계획 회의를 진행하였습니다.
- esLint, Prettier를 통해 코드 컨벤션을 통일하였으며, 아토믹 디자인 시, 네이밍컨벤션을 진행해 알아보기 쉽도록 하였습니다.
- 충돌 방지를 위해 아토믹 단위마다 각자의 폴더를 만들어 진행 후, 코드를 합쳐 충돌을 방지하였습니다.

### 기술 스택
<table>
  <tr>
    <td align="center">Front-End</td>
    <td>
      <span><img src="https://img.shields.io/badge/next.js-FFF?style=flat&logo=next.js&logoColor=black"></span>&nbsp
      <span><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&logo=tailwindcss&logoColor=black"></span>&nbsp
      <span><img src="https://img.shields.io/badge/reactquery-FF4154?style=flat&logo=reactquery&logoColor=black"></span>&nbsp
      <span><img src="https://img.shields.io/badge/recoil-FFF?style=flat&logo=recoil&logoColor=black"></span>&nbsp
      <span><img src="https://img.shields.io/badge/stomp-FFF?style=flat&logo=stomp&logoColor=black"></span>&nbsp
    </td>
  </tr>
  <tr>
    <td align="center">협업</td>
    <td>
      <span><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></span>&nbsp 
      <span><img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/></span>&nbsp 
    </td>
  </tr>
  <tr>
     <td align="center">디자인</td>
     <td>
       <span><img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/></span>&nbsp
     </td>
  </tr>
  <tr>
   <td align="center">컨벤션</td>
   <td>
      <span><img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"/></span>&nbsp
      <span><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=Prettier&logoColor=white"/></span>&nbsp
   </td>
  </tr>
  <tr>
   <td align="center">배포</td>
   <td>
      <span><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Netlify&logoColor=white"/></span>&nbsp
   </td>
  </tr>
</table>


<span><img src="https://img.shields.io/badge/visualstudiocode-FFF?style=flat&logo=visualstudiocode&logoColor=black"></span>
