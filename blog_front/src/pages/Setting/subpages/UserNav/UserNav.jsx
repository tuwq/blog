import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import BasisSetting from '../BasisSetting/BasisSetting'
import SecuritySetting from '../SecuritySetting/SecuritySetting'

import './UserNav.less'
import './MUserNav.less'

class UserNav extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="UserNav">
				<BasisSetting />
				<SecuritySetting />
        	</div>
        )
	}
}

export default withRouter(UserNav)


