import React, { useCallback, useReducer, createContext, useState, useMemo } from "react";

interface IKeepAliveProps {
    children: React.ReactNode
}
interface IContext {
    keep: (id: string, children: React.ReactNode) => void
}
export const context = createContext<IContext>({
    keep: function (id: string, children: React.ReactNode) {

    }
})
interface IrefObject {
    id: string;
    children: React.ReactNode
}
interface IrefType {
    [id: string]: IrefObject
}
const KeepAlive: React.FC<IKeepAliveProps> = (props) => {
    const [state, setState] = useState<IrefType>({})
    const ref: IrefType = useMemo(() => {
        return {}
    }, [])
    const keep = useCallback((id: string, children: React.ReactNode) => {
        new Promise((resolve) => {
            setState((state) => {
                return {
                    ...state,
                    [id]: { id, children }
                }
            })
            setImmediate(() => {
                resolve(ref[id])
            })
        })
    }, [ref])

    return (
        <context.Provider value={{ keep }}>
            {
                Object.values(state).map(({ id, children }) => {
                    return (
                        <div key={id} ref={(node) => { ref[id] = node }}>
                            {children}
                        </div>
                    )
                })
            }
        </context.Provider>
    )
}


export default KeepAlive