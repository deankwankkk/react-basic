import React from 'react';
import store from '../store';
import {Button, Input} from 'antd';

function ReduxTest() {

    return(
        <div>
            <Input disabled value={store.getState()}></Input>
            <Button onClick={() => store.dispatch({type: 'add'})}>+</Button>
            <Button onClick={() => store.dispatch({type: 'minus'})}>-</Button>
        </div>
    )
}

export default ReduxTest;