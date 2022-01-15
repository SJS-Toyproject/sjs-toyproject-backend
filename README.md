# sjs-toyproject-backend

## DB ERD

![DB ERD](./sjs-proj-db-erd.png)

## Commit Message Convention for SJS Project

-   첫 글자는 소문자로 한다.
-   type은 다음과 같이 정한다.

    | 이름   | 내용                                | 예시                        |
    | ------ | ----------------------------------- | --------------------------- |
    | add    | 새로운 코드가 추가되었을 때         | add: 기능 추가              |
    | update | 코드가 수정되었을 때                | update: 코드 수정           |
    | remove | 코드가 삭제되었을 때                | remove: 코드 삭제           |
    | test   | 테스트 코드가 추가되었을 때         | test: 기능 테스트           |
    | rename | 파일 이름 및 폴더명이 변경되었을 때 | rename: project 폴더명 변경 |
    | docs   | 문서파일 생성 및 변경되었을 때      | docs: README 파일 수정      |

## Test Database setup

Edit `ormconfig.ts` for your local computer setting.

```
  username: process.env.DB_USERNAME || 'user_name',
  password: process.env.DB_PASSWORD || 'user_password',
  database: process.env.DB_NAME || 'db_name',
```
