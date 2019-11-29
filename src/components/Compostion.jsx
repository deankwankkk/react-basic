import React from 'react';
import { Button } from 'antd';
// 与vue的slot相似
function Dialog(props) {
    return (
        <div style={{ border: `1px solid ${props.color || "red"}` }}>{props.children}
            {props.footer}
        </div>
    )
}
// eslint-disable-next-line 
function WelCome(props) {
    return (
        <Dialog {...props}>
            <h2>h2222</h2>
            <h3>h3333</h3>
        </Dialog>
    )
}

const Api = {
    getUser() {
        return { name: "Kwan", age: 18 }
    }
}
// eslint-disable-next-line 
function Fetcher(props) {
    const user = Api[props.name]();
    return props.children(user);
}

function RadioGroup(props) {
    return <div>
        {React.Children.map(props.children, child => {
            // vdom不可更改，只能进行复制添加新属性
            return React.cloneElement(child, {name: props.name})
        })}
    </div>
}

function Radio({children, ...rest}) {
    return <label>
        <input type="radio" {...rest}></input>
        {children}
    </label>
}

export default function () {
    // eslint-disable-next-line 
    const footer = <Button type="ghost">具名插槽</Button>
    return (
        // <WelCome color="green" footer={footer}></WelCome>
        // <Fetcher name="getUser">
        //     {({ name, age }) => (
        //         <p>{name}-{age}</p>
        //     )}
        // </Fetcher>
        <RadioGroup name="mvvm">
            <Radio value="vue">vue</Radio>
            <Radio value="react" checked>react</Radio>
            <Radio value="angular">angular</Radio>
        </RadioGroup>
    )
}