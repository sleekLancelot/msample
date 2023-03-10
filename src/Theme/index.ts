import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#fff",
          color: '#000',
        },
        fonts: {
          heading: `'poppins', sans-serif`,
          body: `'montserrat', sans-serif`,
        },
      },
    },
  });