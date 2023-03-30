import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import { Context } from './tabs'
export interface ITabsItemProps {
    className?: string;
    children?: React.ReactNode;
    label: string;
    itemKey: string
}

const TabsItem: React.FC<ITabsItemProps> = (props) => {
    const { activeKey, getActiveItemChildren, init } = useContext(Context)
    const { children, className, label, itemKey } = props
    const classes = classNames('evil-tabs-item', className, {
        'is-active': activeKey === itemKey
    })
    function selectItem() {
        console.log(`activeKey:${activeKey},itemKey:${itemKey}`)
        getActiveItemChildren(itemKey)
    }
    // useEffect(() => {
    //     console.log(caches)
    //     init(caches)
       
    // }, [])
    useEffect(() => {
        init(itemKey,children)
        if (activeKey === itemKey) {
            getActiveItemChildren(itemKey)
        }
    },[])
    return (
        <li className={classes} onClick={selectItem}>
            {label}
        </li>
    )
}

TabsItem.displayName = "TabsItem"
export default TabsItem