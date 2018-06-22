/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : liuyanban

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2016-09-22 18:11:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `liuyanbiao`
-- ----------------------------
DROP TABLE IF EXISTS `liuyanbiao`;
CREATE TABLE `liuyanbiao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `xingming` varchar(20) NOT NULL,
  `biaoti` varchar(100) NOT NULL,
  `fabushijian` datetime NOT NULL,
  `neirong` varchar(1000) DEFAULT NULL,
  `huifu` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liuyanbiao
-- ----------------------------
INSERT INTO `liuyanbiao` VALUES ('1', '', '标题1', '2015-12-23 12:53:42', '内容1', null);
INSERT INTO `liuyanbiao` VALUES ('2', '昵称2', '标题2', '2015-12-23 12:55:23', '内容2', null);
INSERT INTO `liuyanbiao` VALUES ('6', '昵称5', '标题5', '2015-12-23 14:46:09', '内容5', null);
INSERT INTO `liuyanbiao` VALUES ('8', '昵称7', '标题7', '2015-12-23 14:46:24', '内容7', null);
INSERT INTO `liuyanbiao` VALUES ('9', '昵称8', '标题8', '2015-12-23 14:46:31', '内容8', null);
INSERT INTO `liuyanbiao` VALUES ('15', 'conn.php之后', 'conn.php之后', '2015-12-24 09:52:14', '这是使用conn.php之后的测试数据', null);
INSERT INTO `liuyanbiao` VALUES ('16', '正式昵称1', '正式标题1', '2015-12-24 09:53:43', '正式内容1\r\n正式内容1\r\n正式内容1\r\n正式内容1\r\n正式内容1\r\n正式内容1正式内容1\r\n\r\n正式内容1', '市场上看那看看风使帆');
INSERT INTO `liuyanbiao` VALUES ('17', '回复1--修改后', '标题1--修改后', '2015-12-24 11:52:37', '恢复恢复胡覅u 哈哈哈哈哈哈哈哈哈哈哈哈,我被修改了', '我们都有一个家名字叫中国');
INSERT INTO `liuyanbiao` VALUES ('18', '翻页1', '翻也开始了', '2015-12-24 14:45:53', '哈哈哈哈哈哈,翻页开始了', '阿城的水电费的地方放到');
INSERT INTO `liuyanbiao` VALUES ('19', '哈哈哈 ', '终结了', '2015-12-25 15:09:12', '终于告一段落了,留言板基本上做完了', null);
INSERT INTO `liuyanbiao` VALUES ('20', '哈哈', '自动增加页数', '2015-12-25 15:10:03', '哈哈哈,页数会自动增加了 ', null);
INSERT INTO `liuyanbiao` VALUES ('22', '脚本错误处理1', '脚本错误处理1', '2015-12-25 16:23:36', '脚本错误处理1\r\n<script>alert(\"aaaaa\")</script>\r\n\r\n弹出aaa了吗?\r\n没有\r\n哈哈哈哈\r\n\r\n\r\n换行 也表现出来了   空格也表现出来了\r\n\r\n\r\n\r\n哈哈哈哈哈', null);
INSERT INTO `liuyanbiao` VALUES ('23', '脚本测试2', '脚本测试2', '2015-12-25 16:25:31', '脚本测试2\r\n<hr/>\r\n变成横线了吗 ?\r\n没有?\r\n哈哈哈哈哈', null);
INSERT INTO `liuyanbiao` VALUES ('24', '脚本测试3', '脚本测试3', '2015-12-25 16:26:39', '脚本测试3\r\n<p>换行了吗?  没有<p>\r\n<p>换行了吗?  没有<p>\r\n<p>换行了吗?  没有<p>\r\n<p>换行了吗?  没有<p>\r\n<p>换行了吗?  没有<p>\r\n<p>换行了吗?  没有<p>', null);
INSERT INTO `liuyanbiao` VALUES ('25', '单引号', '双引号', '2015-12-25 16:55:16', '反斜杠\r\n\"哈哈哈\"\r\n\'呵呵呵呵\'\r\n\r\n\\\\\\\\\\发发发发发\\\\\\\\/////阿达差额///', '\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"哈查看时好拿\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\r\n\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'啊很谨慎参考办点事sd\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\r\n///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
INSERT INTO `liuyanbiao` VALUES ('26', '', '', '2015-12-25 17:00:41', '', null);
INSERT INTO `liuyanbiao` VALUES ('27', 'thinkPHP', '学习thinkPHP', '2015-12-28 09:53:57', '', null);
INSERT INTO `liuyanbiao` VALUES ('28', 'xixi', '牛逼', '2016-03-22 11:59:22', '哈哈哈哈h \r\n牛逼的很', null);
INSERT INTO `liuyanbiao` VALUES ('29', '什么情况', 'php要怎样学习', '2016-04-06 11:03:05', '我怎么知道，我又没学过php,我哪里知道\r\n', '你不知到，你大爷的，这你都不知道，你妹的\r\n');

-- ----------------------------
-- Table structure for `mysqltest`
-- ----------------------------
DROP TABLE IF EXISTS `mysqltest`;
CREATE TABLE `mysqltest` (
  `姓名` int(11) NOT NULL,
  `性别` int(11) NOT NULL,
  `年龄` int(11) NOT NULL,
  `出生年月` int(11) NOT NULL,
  `爱好` int(11) NOT NULL,
  `职业` int(11) NOT NULL,
  `身份证号` int(11) NOT NULL,
  `籍贯` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mysqltest
-- ----------------------------
