import { createGlobalStyle } from 'styled-components'

export const Clearfix = createGlobalStyle`
  * {
    box-sizing: border-box;

    transition-property: none;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }

  html {
    user-select: none;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    font-size: 16px;
    background-color: hsl(0 0% 92%);
  }

  html,
  input,
  button {
    line-height: 1;
  }

  html, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button,
  ol,
  ul,
  li,
  figure,
  p {
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;

    margin: 0 auto;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  input,
  textarea,
  button {
    resize: none;
    font-size: 1rem;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    outline: 0;
  }

  input,
  textarea {
    width: 100%;
    height: 100%;

    outline: none;
    color: currentColor;
  }
`
