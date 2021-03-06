import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
      let imgStyle = {
        backgroundImage: 'url(' + this.props.imgConfig.userImg + ')',
      };

		return (
         	<div id="SiderBarSelf" className="SiderBarSelf">
         		<div className="SelfBg" style={imgStyle}><a></a></div>
         		<div className="SelfMsg">
                  {
                     this.state.author.avatar&&
                     (<a className="SelfAvatar"><img width="72" alt="" src={global.userAvatarPrefix+this.state.author.avatar}/></a>)
                  }
         			<div className="SelfName">
         				<Link to={'/user/'+this.state.author.id}>{this.state.author.nickname}</Link>
         				<span>博主</span>
         			</div>
         			<div className="SelfFllow">
         				<Link to="/user/1">
         					<i><img alt="" width="14" height="14" src={followSvg}/></i>
         					<span>关注</span>
         				</Link>
         				<Link to="/extra/secretLetter">
         					<i><img alt="" width="14" height="14" src={mailSvg}/></i>
         					<span>私信</span>
         				</Link>
         			</div>
         			<div className="SelfStats">
         				<span className="stateItem">{this.state.author.articleSum}<span>文章</span></span>
         				<span className="stateItem">{this.state.author.praise}<span>点赞</span></span>
         				<span className="stateItem">{this.state.followsSum}<span>关注</span></span>
         				<span className="stateItem">{this.state.fansSum}<span>粉丝</span></span>
         			</div>
         		</div>
         	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
        imgConfig: state.imgConfig
    }
}

function mapDispatchToProps(dispatch) {
    return {
       
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SiderBarSelf)
)

