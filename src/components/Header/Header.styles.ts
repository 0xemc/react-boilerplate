import { css, Theme } from "@emotion/react";

const HeaderStyles = {
  main: (theme: Theme) => css`
    padding: 27px 80px;
    color: white;
    background: ${theme.colors.primary};
    width: 100%;
  `,
};

export default HeaderStyles;
