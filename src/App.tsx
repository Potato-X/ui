import React from 'react'
import Button from './components/Button'
import Alert from "./components/Alert/alert"
import { Menu, MenuItem, SubMenu } from './components/Menu'
const App: React.FC = () => {
    function clickHandler(event: React.MouseEvent) {
        console.log(event)
    }
    function clicklink(event: React.MouseEvent) {
        console.log('link')
    }
    function getSelectItem(index: number|string) {
        console.log(`这是点击的第${index}个`)
    }
    return (<div>
        <Button btnType="primary" size="large" disabled>Primarydisabled按钮</Button>
        <Button btnType="primary" size="large" autoFocus>Primary按钮</Button>
        <Button btnType="default" disabled>default按钮</Button>
        <Button btnType="danger" size="small" onClick={clickHandler}>Danger按钮</Button>
        <Button btnType="link" disabled onClick={clicklink}>文字按钮</Button>
        <hr />
        <Alert closable type='success' description='这是一个简单的小测试'>success:没有标题的孤儿?</Alert>
        <div style={{ margin: '8px' }}></div>
        <Alert closable title='主题' type='success' description='这是一个简单的小测试'>success:我是插槽,我说了算,你这个description算老几?</Alert>
        <div style={{ margin: '8px' }}></div>
        <Alert title='主题' type='warning' description='这是一个简单的小测试'>warning:我是插槽,我说了算,你这个description算老几?</Alert>
        <div style={{ margin: '8px' }}></div>
        <Alert closable title='主题' type='info' description='这是一个简单的小测试'>info:我是插槽,我说了算,你这个description算老几?</Alert>
        <div style={{ margin: '8px' }}></div>
        <Alert title='主题' type='error' description='这是一个简单的小测试'>error:我是插槽,我说了算,你这个description算老几?</Alert>
        <hr />
        <Menu defaultIndex={'4-0'} onSelect={getSelectItem} mode="vertical">
            <MenuItem>苹果</MenuItem>
            <MenuItem disabled>梨子</MenuItem>
            <MenuItem>橙子</MenuItem>
            <MenuItem>西瓜</MenuItem>
            <SubMenu title='水果' expand>
                <MenuItem>山竹</MenuItem>
                <MenuItem>葡萄</MenuItem>
                <MenuItem>荔枝</MenuItem>
            </SubMenu>
        </Menu>
    </div>)
}

export default App