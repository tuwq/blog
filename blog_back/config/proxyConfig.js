// 设置地址映射表 当浏览器访问/api就会跳转到下方target地址,taget中的那个http://一定要加  
module.exports = {
	proxy: {
		'/': {
            target: 'http://localhost:9000/blog_back-web',
            changeOrigin: true,
            pathRewrite: {                
                '^/': ''
            }
        }
	}
}