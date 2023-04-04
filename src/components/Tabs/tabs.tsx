import React, { cloneElement, createContext, useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { ITabsItemProps } from './tabsItem'
import { KeepAlive, AliveTransfer } from "../KeepAlive";
type ModeType = "vertical" | "horizontal"

interface ITabsProps {
    mode?: ModeType;
    children: React.ReactNode;
    className?: string;
    activeKey: string;
    onChange?: (activeKey: string) => void
}
interface Icaches {
    [key: string]: React.ReactNode
}
interface IContext {
    activeKey: string;
    caches: Icaches;
    getActiveItemChildren: (key: string) => void;
    init: (key: string, children: React.ReactNode) => void
}
const TabsContext: IContext = {
    activeKey: "",
    caches: {},
    getActiveItemChildren: (key: string) => { },
    init: (key: string, children: React.ReactNode) => { }
}
export let Context = createContext<IContext>(TabsContext)
const Tabs: React.FC<ITabsProps> = (props) => {

    const { mode, children, className, activeKey, onChange } = props
    const TablistRef = useRef<Icaches>({})
    const [activeIndex, setActiveIndex] = useState(activeKey)
    const [caches, setCaches] = useState<Icaches>({})
    const classes = classNames('evil-tabs', className, {

    })
    const tablistClasses = classNames("evil-tabs-list", `evil-tabs-list--${mode}`, {})
    function renderChildren() {
        const TabsItemList = React.Children.map(children, (child: React.ReactNode, index) => {
            const childEl = child as React.FunctionComponentElement<ITabsItemProps>
            if (childEl.type.displayName == 'TabsItem') {
                return cloneElement(childEl, { ...childEl.props })
            } else {
                console.error('当前Tabs组件的子组件应该是TabsItem')
            }
        })
        return TabsItemList
    }
    function getActiveItemChildren(key: string) {
        console.log(key)
        setActiveIndex(key)
        onChange && onChange(key)
    }
    function initItem(key: string, children: React.ReactNode) {
        console.log(key, children)
        // TabsContext.caches[key] = children
        TablistRef.current[key] = children
        // setCaches(TabsContext.caches)

    }
    useEffect(() => {
        setCaches(TablistRef.current)
        console.log(caches)
    }, [activeIndex])
    return (
        <div className={classes}>
            <Context.Provider value={{ activeKey: activeIndex, getActiveItemChildren, caches: caches, init: initItem }}>
                <ul className={tablistClasses}>
                    {renderChildren()}
                </ul>
            </Context.Provider>
            <div className="tab-content">
                <KeepAlive>
                    <AliveTransfer>
                        {caches[activeIndex]}
                    </AliveTransfer>
                </KeepAlive>
            </div>
        </div>
    )
}

Tabs.defaultProps = {
    mode: "horizontal"
}

export default Tabs