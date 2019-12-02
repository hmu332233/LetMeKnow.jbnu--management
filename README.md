# 알려줘전북대 관리자, api

[![Build Status](https://travis-ci.org/hmu332233/LetMeKnow.jbnu-management.svg?branch=develop)](https://travis-ci.org/hmu332233/LetMeKnow.jbnu--management)

알려줘전북대 관리자 페이지 및 api 서버입니다.  

알려줘전북대는 다음과 같은 repo들로 관리되고 있습니다.
- [LetMeKnow.jbnu--ChatBot--](https://github.com/hmu332233/LetMeKnow.jbnu--ChatBot--): 알려줘전북대 메인 서버
- **[LetMeKnow.jbnu-managemen](https://github.com/hmu332233/LetMeKnow.jbnu-management): 관리자 페이지 및 api 서버**
- [LetMeKnow.jbnu--lambda](https://github.com/hmu332233/LetMeKnow.jbnu--lambda): 클라우드용 lambda 함수 관리
- [LetMeKnow.jbnu-bixby](https://github.com/hmu332233/LetMeKnow.jbnu-bixby): 알려줘전북대 빅스비 버전 (개발 중)

## Requirements

- node8 이상
- mongodb 4.0 이상
- yarn (optional)
- git 2.13.0 이상 (optional)

## Getting Started

다음과 같은 순서로 api 서버를 실행할 수 있습니다.  

1. 모듈 설치
```bash
$ yarn
```

2. .env 파일 복사
```bash
$ cp server/.evn.example server/.evn
```
3. .env 파일 내용 채워넣기
  - api 서버 개발시에는 `MONGO_DB`, `NODE_ENV`만 있으면 됩니다.
  ```
  NODE_ENV=development
  MONGO_DB=mongodb://localhost:27017/db # 본인의 mongodb host를 적어주세요.
  ```

4. 서버 실행
```bash
$ yarn run start-server
```

## Testing
다음 명령어로 테스트가 가능합니다.
```bash
$ yarn test
```
[jest](https://jestjs.io/)를 사용하고 있으며,  
jest의 사용방법은 해당 문서를 참고해주세요.

## Code Format
prettier가 git hooks를 통해 commit 단계에서 실행됩니다.
단, 이 기능은 git `2.13.0` 이상이여야합니다.

## Contribution

- 누구든지 이 프로젝트에 참여할 수 있습니다.
- 알려줘전북대에 대한 이슈는 [LetMeKnow.jbnu--ChatBot--/issues](https://github.com/hmu332233/LetMeKnow.jbnu--ChatBot--/issues)에 남겨주세요.

- 작업 방식은 다음과 같습니다.
  1. 원하는 issue에 작업을 진행하겠다는 의사를 표시합니다.
  2. 해당 repo를 fork하고 작업을 진행합니다.
  3. 작업이 완료되었으면 `develop` 브랜치를 base로 pull request를 보내주세요.
