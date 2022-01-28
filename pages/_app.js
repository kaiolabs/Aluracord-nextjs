function GlobalStyle() {
  return (
    <style global jsx>{`
          
    /* -------------------------------------------------------------------------- */

    *::-webkit-scrollbar {
        width: 12px;
      }
      
    *::-webkit-scrollbar-track {
        background: #282A35;
      }
      
    *::-webkit-scrollbar-thumb {
        background-color: #5AD7FF;
        border-radius: 20px;
        border: 3px solid #282A35;
      }

    /* -------------------------------------------------------------------------- */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      
      scrollbar-width: thin;
      scrollbar-color: #5AD7FF #282A35;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
    /* App fit Height */ 
    html, body, #__next {
      min-height: 100vh;
      display: flex;
      flex: 1;
    }
    #__next {
      flex: 1;
    }
    #__next > * {
      flex: 1;
    }
    /* ./App fit Height */ 
  `}</style>
  );
}

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
