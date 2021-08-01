import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CheckboxInput } from '.';

export default {
  title: 'Design System/CheckboxInput',
  component: CheckboxInput,
  argTypes: {
    checked: { control: false },
  },
} as ComponentMeta<typeof CheckboxInput>;

const Template: ComponentStory<typeof CheckboxInput> = (args) => <div lang="pt-BR"><CheckboxInput {...args} /></div>;

export const Basic = Template.bind({});
Basic.args = {
  id: 'checkbox-input-example',
  label: 'Isso é um checkbox',
  onChange: () => console.log('onChange called'),
};

