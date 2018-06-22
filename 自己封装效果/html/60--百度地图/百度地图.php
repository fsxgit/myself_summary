<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
		body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";font-size:14px;}
		#l-map{height:300px;width:100%;}
		#r-result{width:100%;}
        #suggestId{width:260px; padding-left: 20px; margin-left:20px; height:30px; }
        .mapBox{width:600px; height:600px; margin:10px 0;}
        #l-map{height:100%;width:100%;}
        #tangram-suggestion--TANGRAM__1d-main{z-index: 999;}
        #suggestId{padding-left: 20px; margin-left: 30px;}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=sOnPfATbkG0GfagHtbGBL6IPen9hOo7i"></script>
	<title>关键字输入提示词条</title>
</head>
<body>
	
	<div id="r-result">请输入:<input type="text" id="suggestId" size="20" value="" /></div>
    <div class="mapBox">
        <div id="l-map"></div>
    </div>

	<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
</body>
</html>
<script type="text/javascript">
	// 百度地图API功能
	function G(id) {
		return document.getElementById(id);
	}

	var map = new BMap.Map("l-map");
	map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
var geoc = new BMap.Geocoder();
//单击获取点击的经纬度
	map.addEventListener("click",function(e){
		var pt = e.point;
		geoc.getLocation(pt, function(rs){
			var addComp = rs.addressComponents;
			//addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
			var address = addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
		//	$('#address').val(address);
		alert(address);
		});
		// 用经纬度设置地图中心点
		map.clearOverlays();
		alert(e.point.lng);
	//	$('#longitude').val(e.point.lng);
	//	$('#latitude').val(e.point.lat);
		var new_point = new BMap.Point(e.point.lng,e.point.lat);
		var marker = new BMap.Marker(new_point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		map.panTo(new_point);
	});



	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId"
		,"location" : map
	});

	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
		setPlace();
	});

	function setPlace(){
		map.clearOverlays();    //清除地图上所有覆盖物
		function myFun(){
			var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
			map.centerAndZoom(pp, 18);
			map.addOverlay(new BMap.Marker(pp));    //添加标注
		}
		var local = new BMap.LocalSearch(map, { //智能搜索
		  onSearchComplete: myFun
		});
		local.search(myValue);
	}
</script>