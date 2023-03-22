import React from 'react'
import Button from './components/Button'
import { ButtonSize, ButtonType } from './components/Button/button'
import Alert from "./components/Alert/alert"
const App: React.FC = () => {
    function clickHandler(event:React.MouseEvent){
        console.log(event)
    }
    function clicklink(event:React.MouseEvent){
        console.log('link')
    }
    return (<div>
        <Button btnType="primary" size="large" disabled>Primarydisabled按钮</Button>
        <Button btnType="primary" size="large" autoFocus>Primary按钮</Button>
        <Button btnType="default" disabled>default按钮</Button>
        <Button btnType="danger" size="small" onClick={clickHandler}>Danger按钮</Button>
        <Button btnType="link" disabled onClick={clicklink}>文字按钮</Button>
        <hr />
        <Alert closable type='success' description='这是一个简单的小测试'>success:没有标题的孤儿?</Alert>
        <div style={{margin:'8px'}}></div>
        <Alert closable title='主题' type='success' description='这是一个简单的小测试'>success:我是插槽,我说了算,你这个description算老几?</Alert>
        <div style={{margin:'8px'}}></div>
        <Alert title='主题' type='warning' description='这是一个简单的小测试'>warning:我是插槽,我说了算,你这个description算老几?</Alert>
        <div style={{margin:'8px'}}></div>
        <Alert closable title='主题' type='info' description='这是一个简单的小测试'>info:我是插槽,我说了算,你这个description算老几?</Alert>
        <div style={{margin:'8px'}}></div>
        <Alert title='主题' type='error' description='这是一个简单的小测试'>error:我是插槽,我说了算,你这个description算老几?</Alert>
    </div>)
}

export default App