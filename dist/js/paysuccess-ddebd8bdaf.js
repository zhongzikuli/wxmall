$("#order-card").click(function(){xhq.gotoUrl("order_list.html?version="+xhq.getVersion())}),$("#index").click(function(){2==xhq.getQuery("fromUserType")?xhq.gotoUrl("home.html?version="+xhq.getVersion()):1==xhq.getQuery("isWs")?xhq.gotoUrl("ws_home.html?version="+xhq.getVersion()):xhq.gotoUrl("home.html?version="+xhq.getVersion())}),$(".back_btn").click(function(){xhq.gotoUrl("tour.html?version="+xhq.getVersion())}),$(".share_btn").click(function(){var e=xhq.getQuery("groupId")||"";xhq.getQuery("orderNo")||"",xhq.getQuery("channelType")||"";xhq.gotoUrl("../html/tour_goods_share.html",{grouponId:e})}),$(document).ready(function(){var e=getLocalSession("custId")||"",o=xhq.getQuery("orderNo")||"",r=xhq.getQuery("channelType")||"",t=xhq.getQuery("groupId")||"";if($("#orderNo").html(o),"4"==r){var n={interId:"toc.getGrouponByGroupId",channel:"C",custId:e,groupId:t};xhq.__runXHQ(n,function(e){0==e.status&&$("#groupContent").html("开团成功！")})}else"3"==r&&$("#successContent").html("兑换成功！")});