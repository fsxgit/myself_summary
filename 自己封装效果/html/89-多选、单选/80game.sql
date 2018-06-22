/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : 80game

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2017-05-17 17:46:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `yq_ad`
-- ----------------------------
DROP TABLE IF EXISTS `yq_ad`;
CREATE TABLE `yq_ad` (
  `ad_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '广告id',
  `ad_name` varchar(255) NOT NULL COMMENT '广告名称',
  `ad_content` text COMMENT '广告内容',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  PRIMARY KEY (`ad_id`),
  KEY `ad_name` (`ad_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yq_ad
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_asset`
-- ----------------------------
DROP TABLE IF EXISTS `yq_asset`;
CREATE TABLE `yq_asset` (
  `aid` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '用户 id',
  `key` varchar(50) NOT NULL COMMENT '资源 key',
  `filename` varchar(50) DEFAULT NULL COMMENT '文件名',
  `filesize` int(11) DEFAULT NULL COMMENT '文件大小,单位Byte',
  `filepath` varchar(200) NOT NULL COMMENT '文件路径，相对于 upload 目录，可以为 url',
  `uploadtime` int(11) NOT NULL COMMENT '上传时间',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1：可用，0：删除，不可用',
  `meta` text COMMENT '其它详细信息，JSON格式',
  `suffix` varchar(50) DEFAULT NULL COMMENT '文件后缀名，不包括点',
  `download_times` int(11) NOT NULL DEFAULT '0' COMMENT '下载次数',
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='资源表';

-- ----------------------------
-- Records of yq_asset
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_auth_access`
-- ----------------------------
DROP TABLE IF EXISTS `yq_auth_access`;
CREATE TABLE `yq_auth_access` (
  `role_id` mediumint(8) unsigned NOT NULL COMMENT '角色',
  `rule_name` varchar(255) NOT NULL COMMENT '规则唯一英文标识,全小写',
  `type` varchar(30) DEFAULT NULL COMMENT '权限规则分类，请加应用前缀,如admin_',
  KEY `role_id` (`role_id`),
  KEY `rule_name` (`rule_name`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='权限授权表';

-- ----------------------------
-- Records of yq_auth_access
-- ----------------------------
INSERT INTO `yq_auth_access` VALUES ('2', 'content/task/receive', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('2', 'content/task/back', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('2', 'content/task/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('2', 'content/performance/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('2', 'content/task/detail', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/push/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/push/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/ureply', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/applydel', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/reply', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/apply', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/chat', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/users', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/del', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/update', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/edit', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/applicantdel', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/area', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/organ/datalist', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/datalist', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/del', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/update', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/edit', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/feedback', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/search', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/judged/applicant', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/add', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/benji/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/lock', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/del', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/update', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/edit', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/group', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/add', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/experts/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/getleader', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/lock', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/user/update', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/del', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/edit', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/linkage/group', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/add', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/organ/del', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/organ/update', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/organ/edit', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/organ/add', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/organ/index', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/member/default', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/push/add', 'admin_url');
INSERT INTO `yq_auth_access` VALUES ('4', 'content/push/update', 'admin_url');

-- ----------------------------
-- Table structure for `yq_auth_rule`
-- ----------------------------
DROP TABLE IF EXISTS `yq_auth_rule`;
CREATE TABLE `yq_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '规则id,自增主键',
  `module` varchar(20) NOT NULL COMMENT '规则所属module',
  `type` varchar(30) NOT NULL DEFAULT '1' COMMENT '权限规则分类，请加应用前缀,如admin_',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '规则唯一英文标识,全小写',
  `param` varchar(255) DEFAULT NULL COMMENT '额外url参数',
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '规则中文描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否有效(0:无效,1:有效)',
  `condition` varchar(300) NOT NULL DEFAULT '' COMMENT '规则附加条件',
  PRIMARY KEY (`id`),
  KEY `module` (`module`,`status`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=259 DEFAULT CHARSET=utf8 COMMENT='权限规则表';

-- ----------------------------
-- Records of yq_auth_rule
-- ----------------------------
INSERT INTO `yq_auth_rule` VALUES ('1', 'Admin', 'admin_url', 'admin/content/default', null, '内容管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('2', 'Api', 'admin_url', 'api/guestbookadmin/index', null, '所有留言', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('3', 'Api', 'admin_url', 'api/guestbookadmin/delete', null, '删除网站留言', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('4', 'Comment', 'admin_url', 'comment/commentadmin/index', null, '评论管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('5', 'Comment', 'admin_url', 'comment/commentadmin/delete', null, '删除评论', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('6', 'Comment', 'admin_url', 'comment/commentadmin/check', null, '评论审核', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('7', 'Portal', 'admin_url', 'portal/adminpost/index', null, '文章管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('8', 'Portal', 'admin_url', 'portal/adminpost/listorders', null, '文章排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('9', 'Portal', 'admin_url', 'portal/adminpost/top', null, '文章置顶', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('10', 'Portal', 'admin_url', 'portal/adminpost/recommend', null, '文章推荐', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('11', 'Portal', 'admin_url', 'portal/adminpost/move', null, '批量移动', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('12', 'Portal', 'admin_url', 'portal/adminpost/check', null, '文章审核', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('13', 'Portal', 'admin_url', 'portal/adminpost/delete', null, '删除文章', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('14', 'Portal', 'admin_url', 'portal/adminpost/edit', null, '编辑文章', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('15', 'Portal', 'admin_url', 'portal/adminpost/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('16', 'Portal', 'admin_url', 'portal/adminpost/add', null, '添加文章', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('17', 'Portal', 'admin_url', 'portal/adminpost/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('18', 'Portal', 'admin_url', 'portal/adminterm/index', null, '分类管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('19', 'Portal', 'admin_url', 'portal/adminterm/listorders', null, '文章分类排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('20', 'Portal', 'admin_url', 'portal/adminterm/delete', null, '删除分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('21', 'Portal', 'admin_url', 'portal/adminterm/edit', null, '编辑分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('22', 'Portal', 'admin_url', 'portal/adminterm/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('23', 'Portal', 'admin_url', 'portal/adminterm/add', null, '添加分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('24', 'Portal', 'admin_url', 'portal/adminterm/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('25', 'Portal', 'admin_url', 'portal/adminpage/index', null, '页面管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('26', 'Portal', 'admin_url', 'portal/adminpage/listorders', null, '页面排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('27', 'Portal', 'admin_url', 'portal/adminpage/delete', null, '删除页面', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('28', 'Portal', 'admin_url', 'portal/adminpage/edit', null, '编辑页面', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('29', 'Portal', 'admin_url', 'portal/adminpage/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('30', 'Portal', 'admin_url', 'portal/adminpage/add', null, '添加页面', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('31', 'Portal', 'admin_url', 'portal/adminpage/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('32', 'Admin', 'admin_url', 'admin/recycle/default', null, '回收站', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('33', 'Portal', 'admin_url', 'portal/adminpost/recyclebin', null, '文章回收', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('34', 'Portal', 'admin_url', 'portal/adminpost/restore', null, '文章还原', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('35', 'Portal', 'admin_url', 'portal/adminpost/clean', null, '彻底删除', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('36', 'Portal', 'admin_url', 'portal/adminpage/recyclebin', null, '页面回收', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('37', 'Portal', 'admin_url', 'portal/adminpage/clean', null, '彻底删除', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('38', 'Portal', 'admin_url', 'portal/adminpage/restore', null, '页面还原', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('39', 'Admin', 'admin_url', 'admin/extension/default', null, '扩展工具', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('40', 'Admin', 'admin_url', 'admin/backup/default', null, '备份管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('41', 'Admin', 'admin_url', 'admin/backup/restore', null, '数据还原', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('42', 'Admin', 'admin_url', 'admin/backup/index', null, '数据备份', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('43', 'Admin', 'admin_url', 'admin/backup/index_post', null, '提交数据备份', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('44', 'Admin', 'admin_url', 'admin/backup/download', null, '下载备份', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('45', 'Admin', 'admin_url', 'admin/backup/del_backup', null, '删除备份', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('46', 'Admin', 'admin_url', 'admin/backup/import', null, '数据备份导入', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('47', 'Admin', 'admin_url', 'admin/plugin/index', null, '插件管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('48', 'Admin', 'admin_url', 'admin/plugin/toggle', null, '插件启用切换', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('49', 'Admin', 'admin_url', 'admin/plugin/setting', null, '插件设置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('50', 'Admin', 'admin_url', 'admin/plugin/setting_post', null, '插件设置提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('51', 'Admin', 'admin_url', 'admin/plugin/install', null, '插件安装', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('52', 'Admin', 'admin_url', 'admin/plugin/uninstall', null, '插件卸载', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('53', 'Admin', 'admin_url', 'admin/slide/default', null, '幻灯片', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('54', 'Admin', 'admin_url', 'admin/slide/index', null, '幻灯片管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('55', 'Admin', 'admin_url', 'admin/slide/listorders', null, '幻灯片排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('56', 'Admin', 'admin_url', 'admin/slide/toggle', null, '幻灯片显示切换', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('57', 'Admin', 'admin_url', 'admin/slide/delete', null, '删除幻灯片', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('58', 'Admin', 'admin_url', 'admin/slide/edit', null, '编辑幻灯片', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('59', 'Admin', 'admin_url', 'admin/slide/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('60', 'Admin', 'admin_url', 'admin/slide/add', null, '添加幻灯片', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('61', 'Admin', 'admin_url', 'admin/slide/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('62', 'Admin', 'admin_url', 'admin/slidecat/index', null, '幻灯片分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('63', 'Admin', 'admin_url', 'admin/slidecat/delete', null, '删除分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('64', 'Admin', 'admin_url', 'admin/slidecat/edit', null, '编辑分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('65', 'Admin', 'admin_url', 'admin/slidecat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('66', 'Admin', 'admin_url', 'admin/slidecat/add', null, '添加分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('67', 'Admin', 'admin_url', 'admin/slidecat/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('68', 'Admin', 'admin_url', 'admin/ad/index', null, '网站广告', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('69', 'Admin', 'admin_url', 'admin/ad/toggle', null, '广告显示切换', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('70', 'Admin', 'admin_url', 'admin/ad/delete', null, '删除广告', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('71', 'Admin', 'admin_url', 'admin/ad/edit', null, '编辑广告', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('72', 'Admin', 'admin_url', 'admin/ad/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('73', 'Admin', 'admin_url', 'admin/ad/add', null, '添加广告', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('74', 'Admin', 'admin_url', 'admin/ad/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('75', 'Admin', 'admin_url', 'admin/link/index', null, '友情链接', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('76', 'Admin', 'admin_url', 'admin/link/listorders', null, '友情链接排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('77', 'Admin', 'admin_url', 'admin/link/toggle', null, '友链显示切换', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('78', 'Admin', 'admin_url', 'admin/link/delete', null, '删除友情链接', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('79', 'Admin', 'admin_url', 'admin/link/edit', null, '编辑友情链接', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('80', 'Admin', 'admin_url', 'admin/link/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('81', 'Admin', 'admin_url', 'admin/link/add', null, '添加友情链接', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('82', 'Admin', 'admin_url', 'admin/link/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('83', 'Api', 'admin_url', 'api/oauthadmin/setting', null, '第三方登陆', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('84', 'Api', 'admin_url', 'api/oauthadmin/setting_post', null, '提交设置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('85', 'Admin', 'admin_url', 'admin/menu/default', null, '菜单管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('86', 'Admin', 'admin_url', 'admin/navcat/default1', null, '前台菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('87', 'Admin', 'admin_url', 'admin/nav/index', null, '菜单管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('88', 'Admin', 'admin_url', 'admin/nav/listorders', null, '前台导航排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('89', 'Admin', 'admin_url', 'admin/nav/delete', null, '删除菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('90', 'Admin', 'admin_url', 'admin/nav/edit', null, '编辑菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('91', 'Admin', 'admin_url', 'admin/nav/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('92', 'Admin', 'admin_url', 'admin/nav/add', null, '添加菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('93', 'Admin', 'admin_url', 'admin/nav/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('94', 'Admin', 'admin_url', 'admin/navcat/index', null, '菜单分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('95', 'Admin', 'admin_url', 'admin/navcat/delete', null, '删除分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('96', 'Admin', 'admin_url', 'admin/navcat/edit', null, '编辑分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('97', 'Admin', 'admin_url', 'admin/navcat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('98', 'Admin', 'admin_url', 'admin/navcat/add', null, '添加分类', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('99', 'Admin', 'admin_url', 'admin/navcat/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('100', 'Admin', 'admin_url', 'admin/menu/index', null, '后台菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('101', 'Admin', 'admin_url', 'admin/menu/add', null, '添加菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('102', 'Admin', 'admin_url', 'admin/menu/add_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('103', 'Admin', 'admin_url', 'admin/menu/listorders', null, '后台菜单排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('104', 'Admin', 'admin_url', 'admin/menu/export_menu', null, '菜单备份', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('105', 'Admin', 'admin_url', 'admin/menu/edit', null, '编辑菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('106', 'Admin', 'admin_url', 'admin/menu/edit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('107', 'Admin', 'admin_url', 'admin/menu/delete', null, '删除菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('108', 'Admin', 'admin_url', 'admin/menu/lists', null, '所有菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('109', 'Admin', 'admin_url', 'admin/setting/default', null, '设置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('110', 'Admin', 'admin_url', 'admin/setting/userdefault', null, '个人信息', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('111', 'Admin', 'admin_url', 'admin/user/userinfo', null, '修改信息', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('112', 'Admin', 'admin_url', 'admin/user/userinfo_post', null, '修改信息提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('113', 'Admin', 'admin_url', 'admin/setting/password', null, '修改密码', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('114', 'Admin', 'admin_url', 'admin/setting/password_post', null, '提交修改', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('115', 'Admin', 'admin_url', 'admin/setting/site', null, '基本配置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('116', 'Admin', 'admin_url', 'admin/setting/site_post', null, '提交修改', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('117', 'Admin', 'admin_url', 'admin/route/index', null, '路由列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('118', 'Admin', 'admin_url', 'admin/route/add', null, '路由添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('119', 'Admin', 'admin_url', 'admin/route/add_post', null, '路由添加提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('120', 'Admin', 'admin_url', 'admin/route/edit', null, '路由编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('121', 'Admin', 'admin_url', 'admin/route/edit_post', null, '路由编辑提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('122', 'Admin', 'admin_url', 'admin/route/delete', null, '路由删除', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('123', 'Admin', 'admin_url', 'admin/route/ban', null, '路由禁止', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('124', 'Admin', 'admin_url', 'admin/route/open', null, '路由启用', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('125', 'Admin', 'admin_url', 'admin/route/listorders', null, '路由排序', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('126', 'Admin', 'admin_url', 'admin/mailer/default', null, '邮箱配置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('127', 'Admin', 'admin_url', 'admin/mailer/index', null, 'SMTP配置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('128', 'Admin', 'admin_url', 'admin/mailer/index_post', null, '提交配置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('129', 'Admin', 'admin_url', 'admin/mailer/active', null, '注册邮件模板', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('130', 'Admin', 'admin_url', 'admin/mailer/active_post', null, '提交模板', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('131', 'Admin', 'admin_url', 'admin/setting/clearcache', null, '清除缓存', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('132', 'User', 'admin_url', 'user/indexadmin/default', null, '权限管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('133', 'User', 'admin_url', 'user/indexadmin/default1', null, '用户组', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('134', 'User', 'admin_url', 'user/indexadmin/index', null, '本站用户', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('135', 'User', 'admin_url', 'user/indexadmin/ban', null, '拉黑会员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('136', 'User', 'admin_url', 'user/indexadmin/cancelban', null, '启用会员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('137', 'User', 'admin_url', 'user/oauthadmin/index', null, '第三方用户', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('138', 'User', 'admin_url', 'user/oauthadmin/delete', null, '第三方用户解绑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('139', 'User', 'admin_url', 'user/indexadmin/default3', null, '管理组', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('140', 'Admin', 'admin_url', 'admin/rbac/default', null, '角色管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('141', 'Admin', 'admin_url', 'admin/rbac/member', null, '成员管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('142', 'Admin', 'admin_url', 'admin/rbac/authorize', null, '权限设置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('143', 'Admin', 'admin_url', 'admin/rbac/authorize_post', null, '提交设置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('144', 'Admin', 'admin_url', 'admin/rbac/roleedit', null, '编辑角色', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('145', 'Admin', 'admin_url', 'admin/rbac/roleedit_post', null, '提交编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('146', 'Admin', 'admin_url', 'admin/rbac/roledelete', null, '删除角色', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('147', 'Admin', 'admin_url', 'admin/rbac/roleadd', null, '添加角色', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('148', 'Admin', 'admin_url', 'admin/rbac/roleadd_post', null, '提交添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('149', 'Admin', 'admin_url', 'admin/user/index', null, '管理员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('150', 'Admin', 'admin_url', 'admin/user/delete', null, '删除管理员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('151', 'Admin', 'admin_url', 'admin/user/edit', null, '管理员编辑', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('152', 'Admin', 'admin_url', 'admin/user/edit_post', null, '编辑提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('153', 'Admin', 'admin_url', 'admin/user/add', null, '管理员添加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('154', 'Admin', 'admin_url', 'admin/user/add_post', null, '添加提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('155', 'Admin', 'admin_url', 'admin/plugin/update', null, '插件更新', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('156', 'Admin', 'admin_url', 'admin/storage/index', null, '文件存储', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('157', 'Admin', 'admin_url', 'admin/storage/setting_post', null, '文件存储设置提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('158', 'Admin', 'admin_url', 'admin/slide/ban', null, '禁用幻灯片', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('159', 'Admin', 'admin_url', 'admin/slide/cancelban', null, '启用幻灯片', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('160', 'Admin', 'admin_url', 'admin/user/ban', null, '禁用管理员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('161', 'Admin', 'admin_url', 'admin/user/cancelban', null, '启用管理员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('162', 'Demo', 'admin_url', 'demo/adminindex/index', null, '', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('163', 'Demo', 'admin_url', 'demo/adminindex/last', null, '', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('166', 'Admin', 'admin_url', 'admin/mailer/test', null, '测试邮件', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('167', 'Admin', 'admin_url', 'admin/setting/upload', null, '上传设置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('168', 'Admin', 'admin_url', 'admin/setting/upload_post', null, '上传设置提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('169', 'Portal', 'admin_url', 'portal/adminpost/copy', null, '文章批量复制', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('170', 'Admin', 'admin_url', 'admin/menu/backup_menu', null, '备份菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('171', 'Admin', 'admin_url', 'admin/menu/export_menu_lang', null, '导出后台菜单多语言包', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('172', 'Admin', 'admin_url', 'admin/menu/restore_menu', null, '还原菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('173', 'Admin', 'admin_url', 'admin/menu/getactions', null, '导入新菜单', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('174', 'Content', 'admin_url', 'content/member/default', null, '用户管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('175', 'Content', 'admin_url', 'content/saleman/default', null, '业务管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('176', 'Content', 'admin_url', 'content/orders/default', null, '订单管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('177', 'Content', 'admin_url', 'content/search/default', null, '搜索管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('178', 'Content', 'admin_url', 'content/contract/index', null, '合同管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('179', 'Content', 'admin_url', 'content/version/default', null, '版本管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('180', 'Content', 'admin_url', 'content/saleman/index', null, '业务员列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('181', 'Content', 'admin_url', 'content/saleman/add', null, '业务员增加', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('182', 'Content', 'admin_url', 'content/orders/index', null, '订单列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('183', 'Content', 'admin_url', 'content/config/group', null, '基本配置', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('184', 'Content', 'admin_url', 'content/organ/index', null, '组织管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('185', 'Content', 'admin_url', 'content/experts/index', null, '专家列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('186', 'Content', 'admin_url', 'content/experts/add', null, '增加专家', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('187', 'Content', 'admin_url', 'content/member/index', null, '用户列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('188', 'Content', 'admin_url', 'content/member/add', null, '增加用户', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('189', 'Content', 'admin_url', 'content/benji/index', null, '舆情列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('190', 'Content', 'admin_url', 'content/benji/add', null, '发布舆情', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('191', 'Content', 'admin_url', 'content/tags/index', null, '定制标签管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('192', 'Content', 'admin_url', 'content/redian/index', null, '舆情列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('193', 'Content', 'admin_url', 'content/redian/add', null, '发布舆情', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('194', 'Content', 'admin_url', 'content/linkage/index', null, '会商组列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('195', 'Content', 'admin_url', 'content/judged/apply', null, '研判请求', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('196', 'Content', 'admin_url', 'content/judged/reply', null, '研判回复', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('197', 'Content', 'admin_url', 'content/case/index', null, '案例列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('198', 'Content', 'admin_url', 'content/case/add', null, '增加案例', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('199', 'Content', 'admin_url', 'content/special/index', null, '舆情专报列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('200', 'Content', 'admin_url', 'content/special/add', null, '增加舆情专报', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('201', 'Content', 'admin_url', 'content/performance/default', null, '绩效管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('202', 'Content', 'admin_url', 'content/train/index', null, '培训内容管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('203', 'Content', 'admin_url', 'content/train/ask', null, '学生提问管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('204', 'Content', 'admin_url', 'content/exam/index', null, '考试内容管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('205', 'Content', 'admin_url', 'content/exam/score', null, '考试成绩列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('206', 'Content', 'admin_url', 'content/push/index', null, '消息列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('207', 'Content', 'admin_url', 'content/push/add', null, '推送消息', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('208', 'Content', 'admin_url', 'content/feecback/index', null, '意见反馈列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('209', 'Content', 'admin_url', 'content/version/index', null, '历史版本', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('210', 'Content', 'admin_url', 'content/version/add', null, '发布新版本', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('211', 'Content', 'admin_url', 'content/train/add', null, '添加培训课程', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('212', 'Content', 'admin_url', 'content/search/index', null, '历史搜索记录', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('213', 'Admin', 'admin_url', 'admin/rbac/index', null, '角色列表', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('214', 'Content', 'admin_url', 'content/wangping/add', null, '添加网评员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('215', 'Content', 'admin_url', 'content/wangping/index', null, '网评员管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('216', 'Content', 'admin_url', 'content/task/index', null, '任务大厅', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('217', 'Content', 'admin_url', 'content/task/tongji', null, '网评员统计', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('218', 'Content', 'admin_url', 'content/account/index', null, '马甲账号', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('219', 'Content', 'admin_url', 'content/task/receive', null, '接收任务', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('220', 'Content', 'admin_url', 'content/task/back', null, '反馈任务', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('221', 'Content', 'admin_url', 'content/task/detail', null, '任务详情', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('222', 'Content', 'admin_url', 'content/judged/applicant', null, '批复信息管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('223', 'Content', 'admin_url', 'content/benji/search', null, '舆情搜索', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('224', 'Content', 'admin_url', 'content/judged/feedback', null, '批复反馈管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('225', 'Content', 'admin_url', 'content/benji/default', null, '本级舆情管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('226', 'Content', 'admin_url', 'content/push/default', null, '推送消息管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('227', 'Content', 'admin_url', 'content/linkage/default', null, '单位联动管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('228', 'Content', 'admin_url', 'content/experts/default', null, '专家管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('229', 'Content', 'admin_url', 'content/judged/default', null, '专家研判管理', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('230', 'Content', 'admin_url', 'content/push/update', null, '推送消息提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('231', 'Content', 'admin_url', 'content/linkage/edit', null, '修改会商组 ', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('232', 'Content', 'admin_url', 'content/linkage/update', null, '修改会商组提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('233', 'Content', 'admin_url', 'content/linkage/del', null, '删除会商组', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('234', 'Content', 'admin_url', 'content/linkage/users', null, '查看会商组成员', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('235', 'Content', 'admin_url', 'content/linkage/chat', null, '查看聊天记录', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('236', 'Content', 'admin_url', 'content/linkage/group', null, '查看专家加入的会商组', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('237', 'Content', 'admin_url', 'content/organ/add', null, '添加组织', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('238', 'Content', 'admin_url', 'content/organ/edit', null, '修改组织', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('239', 'Content', 'admin_url', 'content/organ/update', null, '添加，修改组织信息提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('240', 'Content', 'admin_url', 'content/organ/del', null, '删除组织', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('241', 'Content', 'admin_url', 'content/member/edit', null, '修改用户', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('242', 'Content', 'admin_url', 'content/member/del', null, '删除用户', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('243', 'Content', 'admin_url', 'content/user/update', null, '增加、修改用户信息提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('244', 'Content', 'admin_url', 'content/experts/edit', null, '修改专家', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('245', 'Content', 'admin_url', 'content/experts/update', null, '增加、修改专家提交', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('246', 'Content', 'admin_url', 'content/experts/del', null, '删除专家', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('247', 'Content', 'admin_url', 'content/experts/lock', null, '冻结 、 解锁 账号', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('248', 'Content', 'admin_url', 'content/member/lock', null, '冻结 、 解锁 账号', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('249', 'Content', 'admin_url', 'content/benji/edit', null, '修改舆情', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('250', 'Content', 'admin_url', 'content/benji/update', null, '修改/增加舆情保存', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('251', 'Content', 'admin_url', 'content/benji/del', null, '删除舆情', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('252', 'Content', 'admin_url', 'content/member/datalist', null, '推送选择用户', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('253', 'Content', 'admin_url', 'content/organ/datalist', null, '推送选择组织', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('254', 'Content', 'admin_url', 'content/judged/applydel', null, '研判申请删除', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('255', 'Content', 'admin_url', 'content/judged/applicantdel', null, '信息批复删除', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('256', 'Content', 'admin_url', 'content/judged/ureply', null, '修改研判回复信息', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('257', 'Content', 'admin_url', 'content/benji/area', null, '区域联动', '1', '');
INSERT INTO `yq_auth_rule` VALUES ('258', 'Content', 'admin_url', 'content/member/getleader', null, '获取当前组织下用户', '1', '');

-- ----------------------------
-- Table structure for `yq_comments`
-- ----------------------------
DROP TABLE IF EXISTS `yq_comments`;
CREATE TABLE `yq_comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_table` varchar(100) NOT NULL COMMENT '评论内容所在表，不带表前缀',
  `post_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '评论内容 id',
  `url` varchar(255) DEFAULT NULL COMMENT '原文地址',
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '发表评论的用户id',
  `to_uid` int(11) NOT NULL DEFAULT '0' COMMENT '被评论的用户id',
  `full_name` varchar(50) DEFAULT NULL COMMENT '评论者昵称',
  `email` varchar(255) DEFAULT NULL COMMENT '评论者邮箱',
  `createtime` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '评论时间',
  `content` text NOT NULL COMMENT '评论内容',
  `type` smallint(1) NOT NULL DEFAULT '1' COMMENT '评论类型；1实名评论',
  `parentid` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '被回复的评论id',
  `path` varchar(500) DEFAULT NULL,
  `status` smallint(1) NOT NULL DEFAULT '1' COMMENT '状态，1已审核，0未审核',
  PRIMARY KEY (`id`),
  KEY `comment_post_ID` (`post_id`),
  KEY `comment_approved_date_gmt` (`status`),
  KEY `comment_parent` (`parentid`),
  KEY `table_id_status` (`post_table`,`post_id`,`status`),
  KEY `createtime` (`createtime`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='评论表';

-- ----------------------------
-- Records of yq_comments
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_common_action_log`
-- ----------------------------
DROP TABLE IF EXISTS `yq_common_action_log`;
CREATE TABLE `yq_common_action_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` bigint(20) DEFAULT '0' COMMENT '用户id',
  `object` varchar(100) DEFAULT NULL COMMENT '访问对象的id,格式：不带前缀的表名+id;如posts1表示xx_posts表里id为1的记录',
  `action` varchar(50) DEFAULT NULL COMMENT '操作名称；格式规定为：应用名+控制器+操作名；也可自己定义格式只要不发生冲突且惟一；',
  `count` int(11) DEFAULT '0' COMMENT '访问次数',
  `last_time` int(11) DEFAULT '0' COMMENT '最后访问的时间戳',
  `ip` varchar(15) DEFAULT NULL COMMENT '访问者最后访问ip',
  PRIMARY KEY (`id`),
  KEY `user_object_action` (`user`,`object`,`action`),
  KEY `user_object_action_ip` (`user`,`object`,`action`,`ip`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='访问记录表';

-- ----------------------------
-- Records of yq_common_action_log
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_config`
-- ----------------------------
DROP TABLE IF EXISTS `yq_config`;
CREATE TABLE `yq_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '配置ID',
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '配置名称',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置类型',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '配置说明',
  `group` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置分组',
  `extra` varchar(255) NOT NULL DEFAULT '' COMMENT '配置值',
  `remark` varchar(100) NOT NULL COMMENT '配置说明',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态',
  `value` text NOT NULL COMMENT '配置值',
  `sort` smallint(3) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_name` (`name`),
  KEY `type` (`type`),
  KEY `group` (`group`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yq_config
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_guestbook`
-- ----------------------------
DROP TABLE IF EXISTS `yq_guestbook`;
CREATE TABLE `yq_guestbook` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL COMMENT '留言者姓名',
  `email` varchar(100) NOT NULL COMMENT '留言者邮箱',
  `title` varchar(255) DEFAULT NULL COMMENT '留言标题',
  `msg` text NOT NULL COMMENT '留言内容',
  `createtime` datetime NOT NULL COMMENT '留言时间',
  `status` smallint(2) NOT NULL DEFAULT '1' COMMENT '留言状态，1：正常，0：删除',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='留言表';

-- ----------------------------
-- Records of yq_guestbook
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_links`
-- ----------------------------
DROP TABLE IF EXISTS `yq_links`;
CREATE TABLE `yq_links` (
  `link_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `link_url` varchar(255) NOT NULL COMMENT '友情链接地址',
  `link_name` varchar(255) NOT NULL COMMENT '友情链接名称',
  `link_image` varchar(255) DEFAULT NULL COMMENT '友情链接图标',
  `link_target` varchar(25) NOT NULL DEFAULT '_blank' COMMENT '友情链接打开方式',
  `link_description` text NOT NULL COMMENT '友情链接描述',
  `link_status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  `link_rating` int(11) NOT NULL DEFAULT '0' COMMENT '友情链接评级',
  `link_rel` varchar(255) DEFAULT NULL COMMENT '链接与网站的关系',
  `listorder` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`link_id`),
  KEY `link_visible` (`link_status`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='友情链接表';

-- ----------------------------
-- Records of yq_links
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_member`
-- ----------------------------
DROP TABLE IF EXISTS `yq_member`;
CREATE TABLE `yq_member` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL COMMENT '电话',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `realname` varchar(255) NOT NULL COMMENT '姓名',
  `idcard` varchar(255) NOT NULL DEFAULT '暂无' COMMENT '简介',
  `is_lock` tinyint(1) NOT NULL DEFAULT '0' COMMENT '锁定 1是0否',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '审核信息 1已审核 0待审核 2审核不通过',
  `add_time` varchar(255) NOT NULL COMMENT '添加时间',
  `update_time` varchar(255) NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户列表';

-- ----------------------------
-- Records of yq_member
-- ----------------------------
INSERT INTO `yq_member` VALUES ('1', 'weiyong', '50f2e627095b4bc6366d3968ff54d74a', '111121', '420321100702210014', '0', '0', '1492505066', '1492505066');
INSERT INTO `yq_member` VALUES ('2', '123123123', '912940664e716524dcf1fc6c585d71c1', 'as', '130121199507010222', '0', '0', '1492583853', '1492583853');
INSERT INTO `yq_member` VALUES ('3', 'fsx123456', '05f750b8f242b8813051b8cf74832356', '胡豆豆', '412453166702165030', '0', '0', '1493707887', '1493707887');

-- ----------------------------
-- Table structure for `yq_menu`
-- ----------------------------
DROP TABLE IF EXISTS `yq_menu`;
CREATE TABLE `yq_menu` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `parentid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `app` varchar(30) NOT NULL DEFAULT '' COMMENT '应用名称app',
  `model` varchar(30) NOT NULL DEFAULT '' COMMENT '控制器',
  `action` varchar(50) NOT NULL DEFAULT '' COMMENT '操作名称',
  `data` varchar(50) NOT NULL DEFAULT '' COMMENT '额外参数',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '菜单类型  1：权限认证+菜单；0：只作为菜单',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态，1显示，0不显示',
  `name` varchar(50) NOT NULL COMMENT '菜单名称',
  `icon` varchar(50) DEFAULT NULL COMMENT '菜单图标',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  `listorder` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT '排序ID',
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `parentid` (`parentid`),
  KEY `model` (`model`)
) ENGINE=MyISAM AUTO_INCREMENT=274 DEFAULT CHARSET=utf8 COMMENT='后台菜单表';

-- ----------------------------
-- Records of yq_menu
-- ----------------------------
INSERT INTO `yq_menu` VALUES ('1', '0', 'Admin', 'Content', 'default', '', '0', '0', '内容管理', 'th', '', '300');
INSERT INTO `yq_menu` VALUES ('7', '1', 'Portal', 'AdminPost', 'index', '', '1', '1', '文章管理', '', '', '1');
INSERT INTO `yq_menu` VALUES ('8', '7', 'Portal', 'AdminPost', 'listorders', '', '1', '0', '文章排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('9', '7', 'Portal', 'AdminPost', 'top', '', '1', '0', '文章置顶', '', '', '0');
INSERT INTO `yq_menu` VALUES ('10', '7', 'Portal', 'AdminPost', 'recommend', '', '1', '0', '文章推荐', '', '', '0');
INSERT INTO `yq_menu` VALUES ('11', '7', 'Portal', 'AdminPost', 'move', '', '1', '0', '批量移动', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('12', '7', 'Portal', 'AdminPost', 'check', '', '1', '0', '文章审核', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('13', '7', 'Portal', 'AdminPost', 'delete', '', '1', '0', '删除文章', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('14', '7', 'Portal', 'AdminPost', 'edit', '', '1', '0', '编辑文章', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('15', '14', 'Portal', 'AdminPost', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('16', '7', 'Portal', 'AdminPost', 'add', '', '1', '0', '添加文章', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('17', '16', 'Portal', 'AdminPost', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('18', '1', 'Portal', 'AdminTerm', 'index', '', '0', '1', '栏目管理', '', '', '2');
INSERT INTO `yq_menu` VALUES ('19', '18', 'Portal', 'AdminTerm', 'listorders', '', '1', '0', '文章栏目排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('20', '18', 'Portal', 'AdminTerm', 'delete', '', '1', '0', '删除栏目', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('21', '18', 'Portal', 'AdminTerm', 'edit', '', '1', '0', '编辑栏目', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('22', '21', 'Portal', 'AdminTerm', 'edit_post', '', '1', '0', '提交栏目', '', '', '0');
INSERT INTO `yq_menu` VALUES ('23', '18', 'Portal', 'AdminTerm', 'add', '', '1', '0', '添加栏目', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('24', '23', 'Portal', 'AdminTerm', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('32', '1', 'Admin', 'Recycle', 'default', '', '1', '1', '回收站', '', '', '4');
INSERT INTO `yq_menu` VALUES ('33', '32', 'Portal', 'AdminPost', 'recyclebin', '', '1', '1', '文章回收', '', '', '0');
INSERT INTO `yq_menu` VALUES ('34', '33', 'Portal', 'AdminPost', 'restore', '', '1', '0', '文章还原', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('35', '33', 'Portal', 'AdminPost', 'clean', '', '1', '0', '彻底删除', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('39', '0', 'Admin', 'Extension', 'default', '', '0', '0', '扩展工具', 'cloud', '', '400');
INSERT INTO `yq_menu` VALUES ('40', '39', 'Admin', 'Backup', 'default', '', '1', '0', '备份管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('41', '40', 'Admin', 'Backup', 'restore', '', '1', '1', '数据还原', '', '', '0');
INSERT INTO `yq_menu` VALUES ('42', '40', 'Admin', 'Backup', 'index', '', '1', '1', '数据备份', '', '', '0');
INSERT INTO `yq_menu` VALUES ('43', '42', 'Admin', 'Backup', 'index_post', '', '1', '0', '提交数据备份', '', '', '0');
INSERT INTO `yq_menu` VALUES ('44', '40', 'Admin', 'Backup', 'download', '', '1', '0', '下载备份', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('45', '40', 'Admin', 'Backup', 'del_backup', '', '1', '0', '删除备份', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('46', '40', 'Admin', 'Backup', 'import', '', '1', '0', '数据备份导入', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('47', '39', 'Admin', 'Plugin', 'index', '', '1', '1', '插件管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('48', '47', 'Admin', 'Plugin', 'toggle', '', '1', '0', '插件启用切换', '', '', '0');
INSERT INTO `yq_menu` VALUES ('49', '47', 'Admin', 'Plugin', 'setting', '', '1', '0', '插件设置', '', '', '0');
INSERT INTO `yq_menu` VALUES ('50', '49', 'Admin', 'Plugin', 'setting_post', '', '1', '0', '插件设置提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('51', '47', 'Admin', 'Plugin', 'install', '', '1', '0', '插件安装', '', '', '0');
INSERT INTO `yq_menu` VALUES ('52', '47', 'Admin', 'Plugin', 'uninstall', '', '1', '0', '插件卸载', '', '', '0');
INSERT INTO `yq_menu` VALUES ('53', '39', 'Admin', 'Slide', 'default', '', '1', '1', '幻灯片', '', '', '1');
INSERT INTO `yq_menu` VALUES ('54', '53', 'Admin', 'Slide', 'index', '', '1', '1', '幻灯片管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('55', '54', 'Admin', 'Slide', 'listorders', '', '1', '0', '幻灯片排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('56', '54', 'Admin', 'Slide', 'toggle', '', '1', '0', '幻灯片显示切换', '', '', '0');
INSERT INTO `yq_menu` VALUES ('57', '54', 'Admin', 'Slide', 'delete', '', '1', '0', '删除幻灯片', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('58', '54', 'Admin', 'Slide', 'edit', '', '1', '0', '编辑幻灯片', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('59', '58', 'Admin', 'Slide', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('60', '54', 'Admin', 'Slide', 'add', '', '1', '0', '添加幻灯片', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('61', '60', 'Admin', 'Slide', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('62', '53', 'Admin', 'Slidecat', 'index', '', '1', '1', '幻灯片分类', '', '', '0');
INSERT INTO `yq_menu` VALUES ('63', '62', 'Admin', 'Slidecat', 'delete', '', '1', '0', '删除分类', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('64', '62', 'Admin', 'Slidecat', 'edit', '', '1', '0', '编辑分类', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('65', '64', 'Admin', 'Slidecat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('66', '62', 'Admin', 'Slidecat', 'add', '', '1', '0', '添加分类', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('67', '66', 'Admin', 'Slidecat', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('68', '39', 'Admin', 'Ad', 'index', '', '1', '1', '网站广告', '', '', '2');
INSERT INTO `yq_menu` VALUES ('69', '68', 'Admin', 'Ad', 'toggle', '', '1', '0', '广告显示切换', '', '', '0');
INSERT INTO `yq_menu` VALUES ('70', '68', 'Admin', 'Ad', 'delete', '', '1', '0', '删除广告', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('71', '68', 'Admin', 'Ad', 'edit', '', '1', '0', '编辑广告', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('72', '71', 'Admin', 'Ad', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('73', '68', 'Admin', 'Ad', 'add', '', '1', '0', '添加广告', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('74', '73', 'Admin', 'Ad', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('75', '39', 'Admin', 'Link', 'index', '', '0', '1', '友情链接', '', '', '3');
INSERT INTO `yq_menu` VALUES ('76', '75', 'Admin', 'Link', 'listorders', '', '1', '0', '友情链接排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('77', '75', 'Admin', 'Link', 'toggle', '', '1', '0', '友链显示切换', '', '', '0');
INSERT INTO `yq_menu` VALUES ('78', '75', 'Admin', 'Link', 'delete', '', '1', '0', '删除友情链接', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('79', '75', 'Admin', 'Link', 'edit', '', '1', '0', '编辑友情链接', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('80', '79', 'Admin', 'Link', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('81', '75', 'Admin', 'Link', 'add', '', '1', '0', '添加友情链接', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('82', '81', 'Admin', 'Link', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('83', '39', 'Api', 'Oauthadmin', 'setting', '', '1', '1', '第三方登陆', 'leaf', '', '4');
INSERT INTO `yq_menu` VALUES ('84', '83', 'Api', 'Oauthadmin', 'setting_post', '', '1', '0', '提交设置', '', '', '0');
INSERT INTO `yq_menu` VALUES ('85', '0', 'Admin', 'Menu', 'default', '', '1', '0', '菜单管理', 'list', '', '200');
INSERT INTO `yq_menu` VALUES ('86', '85', 'Admin', 'Navcat', 'default1', '', '1', '1', '前台菜单', '', '', '0');
INSERT INTO `yq_menu` VALUES ('87', '86', 'Admin', 'Nav', 'index', '', '1', '1', '菜单管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('88', '87', 'Admin', 'Nav', 'listorders', '', '1', '0', '前台导航排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('89', '87', 'Admin', 'Nav', 'delete', '', '1', '0', '删除菜单', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('90', '87', 'Admin', 'Nav', 'edit', '', '1', '0', '编辑菜单', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('91', '90', 'Admin', 'Nav', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('92', '87', 'Admin', 'Nav', 'add', '', '1', '0', '添加菜单', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('93', '92', 'Admin', 'Nav', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('94', '86', 'Admin', 'Navcat', 'index', '', '1', '1', '菜单分类', '', '', '0');
INSERT INTO `yq_menu` VALUES ('95', '94', 'Admin', 'Navcat', 'delete', '', '1', '0', '删除分类', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('96', '94', 'Admin', 'Navcat', 'edit', '', '1', '0', '编辑分类', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('97', '96', 'Admin', 'Navcat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('98', '94', 'Admin', 'Navcat', 'add', '', '1', '0', '添加分类', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('99', '98', 'Admin', 'Navcat', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('100', '85', 'Admin', 'Menu', 'index', '', '1', '1', '后台菜单', '', '', '0');
INSERT INTO `yq_menu` VALUES ('101', '100', 'Admin', 'Menu', 'add', '', '1', '0', '添加菜单', '', '', '0');
INSERT INTO `yq_menu` VALUES ('102', '101', 'Admin', 'Menu', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('103', '100', 'Admin', 'Menu', 'listorders', '', '1', '0', '后台菜单排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('104', '100', 'Admin', 'Menu', 'export_menu', '', '1', '0', '菜单备份', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('105', '100', 'Admin', 'Menu', 'edit', '', '1', '0', '编辑菜单', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('106', '105', 'Admin', 'Menu', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('107', '100', 'Admin', 'Menu', 'delete', '', '1', '0', '删除菜单', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('108', '100', 'Admin', 'Menu', 'lists', '', '1', '0', '所有菜单', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('109', '0', 'Admin', 'Setting', 'default', '', '0', '0', '设置', 'cogs', '', '160');
INSERT INTO `yq_menu` VALUES ('110', '109', 'Admin', 'Setting', 'userdefault', '', '0', '1', '个人信息', '', '', '10');
INSERT INTO `yq_menu` VALUES ('111', '110', 'Admin', 'User', 'userinfo', '', '1', '1', '修改信息', '', '', '0');
INSERT INTO `yq_menu` VALUES ('112', '111', 'Admin', 'User', 'userinfo_post', '', '1', '0', '修改信息提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('113', '110', 'Admin', 'Setting', 'password', '', '1', '1', '修改密码', '', '', '0');
INSERT INTO `yq_menu` VALUES ('114', '113', 'Admin', 'Setting', 'password_post', '', '1', '0', '提交修改', '', '', '0');
INSERT INTO `yq_menu` VALUES ('115', '109', 'Admin', 'Setting', 'site', '', '1', '0', '基本配置', '', '', '20');
INSERT INTO `yq_menu` VALUES ('116', '115', 'Admin', 'Setting', 'site_post', '', '1', '0', '提交修改', '', '', '0');
INSERT INTO `yq_menu` VALUES ('117', '115', 'Admin', 'Route', 'index', '', '1', '0', '路由列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('118', '115', 'Admin', 'Route', 'add', '', '1', '0', '路由添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('119', '118', 'Admin', 'Route', 'add_post', '', '1', '0', '路由添加提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('120', '115', 'Admin', 'Route', 'edit', '', '1', '0', '路由编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('121', '120', 'Admin', 'Route', 'edit_post', '', '1', '0', '路由编辑提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('122', '115', 'Admin', 'Route', 'delete', '', '1', '0', '路由删除', '', '', '0');
INSERT INTO `yq_menu` VALUES ('123', '115', 'Admin', 'Route', 'ban', '', '1', '0', '路由禁止', '', '', '0');
INSERT INTO `yq_menu` VALUES ('124', '115', 'Admin', 'Route', 'open', '', '1', '0', '路由启用', '', '', '0');
INSERT INTO `yq_menu` VALUES ('125', '115', 'Admin', 'Route', 'listorders', '', '1', '0', '路由排序', '', '', '0');
INSERT INTO `yq_menu` VALUES ('126', '109', 'Admin', 'Mailer', 'default', '', '1', '0', '邮箱配置', '', '', '30');
INSERT INTO `yq_menu` VALUES ('127', '126', 'Admin', 'Mailer', 'index', '', '1', '1', 'SMTP配置', '', '', '0');
INSERT INTO `yq_menu` VALUES ('128', '127', 'Admin', 'Mailer', 'index_post', '', '1', '0', '提交配置', '', '', '0');
INSERT INTO `yq_menu` VALUES ('129', '126', 'Admin', 'Mailer', 'active', '', '1', '1', '注册邮件模板', '', '', '0');
INSERT INTO `yq_menu` VALUES ('130', '129', 'Admin', 'Mailer', 'active_post', '', '1', '0', '提交模板', '', '', '0');
INSERT INTO `yq_menu` VALUES ('131', '109', 'Admin', 'Setting', 'clearcache', '', '1', '1', '清除缓存', '', '', '70');
INSERT INTO `yq_menu` VALUES ('132', '0', 'User', 'Indexadmin', 'default', '', '1', '1', '权限管理', 'group', '', '170');
INSERT INTO `yq_menu` VALUES ('133', '132', 'User', 'Indexadmin', 'default1', '', '1', '0', '用户组', '', '', '0');
INSERT INTO `yq_menu` VALUES ('134', '133', 'User', 'Indexadmin', 'index', '', '1', '1', '本站用户', 'leaf', '', '0');
INSERT INTO `yq_menu` VALUES ('135', '134', 'User', 'Indexadmin', 'ban', '', '1', '0', '拉黑会员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('136', '134', 'User', 'Indexadmin', 'cancelban', '', '1', '0', '启用会员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('137', '133', 'User', 'Oauthadmin', 'index', '', '1', '1', '第三方用户', 'leaf', '', '0');
INSERT INTO `yq_menu` VALUES ('138', '137', 'User', 'Oauthadmin', 'delete', '', '1', '0', '第三方用户解绑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('140', '132', 'Admin', 'Rbac', 'default', '', '1', '1', '角色管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('141', '140', 'Admin', 'Rbac', 'member', '', '1', '0', '成员管理', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('142', '140', 'Admin', 'Rbac', 'authorize', '', '1', '0', '权限设置', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('143', '142', 'Admin', 'Rbac', 'authorize_post', '', '1', '0', '提交设置', '', '', '0');
INSERT INTO `yq_menu` VALUES ('144', '140', 'Admin', 'Rbac', 'roleedit', '', '1', '0', '编辑角色', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('145', '144', 'Admin', 'Rbac', 'roleedit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `yq_menu` VALUES ('146', '140', 'Admin', 'Rbac', 'roledelete', '', '1', '0', '删除角色', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('147', '140', 'Admin', 'Rbac', 'roleadd', '', '1', '1', '添加角色', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('148', '147', 'Admin', 'Rbac', 'roleadd_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `yq_menu` VALUES ('149', '132', 'Admin', 'User', 'index', '', '1', '1', '管理员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('150', '149', 'Admin', 'User', 'delete', '', '1', '0', '删除管理员', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('151', '149', 'Admin', 'User', 'edit', '', '1', '0', '管理员编辑', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('152', '151', 'Admin', 'User', 'edit_post', '', '1', '0', '编辑提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('153', '149', 'Admin', 'User', 'add', '', '1', '0', '管理员添加', '', '', '1000');
INSERT INTO `yq_menu` VALUES ('154', '153', 'Admin', 'User', 'add_post', '', '1', '0', '添加提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('155', '47', 'Admin', 'Plugin', 'update', '', '1', '0', '插件更新', '', '', '0');
INSERT INTO `yq_menu` VALUES ('156', '109', 'Admin', 'Storage', 'index', '', '1', '0', '文件存储', '', '', '40');
INSERT INTO `yq_menu` VALUES ('157', '156', 'Admin', 'Storage', 'setting_post', '', '1', '0', '文件存储设置提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('158', '54', 'Admin', 'Slide', 'ban', '', '1', '0', '禁用幻灯片', '', '', '0');
INSERT INTO `yq_menu` VALUES ('159', '54', 'Admin', 'Slide', 'cancelban', '', '1', '0', '启用幻灯片', '', '', '0');
INSERT INTO `yq_menu` VALUES ('160', '149', 'Admin', 'User', 'ban', '', '1', '0', '禁用管理员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('161', '149', 'Admin', 'User', 'cancelban', '', '1', '0', '启用管理员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('166', '127', 'Admin', 'Mailer', 'test', '', '1', '0', '测试邮件', '', '', '0');
INSERT INTO `yq_menu` VALUES ('167', '109', 'Admin', 'Setting', 'upload', '', '1', '0', '上传设置', '', '', '50');
INSERT INTO `yq_menu` VALUES ('168', '167', 'Admin', 'Setting', 'upload_post', '', '1', '0', '上传设置提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('169', '7', 'Portal', 'AdminPost', 'copy', '', '1', '0', '文章批量复制', '', '', '0');
INSERT INTO `yq_menu` VALUES ('174', '100', 'Admin', 'Menu', 'backup_menu', '', '1', '0', '备份菜单', '', '', '0');
INSERT INTO `yq_menu` VALUES ('175', '100', 'Admin', 'Menu', 'export_menu_lang', '', '1', '0', '导出后台菜单多语言包', '', '', '0');
INSERT INTO `yq_menu` VALUES ('176', '100', 'Admin', 'Menu', 'restore_menu', '', '1', '0', '还原菜单', '', '', '0');
INSERT INTO `yq_menu` VALUES ('177', '100', 'Admin', 'Menu', 'getactions', '', '1', '0', '导入新菜单', '', '', '0');
INSERT INTO `yq_menu` VALUES ('187', '0', 'Content', 'Member', 'default', '', '1', '1', '用户管理', 'user', '', '100');
INSERT INTO `yq_menu` VALUES ('188', '0', 'Content', 'Experts', 'default', 'user', '1', '1', '专家管理', 'user', '', '110');
INSERT INTO `yq_menu` VALUES ('189', '0', 'Content', 'Benji', 'default', '', '1', '1', '本级舆情管理', 'area-chart', '', '10');
INSERT INTO `yq_menu` VALUES ('190', '0', 'Content', 'Redian', 'default', '', '1', '1', '热点舆情管理', 'area-chart', '', '20');
INSERT INTO `yq_menu` VALUES ('191', '0', 'Content', 'Linkage', 'default', '', '1', '1', '单位联动管理', 'comments', '', '30');
INSERT INTO `yq_menu` VALUES ('192', '0', 'Content', 'Judged', 'default', '', '1', '1', '专家研判管理', 'comments-o', '', '40');
INSERT INTO `yq_menu` VALUES ('193', '0', 'Content', 'Case', 'default', '', '1', '1', '案例分享管理', 'bank', '', '90');
INSERT INTO `yq_menu` VALUES ('194', '0', 'Content', 'Special', 'default', '', '1', '1', '舆情专报管理', 'area-chart', '', '60');
INSERT INTO `yq_menu` VALUES ('202', '0', 'Content', 'Performance', 'default', '', '1', '1', '绩效管理', 'cubes', '', '50');
INSERT INTO `yq_menu` VALUES ('221', '196', 'Content', 'Train', 'index', '', '1', '1', '培训内容管理', '', '', '1');
INSERT INTO `yq_menu` VALUES ('196', '0', 'Content', 'Train', 'default', '', '1', '1', '舆情培训管理', 'graduation-cap', '', '80');
INSERT INTO `yq_menu` VALUES ('198', '0', 'Content', 'Push', 'default', '', '1', '1', '推送消息管理', 'comment', '', '130');
INSERT INTO `yq_menu` VALUES ('199', '0', 'Content', 'Feedback', 'default', '', '1', '1', '意见反馈管理', 'paper-plane', '', '140');
INSERT INTO `yq_menu` VALUES ('200', '0', 'Content', 'Version', 'default', '', '1', '1', '版本管理', 'rocket', '', '150');
INSERT INTO `yq_menu` VALUES ('204', '187', 'Content', 'Organ', 'index', '', '1', '1', '组织管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('205', '188', 'Content', 'Experts', 'index', '', '1', '1', '专家列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('206', '188', 'Content', 'Experts', 'add', '', '1', '1', '增加专家', '', '', '0');
INSERT INTO `yq_menu` VALUES ('207', '187', 'Content', 'Member', 'index', '', '1', '1', '用户列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('208', '187', 'Content', 'Member', 'add', '', '1', '1', '增加用户', '', '', '0');
INSERT INTO `yq_menu` VALUES ('209', '189', 'Content', 'Benji', 'index', '', '1', '1', '舆情列表', '', '', '1');
INSERT INTO `yq_menu` VALUES ('210', '189', 'Content', 'Benji', 'add', '', '1', '1', '发布舆情', '', '', '2');
INSERT INTO `yq_menu` VALUES ('211', '187', 'Content', 'Tags', 'index', '', '1', '1', '定制标签管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('212', '190', 'Content', 'Redian', 'index', '', '1', '1', '舆情列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('213', '190', 'Content', 'Redian', 'add', '', '1', '1', '发布舆情', '', '', '0');
INSERT INTO `yq_menu` VALUES ('214', '191', 'Content', 'Linkage', 'index', '', '1', '1', '会商组列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('215', '192', 'Content', 'Judged', 'apply', '', '1', '1', '研判请求', '', '', '0');
INSERT INTO `yq_menu` VALUES ('216', '192', 'Content', 'Judged', 'reply', '', '1', '1', '研判回复', '', '', '0');
INSERT INTO `yq_menu` VALUES ('217', '193', 'Content', 'Case', 'index', '', '1', '1', '案例列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('218', '193', 'Content', 'Case', 'add', '', '1', '1', '增加案例', '', '', '0');
INSERT INTO `yq_menu` VALUES ('219', '194', 'Content', 'Special', 'index', '', '1', '1', '舆情专报列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('220', '194', 'Content', 'Special', 'add', '', '1', '1', '增加舆情专报', '', '', '0');
INSERT INTO `yq_menu` VALUES ('222', '196', 'Content', 'Train', 'ask', '', '1', '1', '学生提问管理', '', '', '3');
INSERT INTO `yq_menu` VALUES ('223', '196', 'Content', 'Exam', 'index', '', '1', '1', '考试内容管理', '', '', '4');
INSERT INTO `yq_menu` VALUES ('224', '196', 'Content', 'Exam', 'score', '', '1', '1', '考试成绩列表', '', '', '5');
INSERT INTO `yq_menu` VALUES ('225', '198', 'Content', 'Push', 'index', '', '1', '1', '消息列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('226', '198', 'Content', 'Push', 'add', '', '1', '1', '推送消息', '', '', '0');
INSERT INTO `yq_menu` VALUES ('227', '199', 'Content', 'Feedback', 'index', '', '1', '1', '意见反馈列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('228', '200', 'Content', 'Version', 'index', '', '1', '1', '历史版本', '', '', '0');
INSERT INTO `yq_menu` VALUES ('229', '200', 'Content', 'Version', 'add', '', '1', '1', '发布新版本', '', '', '0');
INSERT INTO `yq_menu` VALUES ('230', '196', 'Content', 'Train', 'add', '', '1', '1', '添加培训课程', '', '', '2');
INSERT INTO `yq_menu` VALUES ('197', '0', 'Content', 'Search', 'default', '', '1', '1', '搜索管理', '', '', '85');
INSERT INTO `yq_menu` VALUES ('231', '197', 'Content', 'Search', 'index', '', '1', '1', '历史搜索记录', '', '', '0');
INSERT INTO `yq_menu` VALUES ('232', '140', 'Admin', 'Rbac', 'index', '', '1', '1', '角色列表', '', '', '0');
INSERT INTO `yq_menu` VALUES ('233', '202', 'Content', 'Wangping', 'add', '', '1', '1', '添加网评员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('234', '202', 'Content', 'Wangping', 'index', '', '1', '1', '网评员管理', '', '', '0');
INSERT INTO `yq_menu` VALUES ('235', '202', 'Content', 'Task', 'index', '', '1', '1', '任务大厅', '', '', '0');
INSERT INTO `yq_menu` VALUES ('236', '202', 'Content', 'Task', 'tongji', '', '1', '1', '网评员统计', '', '', '0');
INSERT INTO `yq_menu` VALUES ('237', '202', 'Content', 'Account', 'index', '', '1', '1', '马甲账号', '', '', '0');
INSERT INTO `yq_menu` VALUES ('238', '235', 'Content', 'Task', 'receive', '', '1', '0', '接收任务', '', '', '0');
INSERT INTO `yq_menu` VALUES ('239', '235', 'Content', 'Task', 'back', '', '1', '0', '反馈任务', '', '', '0');
INSERT INTO `yq_menu` VALUES ('240', '235', 'Content', 'Task', 'detail', '', '1', '0', '任务详情', '', '', '0');
INSERT INTO `yq_menu` VALUES ('241', '189', 'Content', 'Judged', 'applicant', '', '1', '1', '批复信息管理', '', '', '4');
INSERT INTO `yq_menu` VALUES ('242', '189', 'Content', 'Benji', 'search', '', '1', '1', '舆情搜索', '', '', '0');
INSERT INTO `yq_menu` VALUES ('243', '189', 'Content', 'Judged', 'feedback', '', '1', '1', '批复反馈管理', '', '', '5');
INSERT INTO `yq_menu` VALUES ('244', '198', 'Content', 'Push', 'update', '', '1', '0', '推送消息提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('245', '191', 'Content', 'Linkage', 'edit', '', '1', '0', '修改会商组 ', '', '', '0');
INSERT INTO `yq_menu` VALUES ('246', '191', 'Content', 'Linkage', 'update', '', '1', '0', '修改会商组提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('247', '191', 'Content', 'Linkage', 'del', '', '1', '0', '删除会商组', '', '', '0');
INSERT INTO `yq_menu` VALUES ('248', '191', 'Content', 'Linkage', 'users', '', '1', '0', '查看会商组成员', '', '', '0');
INSERT INTO `yq_menu` VALUES ('249', '191', 'Content', 'Linkage', 'chat', '', '1', '0', '查看聊天记录', '', '', '0');
INSERT INTO `yq_menu` VALUES ('250', '187', 'Content', 'Linkage', 'group', '', '1', '0', '查看用户加入的会商组', '', '', '0');
INSERT INTO `yq_menu` VALUES ('251', '188', 'Content', 'Linkage', 'group', 'type=group', '1', '0', '查看专家加入的会商组', '', '', '0');
INSERT INTO `yq_menu` VALUES ('252', '204', 'Content', 'Organ', 'add', '', '1', '0', '添加组织', '', '', '0');
INSERT INTO `yq_menu` VALUES ('253', '204', 'Content', 'Organ', 'edit', '', '1', '0', '修改组织', '', '', '0');
INSERT INTO `yq_menu` VALUES ('254', '204', 'Content', 'Organ', 'update', '', '1', '0', '添加，修改组织信息提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('255', '204', 'Content', 'Organ', 'del', '', '1', '0', '删除组织', '', '', '0');
INSERT INTO `yq_menu` VALUES ('256', '187', 'Content', 'Member', 'edit', '', '1', '0', '修改用户', '', '', '0');
INSERT INTO `yq_menu` VALUES ('257', '187', 'Content', 'Member', 'del', '', '1', '0', '删除用户', '', '', '0');
INSERT INTO `yq_menu` VALUES ('258', '187', 'Content', 'User', 'update', '', '1', '0', '增加、修改用户信息提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('259', '188', 'Content', 'Experts', 'edit', '', '1', '0', '修改专家', '', '', '0');
INSERT INTO `yq_menu` VALUES ('260', '188', 'Content', 'Experts', 'update', '', '1', '0', '增加、修改专家提交', '', '', '0');
INSERT INTO `yq_menu` VALUES ('261', '188', 'Content', 'Experts', 'del', '', '1', '0', '删除专家', '', '', '0');
INSERT INTO `yq_menu` VALUES ('262', '188', 'Content', 'Experts', 'lock', '', '1', '0', '冻结 、 解锁 账号', '', '', '0');
INSERT INTO `yq_menu` VALUES ('263', '187', 'Content', 'Member', 'lock', '', '1', '0', '冻结 、 解锁 账号', '', '', '0');
INSERT INTO `yq_menu` VALUES ('264', '189', 'Content', 'Benji', 'edit', '', '1', '0', '修改舆情', '', '', '0');
INSERT INTO `yq_menu` VALUES ('265', '189', 'Content', 'Benji', 'update', '', '1', '0', '修改/增加舆情保存', '', '', '0');
INSERT INTO `yq_menu` VALUES ('266', '189', 'Content', 'Benji', 'del', '', '1', '0', '删除舆情', '', '', '0');
INSERT INTO `yq_menu` VALUES ('267', '189', 'Content', 'Member', 'datalist', '', '1', '0', '推送选择用户', '', '', '0');
INSERT INTO `yq_menu` VALUES ('268', '189', 'Content', 'Organ', 'datalist', '', '1', '0', '推送选择组织', '', '', '0');
INSERT INTO `yq_menu` VALUES ('269', '192', 'Content', 'Judged', 'applydel', '', '1', '0', '研判申请删除', '', '', '0');
INSERT INTO `yq_menu` VALUES ('270', '189', 'Content', 'Judged', 'applicantdel', '', '1', '0', '信息批复删除', '', '', '0');
INSERT INTO `yq_menu` VALUES ('271', '192', 'Content', 'Judged', 'ureply', '', '1', '0', '修改研判回复信息', '', '', '0');
INSERT INTO `yq_menu` VALUES ('272', '189', 'Content', 'Benji', 'area', '', '1', '0', '区域联动', '', '', '0');
INSERT INTO `yq_menu` VALUES ('273', '187', 'Content', 'Member', 'getleader', '', '1', '0', '获取当前组织下用户', '', '', '0');

-- ----------------------------
-- Table structure for `yq_nav`
-- ----------------------------
DROP TABLE IF EXISTS `yq_nav`;
CREATE TABLE `yq_nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL COMMENT '导航分类 id',
  `parentid` int(11) NOT NULL COMMENT '导航父 id',
  `label` varchar(255) NOT NULL COMMENT '导航标题',
  `target` varchar(50) DEFAULT NULL COMMENT '打开方式',
  `href` varchar(255) NOT NULL COMMENT '导航链接',
  `icon` varchar(255) NOT NULL COMMENT '导航图标',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  `listorder` int(6) DEFAULT '0' COMMENT '排序',
  `path` varchar(255) NOT NULL DEFAULT '0' COMMENT '层级关系',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='前台导航表';

-- ----------------------------
-- Records of yq_nav
-- ----------------------------
INSERT INTO `yq_nav` VALUES ('1', '1', '0', '首页', '', 'home', '', '1', '0', '0-1');
INSERT INTO `yq_nav` VALUES ('2', '1', '0', '列表演示', '', 'a:2:{s:6:\"action\";s:17:\"Portal/List/index\";s:5:\"param\";a:1:{s:2:\"id\";s:1:\"1\";}}', '', '1', '0', '0-2');
INSERT INTO `yq_nav` VALUES ('3', '1', '0', '瀑布流', '', 'a:2:{s:6:\"action\";s:17:\"Portal/List/index\";s:5:\"param\";a:1:{s:2:\"id\";s:1:\"2\";}}', '', '1', '0', '0-3');
INSERT INTO `yq_nav` VALUES ('4', '1', '2', 'sat', '', 'home', '', '1', '0', '0-2-4');

-- ----------------------------
-- Table structure for `yq_nav_cat`
-- ----------------------------
DROP TABLE IF EXISTS `yq_nav_cat`;
CREATE TABLE `yq_nav_cat` (
  `navcid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '导航分类名',
  `active` int(1) NOT NULL DEFAULT '1' COMMENT '是否为主菜单，1是，0不是',
  `remark` text COMMENT '备注',
  PRIMARY KEY (`navcid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='前台导航分类表';

-- ----------------------------
-- Records of yq_nav_cat
-- ----------------------------
INSERT INTO `yq_nav_cat` VALUES ('1', '主导航', '1', '主导航');

-- ----------------------------
-- Table structure for `yq_oauth_user`
-- ----------------------------
DROP TABLE IF EXISTS `yq_oauth_user`;
CREATE TABLE `yq_oauth_user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `from` varchar(20) NOT NULL COMMENT '用户来源key',
  `name` varchar(30) NOT NULL COMMENT '第三方昵称',
  `head_img` varchar(200) NOT NULL COMMENT '头像',
  `uid` int(20) NOT NULL COMMENT '关联的本站用户id',
  `create_time` datetime NOT NULL COMMENT '绑定时间',
  `last_login_time` datetime NOT NULL COMMENT '最后登录时间',
  `last_login_ip` varchar(16) NOT NULL COMMENT '最后登录ip',
  `login_times` int(6) NOT NULL COMMENT '登录次数',
  `status` tinyint(2) NOT NULL,
  `access_token` varchar(512) NOT NULL,
  `expires_date` int(11) NOT NULL COMMENT 'access_token过期时间',
  `openid` varchar(40) NOT NULL COMMENT '第三方用户id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='第三方用户表';

-- ----------------------------
-- Records of yq_oauth_user
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_options`
-- ----------------------------
DROP TABLE IF EXISTS `yq_options`;
CREATE TABLE `yq_options` (
  `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(64) NOT NULL COMMENT '配置名',
  `option_value` longtext NOT NULL COMMENT '配置值',
  `autoload` int(2) NOT NULL DEFAULT '1' COMMENT '是否自动加载',
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_name` (`option_name`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='全站配置表';

-- ----------------------------
-- Records of yq_options
-- ----------------------------
INSERT INTO `yq_options` VALUES ('1', 'member_email_active', '{\"title\":\"ThinkCMF\\u90ae\\u4ef6\\u6fc0\\u6d3b\\u901a\\u77e5.\",\"template\":\"<p>\\u672c\\u90ae\\u4ef6\\u6765\\u81ea<a href=\\\"http:\\/\\/www.thinkcmf.com\\\">ThinkCMF<\\/a><br\\/><br\\/>&nbsp; &nbsp;<strong>---------------<strong style=\\\"white-space: normal;\\\">---<\\/strong><\\/strong><br\\/>&nbsp; &nbsp;<strong>\\u5e10\\u53f7\\u6fc0\\u6d3b\\u8bf4\\u660e<\\/strong><br\\/>&nbsp; &nbsp;<strong>---------------<strong style=\\\"white-space: normal;\\\">---<\\/strong><\\/strong><br\\/><br\\/>&nbsp; &nbsp; \\u5c0a\\u656c\\u7684<span style=\\\"FONT-SIZE: 16px; FONT-FAMILY: Arial; COLOR: rgb(51,51,51); LINE-HEIGHT: 18px; BACKGROUND-COLOR: rgb(255,255,255)\\\">#username#\\uff0c\\u60a8\\u597d\\u3002<\\/span>\\u5982\\u679c\\u60a8\\u662fThinkCMF\\u7684\\u65b0\\u7528\\u6237\\uff0c\\u6216\\u5728\\u4fee\\u6539\\u60a8\\u7684\\u6ce8\\u518cEmail\\u65f6\\u4f7f\\u7528\\u4e86\\u672c\\u5730\\u5740\\uff0c\\u6211\\u4eec\\u9700\\u8981\\u5bf9\\u60a8\\u7684\\u5730\\u5740\\u6709\\u6548\\u6027\\u8fdb\\u884c\\u9a8c\\u8bc1\\u4ee5\\u907f\\u514d\\u5783\\u573e\\u90ae\\u4ef6\\u6216\\u5730\\u5740\\u88ab\\u6ee5\\u7528\\u3002<br\\/>&nbsp; &nbsp; \\u60a8\\u53ea\\u9700\\u70b9\\u51fb\\u4e0b\\u9762\\u7684\\u94fe\\u63a5\\u5373\\u53ef\\u6fc0\\u6d3b\\u60a8\\u7684\\u5e10\\u53f7\\uff1a<br\\/>&nbsp; &nbsp; <a title=\\\"\\\" href=\\\"http:\\/\\/#link#\\\" target=\\\"_self\\\">http:\\/\\/#link#<\\/a><br\\/>&nbsp; &nbsp; (\\u5982\\u679c\\u4e0a\\u9762\\u4e0d\\u662f\\u94fe\\u63a5\\u5f62\\u5f0f\\uff0c\\u8bf7\\u5c06\\u8be5\\u5730\\u5740\\u624b\\u5de5\\u7c98\\u8d34\\u5230\\u6d4f\\u89c8\\u5668\\u5730\\u5740\\u680f\\u518d\\u8bbf\\u95ee)<br\\/>&nbsp; &nbsp; \\u611f\\u8c22\\u60a8\\u7684\\u8bbf\\u95ee\\uff0c\\u795d\\u60a8\\u4f7f\\u7528\\u6109\\u5feb\\uff01<br\\/><br\\/>&nbsp; &nbsp; \\u6b64\\u81f4<br\\/>&nbsp; &nbsp; ThinkCMF \\u7ba1\\u7406\\u56e2\\u961f.<\\/p>\"}', '1');
INSERT INTO `yq_options` VALUES ('6', 'site_options', '{\"site_name\":\"\\u8282\\u9759\\u4f73\",\"site_admin_url_password\":\"\",\"site_tpl\":\"simplebootx\",\"site_adminstyle\":\"flat\",\"site_icp\":\"\",\"site_admin_email\":\"admin@qq.com\",\"site_tongji\":\"\",\"site_copyright\":\"\",\"site_seo_title\":\"ThinkCMF\\u5185\\u5bb9\\u7ba1\\u7406\\u6846\\u67b6\",\"site_seo_keywords\":\"ThinkCMF,php,\\u5185\\u5bb9\\u7ba1\\u7406\\u6846\\u67b6,cmf,cms,\\u7b80\\u7ea6\\u98ce, simplewind,framework\",\"site_seo_description\":\"ThinkCMF\\u662f\\u7b80\\u7ea6\\u98ce\\u7f51\\u7edc\\u79d1\\u6280\\u53d1\\u5e03\\u7684\\u4e00\\u6b3e\\u7528\\u4e8e\\u5feb\\u901f\\u5f00\\u53d1\\u7684\\u5185\\u5bb9\\u7ba1\\u7406\\u6846\\u67b6\",\"urlmode\":\"0\",\"html_suffix\":\"\",\"comment_time_interval\":\"60\"}', '1');
INSERT INTO `yq_options` VALUES ('7', 'cmf_settings', '{\"banned_usernames\":\"\"}', '1');
INSERT INTO `yq_options` VALUES ('8', 'cdn_settings', '{\"cdn_static_root\":\"\"}', '1');

-- ----------------------------
-- Table structure for `yq_plugins`
-- ----------------------------
DROP TABLE IF EXISTS `yq_plugins`;
CREATE TABLE `yq_plugins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(50) NOT NULL COMMENT '插件名，英文',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '插件名称',
  `description` text COMMENT '插件描述',
  `type` tinyint(2) DEFAULT '0' COMMENT '插件类型, 1:网站；8;微信',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态；1开启；',
  `config` text COMMENT '插件配置',
  `hooks` varchar(255) DEFAULT NULL COMMENT '实现的钩子;以“，”分隔',
  `has_admin` tinyint(2) DEFAULT '0' COMMENT '插件是否有后台管理界面',
  `author` varchar(50) DEFAULT '' COMMENT '插件作者',
  `version` varchar(20) DEFAULT '' COMMENT '插件版本号',
  `createtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '插件安装时间',
  `listorder` smallint(6) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='插件表';

-- ----------------------------
-- Records of yq_plugins
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_posts`
-- ----------------------------
DROP TABLE IF EXISTS `yq_posts`;
CREATE TABLE `yq_posts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) unsigned DEFAULT '0' COMMENT '发表者id',
  `post_keywords` varchar(150) NOT NULL COMMENT 'seo keywords',
  `post_source` varchar(150) DEFAULT NULL COMMENT '转载文章的来源',
  `post_date` datetime DEFAULT '2000-01-01 00:00:00' COMMENT 'post发布日期',
  `post_content` longtext COMMENT 'post内容',
  `post_title` text COMMENT 'post标题',
  `post_excerpt` text COMMENT 'post摘要',
  `post_status` int(2) DEFAULT '1' COMMENT 'post状态，1已审核，0未审核,3删除',
  `comment_status` int(2) DEFAULT '1' COMMENT '评论状态，1允许，0不允许',
  `post_modified` datetime DEFAULT '2000-01-01 00:00:00' COMMENT 'post更新时间，可在前台修改，显示给用户',
  `post_content_filtered` longtext,
  `post_parent` bigint(20) unsigned DEFAULT '0' COMMENT 'post的父级post id,表示post层级关系',
  `post_type` int(2) DEFAULT '1' COMMENT 'post类型，1文章,2页面',
  `post_mime_type` varchar(100) DEFAULT '',
  `comment_count` bigint(20) DEFAULT '0',
  `smeta` text COMMENT 'post的扩展字段，保存相关扩展属性，如缩略图；格式为json',
  `post_hits` int(11) DEFAULT '0' COMMENT 'post点击数，查看数',
  `post_like` int(11) DEFAULT '0' COMMENT 'post赞数',
  `istop` tinyint(1) NOT NULL DEFAULT '0' COMMENT '置顶 1置顶； 0不置顶',
  `recommended` tinyint(1) NOT NULL DEFAULT '0' COMMENT '推荐 1推荐 0不推荐',
  PRIMARY KEY (`id`),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`id`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`),
  KEY `post_date` (`post_date`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Portal文章表';

-- ----------------------------
-- Records of yq_posts
-- ----------------------------
INSERT INTO `yq_posts` VALUES ('1', '1', '', '12', '2016-11-23 18:05:19', '<p><span style=\"color: rgb(44, 62, 80); font-family: &quot;Microsoft YaHei&quot;, Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);\">多关键词之间用空格或者英文逗号隔开</span></p>', '多关键词之间用空格或者英文逗号隔开', '多关键词之间用空格或者英文逗号隔开', '1', '1', '2016-11-23 18:05:57', null, '0', '1', '', '0', '{\"thumb\":\"portal\\/20161123\\/58356a01ce9b0.jpg\",\"template\":\"\"}', '3', '0', '0', '0');

-- ----------------------------
-- Table structure for `yq_role`
-- ----------------------------
DROP TABLE IF EXISTS `yq_role`;
CREATE TABLE `yq_role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '角色名称',
  `pid` smallint(6) DEFAULT NULL COMMENT '父角色ID',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '状态',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `listorder` int(3) NOT NULL DEFAULT '0' COMMENT '排序字段',
  PRIMARY KEY (`id`),
  KEY `parentId` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of yq_role
-- ----------------------------
INSERT INTO `yq_role` VALUES ('1', '超级管理员', '0', '1', '拥有网站最高管理员权限！', '1329633709', '1329633709', '0');
INSERT INTO `yq_role` VALUES ('2', '网评员', null, '1', '网评员', '1484645448', '0', '0');
INSERT INTO `yq_role` VALUES ('4', '区域管理员', null, '1', '区域管理员', '1491386067', '0', '0');

-- ----------------------------
-- Table structure for `yq_role_user`
-- ----------------------------
DROP TABLE IF EXISTS `yq_role_user`;
CREATE TABLE `yq_role_user` (
  `role_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '角色 id',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户角色对应表';

-- ----------------------------
-- Records of yq_role_user
-- ----------------------------
INSERT INTO `yq_role_user` VALUES ('4', '15');
INSERT INTO `yq_role_user` VALUES ('2', '17');
INSERT INTO `yq_role_user` VALUES ('4', '18');

-- ----------------------------
-- Table structure for `yq_route`
-- ----------------------------
DROP TABLE IF EXISTS `yq_route`;
CREATE TABLE `yq_route` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '路由id',
  `full_url` varchar(255) DEFAULT NULL COMMENT '完整url， 如：portal/list/index?id=1',
  `url` varchar(255) DEFAULT NULL COMMENT '实际显示的url',
  `listorder` int(5) DEFAULT '0' COMMENT '排序，优先级，越小优先级越高',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态，1：启用 ;0：不启用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='url路由表';

-- ----------------------------
-- Records of yq_route
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_slide`
-- ----------------------------
DROP TABLE IF EXISTS `yq_slide`;
CREATE TABLE `yq_slide` (
  `slide_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slide_cid` int(11) NOT NULL COMMENT '幻灯片分类 id',
  `slide_name` varchar(255) NOT NULL COMMENT '幻灯片名称',
  `slide_pic` varchar(255) DEFAULT NULL COMMENT '幻灯片图片',
  `slide_url` varchar(255) DEFAULT NULL COMMENT '幻灯片链接',
  `slide_des` varchar(255) DEFAULT NULL COMMENT '幻灯片描述',
  `slide_content` text COMMENT '幻灯片内容',
  `slide_status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  `listorder` int(10) DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`slide_id`),
  KEY `slide_cid` (`slide_cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='幻灯片表';

-- ----------------------------
-- Records of yq_slide
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_slide_cat`
-- ----------------------------
DROP TABLE IF EXISTS `yq_slide_cat`;
CREATE TABLE `yq_slide_cat` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) NOT NULL COMMENT '幻灯片分类',
  `cat_idname` varchar(255) NOT NULL COMMENT '幻灯片分类标识',
  `cat_remark` text COMMENT '分类备注',
  `cat_status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  PRIMARY KEY (`cid`),
  KEY `cat_idname` (`cat_idname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='幻灯片分类表';

-- ----------------------------
-- Records of yq_slide_cat
-- ----------------------------

-- ----------------------------
-- Table structure for `yq_terms`
-- ----------------------------
DROP TABLE IF EXISTS `yq_terms`;
CREATE TABLE `yq_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `name` varchar(200) DEFAULT NULL COMMENT '分类名称',
  `slug` varchar(200) DEFAULT '',
  `taxonomy` varchar(32) DEFAULT NULL COMMENT '分类类型',
  `description` longtext COMMENT '分类描述',
  `parent` bigint(20) unsigned DEFAULT '0' COMMENT '分类父id',
  `count` bigint(20) DEFAULT '0' COMMENT '分类文章数',
  `path` varchar(500) DEFAULT NULL COMMENT '分类层级关系路径',
  `seo_title` varchar(500) DEFAULT NULL,
  `seo_keywords` varchar(500) DEFAULT NULL,
  `seo_description` varchar(500) DEFAULT NULL,
  `list_tpl` varchar(50) DEFAULT NULL COMMENT '分类列表模板',
  `one_tpl` varchar(50) DEFAULT NULL COMMENT '分类文章页模板',
  `listorder` int(5) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1发布，0不发布',
  `content` text NOT NULL,
  PRIMARY KEY (`term_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='Portal 文章分类表';

-- ----------------------------
-- Records of yq_terms
-- ----------------------------
INSERT INTO `yq_terms` VALUES ('1', '列表演示', '', 'article', '', '0', '0', '0-1', '', '', '', 'list', 'article', '0', '1', '');
INSERT INTO `yq_terms` VALUES ('2', '瀑布流', '', 'picture', '0000', '0', '0', '0-2', '111', '222', '333', 'list', 'article', '0', '1', '');
INSERT INTO `yq_terms` VALUES ('3', '关于我们', '', 'page', '', '0', '0', '0-3', '', '', '', 'list', 'article', '0', '1', '&lt;p&gt;关于我们&lt;/p&gt;');
INSERT INTO `yq_terms` VALUES ('4', '瀑布2', '', 'page', '', '2', '0', '0-2-4', '', '', '', null, null, '0', '1', '');
INSERT INTO `yq_terms` VALUES ('5', '瀑布3', '', 'article', 'd', '2', '0', '0-2-5', '', '', '', null, null, '0', '1', '');

-- ----------------------------
-- Table structure for `yq_term_relationships`
-- ----------------------------
DROP TABLE IF EXISTS `yq_term_relationships`;
CREATE TABLE `yq_term_relationships` (
  `tid` bigint(20) NOT NULL AUTO_INCREMENT,
  `object_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'posts表里文章id',
  `term_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '分类id',
  `listorder` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1发布，0不发布',
  PRIMARY KEY (`tid`),
  KEY `term_taxonomy_id` (`term_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Portal 文章分类对应表';

-- ----------------------------
-- Records of yq_term_relationships
-- ----------------------------
INSERT INTO `yq_term_relationships` VALUES ('1', '1', '1', '0', '1');
INSERT INTO `yq_term_relationships` VALUES ('2', '1', '2', '0', '1');

-- ----------------------------
-- Table structure for `yq_users`
-- ----------------------------
DROP TABLE IF EXISTS `yq_users`;
CREATE TABLE `yq_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '前台归属用户id',
  `user_login` varchar(60) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_pass` varchar(64) NOT NULL DEFAULT '' COMMENT '登录密码；sp_password加密',
  `user_nicename` varchar(50) NOT NULL DEFAULT '' COMMENT '用户美名',
  `user_email` varchar(100) NOT NULL DEFAULT '' COMMENT '登录邮箱',
  `user_url` varchar(100) NOT NULL DEFAULT '' COMMENT '用户个人网站',
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像，相对于upload/avatar目录',
  `sex` smallint(1) DEFAULT '0' COMMENT '性别；0：保密，1：男；2：女',
  `birthday` date DEFAULT '2000-01-01' COMMENT '生日',
  `signature` varchar(255) DEFAULT NULL COMMENT '个性签名',
  `last_login_ip` varchar(16) DEFAULT NULL COMMENT '最后登录ip',
  `last_login_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '最后登录时间',
  `create_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '注册时间',
  `user_activation_key` varchar(60) NOT NULL DEFAULT '' COMMENT '激活码',
  `user_status` int(11) NOT NULL DEFAULT '1' COMMENT '用户状态 0：禁用； 1：正常 ；2：未验证',
  `score` int(11) NOT NULL DEFAULT '0' COMMENT '用户积分',
  `user_type` smallint(1) DEFAULT '1' COMMENT '用户类型，1:admin ;2:会员',
  `coin` int(11) NOT NULL DEFAULT '0' COMMENT '金币',
  PRIMARY KEY (`id`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of yq_users
-- ----------------------------
INSERT INTO `yq_users` VALUES ('1', '0', 'admin', '###79e4d8f65bc575ec0a4b55ae8a229a38', 'admin', 'admin@qq.com', '', null, '0', '2000-01-01', '', '0.0.0.0', '2017-05-02 15:31:31', '2016-11-23 05:58:04', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('2', '1', '18710283199', '###79e4d8f65bc575ec0a4b55ae8a229a38', '网评员2183', '', '', null, '1', '2000-01-01', null, '127.0.0.1', '2017-02-17 11:03:21', '2017-02-14 10:28:18', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('3', '1', '18710283190', '###79e4d8f65bc575ec0a4b55ae8a229a38', '网评员8502', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-02-14 10:28:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('11', '16', '13796267739', '###e443d2bb815f66b27675a6908195396a', '周周', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-13 09:49:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('7', '10', '15146849072', '###6c25115b692d40067825049e337adafb', '管理员添加的网评员2', '', '', null, '2', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-03 15:34:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('8', '14', '15146849011', '###84604bb534a2db65976f98e732efb011', '测试三部的网评员11', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-06 10:45:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('9', '1', '15800000000', '###346c895121a3e61ffeb7fe0b6316a4b4', '我也', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-10 16:23:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('10', '1', '15888888888', '###346c895121a3e61ffeb7fe0b6316a4b4', '厉害了', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-10 16:27:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('12', '16', '13766669984', '###5a3a6b08d210638e3a62dabf9648ee08', '五部的网评员', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-14 09:16:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('13', '1', '13846253439', '###de97b66d680e4f5fc09fecc8c0f6f244', '周周', '', '', null, '2', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-24 17:17:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('14', '1', '18612110130', '###09c00aebdec70d6ae110a16cc36853f7', '方法', '', '', null, '1', '2000-01-01', null, null, '2000-01-01 00:00:00', '2017-03-31 09:20:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('15', '0', 'hn_admin', '###79e4d8f65bc575ec0a4b55ae8a229a38', '', 'zlzlzl@163.com', '', null, '0', '2000-01-01', null, '127.0.0.1', '2017-04-06 15:34:10', '2017-03-31 18:05:12', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('17', '1', '15524393791', '###50aec717c090953925c3c35e7f19f516', '新', '', '', null, '1', '2000-01-01', null, '114.244.12.250', '2017-04-05 09:58:01', '2017-04-05 09:57:00', '', '1', '0', '1', '0');
INSERT INTO `yq_users` VALUES ('18', '0', 'fsx123', '###79e4d8f65bc575ec0a4b55ae8a229a38', '', 'weiyong@qq.com', '', null, '0', '2000-01-01', null, '0.0.0.0', '2017-05-02 15:29:39', '2017-04-05 17:55:07', '', '1', '0', '1', '0');

-- ----------------------------
-- Table structure for `yq_user_favorites`
-- ----------------------------
DROP TABLE IF EXISTS `yq_user_favorites`;
CREATE TABLE `yq_user_favorites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL COMMENT '用户 id',
  `title` varchar(255) DEFAULT NULL COMMENT '收藏内容的标题',
  `url` varchar(255) DEFAULT NULL COMMENT '收藏内容的原文地址，不带域名',
  `description` varchar(500) DEFAULT NULL COMMENT '收藏内容的描述',
  `table` varchar(50) DEFAULT NULL COMMENT '收藏实体以前所在表，不带前缀',
  `object_id` int(11) DEFAULT NULL COMMENT '收藏内容原来的主键id',
  `createtime` int(11) DEFAULT NULL COMMENT '收藏时间',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户收藏表';

-- ----------------------------
-- Records of yq_user_favorites
-- ----------------------------

-- ----------------------------
-- Function structure for `total`
-- ----------------------------
DROP FUNCTION IF EXISTS `total`;
DELIMITER ;;
CREATE DEFINER=`weiyong`@`%` FUNCTION `total`(`z` int,`f` int,`zh` int) RETURNS int(11)
BEGIN
RETURN (z+f+zh);
END
;;
DELIMITER ;
