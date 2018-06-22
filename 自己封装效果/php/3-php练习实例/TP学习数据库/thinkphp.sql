/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : thinkphp

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2016-09-22 18:28:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tp_fsx`
-- ----------------------------
DROP TABLE IF EXISTS `tp_fsx`;
CREATE TABLE `tp_fsx` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `sex` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_fsx
-- ----------------------------
INSERT INTO `tp_fsx` VALUES ('1', '樊诗晓', '1');
INSERT INTO `tp_fsx` VALUES ('2', '杜西西', '0');
INSERT INTO `tp_fsx` VALUES ('3', '成吉思汗', '1');
INSERT INTO `tp_fsx` VALUES ('4', '忽兰', '0');
INSERT INTO `tp_fsx` VALUES ('5', '花黑尘', '0');
INSERT INTO `tp_fsx` VALUES ('6', '撒差别器', '1');

-- ----------------------------
-- Table structure for `tp_user`
-- ----------------------------
DROP TABLE IF EXISTS `tp_user`;
CREATE TABLE `tp_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` char(32) NOT NULL,
  `sex` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_user
-- ----------------------------
INSERT INTO `tp_user` VALUES ('1', '樊诗晓', '', '1');
INSERT INTO `tp_user` VALUES ('2', '杜西西', '', '0');
INSERT INTO `tp_user` VALUES ('3', '成吉思汗', '', '1');
INSERT INTO `tp_user` VALUES ('4', '忽兰', '', '0');
INSERT INTO `tp_user` VALUES ('12', '切克闹', '', '1');
INSERT INTO `tp_user` VALUES ('6', '撒差别器', '', '1');
INSERT INTO `tp_user` VALUES ('14', 'ccacasdcasd', '', '1');
INSERT INTO `tp_user` VALUES ('15', 'sfvsrsvs', '', '0');
INSERT INTO `tp_user` VALUES ('13', '哈萨尔', '', '1');
INSERT INTO `tp_user` VALUES ('16', '琳达', '', '0');
INSERT INTO `tp_user` VALUES ('17', 'rerrrrrr', '', '0');
INSERT INTO `tp_user` VALUES ('18', 'wwwwwwww', '', '1');
INSERT INTO `tp_user` VALUES ('22', '习大大', '', '1');
INSERT INTO `tp_user` VALUES ('20', 'ffffffffffff', '', '0');
INSERT INTO `tp_user` VALUES ('21', 'uuuuuuuu', '', '1');
INSERT INTO `tp_user` VALUES ('23', '花木兰', '', '0');
INSERT INTO `tp_user` VALUES ('24', '习大大', '', '1');
INSERT INTO `tp_user` VALUES ('25', '东北喊', '', '1');
INSERT INTO `tp_user` VALUES ('26', '熏儿', '', '0');
INSERT INTO `tp_user` VALUES ('28', '咚咚锵', '', '0');
INSERT INTO `tp_user` VALUES ('29', '嘻嘻哈哈', '', '1');
INSERT INTO `tp_user` VALUES ('30', '么么哒', '', '0');
INSERT INTO `tp_user` VALUES ('31', '艾希', '', '0');
INSERT INTO `tp_user` VALUES ('32', '艾希', '', '1');
INSERT INTO `tp_user` VALUES ('33', '忽兰', '', '1');
INSERT INTO `tp_user` VALUES ('34', '忽兰', '', '0');
INSERT INTO `tp_user` VALUES ('35', 'xi忽兰', '', '1');
INSERT INTO `tp_user` VALUES ('36', '哈哈忽兰嘻嘻', '', '1');
INSERT INTO `tp_user` VALUES ('37', '忽兰哈希', '', '1');
INSERT INTO `tp_user` VALUES ('38', '哈希忽兰嘻哈', '', '0');
INSERT INTO `tp_user` VALUES ('39', '杜甫李白郭靖黄蓉', '', '1');
INSERT INTO `tp_user` VALUES ('40', '杜甫李白郭靖黄蓉樊诗晓', '', '0');
INSERT INTO `tp_user` VALUES ('41', 'lover', '', '0');
INSERT INTO `tp_user` VALUES ('42', 'xixi', '', '1');
INSERT INTO `tp_user` VALUES ('43', 'good', '', '1');
INSERT INTO `tp_user` VALUES ('44', 'xixi', '', '0');
INSERT INTO `tp_user` VALUES ('45', 'nice', '', '1');
INSERT INTO `tp_user` VALUES ('47', 'jiumei', '', '0');
INSERT INTO `tp_user` VALUES ('48', 'xixi', '', '0');
INSERT INTO `tp_user` VALUES ('49', 'xixi', '', '0');
INSERT INTO `tp_user` VALUES ('50', '樊诗晓', '123456', '1');
INSERT INTO `tp_user` VALUES ('51', '让他把', '', '1');
INSERT INTO `tp_user` VALUES ('52', 'xixi', '', '0');
