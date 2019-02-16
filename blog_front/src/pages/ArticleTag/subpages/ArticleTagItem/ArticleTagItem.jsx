import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import { getRandomInt } from 'base/js/util'

import './ArticleTagItem.less'
import './MArticleTagItem.less'

class ArticleTagItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.getRandomColor = this.getRandomColor.bind(this)
		this.getRandomFontSize = this.getRandomFontSize.bind(this)
	}

	componentDidMount() {
		
	}
	
	getRandomColor(){  
        let r = Math.floor(Math.random()*100) + 155
        let g = Math.floor(Math.random()*100) + 155
        let b = Math.floor(Math.random()*100) + 155
        return  `rgb(${r},${g},${b})` 
    } 

    getRandomFontSize() {
    	return getRandomInt(14, 20)
    }




	render() {
		let rgbStr = this.getRandomColor()
		let fontSize = this.getRandomFontSize()
		let itemStyle = {
			backgroundColor: rgbStr,
			fontSize: fontSize
		}
		return (
          <Link to="/articletag/1" className="ArticleTagItem" style={itemStyle}>
          	 {this.props.tagName}
          </Link>
        )
	}
}

export default withRouter(ArticleTagItem)

