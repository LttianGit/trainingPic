###小程序-美团
> **首页**

1.分类
- 接口：
https://portal-portm.meituan.com/weapp/dynamic/navconfig/navlist/v2

- 您需要提供的参数：
cid

- 请求方式：==get==


2.很优惠
- 接口：
https://apimobile.meituan.com/group/v1/recommend/theme/homepage

- 您需要提供的参数：
uuid,position,client,utm_medium,ci,utm_source,userId,token

- 请求方式：==get==

3.猜你喜欢
- 接口：
https://apimobile.meituan.com/group/v2/recommend/homepage/city/1

- 您需要提供的参数：
token,userid,uuid,scene,position,client,globalId,displayed

- 请求方式：==post==


> **订单**

1.美团订单
- 接口：
https://ordercenter.meituan.com/ordercenter/user/orders

- 您需要提供的参数：
userid,token,offset,limit,platformid,statusFilte,version

- 请求方式：==get==

2.拼团订单
- 接口：
https://open.youzan.com/api/oauthentry/kdt.trade.buyer.search/1.0.0/get

- 您需要提供的参数：
access_token,kdt_id,order_state,page_no,page_size,use_has_next,order_mark,wx_shop

- 请求方式：==get==


> **我的**

1.订单接口和订单页面的接口一样

2.收藏
- 接口：
https://apimobile.meituan.com/group/v1/user/1397881246/mergeCollections4PC

- 您需要提供的参数：
token,userId,offset,limit,type,lat,lng,ci

- 请求方式：==get==

3.券包
- 接口：
https://promotionapi-wpt.meituan.com/miniapp/v1/user/1397881246/vouchers

- 您需要提供的参数：
token,limit

- 请求方式：==get==

4.免费领券
- 接口：
https://lotteryserver-wpt.meituan.com/lottery/list

- 您需要提供的参数：
parentTabId,childTabId,offset,limit,cityId,lat,lng,platform,uuid,userId,appType

- 请求方式：==get==

5.美团信用卡
- 接口：
https://card.meituan.com/api/firstPage/selectCardInfoByMetaId

- 您需要提供的参数：
cardMetaId,token

- 请求方式：==get==

6.意见反馈
- 接口：
https://kf.dianping.com/api/relations/listRecommendRelation

- 您需要提供的参数：
bu,orderType,orderStatus,orderId,visitId,subSource,buExt

- 请求方式：==get==


