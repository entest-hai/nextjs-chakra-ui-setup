import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config }) 

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}>
      </Component>
    </ChakraProvider>
  );
}

