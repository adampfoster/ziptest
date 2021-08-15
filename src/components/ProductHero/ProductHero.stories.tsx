import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductHero } from "./ProductHero";

export default {
  title: "Example/ProductHero",
  component: ProductHero,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProductHero>;

const Template: ComponentStory<typeof ProductHero> = (args) => (
  <ProductHero {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
