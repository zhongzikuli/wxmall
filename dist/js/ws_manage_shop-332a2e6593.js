function openIndicator(){$.showIndicator(),isIndicator=!0}function showNoDataPage(){$("#content-block1").hide(),$("#content-block2").show()}function hideIndicator(){isIndicator&&($.hideIndicator(),isIndicator=!1),loading=!1}var pageNo=0,pageSize=10,$content=null,loading=!1,shareConfig={},shareTitle=(getLocalSession("nickName")||"")+"的店铺",shareIcon=getLocalSession("headimgUrl")||DEFAULT_HEADIMG,shareUrl=xhq.getDomainUrl()+"ws_shop.html?fromCustId="+getLocalSession("custId")+"&fromUserType=2&"+xhq.getVersion(),shareConfig={title:shareTitle,desc:"全民集市，特卖好货。自买返利，分享赚钱。成为会员更有多种福利等着你",link:shareUrl,imgUrl:shareIcon},custId=0,userType=0;$(function(){function s(){pageNo+=1;var s={interId:"toc.custOnlineList",channel:"C",wsId:custId,pageNo:pageNo,pageSize:pageSize};xhq.__runXHQ(s,function(s){hideIndicator(),0==s.status?(t(s),(!s.body||s.body.length<pageSize)&&($.detachInfiniteScroll($content),$(".infinite-scroll-preloader").remove()),1!=pageNo||s.body&&0!=s.body.length||showNoDataPage(),loading=!1):$.toast(s.message)})}function t(s){var t="";if(s.body&&s.body&&s.body.length>0){for(var a=0;a<s.body.length;a++){var e=s.body[a];t+=n(e,a)}$(".content-block .list_container").append(t)}else t=t,$(".content-block").append(t)}function n(s,t){var n;if(n=0==t?'<li class="f_li">':"<li>",n+=xhq.getQuery("isWs")?'<a href="goods_detail.html?onlineId='+s.onlineId+"&"+xhq.getVersion()+'" class="item-link list-button external">':'<a href="goods_detail.html?onlineId='+s.onlineId+"&"+xhq.getVersion()+'&isWs=1" class="item-link list-button external">',n+='<div class="li_l"><img src='+s.ImageUrl+' alt=""></div><div class="li_r"><div class="up_con">'+s.showName+'</div><div class="mid_con"><div class="pri_l">',n+=s.purchasePrice?'<p>¥<span class="pri_one">'+s.salePrice/100+'</span><s>¥<span class="pri_two">'+s.purchasePrice/100+"</span></s></p>":'<p>¥<span class="pri_one">'+s.salePrice/100+'</span><s><span class="pri_two"></span></s></p>',n+='</div><div class="pri_r">赚: ¥<span>'+s.bonus/100+'</span></div></div><div class="down_con"><div class="sur_l">',s.stock<=0)n+='<p class="surplus" status="'+s.status+'" totalStock="'+s.totalStock+'" stock="0" style="background: rgb(255,255,255)"><span class="span_f" style="background: rgba(0,0,0,0.4);width:4.5rem" ></span><span class="span_s">剩余<span>0</span>个</span></div></div></div></a>';else{var e=a(s.totalStock,s.stock);n+=1==e?'<p class="surplus" status="'+s.status+'" totalStock="'+s.totalStock+'" stock="'+s.stock+'"><span class="span_f" style="width:4.5rem;border-radius: 8px"></span><span class="span_s">剩余<span>'+s.stock+"</span>个</span>":e>.9&&e<1?'<p class="surplus" status="'+s.status+'" totalStock="'+s.totalStock+'" stock="'+s.stock+'"><span class="span_f" style="width:4.05rem;border-radius: 8px 0 0 8px"></span><span class="span_s">剩余<span>'+s.stock+"</span>个</span>":'<p class="surplus" status="'+s.status+'" totalStock="'+s.totalStock+'" stock="'+s.stock+'"><span class="span_f" style="width:'+4.5*e+'rem;border-radius: 8px 0 0 8px" ></span><span class="span_s">剩余<span>'+s.stock+"</span>个</span>",n+="</p></div></div></div></a>"}return n+=0==t?'<div class="sur_m"><img src="../img/icon_delete@2x.png" alt="" class="delete" data_id='+s.onlineId+'><img src="../img/icon_up@2x.png" alt="" class="up none_tap" data_id='+s.onlineId+"></div></li>":'<div class="sur_m"><img src="../img/icon_delete@2x.png" alt="" class="delete" data_id='+s.onlineId+'><img src="../img/icon_up_active%20@2x.png" alt="" class="up" data_id='+s.onlineId+"></div></li>"}function a(s,t){return 0==s?1:t/s}return custId=getLocalSession("custId")||"0",userType=getLocalSession("userType")||"1",custId<=0||1==userType?void xhq.gotoRegUrl():($(document).on("pageInit","#page-ptr",function(t,n,a){$content=$(a).find(".content-block"),$(a).on("infinite",function(t){loading||(openIndicator(),loading=!0,setTimeout(function(){isAppendMode=1,s(),$.refreshScroller()},1e3))})}),$.init(),openIndicator(),$("#input_image").attr("src",getLocalSession("headimgUrl")),$("#input_level").html(getLocalSession("level")||"店长"),$("#input_sname").html(getLocalSession("nickName")||"的店铺"),s(),$(".list_container").on("tap","li .delete",function(){var s=$(this),t=$(this).attr("data_id"),n={interId:"toc.custDownOnline",channel:"C",custId:getLocalSession("custId"),onlineId:t};$.showIndicator(),xhq.__runXHQ(n,function(t){if($.hideIndicator(),0==t.status){var n=s.parent().parent();if(n.hasClass("f_li")){var a=n.next();a.addClass("f_li"),a.find(".up").addClass("none_tap").attr("src","../img/icon_up@2x.png")}n.hide(),$.toast("删除成功")}else $.toast(t.message)})}),$(".list_container").on("tap","li .up",function(){var s=($(this),$(this).attr("data_id")),t={interId:"toc.custTopOnline",channel:"C",custId:getLocalSession("custId"),onlineId:s};$.showIndicator(),xhq.__runXHQ(t,function(s){$.hideIndicator(),0==s.status?$.toast("置顶成功"):$.toast(s.message)})}),xhq.initWXJsConfig(),wx.ready(function(){wx.onMenuShareAppMessage(shareConfig),wx.onMenuShareTimeline(shareConfig)}),void $("#tohome").on("tap",function(){2==xhq.getQuery("fromUserType")?xhq.gotoUrl("home.html"):xhq.gotoUrl("ws_home.html")}))});