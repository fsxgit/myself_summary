/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : fsx

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2016-09-22 18:10:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `animals`
-- ----------------------------
DROP TABLE IF EXISTS `animals`;
CREATE TABLE `animals` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `legs` int(20) NOT NULL,
  `sex` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of animals
-- ----------------------------
INSERT INTO `animals` VALUES ('1', '中华田园犬', '4', '1');
INSERT INTO `animals` VALUES ('2', '大公鸡', '2', '1');
INSERT INTO `animals` VALUES ('3', '老母鸡', '2', '0');
INSERT INTO `animals` VALUES ('4', '汗血宝马', '4', '1');

-- ----------------------------
-- Table structure for `city`
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `fullname` text NOT NULL,
  `title` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES ('1', 'bj', '北京', '北京是一个美丽的城市，是我国的政治中心，是我们的首都。');
INSERT INTO `city` VALUES ('2', 'sh', '上海', '上海是一个沿海城市，是我国的经济中心。');
INSERT INTO `city` VALUES ('3', 'gz', '广州', '广州是我国南部的沿海城市，属于亚热带气候');
INSERT INTO `city` VALUES ('4', 'xj', '新疆', '新疆维吾尔自治区，简称新，位于中国西北边陲，首府乌鲁木齐，是中国五个少数民族自治区之一，也是中国陆地面积最大的省级行政区，面积166万平方公里，占中国国土总面积六分之一。');

-- ----------------------------
-- Table structure for `information`
-- ----------------------------
DROP TABLE IF EXISTS `information`;
CREATE TABLE `information` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(225) NOT NULL COMMENT '姓名',
  `sex` int(2) NOT NULL DEFAULT '0' COMMENT '性别',
  `tel` bigint(12) NOT NULL COMMENT '电话号码',
  `email` varchar(225) NOT NULL COMMENT '邮箱',
  `site` varchar(225) NOT NULL COMMENT '家庭住址',
  `idCard` varchar(100) NOT NULL COMMENT '身份证号',
  `img` varchar(225) NOT NULL COMMENT '照片',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of information
-- ----------------------------
INSERT INTO `information` VALUES ('1', '樊诗晓', '1', '123456789', 'xixi@132.com', '海南', '2147483647', './upload/1474369425.jpg');
INSERT INTO `information` VALUES ('74', '王楠', '1', '13620180335', 'wangnan@136.com', '河北衡水', '411482166713021658', './upload/1474526162.jpg');
INSERT INTO `information` VALUES ('73', '想想', '0', '2147483647', '18238800887@126.com', '蒙古', '2147483647', './upload/1474530107.jpg');
INSERT INTO `information` VALUES ('67', '我夫人', '0', '2147483647', 'xiao@134.com', '湖北', '2147483647', './upload/1474449910.jpg');
INSERT INTO `information` VALUES ('66', '花湖', '0', '2147483647', 'fan@126.com', '湖北黄冈', '789', './upload/1474163932.jpg');
INSERT INTO `information` VALUES ('72', '花花', '0', '45678956', '136@qq.com', '越南', '156789', './upload/1474514175.jpg');
INSERT INTO `information` VALUES ('65', '一剑飘', '1', '2147483647', 'piao@126.com', '洪湖水浪打浪', '2147483647', './upload/1470791525.jpg');
INSERT INTO `information` VALUES ('68', '刘备', '1', '2147483647', 'xiao@126.com', '安徽', '2147483647', './upload/1474453003.jpg');
INSERT INTO `information` VALUES ('56', '杜西', '0', '18238800887', 'xixi@126.com', '石家庄', '410482199106275090', './upload/1470624529.jpg');
INSERT INTO `information` VALUES ('57', '忽兰', '0', '123', '456@123.com', '无论木齐', '2147483647', './upload/1474451880.jpg');
INSERT INTO `information` VALUES ('63', '九月', '0', '2147483647', 'jiu@126.com', '黑龙江齐齐哈尔', '2147483647', './upload/1470722982.jpg');
INSERT INTO `information` VALUES ('71', '楠楠', '0', '2147483647', 'coa@126.com', '黄浦江', '2147483647', './upload/1474514092.jpg');
INSERT INTO `information` VALUES ('60', 'fanshi', '1', '789456369', '4565', '4568/79', '98993963', './upload/1470636735.jpg');
INSERT INTO `information` VALUES ('69', '貂蝉', '0', '2147483647', 'diao@qq.com', '汉中', '2147483647', './upload/1474526380.jpg');
INSERT INTO `information` VALUES ('70', '武汉', '1', '2147483647', 'wuhan@136.com', '武汉', '2147483647', './upload/1474509930.jpg');
INSERT INTO `information` VALUES ('61', '樊诗晓', '1', '2147483647', 'fanxiao@126.com', '无论木齐', '9983', './upload/1474369487.jpg');
INSERT INTO `information` VALUES ('75', 'fanxiao', '0', '2147483647', 'diao@qq.com', '武汉', '410482199106275090', './upload/1474523790.jpg');
INSERT INTO `information` VALUES ('76', '小男', '0', '13256987450', 'xiaonan@126.com', '江苏', '411482199706352090', './upload/1474526083.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '樊诗晓', '123456');
INSERT INTO `user` VALUES ('2', '杜西西', '123456');
INSERT INTO `user` VALUES ('3', '李白', '123456');
INSERT INTO `user` VALUES ('4', '杜甫', '123456');

-- ----------------------------
-- Table structure for `xinxi`
-- ----------------------------
DROP TABLE IF EXISTS `xinxi`;
CREATE TABLE `xinxi` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sex` int(2) NOT NULL DEFAULT '0',
  `minzu` varchar(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xinxi
-- ----------------------------
INSERT INTO `xinxi` VALUES ('1', '樊诗晓', '1', '汉族', '1991-06-27');
INSERT INTO `xinxi` VALUES ('2', '杜茜茜', '0', '回族', '1997-04-18');
INSERT INTO `xinxi` VALUES ('3', '阳阳', '0', '蒙古族', '2006-09-08');
INSERT INTO `xinxi` VALUES ('4', '刘颖', '0', '维吾尔族', '2002-08-02');
INSERT INTO `xinxi` VALUES ('5', '小凡', '1', '满族', '2006-03-02');
INSERT INTO `xinxi` VALUES ('6', '春美', '0', '汉族', '1996-06-09');
