export const theme = {
  colors: {
    background: {
      green: "green",
      crimson: "crimson",
    },
  },
};

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
