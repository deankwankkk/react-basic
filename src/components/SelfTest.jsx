import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import {add, minus, asyncAdd} from '../store/counter.redux';

const mapStateToProps = state => ({ num: state.counter });
const mapDispatchToProps = {
    add,
    minus,
    asyncAdd
};

function SelfTest({ num, add, minus, asyncAdd }) {
    return (
        <div>
            <Input value={num} style={{ width: '200px' }}></Input>
            <Button onClick={add}>add</Button>
            <Button onClick={minus}>minus</Button>
            <Button onClick={asyncAdd}>asyncAdd</Button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfTest);