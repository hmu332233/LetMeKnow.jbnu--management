## 📖 Introduction

   알려줘전북대 관리자 페이지 및 api 서버는 카카오에서 메세지 전달을 하고 알려줘전북대 메인 앱에서   
메세지 분석을 하면 필요한 데이터를 전송해주는 페이지입니다.

## 📂 Directory structure
``` bash
  |-LetMeKnow.jbnu-management              # work space
  |  |-server                              # 실질적으로 작업할 공간
  |  |  |-controllers                      # 요청(request)를 받아 응답(response)에 대한 처리를 하는 곳 (비즈니스 로직에 값들을 넘겨주는 역할)
  |  |  |-models                           # db에 직접 접근하여 데이터를 가져오는 곳
  |  |  |-routes                           # 어떤 url이 어떤 contoroller로 갈지 찾아가는 곳 
  |  |  |-services                         # 요청에 대한 처리를 해주는 과정에서 필요한 비즈니스 로직을 호출해 주는 곳
  |  |  |-test                             # jest 테스트 내용이 적혀있는 곳
  |  |-app.js                              # 요청(request)이 들어오면 서버를 생성해주는 곳
  |  |-.env.example                        # 환경변수 관리파일
  |-.prettierrc                            # 프로젝트 코드컨벤션 규칙이 적혀있는 문서

```

## 👨‍💻 System requirements
기본적으로 node.js 환경에 mongoDB가 설치되어 있어야합니다.

개발환경을 설치하기 어려우시다면 [구름IDE](https://www.goorm.io/)를 사용하여 개발하시는걸 추천드립니다.

웹 기반 클라우드 코딩 서비스인 구름은, 네트워크만 연결되어 있다면 접속하는 것 만으로 별다른 설정 없이 다양한 언어로 프로그래밍을 하실 수 있는 환경을 제공합니다

*링크를 클릭하시면 구름IDE에 대한 자세한 설명이 나와았습니다.[구름IDE란?](https://edu.goorm.io/learn/lecture/263/%EA%B5%AC%EB%A6%84ide-%EB%8F%84%EC%9B%80%EB%A7%90/lesson/6818/%EA%B5%AC%EB%A6%84ide%EB%9E%80)*


## 👩‍💻 Getting Started
다음과 같은 순서로 api 서버를 실행할 수 있습니다.  

구름IDE 기준으로 (nodejs 스택을 선택하고 mongodb 설치 옵션을 선택 한경우)

1. 모듈 설치
```bash
$ yarn
```
2. .env 파일 복사
```bash
$ cp server/.env.example server/.env
```

3. .env에 다음과 같이 환경변수를 채우고 mongodb url을 적어줍니다.
```bash
NODE_ENV=development
MONGO_DB=mongodb://localhost:27017/db  # 데이터베이스 이름은 아무거나 쓰셔도됩니다.
                                       # 본인의 mongodb host를 적어주세요.(아무것도 설정하지 않았다면 27017이 defalt값입니다.)
```


4. ```alt + shift + t```를 눌러 새로운 터미널을 하나 열어줍니다.


5. 열린 터미널에 다음과 같이 입력하여 mongodb를 실행합니다.
```bash
$ mongod
```
아무런 옵션도 주지 않았기때문에 27017에 mongodb가 실행되게 됩니다.

이제 mongodb를 사용할 준비가 끝났습니다.
mongodb를 접속하는 url은 ```mongodb://localhost:27017```가 됩니다.

6. 새로운 터미널을 열어 아래와 같이 입력해보고 서버 실행이 됨을 확인합니다.
```bash
$ yarn run start-server
```

7. 만약, maintainer분이 소스코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하기 위해 유닛테스트를 통과하도록 요구
하신다면 새로운 터미널에서 아래와 같이 입력해보고 실행이 됨을 확인합니다.
```bash
$ yarn test
```
작업 중에는 api를 직접 호출하는 방식으로 작업해도 되지만 해당 데이터베이스에는 데이터가 없기때문에 ```yarn test```를 
통해 올바르게 작업이 진행되고 있는지 확인하면서 진행하는 것을 추천드립니다.

8. 모든 준비가 완료되었으니 개발을 시작합니다.

[jest](https://jestjs.io/)를 사용하고 있으며,  
jest의 사용방법은 해당 문서를 참고해주시면됩니다.

