import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import InformationCard from './subpages/InformationCard/InformationCard'
import InformationMain from './subpages/InformationMain/InformationMain'

import './Information.less'
import './MInformation.less'

class Information extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="Information" className="Information">
			  <InformationMain />
        	</div>
        )
	}
}

export default withRouter(Information)


