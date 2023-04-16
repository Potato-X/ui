import React,{FC} from "react";
import classNames from 'classnames'
// export type ButtonSize = "large" | "small"
// export type ButtonType = "primary" | "default" | "danger" | "link"

interface IBaseButtonProps {
    /**自定义样式名字*/
    className?: string; 
    /**是否禁用按钮 */
    disabled?: boolean;
    size?: "large" | "small";
    /**按钮类型 */
    btnType?: "primary" | "default" | "danger" | "link";
    /**插槽内容 */
    children: React.ReactNode;
    /**按钮类型为link类型时，点击按钮后的链接跳转 */
    href?: string
}
type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> //获取button所有的原生属性
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement> //获取a标签所有的原生属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * #### 引入组件
 * 
 * ```
 * import Button from 'evil'
 * ```
 */
export const Button: FC<ButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        className,
        href,
        ...restProps
    } = props

    const classes = classNames('btn', className, {
        [`btn-${size == 'large' ? 'lg' : 'sm'}`]: !!size,
        [`btn-${btnType}`]: !!btnType,
        'disabled': (btnType == "link") && disabled
    })
    if (btnType === "link") {
        return (<a className={classes} href={href||"#!"} {...restProps}>{children}</a>)
    } else {
        return (<button className={classes} disabled={disabled} {...restProps}>{children}</button>)
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: "default"
}

export default Button