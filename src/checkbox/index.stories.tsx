import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '.';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: false },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <div lang="pt-BR"><Checkbox {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Isso é um checkbox',
};

