<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>网络游戏防沉迷系统及实名认证服务协议</title>
    <link rel="stylesheet" href="/static/css/base.css"/>
    <link rel="stylesheet" href="/static/css/css.css"/>
</head>
<body>
<!--header-->
<div class="c-header">
    <div class="c-logo main oh">
        <img class="limg fl" src="/static/images/logo.png" alt=""/>
        <!--<span class="fl">消消乐</span>-->
        <div class="c-nav">
            <a href="<?php echo ('/');?>">首页</a>
            <i></i>
            <a href="<?php echo U('web/introduce');?>" >公司介绍</a>
            <i></i>
            <a href="<?php echo U('web/product');?>" >公司产品</a>
            <i></i>
            <a href="<?php echo U('web/tel');?>" >联系我们</a>
        </div>
        <span class="reglogin fr oh">
                <?php $user = session('userLoginS');if(empty($user)){ ?>
	<a href="<?php echo U('/register/login');?>">登录</a>
	<a href="<?php echo U('/register');?>">注册</a>
<?php }else{ ?>
	<a href="javascrpt:;">你好,<?php echo ($user["username"]); ?></a> <a href="<?php echo U('register/loginout');?>">退出</a> 
<?php } ?>

           </span>
        <span class="eye fr f12">本游戏适合18岁（含）以上玩家进入</span>
    </div>
</div>
<!--header end-->
<div class="xy_box main">
    <a href="javascript:history.go(-1);"><img src="/static/images/back.png" alt=""/></a>
    <h1 class="tit">1．本协议性质</h1>
    <p>1.1 本协议是网络游戏运营商（以下简称为“运营商”）与用户为实施网络游戏防沉迷系统及实名认证工作所订立的权利义务规范。 </p>
    <p>1.2 本协议条款如与运营商现行用户账号注册相关条款内容有冲突，以本协议为准。 </p>
    <h1 class="tit">2．本协议的目的：</h1>
    <p>防止未成年人过度沉迷网络游戏，倡导健康游戏习惯，保护未成年人的身心健康。</p>
    <h1 class="tit">3． 网络游戏防沉迷系统开发标准 </h1>
    <p>3.1 未成年人累计在线3小时以内的游戏时间为“健康”游戏时间。 </p>
    <p>3.2 未成年人累计在线游戏3小时之后，再持续下去的2小时游戏时间为“疲劳”游戏时间，此时间段内未成年人获得的游戏收益将降为正常值的50%。 </p>
    <p>3.3 未成年人累计在线游戏时间超过5小时为“不健康”游戏时间，不健康时间内未成年人的游戏收益降为0。 </p>
    <h1 class="tit">4．注册须知 </h1>
    <p>4.1 用户需要按运营商提供的注册方式进行注册申请。 </p>
    <p>4.2 用户申请注册新账号时必须填写实名身份信息。实名身份信息必须包括：真实姓名和身份证号码。 </p>
    <p>4.3 老用户在补充填写期限内提供的实名身份信息仅作为判断是否纳入网络游戏防沉迷系统之用，不替代老用户原有注册信息，不作为判断该账号权益归属的有效依据。与老用户权益归属相关的一切判断均依照原有信息进行，原有信息缺失的情况下，可适当考虑参照补充填写的实名身份信息。 </p>
    <p>4.4 在补充填写期限内，如出现冒用老用户名义提供实名身份信息的情况，可在运营商或司法机关对账号归属权进行验证判断后，允许老用户通过合法流程更改账号的实名身份信息。</p> 
    <p>4.5 新用户首次注册实名身份信息和老用户的首次补充实名身份信息均为免费，用户的实名身份信息一经注册或者补充即不允许随意修改。 </p>
    <p>4.6 用户所填实名身份信息内容不全或在运营商无法识别，用户将收到运营商的提示信息。 </p>
    <h1 class="tit">5.运营商认证原则</h1>
    <p>5.1 未满18周岁的用户将被判定为未成年人。 </p>
    <p>5.2 达到或者超过18周岁的用户将被初步判定为成年人。 </p>
    <p>5.3 补充填写期限到期后，未进行补充实名身份信息并且原注册信息不符合实名身份要求的老用户将被判定为未成年人。新用户注册的实名身份信息不符合实名认证要求的该用户将被判定为未成年人。 </p>
    <p>5.4 上述情况按照以下原则处理： </p>
    <p>5.4.1被判定为未成年人的用户纳入网络游戏防沉迷系统。 </p>
    <p>5.4.2初步判定为成年人的用户，其实名身份信息将由运营商提交公安部门进行验证。 </p>
    <p>5.4.3当未成年人用户年龄自然成长达到18周岁时，系统自动初步认定其为成年人，其实名身份信息将由运营商提交公安部门进行验证。 </p>
    <p>5.5 对于不适用中华人民共和国身份证信息注册的现役军人、外籍人士、港澳台同胞等用户，可根据其合法身份证明复印件或传真件向运营商提出实名认证申请，认证未通过前纳入网络游戏防沉迷系统。 </p>
    <h1 class="tit">6. 安全保障措施。</h1>
    <p>6.1 运营商对用户所提供的实名身份信息进行严格的管理及保护，并将使用现有 
    的技术，尽力防止用户的个人资料丢失、被盗用或遭篡改。 </p>
    <p>6.2 运营商未经用户授权不得公开、修改、透露用户身份信息资料及其它保存在 
    网络游戏防沉迷系统实名认证方案中的保密性内容，除遇下列情形： </p>
    <p>6.2.1 根据有关法律规定要求。 </p>
    <p>6.2.2 基于司法机关或其它国家主管机关的法定程序的要求。 </p>
    <p>6.2.3 在紧急情况下为保护用户或第三人的人身安全，防止用户及他人权益之重 
    大危害的情形下。 </p>
    <p>6.3 运营商因自身原因管理不善，导致用户实名身份信息泄露，给用户造成损 
    失的，应承担相关法律责任。 </p>
    <h1 class="tit">7．验证须知</h1>
    <p>7.1 运营商定期将经识别分类后初步判定为成年人的实名身份信息批量提交公安部门进行验证，由公安部门判定该信息是否真实，并根据验证结果最终确定该用户是否属于成年人。</p> 
    <p>7.2运营商将建立实名身份信息数据库，逐步积累已经验证的实名身份信息，用于对新用户提供的实名身份信息进行比对。比对一致的将不再重复送交公安部门验证。 </p>
    <p>7.3用户实名身份信息经公安部门验证未通过的将被纳入网络游戏防沉迷系统。</p> 
    <p>7.4 运营商无法确保公安部门现有身份信息库的完整，用户对此现状已明确了解。提供本人的身份证复印件、户口薄复印件、联系电话等真实有效的身份证明后可向运营商提出将使用本人身份信息注册的账号归入网络游戏防沉迷系统的要求。如用户需进一步主张自身的权利，根据相关法规和程序处理。 </p>
    <p>7.5运营商自用户提交实名身份信息后一个自然月内完成验证。</p> 
    <h1 class="tit">8． 查询系统须知</h1>
    <p>8.1 网络游戏实名认证信息查询系统，供家长及法定监护人对其未成年子女或其他法定监护对象是否使用网络游戏，是否受到网络游戏防沉迷系统的保护等情况进行查询，以及供公民查询本人身份信息有无被他人使用的情况。 </p>
    <p>8.2 查询者在使用查询系统时需通过书面形式提出申请，并附本人的身份证复印件、户口薄复印件、联系电话、邮编、邮寄地址或电子邮件等真实有效的身份证明信息，方可向运营商提出查询本人身份信息有无被他人使用的申请；如需依法查询被监护人是否使用网络游戏，需要另外提供经公证的能够证明本人与被监护人法定监护关系的证明材料。</p> 
    <p>8.3 公民如发现本人身份信息被他人使用，在提供本人经公证的身份证复印件、户口薄复印件、联系电话等真实有效的身份证明后可向运营商提出将使用本人身份信息注册的账号归入网络游戏防沉迷系统的要求。如公民需进一步主张本人的权利，应根据相关法律和程序处理。 </p>
    <h1 class="tit">9． 免责须知：</h1>
    <p>9.1 鉴于现有技术及运营商资源的局限性，运营商在此特别提示用户在本网络游戏防沉迷系统及实名认证实施过程中可能存在缺陷及瑕疵，用户对此表示理解和认可同意并自动接受此服务协议的约定内容，运营商在依照本协议所述履行相应义务的前提下，用户承诺不就此追究运营商的责任。 </p>
    <p>9.2 由于用户向运营商提供错误、不完整、不实信息等致使本人遭受任何损失，责任自负。 </p>
    <p>9.3由于用户个人原因将密码告知他人或未保管好自己的密码或与他人共享注册账户或任何其它非运营商的过错，导致本人实名认证信息泄露，运营商不承担责任。</p>
</div>


<!--footer-->

<!--footer-->
<div class="c-footer">
    <!--<div>公司介绍   |   联系我们</div>-->
	<div>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活</div>
    <div>Copyright © 2016 hbyc.com All Rights Reserved  版权所有 · 大庆市优世网络科技开发有限公司</div>
    <div>备案编号：黑ICP备17000518号-1</div>
</div>
<!--footer end-->
<!--footer end-->
</body>
</html>