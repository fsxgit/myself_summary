<?php if (!defined('THINK_PATH')) exit();?>		<?php if(is_array($nicecalss)): foreach($nicecalss as $key=>$vo): ?><div class="hang-lei-mode f12">
                               <h1 class="lei-h1">第<?php echo ($vo["id"]); ?>类 <?php echo ($vo["name"]); ?> <span>删除</span></h1>
                                <div class="hang-lei-cont">
                                   <?php if(is_array($vo["items"])): foreach($vo["items"] as $key=>$vi): if(is_array($vi["items"])): foreach($vi["items"] as $key=>$vv): ?><div class="lei-name"><?php echo ($vv["code"]); ?> &nbsp <?php echo ($vv["name"]); ?> 
									<input type="hidden" name="nmd[]" value='<?php echo ($vv["id"]); ?>'><span class="del"></span></div><?php endforeach; endif; endforeach; endif; ?>
                                    <div class="lei-add"><img src="public/html/images/add1.png" width="60" height="28" alt=""/></div>
                                </div>
                     </div><?php endforeach; endif; ?>