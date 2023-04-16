import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import mdx from './button.mdx'

const meta: Meta<typeof Button> = {
    title: 'EVIL/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        btnType: 'default',
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const BtnType: Story = {
    args: {
        children: 'Primary',
    },
};
// export const Size: Story = {
//     argTypes: {
//         btnType: { control: 'select', options: ["link"] },
//         href: { control: 'text' }
//     },
//     args: {
//         btnType: 'link',
//         children: 'large',
//     },
// };
