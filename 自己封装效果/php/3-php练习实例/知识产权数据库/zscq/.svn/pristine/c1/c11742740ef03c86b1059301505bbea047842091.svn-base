<?php
header("Content-type: text/html; charset=utf-8");

/*
40第一个空的长度
17第二个空的长度
13第三个空的长度
42第四个空的长度
24第五个空的长度
*/
//开头添加字符串
function str_prefix($str, $n=1, $char=" "){
  for ($x=0;$x<$n;$x++){$str = $char.$str;}
  return $str;
}
//结尾添加字符串
function str_suffix($str, $n=1, $char=" "){
  for ($x=0;$x<$n;$x++){$str = $str.$char;}
  return $str;
}


/*
40第一个空的长度
17第二个空的长度
13第三个空的长度
42第四个空的长度
24第五个空的长度
28第六个空的长度
28第七个空的长度
28第八个空的长度
27第九个空的长度
*/
//总长度-字符串的总长度
function ti($str,$old){
	$newStr = preg_replace('/[^\x{4e00}-\x{9fa5}]/u', '', $str);
	$len = mb_strlen($newStr,"utf-8");//中文的个数
	$chlen = $len*2;//一个中文两个空格  中文占的长度
	$len1 = strlen($str);
	$enlen = $len1-($len*3);//出来的长度是非中文的长度  只占用一个空格
	$zifulen = $chlen+$enlen;//字符串的总长度
	$new_len = $old-$zifulen;//需要添加多少个空格下划线
	//$pppp = intval($new_len/2);
	//等于1就是奇数  等于0就是偶数
	if($new_len%2==1){
		//如果是奇数除法之后就会少两个
		$add_len = intval($new_len/2);
		@$kong .= "_";
		//字符串开头
		$b = str_prefix($str,$add_len+1,$kong);
		//字符串尾部添加
		$a = str_suffix($b,$add_len,$kong);
	}else{
		$add_len = intval($new_len/2);
		@$kong .= "_";
		//字符串开头
		$b = str_prefix($str,$add_len-1,$kong);
		//字符串尾部添加
		$a = str_suffix($b,$add_len,$kong);
	}
	return $a;
}

$a1 = ti("aa",40);
$a2 = ti("中",17);
$a3 = ti("中",13);
$a4 = ti("中文字符串",42);
$a5 = ti("中文字符串",24);
$a6 = ti("中文字符串",28);
$a7 = ti("中文字符串",28);
$a8 = ti("中文字符串",28);
$a9 = ti("中文字符串",27);
$a9 = ti("中文字符串",27);


$document->setValue("value1",$a1);
$document->setValue('value2',$a2);
$document->setValue('value3',$a3);
$document->setValue('value4',$a4);
$document->setValue('value5',$a5);
$document->setValue('value6',$a6);
$document->setValue('value7',$a7);
$document->setValue('value8',$a8);
$document->setValue('value9',$a9);

$document->save('Solarsystem.docx');

