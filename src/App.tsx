import React, { useState } from 'react'
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
    function getSelectItem(index: number | string, keyInfo: any) {
        console.log(`这是点击的第${index}个，信息内容：${JSON.stringify(keyInfo)}`,)
    }
    const menuList = [
        { name: '苹果', id: 'apple' },
        { name: '梨子', id: 'pear' },
        { name: '橙子', id: 'orange' },
        { name: '西瓜', id: 'watermalen' },
        { name: '水果', id: 'froute', children: [{ name: '山竹', id: 'shanzhu' }, { name: '葡萄', id: 'putao' }, { name: '荔枝', id: 'lizhi' }] },
        { name: '蔬菜', id: 'vigetables', children: [{ name: '土豆', id: 'potato' }, { name: '番茄', id: 'tomato' }, { name: '水稻', id: 'rice' }] }
    ]
    function renderMenu() {
        return menuList.map((item, index) => {
            if (item.children) {
                return (
                    <SubMenu title={item.name} key={item.id}>
                        {item.children.map((i) => {
                            return <MenuItem keyInfo={i} key={i.id}>{i.name}</MenuItem>
                        })}
                    </SubMenu>
                )
            } else {
                return (
                    <MenuItem key={item.id} keyInfo={item}>{item.name}</MenuItem>
                )
            }
        })
    }
    return (<div>
        <div>
            <Button btnType="primary" size="large" disabled>Primarydisabled按钮</Button>
            <Button btnType="primary" size="large">Primary按钮</Button>
            <Button btnType="default">default按钮</Button>
            <Button btnType="danger" size="small" onClick={clickHandler}>Danger按钮</Button>
            <Button btnType="link" disabled onClick={clicklink}>文字按钮</Button>
        </div>
        <hr />
        <div>

            <Alert closable type='success' description='这是一个简单的小测试'>success:没有标题的孤儿?</Alert>
            <div style={{ margin: '8px' }}></div>
            <Alert closable title='主题' type='success' description='这是一个简单的小测试'>success:我是插槽,我说了算,你这个description算老几?</Alert>
            <div style={{ margin: '8px' }}></div>
            <Alert title='主题' type='warning' description='这是一个简单的小测试'>warning:我是插槽,我说了算,你这个description算老几?</Alert>
            <div style={{ margin: '8px' }}></div>
            <Alert closable title='主题' type='info' description='这是一个简单的小测试'>info:我是插槽,我说了算,你这个description算老几?</Alert>
            <div style={{ margin: '8px' }}></div>
            <Alert title='主题' type='error' description='这是一个简单的小测试'>error:我是插槽,我说了算,你这个description算老几?</Alert>
        </div>
        <hr />
        <Menu defaultIndex={'4-0'} onSelect={getSelectItem} mode="horizontal">
            {renderMenu()}
            {/* <MenuItem keyInfo={{ name: '苹果', id: 'apple' }}>苹果</MenuItem>
            <MenuItem disabled keyInfo={{ name: '梨子', id: 'pear' }}>梨子</MenuItem>
            <MenuItem keyInfo={{ name: '橙子', id: 'orange' }}>橙子</MenuItem>
            <MenuItem keyInfo={{ name: '西瓜', id: 'watermalen' }}>西瓜</MenuItem>
            <SubMenu title='水果' expand>
                <MenuItem keyInfo={{ name: '山竹', id: 'shanzhu' }}>山竹</MenuItem>
                <MenuItem keyInfo={{ name: '葡萄', id: 'putao' }}>葡萄</MenuItem>
                <MenuItem keyInfo={{ name: '荔枝', id: 'lizhi' }}>荔枝</MenuItem>
            </SubMenu> */}
        </Menu>
    </div>)
}

export default App