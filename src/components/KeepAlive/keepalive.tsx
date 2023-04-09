import React, { useReducer } from "react";

interface IKeepAlive {
    children: React.ReactNode
}
const KeepAlive: React.FC<IKeepAlive> = (props) => {
    return <div></div>
}

export default KeepAlive