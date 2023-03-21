import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import Transition from '../Transition/Transition';
type alertType = "success" | "warning" | "info" | "error"
interface IAlertProps {
    title: string;
    type: alertType;
    description: string;
    children: React.ReactNode;
    closable: boolean;
    onClose: Function,
    className: string
}
const Alert: React.FC<Partial<IAlertProps>> = (props) => {
    const [closeState, setCloseState] = useState(true)
    const alertRef = useRef(null)
    const { title, className, children, type, description, closable, onClose } = props
    const classes = classNames('evil-alert', className, {
        [`evil-alert-${type}`]: true,
        [`evil-alert-hastitle`]: !title
    })
    function closeHandler(event: React.MouseEvent) {
        onClose && onClose()
        setCloseState(false);
    }
    return (
        <Transition nodeRef={alertRef} visible={closeState}>
            <div ref={alertRef} className={classes}>
                {closable && <i className=' iconfont icon-close' onClick={closeHandler}></i>}
                {title && <span className='evil-alert-title'>{title}</span>}
                <p>{children || description}</p>
            </div>
        </Transition>
    )
}

Alert.defaultProps = {
    type: 'info'
}

export default Alert