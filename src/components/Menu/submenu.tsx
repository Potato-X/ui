import React, { useContext } from "react";
import classNames from "classnames";
import { Context } from './menu'
import { IMenuItemProps } from './menuItem'
export interface ISubMenuProps {
    index?: number;
    title: string;
    className?: string;
    children: React.ReactNode
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
    const { index, title, className, children } = props;
    const { defaultIndex, selectItem } = useContext(Context)
    const classes = classNames('evil-menu-item sub-menu', className, {
        'active': index === defaultIndex
    })
    function selectHandler() {
        if (typeof index === 'number') {
            selectItem(index)
        }
    }
    function renderChildren() {
        const subMenuClasses = classNames('evil-submenu-list', {
            // 'menu-opened': menuOpen
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
    return (
        <li key={index} className={classes} onClick={selectHandler}>
            <div className="submenu-title">
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = "SubMenu"
export default SubMenu