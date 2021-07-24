import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AlurakutStyles } from "../src/lib/AlurakutCommons";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    // background-color: #ffd1dc;
    background-image: url('https://github.com/samantafluture/alurakut/blob/aula2/src/assets/bg-gradient-blue-pink.png?raw=true');
    background-size: cover;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`;

const theme = {
  colors: {
    corPrimaria: "#d0d0d0",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Devkut</title>
          <link
            rel="shortcut icon"
            href="https://raw.githubusercontent.com/samantafluture/alurakut/aula5/public/favicon-devkut.ico"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
