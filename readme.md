# 全栈我的博客 https://twenq.com
# 技术栈
## 前台展示,兼容chrome,firefox,edge.支持响应式
	前端:	Less + React + Redux + jQuery

	后端: 	SpringBoot + MyBatis

	数据库:	MySql + Redis

## 后台管理
	前端:	Sass + Vue + Vuex + jQuery + Echarts

	后端: 	SpringMVC + MyBatis 

	数据库:	MySql + Redis
	
## 可优化设计(TODO)
服务端  
1. 为Token设计表,便于扩展授权
2. 将服务端配置全部编写为类对象便于管理和维护
3. 优化多表查询的的SQL
4. 添加多对多关系的文章标签
5. 大改后需要重构,解决冗余代码

前端
1. 为常用组件添加redux-thunk,提高性能
2. 使用immutable使组件易于复用和规范化

可添加功能
1. 更多的分类和文章标签
2. 实现表情评论
3. 运用长连接进行推送