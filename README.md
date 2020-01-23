# Next JS Starter

- Next@9.2
- Styled-Components@5
- Typscript
- Context API
- Husky
- Eslint
- Prettier

## 폴더 구조

```text
.
+-- pages: route 단위의 페이지
|   +-- _app.tsx: 공통 Application Container
|   +-- _document.tsx: Custom 한 Document 를 처리합니다 (head, body 등)
|   +-- _error.tsx : 공통 에러 페이지
|   +-- *.tsx: route 단위의 페이지 컴포넌트 (ex. <path>/todo -> todo.tsx)
+-- src: 컴포넌트 조각들
|   +-- design-system: 디자인 시스템 구성요소 (theme, atom, molecules 등 아토믹한 구조를 가집니다)
|   +-- helper: helper 함수
|   +-- <관심사 단위의 폴더 구조>
|   +-- *.tsx: 공통 컴포넌트
+-- .babelrc: babel 설정
+-- .eslintrc: eslint 설정
+-- .prettier: prettier 설정
+-- .editorconfig: editor 설정
+-- .tsconfig: typescript 설정
```

## 테마

Styled-Component 의 Theme Provider 를 이용하여 theme set 을 주입받습니다.

테마는 아래와 같은 모양을 가집니다.

#### 테마 구조

```js
fontSize: {},
colors: {},
```

#### 사용 예제

```js
/* 
  아래와 같이 ThemeProvider 를 사용한다면 모든 styled component 내부에는 prop 으로 theme 가 내려옵니다.
*/
function App() {
  return (
    <ThemeProvider>
      <Container {...pageProps} />
    </ThemeProvider>
  )
}

const Container = steyld.div`
 ${(
   { bg, theme }, // theme: { fontSize: {}, colors: {} }
 ) =>
   bg &&
   theme.colors[bg] &&
   css`
     background-color: ${theme.colors[bg]};
   `}
`
```
