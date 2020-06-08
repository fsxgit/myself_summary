
 // base64编码格式字符串
var str = "PGhlYWQ+DQogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPg0KICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0Ig0KICAgICAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCI+DQogICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJpZT1lZGdlIj4NCiAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPg0KICAgIDxzdHlsZT4NCiAgICAgICAgKnt3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7fQ0KICAgICAgICBpbWd7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87fQ0KICAgIDwvc3R5bGU+DQo8L2hlYWQ+PHA+W+WFs+S6juS6lOaciOWNjuW6reaLm+WLn+KAnOWeg+WcvuWIhuexu+W/l+aEv+iAheKAneeahOmAmuefpV08L3A+PHA+5bCK5pWs55qE5Lia5Li7OjwvcD48cD7mgqjlpb0hIDIwMTnlubQxMeaciDI35pel77yMIOWMl+S6rOW4guesrOWNgeS6lOWxiuS6uuawkeS7o+ihqOWkp+S8muW4uOWKoeWnlOWRmOS8muesrOWNgeWFreasoeS8muiuruihqOWGs+mAmui/h+WMl+S6rOW4guS6uuWkp+W4uOWnlOS8muWFs+S6juS/ruaUueOAiuWMl+S6rOW4gueUn+a0u+Weg+WcvueuoeeQhuadoeS+i+OAi+eahOWGs+Wumu+8jOS/ruaUueWQjueahOOAiuWMl+S6rOW4gueUn+a0u+Weg+WcvueuoeeQhuadoeS+i+OAi+WwhuS6jjIwMjDlubQ15pyIMeaXpei1t+ato+W8j+aWveihjOOAguaWsOeJiOOAiuadoeS+i+OAi+i/m+S4gOatpeeugOWMluS6huWeg+WcvuWIhuexu+agh+WHhu+8jOWwhuWOqOS9meWeg+WcvuOAgemkkOWOqOWeg+WcvuS4pOexu+aVtOWQiOS4uuWOqOS9meWeg+WcvuS4gOexu++8jOaYjuehrueUn+a0u+Weg+WcvuWIhuS4uuWOqOS9meWeg+WcvuOAgeWPr+WbnuaUtueJqeOAgeacieWus+Weg+WcvuOAgeWFtuS7luWeg+WcvuWbm+Wkp+WfuuacrOWTgeexu+OAguaWsOeJiOOAiuadoeS+i+OAi+WunuaWveWQju+8jOWmguaenOWNleS9jeaIluiAheS4quS6uuayoeacieaMieeFp++8jOimgeaxguWIhuexu+aKleaUvueUn+a0u+Weg+Wcvu+8jOmDveWwhumdouS4tOWkhOe9muOAgjwvcD48cD7moLnmja7ljJfkuqzluILmlL/lupznmoTnm7jlhbPmlL/nrZblj4ropoHmsYLvvIzkupTmnIjljY7luq3niankuJrmnI3liqHkuK3lv4PkuLrkuobov5vkuIDmraXlvJXlr7zlub/lpKfkuJrkuLvmraPnoa7mipXmlL7nlJ/mtLvlnoPlnL7vvIzlvaLmiJDlpKflrrblhbHlkIzlj4LkuI7lnoPlnL7liIbnsbvnmoToia/lpb3msJvlm7TvvIznjrDlhazlvIDmi5vli5/lnoPlnL7liIbnsbvlv5fmhL/ogIXjgII8L3A+PHA+5LiA44CB5oub5Yuf5a+56LGhPC9wPjxwPjHjgIHorqTlkIzmnKzlsI/ljLrnlJ/mtLvlnoPlnL7lhajnqIvliIbnsbvlt6XkvZznkIblv7XvvIzlhbfmnInlpYnnjK7nsr7npZ7vvIzmhL/mhI/miJDkuLrkuIDlkI3nlJ/mtLvlnoPlnL7lhajnqIvliIbnsbvlv5fmhL/ogIXvvIzlnKjpnIDopoHml7bog73mnI3ku47lronmjpLvvIzlvIDlsZXlv5fmhL/mnI3liqHmtLvliqjvvJs8L3A+PHA+MuOAgeacjeS7juWRveS7pO+8jOWQrOS7juaMh+aMpe+8jOWFt+acieWboumYn+WQiOS9nOeyvuelnjs8L3A+PHA+M+OAgeW5tOm+hOS4jemZkO+8jOaXoOiuuuaCqOaYr+WcqOagoeWtpueUn+OAgeWcqOiBjOS6uuWRmOaIlumAgOS8keS6uuWjq++8jOWPquimgeaCqOeDreW/g+WFrOebiuOAgjwvcD48cD7kuozjgIHlv5fmhL/ogIXogYzotKM8L3A+PHA+5q2j56Gu5byV5a+85bGF5rCR5YiG57G75oqV5pS+5Z6D5Zy+77yM5a6a5pyf5Y+C5LiO5Z6D5Zy+5YiG57G75b+X5oS/6ICF5Z+56K6t44CCPC9wPjxwPuS4ieOAgeaKpeWQjeaXtumXtOWPiuaKpeWQjeaWueW8jzwvcD48cD4x44CB5oql5ZCN5pe26Ze0OiAyMDIw5bm0NOaciDI35pel6IezMjAyMOW5tDbmnIgzMOaXpTwvcD48cD4y44CB57q/5LiL5oql5ZCNOuaLqOaJk+acjeWKoeS4reW/g+eUteivne+8mjAxMC04Mjg2Nzg3NjwvcD4=";
// 先使用微信小程序自带方法转化为ArrayBuffer
let arrayBuffer = wx.base64ToArrayBuffer();

// 再用下面放发将ArrayBuffer转化为字符串
let unit8Arr = new Uint8Array(arrayBuffer);
let encodedString = String.fromCharCode.apply(null, unit8Arr),
//没有下面这一步中文会乱码
decodedString = decodeURIComponent(escape((encodedString)));
console.log(decodedString);