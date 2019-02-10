/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2019-02-10 22:46:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for access
-- ----------------------------
DROP TABLE IF EXISTS `access`;
CREATE TABLE `access` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(50) NOT NULL DEFAULT '' COMMENT '用户的ip地址',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=553 DEFAULT CHARSET=utf8 COMMENT='访问表,用于记录访问量';

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章主键id',
  `user_id` int(11) NOT NULL COMMENT '文章属于的前台用户id',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '文章的标题',
  `face_cover` varchar(255) NOT NULL DEFAULT '' COMMENT '文章的封面',
  `content` text NOT NULL COMMENT '文章的内容,存放markdown内容',
  `praise` int(10) NOT NULL DEFAULT '0' COMMENT '文章的网络点赞数,游客也可以点赞',
  `comment_sum` int(5) NOT NULL DEFAULT '0' COMMENT '文章评论数量,用户评论后由消息队列进行更新',
  `browse_sum` int(10) NOT NULL DEFAULT '0' COMMENT '文章访问数量,查看文章后由消息队列进行更新',
  `status` int(5) NOT NULL DEFAULT '0' COMMENT '文章状态.0:可用,1:被删除',
  `weight` int(5) NOT NULL DEFAULT '0' COMMENT '文章的权重,用于排序',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建文章的时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新文章的时间',
  `approval` int(11) NOT NULL DEFAULT '0' COMMENT '文章的赞数',
  `oppose` int(11) NOT NULL DEFAULT '0' COMMENT '文章的踩数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COMMENT='文章的数据表';

-- ----------------------------
-- Table structure for article_bind_article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_bind_article_category`;
CREATE TABLE `article_bind_article_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章分类关系主键id',
  `article_id` int(11) NOT NULL COMMENT '文章id',
  `article_category_id` int(11) NOT NULL COMMENT '分类id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1768 DEFAULT CHARSET=utf8 COMMENT='处理分类与文章关系的数据表,文章需要通过该表获得分类信息';

-- ----------------------------
-- Table structure for article_bind_article_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_bind_article_tag`;
CREATE TABLE `article_bind_article_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章与文章标签绑定的id',
  `article_tag_id` int(11) NOT NULL COMMENT '文章标签的id',
  `article_id` int(11) NOT NULL COMMENT '文章的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_category`;
CREATE TABLE `article_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '分类主键id',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '分类的名称',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '分类的描述',
  `article_sum` int(10) NOT NULL DEFAULT '0' COMMENT '该分类的文章数量,由消息队列更新',
  `comment_sum` int(10) NOT NULL DEFAULT '0' COMMENT '分类的评论数量,由定时任务进行更新',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='分类的数据表,描述分类的信息';

-- ----------------------------
-- Table structure for article_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE `article_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章标签的名称',
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章标签的描述',
  `article_sum` int(11) NOT NULL COMMENT '文章标签的文章数量',
  `comment_sum` int(11) NOT NULL COMMENT '文章标签的评论数量',
  `weight` int(11) NOT NULL COMMENT '文章标签的排序权重',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='文章标签表';

-- ----------------------------
-- Table structure for article_tag_bind_article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_tag_bind_article_category`;
CREATE TABLE `article_tag_bind_article_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_category_id` int(11) NOT NULL COMMENT '文章分类的id',
  `article_tag_id` int(11) NOT NULL COMMENT '文章标签的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '评论主键id',
  `content` text NOT NULL COMMENT '评论的内容,直接存放的文本,后续可以使用markdown',
  `user_id` int(11) NOT NULL COMMENT '评论用户id',
  `article_id` int(11) NOT NULL COMMENT '评论文章id',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '父评论id,是否评论嵌套,评论哪个评论',
  `root_id` int(11) NOT NULL DEFAULT '0' COMMENT '根评论id,评论嵌套情况下',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建评论的时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新的评论时间',
  `approval` int(20) NOT NULL DEFAULT '0' COMMENT '评论的赞数',
  `oppose` int(20) NOT NULL DEFAULT '0' COMMENT '评论的踩数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='评论的数据表,添加parent_id和root_id字段使其支持评论嵌套';

-- ----------------------------
-- Table structure for friend
-- ----------------------------
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '友链主键id',
  `nickname` varchar(255) NOT NULL DEFAULT '' COMMENT '昵称',
  `website` varchar(255) NOT NULL DEFAULT '' COMMENT '网站',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '描述',
  `weight` int(11) NOT NULL DEFAULT '0' COMMENT '权重',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for front_img_config
-- ----------------------------
DROP TABLE IF EXISTS `front_img_config`;
CREATE TABLE `front_img_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '前台图片配置主键id',
  `belong` int(11) NOT NULL DEFAULT '0' COMMENT '属于的位置:1.分类页面,2.搜索页面,3,文章页面,4.用户页面,5.登录页面,6.个人logo,7.轮播页面',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '类型的描述',
  `img` varchar(255) NOT NULL DEFAULT '' COMMENT '图片的地址',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建的时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='前台页面配置表，方便更换背景图片等信息';

-- ----------------------------
-- Table structure for song
-- ----------------------------
DROP TABLE IF EXISTS `song`;
CREATE TABLE `song` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT COMMENT '歌曲主键',
  `song_name` varchar(255) NOT NULL DEFAULT '' COMMENT '歌名',
  `singer` varchar(255) NOT NULL DEFAULT '' COMMENT '歌手',
  `lyric` text NOT NULL COMMENT '歌词',
  `cover` varchar(255) NOT NULL DEFAULT '' COMMENT '歌曲封面',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '歌曲地址',
  `load_sum` int(11) NOT NULL DEFAULT '0' COMMENT '下载数量',
  `praise` int(11) NOT NULL DEFAULT '0' COMMENT '喜欢数',
  `weight` int(11) NOT NULL DEFAULT '0' COMMENT '权重',
  `duration` double(11,0) NOT NULL DEFAULT '0' COMMENT '播放时间长度',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for song_bind_song_category
-- ----------------------------
DROP TABLE IF EXISTS `song_bind_song_category`;
CREATE TABLE `song_bind_song_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `song_id` int(11) NOT NULL,
  `song_category_id` int(11) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=427 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for song_category
-- ----------------------------
DROP TABLE IF EXISTS `song_category`;
CREATE TABLE `song_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '歌曲分类主键id',
  `name` varchar(255) NOT NULL COMMENT '分类名称',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '分类描述',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '后台用户主键id',
  `user_id` int(11) NOT NULL COMMENT '前台的用户id',
  `username` varchar(20) NOT NULL DEFAULT '' COMMENT '用户名称,用于登陆,后台用户没有昵称',
  `password` varchar(50) NOT NULL DEFAULT '' COMMENT '用户密码',
  `avatar` varchar(100) NOT NULL DEFAULT '' COMMENT '后台用户的头像',
  `operate_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后一次操作的时间',
  `operate_ip` varchar(50) NOT NULL DEFAULT '' COMMENT '最后一次操作的ip',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户创建的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='后台用户的数据表';

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户主键id',
  `username` varchar(20) NOT NULL DEFAULT '' COMMENT '用户登陆名称',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT '用户登陆,找回密码,激活状态的邮箱',
  `password` varchar(50) NOT NULL DEFAULT '' COMMENT '用户登陆密码',
  `nickname` varchar(20) NOT NULL DEFAULT '' COMMENT '用户昵称,第一次为用户注册时的登陆名称',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '用户个人描述',
  `website` varchar(50) NOT NULL DEFAULT '' COMMENT '用户的网站',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '用户的头像地址',
  `praise` int(255) NOT NULL DEFAULT '0' COMMENT '用户被赞数,游客也可以点击',
  `status` int(5) NOT NULL DEFAULT '0' COMMENT '用户的状态.0:正常,1:被禁封',
  `activation_code` varchar(255) NOT NULL DEFAULT '' COMMENT '邮件激活的密钥',
  `activation_status` int(5) NOT NULL DEFAULT '0' COMMENT '用户注册后的激活状态.0:未激活,1:激活',
  `follower_sum` int(100) NOT NULL DEFAULT '0' COMMENT '用户的关注数量,通过user_follow数据表获得',
  `fans_sum` int(100) NOT NULL DEFAULT '0' COMMENT '用户的粉丝数量,通过user_follow数据表获得',
  `comment_sum` int(100) NOT NULL DEFAULT '0' COMMENT '用户的评论数量,评论后由消息队列进行更新',
  `articale_sum` int(100) unsigned NOT NULL DEFAULT '0' COMMENT '用户的文章数量,添加文章后更新',
  `before_login_ip` varchar(20) NOT NULL DEFAULT '' COMMENT '用户上次登陆的ip',
  `now_login_ip` varchar(20) NOT NULL DEFAULT '' COMMENT '用户本次登陆的ip',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户创建的时间',
  `operate_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户最后一次操作的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='用户的数据表';

-- ----------------------------
-- Table structure for user_follow
-- ----------------------------
DROP TABLE IF EXISTS `user_follow`;
CREATE TABLE `user_follow` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户关注关系主键id',
  `from_id` int(11) NOT NULL COMMENT '来自者的id',
  `target_id` int(11) NOT NULL COMMENT '目标的id',
  `follow_status` int(10) NOT NULL DEFAULT '0' COMMENT '关注的状态.1:关注,2:不关注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='用户关注关系的数据表';

-- ----------------------------
-- Table structure for user_initiate_dynamic
-- ----------------------------
DROP TABLE IF EXISTS `user_initiate_dynamic`;
CREATE TABLE `user_initiate_dynamic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '动态发起主键id',
  `type` int(5) NOT NULL DEFAULT '0' COMMENT '动态类型.1:评论相关,2:文章相关',
  `action` int(11) NOT NULL DEFAULT '0' COMMENT '动态动作.1:提出,2回复另一个评论',
  `type_id` int(11) NOT NULL COMMENT '动态类型的id,可能是文章或者是评论,取决于type字段',
  `initiate_user_id` int(11) NOT NULL COMMENT '动态发起者的id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建动态的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='动态数据表.用于监视用户的动作';

-- ----------------------------
-- Table structure for user_receive_dynamic
-- ----------------------------
DROP TABLE IF EXISTS `user_receive_dynamic`;
CREATE TABLE `user_receive_dynamic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '动态接收主键id',
  `initiate_dynamic_id` int(11) NOT NULL COMMENT '动态发起的id',
  `receive_user_id` int(11) NOT NULL COMMENT '动态接收者的id',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建动态的时间',
  `visit` int(11) NOT NULL DEFAULT '0' COMMENT '用户是否看过这条动态,0:没看过,1:看过',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
