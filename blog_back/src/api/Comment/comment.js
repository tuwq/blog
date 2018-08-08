export function getCommentApi(currentPage,pageSize,success) {
	axios.get('/sys/comment/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function getSearchListApi(currentPage,pageSize,keyword,success) {
	axios.post('/sys/comment/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete('/sys/comment/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}