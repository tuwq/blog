import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './FollowList.less'
import './MFollowList.less'

class FollowList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="FollowList">
				<div className="group-list">
					<div className="follow-group">
					 	<div className="avatar">
					 		<img width="50" height="50" alt="" src="https://q.qlogo.cn/g?b=qq&nk=1537060553&s=40"/>
					 	</div>
					 	<div className="meta">
					 		<h2 className="name">雾里酱</h2>
					 		<p className="descrtipion">xxxxxxxxxxx</p>
					 	</div>
					 	<div className="button">
					 		<button>关注</button>
					 	</div>
				 	</div>
			 	</div>
        	</div>
        )
	}
}

export default withRouter(FollowList)


