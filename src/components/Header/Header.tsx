import { useTheme } from "@emotion/react";
import { FunctionComponent } from "react";
import HeaderStyles from "./Header.styles";

type HeaderProps = {};

const Header: FunctionComponent = () => {
  const theme = useTheme();
  return <div css={HeaderStyles.main(theme)}>Header</div>;
};

export default Header;
