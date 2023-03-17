import {
    extendTheme,
} from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#EDEDED", //#\ bl
      200: "#DA0037", //# gr
      300: "#444444", //#
      400: "#171717",
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
      header: {
        bg: "brand.200",
        color: "brand.100",
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

