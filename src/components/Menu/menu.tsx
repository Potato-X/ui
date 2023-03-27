import React, { createContext, useState, cloneElement } from 'react'
import classNames from 'classnames';
import { IMenuItemProps } from './menuItem'
import { ISubMenuProps } from './submenu'

type ModeType = 'vertical' | 'horizontal'
interface IMenuProps {
    children: React.ReactNode | React.ReactNode[];
    onSelect?: (index: number) => void;
    defaultIndex?: number;
    mode?: ModeType;
    style?: React.CSSProperties;
    className?: string
}

interface IProvider {
    defaultIndex: number,
    selectItem: (index: number) => void;
}
const Provider: IProvider = {
    defaultIndex: 0,
    selectItem: (index) => {

    }
}
export const Context = createContext(Provider)
let index = 0
const Menu: React.FC<IMenuProps> = (props) => {

    const { children, onSelect, defaultIndex, mode, style, className } = props
    const [currentIndex, setCurrentIndex] = useState(defaultIndex ?? 0)
    const classes = classNames('evil-menu', className, {
        [`evil-menu-${mode}`]: true
    })
    function selectItem(index: number) {
        setCurrentIndex(index)
        onSelect && onSelect(index)
    }
    function renderChildren() {
        return React.Children.map(children, (child, index) => {
            let childEl = child as React.FunctionComponentElement<IMenuItemProps | ISubMenuProps>
            const { displayName } = childEl.type
            // console.log(childEl.type.displayName)
            if (displayName == 'MenuItem' || displayName == 'SubMenu') {
                return cloneElement(childEl, { index })
            } else {
                console.error("当前Menu组件的子组件不是MenuItem或者SubMenu")
            }
        })
    }
    return (
        <Context.Provider value={{ defaultIndex: currentIndex, selectItem }}>
            <ul style={style} className={classes}>
                {renderChildren()}
            </ul>
        </Context.Provider>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu