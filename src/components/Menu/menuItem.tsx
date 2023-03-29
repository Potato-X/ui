import React, { useContext,MouseEvent } from 'react'
import classNames from 'classnames'
import { Context } from './menu'
export interface IMenuItemProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    index?: string | number;
    keyInfo:any;
    parentIndex?:string | number;
}
const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const { children, style, className, disabled, index,keyInfo,parentIndex } = props
    const { defaultIndex, selectItem } = useContext(Context)
    const classes = classNames('evil-menu-item', className, {
        'is-disabled': disabled,
        'active': index === defaultIndex
    })
    function selectHandler(event:MouseEvent) {
        event.stopPropagation()
        if (typeof index === 'number') {
            selectItem(index,keyInfo,)
        } else if (typeof index === 'string') {
            selectItem(index,keyInfo)
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