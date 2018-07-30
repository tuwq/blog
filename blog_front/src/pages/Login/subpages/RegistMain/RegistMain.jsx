import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import qqSvg from 'static/svg/qq.svg'
import { checkRegistForm } from 'base/js/check'
import { registApi } from 'api/Login/login'

import ValidateCode from 'base/general/ValidateCode/ValidateCode'

import './RegistMain.less'
import './MRegistMain.less'

class RegistMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			username: '',
			email: '',
			password: '',
			usercode: '',
			truecode: '',
			error: ''
		}
	}

	componentDidMount() {
		
	}

	usernameChange(e) {
		this.setState({
			username: e.target.value.toLowerCase(),
			error: ''
		})
	}

	emailChange(e) {
		this.setState({
			email: e.target.value,
			error: ''
		})
	}

	passwordChange(e) {
		this.setState({
			password: e.target.value,
			error: ''
		})
	}

	usercodeChange(e) {
		this.setState({
			usercode: e.target.value,
			error: ''
		})
	}

	validateCodeChange(code) {
		// 图片验证码改变后的值
		this.setState({
			truecode: code
		})
	}

	regist(e) {
		e.stopPropagation()
		e.preventDefault()
		var flag = checkRegistForm(this.state)
		if (flag == true) {
			registApi(this.state,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						error: '已经向你的邮箱发送了邮件，快去激活吧',
						username: '',
						email:'',
						usercode: '',
						password: ''
					})
				} else {
					this.setState({
						error: res.data.msg
					})
				}
			})
		} else {
			this.setState({
				error: flag
			})
		}
	}

	render() {
		return (
			<div id="RegistMain" className="RegistMain">
	       		<div className="content-wrapper">
	       			<div className="content">
	       				<img alt="" src="https://ikmoe.com/logo.png"/>
	       				<form className="form">
	       					<h2 className="title">创建新账号</h2>
	       					{
	       						this.state.error!=''
	       						&& (<div className="msg">
			       						<ul><li>{this.state.error}</li></ul>
			       					</div>)
	       					}
	       					<p>我们将发送一封验证邮件至你的邮箱, 请正确填写以完成账号注册和激活</p>
	       					<div className="form-group">
	       						<div className="form-control"><input value={this.state.username} onChange={this.usernameChange.bind(this)} type="text" placeholder="账户" autoComplete="new-password" /></div>
	       						<div className="form-control"><input value={this.state.email} onChange={this.emailChange.bind(this)} type="email" placeholder="邮箱" autoComplete="new-password" /></div>
	       						<div className="form-control"><input value={this.state.password} onChange={this.passwordChange.bind(this)} type="password" placeholder="密码" autoComplete="new-password" /></div>
	       						<div className="form-control validtion">
	       							<input type="text" placeholder="验证码" value={this.state.usercode} onChange={this.usercodeChange.bind(this)}/>
	       							<span><ValidateCode validateCodeChange={this.validateCodeChange.bind(this)}/></span>
	       						</div>
	       						<div className="form-control">
	       							<button className="regist" onClick={this.regist.bind(this)}>注册</button>
	       						</div>
	       					</div>
		       				<div className="gologin">
		       					<span>已有账号?</span>
		       					<span><a onClick={this.props.updateStatusFn}>登录</a></span>
		       				</div>
	       				</form>
	       			</div>
	       		</div>
        	</div>
        )
	}
}

export default RegistMain


