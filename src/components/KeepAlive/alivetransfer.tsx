import React, { useContext, useEffect, useRef } from "react";
interface IAliveTransferProps {
    children: React.ReactNode;
    id: string;
}
const AliveTransfer: React.FC<IAliveTransferProps> = (props) => {
    const { children, id } = props
    useEffect(() => {
    }, [id])
    return <div ></div>
}

export default AliveTransfer