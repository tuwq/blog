import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'

import './SiderBarHotItem.less'
import './SiderBarHotItem.less'

class SiderBarHotItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="SiderBarHotItem">
         		<a className="image"><img width="200" height="136" alt="" src="https://ikmoe.com/wp-content/themes/ikmoe-Snow-Sakura/images/app/app-icon72x72@2x.png?imageView2/1/w/200/h/150/q/100"/></a>
         		<div className="description">
         			<div className="hot-title">友链说明</div>
         			<div className="hot-content">
         				<span><i><img width="13" height="13" alt="" src={eyeSvg} /></i>698756</span>
         				<span><i><img width="13" height="13" alt="" src={clockSvg} /></i>2018-7-12 22:56</span>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default SiderBarHotItem

