import {
    extendTheme,
} from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#4D4D4D", //#\ bl
      200: "#DA0037", //# gr
      300: "#444444", //#
      400: "#171717", //#171717
      500: "white",
    },
  },
  styles: {
    global: {
      fonts: {
        body: `'Raleway', sans-serif`,
      },
      "html, body": {
        color: "white",
        lineHeight: "tall",
        bg: "brand.400",
      },
      "header, footer": {
        bg: "brand.200",
        color: "brand.300",
      },
      a: {
        display: "flex",
        alignItems: "center",
        variants: {
          navi: {
            color: "brand.100",
          },
          pagelink: {
            color: "brand.300",
          },
        },
      },
    },
  },
});

