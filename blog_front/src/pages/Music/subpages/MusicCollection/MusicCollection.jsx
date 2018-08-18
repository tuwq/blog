import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

import MusicList from '../MusicList/MusicList'
import Pagination from 'base/general/Pagination/Pagination'

import { pageSongByCategoryApi,pageSongByKeywordApi } from 'api/Music/music'

import './MusicCollection.less'
import './MMusicCollection.less'

class MusicCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.loadData = this.loadData.bind(this)
		this.searchData = this.searchData.bind(this)
		this.MusicCategoryChangeSubscribe = this.MusicCategoryChangeSubscribe.bind(this)
		this.MusicSearchSubscribe = this.MusicSearchSubscribe.bind(this)
		PubSub.subscribe(global.MusicCategoryChangeSubscribe,this.MusicCategoryChangeSubscribe)
		PubSub.subscribe(global.MusicSearchSubscribe,this.MusicSearchSubscribe)
		this.state = {
			currentPage: 1,
			pageSize: global.musicSongPageSize,
			categoryId: 1,
			data: [],
			pageModel: {},
			isSearch: false,
			keyword: ''
		}
	}

	componentDidMount() {
	  this.loadData(1,1)
	}

	componentWillUnmount() {
	   PubSub.unsubscribe(this.MusicCategoryChangeSubscribe);
	   PubSub.unsubscribe(this.MusicSearchSubscribe);
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	loadData(page,categoryId) {
		pageSongByCategoryApi(page,this.state.pageSize,
			categoryId,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						data: res.data.data,
						pageModel: res.data.pageModel
					})
				}
			})
	}

	searchData(page,keyword) {
		pageSongByKeywordApi(page,this.state.pageSize,
			keyword,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						data: res.data.data,
						pageModel: res.data.pageModel
					})
				}
			})
	}


	loadPage(page) {
		if (this.state.isSearch) {
			this.searchData(page,this.state.keyword)
		} else {
			this.loadData(page,this.state.categoryId)
		}
	}

	MusicCategoryChangeSubscribe(msg,categoryId) {
		if (categoryId == this.state.categoryId) {
			return
		} 
		this.setState({categoryId: categoryId},
			()=>{
			this.loadData(1,categoryId)
		})
	}

	MusicSearchSubscribe(msg,keyword) {
		if (keyword == this.state.keyword) {return}
		if (keyword.trim()=='') {
			this.setState({
				isSearch: false,
				keyword: ''
			})
			this.loadData(1,this.state.categoryId)
		} else {	
			this.setState({
				isSearch: true,
				keyword: keyword
			})
			this.searchData(1,keyword)
		}
	}

	render() {
		return (
			<div className="MusicCollection">
				{
					this.state.data.length>0&&
					(<React.Fragment>
						<MusicList data={this.state.data}/>
						<Pagination pageModel={this.state.pageModel} loadPageFn={this.loadPage.bind(this)}/>
					</React.Fragment>)

				}
        	</div>
        )
	}
}

export default withRouter(MusicCollection)


