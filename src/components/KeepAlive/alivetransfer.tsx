import React, { useContext, useEffect } from "react";
import { context } from './keepalive'
interface IAliveTransferProps {
    children: React.ReactNode;
    id:string;
}
const AliveTransfer: React.FC<IAliveTransferProps> = (props) => {
    const { keep } = useContext(context)
    const { children,id } = props
    keep(id,children)
    return <>{children}</>
}

export default AliveTransfer