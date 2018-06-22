/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : fxname

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2016-09-22 18:11:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `myguests`
-- ----------------------------
DROP TABLE IF EXISTS `myguests`;
CREATE TABLE `myguests` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of myguests
-- ----------------------------
INSERT INTO `myguests` VALUES ('1', 'John', 'Doe', 'john@example.com', '2016-08-03 16:29:35');
INSERT INTO `myguests` VALUES ('2', 'John', 'Doe', 'john@example.com', '2016-08-03 16:29:37');
INSERT INTO `myguests` VALUES ('3', 'John', 'Doe', 'john@example.com', '2016-08-03 16:36:18');
INSERT INTO `myguests` VALUES ('4', 'John', 'Doe', 'john@example.com', '2016-09-18 17:42:47');
INSERT INTO `myguests` VALUES ('5', 'John', 'Doe', 'john@example.com', '2016-09-19 13:08:26');
