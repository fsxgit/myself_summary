<?php
// 本类由系统自动生成，仅供测试用途

//访问方式  传参方法
//http://localhost/ThinkPHP/index.php/index/fsx/name/樊诗晓/age/100
//       网址     /文件夹目录/  文件/IndexAction/方法fsx/键/值/键/值

class IndexAction extends Action {
	//这是默认的测试原名为index后为了自己的测试改名为indexYL
    public function indexYL(){
	echo "哈喽，樊诗晓,您的名字叫[".$_GET['name']."]您的年龄是[".$_GET['age']."]岁！！";
	$this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p></div><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
    }

    public function txt(){
        echo "我是测试页面";
        $this->show("<h1>我是测试页面</h1>>");
    }

//	自己测试使用的方法
	public function index(){
	echo "哈喽，樊诗晓！！";
//	可以给定死的数据这样传值
//	$name = '樊诗晓';
//	$this->assign('data',$name);//传数据的方法
	echo "<br/>下面是var_dump出来的数据：<br/>";
//	也可以调用数据库数据这样传值 
//	且要在配置文件进行配置
	$m=new Model('User');//调用数据表
	$arr=$m->select();
	var_dump($arr);
	$this->assign('data',$arr[0]['username']);//传数据的方法


	$this->show();
//	通过这里可以找到D:\phpstudy\WWW\ThinkPHP\Home\Tpl\Index\index.html
    }



//http://localhost/ThinkPHP/index.php/index/fsx/键/值/键/值
	public function fsx(){
//	传值方式：http://localhost/ThinkPHP/index.php/index/fsx/name/fsx/age/13
	echo "哈喽，樊诗晓,您的名字叫[".$_GET['name']."]您的年龄是[".$_GET['age']."]岁！！";
	$this->show();
	}


//下面是实现模板遍历数组的实例
	public function vol(){
		$m = M('User');
		$arr = $m->select();//查的方法
		//$arr = $m ->find($id);//获取单条数据以id为依据
		//$arr = $m where($id)->getField('字段名');//获取某个id的某个字段的数据
		//$arr = $m where('id = 2')->getField('字段名');//获取某个id的某个字段的数据的第二种方法
		var_dump($arr);
		$this->assign('fsx',$arr);

		$this->show();
		
	}
//下面是对数据库操作的方法的测试学习
	public function curd(){
		$m = M('User');
		//查的方法 r的方法 read
		$arr = $m->select();//获取整个数据
		//$arr = $m ->find($id);//获取单条数据以id为依据
		//$arr = $m where($id)->getField('字段名');//获取某个id的某个字段的数据
		//$arr = $m where('id = 2')->getField('字段名');//获取某个id的某个字段的数据的第二种方法

		//增的方法 u的方法 update 
		$m->username = '樊梨花';
		$m->sex = 1;
		$m->add();

		//删除方法 d的方法 delete
		$m->where('id=6')->delete();
		$m->where('username="樊梨花"')->delete(); //返回值为受影响的行数为
		//增的方法 u的方法 update
		$m->username = '樊梨花';
		$m->sex = 1;
		$m->add();//返回值为新增的的id号

		//更新数据的方法 u方法  update
		$data['id'] = 1;
		$data['username'] = '你妹灭';
		$count = $m->save($data);//返回值为受影响的行数为
		echo "返回影响的行数为：".$count."<br/>";



		var_dump($arr);
		$this->assign('fsx',$arr);

		$this->show();
		
	}



//    查询语句大总结
    public function read(){
        $m = new Model('User');
        $arr = $m->select();
        echo "<h1>hello!!这里是mysql的查询语句的大讲堂:</h1>";
        echo "<h2>下面这些是读取回来的数据原型：</h2>";
        var_dump($arr);


        echo "<h1>(1)这是查询语句的第一种方法（字符串查询法）：</h1>";
        $arr = $m->where("username='艾希'")->find();
        var_dump($arr);
        $arr = $m->where("username='艾希' and sex=1")->find();
        echo "<h4>这是对比上一条查询来理解验证的，如果相同条件有多个，则返回第一个:</h4>";
        var_dump($arr);


        echo "<h1>(2)这是查询语句的第二种方法（数组查询法【推荐使用】简单，不易出错）：</h1>";
        $data1['username'] = '樊诗晓';
        $data1['sex'] = 1;
        $arr = $m->where($data1)->find();
        var_dump($arr);

        echo "<h4>这是对比上一条查询来理解验证的，默认是and关系，加上\$data['_logic']='or'后变为or关系:</h4>";
        $data2['username'] = '樊诗晓';
        $data2['sex'] = 1;
        $data2['_logic']='or';
        $arr = $m->where($data2)->find();
        var_dump($arr);


        echo "<h1>(3)这是查询语句的第三种方法（表达式查询法）：</h1>";
        $data3['id'] = array('GT',27);//意思为id>27  //$data3['id'] = array('lt',27)  意思是id<27
        $arr = $m->where($data3)->find();
        var_dump($arr);


//        表达关系式
//        不区分大小写
//        gt    大于
//        lt    小于
//        eq    等于
//        neq   不等于
//        egt   大于等于
//        elt   小于等于
//        like   模糊查询   %关键字%：只要含有关键字即是查找对像；%关键字：以关键字结尾；关键字%：以关键字开始的
//        notlike   反向模糊查询   不包含关键字的即是查找对像//notlike中间没有空格
//        between 区间查询
//        not between  反向区间查询，即不取区间内的部分 //not between中间一定要有空格
//        in 区间查询
//        not in  反向区间查询，即不取区间内的部分 //not in中间一定要有空格

        echo "<h4>这是对比上一条查询来理解验证的，find只找到一条数据，select找到所有数据:</h4>";
        $data4['id'] = array('GT',27);//意思为id>27
        $arr = $m->where($data4)->select();
        var_dump($arr);

        echo "<h2>【这是模糊查询的实例：以”忽兰“为查询条件】:</h1>";
        $data5['username'] = array('like','%忽兰%');//意思为获取含有”忽兰“条件的值
        $arr = $m->where($data5)->select();
        var_dump($arr);

        echo "<h4>【多条件模糊查询的实例：以”忽兰“或”哈“为查询条件；关系为:或者】:</h4>";
        $data6['username'] = array('like',array('%忽兰%',"%哈%"));//意思为含有”忽兰“或者含有”哈“条件的值
        $arr = $m->where($data6)->select();
        var_dump($arr);

        echo "<h4>【多条件模糊查询的实例：以”忽兰“或”哈“为查询条件；关系为:并且】:</h4>";
        $data7['username'] = array('like',array('%忽兰%',"%哈%"),'and');//意思为获取含有”忽兰“并且含有”哈“条件的值
        $arr = $m->where($data7)->select();
        var_dump($arr);

        echo "<h2>区间查询between:</h1>";
        $data8['id'] = array('between',array(1,4));//意思为获取id1到4之间的值
        $arr = $m->where($data8)->select();
        var_dump($arr);

        echo "<h4>反向区间查询not between:</h4>";
        $data9['id'] = array('not between',array(2,29));//意思为获取id为2到29之外的值
        $arr = $m->where($data9)->select();
        var_dump($arr);


        echo "<h2>返回指定条件内容in:</h1>";
        $data10['id'] = array('in',array(1,2,5,9));//意思为id为1,2,5,9的值
        $arr = $m->where($data10)->select();
        var_dump($arr);


        echo "<h4>不返回指定条件内容not in:</h4>";
        $data11['id'] = array('not in',array(1,2));//意思为获取id为1,2之外的值
        $arr = $m->where($data11)->select();
        var_dump($arr);


        echo "<h1>(4)区间查询方式：</h1>";
        $m = new Model('User');
        $data12['id'] = array(array('GT',2),array('LT',6));//查询id大于2和小于6的值,此处关系是and
        $arr = $m->where($data12)->select();
        var_dump($arr);

        echo "<h4>区间查询方式,"or"关系：</h4>";
        $m = new Model('User');
        $data13['id'] = array(array('GT',2),array('LT',6),'or');//查询id大于2和小于6的值,此处关系是and
        $arr = $m->where($data13)->select();
        var_dump($arr);


        echo "<h4>区间查询方式,多条件更复杂的关系查询：</h4>";
        $m = new Model('User');
        $data14['username'] = array(array('like','%杜甫%'),array('like','%黄蓉%'),'习大大','or');//意思为查询含有杜甫或者含有黄蓉或者名字是习大大的条件的值/如果不给参数'or'则默认是and的关系
        $arr = $m->where($data14)->select();
        var_dump($arr);

        echo "<h4>区间查询方式,多条件更复杂的关系查询：</h4>";
        $m = new Model('User');
        $data14['username'] = array(array('like','%杜甫%'),array('like','%黄蓉%'),array('like','%晓%'));//意思为查询含有杜甫并且含有黄蓉并且含有晓的条件的值默认是and的关系
        $arr = $m->where($data14)->select();
        var_dump($arr);


        echo "<h1>(5)统计查询方式：</h1>";
//        count 获取数量
//        max   获取最大值
//        min   获取最小值
//        avg   获取平均数
//        sum   获取整合
        $m = new Model('User');
        $c = $m->count();
        echo "总数为：".$c."<br/>";

        $m = new Model('User');
        $h = $m->where("username='忽兰'")->count();
        echo "username为‘忽兰’的总数为：".$h;

        $m = new Model('User');
        $data15["username"] = "忽兰";
        $h = $m->where($data15)->count();
        echo "<br/>第二种方法：username为‘忽兰’的总数为：".$h;

        $m = new Model('User');
        $c1 = $m->max('id');
        $c2 = $m->min('id');
        $c3 = $m->avg('id');
        $c4 = $m->sum('id');
        echo "<br/>id最大值为：".$c1."<br/>";
        echo "<br/>id最小值为：".$c2."<br/>";
        echo "<br/>id平均值为：".$c3."<br/>";
        echo "<br/>id总和为：".$c4."<br/>";


        echo "<h1>(4)SQL直接查询方式：</h1>";
        echo "<p>主要是直接使用原生的sql语句的查询方法：</p>";
//        query     主要处理读取数据
//        execute   用于更新写入操作

        echo "<h3>query 读取数据实例：</h3>";
        $m = new Model();//实例化空model对象
        $res=$m->query("select * from tp_user where id=2");//成功返回数据的结果集，，失败返回boolen false
        var_dump($res);

        echo "<h3>execute 更新写入操作实例：</h3>";
        $m = new Model();//实例化空model对象
        $res2=$m->execute("insert into tp_user(username,sex) values('xixi','0')");//成功返回值为影响行数，，失败返回boolen false//切记名字不能用''包括
       // $res2=$m->execute("insert into tp_user('username','sex') values('xixi','0')");//错误写法
        var_dump($res2);

        $this->show();//用于显示页面read.html，没有也不影响上面程序的使用
    }

    public function readModel(){

        echo "hello world!!";
        $this->show();
    }

//    查询的几种方式

    public function show(){

    }



}
