import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { GoTop,GoBottom,getLeader,removeScroll } from 'base/js/scrollTo'
import topSvg from 'static/svg/top.svg'
import bottomSvg from 'static/svg/bottom.svg'

import './FixControl.less'
import './MFixControl.less'

class FixControl extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.topArrow = React.createRef()
		this.bottomArrow = React.createRef()
	}

	componentDidMount() {
		getLeader()
		GoTop(this.topArrow.current)
		GoBottom(this.bottomArrow.current)
	}

	componentWillUnmount() {
		// 关闭监听
		removeScroll()
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	render() {
		return (
			<div className="FixControl">
	          <a className="scroll-top" ref={this.topArrow}><i><img width="16" height="16" alt="" src={topSvg}/></i></a>
	          <a className="scroll-bottom" ref={this.bottomArrow}><i><img width="16" height="16" alt="" src={topSvg}/></i></a>
        	</div>
        )
	}
}

export default FixControl

