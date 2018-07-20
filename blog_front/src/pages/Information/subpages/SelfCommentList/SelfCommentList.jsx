import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SelfCommentList.less'
import './MSelfCommentList.less'

class SelfCommentList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SelfCommentList">
				<div className="content">
				  <div className="noMessage">
				  	<h2>你还没有接受到任何消息</h2>
				  	<svg viewBox="0 0 1024 1024" width="60" height="60"><path fill="#77C9FF" d="M364.088889 56.888889L48.355556 284.444444 199.111111 392.533333l312.888889-227.555555z" ></path><path fill="#77C9FF" d="M659.911111 56.888889l315.733333 227.555555-150.755555 108.088889-312.888889-227.555555zM659.911111 728.177778l315.733333-227.555556-150.755555-108.088889-312.888889 227.555556z"></path><path fill="#77C9FF" d="M364.088889 728.177778l-315.733333-227.555556L199.111111 392.533333l312.888889 227.555556z"></path><path fill="#77C9FF" d="M694.044444 773.688889l-34.133333 25.6-31.288889-25.6-116.622222-82.488889-116.622222 82.488889-31.288889 25.6-34.133333-25.6L199.111111 679.822222V768l312.888889 227.555556 312.888889-227.555556v-88.177778z"></path></svg>
				  </div>
				  <div className="info-group">
				  	<label className="control-label">xxx在xxx中回复了你</label>
			  		<p>tuwenq@126.comtuwenq</p>
			  		<span>2018-7-20 09:30</span>
				  </div>
			  	</div>
        	</div>
        )
	}
}

export default withRouter(SelfCommentList)

