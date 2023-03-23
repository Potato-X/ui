import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Context } from './menu'
interface IMenuItemProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
}
const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const { children, style, className, disabled } = props
    const { defaultIndex, initItemIndex,selectItem } = useContext(Context)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        // console.log(222222,initItemIndex())
        setIndex(initItemIndex())
    }, [])
    const classes = classNames('evil-menu-item', className, {
        'is-disabled': disabled,
        'active': index === defaultIndex
    })
    function selectHandler(){
        selectItem(index)
    }
    return (
        <li style={style} className={classes} onClick={selectHandler}>
            {children}
        </li>
    )
}

export default MenuItem