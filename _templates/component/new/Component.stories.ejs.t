---
to: src/components/<%= component %>/<%= component %>.stories.mdx
---
import { Meta, Story } from "@storybook/addon-docs";
import <%= component %> from './<%= component %>';

<Meta title="<%= component %>" component={<%= component %>} />

<Story name="Default">
  <<%= component %> />
</Story>
