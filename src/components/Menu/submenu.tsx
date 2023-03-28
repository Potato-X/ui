import React, { useContext, useState, MouseEvent, useEffect } from "react";
import classNames from "classnames";
import { Context } from './menu'
import { IMenuItemProps } from './menuItem'
export interface ISubMenuProps {
    index?: number;
    title: string;
    className?: string;
    children: React.ReactNode;
    expand?: boolean;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
    const { index, title, className, children, expand } = props;
    const { defaultIndex, selectItem, mode } = useContext(Context)
    const [menuOpen, setMenuOpen] = useState(false)
    const classes = classNames('evil-menu-item sub-menu', className, {
        'active': index === defaultIndex
    })
    function selectHandler() {
        if (typeof index === 'number') {
            selectItem(index)
        }
    }
    let timer: any = null
    function MouseMove(event: MouseEvent, toggle: boolean) {

        if (timer) {
            clearTimeout(timer)
        }
        event.preventDefault()
        timer = setTimeout(() => {
            setMenuOpen(toggle)
        }, 50);

    }
    function handleClick(event: MouseEvent) {
        event.preventDefault();
        setMenuOpen(!menuOpen)
    }
    let MouseHover = mode == "horizontal" ? {
        onMouseEnter: (event: MouseEvent) => MouseMove(event, true),
        onMouseLeave: (event: MouseEvent) => MouseMove(event, false),
    } : {}
    let MouseClick = mode == "vertical" ? {
        onClick: handleClick
    } : {}
    function renderChildren() {
        const subMenuClasses = classNames('evil-submenu-list', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childEl = child as React.FunctionComponentElement<IMenuItemProps>
            const { displayName } = childEl.type
            if (displayName === 'MenuItem') {
                return React.cloneElement(childEl, {
                    index: `${index}-${i}`
                })
            } else {
                console.error("当前Menu组件的子组件不是MenuItem")
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }
    useEffect(() => {
        if (mode == "vertical") {
            setMenuOpen(expand!)
        }
    }, [])
    return (
        <li key={index} className={classes} onClick={selectHandler}  {...MouseHover}>
            <div className="submenu-title" {...MouseClick}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = "SubMenu"
SubMenu.defaultProps = {
    expand: false
}
export default SubMenu