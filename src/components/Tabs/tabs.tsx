import React, { createContext } from "react";
import classNames from "classnames";

type ModeType = "vertical" | "horizontal"

interface ITabsProps {
    mode?: ModeType
}

const Tabs: React.FC<ITabsProps> = (props) => {
    return (
        <div></div>
    )
}

Tabs.defaultProps = {
    mode: "horizontal"
}

export default Tabs