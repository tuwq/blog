import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './CommentList.less'
import './MCommentList.less'

class CommentList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="CommentList">
				list
        	</div>
        )
	}
}

export default withRouter(CommentList)


