import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductHeader } from './ProductHeader';

export default {
  title: 'Example/ProductHeader',
  component: ProductHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProductHeader>;

const Template: ComponentStory<typeof ProductHeader> = (args) => <ProductHeader {...args} />;

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
