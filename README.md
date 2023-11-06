## React로 TODO LIST 구현

- Dark Mode 지원
- TODO 추가
- TODO 삭제
- TODO 필터링

## List 고유 키 - UUID

**[설치]**

`yarn add uuid`

## icons

`yarn add react-icons`

## DarkMode 값 LocalStorage에 기록

**[문제]**
처음 App을 실행했을 때, 사용자가 다크모드로 사용 했다면 다크모드로 App을 실행 시키고 싶다.

**[해결 방법]**

1. 먼저 다크모드 사용 기록을 남겨야 한다.
   → localStorage에 기록한다. `localStorage.theme = 'dark'`
2. App 실행 시 딱 한번만 LocalStorage의 theme 값을 읽어와서 기존 사용 기록 확인 필요하다.
   → `uesEffect` 를 dependency 없이 사용하면 된다.
