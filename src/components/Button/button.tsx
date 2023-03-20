import React from "react";
import classNames from 'classnames'
export type ButtonSize = "large" | "small"
export type ButtonType = "primary" | "default" | "danger" | "link"

interface IBaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string
}
type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> //获取button所有的原生属性
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement> //获取a标签所有的原生属性
export type ButtonProps = NativeButtonProps & AnchorButtonProps
const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        className,
        href
    } = props

    const classes = classNames('btn', {
        className,
        [`btn-${size == 'large' ? 'lg' : 'sm'}`]: !!size,
        [`btn-${btnType}`]: !!btnType,
        'disabled': (btnType == "link") && disabled
    })
    if (btnType === "link" && href) {
        return (<a className={classes} href={href}>{children}</a>)
    } else {
        return (<button className={classes} disabled={disabled}>{children}</button>)
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: "default"
}

export default Button