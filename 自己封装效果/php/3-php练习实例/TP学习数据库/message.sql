/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : message

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2016-09-22 18:18:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tp_message`
-- ----------------------------
DROP TABLE IF EXISTS `tp_message`;
CREATE TABLE `tp_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `filename` varchar(30) NOT NULL DEFAULT '',
  `time` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_message
-- ----------------------------
INSERT INTO `tp_message` VALUES ('1', '德玛西亚', '德玛西亚万岁！！！', '5747a89896428.jpg', '1464314008', '1');
INSERT INTO `tp_message` VALUES ('2', '德莱联盟', '欢迎来到德莱联盟！！！！', '5747a9035f993.jpg', '1464314115', '1');
INSERT INTO `tp_message` VALUES ('3', '科信', '科信学院是河北工程大学的一个院！！', '5747a9821a128.jpg', '1464314242', '2');
INSERT INTO `tp_message` VALUES ('4', '漫城', '中国西瓜之乡，河北衡水的漫河乡！！', '5747a9e6e6427.png', '1464314342', '2');

-- ----------------------------
-- Table structure for `tp_user`
-- ----------------------------
DROP TABLE IF EXISTS `tp_user`;
CREATE TABLE `tp_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` char(32) NOT NULL DEFAULT '',
  `sex` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_user
-- ----------------------------
INSERT INTO `tp_user` VALUES ('1', 'fsx', '123', '1');
INSERT INTO `tp_user` VALUES ('2', 'dxx', '123', '1');
