import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navLink'
import { Switch, Route } from 'react-router-dom'
import Boss from '../boss'
import Genius from '../genius'
// function Boss() {
//     return <h3>boss首页</h3>
// }
// function Genius() {
//     return <h3>牛人首页</h3>
// }
function Msg() {
    return <h3>信息中心</h3>
}
function User() {
    return <h3>个人中心</h3>
}
@connect(
    state => state
)
class DashBorad extends Component {
    render() {
        const pathname = this.props.location.pathname
        console.log(pathname)
        const user = this.props.user
        const NavList = [
            { path: '/boss', text: '牛人', icon: 'boss', title: '牛人列表', component: Boss, hide: user.type === 'genius' },
            { path: '/genius', text: 'boss', icon: 'job', title: 'BOSS列表', component: Genius, hide: user.type === 'boss' },
            { path: '/msg', text: '消息', icon: 'msg', title: '消息列表', component: Msg },
            { path: '/me', text: '我', icon: 'user', title: '个人中心', component: User }
        ]
        return (
            <div>
                <NavBar mode='dard' className="fixd-header">{NavList.find(v => v.path === pathname).title}</NavBar>
                <div style={{ marginTop: 45 }}>
                    <Switch>
                        {NavList.map(v => (
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={NavList}></NavLinkBar>
            </div>
        )
    }
}

export default DashBorad