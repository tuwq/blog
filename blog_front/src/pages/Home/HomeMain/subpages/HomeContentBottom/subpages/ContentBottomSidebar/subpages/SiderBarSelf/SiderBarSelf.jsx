import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import followSvg from 'static/svg/follow.svg'
import mailSvg from 'static/svg/mail.svg'

import { userInfoApi } from 'api/Informartion/informartion'

import './SiderBarSelf.less'
import './MSiderBarSelf.less'

class SiderBarSelf extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	   this.initData = this.initData.bind(this)
      this.state = {
         author: {}
      }
   }

	componentDidMount() {
		this.initData()
	}

   componentWillUnmount() {
      this.setState = (state,callback)=>{
        return
      }
   }

   initData() {
      userInfoApi(1,(res)=>{
         if (res.data.code == 200) {
            this.setState({
               author: res.data.result.userDto,
               fansSum: res.data.result.fansSum,
               followsSum: res.data.result.followsSum
            })
         }
      })
   }

	render() {

		return (
         	<div id="SiderBarSelf" className="SiderBarSelf">
         		<div className="SelfBg"><a><img alt=""/></a></div>
         		<div className="SelfMsg">
                  {
                     this.state.author.avatar&&
                     (<a className="SelfAvatar"><img width="72" alt="" src={global.userAvatarPrefix+this.state.author.avatar+'?v='+new Date().getTime()}/></a>)
                  }
         			<div className="SelfName">
         				<Link to={'/user/'+this.state.author.id}>友奈酱</Link>
         				<span>站长</span>
         			</div>
         			<div className="SelfFllow">
         				<Link to="/user/1">
         					<i><img alt="" width="14" height="14" src={followSvg}/></i>
         					<span>关注</span>
         				</Link>
         				<a>
         					<i><img alt="" width="14" height="14" src={mailSvg}/></i>
         					<span>私信</span>
         				</a>
         			</div>
         			<div className="SelfStats">
         				<span className="stateItem">{this.state.author.articaleSum}<span>文章</span></span>
         				<span className="stateItem">{this.state.author.praise}<span>点赞</span></span>
         				<span className="stateItem">{this.state.followsSum!=null?this.state.followsSum:0}<span>关注</span></span>
         				<span className="stateItem">{this.state.fansSum!=null?this.state.fansSum:0}<span>粉丝</span></span>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default withRouter(SiderBarSelf)

