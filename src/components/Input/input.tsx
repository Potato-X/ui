import React, { useState, FocusEvent, useEffect, MouseEvent } from "react";
import classNames from "classnames";
export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
    className?: string;
    /**输入框尾部图标，支持传入jsx类型或者string类型 */
    suffixIcon?: string | React.ReactNode;
    /**输入框头部图标，支持传入jsx类型或者string类型 */
    prefixIcon?: string | React.ReactNode;
    clearable?: boolean;
    prepend?: string | React.ReactNode;
    append?: string | React.ReactNode;
    defaultValue?:string;
}
type IconType = "prefix" | "suffix"
export const Input: React.FC<IInputProps> = (props) => {
    const { defaultValue,className, suffixIcon, prefixIcon, clearable, prepend, append, ...restProps } = props
    const [inputValue, setInputValue] = useState(defaultValue)
    const [clearIconShow, setClearIconShow] = useState(false)
    const classes = classNames('evil-input', className)
    const innerInputClasses = classNames('evil-inner_input', {
        'is-disabled': restProps.disabled,
        'evil-inner_input--suffix': !!suffixIcon,
        'evil-inner_input--prefix': !!prefixIcon,
        'evil-inner_input--pend': prepend || append
    })
    function renderIcon(IconType: IconType, Icon: string | React.ReactNode, functionType?: string) {
        function clearableHandler() {
            setInputValue("")
        }
        function clickHandler(event: MouseEvent) {
            event.stopPropagation()
            if (functionType && functionType == 'clearable') {
                clearableHandler()
            }
        }
        if (!Icon) {
            return ''
        } else {
            const IconBoxClass = classNames('evil-input-icon', `${IconType}-icon`)
            if (typeof Icon === 'string') {
                const iconClass = classNames('iconfont', Icon)
                console.log('渲染')
                return (
                    <span className={IconBoxClass}>
                        <i className={iconClass} onClick={clickHandler} onMouseDown={(event) => event.preventDefault()}></i>
                    </span>
                )
            } else {
                return (
                    <span className={IconBoxClass}>
                        {Icon}
                    </span>
                )
            }
        }
    }
    function renderOutAppend(pendType: "prepend" | "append", pend: string | React.ReactNode) {
        const className = classNames('evil-pend', `evil-pend-${pendType}`)
        return <div className={className}>{pend}</div>
    }
    function onMouseEnterHandler() {
        if (inputValue) {
            setClearIconShow(true)
        } else {
            setClearIconShow(false)
        }
    }
    function onMouseLeaveHandler() {
        setClearIconShow(false)
    }
    function onBlurHandler(event: FocusEvent<HTMLElement>) {
        setClearIconShow(false)
        restProps.onBlur && restProps.onBlur(event)
    }
    useEffect(() => {
        if (inputValue) {
            setClearIconShow(true)
        } else {
            setClearIconShow(false)
        }
    }, [inputValue])
    return (
        <div className="evil-input-box">
            {prepend && renderOutAppend('prepend', prepend)}
            <div className={classes} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                {renderIcon('prefix', prefixIcon)}
                <input
                    placeholder="请输入"
                    type="text"
                    value={inputValue}
                    onChange={(event) => { setInputValue(event.target.value) }}
                    onBlur={onBlurHandler}
                    className={innerInputClasses}
                    {...restProps}
                />
                {
                    (suffixIcon || (clearable && clearIconShow)) && <span className="suffix-icon-list">
                        {renderIcon('suffix', suffixIcon)}
                        {clearable && clearIconShow && renderIcon('suffix', 'icon-circle-close', 'clearable')}
                    </span>
                }

            </div>
            {append && renderOutAppend('append', append)}
        </div>
    )
}


export default Input