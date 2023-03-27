import {
    extendTheme,
} from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#4D4D4D", 
      200: "#B46060", 
      300: "#FFBF9B",
      400: "#FFF4E0",
    },
  },
  styles: {
    global: {
      fonts: {
        body: `'Raleway', sans-serif`,
      },
      "html, body": {
        color: "brand.100",
        lineHeight: "tall",
        bg: "brand.400",
      },
      "header": {
        bg: "brand.200",
        color: "brand.400",
      },
      a: {
        display: "flex",
        alignItems: "center",
        variants: {
          navi: {
            color: "brand.400",
          },
          pagelink: {
            color: "brand.300",
          },
        },
      },
    },
  },
});

