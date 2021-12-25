---
to: src/components/<%= component %>/<%= component %>.tsx
---
import { useTheme } from "@emotion/react";
import { FunctionComponent } from "react";
import <%= component %>Styles from './<%= component %>.styles';

export type <%= component %>Props = {};

const <%= component %>: FunctionComponent<<%= component %>Props> = ({}) => {
	const theme = useTheme();

	return <></>;
};

export default <%= component %>;
