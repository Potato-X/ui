import React from 'react'
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
type animation = "zoom-in-top" | "zoom-in-right" | "zoom-in-bottom" | "zoom-in-left";
interface ITransitionProps {
    AnimationName: animation
    timeout?: number;
    children: React.ReactNode;
    unmountOnExit?: boolean;
    visible?: boolean;
}
type TransitionProps = Partial<CSSTransitionProps & ITransitionProps>
const Transition: React.FC<TransitionProps> = (props) => {
    const { children, timeout, className, unmountOnExit, visible, AnimationName } = props
    function addEndListenerHandler() {

    }
    return (
        <CSSTransition
            in={visible}//为true进入显示组件（主要通过in属性来控制组件状态）
            classNames={className ? className : AnimationName}//设置类名的前缀
            timeout={timeout}//设置过渡动画事件
            unmountOnExit={unmountOnExit}//消失动画结束后 + display:none
            addEndListener={addEndListenerHandler}
        >
            {children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    timeout: 1000,
    unmountOnExit: true,
    visible: true,
    AnimationName:'zoom-in-top'
}

export default Transition