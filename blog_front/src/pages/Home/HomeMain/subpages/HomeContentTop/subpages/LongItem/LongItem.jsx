import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './LongItem.less'
import './MLongItem.less'

class LongItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.$content = React.createRef()
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div className="LongItem">
     			<div className="cover">
     				<Link to={'/article/'+this.props.item.id}><img width="128" height="64" alt="" src={global.artImgPrefix+this.props.item.faceCover}></img></Link>
     			</div>
     			<div className="detail">
     				<Link to={'/article/'+this.props.item.id} className="detail-title">{this.props.item.title}</Link>
					 <time className="detail-meta">{this.props.item.timeAgo}&nbsp;{this.props.item.updateTimeString}</time>&nbsp;
     			</div>
         	</div>
        )
	}
}

export default withRouter(LongItem)

