var myUId = null;

function showTips(data){
    console.log(data);
    // alert(data);
}
function getTimer(begin){
    var now = new Date().getTime();
    return " time:" + (now - begin) + " ms";
}



// 用户1信息：user1   {"code":200,"userId":"1","token":"PV1tPF2tobtKjc+unMxqv0t/AHx0/N1rHdiwTYOoJ9jFFN8rKyh7QgBvllPbG1HS7ZCQy5xNSuM="}
// 用户2信息：古香   {"code":200,"userId":"2","token":"ScxecYGUNurZpuL65PSDLAsJ8S1LVcAmieQdWBLSbntFVM45KCXDOIljI48IRP8En/6RHkBNnlJ0bbPlod+zKQ=="}
// 用户22信息：user22   {"code":200,"userId":"22","token":"RyOHEDY2Q3QyBl1NbSt6IQsJ8S1LVcAmieQdWBLSbntFVM45KCXDODaL4+wvt+Pj7V3OHyYo0Q10bbPlod+zKQ=="}

// 测试群1：userId=1&userId=2&userId=22&groupId=1&groupName=测试1群


//    App Key：x18ywvqfxci5c
//    App Secret：BFPHUZvODbz5zA



var begin = 0;
/**
 * 初始化1
 * */
function initChat(){
    var appKey = "x18ywvqfxci5c";
    var token1 = "PV1tPF2tobtKjc+unMxqv0t/AHx0/N1rHdiwTYOoJ9jFFN8rKyh7QgBvllPbG1HS7ZCQy5xNSuM=";
    var token2 = "ScxecYGUNurZpuL65PSDLAsJ8S1LVcAmieQdWBLSbntFVM45KCXDOIljI48IRP8En/6RHkBNnlJ0bbPlod+zKQ==";
    var token22 = "RyOHEDY2Q3QyBl1NbSt6IQsJ8S1LVcAmieQdWBLSbntFVM45KCXDODaL4+wvt+Pj7V3OHyYo0Q10bbPlod+zKQ==";
    var token = null;
    var user = $(".sender input:checked").val();
    myUId = user;
    if(user == 1){
        token = token1;
    }else if(user == 2){
        token = token2;
    }else if(user == 22){
        token = token22;
    }

    startInit(token,appKey);
}

/**
 * 初始化2
 * */
function startInit(token,appKey){
    appKey = appKey;

    if(appKey == ""){
        alert("必须提供appkey和token");
    }

    begin = new Date().getTime()

    //公有云初始化
    var config = {
        //protobuf: 'https://cdn.ronghub.com/protobuf-2.3.1.min.js' //支持http(s)网络路径、本地相对路径
    };

    /*

        ----------
        备注： 桌面版需优先开通，开通后方可使用
                    开通方式，请移步开发者后台提工单，申请开通 https://developer.rongcloud.cn/signin?returnUrl=%2F
        ----------

        RongDesktop 即为 electron-c++sdk/js/preload.js 中的 `RongDesktop`
        以下逻辑为 RongDesktop 存在即认为在 Electron 中，请一定保证 RongDesktop 唯一、不可破坏、不被污染
        详细请参考 init.js dataProvider 用法
    */
    var imClient = null;
    var isDesktopEnv = (typeof RongDesktop != 'undefined')
    if (isDesktopEnv) {
        imClient = RongDesktop.require('IMLib');
    }

    var params = {
        appKey : appKey,
        token : token,
        imClient: imClient,
        userId: 'user1'
    };

    var callbacks = {
        getInstance : function(_instance){
            instance = _instance;
        },
        /**
         * 接收消息
         * */
        receiveNewMessage : function(message){
            // 判断消息类型
            // showTips("新消息，类型为：" + message.messageType);
            // showResult("新消息",message,start);

            // console.log("messageUId:" + message.messageUId + ",   messageId:" + message.messageId);
			console.log("接收到新消息");
            console.log(message);
            addMsgToList("2",message);
        },
        getCurrentUser : function(userInfo){
            showTips("链接成功 用户id：" + userInfo.userId + ", 耗时" + getTimer(begin));
            userId = userInfo.userId;
            console.log("userId="+userId);
        }
    };
    init(params,callbacks,config);
    showTips("初始化 应用 " + getTimer(begin));
}

/**
 * 发送消息
 * */
function sendMsg(){

    //    var conversationType = RongIMLib.ConversationType.PRIVATE; // 私聊
    /*
    PRIVATE 				1		单聊
    DISCUSSION 			2		讨论组
    GROUP 					3		群组
    CHATROOM 				4		聊天室
    CUSTOMER_SERVICE 		5		客服
    SYSTEM 				6		系统消息
    APP_PUBLIC_SERVICE 	7		应用公众账号（应用内私有）
    PUBLIC_SERVICE 		8		公众账号 (公有)
    */

    //    发送消息

    var txt = $("#sendTxt").val();
    if(!txt){
        alert("请输入消息内容");
        return false;
    }
    var msg = new RongIMLib.TextMessage({ content: txt, extra: '附加信息' });
	// 选择接收者
    var targetId = null; // 目标 Id
    var conversationType = null; // 群聊还是单聊
    var user = $(".msgList li.active").data("user");
    var groupid = $(".msgList li.active").data("groupid"); // 群组id
	if(!groupid && !user){
        alert("请选择接收者");
        return false;
	}
	if(groupid){
		console.log("群组消息to="+groupid);
        targetId = groupid.toString();
        conversationType = RongIMLib.ConversationType.GROUP; // 群聊, 其他会话选择：https://www.rongcloud.cn/docs/message_architecture.html
	}else{
        console.log("单聊消息to="+user);
		targetId = user.toString();
        conversationType = RongIMLib.ConversationType.PRIVATE; // 单聊, 其他会话选择：https://www.rongcloud.cn/docs/message_architecture.html
	}
    RongIMClient.getInstance().sendMessage(conversationType, targetId, msg, {
        onSuccess: function (message) {
            // message 为发送的消息对象并且包含服务器返回的消息唯一 Id 和发送消息时间戳
            console.log("发送消息成功：");
            console.log(message);
            addMsgToList("1",message);
        },
        onError: function (errorCode, message) {
            var info = '';
            switch (errorCode) {
                case RongIMLib.ErrorCode.TIMEOUT:
                    info = '超时';
                    break;
                case RongIMLib.ErrorCode.UNKNOWN:
                    info = '未知错误';
                    break;
                case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                    info = '在黑名单中，无法向对方发送消息';
                    break;
                case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                    info = '不在讨论组中';
                    break;
                case RongIMLib.ErrorCode.NOT_IN_GROUP:
                    info = '不在群组中';
                    break;
                case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                    info = '不在聊天室中';
                    break;
            }
            console.log('发送失败: ' + info + errorCode);
        }
    });
}


/**
 * 添加消息到消息列表
 *
 * */
function addMsgToList(state,msg){
    var html = '';
    if(state == 1){
        //  自己发送的消息
        html += '<li class="me">';
        html += '<h3 class="name">'+msg.senderUserId+'</h3>';
        html += '<p class="txt">'+msg.content.content+'</p>';
        html += '</li>';
    }else if(state == 2){
        // 接收到来自他人的消息
        html += '<li class="they">';
        html += '<h3 class="name">'+msg.senderUserId+'</h3>';
        html += '<p class="txt">'+msg.content.content+'</p>';
        html += '</li>';
    }
    $(".msgDetail ul").append(html);
}

/**
 * 获取对应用户的最近一条聊天消息
 * */
function getMsgList(targetId){
    var conversationType = RongIMLib.ConversationType.PRIVATE;
    var targetId = targetId;
    RongIMClient.getInstance().getConversation(conversationType, targetId, {
        onSuccess: function(con) {
            if (con) {
                console.log(con);
                console.log("getConversation Success!");
                var html = '';
                if(myUId == con.targetId){
                    //  自己发送的消息
                    html += '<li class="me">';
                    html += '<h3 class="name">'+con.senderUserId+'</h3>';
                    html += '<p class="txt">'+con.latestMessage.content.content+'</p>';
                    html += '</li>';
				}else{
                    var state = 2;
                    // 接收到来自他人的消息
                    html += '<li class="they">';
                    html += '<h3 class="name">'+con.senderUserId+'</h3>';
                    html += '<p class="txt">'+con.latestMessage.content.content+'</p>';
                    html += '</li>';
                }
                $(".msgDetail ul").html(html);
            }else{
            	console.log("您和用户"+targetId+"还没有聊天记录啊")
                $(".msgDetail ul").html('');
			}
        },
        onError: function(error){
            // error => 删除会话的错误码
            console.log(error);
        }
    });
}


/**
 * 获取会话列表
 * */
function getChatList(){
    RongIMClient.getInstance().getConversationList({
        onSuccess: function(list) {
            // list => 会话列表集合
            console.log(list);
        },
        onError: function(error) {
            // do something
            console.log(error);
        }
    }, null);
}

/**
 * 获取单聊消息历史记录
 * targetId：和谁的
 * */
function getDanMsgList(targetId){
    var conversationType = RongIMLib.ConversationType.PRIVATE; //单聊, 其他会话选择相应的消息类型即可
    var targetId = targetId; // 想获取自己和谁的历史消息，targetId 赋值为对方的 Id
    var timestrap = null; // 默认传 null，若从头开始获取历史消息，请赋值为 0, timestrap = 0;
    var count = 20; // 每次获取的历史消息条数，范围 0-20 条，可以多次获取
    RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
        onSuccess: function(list, hasMsg) {
            // list => Message 数组。
            // hasMsg => 是否还有历史消息可以获取。
            console.log(list);
        },
        onError: function(error) {
            console.log('GetHistoryMessages, errorcode:' + error);
        }
    });
}