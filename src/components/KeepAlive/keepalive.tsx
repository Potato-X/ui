import React, { useCallback, useReducer, createContext, useState, useMemo, useRef } from "react";

interface IKeepAliveProps {
    children: React.ReactNode,
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
    const { children } = props
    const [state, setState] = useState<IrefType>({})
    // const cacheRef = useRef()
    const keep = (id: string, children: React.ReactNode) => {
        setState(state=>{
            return {
                ...state,
                [id]:{id,children}
            }
        })
    }

    return (
        <context.Provider value={{ keep }}>
            {children}
            {
                Object.values(state).map(({ id, children }) => {
                    return (
                        <div key={id} ref={(node) => { console.log('node=>', node) }}>
                            {children}
                        </div>
                    )
                })
            }
        </context.Provider>
    )
}


export default KeepAlive