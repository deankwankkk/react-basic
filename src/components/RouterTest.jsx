import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
};

function Login(props) {
    console.log(props);
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
};

function Index() {
    return(
        <h3>首页</h3>
    )
};

function NotFound({location}) {
    return(
    <h3>{location.pathname}不存在</h3>
    )
};

export default function RouterTest() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* 导航链接 */}
                    <ul>
                        <li><Link to="/">假首页</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login/user">Login</Link></li>
                    </ul>

                    {/* 路由配置: 路由即组件， react的路由是包容式的 */}
                    <Switch>
                        <Route path="/" exact component={Index}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/login/:user" component={Login}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
