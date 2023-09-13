const indexFunctionMap = {
	/**
	 * 全站预约组件点击数
	*/
	itemEntranceClkCnt: formatToNumberFixed2,
	/** 客单价 */
	averageOrderCnt: formatToNumberFixed2,
	/** 花费 */
	costTotal: formatToMoney,
	/** 平均千次曝光成本 */
	cpm: formatToMoney,
	/** 粉丝关注成本 */
	recoFansCost: formatToNumberFixed2,
	merchantRecFansCost: formatToNumberFixed2,
	/** 商品点击成本 */
	conversionLiveEventGoodsViewCost: formatToNumberFixed2,
	/** 直播间进入成本 */
	liveAudienceCost: formatToNumberFixed2,
	/** 直接订单成本 */
	orderCost: formatToNumberFixed2,
	paiedOrderCost: formatToNumberFixed2,
	/** 直接GMV */
	gmv: formatToMoney,
	eventOrderPaymentAmount: formatToMoney,
	/** 当日累计GMV */
	t0GMV: formatToMoney,
	t0OrderPaymentAmt: formatToMoney,
	/** 次日累计GMV */
	t1GMV: formatToMoney,
	/** 3日累计GMV */
	t3GMV: formatToMoney,
	/** 7日累计GMV */
	t7GMV: formatToMoney,
	/** 15日累计GMV */
	t15GMV: formatToMoney,
	/** 30日累计GMV */
	t30GMV: formatToMoney,
	/** 直播观看成本 */
	conversionLivePlay3sCost: formatToMoney,
	liveViewCost: formatToMoney,
	adLiveAudienceCost: formatToMoney,
	/** 今日预算 */
	dayBudget: (val: number | string) => (val ? formatToMoney(val) : '不限'),

	/** 预热ROI */
	merchantLiveOrderRoi: formatToNumberFixed2,
	/** 直接ROI */
	roi: formatToNumberFixed2,
	paiedOrderRoi: formatToNumberFixed2,
	/** 当日累计ROI */
	t0Roi: formatToNumberFixed2,
	t0RoiCh: formatToNumberFixed2,
	lsT0Roi: formatToNumberFixed2,
	/** 次日累计ROI */
	t1Roi: formatToNumberFixed2,
	lsT1Roi: formatToNumberFixed2,
	/** 3日累计ROI */
	lsT3Roi: formatToNumberFixed2,
	/** 7日累计ROI */
	t7Roi: formatToNumberFixed2,
	lsT7Roi: formatToNumberFixed2,
	/** 15日累计ROI */
	t15Roi: formatToNumberFixed2,
	lsT15Roi: formatToNumberFixed2,
	/** 30日累计ROI */
	t30Roi: formatToNumberFixed2,
	lsT30Roi: formatToNumberFixed2,

	/** 素材点击率 */
	actionRatio: formatToPercent,
	merchantClickRatio: formatToPercent,
	itemCkRate: formatToPercent,
	/** 封面点击率 */
	photoClickRatio: formatToPercent,
	coverCtr: formatToPercent,

	/** 粉丝关注数 */
	merchantRecoFans: formatToNumber,
	/** 粉丝关注成本 */
	followCost: formatToMoney,
	/** 商品点击数 */
	liveEventGoodsView: formatToNumber,
	adLiveShopLinkJump: formatToNumber,
	/** 直播间进入数 */
	liveAudience: formatToNumber,
	standardLivePlayedStarted: formatToNumber,
	/** 直接订单数 */
	paiedOrder: formatToNumber,
	/** 当日累计订单数 */
	t0OrderCnt: formatToNumber,
	/** 次日累计订单数 */
	t1OrderCnt: formatToNumber,
	/** 3日累计订单数 */
	t3OrderCnt: formatToNumber,
	/** 7日累计订单数 */
	t7OrderCnt: formatToNumber,
	/** 15日累计订单数 */
	t15OrderCnt: formatToNumber,
	/** 30日累计订单数 */
	t30OrderCnt: formatToNumber,
	/** 1日涨粉留存数 */
	t1Retention: formatToNumber,
	/** 7日涨粉留存数 */
	t7Retention: formatToNumber,
	/** 30日涨粉留存数 */
	t30Retention: formatToNumber,
	/** 播放3s数 */
	playedThreeSeconds: formatToNumber,
	/** 播放3s率 */
	play3sRatio: formatToPercent,
	/** 播放5s数 */
	playedFiveSeconds: formatToNumber,
	/** 播放5s率 */
	play5sRatio: formatToPercent,
	/** 作品完播数 */
	playedEnd: formatToNumber,
	adPhotoPlayedEnd: formatToNumber,
	/** 作品完播率 */
	playEndRatio: formatToPercent,
	/** 作品3秒播放率 */
	photoPlay3sRatio: formatToPercent,
	/** 作品5秒播放率 */
	photoPlay5sRatio: formatToNumber,
	/** 分享数 */
	share: formatToNumber,
	adPhotoShare: formatToNumber,
	/** 评论数 */
	comment: formatToNumber,
	adPhotoComment: formatToNumber,
	/** 点赞数 */
	likes: formatToNumber,
	adLiveLike: formatToNumber,
	adPhotoLike: formatToNumber,
	/** 举报数 */
	report: formatToNumber,
	/** 拉黑数 */
	block: formatToNumber,
	/** 直播观看数 */
	livePlayed3s: formatToNumber,
	standardAdLivePlayedStarted: formatToNumber,
	/** 减少此类作品数 */
	itemNegative: formatToNumber,
	/** 直播间分享数 */
	liveShare: formatToNumber,
	adLiveShare: formatToNumber,
	/** 直播间评论数 */
	liveComment: formatToNumber,
	adLiveComment: formatToNumber,
	/** 直播间送礼数 */
	liveReward: formatToNumber,
	/** 封面曝光数 */
	impression: formatToNumber,
	adPhotoImpression: formatToNumber,
	/** 封面点击数 */
	photoClick: formatToNumber,
	adPhotoClick: formatToNumber,
	/** 素材曝光数 */
	click: formatToNumber,
	adItemImpression: formatToNumber,
	/** 素材点击数 */
	actionbarClick: formatToNumber,

	/** 直播平均观看时长 */
	adLivePlayedSeconds: formatToSeconds,
	liveViewDurAvg: formatToSeconds,
	merchantAvgLivePlayDuration: formatToSeconds,

	/** 计划创建时间 */
	campaignCreateTime: formatTimeStamp,

	/** 组Id */
	unitId: formatToDefault,
	/** 组名称 */
	unitName: formatToDefault,
	/** 计划Id */
	campaignId: formatToDefault,
	/** 计划名称 */
	campaignName: formatToDefault,
	/** 创意Id */
	creativeId: formatToDefault,
	/** 创意名称 */
	creativeName: formatToDefault,
	/** 营销目标 */
	campaignTypeStr: formatToDefault,
	/** 转化目标 */
	ocpcActionTypeStr: formatToDefault,
	/** 创意样式 */
	liveCreativeTypeStr: formatToDefault,
	/** 投放方式 */
	speedTypeStr: formatToDefault,
	/** 订单名称 */
	comboName: formatToDefault,
	/** 套餐订单Id */
	comboId: formatToDefault,
	/** 订单Id */
	targetId: formatToDefault,
	/** 推广场景 */
	sceneOrientedTypeStr: formatToDefault,
	/** 创意组成方式 */
	creativeBuildTypeStr: formatToDefault,

	/** 预约成功数 */
	reservationSuccess: formatToNumber,
	adLiveReservationSuccess: formatToNumber,
	/** 预约成功成本 */
	reservationCost: formatToMoney,
	reservationSuccessCost: formatToNumberFixed2,

	/** 广告曝光数 */
	adShow: formatToNumber,
	/** 平均千次广告曝光花费 */
	adShow1kCost: formatToMoney,
	/** 商品点击成本 */
	conversionEventGoodsViewCost: formatToMoney,
	/** 直播间商品点击成本 */
	liveGoodsCkCost: formatToMoney,
	/** 直播间商品点击率 */
	goodsClickRatio: formatToPercent,
	liveGoodsCkRate: formatToPercent,
	/** 直接下单率 */
	orderRatio: formatToPercent,
	paiedOrderRate: formatToPercent,
	/** 当日累计订单成本 */
	t0OrderCntCost: formatToNumberFixed2,
	t0OrderCost: formatToNumberFixed2,
	/** 累计订单下单率 */
	t0OrderCntRatio: formatToPercent,
	/** 15日涨粉留存数 */
	t15Retention: formatToNumber,
	/** 1日涨粉留存率 */
	t1RetentionRatio: formatToPercent,
	/** 7日涨粉留存率 */
	t7RetentionRatio: formatToPercent,
	/** 15日涨粉留存率 */
	t15RetentionRatio: formatToPercent,
	/** 30日涨粉留存率 */
	t30RetentionRatio: formatToPercent,
	/** 直播平均观看时长(修改计算公式) */
	espLivePlayedSeconds: formatToSeconds,
	/** 行为数 */
	adItemClick: formatToNumber,
	/** 行为率 */
	espClickRatio: formatToPercent,
	itemCtr: formatToPercent,
	itemClickRatio: formatToPercent,
	/** 行为成本 */
	actionbarClickCost: formatToNumberFixed2,
	itemCkCost: formatToNumberFixed2,
	/** 转化数 */
	conversionNum: formatToNumber,
	/** 转化成本 */
	conversionCostEsp: formatToNumberFixed2,
	/** 购买转化率 */
	accountRoi: formatToPercent,
	/** arpu */
	arpu: formatToNumberFixed2,
	/** UV价值 */
	averageGmv: formatToNumberFixed2,
	/** 曝光用户数 */
	adShowUv: formatToNumber,
	/** 商品访问数 */
	eventGoodsView: formatToNumber,
	/** 商品访问率 */
	eventGoodsViewRatio: formatToPercent,
	/** 成交转化率 */
	transactionConversionRatio: formatToPercent,
	/** 单均价 */
	averageOrderCost: formatToMoney,
	/** 组件点击数 */
	adItemClickCount: formatToNumber,
	/** 组件点击成本 */
	adItemClickCost: formatToNumberFixed2,
	/** 有效播放数 */
	effectivePlayCount: formatToNumber,
	adLiveEffectivePlayNum: formatToNumber,
	/** 有效播放成本 */
	effectivePlayCost: formatToNumberFixed2,
	/** 有效播放率 */
	effectivePlayRatio: formatToPercent,
	/** 新增粉丝人均销售额t0 */
	fansT0GmvPerFans: formatToMoney,
	/** 新增粉丝人均销售额t7 */
	fansT7GmvPerFans: formatToMoney,
	/** 新增粉丝人均销售额t15 */
	fansT15GmvPerFans: formatToMoney,
	/** 新增粉丝人均销售额t30 */
	fansT30GmvPerFans: formatToMoney,
	/** 涨粉当日GMV */
	fansT0GMV: formatToMoney,
	t0FollowOrderPaymentAmt: formatToMoney,
	/** 涨粉次日GMV */
	fansT1GMV: formatToMoney,
	t1FollowOrderPaymentAmt: formatToMoney,
	/** 涨粉3日GMV */
	t3FollowOrderPaymentAmt: formatToMoney,
	/** 涨粉7日GMV */
	fansT7GMV: formatToMoney,
	t7FollowOrderPaymentAmt: formatToMoney,
	/** 涨粉15日GMV */
	fansT15GMV: formatToMoney,
	t15FollowOrderPaymentAmt: formatToMoney,
	/** 涨粉30日GMV */
	fansT30GMV: formatToMoney,
	t30FollowOrderPaymentAmt: formatToMoney,
	/** 详情页减少此类作品数 */
	adNegativeSum: formatToNumber,
	/** 涨粉当日ROI */
	fansT0Roi: formatToNumberFixed2,
	t0FollowRoi: formatToNumberFixed2,
	/** 涨粉次日ROI */
	fansT1Roi: formatToNumberFixed2,
	t1FollowRoi: formatToNumberFixed2,
	/** 涨粉3日ROI */
	t3FollowRoi: formatToNumberFixed2,
	/** 涨粉7日ROI */
	fansT7Roi: formatToNumberFixed2,
	t7FollowRoi: formatToNumberFixed2,
	/** 涨粉15日ROI */
	fansT15Roi: formatToNumberFixed2,
	t15FollowRoi: formatToNumberFixed2,
	/** 涨粉30日ROI */
	fansT30Roi: formatToNumberFixed2,
	t30FollowRoi: formatToNumberFixed2,
	/** 粉丝新增下单数t0 */
	followT0OrderCnt: formatToNumber,
	/** 粉丝新增下单数t7 */
	followT7OrderCnt: formatToNumber,
	/** 粉丝新增下单数t15 */
	followT15OrderCnt: formatToNumber,
	/** 粉丝新增下单数t30 */
	followT30OrderCnt: formatToNumber,
	/** 直接平台新客 */
	directAttrPlatNewBuyerCnt: formatToNumber,
	/** 30日累计平台新客 */
	t30AttrPlatTotalBuyerCnt: formatToNumber,
	/** 直接店铺新客 */
	directAttrSellerNewBuyerCnt: formatToNumber,
	/** 30日累计店铺新客 */
	t30AttrSellerTotalBuyerCnt: formatToNumber,
	/** 总消耗 */
	liveReservationCostTotal: formatToMoney,
	/** 预热消耗 */
	merchantLiveReservationCostAmt: formatToMoney,
	/** 直播消耗 */
	merchantLiveAdCostAmt: formatToMoney,
	/** 总曝光 */
	liveAdShowTotal: formatToNumber,
	/** 预热曝光 */
	merchantLiveReservationShowCnt: formatToNumber,
	/** 直播曝光 */
	merchantLiveAdShowCnt: formatToNumber,
	/** 预约组件点击 */
	adReservationItemClickNum: formatToNumber,
	/** 预约点击成本 */
	adReservationItemClickCost: formatToNumberFixed2,
	/** 预约点击率 */
	adReservationItemClickRate: formatToPercent,
	reservationSuccessRatio: formatToPercent,
	/** 有效播放成本 */
	adLiveEffectivePlayCost: formatToNumberFixed2,
	/** 有效播放率 */
	adLiveEffectivePlayRate: formatToPercent,
	/** 涨粉数 */
	adMerchantLiveFollowCnt: formatToNumber,
	adMerchantFollow: formatToNumber,
	/** 涨粉成本 */
	adMerchantLiveFollowCost: formatToNumberFixed2,
	/** 涨粉率 */
	adMerchantLiveFollowRate: formatToPercent,
	/** 直播观看数 */
	merchantLivePlayUserCnt: formatToNumber,
	adLiveAudience: formatToNumber,
	/** 直播进入率 */
	merchantLivePlayRate: formatToPercent,
	/** 直播召回率 */
	merchantLiveRecoRate: formatToPercent,
	/** 订单成交数 */
	merchantLiveOrderCnt: formatToNumber,
	/** 订单成交率 */
	merchantLiveOrderRate: formatToPercent,
	/** 订单成交成本 */
	merchantLiveOrderCost: formatToNumberFixed2,
	/** GPM */
	merchantLiveOrderGpm: formatToNumberFixed2,
	/** GMV */
	merchantLiveOrderGmv: formatToMoney,
	/** 总ROI */
	merchantLiveRoi: formatToNumberFixed2,
	/** 新客GMV */
	t0ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t1ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t3ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t7ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t15ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t30ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t60ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t90ShopNewBuyerOrderPaymentAmt: formatToMoney,
	t180ShopNewBuyerOrderPaymentAmt: formatToMoney,
	/** 成交率 */
	t0OrderCntPerAdShow: formatToPercent,
	t7OrderCntPerAdShow: formatToPercent,
	t15OrderCntPerAdShow: formatToPercent,
	t30OrderCntPerAdShow: formatToPercent,
	t0PayOrderUserCnt: formatToNumber,
	shopNewBuyerT0GmvPerNewBuyer: formatToMoney,
	t0ShopOldBuyerOrderCnt: formatToNumber,
	t0ShopOldBuyerOrderPaymentAmt: formatToMoney,
	t0ShopNewToOldBuyerCnt: formatToNumber,
	shopOldBuyerT0GmvPerOldBuyer: formatToMoney,
	/** 全店GMV */
	directOrderPaymentAmt: formatToMoney,
	storewideRoi: formatToNumberFixed2,
	storewideOderCntCost: formatToNumberFixed2,
	directOrderCnt: formatToNumber,
	clickCnt: formatToNumber,
	showCnt: formatToNumber,
	/** 直播间人气成本 */
	adLivePlayCntCost: formatToNumberFixed2,
	/** 直播间人气数 */
	adLivePlayCnt: formatToNumber,
	/** 新客订单数 */
	t0ShopNewBuyerOrderCnt:formatToNumber,
	t1ShopNewBuyerOrderCnt:formatToNumber,
	t3ShopNewBuyerOrderCnt:formatToNumber,
	t7ShopNewBuyerOrderCnt:formatToNumber,
	t15ShopNewBuyerOrderCnt:formatToNumber,
	t30ShopNewBuyerOrderCnt:formatToNumber,
	t60ShopNewBuyerOrderCnt:formatToNumber,
	t90ShopNewBuyerOrderCnt:formatToNumber,
	t180ShopNewBuyerOrderCnt:formatToNumber,
	/** 新客复购率 */
	t0NewBuyerRepurchaseRatio:formatToPercent,
	t1NewBuyerRepurchaseRatio:formatToPercent,
	t3NewBuyerRepurchaseRatio:formatToPercent,
	t7NewBuyerRepurchaseRatio:formatToPercent,
	t15NewBuyerRepurchaseRatio:formatToPercent,
	t30NewBuyerRepurchaseRatio:formatToPercent,
	t60NewBuyerRepurchaseRatio:formatToPercent,
	t90NewBuyerRepurchaseRatio:formatToPercent,
	t180NewBuyerRepurchaseRatio:formatToPercent,
	/** 新客ROI */
	t0ShopNewBuyerRoi: formatToNumberFixed2,
	t1ShopNewBuyerRoi: formatToNumberFixed2,
	t3ShopNewBuyerRoi: formatToNumberFixed2,
	t7ShopNewBuyerRoi: formatToNumberFixed2,
	t15ShopNewBuyerRoi: formatToNumberFixed2,
	t30ShopNewBuyerRoi: formatToNumberFixed2,
	t60ShopNewBuyerRoi: formatToNumberFixed2,
	t90ShopNewBuyerRoi: formatToNumberFixed2,
	t180ShopNewBuyerRoi: formatToNumberFixed2,

};
