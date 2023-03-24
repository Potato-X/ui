import React, { createContext, useState } from 'react'
import classNames from 'classnames';
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
    initItemIndex: () => number;
    selectItem: (index: number) => void;
}
const Provider: IProvider = {
    defaultIndex: 0,
    initItemIndex: () => 0,
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
    function initItemIndex() {
        return ++index
    }
    function selectItem(index: number) {
        setCurrentIndex(index)
        onSelect && onSelect(index)
    }
    return (

        <ul style={style} className={classes}>
            <Context.Provider value={{ defaultIndex: currentIndex, initItemIndex: initItemIndex, selectItem }}>
                {children}
            </Context.Provider>
        </ul >

    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu