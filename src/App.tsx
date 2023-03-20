import React from 'react'
import Button from './components/Button'
import { ButtonSize, ButtonType } from './components/Button/button'
const App: React.FC = () => {
    return (<div>
        <Button btnType="primary" size="large" disabled>Primarydisabled按钮</Button>
        <Button btnType="primary" size="large">Primary按钮</Button>
        <Button btnType="default" disabled>default按钮</Button>
        <Button btnType="danger" size="small">Danger按钮</Button>
        <Button btnType="link" href="javascript:;">文字按钮</Button>
    </div>)
}

export default App