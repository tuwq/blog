import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarHotItem from '../SiderBarHotItem/SiderBarHotItem'

import './SiderBarHotList.less'
import './MSiderBarHotList.less'

class SiderBarHotList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SiderBarHotList" className="SiderBarHotList">
         		<SiderBarHotItem />
         		<SiderBarHotItem />
         	</div>
        )
	}
}

export default SiderBarHotList

