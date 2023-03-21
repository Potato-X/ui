import React, { useState } from 'react'
import classNames from 'classnames'
type alertType = "success" | "warning" | "info" | "error"
interface IAlertProps {
    title: string;
    type: alertType;
    description: string;
    children: React.ReactNode;
    closable: boolean;
    close: Function,
    className: string
}
const Alert: React.FC<Partial<IAlertProps>> = (props) => {
    const [closeState, setCloseState] = useState(false)
    const { title, className, children, type, description, closable, close } = props
    const classes = classNames('evil-alert', className, {
        [`evil-alert-${type}`]: true,
        [`evil-alert-hastitle`]: !title
    })
    function closeHandler(event: React.MouseEvent) {
        setCloseState(true);
    }
    return (
        <>
            {
               !closeState&&<div className={classes}>
                    {closable && <i className='icon-close' onClick={closeHandler}>x</i>}
                    {title && <span className='evil-alert-title'>{title}</span>}
                    <p>{children || description}</p>
                </div>
            }
        </>
    )
}

Alert.defaultProps = {
    type: 'info'
}

export default Alert