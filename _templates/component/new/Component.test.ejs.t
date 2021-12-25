---
to: src/components/<%= component %>/<%= component %>.test.tsx
---
import { render, screen } from "@testing-library/react";
import <%= component %>, { <%= component %>Props } from "./<%= component %>";


const defaultProps: React.PropsWithChildren<<%= component %>Props> = {};

const result = render(<<%= component %> {...defaultProps} />);

describe('<<%= component %> />', () => {
	it('Should render correctly with the default props', () => {
		expect(screen.getByText("")).toBeInTheDocument();
	});
});
