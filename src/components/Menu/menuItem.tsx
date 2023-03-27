import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Context } from './menu'
export interface IMenuItemProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    index?: string|number;
}
const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const { children, style, className, disabled, index } = props
    const { defaultIndex, selectItem } = useContext(Context)
    const classes = classNames('evil-menu-item', className, {
        'is-disabled': disabled,
        'active': index === defaultIndex
    })
    function selectHandler() {
        if (typeof index === 'number') {
            selectItem(index)
        }
    }
    return (
        <li style={style} className={classes} onClick={selectHandler}>
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem' //用于保证menu插槽的渲染一定是MenuItem子组件

export default MenuItem