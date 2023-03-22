import React from "react";
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from "./button";

const defaultProps = {
    onClick: jest.fn()
}

const testProps1: ButtonProps = {
    className: 'test',
    disabled: true,
    size: 'large',
    btnType: 'primary',
    onClick: jest.fn()
}
const testProps2: ButtonProps = {
    className: 'test',
    disabled: true,
    size: 'large',
    btnType: 'link',
    onClick: jest.fn()
}
describe('test Button component', () => {
    it('should render correct default Button', () => {
        const wrapper = render(<Button {...defaultProps}>NICE</Button>)
        const element = wrapper.getByText('NICE') as HTMLButtonElement
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps1}>NICE</Button>)
        const element = wrapper.getByText('NICE') as HTMLButtonElement
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-lg btn-primary')
        expect(element).toHaveClass('btn btn-lg btn-primary')
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(testProps1.onClick).not.toHaveBeenCalled()
    })
    it('should render a Link when btnType equals link and href is proved', () => {
        const wrapper = render(<Button {...testProps2}>NICE</Button>)
        const element = wrapper.getByText('NICE') as HTMLAnchorElement
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-lg btn-link disabled')
        fireEvent.click(element)
        // expect(element.style.pointerEvents).toBeDisabled()
    })
})