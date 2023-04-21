import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
const meta: Meta<typeof Input> = {
    title: 'EVIL/Input',
    component: Input,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '224px' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ]
}

export default meta;
type Story = StoryObj<typeof meta>;

export const 基础用法: Story = {
    // args: {
    //     children: 'Primary',
    // },

};
export const 禁用状态: Story = {
    args: {
        disabled: true
    },
};
export const 密码输入框: Story = {
    args: {
        type:'password',
        clearable:true,
    },
};
export const 可清空的输入框: Story = {
    args: {
        clearable: true,
        suffixIcon: "icon-date",
    },
};
export const 带icon的输入框: Story = {
    args: {
        suffixIcon: "icon-circle-close",
        prefixIcon: "icon-date"
    },
};
/**
 * ##### 带有图标标记输入类型
 */
export const 传入icon组件的输入框: Story = {
    args: {
        suffixIcon: <i className='iconfont icon-circle-close'></i>,
        prefixIcon: <i className='iconfont icon-date'></i>,
    },
};
