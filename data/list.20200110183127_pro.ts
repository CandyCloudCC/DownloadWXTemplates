export const dataArray = [
  {
    id: 'TM00415',
    title: '小区电梯中断服务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1001,
    content: '{{first.DATA}}\n\n电梯中断时间：{{time.DATA}}\n电梯中断范围：{{location.DATA}}\n电梯中断原因：{{reason.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您小区电梯将停止服务一段时间。\n\n电梯中断时间：2013年10月6日8：00-2013年10月6日18:00\n电梯中断范围：A16栋1号电梯\n电梯中断原因：设备检修\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:57'
  },
  {
    id: 'TM00416',
    title: '小区停车场中断服务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 415,
    content: '{{first.DATA}}\n\n停车场关闭时间：{{time.DATA}}\n停车场关闭范围：{{location.DATA}}\n停车场关闭原因：{{reason.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您小区停车场将停止服务一段时间。\n\n停车场关闭时间：2013年10月6日8：00-2013年10月6日18:00\n停车场关闭范围：A栋地下车库B区\n停车场关闭原因：车库维修\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:58'
  },
  {
    id: 'TM00417',
    title: '小区门禁密码更换通知',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n\n新门禁密码：{{password.DATA}}\n门禁密码更换时间：{{time.DATA}}\n门禁密码更换范围：{{location.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您所居住的A栋门禁密码将更换。\n\n新门禁密码：123456\n门禁密码更换时间：2014年3月15日4：00\n门禁密码更换范围：A栋\n请您注意记录新密码，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:58'
  },
  {
    id: 'TM00418',
    title: '小区门禁卡到期失效提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 393,
    content: '{{first.DATA}}\n\n门禁卡失效范围：{{scope.DATA}}\n门禁卡失效时间：{{time.DATA}}\n门禁卡重新激活办法：{{method.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您所使用的门禁卡可能需要重新激活。\n\n门禁卡失效范围：卡号0230-0460；\n门禁卡失效时间：2014年3月15日4：00\n门禁卡重新激活办法：请即时到物业管理处重新激活。\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:58'
  },
  {
    id: 'TM00419',
    title: '小区服务变动通知',
    class1: '房地产',
    class2: '物业',
    person_used: 361,
    content: '{{first.DATA}}\n\n服务内容：{{service.DATA}}\n服务变动详情：{{detail.DATA}}\n服务变动时间：{{time.DATA}}\n服务变动范围：{{location.DATA}}\n服务变动原因：{{reason.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您小区XX路因维修需暂停通行一段时间。\n\n服务内容：XX路\n服务变动详情：道路通行中断\n服务变动时间：2013年10月6日8：00-2013年10月6日18:00\n服务变动范围：XX路（A栋到C栋段）\n服务变动原因：道路检修\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:58'
  },
  {
    id: 'TM00420',
    title: '煤气抄表提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n\n业主姓名：{{userName.DATA}}\n用燃气地址：{{address.DATA}}\n计费月份：{{month.DATA}}\n{{remark.DATA}}',
    example: '您好，请回复您本月燃气表读数。\n\n业主姓名：某某\n用燃气地址：A栋1单元204室\n计费月份：2013年10月\n请尽快回复，如有疑问，请咨询134545646。',
    modify_time: '2015-01-15 16:45:58'
  },
  {
    id: 'TM00421',
    title: '租户信息登记提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 83,
    content: '{{first.DATA}}\n\n住户姓名：{{userName.DATA}}\n通知详情：{{event.DATA}}\n时间：{{time.DATA}}\n地点：{{address.DATA}}\n{{remark.DATA}}',
    example: '您好，请尽快到居委会完成租户信息登记。\n\n住户姓名：某某\n通知详情：租户信息登记\n时间：周一到周五上午9点-12点，下午14点-18点\n地点：居委会工作站\n如有疑问，请咨询134545646。',
    modify_time: '2015-01-15 16:45:58'
  },
  {
    id: 'TM00324',
    title: '业主认证结果',
    class1: '房地产',
    class2: '物业',
    person_used: 881,
    content: '{{first.DATA}}\n\n姓名：{{name.DATA}}\n电话：{{tel.DATA}}\n物业地址：{{address.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您提交的业主认证信息已经通过认证\n\n您好，您的认证信息如下：\n\n姓名：林书勤\n电话：13851840855\n物业地址：南国奥园悉尼奥园村2栋2层202\n如有疑问，请拨打咨询热线02034778000。\n感谢您对我们服务的支持和监督，祝您生活愉快。',
    modify_time: '2015-01-15 16:45:44'
  },
  {
    id: 'TM00327',
    title: '物业服务预订通知',
    class1: '房地产',
    class2: '物业',
    person_used: 91,
    content: '{{first.DATA}}\n\n银行卡号：{{num.DATA}}\n缴费金额：{{amount.DATA}}\n物业地址：{{address.DATA}}\n服务时间：{{date.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主/住户，感谢您使用我们的服务\n您已成功支付更换洗手池服务订金100元。\n\n银行卡号：尾号4545\n缴费金额：200元\n物业地址：南国奥园悉尼奥园村2栋2层202\n服务时间：2013年9月30日 17:58\n如有疑问，请拨打咨询热线02034778000。',
    modify_time: '2015-01-15 16:45:44'
  },
  {
    id: 'TM00328',
    title: '物业费缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 366,
    content: '{{first.DATA}}\n\n银行卡号：{{num.DATA}}\n缴费金额：{{amount.DATA}}\n物业地址：{{address.DATA}}\n时间：{{date.DATA}}\n{{remark.DATA}}',
    example: '\n您好，您已成功缴纳1月费用。\n\n银行卡号：尾号4545\n缴费金额：279元\n物业地址：南国奥园悉尼奥园村2栋2层202\n时间：2013年9月30日 17:58\n如有疑问，请拨打咨询热线02034778000。',
    modify_time: '2015-01-15 16:45:44'
  },
  {
    id: 'TM00131',
    title: '物业费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2011,
    content: '{{first.DATA}}\n\n业主姓名：{{userName.DATA}}\n地址：{{address.DATA}}\n物业费金额：{{pay.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月物业费已出。\n\n业主姓名：邹某某\n地址：丽景华庭A栋508\n物业费金额：50元\n请尽快缴纳，如有疑问，请咨询134545646。',
    modify_time: '2015-01-15 16:45:15'
  },
  {
    id: 'TM00132',
    title: '水费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 178,
    content: '{{first.DATA}}\n\n业主姓名：{{userName.DATA}}\n用水地址：{{address.DATA}}\n计费月份：{{month.DATA}}\n计费水量：{{power.DATA}}\n水费金额：{{pay.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月水费已出。\n\n业主姓名：邹某某\n用水地址：丽景华庭A栋508\n计费月份：2013年10月\n计费水量：12吨\n水费金额：35元\n请尽快缴纳，如有疑问，请咨询134545646。',
    modify_time: '2015-01-15 16:45:15'
  },
  {
    id: 'TM00332',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 233,
    content: '\n{{first.DATA}}\n\n{{headinfo.DATA}}\n住宅物业服务费:{{wuye.DATA}}\n代收水费:{{shui.DATA}}\n代收电费:{{dian.DATA}}\n梯灯公摊费:{{deng.DATA}}\n公共路灯公摊费:{{ludeng.DATA}}\n二次水泵电费:{{ercishuilv.DATA}}\n水泵电费:{{shuilv.DATA}}\n合计：{{heji.DATA}}\n{{remark.DATA}}',
    example: '11月最新的账单已发布\n\n林书勤您好，你11月物业管理费：\n住宅物业服务费:100元\n代收水费:20元\n代收电费:50元\n梯灯公摊费:10元\n公共路灯公摊费:10元\n二次水泵电费:10元\n水泵电费:10元\n合计：210元\n为了让您生活方便请尽快缴纳。如已缴费，勿理会。\n如有疑问，请拨打咨询热线02034778000。 \n点击这里，立即缴费',
    modify_time: '2015-01-15 16:45:45'
  },
  {
    id: 'TM00133',
    title: '电费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 155,
    content: '{{first.DATA}}\n\n业主姓名：{{userName.DATA}}\n用电地址：{{address.DATA}}\n计费月份：{{month.DATA}}\n计费电量：{{power.DATA}}\n电费金额：{{pay.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月电费已出。\n\n业主姓名：邹某某\n用电地址：微信团队工作地\n计费月份：2013年10月\n计费电量：122度\n电费金额：357元\n请尽快缴纳，如有疑问，请咨询134545646。',
    modify_time: '2015-01-15 16:45:15'
  },
  {
    id: 'TM00333',
    title: '服务信息完成提示',
    class1: '房地产',
    class2: '物业',
    person_used: 534,
    content: '\n{{first.DATA}}\n\n你的服务【{{name.DATA}}】已完成，服务评价为【{{result.DATA}}】',
    example: '你好，有新的服务信息完成提示\n\n你的服务【更换洗手池】已完成，服务评价为【满意】',
    modify_time: '2015-01-15 16:45:45'
  },
  {
    id: 'TM00134',
    title: '燃气费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 42,
    content: '{{first.DATA}}\n\n业主姓名：{{userName.DATA}}\n用燃气地址：{{address.DATA}}\n计费月份：{{month.DATA}}\n计费燃气量：{{power.DATA}}\n燃气费金额：{{pay.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月燃气费已出。\n\n业主姓名：邹某某\n用燃气地址：微信团队工作地\n计费月份：2013年10月\n计费燃气量：20立方米\n燃气费金额：50元\n请尽快缴纳，如有疑问，请咨询134545646。',
    modify_time: '2015-01-15 16:45:16'
  },
  {
    id: 'TM00334',
    title: '收到新快递通知',
    class1: '房地产',
    class2: '物业',
    person_used: 149,
    content: '{{first.DATA}}\n\n{{name.DATA}}您好！您有一份【{{kuaidiname.DATA}}】快递已经到了物业管理中心，快递单号：【{{num.DATA}}】。请带有效证件到物管中心领取。\n{{remark.DATA}}',
    example: '林书勤您好！有一份【顺丰】快递已经送到物业管理中心，快递单号：【254896575】。请带有效证件到物管中心领取。\n如有疑问，请拨打咨询热线02034778000。',
    modify_time: '2015-01-15 16:45:45'
  },
  {
    id: 'TM00135',
    title: '小区停水通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1219,
    content: '{{first.DATA}}\n\n停水时间：{{time.DATA}}\n停水范围：{{location.DATA}}\n停水原因：{{reason.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您小区将停止供应自来水一段时间。\n\n停水时间：2013年10月6日8：00-2013年10月6日18:00\n停水范围：A16栋-A18栋\n停水原因：管道检修\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:16'
  },
  {
    id: 'TM00136',
    title: '小区停电通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1239,
    content: '{{first.DATA}}\n\n停电时间：{{time.DATA}}\n停电范围：{{location.DATA}}\n停电原因：{{reason.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您小区将停电一段时间。\n\n停电时间：2013年10月6日8：00-2013年10月6日18:00\n停电范围：A16栋-A18栋\n停电原因：设备检修\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:16'
  },
  {
    id: 'TM00137',
    title: '小区停燃气通知',
    class1: '房地产',
    class2: '物业',
    person_used: 896,
    content: '{{first.DATA}}\n\n停燃气时间：{{time.DATA}}\n停燃气范围：{{location.DATA}}\n停燃气原因：{{reason.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您小区将停止供应燃气一段时间。\n\n停燃气时间：2013年10月6日8：00-2013年10月6日18:00\n停燃气范围：A16栋-A18栋\n停燃气原因：设备检修\n请您提前准备，如有疑问可咨询134545646。',
    modify_time: '2015-01-15 16:45:16'
  },
  {
    id: 'OPENTM202755752',
    title: '预约看房成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 75,
    content: '{{first.DATA}}\n预约楼盘：{{keyword1.DATA}}\n看房时间：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，你已经预约看房成功\r\n预约楼盘：绿地东上海\r\n看房时间：2014年12月18日 18:36\r\n联系人：张三\r\n联系电话：13764352514\r\n感谢您的预约，我们将尽快和您取得联系！',
    modify_time: '2015-01-15 16:50:46'
  },
  {
    id: 'OPENTM202170352',
    title: '签约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 56,
    content: '{{first.DATA}}\n地址：{{keyword1.DATA}}\n月租金：{{keyword2.DATA}}\n租期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '恭喜您找到合适的居所！\r\n地址：嘉禾路825号1602室\r\n月租金：3500元\r\n租期：2015年2月26日 - 2016年2月25日\r\n请点击链接了解租赁合同详情。',
    modify_time: '2015-01-26 14:30:53'
  },
  {
    id: 'OPENTM201006704',
    title: '物业进展反馈提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 220,
    content: '{{first.DATA}}\n相关房屋：{{keyword1.DATA}}\n反馈类型：{{keyword2.DATA}}\n反馈状态：{{keyword3.DATA}}\n反馈信息：{{keyword4.DATA}}\n工作人员：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的物业反馈提醒：\r\n相关房屋：生活立方8栋8单元808号\r\n反馈类型：投诉反馈\r\n反馈状态：已受理\r\n反馈信息：您的投诉我们已经受理，目前正在处理中，请您耐心等待。\r\n工作人员：张三\r\n2014-9-9 18:00:00\r\n感谢您对我们提出宝贵建议，若在处理过程中有任何疑问请随时与物业中心联系。',
    modify_time: '2015-01-15 16:48:10'
  },
  {
    id: 'OPENTM202122405',
    title: '租金催缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 104,
    content: '{{first.DATA}}\n租户：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租户，您已欠租，详情请到公司查询或拨打服务热线020-88888888\r\n租户：陈好\r\n地址：广州市荔湾区鹤洞路284号401\r\n2014-12-29',
    modify_time: '2015-01-15 16:51:04'
  },
  {
    id: 'OPENTM202578956',
    title: '报修处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 314,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n维修主题：{{keyword3.DATA}}\n维修工程师：{{keyword4.DATA}}\n维修完成时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的房屋报修任务已经处理完毕，给您带来不便请谅解！\r\n工单编号：SZAREA_GZGS20140800\r\n房屋编号：西安万科城二期19号楼2402\r\n维修主题：房屋窗户漏水。\r\n维修工程师：工程师赵威，联系电话13888888888\r\n维修完成时间：2014.09.25\r\n如有疑问，请拨打服务热线4008888888',
    modify_time: '2015-01-15 16:48:23'
  },
  {
    id: 'OPENTM203658307',
    title: '新任务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 131,
    content: '{{first.DATA}}\n项目名称：{{keyword1.DATA}}\n任务名称：{{keyword2.DATA}}\n完成日期：{{keyword3.DATA}}\n指引与文档模版：{{keyword4.DATA}}\n指派人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'xxx先生/女士，项目经理给你指派了新任务。\r\n项目名称：龙岗中心城\r\n任务名称：编制桩基施工图\r\n完成日期：2014/9/30\r\n指引与文档模版：http://mp.abc.com/guide\r\n指派人：王大大\r\n请你每周反馈进展，按时完成此项任务，谢谢。',
    modify_time: '2015-01-15 16:47:44'
  },
  {
    id: 'OPENTM208795557',
    title: '预定签约通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n签约时间：{{keyword1.DATA}}\n签约地点：{{keyword2.DATA}}\n服务费用：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，预定签约成功\r\n签约时间：2014年7月21日\r\n签约地点：金域华府北门\r\n服务费用：800元\r\n请在约定时间到达见面地点。',
    modify_time: '2015-01-15 16:51:26'
  },
  {
    id: 'OPENTM202658211',
    title: '房屋报修进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 102,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n报修主题：{{keyword3.DATA}}\n报修状态：{{keyword4.DATA}}\n处理信息：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '房屋报修进展通知\r\n工单编号：SZAREA_GZGS20140902\r\n房屋编号：西安万科城二期19号楼2402\r\n报修主题：房子漏水\r\n报修状态：报修已受理\r\n处理信息：2014-08-02，维修工程师赵威（13666666666）\r\n如有疑问，请拨打热线4008888888',
    modify_time: '2015-01-15 16:48:32'
  },
  {
    id: 'OPENTM202185112',
    title: '快递代领通知',
    class1: '房地产',
    class2: '物业',
    person_used: 43,
    content: '{{first.DATA}}\n存放单号：{{keyword1.DATA}}\n领取人昵称：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的业主，您好，您有1份快递已经被人代领。\r\n存放单号：1234567890\r\n领取人昵称：hello_li\r\n如有疑问，请联系物业服务中心，联系电话：023-88888888',
    modify_time: '2015-01-15 16:49:15'
  },
  {
    id: 'OPENTM202362563',
    title: '预约看房提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n项目房源：{{keyword1.DATA}}\n项目地址：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约信息已经提交，看房顾问受理后会与您联系。\r\n项目房源：SOHO北京公馆5号楼L2207\r\n项目地址：朝阳区新源南路5号\r\n预约时间：2015年1月15日 10:00\r\n感谢您的预约。',
    modify_time: '2015-01-15 16:51:27'
  },
  {
    id: 'OPENTM200650014',
    title: '出租屋费用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 48,
    content: '{{first.DATA}}\n住户：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n总费用：{{keyword3.DATA}}\n费用明细：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '敬爱的住户:  9月份费用已出\r\n住户：陈xx\r\n地址：珠光村48栋802\r\n总费用：1535元\r\n费用明细：租金1300, 电费150, 水费50, 垃圾处理费35\r\n请与9月5号前到管理处缴费',
    modify_time: '2015-01-15 16:48:18'
  },
  {
    id: 'OPENTM203658415',
    title: '报修处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 459,
    content: '{{first.DATA}}\n报修房号：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n预计完成日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx先生/女士，您的报修有新的进展。\r\n报修房号：深圳红树西岸5栋11A\r\n报修主题：阳台玻璃门破裂\r\n报修时间：2014/8/28 10:30\r\n当前进展：已指派给维修人员xxx，将在3个工作日内上门更换。\r\n预计完成日期：2014/8/31\r\n上门前工作人员将提前与您预约，请保持电话畅通，谢谢。',
    modify_time: '2015-01-15 16:47:44'
  },
  {
    id: 'OPENTM202115222',
    title: '快递领取成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 51,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n存放单号：{{keyword2.DATA}}\n领取时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的业主，您好，您已成功领取快递1份\r\n姓名：李强\r\n存放单号：1234567890\r\n领取时间：2014年10月22日 15:00\r\n祝您生活愉快！',
    modify_time: '2015-01-15 16:49:08'
  },
  {
    id: 'OPENTM203370973',
    title: '社区消杀通知',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n消杀时间：{{keyword1.DATA}}\n消杀范围：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，社区消杀即将开始。\r\n消杀时间：2015年1月29日14:00-15:00\r\n消杀范围：海月花园二期4-7栋\r\n为了您和家人的身体健康，消杀期间请勿让儿童、老人或宠物在社区户外逗留，感谢您的配合。',
    modify_time: '2015-01-15 16:51:22'
  },
  {
    id: 'OPENTM208794825',
    title: '预约看房成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n见面地点：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，看房预约成功！\r\n预约时间：2014年7月21日 18:36\r\n见面地点：金域华府南大门外\r\n请在约定时间到达见面地点，务必准时',
    modify_time: '2015-01-15 16:51:25'
  },
  {
    id: 'OPENTM202334176',
    title: '物业费用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 148,
    content: '{{first.DATA}}\n地址：{{keyword1.DATA}}\n电费：{{keyword2.DATA}}\n水费：{{keyword3.DATA}}\n管理费：{{keyword4.DATA}}\n其他：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '2014年11月物业费用明细\r\n地址：珠晖区A栋403\r\n电费：150元\r\n水费：20元\r\n管理费：30元\r\n其他：0元\r\n总计200元，请于2014年12月5日前缴纳，如有疑问，请致电123456',
    modify_time: '2015-01-15 16:49:55'
  },
  {
    id: 'OPENTM202368426',
    title: '预约看房信息通知',
    class1: '房地产',
    class2: '物业',
    person_used: 50,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n客户姓名：{{keyword2.DATA}}\n客户电话：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有客户提交了预约看房信息，请尽快处理。\r\n房号：SOHO北京公馆5号楼L2207\r\n客户姓名：李四\r\n客户电话：13912345678\r\n预约时间：2015年1月15日 10:00\r\n点击打开消息进行确认。',
    modify_time: '2015-01-15 16:51:28'
  },
  {
    id: 'OPENTM202109939',
    title: '新报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1721,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新报修通知\r\n联系人：张三\r\n电话：12345678\r\n房号：卫星花园一期5栋1009\r\n报修内容：主卧墙面开裂\r\n报修时间：2015年1月22日 21:39\r\n请尽快联系客户。',
    modify_time: '2015-01-23 08:55:50'
  },
  {
    id: 'OPENTM201255894',
    title: '业务报单受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 129,
    content: '{{first.DATA}}\n报单编号：{{keyword1.DATA}}\n报单地址：{{keyword2.DATA}}\n报单时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好：您的报单已受理。\r\n报单编号：P00012345\r\n报单地址：车公庄大街9号院\r\n报单时间：2014年11月28日 16:00\r\n感谢您的使用，如有疑问请致电010-88395867。',
    modify_time: '2015-01-15 16:50:13'
  },
  {
    id: 'OPENTM202109945',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 113,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n服务类型：{{keyword2.DATA}}\n服务说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张先生，您已成功预约。\r\n预约时间：2014年12月11日\r\n服务类型：房产交付\r\n服务说明：您的预约号是5，前面共有3人排队。\r\n请您稍候，我们将尽快为您服务。',
    modify_time: '2015-01-23 08:56:23'
  },
  {
    id: 'OPENTM203752350',
    title: '刷卡提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n银行卡号：{{keyword1.DATA}}\n消费金额：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你已刷卡成功\r\n银行卡号：尾号0449\r\n消费金额：220元\r\n时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2015-04-13 09:40:51'
  },
  {
    id: 'OPENTM202170455',
    title: '看房完成确认',
    class1: '房地产',
    class2: '物业',
    person_used: 26,
    content: '{{first.DATA}}\n看房时间：{{keyword1.DATA}}\n陪同顾问：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '找房顾问夏侯周已带您完成今日预约的看房。\r\n看房时间：2015年01月26日12点45分\r\n陪同顾问：夏侯周\r\n您今天现场确认了天虹御景小区，5套房源的状况。',
    modify_time: '2015-01-26 14:37:14'
  },
  {
    id: 'OPENTM205282305',
    title: '业主卡领取通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n领取内容：{{keyword1.DATA}}\n处理结果：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您申请的业主卡处理结果如下\r\n领取内容：业主卡\r\n处理结果：已通过\r\n如有疑问，请拨打客服电话：0771-5304569',
    modify_time: '2015-06-03 09:18:35'
  },
  {
    id: 'OPENTM203085910',
    title: '业主委托房源提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 34,
    content: '{{first.DATA}}\n委托房源：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n业主电话：{{keyword3.DATA}}\n委托时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的业主委托房源需要处理\r\n委托房源：望京SOHO-写字楼-塔1-1607\r\n业主姓名：张东生\r\n业主电话：12345678901\r\n委托时间：2015年3月19日\r\n点击详情打开',
    modify_time: '2015-03-19 16:57:04'
  },
  {
    id: 'OPENTM204321113',
    title: '物业工单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 362,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n进度：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主你好:\r\n单号：BXD201505040001\r\n进度：维修人员[张三]已经接单\r\n时间：2015-05-04 14:50:23\r\n感谢你对物业公司的大力支持!',
    modify_time: '2015-05-04 15:20:41'
  },
  {
    id: 'OPENTM202339768',
    title: '房源租出提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n管家：{{keyword1.DATA}}\n房源：{{keyword2.DATA}}\n出租时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有房源被出租了\r\n管家：管家1\r\n房源：房源1\r\n出租时间：2015年1月1日\r\n管家1管理的房源1已于2015年1月1日租出。',
    modify_time: '2015-02-04 16:26:26'
  },
  {
    id: 'OPENTM204850368',
    title: '预约失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 34,
    content: '{{first.DATA}}\n服务物业：{{keyword1.DATA}}\n预约类型：{{keyword2.DATA}}\n预约内容：{{keyword3.DATA}}\n失败原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你的该次预约服务失败！\r\n服务物业：六方物业\r\n预约类型：货梯使用\r\n预约内容：请求使用货梯\r\n失败原因：暂时排满，请稍等\r\n请稍等一段时间再重新申请！',
    modify_time: '2015-05-21 14:10:50'
  },
  {
    id: 'OPENTM204594069',
    title: '物业管理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1420,
    content: '{{first.DATA}}\n标题：{{keyword1.DATA}}\n发布时间：{{keyword2.DATA}}\n内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '关于社区消防大修进度的通知\r\n标题：关于社区消防大修进度的通知\r\n发布时间：2015年5月10日\r\n内容：截止5月10日，ABCD栋的烟感已全部更换好；CDEF栋地下室的温感已经更换好130套，CD栋共有10盏应急灯坏需更换，将于5月20日前更换完毕；谢谢大家的关注！\r\n截止5月10日，ABCD栋的烟感已全部更换好；CDEF栋地下室的温感已经更换好130套，CD栋共有10盏应急灯坏需更换，将于5月20日前更换完毕；谢谢大家的关注！',
    modify_time: '2015-05-13 12:46:55'
  },
  {
    id: 'OPENTM202808870',
    title: '来访通知',
    class1: '房地产',
    class2: '物业',
    person_used: 113,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客电话：{{keyword2.DATA}}\n来访时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一位访客即将到来\r\n访客姓名：张三\r\n访客电话：134xxxxxxxx\r\n来访时间：2015-3-4 15:30:00\r\n门卫已放行，如有疑问，可联系放行门卫值班电话xxxxxxxx',
    modify_time: '2015-03-05 08:55:00'
  },
  {
    id: 'OPENTM204954423',
    title: '投诉处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n投诉人房号：{{keyword1.DATA}}\n投诉主题：{{keyword2.DATA}}\n投诉时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的投诉有新的进展\r\n投诉人房号：某某小区1-101\r\n投诉主题：管家态度差\r\n投诉时间：2015-05-24 17:47\r\n当前进展：正在调查处理中\r\n感谢您对我们服务的支持和监督，祝您生活愉快。',
    modify_time: '2015-05-25 09:48:21'
  },
  {
    id: 'OPENTM202425424',
    title: '活动报名确认提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 115,
    content: '{{first.DATA}}\n报名人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n参加人数：{{keyword3.DATA}}\n活动时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您报名的小区业主亲子活动已通过了活动举办确认，请核对您的报名信息，到时准时出席\r\n报名人：黎先生\r\n联系电话：138*********\r\n参加人数：3\r\n活动时间：2月19日9时 至 12时\r\n如需详细咨询，请致电：33234543，感谢您的支持！',
    modify_time: '2015-02-09 09:46:31'
  },
  {
    id: 'OPENTM204805225',
    title: '公寓通知',
    class1: '房地产',
    class2: '物业',
    person_used: 57,
    content: '{{first.DATA}}\n公寓名称：{{keyword1.DATA}}\n通知类型：{{keyword2.DATA}}\n通知内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好！\r\n公寓名称：文平公寓\r\n通知类型：停电通知\r\n通知内容：明天上午9点起停电，请各位住户事情蓄好水！\r\n2015-05-19  18:36:24',
    modify_time: '2015-05-20 10:33:44'
  },
  {
    id: 'OPENTM204981727',
    title: '报修受理失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 34,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n报修项目：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n失败原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的报修未通过！\r\n公司名称：六方物业\r\n报修项目：通下水道\r\n报修时间：2015-5-25\r\n失败原因：维修师傅繁忙\r\n因为维修师傅繁忙暂停该报修的受理！',
    modify_time: '2015-05-26 09:33:18'
  },
  {
    id: 'OPENTM203804479',
    title: '缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 113,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n缴费内容：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '2014年11月份缴费通知\r\n业主姓名：张梅\r\n地址：吉祥密都苑二号楼一单元202\r\n缴费内容：楼顶防水公摊费\r\n缴费金额：50元\r\n如有疑问，请拨打服务热线4008888888',
    modify_time: '2015-04-15 14:33:51'
  },
  {
    id: 'OPENTM205209133',
    title: '意见反馈通知',
    class1: '房地产',
    class2: '物业',
    person_used: 46,
    content: '{{first.DATA}}\n会员姓名：{{keyword1.DATA}}\n楼层房号：{{keyword2.DATA}}\n反馈内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '新的反馈内容！\r\n会员姓名：汪海\r\n楼层房号：1层未名雅轩\r\n反馈内容：空调不凉\r\n请尽快联系业主！',
    modify_time: '2015-06-01 09:29:17'
  },
  {
    id: 'OPENTM203025886',
    title: '报修成功受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 68,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n报修项目：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你的报修单成功受理\r\n公司名称：无名小区\r\n报修项目：道闸\r\n报修时间：2015-03-15 18:32\r\n我们的维保人员会尽最快的速度与你联系，谢谢！',
    modify_time: '2015-03-16 16:01:29'
  },
  {
    id: 'OPENTM204847143',
    title: '访客临时通行证通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n有效期截止时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您收到了业主发送的临时通行证。\r\n房号：11栋101房\r\n有效期截止时间：2015-5-21 17:00:00\r\n您可以再有效期内扫描二维码开锁，谢谢使用！',
    modify_time: '2015-05-21 12:29:54'
  },
  {
    id: 'OPENTM204887294',
    title: '报修确认结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 42,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n维修类型：{{keyword3.DATA}}\n维修内容：{{keyword4.DATA}}\n业主满意度：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '维修结果已确认\r\n工单编号：ZJDS_WK1432275005\r\n房屋编号：1层-未名雅轩\r\n维修类型：管道疏通\r\n维修内容：修理管道\r\n业主满意度：满意\r\n维修任务完成',
    modify_time: '2015-05-22 15:57:18'
  },
  {
    id: 'OPENTM202374445',
    title: '新投诉通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1388,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n投诉内容：{{keyword4.DATA}}\n投诉时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新投诉通知\r\n联系人：张三\r\n电话：12345678\r\n房号：卫星花园一期5栋1009\r\n投诉内容：主卧墙面开裂\r\n投诉时间：2015年1月22日 21:39\r\n请尽快联系客户。',
    modify_time: '2015-02-06 09:39:28'
  },
  {
    id: 'OPENTM205212045',
    title: '房租账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 49,
    content: '{{first.DATA}}\n缴费周期：{{keyword1.DATA}}\n租金：{{keyword2.DATA}}\n押金：{{keyword3.DATA}}\n其他杂费：{{keyword4.DATA}}\n总费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您租住的麻布新村(八巷十栋)701房房租账单已产生，请及时交租！\r\n缴费周期：2015-06-01至2015-06-30\r\n租金：1500\r\n押金：2700\r\n其他杂费：375.9\r\n总费用：4575.9\r\n点击消息全文，微信在线交房租。',
    modify_time: '2015-06-01 10:40:10'
  },
  {
    id: 'OPENTM207365753',
    title: '新客户通知',
    class1: '房地产',
    class2: '物业',
    person_used: 26,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户电话：{{keyword2.DATA}}\n意向楼盘：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新客户啦！\r\n客户姓名：张大宝\r\n客户电话：186XXXX8949\r\n意向楼盘：万达广场\r\n点击详情查看具体信息',
    modify_time: '2015-08-20 14:24:41'
  },
  {
    id: 'OPENTM207327157',
    title: '水电费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n姓名：{{keyword2.DATA}}\n手机：{{keyword3.DATA}}\n应缴金额：{{keyword4.DATA}}\n预缴金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有一条新水电费缴费通知\r\n订单号：826046\r\n姓名：晓锋\r\n手机：13770331212\r\n应缴金额：100\r\n预缴金额：300\r\n请尽快联系业主',
    modify_time: '2015-08-17 09:18:56'
  },
  {
    id: 'OPENTM205736465',
    title: '欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 159,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n缴费内容：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您一季度的欠费如下\r\n业主姓名：张梅\r\n地址：2单元601号\r\n缴费内容：物业管理费：200.00元\r\n缴费金额：200.00元\r\n请您尽快缴费，谢谢',
    modify_time: '2015-06-16 12:38:03'
  },
  {
    id: 'OPENTM207497619',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房间号：{{keyword2.DATA}}\n消费时间：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n缴费截止时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的窝友，您本月应缴费用如下\r\n姓名：杨阳\r\n房间号：306\r\n消费时间：2015.09.01--2015.08.31\r\n缴费金额：5000\r\n缴费截止时间：2015年9月1日\r\n请及时完成缴费',
    modify_time: '2015-08-31 09:06:03'
  },
  {
    id: 'OPENTM206012422',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 94,
    content: '{{first.DATA}}\n主题：{{keyword1.DATA}}\n项目：{{keyword2.DATA}}\n审核状态：{{keyword3.DATA}}\n项目状态：{{keyword4.DATA}}\n申请时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXXX先生/小姐，您递交的关于大厦XXXX号商铺的安装维修服务申请，符合我司安装维修服务的相关规定，我们将在1小时内到场处理。\r\n主题：安装维修服务\r\n项目：空调类-空调热、空调没风\r\n审核状态：审核成功\r\n项目状态：维修中\r\n申请时间：2015年6月23日\r\n如有任何疑问，请咨询电话：020-86228888。',
    modify_time: '2015-06-24 09:32:17'
  },
  {
    id: 'OPENTM206763473',
    title: '支付结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 60,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n主题：{{keyword2.DATA}}\n项目：{{keyword3.DATA}}\n支付结果：{{keyword4.DATA}}\n已支付金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXXX先生/小姐，您的安装维修服务申请已经完成付款。维修费用合计：¥680元。\r\n订单号：123456789\r\n主题：商铺加班服务\r\n项目：盘点加班-21:30前\r\n支付结果：支付成功\r\n已支付金额：¥680元\r\n感谢的您的合作。',
    modify_time: '2015-07-06 14:07:39'
  },
  {
    id: 'OPENTM207273073',
    title: '服务进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 457,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n最新进度：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好：\r\n服务类型：房屋报修\r\n最新进度：已安排工程师\r\n感谢您对物业工作的支持！',
    modify_time: '2015-08-12 11:39:24'
  },
  {
    id: 'OPENTM207497577',
    title: '合同签署提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 49,
    content: '{{first.DATA}}\n合同编号：{{keyword1.DATA}}\n合同金额：{{keyword2.DATA}}\n签约房间：{{keyword3.DATA}}\n租赁时间：{{keyword4.DATA}}\n签约人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的窝友，您的合同信息如下\r\n合同编号：WQ_20150828021603\r\n合同金额：8100\r\n签约房间：305\r\n租赁时间：2015.09.01-2016.08.31\r\n签约人：杨阳\r\n请尽快完成线上签约',
    modify_time: '2015-08-31 09:02:03'
  },
  {
    id: 'OPENTM205761628',
    title: '客户报备通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n项目楼盘：{{keyword1.DATA}}\n客户姓名：{{keyword2.DATA}}\n下一进度：{{keyword3.DATA}}\n距离失效：{{keyword4.DATA}}\n客户归属：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您推荐的客户报备成功！\r\n项目楼盘：朗诗花漫里\r\n客户姓名：张三 188****8888\r\n下一进度：带看\r\n距离失效：2015-06-30 10:20\r\n客户归属：我爱我家房产\r\n恭喜您报备成功，请您尽快完成客户带看',
    modify_time: '2015-06-17 10:58:32'
  },
  {
    id: 'OPENTM206436478',
    title: '任务过期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 27,
    content: '{{first.DATA}}\n任务类型：{{keyword1.DATA}}\n任务数量：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '管家您好，您有任务已过期\r\n任务类型：投诉\r\n任务数量：10\r\n请尽快跟进处理，谢谢。',
    modify_time: '2015-07-02 11:03:02'
  },
  {
    id: 'OPENTM205527731',
    title: '审批结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n访客单号：{{keyword1.DATA}}\n审批状态：{{keyword2.DATA}}\n审批人：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的审批结果如下。\r\n访客单号：00000011\r\n审批状态：审批通过\r\n审批人：张三\r\n点全文查看更多审批信息。',
    modify_time: '2015-06-10 09:56:10'
  },
  {
    id: 'OPENTM205978283',
    title: '申请提交结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n主题：{{keyword1.DATA}}\n项目：{{keyword2.DATA}}\n提交结果：{{keyword3.DATA}}\n审核状态：{{keyword4.DATA}}\n申请时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXXX先生/小姐，您递交的关于大厦XXXX号商铺的安装维修服务申请已接收，我司人员正在审核，请稍等5分钟，感谢合作。\r\n主题：安装维修服务\r\n项目：空调类-空调热、空调没风\r\n提交结果：提交成功\r\n审核状态：审核中\r\n申请时间：2015年6月23日\r\n如有任何疑问，请咨询白马大厦客服部，咨询电话：02086228888。',
    modify_time: '2015-06-23 12:00:14'
  },
  {
    id: 'OPENTM206765334',
    title: '项目完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n主题：{{keyword2.DATA}}\n项目：{{keyword3.DATA}}\n项目状态：{{keyword4.DATA}}\n完成时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXXX先生/小姐，您递交的关于大厦XXXX号商铺的商铺加班已经结束。\r\n订单号：123456789\r\n主题：商铺加班服务\r\n项目：盘点加班-21:30前\r\n项目状态：已完成\r\n完成时间：2015年6月23日\r\n感谢您的合作。',
    modify_time: '2015-07-06 14:46:39'
  },
  {
    id: 'OPENTM205762535',
    title: '刷卡进门提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n刷卡卡号：{{keyword1.DATA}}\n刷卡设备：{{keyword2.DATA}}\n进门时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好！\r\n刷卡卡号：235427\r\n刷卡设备：1号楼1单元1号梯口机\r\n进门时间：2015年1月1日  18:10:59\r\n您已开门成功，感谢您的使用！',
    modify_time: '2015-06-17 11:25:50'
  },
  {
    id: 'OPENTM206165237',
    title: '费用查看通知单',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n住址：{{keyword1.DATA}}\n登记姓名：{{keyword2.DATA}}\n登记电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您6月份账单已出，请核对下边登记信息并点击查看费用详情。\r\n住址：西丽小镇065号\r\n登记姓名：张三\r\n登记电话：13428990000\r\n请点击查看费用详情，如有疑问，可拨打服务电话8888 8888',
    modify_time: '2015-06-29 11:36:55'
  },
  {
    id: 'OPENTM207463837',
    title: '收费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 38,
    content: '{{first.DATA}}\n收费金额：{{keyword1.DATA}}\n费用说明：{{keyword2.DATA}}\n客户姓名：{{keyword3.DATA}}\n客户地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，请确认是否同意收费。\r\n收费金额：100.00元\r\n费用说明：更换空调配件，维修费\r\n客户姓名：刘宇\r\n客户地址：A座2层1988\r\n您于2015-08-27 17:26的报修需要缴纳100.00元维修费用，请确认是否同意收费。',
    modify_time: '2015-08-28 09:04:29'
  },
  {
    id: 'OPENTM205527689',
    title: '访客申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 63,
    content: '{{first.DATA}}\n访客单号：{{keyword1.DATA}}\n主访客姓名：{{keyword2.DATA}}\n单位：{{keyword3.DATA}}\n来访事由：{{keyword4.DATA}}\n到访日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有新的访客申请，请审批。\r\n访客单号：000000011\r\n主访客姓名：李白\r\n单位：A公司\r\n来访事由：业务洽谈\r\n到访日期：2014-7-21 18:30\r\n点全文查看更多信息。',
    modify_time: '2015-06-10 09:55:11'
  },
  {
    id: 'OPENTM205455847',
    title: '缴费设置变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n变更详情：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好！\r\n物业地址：59栋11-1\r\n变更详情：已经开启物业账单短信业务\r\n如有疑问，请咨询：000-00000000',
    modify_time: '2015-06-08 09:34:42'
  },
  {
    id: 'OPENTM205526749',
    title: '代缴停车费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车费金额：{{keyword2.DATA}}\n时间日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '大厦停车费\r\n车牌号码：车牌号码\r\n停车费金额：消费金额150\r\n时间日期：0601\r\n你好付款成功',
    modify_time: '2015-06-10 09:30:44'
  },
  {
    id: 'OPENTM206241699',
    title: '项目缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n主题：{{keyword2.DATA}}\n项目：{{keyword3.DATA}}\n项目状态：{{keyword4.DATA}}\n应缴金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXXX先生/小姐，您提交的商铺加班服务申请已审核通过，加班费用为：¥120元，请点击”详情“付款。\r\n订单号：123456789\r\n主题：商铺加班服务\r\n项目：盘点加班-21:30前\r\n项目状态：未完成加班\r\n应缴金额：¥120元\r\n如有任何疑问请咨询：02086228888。',
    modify_time: '2015-06-30 15:43:29'
  },
  {
    id: 'OPENTM207575002',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 59,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n水费：{{keyword2.DATA}}\n电费：{{keyword3.DATA}}\n气费：{{keyword4.DATA}}\n物业费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的xxx小区09月物业账单\r\n房号：2-1-2\r\n水费：100\r\n电费：100\r\n气费：100\r\n物业费：100\r\n总计:400，如有疑问请联系管理处',
    modify_time: '2015-09-06 17:30:56'
  },
  {
    id: 'OPENTM400066955',
    title: '受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n受理时间：{{keyword1.DATA}}\n门牌号：{{keyword2.DATA}}\n问题描述：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '受理住户***发来的请求\r\n受理时间：2015年10月21日\r\n门牌号：帝景小区三号楼二单元502室\r\n问题描述：家里的灯坏了需要更换。\r\n点击详情查看详细信息。',
    modify_time: '2015-10-21 16:34:16'
  },
  {
    id: 'OPENTM400151955',
    title: '出入通行证验证提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '管家您好:\r\n姓名：张三\r\n房号：9幢1单元101室\r\n请核准用户信息后允许放行。',
    modify_time: '2015-10-28 09:16:18'
  },
  {
    id: 'OPENTM207497656',
    title: '合同到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 39,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房间号：{{keyword2.DATA}}\n合同时效：{{keyword3.DATA}}\n合同到期时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的窝友，您的合同即将到期\r\n姓名：杨阳\r\n房间号：306\r\n合同时效：2015.09.01--2016.08.31\r\n合同到期时间：2016年8月31日\r\n请及时通过微信平台申请续约或退房',
    modify_time: '2015-08-31 09:08:21'
  },
  {
    id: 'OPENTM207608007',
    title: '积分变动通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    invalid: 1,
    reason: '由于该模板被滥用过多，已不能选用',
    content: '{{first.DATA}}\n变动说明：{{keyword1.DATA}}\n变动数量：{{keyword2.DATA}}\n累计积分：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的积分有新的变动。\r\n变动说明：签到成功\r\n变动数量：增加50积分\r\n累计积分：2050积分\r\n感谢你的使用。',
    modify_time: '2018-10-24 15:23:56'
  },
  {
    id: 'OPENTM207941258',
    title: '投诉处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 62,
    content: '{{first.DATA}}\n项目名称：{{keyword1.DATA}}\n任务名称：{{keyword2.DATA}}\n完成日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: 'xxx先生/女士，你有新的投诉单需要进行处理。\r\n项目名称：XX项目\r\n任务名称：XX任务\r\n完成日期：2015-10-08\r\n请按时完成任务，辛苦了，谢谢。 点击此处开始进行处理！',
    modify_time: '2015-10-08 10:38:18'
  },
  {
    id: 'OPENTM207847860',
    title: '服务工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 95,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n客户信息：{{keyword2.DATA}}\n业务分类：{{keyword3.DATA}}\n处理状态：{{keyword4.DATA}}\n归属项目：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '赵杰，您收到一条物业服务工单信息。\r\n服务类型：报修\r\n客户信息：李四（18651618524）\r\n业务分类：水电\r\n处理状态：待受理\r\n归属项目：苏宁睿城二期\r\n请点击详情查看工单详细信息并处理。',
    modify_time: '2015-09-28 11:13:37'
  },
  {
    id: 'OPENTM400131212',
    title: '维修上门通知',
    class1: '房地产',
    class2: '物业',
    person_used: 41,
    content: '{{first.DATA}}\n预计上门时间：{{keyword1.DATA}}\n维修工人姓名：{{keyword2.DATA}}\n维修工人电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好！系统已经为你指派维修小哥\r\n预计上门时间：2015年10月10日 12:32\r\n维修工人姓名：张无忌\r\n维修工人电话：13499847383\r\n感谢你的使用',
    modify_time: '2015-10-26 14:14:22'
  },
  {
    id: 'OPENTM207716414',
    title: '信息绑定成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\nQQ：{{keyword3.DATA}}\n微信：{{keyword4.DATA}}\n租房地址：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的信息已经绑定成功\r\n姓名：张三\r\n电话：18093111211\r\nQQ：153080345\r\n微信：wechat\r\n租房地址：居安小区16#2409A房间\r\n感谢您的使用，祝您居住愉快！',
    modify_time: '2015-09-17 11:07:17'
  },
  {
    id: 'OPENTM207573517',
    title: '维修进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 29,
    content: '{{first.DATA}}\n下单时间：{{keyword1.DATA}}\n维修项目：{{keyword2.DATA}}\n房屋地址：{{keyword3.DATA}}\n维修工人姓名：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，已经收到您的订单\r\n下单时间：2014年7月21日 18:36\r\n维修项目：灯具维修\r\n房屋地址：厦门万科金域华府B栋201\r\n维修工人姓名：张三丰\r\n感谢您的使用，谢谢！',
    modify_time: '2015-09-06 15:57:05'
  },
  {
    id: 'OPENTM207940520',
    title: '家政服务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 39,
    content: '{{first.DATA}}\n家政类型：{{keyword1.DATA}}\n需求：{{keyword2.DATA}}\n备注：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新家政通知\r\n家政类型：保洁\r\n需求：需要一名保洁员\r\n备注：晚上联系\r\n联系电话：17715272440\r\n时间：2015.10.3\r\n请尽快联系业主。',
    modify_time: '2015-10-08 09:37:22'
  },
  {
    id: 'OPENTM207940523',
    title: '租赁服务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n租赁类型：{{keyword1.DATA}}\n需求：{{keyword2.DATA}}\n备注：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新租赁通知\r\n租赁类型：出售房子\r\n需求：需要出售一套60平的房子\r\n备注：晚上联系\r\n联系电话：17715272440\r\n时间：2015.10.3\r\n请尽快联系业主。',
    modify_time: '2015-10-08 09:37:30'
  },
  {
    id: 'OPENTM400151874',
    title: '服务评价通知',
    class1: '房地产',
    class2: '物业',
    person_used: 120,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n服务完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的“雷先生”，您的服务已经完成\r\n服务类型：电灯损坏报修\r\n服务完成时间：2015年10月27日\r\n为了给您提供更优质的服务，提供请对我们的服务做出评价。',
    modify_time: '2015-10-28 09:10:05'
  },
  {
    id: 'OPENTM207665126',
    title: '维修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n完成时间：{{keyword1.DATA}}\n维修项目：{{keyword2.DATA}}\n金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，维修订单已经完成！\r\n完成时间：2015年10月1日 19:20\r\n维修项目：木地板修复\r\n金额：￥100.00\r\n感谢您的选择！',
    modify_time: '2015-09-12 17:48:48'
  },
  {
    id: 'OPENTM207795032',
    title: '物品领取通知',
    class1: '房地产',
    class2: '物业',
    person_used: 27,
    content: '{{first.DATA}}\n领取时间：{{keyword1.DATA}}\n领取地点：{{keyword2.DATA}}\n领取条件：{{keyword3.DATA}}\n备注：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '保洁用具领取时间通知\r\n领取时间：周日\r\n领取地点：18栋101房间\r\n领取条件：携带厂牌\r\n备注：请全体住户尽快领取\r\n2015-09-01',
    modify_time: '2015-09-23 14:19:24'
  },
  {
    id: 'OPENTM208019635',
    title: '房贷还款提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n剩余时间：{{keyword1.DATA}}\n还贷金额：{{keyword2.DATA}}\n还贷期数：{{keyword3.DATA}}\n还贷账单：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【第12期房贷还款提醒】温馨提醒 ，本月8.1日是你的房贷还款时间。\r\n剩余时间：距今天还剩2天，请尽快还款\r\n还贷金额：5000元\r\n还贷期数：第12期，共360期\r\n还贷账单：您的房贷剩余还款金额为457,154元。住房信用分为580分，好友2人。\r\n查看详情',
    modify_time: '2015-10-14 08:56:37'
  },
  {
    id: 'OPENTM207941036',
    title: '物业缴费温馨提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 115,
    content: '{{first.DATA}}\n缴费期：{{keyword1.DATA}}\n账单月份：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主/用户\r\n缴费期：每月的01-10号\r\n账单月份：2015年7月\r\n地址：XX小区A栋6001\r\n请您在百忙中尽快安排时间到管理处缴纳。 谢谢您的配合！',
    modify_time: '2015-10-08 10:24:52'
  },
  {
    id: 'OPENTM207664737',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 35,
    content: '{{first.DATA}}\n用户地址：{{keyword1.DATA}}\n缴费日期：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲，该缴物业费了\r\n用户地址：尚乐城3号楼1单元502\r\n缴费日期：2015年9月1日\r\n缴费金额：288元\r\n您好，尚乐城3号楼1单元502的业主，您的物业费缴费日期为2015年9月1日，应缴费金额应为288元，请您及时缴纳。',
    modify_time: '2015-09-12 16:59:28'
  },
  {
    id: 'OPENTM207724491',
    title: '住户报修提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n报修房号（人）：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报修时间和内容：{{keyword3.DATA}}\n物业服务人员：{{keyword4.DATA}}\n服务费用及材料费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您的报修已成功！\r\n报修房号（人）：邓先生1-2-1702\r\n联系电话：1510830****\r\n报修时间和内容：下水管堵塞\r\n物业服务人员：文师傅\r\n服务费用及材料费用：服务费：50元 材料费  无\r\n我们服务人员会及时与您联系并上门服务。感谢您的使用',
    modify_time: '2015-09-18 09:55:00'
  },
  {
    id: 'OPENTM400093695',
    title: '租金账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n账单总金额：{{keyword3.DATA}}\n最晚支付时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客您好，本月账单详情，请您尽快支付。\r\n房间：测试小区15栋304号A\r\n租期：2015/08/01～2015/09/01\r\n账单总金额：345.12元\r\n最晚支付时间：2015/09/30\r\n客服电话：4006-882-515',
    modify_time: '2015-10-23 13:23:38'
  },
  {
    id: 'OPENTM401003156',
    title: '注册成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您已完成注册，信息如下:\r\n姓名：张三丰\r\n电话：13916000000\r\n地址： (上海中星美华村)8号高层单元1层101室\r\n如有疑问,请拨打统一服务热线：4009960182。',
    modify_time: '2015-12-28 14:35:18'
  },
  {
    id: 'OPENTM400940601',
    title: '车辆入场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 102,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '欢迎您进入人人优泊智能停车场\r\n车牌号：川AC1C66\r\n停车场：天府新谷停车场\r\n入场时间：12月23日 14:00\r\n停车天天好心情',
    modify_time: '2015-12-24 16:22:40'
  },
  {
    id: 'OPENTM400889655',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n审核类型：{{keyword1.DATA}}\n审核结果：{{keyword2.DATA}}\n审核意见：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你提交的以下资料未能通过审核。\r\n审核类型：身份证\r\n审核结果：审核未通过\r\n审核意见：证照号码与提交号码不一致。\r\n请重新登录系统并上传证照，谢谢你的配合！',
    modify_time: '2015-12-21 14:33:11'
  },
  {
    id: 'OPENTM400940604',
    title: '车辆离场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 66,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n进场时间：{{keyword3.DATA}}\n离场时间：{{keyword4.DATA}}\n停车费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '开开心心离开，进入新的旅程\r\n车牌号：川AC1D67\r\n停车场：天府新谷停车场\r\n进场时间：12月23日 11:00\r\n离场时间：12月23日 11:20\r\n停车费用：6元\r\n回家去了~',
    modify_time: '2015-12-24 16:22:55'
  },
  {
    id: 'OPENTM400166107',
    title: '物业电子投票通知',
    class1: '房地产',
    class2: '物业',
    person_used: 314,
    content: '{{first.DATA}}\n投票议题：{{keyword1.DATA}}\n投票内容：{{keyword2.DATA}}\n投票范围：{{keyword3.DATA}}\n开始时间：{{keyword4.DATA}}\n结束时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '农林山庄小区\r\n投票议题：关于某小区更换物业公司表决\r\n投票内容：由于现有物业服务不达标，现召开业主大会表决更换物业管理公司事宜\r\n投票范围：小区所有业主\r\n开始时间：2015-10-25 16:00\r\n结束时间：2015-10-30 16:00\r\n请在结束时间提交你的意见。',
    modify_time: '2015-10-29 09:24:53'
  },
  {
    id: 'OPENTM400520812',
    title: '服务申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 76,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n内容：{{keyword2.DATA}}\n姓名：{{keyword3.DATA}}\n电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '申请服务\r\n服务类型：保险\r\n内容：身份证，单位证明\r\n姓名：晓锋\r\n电话：13770331212\r\n感谢你的使用',
    modify_time: '2015-11-27 13:45:45'
  },
  {
    id: 'OPENTM400884962',
    title: '入驻确认成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n入驻区域：{{keyword1.DATA}}\n签约期限：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的某某某先生/女土：您已成功确认入驻。\r\n入驻区域：A-102\r\n签约期限：2015年12月30日\r\n请在签约期限内前来办理入驻手续。',
    modify_time: '2015-12-21 09:59:12'
  },
  {
    id: 'OPENTM401144820',
    title: '垃圾分类投放成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n小区名称：{{keyword1.DATA}}\n垃圾重量：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已经成功的在垃圾桶投放了垃圾\r\n小区名称：深圳市阳光小区\r\n垃圾重量：2公斤\r\n时间：2014年7月21日 18:36\r\n感觉您使用垃圾分类。',
    modify_time: '2016-01-12 13:29:36'
  },
  {
    id: 'OPENTM400494973',
    title: '服务到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 68,
    content: '{{first.DATA}}\n服务主题：{{keyword1.DATA}}\n服务内容：{{keyword2.DATA}}\n到期时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉的告诉您，您的停车位即将到期。\r\n服务主题：固定停车位\r\n服务内容：地下一层102车位\r\n到期时间：2015年11月23日\r\n请您提前去保安部办理续期，如有疑问可咨询134545646。',
    modify_time: '2015-11-24 15:27:10'
  },
  {
    id: 'OPENTM400166124',
    title: '维修金变动提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n小区名称：{{keyword1.DATA}}\n业务事项：{{keyword2.DATA}}\n金额：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '张三业主，你好。\r\n小区名称：农林山庄小区\r\n业务事项：专项使用\r\n金额：100.5元\r\n时间：2015-10-28 15:47\r\n更多维修金动态，请登录系统。',
    modify_time: '2015-10-29 09:26:39'
  },
  {
    id: 'OPENTM400569624',
    title: '服务完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 71,
    content: '{{first.DATA}}\n服务内容：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，服务已经完成\r\n服务内容：办保险\r\n业主姓名：晓锋\r\n时间：2015-12-02 16:05\r\n感谢你的使用',
    modify_time: '2015-12-02 16:49:39'
  },
  {
    id: 'OPENTM400221028',
    title: '报修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1374,
    content: '{{first.DATA}}\n报修房号：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n维保人员：{{keyword3.DATA}}\n完成日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的报修已经完成\r\n报修房号：A567\r\n报修主题：楼梯照明\r\n维保人员：张志\r\n完成日期：2015-8-9\r\n请点击对我们的工作作出评价，谢谢。',
    modify_time: '2015-11-02 13:27:45'
  },
  {
    id: 'OPENTM400239678',
    title: '租金账单支付成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n支付方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客，感谢您的支持！您的账单已经支付成功。\r\n房间：玉兰香苑70栋101室\r\n租期：2015年6月7日～2015年7月6日\r\n账单金额：12345.67元\r\n支付时间：2015年7月7日 12:31\r\n支付方式：微信支付\r\n客服电话：4006-882-515',
    modify_time: '2015-11-04 09:03:30'
  },
  {
    id: 'OPENTM401096729',
    title: '工单超时通知',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n工单号：{{keyword1.DATA}}\n工单类别：{{keyword2.DATA}}\n工单状态：{{keyword3.DATA}}\n处理人员：{{keyword4.DATA}}\n具体内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '工单超时通知\r\n工单号：00000002\r\n工单类别：保修\r\n工单状态：超过24小时未处理\r\n处理人员：李四 工号：2016\r\n具体内容：6号楼601的业主保修水管漏水，超过24小时未受理\r\n请及时与客户联系。',
    modify_time: '2016-01-06 16:17:09'
  },
  {
    id: 'OPENTM400651031',
    title: '审批结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 20,
    content: '{{first.DATA}}\n申请类型：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n审批结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '服务申请通过审批\r\n申请类型：出门申请单\r\n申请时间：2015/12/29 17:30\r\n审批结果：通过审批\r\n请点击查看详情',
    modify_time: '2015-12-10 09:45:59'
  },
  {
    id: 'OPENTM400254833',
    title: '入驻需求预约通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n产品类型：{{keyword3.DATA}}\n产品或公司：{{keyword4.DATA}}\n办公及住宿需求：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '收到一个客户预约申请\r\n姓名：李三\r\n联系方式：18912341234\r\n产品类型：医疗健康\r\n产品或公司：健身俱乐部\r\n办公及住宿需求：7人以上\r\n详情点击查看',
    modify_time: '2015-11-05 14:08:47'
  },
  {
    id: 'OPENTM401111343',
    title: '工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 43,
    content: '{{first.DATA}}\n相关房屋：{{keyword1.DATA}}\n业主信息：{{keyword2.DATA}}\n工单类型：{{keyword3.DATA}}\n工单编号：{{keyword4.DATA}}\n具体内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，你有以下工作需要处理\r\n相关房屋：8号楼8单元808号\r\n业主信息：王先生 电话\r\n工单类型：报修\r\n工单编号：00000001\r\n具体内容：楼道灯坏了\r\n请尽快与业主联系。',
    modify_time: '2016-01-08 09:39:53'
  },
  {
    id: 'OPENTM400363296',
    title: '活动合作需求通知',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n性别：{{keyword2.DATA}}\n电话：{{keyword3.DATA}}\n需求：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '收到一个用户提交的合作需求\r\n姓名：张三\r\n性别：先生\r\n电话：18989898989\r\n需求：想在你们社区举办一个燃气安全讲座，请与我联系进一步沟通，谢谢！\r\n点击查看详情。',
    modify_time: '2015-11-16 08:51:36'
  },
  {
    id: 'OPENTM401093746',
    title: '停气通知',
    class1: '房地产',
    class2: '物业',
    person_used: 54,
    content: '{{first.DATA}}\n停气时间：{{keyword1.DATA}}\n来气时间：{{keyword2.DATA}}\n原因：{{keyword3.DATA}}\n备注：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '业主您好，敬请谅解。\r\n停气时间：2015年12月30日上午8点整\r\n来气时间：2015年12月30日下午6点整\r\n原因：市政燃气管道维修\r\n备注：无\r\n感谢您对我们的支持！',
    modify_time: '2016-01-06 10:12:04'
  },
  {
    id: 'OPENTM401093648',
    title: '任务派工提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 87,
    content: '{{first.DATA}}\n项目类型：{{keyword1.DATA}}\n指派人：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，你收到一个新的派工\r\n项目类型：安装宽带\r\n指派人：项目经理\r\n接到派工后请尽快处理，详情请点击详细查看',
    modify_time: '2016-01-06 09:50:33'
  },
  {
    id: 'OPENTM402012757',
    title: '会所预订通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n设施名称：{{keyword1.DATA}}\n订单编号：{{keyword2.DATA}}\n预订时间：{{keyword3.DATA}}\n预订人：{{keyword4.DATA}}\n预订电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你收到了一笔新订单\r\n设施名称：篮球场 - 新世界蓝山会所\r\n订单编号：123456789\r\n预订时间：2014年7月21日 18:36\r\n预订人：张三\r\n预订电话：15118146325\r\n点击查看预订详情',
    modify_time: '2016-04-07 16:54:12'
  },
  {
    id: 'OPENTM401262459',
    title: '合同到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n合同编号：{{keyword1.DATA}}\n到期时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的客户，您有一份合同即将到期。\r\n合同编号：SY-(2014)-KL-JZ105-01\r\n到期时间：2015年3月28日\r\n如有服务需要，欢迎联系我们的营运人员。谢谢！',
    modify_time: '2016-01-26 14:34:54'
  },
  {
    id: 'OPENTM401531761',
    title: '余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 54,
    content: '{{first.DATA}}\n账户余额：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的余额不足，无法在线支付停车费\r\n账户余额：3元\r\n时间：2014年7月21日 18:36\r\n如有疑问请在微信中回复9',
    modify_time: '2016-03-03 10:06:40'
  },
  {
    id: 'OPENTM401588861',
    title: '装修申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房间信息：{{keyword2.DATA}}\n联系信息：{{keyword3.DATA}}\n装修日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的81-1905业主，您所有的房屋装修登记成功\r\n工单编号：20160120113036906\r\n房间信息：瑞香苑 8栋 1208\r\n联系信息：13800000000\r\n装修日期：2016-01-20 到 2016-07-19\r\n物业联系电话：400-123-123， 请装修结束后到11栋1楼物业管理处取回装修押金。',
    modify_time: '2016-03-07 14:38:34'
  },
  {
    id: 'OPENTM401906211',
    title: '处理完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n内容：{{keyword1.DATA}}\n业主：{{keyword2.DATA}}\n处理时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的报修内容已处理完成\r\n内容：小区墙面开裂\r\n业主：小明\r\n处理时间：2016-03-29\r\n请到我的报修中，对我们的服务做出评价，感谢您的使用！',
    modify_time: '2016-03-30 16:43:56'
  },
  {
    id: 'OPENTM401590014',
    title: '维修任务提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 40,
    content: '{{first.DATA}}\n维修项目：{{keyword1.DATA}}\n维修地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，系统中有一条维修任务需要处理\r\n维修项目：公区水\r\n维修地址：振兴小区A区1#5单元605\r\n点击查看详情',
    modify_time: '2016-03-07 16:38:16'
  },
  {
    id: 'OPENTM401590020',
    title: '投诉任务提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n投诉类型：{{keyword1.DATA}}\n投诉地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，系统中有一条投诉任务需要处理\r\n投诉类型：卫生\r\n投诉地址：振兴小区A区12#1单元101\r\n点击查看详情',
    modify_time: '2016-03-07 16:38:31'
  },
  {
    id: 'OPENTM401302671',
    title: '退货退款通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n商品：{{keyword2.DATA}}\n退款金额：{{keyword3.DATA}}\n客户名称：{{keyword4.DATA}}\n退款原因：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，你有一张退款订单！\r\n订单号：8888888\r\n商品：牙刷1件\r\n退款金额：20元\r\n客户名称：XXX\r\n退款原因：质量不好\r\n请尽快处理',
    modify_time: '2016-02-01 16:32:25'
  },
  {
    id: 'OPENTM401559123',
    title: '预约服务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n服务项目：{{keyword1.DATA}}\n订单状态：{{keyword2.DATA}}\n订单编号：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的已成功预约xxx服务，请等待我们上门为您服务！\r\n服务项目：洗衣\r\n订单状态：已预约\r\n订单编号：01000020000000119\r\n感谢您的支持，如果有任何问题请拨打华侨城物业24小时客服热线 4008-812-810',
    modify_time: '2016-03-04 14:19:54'
  },
  {
    id: 'OPENTM401455726',
    title: '抢单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 28,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n维修项目：{{keyword2.DATA}}\n维修师傅：{{keyword3.DATA}}\n工号：{{keyword4.DATA}}\n联系方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好!您的维修订单信息如下：\r\n订单编号：2016022518330001\r\n维修项目：安装灯具x 2个\r\n维修师傅：李四\r\n工号：1456153139188\r\n联系方式：18944166699\r\n感谢您的使用，祝您生活愉快！',
    modify_time: '2016-02-26 09:17:58'
  },
  {
    id: 'OPENTM401886879',
    title: '搬家申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n搬家日期：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n状态：{{keyword4.DATA}}\n搬家详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的搬家申请提交成功。\r\n姓名：张三\r\n搬家日期：2016-3-39\r\n地址：XX小区XX号楼XX单元XX房号\r\n状态：已申请\r\n搬家详情：业主电话\r\n请及时关注审核状态。',
    modify_time: '2016-03-29 11:42:19'
  },
  {
    id: 'OPENTM401683931',
    title: '新报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 67,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报修位置：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新报修通知\r\n业主姓名：张三\r\n联系电话：13456789\r\n报修位置：卫星花园A栋\r\n报修内容：主卧墙面开裂\r\n报修时间：2015年1月22日 21:39\r\n请尽快核实处理。',
    modify_time: '2016-03-15 16:42:31'
  },
  {
    id: 'OPENTM401559184',
    title: '订单更新提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n服务项目：{{keyword2.DATA}}\n件数：{{keyword3.DATA}}\n实付款：{{keyword4.DATA}}\n订单状态：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的威尼斯洗衣订单已完成计价，可以去付款啦！\r\n订单编号：01000020000000119\r\n服务项目：威尼斯酒店洗衣\r\n件数：3\r\n实付款：120\r\n订单状态：已收衣（已付款）\r\n感谢您的支持，如果有任何问题请拨打华侨城物业24小时客服热线 4008-812-810',
    modify_time: '2016-03-04 14:25:44'
  },
  {
    id: 'OPENTM401973586',
    title: '订单状态变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n订单状态：{{keyword2.DATA}}\n工长信息：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，有新的工人接单了。\r\n订单号：37862834\r\n订单状态：已接单\r\n工长信息：27494572，张工长\r\n如有问题可随时联系客服',
    modify_time: '2016-04-05 10:40:57'
  },
  {
    id: 'OPENTM401559389',
    title: '报修进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n业主信息：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n当前进展：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '王业主您好，您的报修有了新的进展\r\n工单编号：145212\r\n业主信息：月坛花园 5号楼1单元202\r\n联系方式：188535588888\r\n报修内容：单元门坏了，影响正常出行\r\n当前进展：已安排相关维修人员处理\r\n如有疑问，请拨打物业电话！',
    modify_time: '2016-03-04 14:50:03'
  },
  {
    id: 'OPENTM401700890',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n住户：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n总费用：{{keyword3.DATA}}\n费用明细：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '敬爱的住户:  9月份费用已出\r\n住户：陈xx\r\n地址：珠光村48栋802\r\n总费用：1535元\r\n费用明细：租金1300, 电费150, 水费50, 垃圾处理费35\r\n请与9月5号前到管理处缴费',
    modify_time: '2016-03-17 08:34:14'
  },
  {
    id: 'OPENTM401270693',
    title: '物业账单催缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 78,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n未缴金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，截至目前您01月的账单费用仍然未缴\r\n房间：尚景花园1栋1001\r\n未缴金额：200元\r\n请您尽快缴纳，如有疑问，请咨询物业管理处0755-23906699',
    modify_time: '2016-01-27 16:33:25'
  },
  {
    id: 'OPENTM401875343',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n业主：{{keyword2.DATA}}\n处理时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '报修处理通知\r\n报修内容：水管破裂\r\n业主：小明\r\n处理时间：2016-03-27 22:10\r\n请到微信我的报修给我们评价，谢谢使用！',
    modify_time: '2016-03-28 13:17:19'
  },
  {
    id: 'OPENTM401915094',
    title: '房源发布成功',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n用户名：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '房源发布成功提醒\r\n用户名：小样\r\n时间：2015-9-10\r\n您已成功发布源房，如果房源已出租请在&amp;#39;我发布的房源&amp;#39;中及时修改房源的状态。',
    modify_time: '2016-03-31 11:09:14'
  },
  {
    id: 'OPENTM402023397',
    title: '报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 49,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n问题描述：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，小王，有新的报修单\r\n客户姓名：张总\r\n联系方式：1334567891\r\n问题描述：水管漏水\r\n报修时间：2016-3-14 13:04\r\n请尽快处理！',
    modify_time: '2016-04-08 11:12:37'
  },
  {
    id: 'OPENTM405577457',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 323,
    content: '{{first.DATA}}\n缴费项目：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的物业管理费已缴清\r\n缴费项目：物业管理费\r\n缴费金额：1200.00\r\n缴费时间：2016-05-12 12:23:15\r\n如果有任何问题请拨打华侨城物业24小时客服热线 4008-812-810',
    modify_time: '2016-05-19 17:00:00'
  },
  {
    id: 'OPENTM402191908',
    title: '退房账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n应退金额：{{keyword1.DATA}}\n应缴金额：{{keyword2.DATA}}\n合计应退金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的退房账单已生成\r\n应退金额：￥8000\r\n应缴金额：￥3000\r\n合计应退金额：￥5000\r\n合计应退款项会在7个工作日内退回，请留意银行通知。',
    modify_time: '2016-04-20 13:44:49'
  },
  {
    id: 'OPENTM403178309',
    title: '家政预约通知',
    class1: '房地产',
    class2: '物业',
    person_used: 50,
    content: '{{first.DATA}}\n预约姓名：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n预约明细：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '老板，有新客户预约，请及时联系\r\n预约姓名：王丽红 江汉路恒大小区5-6-2-601\r\n联系方式：1898756213\r\n预约时间：2016-04-01 10:00\r\n预约明细：沙发清洁\r\n点击确认预约时间，或联系修改预约时间',
    modify_time: '2016-05-05 10:18:43'
  },
  {
    id: 'OPENTM403082610',
    title: '意见处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1133,
    content: '{{first.DATA}}\n建议人：{{keyword1.DATA}}\n建议类型：{{keyword2.DATA}}\n建议事由：{{keyword3.DATA}}\n处理结果：{{keyword4.DATA}}\n意见处理人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的意见建议已处理\r\n建议人：小小\r\n建议类型：物业服务\r\n建议事由：服务不好\r\n建议处理结果：已处理\r\n建议处理人：晓锋\r\n谢谢你的使用',
    modify_time: '2016-04-28 10:43:25'
  },
  {
    id: 'OPENTM403161111',
    title: '违停挪车提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n报警人电话：{{keyword1.DATA}}\n车辆位置：{{keyword2.DATA}}\n通知时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的爱车妨碍其他车辆通行！\r\n报警人电话：13123456789\r\n车辆位置：XX小区地下车库XX号\r\n通知时间：5月1日 18:00\r\n请您尽快到达现场或电话联系对方，谢谢！',
    modify_time: '2016-05-04 10:15:03'
  },
  {
    id: 'OPENTM405676214',
    title: '租户登记入住提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n住户地址：{{keyword1.DATA}}\n住户房号：{{keyword2.DATA}}\n房间租金：{{keyword3.DATA}}\n租房押金：{{keyword4.DATA}}\n住户租期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '张三 18925278387 登记成功\r\n住户地址：沙吓村四巷3栋\r\n住户房号：A101\r\n房间租金：1200\r\n租房押金：1200\r\n住户租期：2016-01-01至2016-05-31\r\n钥匙1把，门卡2张，每月1号交租',
    modify_time: '2016-05-30 16:32:12'
  },
  {
    id: 'OPENTM403056373',
    title: '许可证发放通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n项目名词：{{keyword1.DATA}}\n发放时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXXX先生/小姐，您办理的《大型装修许可证》已经发放，您可以正式开工进行装修。\r\n项目：招牌更换、天花装修\r\n发放时间：尊敬的XXXX先生/小姐，您办理的《大型装修许可证》已经发放，您可以正式开工进行装修。 主题：大型装修业务申请 项目：招牌更换、天花装修     申请人：哈哈哈      申请时间：2015年12月3日 12：00：00\r\n感谢您的合作。',
    modify_time: '2016-04-26 10:42:36'
  },
  {
    id: 'OPENTM402169376',
    title: '报修进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n故障类型：{{keyword1.DATA}}\n维修人员：{{keyword2.DATA}}\n上门时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的报修请求已接收，我们会尽快安排人员进行处理。\r\n故障类型：马桶堵塞\r\n维修人员：XXX\r\n上门时间：今天14:00-16:00\r\n 您可以点击下方的“详情”查看报修进度，额外需求可电话联系维修人员沟通。',
    modify_time: '2016-04-19 15:14:55'
  },
  {
    id: 'OPENTM405539727',
    title: '商品发货通知',
    class1: '房地产',
    class2: '物业',
    person_used: 700,
    content: '{{first.DATA}}\n订单金额：{{keyword1.DATA}}\n商品明细：{{keyword2.DATA}}\n收货地址：{{keyword3.DATA}}\n订单编号：{{keyword4.DATA}}\n送货人及单号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '发货啦，小主人，我是您的商品呀，老板已经安排发货了，我和您即将团聚了，等我哟！\r\n订单金额：58\r\n商品明细：18988888888\r\n收货人地址：张明 浙江省杭州市解放路\r\n订单号：15648564\r\n送货人及单号：王师傅，快递顺风123287689\r\n感谢小主您的购买，收到货后请仔细查询，如不满意请联系我们。',
    modify_time: '2016-05-16 11:03:01'
  },
  {
    id: 'OPENTM402027378',
    title: '快递代收提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n快递单号：{{keyword1.DATA}}\n收件时间：{{keyword2.DATA}}\n其他备注：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的奶茶：您好！我们已为您代收一份申通的快递，我们将为您免费保管24小时，请尽快前往管理处领取。\r\n快递单号：537002548366\r\n收件时间：2016.3.15  15:35\r\n其他备注：外观有破损\r\n祝您生活愉快！ 注：超过24小时我们将按1元/天收取保管费。',
    modify_time: '2016-04-08 15:40:55'
  },
  {
    id: 'OPENTM403178085',
    title: '泊车服务提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n停车位：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的群星城会员您好，您的车辆停放信息如下\r\n停车位：B2停车场C13\r\n时间：18\r\n感谢您的使用',
    modify_time: '2016-05-05 10:03:42'
  },
  {
    id: 'OPENTM405576235',
    title: '宽带工单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n进度：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好，您提交的工单已被受理。\r\n单号：2016051700103\r\n进度：已受理\r\n时间：2016-05-17 17:03\r\n稍后工作人员会电话联系您，请您耐心等待。如有疑问，请联系客服：4001398890',
    modify_time: '2016-05-19 14:53:31'
  },
  {
    id: 'OPENTM402072886',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 74,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n支付金额：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单支付成功！\r\n订单号：JPH81\r\n支付金额：200元\r\n支付时间：2016-04-01 12:32\r\n感谢您的使用',
    modify_time: '2016-04-12 12:38:42'
  },
  {
    id: 'OPENTM405646186',
    title: '垃圾投放汇总通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n街道名称：{{keyword1.DATA}}\n小区名称：{{keyword2.DATA}}\n总投放量：{{keyword3.DATA}}\n汇总时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，收到今天的垃圾回收汇总信息\r\n街道名称：粤海街道\r\n小区名称：蓝湾小区\r\n总投放量：1.5公斤\r\n汇总时间：2014年7月21日\r\n感谢您的使用',
    modify_time: '2016-05-26 17:17:34'
  },
  {
    id: 'OPENTM403088739',
    title: '工单审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n维修地址：{{keyword1.DATA}}\n上报时间：{{keyword2.DATA}}\n提交人：{{keyword3.DATA}}\n提交公司：{{keyword4.DATA}}\n维修类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一条委托维修任务需要审核\r\n维修地址：蓝色康桥1单元101\r\n上报时间：2016-04-29\r\n提交人：张三\r\n提交公司：物业公司\r\n维修类型：公区水\r\n为了尽快处理业主问题，请领导及时审核通过',
    modify_time: '2016-04-28 16:16:20'
  },
  {
    id: 'OPENTM405463291',
    title: '泊车月卡申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n月卡费用：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的停车月卡已申请成功\r\n申请时间：2016.05.03\r\n月卡费用：200元/月\r\n物业电话:028-88775642',
    modify_time: '2016-05-11 11:37:59'
  },
  {
    id: 'OPENTM403056344',
    title: '验收结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n验收结果：{{keyword1.DATA}}\n验收意见：{{keyword2.DATA}}\n验收时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的宋红林先生/小姐，您递交的关于大厦XXXX号商铺的大型装修验收申请，验收初检不通过，请点击“查看详情“修改或补全资料。\r\n验收结果：审核不通过\r\n验收意见：需提交补全装修图纸\r\n验收时间：2015年12月20日 18：00：00  \r\n如有任何疑问，请咨询白马大厦客服部，咨询电话：02086228888。',
    modify_time: '2016-04-26 10:39:59'
  },
  {
    id: 'OPENTM403161244',
    title: '订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n订单数量：{{keyword1.DATA}}\n订单金额：{{keyword2.DATA}}\n订单姓名：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n订单编号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲，您已经成功下单了啦!\r\n订单数量及金额：亲，您购买的明细如下\r\n订单总金额：41元\r\n订单姓名：李小军\r\n订单电话：1898888888\r\n订单编号：12354874\r\n支付成功后，我们会尽快为您安排工作人员发货，不要轻易相信其他付款信息，避免造成财产损失。',
    modify_time: '2016-05-04 10:34:16'
  },
  {
    id: 'OPENTM403109346',
    title: '派件拒收提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n快递单号：{{keyword1.DATA}}\n收件人姓名：{{keyword2.DATA}}\n收件人电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的XXX：您派往XXX小区的包裹已被拒收，请另行联系收件人进行派送。\r\n快递单号：537002548366\r\n收件人姓名：李建东\r\n收件人电话：13512312312\r\n注：收件人不在本小区居住',
    modify_time: '2016-04-29 15:30:57'
  },
  {
    id: 'OPENTM405573899',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n预约内容：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '恭喜亲，您已预约报名成功！\r\n姓名：王丽\r\n预约内容：江汉路看房\r\n联系方式：1897888888\r\n我们将尽快与联系您，请亲保持电话畅通。',
    modify_time: '2016-05-19 10:59:32'
  },
  {
    id: 'OPENTM406098752',
    title: '下单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 42,
    content: '{{first.DATA}}\n付款金额：{{keyword1.DATA}}\n商品详情：{{keyword2.DATA}}\n收货信息：{{keyword3.DATA}}\n付款时间：{{keyword4.DATA}}\n交易单号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您在侨城汇购买的商品订单已支付成功！\r\n付款金额：123.50元\r\n商品详情：荔枝1斤装*3 苹果3个装*2\r\n收货信息：张三，13700122122，xxx小区x栋xxx\r\n付款时间：2016-05-23 19:09:23\r\n交易单号：0002300000032321\r\n感谢您对我们的支持，如有任何疑问请拨打华侨城物业24小时客服热线4008812810。祝您生活愉快！',
    modify_time: '2016-07-13 17:21:45'
  },
  {
    id: 'OPENTM405841856',
    title: '账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n租地面积：{{keyword1.DATA}}\n租地租金：{{keyword2.DATA}}\n用电费用：{{keyword3.DATA}}\n管理费用：{{keyword4.DATA}}\n合计：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬xxx公司，您本月的交款通知单：\r\n租地面积：351㎡\r\n租地租金：23868.00元\r\n用电费用：2083.00元（电表底数11，电表抄数220，用电数209）\r\n管理费用：2106.00元\r\n合计：28057.90元\r\n请于5个工作日内将上述款项汇款至指定帐号 收款单位：深圳市前海爱创资产管理有限公司 开户行：建设银行深圳福华支行 帐号：4420 1010 3000 5253 8181',
    modify_time: '2016-06-16 16:54:11'
  },
  {
    id: 'OPENTM406105806',
    title: '退款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n退款单号：{{keyword1.DATA}}\n商品详情：{{keyword2.DATA}}\n退款金额：{{keyword3.DATA}}\n退款时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的订单已成功退款！\r\n退款单号：2008430503087642252001201607\r\n商品详情：管理费及公共费用\r\n退款金额：100元\r\n退款时间：2016年7月21日 18:36:00\r\n请注意核对!',
    modify_time: '2016-07-14 11:06:06'
  },
  {
    id: 'OPENTM406038361',
    title: '活动报名成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 239,
    content: '{{first.DATA}}\n报名姓名：{{keyword1.DATA}}\n参与人数：{{keyword2.DATA}}\n出发时间：{{keyword3.DATA}}\n出发地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您已成功报名本次活动！\r\n报名姓名：张三\r\n参与人数：3\r\n出发时间：2016年7月6日 7:00\r\n出发地点：小区东门口\r\n请务必提前十分钟到出发地点集合，咨询电话：4006661127',
    modify_time: '2016-07-07 14:49:14'
  },
  {
    id: 'OPENTM406076311',
    title: '新订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 69,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n故障描述：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n服务地址：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，你有业主指定的维修通知\r\n订单编号：11000011\r\n故障描述：水管爆裂\r\n预约时间：2016年7月7日 18:00\r\n服务地址：群星路13号\r\n联系电话：13881030368\r\n请及时处理',
    modify_time: '2016-07-11 16:29:18'
  },
  {
    id: 'OPENTM406094565',
    title: '商品送达通知',
    class1: '房地产',
    class2: '物业',
    person_used: 28,
    content: '{{first.DATA}}\n订单状态：{{keyword1.DATA}}\n商品详情：{{keyword2.DATA}}\n订单总额：{{keyword3.DATA}}\n送货地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，你在侨城汇购买的商品已送达。\r\n订单状态：已送达\r\n商品详情：苹果*1 香梨*5\r\n订单总额：53.5\r\n送货地址：xxx小区xx栋xxxx\r\n商品已送达，如果有任何疑问请拨打华侨城物业24小时客服热线4008-812-810',
    modify_time: '2016-07-13 11:52:39'
  },
  {
    id: 'OPENTM406292720',
    title: '缴费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n房租租金：{{keyword1.DATA}}\n管理费用：{{keyword2.DATA}}\n用电费用：{{keyword3.DATA}}\n用水费用：{{keyword4.DATA}}\n合计金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本月的交款通知单\r\n房租租金：2000.00元\r\n管理费用：200.00元\r\n用电费用：100.00元（电表底数11，电表抄数220，用电数209）\r\n用水费用：100.00元（清洁用水费80元，污水处理费20元）\r\n合计金额：2400.00元\r\n点击查看详情，可微信支付本月租金。',
    modify_time: '2016-07-28 16:08:09'
  },
  {
    id: 'OPENTM406258977',
    title: '送水进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n订单金额：{{keyword1.DATA}}\n商品详情：{{keyword2.DATA}}\n收货地址：{{keyword3.DATA}}\n订单编号：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的定单已经开始配送，将于30分钟到达，请您注意查收。\r\n订单金额：￥407\r\n商品详情：哇哈哈纯净水 300ML*10 x2\r\n收货地址：半岛城邦一期2栋1601室\r\n订单编号：20160102114121\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2016-07-26 10:45:02'
  },
  {
    id: 'OPENTM406105779',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 39,
    content: '{{first.DATA}}\n商户单号：{{keyword1.DATA}}\n商品详情：{{keyword2.DATA}}\n支付金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '恭喜您支付成功\r\n商户单号：201607081813137486539001000\r\n商品详情：XXX管理费及水电费\r\n支付金额：100元\r\n支付时间：2016年7月21日 18:36:00\r\n感谢您的使用',
    modify_time: '2016-07-14 11:04:54'
  },
  {
    id: 'OPENTM405760683',
    title: '缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 38,
    content: '{{first.DATA}}\n住户房号：{{keyword1.DATA}}\n应缴金额：{{keyword2.DATA}}\n费用明细：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户：6月房租费用已出。\r\n住户房号：创家寓202\r\n应缴金额：1,200.22元\r\n费用明细：房租、网费、有线费、物业费\r\n请在7月15日前自行至物业缴费。',
    modify_time: '2016-06-06 14:38:20'
  },
  {
    id: 'OPENTM406401985',
    title: '反馈处理进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 21,
    content: '{{first.DATA}}\n反馈类型：{{keyword1.DATA}}\n反馈信息：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n处理结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您反馈的信息我们已经成功处理\r\n反馈类型：服务异常\r\n反馈信息：无法发起支付\r\n提交时间：2015-01-17 19:13:14\r\n处理结果：已经修复，可正常使用\r\n感谢您的使用。',
    modify_time: '2016-08-04 16:05:21'
  },
  {
    id: 'OPENTM405766336',
    title: '抄表提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n住户房号：{{keyword1.DATA}}\n抄表内容：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户：请自助抄表。\r\n住户房号：创家寓202\r\n抄表内容：冷、热水表读数\r\n7月5日前在“湛卢宝”微信公众号的公寓项目=&amp;gt;抄表读数中填报本月冷、热水表度数。',
    modify_time: '2016-06-07 11:10:03'
  },
  {
    id: 'OPENTM405948286',
    title: '签约申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房屋地址：{{keyword1.DATA}}\n租客姓名：{{keyword2.DATA}}\n月租金：{{keyword3.DATA}}\n起租日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，有人向您发布的房子发起租房签约申请\r\n房屋地址：滨兴家园3幢1单元202\r\n租客姓名：小王\r\n月租金：1800元\r\n起租日期：2016年7月1日\r\n请您尽快确认签约合同，感谢您的支持。',
    modify_time: '2016-06-28 17:23:19'
  },
  {
    id: 'OPENTM405714087',
    title: '房租到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n到期日期：{{keyword2.DATA}}\n预计交租金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租户，您好！您在幸福公寓租住的房间房租即将到期。\r\n房号：A102\r\n到期日期：2016-06-01\r\n预计交租金额：1180.00元\r\n温馨提示：为保证您的正常居住，请及时交租。交租金额以实际为准，仅供参考。',
    modify_time: '2016-05-31 14:24:03'
  },
  {
    id: 'OPENTM405768588',
    title: '服务反馈通知',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n所属小区：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n反馈内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的服务请求有新的反馈！\r\n服务类型：咨询\r\n所属小区：润泽园\r\n反馈时间：2016年6月7日 16:06\r\n反馈内容：您好，感谢您的反馈，整改周期为7-15天，还请您耐心等待，整改完成后我们会第一时间知会您。\r\n点击查看',
    modify_time: '2016-06-07 16:50:09'
  },
  {
    id: 'OPENTM406401694',
    title: '工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n标题：{{keyword1.DATA}}\n单号：{{keyword2.DATA}}\n类别：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好,你有新的待办工单需要处理!\r\n标题：服务协议无法上网\r\n单号：INC-UFS-10004149\r\n类别：故障报修\r\n请登陆IT运维系统,尽快处理!',
    modify_time: '2016-08-04 15:47:24'
  },
  {
    id: 'OPENTM405878696',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n住户房号：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n到期时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您已成功缴费\r\n住户房号：洱苑20号\r\n缴费金额：2016年6月21\r\n缴费时间：1350\r\n到期时间：2017年6月21\r\n祝您生活愉快',
    modify_time: '2016-06-21 17:00:57'
  },
  {
    id: 'OPENTM406094247',
    title: '退款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n退款金额：{{keyword2.DATA}}\n退款时间：{{keyword3.DATA}}\n退款情况：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲，您的XXX订单已成功退款！\r\n订单号：21198592128920189\r\n退款金额：100元\r\n退款时间：2014-7-21 18:36\r\n退款情况：部分退款\r\n请注意核对!',
    modify_time: '2016-07-13 11:23:29'
  },
  {
    id: 'OPENTM406076298',
    title: '订单分配提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n订单详情：{{keyword2.DATA}}\n服务地址：{{keyword3.DATA}}\n维修金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，有新的维修订单生成\r\n订单编号：11000011\r\n订单详情：水管维修\r\n服务地址：群星路13号\r\n维修金额：100\r\n请及时处理',
    modify_time: '2016-07-11 16:28:40'
  },
  {
    id: 'OPENTM406111198',
    title: '订单变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n服务内容：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n变更原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的报修订单接单信息发生更改\r\n订单编号：110011000011\r\n服务内容：水维修\r\n预约时间：2016年7月13日 12:00\r\n变更原因：维修师傅取消订单\r\n平台已经将该订单转交内部维修师傅处理，请保持电话畅通，如有疑问请拨打客服电话（028）88888888',
    modify_time: '2016-07-14 17:49:54'
  },
  {
    id: 'OPENTM406770555',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单项目：{{keyword3.DATA}}\n备注说明：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好张三，2016年08月账单如下\r\n应付金额：20元\r\n账单周期：2016-08-03 到 2016-09-02\r\n账单项目：管理费：20\r\n备注：补交上月100元\r\n请在规定时间内完成费用缴纳，以免出现额外滞纳金，谢谢。',
    modify_time: '2016-08-30 11:08:31'
  },
  {
    id: 'OPENTM406777407',
    title: '收款确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n实付金额：{{keyword2.DATA}}\n备注说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '已确认收到您（07月）的费用\r\n应付金额：1000.00元\r\n实付金额：1000.00元\r\n备注：下次账单日期是2016-09-30\r\n本信息只做为通知所用。',
    modify_time: '2016-08-31 11:40:12'
  },
  {
    id: 'OPENTM407308160',
    title: '受理成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n服务项目：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的陈先生,您的服务申请已成功受理\r\n申请时间：2016年10月11日\r\n服务项目：室内报修-水管故障\r\n地址：花园小区B4座206号\r\n我们的维保人员会尽最快的速度与您联系，谢谢！',
    modify_time: '2016-10-11 15:45:58'
  },
  {
    id: 'OPENTM406778613',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n业主名称：{{keyword1.DATA}}\n小区地址：{{keyword2.DATA}}\n缴费方式：{{keyword3.DATA}}\n缴费时间：{{keyword4.DATA}}\n缴费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，本次缴费金额为：60.00元整。\r\n业主名称：石头\r\n小区地址：海开国际1栋1-1\r\n缴费方式：微信支付\r\n缴费时间：2016-08-31 10:54:00\r\n缴费金额：60.00元\r\n感谢您的支持。',
    modify_time: '2016-08-31 15:07:35'
  },
  {
    id: 'OPENTM407328314',
    title: '支付失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 21,
    content: '{{first.DATA}}\n商户单号：{{keyword1.DATA}}\n商品详情：{{keyword2.DATA}}\n支付金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '支付失败\r\n商户单号：123456789\r\n商品详情：停车费\r\n支付金额：50\r\n支付时间：2014年7月21日 18:36\r\n感谢您的使用',
    modify_time: '2016-10-13 16:23:58'
  },
  {
    id: 'OPENTM406889515',
    title: '投诉处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n投诉人房号：{{keyword1.DATA}}\n投诉主题：{{keyword2.DATA}}\n投诉时间：{{keyword3.DATA}}\n当前回复：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的投诉已经回复\r\n投诉人房号：万科锦城12-02\r\n投诉主题：房屋漏水严重\r\n投诉时间：2016-09-08 12:05:03\r\n当前回复：已去查看详情\r\n感谢您的投诉',
    modify_time: '2016-09-09 14:56:05'
  },
  {
    id: 'OPENTM406687566',
    title: '访客授权通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n授权小区：{{keyword1.DATA}}\n授权车场：{{keyword2.DATA}}\n授权门禁：{{keyword3.DATA}}\n进出次数：{{keyword4.DATA}}\n有效时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您已被授权以下权限\r\n授权小区：丽发明城\r\n授权车场：8栋地下停车场\r\n授权门禁：大门（南）、8-1801\r\n进出次数：8次\r\n有效时间：08月12日 10:00至08月13日 10:00 \r\n以上授权均在有效时间内有效',
    modify_time: '2016-08-23 15:05:48'
  },
  {
    id: 'OPENTM406811216',
    title: '退房通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n退房主题：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n退房时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，张三，你有新的退房通知\r\n房屋编号：四季花园44-88\r\n退房主题：房屋有异味\r\n提交时间：2016-09-01 18:02:08\r\n退房时间：2016年9月10号\r\n请尽快处理!',
    modify_time: '2016-09-05 14:34:27'
  },
  {
    id: 'OPENTM406792376',
    title: '报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 20,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报修主题：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，张三，您有新的报修单。\r\n房屋编号：四季花园22-99\r\n联系电话：13222222222\r\n报修主题：房屋漏水\r\n报修时间：2016-09-01 20:08:06\r\n请尽快联系租客。',
    modify_time: '2016-09-02 15:25:20'
  },
  {
    id: 'OPENTM406792130',
    title: '交房预约提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 35,
    content: '{{first.DATA}}\n房屋信息：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的[海棠蓝湾]交房预约信息生成，请关注！\r\n房屋信息：海棠蓝湾1栋1单元12楼5号房\r\n业主姓名：刘嘉嘉\r\n联系电话：15888888888\r\n预约时间：2016年9月3日9:00点至12:00点\r\n请及时联系业主，了解更多信息。',
    modify_time: '2016-09-02 15:04:03'
  },
  {
    id: 'OPENTM407308730',
    title: '报修取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n服务项目：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n取消原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有业主取消了服务\r\n申请时间：2016年11月10日\r\n服务项目：室内报修-水管故障\r\n地址：花园小区B4座206号\r\n取消原因：维修师傅未来，我已自行更换了零件，水管已正常使用\r\n请及时进行确认',
    modify_time: '2016-10-11 16:41:16'
  },
  {
    id: 'OPENTM406772282',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 109,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n报修状态：{{keyword4.DATA}}\n处理信息：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XX先生/女士，您的报修有新进展\r\n房屋编号：四季花园22-99\r\n报修主题：马桶堵塞\r\n报修时间：2016-08-30 15:49:07\r\n报修状态：通过\r\n处理信息：已安排李四上门服务，联系电话135555555\r\n如有疑问，请联系客服。',
    modify_time: '2016-08-30 15:06:17'
  },
  {
    id: 'OPENTM406889534',
    title: '退房受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n退房房号：{{keyword1.DATA}}\n退房主题：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n退房时间：{{keyword4.DATA}}\n当前回复：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的退房申请已经受理\r\n退房房号：万科锦城12-12\r\n退房主题：房屋潮湿\r\n提交时间：2016-9-09 11：39:25\r\n退房时间：2016年10月8号\r\n当前回复：好的，请到XX地办理退房手续\r\n感谢你的使用。',
    modify_time: '2016-09-09 14:58:48'
  },
  {
    id: 'OPENTM406601985',
    title: '访客预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客电话：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约已经成功，请点击“详情”将二维码保存并发送给您的朋友吧！\r\n访客姓名：猫女\r\n访客电话：13519850207\r\n预约时间：2016.04.23 16:00-18:00\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2016-08-15 19:51:05'
  },
  {
    id: 'OPENTM406672987',
    title: '服务状态更新提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n报单编号：{{keyword1.DATA}}\n报单事项：{{keyword2.DATA}}\n更新时间：{{keyword3.DATA}}\n当前状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的报修事项服务状态已更新\r\n报单编号：hw20160819001\r\n报单事项：顶灯不亮\r\n时间：2014年7月21日 18:36\r\n当前状态：工程已评估\r\n感谢您的使用。',
    modify_time: '2016-08-22 10:20:21'
  },
  {
    id: 'OPENTM406811338',
    title: '用户投诉通知',
    class1: '房地产',
    class2: '物业',
    person_used: 32,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n投诉主题：{{keyword3.DATA}}\n投诉时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，张三，您有新的投诉通知。\r\n房屋编号：四季花园22-99\r\n联系方式：13222222222\r\n投诉主题：某员工态度恶劣\r\n投诉时间：2016-09-02 20:08:09\r\n请尽快处理！',
    modify_time: '2016-09-05 14:47:03'
  },
  {
    id: 'OPENTM406871889',
    title: '投诉受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n投诉房号：{{keyword1.DATA}}\n投诉主题：{{keyword2.DATA}}\n投诉时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的投诉已受理\r\n投诉房号：万科锦城11-21\r\n投诉主题：房屋漏水严重\r\n投诉时间：2016-09-08 20:04:05\r\n当前进展：某某人已受理您的投诉,正在积极处理中，请耐心等候\r\n感谢您的监督与投诉',
    modify_time: '2016-09-08 16:39:12'
  },
  {
    id: 'OPENTM407138389',
    title: '访客授权通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n出入时间：{{keyword1.DATA}}\n门禁位置：{{keyword2.DATA}}\n授权来源：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的朋友使用您的授权出入小区\r\n出入时间：2016-6-25\r\n门禁位置：汇景轩西门\r\n授权来源：动态密码\r\n感谢您的使用，若事件没有得到您的授权，请联系物业020-81104478。',
    modify_time: '2016-09-23 14:25:44'
  },
  {
    id: 'OPENTM407083994',
    title: '取件通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n取件码：{{keyword1.DATA}}\n快递公司：{{keyword2.DATA}}\n运单号码：{{keyword3.DATA}}\n快递员手机：{{keyword4.DATA}}\n取件地址：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有一个包裹到了日日顺快递柜啦，请于24小时内取出！\r\n取件码：899789\r\n快递公司：XX快递\r\n运单号码：688799879976667889\r\n快递员手机：13588689990\r\n取件地址：XX小区3号门\r\n如有疑问，请联系快递员！',
    modify_time: '2016-09-19 17:10:20'
  },
  {
    id: 'OPENTM407083998',
    title: '快递状态变化通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n快递公司：{{keyword1.DATA}}\n运单号码：{{keyword2.DATA}}\n快递员手机：{{keyword3.DATA}}\n取件地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '由于包裹超期未取，您的包裹已被管理员取出！\r\n快递公司：XX快递\r\n运单号码：688799879976667889\r\n快递员手机：13588689990\r\n取件地址：XX小区3号门\r\n如有疑问，请联系快递柜上标示的管理员！',
    modify_time: '2016-09-19 17:10:33'
  },
  {
    id: 'OPENTM407817950',
    title: '停电通知',
    class1: '房地产',
    class2: '物业',
    person_used: 37,
    content: '{{first.DATA}}\n停电时间：{{keyword1.DATA}}\n停电区域：{{keyword2.DATA}}\n停电原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '五金城市场停电通知\r\n停电时间：2016-11-29 18:00至2016-11-30 8:00\r\n停电区域：整个南天黄埔五金市场\r\n停电原因：线路抢修\r\n抱歉给您造成的不便，敬请谅解！谢谢！',
    modify_time: '2016-11-29 16:24:51'
  },
  {
    id: 'OPENTM407474204',
    title: '支付状态通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n日期：{{keyword2.DATA}}\n付款状态：{{keyword3.DATA}}\n维修状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好， 维修订单支付已完成，详情如下，\r\n单号：666666666\r\n日期：2016-10-30\r\n付款状态：已付款\r\n维修状态：已完成\r\n感谢您的使用',
    modify_time: '2016-10-28 14:13:17'
  },
  {
    id: 'OPENTM407443859',
    title: '预订成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n会议室名称：{{keyword2.DATA}}\n预订时间：{{keyword3.DATA}}\n会议主题：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好,会议室预订成功\r\n订单编号：20161024001\r\n会议室名称：B02会议室\r\n预订时间：2016年9月20日 9:00 ~ 2016年9月20日 17:00\r\n会议主题：周例会\r\n请提前30分钟签到确认',
    modify_time: '2016-10-26 10:39:10'
  },
  {
    id: 'OPENTM407662313',
    title: '受理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n转租房号：{{keyword1.DATA}}\n转租主题：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n转租时间：{{keyword4.DATA}}\n当前回复：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的转租申请已经受理\r\n转租房号：万科锦城12-12\r\n转租主题：想换一套房屋居住\r\n提交时间：2016-9-09 11:39:25\r\n转租时间：2016年10月8号\r\n当前回复：好的，请到XX地办理转租手续 感谢你的使用。\r\n请尽快赶来!',
    modify_time: '2016-11-16 10:46:17'
  },
  {
    id: 'OPENTM407474264',
    title: '施工状态通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n日期：{{keyword2.DATA}}\n维修状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好， 维修订单施工已完成，详情如下，\r\n单号：666666666\r\n日期：2016-10-30\r\n维修状态：已完成\r\n感谢您的使用',
    modify_time: '2016-10-28 14:17:11'
  },
  {
    id: 'OPENTM407723472',
    title: '预订过期通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n预订：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '温馨提醒您，您的停车预定将在30分钟后过期。请及时在30分钟内离开停车场或者重新预定。\r\n预订：30分钟后过期\r\n时间：2014年7月21日 18:36\r\n祝您停车愉快！谢谢！',
    modify_time: '2016-11-22 17:01:36'
  },
  {
    id: 'OPENTM407745476',
    title: '检查报告提交通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n检查实例：{{keyword1.DATA}}\n检查类型：{{keyword2.DATA}}\n检查时间：{{keyword3.DATA}}\n提交状态：{{keyword4.DATA}}\n检查人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '检查报告已提交\r\n检查实例：1号设备\r\n检查类型：运行情况\r\n检查时间：2016年10月1日\r\n提交状态：已提交\r\n检查人：张三\r\n查看报告',
    modify_time: '2016-11-24 11:41:11'
  },
  {
    id: 'OPENTM407589228',
    title: '认证结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 29,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房屋地址：{{keyword2.DATA}}\n认证结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您提交的业主认证申请结果如下：\r\n姓名：颜海丽\r\n房屋地址：xx星苑105栋1单元602房\r\n认证结果：通过认证\r\n如有疑问，请拨打物业服务热线4008888888',
    modify_time: '2016-11-09 14:39:06'
  },
  {
    id: 'OPENTM407750978',
    title: '合同到期通知',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n房间号码：{{keyword1.DATA}}\n到期时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的租房还有一个月到期\r\n房间号码：3-301\r\n到期时间：2016/11/25\r\n请准备办理续租或退租手续。',
    modify_time: '2016-11-24 17:49:30'
  },
  {
    id: 'OPENTM407721234',
    title: '停水通知',
    class1: '房地产',
    class2: '物业',
    person_used: 29,
    content: '{{first.DATA}}\n停水时间：{{keyword1.DATA}}\n停水区域：{{keyword2.DATA}}\n停水原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，南天机械五金市场将于今天下午1点停水\r\n停水时间：2016年11月22日13:00——2016年11月22日20:00\r\n停水区域：整个市场西区\r\n停水原因：市政维修水管\r\n给您造成不便，敬请谅解！',
    modify_time: '2016-11-22 14:42:10'
  },
  {
    id: 'OPENTM407750935',
    title: '预定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房间号码：{{keyword1.DATA}}\n订金：{{keyword2.DATA}}\n租金：{{keyword3.DATA}}\n预计入住时间：{{keyword4.DATA}}\n最晚入住时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已成功预订小康之家公寓3幢301\r\n房间号码：3-301\r\n订金：1000元\r\n租金：3000元\r\n预计入住时间：2016/11/25\r\n最晚入住时间：2016/11/27\r\n期待您的入住，如有疑问，请联系客服00000',
    modify_time: '2016-11-24 17:47:25'
  },
  {
    id: 'OPENTM407796685',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n上门时间：{{keyword2.DATA}}\n服务人员：{{keyword3.DATA}}\n联系方式：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的服务订单已成功预约，麻烦您在约定的时间安排人员在家中等待.\r\n服务类型：管道疏通\r\n上门时间：2016-11-12 13:00:00\r\n服务人员：张工\r\n联系方式：18923388999\r\n如果您需要更改或取消预约，请至少提前2小时拨打4008812810通知我们。祝您生活愉快！',
    modify_time: '2016-11-28 11:10:14'
  },
  {
    id: 'OPENTM408058688',
    title: '客户报备通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户电话：{{keyword2.DATA}}\n装修风格：{{keyword3.DATA}}\n报备时间：{{keyword4.DATA}}\n经纪人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有新客户被报备！\r\n客户姓名：张三\r\n客户电话：13555513555\r\n装修风格：北欧简约¥599\r\n报备时间：12月4日14:52:14\r\n经纪人：李四\r\n请及时跟进。',
    modify_time: '2016-12-06 11:19:49'
  },
  {
    id: 'OPENTM407568591',
    title: '访客到达提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n到达时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的访客已进入小区\r\n访客姓名：施瑞琦\r\n到达时间：11:00:00\r\n请做好迎接准备',
    modify_time: '2016-11-07 10:17:45'
  },
  {
    id: 'OPENTM407721743',
    title: '投票结果提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 21,
    content: '{{first.DATA}}\n投票议题：{{keyword1.DATA}}\n投票结果：{{keyword2.DATA}}\n投票时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你的投票已提交。\r\n投票议题：宝安区金泓凯旋城2016年年度业主大会\r\n投票结果：成功\r\n投票时间：2014年7月21日 18:36\r\n感谢你的投票。',
    modify_time: '2016-11-22 15:12:16'
  },
  {
    id: 'OPENTM407817044',
    title: '付款通知',
    class1: '房地产',
    class2: '物业',
    person_used: 32,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的预约服务已完成，可以点击详情去付款\r\n服务类型：管道疏通\r\n金额：120.0元\r\n如有疑问请拨打华侨城物业24小时客服热线咨询，祝您生活愉快',
    modify_time: '2016-11-29 14:17:18'
  },
  {
    id: 'OPENTM407568595',
    title: '访客离开提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n离开时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的访客已离开小区\r\n访客姓名：施瑞琦\r\n离开时间：12:00:00\r\n欢迎再次使用',
    modify_time: '2016-11-07 10:18:03'
  },
  {
    id: 'OPENTM407736847',
    title: '车辆异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n异常时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '车辆已经锁定\r\n车牌号：鲁A8888\r\n停车场：** 小区\r\n异常时间：2016-6-30 15:30\r\n车辆已经锁定请解锁后驶出',
    modify_time: '2016-11-23 17:42:40'
  },
  {
    id: 'OPENTM407447348',
    title: '快递代收提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n送达时间：{{keyword1.DATA}}\n存放地点：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个邮政快递包裹，请前来取件。\r\n送达时间：2016年11月11日 10:36\r\n存放地点：8号楼门卫处\r\n联系方式：13800138000\r\n请带上您的有效证件，谢谢合作！',
    modify_time: '2016-10-26 16:29:52'
  },
  {
    id: 'OPENTM407474199',
    title: '工单进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n工单号：{{keyword1.DATA}}\n工单内容：{{keyword2.DATA}}\n服务人员：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的工程单\r\n工单号：OBX00E002\r\n工单内容：维修下水道\r\n服务人员：李师傅\r\n联系电话：1307740XXXX\r\n详情可点击查看工单，感谢你的使用。',
    modify_time: '2016-10-28 14:12:58'
  },
  {
    id: 'OPENTM408574963',
    title: '维修申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n手机号码：{{keyword2.DATA}}\n楼盘名称：{{keyword3.DATA}}\n具体房间：{{keyword4.DATA}}\n客户备注：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，有新的故障报修.\r\n业主姓名：王小二\r\n手机号码：13512345678\r\n楼盘名称：金太阳\r\n具体房间：5号楼304\r\n客户备注：我的下水道堵路,需要疏通\r\n新故障报修,请及时处理',
    modify_time: '2017-01-09 14:36:33'
  },
  {
    id: 'OPENTM408176255',
    title: '预约确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n预约门店：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n门店联系人：{{keyword3.DATA}}\n联系方式：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '恭喜您成功预约！\r\n预约门店：xxx门店\r\n预约时间：2016年12月16日 12:00\r\n门店联系人：张三\r\n联系方式：13627671298\r\n期待与您相见！',
    modify_time: '2016-12-15 11:19:06'
  },
  {
    id: 'OPENTM408068861',
    title: '支付状态通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n消费金额：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的顾客\r\n消费金额：10元\r\n停车场：安泊客停车场\r\n开通安泊客支付功能，省时省心，享受无忧停车哦。祝您停车愉快！谢谢！',
    modify_time: '2016-12-06 16:22:22'
  },
  {
    id: 'OPENTM408874715',
    title: '预约完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n客户：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n服务：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，您有预约服务已完成\r\n客户：刘先生\r\n电话：0592\r\n地址：福建莆田\r\n服务：安装马桶\r\n请及时确认，并对我们的师傅做出评价。',
    modify_time: '2017-02-04 14:21:38'
  },
  {
    id: 'OPENTM408069967',
    title: '充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n充值金额：{{keyword1.DATA}}\n钱包余额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的顾客\r\n充值金额：500元\r\n钱包余额：700元\r\n开通安泊客自动支付功能，省时省心，享受无忧停车哦，祝您停车愉快！谢谢！',
    modify_time: '2016-12-06 17:15:53'
  },
  {
    id: 'OPENTM408239667',
    title: '快递代收通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n代收时间：{{keyword1.DATA}}\n快递公司：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的业主您好，您有一份快递物业公司已为您代收。\r\n代收时间：2016-12-19 14:23:00\r\n快递公司：顺丰快递\r\n请携带有效证件到物管中心领取。',
    modify_time: '2016-12-19 17:39:45'
  },
  {
    id: 'OPENTM408178569',
    title: '投诉处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n项目类型：{{keyword1.DATA}}\n项目描述：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n订单编号：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的投诉/建议有新的进展.\r\n项目类型：投诉\r\n项目描述：物业人员态度不好\r\n联系人：贾显示\r\n订单编号：T161215218\r\n当前进展：您的投诉/建议编号已被受理根据，请知悉。',
    modify_time: '2016-12-15 15:11:18'
  },
  {
    id: 'OPENTM408645669',
    title: '物业欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n提醒时间：{{keyword1.DATA}}\n欠费小区：{{keyword2.DATA}}\n欠费月数：{{keyword3.DATA}}\n欠费金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好！\r\n提醒时间：2017年02月01日 10:00\r\n欠费小区：裕发花园\r\n欠费月数：12\r\n欠费金额：2500\r\n您可以直接通过“物业缴费”查询明细，或缴费。详询物业服务中心，联系电话：0592-59239955',
    modify_time: '2017-01-12 14:28:48'
  },
  {
    id: 'OPENTM408265072',
    title: '报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 36,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n受理时间：{{keyword3.DATA}}\n受理状态及回复：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '报修受理通知\r\n客户姓名：张三\r\n客户手机：1388888888\r\n受理时间：2016年12月21日 18点30分\r\n受理状态及回复：处理中 处理过程中有任何问题我们会尽快与您取得联系\r\n如有疑问，请致电联系我们。028-61835366',
    modify_time: '2016-12-21 17:11:49'
  },
  {
    id: 'OPENTM408358472',
    title: '缴费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n缴费房号：{{keyword1.DATA}}\n费用类型：{{keyword2.DATA}}\n账单日期：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '本次缴费已到帐\r\n缴费房号：黄馨苑3-1-302\r\n费用类型：物业费\r\n账单日期：2016-12\r\n缴费金额：127.04元\r\n感谢您的使用',
    modify_time: '2016-12-26 15:15:57'
  },
  {
    id: 'OPENTM408894929',
    title: '派单确认提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n客户：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n服务：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，您有新的派单\r\n客户：林先生\r\n电话：0594\r\n地址：福建莆田\r\n时间：2014年7月21日 18:36\r\n服务：安装马桶\r\n请及时确认。',
    modify_time: '2017-02-06 14:20:15'
  },
  {
    id: 'OPENTM408198831',
    title: '绑定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 19,
    content: '{{first.DATA}}\n绑定昵称：{{keyword1.DATA}}\n绑定时间：{{keyword2.DATA}}\n绑定门号：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，恭喜您绑定成功！\r\n绑定昵称：微信昵称\r\n绑定时间：2014年7月21日 18:36\r\n绑定门号：1栋一单元1202号\r\n您可以在线报修了，并且可以跟踪维修进度！',
    modify_time: '2016-12-16 14:37:10'
  },
  {
    id: 'OPENTM408370583',
    title: '出账通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n账单金额：{{keyword1.DATA}}\n费用类型：{{keyword2.DATA}}\n缴费房号：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您2016-12月物业费账单已出\r\n账单金额：174.38元\r\n费用类型：物业费\r\n缴费房号：黄馨苑3-2-1102\r\n立即缴费',
    modify_time: '2016-12-27 11:23:28'
  },
  {
    id: 'OPENTM408894933',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n派单区域：{{keyword1.DATA}}\n派单范围：{{keyword2.DATA}}\n审核状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的资料通过审核！\r\n派单区域：福建省莆田\r\n派单范围：安装马桶\r\n审核状态：已经通过\r\n我们将为你派单服务，感谢你的使用。',
    modify_time: '2017-02-06 14:20:30'
  },
  {
    id: 'OPENTM408169034',
    title: '故障处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n故障时间：{{keyword1.DATA}}\n故障范围：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好，很抱歉的告诉您小区电梯将停止服务一段时间。\r\n故障时间：2016年12月13日8\r\n故障范围：全小区\r\n给您生活带来的不便敬请谅解，请您提前做好准备，如有疑问请咨询：0591-38723872。',
    modify_time: '2016-12-14 15:09:30'
  },
  {
    id: 'OPENTM408265134',
    title: '投诉建议通知',
    class1: '房地产',
    class2: '物业',
    person_used: 35,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n投诉内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '新投诉/建议通知\r\n客户姓名：张三\r\n客户手机：1388888888\r\n提交时间：2016年3月4日 20点30分\r\n投诉内容：32栋电梯损坏\r\n点击处理客户提交表单',
    modify_time: '2016-12-21 17:13:09'
  },
  {
    id: 'OPENTM408780187',
    title: '订单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n项目名称：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个新的维修订单！\r\n项目名称：绿地现代城\r\n报修地址：5栋1单元11楼02号\r\n报修时间：2015年12月31日 14:09\r\n请尽快处理！',
    modify_time: '2017-01-24 11:18:13'
  },
  {
    id: 'OPENTM408780190',
    title: '验收申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n项目名称：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个已完成的维修订单待验收！\r\n项目名称：绿地现代城\r\n报修地址：5栋1单元11楼02号\r\n报修时间：2015年12月31日 14:09\r\n请尽快联系业主进行验收！',
    modify_time: '2017-01-24 11:18:30'
  },
  {
    id: 'OPENTM408199346',
    title: '问题处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n申报问题：{{keyword1.DATA}}\n处理时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的需求创建了工单，工单号FM001\r\n申报问题：楼道灯不亮了\r\n处理时间：2016/12/15 12:30\r\n感谢您一直以来的关注和支持！',
    modify_time: '2016-12-16 15:20:20'
  },
  {
    id: 'OPENTM408265396',
    title: '受理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n受理时间：{{keyword3.DATA}}\n受理状态及回复：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '受理结果通知\r\n客户姓名：张三\r\n客户手机：123123\r\n受理时间：1988年3月三3日18点12分\r\n受理状态及回复：感谢您的投诉或建议 我们将及时与您取得联系\r\n如有任何问题可以致电我们的服务热线！',
    modify_time: '2016-12-21 17:32:33'
  },
  {
    id: 'OPENTM409812201',
    title: '报修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 84,
    content: '{{first.DATA}}\n报修位置：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n维保人员：{{keyword3.DATA}}\n完成日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx先生/女士，您的报修问题，已经为您处理完毕\r\n报修位置：A567\r\n报修主题：自来水管爆裂\r\n维保人员：张师傅\r\n完成日期：2017/12/07\r\n请点击以下链接地址对我们的工作进行评价，以便我们提供更优质服务，感谢您的配合，祝您生活愉快。【产业服务热线950950】 满意度调查',
    modify_time: '2017-03-22 14:41:39'
  },
  {
    id: 'OPENTM409570403',
    title: '绑定申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n绑定房间：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您有新的房间绑定申请，请点击详情审核。\r\n绑定房间：FQWYQ1-1-B02\r\n申请人：李飞\r\n电话：18899990000\r\n感谢您对我们服务的支持和监督，祝您生活愉快。',
    modify_time: '2017-03-14 15:14:45'
  },
  {
    id: 'OPENTM409398154',
    title: '拼团失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n商品信息：{{keyword2.DATA}}\n商品价格：{{keyword3.DATA}}\n组团信息：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '很抱歉，您有一笔拼团订单因人数不足组团失败，您支付的金额我们会在2个工作日内原路返回。\r\n订单号：170224-33783563456\r\n商品信息：【泰国青芒】清甜多汁\r\n商品价格：12.90元\r\n组团信息：2人团\r\n点击这里去看看更多的商品吧~~',
    modify_time: '2017-03-02 14:53:41'
  },
  {
    id: 'OPENTM409484556',
    title: '物业缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n费用数量：{{keyword1.DATA}}\n费用金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你有12笔新的物业费用待缴纳，点击下方“详情”即可查看和支付。\r\n费用数量：12笔\r\n费用金额：560.00元\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2017-03-08 11:46:29'
  },
  {
    id: 'OPENTM409812206',
    title: '投诉处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 210,
    content: '{{first.DATA}}\n投诉人位置：{{keyword1.DATA}}\n投诉主题：{{keyword2.DATA}}\n投诉时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx先生/女士，您好，您的投诉最新进展情况如下\r\n投诉人位置：xxxxx产业园1-101\r\n投诉主题：园区保修\r\n投诉时间：2015-05-24 17:47\r\n当前进展：您提交的事项正在核实处理中\r\n请保持电话畅通，感谢您的配合，祝您生活愉快。【产业服务热线950950】',
    modify_time: '2017-03-22 14:42:27'
  },
  {
    id: 'OPENTM409484558',
    title: '物业缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 19,
    content: '{{first.DATA}}\n费用类型：{{keyword1.DATA}}\n缴纳时段：{{keyword2.DATA}}\n费用金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有1笔新的物业费用待缴纳，点击下方“详情”即可查看和支付。\r\n费用类型：物业费\r\n缴纳时段：2017年1月\r\n费用金额：220.00元\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2017-03-08 11:46:46'
  },
  {
    id: 'OPENTM409371762',
    title: '维修任务提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n编号：{{keyword1.DATA}}\n事项：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n报修人：{{keyword4.DATA}}\n电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好！中建小区有一条维修任务\r\n编号：2548\r\n事项：给水排水\r\n房号：ZJ101203\r\n报修人：张三\r\n电话：15312345678\r\n点击查看详情',
    modify_time: '2017-02-28 17:10:13'
  },
  {
    id: 'OPENTM409413913',
    title: '拼团成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n商品信息：{{keyword2.DATA}}\n拼团价格：{{keyword3.DATA}}\n组团信息：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '恭喜您，您有一笔拼团订单已组团成功，商家将尽快发货\r\n订单号：170224-33783563456\r\n商品信息：【越南青芒】清甜多汁\r\n拼团价格：12.90元\r\n组团信息：3人团\r\n小雅爱拼，多实惠，多乐趣，快和朋友们一起拼团吧.~~',
    modify_time: '2017-03-03 16:13:13'
  },
  {
    id: 'OPENTM409450467',
    title: '车辆离场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n离场时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的顾客，\r\n车牌号码：闽KABK66\r\n停车场：希尔顿停车场\r\n离场时间：2017年3月1日 11:20\r\n您已离场。祝您停车愉快！谢谢！',
    modify_time: '2017-03-06 11:15:50'
  },
  {
    id: 'OPENTM409413919',
    title: '退款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n商品信息：{{keyword2.DATA}}\n商品价格：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一笔退款申请已经提交到原支付系统进行资金退回，具体到账时间以原支付系统/银行通知为准。\r\n订单号：170224-3378356345\r\n商品信息：【泰国青芒】鲜甜多汁\r\n商品价格：12.90元\r\n点击这里去看看更多的商品吧~~',
    modify_time: '2017-03-03 16:13:35'
  },
  {
    id: 'OPENTM409569871',
    title: '投诉处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n工单编号：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n受理人：{{keyword4.DATA}}\n投诉处理时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的投诉任务已经处理完毕，给您带来不便请谅解！\r\n工单编号：SZAREA_GZGS20140800\r\n工单编号：西安万科城二期19号楼2402\r\n投诉内容：1006噪音装修。\r\n受理人：客服-赵威\r\n投诉处理时间：2014.09.25\r\n如有疑问，请拨打服务热线4008888888',
    modify_time: '2017-03-14 14:20:34'
  },
  {
    id: 'OPENTM409812172',
    title: '认证结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n公司地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您提交的企业认证信息已经通过认证\r\n姓名：林书勤\r\n电话：138xxxx0855\r\n公司地址：XXXX产业园XXXXXX\r\n如有疑问，请拨打【服务热线950950】，感谢您对我们服务的支持和监督，祝您生活愉快。',
    modify_time: '2017-03-22 14:39:48'
  },
  {
    id: 'OPENTM408984923',
    title: '订单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n商品详情：{{keyword1.DATA}}\n订单金额：{{keyword2.DATA}}\n收货地址：{{keyword3.DATA}}\n订单编号：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的定单已经开始配送，将于30分钟到达，请您注意查收。\r\n商品详情：哇哈哈纯净水 300ML*10 x2\r\n订单金额：￥47\r\n收货地址：半岛城邦一期2栋1601室\r\n订单编号：20160102114121\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2017-02-13 15:08:14'
  },
  {
    id: 'OPENTM409384373',
    title: '服务受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 38,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n受理时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的陈某某，您的报修服务请求已受理！\r\n服务类型：报修\r\n受理时间：2017-3-1\r\n点击查看',
    modify_time: '2017-03-01 15:50:12'
  },
  {
    id: 'OPENTM409812175',
    title: '报修处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n报修位置：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n预计完成日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '【尊敬的xxx先生/女士，您的报修最新进展情况如下：】\r\n报修位置：XXXX产业园XX楼XX\r\n报修主题：园区西南角马路塌陷\r\n报修时间：2014/8/28 10:30\r\n当前进展：您提交的事项正在核实处理中。\r\n预计完成日期：2014/9/28 12:30\r\n入户前我们的工作人员将提前与您联系预约，请保持电话畅通，感谢您的配合，祝您生活愉快。【产业服务热线950950】',
    modify_time: '2017-03-22 14:40:04'
  },
  {
    id: 'OPENTM409636878',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n预约类型：{{keyword1.DATA}}\n预约车牌：{{keyword2.DATA}}\n预约停车场：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n停车费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的顾客，\r\n预约类型：日租\r\n预约车牌：沪A12345\r\n预约停车场：外滩茂悦\r\n预约时间：2017年3月16日09:00-2017年3月17日09:00\r\n停车费用：160元\r\n您所预约的订单已确认。请按预约的时间准时进出场。祝您停车愉快！谢谢！',
    modify_time: '2017-03-16 15:25:05'
  },
  {
    id: 'OPENTM408898180',
    title: '安装完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n客户：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n服务：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您的安装服务已完成\r\n客户：陈先生\r\n电话：0594\r\n地址：福建莆田\r\n服务：厨卫安装\r\n请及时确认，并对我们的师傅做出评价。',
    modify_time: '2017-02-06 17:45:08'
  },
  {
    id: 'OPENTM409557931',
    title: '报事处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n报事内容：{{keyword3.DATA}}\n受理人：{{keyword4.DATA}}\n报事完成时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的房屋报事任务已经处理完毕，给您带来不便请谅解！\r\n工单编号：SZAREA_GZGS20140800\r\n房屋编号：西安万科城二期19号楼2402\r\n报事内容：今天停水了么?\r\n受理人：客服-赵威\r\n报事完成时间：2014.09.25\r\n如有疑问，请拨打服务热线4008888888',
    modify_time: '2017-03-13 15:43:23'
  },
  {
    id: 'OPENTM408917183',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n客户：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n服务：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您的安装订单，客服已经受理，已派单给师傅。\r\n客户：陈先生\r\n电话：0594\r\n地址：福建莆田\r\n时间：2017-01-01\r\n服务：厨卫安装\r\n有紧急情况，可直接联系客服：0594',
    modify_time: '2017-02-08 15:02:10'
  },
  {
    id: 'OPENTM409583989',
    title: '工单处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n工单类型：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n用户地址：{{keyword4.DATA}}\n情况说明：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '天然气报修通知，请及时处理\r\n工单类型：天然气报修\r\n用户名称：陈某某\r\n联系电话：13000000000\r\n用户地址：云峰小区三单元6楼5号\r\n情况说明：天然气压力不足，火太小\r\n（收到此通知后请及时与用户取得联系并进行工单处理）',
    modify_time: '2017-03-15 14:54:17'
  },
  {
    id: 'OPENTM410012114',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 44,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的2017年度车位管理费账单已出\r\n业主姓名：张三\r\n地址：2号楼3单元201\r\n账单金额：1000元\r\n请您及时缴费',
    modify_time: '2017-04-06 15:01:48'
  },
  {
    id: 'OPENTM409890656',
    title: '处理完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n咨询内容：{{keyword1.DATA}}\n咨询联系人：{{keyword2.DATA}}\n咨询处理时间：{{keyword3.DATA}}\n咨询反馈结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三先生/女士，您咨询的问题已处理完毕\r\n咨询内容：我们家卫生间的水管修好了么\r\n咨询联系人：张三\r\n咨询处理时间：2017/09/08\r\n咨询反馈结果：已成功处理\r\n感谢您使用华夏幸福产业服务公众号，祝您生活愉快。【产业服务热线950950】',
    modify_time: '2017-03-28 16:41:58'
  },
  {
    id: 'OPENTM410119807',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 31,
    content: '{{first.DATA}}\n费用类型：{{keyword1.DATA}}\n房间号码：{{keyword2.DATA}}\n计费月份：{{keyword3.DATA}}\n计费数量：{{keyword4.DATA}}\n计费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您有新的缴费提醒\r\n费用类型：空调费\r\n房间号码：A栋8层805室\r\n计费月份：2017年4月\r\n计费数量：85度\r\n计费金额：68元\r\n请您尽快缴纳费用，如有疑问，请咨询物业电话：18666666666',
    modify_time: '2017-04-13 18:38:20'
  },
  {
    id: 'OPENTM409879316',
    title: '设备检修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n检修对象：{{keyword1.DATA}}\n检修时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '明天将对5号楼1单元电梯进行检修\r\n检修对象：5号楼1单元电梯\r\n检修时间：2017.03.28 10:00\r\n请您提前做好准备',
    modify_time: '2017-03-27 16:18:00'
  },
  {
    id: 'OPENTM410012766',
    title: '投诉受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n受理时间：{{keyword3.DATA}}\n受理状态及回复：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的投诉已被受理。\r\n客户姓名：张三\r\n客户手机：13888888888\r\n受理时间：2017年2月21日 18点30分\r\n受理状态及回复：处理中 处理过程中有任何问题我们会尽快与您取得联系\r\n如有疑问，请致电联系我们。028-61835366',
    modify_time: '2017-04-06 15:37:42'
  },
  {
    id: 'OPENTM409892568',
    title: '物业缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n已缴数量：{{keyword1.DATA}}\n已缴金额：{{keyword2.DATA}}\n未缴数量：{{keyword3.DATA}}\n未缴金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您当期物业费缴纳情况如下：\r\n已缴数量：2笔\r\n已缴金额：165.00元\r\n未缴数量：6笔\r\n未缴金额：1255.20元\r\n您当前物业费合计1420.20元，部分金额未缴清，请及时前往物业服务中心缴费。',
    modify_time: '2017-03-28 17:09:22'
  },
  {
    id: 'OPENTM410101069',
    title: '服务暂停通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n暂停时间：{{keyword2.DATA}}\n暂停原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，接上级单位通知，将暂停以下服务\r\n服务类型：供水\r\n暂停时间：20170201-20170202\r\n暂停原因：花园路供水管道破裂\r\n由此给您的生活带来不便，敬请谅解。',
    modify_time: '2017-04-12 14:53:02'
  },
  {
    id: 'OPENTM410011971',
    title: '车辆入库通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n入库时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，欢迎到中心停车场\r\n车牌号：车辆入场\r\n停车场：粤A-54215\r\n入库时间：中心停车场\r\n停车愉快',
    modify_time: '2017-04-06 14:50:21'
  },
  {
    id: 'OPENTM410039074',
    title: '业主认证通知',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n业主电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的业主认证，请注意查收\r\n业主姓名：王某某\r\n业主电话：13222222222\r\n房号：12栋1单元201室\r\n时间：2016年7月11日 18:26:11\r\n请尽快审核',
    modify_time: '2017-04-07 17:28:48'
  },
  {
    id: 'OPENTM410011975',
    title: '车辆出库通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n出库时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '欢迎使用中心停车场\r\n车牌号：川AC1C66\r\n停车场：中心停车场\r\n出库时间：2017-04-06 11:11:23\r\n停车天天好心情',
    modify_time: '2017-04-06 14:50:28'
  },
  {
    id: 'OPENTM410103777',
    title: '预约确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n来访姓名：{{keyword2.DATA}}\n来访地点：{{keyword3.DATA}}\n来访事由：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '我发出的预约确认通知\r\n预约时间：2016-07-11 17：08\r\n来访姓名：胡瞻仰\r\n来访地点：花园路27号副楼201\r\n来访事由：参加会议\r\n详情',
    modify_time: '2017-04-12 17:26:26'
  },
  {
    id: 'OPENTM409879429',
    title: '物业缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 37,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n业主住址：{{keyword2.DATA}}\n欠缴金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '王洪章先生，您好！  您的2016年4月物业费已产生，为了保证小区物业管理服务工作正常有序运行，烦请尽快安排缴纳~\r\n业主姓名：王洪章\r\n业主住址：塔普社区21#402\r\n欠缴金额：¥200\r\n      足不出户，轻松缴费~丰安物业祝您合家欢乐！',
    modify_time: '2017-03-27 16:24:48'
  },
  {
    id: 'OPENTM410037180',
    title: '投诉处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n受理人：{{keyword4.DATA}}\n投诉处理时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的投诉任务已经处理完毕，给您带来不便请谅解！\r\n工单编号：SZAREA_GZGS20140800\r\n房屋编号：西安万科城二期19号楼2402\r\n投诉内容：房屋窗户漏水。\r\n受理人：工程师赵威，联系电话13888888888\r\n投诉处理时间：2014.09.25\r\n如有疑问，请拨打服务热线4008888888',
    modify_time: '2017-04-07 15:03:26'
  },
  {
    id: 'OPENTM409879186',
    title: '欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n业主名称：{{keyword1.DATA}}\n用电地址：{{keyword2.DATA}}\n欠费金额：{{keyword3.DATA}}\n结算时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的电表账户已经欠费\r\n业主名称：张三\r\n用电地址：2号楼1单元101\r\n欠费金额：10元\r\n结算时间：2017.03.01 10:20:00\r\n请您及时缴纳电费，以免影响您的正常用电',
    modify_time: '2017-03-27 16:08:29'
  },
  {
    id: 'OPENTM409879387',
    title: '余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n业主名称：{{keyword1.DATA}}\n用电地址：{{keyword2.DATA}}\n账户余额：{{keyword3.DATA}}\n结算时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的用电账户余额已经低于报警值。\r\n业主名称：张三\r\n用电地址：2号楼3单元201\r\n账户余额：0.12元\r\n结算时间：2017.03.12  10:00:00\r\n请您及时缴纳电费，以免给您的正常用电造成影响',
    modify_time: '2017-03-27 16:21:39'
  },
  {
    id: 'OPENTM409892541',
    title: '处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n咨询内容：{{keyword1.DATA}}\n咨询联系人：{{keyword2.DATA}}\n咨询处理时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三先生/女士，您咨询的问题进展如下:\r\n咨询内容：请问孔雀城的保修电话是什么\r\n咨询联系人：张三\r\n咨询处理时间：2017/06/09\r\n关于您的问题，我们正在为您积极核实处理。请保持电话畅通，感谢您的配合，祝您生活愉快。【产业服务热线950950】',
    modify_time: '2017-03-28 17:07:34'
  },
  {
    id: 'OPENTM410088441',
    title: '服务申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n申请类型：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n电话：{{keyword4.DATA}}\n房产：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '服务申请通知\r\n申请类型：入户维修\r\n申请时间：2015-1-22  21:13:02\r\n联系人：张果果\r\n电话：13988881111\r\n房产：FQW-1-1-201\r\n请您到【个人中心】-【我的代办】查看处理。',
    modify_time: '2017-04-11 14:42:12'
  },
  {
    id: 'OPENTM409909544',
    title: '认证成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 180,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您已成功认证为实名房间业主身份，认证信息如下：\r\n姓名：×××\r\n电话：13456879546\r\n请仔细核对以上信息，如有不符，请与相关物业人员反馈，谢谢！',
    modify_time: '2017-03-29 14:41:34'
  },
  {
    id: 'OPENTM409831546',
    title: '服务工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n工单指派：{{keyword1.DATA}}\n工单来源：{{keyword2.DATA}}\n工单状态：{{keyword3.DATA}}\n服务内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '李晓云师傅，您收到一条新的工单信息\r\n工单指派：呼叫中心\r\n工单来源：400客服\r\n工单状态：处理中\r\n服务内容：B栋2单元一楼大厅有人停放电动自行车，请去贴个警告通知\r\n请及时处理',
    modify_time: '2017-03-23 16:20:34'
  },
  {
    id: 'OPENTM409879448',
    title: '意见处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n意见内容：{{keyword1.DATA}}\n提交业主：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '王洪章先生，您好！    您提交的意见报修已经得到工作人员的妥善处理！\r\n意见内容：我觉得小区的绿化实在是太少了，希望可以多添加一下\r\n提交业主：王红梅\r\n提交时间：2017-03-23 12:23\r\n      足不出户，轻松缴费~丰安物业祝您合家欢乐！',
    modify_time: '2017-03-27 16:27:03'
  },
  {
    id: 'OPENTM410553201',
    title: '物业缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 88,
    content: '{{first.DATA}}\n房屋号：{{keyword1.DATA}}\n缴费人：{{keyword2.DATA}}\n缴费类型：{{keyword3.DATA}}\n缴费状态：{{keyword4.DATA}}\n合计金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '百瑞达A栋-1307室物业费缴费提醒\r\n房屋号： 百瑞达A栋-1307\r\n缴费人：蔡强\r\n缴费类型：物业费\r\n缴费状态：未缴费\r\n合计金额：120\r\n请您及时缴费',
    modify_time: '2017-05-15 17:04:33'
  },
  {
    id: 'OPENTM410578751',
    title: '维修任务提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 167,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n派单时间：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的维修任务！\r\n联系人：林先生\r\n联系电话：13800011111\r\n派单时间：2014年7月21日 18:36\r\n报修内容：AA大厦2102空调坏了\r\n请及时登录善云物管家公众号接单确认！',
    modify_time: '2017-05-16 20:30:58'
  },
  {
    id: 'OPENTM410406756',
    title: '投诉建议通知',
    class1: '房地产',
    class2: '物业',
    person_used: 31,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n投诉建议内容：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新投诉建议通知\r\n联系人：张三\r\n电话：13542345678\r\n房号：红星花园一期3栋1209\r\n投诉建议内容：主卧墙面开裂\r\n时间：2017年4月28日 21:39\r\n请尽快联系客户。',
    modify_time: '2017-05-03 14:54:08'
  },
  {
    id: 'OPENTM410546206',
    title: '面试邀请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n应聘职位：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: 'XXX 女士/先生，您好！上海商城现邀请您至人力资源部面试。具体信息如下：\r\n应聘职位：XXX\r\n时间：XXXX年XX月XX日    XX：XX\r\n地点：南京西路1376号 西峰710室 上海商城\r\n参加面试时请携带身份证，相关学历与职业资格证书，一张报名照与一支笔，到前台请找人力资源部XXX。',
    modify_time: '2017-05-15 14:49:52'
  },
  {
    id: 'OPENTM410274808',
    title: '签订成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n公寓：{{keyword1.DATA}}\n用户：{{keyword2.DATA}}\n电话：{{keyword3.DATA}}\n金额：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '合同信息\r\n公寓：哈特公寓东二①店\r\n用户：小哈\r\n电话：13888888888\r\n金额：3000.00\r\n时间：2017-03-16 12:10:18\r\n哈特公寓很不错啊',
    modify_time: '2017-04-24 11:43:30'
  },
  {
    id: 'OPENTM410416159',
    title: '预约确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n预约内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的客户预约，请及时确认\r\n客户姓名：李明\r\n客户手机：15641212521\r\n预约时间：2014年7月21日 18:36\r\n预约内容：上门洗车服务\r\n点击确认预约时间，或修改预约时间。',
    modify_time: '2017-05-04 11:16:59'
  },
  {
    id: 'OPENTM410578764',
    title: '报修受理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 71,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n报修时间：{{keyword2.DATA}}\n当前进展：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx公司，您的报修进度已更新。\r\n报修内容：AA大厦2101停电\r\n报修时间：2014年8月28 10:30\r\n当前进展：前往处理中\r\n请保持电话畅通，如有疑问，请拨打服务热线4008888888！',
    modify_time: '2017-05-16 20:31:33'
  },
  {
    id: 'OPENTM410546519',
    title: '面试时间调整通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n应聘人：{{keyword1.DATA}}\n应聘职位：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '面试时间调整申请：\r\n应聘人：XXX\r\n应聘职位：XXX\r\n时间：XXXX年XX月XX日    XX：XX\r\n地点：南京西路1376号 上海商城 西峰710室\r\n谢谢！',
    modify_time: '2017-05-15 15:08:40'
  },
  {
    id: 'OPENTM410274822',
    title: '缴纳成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n公寓：{{keyword1.DATA}}\n账单：{{keyword2.DATA}}\n用户：{{keyword3.DATA}}\n金额：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '账单信息\r\n公寓：哈特公寓东二①店\r\n账单：201房2017年3月\r\n用户：1388888888\r\n金额：3000\r\n时间：2017-03-18 12:10:18\r\n支持哈特',
    modify_time: '2017-04-24 11:45:47'
  },
  {
    id: 'OPENTM410217473',
    title: '物业缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n金额：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n缴费方式：{{keyword4.DATA}}\n缴费内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您已成功缴纳了物业费\r\n金额：1111.1元\r\n时间：2016年5月21日 21:55:55\r\n房号：3栋3单元201\r\n缴费方式：微信支付\r\n缴费内容：半年物业费\r\n如有疑问，请拨打咨询热线027-88888888',
    modify_time: '2017-04-19 16:13:42'
  },
  {
    id: 'OPENTM410478923',
    title: '物业欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n租赁公司：{{keyword1.DATA}}\n欠费项目：{{keyword2.DATA}}\n合计金额：{{keyword3.DATA}}\n承租公司：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '截止2017年4月27日欠费通知书\r\n租赁公司：点点互联网有限公司\r\n欠费项目：【房租费】【管理费】\r\n合计金额：55000元\r\n承租公司：华强物业\r\n费用详情请登录善云物管家公众查询，请尽快交清所有费用，如贵公司已交清所有费用，请忽略此信息！',
    modify_time: '2017-05-09 15:36:12'
  },
  {
    id: 'OPENTM410514673',
    title: '扣款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n实付金额：{{keyword2.DATA}}\n扣款时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你的银联扣款成功。\r\n应付金额：100\r\n实付金额：100\r\n扣款时间：2014年7月21日 18:36\r\n感谢你的使用。',
    modify_time: '2017-05-12 14:32:38'
  },
  {
    id: 'OPENTM410216075',
    title: '缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 19,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n到期时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的宽带费即将到期\r\n姓名：张三\r\n地址：2-1-101\r\n到期时间：2017.05.10\r\n请您及时续费，以免影响您的正常使用',
    modify_time: '2017-04-19 15:14:42'
  },
  {
    id: 'OPENTM410514675',
    title: '扣款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n实付金额：{{keyword2.DATA}}\n预存款余额：{{keyword3.DATA}}\n扣款时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的预存扣款成功。\r\n应付金额：100\r\n实付金额：100\r\n预存款余额：500\r\n扣款时间：2014年7月21日 18:36\r\n感谢你的使用。',
    modify_time: '2017-05-12 14:32:49'
  },
  {
    id: 'OPENTM410502034',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n看房预约码：{{keyword1.DATA}}\n预约码有效期：{{keyword2.DATA}}\n预约楼盘：{{keyword3.DATA}}\n楼盘地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您已成功预约看房。\r\n看房预约码：a32k2s\r\n预约码有效期：2017/05/12 10:00至2017/05/18 18:00\r\n预约楼盘：南岭1983天富花园\r\n楼盘地址：深圳市南山区月亮湾大道102号\r\n请在有效期内前往看房。',
    modify_time: '2017-05-11 14:52:30'
  },
  {
    id: 'OPENTM410478787',
    title: '授权成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n授权房屋：{{keyword1.DATA}}\n授权时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的张三，恭喜你成功当选为新任老大。\r\n授权房屋：SOHO公馆5号楼301\r\n授权时间：2017年5月8日\r\n查看详情了解更多老大角色信息。',
    modify_time: '2017-05-09 15:25:12'
  },
  {
    id: 'OPENTM410478789',
    title: '授权取消提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n取消授权房屋：{{keyword1.DATA}}\n取消时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的张三，你的老大授权已取消。\r\n取消授权房屋：SOHO公馆5号楼301\r\n取消时间：2017年5月8日\r\n感谢你在就任老大期间，为兄弟姐妹们的付出与贡献。',
    modify_time: '2017-05-09 15:25:20'
  },
  {
    id: 'OPENTM410514841',
    title: '投诉建议受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 57,
    content: '{{first.DATA}}\n受理时间：{{keyword1.DATA}}\n回复内容：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，我们已经收到您的投诉\r\n受理时间：2017.05.22\r\n回复内容：我们将及时进行处理\r\n感谢您的建议',
    modify_time: '2017-05-12 14:47:52'
  },
  {
    id: 'OPENTM410546544',
    title: '面试确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n应聘人：{{keyword1.DATA}}\n应聘职位：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '面试邀请已确认，具体信息如下：\r\n应聘人：XXX\r\n应聘职位：XXX\r\n时间：XXXX年XX月XX日    XX：XX\r\n地点：南京西路1376号 上海商城 西峰710室\r\n谢谢！',
    modify_time: '2017-05-15 15:09:54'
  },
  {
    id: 'OPENTM410217297',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n报修标题：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n物业管家：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的工单已经安排物业管家处理\r\n订单编号：M14111111\r\n报修标题：水管坏了\r\n报修内容：水龙头漏水\r\n物业管家：王师傅\r\n联系电话：13545454545\r\n稍后物业管家将通过电话与您联系，约定具体上门时间，请保持电话畅通。',
    modify_time: '2017-04-19 16:07:41'
  },
  {
    id: 'OPENTM410974703',
    title: '入职通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n职位名称：{{keyword1.DATA}}\n公司名称：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: 'XXX 女士/先生，很高兴通知您来入职，具体信息如下：\r\n职位名称：XXX\r\n公司名称：XXX\r\n时间：XXXX年XX月XX日    XX：XX\r\n地点：XXX\r\n请携带本人身份证、毕业证、前往公司办理入职手续，并请在此日期前在线完整填写个人入职信息，联系人：XXX，电话：XXX',
    modify_time: '2017-06-16 17:06:19'
  },
  {
    id: 'OPENTM410945911',
    title: '退房通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n租户：{{keyword1.DATA}}\n房源：{{keyword2.DATA}}\n退房金额：{{keyword3.DATA}}\n退房时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租客，您已成功退定：\r\n租户：张三\r\n房源：爱情公寓1号楼101室\r\n退房金额：2000元\r\n退房时间：2017年6月14日 18:36\r\n感谢您的入住，欢迎下次再来，请对我们的服务进行评价，点击详细。',
    modify_time: '2017-06-14 14:49:23'
  },
  {
    id: 'OPENTM410886262',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n预订人：{{keyword1.DATA}}\n预订时间：{{keyword2.DATA}}\n预订地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '恭喜您，会议室预约成功！\r\n预订人：张三\r\n预订时间：2017-06-08 10:00-11:30\r\n预订地点：一层S101会议室\r\n如有疑问，请咨询一层前台妹子',
    modify_time: '2017-06-09 17:16:53'
  },
  {
    id: 'OPENTM410590368',
    title: '工单进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n工单标题：{{keyword2.DATA}}\n住户姓名：{{keyword3.DATA}}\n工单状态：{{keyword4.DATA}}\n处理结果：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的空调设备出现了故障\r\n工单编号：GN12891821\r\n工单标题：空调设备故障\r\n住户姓名：陈石华\r\n工单状态：处理中\r\n处理结果：正在帮您处理工单\r\n 会在3-5个工作日内为您处理完成，请您耐心等待',
    modify_time: '2017-05-17 19:05:22'
  },
  {
    id: 'OPENTM411026218',
    title: '缴费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n缴费房号：{{keyword1.DATA}}\n缴纳月数：{{keyword2.DATA}}\n物业费金额：{{keyword3.DATA}}\n电梯费金额：{{keyword4.DATA}}\n缴费时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好！您已缴费成功！\r\n缴费房号：[宝湖天下]1号楼一单元2层02室\r\n缴纳月数：12个月\r\n物业费金额：2615.76元\r\n电梯费金额：360元\r\n缴费时间：2017年6月19日 17:30\r\n感谢您对我们的工作给予支持！',
    modify_time: '2017-06-20 16:30:02'
  },
  {
    id: 'OPENTM410691219',
    title: '派件取消提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n快递公司：{{keyword1.DATA}}\n运单号码：{{keyword2.DATA}}\n快递员手机：{{keyword3.DATA}}\n取件地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的包裹已被快递员取出，取件码失效。 如有疑问，可联系您的快递小哥哦。\r\n快递公司：XX快递\r\n运单号码：688799879976667889\r\n快递员手机：13588689990\r\n取件地址：XX小区3号门\r\n谢谢。',
    modify_time: '2017-05-24 17:54:00'
  },
  {
    id: 'OPENTM411055820',
    title: '服务完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n服务房号：{{keyword1.DATA}}\n服务主题：{{keyword2.DATA}}\n服务人员：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的服务已完成\r\n服务房号：XX小区-XX楼-803\r\n服务主题：家政-打扫\r\n服务人员：张三\r\n完成时间：2017-06-21\r\n请点击对我们的工作作出评价，谢谢',
    modify_time: '2017-06-22 16:53:04'
  },
  {
    id: 'OPENTM410945871',
    title: '入住成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n租户：{{keyword1.DATA}}\n房源：{{keyword2.DATA}}\n签约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租客，您已成功办理入住登记手续\r\n租户：张三\r\n房源：爱情公寓2号楼101室\r\n签约时间：2017年6月14日 18:36\r\n请尽快入住房间，如有疑问请点击详细',
    modify_time: '2017-06-14 14:48:25'
  },
  {
    id: 'OPENTM410590373',
    title: '工单进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 31,
    content: '{{first.DATA}}\n房屋：{{keyword1.DATA}}\n提交时间：{{keyword2.DATA}}\n提交内容：{{keyword3.DATA}}\n服务人员：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的工单已经进入维修阶段，请保持手机畅通。\r\n房屋：1栋1单元101室  无名一生\r\n提交时间：2017年06月07日 19时24分\r\n提交内容：我家马桶堵了，请派人来维修疏通下\r\n服务人员：张师傅 18000000000\r\n服务人员会及时与您联系并上门服务。',
    modify_time: '2017-05-17 19:06:08'
  },
  {
    id: 'OPENTM410677973',
    title: '发票派送通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n发票抬头：{{keyword1.DATA}}\n发票金额：{{keyword2.DATA}}\n开票时间：{{keyword3.DATA}}\n配送时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你申请的物业发票现已开出\r\n发票抬头：**公司\r\n发票金额：￥150\r\n开票时间：2017-05-22\r\n配送时间：工作日配送\r\n感谢您的支持，如有问题随时联系我们客服，029*****',
    modify_time: '2017-05-23 19:13:49'
  },
  {
    id: 'OPENTM410856728',
    title: '租赁到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n房间名称：{{keyword1.DATA}}\n租赁日期：{{keyword2.DATA}}\n到期日期：{{keyword3.DATA}}\n剩余天数：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，徐先生\r\n房间名称：2022\r\n租赁日期：2017-04-12\r\n到期日期：2017-06-15\r\n剩余天数：8\r\n租赁快到期了，请尽快续约！',
    modify_time: '2017-06-07 15:29:37'
  },
  {
    id: 'OPENTM411055778',
    title: '反馈结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n反馈时间：{{keyword1.DATA}}\n回复时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的业主，您的意见反馈已回复\r\n反馈时间：2017/6/21 10:20:46\r\n回复时间：2017/6/21 10:20:46\r\n点击详情查看回复信息',
    modify_time: '2017-06-22 16:48:59'
  },
  {
    id: 'OPENTM410868780',
    title: '面试结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n应聘公司：{{keyword1.DATA}}\n应聘职位：{{keyword2.DATA}}\n面试结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: 'XXX女士／先生，您好！恭喜您通过我公司的面试，具体信息如下：\r\n应聘公司：上海商城\r\n应聘职位：XXX\r\n面试结果：通过\r\n如有疑问请联系 XXX，电话：XXX，谢谢！',
    modify_time: '2017-06-08 16:01:56'
  },
  {
    id: 'OPENTM410856932',
    title: '交租提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间名称：{{keyword1.DATA}}\n上次交租日期：{{keyword2.DATA}}\n下次交租日期：{{keyword3.DATA}}\n交租方式：{{keyword4.DATA}}\n剩余天数：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，徐先生\r\n房间名称：2022\r\n上次交租日期：2017-04-16\r\n下次交租日期：2017-06-15\r\n交租方式：付一押二\r\n剩余天数：8\r\n租金殆尽，请尽快交租哦！',
    modify_time: '2017-06-07 15:52:39'
  },
  {
    id: 'OPENTM410741988',
    title: '包裹取出通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n快递公司：{{keyword1.DATA}}\n运单号码：{{keyword2.DATA}}\n快递员手机：{{keyword3.DATA}}\n取件地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的包裹已被取出啦！如包裹有问题，可联系您的快递小哥哦。\r\n快递公司：XX快递\r\n运单号码：688799879976667889\r\n快递员手机：13588689990\r\n取件地址：XX小区3号门\r\n感谢您的使用。',
    modify_time: '2017-05-27 19:33:03'
  },
  {
    id: 'OPENTM410691241',
    title: '派件滞留提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n运单号码：{{keyword1.DATA}}\n收件人姓名：{{keyword2.DATA}}\n收件人电话：{{keyword3.DATA}}\n包裹放置地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您派往XX小区XX快递柜的包裹已滞留X天，请联系收件人取件。\r\n运单号码：688799879976667889\r\n收件人姓名：王小二\r\n收件人电话：13588689990\r\n包裹放置地址：XX小区3号门\r\n谢谢。',
    modify_time: '2017-05-24 17:54:48'
  },
  {
    id: 'OPENTM410608742',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n上门时间：{{keyword1.DATA}}\n客户电话：{{keyword2.DATA}}\n客户地址：{{keyword3.DATA}}\n师傅姓名：{{keyword4.DATA}}\n师傅电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的安装订单，师傅已经接单\r\n上门时间：2017-05-18\r\n客户电话：1380000000\r\n客户地址：福建莆田\r\n师傅姓名：林师傅\r\n师傅电话：1380000000\r\n如有紧急情况，可直接联系师傅',
    modify_time: '2017-05-19 10:56:35'
  },
  {
    id: 'OPENTM410657293',
    title: '报修处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有新的报修订单等待派发，请及时处理！\r\n联系人：张三\r\n联系电话：13800011111\r\n报修内容：AA大厦1501中央空调不制冷\r\n报修时间：2015年1月22日 21:39\r\n详情请登录善云物管家公众号查看！',
    modify_time: '2017-05-22 17:07:48'
  },
  {
    id: 'OPENTM410928695',
    title: '缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n用户姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n取暖费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，请您尽快缴纳本年度取暖费。\r\n用户姓名：李四\r\n地址：3号楼1单元1502室\r\n取暖费金额：1000元\r\n请尽快缴纳，如有疑问请及时咨询。',
    modify_time: '2017-06-13 15:09:35'
  },
  {
    id: 'OPENTM410943799',
    title: '兑付账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n店铺地址：{{keyword2.DATA}}\n兑付周期：{{keyword3.DATA}}\n兑付金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的业主**，您本期的兑付账单通知函已生成\r\n业主姓名：张三\r\n店铺地址：云台路***号\r\n兑付周期：2017年1月-2017年9月\r\n兑付金额：70736.78\r\n感谢您的支持',
    modify_time: '2017-06-14 11:44:19'
  },
  {
    id: 'OPENTM411211754',
    title: '住户审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的住户：  有住户申请绑定到你的房屋，请确认并审核。申请人信息如下：\r\n姓名：杨波\r\n地址：金色黎明1栋1单元101\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2017-07-03 16:35:47'
  },
  {
    id: 'OPENTM411223106',
    title: '解约处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n租客姓名：{{keyword1.DATA}}\n解约日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '请及时处理以下事项\r\n租客姓名：张三\r\n解约日期：2015-09-01\r\n请管家及时办理',
    modify_time: '2017-07-04 11:00:02'
  },
  {
    id: 'OPENTM411244209',
    title: '建议反馈提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n编号：{{keyword1.DATA}}\n内容：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n建议人：{{keyword4.DATA}}\n电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好！佳苑小区有一条建议\r\n编号：5000\r\n内容：建议修个游泳池\r\n房号：JY010101\r\n建议人：张三\r\n电话：15312345678\r\n点击查看详情',
    modify_time: '2017-07-05 15:47:10'
  },
  {
    id: 'OPENTM411164963',
    title: '投诉处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n编号：{{keyword1.DATA}}\n内容：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n投诉人：{{keyword4.DATA}}\n电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好！佳苑小区有一条投诉\r\n编号：500\r\n内容：小区蚊虫太多\r\n房号：JY010101\r\n投诉人：张三\r\n电话：15312345678\r\n点击查看详情',
    modify_time: '2017-06-30 11:25:25'
  },
  {
    id: 'OPENTM411228213',
    title: '认证结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n认证信息：{{keyword1.DATA}}\n认证房屋信息：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的认证信息如下：\r\n认证信息：审核通过\r\n认证房屋信息：海陵区一号区1-101室\r\n有疑问，请至【意见反馈】中提交。',
    modify_time: '2017-07-04 15:55:24'
  },
  {
    id: 'OPENTM411229670',
    title: '门禁通行提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n卡号：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '门禁通行提醒\r\n姓名：张三\r\n卡号：9999\r\n时间：2015年9月29日 20:21\r\n感谢您的使用，祝您生活愉快！',
    modify_time: '2017-07-04 17:00:30'
  },
  {
    id: 'OPENTM411244070',
    title: '维修进展状态提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n维修事项：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，你的报修我们已派工程师处理了\r\n维修事项：厨卫坏了，上门维修\r\n状态：已处理\r\n时间：2017年07月5日\r\n您好，我们工程师正在处理',
    modify_time: '2017-07-05 15:36:05'
  },
  {
    id: 'OPENTM411421372',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您已成功缴纳物业管理费\r\n房号：1栋5单元502\r\n缴费金额：200元\r\n缴费时间：2014年7月21日 18:36\r\n感谢你的使用。',
    modify_time: '2017-07-17 14:16:10'
  },
  {
    id: 'OPENTM411228225',
    title: '意见反馈通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n反馈内容：{{keyword1.DATA}}\n意见处理结果：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的反馈已收到。\r\n反馈内容：房屋登记错误\r\n意见处理结果：已处理，请重新申请\r\n感谢您的热心反馈。',
    modify_time: '2017-07-04 15:55:35'
  },
  {
    id: 'OPENTM411227630',
    title: '预约审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n申请内容：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n申请人：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好！您有待审核的访问申请\r\n申请内容：预约使用设备0039\r\n预约时间：2017-03-28到2017-04-05\r\n申请人：张某某\r\n申请时间：2017-3-28 10:50\r\n请于1天内审核，逾期不效',
    modify_time: '2017-07-04 15:31:13'
  },
  {
    id: 'OPENTM411227282',
    title: '缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 32,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n物业名称：{{keyword2.DATA}}\n缴费总金额：{{keyword3.DATA}}\n费用列表：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '2017年6月份缴费通知\r\n业主姓名：张三\r\n物业名称：英煌新座5座一单元202\r\n缴费总金额：5080元\r\n费用列表：租金：200；广告使用税:80;土地使用税:880;水费(上期度数:100,今期度数：180，实用度数:80)：800\r\n敬请您于2017年6月1日前将上述费用及时存到指定的扣费账户中,如逾期不缴付者，我司将按有关协议条款执行处罚如有疑问，请拨打服务热线4008888888，地址**省**市**区',
    modify_time: '2017-07-04 15:10:38'
  },
  {
    id: 'OPENTM411227432',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 47,
    content: '{{first.DATA}}\n审核结果：{{keyword1.DATA}}\n审核时间：{{keyword2.DATA}}\n备注：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的申请审核结果如下\r\n审核结果：通过\r\n审核时间：2015年8月12日\r\n备注：审核已经通过，请耐心等待\r\n如果有疑问，请联系客服020-12345678',
    modify_time: '2017-07-04 15:18:50'
  },
  {
    id: 'OPENTM411340333',
    title: '付款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n维修付款事项：{{keyword1.DATA}}\n金额：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，你已经付款成功\r\n维修付款事项：厨卫维修\r\n金额：100元\r\n时间：2017年7月6日\r\n感谢你的付款，请进行服务评价',
    modify_time: '2017-07-11 15:24:06'
  },
  {
    id: 'OPENTM411067686',
    title: '订单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 33,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n服务项目：{{keyword2.DATA}}\n订单状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您预约的服务项目，服务人员已出发，请安排人员在家等待！\r\n订单编号：01000020000000119\r\n服务项目：管道疏通\r\n订单状态：服务人员已出发\r\n感谢您的支持，如果有任何问题请拨打24小时客服热线 4008-812-810咨询',
    modify_time: '2017-06-23 17:01:44'
  },
  {
    id: 'OPENTM411340336',
    title: '申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 35,
    content: '{{first.DATA}}\n维修事项：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n申请电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，报修申请成功\r\n维修事项：厨卫报修\r\n申请人：张三\r\n申请电话：13000000000\r\n申请时间：2017年7月4日 18\r\n您提交的报修申请已被客服处理审核，我们会及时联系您，谢谢',
    modify_time: '2017-07-11 15:24:16'
  },
  {
    id: 'OPENTM411067687',
    title: '报名结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您报名的活动即将开始，请注意参加哦！\r\n姓名：张三\r\n电话：13333333333\r\n时间：2015年1月1日 15:30\r\n结果：报名成功\r\n点击查看详情（跳转到我的活动界面）',
    modify_time: '2017-06-23 17:01:53'
  },
  {
    id: 'OPENTM411122991',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 24,
    content: '{{first.DATA}}\n顾客姓名：{{keyword1.DATA}}\n顾客电话：{{keyword2.DATA}}\n预约项目：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n其他信息：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您已预约成功，预约信息如下\r\n顾客姓名：潘先生\r\n顾客电话：13978231111\r\n预约项目：地面维修\r\n预约时间：2016-09-01 13:00:00\r\n其他信息：服务需求\r\n 如果有任何问题请拨打24小时客服热线 4008-812-810咨询',
    modify_time: '2017-06-27 16:57:50'
  },
  {
    id: 'OPENTM411327891',
    title: '缴费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n水表号：{{keyword1.DATA}}\n截止码：{{keyword2.DATA}}\n总用量：{{keyword3.DATA}}\n交费日期：{{keyword4.DATA}}\n合计金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您本次交费成功！\r\n水表号：13101\r\n截止码：86\r\n总用量：25吨\r\n交费日期：2017年7月10日\r\n合计金额：61.5元\r\n感谢您的使用！',
    modify_time: '2017-07-10 16:41:15'
  },
  {
    id: 'OPENTM411289793',
    title: '物业费用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '费用通知\r\n姓名：张三\r\n房号：1-2-101\r\n金额：888\r\nXX物业公司，电话：88888888',
    modify_time: '2017-07-07 14:54:31'
  },
  {
    id: 'OPENTM411212344',
    title: '报修处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您已成功提交报修服务工单\r\n报修内容：香山里8九栋8楼走廊灯不亮,联系人潘XX，电话13700021111\r\n日期：2017-06-10 12:23:12\r\n我们会尽快安排处理，如果有任何问题请拨打24小时客服热线 4008-812-810',
    modify_time: '2017-07-03 17:08:17'
  },
  {
    id: 'OPENTM411545650',
    title: '故障通报通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n故障地点：{{keyword1.DATA}}\n故障现象：{{keyword2.DATA}}\n故障时间：{{keyword3.DATA}}\n工单状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '请注意\r\n故障地点：A大厦22层\r\n故障现象：电梯坏了\r\n故障时间：2017-07-26\r\n工单状态：未派单状态\r\n请调度人员处理工单',
    modify_time: '2017-07-26 16:16:54'
  },
  {
    id: 'OPENTM411517652',
    title: '房租账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 20,
    content: '{{first.DATA}}\n租户：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n缴费周期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客您好，本期的房租账单已产生：\r\n租户：张三\r\n房间：XX小区 A5栋1101房\r\n缴费周期：2017-07-01至2017-07-31\r\n如有疑问，可致电客服电话：13512345678',
    modify_time: '2017-07-24 16:22:03'
  },
  {
    id: 'OPENTM411655106',
    title: '注册成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n账号：{{keyword1.DATA}}\n日期：{{keyword2.DATA}}\n注册礼：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好！您已成功注册\r\n账号：13988888888\r\n日期：2015年6月13日\r\n注册礼：情侣杯一个\r\n请联系客服（400-1231-123）领取您的礼品，祝您生活愉快！',
    modify_time: '2017-08-03 16:41:07'
  },
  {
    id: 'OPENTM411671258',
    title: '注册成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n会员号：{{keyword1.DATA}}\n日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好！您已注册成功！\r\n会员号：1123456\r\n日期：2017年08月04日\r\n祝您生活愉快！',
    modify_time: '2017-08-04 17:56:29'
  },
  {
    id: 'OPENTM411517310',
    title: '来访申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n来访时间：{{keyword1.DATA}}\n来访房号：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，欢迎您到访我的家园。\r\n来访时间：2017年7月20日 11:00\r\n来访房号：301室\r\n如有问题，请质询！',
    modify_time: '2017-07-24 15:56:29'
  },
  {
    id: 'OPENTM411626461',
    title: '会议开始通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n预订人：{{keyword1.DATA}}\n预订时间：{{keyword2.DATA}}\n预订地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '会议即将开始, 记得准备哦 ...\r\n预订人：陈倩\r\n预订时间：2017-07-31 09:00-10:30 \r\n预订地点：一层S101会议室\r\n如有疑问, 请咨询一楼前台妹子',
    modify_time: '2017-08-01 15:53:24'
  },
  {
    id: 'OPENTM411545262',
    title: '绑定到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n绑定状态：{{keyword2.DATA}}\n房屋号：{{keyword3.DATA}}\n到期时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您绑定的房间已到期\r\n姓名：蔡强\r\n绑定状态：已过期\r\n房屋号：百瑞达大厦13楼1307\r\n到期时间：2017年7月25日\r\n点击可重新申请绑定该房屋',
    modify_time: '2017-07-26 15:55:47'
  },
  {
    id: 'OPENTM411626464',
    title: '预订取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n会员姓名：{{keyword1.DATA}}\n预订时间：{{keyword2.DATA}}\n预订地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您预订的会议室已经成功取消\r\n会员姓名：陈倩\r\n预订时间：2017-07-31 09:00-10:30\r\n预订地点：一层S101会议室\r\n如有疑问, 请咨询一层前台妹子~',
    modify_time: '2017-08-01 15:54:26'
  },
  {
    id: 'OPENTM411611515',
    title: '房租账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n房间名称：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好,您本月的房租如下\r\n房间名称：桃园西村7巷502\r\n账单周期：2016-07\r\n账单金额：3000人民币\r\n请与3天之内联系房东交租。',
    modify_time: '2017-07-31 15:05:01'
  },
  {
    id: 'OPENTM411721665',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n消费金额：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '支付成功\r\n消费金额：维修费18元\r\n时间：2017年8月8日\r\n 谢谢惠顾。',
    modify_time: '2017-08-08 16:27:48'
  },
  {
    id: 'OPENTM411449868',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n费用周期：{{keyword2.DATA}}\n缴费类型：{{keyword3.DATA}}\n金额：{{keyword4.DATA}}\n缴费时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已成功缴费！\r\n房号：1栋1单元502\r\n费用周期：2017.04至2017.06\r\n缴费类型：预存款\r\n金额：144.54\r\n缴费时间：2014年7月21日 18:36\r\n感谢你的使用。',
    modify_time: '2017-07-19 15:50:17'
  },
  {
    id: 'OPENTM411436420',
    title: '意见反馈提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 33,
    content: '{{first.DATA}}\n提出人：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n住址：{{keyword3.DATA}}\n内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好！您的管理区域内有客户提出意见反馈！\r\n提出人：朱大壮\r\n时间：2017-07-18 13:15:15\r\n住址：珠江御景湾A16栋3301\r\n内容：A16栋楼下下雨天容易积水，需要及时 \t做好排水和防滑工作。\r\n请尽快处理回复客户的意见反馈。',
    modify_time: '2017-07-18 15:52:42'
  },
  {
    id: 'OPENTM411612982',
    title: '报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n租户信息：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的报修信息已经受理成功。\r\n租户信息：房间号1701\r\n状态：已完成\r\n时间：2017年7月31日 12:30\r\n感谢您的使用',
    modify_time: '2017-07-31 16:21:43'
  },
  {
    id: 'OPENTM411669235',
    title: '车辆缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费类型：{{keyword3.DATA}}\n缴费时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，车辆管理费缴费成功\r\n车牌号：京A88888\r\n缴费金额：100\r\n缴费类型：按月计费\r\n缴费时间：2017年8月4日 11:53\r\n感谢你的使用',
    modify_time: '2017-08-04 16:21:33'
  },
  {
    id: 'OPENTM411517836',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n审核结果：{{keyword1.DATA}}\n审核时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您发布的户型审核完毕。\r\n审核结果：已通过\r\n审核时间：2017-07-20\r\n秒租对您发布的房源已审核，请登录www.omiaozu.com查看房源详情，如有疑问，请咨询4001389996。',
    modify_time: '2017-07-24 16:33:13'
  },
  {
    id: 'OPENTM411628137',
    title: '缴费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n账单周期：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n收缴人：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好。您3月的物业管理费已缴清。\r\n账单周期：2017-07-01~2017-08-01\r\n缴费金额：1200.00元\r\n缴费时间：2016-05-12 12:23:15\r\n收缴人：王某\r\n如有任何问题，请拨打物业客服热线 134545646。',
    modify_time: '2017-08-01 17:14:18'
  },
  {
    id: 'OPENTM411628142',
    title: '电费账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n计量用电：{{keyword1.DATA}}\n应缴电费：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您在本小区房号为A001的电费账单已出。\r\n计量用电：100度\r\n应缴电费：50元\r\n您可点此微信支付，也可到物业服务处缴纳。 如有任何问题，请拨打XXX物业客服热线 134545646。',
    modify_time: '2017-08-01 17:14:27'
  },
  {
    id: 'OPENTM411793546',
    title: '工单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n进度：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好：\r\n单号：WX123126785614\r\n进度：您的问题已由[董丽华]接单，请耐心等待\r\n时间：2017-08-11 14:13\r\n联系电话：40010081008\r\n感谢您对物业公司的大力支持',
    modify_time: '2017-08-11 15:05:30'
  },
  {
    id: 'OPENTM411706147',
    title: 'Offer提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n所属公司：{{keyword1.DATA}}\n入职职位：{{keyword2.DATA}}\n入职日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: 'XXX，恭喜您收到了offer\r\n所属公司：XXX\r\n入职职位：XXX\r\n入职日期：XXXX年XX月XX日    XX：XX\r\n记得准时报到，有特殊情况及时沟通。',
    modify_time: '2017-08-07 15:11:14'
  },
  {
    id: 'OPENTM411628199',
    title: '物业账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n物业费应缴：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您3月物业费账单已出\r\n物业费应缴：50元\r\n地址：枫景园7栋101\r\n您可点此微信支付，也可到物业服务处缴纳。 如有任何问题，请拨打XXX物业客服热线 134545646。',
    modify_time: '2017-08-01 17:16:48'
  },
  {
    id: 'OPENTM412117951',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 82,
    content: '{{first.DATA}}\n缴费时间：{{keyword1.DATA}}\n缴费方式：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好，户号012****789（地址：xxx）当期缴费成功信息如下：\r\n缴费时间：2014-01-22 15:40:29 \r\n缴费方式：银行代扣\r\n缴费金额：100元 \r\n注：此信息非扣款后实时发送，仅供参考。',
    modify_time: '2017-08-31 14:43:41'
  },
  {
    id: 'OPENTM412195155',
    title: '服务反馈通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n申请单元：{{keyword1.DATA}}\n服务类型：{{keyword2.DATA}}\n当前状态：{{keyword3.DATA}}\n处理日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主/租户，您有新的物业服务反馈信息。\r\n申请单元：A678\r\n服务类型：楼梯照明\r\n当前状态：已完成\r\n处理日期：2017年8月9日 8:16:00\r\n您提交的服务内容已完成，点击此消息查看，并请对我们的服务作出评价，谢谢！',
    modify_time: '2017-09-05 15:58:49'
  },
  {
    id: 'OPENTM411882307',
    title: '兑换成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n订单详情：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的礼品已经兑换成功\r\n订单号：190000239999420\r\n订单详情：收货信息 张三 手机号 13900023222 地址 广东省深圳市南山区XX小区XX号\r\n时间：2017.8.17 14:40\r\n您的兑换的礼品将在2天内发出，有疑问请咨询客服。谢谢！',
    modify_time: '2017-08-17 16:41:57'
  },
  {
    id: 'OPENTM411834861',
    title: '工单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 21,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n进度：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好：\r\n单号：WX102708005\r\n进度：您的问题已由[董丽]办结，处理结果为[已完成]\r\n时间：2017-08-11 16:40\r\n联系电话：13333333333\r\n感谢您对物业公司的大力支持',
    modify_time: '2017-08-14 15:13:00'
  },
  {
    id: 'OPENTM411881062',
    title: '积分增加失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n申请积分金额：{{keyword2.DATA}}\n消费商户：{{keyword3.DATA}}\n审核状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的会员，很抱歉通知您，您参与“自助积分”的消费凭证未审核通过。\r\n申请时间：2017年08月09日\r\n申请积分金额：300元\r\n消费商户：小马零食\r\n审核状态：未通过\r\n如有问题请您致电XXX客服中心XXX-XXXX进行咨询。最后再次感谢您的支持。',
    modify_time: '2017-08-17 15:31:10'
  },
  {
    id: 'OPENTM412117814',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n提交单位：{{keyword1.DATA}}\n提交时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，有一条报修信息需要处理！\r\n提交单位：17楼1711\r\n提交时间：2017-08-29 18:01:01\r\n感谢你的使用。',
    modify_time: '2017-08-31 14:31:02'
  },
  {
    id: 'OPENTM412133565',
    title: '供水恢复提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n恢复供水时间：{{keyword1.DATA}}\n恢复供水区域：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '井岸镇恢复供水通知\r\n恢复供水时间：预计25日中午区域内所有用户均可恢复供水\r\n恢复供水区域：井岸镇主城区\r\n25日中午，区域内所有用户均可恢复供水。给您带来的不便，敬请谅解。',
    modify_time: '2017-09-01 14:44:42'
  },
  {
    id: 'OPENTM412118969',
    title: '未交水费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n用水地址：{{keyword1.DATA}}\n未交水费：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的10000001（南京市秦淮区中山东路10号）用水客户，您当前未交水费信息如下：\r\n用水地址：南京市秦淮区中山东路10号\r\n未交水费：￥120.00\r\n由于数据存在延迟，如您未交费请及时交纳，如您已交费请忽略本次提醒，给您带来不便敬请谅解。',
    modify_time: '2017-08-31 15:56:11'
  },
  {
    id: 'OPENTM412093520',
    title: '门禁异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n公寓名称：{{keyword1.DATA}}\n提醒时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '门禁已经5小时无开门记录！\r\n公寓名称：魔方公寓\r\n提醒时间：2017年8月26日\r\n请及时检查门禁是否关闭',
    modify_time: '2017-08-29 19:00:47'
  },
  {
    id: 'OPENTM411882321',
    title: '发货通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n快递单号：{{keyword1.DATA}}\n发货信息：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的礼品已发货成功。\r\n快递单号：19002388994\r\n发货信息：韵达快递 李先生 13200839921 广东省广州市天河区XX小区X号\r\n时间：2017.8.17 15:02\r\n货运进度请使用单号查询，有疑问请咨询客服。谢谢！',
    modify_time: '2017-08-17 16:42:21'
  },
  {
    id: 'OPENTM412133571',
    title: '低压供水提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n低压供水时间：{{keyword1.DATA}}\n低压供水区域：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '因迎宾路道路提质改造损坏供水主管\r\n低压供水时间：8月18日17:00-8月18日24:00\r\n低压供水区域：迎宾路及龙泉大道两边供水区域\r\n我司正在抢修，力争尽快修复，望广大用户谅解。',
    modify_time: '2017-09-01 14:45:00'
  },
  {
    id: 'OPENTM412093523',
    title: '门禁异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n公寓名称：{{keyword1.DATA}}\n提醒时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '门禁已经5小时无开门记录！\r\n公寓名称：魔方公寓\r\n提醒时间：2017年8月26日\r\n请及时检查门禁是否关闭',
    modify_time: '2017-08-29 19:00:47'
  },
  {
    id: 'OPENTM412118936',
    title: '水费账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n用户编号：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n用户地址：{{keyword3.DATA}}\n计费年月：{{keyword4.DATA}}\n抄表水量：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期水费信息如下\r\n用户编号：12345678\r\n用户名称：张三四\r\n用户地址：和平路12号\r\n计费年月：201604\r\n抄表水量：15.00\r\n水费金额：19.5元 垃圾费金额：22元 排污费金额：10.8元 合计金额：52.3元 如有疑问，请致电水务热线：2828226。',
    modify_time: '2017-08-31 15:54:21'
  },
  {
    id: 'OPENTM411863941',
    title: '商户审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n审核类型：{{keyword1.DATA}}\n审核时间：{{keyword2.DATA}}\n审核状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的商户店铺审核通过\r\n审核类型：发券审核\r\n审核时间：2017-8-16\r\n审核状态：通过\r\n感谢您的使用。',
    modify_time: '2017-08-16 11:06:48'
  },
  {
    id: 'OPENTM412075842',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n支付类型：{{keyword1.DATA}}\n支付金额：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您已缴纳物业费200元，详情如下：\r\n支付类型：物业费\r\n支付金额：200元\r\n支付时间：2017年8月23日 14:00\r\n感谢您的使用。',
    modify_time: '2017-08-28 14:46:25'
  },
  {
    id: 'OPENTM412103593',
    title: '房屋配置完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n所属管家：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的房屋已配置完成\r\n物业地址：福新华府1202\r\n所属管家：陈成\r\n感谢您的使用',
    modify_time: '2017-08-30 14:37:12'
  },
  {
    id: 'OPENTM412117895',
    title: '停水通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n停水类型：{{keyword1.DATA}}\n停水时间：{{keyword2.DATA}}\n停水区域：{{keyword3.DATA}}\n{{remark.DATA}}',
    example:
      '【西樵】官山江浦路DN400管网维修，需要对供水管道阀门进行更换\r\n停水类型：计划停水\r\n停水时间：2016年7月17日凌晨00:00至7月17日上午8:00\r\n停水区域：西樵官山江浦东路马头岗红绿灯至江浦西路凰樵假日段以北 ，包括官山江浦路以北片区、新纪元、大泵站宿舍、长堤路、沿江路、富盛广场、金龙大厦、坑边村、汇泉花园、新风路、云梯东街、第一城、金龙花园、佛山市第五人民医院、樵园山庄等\r\n因官山江浦路DN400管网维修，需要对供水管道阀门进行更换，现需进行停水接驳。施工期间将对附近周边用户供水造成影响，若由于天气原因或不可预见因素导致恢复供水时间提前或延后，敬请谅解。请广大受影响用户提前储备用水，由此对相关用户生活和生产带来的不便，深表歉意！ 客服热线：0757-86399222',
    modify_time: '2017-08-31 14:38:18'
  },
  {
    id: 'OPENTM412195145',
    title: '服务申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n申请单元：{{keyword1.DATA}}\n服务类型：{{keyword2.DATA}}\n服务内容：{{keyword3.DATA}}\n提交时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的服务通知！\r\n申请单元：小区花园5栋109\r\n服务类型：报修\r\n服务内容：主卧墙面开裂\r\n提交时间：2017年1月22日 21:39:22\r\n点击此消息查看详情以及尽快处理！',
    modify_time: '2017-09-05 15:58:17'
  },
  {
    id: 'OPENTM412119597',
    title: '反馈信息提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 28,
    content: '{{first.DATA}}\n信息类型：{{keyword1.DATA}}\n提交日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的问题已经提交。\r\n信息类型：投诉建议\r\n提交日期：2015年6月29日 10:55\r\n我们的工作人员会尽快跟进您的问题，请耐心等候。',
    modify_time: '2017-08-31 16:30:29'
  },
  {
    id: 'OPENTM412135547',
    title: '报修处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n详细地址：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'xxx师傅，您有一份新的维修任务\r\n住户姓名：雷猴杜\r\n联系电话：188xxxxxx1234\r\n预约时间：2017年9月1日 9：00至10:00\r\n报修内容：地板漏水\r\n详细地址：xxx小区1栋1单元601号房\r\n点击查看详情',
    modify_time: '2017-09-01 16:35:53'
  },
  {
    id: 'OPENTM412244701',
    title: '停车缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 19,
    content: '{{first.DATA}}\n到期时间：{{keyword1.DATA}}\n月卡租金：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的住户：  您的停车月卡即将到期，为避免影响您正常停车，请尽快进行缴费续租。如已缴费，请忽略此消息。\r\n到期时间：2017年9月30日\r\n月卡租金：¥300\r\n点击下方“详情”即进行缴费续租！',
    modify_time: '2017-09-08 15:11:54'
  },
  {
    id: 'OPENTM412358804',
    title: '密码重置提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n新密码：{{keyword1.DATA}}\n会员昵称：{{keyword2.DATA}}\n重置时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您在窝趣的密码已重置成功，信息如下：\r\n新密码：XXXYYY\r\n会员昵称：窝友ABC\r\n重置时间：2017-09-14 10:10:10\r\n为了您的账号安全，，请登录后在我的设置中重新修改密码！',
    modify_time: '2017-09-14 16:09:56'
  },
  {
    id: 'OPENTM412565809',
    title: '交易结果提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n交易卡号：{{keyword1.DATA}}\n交易订单：{{keyword2.DATA}}\n交易金额：{{keyword3.DATA}}\n交易时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '最新交易结果消息提醒！\r\n交易卡号：尾号0009\r\n交易订单：NO000000001\r\n交易金额：100元\r\n交易时间：2017年9月25日\r\n交易已成功!感谢您的使用。',
    modify_time: '2017-09-26 20:15:46'
  },
  {
    id: 'OPENTM412358811',
    title: '下单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n服务内容：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的订单正在分配工人，请稍候\r\n服务内容：吊灯安装等\r\n预约时间：2016-05-15\r\n请保持联系手机畅通',
    modify_time: '2017-09-14 16:10:58'
  },
  {
    id: 'OPENTM412597913',
    title: '客户接待通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n意向楼盘：{{keyword2.DATA}}\n接待人姓名：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您推荐的客户已分配接待！\r\n客户姓名：张三\r\n意向楼盘：楼盘名称XXX\r\n接待人姓名：李四\r\n时间：2017年9月26日 18:36\r\n点击查看详情&amp;gt;&amp;gt;',
    modify_time: '2017-09-28 15:59:56'
  },
  {
    id: 'OPENTM412497016',
    title: '交易成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n交易金额：{{keyword2.DATA}}\n交易类型：{{keyword3.DATA}}\n交易时间：{{keyword4.DATA}}\n账户余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '已成功支付停车费\r\n车牌号：桂KQ3322\r\n交易金额：5元\r\n交易类型：自动扣费\r\n交易时间：2017/9/21 12:48\r\n账户余额：5元\r\n温馨提示：因受网络影响，该信息可能有延迟。',
    modify_time: '2017-09-22 15:25:47'
  },
  {
    id: 'OPENTM412581219',
    title: '带看密码通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n大门密码：{{keyword2.DATA}}\n卧室密码：{{keyword3.DATA}}\n密码有效期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您已成功申请带看密码\r\n物业地址：同新嘉园12栋2单元1204\r\n大门密码：123456\r\n卧室密码：123456\r\n密码有效期：2小时\r\n请尽快内完成带看，密码过期失效。',
    modify_time: '2017-09-27 17:01:29'
  },
  {
    id: 'OPENTM412583226',
    title: '客户状态变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n意向楼盘：{{keyword2.DATA}}\n历史状态：{{keyword3.DATA}}\n当前状态：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的客户状态已变更！\r\n客户姓名：张三\r\n意向楼盘：碧桂园白鹭湾\r\n历史状态：待签约\r\n当前状态：待成交\r\n时间：2014年9月26日 18:13\r\n点击查看详情&amp;gt;&amp;gt;',
    modify_time: '2017-09-27 19:03:55'
  },
  {
    id: 'OPENTM412599076',
    title: '客户接待通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n到访时间：{{keyword3.DATA}}\n推荐人姓名：{{keyword4.DATA}}\n推荐人手机：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的接待任务！\r\n客户姓名：张三\r\n客户手机：151****1273\r\n到访时间：2017年9月26号\r\n推荐人姓名：李四\r\n推荐人手机：15101568888\r\n点击查看详情&amp;gt;&amp;gt;',
    modify_time: '2017-09-28 16:45:56'
  },
  {
    id: 'OPENTM412358831',
    title: '派单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n服务项目：{{keyword1.DATA}}\n服务时间：{{keyword2.DATA}}\n服务人员：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你的预约已派单\r\n服务项目：管道维修\r\n服务时间：2017-02-12 11:30:00\r\n服务人员：老王\r\n请保持手机畅通，我们的工作人员将尽快与您联系',
    modify_time: '2017-09-14 16:13:26'
  },
  {
    id: 'OPENTM412497132',
    title: '车辆离场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n入场时间：{{keyword2.DATA}}\n离场时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n停车费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已驶离*****停车场，欢迎您再次光临\r\n车牌号：桂A***86\r\n入场时间：2017/09/21 11：35：00\r\n离场时间：2017/09/21 11：50：00\r\n停车时长：25分钟\r\n停车费用：5元\r\n人人优泊温馨提示：因受网络影响，该信息可能有延迟。',
    modify_time: '2017-09-22 15:30:33'
  },
  {
    id: 'OPENTM412358834',
    title: '订单完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好，您的订单已完成\r\n订单号：201411290002356\r\n完成时间：11月29日，22:00\r\n如有任何疑问，请拨打：4008888888',
    modify_time: '2017-09-14 16:13:42'
  },
  {
    id: 'OPENTM412299135',
    title: '收到报名提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n报名人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报名时间：{{keyword3.DATA}}\n活动地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '收到新的活动报名信息\r\n报名人：李某某\r\n联系电话：135********\r\n报名时间：2017年9月11日 12:10\r\n活动地点：三楼路演大厅\r\n点击查看报名详情，请及时处理！',
    modify_time: '2017-09-11 14:59:38'
  },
  {
    id: 'OPENTM412814485',
    title: '发货通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n快递公司：{{keyword1.DATA}}\n快递单号：{{keyword2.DATA}}\n商品信息：{{keyword3.DATA}}\n商品数量：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，你的商品已发货\r\n快递公司：顺丰快递\r\n快递单号：88888888888\r\n商品信息：三星显示器\r\n商品数量：1\r\n请注意查收。',
    modify_time: '2017-10-13 15:37:04'
  },
  {
    id: 'OPENTM412497136',
    title: '车辆入场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n入场时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '欢迎您驶入*****停车场\r\n车牌号：桂A***86\r\n入场时间：2017/09/21 11:35:00\r\n人人优泊温馨提示：因受网络影响，该信息可能有延迟。',
    modify_time: '2017-09-22 15:30:46'
  },
  {
    id: 'OPENTM412499336',
    title: '预约参观通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n用户姓名：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n参观时间：{{keyword3.DATA}}\n参观空间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '收到用户预约参观通知\r\n用户姓名：李某\r\n联系电话：135*********\r\n参观时间：2017年9月22日 14:00\r\n参观空间：某某办公空间\r\n请及时和用户取得联系！',
    modify_time: '2017-09-22 17:26:21'
  },
  {
    id: 'OPENTM412582237',
    title: '投诉通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n投诉内容：{{keyword4.DATA}}\n投诉时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，有新的投诉单！\r\n客户姓名：张三\r\n联系方式：12345678\r\n房号：xx花园-1-1-201\r\n投诉内容：楼道有垃圾\r\n投诉时间：2017年09月26日 11点\r\n请您及时指派处理人处理，祝您生活愉快。',
    modify_time: '2017-09-27 17:53:19'
  },
  {
    id: 'OPENTM412481440',
    title: '水量异常通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n上期用水量：{{keyword1.DATA}}\n本期用水量：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，你的用水量明显增多\r\n上期用水量：70L\r\n本期用水量：123L\r\n本期用水量超过上期用水量的两倍了，感谢你的使用。',
    modify_time: '2017-09-21 17:23:30'
  },
  {
    id: 'OPENTM412813944',
    title: '下单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n商品名称：{{keyword1.DATA}}\n订单编号：{{keyword2.DATA}}\n支付金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单已支付成功！\r\n商品名称：三七粉\r\n订单编号：123456\r\n支付金额：888元\r\n感谢您的光临~',
    modify_time: '2017-10-13 15:16:25'
  },
  {
    id: 'OPENTM412499349',
    title: '工位预定通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n用户姓名：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n预定工位：{{keyword3.DATA}}\n预交订金：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '收到用户在线预定工位的通知\r\n用户姓名：李某\r\n联系电话：135**********\r\n预定工位：独立4人间，3F-002\r\n预交订金：400元\r\n用户在线预交订金成功，请及时处理！',
    modify_time: '2017-09-22 17:27:03'
  },
  {
    id: 'OPENTM413096503',
    title: '派单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n客户：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n服务：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您收到一个安装派单啦\r\n客户：林先生\r\n电话：0594\r\n地址：福建莆田\r\n时间：2014年7月21日 18:36\r\n服务：安装马桶\r\n请及时确认。',
    modify_time: '2017-10-31 16:57:51'
  },
  {
    id: 'OPENTM412866056',
    title: '巡检提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 50,
    content: '{{first.DATA}}\n项目：{{keyword1.DATA}}\n巡检点：{{keyword2.DATA}}\n计划时间：{{keyword3.DATA}}\n巡检责任人：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你有一个巡检任务待处理\r\n项目：江苏气象局\r\n巡检点：B座办公楼-3楼走廊\r\n计划时间：2017-10-15 8:00:00\r\n巡检责任人：张三，李四，王五\r\n请尽快处理，谢谢！',
    modify_time: '2017-10-16 15:55:20'
  },
  {
    id: 'OPENTM412817111',
    title: '停车缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n停车时长：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n支付时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '停车场缴费成功通知\r\n车牌号：苏BM975P\r\n停车场：江南大学\r\n停车时长：2小时5分\r\n缴费金额：3.0元\r\n支付时间：2017-09-28 10:40:21\r\n感谢使用xxx，请在15分钟内离开停车场！',
    modify_time: '2017-10-13 16:26:16'
  },
  {
    id: 'OPENTM413096511',
    title: '接单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n技师姓名：{{keyword1.DATA}}\n技师电话：{{keyword2.DATA}}\n联系时间：{{keyword3.DATA}}\n客户电话：{{keyword4.DATA}}\n客户地址：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的服务订单，技师接单啦！\r\n技师姓名：陈先生\r\n技师电话：0594\r\n联系时间：2017-01-01\r\n客户电话：0594\r\n客户地址：福建莆田\r\n紧急情况，请直接联系技师',
    modify_time: '2017-10-31 16:58:26'
  },
  {
    id: 'OPENTM412817821',
    title: '退租提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n退租类型：{{keyword2.DATA}}\n退租日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，改租客已经退租，请及时进行退租配置\r\n物业地址：同新嘉园13栋2单元1201-卧室01\r\n退租类型：退租\r\n退租日期：2018-09-01\r\n江寓，高品质租住生活',
    modify_time: '2017-10-13 16:36:52'
  },
  {
    id: 'OPENTM412877721',
    title: '设备告警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n详细内容：{{keyword1.DATA}}\n报单编号：{{keyword2.DATA}}\n报单事项：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n当前状态：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '设备告警提醒\r\n详细内容：米管家余粮存量不足三斤\r\n报单编号：米桶编号\r\n报单事项：余粮不足\r\n时间：2017-03-15 13-45-38\r\n当前状态：米管家剩余米量：2斤，当前温度：23℃。\r\n感谢您使用智能米管家。',
    modify_time: '2017-10-17 11:04:58'
  },
  {
    id: 'OPENTM412884971',
    title: '整改提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n项目：{{keyword1.DATA}}\n检查点：{{keyword2.DATA}}\n详情内容：{{keyword3.DATA}}\n整改责任人：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你有一个整改任务待处理\r\n项目：江苏气象局\r\n检查点：A座地下车库\r\n详情内容：雨天后，地下车库有大量积水\r\n整改责任人：张三，李四，王五\r\n请尽快处理，谢谢！',
    modify_time: '2017-10-17 19:16:40'
  },
  {
    id: 'OPENTM413116776',
    title: '满意度调查通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n维修内容：{{keyword2.DATA}}\n维修完成日期：{{keyword3.DATA}}\n工程师姓名：{{keyword4.DATA}}\n联系方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '感谢您选择e服务，请对如下服务内容做出点评\r\n维修单号：10000001\r\n维修内容：灯管\r\n维修完成日期：2017.10.30 17:00:10\r\n工程师姓名：张三\r\n联系方式：13585928776\r\n感谢您的配合，祝您生活愉快。',
    modify_time: '2017-11-01 16:14:00'
  },
  {
    id: 'OPENTM412895127',
    title: '购票成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n门票：{{keyword3.DATA}}\n金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您已购买门票成功。\r\n姓名：李某某\r\n电话：135*******2345\r\n门票：会议门票\r\n金额：25元\r\n感谢你的支持，请准时参会。',
    modify_time: '2017-10-18 14:49:40'
  },
  {
    id: 'OPENTM412866632',
    title: '服务呼叫提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n详细内容：{{keyword1.DATA}}\n服务类型：{{keyword2.DATA}}\n所属小区：{{keyword3.DATA}}\n反馈时间：{{keyword4.DATA}}\n反馈内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，米管家已远程呼叫送米\r\n详细内容：米管家已呼叫送米\r\n服务类型：厨房米生活\r\n所属小区：广州雅居乐中心\r\n反馈时间：2017-03-18 13:45:38\r\n反馈内容：您好，下单后，2小时后第一时间送上门。\r\n感谢您使用智能米管家！',
    modify_time: '2017-10-16 16:24:58'
  },
  {
    id: 'OPENTM412817685',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n停车时长：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n支付时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已成功缴费！以下是详细信息\r\n车牌号：闽D3450L\r\n停车场：万达A座停车场\r\n停车时长：44分钟\r\n缴费金额：35元\r\n支付时间：2017-03-12 12:23\r\n感谢使用酷泊车，离场剩余时间为２0分钟，超时未离场将重新计费',
    modify_time: '2017-10-13 16:29:31'
  },
  {
    id: 'OPENTM413080486',
    title: '预估清单确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n预估价格：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '维修预估清单待确认通知\r\n维修单号：0000000001\r\n预估价格：200元\r\n如有疑问，及时与现场工程师确认',
    modify_time: '2017-10-30 17:10:10'
  },
  {
    id: 'OPENTM412976437',
    title: '投诉处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一条投诉信息需要处理\r\n房间号：1713\r\n时间：2014年7月21日 18:36\r\n感谢你的帮助。',
    modify_time: '2017-10-23 16:35:36'
  },
  {
    id: 'OPENTM413095489',
    title: '停车缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n到期时间：{{keyword2.DATA}}\n月卡租金：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的住户：  您的停车月卡即将到期，为避免影响您正常停车，请尽快进行缴费续租。如已缴费，请忽略此消息。\r\n车牌号：辽B33122\r\n到期时间：2017年11月3日\r\n月卡租金：¥200\r\n点击下方“详情”即进行缴费续租！',
    modify_time: '2017-10-31 16:08:25'
  },
  {
    id: 'OPENTM413078090',
    title: '报修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n报修房号：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n完成日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的报修已经完成！\r\n报修房号：精准物业-1单元-2101\r\n报修主题：入户的灯不亮了\r\n完成日期：2017-10-29\r\n如您还有其它问题,可到物业公司前台反馈，感谢您的配合，祝您生活愉快！',
    modify_time: '2017-10-30 15:37:52'
  },
  {
    id: 'OPENTM412815791',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n活动名称：{{keyword1.DATA}}\n审核结果：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您发起的活动已审核\r\n活动名称：野炊\r\n审核结果：审核通过\r\n感谢您的使用，祝你生活愉快！',
    modify_time: '2017-10-13 16:20:17'
  },
  {
    id: 'OPENTM413116792',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n项目名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n招商人员姓名：{{keyword3.DATA}}\n联系方式：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好！您已成功预约看房，为您安排的招商人员信息如下：\r\n项目名称：虹桥园\r\n预约时间：2017.10.30 17:00:10\r\n招商人员姓名：张三\r\n联系方式：13585928776\r\n我们将尽快与您联系，请您保持电话畅通',
    modify_time: '2017-11-01 16:15:14'
  },
  {
    id: 'OPENTM413080494',
    title: '报修派工通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n工程师姓名：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n维修地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '物业报修派工通知\r\n维修单号：10000001\r\n工程师姓名：张三\r\n联系方式：13585928776\r\n维修地址：room 202\r\n已安排张三上门服务，联系电话13585928776，如有疑问，请联系客服。',
    modify_time: '2017-10-30 17:10:23'
  },
  {
    id: 'OPENTM412881045',
    title: '维修处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n报修时间：{{keyword1.DATA}}\n报修范围：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '维修通知\r\n报修时间：2017年10月12日\r\n报修范围：幸福小区1#301\r\n您好！您所报修的1号楼1T3楼电梯门损坏的情况已经处理，谢谢您对我们工作的支持！',
    modify_time: '2017-10-17 15:34:18'
  },
  {
    id: 'OPENTM413080395',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n会议室：{{keyword3.DATA}}\n设备调试人员：{{keyword4.DATA}}\n联系方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已成功预约会议室\r\n订单编号：10000001\r\n预约时间：2017.10.30 17:00:10\r\n会议室：room 202\r\n设备调试人员：张三\r\n联系方式：13585299882\r\n请提前30分钟签到确认',
    modify_time: '2017-10-30 17:04:23'
  },
  {
    id: 'OPENTM413582900',
    title: '设备检查提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n设备名称：{{keyword1.DATA}}\n检查时间：{{keyword2.DATA}}\n检查周期：{{keyword3.DATA}}\n当前状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '目前共有5个设备未按规定检查，包括但不限于：\r\n设备名称：5号楼1单元电梯\r\n检查时间：2017年3月28日 10:16:00\r\n检查周期：每2天/次\r\n当前状态：逾期未检查(2天)\r\n点击此消息查看详细列表！',
    modify_time: '2017-11-28 19:03:43'
  },
  {
    id: 'OPENTM413251253',
    title: '服务进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n预约单号：{{keyword1.DATA}}\n服务类型：{{keyword2.DATA}}\n上门地址：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您已提交服务申请\r\n预约单号：171107123\r\n服务类型：厨卫安装\r\n上门地址：福建莆田\r\n预约时间：2017-11-07 10:00:00\r\n我们会尽快联系您，请保持手机畅通',
    modify_time: '2017-11-07 19:12:02'
  },
  {
    id: 'OPENTM413386706',
    title: '停车缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n车场名称：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n停车费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '缴费成功!\r\n车牌号码：粤B9W123\r\n车场名称：深圳璞悦山停车场\r\n入场时间：2017-11-14 10:14\r\n停车时长：1小时23分钟\r\n停车费用：5.0元\r\n缴费后15分钟内免费出场，超时将继续计算停车费用。',
    modify_time: '2017-11-15 17:06:01'
  },
  {
    id: 'OPENTM413675608',
    title: '充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n使用期止日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好\r\n车牌号码：沪DM2217\r\n使用期止日期：2017年12月20日\r\n感谢你的使用',
    modify_time: '2017-12-05 17:54:38'
  },
  {
    id: 'OPENTM413232359',
    title: '维修处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n业主验房：{{keyword1.DATA}}\n事项：{{keyword2.DATA}}\n位置：{{keyword3.DATA}}\n报修人：{{keyword4.DATA}}\n电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '中建小区\r\n业主验房：12栋\r\n事项：漏水\r\n位置：12-1203\r\n报修人：王五\r\n电话：15312345678\r\n点击查看详情',
    modify_time: '2017-11-06 15:09:07'
  },
  {
    id: 'OPENTM413403761',
    title: '工作待办通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n工作类别：{{keyword1.DATA}}\n推送人：{{keyword2.DATA}}\n推送时间：{{keyword3.DATA}}\n巡检点：{{keyword4.DATA}}\n责任人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有以下工作需要完成：\r\n工作类别：递送材料\r\n推送人：张爱玲\r\n推送时间：2017-11-14\r\n巡检点：江苏气象局\r\n责任人：张素芳\r\n请尽快处理，谢谢！',
    modify_time: '2017-11-16 18:06:30'
  },
  {
    id: 'OPENTM413675611',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车时长：{{keyword2.DATA}}\n停车费用：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好\r\n车牌号码：沪DM2217\r\n停车时长：2小时\r\n停车费用：22元\r\n感谢你的使用',
    modify_time: '2017-12-05 17:54:57'
  },
  {
    id: 'OPENTM413583614',
    title: '设备报警通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n报警时间：{{keyword1.DATA}}\n报警位置：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '张三，您好\r\n报警时间：2017-01-01 12:00\r\n报警位置：东吴小区71幢301卧室烟感\r\n服务器收到您家联网设备报警信号，请您及时关注',
    modify_time: '2017-11-28 19:28:01'
  },
  {
    id: 'OPENTM413237365',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单总额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月租金账单已生成。\r\n客户名称：深圳市前海爱创资产管理有限公司\r\n账单周期：2017年10月\r\n账单总额：20009.99\r\n感谢您的配合',
    modify_time: '2017-11-06 20:03:59'
  },
  {
    id: 'OPENTM413492867',
    title: '监控结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n系统能效EER：{{keyword1.DATA}}\n系统用电量：{{keyword2.DATA}}\n主机用电量：{{keyword3.DATA}}\n系统节约用电量：{{keyword4.DATA}}\n室外平均气温：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的冷站查询运行结果如下：\r\n系统能效EER：4.32\r\n系统用电量：4321kWh\r\n主机用电量：1234kWh\r\n系统节约用电量：234kWh\r\n室外平均气温：32℃\r\n感谢您的使用。',
    modify_time: '2017-11-22 15:52:28'
  },
  {
    id: 'OPENTM413117170',
    title: '账单支付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n订单编号：{{keyword2.DATA}}\n维修价格：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您本次的维修账单已确认\r\n维修单号：1000001\r\n订单编号：1000002\r\n维修价格：200元\r\n请尽快缴纳，如有疑问，请咨询134545646',
    modify_time: '2017-11-01 16:33:32'
  },
  {
    id: 'OPENTM413147226',
    title: '报修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 32,
    content: '{{first.DATA}}\n报修地址：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n维修人员：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报修已完成\r\n报修地址：1号楼202\r\n报修内容：水管破裂\r\n维修人员：刘某某\r\n完成时间：2017年1月1日 09:00:00\r\n请对我们的工作进行评价',
    modify_time: '2017-11-03 15:46:11'
  },
  {
    id: 'OPENTM413615878',
    title: '报名成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n报名人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n活动时间：{{keyword3.DATA}}\n活动地点：{{keyword4.DATA}}\n活动门票：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您已报名参加了某某活动。\r\n报名人：李某某\r\n联系电话：135***********\r\n活动时间：2017年11月29日 15:00\r\n活动地点：三楼大厅\r\n活动门票：免费\r\n感谢你的支持，请准时参会。',
    modify_time: '2017-11-30 16:31:29'
  },
  {
    id: 'OPENTM413159584',
    title: '新报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报修地址：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修项目待处理\r\n联系人：刘某\r\n联系电话：13800138000\r\n报修地址：行政楼101\r\n报修内容：打印机故障\r\n报修时间：2017-01-01 14:30:03\r\n请尽快处理！',
    modify_time: '2017-11-03 17:03:18'
  },
  {
    id: 'OPENTM413630536',
    title: '客户进场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n进场时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '欢迎进入e通世界停车场\r\n车牌号码：沪DF1331\r\n进场时间：2017.12.01 9:00:10\r\n停车愉快',
    modify_time: '2017-12-01 16:44:23'
  },
  {
    id: 'OPENTM413234488',
    title: '收款提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n帐户名称：{{keyword1.DATA}}\n交易单数：{{keyword2.DATA}}\n交易金额：{{keyword3.DATA}}\n提醒时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，今日/当月POS机线下收款数据如下：\r\n帐户名称：加盟商ABC\r\n交易单数：10单\r\n交易金额：3000.00元\r\n提醒时间：2017-09-14 10:10:10\r\n请您核对数据并及时登录系统进行确认，谢谢！',
    modify_time: '2017-11-06 16:45:44'
  },
  {
    id: 'OPENTM413232341',
    title: '维修处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n承接查验：{{keyword1.DATA}}\n事项：{{keyword2.DATA}}\n位置：{{keyword3.DATA}}\n报修人：{{keyword4.DATA}}\n电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '中建小区\r\n承接查验：10栋\r\n事项：漏水\r\n位置：10-1203\r\n报修人：张三\r\n电话：15312345678\r\n点击查看详情',
    modify_time: '2017-11-06 15:08:21'
  },
  {
    id: 'OPENTM413278891',
    title: '门禁通行通知',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n门锁名称：{{keyword2.DATA}}\n开门时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户您好\r\n住户姓名：小岚岚\r\n门锁名称：小区南门\r\n开门时间：2017年11月8日 14:28:32\r\n如有疑问请咨询管理处',
    modify_time: '2017-11-09 15:41:19'
  },
  {
    id: 'OPENTM413480942',
    title: '房租账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n房间名称：{{keyword1.DATA}}\n付款截止日期：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好,您本月的房租如下\r\n房间名称：桃园西村7巷502\r\n付款截止日期：2016-07\r\n账单金额：3000人民币\r\n请与3天之内联系房东交租。',
    modify_time: '2017-11-21 15:42:49'
  },
  {
    id: 'OPENTM413491795',
    title: '报名取消提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n报名人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n活动时间：{{keyword3.DATA}}\n活动地点：{{keyword4.DATA}}\n取消原因：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您参加的活动报名已经成功取消\r\n报名人：李某某\r\n联系电话：1350000012\r\n活动时间：2017年11月10日 9:00\r\n活动地点：三楼大厅\r\n取消原因：个人时间冲突原因\r\n谢谢您的参与。',
    modify_time: '2017-11-22 14:56:00'
  },
  {
    id: 'OPENTM413983550',
    title: '租金收缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n承租房间：{{keyword2.DATA}}\n缴费周期：{{keyword3.DATA}}\n缴费总额：{{keyword4.DATA}}\n指定账号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '租金收缴通知\r\n客户名称：深圳市XX科技公司\r\n承租房间：201,202\r\n缴费周期：2017-12-1至2017-12-31\r\n缴费总额：￥9600\r\n指定账号：1101 4683 7320 00\r\n公司户名：深圳市艾醍科技有限公司   开户行：平安银行股份有限公司深圳华侨城支行',
    modify_time: '2017-12-26 17:48:28'
  },
  {
    id: 'OPENTM414076801',
    title: '技工安排通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n维修项目：{{keyword2.DATA}}\n服务技工：{{keyword3.DATA}}\n技工电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的用户，已为您安排我公司认证技工：\r\n订单编号：123456789\r\n维修项目：修水管\r\n服务技工：张三\r\n技工电话：888888888\r\n如有疑问请联系客服604-428-9908，谢谢！',
    modify_time: '2018-01-03 15:20:29'
  },
  {
    id: 'OPENTM413994707',
    title: '预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n看房人姓名：{{keyword1.DATA}}\n看房日期：{{keyword2.DATA}}\n看房时间：{{keyword3.DATA}}\n看房人数：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的会员，您好！您预约参观XX项目已成功！\r\n看房人姓名：张三\r\n看房日期：2017年12月17日\r\n看房时间：14:00\r\n看房人数：2人\r\n联系电话：138XXXXXXXX\r\n感谢您的预约，具体情况稍后会有云上销售人员与您联系。',
    modify_time: '2017-12-27 17:00:39'
  },
  {
    id: 'OPENTM414006413',
    title: '反馈结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n咨询类型：{{keyword1.DATA}}\n问题描述：{{keyword2.DATA}}\n回复内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您好！您发起的咨询工单已收到回复！\r\n咨询类型：财税相关问题\r\n问题描述：发票申领的具体步骤是什么样的？\r\n回复内容：建议您直接拨打e通世界400-800-800客服电话咨询。\r\n感谢您的使用！',
    modify_time: '2017-12-28 17:02:54'
  },
  {
    id: 'OPENTM413887414',
    title: '报修成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 19,
    content: '{{first.DATA}}\n报修人：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n报修项目：{{keyword3.DATA}}\n报修地点：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报修申请已经通过\r\n报修人：王二小\r\n报修内容：窗户坏了\r\n报修项目：基础设施\r\n报修地点：华星现代产业园B座201\r\n报修时间：2017-12-16 12\r\n请等待维修工上门维修',
    modify_time: '2017-12-19 16:35:33'
  },
  {
    id: 'OPENTM413994716',
    title: '预定成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n预约人姓名：{{keyword1.DATA}}\n预约日期：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n预约人数：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的会员，您好！您预约了女士颈部保养护理项目\r\n预约人姓名：张三\r\n预约日期：2017年12月17日\r\n预约时间：14:00\r\n预约人数：2人\r\n联系电话：138XXXXXXXX\r\n感谢您的预约，我们会尽快与您联系。',
    modify_time: '2017-12-27 17:00:51'
  },
  {
    id: 'OPENTM414203317',
    title: '认证结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的住户认证，请查收\r\n姓名：小岚岚\r\n电话：138xxxxxxxx\r\n房号：金迪星苑-金福阁-203房\r\n时间：2018-01-03 10:00:00\r\n点击查看详情',
    modify_time: '2018-01-11 15:58:24'
  },
  {
    id: 'OPENTM414174420',
    title: '账单待支付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n预约日期：{{keyword2.DATA}}\n停车时长：{{keyword3.DATA}}\n代缴金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好\r\n车牌号码：沪DM1371\r\n预约日期：2014年7月21日 \r\n停车时长：2小时\r\n代缴金额：220元\r\n感谢你的使用',
    modify_time: '2018-01-09 16:12:54'
  },
  {
    id: 'OPENTM413971923',
    title: '预约处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客号码：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n结束时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的访客预约，请及时处理\r\n访客姓名：张三\r\n访客号码：18820169527\r\n预约时间：2016年12月1日 10:27\r\n结束时间：2016年12月1日 12:00\r\n点击处理预约信息',
    modify_time: '2017-12-25 18:53:39'
  },
  {
    id: 'OPENTM414174174',
    title: '维修工单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n发起人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n位置：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '维修工单通知\r\n发起人：占三\r\n电话：1111111\r\n位置：儿科大楼/3层/401\r\n报修内容：空调不制冷\r\n报修时间：2017年1月1日\r\n感谢您的使用',
    modify_time: '2018-01-09 15:53:51'
  },
  {
    id: 'OPENTM413971928',
    title: '预约结果提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n拜访人姓名：{{keyword1.DATA}}\n被访人姓名：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n结束时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '预约结果提醒，请注意查看\r\n拜访人姓名：张三\r\n被访人姓名：李四\r\n预约时间：2016年12月1日 10:27\r\n结束时间：2016年12月1日 12:00\r\n请在预约时间内来访，过时失效！',
    modify_time: '2017-12-25 18:54:00'
  },
  {
    id: 'OPENTM413983631',
    title: '报修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n报修地址：{{keyword1.DATA}}\n报修类型：{{keyword2.DATA}}\n维修人员：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，ID为1234的报修已完成\r\n报修地址：一号楼303\r\n报修类型：照明设施\r\n维修人员：刘某某\r\n完成时间：2017-12-01 10:00:00\r\n请对我们的服务作出评价，谢谢！',
    modify_time: '2017-12-26 17:55:26'
  },
  {
    id: 'OPENTM414020332',
    title: '申请成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n报修电话：{{keyword1.DATA}}\n报修项目：{{keyword2.DATA}}\n报修位置：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n报修内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，张三的报修申请已发送，请及时吹了！\r\n报修电话：139XXXXXX06\r\n报修项目：日常维修\r\n报修位置：静安中华大厦5层506室\r\n报修时间：2016-10-17 11:30\r\n报修内容：走廊漏雨，请行政部派人维修。\r\n感谢你的使用。',
    modify_time: '2017-12-29 17:40:26'
  },
  {
    id: 'OPENTM414066637',
    title: '报名成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n预约项目：{{keyword2.DATA}}\n下单时间：{{keyword3.DATA}}\n服务地址：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的用户，您的专项服务已报名成功！\r\n订单编号：98989898\r\n预约项目：暖风管道清洁\r\n下单时间：2017年12月27日12\r\n服务地址：123号大街朝阳区北京市\r\n联系电话：67891011\r\n感谢您的报名 我们会尽快联系您！',
    modify_time: '2018-01-02 17:24:52'
  },
  {
    id: 'OPENTM414203539',
    title: '物业服务进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n服务内容：{{keyword1.DATA}}\n服务进展：{{keyword2.DATA}}\n变更时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户：\r\n服务内容：您好，您预约的维修服务有新的进展\r\n服务进展：维修师傅正在上门\r\n变更时间：2018-01-03 09:50:30\r\n点击查看详情',
    modify_time: '2018-01-11 16:10:50'
  },
  {
    id: 'OPENTM414189742',
    title: '报修进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n故障类型：{{keyword2.DATA}}\n维修人员：{{keyword3.DATA}}\n维修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的XX： 您的报修请求我们已安排维修人员进行处理，您可以点击下方的“详情”查看报修进度。\r\n报修单号：201701120842391172\r\n故障类型：房屋主体设施\r\n维修人员：Helen\r\n维修时间：今天14:00-16:00\r\n感谢您对我们工作的支持，祝您生活愉快!',
    modify_time: '2018-01-10 17:41:55'
  },
  {
    id: 'OPENTM413811594',
    title: '投诉处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n投诉与建议：{{keyword1.DATA}}\n回复时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的投诉和建议客户经理已回复\r\n投诉与建议：投诉建议\r\n回复时间：2017-01-02 15:15:15\r\n回复意见',
    modify_time: '2017-12-13 16:45:41'
  },
  {
    id: 'OPENTM414090446',
    title: '预定成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n产品预定姓名：{{keyword1.DATA}}\n产品价格：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的会员，您好！您已经成功预定了一台PA03家居洁净系统\r\n产品预定姓名：张三\r\n产品价格：11900元\r\n联系电话：138XXXXXXXX\r\n您已支付100定金，余额11800还未支付，稍后会有会员服务经理与您联系，请注意保持手机畅通!',
    modify_time: '2018-01-04 16:29:42'
  },
  {
    id: 'OPENTM414076798',
    title: '服务上门通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n预约项目：{{keyword1.DATA}}\n客户电话：{{keyword2.DATA}}\n客户地址：{{keyword3.DATA}}\n服务日期：{{keyword4.DATA}}\n服务收费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的用户，为您安排以下时间服务：\r\n预约项目：修水管\r\n客户电话：7787887878\r\n客户地址：北京市朝阳区123号大街\r\n服务日期：2017年12月28日周四\r\n服务收费：$400\r\n请核对以上信息，如有问题请联系客服604-428-9908，谢谢！',
    modify_time: '2018-01-03 15:20:21'
  },
  {
    id: 'OPENTM413902999',
    title: '同步操作失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n人员信息：{{keyword1.DATA}}\n寝室信息：{{keyword2.DATA}}\n交易金额：{{keyword3.DATA}}\n交易时间：{{keyword4.DATA}}\n失败原因：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，寝室水电费同步交易失败。\r\n人员信息：吴雪冰\r\n寝室信息：桃李园21幢201\r\n交易金额：50.00\r\n交易时间：2017-12-19  10：00\r\n失败原因：网络故障\r\n请您及时处理！',
    modify_time: '2017-12-20 16:49:32'
  },
  {
    id: 'OPENTM414350000',
    title: '电梯异常通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n项目区域：{{keyword1.DATA}}\n注册代码：{{keyword2.DATA}}\n电梯编号：{{keyword3.DATA}}\n异常说明：{{keyword4.DATA}}\n更新时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'DT1电梯异常通知\r\n项目区域：1号交易广场\r\n注册代码：32104403002008008078\r\n电梯编号：DT1\r\n异常说明：电梯运行异常，已进行调整修复，请审批\r\n更新时间：2018年1月19日 20:00:00\r\n感谢你的支持',
    modify_time: '2018-01-23 15:22:58'
  },
  {
    id: 'OPENTM414473200',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 39,
    content: '{{first.DATA}}\n审核状态：{{keyword1.DATA}}\n活动名称：{{keyword2.DATA}}\n活动时间：{{keyword3.DATA}}\n活动地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '恭喜您报名的XXX活动审核通过！邀请好友一起来参加吧！\r\n审核状态：已通过\r\n活动名称：一起来打乒乓球\r\n活动时间：2018.8.26 14:30 — 2018.8.26 16:30\r\n活动地点：广州恒大中心\r\n点击查看详情',
    modify_time: '2018-02-02 16:07:57'
  },
  {
    id: 'OPENTM414289801',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 34,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n预约内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的客户提交预约，请及时确认\r\n客户姓名：罗某\r\n客户手机：13354127227\r\n预约时间：2018-01-16 19:00\r\n预约内容：服务项目\r\n点击确认预约时间，或修改预约时间。',
    modify_time: '2018-01-18 15:49:24'
  },
  {
    id: 'OPENTM414472802',
    title: '申请处理进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 20,
    content: '{{first.DATA}}\n申请主题：{{keyword1.DATA}}\n具体内容：{{keyword2.DATA}}\n处理状态：{{keyword3.DATA}}\n更新时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的李先生，您提交的申请有新的进展了~\r\n申请主题：申请空调维修\r\n具体内容：空调打不开\r\n处理状态：已完结\r\n更新时间：2018年2月2日 14:20:20\r\n若是尚有相关问题欢迎随时反馈。',
    modify_time: '2018-02-02 15:47:49'
  },
  {
    id: 'OPENTM414350004',
    title: '电梯故障报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n项目区域：{{keyword1.DATA}}\n注册代码：{{keyword2.DATA}}\n电梯编号：{{keyword3.DATA}}\n是否困人：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'DT1困人故障报修\r\n项目区域：1号交易广场\r\n注册代码：32104403002008008078\r\n电梯编号：DT1\r\n是否困人：是\r\n报修时间：2018年1月19日 20:00:01\r\n请您协调处理',
    modify_time: '2018-01-23 15:23:22'
  },
  {
    id: 'OPENTM414251657',
    title: '解绑成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属房号：{{keyword2.DATA}}\n解绑原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您绑定的房产已解绑成功。\r\n所属小区：四季花园小区\r\n所属房号：1-1-102\r\n解绑原因：此房产经核实已不是您的房产，现将您微信绑定的房产进行解除。\r\n经物业核实，此房产户主已经变更。现将原房主解绑，请谅解。',
    modify_time: '2018-01-15 17:24:47'
  },
  {
    id: 'OPENTM414515769',
    title: '商品自提通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n门店地址：{{keyword2.DATA}}\n自提截止时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您好！您购买的商品已经到达门店，请及时前往门店自提。\r\n订单号：123456\r\n门店地址：深圳大冲88号\r\n自提截止时间：2017年08月06日15时30分\r\n请在截止时间前到门店自提。点击查看订单详情。',
    modify_time: '2018-02-05 16:34:31'
  },
  {
    id: 'OPENTM414473921',
    title: '留宿申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，学生某某某申请2018年2月2日留宿\r\n姓名：某某某\r\n状态：家长审核中\r\n时间：2018年2月2日 11:15\r\n如有疑问，请致电13XXXXXXXX联系我们。',
    modify_time: '2018-02-02 16:44:22'
  },
  {
    id: 'OPENTM414472272',
    title: '消杀通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n消杀时间：{{keyword1.DATA}}\n消杀范围：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，大楼即将进行消杀工作\r\n消杀时间：2017-08-09\r\n消杀范围：1-10楼\r\n请保存好个人物品，注意通风',
    modify_time: '2018-02-02 15:14:01'
  },
  {
    id: 'OPENTM414274323',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n手机号：{{keyword2.DATA}}\n审核时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的资料已经通过审核。\r\n姓名：小马\r\n手机号：13354122222\r\n审核时间：2018年1月16日 18:36\r\n感谢你的使用。',
    modify_time: '2018-01-17 14:34:18'
  },
  {
    id: 'OPENTM414515773',
    title: '货品派送通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n配送员：{{keyword2.DATA}}\n配送员电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您好！您的订单已经在派送中，请保持电话畅通。\r\n订单号：123456\r\n配送员：张三\r\n配送员电话：13512345678\r\n点击查看订单详情。',
    modify_time: '2018-02-05 16:34:39'
  },
  {
    id: 'OPENTM414473874',
    title: '入校提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，学生某某某于2018年2月2日16点28分进入学校\r\n姓名：某某某\r\n状态：进入\r\n时间：2018年2月2日 16:28\r\n如有疑问，请致电13XXXXXXXX联系我们。',
    modify_time: '2018-02-02 16:42:11'
  },
  {
    id: 'OPENTM414444976',
    title: '报备状态变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户电话：{{keyword2.DATA}}\n报备楼盘：{{keyword3.DATA}}\n报备时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，你报备的用户已到访\r\n客户姓名：张三\r\n客户电话：13557451212\r\n报备楼盘：万达\r\n报备时间：2018-1-30 09:58:52\r\n报备成功时间：2018-1-30 09:59:07',
    modify_time: '2018-01-31 15:00:22'
  },
  {
    id: 'OPENTM414473932',
    title: '离校提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，学生某某某于2018年2月2日11点58分离开学校\r\n姓名：某某某\r\n状态：离校\r\n时间：2018年2月2日 11:58\r\n如有疑问，请致电13XXXXXXXX联系我们。',
    modify_time: '2018-02-02 16:44:48'
  },
  {
    id: 'OPENTM414337885',
    title: '检查结果提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n项目区域：{{keyword1.DATA}}\n注册代码：{{keyword2.DATA}}\n电梯编号：{{keyword3.DATA}}\n检查时间：{{keyword4.DATA}}\n检查得分：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'DT1电梯维保质量检查结果提醒\r\n项目区域：1号交易广场\r\n注册代码：31104403002012003901\r\n电梯编号：DT1\r\n检查时间：2018年1月19日 20:00:00\r\n检查得分：80分\r\n请留意检查缺陷并及时处理',
    modify_time: '2018-01-22 15:29:42'
  },
  {
    id: 'OPENTM414474588',
    title: '申请提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n申请主题：{{keyword1.DATA}}\n提交时间：{{keyword2.DATA}}\n具体内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的李先生，您的申请已提交成功。\r\n申请主题：申请维修空调\r\n提交时间：2018年2月2日 10:10:23\r\n具体内容：空调开不了，麻烦过来处理一下谢谢\r\n我们将尽快在1-2个⼯作⽇内处理您的事宜，您稍后可以查询处理进度',
    modify_time: '2018-02-02 17:22:25'
  },
  {
    id: 'OPENTM414474590',
    title: '申请处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n申请主题：{{keyword1.DATA}}\n处理结果：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，你的申请处理结果如下：\r\n申请主题：申请维修空调\r\n处理结果：你的空调已修复\r\n若是尚有相关问题欢迎随时反馈。',
    modify_time: '2018-02-02 17:22:36'
  },
  {
    id: 'OPENTM414473198',
    title: '报名成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 28,
    content: '{{first.DATA}}\n活动名称：{{keyword1.DATA}}\n活动时间：{{keyword2.DATA}}\n活动地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '恭喜您报名成功业主乒乓球赛！邀请好友一起来参加吧！\r\n活动名称：一起来打乒乓球\r\n活动时间：2018.8.26 14:30 — 2018.8.26 16:30\r\n活动地点：广州恒大中心\r\n 点击查看详情',
    modify_time: '2018-02-02 16:07:38'
  },
  {
    id: 'OPENTM414374649',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n审核类型：{{keyword1.DATA}}\n审核结果：{{keyword2.DATA}}\n审核意见：{{keyword3.DATA}}\n联系人：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，你提交的以下资料未能通过审核。\r\n审核类型：身份证\r\n审核结果：审核未通过\r\n审核意见：证照号码与提交号码不一致\r\n联系人：张三\r\n联系电话：13000000000\r\n请重新登录系统并上传证照，谢谢你的配合！',
    modify_time: '2018-01-25 15:30:45'
  },
  {
    id: 'OPENTM414473699',
    title: '出入报平安提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n时间：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n姓名：{{keyword3.DATA}}\n位置：{{keyword4.DATA}}\n出入标志：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您关心的家人有新的出入记录！\r\n时间：2018年1月29日12:00\r\n房号：A栋102房\r\n姓名：张小小\r\n位置：X小区东门\r\n出入标志：离开小区\r\n进入查看详情。',
    modify_time: '2018-02-02 16:34:34'
  },
  {
    id: 'OPENTM415047850',
    title: '登录成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n登录人：{{keyword1.DATA}}\n登录网址：{{keyword2.DATA}}\n登录时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你的微信账号“11”进行了网站登录操作\r\n登录人：张三\r\n登录网址：www.baidu.com\r\n登录时间：2018年3月20日 18:36\r\n感谢你对我们的大力支持。',
    modify_time: '2018-03-21 16:12:14'
  },
  {
    id: 'OPENTM414907062',
    title: '车辆离场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n免费停车时长：{{keyword3.DATA}}\n积分抵扣费用：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '开开心心离开，进入新的旅程\r\n车牌号：川AC1D67\r\n停车场：摩尔国际广场停车场\r\n免费停车时长：2 小时\r\n积分抵扣费用：3元\r\n欢迎出示会员身份消费，领取免费停车时长。',
    modify_time: '2018-03-09 17:40:09'
  },
  {
    id: 'OPENTM414889913',
    title: '预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n会议室：{{keyword1.DATA}}\n会议时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的会议室预约已成功！\r\n会议室：803\r\n会议时间：2018年1月1日 14:00-17:00\r\n如有疑问请致电物业管理部（021-xxxxxxxx）',
    modify_time: '2018-03-08 15:29:56'
  },
  {
    id: 'OPENTM414541467',
    title: '订单取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 17,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n取消时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您好！您的订单已取消，如有疑问，请及时联系客服。\r\n订单号：123456\r\n取消时间：2018-2-3 11:21:12\r\n点击查看订单详情。',
    modify_time: '2018-02-07 16:39:18'
  },
  {
    id: 'OPENTM414592617',
    title: '开票成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n发票号：{{keyword1.DATA}}\n消费金额：{{keyword2.DATA}}\n开票时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的发票已开出。\r\n发票号：30412052\r\n消费金额：100元\r\n开票时间：2018年2月8日15\r\n感谢您对海投物业的支持。如您有疑问，请来电0592-968970或到项目物业服务中心咨询。',
    modify_time: '2018-02-12 17:14:17'
  },
  {
    id: 'OPENTM414890270',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n保洁类型：{{keyword4.DATA}}\n保洁时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的保洁预约\r\n联系人：张三\r\n电话：15355555555\r\n房号：滨海园 2-2-1\r\n保洁类型：常规保洁\r\n保洁时间：2018年3月8日\r\n如有任何疑问，请和上方联系人沟通',
    modify_time: '2018-03-08 15:49:39'
  },
  {
    id: 'OPENTM415036670',
    title: '问题提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n问题类型：{{keyword1.DATA}}\n提交时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您提出的问题已收到！\r\n问题类型：法律援助\r\n提交时间：2018年1月1日 18:00\r\n我们会尽快给您回复！',
    modify_time: '2018-03-20 16:07:45'
  },
  {
    id: 'OPENTM414564221',
    title: '巡更报告通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n报告名称：{{keyword1.DATA}}\n报告人员：{{keyword2.DATA}}\n报告时间：{{keyword3.DATA}}\n人员作业：{{keyword4.DATA}}\n报告内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您有一份报告。\r\n报告名称：星海广场206会议室 \r\n报告人员：张云\r\n报告时间：02-05 17:24:32\r\n人员作业：符合作业规则\r\n报告内容：正常\r\n查看报告',
    modify_time: '2018-02-09 17:28:38'
  },
  {
    id: 'OPENTM414993471',
    title: '申请入驻通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话号码：{{keyword2.DATA}}\n公司名称：{{keyword3.DATA}}\n入驻人数：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有新的入驻申请\r\n联系人：李小姐\r\n电话号码：13163763524\r\n公司名称：深圳艾醍科技公司\r\n入驻人数：5\r\n请及时联系客户，并登录系统查看.',
    modify_time: '2018-03-16 15:35:39'
  },
  {
    id: 'OPENTM415036672',
    title: '问题提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n问题类型：{{keyword1.DATA}}\n提交时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您提出的问题已收到！\r\n问题类型：法律援助\r\n提交时间：2018年1月1日 18:00\r\n我们会尽快给您回复！',
    modify_time: '2018-03-20 16:07:46'
  },
  {
    id: 'OPENTM414515774',
    title: '商品归还通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n待归还商品：{{keyword1.DATA}}\n租赁到期时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您好！您购买的商品即将超过租赁有效期，请及时归还。\r\n待归还商品：电吹风\r\n租赁到期时间：2017年08月06日\r\n点击前往归还。',
    modify_time: '2018-02-05 16:34:48'
  },
  {
    id: 'OPENTM414541424',
    title: '订单指派提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n订单类型：{{keyword4.DATA}}\n付款时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的保洁订单了，请指派保洁人员！\r\n客户姓名：刘翔\r\n地址：蓝湾507\r\n联系电话：18699996666\r\n订单类型：深度保洁\r\n付款时间：2018年2月7日 10:02:58\r\n请尽快指派保洁人员与客户联系！',
    modify_time: '2018-02-07 16:38:07'
  },
  {
    id: 'OPENTM414905527',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n账单标题：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n支付方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，账单已支付成功。\r\n账单标题：2018年3月份物业费\r\n账单金额：404元\r\n支付方式：微信支付\r\n感谢你的使用。',
    modify_time: '2018-03-09 16:29:20'
  },
  {
    id: 'OPENTM415036678',
    title: '问题提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n环线：{{keyword1.DATA}}\n户型：{{keyword2.DATA}}\n总价：{{keyword3.DATA}}\n户籍：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的需求已经收到！\r\n环线：一号线\r\n户型：三室\r\n总价：200-300万\r\n户籍：上海\r\n安家顾问会尽快与您联系',
    modify_time: '2018-03-20 16:08:14'
  },
  {
    id: 'OPENTM414564179',
    title: '审批进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n按揭业务：{{keyword1.DATA}}\n公积金：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '嗨，王义梅，您经办的万科贷款客户的审批进度存在超期\r\n按揭业务：5笔\r\n公积金 ：7笔\r\n点击进入消息中心查看详情，请及时跟进。',
    modify_time: '2018-02-09 17:24:46'
  },
  {
    id: 'OPENTM414566541',
    title: '电梯巡检通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n电梯编号：{{keyword1.DATA}}\n巡检内容：{{keyword2.DATA}}\n巡检时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '电梯巡检完成\r\n电梯编号：1001\r\n巡检内容：电路老化\r\n巡检时间：2018年2月8日 15:35\r\n请到后台查看详情',
    modify_time: '2018-02-09 20:14:35'
  },
  {
    id: 'OPENTM414943444',
    title: '收款提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n支付方式：{{keyword1.DATA}}\n支付来源：{{keyword2.DATA}}\n账单编号：{{keyword3.DATA}}\n支付金额：{{keyword4.DATA}}\n支付时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '收到一笔入账，详情如下：\r\n支付方式：微信/支付宝\r\n支付来源：太平洋世纪广场A座901室\r\n账单编号：4003202001201708319252912267\r\n支付金额：404元\r\n支付时间：2017年8月31日11点32分\r\n如需查看交易详情，请登陆 Billing 365 商户平台进行查看。',
    modify_time: '2018-03-12 16:41:02'
  },
  {
    id: 'OPENTM414749946',
    title: '低电量报警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n剩余电量：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，你家的电量不足，请及时充值\r\n姓名：张三\r\n地址：又一城A区1205\r\n剩余电量：9度\r\n感谢对物业工作的支持',
    modify_time: '2018-02-27 16:41:56'
  },
  {
    id: 'OPENTM414905599',
    title: '物业账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 21,
    content: '{{first.DATA}}\n账单标题：{{keyword1.DATA}}\n帐单金额：{{keyword2.DATA}}\n到期时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你有账单即将到期\r\n账单标题：2018年3月份物业费\r\n帐单金额：404元\r\n到期时间：2014年7月21日 18:36\r\n感谢你的使用。',
    modify_time: '2018-03-09 16:33:03'
  },
  {
    id: 'OPENTM415047849',
    title: '登录成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n登录人：{{keyword1.DATA}}\n登录网址：{{keyword2.DATA}}\n登录时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你的微信账号“11”进行了网站登录操作\r\n登录人：张三\r\n登录网址：www.baidu.com\r\n登录时间：2018年3月20日 18:36\r\n感谢你对我们的大力支持。',
    modify_time: '2018-03-21 16:12:13'
  },
  {
    id: 'OPENTM415147100',
    title: '设备报警通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n设备名称：{{keyword1.DATA}}\n设备位置：{{keyword2.DATA}}\n报警数据：{{keyword3.DATA}}\n报警等级：{{keyword4.DATA}}\n负责人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '设备报警提醒\r\n设备名称：温度采集器\r\n设备位置：儿科大楼/4层/401\r\n报警数据：60℃\r\n报警等级：二级\r\n负责人：张三\r\n请尽快处理。',
    modify_time: '2018-03-30 19:23:25'
  },
  {
    id: 'OPENTM415124403',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n账单年月：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好！感谢您关注德威物业公众号，以下是您2018年X月的物业管理费电子账单：\r\n房号：某小区X栋XXX\r\n账单年月：2018年X月\r\n账单金额：XXX元\r\n温馨提示：请及时查核您的缴费情况，并在本月28日前缴清。若已缴清，请忽略此信息，感谢您的关注和支持！如有疑问，请咨询物业管理处',
    modify_time: '2018-03-28 16:24:27'
  },
  {
    id: 'OPENTM415137055',
    title: '门禁预约申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n企业名称：{{keyword2.DATA}}\n设备门禁：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '张三用户您好，您有一条访客预约申请消息。\r\n访客姓名：李四\r\n企业名称：光谷联合\r\n设备门禁：三栋一单元门禁\r\n预约时间：2018-3-29\r\n请前往处理。',
    modify_time: '2018-03-29 16:25:32'
  },
  {
    id: 'OPENTM415124706',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预订展位：{{keyword1.DATA}}\n预订时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，杭州邻汇网络科技有限公司预订了您的展位\r\n预订展位：恒生科技园大厅\r\n预订时间：2018.03.38\r\n请尽快审核',
    modify_time: '2018-03-28 16:45:30'
  },
  {
    id: 'OPENTM415137057',
    title: '门禁预约审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n企业名称：{{keyword2.DATA}}\n设备门禁：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '李四先生您好，您的预约申请已经获得同意。\r\n访客姓名：李四\r\n企业名称：光谷联合\r\n设备门禁：三栋一单元门禁\r\n预约时间：2018-3-29\r\n欢迎你的拜访，请前往访客开门处理。',
    modify_time: '2018-03-29 16:25:40'
  },
  {
    id: 'OPENTM415124361',
    title: '投诉处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 41,
    content: '{{first.DATA}}\n投诉编号：{{keyword1.DATA}}\n投诉时间：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n回复时间：{{keyword4.DATA}}\n回复内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的投诉已经处理完毕，给您带来不便请谅解！\r\n投诉编号：CP201802004\r\n投诉时间：2018.03.05 10：36\r\n投诉内容：单元门口垃圾未及时清理。\r\n回复时间：2018.03.05 12：16\r\n回复内容：已安排人员清理完毕，若再次发现请及时投诉或电话通知我们。\r\n服务热线4008666666',
    modify_time: '2018-03-28 16:22:23'
  },
  {
    id: 'OPENTM415270311',
    title: '提现结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n提现金额：{{keyword1.DATA}}\n提现时间：{{keyword2.DATA}}\n账户余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已提现成功！\r\n提现金额：200元\r\n提现时间：2018年4月10日 12：00\r\n账户余额：400元\r\n感谢您的使用。',
    modify_time: '2018-04-11 17:54:34'
  },
  {
    id: 'OPENTM415048814',
    title: '账单欠款通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n物业单元：{{keyword2.DATA}}\n账单周期：{{keyword3.DATA}}\n账单总额：{{keyword4.DATA}}\n欠款金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您有账单尚未结清欠款。\r\n住户姓名：林xx\r\n物业单元：天空花园1栋20D\r\n账单周期：2017-10-01 ~ 2017-10-30\r\n账单总额：￥5000.00\r\n欠款金额：￥5000.00\r\n收费明细：押金￥3000.00，租金￥2000.00。“”请尽快结清欠款，感谢您的配合。',
    modify_time: '2018-03-21 17:26:49'
  },
  {
    id: 'OPENTM415048820',
    title: '缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n物业单元：{{keyword2.DATA}}\n账单周期：{{keyword3.DATA}}\n账单总额：{{keyword4.DATA}}\n本次缴费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您已成功为以下账单提交缴费。\r\n住户姓名：林xx\r\n物业单元：天空花园1栋20D\r\n账单周期：2017-10-01 ~ 2017-10-30\r\n账单总额：￥5000.00\r\n本次缴费：￥5000.00\r\n本账单已结清，感谢您的支持。',
    modify_time: '2018-03-21 17:27:41'
  },
  {
    id: 'OPENTM415259075',
    title: '派单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n项目：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n客户：{{keyword3.DATA}}\n置业顾问：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '嗨，王义梅，您有新的贷款客户啦\r\n项目：沈阳长江府\r\n房间：沈阳长江府项目-一期-2#-305\r\n客户：柳生\r\n置业顾问：张小小（13810003000）\r\n点击进入详情',
    modify_time: '2018-04-10 16:42:01'
  },
  {
    id: 'OPENTM415269830',
    title: '申请返修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n物业地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '申请返修通知\r\n联系人：看张三\r\n电话：15267911111\r\n物业地址：测试房源3幢5单元2102甲\r\n您有一个订单已返修，返修原因：',
    modify_time: '2018-04-11 17:23:41'
  },
  {
    id: 'OPENTM415063181',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n物业单元：{{keyword2.DATA}}\n账单周期：{{keyword3.DATA}}\n账单总额：{{keyword4.DATA}}\n收费明细：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您的最新一期账单已生成。\r\n住户姓名：林xx\r\n物业单元：天空花园1栋20D\r\n账单周期：2017-10-01 ~2017-10-30\r\n账单总额：￥5000.00\r\n收费明细：押金￥2000.00，租金￥1000.00，电费￥1000.00（800-500），水费￥200.00（3300-3200），公共卫生费￥30.00，物业管理费￥20.00，网络费￥50.00\r\n请尽快结清账单，感谢您的使用。',
    modify_time: '2018-03-22 15:44:01'
  },
  {
    id: 'OPENTM415251039',
    title: '报备驳回提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n驳回原因：{{keyword1.DATA}}\n驳回时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，你报备的信息被驳回\r\n驳回原因：时间冲突\r\n驳回时间：2018-11-1 12:00\r\n请及时修改后重新报备，谢谢',
    modify_time: '2018-04-09 19:48:39'
  },
  {
    id: 'OPENTM415236890',
    title: '电子发票状态确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n开票时间：{{keyword1.DATA}}\n开票状态：{{keyword2.DATA}}\n发票号码：{{keyword3.DATA}}\n消费金额：{{keyword4.DATA}}\n发票金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的电子发票状态已确认\r\n开票时间：2018-01-01 12:00:00\r\n开票状态：开票成功\r\n发票号码：14283975\r\n消费金额：200.00\r\n发票金额：200.00\r\n感谢您对海投物业的支持。如您有疑问，请来电0592-968970或到项目物业服务中心咨询。',
    modify_time: '2018-04-08 16:18:56'
  },
  {
    id: 'OPENTM415251041',
    title: '报备驳回提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n驳回原因：{{keyword1.DATA}}\n驳回时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，你报备的信息被驳回\r\n驳回原因：时间冲突\r\n驳回时间：2018-11-1 12:00\r\n请及时修改后重新报备，谢谢',
    modify_time: '2018-04-09 19:48:39'
  },
  {
    id: 'OPENTM415194243',
    title: '工单状态变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n工单名称：{{keyword1.DATA}}\n工单内容：{{keyword2.DATA}}\n反馈者：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已成功上报安保工作，现已收到。\r\n工单名称：小区安保介入\r\n工单内容：在小区1#拐角处有一辆乱停放车辆\r\n反馈者：客服1号\r\n感谢您的反馈。',
    modify_time: '2018-04-04 10:23:27'
  },
  {
    id: 'OPENTM415194244',
    title: '工单状态变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n工单名称：{{keyword1.DATA}}\n工单内容：{{keyword2.DATA}}\n反馈者：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已成功上报安保工作，现已收到。\r\n工单名称：小区安保介入\r\n工单内容：在小区1#拐角处有一辆乱停放车辆\r\n反馈者：客服1号\r\n感谢您的反馈。',
    modify_time: '2018-04-04 10:23:27'
  },
  {
    id: 'OPENTM415147096',
    title: '采集点失联提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n设备名称：{{keyword1.DATA}}\n点位名称：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '采集点失联提醒\r\n设备名称：水泵\r\n点位名称：水阀\r\n时间：2014年7月21日 18:36\r\n请及时处理',
    modify_time: '2018-03-30 19:23:11'
  },
  {
    id: 'OPENTM415147098',
    title: '采集点失联提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n设备名称：{{keyword1.DATA}}\n点位名称：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '采集点失联提醒\r\n设备名称：水泵\r\n点位名称：水阀\r\n时间：2014年7月21日 18:36\r\n请及时处理',
    modify_time: '2018-03-30 19:23:12'
  },
  {
    id: 'OPENTM415147099',
    title: '设备报警通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n设备名称：{{keyword1.DATA}}\n设备位置：{{keyword2.DATA}}\n报警数据：{{keyword3.DATA}}\n报警等级：{{keyword4.DATA}}\n负责人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '设备报警提醒\r\n设备名称：温度采集器\r\n设备位置：儿科大楼/4层/401\r\n报警数据：60℃\r\n报警等级：二级\r\n负责人：张三\r\n请尽快处理。',
    modify_time: '2018-03-30 19:23:25'
  },
  {
    id: 'OPENTM415279850',
    title: '工单完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n需求描述：{{keyword2.DATA}}\n需求时间：{{keyword3.DATA}}\n需求地点：{{keyword4.DATA}}\n需求状态：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的需求已完成\r\n工单编号：490-10067\r\n需求描述：太阳能热水器故障\r\n需求时间：04/10/2018 08:49\r\n需求地点：学生公寓6号楼F4\r\n需求状态：已完成\r\n如有任何疑问，请联系CSC中心，联系电话：022-85356188',
    modify_time: '2018-04-12 15:45:04'
  },
  {
    id: 'OPENTM415556950',
    title: '维修评价通知',
    class1: '房地产',
    class2: '物业',
    person_used: 43,
    content: '{{first.DATA}}\n报修房屋：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx先生/女士，您的报修问题，已经为您处理完毕\r\n报修房屋：海河小区1号楼1单元102\r\n报修内容：门把手损坏\r\n【开始评价】',
    modify_time: '2018-04-25 15:33:21'
  },
  {
    id: 'OPENTM415293303',
    title: '需求提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n需求编号：{{keyword1.DATA}}\n需求描述：{{keyword2.DATA}}\n需求时间：{{keyword3.DATA}}\n需求地点：{{keyword4.DATA}}\n需求状态：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的需求已提交成功\r\n需求编号：2467\r\n需求描述：第32教学楼2层茶水间漏水。\r\n需求时间：04/08/2018 10:05\r\n需求地点：32教学楼理学院F2\r\n需求状态：已接受\r\n您的需求已提交CSC中心，正在处理中。如有任何疑问，请联系电话022-85356188，谢谢。',
    modify_time: '2018-04-13 17:58:49'
  },
  {
    id: 'OPENTM415281209',
    title: '维修维保评价提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n工单：{{keyword1.DATA}}\n处理人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n发起日期：{{keyword4.DATA}}\n完成日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '维修评价提醒\r\n工单：空调坏了\r\n处理人：张三\r\n联系电话：123xxx\r\n发起日期：2018.1.1\r\n完成日期：2018.1.2\r\n感谢您的使用',
    modify_time: '2018-04-12 17:38:54'
  },
  {
    id: 'OPENTM415557610',
    title: '审核驳回通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n联系人：{{keyword2.DATA}}\n电话：{{keyword3.DATA}}\n物业地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '审核驳回通知\r\n订单号：WX001\r\n联系人：张三\r\n电话：17266611111\r\n物业地址：测试房源2幢1单元101甲\r\n费用初审已驳回，驳回原因：费用与实际金额不符',
    modify_time: '2018-04-25 16:06:01'
  },
  {
    id: 'OPENTM415280512',
    title: '电子发票同步成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n开票时间：{{keyword1.DATA}}\n开票费用名称：{{keyword2.DATA}}\n未开票费用名称：{{keyword3.DATA}}\n消费金额：{{keyword4.DATA}}\n发票金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的电子发票已同步至开票平台，发票状态待确认\r\n开票时间：2018-01-01 12:00:00\r\n开票费用名称：物业管理费\r\n未开票费用名称：水费\r\n消费金额：200.00\r\n发票金额：100.00\r\n感谢您对海投物业的支持。如您有疑问，请来电0592-968970或到项目物业服务中心咨询。',
    modify_time: '2018-04-12 16:40:20'
  },
  {
    id: 'OPENTM415279864',
    title: '需求拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n需求编号：{{keyword1.DATA}}\n需求描述：{{keyword2.DATA}}\n需求时间：{{keyword3.DATA}}\n需求地点：{{keyword4.DATA}}\n拒绝原因：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，很抱歉，您的需求已拒绝\r\n需求编号：2467\r\n需求描述：空调不制冷\r\n需求时间：04/08/2018 11:00\r\n需求地点：32教学楼理学院F2\r\n拒绝原因：未达到学校规定启动制冷功能时间，故无法制冷。\r\n您的需求由于上述原因，已拒绝，如有任何疑问请联系022-85356188，谢谢！',
    modify_time: '2018-04-12 15:45:46'
  },
  {
    id: 'OPENTM415270315',
    title: '充值结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n充值金额：{{keyword1.DATA}}\n充值时间：{{keyword2.DATA}}\n账户余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一笔金额充值成功！\r\n充值金额：200元\r\n充值时间：2018年4月10日 12：00\r\n账户余额：400元\r\n感谢您的使用。',
    modify_time: '2018-04-11 17:54:48'
  },
  {
    id: 'OPENTM415477668',
    title: '重点人员出入报警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n时间：{{keyword1.DATA}}\n地点：{{keyword2.DATA}}\n姓名：{{keyword3.DATA}}\n位置：{{keyword4.DATA}}\n出入口：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您关注的人员有新的出入动向！\r\n时间：2018年4月20日11:07:03\r\n地点：奥敏（分中心名称）\r\n姓名：张晓晓\r\n位置：奥敏大门口（门口机名称）\r\n出入口：入口\r\n进入查看详情！',
    modify_time: '2018-04-20 17:01:46'
  },
  {
    id: 'OPENTM415534720',
    title: '会议提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n会议主题：{{keyword1.DATA}}\n会议室：{{keyword2.DATA}}\n会议时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的会议即将开始，请做好准备哦\r\n会议主题：年终会议\r\n会议室：四楼 401\r\n会议时间：2018年04月21日 10:00 - 12:00\r\n如有疑问请致电物业管理（021-xxxxxxx）',
    modify_time: '2018-04-24 15:32:04'
  },
  {
    id: 'OPENTM415436721',
    title: '签到成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n签到时间：{{keyword1.DATA}}\n签到位置：{{keyword2.DATA}}\n偏离距离：{{keyword3.DATA}}\n签到范围：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您已签到成功。\r\n签到时间：2018/4/15 09:23\r\n签到位置：广西人才大厦\r\n偏离距离：356.8米\r\n签到范围：正常\r\n感谢您的使用。',
    modify_time: '2018-04-17 19:41:14'
  },
  {
    id: 'OPENTM415477572',
    title: '会议室预约申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n会议主题：{{keyword1.DATA}}\n会议室：{{keyword2.DATA}}\n会议时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，您的会议室预约申请提交成功！请等待管理员审核。\r\n会议主题：年终会议\r\n会议室：四楼 401\r\n会议时间：2018年1月1日 14:00-17:00\r\n如有疑问请致电物业管理（121-xxxxxxxx）',
    modify_time: '2018-04-20 16:50:33'
  },
  {
    id: 'OPENTM415420623',
    title: '快递签收通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n签收时间：{{keyword1.DATA}}\n服务商：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好,您的快递已签收\r\n签收时间：2017-04-14 10:00\r\n服务商：超级小邮局\r\n感谢你对我们的信任与支持',
    modify_time: '2018-04-16 20:25:01'
  },
  {
    id: 'OPENTM415559727',
    title: '报告提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n报告类型：{{keyword2.DATA}}\n归档计划：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报告已提交成功\r\n提交时间：2018/4/7 18:34\r\n报告类型：日常报告\r\n归档计划：2018年春季实践活动\r\n感谢您的使用！',
    modify_time: '2018-04-25 17:26:28'
  },
  {
    id: 'OPENTM415279482',
    title: '催缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房租租金：{{keyword1.DATA}}\n管理费用：{{keyword2.DATA}}\n用电费用：{{keyword3.DATA}}\n用水费用：{{keyword4.DATA}}\n合计金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您有一条催缴通知。\r\n房租租金：2000.00元\r\n管理费用：200.00元\r\n用电费用：100.00元\r\n用水费用：100.00元\r\n合计金额：2400.00元\r\n您好，以上是您的欠费详情，请及时缴费，谢谢合作。',
    modify_time: '2018-04-12 15:07:29'
  },
  {
    id: 'OPENTM415476887',
    title: '拍卖结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n拍品：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n客服电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的【XXX（用户名）】，恭喜您打败全场，成功获拍心仪公寓。详情请移步我的拍卖查阅~\r\n拍品：门店名.拍品名\r\n房间：茶光路店805\r\n客服电话：0595-888888888\r\n请在03-22 23:23:12前支付500元诚意金锁定房间，否则取消获拍资格，并产生负面信用记录哦~',
    modify_time: '2018-04-20 15:58:15'
  },
  {
    id: 'OPENTM415279489',
    title: '维修单验收通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n维修状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一张待验收的维修单。\r\n维修单号：WX20180410001\r\n报修内容：空调坏了\r\n报修时间：2018年4月10日\r\n维修状态：待验收\r\n请及时进行验收，谢谢合作。',
    modify_time: '2018-04-12 15:07:41'
  },
  {
    id: 'OPENTM415534591',
    title: '订单待支付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业名称：{{keyword1.DATA}}\n预订时间：{{keyword2.DATA}}\n预订金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '会员：张三，提交了预定房源订单。\r\n物业名称：广州市番禺区敏捷华美国际\r\n预订时间：2018年5月1日-2018年5月2日\r\n预订金额：168\r\n订单暂未付款，等待会员支付。',
    modify_time: '2018-04-24 15:23:47'
  },
  {
    id: 'OPENTM415534593',
    title: '订单待支付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业名称：{{keyword1.DATA}}\n预订时间：{{keyword2.DATA}}\n预订金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '会员：张三，提交了预定房源订单。\r\n物业名称：广州市番禺区敏捷华美国际\r\n预订时间：2018年5月1日-2018年5月2日\r\n预订金额：168\r\n订单暂未付款，等待会员支付。',
    modify_time: '2018-04-24 15:23:47'
  },
  {
    id: 'OPENTM415279849',
    title: '工单完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n需求描述：{{keyword2.DATA}}\n需求时间：{{keyword3.DATA}}\n需求地点：{{keyword4.DATA}}\n需求状态：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的需求已完成\r\n工单编号：490-10067\r\n需求描述：太阳能热水器故障\r\n需求时间：04/10/2018 08:49\r\n需求地点：学生公寓6号楼F4\r\n需求状态：已完成\r\n如有任何疑问，请联系CSC中心，联系电话：022-85356188',
    modify_time: '2018-04-12 15:45:04'
  },
  {
    id: 'OPENTM415699505',
    title: '认证失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n注册号码：{{keyword1.DATA}}\n失败原因：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '很抱歉，你提交的业主认证申请未通过！\r\n注册号码：13229100165\r\n失败原因：提交的信息与业主预留信息不符合\r\n申请时间：2018年5月3日 16:43\r\n请补全资料重新提交申请！',
    modify_time: '2018-05-04 16:28:31'
  },
  {
    id: 'OPENTM415699507',
    title: '认证失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n注册号码：{{keyword1.DATA}}\n失败原因：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '很抱歉，你提交的业主认证申请未通过！\r\n注册号码：13229100165\r\n失败原因：提交的信息与业主预留信息不符合\r\n申请时间：2018年5月3日 16:43\r\n请补全资料重新提交申请！',
    modify_time: '2018-05-04 16:28:32'
  },
  {
    id: 'OPENTM415757760',
    title: '预约提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '系统已保存您的预约并已提交给房源业主。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2018-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：18888888888\r\n业主会尽快联系您以确定此预约，感谢您的预约。',
    modify_time: '2018-05-09 16:46:24'
  },
  {
    id: 'OPENTM415757762',
    title: '预约提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '系统已保存您的预约并已提交给房源业主。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2018-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：18888888888\r\n业主会尽快联系您以确定此预约，感谢您的预约。',
    modify_time: '2018-05-09 16:46:25'
  },
  {
    id: 'OPENTM415699764',
    title: '设备报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n工程名称：{{keyword1.DATA}}\n工程地址：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n手机号：{{keyword4.DATA}}\n故障描述：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新到设备报修提醒\r\n工程名称：长江路建设施工工程\r\n工程地址：长江路1号\r\n联系人：王二\r\n手机号：123456789\r\n故障描述：监控设备无显示图像\r\n请尽快安排工程师处理故障。',
    modify_time: '2018-05-04 16:43:46'
  },
  {
    id: 'OPENTM415699815',
    title: '合同已签署通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n合同编号：{{keyword1.DATA}}\n物业地址：{{keyword2.DATA}}\n租赁时间：{{keyword3.DATA}}\n承租人：{{keyword4.DATA}}\n租金及其他费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的新合同已签署。\r\n合同编号：23423423423900\r\n物业地址：宝成花园201\r\n租赁时间：2018-05-01~2019-04-30\r\n承租人：梁先生\r\n租金及其他费用：租金￥3000/月，合同押金￥3000。\r\n如有疑问请联系业主，感谢您的使用。',
    modify_time: '2018-05-04 16:47:09'
  },
  {
    id: 'OPENTM415748115',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n报修时间：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n报修地址：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单，请及时处理\r\n报修时间：2016-09-01 20:08:06\r\n报修主题：某某用户发起了报修单申请\r\n报修地址：厦门市集美万达广场\r\n联系电话：15396242190\r\nxx客户房屋出现漏水。',
    modify_time: '2018-05-08 17:32:08'
  },
  {
    id: 'OPENTM415748116',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n报修时间：{{keyword1.DATA}}\n报修主题：{{keyword2.DATA}}\n报修地址：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单，请及时处理\r\n报修时间：2016-09-01 20:08:06\r\n报修主题：某某用户发起了报修单申请\r\n报修地址：厦门市集美万达广场\r\n联系电话：15396242190\r\nxx客户房屋出现漏水。',
    modify_time: '2018-05-08 17:32:09'
  },
  {
    id: 'OPENTM415627524',
    title: '维修单受理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n工程名称：{{keyword1.DATA}}\n工程地址：{{keyword2.DATA}}\n维修工程师：{{keyword3.DATA}}\n手机号：{{keyword4.DATA}}\n维修日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好，您的报修单已受理。\r\n工程名称：工程名称\r\n工程地址：工程地址\r\n维修工程师：王二\r\n手机号：123456\r\n维修日期：2018年4月28日\r\n我们的工程师将会尽快为您修理',
    modify_time: '2018-04-28 16:26:20'
  },
  {
    id: 'OPENTM415757775',
    title: '预约处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的物业有客户提交看房预约。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2018-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：188888888\r\n请尽快点击确定此预约或修改预约时间。',
    modify_time: '2018-05-09 16:46:53'
  },
  {
    id: 'OPENTM415627526',
    title: '维修单受理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n工程名称：{{keyword1.DATA}}\n工程地址：{{keyword2.DATA}}\n维修工程师：{{keyword3.DATA}}\n手机号：{{keyword4.DATA}}\n维修日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好，您的报修单已受理。\r\n工程名称：工程名称\r\n工程地址：工程地址\r\n维修工程师：王二\r\n手机号：123456\r\n维修日期：2018年4月28日\r\n我们的工程师将会尽快为您修理',
    modify_time: '2018-04-28 16:26:20'
  },
  {
    id: 'OPENTM415559728',
    title: '报告提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n报告类型：{{keyword2.DATA}}\n归档计划：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报告已提交成功\r\n提交时间：2018/4/7 18:34\r\n报告类型：日常报告\r\n归档计划：2018年春季实践活动\r\n感谢您的使用！',
    modify_time: '2018-04-25 17:26:28'
  },
  {
    id: 'OPENTM415748382',
    title: '需求已接受通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单号码：{{keyword1.DATA}}\n接受日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的需求已被接受。\r\n工单号码：134-6741\r\n接受日期：2018年5月7日 14:24\r\n如有任何疑问，请联系电话022-85356188，谢谢。',
    modify_time: '2018-05-08 17:55:17'
  },
  {
    id: 'OPENTM415699489',
    title: '缴费结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n缴费项目：{{keyword1.DATA}}\n缴费期限：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '小王\r\n缴费项目：缴费项目\r\n缴费期限：2018-02-14\r\n总缴费人数：100人， 当前缴费人数：20人， 总缴费金额：30000.00， 当前缴费金额：10000.00',
    modify_time: '2018-05-04 16:27:15'
  },
  {
    id: 'OPENTM415699490',
    title: '缴费结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n缴费项目：{{keyword1.DATA}}\n缴费期限：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '小王\r\n缴费项目：缴费项目\r\n缴费期限：2018-02-14\r\n总缴费人数：100人， 当前缴费人数：20人， 总缴费金额：30000.00， 当前缴费金额：10000.00',
    modify_time: '2018-05-04 16:27:15'
  },
  {
    id: 'OPENTM415688893',
    title: '居住信息不完整提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n关联实习计划：{{keyword2.DATA}}\n说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你的居住信息未完善！\r\n姓名：张三\r\n关联实习计划：2018年暑假社会实践实习计划\r\n说明：居住信息未完善，教师无法了解你当前居住位置信息。\r\n请及时完善居住信息！',
    modify_time: '2018-05-03 16:47:50'
  },
  {
    id: 'OPENTM415699493',
    title: '缴费到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n缴费项目：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费到期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '小美\r\n缴费项目：缴费项目\r\n缴费金额：1000.00\r\n缴费到期：2018-02-14\r\n请尽快缴费',
    modify_time: '2018-05-04 16:27:25'
  },
  {
    id: 'OPENTM415699495',
    title: '缴费到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n缴费项目：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费到期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '小美\r\n缴费项目：缴费项目\r\n缴费金额：1000.00\r\n缴费到期：2018-02-14\r\n请尽快缴费',
    modify_time: '2018-05-04 16:27:26'
  },
  {
    id: 'OPENTM415700395',
    title: '派单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n工程名称：{{keyword1.DATA}}\n工程地址：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n手机号：{{keyword4.DATA}}\n维修日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有新的维修工单需要处理。\r\n工程名称：工程名称\r\n工程地址：工程地址\r\n联系人：联系人\r\n手机号：123456\r\n维修日期：2018年4月28日\r\n请按维修日期上门维修设备。',
    modify_time: '2018-05-04 17:44:04'
  },
  {
    id: 'OPENTM415700398',
    title: '派单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工程名称：{{keyword1.DATA}}\n工程地址：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n手机号：{{keyword4.DATA}}\n维修日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有新的维修工单需要处理。\r\n工程名称：工程名称\r\n工程地址：工程地址\r\n联系人：联系人\r\n手机号：123456\r\n维修日期：2018年4月28日\r\n请按维修日期上门维修设备。',
    modify_time: '2018-05-04 17:44:05'
  },
  {
    id: 'OPENTM415785652',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n账单总金额：{{keyword1.DATA}}\n账单月份：{{keyword2.DATA}}\n计费期间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您本月帐单已出，请查收！\r\n账单总金额：5088\r\n账单月份：2018年5月\r\n计费期间：2018.5.1-2018.5.1.31\r\n请您于当月5日前，缴清以上费用，逾期将产生相关违约金，祝您生活及工作愉快！',
    modify_time: '2018-05-11 19:28:47'
  },
  {
    id: 'OPENTM415783703',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n会员姓名：{{keyword1.DATA}}\n会员编号：{{keyword2.DATA}}\n会员电话：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '收到新的会员缴费信息，请及时发放会员卡。\r\n会员姓名：张三\r\n会员编号：A001\r\n会员电话：138******12\r\n缴费金额：99元\r\n请在今日完成会员办理事宜。',
    modify_time: '2018-05-11 17:40:04'
  },
  {
    id: 'OPENTM415757906',
    title: '工单处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n报单内容：{{keyword1.DATA}}\n工程人员：{{keyword2.DATA}}\n工单状态：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的报修任务已经处理完毕！\r\n报单内容：主体墙面开裂\r\n工程人员：张某某\r\n工单状态：已完成\r\n完成时间：2018-05-04 14:50\r\n请对我们的工作进行评价，谢谢。',
    modify_time: '2018-05-09 16:56:03'
  },
  {
    id: 'OPENTM415861557',
    title: '预估单提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n工程师姓名：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业报修\r\n维修单号：23123213213\r\n工程师姓名：陈飞\r\n联系方式：12312312312\r\n工程师已提交预估清单，请您尽快确认',
    modify_time: '2018-05-18 18:59:37'
  },
  {
    id: 'OPENTM415782759',
    title: '维修派单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 14,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n维修单号：{{keyword2.DATA}}\n工程师姓名：{{keyword3.DATA}}\n联系方式：{{keyword4.DATA}}\n上门时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业报修已派工，详情如下\r\n提交时间：2014年7月21日 18:36\r\n维修单号：2312321323131\r\n工程师姓名：陈飞\r\n联系方式：13512321321\r\n上门时间：2014年7月21日 18:36\r\n请您耐心等待',
    modify_time: '2018-05-11 16:32:09'
  },
  {
    id: 'OPENTM415783668',
    title: '物品放行申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n申请人姓名：{{keyword1.DATA}}\n放行企业：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n放行物品：{{keyword4.DATA}}\n申请人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好！您已收放行申请消息一则，请审核！\r\n申请人姓名：张三\r\n放行企业：超级前台\r\n申请时间：2018年5月8日\r\n放行物品：办公座椅\r\n申请人电话：13066668888\r\n请您及时处理！',
    modify_time: '2018-05-11 17:37:38'
  },
  {
    id: 'OPENTM415783670',
    title: '物品放行申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人姓名：{{keyword1.DATA}}\n放行企业：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n放行物品：{{keyword4.DATA}}\n申请人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好！您已收放行申请消息一则，请审核！\r\n申请人姓名：张三\r\n放行企业：超级前台\r\n申请时间：2018年5月8日\r\n放行物品：办公座椅\r\n申请人电话：13066668888\r\n请您及时处理！',
    modify_time: '2018-05-11 17:37:39'
  },
  {
    id: 'OPENTM415847675',
    title: '工单进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n工单号码：{{keyword1.DATA}}\n需求描述：{{keyword2.DATA}}\n工单状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的工单进度如下。\r\n工单号码：124-4289\r\n需求描述：教学楼空调不制冷\r\n工单状态：进行中\r\n如有任何疑问，请联系电话022-85356188，谢谢。',
    modify_time: '2018-05-17 17:31:44'
  },
  {
    id: 'OPENTM415837176',
    title: '交租提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n租房名称：{{keyword1.DATA}}\n到期日期：{{keyword2.DATA}}\n租金总额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的房租即将到期\r\n租房名称：青年公寓-A102\r\n到期日期：2018-5-15\r\n租金总额：800元\r\n点击查看账单详细',
    modify_time: '2018-05-16 19:46:10'
  },
  {
    id: 'OPENTM415785677',
    title: '物业缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n水费：{{keyword2.DATA}}\n电费：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，本月园区水电费清单已出，请查收\r\n公司名称：深圳英思太检验检测有限公司\r\n水费：100元\r\n电费：100元\r\n时间：2018年5月10日 16:20\r\n请缴费，谢谢。',
    modify_time: '2018-05-11 19:29:31'
  },
  {
    id: 'OPENTM415835086',
    title: '签到成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n工程师姓名：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n签到时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业报修\r\n维修单号：123121232131\r\n工程师姓名：陈飞\r\n联系方式：12312312312\r\n签到时间：2014年7月21日 18:36\r\n工程师已签到，请您及时和维修人员沟通处理维修情况',
    modify_time: '2018-05-16 16:55:52'
  },
  {
    id: 'OPENTM415758487',
    title: '新工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n报单类型：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n报单内容：{{keyword4.DATA}}\n报单时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单！\r\n报单类型：报事/报修\r\n业主姓名：张三\r\n联系电话：13988888888\r\n报单内容：主体墙面开裂\r\n报单时间：2015.01.22 21:39\r\n业主报修，请尽快核实处理。',
    modify_time: '2018-05-09 17:30:19'
  },
  {
    id: 'OPENTM415758489',
    title: '新工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n报单类型：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n报单内容：{{keyword4.DATA}}\n报单时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单！\r\n报单类型：报事/报修\r\n业主姓名：张三\r\n联系电话：13988888888\r\n报单内容：主体墙面开裂\r\n报单时间：2015.01.22 21:39\r\n业主报修，请尽快核实处理。',
    modify_time: '2018-05-09 17:30:19'
  },
  {
    id: 'OPENTM415758644',
    title: '安防报警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n报警区域：{{keyword1.DATA}}\n报警事件：{{keyword2.DATA}}\n报警时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好\r\n报警区域：十八层排风机房\r\n报警事件：温度过高\r\n报警时间：2014年7月21日 18:36\r\n感谢您的使用',
    modify_time: '2018-05-09 17:43:50'
  },
  {
    id: 'OPENTM415785645',
    title: '接单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 21,
    content: '{{first.DATA}}\n接单时间：{{keyword1.DATA}}\n工程维修人员：{{keyword2.DATA}}\n维修人员电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的维修单已接收到啦！请稍等喔！\r\n接单时间：2018年5月8日 18:36\r\n工程维修人员：张三\r\n维修人员电话：13066668888\r\n工程小哥正排除万难赶过去了喔！',
    modify_time: '2018-05-11 19:28:28'
  },
  {
    id: 'OPENTM415782846',
    title: '账单催付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n工单号：{{keyword2.DATA}}\n订单号：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您提交的物业报修单\r\n提交时间：2014年7月21日 18:36\r\n工单号：2131231231231\r\n订单号：1231231231231\r\n完成时间：2014年7月21日 18:36\r\n费用：220元\r\n维修人员维修完毕，请及时支付账单',
    modify_time: '2018-05-11 16:40:03'
  },
  {
    id: 'OPENTM415785646',
    title: '接单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n接单时间：{{keyword1.DATA}}\n工程维修人员：{{keyword2.DATA}}\n维修人员电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的维修单已接收到啦！请稍等喔！\r\n接单时间：2018年5月8日 18:36\r\n工程维修人员：张三\r\n维修人员电话：13066668888\r\n工程小哥正排除万难赶过去了喔！',
    modify_time: '2018-05-11 19:28:29'
  },
  {
    id: 'OPENTM415835098',
    title: '工单提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 30,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n维修单号：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的工单已提交\r\n提交时间：2014年7月21日 18:36\r\n维修单号：230123021302130\r\n请等待管理人员派单',
    modify_time: '2018-05-16 16:56:26'
  },
  {
    id: 'OPENTM415758049',
    title: '工单进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n反馈内容：{{keyword1.DATA}}\n维修人员：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n反馈时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的进度反馈消息！\r\n反馈内容：主体损坏严重，需1-2个工作日处理完成\r\n维修人员：王某某\r\n联系电话：13966666666\r\n反馈时间：2015-05-04 14:50\r\n请及时查阅。',
    modify_time: '2018-05-09 17:04:54'
  },
  {
    id: 'OPENTM415785649',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n账单总金额：{{keyword1.DATA}}\n账单月份：{{keyword2.DATA}}\n计费期间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您本月帐单已出，请查收！\r\n账单总金额：5088\r\n账单月份：2018年5月\r\n计费期间：2018.5.1-2018.5.1.31\r\n请您于当月5日前，缴清以上费用，逾期将产生相关违约金，祝您生活及工作愉快！',
    modify_time: '2018-05-11 19:28:47'
  },
  {
    id: 'OPENTM415863052',
    title: '工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n工单关联位置：{{keyword1.DATA}}\n工单编号：{{keyword2.DATA}}\n工单内容：{{keyword3.DATA}}\n操作人：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '工单处理提醒\r\n工单关联位置：深圳红树西岸5栋11A\r\n工单编号：112\r\n工单内容：阳台玻璃门破裂\r\n操作人：张三\r\n时间：2015/8/9\r\n上门前工作人员将提前与您预约，请保持电话畅通，谢谢。',
    modify_time: '2018-05-18 20:32:40'
  },
  {
    id: 'OPENTM415939857',
    title: '在线选铺进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所选铺位：{{keyword1.DATA}}\n已交金额：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好,您参与的在线选铺进度有更新。\r\n所选铺位：地下一楼1028室\r\n已交金额：5000元\r\n时间：2018年3月21日 15:20\r\n感谢您的使用!',
    modify_time: '2018-05-25 17:30:44'
  },
  {
    id: 'OPENTM415939858',
    title: '在线选铺进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n所选铺位：{{keyword1.DATA}}\n已交金额：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好,您参与的在线选铺进度有更新。\r\n所选铺位：地下一楼1028室\r\n已交金额：5000元\r\n时间：2018年3月21日 15:20\r\n感谢您的使用!',
    modify_time: '2018-05-25 17:30:45'
  },
  {
    id: 'OPENTM415861560',
    title: '预估单提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n工程师姓名：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业报修\r\n维修单号：23123213213\r\n工程师姓名：陈飞\r\n联系方式：12312312312\r\n工程师已提交预估清单，请您尽快确认',
    modify_time: '2018-05-18 18:59:37'
  },
  {
    id: 'OPENTM415862213',
    title: '派工成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n报单类型：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n报单内容：{{keyword4.DATA}}\n派单时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的维修任务！\r\n报单类型：报事/报修\r\n业主姓名：林某\r\n联系电话：18900000000\r\n报单内容：走廊墙面开裂\r\n派单时间：2015.1.22 21:39\r\n请尽快核实处理。',
    modify_time: '2018-05-18 19:45:04'
  },
  {
    id: 'OPENTM416033214',
    title: '关闭订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n工单号：{{keyword2.DATA}}\n订单号：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您于提交的工单\r\n提交时间：2018年10月\r\n工单号：1212341241241\r\n订单号：13213123123123\r\n完成时间：2018年10月1日\r\n费用：220元\r\n该订单已被管理人员关闭，您无需支付，谢谢您的支持',
    modify_time: '2018-06-05 11:40:16'
  },
  {
    id: 'OPENTM416001319',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n住宅物业服务费：{{keyword1.DATA}}\n水费：{{keyword2.DATA}}\n电费：{{keyword3.DATA}}\n燃气费：{{keyword4.DATA}}\n其他：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '5月最新的账单已发布\r\n住宅物业服务费：69元\r\n水费：15元\r\n电费：30元\r\n燃气费：20元\r\n其他：10元\r\n合计：210元 为了让您生活方便请尽快缴纳。如已缴费，勿理会。 如有疑问，请拨打咨询热线02034778000。',
    modify_time: '2018-06-01 18:54:11'
  },
  {
    id: 'OPENTM415861570',
    title: '资料已提交通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n所属园区：{{keyword2.DATA}}\n详细地址：{{keyword3.DATA}}\n状态：{{keyword4.DATA}}\n理由：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的月租停车资料被打回\r\n车牌号：湘DM1333\r\n所属园区：虹桥园北区\r\n详细地址：华徐公路999号\r\n状态：打回\r\n理由：行驶证与车牌不符\r\n请您重新提交资料',
    modify_time: '2018-05-18 19:00:17'
  },
  {
    id: 'OPENTM416001321',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n住宅物业服务费：{{keyword1.DATA}}\n水费：{{keyword2.DATA}}\n电费：{{keyword3.DATA}}\n燃气费：{{keyword4.DATA}}\n其他：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '5月最新的账单已发布\r\n住宅物业服务费：69元\r\n水费：15元\r\n电费：30元\r\n燃气费：20元\r\n其他：10元\r\n合计：210元 为了让您生活方便请尽快缴纳。如已缴费，勿理会。 如有疑问，请拨打咨询热线02034778000。',
    modify_time: '2018-06-01 18:54:12'
  },
  {
    id: 'OPENTM416035571',
    title: '到期退房提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n入住时间：{{keyword1.DATA}}\n入住房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您入住的房间今天到期，请提前做好行程安排，以免带来不必要的麻烦！\r\n入住时间：20180129\r\n入住房间：10011房间\r\n感谢你的使用。',
    modify_time: '2018-06-05 16:44:27'
  },
  {
    id: 'OPENTM416035572',
    title: '到期退房提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n入住时间：{{keyword1.DATA}}\n入住房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您入住的房间今天到期，请提前做好行程安排，以免带来不必要的麻烦！\r\n入住时间：20180129\r\n入住房间：10011房间\r\n感谢你的使用。',
    modify_time: '2018-06-05 16:44:27'
  },
  {
    id: 'OPENTM415990074',
    title: '停车位记录通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车位：{{keyword2.DATA}}\n停车时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊贵的会员xxx您好，您的车辆 已经停放西安悦荟广场停车场，祝您购物愉快！\r\n车牌号：陕A12345\r\n停车位：B2-A232\r\n停车时间：2018-05-21 17:54:48\r\n欢迎光临。点此可进行停车位置查询，线上缴费，详情！',
    modify_time: '2018-05-31 17:25:18'
  },
  {
    id: 'OPENTM416002075',
    title: '物业费到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n到期时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您的住宅物业费已到期，为避免产生更多违约金，请及时缴费。\r\n房屋编号：1201-01-01-01\r\n到期时间：2018-01-01\r\n点击详情查看或者缴费',
    modify_time: '2018-06-01 19:58:11'
  },
  {
    id: 'OPENTM416002077',
    title: '物业费到期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n到期时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您的住宅物业费已到期，为避免产生更多违约金，请及时缴费。\r\n房屋编号：1201-01-01-01\r\n到期时间：2018-01-01\r\n点击详情查看或者缴费',
    modify_time: '2018-06-01 19:58:11'
  },
  {
    id: 'OPENTM416028977',
    title: '认证退回通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n认证信息：{{keyword1.DATA}}\n认证房屋信息：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的认证信息如下：\r\n认证信息：审核退回\r\n认证房屋信息：海陵区一号区1-101室\r\n上传的图片要能够体现您所绑定房屋的地址！',
    modify_time: '2018-06-04 20:01:57'
  },
  {
    id: 'OPENTM416035583',
    title: '入驻成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n入住时间：{{keyword1.DATA}}\n入住房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有预订的房间今天入住，请提前做好安排！\r\n入住时间：20180129\r\n入住房间：10011房间\r\n感谢你的使用。',
    modify_time: '2018-06-05 16:45:07'
  },
  {
    id: 'OPENTM415908690',
    title: '资料已上传通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n所属园区：{{keyword2.DATA}}\n详细地址：{{keyword3.DATA}}\n状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的月租停车资料已提交\r\n车牌号：湘DM1333\r\n所属园区：虹桥园北区\r\n详细地址：华徐公路999号\r\n状态：排队中\r\n请耐性等待',
    modify_time: '2018-05-22 20:12:51'
  },
  {
    id: 'OPENTM415939995',
    title: '报名成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n活动名称：{{keyword1.DATA}}\n活动时间：{{keyword2.DATA}}\n活动地点：{{keyword3.DATA}}\n会员姓名：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '会员活动报名成功通知\r\n活动名称：六一活动\r\n活动时间：2018年6月1日\r\n活动地点：不限\r\n会员姓名：邱思思\r\n感谢您参与窝趣活动，奖品即将派发，谢谢！',
    modify_time: '2018-05-25 17:44:05'
  },
  {
    id: 'OPENTM416029196',
    title: '预订成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n入住时间：{{keyword1.DATA}}\n入住房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您已成功预订房间，请做好行程安排！\r\n入住时间：20180601\r\n入住房间：一粒沙度假公寓 观海10011\r\n感谢您的使用。',
    modify_time: '2018-06-04 20:24:42'
  },
  {
    id: 'OPENTM416029198',
    title: '预订成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n入住时间：{{keyword1.DATA}}\n入住房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您已成功预订房间，请做好行程安排！\r\n入住时间：20180601\r\n入住房间：一粒沙度假公寓 观海10011\r\n感谢您的使用。',
    modify_time: '2018-06-04 20:24:42'
  },
  {
    id: 'OPENTM416050750',
    title: '审批通过提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n培训批次：{{keyword1.DATA}}\n培训时间：{{keyword2.DATA}}\n培训地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的报名已审核通过。\r\n培训批次：厦门市物业行业基础培训201805批\r\n培训时间：2018.06.05 08:00:00\r\n培训地点：集美软件园三期B02二楼\r\n感谢你的使用。',
    modify_time: '2018-06-06 19:45:19'
  },
  {
    id: 'OPENTM416223854',
    title: '账单支付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n账单总金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '以下是你的账单信息\r\n车牌号：湘DM1372\r\n账单总金额：150元\r\n请核实后缴费',
    modify_time: '2018-06-21 15:39:20'
  },
  {
    id: 'OPENTM416130561',
    title: '反馈处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n处理人：{{keyword1.DATA}}\n处理时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n处理描述：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您于2018-5-23反馈XXX社区问题，处理情况如下：\r\n处理人：李管家\r\n处理时间：2018-5-23 10:10：10\r\n处理结果：跟进\r\n处理描述：XXXXXX\r\n感谢您对窝趣的服务提出宝贵意见和建议，谢谢！',
    modify_time: '2018-06-15 15:23:09'
  },
  {
    id: 'OPENTM416069912',
    title: '资料驳回通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n所属园区：{{keyword2.DATA}}\n详细地址：{{keyword3.DATA}}\n状态：{{keyword4.DATA}}\n理由：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的月租停车资料被打回\r\n车牌号：湘DM1333\r\n所属园区：虹桥园\r\n详细地址：华徐公路999号\r\n状态：打回\r\n理由：行驶证与车牌不符\r\n请您重新提交资料',
    modify_time: '2018-06-08 20:43:27'
  },
  {
    id: 'OPENTM416267864',
    title: '缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '请您缴纳物业费\r\n房号：1902\r\n时间：2014年7月21日 18:36\r\n感谢您的配合，大明物业',
    modify_time: '2018-06-26 16:14:09'
  },
  {
    id: 'OPENTM416223765',
    title: '账单欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n费用明细：{{keyword1.DATA}}\n总金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '亲爱的用户，您好！您还有一笔账单没有支付，请及时支付\r\n费用明细：Xbox游戏机\r\n总金额：10元\r\n感谢您的使用',
    modify_time: '2018-06-21 15:31:04'
  },
  {
    id: 'OPENTM416215972',
    title: '门禁通行通知',
    class1: '房地产',
    class2: '物业',
    person_used: 41,
    content: '{{first.DATA}}\n开门时间：{{keyword1.DATA}}\n门禁位置：{{keyword2.DATA}}\n开门结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您已申请开门\r\n开门时间：2014年7月21日 18:36\r\n门禁位置：东门\r\n开门结果：开门成功！\r\n感谢您的使用！欢迎回家！',
    modify_time: '2018-06-20 16:13:51'
  },
  {
    id: 'OPENTM416069823',
    title: '报修工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修类型：{{keyword2.DATA}}\n报修用户：{{keyword3.DATA}}\n归属项目：{{keyword4.DATA}}\n报修地址：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '工单更新提醒\r\n报修单号：BX201801050912031128997646\r\n报修类型：公区\r\n报修用户：张三\r\n归属项目：方圆E时光\r\n报修地址：西区A栋707\r\n确定报价，待维修。',
    modify_time: '2018-06-08 20:37:24'
  },
  {
    id: 'OPENTM416101975',
    title: '资料提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n所属园区：{{keyword2.DATA}}\n详细地址：{{keyword3.DATA}}\n状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的月租停车资料已提交\r\n车牌号：湘DM1371\r\n所属园区：虹桥园\r\n详细地址：华徐公路999号\r\n状态：排队中\r\n请耐性等待',
    modify_time: '2018-06-12 15:34:05'
  },
  {
    id: 'OPENTM416121978',
    title: '维修改派成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n维修单号：{{keyword2.DATA}}\n工程师姓名：{{keyword3.DATA}}\n联系方式：{{keyword4.DATA}}\n上门时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业报修已派工，详情如下\r\n提交时间：20180511\r\n维修单号：13123jj`\r\n工程师姓名：13213123zfa\r\n联系方式：13585977661\r\n上门时间：20180511\r\n请您耐心等待',
    modify_time: '2018-06-14 17:08:01'
  },
  {
    id: 'OPENTM416270578',
    title: '车辆离场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n离场时间：{{keyword2.DATA}}\n停车时长：{{keyword3.DATA}}\n应付停车费：{{keyword4.DATA}}\n实付停车费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊贵的会员xxx您好，您的车辆 已经驶离西安悦荟停车场，祝您一路顺风。\r\n车牌号：陕A12345\r\n离场时间：2014年7月21日 18:36\r\n停车时长：01小时30分\r\n应付停车费：10元\r\n实付停车费：10元\r\n感谢您的光临，请您核对停车记录，欢迎再次光临。',
    modify_time: '2018-06-26 19:24:16'
  },
  {
    id: 'OPENTM416101980',
    title: '工单终止通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n维修单号：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的工单已提交提交\r\n提交时间：20181515\r\n维修单号：123123123rdasdasdas\r\n请等待管理人员派单',
    modify_time: '2018-06-12 15:34:23'
  },
  {
    id: 'OPENTM416121980',
    title: '维修改派成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n维修单号：{{keyword2.DATA}}\n工程师姓名：{{keyword3.DATA}}\n联系方式：{{keyword4.DATA}}\n上门时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业报修已派工，详情如下\r\n提交时间：20180511\r\n维修单号：13123jj`\r\n工程师姓名：13213123zfa\r\n联系方式：13585977661\r\n上门时间：20180511\r\n请您耐心等待',
    modify_time: '2018-06-14 17:08:02'
  },
  {
    id: 'OPENTM416101986',
    title: '账单支付通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n工单号：{{keyword2.DATA}}\n订单号：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您于提交的物业报修单\r\n提交时间：20180611\r\n工单号：1235414143dsdasd\r\n订单号：12313412tggvvc\r\n完成时间：20180611\r\n费用：200元\r\n维修人员维修完毕，请及时支付账单',
    modify_time: '2018-06-12 15:34:50'
  },
  {
    id: 'OPENTM416070539',
    title: '服务工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n发起时间：{{keyword1.DATA}}\n服务类别：{{keyword2.DATA}}\n问题描述：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好,你有新的待办工单需要处理!\r\n发起时间：2018年6月8日\r\n服务类别：发现上报\r\n问题描述：请登陆IT运维系统,尽快处理\r\n请登陆IT运维系统,尽快处理!',
    modify_time: '2018-06-08 21:27:57'
  },
  {
    id: 'OPENTM416036094',
    title: '认证授权申请状态提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 15,
    content: '{{first.DATA}}\n认证状态：{{keyword1.DATA}}\n小区名称：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '认证资料已提交，请等候物业审核。\r\n认证状态：正在审核\r\n小区名称：紫光信息港\r\n申请时间：2018-06-13 16:53:05\r\n立即授权，享长期开门权限',
    modify_time: '2018-06-05 17:21:50'
  },
  {
    id: 'OPENTM416267844',
    title: '扣款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n时间：{{keyword1.DATA}}\n扣款金额：{{keyword2.DATA}}\n账户余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户：\r\n时间：2018-6-23 15:36:02\r\n扣款金额：18.8\r\n账户余额：20.6\r\n尊敬的客户\\r\\n截至2018-6-23，您的烦租客账户情况如下：\\r\\n今日已成功扣款：18.8元\\r\\n当前账户余额：2.6元\\r\\n为保证正常的扣款交易，请及时登录平台充值。您可点击“我的-余额充值”进行充值，待系统自动扣款。',
    modify_time: '2018-06-26 16:12:38'
  },
  {
    id: 'OPENTM416123546',
    title: '服务评价提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n处理人：{{keyword1.DATA}}\n处理时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n处理描述：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您于2018-5-23评价XXX社区XXX服务，处理情况如下：\r\n处理人：李管家\r\n处理时间：2018-5-23 10:10：10\r\n处理结果：跟进\r\n处理描述：XXXXXX\r\n感谢您对窝趣的服务进行点评，谢谢！',
    modify_time: '2018-06-14 19:43:55'
  },
  {
    id: 'OPENTM416215447',
    title: '报修成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修类型：{{keyword2.DATA}}\n问题描述：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n联系信息：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '电表设备报修成功通知\r\n报修单号：20180617\r\n报修类型：通讯异常\r\n问题描述：通讯异常，无法采集\r\n报修时间：2018-06-17 18：00：00\r\n联系信息：小王，13200000000\r\n我们会尽快与您联系。',
    modify_time: '2018-06-20 15:19:57'
  },
  {
    id: 'OPENTM416123548',
    title: '服务评价提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n处理人：{{keyword1.DATA}}\n处理时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n处理描述：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您于2018-5-23评价XXX社区XXX服务，处理情况如下：\r\n处理人：李管家\r\n处理时间：2018-5-23 10:10：10\r\n处理结果：跟进\r\n处理描述：XXXXXX\r\n感谢您对窝趣的服务进行点评，谢谢！',
    modify_time: '2018-06-14 19:43:55'
  },
  {
    id: 'OPENTM416459951',
    title: '派件退回通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n快递单号：{{keyword1.DATA}}\n收件人姓名：{{keyword2.DATA}}\n收件人电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的XX：您派往XX小区的包裹已被退件，请另行联系收件人进行派送\r\n快递单号：551010198171\r\n收件人姓名：helen\r\n收件人电话：13898421936\r\n谢谢！',
    modify_time: '2018-07-04 17:54:49'
  },
  {
    id: 'OPENTM416478001',
    title: '报修处理逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n报修小区：{{keyword1.DATA}}\n负责客服：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有一条新的报修处理已逾期，业主需要您的帮助\r\n报修小区：玉门花园A区\r\n负责客服：小强\r\n报修时间：2018年6月21日 18:36\r\n报修内容：私搭乱建\r\n感谢您的关注！',
    modify_time: '2018-07-06 20:34:16'
  },
  {
    id: 'OPENTM416376502',
    title: '租约续期通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n手机号：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n到期时间：{{keyword4.DATA}}\n备注：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的周杰伦，您的租约将于7天后到期，请点击本消息及时续约\r\n姓名：周杰伦\r\n手机号：13838384848\r\n地址：台北101大厦顶层阁楼东北角2号房\r\n到期时间：2018年4月25日\r\n备注：租户续期\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2018-07-03 14:50:06'
  },
  {
    id: 'OPENTM416543502',
    title: '业务受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n时间：{{keyword1.DATA}}\n业务类型：{{keyword2.DATA}}\n商户名称：{{keyword3.DATA}}\n商户地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '商户业务受理通知\r\n时间：2018-04-08\r\n业务类型：延时闭店申请\r\n商户名称：永辉\r\n商户地址：A31\r\n新商户业务，请及时处理。',
    modify_time: '2018-07-13 16:35:34'
  },
  {
    id: 'OPENTM416478003',
    title: '报修处理逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n报修小区：{{keyword1.DATA}}\n负责客服：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有一条新的报修处理已逾期，业主需要您的帮助\r\n报修小区：玉门花园A区\r\n负责客服：小强\r\n报修时间：2018年6月21日 18:36\r\n报修内容：私搭乱建\r\n感谢您的关注！',
    modify_time: '2018-07-06 20:34:17'
  },
  {
    id: 'OPENTM416543503',
    title: '业务受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n时间：{{keyword1.DATA}}\n业务类型：{{keyword2.DATA}}\n商户名称：{{keyword3.DATA}}\n商户地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '商户业务受理通知\r\n时间：2018-04-08\r\n业务类型：延时闭店申请\r\n商户名称：永辉\r\n商户地址：A31\r\n新商户业务，请及时处理。',
    modify_time: '2018-07-13 16:35:35'
  },
  {
    id: 'OPENTM416545403',
    title: '电表电量提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n电表电量：{{keyword2.DATA}}\n截至日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '商铺号：1-A11\r\n电表电量：10.0kW·h\r\n截至日期：2018年07月12日 17时12分\r\n为了避免停电给您造成不便，请及时充值！',
    modify_time: '2018-07-13 19:40:16'
  },
  {
    id: 'OPENTM416525556',
    title: '新订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 23,
    content: '{{first.DATA}}\n提交时间：{{keyword1.DATA}}\n订单类型：{{keyword2.DATA}}\n客户信息：{{keyword3.DATA}}\n房屋信息：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有客户要看房啦，请及时处理\r\n提交时间：2018-07-09\r\n订单类型：看房\r\n客户信息：张丽 电话：1111111111111\r\n房屋信息：杭州市西湖区湖墅南路111号\r\n感谢您的使用。',
    modify_time: '2018-07-11 19:07:17'
  },
  {
    id: 'OPENTM416318817',
    title: '确认带看完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n约看时间：{{keyword1.DATA}}\n房源地址：{{keyword2.DATA}}\n租客姓名：{{keyword3.DATA}}\n租客电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你有一条租客带看已到期，请确认带看结果\r\n约看时间：2018-12-12 12:12:12\r\n房源地址：融科天城2期2单元22楼\r\n租客姓名：小明\r\n租客电话：18787980987\r\n请及时反馈带看结果，以便后期跟进！',
    modify_time: '2018-06-29 21:03:20'
  },
  {
    id: 'OPENTM416318818',
    title: '确认带看完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n约看时间：{{keyword1.DATA}}\n房源地址：{{keyword2.DATA}}\n租客姓名：{{keyword3.DATA}}\n租客电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你有一条租客带看已到期，请确认带看结果\r\n约看时间：2018-12-12 12:12:12\r\n房源地址：融科天城2期2单元22楼\r\n租客姓名：小明\r\n租客电话：18787980987\r\n请及时反馈带看结果，以便后期跟进！',
    modify_time: '2018-06-29 21:03:21'
  },
  {
    id: 'OPENTM416283673',
    title: '采样成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n采样单编号：{{keyword1.DATA}}\n单位名称：{{keyword2.DATA}}\n样品数量：{{keyword3.DATA}}\n采样人：{{keyword4.DATA}}\n采样时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '采样成功提醒!\r\n采样单编号：7834734754\r\n单位名称：XX公司\r\n样品数量：2\r\n采样人：张山\r\n采样时间：2018-02-05 10:30:34\r\nXX公司提醒您!',
    modify_time: '2018-06-27 15:14:43'
  },
  {
    id: 'OPENTM416283674',
    title: '采样成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n采样单编号：{{keyword1.DATA}}\n单位名称：{{keyword2.DATA}}\n样品数量：{{keyword3.DATA}}\n采样人：{{keyword4.DATA}}\n采样时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '采样成功提醒!\r\n采样单编号：7834734754\r\n单位名称：XX公司\r\n样品数量：2\r\n采样人：张山\r\n采样时间：2018-02-05 10:30:34\r\nXX公司提醒您!',
    modify_time: '2018-06-27 15:14:43'
  },
  {
    id: 'OPENTM416317478',
    title: '银行托收成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n费用年月：{{keyword1.DATA}}\n托收金额：{{keyword2.DATA}}\n托收时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的物业费托收成功。\r\n费用年月：2018年5月\r\n托收金额：250\r\n托收时间：2018年6月6日\r\n感谢您的支持。',
    modify_time: '2018-06-29 19:49:51'
  },
  {
    id: 'OPENTM416317481',
    title: '银行托收失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n费用年月：{{keyword1.DATA}}\n托收金额：{{keyword2.DATA}}\n失败原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好， 本次银行托收失败了。\r\n费用年月：2018年5月\r\n托收金额：250\r\n失败原因：余额不足\r\n请及时处理您的帐户，以便托收成功，谢谢。',
    modify_time: '2018-06-29 19:49:58'
  },
  {
    id: 'OPENTM416524182',
    title: '服务完成确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修时间：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n工程师：{{keyword3.DATA}}\n维修单位：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好，你的报修问题已申请完成，请您进行确认\r\n报修时间：2018-01-15 16:48:23\r\n报修内容：房屋窗户漏水\r\n工程师：工程师张三，联系电话13111111111\r\n维修单位：浙江金凯门业有限公司\r\n请您点击这里对本次维修服务进行确认',
    modify_time: '2018-07-11 16:59:35'
  },
  {
    id: 'OPENTM416524184',
    title: '服务完成确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修时间：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n工程师：{{keyword3.DATA}}\n维修单位：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好，你的报修问题已申请完成，请您进行确认\r\n报修时间：2018-01-15 16:48:23\r\n报修内容：房屋窗户漏水\r\n工程师：工程师张三，联系电话13111111111\r\n维修单位：浙江金凯门业有限公司\r\n请您点击这里对本次维修服务进行确认',
    modify_time: '2018-07-11 16:59:36'
  },
  {
    id: 'OPENTM416543138',
    title: '会议室预定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n会议室名称：{{keyword1.DATA}}\n客户姓名：{{keyword2.DATA}}\n客户电话：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的会议订单已确认\r\n会议室名称：第一会议室\r\n客户姓名：谢国立\r\n客户电话：15933853551\r\n预约时间：2018/8/10 12:02:01\r\n单号： 期待您的光临！如有疑问请致电第一会议室，客服电话：',
    modify_time: '2018-07-13 16:14:04'
  },
  {
    id: 'OPENTM416543140',
    title: '会议室预定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n会议室名称：{{keyword1.DATA}}\n客户姓名：{{keyword2.DATA}}\n客户电话：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的会议订单已确认\r\n会议室名称：第一会议室\r\n客户姓名：谢国立\r\n客户电话：15933853551\r\n预约时间：2018/8/10 12:02:01\r\n单号： 期待您的光临！如有疑问请致电第一会议室，客服电话：',
    modify_time: '2018-07-13 16:14:04'
  },
  {
    id: 'OPENTM416543496',
    title: '业务完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n受理时间：{{keyword1.DATA}}\n业务类型：{{keyword2.DATA}}\n商户名称：{{keyword3.DATA}}\n受理人：{{keyword4.DATA}}\n完成时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '商户业务完成通知\r\n受理时间：2014年7月21日 08:36\r\n业务类型：延时闭店申请\r\n商户名称：永辉\r\n受理人：A31\r\n完成时间：2014年7月21日 18:36\r\n您的业务申请已处理完成，谢谢使用！',
    modify_time: '2018-07-13 16:35:05'
  },
  {
    id: 'OPENTM416459949',
    title: '派件退回通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n快递单号：{{keyword1.DATA}}\n收件人姓名：{{keyword2.DATA}}\n收件人电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的XX：您派往XX小区的包裹已被退件，请另行联系收件人进行派送\r\n快递单号：551010198171\r\n收件人姓名：helen\r\n收件人电话：13898421936\r\n谢谢！',
    modify_time: '2018-07-04 17:54:48'
  },
  {
    id: 'OPENTM416666906',
    title: '挪车提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 25,
    content: '{{first.DATA}}\n挪车申请人：{{keyword1.DATA}}\n挪车详情：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，你有一条挪车提醒\r\n挪车申请人：系统提示\r\n挪车详情：业主，您的爱车挡住其他车辆，麻烦您挪一下，谢谢！\r\n如有疑问，请联系客服人员',
    modify_time: '2018-07-25 19:16:57'
  },
  {
    id: 'OPENTM416664458',
    title: '维修完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的维修单已完成。\r\n维修单号：WX0001\r\n完成时间：2018-07-24 11:00\r\n点击查看详情。',
    modify_time: '2018-07-25 15:06:17'
  },
  {
    id: 'OPENTM416664459',
    title: '维修完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的维修单已完成。\r\n维修单号：WX0001\r\n完成时间：2018-07-24 11:00\r\n点击查看详情。',
    modify_time: '2018-07-25 15:06:17'
  },
  {
    id: 'OPENTM416585063',
    title: '报修待付款通知',
    class1: '房地产',
    class2: '物业',
    person_used: 89,
    content: '{{first.DATA}}\n申请人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n维修费用：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的报修申请已经被系统确认，等待您的处理。\r\n申请人：李明\r\n联系电话：13354127777\r\n维修费用：￥500\r\n感谢您的支持，祝您生活愉快~',
    modify_time: '2018-07-17 10:51:24'
  },
  {
    id: 'OPENTM416545764',
    title: '新报修单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 20,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修时间：{{keyword2.DATA}}\n报修类型：{{keyword3.DATA}}\n报修位置：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【北京人家，最新报修提醒】\r\n报修单号：X201807001\r\n报修时间：2018-7-1 10:32\r\n报修类型：户内\r\n报修位置：1号楼1-101\r\n张三，1368****856',
    modify_time: '2018-07-13 20:03:51'
  },
  {
    id: 'OPENTM416666715',
    title: '新维修单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '有新的维修单。\r\n维修单号：WX0001\r\n时间：2018-07-24 10:00\r\n点击查看详情。',
    modify_time: '2018-07-25 18:52:23'
  },
  {
    id: 'OPENTM416608868',
    title: '派单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n时间：{{keyword1.DATA}}\n业务类型：{{keyword2.DATA}}\n商户名称：{{keyword3.DATA}}\n商户地址：{{keyword4.DATA}}\n受理人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，有新的业务派单请及时处理。\r\n时间：2018-07-15 17:25\r\n业务类型：排水维修\r\n商户名称：汉堡王\r\n商户地址：M109B\r\n受理人：李老四\r\n新派单请及时处理，谢谢。',
    modify_time: '2018-07-19 15:51:53'
  },
  {
    id: 'OPENTM416545773',
    title: '报修单受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修时间：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '【您的报修单已受理】\r\n报修单号：X201807001\r\n报修时间：2018-7-1 10:32\r\n报修内容：厕所漏水\r\n北京人家1号楼1-101',
    modify_time: '2018-07-13 20:04:11'
  },
  {
    id: 'OPENTM416619724',
    title: '审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n审核类型：{{keyword1.DATA}}\n审核结果：{{keyword2.DATA}}\n审核时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的帐号申请已通过审核\r\n审核类型：帐号申请\r\n审核结果：通过\r\n审核时间：2018年7月18日 16:13\r\n您可以登录电脑后台查看详情',
    modify_time: '2018-07-20 16:05:28'
  },
  {
    id: 'OPENTM416607725',
    title: '预订取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n会议室：{{keyword1.DATA}}\n会议室时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的会议室预订已取消。\r\n会议室：6楼603会议室\r\n会议室时间：2018/07/17 14:00-15:00\r\n如有疑问请致电物业管理(xxxxxxxxxx)。',
    modify_time: '2018-07-19 14:25:00'
  },
  {
    id: 'OPENTM416656577',
    title: '合同可领取通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n您的房产：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的合同已为可领取状态。\r\n客户姓名：张三\r\n您的房产：金域蓝湾1期1单元205\r\n您可在武汉万科客户服务号上选择合同领取方式。如有任何疑问，请联系027-88092666，027-85842399，027-83958819（9:00-18：00），谢谢！',
    modify_time: '2018-07-24 17:15:32'
  },
  {
    id: 'OPENTM416719379',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 20,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n账单项目：{{keyword2.DATA}}\n备注说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的张三，新的生活杂费账单已出，请及时缴费。\r\n应付金额：360.00元\r\n账单项目：详见账单明细\r\n备注说明：请在2018年7月5日前完成缴费，以免产生滞纳金\r\n查看账单明细及缴费，请点击详情。',
    modify_time: '2018-07-31 10:39:17'
  },
  {
    id: 'OPENTM416609482',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n您的房产：{{keyword1.DATA}}\n预约类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n预约地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的先生（女士）：\r\n您的房产：金域蓝湾一期1栋2单元305 已完成预约\r\n预约类型：草签\r\n预约时间：2018年7月18日\r\n预约地址：武汉市常青路\r\n如您有任何问题，请联系027-88092666，027-85842399，027-83958819（9:00-18：00），谢谢！',
    modify_time: '2018-07-19 16:47:28'
  },
  {
    id: 'OPENTM416673584',
    title: '电费欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n账户余额：{{keyword1.DATA}}\n结算时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，你的电费余额不足,请充值！\r\n账户余额：1.50元\r\n结算时间：2018年07月19日 23:59:59\r\n感谢你的使用！',
    modify_time: '2018-07-26 14:52:04'
  },
  {
    id: 'OPENTM416545435',
    title: '电表异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n通讯异常次数：{{keyword2.DATA}}\n创建时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，有电表发生异常，请及时处理\r\n商铺号：1-A11\r\n通讯异常次数：12次\r\n创建时间：2018-07-12 15:00:00',
    modify_time: '2018-07-13 19:43:00'
  },
  {
    id: 'OPENTM416590088',
    title: '派工成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修类型：{{keyword2.DATA}}\n报修位置：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【北京人家，报修单派工】\r\n报修单号：X201807001\r\n报修类型：户内\r\n报修位置：1号楼1-101\r\n报修内容：厕所漏水\r\n张三，1368****856',
    modify_time: '2018-07-17 19:27:40'
  },
  {
    id: 'OPENTM416609488',
    title: '门禁呼叫提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n呼叫位置：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的呼叫提醒\r\n呼叫位置：联发新天地7号楼1梯\r\n时间：2018年7月17日 15:55\r\n请点击详情进行查看和开门。',
    modify_time: '2018-07-19 16:48:01'
  },
  {
    id: 'OPENTM416719495',
    title: '交款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业单元：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单明细：{{keyword3.DATA}}\n账单总额：{{keyword4.DATA}}\n本次交款：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您已成功为以下账单交款。\r\n物业单元：天空花园1栋11A\r\n账单周期：2018-05-01~2018-05-31\r\n账单明细：租金￥1000；水费￥20.00；电费￥100.00\r\n账单总额：￥1120.00\r\n本次交款：￥1120.00\r\n本期账单已结清，感谢您的支持。',
    modify_time: '2018-07-31 10:48:03'
  },
  {
    id: 'OPENTM416545949',
    title: '订单评价提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n物业地址：{{keyword2.DATA}}\n竣工验收时间：{{keyword3.DATA}}\n配置专员：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你有新收配置订单已由配置专员提交竣工验收，请对配置专员进行评价！\r\n订单编号：2270876354728312\r\n物业地址：金岛御璟世家二期-2-1单元-603\r\n竣工验收时间：2018-12-12 12:12:12\r\n配置专员：张立\r\n请尽快完成评价！',
    modify_time: '2018-07-13 20:18:26'
  },
  {
    id: 'OPENTM416719649',
    title: '工单费用确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n维修内容：{{keyword1.DATA}}\n人工费：{{keyword2.DATA}}\n材料费：{{keyword3.DATA}}\n机械费：{{keyword4.DATA}}\n费用产生时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有偿工单费用待确认\r\n维修内容：空调维修\r\n人工费：50 元\r\n材料费：80 元\r\n机械费：100 元\r\n费用产生时间：2018-7-27 15:30:00\r\n请前往详情页进行确认,如有疑问,请联系123456',
    modify_time: '2018-07-31 11:04:01'
  },
  {
    id: 'OPENTM416845854',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客手机号码：{{keyword2.DATA}}\n访问房间：{{keyword3.DATA}}\n到访事由：{{keyword4.DATA}}\n预约时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '张三租客您好，您有一条访客预约申请消息\r\n访客姓名：李四\r\n访客手机号码：12938498899\r\n访问房间：水木1栋201室E间\r\n到访事由：送外卖\r\n预约时间：2018-08-29 12:20\r\n请前往处理。',
    modify_time: '2018-08-14 15:57:59'
  },
  {
    id: 'OPENTM416810361',
    title: '银行托收时间通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n费用年月：{{keyword1.DATA}}\n托收金额：{{keyword2.DATA}}\n托收时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，本月银行托收要开始了。\r\n费用年月：2018年5月\r\n托收金额：250\r\n托收时间：2018年6月6日\r\n请于托收日前保证托收帐户有足够余额，谢谢。',
    modify_time: '2018-08-10 17:45:16'
  },
  {
    id: 'OPENTM416792764',
    title: '月租续费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n车场名称：{{keyword2.DATA}}\n单价：{{keyword3.DATA}}\n过期时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的月租套餐即将过期，请及时续费\r\n车牌号码：京A5E30\r\n车场名称：北京顺迈\r\n单价：夜间包月套餐\r\n过期时间：600元\r\n感谢您使用汇泊智能停车系统',
    modify_time: '2018-08-08 17:00:06'
  },
  {
    id: 'OPENTM416809219',
    title: '电费欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n铺位号：{{keyword2.DATA}}\n账户余额：{{keyword3.DATA}}\n结算时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您电表余额不足，请及时缴费！\r\n业主姓名：张三\r\n铺位号：A1-001\r\n账户余额：-30.00元\r\n结算时间：2018年8月8日 01：00：00\r\n感谢您的使用，联系方式:0595-888888',
    modify_time: '2018-08-10 16:17:48'
  },
  {
    id: 'OPENTM416782523',
    title: '班车取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n发车计划：{{keyword1.DATA}}\n发车时间：{{keyword2.DATA}}\n预约座位：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，非常抱歉的通知您，您预约的班车已取消发车。\r\n发车计划：绿地长岛至东安路992号\r\n发车时间：2018年08月06日 10:00\r\n预约座位：2\r\n感谢您的使用，预约的款项将原路退回。',
    modify_time: '2018-08-07 16:24:33'
  },
  {
    id: 'OPENTM416782873',
    title: '开门失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n开门时间：{{keyword1.DATA}}\n开门位置：{{keyword2.DATA}}\n开门方式：{{keyword3.DATA}}\n失败原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: 'xxx（姓名）先生/女士（性别），门禁未开启！请查看原因\r\n开门时间：xx年xx月xx日 00:00（具体日期和时间）\r\n开门位置：xx小区xxxx（小区名称、门禁位置）\r\n开门方式：扫码开门（扫码开门/访客识别）\r\n失败原因：网络异常，请重试/权限不足\r\n广告广告广告广告广告（后台编辑，文案+链接）',
    modify_time: '2018-08-07 16:50:39'
  },
  {
    id: 'OPENTM416782874',
    title: '开门失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n开门时间：{{keyword1.DATA}}\n开门位置：{{keyword2.DATA}}\n开门方式：{{keyword3.DATA}}\n失败原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: 'xxx（姓名）先生/女士（性别），门禁未开启！请查看原因\r\n开门时间：xx年xx月xx日 00:00（具体日期和时间）\r\n开门位置：xx小区xxxx（小区名称、门禁位置）\r\n开门方式：扫码开门（扫码开门/访客识别）\r\n失败原因：网络异常，请重试/权限不足\r\n广告广告广告广告广告（后台编辑，文案+链接）',
    modify_time: '2018-08-07 16:50:39'
  },
  {
    id: 'OPENTM416729578',
    title: '门锁密码通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n大门密码：{{keyword2.DATA}}\n卧室密码：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您有房屋门锁已经安装完成\r\n物业地址：同新嘉园12栋2单元1204\r\n大门密码：123456\r\n卧室密码：123456\r\n提交竣工验收后，密码自动失效。请尽快完成房屋配置！',
    modify_time: '2018-08-01 15:51:56'
  },
  {
    id: 'OPENTM416737728',
    title: '预约待确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的物业有客户提交看房预约。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2018-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：188888888\r\n请尽快点击确定此预约或修改预约时间。',
    modify_time: '2018-08-02 15:17:07'
  },
  {
    id: 'OPENTM416737379',
    title: '账单欠款通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业单元：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单明细：{{keyword3.DATA}}\n账单总额：{{keyword4.DATA}}\n欠款金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您有账单尚未结清欠款。\r\n物业单元：天空花园1栋20D\r\n账单周期：2017-10-01 ~ 2017-10-30\r\n账单明细：押金￥3000.00，租金￥2000.00\r\n账单总额：￥5000.00\r\n欠款金额：￥5000.00\r\n请尽快结清欠款，感谢您的配合。',
    modify_time: '2018-08-02 14:43:03'
  },
  {
    id: 'OPENTM416782879',
    title: '开门成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n开门时间：{{keyword1.DATA}}\n开门位置：{{keyword2.DATA}}\n开门方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: 'xxx（姓名）先生/女士（性别），门禁已开启。欢迎回家！\r\n开门时间：xx年xx月xx日 00:00（具体日期和时间）\r\n开门位置：xx小区xxxx（小区名称、门禁位置）\r\n开门方式：扫码开门（扫码开门/访客识别）\r\n广告广告广告广告广告（后台编辑，文案+链接）',
    modify_time: '2018-08-07 16:51:06'
  },
  {
    id: 'OPENTM416782880',
    title: '开门成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n开门时间：{{keyword1.DATA}}\n开门位置：{{keyword2.DATA}}\n开门方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: 'xxx（姓名）先生/女士（性别），门禁已开启。欢迎回家！\r\n开门时间：xx年xx月xx日 00:00（具体日期和时间）\r\n开门位置：xx小区xxxx（小区名称、门禁位置）\r\n开门方式：扫码开门（扫码开门/访客识别）\r\n广告广告广告广告广告（后台编辑，文案+链接）',
    modify_time: '2018-08-07 16:51:07'
  },
  {
    id: 'OPENTM416729635',
    title: '访客预约提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n业主房号：{{keyword2.DATA}}\n访客姓名：{{keyword3.DATA}}\n到访车辆：{{keyword4.DATA}}\n到访时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您有新的访客预约\r\n业主姓名：王某某\r\n业主房号：恒裕中心 A区 三栋 1201\r\n访客姓名：李某某\r\n到访车辆：粤B XXXXX\r\n到访时间：2018-01-01 23\r\n请点击“详情”确认预约信息',
    modify_time: '2018-08-01 15:58:34'
  },
  {
    id: 'OPENTM416772736',
    title: '门禁已开通提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n开通时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的家人已开通人脸门禁\r\n住户姓名：张三\r\n开通时间：2018年8月1日 18:36\r\n请及时登录智慧新兴小区进行确认。',
    modify_time: '2018-08-06 15:58:43'
  },
  {
    id: 'OPENTM416800436',
    title: '工单报修进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n单号：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n工单状态：{{keyword4.DATA}}\n更新时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有工单新状态,请关注\r\n单号：2018080808\r\n地址：科技二路185号\r\n报修内容：电表更换\r\n工单状态：待评价\r\n更新时间：2018-08-08 11:25:00\r\n如有疑问,请联系物业客服部',
    modify_time: '2018-08-09 16:31:46'
  },
  {
    id: 'OPENTM416748237',
    title: '合同签署成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n签约空间：{{keyword1.DATA}}\n签约企业：{{keyword2.DATA}}\n签约金额：{{keyword3.DATA}}\n租赁时间：{{keyword4.DATA}}\n账单期数：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的合同信息如下\r\n签约空间：紫藤空间3号办公室\r\n签约企业：青创公司\r\n签约金额：2000元/月\r\n租赁时间：2018年5月5号-2019年5月5号\r\n账单期数：12期\r\n请核实！',
    modify_time: '2018-08-03 17:40:08'
  },
  {
    id: 'OPENTM416856087',
    title: '流程审批通知',
    class1: '房地产',
    class2: '物业',
    person_used: 22,
    content: '{{first.DATA}}\n流程类型：{{keyword1.DATA}}\n当前节点：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的流程待处理通知\r\n流程类型：请假申请\r\n当前节点：部门负责人\r\n 您有一个流程：【请假申请-行政部-张三-2018-08-01】需要处理，请点击本消息进行处理',
    modify_time: '2018-08-15 15:57:18'
  },
  {
    id: 'OPENTM416792940',
    title: '工单报修进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n维修地址：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n报修状态：{{keyword4.DATA}}\n更新时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有一个新工单待处理\r\n工单编号：20180807\r\n维修地址：紫禁城小区2号楼101\r\n报修内容：水龙头更换\r\n报修状态：待接单\r\n更新时间：2018-08-07\r\n如有疑问,请联系物业客服部123456',
    modify_time: '2018-08-08 17:20:15'
  },
  {
    id: 'OPENTM416792792',
    title: '外来车辆进厂申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n申请人：{{keyword1.DATA}}\n入厂事由：{{keyword2.DATA}}\n入厂时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，入场申请。\r\n申请人：张三\r\n入厂事由：无车\r\n入厂时间：2018-08-06\r\n点击查看详情',
    modify_time: '2018-08-08 17:03:09'
  },
  {
    id: 'OPENTM416837096',
    title: '工单已终止通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n工程师姓名：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的物业维修单号\r\n工程师姓名：祁莎\r\n联系方式：15601916063\r\n提交时间：2018-9-9 13:09:05\r\n管理员已终止工单，请查看新的派单或联系物业',
    modify_time: '2018-08-13 16:59:30'
  },
  {
    id: 'OPENTM417013450',
    title: '入住密码通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n公寓：{{keyword2.DATA}}\n入住时间：{{keyword3.DATA}}\n离开时间：{{keyword4.DATA}}\n密码：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'T公馆密码发送通知！\r\n订单号：H824917527033835\r\n公寓：T公馆玉律店 房间301号\r\n入住时间：2018-08-24 14:45:55\r\n离开时间：2018-08-26 12:45:55\r\n密码：123456\r\n密码务必记住，勿泄露予他人',
    modify_time: '2018-08-30 16:19:26'
  },
  {
    id: 'OPENTM416961351',
    title: '续费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n月卡：{{keyword1.DATA}}\n有效期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的月卡续费成功\r\n月卡：粤B-12345\r\n有效期：2018-07-20 至 2018-08-20\r\n有效期生效可能会延迟，若有疑问，请联系客服400-700-5305',
    modify_time: '2018-08-24 16:51:23'
  },
  {
    id: 'OPENTM416961353',
    title: '续费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n月卡：{{keyword1.DATA}}\n有效期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的月卡续费成功\r\n月卡：粤B-12345\r\n有效期：2018-07-20 至 2018-08-20\r\n有效期生效可能会延迟，若有疑问，请联系客服400-700-5305',
    modify_time: '2018-08-24 16:51:24'
  },
  {
    id: 'OPENTM417110808',
    title: '来访登记通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n公司：{{keyword2.DATA}}\n来访事由：{{keyword3.DATA}}\n来访时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你有新的访客申请，请审核。\r\n姓名：张三\r\n公司：中国港中旅\r\n来访事由：商务拜访\r\n来访时间：2018-09-07 20:00\r\n感谢使用微访客服务。',
    modify_time: '2018-09-11 10:25:18'
  },
  {
    id: 'OPENTM417082261',
    title: '申诉审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n状态：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n现业主：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的房产信息变更申请已审核完毕。\r\n状态：审核通过\r\n房号：1#1011\r\n现业主：黄大鹏\r\n感谢您的使用。',
    modify_time: '2018-09-07 18:50:49'
  },
  {
    id: 'OPENTM417013462',
    title: '断电通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n公寓：{{keyword2.DATA}}\n房间号：{{keyword3.DATA}}\n离开时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '即时断电，请各位租客注意\r\n订单号：H824917527033835\r\n公寓：T公馆玉律店\r\n房间号：202\r\n离开时间：2018-08-24 14:51:12\r\n尊敬的客户，您好! 请注意退房时间快到，即将断电。',
    modify_time: '2018-08-30 16:20:12'
  },
  {
    id: 'OPENTM417074812',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n截止日期：{{keyword1.DATA}}\n房间号：{{keyword2.DATA}}\n物业号：{{keyword3.DATA}}\n已欠物业服务费：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一条物业缴费通知信息\r\n截止日期：截止到2017年10月01日14时10分10秒\r\n房间号：YSXQ-15-0901\r\n物业号：35020336000107\r\n已欠物业服务费：￥20.00\r\n详细请点详情',
    modify_time: '2018-09-06 19:37:13'
  },
  {
    id: 'OPENTM417074813',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n截止日期：{{keyword1.DATA}}\n房间号：{{keyword2.DATA}}\n物业号：{{keyword3.DATA}}\n已欠物业服务费：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一条物业缴费通知信息\r\n截止日期：截止到2017年10月01日14时10分10秒\r\n房间号：YSXQ-15-0901\r\n物业号：35020336000107\r\n已欠物业服务费：￥20.00\r\n详细请点详情',
    modify_time: '2018-09-06 19:37:14'
  },
  {
    id: 'OPENTM417134365',
    title: '新申诉通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申诉房号：{{keyword1.DATA}}\n申诉人：{{keyword2.DATA}}\n申诉编号：{{keyword3.DATA}}\n申诉时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，有新的申诉需要处理\r\n申诉房号：1#1102\r\n申诉人：黄大鹏\r\n申诉编号：2018091111061088\r\n申诉时间：2018-09-11 11:06:10\r\n请登录管理后台办理。',
    modify_time: '2018-09-13 19:28:49'
  },
  {
    id: 'OPENTM417134367',
    title: '新申诉通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n申诉房号：{{keyword1.DATA}}\n申诉人：{{keyword2.DATA}}\n申诉编号：{{keyword3.DATA}}\n申诉时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，有新的申诉需要处理\r\n申诉房号：1#1102\r\n申诉人：黄大鹏\r\n申诉编号：2018091111061088\r\n申诉时间：2018-09-11 11:06:10\r\n请登录管理后台办理。',
    modify_time: '2018-09-13 19:28:50'
  },
  {
    id: 'OPENTM416996619',
    title: '门锁密码失效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n失效原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的门锁密码已失效。\r\n门店：明源公寓南沙店\r\n房间：9栋1单元101\r\n失效原因：逾期未缴费\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-08-28 16:28:17'
  },
  {
    id: 'OPENTM417083169',
    title: '收款单审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n空间：{{keyword1.DATA}}\n企业：{{keyword2.DATA}}\n类型：{{keyword3.DATA}}\n账单期数：{{keyword4.DATA}}\n收款金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一份新的收款单待审核\r\n空间：紫藤空间3号办公室\r\n企业：青创公司\r\n类型：房租\r\n账单期数：201806期\r\n收款金额：3000元\r\n请查阅！',
    modify_time: '2018-09-07 20:07:16'
  },
  {
    id: 'OPENTM416879778',
    title: '报修已完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您提交的物业报修单，维修人员已维修完毕\r\n维修单号：213921938213\r\n完成时间：2018年8月16日 17：00\r\n感谢您的支持',
    modify_time: '2018-08-17 17:49:42'
  },
  {
    id: 'OPENTM416867235',
    title: '门锁密码冻结通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n冻结原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门锁密码已被冻结。\r\n门店：明源公寓南沙店\r\n房间：9栋1单元101\r\n冻结原因：逾期未缴费\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-08-16 16:10:09'
  },
  {
    id: 'OPENTM417134335',
    title: '车场入场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的会员，欢迎光临智慧车场\r\n车牌号：粤-B12345\r\n停车场：阳光**停车场\r\n出场时，您可手机缴费。',
    modify_time: '2018-09-13 19:25:11'
  },
  {
    id: 'OPENTM416881087',
    title: '门锁密码启用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n有效期限：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门锁密码已被启用。\r\n门店：明源公寓南沙店\r\n房间：9栋1单元101\r\n有效期限：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-08-17 20:14:06'
  },
  {
    id: 'OPENTM417134337',
    title: '车场入场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的会员，欢迎光临智慧车场\r\n车牌号：粤-B12345\r\n停车场：阳光**停车场\r\n出场时，您可手机缴费。',
    modify_time: '2018-09-13 19:25:12'
  },
  {
    id: 'OPENTM416881088',
    title: '门锁密码启用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n有效期限：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门锁密码已被启用。\r\n门店：明源公寓南沙店\r\n房间：9栋1单元101\r\n有效期限：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-08-17 20:14:06'
  },
  {
    id: 'OPENTM417083241',
    title: '服务工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n客户信息：{{keyword2.DATA}}\n处理状态：{{keyword3.DATA}}\n归属园区：{{keyword4.DATA}}\n申请时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您收到一条物业服务通知信息。\r\n服务类型：会议室/场地订单\r\n客户信息：张三\r\n处理状态：已成功\r\n归属园区：羊城同创汇\r\n申请时间：2018-09-06 18:00\r\n请到个人中心查看并处理，感谢您的使用',
    modify_time: '2018-09-07 20:14:16'
  },
  {
    id: 'OPENTM417083242',
    title: '服务工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n服务类型：{{keyword1.DATA}}\n客户信息：{{keyword2.DATA}}\n处理状态：{{keyword3.DATA}}\n归属园区：{{keyword4.DATA}}\n申请时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您收到一条物业服务通知信息。\r\n服务类型：会议室/场地订单\r\n客户信息：张三\r\n处理状态：已成功\r\n归属园区：羊城同创汇\r\n申请时间：2018-09-06 18:00\r\n请到个人中心查看并处理，感谢您的使用',
    modify_time: '2018-09-07 20:14:17'
  },
  {
    id: 'OPENTM417228555',
    title: '交房通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n交付时间：{{keyword1.DATA}}\n所需材料：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三：\r\n交付时间：2018-10-28\r\n所需材料：入伙通知书、业主身份证、商品房买卖合同、2张一寸照\r\n联系电话：0773-5596888\r\n您购买的奥林匹克花园里约湖岸小区1 栋1 单元101号房我司即将交房',
    modify_time: '2018-09-20 19:12:53'
  },
  {
    id: 'OPENTM417228557',
    title: '交房通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n交付时间：{{keyword1.DATA}}\n所需材料：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三：\r\n交付时间：2018-10-28\r\n所需材料：入伙通知书、业主身份证、商品房买卖合同、2张一寸照\r\n联系电话：0773-5596888\r\n您购买的奥林匹克花园里约湖岸小区1 栋1 单元101号房我司即将交房',
    modify_time: '2018-09-20 19:12:54'
  },
  {
    id: 'OPENTM417200119',
    title: '维修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n维修单日期：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n维修状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您提交的报修单\r\n维修单日期：20180903\r\n报修内容：漏水\r\n维修状态：完成\r\n感谢您的使用谢谢！',
    modify_time: '2018-09-19 11:28:04'
  },
  {
    id: 'OPENTM417200169',
    title: '费用账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n账单周期：{{keyword3.DATA}}\n待缴金额：{{keyword4.DATA}}\n交租日：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单已生成，请及时缴纳。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n账单周期：12月份\r\n待缴金额：1200.00元\r\n交租日：12号\r\n点击查看费用详情。',
    modify_time: '2018-09-19 11:36:58'
  },
  {
    id: 'OPENTM417141672',
    title: '解绑成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属车位：{{keyword2.DATA}}\n解绑时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您已经解绑车位成功！\r\n所属小区：小区名称\r\n所属车位：10001\r\n解绑时间：2018-09-13 10:00:00\r\n感谢你的使用。',
    modify_time: '2018-09-14 19:52:46'
  },
  {
    id: 'OPENTM417141674',
    title: '绑定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n绑定昵称：{{keyword1.DATA}}\n绑定时间：{{keyword2.DATA}}\n绑定车位：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，恭喜您绑定车位成功！\r\n绑定昵称：小三\r\n绑定时间：2018-09-13 10:00:00\r\n绑定车位：10001\r\n您可以方便的在线缴费了！',
    modify_time: '2018-09-14 19:52:56'
  },
  {
    id: 'OPENTM417141676',
    title: '绑定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n绑定昵称：{{keyword1.DATA}}\n绑定时间：{{keyword2.DATA}}\n绑定车位：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，恭喜您绑定车位成功！\r\n绑定昵称：小三\r\n绑定时间：2018-09-13 10:00:00\r\n绑定车位：10001\r\n您可以方便的在线缴费了！',
    modify_time: '2018-09-14 19:52:57'
  },
  {
    id: 'OPENTM417141079',
    title: '欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n欠费房间：{{keyword1.DATA}}\n欠费总额：{{keyword2.DATA}}\n欠费账期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您当前有欠费未还清，请及时支付。\r\n欠费房间：40-01-0101 \r\n欠费总额：200.00元\r\n欠费账期：2018-06\r\n如对账单有疑问，请查看详情。',
    modify_time: '2018-09-14 18:57:49'
  },
  {
    id: 'OPENTM417363084',
    title: '物业费催缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房产信息：{{keyword1.DATA}}\n缴费期限：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主,您的房产的物业费即将到期,请及时缴纳物业费。\r\n房产信息： 华翔路33号1号楼1单元1-1\r\n缴费期限：2018-01-01~2018-12-01\r\n缴费金额：1854.30元\r\n如有任何疑问,请与小区物业管理人员进行联系。',
    modify_time: '2018-09-28 18:56:10'
  },
  {
    id: 'OPENTM417363035',
    title: '门禁密码启用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n门禁名：{{keyword2.DATA}}\n有效期限：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门禁密码已启用。\r\n门店：明源公寓南沙店\r\n门禁名：一号门、二号门\r\n有效期限：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-09-28 18:45:30'
  },
  {
    id: 'OPENTM417363037',
    title: '门禁密码启用通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n门禁名：{{keyword2.DATA}}\n有效期限：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门禁密码已启用。\r\n门店：明源公寓南沙店\r\n门禁名：一号门、二号门\r\n有效期限：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-09-28 18:45:31'
  },
  {
    id: 'OPENTM417363038',
    title: '门禁密码失效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n门禁名：{{keyword2.DATA}}\n失效时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门禁密码已失效。\r\n门店：明源公寓南沙店\r\n门禁名：一号门、二号门\r\n失效时间：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-09-28 18:45:45'
  },
  {
    id: 'OPENTM417363039',
    title: '门禁密码失效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n门禁名：{{keyword2.DATA}}\n失效时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门禁密码已失效。\r\n门店：明源公寓南沙店\r\n门禁名：一号门、二号门\r\n失效时间：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-09-28 18:45:46'
  },
  {
    id: 'OPENTM417142340',
    title: '退房申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n公寓：{{keyword2.DATA}}\n房间号：{{keyword3.DATA}}\n客服姓名：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的退房申请已发送\r\n订单号：123464646464\r\n公寓：T公馆\r\n房间号：201\r\n客服姓名：张先生 13076800247 \r\n您的申请发送，稍后有服务人员联系你',
    modify_time: '2018-09-14 20:43:09'
  },
  {
    id: 'OPENTM417363040',
    title: '门禁密码失效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n门禁名：{{keyword2.DATA}}\n失效时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门禁密码已失效。\r\n门店：明源公寓南沙店\r\n门禁名：一号门、二号门\r\n失效时间：2018年12月21日\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-09-28 18:45:46'
  },
  {
    id: 'OPENTM417363042',
    title: '取号成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n您的排队号码：{{keyword1.DATA}}\n当前等待人数：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三业主，恭喜您取号成功：\r\n您的排队号码：A007(预约号)\r\n当前等待人数：5位\r\n请在休息区耐心等候，我们将尽快为您服务！',
    modify_time: '2018-09-28 18:46:37'
  },
  {
    id: 'OPENTM417363044',
    title: '取号成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n您的排队号码：{{keyword1.DATA}}\n当前等待人数：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三业主，恭喜您取号成功：\r\n您的排队号码：A007(预约号)\r\n当前等待人数：5位\r\n请在休息区耐心等候，我们将尽快为您服务！',
    modify_time: '2018-09-28 18:46:38'
  },
  {
    id: 'OPENTM417363045',
    title: '月租付费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车场名称：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n付费金额：{{keyword3.DATA}}\n使用期限：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的月租付费已成功\r\n车场名称：广州维多利\r\n车牌号码：粤A53E5B\r\n付费金额：2000元\r\n使用期限：2018-09-18至2019-09-17\r\n欢迎使用汇泊停车',
    modify_time: '2018-09-28 18:46:55'
  },
  {
    id: 'OPENTM417349946',
    title: '充电结束通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n充电地址：{{keyword1.DATA}}\n起止时间：{{keyword2.DATA}}\n充电时长：{{keyword3.DATA}}\n消费金额：{{keyword4.DATA}}\n账户余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的王小虎，您的电动车充电已结束\r\n充电地址：科技园10号插座\r\n起止时间：2018-09-23 09:44:03至2018-08-08 10:48:04\r\n充电时长：1小时4分1秒\r\n消费金额：1.36元\r\n账户余额：98.64元\r\n感谢你的使用。',
    modify_time: '2018-09-27 17:24:57'
  },
  {
    id: 'OPENTM417363046',
    title: '月租付费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车场名称：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n付费金额：{{keyword3.DATA}}\n使用期限：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的月租付费已成功\r\n车场名称：广州维多利\r\n车牌号码：粤A53E5B\r\n付费金额：2000元\r\n使用期限：2018-09-18至2019-09-17\r\n欢迎使用汇泊停车',
    modify_time: '2018-09-28 18:46:56'
  },
  {
    id: 'OPENTM417501106',
    title: '活动报名成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 44,
    content: '{{first.DATA}}\n活动时间：{{keyword1.DATA}}\n活动地点：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的顾客您好，恭喜您报名成功会员沙龙活动\r\n活动时间：2018年10月1日\r\n活动地点：广州安华汇1层服务台\r\n请您按照活动时间准时参与活动！谢谢',
    modify_time: '2018-10-17 21:11:34'
  },
  {
    id: 'OPENTM417523806',
    title: '客户信息登记成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n登记人员：{{keyword1.DATA}}\n登记时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '客户：xxx，已经登记成功！\r\n登记人员：张大山\r\n登记时间：2016-10-11 15:15:15\r\n请及时回复信息',
    modify_time: '2018-10-19 20:11:39'
  },
  {
    id: 'OPENTM417520658',
    title: '公寓租赁账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n费用明细：{{keyword1.DATA}}\n合计：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三租户，请您查收本月缴费清单：\r\n费用明细：租金1000元、水电费用200元、管理费用50元、增值服务费用50元、押金费用500元、滞纳金0元\r\n合计：1800元\r\n为避免欠费产生滞纳金，请您及时缴费。',
    modify_time: '2018-10-19 18:24:08'
  },
  {
    id: 'OPENTM417491160',
    title: '退房申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n退房申请日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的退房申请单被撤回，原因：过早退房\r\n房间号：红花岭·2栋3单元3层301\r\n退房申请日期：2018/01/01\r\n请点击详情查看。如有疑问，请拨打12233。',
    modify_time: '2018-10-16 19:39:35'
  },
  {
    id: 'OPENTM417520660',
    title: '公寓租赁账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n费用明细：{{keyword1.DATA}}\n合计：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三租户，请您查收本月缴费清单：\r\n费用明细：租金1000元、水电费用200元、管理费用50元、增值服务费用50元、押金费用500元、滞纳金0元\r\n合计：1800元\r\n为避免欠费产生滞纳金，请您及时缴费。',
    modify_time: '2018-10-19 18:24:08'
  },
  {
    id: 'OPENTM417491162',
    title: '房间预定结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租赁期限：{{keyword2.DATA}}\n租金：{{keyword3.DATA}}\n定金：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三，您的预定单已签约成功！\r\n房间号：红花岭·2栋1单元3层301\r\n租赁期限：2018-10-01至2021-10-01\r\n租金：3000元\r\n定金：1000元\r\n请点击详情查看。如有疑问，请拨打12345。',
    modify_time: '2018-10-16 19:40:01'
  },
  {
    id: 'OPENTM417491164',
    title: '合同签约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租赁期限：{{keyword2.DATA}}\n押金：{{keyword3.DATA}}\n租金：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三，您的租房合同已签约成功，请查看\r\n房间号：红花岭·2栋3单元1层101\r\n租赁期限：2018-10-01至2021-10-01\r\n押金：1000元\r\n租金：3000元\r\n请点击详情查看。如有疑问，请拨打12233。',
    modify_time: '2018-10-16 19:40:37'
  },
  {
    id: 'OPENTM417440518',
    title: '物业账单变动通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n账单周期：{{keyword3.DATA}}\n变动原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单有变动，请及时查看。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n账单周期：12月份\r\n变动原因：金额变动\r\n点击查看账单详情。',
    modify_time: '2018-10-09 17:44:31'
  },
  {
    id: 'OPENTM417450419',
    title: '物业缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n客户地址：{{keyword2.DATA}}\n欠费金额：{{keyword3.DATA}}\n截止日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的欠费通知\r\n客户名称：张三\r\n客户地址：阳光花园10栋A101\r\n欠费金额：3000.00\r\n截止日期：2014年7月21日 18:36\r\n请尽快缴纳，如有疑问，请咨询阳光花园物业管理处。',
    modify_time: '2018-10-10 20:09:51'
  },
  {
    id: 'OPENTM417440520',
    title: '物业账单变动通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n账单周期：{{keyword3.DATA}}\n变动原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单有变动，请及时查看。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n账单周期：12月份\r\n变动原因：金额变动\r\n点击查看账单详情。',
    modify_time: '2018-10-09 17:44:32'
  },
  {
    id: 'OPENTM417565876',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n客服热线：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您成功预约企业服务，我们工作人员会与您联系\r\n预约时间：2018-10-18\r\n状态：预约成功\r\n客服热线：020-123456789\r\n感谢您的使用',
    modify_time: '2018-10-23 19:32:29'
  },
  {
    id: 'OPENTM417363229',
    title: '新投诉通知',
    class1: '房地产',
    class2: '物业',
    person_used: 18,
    content: '{{first.DATA}}\n投诉编号：{{keyword1.DATA}}\n投诉时间：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '北京人家\r\n投诉编号：CP201802006\r\n投诉时间：2018.03.05 15:36\r\n投诉内容：单元门口垃圾未及时清理。\r\n张三，136****9568',
    modify_time: '2018-09-28 19:35:51'
  },
  {
    id: 'OPENTM417363086',
    title: '物业费催缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n房产信息：{{keyword1.DATA}}\n缴费期限：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主,您的房产的物业费即将到期,请及时缴纳物业费。\r\n房产信息： 华翔路33号1号楼1单元1-1\r\n缴费期限：2018-01-01~2018-12-01\r\n缴费金额：1854.30元\r\n如有任何疑问,请与小区物业管理人员进行联系。',
    modify_time: '2018-09-28 18:56:10'
  },
  {
    id: 'OPENTM417467436',
    title: '入住验房通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n入住时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的***，您的入住移交书已生成。\r\n房间号：红花岭·2栋1单元1层101\r\n入住时间：2018-01-01\r\n请点击详情查看。如有疑问，请拨号12233。',
    modify_time: '2018-10-12 20:07:58'
  },
  {
    id: 'OPENTM417520637',
    title: '停车费账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车号：{{keyword1.DATA}}\n金额：{{keyword2.DATA}}\n状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您2018年10月的停车费账单已出\r\n车号：苏M12345\r\n金额：30.00元\r\n状态：待付款\r\n感谢您的使用，如果您已缴费请忽略此消息。具体可点详情',
    modify_time: '2018-10-19 18:19:40'
  },
  {
    id: 'OPENTM417467438',
    title: '入住验房通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n入住时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的***，您的入住移交书已生成。\r\n房间号：红花岭·2栋1单元1层101\r\n入住时间：2018-01-01\r\n请点击详情查看。如有疑问，请拨号12233。',
    modify_time: '2018-10-12 20:07:59'
  },
  {
    id: 'OPENTM417520639',
    title: '停车费账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n车号：{{keyword1.DATA}}\n金额：{{keyword2.DATA}}\n状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您2018年10月的停车费账单已出\r\n车号：苏M12345\r\n金额：30.00元\r\n状态：待付款\r\n感谢您的使用，如果您已缴费请忽略此消息。具体可点详情',
    modify_time: '2018-10-19 18:19:41'
  },
  {
    id: 'OPENTM417484446',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n客服热线：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您预约了看房服务\r\n预约时间：2018-10-10 18:00\r\n状态：预约成功\r\n地址：广州市越秀区东江路188号\r\n客服热线：020-1234567\r\n感谢您的使用',
    modify_time: '2018-10-15 19:41:41'
  },
  {
    id: 'OPENTM417484447',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n状态：{{keyword2.DATA}}\n地址：{{keyword3.DATA}}\n客服热线：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您预约了看房服务\r\n预约时间：2018-10-10 18:00\r\n状态：预约成功\r\n地址：广州市越秀区东江路188号\r\n客服热线：020-1234567\r\n感谢您的使用',
    modify_time: '2018-10-15 19:41:41'
  },
  {
    id: 'OPENTM417582348',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '缴费通知\r\n车牌号码：粤B54321\r\n停车场：南昌世贸广场\r\n缴费金额：8.00元\r\n支付时间：2018年10月22日 10:01:08\r\n您已经成功支付停车费，请在30分钟内离场，超时将重新计算停车费。',
    modify_time: '2018-10-25 16:32:11'
  },
  {
    id: 'OPENTM417582557',
    title: '物业欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n欠费房间：{{keyword1.DATA}}\n欠费总额：{{keyword2.DATA}}\n欠费账期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您当前有欠费未还清，请及时支付。\r\n欠费房间：40-01-0101\r\n欠费总额：200.00元\r\n欠费账期：2018-06\r\n如对账单有疑问，请查看详情。',
    modify_time: '2018-10-25 17:40:42'
  },
  {
    id: 'OPENTM417582559',
    title: '物业欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n欠费房间：{{keyword1.DATA}}\n欠费总额：{{keyword2.DATA}}\n欠费账期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您当前有欠费未还清，请及时支付。\r\n欠费房间：40-01-0101\r\n欠费总额：200.00元\r\n欠费账期：2018-06\r\n如对账单有疑问，请查看详情。',
    modify_time: '2018-10-25 17:40:43'
  },
  {
    id: 'OPENTM417724309',
    title: '报备通过提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户电话：{{keyword2.DATA}}\n经纪人：{{keyword3.DATA}}\n报备时间：{{keyword4.DATA}}\n带看时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，东莞万达盘楼已报备成功！\r\n客户姓名：张先生\r\n客户电话：137****7777\r\n经纪人：李小姐 137*8888\r\n报备时间：2018-11-11 12:00\r\n带看时间：1小时之后\r\n报备成功[点击查看详情]',
    modify_time: '2018-11-08 19:11:11'
  },
  {
    id: 'OPENTM417691462',
    title: '退房对帐单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n押金：{{keyword1.DATA}}\n水电押金：{{keyword2.DATA}}\n租金：{{keyword3.DATA}}\n水费：{{keyword4.DATA}}\n电费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '805房申请退房\r\n押金：3000元\r\n水电押金：50元\r\n租金：1500元\r\n水费：20元\r\n电费：50元\r\n退款金额:1480元',
    modify_time: '2018-10-31 17:40:04'
  },
  {
    id: 'OPENTM417724262',
    title: '车位预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n停车场库：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '抱歉！您提交的车位预约申请未能给您分配到车位\r\n预约时间：今天13:30\r\n停车场库：瑞安广场\r\n您可继续等待车位空出，或前往取消订单并尝试预约其它时间。',
    modify_time: '2018-11-08 18:55:34'
  },
  {
    id: 'OPENTM417724263',
    title: '车位预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n预约时间：{{keyword1.DATA}}\n停车场库：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '抱歉！您提交的车位预约申请未能给您分配到车位\r\n预约时间：今天13:30\r\n停车场库：瑞安广场\r\n您可继续等待车位空出，或前往取消订单并尝试预约其它时间。',
    modify_time: '2018-11-08 18:55:35'
  },
  {
    id: 'OPENTM417601564',
    title: '车位预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n车位编号：{{keyword1.DATA}}\n停车时间：{{keyword2.DATA}}\n停车场库：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好！您预约的车位已申请成功\r\n车位编号：706\r\n停车时间：2018-10-12 11:30\r\n停车场库：瑞安广场\r\n详情进入车位锁开锁页面，您可提前入场，车位保留至预约停车时间后半小时',
    modify_time: '2018-10-26 20:16:58'
  },
  {
    id: 'OPENTM417691464',
    title: '退房对帐单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n押金：{{keyword1.DATA}}\n水电押金：{{keyword2.DATA}}\n租金：{{keyword3.DATA}}\n水费：{{keyword4.DATA}}\n电费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '805房申请退房\r\n押金：3000元\r\n水电押金：50元\r\n租金：1500元\r\n水费：20元\r\n电费：50元\r\n退款金额:1480元',
    modify_time: '2018-10-31 17:40:04'
  },
  {
    id: 'OPENTM417694616',
    title: '房租逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n逾期天数：{{keyword1.DATA}}\n金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您这个月费用已逾期，请尽快付清！\r\n逾期天数：10天\r\n金额：1000元\r\n谢谢您的支持！',
    modify_time: '2018-10-31 19:12:43'
  },
  {
    id: 'OPENTM417601568',
    title: '车位预约失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车场库：{{keyword1.DATA}}\n预约停车时间：{{keyword2.DATA}}\n预约失败原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '抱歉！您预约的车位获取失败\r\n停车场库：瑞安广场\r\n预约停车时间：2018-10-12 11:30\r\n预约失败原因：积分抵扣不足\r\n车位预约成功需抵扣300积分， 您的当前可用200积分',
    modify_time: '2018-10-26 20:17:37'
  },
  {
    id: 'OPENTM417601570',
    title: '车位预约失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车场库：{{keyword1.DATA}}\n预约停车时间：{{keyword2.DATA}}\n预约失败原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '抱歉！您预约的车位获取失败\r\n停车场库：瑞安广场\r\n预约停车时间：2018-10-12 11:30\r\n预约失败原因：积分抵扣不足\r\n车位预约成功需抵扣300积分， 您的当前可用200积分',
    modify_time: '2018-10-26 20:17:37'
  },
  {
    id: 'OPENTM417720420',
    title: '排号叫号通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n您的排队号码：{{keyword1.DATA}}\n当前等待人数：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三业主，您的最新排号情况如下：\r\n您的排队号码：A007（预约号）\r\n当前等待人数：50\r\n当前等待人数为50，请耐心等待，我们将尽快为您服务！',
    modify_time: '2018-11-02 21:41:21'
  },
  {
    id: 'OPENTM417720422',
    title: '排号叫号通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n您的排队号码：{{keyword1.DATA}}\n当前等待人数：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三业主，您的最新排号情况如下：\r\n您的排队号码：A007（预约号）\r\n当前等待人数：50\r\n当前等待人数为50，请耐心等待，我们将尽快为您服务！',
    modify_time: '2018-11-02 21:41:21'
  },
  {
    id: 'OPENTM417726424',
    title: '门禁呼叫通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个开门呼叫，请及时接听！\r\n小区：碧水人家\r\n房号：2栋1单元2001号\r\n时间：2018年7月21日 18:36\r\n如有疑问请联系物业',
    modify_time: '2018-11-12 15:48:59'
  },
  {
    id: 'OPENTM417694678',
    title: '门禁审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n空间：{{keyword1.DATA}}\n企业：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '门禁申请提交\r\n空间：海他空间\r\n企业：第三企业\r\n联系人：小明\r\n联系电话：1588866**66\r\n感谢你的使用',
    modify_time: '2018-10-31 19:40:43'
  },
  {
    id: 'OPENTM417694680',
    title: '门禁审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n空间：{{keyword1.DATA}}\n企业：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '门禁申请提交\r\n空间：海他空间\r\n企业：第三企业\r\n联系人：小明\r\n联系电话：1588866**66\r\n感谢你的使用',
    modify_time: '2018-10-31 19:40:44'
  },
  {
    id: 'OPENTM417720285',
    title: '退房对帐单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n退房日期：{{keyword2.DATA}}\n退还金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的退房已成功！\r\n房号：805\r\n退房日期：2018-08-08\r\n退还金额：1000元\r\n感谢您的支持！',
    modify_time: '2018-11-02 21:02:05'
  },
  {
    id: 'OPENTM417724288',
    title: '预约结果变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n原预约时间：{{keyword1.DATA}}\n更变后时间：{{keyword2.DATA}}\n预约地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你预约的家政服务上门时间已更变。\r\n原预约时间：2018年7月27日 08:00\r\n更变后时间：2018年7月28日 14:00\r\n预约地址：北京市xxx小区x栋2205\r\n感谢你的使用。',
    modify_time: '2018-11-08 19:05:20'
  },
  {
    id: 'OPENTM417601396',
    title: '申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n城市：{{keyword1.DATA}}\n地区：{{keyword2.DATA}}\n社区：{{keyword3.DATA}}\n户室：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '欢迎加⼊柚浦智慧社区！ 您正在申请以下社区户室的业主权限， \r\n城市：杭州市\r\n地区：萧山区\r\n社区：湖滨花园\r\n户室：6幢7单元203室\r\n登录柚浦智慧社区⼩程序，查看更多社区公告及服务体验。',
    modify_time: '2018-10-26 19:29:05'
  },
  {
    id: 'OPENTM417582349',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '缴费通知\r\n车牌号码：粤B54321\r\n停车场：南昌世贸广场\r\n缴费金额：8.00元\r\n支付时间：2018年10月22日 10:01:08\r\n您已经成功支付停车费，请在30分钟内离场，超时将重新计算停车费。',
    modify_time: '2018-10-25 16:32:12'
  },
  {
    id: 'OPENTM417733600',
    title: '送水单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n桶数：{{keyword1.DATA}}\n送水地点：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，收到送水通知，请尽快派送！\r\n桶数：3桶\r\n送水地点：创智中心3号楼710室\r\n联系人：露娜\r\n联系电话：17826988888\r\n查看服务号个人中心内的饮水管理可查看详情。',
    modify_time: '2018-11-20 20:34:20'
  },
  {
    id: 'OPENTM417733451',
    title: '水电费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n费用金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月水电费已出。\r\n业主姓名：凌微\r\n地址：海创大厦A804\r\n费用金额：35\r\n请尽快缴纳，如有疑问，请咨询0571-87192869',
    modify_time: '2018-11-20 19:44:59'
  },
  {
    id: 'OPENTM417733501',
    title: '工单处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 45,
    content: '{{first.DATA}}\n报修类型：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '有业主上报新的工单，请处理\r\n报修类型：水电维修\r\n报修地址：丽都小区1-3-2\r\n报修内容：厕所下水道堵塞\r\n点击查看详情',
    modify_time: '2018-11-20 20:10:30'
  },
  {
    id: 'OPENTM417735754',
    title: '租金账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n缴费截止日期：{{keyword3.DATA}}\n客服电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '租金账单通知\r\n房间：测试小区1栋2单元206\r\n租期：2018-11-01至2018-11-30\r\n缴费截止日期：2600\r\n客服电话：23310000\r\n您可点击查看账单详情并缴费，谢谢！',
    modify_time: '2018-11-22 19:28:45'
  },
  {
    id: 'OPENTM417738404',
    title: '租金账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n租金：{{keyword3.DATA}}\n缴费截止时间：{{keyword4.DATA}}\n客服电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的本月账单已生成，请尽快支付。\r\n房间：测试小区1栋506\r\n租期：2018-11-01至2018-11-30\r\n租金：1800元\r\n缴费截止时间：2018-10-24\r\n客服电话：4000-888-000\r\n您可点击查看账单详情并缴费，谢谢！',
    modify_time: '2018-11-26 16:13:57'
  },
  {
    id: 'OPENTM417736411',
    title: '退款待确认提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n应退金额：{{keyword1.DATA}}\n费用明细：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的退款账单已生成，请您确认\r\n应退金额：1200元\r\n费用明细：押金\r\n查看账单详情',
    modify_time: '2018-11-23 21:46:49'
  },
  {
    id: 'OPENTM417736413',
    title: '退款待确认提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n应退金额：{{keyword1.DATA}}\n费用明细：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的退款账单已生成，请您确认\r\n应退金额：1200元\r\n费用明细：押金\r\n查看账单详情',
    modify_time: '2018-11-23 21:46:49'
  },
  {
    id: 'OPENTM417740324',
    title: '投诉结单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n投诉编号：{{keyword1.DATA}}\n投诉时间：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n结单时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的投诉已结单。点击查看详情，并期待您的满意度评价。\r\n投诉编号：CP201802004\r\n投诉时间：2018.03.05 13:43\r\n投诉内容：单元门口垃圾未及时清理。\r\n结单时间：2018.03.05 14:30\r\n客服电话8888888',
    modify_time: '2018-11-28 16:59:28'
  },
  {
    id: 'OPENTM417726426',
    title: '门禁呼叫通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个开门呼叫，请及时接听！\r\n小区：碧水人家\r\n房号：2栋1单元2001号\r\n时间：2018年7月21日 18:36\r\n如有疑问请联系物业',
    modify_time: '2018-11-12 15:48:59'
  },
  {
    id: 'OPENTM417740327',
    title: '投诉结单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n投诉编号：{{keyword1.DATA}}\n投诉时间：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n结单时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的投诉已结单。点击查看详情，并期待您的满意度评价。\r\n投诉编号：CP201802004\r\n投诉时间：2018.03.05 13:43\r\n投诉内容：单元门口垃圾未及时清理。\r\n结单时间：2018.03.05 14:30\r\n客服电话8888888',
    modify_time: '2018-11-28 16:59:29'
  },
  {
    id: 'OPENTM417729929',
    title: '物业费预存提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预存时间：{{keyword1.DATA}}\n业主地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的物业费费用金额将于2018年12月11日到期。请于预存时间区间段到物业公司预存\r\n预存时间：2018/10/20-2018/10/22\r\n业主地址：武汉都汇华府6号楼7单元0101\r\n请及时预存。避免欠费。',
    modify_time: '2018-11-16 17:15:43'
  },
  {
    id: 'OPENTM417729940',
    title: '工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n工单内容：{{keyword1.DATA}}\n关联地址：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的工单待处理\r\n工单内容：11楼漏水了\r\n关联地址：11楼设备间\r\n时间：2014年7月21日\r\n请及时处理',
    modify_time: '2018-11-16 17:19:32'
  },
  {
    id: 'OPENTM417729941',
    title: '工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n工单内容：{{keyword1.DATA}}\n关联地址：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的工单待处理\r\n工单内容：11楼漏水了\r\n关联地址：11楼设备间\r\n时间：2014年7月21日\r\n请及时处理',
    modify_time: '2018-11-16 17:19:32'
  },
  {
    id: 'OPENTM417741341',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n派发时间：{{keyword2.DATA}}\n接单员姓名：{{keyword3.DATA}}\n接单员电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，物业前台已经派发订单！\r\n订单编号：1543306015238747002\r\n派发时间：2018年11月28日 16：02\r\n接单员姓名：张三\r\n接单员电话：13731731171\r\n请稍后，接单人员会主动联系您，如有特殊需求请电话联系接单人员。',
    modify_time: '2018-11-29 20:46:57'
  },
  {
    id: 'OPENTM417732642',
    title: '新工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n关联地址：{{keyword3.DATA}}\n工单内容：{{keyword4.DATA}}\n报修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修项目待处理\r\n联系人：刘某\r\n联系电话：13800138000\r\n关联地址：行政楼101\r\n工单内容：打印机故障\r\n报修时间：2017-01-01 14:30:03\r\n请尽快处理！',
    modify_time: '2018-11-19 19:23:33'
  },
  {
    id: 'OPENTM417733344',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n费用明细：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n支付方式：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: 'XX年XX月账单已支付\r\n应付金额：1200元\r\n费用明细：租金\r\n支付时间：2018-11-17 12:36:20\r\n支付方式：支付宝\r\n非常感谢您对我们的支持',
    modify_time: '2018-11-20 19:15:30'
  },
  {
    id: 'OPENTM417735044',
    title: '访客预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n被访人姓名：{{keyword1.DATA}}\n被访人电话：{{keyword2.DATA}}\n访问开始时间：{{keyword3.DATA}}\n单位：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的预约已成功！\r\n被访人姓名：张三\r\n被访人电话：186xxxx8563\r\n访问开始时间：2018年11月21日 18:36\r\n单位：xxxx公司\r\n感谢您的使用',
    modify_time: '2018-11-22 15:34:58'
  },
  {
    id: 'OPENTM417733346',
    title: '退款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n账单号：{{keyword1.DATA}}\n费用明细：{{keyword2.DATA}}\n退款金额：{{keyword3.DATA}}\n退款时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '已完成退款\r\n账单号：2008430503087642252001201607\r\n费用明细：押金\r\n退款金额：1200元\r\n退款时间：2018-11-17 12:34:20\r\n非常感谢您对我们的支持',
    modify_time: '2018-11-20 19:15:45'
  },
  {
    id: 'OPENTM417740097',
    title: '押金待缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租赁期限：{{keyword2.DATA}}\n押金：{{keyword3.DATA}}\n租金：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租客，您的租房合同已生成，押金缴纳如下：\r\n房间号：智慧领寓118511\r\n租赁期限：合计12个月\r\n押金：2000\r\n租金：3000（不包含物业等费用）\r\n请尽快完成支付！客服电话：15800001111',
    modify_time: '2018-11-28 14:46:01'
  },
  {
    id: 'OPENTM417740098',
    title: '押金待缴通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租赁期限：{{keyword2.DATA}}\n押金：{{keyword3.DATA}}\n租金：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租客，您的租房合同已生成，押金缴纳如下：\r\n房间号：智慧领寓118511\r\n租赁期限：合计12个月\r\n押金：2000\r\n租金：3000（不包含物业等费用）\r\n请尽快完成支付！客服电话：15800001111',
    modify_time: '2018-11-28 14:46:01'
  },
  {
    id: 'OPENTM417749550',
    title: '建议受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 8,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n受理时间：{{keyword3.DATA}}\n受理状态及回复：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的建议我们已经收到\r\n客户姓名：苏三\r\n客户手机：15888888888\r\n受理时间：2018年12月6日 10点30分\r\n受理状态及回复：客服人员将在30分钟内予以回复，请保持电话畅通\r\n如有疑问，请致电联系我们。',
    modify_time: '2018-12-10 19:11:21'
  },
  {
    id: 'OPENTM417742351',
    title: '订单审核通过通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n订购周期：{{keyword2.DATA}}\n摊位大小：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n价格：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单已审核通过。\r\n场地名称：恒生科技园-三期餐厅门口\r\n订购周期：天\r\n摊位大小：2*3\r\n时间：2018.11.07（周三）\r\n价格：¥500\r\n请点击查看详情&amp;amp;gt;&amp;amp;gt;',
    modify_time: '2018-11-30 18:52:43'
  },
  {
    id: 'OPENTM417749451',
    title: '门锁密码修改通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门锁密码已更新。\r\n门店：明源公寓南沙店\r\n房间：9栋1单元101\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-12-10 18:46:58'
  },
  {
    id: 'OPENTM417749551',
    title: '建议受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n客户姓名：{{keyword1.DATA}}\n客户手机：{{keyword2.DATA}}\n受理时间：{{keyword3.DATA}}\n受理状态及回复：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的建议我们已经收到\r\n客户姓名：苏三\r\n客户手机：15888888888\r\n受理时间：2018年12月6日 10点30分\r\n受理状态及回复：客服人员将在30分钟内予以回复，请保持电话畅通\r\n如有疑问，请致电联系我们。',
    modify_time: '2018-12-10 19:11:22'
  },
  {
    id: 'OPENTM417742202',
    title: '注册申请审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n申请人：{{keyword1.DATA}}\n手机号：{{keyword2.DATA}}\n项目：{{keyword3.DATA}}\n楼栋：{{keyword4.DATA}}\n房屋：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，有新的成员申请：\r\n申请人：吴子贤\r\n手机号：15818732213\r\n项目：长沙城际新苑-BG(城际新苑)\r\n楼栋：长沙城际新苑2.2期11栋\r\n房屋：长沙城际新苑2.2期11栋1906(11栋1906)\r\n请尽快审核哟！',
    modify_time: '2018-11-30 18:07:59'
  },
  {
    id: 'OPENTM417749452',
    title: '门锁密码修改通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n门店：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的门锁密码已更新。\r\n门店：明源公寓南沙店\r\n房间：9栋1单元101\r\n如有疑问，请拨打咨询热线123323。',
    modify_time: '2018-12-10 18:46:59'
  },
  {
    id: 'OPENTM417749552',
    title: '建议处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n投诉人位置：{{keyword1.DATA}}\n投诉主题：{{keyword2.DATA}}\n投诉时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx先生/女士，您好，您的投诉最新进展情况如下\r\n投诉人位置：xxxxx产业园1-101\r\n投诉主题：园区保修\r\n投诉时间：2015-05-24 17:47\r\n当前进展：已处理\r\n感谢您的监督与建议',
    modify_time: '2018-12-10 19:11:32'
  },
  {
    id: 'OPENTM417742203',
    title: '注册申请审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n申请人：{{keyword1.DATA}}\n手机号：{{keyword2.DATA}}\n项目：{{keyword3.DATA}}\n楼栋：{{keyword4.DATA}}\n房屋：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，有新的成员申请：\r\n申请人：吴子贤\r\n手机号：15818732213\r\n项目：长沙城际新苑-BG(城际新苑)\r\n楼栋：长沙城际新苑2.2期11栋\r\n房屋：长沙城际新苑2.2期11栋1906(11栋1906)\r\n请尽快审核哟！',
    modify_time: '2018-11-30 18:08:00'
  },
  {
    id: 'OPENTM417742353',
    title: '订单拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n订购周期：{{keyword2.DATA}}\n摊位大小：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n价格：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '抱歉，您的订单因档期已满，审核不通过。\r\n场地名称：恒生科技园-三期餐厅门口\r\n订购周期：天\r\n摊位大小：2*3\r\n时间：2018.11.07（周三）\r\n价格：¥500\r\n请点击查看详情&amp;amp;gt;&amp;amp;gt;',
    modify_time: '2018-11-30 18:53:12'
  },
  {
    id: 'OPENTM417742354',
    title: '订单拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n订购周期：{{keyword2.DATA}}\n摊位大小：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n价格：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '抱歉，您的订单因档期已满，审核不通过。\r\n场地名称：恒生科技园-三期餐厅门口\r\n订购周期：天\r\n摊位大小：2*3\r\n时间：2018.11.07（周三）\r\n价格：¥500\r\n请点击查看详情&amp;amp;gt;&amp;amp;gt;',
    modify_time: '2018-11-30 18:53:13'
  },
  {
    id: 'OPENTM417746355',
    title: '水电缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n用户地址：{{keyword1.DATA}}\n水电费月份：{{keyword2.DATA}}\n水费：{{keyword3.DATA}}\n空调电费：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的水电账单已出：\r\n用户地址：归谷-A-3-302\r\n水电费月份：2018年10月\r\n水费：20元\r\n空调电费：30元\r\n请您在本月20日之前尽快缴纳，感谢你的支持，如有疑问，请拨打0573-84069263或到归谷A-3-304室咨询！',
    modify_time: '2018-12-06 15:59:01'
  },
  {
    id: 'OPENTM417742357',
    title: '订单支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n订购周期：{{keyword2.DATA}}\n摊位大小：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n价格：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单支付成功。\r\n场地名称：恒生科技园-三期餐厅门口\r\n订购周期：天\r\n摊位大小：2*3\r\n时间：2018.11.07（周三）\r\n价格：¥500\r\n请点击查看详情&amp;amp;gt;&amp;amp;gt;',
    modify_time: '2018-11-30 18:53:33'
  },
  {
    id: 'OPENTM417746357',
    title: '水电缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用户地址：{{keyword1.DATA}}\n水电费月份：{{keyword2.DATA}}\n水费：{{keyword3.DATA}}\n空调电费：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的水电账单已出：\r\n用户地址：归谷-A-3-302\r\n水电费月份：2018年10月\r\n水费：20元\r\n空调电费：30元\r\n请您在本月20日之前尽快缴纳，感谢你的支持，如有疑问，请拨打0573-84069263或到归谷A-3-304室咨询！',
    modify_time: '2018-12-06 15:59:02'
  },
  {
    id: 'OPENTM417742358',
    title: '订单支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n订购周期：{{keyword2.DATA}}\n摊位大小：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n价格：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单支付成功。\r\n场地名称：恒生科技园-三期餐厅门口\r\n订购周期：天\r\n摊位大小：2*3\r\n时间：2018.11.07（周三）\r\n价格：¥500\r\n请点击查看详情&amp;amp;gt;&amp;amp;gt;',
    modify_time: '2018-11-30 18:53:33'
  },
  {
    id: 'OPENTM417742279',
    title: '合同付款完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n管家：{{keyword1.DATA}}\n房源：{{keyword2.DATA}}\n出租时间：{{keyword3.DATA}}\n客户姓名：{{keyword4.DATA}}\n电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的\r\n管家：敏敏酱\r\n房源：东湖\r\n出租时间：2018-12-19\r\n客户姓名：敏敏酱\r\n电话：1212\r\n请尽快联系租户加入生活微信群，并及时跟进租户在租期中遇到的生活问题，感谢您对江寓的付出！',
    modify_time: '2018-11-30 18:29:11'
  },
  {
    id: 'OPENTM417746340',
    title: '访客预约审核成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n被访人姓名：{{keyword1.DATA}}\n被访人电话：{{keyword2.DATA}}\n被访人单位：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的访客预约已审核成功！\r\n被访人姓名：张三\r\n被访人电话：155xxxx5687\r\n被访人单位：xxxxx\r\n感谢您的使用。',
    modify_time: '2018-12-06 15:49:27'
  },
  {
    id: 'OPENTM417749692',
    title: '租赁欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n租赁单元：{{keyword1.DATA}}\n欠费总额：{{keyword2.DATA}}\n欠费账期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您当前有欠费未还清,请及时支付,\r\n租赁单元：40栋1单元0101号\r\n欠费总额：200.00元\r\n欠费账期：2018-12,2018-11\r\n如对帐单有疑问,请查看详情.',
    modify_time: '2018-12-10 19:46:46'
  },
  {
    id: 'OPENTM417745195',
    title: '会议通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n会议时间：{{keyword1.DATA}}\n会议地点：{{keyword2.DATA}}\n参会人员：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '关于考试会议通知\r\n会议时间：12月8日 8点\r\n会议地点：C3教室\r\n参会人员：全体学员\r\n详见考试章程',
    modify_time: '2018-12-04 19:43:24'
  },
  {
    id: 'OPENTM417751895',
    title: '设备点检受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n设备编号：{{keyword1.DATA}}\n设备名称：{{keyword2.DATA}}\n设备地点：{{keyword3.DATA}}\n人员：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '任务提醒\r\n设备编号：001\r\n设备名称：空调\r\n设备地点：广场\r\n人员：张三\r\n谢谢',
    modify_time: '2018-12-12 16:02:47'
  },
  {
    id: 'OPENTM417745196',
    title: '会议通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n会议时间：{{keyword1.DATA}}\n会议地点：{{keyword2.DATA}}\n参会人员：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '关于考试会议通知\r\n会议时间：12月8日 8点\r\n会议地点：C3教室\r\n参会人员：全体学员\r\n详见考试章程',
    modify_time: '2018-12-04 19:43:24'
  },
  {
    id: 'OPENTM417762651',
    title: '缴费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n商铺编号：{{keyword1.DATA}}\n账单总额：{{keyword2.DATA}}\n账单月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的账单：10000001\r\n商铺编号：B101\r\n账单总额：500\r\n账单月份：201812\r\n如已缴费，无需理会。',
    modify_time: '2018-12-26 17:31:30'
  },
  {
    id: 'OPENTM417762652',
    title: '缴费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n商铺编号：{{keyword1.DATA}}\n账单总额：{{keyword2.DATA}}\n账单月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的账单：10000001\r\n商铺编号：B101\r\n账单总额：500\r\n账单月份：201812\r\n如已缴费，无需理会。',
    modify_time: '2018-12-26 17:31:31'
  },
  {
    id: 'OPENTM417766954',
    title: '快递待取件通知',
    class1: '房地产',
    class2: '物业',
    person_used: 31,
    content: '{{first.DATA}}\n存放地址：{{keyword1.DATA}}\n快递信息：{{keyword2.DATA}}\n到件时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有新快件到达！请及时取件\r\n存放地址：3期侧门门口\r\n快递信息：09128318238\r\n到件时间：2018-01-01 12:00\r\n您可以通过快递单号到快递公司平台查询快递物流详情',
    modify_time: '2019-01-01 13:49:51'
  },
  {
    id: 'OPENTM417769605',
    title: '租金即将逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n最后付款日：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租户，您的租金账单即将逾期，请尽快支付！\r\n房间：智慧领寓8501\r\n最后付款日：2019-01-01\r\n详情请查看账单',
    modify_time: '2019-01-04 17:12:30'
  },
  {
    id: 'OPENTM417769607',
    title: '租金即将逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n最后付款日：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租户，您的租金账单即将逾期，请尽快支付！\r\n房间：智慧领寓8501\r\n最后付款日：2019-01-01\r\n详情请查看账单',
    modify_time: '2019-01-04 17:12:30'
  },
  {
    id: 'OPENTM417769976',
    title: '预约申请被拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n预约房源：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '抱歉，您的预约看房申请被拒绝\r\n预约房源：天苑花园1102\r\n预约时间：2018-07-17 12:00\r\n如有疑问，请联系管家',
    modify_time: '2019-01-04 19:13:25'
  },
  {
    id: 'OPENTM417753527',
    title: '报障处理完毕通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n项目：{{keyword1.DATA}}\n楼栋：{{keyword2.DATA}}\n房屋：{{keyword3.DATA}}\n故障用户名：{{keyword4.DATA}}\n报障内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的报障已处理完毕：\r\n项目：深圳万科城(万科城)\r\n楼栋：测试楼栋1\r\n房屋：测试房屋1\r\n故障用户名：吴子贤\r\n报障内容：1号门无法人脸识别\r\n感谢您的反馈！',
    modify_time: '2018-12-14 16:20:23'
  },
  {
    id: 'OPENTM417752278',
    title: '充电完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n充电时间：{{keyword1.DATA}}\n充值金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的充电已完成！\r\n充电时间：2018年12月12日16：00\r\n充值金额：10元\r\n感谢你的支持和使用！',
    modify_time: '2018-12-12 17:26:06'
  },
  {
    id: 'OPENTM417767028',
    title: '签到成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n签到会员：{{keyword1.DATA}}\n签到时间：{{keyword2.DATA}}\n活动名称：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您已签到成功\r\n签到会员：张三\r\n签到时间：2014年7月21日 18:36\r\n活动名称：2018年业主春晚\r\n感谢您的参与',
    modify_time: '2019-01-01 14:19:03'
  },
  {
    id: 'OPENTM417769978',
    title: '预约申请被拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预约房源：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '抱歉，您的预约看房申请被拒绝\r\n预约房源：天苑花园1102\r\n预约时间：2018-07-17 12:00\r\n如有疑问，请联系管家',
    modify_time: '2019-01-04 19:13:26'
  },
  {
    id: 'OPENTM417753529',
    title: '报障处理完毕通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n项目：{{keyword1.DATA}}\n楼栋：{{keyword2.DATA}}\n房屋：{{keyword3.DATA}}\n故障用户名：{{keyword4.DATA}}\n报障内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的报障已处理完毕：\r\n项目：深圳万科城(万科城)\r\n楼栋：测试楼栋1\r\n房屋：测试房屋1\r\n故障用户名：吴子贤\r\n报障内容：1号门无法人脸识别\r\n感谢您的反馈！',
    modify_time: '2018-12-14 16:20:24'
  },
  {
    id: 'OPENTM417760933',
    title: '退租待确认通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n应退押金：{{keyword1.DATA}}\n应退租金：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的退租账单已生成\r\n应退押金：1000元\r\n应退租金：800元\r\n您可点击查看账单详情并确认',
    modify_time: '2018-12-24 16:31:53'
  },
  {
    id: 'OPENTM417761083',
    title: '接单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n任务单号：{{keyword1.DATA}}\n任务名称：{{keyword2.DATA}}\n任务期限：{{keyword3.DATA}}\n审核时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您所接的任务单已审核通过！\r\n任务单号：2018122121392212\r\n任务名称：1栋楼梯清洁\r\n任务期限：2018-12-21至2018-12-22\r\n审核时间：2018年12月21日 21:39:22\r\n点击此消息查看详情以及按时完成！',
    modify_time: '2018-12-24 17:15:52'
  },
  {
    id: 'OPENTM417761085',
    title: '接单成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n任务单号：{{keyword1.DATA}}\n任务名称：{{keyword2.DATA}}\n任务期限：{{keyword3.DATA}}\n审核时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您所接的任务单已审核通过！\r\n任务单号：2018122121392212\r\n任务名称：1栋楼梯清洁\r\n任务期限：2018-12-21至2018-12-22\r\n审核时间：2018年12月21日 21:39:22\r\n点击此消息查看详情以及按时完成！',
    modify_time: '2018-12-24 17:15:53'
  },
  {
    id: 'OPENTM417758490',
    title: '充电申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n充电金额：{{keyword3.DATA}}\n状态：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有住户提交充电申请,请及时处理\r\n房间号：C幢502室\r\n电话：18888888888\r\n充电金额：2元\r\n状态：急迫\r\nC幢502室用户提交充电申请，请及时处理。',
    modify_time: '2018-12-20 19:24:58'
  },
  {
    id: 'OPENTM417762992',
    title: '电表抄表失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n空间名称：{{keyword1.DATA}}\n办公室：{{keyword2.DATA}}\n月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '很抱歉，你此次发起的抄表请求未成功\r\n空间名称：海创空间\r\n办公室：D08\r\n月份：201807\r\n本次抄表未成功，请重新处理！',
    modify_time: '2018-12-26 19:00:54'
  },
  {
    id: 'OPENTM417767043',
    title: '房租账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房租：{{keyword1.DATA}}\n水费：{{keyword2.DATA}}\n电费：{{keyword3.DATA}}\n其他：{{keyword4.DATA}}\n合计：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的房客，这是您本月的房租账单\r\n房租：500元\r\n水费：10元（表底10，抄表14）\r\n电费：100元（表底100，抄表200）\r\n其他：35元（Wi-Fi包月30元+垃圾处理费5元）\r\n合计：645元\r\n点击查看账单详情，一键支付',
    modify_time: '2019-01-01 14:22:11'
  },
  {
    id: 'OPENTM417762994',
    title: '电表抄表失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n空间名称：{{keyword1.DATA}}\n办公室：{{keyword2.DATA}}\n月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '很抱歉，你此次发起的抄表请求未成功\r\n空间名称：海创空间\r\n办公室：D08\r\n月份：201807\r\n本次抄表未成功，请重新处理！',
    modify_time: '2018-12-26 19:00:55'
  },
  {
    id: 'OPENTM417756746',
    title: '月卡续费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n续费时间：{{keyword3.DATA}}\n续费金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，您已续费成功。\r\n车牌号：粤B12345\r\n停车场：九祥岭工业区停车场\r\n续费时间：2018-12-17 14:40\r\n续费金额：100.00元\r\n感谢您的使用。',
    modify_time: '2018-12-18 14:53:27'
  },
  {
    id: 'OPENTM417766849',
    title: '工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n工单位置：{{keyword1.DATA}}\n工单编号：{{keyword2.DATA}}\n工单内容：{{keyword3.DATA}}\n操作人员：{{keyword4.DATA}}\n操作时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '工单处理提醒\r\n工单位置：深圳红树西岸5栋11A\r\n工单编号：112\r\n工单内容：阳台玻璃门破裂\r\n操作人员：张三\r\n操作时间：2015/8/9\r\n上门前工作人员将提前与您预约，请保持电话畅通，谢谢。',
    modify_time: '2019-01-01 11:38:10'
  },
  {
    id: 'OPENTM417779657',
    title: '注册审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n申请人：{{keyword1.DATA}}\n申请地址：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '有业主注册您所在的小区，请您审批。\r\n申请人：张三\r\n申请地址：麓谷企业广场11栋101\r\n申请时间：2019年1月2日 18:00\r\n感谢您的使用，欢迎您的建议和监督。',
    modify_time: '2019-01-18 20:19:29'
  },
  {
    id: 'OPENTM417779658',
    title: '注册审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n申请人：{{keyword1.DATA}}\n申请地址：{{keyword2.DATA}}\n申请时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '有业主注册您所在的小区，请您审批。\r\n申请人：张三\r\n申请地址：麓谷企业广场11栋101\r\n申请时间：2019年1月2日 18:00\r\n感谢您的使用，欢迎您的建议和监督。',
    modify_time: '2019-01-18 20:19:29'
  },
  {
    id: 'OPENTM417774009',
    title: '认证结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n位置：{{keyword1.DATA}}\n门位：{{keyword2.DATA}}\n认证身份：{{keyword3.DATA}}\n审核结果：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，张三丰\r\n位置：怀德路4号明禧地产\r\n门位：A3栋大门\r\n认证身份：工作人员\r\n审核结果：通过\r\n时间：2019年1月1日12点20分\r\n您提交的身份认证信息申请已经审核通过，祝你生活愉快',
    modify_time: '2019-01-10 19:10:15'
  },
  {
    id: 'OPENTM417774010',
    title: '认证结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n位置：{{keyword1.DATA}}\n门位：{{keyword2.DATA}}\n认证身份：{{keyword3.DATA}}\n审核结果：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，张三丰\r\n位置：怀德路4号明禧地产\r\n门位：A3栋大门\r\n认证身份：工作人员\r\n审核结果：通过\r\n时间：2019年1月1日12点20分\r\n您提交的身份认证信息申请已经审核通过，祝你生活愉快',
    modify_time: '2019-01-10 19:10:15'
  },
  {
    id: 'OPENTM417788610',
    title: '访客等待通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n被访人姓名：{{keyword2.DATA}}\n申请拜访时间：{{keyword3.DATA}}\n确认状态：{{keyword4.DATA}}\n等候时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的申请正在等待被访人审核\r\n公司名称：立方公司\r\n被访人姓名：张三\r\n申请拜访时间：2019-01-01  2019-02-01\r\n确认状态：待确认\r\n等候时间：200分钟\r\n感谢您的使用',
    modify_time: '2019-01-30 20:04:48'
  },
  {
    id: 'OPENTM417776911',
    title: '问题反馈结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n电梯位置：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n问题类型：{{keyword4.DATA}}\n问题描述：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '问题反馈结果通知\r\n所属小区：花园新宇\r\n电梯位置：3 号楼 5 号电梯\r\n反馈时间：12 月 11 日 08:23\r\n问题类型：电梯下滑、显示屏故障\r\n问题描述：刚才电梯突然从 12 楼掉到 11 楼，吓死人了，请快点来看看怎么回事。\r\n通力电梯竭诚为您服务！',
    modify_time: '2019-01-15 16:30:46'
  },
  {
    id: 'OPENTM417788611',
    title: '访客等待通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n被访人姓名：{{keyword2.DATA}}\n申请拜访时间：{{keyword3.DATA}}\n确认状态：{{keyword4.DATA}}\n等候时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的申请正在等待被访人审核\r\n公司名称：立方公司\r\n被访人姓名：张三\r\n申请拜访时间：2019-01-01  2019-02-01\r\n确认状态：待确认\r\n等候时间：200分钟\r\n感谢您的使用',
    modify_time: '2019-01-30 20:04:48'
  },
  {
    id: 'OPENTM417788613',
    title: '访客等待通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n被访人姓名：{{keyword2.DATA}}\n申请拜访时间：{{keyword3.DATA}}\n确认状态：{{keyword4.DATA}}\n等候时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的申请正在等待被访人审核\r\n公司名称：立方公司\r\n被访人姓名：张三\r\n申请拜访时间：2019-01-01  2019-02-01\r\n确认状态：待确认\r\n等候时间：200分钟\r\n感谢您的使用',
    modify_time: '2019-01-30 20:04:49'
  },
  {
    id: 'OPENTM417779614',
    title: '维修处理逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房产地址：{{keyword1.DATA}}\n报修人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n派单时间：{{keyword4.DATA}}\n维修内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有一条新维修业务已逾期，业主需要您的帮助，请尽快处理！\r\n房产地址：20号楼5单元7层2号 \r\n报修人：王先生\r\n联系电话：15894941118\r\n派单时间：2019年5月11日\r\n维修内容：房子漏雨\r\n为了保证我们的服务质量，请尽快为业主维修！',
    modify_time: '2019-01-18 20:11:46'
  },
  {
    id: 'OPENTM417779615',
    title: '维修处理逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n房产地址：{{keyword1.DATA}}\n报修人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n派单时间：{{keyword4.DATA}}\n维修内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有一条新维修业务已逾期，业主需要您的帮助，请尽快处理！\r\n房产地址：20号楼5单元7层2号 \r\n报修人：王先生\r\n联系电话：15894941118\r\n派单时间：2019年5月11日\r\n维修内容：房子漏雨\r\n为了保证我们的服务质量，请尽快为业主维修！',
    modify_time: '2019-01-18 20:11:47'
  },
  {
    id: 'OPENTM417776916',
    title: '工单反馈结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n电梯位置：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n处理时间：{{keyword4.DATA}}\n工单编号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '工单反馈结果通知\r\n所属小区：花园新宇\r\n电梯位置：3 号楼 5 号电梯\r\n反馈时间：12 月 11 日 08:23\r\n处理时间：12 月 11 日 13:50\r\n工单编号：2019281999\r\n处理状态：问题已解决',
    modify_time: '2019-01-15 16:31:03'
  },
  {
    id: 'OPENTM417778766',
    title: '问题处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n处理时间：{{keyword1.DATA}}\n处理结果：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，有新的消息通知。\r\n处理时间：2019-01-02 11:08\r\n处理结果：您的《物业报修申请》已经受理，维修人员将在您的预约时间段（2019-01-03 10:00——11:00）上门维修。\r\n感谢您的使用。',
    modify_time: '2019-01-17 20:26:39'
  },
  {
    id: 'OPENTM417779616',
    title: '维修处理逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n房产地址：{{keyword1.DATA}}\n报修人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n派单时间：{{keyword4.DATA}}\n维修内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有一条新维修业务已逾期，业主需要您的帮助，请尽快处理！\r\n房产地址：20号楼5单元7层2号 \r\n报修人：王先生\r\n联系电话：15894941118\r\n派单时间：2019年5月11日\r\n维修内容：房子漏雨\r\n为了保证我们的服务质量，请尽快为业主维修！',
    modify_time: '2019-01-18 20:11:47'
  },
  {
    id: 'OPENTM417778529',
    title: '诉求受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n诉求单号：{{keyword1.DATA}}\n诉求时间：{{keyword2.DATA}}\n诉求内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '【您的报修单已受理】\r\n诉求单号：23213\r\n诉求时间：2019-10-12 08:10:12\r\n诉求内容：希望物业公司公布每天工作的实际内容\r\n您的诉求信息已受理，我们回尽快给您处理回复！',
    modify_time: '2019-01-17 18:19:43'
  },
  {
    id: 'OPENTM417778880',
    title: '维修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n报修信息：{{keyword1.DATA}}\n门牌号：{{keyword2.DATA}}\n联系人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n保修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有新的维修任务\r\n报修信息：小卧室门后没有门吸\r\n门牌号：洋房2A 2-6#1-1-1(沈北新区蒲南路 5-29号)\r\n联系人：韩大仙\r\n联系电话：18600000000\r\n保修时间：2019-01-10 16:39\r\n请维修人员尽快上门维修。',
    modify_time: '2019-01-17 20:56:31'
  },
  {
    id: 'OPENTM417773681',
    title: '用电账户余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n统计时间：{{keyword1.DATA}}\n账户余额：{{keyword2.DATA}}\n预计可用天数：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您的用电账户余额不足。\r\n统计时间：2018年8月23日08:58:44\r\n账户余额：30元\r\n预计可用天数：2天\r\n为保证您的正常使用，请及时充值。',
    modify_time: '2019-01-10 16:55:42'
  },
  {
    id: 'OPENTM417778532',
    title: '诉求受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n诉求单号：{{keyword1.DATA}}\n诉求时间：{{keyword2.DATA}}\n诉求内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '【您的报修单已受理】\r\n诉求单号：23213\r\n诉求时间：2019-10-12 08:10:12\r\n诉求内容：希望物业公司公布每天工作的实际内容\r\n您的诉求信息已受理，我们回尽快给您处理回复！',
    modify_time: '2019-01-17 18:19:44'
  },
  {
    id: 'OPENTM417773987',
    title: '反馈处理进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n电梯位置：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n处理时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '反馈处理进度通知\r\n所属小区：花园新宇\r\n电梯位置：3 号楼 5 号电梯\r\n反馈时间：12 月 11 日 08:23\r\n处理时间：12 月 11 日 13:50\r\n处理状态：问题已解决',
    modify_time: '2019-01-10 19:04:50'
  },
  {
    id: 'OPENTM417778388',
    title: '注册审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n申请类型：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n申请人：{{keyword3.DATA}}\n电话：{{keyword4.DATA}}\n所属单位：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '新用户注册提醒\r\n申请类型：用户注册审批\r\n申请时间：2019-01-01 00:00:00\r\n申请人：管理员\r\n电话：18888888888\r\n所属单位：中南海\r\n请尽快进行审批操作',
    modify_time: '2019-01-17 17:48:42'
  },
  {
    id: 'OPENTM417776892',
    title: '线下支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n应付金额：{{keyword1.DATA}}\n费用明细：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '2019年1月2日账单已支付\r\n应付金额：1200元\r\n费用明细：租金、物业费等\r\n支付时间：2019年1月4日 13:29:30\r\n非常感谢您对我们的支持',
    modify_time: '2019-01-15 16:28:46'
  },
  {
    id: 'OPENTM417799950',
    title: '用电用水余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n用户编号：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n用户地址：{{keyword3.DATA}}\n可用余额：{{keyword4.DATA}}\n截止时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '余额不足提醒\r\n用户编号：000007\r\n用户名称：物业\r\n用户地址：物业管理处\r\n可用余额：9.99\r\n截止时间：2019-01-25 08:00:00\r\n您的余额不足，请及时充值，以免影响到您的正常用电！',
    modify_time: '2019-02-02 14:39:48'
  },
  {
    id: 'OPENTM417788805',
    title: '租金欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单范围：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n应付日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '截止目前，您本期的租金账单仍未缴清，请及时缴纳。\r\n账单范围：2019/01/01 - 2019/01/31\r\n账单金额：2000.00元\r\n应付日期：2019/01/05\r\n如对本账单存在疑问，请及时联系房东。',
    modify_time: '2019-01-30 20:38:00'
  },
  {
    id: 'OPENTM417788807',
    title: '租金欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单范围：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n应付日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '截止目前，您本期的租金账单仍未缴清，请及时缴纳。\r\n账单范围：2019/01/01 - 2019/01/31\r\n账单金额：2000.00元\r\n应付日期：2019/01/05\r\n如对本账单存在疑问，请及时联系房东。',
    modify_time: '2019-01-30 20:38:00'
  },
  {
    id: 'OPENTM417788809',
    title: '租金账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单范围：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n应付日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您本期的租金账单已出，请及时缴纳。\r\n账单范围：2019/01/01 - 2019/01/31\r\n账单金额：2000.00元\r\n应付日期：2019/01/05\r\n如对本账单存在疑问，请及时联系房东。',
    modify_time: '2019-01-30 20:38:18'
  },
  {
    id: 'OPENTM417788810',
    title: '租金账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n账单范围：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n应付日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您本期的租金账单已出，请及时缴纳。\r\n账单范围：2019/01/01 - 2019/01/31\r\n账单金额：2000.00元\r\n应付日期：2019/01/05\r\n如对本账单存在疑问，请及时联系房东。',
    modify_time: '2019-01-30 20:38:18'
  },
  {
    id: 'OPENTM417790562',
    title: '用电余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n用户编号：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n用电地址：{{keyword3.DATA}}\n电费余额：{{keyword4.DATA}}\n截止时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '余额不足提醒\r\n用户编号：000001\r\n用户名称：碧桂园泰富城物业\r\n用电地址：碧桂园泰富城物业管理处\r\n电费余额：9.99\r\n截止时间：2019-01-25 08:00:00\r\n您的余额不足，请及时缴费，以免影响到您的用电！',
    modify_time: '2019-02-01 19:47:20'
  },
  {
    id: 'OPENTM417790563',
    title: '用电余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用户编号：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n用电地址：{{keyword3.DATA}}\n电费余额：{{keyword4.DATA}}\n截止时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '余额不足提醒\r\n用户编号：000001\r\n用户名称：碧桂园泰富城物业\r\n用电地址：碧桂园泰富城物业管理处\r\n电费余额：9.99\r\n截止时间：2019-01-25 08:00:00\r\n您的余额不足，请及时缴费，以免影响到您的用电！',
    modify_time: '2019-02-01 19:47:21'
  },
  {
    id: 'OPENTM417790564',
    title: '用电余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用户编号：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n用电地址：{{keyword3.DATA}}\n电费余额：{{keyword4.DATA}}\n截止时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '余额不足提醒\r\n用户编号：000001\r\n用户名称：碧桂园泰富城物业\r\n用电地址：碧桂园泰富城物业管理处\r\n电费余额：9.99\r\n截止时间：2019-01-25 08:00:00\r\n您的余额不足，请及时缴费，以免影响到您的用电！',
    modify_time: '2019-02-01 19:47:21'
  },
  {
    id: 'OPENTM417810968',
    title: '报销单申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人员：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '刘丁申请了一份报销单，请及时审核\r\n申请人员：刘丁\r\n申请时间：2019年1月1日\r\n如有问题请及时联系申请人',
    modify_time: '2019-02-18 18:00:17'
  },
  {
    id: 'OPENTM417788626',
    title: '无感支付扣费失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n入场时间：{{keyword1.DATA}}\n出场时间：{{keyword2.DATA}}\n停车场：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '无感支付扣款失败\r\n入场时间：2019年1月21日 10:00\r\n出场时间：2019年1月21日 11:00\r\n停车场：万科梅林停车场\r\n由于账户余额不足，扣款失败，无感支付业务被暂停。请及时补缴欠费并为您的扣款账户存钱。您也可以登录邻居公众号，进入停车账单进行费用补缴',
    modify_time: '2019-01-30 20:07:09'
  },
  {
    id: 'OPENTM417788637',
    title: '无感支付补缴成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n补缴金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，停车欠款已补缴成功\r\n停车场：万科梅林停车场\r\n补缴金额：20元\r\n无感支付业务已恢复正常，欢迎继续使用',
    modify_time: '2019-01-30 20:10:18'
  },
  {
    id: 'OPENTM417788639',
    title: '无感支付补缴成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n补缴金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好，停车欠款已补缴成功\r\n停车场：万科梅林停车场\r\n补缴金额：20元\r\n无感支付业务已恢复正常，欢迎继续使用',
    modify_time: '2019-01-30 20:10:19'
  },
  {
    id: 'OPENTM417788690',
    title: '无感支付大额订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车费：{{keyword2.DATA}}\n停车场：{{keyword3.DATA}}\n单笔订单限制金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，本次停车产生了大额订单，无法使用无感支付\r\n车牌号：粤A66666\r\n停车费：500元\r\n停车场：万科梅林停车场\r\n单笔订单限制金额：200元\r\n请手动支付。',
    modify_time: '2019-01-30 20:17:07'
  },
  {
    id: 'OPENTM417788741',
    title: '住户账单欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n住户房号：{{keyword2.DATA}}\n发布时间：{{keyword3.DATA}}\n账单截止日期：{{keyword4.DATA}}\n累计欠费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您至今尚有欠费账单\r\n住户姓名：蓝先生\r\n住户房号：1-1-101\r\n发布时间：2019年01月21日\r\n账单截止日期：2018年12月31日\r\n累计欠费金额：3152.19元\r\n点击详情查看',
    modify_time: '2019-01-30 20:26:03'
  },
  {
    id: 'OPENTM417788692',
    title: '无感支付大额订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车费：{{keyword2.DATA}}\n停车场：{{keyword3.DATA}}\n单笔订单限制金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，本次停车产生了大额订单，无法使用无感支付\r\n车牌号：粤A66666\r\n停车费：500元\r\n停车场：万科梅林停车场\r\n单笔订单限制金额：200元\r\n请手动支付。',
    modify_time: '2019-01-30 20:17:08'
  },
  {
    id: 'OPENTM417788742',
    title: '住户账单欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n住户房号：{{keyword2.DATA}}\n发布时间：{{keyword3.DATA}}\n账单截止日期：{{keyword4.DATA}}\n累计欠费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户，您至今尚有欠费账单\r\n住户姓名：蓝先生\r\n住户房号：1-1-101\r\n发布时间：2019年01月21日\r\n账单截止日期：2018年12月31日\r\n累计欠费金额：3152.19元\r\n点击详情查看',
    modify_time: '2019-01-30 20:26:03'
  },
  {
    id: 'OPENTM417788693',
    title: '无感支付大额订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车费：{{keyword2.DATA}}\n停车场：{{keyword3.DATA}}\n单笔订单限制金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，本次停车产生了大额订单，无法使用无感支付\r\n车牌号：粤A66666\r\n停车费：500元\r\n停车场：万科梅林停车场\r\n单笔订单限制金额：200元\r\n请手动支付。',
    modify_time: '2019-01-30 20:17:08'
  },
  {
    id: 'OPENTM417789793',
    title: '物业缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n商铺编号：{{keyword1.DATA}}\n商铺名称：{{keyword2.DATA}}\n缴费月份：{{keyword3.DATA}}\n应缴金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您2019年01物业账单已出。\r\n商铺编号：CK-W1-12\r\n商铺名称：2019年01月\r\n缴费月份：2019年01月\r\n应缴金额：人民币 895.5 元\r\n如有疑问，请联系物业管理处。',
    modify_time: '2019-01-31 20:51:22'
  },
  {
    id: 'OPENTM417789796',
    title: '停暖通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n楼宇：{{keyword2.DATA}}\n停暖时间：{{keyword3.DATA}}\n原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '停暖通知\r\n小区：锦绣小区\r\n楼宇：1号楼1单元101\r\n停暖时间：2019年1月20日\r\n原因：暖气管线故障\r\n对您造成的不便深感抱歉，我们会尽快修复。',
    modify_time: '2019-01-31 20:51:34'
  },
  {
    id: 'OPENTM417799948',
    title: '用电用水余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n用户编号：{{keyword1.DATA}}\n用户名称：{{keyword2.DATA}}\n用户地址：{{keyword3.DATA}}\n可用余额：{{keyword4.DATA}}\n截止时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '余额不足提醒\r\n用户编号：000007\r\n用户名称：物业\r\n用户地址：物业管理处\r\n可用余额：9.99\r\n截止时间：2019-01-25 08:00:00\r\n您的余额不足，请及时充值，以免影响到您的正常用电！',
    modify_time: '2019-02-02 14:39:48'
  },
  {
    id: 'OPENTM417818101',
    title: '报修处理完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，你所申报的问题BX201901030017已处理完毕，请进入详情页面确认！\r\n报修内容：房间漏水！\r\n完成时间：2018-12-12 10:30\r\n点击查看详情！',
    modify_time: '2019-02-28 14:27:55'
  },
  {
    id: 'OPENTM417818102',
    title: '报修处理完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，你所申报的问题BX201901030017已处理完毕，请进入详情页面确认！\r\n报修内容：房间漏水！\r\n完成时间：2018-12-12 10:30\r\n点击查看详情！',
    modify_time: '2019-02-28 14:27:55'
  },
  {
    id: 'OPENTM417817516',
    title: '工单处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n编号：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n状态：{{keyword3.DATA}}\n处理结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您提交的问题已经处理成功，请核查。\r\n编号：20190222001\r\n时间：2019-02-22\r\n状态：处理成功\r\n处理结果：漏水情况已经处理，请核查。\r\n点击查看详情！',
    modify_time: '2019-02-27 18:39:04'
  },
  {
    id: 'OPENTM417817966',
    title: '账户电量不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n统计时间：{{keyword1.DATA}}\n账户余电：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您的账户1幢1单元102剩余电量不足！\r\n统计时间：2019年2月15日12:00:00\r\n账户余电：10Kwh（度）\r\n当电量余0会被断电，为保证您的正常用电，请及时购电。',
    modify_time: '2019-02-28 11:28:34'
  },
  {
    id: 'OPENTM417817967',
    title: '账户电量不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n统计时间：{{keyword1.DATA}}\n账户余电：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您的账户1幢1单元102剩余电量不足！\r\n统计时间：2019年2月15日12:00:00\r\n账户余电：10Kwh（度）\r\n当电量余0会被断电，为保证您的正常用电，请及时购电。',
    modify_time: '2019-02-28 11:28:34'
  },
  {
    id: 'OPENTM417810970',
    title: '报销单申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人员：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '刘丁申请了一份报销单，请及时审核\r\n申请人员：刘丁\r\n申请时间：2019年1月1日\r\n如有问题请及时联系申请人',
    modify_time: '2019-02-18 18:00:17'
  },
  {
    id: 'OPENTM417811573',
    title: '入住审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n住户手机号：{{keyword2.DATA}}\n房屋地址：{{keyword3.DATA}}\n房间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '住户申请入住提醒：您好，收到一条住户入住的申请信息，请真实核对入住信息；\r\n住户姓名：张XX\r\n住户手机号：188XXXXXXXX\r\n房屋地址：X市X区X路\r\n房间：X栋X单元402\r\n如有疑问，请直接与住户联系；',
    modify_time: '2019-02-19 15:11:31'
  },
  {
    id: 'OPENTM417811574',
    title: '入住审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n住户手机号：{{keyword2.DATA}}\n房屋地址：{{keyword3.DATA}}\n房间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '住户申请入住提醒：您好，收到一条住户入住的申请信息，请真实核对入住信息；\r\n住户姓名：张XX\r\n住户手机号：188XXXXXXXX\r\n房屋地址：X市X区X路\r\n房间：X栋X单元402\r\n如有疑问，请直接与住户联系；',
    modify_time: '2019-02-19 15:11:31'
  },
  {
    id: 'OPENTM417817375',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n交易商户：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的本次缴费已成功！\r\n交易商户：金鑫滨湖物业\r\n缴费金额：12600.36\r\n缴费时间：2018-10-29 09:01:06\r\n感谢您的使用',
    modify_time: '2019-02-27 17:36:51'
  },
  {
    id: 'OPENTM417811576',
    title: '入住审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n住户手机号：{{keyword2.DATA}}\n房屋地址：{{keyword3.DATA}}\n房间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '住户申请入住提醒：您好，收到一条住户入住的申请信息，请真实核对入住信息；\r\n住户姓名：张XX\r\n住户手机号：188XXXXXXXX\r\n房屋地址：X市X区X路\r\n房间：X栋X单元402\r\n如有疑问，请直接与住户联系；',
    modify_time: '2019-02-19 15:11:31'
  },
  {
    id: 'OPENTM417817376',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n交易商户：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的本次缴费已成功！\r\n交易商户：金鑫滨湖物业\r\n缴费金额：12600.36\r\n缴费时间：2018-10-29 09:01:06\r\n感谢您的使用',
    modify_time: '2019-02-27 17:36:51'
  },
  {
    id: 'OPENTM417817377',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n交易商户：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您的本次缴费已成功！\r\n交易商户：金鑫滨湖物业\r\n缴费金额：12600.36\r\n缴费时间：2018-10-29 09:01:06\r\n感谢您的使用',
    modify_time: '2019-02-27 17:36:52'
  },
  {
    id: 'OPENTM417817281',
    title: '电表电量不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n电表电量：{{keyword2.DATA}}\n截至日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '电表余量新通知\r\n房间号：b栋506\r\n电表电量：10.0kW·h\r\n截至日期：2019-02-30\r\n电表余额不足，请及时充值。',
    modify_time: '2019-02-27 17:18:39'
  },
  {
    id: 'OPENTM417817283',
    title: '电表电量不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n电表电量：{{keyword2.DATA}}\n截至日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '电表余量新通知\r\n房间号：b栋506\r\n电表电量：10.0kW·h\r\n截至日期：2019-02-30\r\n电表余额不足，请及时充值。',
    modify_time: '2019-02-27 17:18:40'
  },
  {
    id: 'OPENTM417813087',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n住户姓名：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n房屋位置：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有住户提交了报修事件，请您及时处理\r\n住户姓名：钟岩\r\n联系电话：18386532461\r\n房屋位置：保利国际3单元6栋1208\r\n报修内容：截止01月23日，保利国际3单元6栋1208的厨房灯熄火三天了，请及时处理；客厅大灯有一处灯泡不亮，麻烦更换一下；厨房洗菜池水管长期漏水，房屋外门锁有时候输密码确认了仍无法开启，请物业工作人员帮忙看下\r\n谢谢',
    modify_time: '2019-02-21 16:01:20'
  },
  {
    id: 'OPENTM417812393',
    title: '报销单审核完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n审核人员：{{keyword1.DATA}}\n审核时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你申请的报销单已审核完成，请及时查看\r\n审核人员：财务\r\n审核时间：2019年2月2日\r\n如有疑问，请及时联系财务重新核对报销单',
    modify_time: '2019-02-20 17:01:10'
  },
  {
    id: 'OPENTM417812395',
    title: '无感支付扣费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n入场时间：{{keyword2.DATA}}\n出场时间：{{keyword3.DATA}}\n停车费用：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '扣费成功\r\n停车场：万科梅林停车场\r\n入场时间：2020-01-01 10:00:00\r\n出场时间：2020-01-02 10:01:03\r\n停车费用：50.0\r\n欢迎下次光临',
    modify_time: '2019-02-20 17:01:37'
  },
  {
    id: 'OPENTM417812397',
    title: '无感支付扣费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n入场时间：{{keyword2.DATA}}\n出场时间：{{keyword3.DATA}}\n停车费用：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '扣费成功\r\n停车场：万科梅林停车场\r\n入场时间：2020-01-01 10:00:00\r\n出场时间：2020-01-02 10:01:03\r\n停车费用：50.0\r\n欢迎下次光临',
    modify_time: '2019-02-20 17:01:37'
  },
  {
    id: 'OPENTM417812398',
    title: '无感支付扣费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n入场时间：{{keyword2.DATA}}\n出场时间：{{keyword3.DATA}}\n停车费用：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '扣费成功\r\n停车场：万科梅林停车场\r\n入场时间：2020-01-01 10:00:00\r\n出场时间：2020-01-02 10:01:03\r\n停车费用：50.0\r\n欢迎下次光临',
    modify_time: '2019-02-20 17:01:38'
  },
  {
    id: 'OPENTM417818099',
    title: '报修处理完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，你所申报的问题BX201901030017已处理完毕，请进入详情页面确认！\r\n报修内容：房间漏水！\r\n完成时间：2018-12-12 10:30\r\n点击查看详情！',
    modify_time: '2019-02-28 14:27:54'
  },
  {
    id: 'OPENTM417824103',
    title: '购买成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n小区地址：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n电表编号：{{keyword3.DATA}}\n订单编号：{{keyword4.DATA}}\n实付金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有一条购电成功消息\r\n小区地址：七星商业广场\r\n房间：七星商业广场1111\r\n电表编号：20181829023\r\n订单编号：160219164703108\r\n实付金额：￥500\r\n感谢您的使用',
    modify_time: '2019-03-07 16:57:24'
  },
  {
    id: 'OPENTM417824105',
    title: '月账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n电表编号：{{keyword1.DATA}}\n小区地址：{{keyword2.DATA}}\n房间：{{keyword3.DATA}}\n账单日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的月账单数据已产生\r\n电表编号：22140260815\r\n小区地址：七星商业广场\r\n房间：七星商业广场1111\r\n账单日期：2019年2月\r\n请及时查看',
    modify_time: '2019-03-07 16:57:36'
  },
  {
    id: 'OPENTM417828756',
    title: '违规处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n违规内容：{{keyword1.DATA}}\n违规时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主,您违反商户管理条例\r\n违规内容：垃圾未分类放置\r\n违规时间：2019-2-26\r\n处理结果：停业整顿4小时\r\n请遵守物业管理服务规定,谢谢',
    modify_time: '2019-03-13 17:18:14'
  },
  {
    id: 'OPENTM417828758',
    title: '违规处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n违规内容：{{keyword1.DATA}}\n违规时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主,您违反商户管理条例\r\n违规内容：垃圾未分类放置\r\n违规时间：2019-2-26\r\n处理结果：停业整顿4小时\r\n请遵守物业管理服务规定,谢谢',
    modify_time: '2019-03-13 17:18:14'
  },
  {
    id: 'OPENTM417828759',
    title: '违规处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n违规内容：{{keyword1.DATA}}\n违规时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主,您违反商户管理条例\r\n违规内容：垃圾未分类放置\r\n违规时间：2019-2-26\r\n处理结果：停业整顿4小时\r\n请遵守物业管理服务规定,谢谢',
    modify_time: '2019-03-13 17:18:14'
  },
  {
    id: 'OPENTM417824110',
    title: '电表余量提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区地址：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有一条电表余额不足提醒\r\n小区地址：XX商业广场\r\n房间：XX商业广场111\r\n尊敬的用户，您的电表剩余电量不足，为保证正常用电，请及时预存电费。如有疑问请联系小区物业。',
    modify_time: '2019-03-07 16:58:27'
  },
  {
    id: 'OPENTM417824111',
    title: '电表余量提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区地址：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有一条电表余额不足提醒\r\n小区地址：XX商业广场\r\n房间：XX商业广场111\r\n尊敬的用户，您的电表剩余电量不足，为保证正常用电，请及时预存电费。如有疑问请联系小区物业。',
    modify_time: '2019-03-07 16:58:27'
  },
  {
    id: 'OPENTM417824112',
    title: '电表余量提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n小区地址：{{keyword1.DATA}}\n房间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有一条电表余额不足提醒\r\n小区地址：XX商业广场\r\n房间：XX商业广场111\r\n尊敬的用户，您的电表剩余电量不足，为保证正常用电，请及时预存电费。如有疑问请联系小区物业。',
    modify_time: '2019-03-07 16:58:27'
  },
  {
    id: 'OPENTM417827765',
    title: '异常告警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n异常内容：{{keyword1.DATA}}\n告警时间：{{keyword2.DATA}}\n电表房间：{{keyword3.DATA}}\n关联企业：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '管理员，您好！您的园区有电表度数异常！\r\n异常内容：电表度数为负\r\n告警时间：2019-2-28 18:30:20\r\n电表房间：2栋105\r\n关联企业：小鲜科技网络有限公司\r\n请及时处理！',
    modify_time: '2019-03-12 16:14:01'
  },
  {
    id: 'OPENTM417827766',
    title: '异常告警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n异常内容：{{keyword1.DATA}}\n告警时间：{{keyword2.DATA}}\n电表房间：{{keyword3.DATA}}\n关联企业：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '管理员，您好！您的园区有电表度数异常！\r\n异常内容：电表度数为负\r\n告警时间：2019-2-28 18:30:20\r\n电表房间：2栋105\r\n关联企业：小鲜科技网络有限公司\r\n请及时处理！',
    modify_time: '2019-03-12 16:14:01'
  },
  {
    id: 'OPENTM417827768',
    title: '异常告警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n异常内容：{{keyword1.DATA}}\n告警时间：{{keyword2.DATA}}\n电表房间：{{keyword3.DATA}}\n关联企业：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '管理员，您好！您的园区有电表度数异常！\r\n异常内容：电表度数为负\r\n告警时间：2019-2-28 18:30:20\r\n电表房间：2栋105\r\n关联企业：小鲜科技网络有限公司\r\n请及时处理！',
    modify_time: '2019-03-12 16:14:02'
  },
  {
    id: 'OPENTM417827769',
    title: '维修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修园区楼栋：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '管理员，您好！您有一条新的报修提醒！\r\n报修园区楼栋：创意中央9栋101\r\n时间：2019-1-31 15:30:20\r\n状态：待派单\r\n请尽快安排维修员处理！',
    modify_time: '2019-03-12 16:14:16'
  },
  {
    id: 'OPENTM417827770',
    title: '维修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修园区楼栋：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '管理员，您好！您有一条新的报修提醒！\r\n报修园区楼栋：创意中央9栋101\r\n时间：2019-1-31 15:30:20\r\n状态：待派单\r\n请尽快安排维修员处理！',
    modify_time: '2019-03-12 16:14:17'
  },
  {
    id: 'OPENTM417827771',
    title: '维修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修园区楼栋：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '管理员，您好！您有一条新的报修提醒！\r\n报修园区楼栋：创意中央9栋101\r\n时间：2019-1-31 15:30:20\r\n状态：待派单\r\n请尽快安排维修员处理！',
    modify_time: '2019-03-12 16:14:17'
  },
  {
    id: 'OPENTM417819677',
    title: '水费欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n用户名称：{{keyword1.DATA}}\n欠费月数：{{keyword2.DATA}}\n欠费水量：{{keyword3.DATA}}\n欠费总额：{{keyword4.DATA}}\n预存余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬用户，截止到xxxx年xx月xx日您还有以下水费未结清，请及时缴费，谢谢您的理解。\r\n用户名称：*一山\r\n欠费月数：共2个月\r\n欠费水量：100吨\r\n欠费总额：301.00元\r\n预存余额：209.00元\r\n温馨提示：欠费总额不含违约金，违约金以实际缴费金额为准；预存余额小于当月水费金额时将暂时不扣款，您可继续预存充足余额后将自动抵扣，谢谢理解。',
    modify_time: '2019-03-01 18:42:22'
  },
  {
    id: 'OPENTM417819678',
    title: '水费欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用户名称：{{keyword1.DATA}}\n欠费月数：{{keyword2.DATA}}\n欠费水量：{{keyword3.DATA}}\n欠费总额：{{keyword4.DATA}}\n预存余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬用户，截止到xxxx年xx月xx日您还有以下水费未结清，请及时缴费，谢谢您的理解。\r\n用户名称：*一山\r\n欠费月数：共2个月\r\n欠费水量：100吨\r\n欠费总额：301.00元\r\n预存余额：209.00元\r\n温馨提示：欠费总额不含违约金，违约金以实际缴费金额为准；预存余额小于当月水费金额时将暂时不扣款，您可继续预存充足余额后将自动抵扣，谢谢理解。',
    modify_time: '2019-03-01 18:42:23'
  },
  {
    id: 'OPENTM417819236',
    title: '解绑成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房间地址：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '解绑成功通知\r\n姓名：王某某\r\n房间地址：12栋1单元201室\r\n时间：2019年2月21日 18:30:15\r\n感谢您对我们工作的支持，祝您生活愉快',
    modify_time: '2019-03-01 14:46:21'
  },
  {
    id: 'OPENTM417819238',
    title: '解绑成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n房间地址：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '解绑成功通知\r\n姓名：王某某\r\n房间地址：12栋1单元201室\r\n时间：2019年2月21日 18:30:15\r\n感谢您对我们工作的支持，祝您生活愉快',
    modify_time: '2019-03-01 14:46:22'
  },
  {
    id: 'OPENTM417824188',
    title: '门禁预约申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n被访人姓名：{{keyword1.DATA}}\n企业名称：{{keyword2.DATA}}\n设备门禁：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '张三用户您好，您有一条访客预约申请消息。\r\n被访人姓名：李四\r\n企业名称：光谷联合\r\n设备门禁：三栋一单元门禁\r\n预约时间：2018-2-27\r\n感谢您的使用',
    modify_time: '2019-03-07 17:10:05'
  },
  {
    id: 'OPENTM417824190',
    title: '门禁预约申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n被访人姓名：{{keyword1.DATA}}\n企业名称：{{keyword2.DATA}}\n设备门禁：{{keyword3.DATA}}\n预约时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '张三用户您好，您有一条访客预约申请消息。\r\n被访人姓名：李四\r\n企业名称：光谷联合\r\n设备门禁：三栋一单元门禁\r\n预约时间：2018-2-27\r\n感谢您的使用',
    modify_time: '2019-03-07 17:10:06'
  },
  {
    id: 'OPENTM417832805',
    title: '资料提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n到访时间：{{keyword3.DATA}}\n离访时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的来访预约申请资料已提交\r\n申请时间：2018-12-03 15:06\r\n车牌号码：粤S16888\r\n到访时间：2018-12-03 15:06\r\n离访时间：2018-12-03 15:06\r\n申请资料正在审核，请耐心等待 点击详情，可查看详细申请进度',
    modify_time: '2019-03-19 16:03:01'
  },
  {
    id: 'OPENTM417832806',
    title: '资料提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n到访时间：{{keyword3.DATA}}\n离访时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的来访预约申请资料已提交\r\n申请时间：2018-12-03 15:06\r\n车牌号码：粤S16888\r\n到访时间：2018-12-03 15:06\r\n离访时间：2018-12-03 15:06\r\n申请资料正在审核，请耐心等待 点击详情，可查看详细申请进度',
    modify_time: '2019-03-19 16:03:01'
  },
  {
    id: 'OPENTM417832807',
    title: '资料提交成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n到访时间：{{keyword3.DATA}}\n离访时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的来访预约申请资料已提交\r\n申请时间：2018-12-03 15:06\r\n车牌号码：粤S16888\r\n到访时间：2018-12-03 15:06\r\n离访时间：2018-12-03 15:06\r\n申请资料正在审核，请耐心等待 点击详情，可查看详细申请进度',
    modify_time: '2019-03-19 16:03:01'
  },
  {
    id: 'OPENTM417828917',
    title: '水表异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n水表号：{{keyword2.DATA}}\n异常原因：{{keyword3.DATA}}\n备注：{{keyword4.DATA}}\n创建时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，有水表发生异常，请及时处理\r\n商铺号：1-A2\r\n水表号：180173151\r\n异常原因：水表失联\r\n备注：通讯机2机房\r\n创建时间：2019-01-01 11:00:00',
    modify_time: '2019-03-13 18:02:29'
  },
  {
    id: 'OPENTM417828918',
    title: '水表异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n水表号：{{keyword2.DATA}}\n异常原因：{{keyword3.DATA}}\n备注：{{keyword4.DATA}}\n创建时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，有水表发生异常，请及时处理\r\n商铺号：1-A2\r\n水表号：180173151\r\n异常原因：水表失联\r\n备注：通讯机2机房\r\n创建时间：2019-01-01 11:00:00',
    modify_time: '2019-03-13 18:02:29'
  },
  {
    id: 'OPENTM417830371',
    title: '住户缴费结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 16,
    content: '{{first.DATA}}\n缴费小区：{{keyword1.DATA}}\n缴费房号：{{keyword2.DATA}}\n账单状态：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n单据编号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '住户缴费结果通知\r\n缴费小区：诺彼小区\r\n缴费房号：1-1-101\r\n账单状态：已支付\r\n缴费金额：89.10\r\n单据编号：NBSQ20190308-126\r\n如有疑问，请点击详情查看订单详情记录&amp;gt;&amp;gt;',
    modify_time: '2019-03-15 17:34:19'
  },
  {
    id: 'OPENTM417830373',
    title: '住户缴费结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n缴费小区：{{keyword1.DATA}}\n缴费房号：{{keyword2.DATA}}\n账单状态：{{keyword3.DATA}}\n缴费金额：{{keyword4.DATA}}\n单据编号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '住户缴费结果通知\r\n缴费小区：诺彼小区\r\n缴费房号：1-1-101\r\n账单状态：已支付\r\n缴费金额：89.10\r\n单据编号：NBSQ20190308-126\r\n如有疑问，请点击详情查看订单详情记录&amp;gt;&amp;gt;',
    modify_time: '2019-03-15 17:34:19'
  },
  {
    id: 'OPENTM417828979',
    title: '监管受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n编号：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n提交身份：{{keyword3.DATA}}\n提交姓名：{{keyword4.DATA}}\n提交内容：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '商场监管受理通知\r\n编号：20190121012\r\n时间：2019-2-12\r\n提交身份：商场（商户）\r\n提交姓名：张军（13800138000）\r\n提交内容：二楼出现漏水情况，请处理。\r\n点击查看详情并处理!',
    modify_time: '2019-03-13 18:37:20'
  },
  {
    id: 'OPENTM417830331',
    title: '水量不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n水表号：{{keyword2.DATA}}\n剩余水量：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的水表账户剩余水量不足\r\n商铺号：1-A2\r\n水表号：189777666\r\n剩余水量：8m³\r\n时间：2019-03-08\r\n为了不影响您的正常用水，请及时充值！',
    modify_time: '2019-03-15 17:17:11'
  },
  {
    id: 'OPENTM417835433',
    title: '合同生效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n签约门店：{{keyword1.DATA}}\n门店地址：{{keyword2.DATA}}\n门店联系方式：{{keyword3.DATA}}\n合同入住日期：{{keyword4.DATA}}\n合同退房日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的窝友，您合同生效的情况：\r\n签约门店：深圳红山公寓\r\n门店地址：深圳市龙华新区民治街道东泉新村102-105栋\r\n门店联系方式：18000000000\r\n合同入住日期：2019年3月20日\r\n合同退房日期：2019年9月20日\r\n请尽快做好入住准备，点击查看签约详情。',
    modify_time: '2019-03-22 18:51:04'
  },
  {
    id: 'OPENTM417832784',
    title: '住户缴费结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n住户房号：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n账单状态：{{keyword4.DATA}}\n单据编号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '住户缴费结果通知\r\n所属小区：诺彼社区\r\n住户房号：1-1-1102\r\n缴费金额：3025.12\r\n账单状态：已支付\r\n单据编号：NBSQ20190314-120\r\n点击详情，查看已缴费收款单记录&amp;gt;&amp;gt;',
    modify_time: '2019-03-19 15:57:04'
  },
  {
    id: 'OPENTM417833738',
    title: '商户更改失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n商户名称：{{keyword2.DATA}}\n联系人姓名：{{keyword3.DATA}}\n联系人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的商户更改审核不通过\r\n申请时间：2018-12-03 15:06\r\n商户名称：广电银通公司\r\n联系人姓名：张三\r\n联系人电话：16888888888\r\n点击详情，可进行重新申请 如有疑问，可咨询95588停车服务热线',
    modify_time: '2019-03-20 15:40:35'
  },
  {
    id: 'OPENTM417833740',
    title: '商户更改失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n商户名称：{{keyword2.DATA}}\n联系人姓名：{{keyword3.DATA}}\n联系人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的商户更改审核不通过\r\n申请时间：2018-12-03 15:06\r\n商户名称：广电银通公司\r\n联系人姓名：张三\r\n联系人电话：16888888888\r\n点击详情，可进行重新申请 如有疑问，可咨询95588停车服务热线',
    modify_time: '2019-03-20 15:40:36'
  },
  {
    id: 'OPENTM417828841',
    title: '违纪处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n违纪人：{{keyword1.DATA}}\n违纪内容：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '违纪处理通知\r\n违纪人：张三\r\n违纪内容：破坏公共设施\r\n处理结果：停职检讨\r\n望遵守员工守则',
    modify_time: '2019-03-13 17:40:25'
  },
  {
    id: 'OPENTM417830391',
    title: '物业欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n缴费房间：{{keyword1.DATA}}\n待缴总金额：{{keyword2.DATA}}\n缴费月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '物业欠费通知\r\n缴费房间：XYD-01-0102，XYD-01-0205\r\n待缴总金额：1000.56\r\n缴费月份：2018-09，2018-10,2018-11\r\n尊敬的的用户，您好！您当前有费用待缴纳，请及时缴费 。缴费房间:xyd-01-0102 待缴总金额：1000.58，缴费月份：2018-09,2018-10，2018-11',
    modify_time: '2019-03-15 17:39:53'
  },
  {
    id: 'OPENTM417833741',
    title: '商户更改成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n申请时间：{{keyword1.DATA}}\n商户名称：{{keyword2.DATA}}\n联系人姓名：{{keyword3.DATA}}\n联系人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你已成功更改商户\r\n申请时间：2018-12-03 15:06\r\n商户名称：广电银通公司\r\n联系人姓名：张三\r\n联系人电话：16888888888\r\n点击详情，可查看详细申请进度 如有疑问，可咨询95588停车服务热线',
    modify_time: '2019-03-20 15:40:53'
  },
  {
    id: 'OPENTM417828842',
    title: '违纪处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n违纪人：{{keyword1.DATA}}\n违纪内容：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '违纪处理通知\r\n违纪人：张三\r\n违纪内容：破坏公共设施\r\n处理结果：停职检讨\r\n望遵守员工守则',
    modify_time: '2019-03-13 17:40:25'
  },
  {
    id: 'OPENTM417830392',
    title: '物业欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n缴费房间：{{keyword1.DATA}}\n待缴总金额：{{keyword2.DATA}}\n缴费月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '物业欠费通知\r\n缴费房间：XYD-01-0102，XYD-01-0205\r\n待缴总金额：1000.56\r\n缴费月份：2018-09，2018-10,2018-11\r\n尊敬的的用户，您好！您当前有费用待缴纳，请及时缴费 。缴费房间:xyd-01-0102 待缴总金额：1000.58，缴费月份：2018-09,2018-10，2018-11',
    modify_time: '2019-03-15 17:39:53'
  },
  {
    id: 'OPENTM417830393',
    title: '物业欠费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n缴费房间：{{keyword1.DATA}}\n待缴总金额：{{keyword2.DATA}}\n缴费月份：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '物业欠费通知\r\n缴费房间：XYD-01-0102，XYD-01-0205\r\n待缴总金额：1000.56\r\n缴费月份：2018-09，2018-10,2018-11\r\n尊敬的的用户，您好！您当前有费用待缴纳，请及时缴费 。缴费房间:xyd-01-0102 待缴总金额：1000.58，缴费月份：2018-09,2018-10，2018-11',
    modify_time: '2019-03-15 17:39:53'
  },
  {
    id: 'OPENTM417828844',
    title: '违纪处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n违纪人：{{keyword1.DATA}}\n违纪内容：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '违纪处理通知\r\n违纪人：张三\r\n违纪内容：破坏公共设施\r\n处理结果：停职检讨\r\n望遵守员工守则',
    modify_time: '2019-03-13 17:40:26'
  },
  {
    id: 'OPENTM417837551',
    title: '账单支付成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n支付方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客，感谢您的支持！您的账单已经支付成功。\r\n房间：玉兰香苑70栋101室\r\n账单周期：2015年6月7日～2015年7月6日\r\n账单金额：12345.67元\r\n支付时间：2015年7月7日 12:31:21\r\n支付方式：微信支付\r\n客服电话：4008-161-525',
    modify_time: '2019-03-26 15:06:52'
  },
  {
    id: 'OPENTM417837552',
    title: '账单支付成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n账单周期：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n支付方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客，感谢您的支持！您的账单已经支付成功。\r\n房间：玉兰香苑70栋101室\r\n账单周期：2015年6月7日～2015年7月6日\r\n账单金额：12345.67元\r\n支付时间：2015年7月7日 12:31:21\r\n支付方式：微信支付\r\n客服电话：4008-161-525',
    modify_time: '2019-03-26 15:06:52'
  },
  {
    id: 'OPENTM417837009',
    title: '账单支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n支付金额：{{keyword1.DATA}}\n支付时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的窝友，您支付账单成功的情况：\r\n支付金额：6000元\r\n支付时间：2019年3月20日  18:36\r\n点击查看账单支付详情。',
    modify_time: '2019-03-25 19:44:44'
  },
  {
    id: 'OPENTM417837010',
    title: '账单支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n支付金额：{{keyword1.DATA}}\n支付时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的窝友，您支付账单成功的情况：\r\n支付金额：6000元\r\n支付时间：2019年3月20日  18:36\r\n点击查看账单支付详情。',
    modify_time: '2019-03-25 19:44:44'
  },
  {
    id: 'OPENTM417837821',
    title: '访客通行提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n通行类型：{{keyword2.DATA}}\n通行时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '访客已进入大楼\r\n访客姓名：whiskey\r\n通行类型：进入\r\n通行时间：2019年12月23日9:32\r\n请及时接待',
    modify_time: '2019-03-26 17:11:19'
  },
  {
    id: 'OPENTM417837822',
    title: '访客通行提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n通行类型：{{keyword2.DATA}}\n通行时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '访客已进入大楼\r\n访客姓名：whiskey\r\n通行类型：进入\r\n通行时间：2019年12月23日9:32\r\n请及时接待',
    modify_time: '2019-03-26 17:11:19'
  },
  {
    id: 'OPENTM417835434',
    title: '合同生效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n签约门店：{{keyword1.DATA}}\n门店地址：{{keyword2.DATA}}\n门店联系方式：{{keyword3.DATA}}\n合同入住日期：{{keyword4.DATA}}\n合同退房日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的窝友，您合同生效的情况：\r\n签约门店：深圳红山公寓\r\n门店地址：深圳市龙华新区民治街道东泉新村102-105栋\r\n门店联系方式：18000000000\r\n合同入住日期：2019年3月20日\r\n合同退房日期：2019年9月20日\r\n请尽快做好入住准备，点击查看签约详情。',
    modify_time: '2019-03-22 18:51:05'
  },
  {
    id: 'OPENTM417837634',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n受访员工：{{keyword1.DATA}}\n到访公司：{{keyword2.DATA}}\n预约结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约申请已通过\r\n受访员工：whiskey\r\n到访公司：爱普森\r\n预约结果：通过\r\n欢迎您的到访',
    modify_time: '2019-03-26 16:06:45'
  },
  {
    id: 'OPENTM417837635',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n受访员工：{{keyword1.DATA}}\n到访公司：{{keyword2.DATA}}\n预约结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约申请已通过\r\n受访员工：whiskey\r\n到访公司：爱普森\r\n预约结果：通过\r\n欢迎您的到访',
    modify_time: '2019-03-26 16:06:45'
  },
  {
    id: 'OPENTM417835436',
    title: '账单缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您本月账单已出。\r\n业主姓名：张三\r\n地址：丽景华庭A栋508\r\n金额：50元\r\n请尽快缴纳，如有疑问，请咨询134545646。',
    modify_time: '2019-03-22 18:51:55'
  },
  {
    id: 'OPENTM417837636',
    title: '预约结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n受访员工：{{keyword1.DATA}}\n到访公司：{{keyword2.DATA}}\n预约结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约申请已通过\r\n受访员工：whiskey\r\n到访公司：爱普森\r\n预约结果：通过\r\n欢迎您的到访',
    modify_time: '2019-03-26 16:06:45'
  },
  {
    id: 'OPENTM417837587',
    title: '充值成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 29,
    content: '{{first.DATA}}\n充值时间：{{keyword1.DATA}}\n充值金额：{{keyword2.DATA}}\n账户可用余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的10-501用户，你充值电费成功\r\n充值时间：2019-3-21 15:30\r\n充值金额：100.00元\r\n账户可用余额：102.00元\r\n炬华物业为您服务',
    modify_time: '2019-03-26 15:30:14'
  },
  {
    id: 'OPENTM417837588',
    title: '充值成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n充值时间：{{keyword1.DATA}}\n充值金额：{{keyword2.DATA}}\n账户可用余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的10-501用户，你充值电费成功\r\n充值时间：2019-3-21 15:30\r\n充值金额：100.00元\r\n账户可用余额：102.00元\r\n炬华物业为您服务',
    modify_time: '2019-03-26 15:30:14'
  },
  {
    id: 'OPENTM417837543',
    title: '账单支付成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n支付方式：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客，感谢您的支持！您的账单已经支付成功。\r\n房间：玉兰香苑47栋101室\r\n租期：2019年4月7日～2019年5月6日\r\n账单金额：12345.67元\r\n支付时间：2019年4月7日 12:04:07\r\n支付方式：微信支付\r\n客服电话：4008-161-525',
    modify_time: '2019-03-26 15:03:47'
  },
  {
    id: 'OPENTM417837995',
    title: '报修受理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n设备编号：{{keyword1.DATA}}\n设备地点：{{keyword2.DATA}}\n故障描述：{{keyword3.DATA}}\n报修人：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一条新的报修工单\r\n设备编号：N0001\r\n设备地点：地下室车库\r\n故障描述：车库漏水\r\n报修人：李明\r\n请尽快受理',
    modify_time: '2019-03-26 17:49:06'
  },
  {
    id: 'OPENTM417838495',
    title: '房屋租金账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n租赁房屋地址：{{keyword1.DATA}}\n租金：{{keyword2.DATA}}\n租金起止日：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '唐巢公寓温馨提示：尊敬的租客，您下期的房屋租金账单已出账，请及时缴纳。便于及时为您更新门锁钥匙有效期。\r\n租赁房屋地址：XX小区XX楼XX\r\n租金：XX元/月\r\n租金起止日：XX年XX月XX日---- XX年XX月XX日\r\n如有异议，请联系您的租赁顾问人员为您服务。',
    modify_time: '2019-03-27 15:13:39'
  },
  {
    id: 'OPENTM417837646',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房屋信息：{{keyword1.DATA}}\n欠费金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主： 您的本期账单已出\r\n房屋信息：盐湖城-10号楼-1-101\r\n欠费金额：300元\r\n点击查看账单详情',
    modify_time: '2019-03-26 16:08:44'
  },
  {
    id: 'OPENTM417837746',
    title: '来访申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客电话：{{keyword2.DATA}}\n来访时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有新的访客申请\r\n访客姓名：whiskey\r\n访客电话：1999999999\r\n来访时间：2019年12月26日 12:33\r\n请确认是否接待',
    modify_time: '2019-03-26 16:54:55'
  },
  {
    id: 'OPENTM417838496',
    title: '房屋租金账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n租赁房屋地址：{{keyword1.DATA}}\n租金：{{keyword2.DATA}}\n租金起止日：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '唐巢公寓温馨提示：尊敬的租客，您下期的房屋租金账单已出账，请及时缴纳。便于及时为您更新门锁钥匙有效期。\r\n租赁房屋地址：XX小区XX楼XX\r\n租金：XX元/月\r\n租金起止日：XX年XX月XX日---- XX年XX月XX日\r\n如有异议，请联系您的租赁顾问人员为您服务。',
    modify_time: '2019-03-27 15:13:39'
  },
  {
    id: 'OPENTM417837747',
    title: '来访申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客电话：{{keyword2.DATA}}\n来访时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有新的访客申请\r\n访客姓名：whiskey\r\n访客电话：1999999999\r\n来访时间：2019年12月26日 12:33\r\n请确认是否接待',
    modify_time: '2019-03-26 16:54:55'
  },
  {
    id: 'OPENTM417841002',
    title: '租赁账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 10,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n租赁房源：{{keyword2.DATA}}\n费用金额：{{keyword3.DATA}}\n费用周期：{{keyword4.DATA}}\n费用类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您有一笔新的待缴费用\r\n客户名称：苏州火炬\r\n租赁房源：16号楼-107A,207\r\n费用金额：12000.00元\r\n费用周期：2019-03-01至2019-4-30\r\n费用类型：租金\r\n点击详情 ↓ 可以查看详细信息并直接在线支付哦~',
    modify_time: '2019-03-29 15:50:47'
  },
  {
    id: 'OPENTM417841003',
    title: '租赁账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n租赁房源：{{keyword2.DATA}}\n费用金额：{{keyword3.DATA}}\n费用周期：{{keyword4.DATA}}\n费用类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您有一笔新的待缴费用\r\n客户名称：苏州火炬\r\n租赁房源：16号楼-107A,207\r\n费用金额：12000.00元\r\n费用周期：2019-03-01至2019-4-30\r\n费用类型：租金\r\n点击详情 ↓ 可以查看详细信息并直接在线支付哦~',
    modify_time: '2019-03-29 15:50:48'
  },
  {
    id: 'OPENTM417839854',
    title: '待维修订单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n报单类型：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n报单内容：{{keyword4.DATA}}\n报单时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单！\r\n报单类型：报事/报修\r\n业主姓名：张三\r\n联系电话：13988888888\r\n报单内容：主体墙面开裂\r\n报单时间：2015.01.22 21:39\r\n业主报修，请尽快核实处理。',
    modify_time: '2019-03-28 16:08:51'
  },
  {
    id: 'OPENTM417841004',
    title: '租赁账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n租赁房源：{{keyword2.DATA}}\n费用金额：{{keyword3.DATA}}\n费用周期：{{keyword4.DATA}}\n费用类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您有一笔新的待缴费用\r\n客户名称：苏州火炬\r\n租赁房源：16号楼-107A,207\r\n费用金额：12000.00元\r\n费用周期：2019-03-01至2019-4-30\r\n费用类型：租金\r\n点击详情 ↓ 可以查看详细信息并直接在线支付哦~',
    modify_time: '2019-03-29 15:50:48'
  },
  {
    id: 'OPENTM417839856',
    title: '待维修订单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报单类型：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n报单内容：{{keyword4.DATA}}\n报单时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单！\r\n报单类型：报事/报修\r\n业主姓名：张三\r\n联系电话：13988888888\r\n报单内容：主体墙面开裂\r\n报单时间：2015.01.22 21:39\r\n业主报修，请尽快核实处理。',
    modify_time: '2019-03-28 16:08:52'
  },
  {
    id: 'OPENTM417840206',
    title: '维修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n报修人信息：{{keyword2.DATA}}\n报修地址：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n同行维修人员：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，系统中有一条维修任务需要处理\r\n订单编号：20190321183018648179\r\n报修人信息：张三 13545678901\r\n报修地址：海宁中国皮革城D座11号\r\n报修内容：线路故障、开关及插座问题\r\n同行维修人员：张三、李四\r\n点击查看详情',
    modify_time: '2019-03-28 18:27:25'
  },
  {
    id: 'OPENTM417839712',
    title: '预约取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已取消此预约\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2019-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：18888888888\r\n如无特殊情况下次请尽量不要取消预约，感谢您的配合。',
    modify_time: '2019-03-28 15:07:06'
  },
  {
    id: 'OPENTM417839714',
    title: '预约取消通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已取消此预约\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2019-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：18888888888\r\n如无特殊情况下次请尽量不要取消预约，感谢您的配合。',
    modify_time: '2019-03-28 15:07:06'
  },
  {
    id: 'OPENTM417840914',
    title: '订单成功分派通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，系统中有一条维修任务需要分派\r\n订单编号：20190321183018648179\r\n报修地址：海宁中国皮革城D座11号\r\n报修内容：线路故障、开关及插座问题\r\n点击查看详情',
    modify_time: '2019-03-29 15:16:46'
  },
  {
    id: 'OPENTM417839715',
    title: '预约确认成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的房东，您已成功确认以下看房预约。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2019-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：188888888\r\n如有特殊情况请提前取消，感谢您的配合。',
    modify_time: '2019-03-28 15:07:17'
  },
  {
    id: 'OPENTM417840915',
    title: '订单成功分派通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，系统中有一条维修任务需要分派\r\n订单编号：20190321183018648179\r\n报修地址：海宁中国皮革城D座11号\r\n报修内容：线路故障、开关及插座问题\r\n点击查看详情',
    modify_time: '2019-03-29 15:16:47'
  },
  {
    id: 'OPENTM417840916',
    title: '订单成功分派通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，系统中有一条维修任务需要分派\r\n订单编号：20190321183018648179\r\n报修地址：海宁中国皮革城D座11号\r\n报修内容：线路故障、开关及插座问题\r\n点击查看详情',
    modify_time: '2019-03-29 15:16:47'
  },
  {
    id: 'OPENTM417839717',
    title: '预约确认成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n联系人姓名：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的房东，您已成功确认以下看房预约。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约时间：2019-05-05 10:00\r\n联系人姓名：梁先生\r\n联系人电话：188888888\r\n如有特殊情况请提前取消，感谢您的配合。',
    modify_time: '2019-03-28 15:07:17'
  },
  {
    id: 'OPENTM417840921',
    title: '来访申请变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n受访人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n离开时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您与受访人沟通确认更改了拜访时间\r\n受访人： William\r\n到访时间：2014年7月21日 18:36\r\n离开时间：2014年7月21日 20:36\r\n如有异议请点击详情',
    modify_time: '2019-03-29 15:18:44'
  },
  {
    id: 'OPENTM417840924',
    title: '续费失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n缴费时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '续费失败通知\r\n订单编号：201903251002356\r\n车牌号码：粤A88888\r\n缴费金额：200元\r\n缴费时间：2020年10月1日 18:00\r\n已缴金额将会在三个工作日内退回原账户',
    modify_time: '2019-03-29 15:19:25'
  },
  {
    id: 'OPENTM417840925',
    title: '续费失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n车牌号码：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n缴费时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '续费失败通知\r\n订单编号：201903251002356\r\n车牌号码：粤A88888\r\n缴费金额：200元\r\n缴费时间：2020年10月1日 18:00\r\n已缴金额将会在三个工作日内退回原账户',
    modify_time: '2019-03-29 15:19:25'
  },
  {
    id: 'OPENTM417839730',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n账单总金额：{{keyword1.DATA}}\n账单月份：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您本月帐单已出，请查收！\r\n账单总金额：5088\r\n账单月份：2018年5月\r\n请您于当月5日前，缴清以上费用，逾期将产生相关违约金，祝您生活及工作愉快！',
    modify_time: '2019-03-28 15:09:32'
  },
  {
    id: 'OPENTM417839731',
    title: '月度账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单总金额：{{keyword1.DATA}}\n账单月份：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您本月帐单已出，请查收！\r\n账单总金额：5088\r\n账单月份：2018年5月\r\n请您于当月5日前，缴清以上费用，逾期将产生相关违约金，祝您生活及工作愉快！',
    modify_time: '2019-03-28 15:09:33'
  },
  {
    id: 'OPENTM417838595',
    title: '欠费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房屋信息：{{keyword1.DATA}}\n欠费金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主： 您的本期账单已出\r\n房屋信息：文苑小区-3号楼-1-301\r\n欠费金额：200元\r\n感谢你的使用。',
    modify_time: '2019-03-27 16:12:23'
  },
  {
    id: 'OPENTM417838596',
    title: '欠费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房屋信息：{{keyword1.DATA}}\n欠费金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主： 您的本期账单已出\r\n房屋信息：文苑小区-3号楼-1-301\r\n欠费金额：200元\r\n感谢你的使用。',
    modify_time: '2019-03-27 16:12:23'
  },
  {
    id: 'OPENTM417850752',
    title: '拉合闸通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账户余额：{{keyword1.DATA}}\n结算时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的501用户，您的拉闸操作已成功，感谢您的使用。\r\n账户余额：100.00元\r\n结算时间：2019-04-08 12:00:00\r\n炬华物业为您服务！',
    modify_time: '2019-04-11 14:57:58'
  },
  {
    id: 'OPENTM417850753',
    title: '拉合闸通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账户余额：{{keyword1.DATA}}\n结算时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的501用户，您的拉闸操作已成功，感谢您的使用。\r\n账户余额：100.00元\r\n结算时间：2019-04-08 12:00:00\r\n炬华物业为您服务！',
    modify_time: '2019-04-11 14:57:58'
  },
  {
    id: 'OPENTM417844708',
    title: '访客申请审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n小区名称：{{keyword1.DATA}}\n审核结果：{{keyword2.DATA}}\n通行时间：{{keyword3.DATA}}\n审核时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '2月23日\r\n小区名称：上海新苑\r\n审核结果：审核通过\r\n通行时间：2019年02月24日 15:00\r\n审核时间：2019年02月23日 11:24:58\r\n感谢你的使用。',
    modify_time: '2019-04-02 16:43:37'
  },
  {
    id: 'OPENTM417846209',
    title: '租金缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n租赁单元：{{keyword1.DATA}}\n应缴总额：{{keyword2.DATA}}\n应缴账期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您下月租金应缴明细如下，请及时缴纳！\r\n租赁单元：A座-0517\r\n应缴总额：1200\r\n应缴账期：2018-12，2019-01\r\n点击查看详情。',
    modify_time: '2019-04-04 15:27:58'
  },
  {
    id: 'OPENTM417845012',
    title: '访客预约审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客电话：{{keyword2.DATA}}\n访问开始时间：{{keyword3.DATA}}\n事由：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一条访客预约待审核\r\n访客姓名：张三\r\n访客电话：199xxxx2356\r\n访问开始时间：2019-04-01 10:00:00\r\n事由：访客预约\r\n感谢您的使用',
    modify_time: '2019-04-02 19:21:00'
  },
  {
    id: 'OPENTM417851762',
    title: '电梯故障通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n安装位置：{{keyword1.DATA}}\n所在楼层：{{keyword2.DATA}}\n发生时间：{{keyword3.DATA}}\n故障码：{{keyword4.DATA}}\n故障描述：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有一条故障通知\r\n安装位置：无锡\r\n所在楼层：1\r\n发生时间：2019-01-01\r\n故障码：12\r\n故障描述：停梯\r\n请及时到场检修',
    modify_time: '2019-04-12 16:44:59'
  },
  {
    id: 'OPENTM417845013',
    title: '访客预约审核通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客电话：{{keyword2.DATA}}\n访问开始时间：{{keyword3.DATA}}\n事由：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一条访客预约待审核\r\n访客姓名：张三\r\n访客电话：199xxxx2356\r\n访问开始时间：2019-04-01 10:00:00\r\n事由：访客预约\r\n感谢您的使用',
    modify_time: '2019-04-02 19:21:00'
  },
  {
    id: 'OPENTM417853317',
    title: '房租单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房源：{{keyword1.DATA}}\n收租日：{{keyword2.DATA}}\n总金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '张三，您好，4月份房租单已出\r\n房源：星海名城5期4栋1301\r\n收租日：2019-04-01\r\n总金额：5600\r\n请及时支付费用，如已支付，请忽略。',
    modify_time: '2019-04-15 16:50:46'
  },
  {
    id: 'OPENTM417853318',
    title: '房租单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房源：{{keyword1.DATA}}\n收租日：{{keyword2.DATA}}\n总金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '张三，您好，4月份房租单已出\r\n房源：星海名城5期4栋1301\r\n收租日：2019-04-01\r\n总金额：5600\r\n请及时支付费用，如已支付，请忽略。',
    modify_time: '2019-04-15 16:50:47'
  },
  {
    id: 'OPENTM417844677',
    title: '物业缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n物业公司：{{keyword1.DATA}}\n帐单月份：{{keyword2.DATA}}\n应缴费用：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '李小明，你好！\r\n物业公司：广电物业\r\n帐单月份：2019年3月\r\n应缴费用：您在广电物业2019年3月应缴电费200.00元，水费120元\r\n点击“详情”可以查看详细内容',
    modify_time: '2019-04-02 16:36:17'
  },
  {
    id: 'OPENTM417849980',
    title: '报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n所在项目：{{keyword1.DATA}}\n故障位置：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n受理状态：{{keyword4.DATA}}\n受理反馈：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您提交的报修我们已开始受理\r\n所在项目：博济·江南智造园\r\n故障位置：2号楼北侧公共卫生间\r\n提交时间：2018-10-24 11:13\r\n受理状态：已接单受理\r\n受理反馈：我们已安排维修人员准备维修，感谢您的反馈\r\n如有疑问，请拨打客服电话：400-885-0501',
    modify_time: '2019-04-10 16:15:59'
  },
  {
    id: 'OPENTM417850730',
    title: '退租通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n签约公寓：{{keyword1.DATA}}\n签约房屋：{{keyword2.DATA}}\n申请日期：{{keyword3.DATA}}\n退租日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的窝友，您申请退租的情况：\r\n签约公寓：深圳红山地铁站店\r\n签约房屋：302房\r\n申请日期：2019年3月10日\r\n退租日期：2019年3月20日\r\n我们已经收到您的申请，管家将会尽快与您联系',
    modify_time: '2019-04-11 14:49:59'
  },
  {
    id: 'OPENTM417846237',
    title: '门禁呼叫通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n呼叫时间：{{keyword1.DATA}}\n门禁位置：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '呼叫通知\r\n呼叫时间：2014年7月21日 18:36\r\n门禁位置：清华科技园一栋一单元前门\r\n点击接听',
    modify_time: '2019-04-04 15:37:41'
  },
  {
    id: 'OPENTM417846238',
    title: '门禁呼叫通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n呼叫时间：{{keyword1.DATA}}\n门禁位置：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '呼叫通知\r\n呼叫时间：2014年7月21日 18:36\r\n门禁位置：清华科技园一栋一单元前门\r\n点击接听',
    modify_time: '2019-04-04 15:37:42'
  },
  {
    id: 'OPENTM417844640',
    title: '电费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n租赁房源：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您有新的电费账单，请尽快缴纳\r\n客户名称：修源盛电气技术（苏州）有限公司\r\n租赁房源：19号楼-104\r\n点击详情 ↓ 可以直接在线支付。如有疑问，请拨打客服电话：400-885-0501',
    modify_time: '2019-04-02 16:28:35'
  },
  {
    id: 'OPENTM417851740',
    title: '停车费审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n审核结果：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n车牌号：{{keyword3.DATA}}\n租赁时长：{{keyword4.DATA}}\n支付时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，恭喜您提交的停车租赁已获得审核通过\r\n审核结果：同意并生效，租赁有效期\r\n缴费金额：600元\r\n车牌号：苏E88888\r\n租赁时长：3个月\r\n支付时间：2018-10-23 12:12:33\r\n如有疑问，请拨打客服电话：400-885-0501',
    modify_time: '2019-04-12 16:35:14'
  },
  {
    id: 'OPENTM417846193',
    title: '物业费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n房屋：{{keyword2.DATA}}\n本期物业费：{{keyword3.DATA}}\n历史欠费：{{keyword4.DATA}}\n物业费总计：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的物业费已出\r\n小区：通晨天通苑\r\n房屋：D栋601\r\n本期物业费：350.00元\r\n历史欠费：400.00元\r\n物业费总计：750.00元\r\n请核对账单进行缴费，如有疑问，请咨询物业公司。 壹社圈感谢您的支持，祝您生活愉快，一切顺利。',
    modify_time: '2019-04-04 15:20:42'
  },
  {
    id: 'OPENTM417846194',
    title: '物业费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n房屋：{{keyword2.DATA}}\n本期物业费：{{keyword3.DATA}}\n历史欠费：{{keyword4.DATA}}\n物业费总计：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的物业费已出\r\n小区：通晨天通苑\r\n房屋：D栋601\r\n本期物业费：350.00元\r\n历史欠费：400.00元\r\n物业费总计：750.00元\r\n请核对账单进行缴费，如有疑问，请咨询物业公司。 壹社圈感谢您的支持，祝您生活愉快，一切顺利。',
    modify_time: '2019-04-04 15:20:42'
  },
  {
    id: 'OPENTM417846198',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n房屋：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主：\r\n小区：通晨天通苑\r\n房屋：D601\r\n您已成功进行物业缴费，具体费用明细可进入壹社圈平台的 “历史账单”进行查看。 感谢您的支持，如有疑问，请致电物业管理处进行咨询。',
    modify_time: '2019-04-04 15:22:07'
  },
  {
    id: 'OPENTM417846199',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n房屋：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主：\r\n小区：通晨天通苑\r\n房屋：D601\r\n您已成功进行物业缴费，具体费用明细可进入壹社圈平台的 “历史账单”进行查看。 感谢您的支持，如有疑问，请致电物业管理处进行咨询。',
    modify_time: '2019-04-04 15:22:07'
  },
  {
    id: 'OPENTM417869001',
    title: '工单处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n工单号：{{keyword1.DATA}}\n问题类型：{{keyword2.DATA}}\n最新回复：{{keyword3.DATA}}\n回复时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '最新回复\r\n工单号：GD201904240001\r\n问题类型：安装问题\r\n最新回复：您反馈的问题，我们已收到。\r\n回复时间：2019-04-24 18:30:36\r\n点击查看工单详情',
    modify_time: '2019-05-07 14:32:29'
  },
  {
    id: 'OPENTM417863264',
    title: '车辆进入通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车地点：{{keyword2.DATA}}\n泊位编码：{{keyword3.DATA}}\n进入时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '会员您好，您的车辆停放在如下位置\r\n车牌号码：粤X88888\r\n停车地点：南苑中路01段\r\n泊位编码：110101\r\n进入时间：2019-01-01 10:10:10\r\n感谢使用，离开时使用线上停车缴费功能，可享受会员优惠!',
    modify_time: '2019-04-28 19:30:11'
  },
  {
    id: 'OPENTM417863265',
    title: '车辆进入通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车地点：{{keyword2.DATA}}\n泊位编码：{{keyword3.DATA}}\n进入时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '会员您好，您的车辆停放在如下位置\r\n车牌号码：粤X88888\r\n停车地点：南苑中路01段\r\n泊位编码：110101\r\n进入时间：2019-01-01 10:10:10\r\n感谢使用，离开时使用线上停车缴费功能，可享受会员优惠!',
    modify_time: '2019-04-28 19:30:11'
  },
  {
    id: 'OPENTM417868115',
    title: '寄存结束通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n寄存网点：{{keyword1.DATA}}\n寄存柜门：{{keyword2.DATA}}\n实付费用：{{keyword3.DATA}}\n开始时间：{{keyword4.DATA}}\n结束时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '寄存已结束，感谢您的使用\r\n寄存网点：1号楼\r\n寄存柜门：06号\r\n实付费用：0.01元\r\n开始时间：2019-04-25 16:01:00\r\n结束时间：2019-04-25 15:00:23\r\n订单已结束，您点击详情查询详细信息，如有疑问请查阅使用帮助或联系客服',
    modify_time: '2019-05-06 14:48:11'
  },
  {
    id: 'OPENTM417853319',
    title: '房租单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房源：{{keyword1.DATA}}\n收租日：{{keyword2.DATA}}\n总金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '张三，您好，4月份房租单已出\r\n房源：星海名城5期4栋1301\r\n收租日：2019-04-01\r\n总金额：5600\r\n请及时支付费用，如已支付，请忽略。',
    modify_time: '2019-04-15 16:50:47'
  },
  {
    id: 'OPENTM417860025',
    title: '停车缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n支付金额：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n车场信息：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你本次停车账单已支付成功。\r\n车牌号：粤B2D31\r\n支付金额：20元\r\n支付时间：2017年6月21日 18：11\r\n车场信息：安驻云停车场\r\n本次服务有安驻云物业SaaS平台提供，感谢你的使用',
    modify_time: '2019-04-25 16:08:22'
  },
  {
    id: 'OPENTM417860026',
    title: '停车缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n支付金额：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n车场信息：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你本次停车账单已支付成功。\r\n车牌号：粤B2D31\r\n支付金额：20元\r\n支付时间：2017年6月21日 18：11\r\n车场信息：安驻云停车场\r\n本次服务有安驻云物业SaaS平台提供，感谢你的使用',
    modify_time: '2019-04-25 16:08:22'
  },
  {
    id: 'OPENTM417859927',
    title: '报修成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修地址：{{keyword1.DATA}}\n报修设备：{{keyword2.DATA}}\n故障描述：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，报修成功\r\n报修地址：人民路大楼101室\r\n报修设备：电脑\r\n故障描述：电脑无法启动\r\n报修时间：2019-04-11 10:00\r\n感谢您的保修。',
    modify_time: '2019-04-25 15:46:17'
  },
  {
    id: 'OPENTM417859928',
    title: '报修成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修地址：{{keyword1.DATA}}\n报修设备：{{keyword2.DATA}}\n故障描述：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，报修成功\r\n报修地址：人民路大楼101室\r\n报修设备：电脑\r\n故障描述：电脑无法启动\r\n报修时间：2019-04-11 10:00\r\n感谢您的保修。',
    modify_time: '2019-04-25 15:46:17'
  },
  {
    id: 'OPENTM417867978',
    title: '设备报警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n户名地址：{{keyword1.DATA}}\n表名称：{{keyword2.DATA}}\n累积量：{{keyword3.DATA}}\n表类型：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！物业提醒您的水表报警\r\n户名地址：478号B座1320室\r\n表名称：58731166222222\r\n累积量：1\r\n表类型：冷水表\r\n您的表具存在异常请协助水司查看！',
    modify_time: '2019-05-06 11:52:43'
  },
  {
    id: 'OPENTM417867979',
    title: '设备报警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n户名地址：{{keyword1.DATA}}\n表名称：{{keyword2.DATA}}\n累积量：{{keyword3.DATA}}\n表类型：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！物业提醒您的水表报警\r\n户名地址：478号B座1320室\r\n表名称：58731166222222\r\n累积量：1\r\n表类型：冷水表\r\n您的表具存在异常请协助水司查看！',
    modify_time: '2019-05-06 11:52:44'
  },
  {
    id: 'OPENTM417867981',
    title: '开阀提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n用户：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！阀门已经打开。\r\n用户：王五\r\n地址：478号松芝万象城B座1320室\r\n尊敬的用户您好！阀门已经打开。',
    modify_time: '2019-05-06 11:52:57'
  },
  {
    id: 'OPENTM417867983',
    title: '开阀提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用户：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！阀门已经打开。\r\n用户：王五\r\n地址：478号松芝万象城B座1320室\r\n尊敬的用户您好！阀门已经打开。',
    modify_time: '2019-05-06 11:52:57'
  },
  {
    id: 'OPENTM417867984',
    title: '开阀提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用户：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！阀门已经打开。\r\n用户：王五\r\n地址：478号松芝万象城B座1320室\r\n尊敬的用户您好！阀门已经打开。',
    modify_time: '2019-05-06 11:52:58'
  },
  {
    id: 'OPENTM417858889',
    title: '挪车通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '挪车提醒\r\n车牌号：豫A89888\r\n地址：苏州马云家\r\n时间：2999年13月32日\r\n如有疑问，请联系客服人员，联系电话0101001，谢谢您的配合',
    modify_time: '2019-04-24 15:50:47'
  },
  {
    id: 'OPENTM417858891',
    title: '挪车通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '挪车提醒\r\n车牌号：豫A89888\r\n地址：苏州马云家\r\n时间：2999年13月32日\r\n如有疑问，请联系客服人员，联系电话0101001，谢谢您的配合',
    modify_time: '2019-04-24 15:50:47'
  },
  {
    id: 'OPENTM417854695',
    title: '移除住户通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n原因：{{keyword1.DATA}}\n操作人员：{{keyword2.DATA}}\n移除时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好,小明不再具有清华科技园2栋3单元门禁权限\r\n原因：用户移除门禁权限\r\n操作人员：房东或者管理员\r\n移除时间：2014年7月21日 18:36\r\n请核查情况：如有误，可通过小程序重新授权开通权限',
    modify_time: '2019-04-17 18:38:32'
  },
  {
    id: 'OPENTM417863246',
    title: '车辆离开通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车地点：{{keyword2.DATA}}\n进入时间：{{keyword3.DATA}}\n离开时间：{{keyword4.DATA}}\n停车时长：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '会员您好，您的停车已经完成\r\n车牌号码：粤X88888\r\n停车地点：南苑中路01段110101泊位\r\n进入时间：2019-01-01 10:10:10\r\n离开时间：2019-01-01 10:12:10\r\n停车时长：2分钟\r\n停车费用：￥0.20元,点击详情查看明细并支付，逾期未支付将影响您下次使用及信用记录!',
    modify_time: '2019-04-28 18:53:05'
  },
  {
    id: 'OPENTM417868198',
    title: '新订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n服务名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n详细地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个新的订单通知\r\n服务名称：成都东站找水电维修工\r\n预约时间：点击进入查看...\r\n详细地址：四川省成都市成华区青衣江路(三环路成渝立交西南)成都东站\r\n成都东站找两名水电维修工人，260一天，包吃住，有意的电话联系',
    modify_time: '2019-05-06 15:23:32'
  },
  {
    id: 'OPENTM417868199',
    title: '新订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n服务名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n详细地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个新的订单通知\r\n服务名称：成都东站找水电维修工\r\n预约时间：点击进入查看...\r\n详细地址：四川省成都市成华区青衣江路(三环路成渝立交西南)成都东站\r\n成都东站找两名水电维修工人，260一天，包吃住，有意的电话联系',
    modify_time: '2019-05-06 15:23:33'
  },
  {
    id: 'OPENTM417869100',
    title: '水表关阀提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n户名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您家中的水表阀门已被欠费关阀。\r\n户名：王五\r\n地址：合肥市蜀山区长江西路478号B座1320室\r\n您的阀门已关闭。请关好家中龙头以避免通水时造成不必要的损失。',
    modify_time: '2019-05-07 15:03:18'
  },
  {
    id: 'OPENTM417869101',
    title: '水表关阀提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n户名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您家中的水表阀门已被欠费关阀。\r\n户名：王五\r\n地址：合肥市蜀山区长江西路478号B座1320室\r\n您的阀门已关闭。请关好家中龙头以避免通水时造成不必要的损失。',
    modify_time: '2019-05-07 15:03:18'
  },
  {
    id: 'OPENTM417869105',
    title: '访客预约申请提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n预约状态：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约地点：{{keyword3.DATA}}\n访客姓名：{{keyword4.DATA}}\n被访事由：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '丘先生您好，您有一条访客预约申请消息。\r\n预约状态：待审批\r\n预约时间：2019/03/23\r\n预约地点：南山智园-C1\r\n访客姓名：宋先生\r\n被访事由：洽谈公务\r\n请前往处理。',
    modify_time: '2019-05-07 15:04:20'
  },
  {
    id: 'OPENTM417869107',
    title: '访客预约审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n预约状态：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约地点：{{keyword3.DATA}}\n被访人：{{keyword4.DATA}}\n被访事由：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '宋先生您好，您的预约申请已经获得同意。\r\n预约状态：通过\r\n预约时间：2019/03/23\r\n预约地点：南山智园-C1\r\n被访人：丘先生\r\n被访事由：洽谈公务\r\n如有疑问，请联系前台86675934。',
    modify_time: '2019-05-07 15:04:40'
  },
  {
    id: 'OPENTM417869208',
    title: '预约提交成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n物业类型：{{keyword2.DATA}}\n预约看房：{{keyword3.DATA}}\n联系人称呼：{{keyword4.DATA}}\n联系人电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '系统已保存您的预约并已提交给房源业主。\r\n物业地址：宝成花园\r\n物业类型：一房一厅\r\n预约看房：2019-05-01 10:00\r\n联系人称呼：梁先生\r\n联系人电话：18888888888\r\n业主会尽快联系您已确认此预约，感谢您的配合。',
    modify_time: '2019-05-07 15:40:44'
  },
  {
    id: 'OPENTM417875158',
    title: '维修任务通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n维修类型：{{keyword1.DATA}}\n数量：{{keyword2.DATA}}\n任务下发时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有新的维修任务\r\n维修类型：热量表\r\n数量：20\r\n任务下发时间：2019-05-05 11:02:03\r\n请尽快进行维修。',
    modify_time: '2019-05-15 15:04:49'
  },
  {
    id: 'OPENTM417869411',
    title: '工单处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n工单号：{{keyword1.DATA}}\n问题类型：{{keyword2.DATA}}\n工单状态：{{keyword3.DATA}}\n工单处理人：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一个工单等待处理，请及时查看并处理。\r\n工单号：X20190430111809892223\r\n问题类型：生活垃圾清理\r\n工单状态：待确认\r\n工单处理人：马某某\r\n快去查看吧！',
    modify_time: '2019-05-07 17:02:06'
  },
  {
    id: 'OPENTM417869413',
    title: '工单处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单号：{{keyword1.DATA}}\n问题类型：{{keyword2.DATA}}\n工单状态：{{keyword3.DATA}}\n工单处理人：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一个工单等待处理，请及时查看并处理。\r\n工单号：X20190430111809892223\r\n问题类型：生活垃圾清理\r\n工单状态：待确认\r\n工单处理人：马某某\r\n快去查看吧！',
    modify_time: '2019-05-07 17:02:06'
  },
  {
    id: 'OPENTM417875966',
    title: '停车出场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n进出时间：{{keyword2.DATA}}\n停车时长：{{keyword3.DATA}}\n消费金额：{{keyword4.DATA}}\n可用余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '桂枫园小区停车出场通知。\r\n车牌号：鄂A0BV26\r\n进出时间：进：2019年4月21日 18:36 出：2019年4月21日 21:36\r\n停车时长：0天5小时12分18秒\r\n消费金额：19.0元\r\n可用余额：390元\r\n请在30分钟内离场超时重新计费！',
    modify_time: '2019-05-16 16:39:16'
  },
  {
    id: 'OPENTM417869117',
    title: '账单逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n缴费日期：{{keyword3.DATA}}\n逾期天数：{{keyword4.DATA}}\n累计欠费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单已逾期，请及时缴纳。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n缴费日期：12月份\r\n逾期天数：15天\r\n累计欠费：1200.00元\r\n点击查看费用详情。',
    modify_time: '2019-05-07 15:12:09'
  },
  {
    id: 'OPENTM417869119',
    title: '账单逾期提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n缴费日期：{{keyword3.DATA}}\n逾期天数：{{keyword4.DATA}}\n累计欠费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单已逾期，请及时缴纳。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n缴费日期：12月份\r\n逾期天数：15天\r\n累计欠费：1200.00元\r\n点击查看费用详情。',
    modify_time: '2019-05-07 15:12:10'
  },
  {
    id: 'OPENTM417869220',
    title: '物业月账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n用量：{{keyword1.DATA}}\n费用：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的502客户您好，您2018年12月份的电费账单已出，请及时缴费。\r\n用量：100.00度\r\n费用：100.00元\r\n如已交费，敬请忽略。',
    modify_time: '2019-05-07 15:44:11'
  },
  {
    id: 'OPENTM417876120',
    title: '电表余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n电表名称：{{keyword1.DATA}}\n电表余额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，当前电表余额不足，请及时充值。\r\n电表名称：SPM9513-A-1\r\n电表余额：0.00元\r\n如有需要，可点击详情将电表名称或二维码发送给相应人员进行充值。',
    modify_time: '2019-05-16 17:42:21'
  },
  {
    id: 'OPENTM417869221',
    title: '物业月账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n用量：{{keyword1.DATA}}\n费用：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的502客户您好，您2018年12月份的电费账单已出，请及时缴费。\r\n用量：100.00度\r\n费用：100.00元\r\n如已交费，敬请忽略。',
    modify_time: '2019-05-07 15:44:11'
  },
  {
    id: 'OPENTM417876074',
    title: '充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n账户：{{keyword1.DATA}}\n子账户：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您好！您在2019年5月7日通过微信支付成功为电表充值。\r\n账户：肯德基\r\n子账户：1AN1-102\r\n充值金额：100元\r\n余额：150元\r\n如有疑问，或需进一步核实，请与中电物业管理处联系。',
    modify_time: '2019-05-16 17:28:32'
  },
  {
    id: 'OPENTM417875331',
    title: '水表金额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n户名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n剩余金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！本物业公司提醒您的水表账户剩余金额不足\r\n户名：王五\r\n地址：合肥市蜀山区长江西路478号\r\n剩余金额：1.0\r\n您的账户金额已不足10.0元，为了不影响您正常使用设备，请你的尽快充值缴费。谢谢合作！',
    modify_time: '2019-05-15 19:04:22'
  },
  {
    id: 'OPENTM417875337',
    title: '水表余额不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n户名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n剩余金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户您好！物业公司提醒您户水表余额不足\r\n户名：王五\r\n地址：松芝万象城1320室\r\n剩余金额：1.01\r\n你的账户余额不足10元，为了不影响您正常使用请及时缴费',
    modify_time: '2019-05-15 19:05:52'
  },
  {
    id: 'OPENTM417876239',
    title: 'CRM工单结束提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n报事内容：{{keyword3.DATA}}\n受理人：{{keyword4.DATA}}\n报事完成时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您的服务请求工单受理员工 :张三 139****0000已完成。\r\n工单编号：GD1509095640688650\r\n房屋编号：973318231332\r\n报事内容：马桶堵塞，请安排工人维修\r\n受理人：张三\r\n报事完成时间：2019年4月21日 18:36\r\n2019年4月22日 10:16',
    modify_time: '2019-05-16 18:40:33'
  },
  {
    id: 'OPENTM417875947',
    title: '随身物品寄存成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n寄存网点：{{keyword1.DATA}}\n寄存柜门：{{keyword2.DATA}}\n寄存时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '寄存物品成功，感谢您的使用\r\n寄存网点：1号楼\r\n寄存柜门：06号\r\n寄存时间：2019-04-25 16:01:00\r\n订单创建成功',
    modify_time: '2019-05-16 16:17:52'
  },
  {
    id: 'OPENTM417869099',
    title: '水表关阀提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n户名：{{keyword1.DATA}}\n地址：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户您好！您家中的水表阀门已被欠费关阀。\r\n户名：王五\r\n地址：合肥市蜀山区长江西路478号B座1320室\r\n您的阀门已关闭。请关好家中龙头以避免通水时造成不必要的损失。',
    modify_time: '2019-05-07 15:03:18'
  },
  {
    id: 'OPENTM417884500',
    title: '解绑房间成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间名：{{keyword1.DATA}}\n操作时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您已解绑成功。\r\n房间名：求是大厦101房\r\n操作时间：2019-04-04\r\n您已解除与该房间的绑定关系，将不再接收该房间账单推送。',
    modify_time: '2019-05-28 15:54:26'
  },
  {
    id: 'OPENTM417876501',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n维修地址：{{keyword2.DATA}}\n维修内容：{{keyword3.DATA}}\n维修人信息：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报修单已经派发！\r\n订单编号：20190509193553367189\r\n维修地址：市场B座2层丽水街2-1号走廊\r\n维修内容：日光灯,其他 水管漏了\r\n维修人信息：金铭   13100000000\r\n如有特殊需求请电话联系接单人员。',
    modify_time: '2019-05-16 19:41:30'
  },
  {
    id: 'OPENTM417876458',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n派发时间：{{keyword2.DATA}}\n维修人员：{{keyword3.DATA}}\n维修人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报修单已经派发！\r\n订单编号：20190509193553367189\r\n派发时间：2019-05-09 19:35\r\n维修人员：张三\r\n维修人电话：13567890123\r\n如有特殊需求请电话联系接单人员。',
    modify_time: '2019-05-16 19:29:22'
  },
  {
    id: 'OPENTM417876459',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n派发时间：{{keyword2.DATA}}\n维修人员：{{keyword3.DATA}}\n维修人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的报修单已经派发！\r\n订单编号：20190509193553367189\r\n派发时间：2019-05-09 19:35\r\n维修人员：张三\r\n维修人电话：13567890123\r\n如有特殊需求请电话联系接单人员。',
    modify_time: '2019-05-16 19:29:23'
  },
  {
    id: 'OPENTM417876714',
    title: '新报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 11,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修人：{{keyword2.DATA}}\n报修地址：{{keyword3.DATA}}\n报修详情：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '刚刚收到一个新报修单，请及时派单\r\n报修单号：2019051214212011112\r\n报修人：陈天一\r\n报修地址：36号楼102\r\n报修详情：走廊灯坏了\r\n详情&amp;gt;',
    modify_time: '2019-05-16 20:50:52'
  },
  {
    id: 'OPENTM417876520',
    title: '新工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n工单内容：{{keyword1.DATA}}\n工单地址：{{keyword2.DATA}}\n派单时间：{{keyword3.DATA}}\n派单人员：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您收到一个工单提醒\r\n工单内容：人员出入报警\r\n工单地址：A2楼-二楼\r\n派单时间：2019-04-15 20:12:27\r\n派单人员：张三\r\n请尽快处理',
    modify_time: '2019-05-16 19:45:22'
  },
  {
    id: 'OPENTM417876721',
    title: '报修任务处理进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 6,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修人：{{keyword2.DATA}}\n报修地址：{{keyword3.DATA}}\n报修详情：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: 'helen你好，你负责的一个维修任务刚刚被撤销了，请了解。\r\n报修单号：2019051214212011112\r\n报修人：陈天一\r\n报修地址：36号楼102\r\n报修详情：马桶坏了\r\n点击查看详情',
    modify_time: '2019-05-16 20:55:36'
  },
  {
    id: 'OPENTM417876725',
    title: '寄存成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n寄存网点：{{keyword1.DATA}}\n寄存柜门：{{keyword2.DATA}}\n支付押金：{{keyword3.DATA}}\n寄存时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '寄存物品成功，感谢您使用我们的储物柜\r\n寄存网点：13栋1楼储物柜\r\n寄存柜门：12号\r\n支付押金：1.00元\r\n寄存时间：2019-05-15 00:00:00\r\n订单创建成功，您可以通过底部【取包】菜单进行提取，如有疑问请联系物业',
    modify_time: '2019-05-16 20:56:51'
  },
  {
    id: 'OPENTM417876381',
    title: '整改进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n整改地址：{{keyword1.DATA}}\n受理日期：{{keyword2.DATA}}\n进度状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，关于您的房屋整改问题，最新进度情况为：\r\n整改地址：项目A/1-1-101\r\n受理日期：2019-01-01\r\n进度状态：部分完成\r\n整改项目1：门把松动（已完成）；整改项目2：飘窗渗水（进行中）',
    modify_time: '2019-05-16 19:15:00'
  },
  {
    id: 'OPENTM417880682',
    title: '电表电量不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n电表名称：{{keyword1.DATA}}\n电表剩余电量：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，电表余额不足，请及时充值。\r\n电表名称：SPM9513-A-1\r\n电表剩余电量：0.00度\r\n如有需要，可点击详情将电表名称或二维码发送给相应人员进行充值。',
    modify_time: '2019-05-21 17:14:33'
  },
  {
    id: 'OPENTM417879833',
    title: '电费充值成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n电表名称：{{keyword1.DATA}}\n充值金额：{{keyword2.DATA}}\n充值时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，当前电表已经充值成功。电费到账导致可能存在延迟，请耐心等待。\r\n电表名称：SPM622-D-23\r\n充值金额：0.00元\r\n充值时间：2019年5月10日 12:00\r\n如有疑问，可联系物业管理处进行反馈。谢谢！',
    modify_time: '2019-05-20 19:58:18'
  },
  {
    id: 'OPENTM417879834',
    title: '月度物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n通知单号：{{keyword1.DATA}}\n费用合计：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，本月账单已经生成，请及时缴费，谢谢合作！\r\n通知单号：20190505LF3MJBO\r\n费用合计：0.00元\r\n如有需要，可点击详情将通知单号或者二维码发送给相应人员进行缴费。',
    modify_time: '2019-05-20 19:58:46'
  },
  {
    id: 'OPENTM417880684',
    title: '电表电量不足提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n电表名称：{{keyword1.DATA}}\n电表剩余电量：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，电表余额不足，请及时充值。\r\n电表名称：SPM9513-A-1\r\n电表剩余电量：0.00度\r\n如有需要，可点击详情将电表名称或二维码发送给相应人员进行充值。',
    modify_time: '2019-05-21 17:14:33'
  },
  {
    id: 'OPENTM417879836',
    title: '月度账单缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n通知单号：{{keyword1.DATA}}\n费用合计：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，本月账单已经生成，请及时缴费，谢谢合作！\r\n通知单号：20190505LF3MJDO\r\n费用合计：0.00元\r\n如有需要，可点击详情将通知单号或二维码发送给相应人员进行缴费。',
    modify_time: '2019-05-20 19:59:14'
  },
  {
    id: 'OPENTM417879837',
    title: '月度账单缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n通知单号：{{keyword1.DATA}}\n费用合计：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，本月账单已经生成，请及时缴费，谢谢合作！\r\n通知单号：20190505LF3MJDO\r\n费用合计：0.00元\r\n如有需要，可点击详情将通知单号或二维码发送给相应人员进行缴费。',
    modify_time: '2019-05-20 19:59:15'
  },
  {
    id: 'OPENTM417880389',
    title: '电费余额不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账户：{{keyword1.DATA}}\n子账户：{{keyword2.DATA}}\n余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您好！您的电表于2019年4月28日欠费，为避免影响用电，请及时充值。\r\n账户：麦当劳\r\n子账户：1AN1-103\r\n余额：100元，已低于500元\r\n如有疑问，或需进一步核实，请与中电物业管理处联系。',
    modify_time: '2019-05-21 14:56:47'
  },
  {
    id: 'OPENTM417880390',
    title: '电费余额不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账户：{{keyword1.DATA}}\n子账户：{{keyword2.DATA}}\n余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您好！您的电表于2019年4月28日欠费，为避免影响用电，请及时充值。\r\n账户：麦当劳\r\n子账户：1AN1-103\r\n余额：100元，已低于500元\r\n如有疑问，或需进一步核实，请与中电物业管理处联系。',
    modify_time: '2019-05-21 14:56:48'
  },
  {
    id: 'OPENTM417876642',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单类型：{{keyword1.DATA}}\n账单时段：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '物业账单到达通知\r\n账单类型：物业费类\r\n账单时段：201801-201812\r\n账单金额：200\r\n点击查看账单详情，感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2019-05-16 20:29:09'
  },
  {
    id: 'OPENTM417880392',
    title: '电费余额不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n账户：{{keyword1.DATA}}\n子账户：{{keyword2.DATA}}\n余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您好！您的电表于2019年4月28日欠费，为避免影响用电，请及时充值。\r\n账户：麦当劳\r\n子账户：1AN1-103\r\n余额：100元，已低于500元\r\n如有疑问，或需进一步核实，请与中电物业管理处联系。',
    modify_time: '2019-05-21 14:56:48'
  },
  {
    id: 'OPENTM417884499',
    title: '解绑房间成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房间名：{{keyword1.DATA}}\n操作时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您已解绑成功。\r\n房间名：求是大厦101房\r\n操作时间：2019-04-04\r\n您已解除与该房间的绑定关系，将不再接收该房间账单推送。',
    modify_time: '2019-05-28 15:54:26'
  },
  {
    id: 'OPENTM417884501',
    title: '解绑房间成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房间名：{{keyword1.DATA}}\n操作时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您已解绑成功。\r\n房间名：求是大厦101房\r\n操作时间：2019-04-04\r\n您已解除与该房间的绑定关系，将不再接收该房间账单推送。',
    modify_time: '2019-05-28 15:54:27'
  },
  {
    id: 'OPENTM417886654',
    title: '电网余量不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报警设备：{{keyword1.DATA}}\n报警地址：{{keyword2.DATA}}\n当前余量：{{keyword3.DATA}}\n报警阈值：{{keyword4.DATA}}\n报警时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的房间电网余量不足，请尽快充值\r\n报警设备：180017190441\r\n报警地址：武汉市洪山区能源大厦2801室\r\n当前余量：49.5 KW·h\r\n报警阈值：50 KW·h\r\n报警时间：2019-05-09 14:20:36\r\n请业主及时通过物业/供电部门充值电费',
    modify_time: '2019-05-31 18:31:13'
  },
  {
    id: 'OPENTM417886655',
    title: '电网余量不足通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报警设备：{{keyword1.DATA}}\n报警地址：{{keyword2.DATA}}\n当前余量：{{keyword3.DATA}}\n报警阈值：{{keyword4.DATA}}\n报警时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的房间电网余量不足，请尽快充值\r\n报警设备：180017190441\r\n报警地址：武汉市洪山区能源大厦2801室\r\n当前余量：49.5 KW·h\r\n报警阈值：50 KW·h\r\n报警时间：2019-05-09 14:20:36\r\n请业主及时通过物业/供电部门充值电费',
    modify_time: '2019-05-31 18:31:13'
  },
  {
    id: 'OPENTM417894360',
    title: '报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 13,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修状态：{{keyword2.DATA}}\n维修人：{{keyword3.DATA}}\n维修人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您报修单已提交成功\r\n报修单号：20190422441\r\n报修状态：待审核\r\n维修人：张三\r\n维修人电话：1363606XXXX\r\n点击查看详情',
    modify_time: '2019-06-07 16:36:30'
  },
  {
    id: 'OPENTM417884811',
    title: '访客申请结果提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n到访事由：{{keyword3.DATA}}\n到访人数：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一个待确认的访问单需要审批\r\n姓名：张三\r\n到访时间：2019-04-17 18:21\r\n到访事由：商务拜访\r\n到访人数：1人\r\n请尽快点击审批行程',
    modify_time: '2019-05-28 18:19:35'
  },
  {
    id: 'OPENTM417894361',
    title: '报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修状态：{{keyword2.DATA}}\n维修人：{{keyword3.DATA}}\n维修人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您报修单已提交成功\r\n报修单号：20190422441\r\n报修状态：待审核\r\n维修人：张三\r\n维修人电话：1363606XXXX\r\n点击查看详情',
    modify_time: '2019-06-07 16:36:30'
  },
  {
    id: 'OPENTM417894362',
    title: '报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修单号：{{keyword1.DATA}}\n报修状态：{{keyword2.DATA}}\n维修人：{{keyword3.DATA}}\n维修人电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您报修单已提交成功\r\n报修单号：20190422441\r\n报修状态：待审核\r\n维修人：张三\r\n维修人电话：1363606XXXX\r\n点击查看详情',
    modify_time: '2019-06-07 16:36:30'
  },
  {
    id: 'OPENTM417884713',
    title: '房间绑定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n租金：{{keyword3.DATA}}\n押金：{{keyword4.DATA}}\n水电押金：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您已成功入住桃源居·1楼·101房\r\n类型：住宅\r\n租期：2019-04-04至2019-05-05\r\n租金：1000元/月\r\n押金：1000元/月\r\n水电押金：100元/月\r\n欢迎您的入住。',
    modify_time: '2019-05-28 17:49:07'
  },
  {
    id: 'OPENTM417884813',
    title: '访客申请结果提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n到访事由：{{keyword3.DATA}}\n到访人数：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一个待确认的访问单需要审批\r\n姓名：张三\r\n到访时间：2019-04-17 18:21\r\n到访事由：商务拜访\r\n到访人数：1人\r\n请尽快点击审批行程',
    modify_time: '2019-05-28 18:19:35'
  },
  {
    id: 'OPENTM417886515',
    title: '房间绑定失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房间名：{{keyword1.DATA}}\n客服电话：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '很遗憾，房间绑定失败。\r\n房间名：求是大厦-西座-101房\r\n客服电话：0772-666666\r\n求是大厦-西座-101房已达到绑定上限，请与房东沟通确认。',
    modify_time: '2019-05-31 17:52:18'
  },
  {
    id: 'OPENTM417894075',
    title: '账单缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n账户结余：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单已缴费成功。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n缴费金额：2200.00元\r\n账户结余：200.00元\r\n如有疑问，请联系房至尊公寓管理系统，感谢您的使用。',
    modify_time: '2019-06-07 15:16:29'
  },
  {
    id: 'OPENTM417894077',
    title: '账单缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n账户结余：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单已缴费成功。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n缴费金额：2200.00元\r\n账户结余：200.00元\r\n如有疑问，请联系房至尊公寓管理系统，感谢您的使用。',
    modify_time: '2019-06-07 15:16:29'
  },
  {
    id: 'OPENTM417894078',
    title: '账单缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n物业地址：{{keyword1.DATA}}\n客户名称：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n账户结余：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您本期账单已缴费成功。\r\n物业地址：幸福花园A座1001\r\n客户名称：张先生\r\n缴费金额：2200.00元\r\n账户结余：200.00元\r\n如有疑问，请联系房至尊公寓管理系统，感谢您的使用。',
    modify_time: '2019-06-07 15:16:29'
  },
  {
    id: 'OPENTM417886679',
    title: '物业费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房屋住址：{{keyword1.DATA}}\n物业费用：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，现将您的房屋的物业费账单发送给您：\r\n房屋住址：七号区1号楼1单元101\r\n物业费用：268.00\r\n您可以通过手机微信缴交，或到物业办公室缴交，在线缴交请点详情',
    modify_time: '2019-05-31 18:47:14'
  },
  {
    id: 'OPENTM417886680',
    title: '物业费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房屋住址：{{keyword1.DATA}}\n物业费用：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，现将您的房屋的物业费账单发送给您：\r\n房屋住址：七号区1号楼1单元101\r\n物业费用：268.00\r\n您可以通过手机微信缴交，或到物业办公室缴交，在线缴交请点详情',
    modify_time: '2019-05-31 18:47:14'
  },
  {
    id: 'OPENTM417894083',
    title: '收费单作废通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n作废时间：{{keyword1.DATA}}\n单子类型：{{keyword2.DATA}}\n单子编号：{{keyword3.DATA}}\n单子总额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【因误操作，故作废收费单】\r\n作废时间：2014-01-22 15:40\r\n单子类型：应收收费单\r\n单子编号：Y201905006\r\n单子总额：3600\r\n北京人家1-1-101，客服电话010-88996655',
    modify_time: '2019-06-07 15:17:12'
  },
  {
    id: 'OPENTM417894084',
    title: '收费单作废通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n作废时间：{{keyword1.DATA}}\n单子类型：{{keyword2.DATA}}\n单子编号：{{keyword3.DATA}}\n单子总额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【因误操作，故作废收费单】\r\n作废时间：2014-01-22 15:40\r\n单子类型：应收收费单\r\n单子编号：Y201905006\r\n单子总额：3600\r\n北京人家1-1-101，客服电话010-88996655',
    modify_time: '2019-06-07 15:17:12'
  },
  {
    id: 'OPENTM417894085',
    title: '收费单作废通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n作废时间：{{keyword1.DATA}}\n单子类型：{{keyword2.DATA}}\n单子编号：{{keyword3.DATA}}\n单子总额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【因误操作，故作废收费单】\r\n作废时间：2014-01-22 15:40\r\n单子类型：应收收费单\r\n单子编号：Y201905006\r\n单子总额：3600\r\n北京人家1-1-101，客服电话010-88996655',
    modify_time: '2019-06-07 15:17:13'
  },
  {
    id: 'OPENTM417886647',
    title: '电费充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n充值设备：{{keyword1.DATA}}\n充值地址：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n充值套餐：{{keyword4.DATA}}\n充值时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '客户电费已充值成功\r\n充值设备：808026200734\r\n充值地址：武汉市武昌区中建广场C座9层D2室\r\n充值金额：50.00元\r\n充值套餐：35 kW·h\r\n充值时间：2019-05-09 14:20:36\r\n需查看更多数据，请通过公众号菜单，进入「个人中心」页面',
    modify_time: '2019-05-31 18:28:07'
  },
  {
    id: 'OPENTM417886648',
    title: '电费充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n充值设备：{{keyword1.DATA}}\n充值地址：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n充值套餐：{{keyword4.DATA}}\n充值时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '客户电费已充值成功\r\n充值设备：808026200734\r\n充值地址：武汉市武昌区中建广场C座9层D2室\r\n充值金额：50.00元\r\n充值套餐：35 kW·h\r\n充值时间：2019-05-09 14:20:36\r\n需查看更多数据，请通过公众号菜单，进入「个人中心」页面',
    modify_time: '2019-05-31 18:28:08'
  },
  {
    id: 'OPENTM417905553',
    title: '充电开始通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n充电地址：{{keyword1.DATA}}\n开始时间：{{keyword2.DATA}}\n预付金额：{{keyword3.DATA}}\n账户余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的充电已开始\r\n充电地址：朝晖八小区\r\n开始时间：2019-06-07 18:18:18\r\n预付金额：1.00元\r\n账户余额：0.00元\r\n感谢您使用充电服务',
    modify_time: '2019-06-20 19:54:26'
  },
  {
    id: 'OPENTM417905554',
    title: '充电开始通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n充电地址：{{keyword1.DATA}}\n开始时间：{{keyword2.DATA}}\n预付金额：{{keyword3.DATA}}\n账户余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的充电已开始\r\n充电地址：朝晖八小区\r\n开始时间：2019-06-07 18:18:18\r\n预付金额：1.00元\r\n账户余额：0.00元\r\n感谢您使用充电服务',
    modify_time: '2019-06-20 19:54:27'
  },
  {
    id: 'OPENTM417905505',
    title: '合作渠道结算操作完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n发起人员：{{keyword1.DATA}}\n发起时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '渠道人员已完成结算操作！\r\n发起人员：刘三姐\r\n发起时间：2018-09-01\r\n请及时联系渠道人员核实信息',
    modify_time: '2019-06-20 18:14:25'
  },
  {
    id: 'OPENTM417905557',
    title: '充电结束通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n充电地址：{{keyword1.DATA}}\n结束时间：{{keyword2.DATA}}\n消费金额：{{keyword3.DATA}}\n退还金额：{{keyword4.DATA}}\n账户余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的充电已完成：插头拔出\r\n充电地址：朝晖八小区\r\n结束时间：2019-06-07 18:28:28\r\n消费金额：0.00元\r\n退还金额：1.00元\r\n账户余额：0.00元\r\n感谢您使用充电服务',
    modify_time: '2019-06-20 19:55:05'
  },
  {
    id: 'OPENTM417905458',
    title: '会议室审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n会议主题：{{keyword1.DATA}}\n会议室名称：{{keyword2.DATA}}\n会议时间：{{keyword3.DATA}}\n审核结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，您的会议室预约已审核！\r\n会议主题：年终会议\r\n会议室名称：四楼 402\r\n会议时间：2018年1月1日 14:00-17:00\r\n审核结果：同意\r\n如有疑问请致电物业管理（121-xxxxxxxx）',
    modify_time: '2019-06-20 18:02:14'
  },
  {
    id: 'OPENTM417894909',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n维修负责人：{{keyword1.DATA}}\n负责人手机号：{{keyword2.DATA}}\n维修人数：{{keyword3.DATA}}\n上门时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户您好，您的报修已经受理！\r\n维修负责人：张三\r\n负责人手机号：13245678910\r\n维修人数：3人\r\n上门时间：2014年7月21日18点\r\n已派出维修人员进行处理吗，请您留意上门时间！',
    modify_time: '2019-06-07 18:27:03'
  },
  {
    id: 'OPENTM417905459',
    title: '会议室审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n会议主题：{{keyword1.DATA}}\n会议室名称：{{keyword2.DATA}}\n会议时间：{{keyword3.DATA}}\n审核结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，您的会议室预约已审核！\r\n会议主题：年终会议\r\n会议室名称：四楼 402\r\n会议时间：2018年1月1日 14:00-17:00\r\n审核结果：同意\r\n如有疑问请致电物业管理（121-xxxxxxxx）',
    modify_time: '2019-06-20 18:02:15'
  },
  {
    id: 'OPENTM417894910',
    title: '报修处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n维修负责人：{{keyword1.DATA}}\n负责人手机号：{{keyword2.DATA}}\n维修人数：{{keyword3.DATA}}\n上门时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户您好，您的报修已经受理！\r\n维修负责人：张三\r\n负责人手机号：13245678910\r\n维修人数：3人\r\n上门时间：2014年7月21日18点\r\n已派出维修人员进行处理吗，请您留意上门时间！',
    modify_time: '2019-06-07 18:27:03'
  },
  {
    id: 'OPENTM417905460',
    title: '会议室审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n会议主题：{{keyword1.DATA}}\n会议室名称：{{keyword2.DATA}}\n会议时间：{{keyword3.DATA}}\n审核结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，您的会议室预约已审核！\r\n会议主题：年终会议\r\n会议室名称：四楼 402\r\n会议时间：2018年1月1日 14:00-17:00\r\n审核结果：同意\r\n如有疑问请致电物业管理（121-xxxxxxxx）',
    modify_time: '2019-06-20 18:02:15'
  },
  {
    id: 'OPENTM417895065',
    title: '申购待审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n申购单号：{{keyword1.DATA}}\n申购金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有申购待审批，请尽快处理，谢谢！\r\n申购单号：20190606FJSF\r\n申购金额：999.00元\r\n如有需要，可点击详情进行查看。',
    modify_time: '2019-06-07 19:21:38'
  },
  {
    id: 'OPENTM417905565',
    title: '退款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n退款原因：{{keyword1.DATA}}\n退款时间：{{keyword2.DATA}}\n退款金额：{{keyword3.DATA}}\n账户余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的退款已到账\r\n退款原因：测试\r\n退款时间：2019-06-07 18:18:18\r\n退款金额：20.00元\r\n账户余额：30.00元\r\n退款可以在下次充电时使用',
    modify_time: '2019-06-20 19:56:55'
  },
  {
    id: 'OPENTM417895066',
    title: '申购待审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n申购单号：{{keyword1.DATA}}\n申购金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有申购待审批，请尽快处理，谢谢！\r\n申购单号：20190606FJSF\r\n申购金额：999.00元\r\n如有需要，可点击详情进行查看。',
    modify_time: '2019-06-07 19:21:38'
  },
  {
    id: 'OPENTM417895067',
    title: '申购待审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n申购单号：{{keyword1.DATA}}\n申购金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您有申购待审批，请尽快处理，谢谢！\r\n申购单号：20190606FJSF\r\n申购金额：999.00元\r\n如有需要，可点击详情进行查看。',
    modify_time: '2019-06-07 19:21:39'
  },
  {
    id: 'OPENTM417895068',
    title: '合同费用递增提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n合同编号：{{keyword1.DATA}}\n租客名称：{{keyword2.DATA}}\n递增前合同单价：{{keyword3.DATA}}\n递增后合同单价：{{keyword4.DATA}}\n递增日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '合同编号：20190505LF3MJ\r\n租客名称：金嘉创意谷\r\n递增前合同单价：999.00元\r\n递增后合同单价：1099.00元\r\n递增日期：2019-06-06',
    modify_time: '2019-06-07 19:22:07'
  },
  {
    id: 'OPENTM417895069',
    title: '合同费用递增提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n合同编号：{{keyword1.DATA}}\n租客名称：{{keyword2.DATA}}\n递增前合同单价：{{keyword3.DATA}}\n递增后合同单价：{{keyword4.DATA}}\n递增日期：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '合同编号：20190505LF3MJ\r\n租客名称：金嘉创意谷\r\n递增前合同单价：999.00元\r\n递增后合同单价：1099.00元\r\n递增日期：2019-06-06',
    modify_time: '2019-06-07 19:22:07'
  },
  {
    id: 'OPENTM417894392',
    title: '收据开具成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所属门店：{{keyword1.DATA}}\n费项名称：{{keyword2.DATA}}\n收据金额：{{keyword3.DATA}}\n开具日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的收据已成功开具\r\n所属门店：广新店\r\n费项名称：押金\r\n收据金额：1000元\r\n开具日期：2019-05-29\r\n请点击查看收据详情',
    modify_time: '2019-06-07 16:43:47'
  },
  {
    id: 'OPENTM417894394',
    title: '收据开具成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所属门店：{{keyword1.DATA}}\n费项名称：{{keyword2.DATA}}\n收据金额：{{keyword3.DATA}}\n开具日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的收据已成功开具\r\n所属门店：广新店\r\n费项名称：押金\r\n收据金额：1000元\r\n开具日期：2019-05-29\r\n请点击查看收据详情',
    modify_time: '2019-06-07 16:43:48'
  },
  {
    id: 'OPENTM417905496',
    title: '车辆出场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车场名称：{{keyword1.DATA}}\n出场车道：{{keyword2.DATA}}\n车牌号码：{{keyword3.DATA}}\n出场时间：{{keyword4.DATA}}\n停车时长：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，欢迎下次光临\r\n车场名称：金牛座停车场\r\n出场车道：西大门出口\r\n车牌号码：浙A02313\r\n出场时间：2019-05-24 17:00:00\r\n停车时长：3小时20分钟\r\n祝您一路顺风',
    modify_time: '2019-06-20 18:11:01'
  },
  {
    id: 'OPENTM417905497',
    title: '车辆出场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车场名称：{{keyword1.DATA}}\n出场车道：{{keyword2.DATA}}\n车牌号码：{{keyword3.DATA}}\n出场时间：{{keyword4.DATA}}\n停车时长：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，欢迎下次光临\r\n车场名称：金牛座停车场\r\n出场车道：西大门出口\r\n车牌号码：浙A02313\r\n出场时间：2019-05-24 17:00:00\r\n停车时长：3小时20分钟\r\n祝您一路顺风',
    modify_time: '2019-06-20 18:11:01'
  },
  {
    id: 'OPENTM417894798',
    title: '报修成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 9,
    content: '{{first.DATA}}\n报修人：{{keyword1.DATA}}\n报修地址：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n报修内容：{{keyword4.DATA}}\n故障类别：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，新的维修单待审核\r\n报修人：张三\r\n报修地址：万达广场9#2031\r\n报修时间：2019-05-23\r\n报修内容：电脑连不了网\r\n故障类别：网络故障\r\n点击查看详情',
    modify_time: '2019-06-07 17:50:49'
  },
  {
    id: 'OPENTM417906200',
    title: '房屋出租受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户,您委托的房屋出租信息我们已收到\r\n类型：房屋出租\r\n申请人：王晓峰\r\n联系电话：15105982395\r\n申请时间：2019/06/30\r\n申请详情：徐家汇有200多㎡的房子想要租出去\r\n很荣幸为您服务，稍后工作人员将会与您联系',
    modify_time: '2019-06-21 14:16:25'
  },
  {
    id: 'OPENTM417905603',
    title: '抄表待审批提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n审批类型：{{keyword1.DATA}}\n提交人：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有抄表待审批，请尽快处理，谢谢！\r\n审批类型：电表抄表审批\r\n提交人：黄烁星\r\n提交时间：2019-06-06\r\n如有需要，请电脑登陆园区系统进行查看。',
    modify_time: '2019-06-20 20:04:27'
  },
  {
    id: 'OPENTM417905605',
    title: '抄表待审批提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n审批类型：{{keyword1.DATA}}\n提交人：{{keyword2.DATA}}\n提交时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有抄表待审批，请尽快处理，谢谢！\r\n审批类型：电表抄表审批\r\n提交人：黄烁星\r\n提交时间：2019-06-06\r\n如有需要，请电脑登陆园区系统进行查看。',
    modify_time: '2019-06-20 20:04:27'
  },
  {
    id: 'OPENTM417906355',
    title: '停车缴费失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车路段：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n停车费用：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '很抱歉！缴费失败\r\n车牌号：粤A12343\r\n停车路段：大北路\r\n支付时间：2014年7月21日 18:36:40\r\n停车费用：15元\r\n请再次重试！',
    modify_time: '2019-06-21 14:57:36'
  },
  {
    id: 'OPENTM417906357',
    title: '停车缴费失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车路段：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n停车费用：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '很抱歉！缴费失败\r\n车牌号：粤A12343\r\n停车路段：大北路\r\n支付时间：2014年7月21日 18:36:40\r\n停车费用：15元\r\n请再次重试！',
    modify_time: '2019-06-21 14:57:37'
  },
  {
    id: 'OPENTM417906412',
    title: '垃圾分类不达标通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好！收运人员发现本次收运作业不合格。\r\n收运点：徐汇区田林路某小区\r\n时间：2019-05-24 11:25:50\r\n垃圾类型：干垃圾\r\n请相关责任人进行限期整改。',
    modify_time: '2019-06-21 15:18:30'
  },
  {
    id: 'OPENTM417906413',
    title: '垃圾分类不达标通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好！收运人员发现本次收运作业不合格。\r\n收运点：徐汇区田林路某小区\r\n时间：2019-05-24 11:25:50\r\n垃圾类型：干垃圾\r\n请相关责任人进行限期整改。',
    modify_time: '2019-06-21 15:18:30'
  },
  {
    id: 'OPENTM417906314',
    title: '停车费缴纳成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车位号：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n缴费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '车位使用费缴纳成功\r\n停车场：天河希尔顿路面停车场\r\n车位号：001\r\n入场时间：2019-05-13\r\n停车时长：3小时15分钟\r\n缴费金额：48元\r\n感谢您使用凯粤云停车服务',
    modify_time: '2019-06-21 14:48:32'
  },
  {
    id: 'OPENTM417906414',
    title: '垃圾分类不达标通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好！收运人员发现本次收运作业不合格。\r\n收运点：徐汇区田林路某小区\r\n时间：2019-05-24 11:25:50\r\n垃圾类型：干垃圾\r\n请相关责任人进行限期整改。',
    modify_time: '2019-06-21 15:18:30'
  },
  {
    id: 'OPENTM417905615',
    title: '定单退订申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人员：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '客户xxx的定单已经成功申请退订！\r\n申请人员：邓大大\r\n申请时间：2018年8月2日\r\n请及时查看退订明细',
    modify_time: '2019-06-20 20:08:46'
  },
  {
    id: 'OPENTM417905566',
    title: '退款成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n退款原因：{{keyword1.DATA}}\n退款时间：{{keyword2.DATA}}\n退款金额：{{keyword3.DATA}}\n账户余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的退款已到账\r\n退款原因：测试\r\n退款时间：2019-06-07 18:18:18\r\n退款金额：20.00元\r\n账户余额：30.00元\r\n退款可以在下次充电时使用',
    modify_time: '2019-06-20 19:56:56'
  },
  {
    id: 'OPENTM417906317',
    title: '停车费缴纳成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车位号：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n缴费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '车位使用费缴纳成功\r\n停车场：天河希尔顿路面停车场\r\n车位号：001\r\n入场时间：2019-05-13\r\n停车时长：3小时15分钟\r\n缴费金额：48元\r\n感谢您使用凯粤云停车服务',
    modify_time: '2019-06-21 14:48:32'
  },
  {
    id: 'OPENTM417906371',
    title: '续费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n套餐名称：{{keyword1.DATA}}\n续费金额：{{keyword2.DATA}}\n续费房间：{{keyword3.DATA}}\n续费时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，小明已续费成功云对讲服务。\r\n套餐名称：云对讲服务包年\r\n续费金额：30元\r\n续费房间：三好名苑3栋2单元201房\r\n续费时间：2019年6月23日13：00\r\n感谢您的使用。',
    modify_time: '2019-06-21 15:00:31'
  },
  {
    id: 'OPENTM417906479',
    title: '收到订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n报修类型：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n业主姓名：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n预约时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单！\r\n报修类型：换灯泡（10元）\r\n房号：XX花园一期3单元1002\r\n业主姓名：张三\r\n联系电话：15001000100\r\n预约时间：2019年6月1日 12:00\r\n业主报修，请尽快核实处理。',
    modify_time: '2019-06-21 15:36:42'
  },
  {
    id: 'OPENTM417906281',
    title: '恢复收运通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，由于整改达标，恢复垃圾收运\r\n收运点：徐汇区某街道某小区\r\n时间：2019-05-28 16:00\r\n垃圾类型：干垃圾，湿垃圾\r\n即明日起，恢复垃圾分类收运。',
    modify_time: '2019-06-21 14:40:50'
  },
  {
    id: 'OPENTM417906481',
    title: '收到订单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修类型：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n业主姓名：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n预约时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您有新的报修单！\r\n报修类型：换灯泡（10元）\r\n房号：XX花园一期3单元1002\r\n业主姓名：张三\r\n联系电话：15001000100\r\n预约时间：2019年6月1日 12:00\r\n业主报修，请尽快核实处理。',
    modify_time: '2019-06-21 15:36:42'
  },
  {
    id: 'OPENTM417906282',
    title: '恢复收运通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，由于整改达标，恢复垃圾收运\r\n收运点：徐汇区某街道某小区\r\n时间：2019-05-28 16:00\r\n垃圾类型：干垃圾，湿垃圾\r\n即明日起，恢复垃圾分类收运。',
    modify_time: '2019-06-21 14:40:50'
  },
  {
    id: 'OPENTM417906445',
    title: '停运通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，累计多次垃圾分类不达标，正式发出停运通知：\r\n收运点：徐汇区某街道某小区\r\n时间：2019-05-28 16:00\r\n垃圾类型：干垃圾,湿垃圾\r\n街道环卫于明日正式停运，请及时整改，整改完毕至街道环卫处申请恢复。',
    modify_time: '2019-06-21 15:23:15'
  },
  {
    id: 'OPENTM417906198',
    title: '房屋出租受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户,您委托的房屋出租信息我们已收到\r\n类型：房屋出租\r\n申请人：王晓峰\r\n联系电话：15105982395\r\n申请时间：2019/06/30\r\n申请详情：徐家汇有200多㎡的房子想要租出去\r\n很荣幸为您服务，稍后工作人员将会与您联系',
    modify_time: '2019-06-21 14:16:25'
  },
  {
    id: 'OPENTM417906199',
    title: '房屋出租受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户,您委托的房屋出租信息我们已收到\r\n类型：房屋出租\r\n申请人：王晓峰\r\n联系电话：15105982395\r\n申请时间：2019/06/30\r\n申请详情：徐家汇有200多㎡的房子想要租出去\r\n很荣幸为您服务，稍后工作人员将会与您联系',
    modify_time: '2019-06-21 14:16:25'
  },
  {
    id: 'OPENTM417908057',
    title: '故障受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属电梯：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n受理时间：{{keyword4.DATA}}\n故障类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您反馈的问题已经提交通力电梯\r\n所属小区：张扬花苑\r\n所属电梯：张扬花苑 - L16\r\n反馈时间：2019-06-18 12:03:25\r\n受理时间：2019-06-18 12:15:10\r\n故障类型：电梯停摆\r\n也可联系通力客户服务热线 10101099 获取更多信息。',
    modify_time: '2019-06-22 15:07:55'
  },
  {
    id: 'OPENTM417908058',
    title: '故障受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属电梯：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n受理时间：{{keyword4.DATA}}\n故障类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您反馈的问题已经提交通力电梯\r\n所属小区：张扬花苑\r\n所属电梯：张扬花苑 - L16\r\n反馈时间：2019-06-18 12:03:25\r\n受理时间：2019-06-18 12:15:10\r\n故障类型：电梯停摆\r\n也可联系通力客户服务热线 10101099 获取更多信息。',
    modify_time: '2019-06-22 15:07:55'
  },
  {
    id: 'OPENTM417908259',
    title: '停车待缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车地点：{{keyword2.DATA}}\n进入时间：{{keyword3.DATA}}\n离开时间：{{keyword4.DATA}}\n停车费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '会员您好，您的停车订单尚未支付\r\n车牌号码：粤X123455\r\n停车地点：南苑中路01段110101泊位\r\n进入时间：2019-01-01 10:10:10\r\n离开时间：2019-01-01 10:12:10\r\n停车费用：￥1.20元\r\n点击详情查看明细',
    modify_time: '2019-06-22 16:19:54'
  },
  {
    id: 'OPENTM417908260',
    title: '停车待缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n停车地点：{{keyword2.DATA}}\n进入时间：{{keyword3.DATA}}\n离开时间：{{keyword4.DATA}}\n停车费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '会员您好，您的停车订单尚未支付\r\n车牌号码：粤X123455\r\n停车地点：南苑中路01段110101泊位\r\n进入时间：2019-01-01 10:10:10\r\n离开时间：2019-01-01 10:12:10\r\n停车费用：￥1.20元\r\n点击详情查看明细',
    modify_time: '2019-06-22 16:19:55'
  },
  {
    id: 'OPENTM417908014',
    title: '停车出场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n车场名称：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n出场时间：{{keyword4.DATA}}\n停车时长：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的车辆已离场\r\n车牌号码：浙A12345\r\n车场名称：国大停车场\r\n入场时间：2019年6月12日 12:00\r\n出场时间：2019年6月12日 18:00\r\n停车时长：6小时\r\n会员权益抵扣6小时',
    modify_time: '2019-06-22 14:54:36'
  },
  {
    id: 'OPENTM417907515',
    title: '故障上报提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n故障位置：{{keyword1.DATA}}\n上报时间：{{keyword2.DATA}}\n故障说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '有一条新的故障待处理\r\n故障位置：办公楼一楼\r\n上报时间：2019-05-30 10:10\r\n故障说明：灯不亮需要维修\r\n请点击查看故障详情！',
    modify_time: '2019-06-22 13:03:59'
  },
  {
    id: 'OPENTM417908015',
    title: '停车出场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n车牌号码：{{keyword1.DATA}}\n车场名称：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n出场时间：{{keyword4.DATA}}\n停车时长：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的车辆已离场\r\n车牌号码：浙A12345\r\n车场名称：国大停车场\r\n入场时间：2019年6月12日 12:00\r\n出场时间：2019年6月12日 18:00\r\n停车时长：6小时\r\n会员权益抵扣6小时',
    modify_time: '2019-06-22 14:54:37'
  },
  {
    id: 'OPENTM417907517',
    title: '故障上报提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n故障位置：{{keyword1.DATA}}\n上报时间：{{keyword2.DATA}}\n故障说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '有一条新的故障待处理\r\n故障位置：办公楼一楼\r\n上报时间：2019-05-30 10:10\r\n故障说明：灯不亮需要维修\r\n请点击查看故障详情！',
    modify_time: '2019-06-22 13:03:59'
  },
  {
    id: 'OPENTM417907518',
    title: '故障上报提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n故障位置：{{keyword1.DATA}}\n上报时间：{{keyword2.DATA}}\n故障说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '有一条新的故障待处理\r\n故障位置：办公楼一楼\r\n上报时间：2019-05-30 10:10\r\n故障说明：灯不亮需要维修\r\n请点击查看故障详情！',
    modify_time: '2019-06-22 13:04:00'
  },
  {
    id: 'OPENTM417908268',
    title: '电费充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n电表号：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n充值时间：{{keyword4.DATA}}\n可用余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的电费已充值成功。\r\n商铺号：A-101\r\n电表号：20190804101\r\n充值金额：220元\r\n充值时间：2014年7月21日 18:36\r\n可用余额：820元\r\n感谢您的使用。',
    modify_time: '2019-06-22 16:21:24'
  },
  {
    id: 'OPENTM417907527',
    title: '整改通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，垃圾分类不达标，要求整改\r\n收运点：徐汇区某街道某小区\r\n时间：2019-05-28 16:18\r\n垃圾类型：干垃圾\r\n垃圾分类多次不达标，街道办勒令限期整改，否则停止收运。',
    modify_time: '2019-06-22 13:05:36'
  },
  {
    id: 'OPENTM417907528',
    title: '整改通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n收运点：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，垃圾分类不达标，要求整改\r\n收运点：徐汇区某街道某小区\r\n时间：2019-05-28 16:18\r\n垃圾类型：干垃圾\r\n垃圾分类多次不达标，街道办勒令限期整改，否则停止收运。',
    modify_time: '2019-06-22 13:05:36'
  },
  {
    id: 'OPENTM417907987',
    title: '预约审批通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n手机号码：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n拜访事由：{{keyword4.DATA}}\n拜访人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '深圳市呤云科技有限公司\r\n访客姓名：张三\r\n手机号码：18680670000\r\n预约时间：2019年06月19日\r\n拜访事由：拜访\r\n拜访人：李四\r\n点击这样里开始审批',
    modify_time: '2019-06-22 14:49:25'
  },
  {
    id: 'OPENTM417907988',
    title: '预约审批通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n手机号码：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n拜访事由：{{keyword4.DATA}}\n拜访人：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '深圳市呤云科技有限公司\r\n访客姓名：张三\r\n手机号码：18680670000\r\n预约时间：2019年06月19日\r\n拜访事由：拜访\r\n拜访人：李四\r\n点击这样里开始审批',
    modify_time: '2019-06-22 14:49:25'
  },
  {
    id: 'OPENTM417907640',
    title: '预约受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的预约看房申请我方已受理\r\n类型：预约看房\r\n申请人：吴宇\r\n联系电话：15305679856\r\n申请时间：2019/06/23\r\n申请详情：意向房源: 金山 上海金山万达华府 1室1厅\r\n稍后工作人员将会与您电话沟通',
    modify_time: '2019-06-22 13:25:12'
  },
  {
    id: 'OPENTM417907990',
    title: '审批通过提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n拜访公司：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n拜访事由：{{keyword3.DATA}}\n拜访人：{{keyword4.DATA}}\n拜访楼层：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您的预约已通过审批！\r\n拜访公司：深圳市呤云科技有限公司\r\n预约时间：2019年06月19日\r\n拜访事由：拜访\r\n拜访人：李四\r\n拜访楼层：6\r\n该二维码当天出入有效！',
    modify_time: '2019-06-22 14:49:40'
  },
  {
    id: 'OPENTM417907641',
    title: '预约受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的预约看房申请我方已受理\r\n类型：预约看房\r\n申请人：吴宇\r\n联系电话：15305679856\r\n申请时间：2019/06/23\r\n申请详情：意向房源: 金山 上海金山万达华府 1室1厅\r\n稍后工作人员将会与您电话沟通',
    modify_time: '2019-06-22 13:25:12'
  },
  {
    id: 'OPENTM417907642',
    title: '预约受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的预约看房申请我方已受理\r\n类型：预约看房\r\n申请人：吴宇\r\n联系电话：15305679856\r\n申请时间：2019/06/23\r\n申请详情：意向房源: 金山 上海金山万达华府 1室1厅\r\n稍后工作人员将会与您电话沟通',
    modify_time: '2019-06-22 13:25:12'
  },
  {
    id: 'OPENTM417907992',
    title: '预约拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n拜访公司：{{keyword1.DATA}}\n拜访人：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约被拒绝！\r\n拜访公司：深圳市呤云科技有限公司\r\n拜访人：李四\r\n预约时间：2019年06月19日\r\n请联系拜访人！',
    modify_time: '2019-06-22 14:49:50'
  },
  {
    id: 'OPENTM417907994',
    title: '预约拒绝通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n拜访公司：{{keyword1.DATA}}\n拜访人：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的预约被拒绝！\r\n拜访公司：深圳市呤云科技有限公司\r\n拜访人：李四\r\n预约时间：2019年06月19日\r\n请联系拜访人！',
    modify_time: '2019-06-22 14:49:51'
  },
  {
    id: 'OPENTM417934550',
    title: '车辆未出场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n您的爱车：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n停车场名称：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '欢迎使用优库停车\r\n您的爱车：2019年6月6号12:00:00出场\r\n车牌号：闽C12345\r\n停车场名称：泉州大酒店\r\n超时出场将另行计费，感谢使用优库停车!',
    modify_time: '2019-07-05 21:13:17'
  },
  {
    id: 'OPENTM417934305',
    title: '房屋月账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单时间：{{keyword1.DATA}}\n账单内容：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好：\r\n账单时间：2019-03-01\r\n账单内容：您的本期账单已出。\r\n感谢你的使用。',
    modify_time: '2019-07-05 20:21:36'
  },
  {
    id: 'OPENTM417934307',
    title: '房屋月账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n账单时间：{{keyword1.DATA}}\n账单内容：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好：\r\n账单时间：2019-03-01\r\n账单内容：您的本期账单已出。\r\n感谢你的使用。',
    modify_time: '2019-07-05 20:21:36'
  },
  {
    id: 'OPENTM417935008',
    title: '房屋租售受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的房屋出售申请我方已受理\r\n类型：房屋出售\r\n申请人：李大宝\r\n联系电话：15305679856\r\n申请时间：2019/06/26\r\n申请详情：房源地址：上海 长宁区 丽泽路634号\r\n稍后工作人员将会与您联系，请保持电话畅通',
    modify_time: '2019-07-06 16:58:51'
  },
  {
    id: 'OPENTM417935009',
    title: '房屋租售受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的房屋出售申请我方已受理\r\n类型：房屋出售\r\n申请人：李大宝\r\n联系电话：15305679856\r\n申请时间：2019/06/26\r\n申请详情：房源地址：上海 长宁区 丽泽路634号\r\n稍后工作人员将会与您联系，请保持电话畅通',
    modify_time: '2019-07-06 16:58:51'
  },
  {
    id: 'OPENTM417934010',
    title: '车辆出场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n出口名称：{{keyword2.DATA}}\n出入场时间：{{keyword3.DATA}}\n停留时间：{{keyword4.DATA}}\n收费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '欢迎使用优库停车\r\n车牌号：闽C12345\r\n出口名称：第一出口\r\n出入场时间：2019-01-10 12:15:00\r\n停留时间：1小时10分钟\r\n收费金额：5元\r\n感谢你的使用',
    modify_time: '2019-07-05 18:04:04'
  },
  {
    id: 'OPENTM417934011',
    title: '车辆出场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n出口名称：{{keyword2.DATA}}\n出入场时间：{{keyword3.DATA}}\n停留时间：{{keyword4.DATA}}\n收费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '欢迎使用优库停车\r\n车牌号：闽C12345\r\n出口名称：第一出口\r\n出入场时间：2019-01-10 12:15:00\r\n停留时间：1小时10分钟\r\n收费金额：5元\r\n感谢你的使用',
    modify_time: '2019-07-05 18:04:04'
  },
  {
    id: 'OPENTM417908269',
    title: '电费充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n商铺号：{{keyword1.DATA}}\n电表号：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n充值时间：{{keyword4.DATA}}\n可用余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，您的电费已充值成功。\r\n商铺号：A-101\r\n电表号：20190804101\r\n充值金额：220元\r\n充值时间：2014年7月21日 18:36\r\n可用余额：820元\r\n感谢您的使用。',
    modify_time: '2019-06-22 16:21:25'
  },
  {
    id: 'OPENTM417933523',
    title: '自助入住登记审核失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n申请房屋：{{keyword1.DATA}}\n截止日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '请联系物业/房屋管理员核实失败原因，重新提交\r\n申请房屋：创业花园1栋1单元101\r\n截止日期：N/A\r\n感谢您的理解',
    modify_time: '2019-07-05 16:24:34'
  },
  {
    id: 'OPENTM417933524',
    title: '自助入住登记审核失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请房屋：{{keyword1.DATA}}\n截止日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '请联系物业/房屋管理员核实失败原因，重新提交\r\n申请房屋：创业花园1栋1单元101\r\n截止日期：N/A\r\n感谢您的理解',
    modify_time: '2019-07-05 16:24:35'
  },
  {
    id: 'OPENTM417933377',
    title: '免密支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场名称：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n支付金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您已免密支付成功。\r\n停车场名称：兴旺广场\r\n车牌号：闽A12345\r\n支付时间：2019年6月20日 15:30\r\n支付金额：5.0元\r\n有任何问题，请拨打968970咨询海投物业。',
    modify_time: '2019-07-05 15:48:09'
  },
  {
    id: 'OPENTM417933527',
    title: '自助入住登记审核通过通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n申请房屋：{{keyword1.DATA}}\n截止日期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '可前往物业/房屋管理员处领取门禁卡\r\n申请房屋：创业花园1栋1单元101\r\n截止日期：长期有效\r\n感谢您的使用',
    modify_time: '2019-07-05 16:24:52'
  },
  {
    id: 'OPENTM417933578',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n小区名称：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您收到来自城市物业公司的账单,请查看.\r\n房屋编号：1号楼\r\n业主姓名：王艳鹏\r\n小区名称：城邦校区\r\n谢谢您的合作！',
    modify_time: '2019-07-05 16:36:36'
  },
  {
    id: 'OPENTM417933379',
    title: '免密支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车场名称：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n支付时间：{{keyword3.DATA}}\n支付金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您已免密支付成功。\r\n停车场名称：兴旺广场\r\n车牌号：闽A12345\r\n支付时间：2019年6月20日 15:30\r\n支付金额：5.0元\r\n有任何问题，请拨打968970咨询海投物业。',
    modify_time: '2019-07-05 15:48:09'
  },
  {
    id: 'OPENTM417933580',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n业主姓名：{{keyword2.DATA}}\n小区名称：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您收到来自城市物业公司的账单,请查看.\r\n房屋编号：1号楼\r\n业主姓名：王艳鹏\r\n小区名称：城邦校区\r\n谢谢您的合作！',
    modify_time: '2019-07-05 16:36:36'
  },
  {
    id: 'OPENTM417933383',
    title: '签约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n签约项目：{{keyword1.DATA}}\n签约时间：{{keyword2.DATA}}\n签约号：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已签约成功。\r\n签约项目：招行一网通免密支付\r\n签约时间：2019年6月20日 13:30\r\n签约号：20190620133052754\r\n有任何问题，请拨打968970咨询海投物业',
    modify_time: '2019-07-05 15:50:46'
  },
  {
    id: 'OPENTM417934034',
    title: '工单受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单名称：{{keyword1.DATA}}\n处理人：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的工单已受理\r\n工单名称：水管漏了\r\n处理人：小黄\r\n联系方式：13000000000\r\n请关注进度',
    modify_time: '2019-07-05 18:12:16'
  },
  {
    id: 'OPENTM417934036',
    title: '工单受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单名称：{{keyword1.DATA}}\n处理人：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的工单已受理\r\n工单名称：水管漏了\r\n处理人：小黄\r\n联系方式：13000000000\r\n请关注进度',
    modify_time: '2019-07-05 18:12:16'
  },
  {
    id: 'OPENTM417933844',
    title: '访客呼叫提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n门点区域：{{keyword1.DATA}}\n设备名称：{{keyword2.DATA}}\n呼叫时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '音视频呼叫申请\r\n门点区域：金华小区A栋\r\n设备名称：金华3号门口机\r\n呼叫时间：2019-07-21 18:36\r\n请及时接听。',
    modify_time: '2019-07-05 17:35:52'
  },
  {
    id: 'OPENTM417934549',
    title: '车辆未出场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n您的爱车：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n停车场名称：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '欢迎使用优库停车\r\n您的爱车：2019年6月6号12:00:00出场\r\n车牌号：闽C12345\r\n停车场名称：泉州大酒店\r\n超时出场将另行计费，感谢使用优库停车!',
    modify_time: '2019-07-05 21:13:16'
  },
  {
    id: 'OPENTM417940001',
    title: '访客预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n单位或预约人姓名：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已预约成功\r\n单位或预约人姓名：小米科技\r\n预约时间：2019年5月14号\r\n感谢你的使用',
    modify_time: '2019-07-12 20:46:36'
  },
  {
    id: 'OPENTM417939706',
    title: '车卡申请生效提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n申请类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的申请已生效！\r\n停车场：自在苑停车场\r\n车牌号：粤B520KD\r\n申请类型：新办\r\n车卡申请已生效，祝您出行愉快！',
    modify_time: '2019-07-12 19:43:36'
  },
  {
    id: 'OPENTM417935057',
    title: '车卡申请审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n申请类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的申请审核通过！\r\n停车场：兰苑停车场\r\n车牌号：粤BQ103F\r\n申请类型：新办\r\n为了不影响您的车辆正常通行，请及时缴清相关费用！',
    modify_time: '2019-07-06 17:18:29'
  },
  {
    id: 'OPENTM417939707',
    title: '车卡申请生效提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n申请类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的申请已生效！\r\n停车场：自在苑停车场\r\n车牌号：粤B520KD\r\n申请类型：新办\r\n车卡申请已生效，祝您出行愉快！',
    modify_time: '2019-07-12 19:43:36'
  },
  {
    id: 'OPENTM417935058',
    title: '车卡申请审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n申请类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的申请审核通过！\r\n停车场：兰苑停车场\r\n车牌号：粤BQ103F\r\n申请类型：新办\r\n为了不影响您的车辆正常通行，请及时缴清相关费用！',
    modify_time: '2019-07-06 17:18:29'
  },
  {
    id: 'OPENTM417939764',
    title: '黑名单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n小区名称：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已被管理员加入黑名单。\r\n姓名：小明\r\n小区名称：光明小区\r\n请遵守规则，如有疑问请联系管理员。',
    modify_time: '2019-07-12 20:00:26'
  },
  {
    id: 'OPENTM417935215',
    title: '停车出场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n进场时间：{{keyword2.DATA}}\n出场时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n扣费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '农科院油料所停车出场通知\r\n车牌号：鄂A66666\r\n进场时间：2019-07-03 15:57:00\r\n出场时间：2019-07-03 17:57:00\r\n停车时长：0天2小时0分0秒\r\n扣费金额：6元\r\n如需开具电子发票请查看详情',
    modify_time: '2019-07-06 18:25:36'
  },
  {
    id: 'OPENTM417939766',
    title: '黑名单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n姓名：{{keyword1.DATA}}\n小区名称：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已被管理员加入黑名单。\r\n姓名：小明\r\n小区名称：光明小区\r\n请遵守规则，如有疑问请联系管理员。',
    modify_time: '2019-07-12 20:00:27'
  },
  {
    id: 'OPENTM417942322',
    title: '房屋续租受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的房屋续租申请我方已受理\r\n类型：房屋续租\r\n申请人：李奕辰\r\n联系电话：15393679814\r\n申请时间：2019/07/01\r\n申请详情：房源地址：上海 长宁区 晓市路841号\r\n稍后工作人员将会与您联系，请保持电话畅通',
    modify_time: '2019-07-16 12:55:34'
  },
  {
    id: 'OPENTM417939976',
    title: '撤销收费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n门牌号：{{keyword2.DATA}}\n票据号：{{keyword3.DATA}}\n金额：{{keyword4.DATA}}\n撤销原因：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，收费员王乐提交了撤销收费申请！\r\n小区：天府花园\r\n门牌号：1-1-201\r\n票据号：05457-2332-20190624\r\n金额：800\r\n撤销原因：业主钱没带够暂时不交。\r\n谢谢，点击查看详情',
    modify_time: '2019-07-12 20:42:01'
  },
  {
    id: 'OPENTM417942326',
    title: '房屋退租受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 7,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的房屋退租申请我方已受理\r\n类型：房屋退租\r\n申请人：李玉山\r\n联系电话：15402934587\r\n申请时间：2019/04/15\r\n申请详情：房源地址：上海 徐汇区 大木桥路634号\r\n很荣幸为您服务，工作人员将会与您联系',
    modify_time: '2019-07-16 13:01:20'
  },
  {
    id: 'OPENTM417939977',
    title: '撤销收费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n门牌号：{{keyword2.DATA}}\n票据号：{{keyword3.DATA}}\n金额：{{keyword4.DATA}}\n撤销原因：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，收费员王乐提交了撤销收费申请！\r\n小区：天府花园\r\n门牌号：1-1-201\r\n票据号：05457-2332-20190624\r\n金额：800\r\n撤销原因：业主钱没带够暂时不交。\r\n谢谢，点击查看详情',
    modify_time: '2019-07-12 20:42:01'
  },
  {
    id: 'OPENTM417942329',
    title: '物业服务申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n服务类型：{{keyword2.DATA}}\n服务详情：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有新的物业服务通知啦\r\n公司名称：抵奥云/204\r\n服务类型：预约\r\n服务详情：预约项目\r\n请准时到场噢',
    modify_time: '2019-07-16 13:03:04'
  },
  {
    id: 'OPENTM417942281',
    title: '物业费欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n欠费小区：{{keyword1.DATA}}\n欠费月数：{{keyword2.DATA}}\n欠费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主，您好！\r\n欠费小区：紫薇花园\r\n欠费月数：5\r\n欠费金额：220\r\n您可以直接通过菜单栏“物业缴费”查询明细及缴费。如已缴费，请忽略。详询物业服务中心，联系电话：0592-5923995。',
    modify_time: '2019-07-16 11:45:15'
  },
  {
    id: 'OPENTM417939691',
    title: '预付费账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n账单截止时间：{{keyword1.DATA}}\n电费：{{keyword2.DATA}}\n耗电度数：{{keyword3.DATA}}\n初始度数：{{keyword4.DATA}}\n结束度数：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '（*）业主您好，您有一笔账单。\r\n账单截止时间：2019-06-21 08:53:18\r\n电费：100\r\n耗电度数：200\r\n初始度数：0\r\n结束度数：200\r\n系统将于五日内开始结算，您可以通过微信或者到生活服务公司现金缴费。上海农场生活服务有限公司',
    modify_time: '2019-07-12 19:39:10'
  },
  {
    id: 'OPENTM417941794',
    title: '访客预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n被预约人名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已预约成功\r\n被预约人名称：小米科技\r\n预约时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2019-07-15 14:57:52'
  },
  {
    id: 'OPENTM417939796',
    title: '报修工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n报修位置：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '维修物料清单确认\r\n客户名称：张三\r\n联系电话：18180212222\r\n报修位置：1-1-1002号房间\r\n点击查看物料详情',
    modify_time: '2019-07-12 20:09:09'
  },
  {
    id: 'OPENTM417940047',
    title: '缴费凭证生成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n档号：{{keyword1.DATA}}\n缴费项目：{{keyword2.DATA}}\n金额：{{keyword3.DATA}}\n缴费单号：{{keyword4.DATA}}\n子单明细：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，已成功缴费，点击此消息获取缴费凭证图片\r\n档号：A23\r\n缴费项目：147集市3月费用\r\n金额：2000.00\r\n缴费单号：PN0212432131\r\n子单明细：管理费\r\n祝您生活愉快，谢谢！',
    modify_time: '2019-07-12 20:55:45'
  },
  {
    id: 'OPENTM417939999',
    title: '访客预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n单位或预约人姓名：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已预约成功\r\n单位或预约人姓名：小米科技\r\n预约时间：2019年5月14号\r\n感谢你的使用',
    modify_time: '2019-07-12 20:46:36'
  },
  {
    id: 'OPENTM417940049',
    title: '缴费凭证生成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n档号：{{keyword1.DATA}}\n缴费项目：{{keyword2.DATA}}\n金额：{{keyword3.DATA}}\n缴费单号：{{keyword4.DATA}}\n子单明细：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，已成功缴费，点击此消息获取缴费凭证图片\r\n档号：A23\r\n缴费项目：147集市3月费用\r\n金额：2000.00\r\n缴费单号：PN0212432131\r\n子单明细：管理费\r\n祝您生活愉快，谢谢！',
    modify_time: '2019-07-12 20:55:46'
  },
  {
    id: 'OPENTM417950202',
    title: '车辆出场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n过车时间：{{keyword1.DATA}}\n过车地点：{{keyword2.DATA}}\n过车类型：{{keyword3.DATA}}\n优惠金额：{{keyword4.DATA}}\n实付金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的xxx车主：您手机尾号7890绑定的车辆川A888888，有最新过车信息\r\n过车时间：2019年7月22日 13:34:47\r\n过车地点：xxx停车场\r\n过车类型：出场\r\n优惠金额：10.00元\r\n实付金额：10.00元\r\n感谢您使用云凯智慧停车服务',
    modify_time: '2019-07-25 20:21:11'
  },
  {
    id: 'OPENTM417944163',
    title: '房源审核结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n房源信息：{{keyword1.DATA}}\n审核人员：{{keyword2.DATA}}\n审核结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '恭喜您！提交的房源信息。\r\n房源信息：东莞厚街万达\r\n审核人员：王先生\r\n审核结果：已通过\r\n如有疑问，请拨打咨询热线13788888888',
    modify_time: '2019-07-18 10:03:33'
  },
  {
    id: 'OPENTM417943514',
    title: '解锁成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场名称：{{keyword2.DATA}}\n解锁时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已通过车主身份验证\r\n车牌号：粤AAAXXX\r\n停车场名称：来了老弟车场\r\n解锁时间：2019-07-11 18:55:30\r\n由岗亭人员解锁',
    modify_time: '2019-07-17 18:08:17'
  },
  {
    id: 'OPENTM417945016',
    title: '订单受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n受理时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单已被受理。\r\n订单号：001\r\n联系方式：13817091823\r\n报修内容：马桶漏水\r\n受理时间：2019年7月16日 14:57\r\n感谢您的使用，工程师将与您预约具体上门查勘时间。',
    modify_time: '2019-07-19 14:29:27'
  },
  {
    id: 'OPENTM417949617',
    title: '签署完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n文件名称：{{keyword1.DATA}}\n签署状态：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您已签署不利因素公示，请您查阅。\r\n文件名称：不利因素公示\r\n签署状态：签署完成\r\n点击查看文件&amp;amp;amp;gt;&amp;amp;amp;gt;',
    modify_time: '2019-07-25 11:44:59'
  },
  {
    id: 'OPENTM417949118',
    title: '电子发票开具结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n发票号：{{keyword1.DATA}}\n开票时间：{{keyword2.DATA}}\n消费金额：{{keyword3.DATA}}\n开票金额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的电子发票已开具成功。\r\n发票号：12345678\r\n开票时间：2019-07-11\r\n消费金额：1000\r\n开票金额：1000\r\n感谢您对兴隆物业的支持。如您有疑问，请来电4008005680或到项目物业服务中心咨询。',
    modify_time: '2019-07-24 17:07:02'
  },
  {
    id: 'OPENTM417944970',
    title: '故障处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属电梯：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n完成时间：{{keyword4.DATA}}\n故障类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您提交的问题已处理完毕\r\n所属小区：张扬花苑\r\n所属电梯：张扬花苑 - L16\r\n反馈时间：2019-06-18 12:03:25\r\n完成时间：2019-06-18 12:42:10\r\n故障类型：电梯停摆\r\n故障已解决，给您的出行造成不便，请谅解。',
    modify_time: '2019-07-19 13:04:20'
  },
  {
    id: 'OPENTM417943423',
    title: '放行结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n放行企业：{{keyword1.DATA}}\n申请人姓名：{{keyword2.DATA}}\n车牌号：{{keyword3.DATA}}\n放行时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您申请的放行车辆已经放行！\r\n放行企业：xxx\r\n申请人姓名：张三\r\n车牌号：粤B010101\r\n放行时间：2019-07-11 11:28:30\r\n您的车辆已放行出园区，如有疑问请联系物业管理人员。',
    modify_time: '2019-07-17 16:03:27'
  },
  {
    id: 'OPENTM417946878',
    title: '预付费充值成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n充值时间：{{keyword1.DATA}}\n充值方式：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n账户余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '**用户，您好，您有一笔充值成功提醒：\r\n充值时间：2019-01-01 12:00:00\r\n充值方式：微信\r\n充值金额：100\r\n账户余额：200\r\n感谢您的使用',
    modify_time: '2019-07-22 13:00:36'
  },
  {
    id: 'OPENTM417948878',
    title: '物业缴费单完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n所在小区：{{keyword1.DATA}}\n楼栋信息：{{keyword2.DATA}}\n业主姓名：{{keyword3.DATA}}\n账单金额：{{keyword4.DATA}}\n账单月份：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的住户您好，您6月份物业缴费单已完成缴费。\r\n所在小区：秀北小区\r\n楼栋信息：1号楼101\r\n业主姓名：张三\r\n账单金额：100\r\n账单月份：6月\r\n感谢你的使用。',
    modify_time: '2019-07-24 10:49:32'
  },
  {
    id: 'OPENTM417948879',
    title: '车位缴费单完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n所在地址：{{keyword1.DATA}}\n车主姓名：{{keyword2.DATA}}\n车牌号码：{{keyword3.DATA}}\n剩余时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您的车辆缴费单已完成缴费。\r\n所在地址：秀北小区\r\n车主姓名：张三\r\n车牌号码：闽A888888\r\n剩余时间：7天\r\n感谢您的使用。',
    modify_time: '2019-07-24 10:49:43'
  },
  {
    id: 'OPENTM417942330',
    title: '押金缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n账单日期：{{keyword2.DATA}}\n押金：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有新的缴费通知啦~\r\n公司名称：抵奥云/204\r\n账单日期：2018-9-4\r\n押金：100\r\n请及时缴费噢',
    modify_time: '2019-07-16 13:03:26'
  },
  {
    id: 'OPENTM417953985',
    title: '车位预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车位号：{{keyword2.DATA}}\n开始时间：{{keyword3.DATA}}\n结束时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您的车位已成功共享\r\n停车场：xx停车场\r\n车位号：xx车位\r\n开始时间：2019-7-16 11:15:22\r\n结束时间：2019-7-16 11:15:26\r\n欢迎使用停车共享系统',
    modify_time: '2019-07-31 11:06:52'
  },
  {
    id: 'OPENTM417942388',
    title: '物业报修受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的物业报修申请我方已受理\r\n类型：物业报修\r\n申请人：李伟\r\n联系电话：15395249856\r\n申请时间：2019/05/26\r\n申请详情：报修地址：上海 长宁区 金青路514号\r\n稍后工作人员将会与您联系，请保持电话畅通',
    modify_time: '2019-07-16 14:48:25'
  },
  {
    id: 'OPENTM417949739',
    title: '车辆入场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n过车时间：{{keyword1.DATA}}\n过车地点：{{keyword2.DATA}}\n过车类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您手机尾号6666绑定的车辆川A888888，有最新过车信息\r\n过车时间：2019年7月19日 18:23\r\n过车地点：逸停车智慧停车场\r\n过车类型：入场\r\n温馨提示：可点击详情，进行预缴费（需在15分钟内离场）',
    modify_time: '2019-07-25 16:33:13'
  },
  {
    id: 'OPENTM417942842',
    title: '房源签约受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的房源签约意向申请我方已受理\r\n类型：合同签约\r\n申请人：吴晓燕\r\n联系电话：15952149856\r\n申请时间：2019/03/26\r\n申请详情：意向房源\r\n稍后工作人员将会与您联系',
    modify_time: '2019-07-16 19:18:15'
  },
  {
    id: 'OPENTM417943543',
    title: '自动缴费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n缴费金额：{{keyword1.DATA}}\n停车时长：{{keyword2.DATA}}\n车牌号码：{{keyword3.DATA}}\n扣款方式：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您已经成功缴费！\r\n缴费金额：10元\r\n停车时长：1小时23分钟\r\n车牌号码：苏E98TX\r\n扣款方式：优惠券\r\n感谢您的使用',
    modify_time: '2019-07-17 18:35:38'
  },
  {
    id: 'OPENTM417943544',
    title: '自动缴费失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n欠费金额：{{keyword1.DATA}}\n停车时长：{{keyword2.DATA}}\n车牌号码：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '自动缴费未成功，请及时充值后补缴！\r\n欠费金额：10元\r\n停车时长：1小时23分钟\r\n车牌号码：苏E98TX3\r\n感谢您的使用！',
    modify_time: '2019-07-17 18:35:47'
  },
  {
    id: 'OPENTM417949046',
    title: '物业费缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n公司名称：{{keyword2.DATA}}\n物业费金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '阁下您好，天津荣华物业温馨提醒查收本月账单\r\n房间号：A-101\r\n公司名称：荣华物业\r\n物业费金额：345\r\n更多详情，请点击页面进行实时查询。',
    modify_time: '2019-07-24 14:48:16'
  },
  {
    id: 'OPENTM417949549',
    title: '建议意见受理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n类型：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n申请时间：{{keyword4.DATA}}\n申请详情：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户，您的建议意见申请我方已受理\r\n类型：建议意见\r\n申请人：李大伟\r\n联系电话：15415474587\r\n申请时间：2019/07/15\r\n申请详情：隔壁大楼白天最近老是在施工，声音很吵\r\n很荣幸为您服务，工作人员将会与您联系',
    modify_time: '2019-07-25 09:36:09'
  },
  {
    id: 'OPENTM417957852',
    title: '电梯故障维修提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n故障信息：{{keyword1.DATA}}\n故障代码：{{keyword2.DATA}}\n使用单位：{{keyword3.DATA}}\n安装地址：{{keyword4.DATA}}\n故障时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: 'XX电梯发生故障提醒\r\n故障信息：运行中门锁断开\r\n故障代码：E42\r\n使用单位：XX电梯使用单位\r\n安装地址：电梯安装详细地址\r\n故障时间：2019年7月15日\r\n请尽快处理！',
    modify_time: '2019-08-06 14:40:10'
  },
  {
    id: 'OPENTM417962004',
    title: '访客预约失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n预约人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已预约失败\r\n预约人：小米科技\r\n到访时间：2019年5月14号\r\n感谢你的使用',
    modify_time: '2019-08-12 12:56:21'
  },
  {
    id: 'OPENTM417959805',
    title: '车位共享成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n车位号：{{keyword2.DATA}}\n开始时间：{{keyword3.DATA}}\n结束时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您的车位已成功共享\r\n停车场：xx停车场\r\n车位号：xx车位\r\n开始时间：2019-7-16 11:15:22\r\n结束时间：2019-7-16 11:15:26\r\n欢迎使用停车共享系统',
    modify_time: '2019-08-08 17:33:02'
  },
  {
    id: 'OPENTM417962207',
    title: '用户催单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n用户姓名：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n地址：{{keyword4.DATA}}\n时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '用户发起了催单请求。\r\n订单号：001\r\n用户姓名：张三\r\n联系方式：13810002000\r\n地址：当代国际花园17栋2单元101\r\n时间：2019年8月6日 9:48\r\n请尽快与业主取得联系，了解具体情况。',
    modify_time: '2019-08-12 19:41:20'
  },
  {
    id: 'OPENTM417962208',
    title: '电子合同已终止通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的桃源居101房的电子合同已终止。\r\n房间号：桃源居101房\r\n租期：2019/06/01-2019/09/01\r\n感谢您的使用。',
    modify_time: '2019-08-12 19:41:49'
  },
  {
    id: 'OPENTM417960362',
    title: '月账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n业务周期：{{keyword1.DATA}}\n用户信息：{{keyword2.DATA}}\n收费单位：{{keyword3.DATA}}\n本月用量：{{keyword4.DATA}}\n本月费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您2019年5月空调用量情况如下：\r\n业务周期：2019年5月2号—6月1号\r\n用户信息：1号楼2单元101户-李明\r\n收费单位：武汉节能有限公司\r\n本月用量：160.00kWh\r\n本月费用：80.00元\r\n感谢您的使用，如有疑问，请致电物业。',
    modify_time: '2019-08-09 16:12:46'
  },
  {
    id: 'OPENTM417958714',
    title: '电梯预警通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n注册代码：{{keyword1.DATA}}\n预警天数：{{keyword2.DATA}}\n预警时间：{{keyword3.DATA}}\n使用单位：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，电梯发生预警，并持续10天。\r\n注册代码：030991029012123\r\n预警天数：10\r\n预警时间：2019-02-12 12:23:00\r\n使用单位：天津市耀伦华电梯有限公司\r\n请及时处理。',
    modify_time: '2019-08-07 13:06:44'
  },
  {
    id: 'OPENTM417956916',
    title: '报修完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n报修时间：{{keyword1.DATA}}\n完成时间：{{keyword2.DATA}}\n报修内容：{{keyword3.DATA}}\n报修结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您提交的报修已经完成修理\r\n报修时间：2019-06-07 19:20:20\r\n完成时间：2019-06-09\r\n报修内容：电梯坏了\r\n报修结果：已经维修完成\r\n感谢使用',
    modify_time: '2019-08-05 13:00:57'
  },
  {
    id: 'OPENTM417964322',
    title: '绑定成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n绑定账号：{{keyword1.DATA}}\n绑定时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，恭喜您账号绑定成功！\r\n绑定账号：17373148684\r\n绑定时间：2019年7月29日 13:21\r\n您可以使用微信菜单栏进行更多体验。',
    modify_time: '2019-08-14 12:58:26'
  },
  {
    id: 'OPENTM417963176',
    title: '欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n详细地址：{{keyword2.DATA}}\n欠费项目：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您好：\r\n客户名称：赵文艺\r\n详细地址：东城区天王大厦A座1808室\r\n欠费项目：空调服务费\r\n截止2019-07-01您缴纳的空调服务费已经欠费，请尽快到财务部缴费,谢谢。如已缴费请忽略此信息',
    modify_time: '2019-08-13 15:14:46'
  },
  {
    id: 'OPENTM417956880',
    title: '电子合同签署完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您已完成桃源居101房的电子合同签署。\r\n房间号：桃源居101房\r\n租期：2019/06/01-2019/09/01\r\n感谢您的使用。',
    modify_time: '2019-08-05 11:15:24'
  },
  {
    id: 'OPENTM417957882',
    title: '工单已接单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n接单时间：{{keyword1.DATA}}\n接单人：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您提交的报事工单已接单。\r\n接单时间：2019-07-15 12:00\r\n接单人：张三\r\n联系方式：18688888888\r\n感谢你的使用，您也可以点击详情关注最新报事进展',
    modify_time: '2019-08-06 15:26:55'
  },
  {
    id: 'OPENTM417957884',
    title: '工单完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n完成时间：{{keyword1.DATA}}\n完成人：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户：您提交的报事工单已处理完成。\r\n完成时间：2019-07-15 13:00\r\n完成人：李四\r\n联系方式：18866666666\r\n感谢你的使用。',
    modify_time: '2019-08-06 15:28:07'
  },
  {
    id: 'OPENTM417957885',
    title: '工单关闭通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n关闭时间：{{keyword1.DATA}}\n关闭人：{{keyword2.DATA}}\n联系方式：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的客户：您提交的报事工单已被王二关闭。\r\n关闭时间：2019-07-15 18:00\r\n关闭人：王二\r\n联系方式：13999999999\r\n感谢你的使用。您也可以点击详情对工程人员进行评价',
    modify_time: '2019-08-06 15:28:18'
  },
  {
    id: 'OPENTM417956889',
    title: '新工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单类型：{{keyword1.DATA}}\n工作区域：{{keyword2.DATA}}\n工作事项：{{keyword3.DATA}}\n打卡时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您收到一个新工单\r\n工单类型：临时任务\r\n工作区域：32栋、33栋高层\r\n工作事项：梯步清洁、电梯擦拭\r\n打卡时间：2019-07-31 07:30\r\n请您提前准备！',
    modify_time: '2019-08-05 11:45:32'
  },
  {
    id: 'OPENTM417954894',
    title: '生活垃圾服务费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n征收户编号：{{keyword1.DATA}}\n水表编号：{{keyword2.DATA}}\n欠费笔数：{{keyword3.DATA}}\n合计金额：{{keyword4.DATA}}\n计费时段：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，你好！\r\n征收户编号：0522678\r\n水表编号：61655165\r\n欠费笔数：2\r\n合计金额：100元\r\n计费时段：2019-07至2019-08\r\n为了避免给您带来不便，请尽快缴纳！',
    modify_time: '2019-08-01 16:43:05'
  },
  {
    id: 'OPENTM417954996',
    title: '电梯故障报警通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n注册代码：{{keyword1.DATA}}\n报警时间：{{keyword2.DATA}}\n报警类型：{{keyword3.DATA}}\n使用地点：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，电梯发生故障报警。\r\n注册代码：300201907190022\r\n报警时间：2019-07-19 12:20:31\r\n报警类型：安全回路断开\r\n使用地点：西青区梅江西路南艺园3#楼西楼\r\n请及时处理。',
    modify_time: '2019-08-01 18:14:17'
  },
  {
    id: 'OPENTM417960246',
    title: '访客预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预约人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已预约成功\r\n预约人：小米科技\r\n到访时间：2019年5月14号\r\n感谢你的使用',
    modify_time: '2019-08-09 12:07:01'
  },
  {
    id: 'OPENTM417955347',
    title: '访客预约失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预约人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你已预约失败\r\n预约人：小米科技\r\n到访时间：2019年5月14号\r\n感谢你的使用',
    modify_time: '2019-08-02 10:51:00'
  },
  {
    id: 'OPENTM417961949',
    title: '可回收收运通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n收运公司：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n垃圾类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，徐汇区可回收收运通知：\r\n收运公司：可回收垃圾公司\r\n时间：2019-05-28 16:00\r\n垃圾类型：玻璃\r\n收运可回收垃圾（玻璃）10 kg。',
    modify_time: '2019-08-12 10:29:43'
  },
  {
    id: 'OPENTM417975508',
    title: '维修完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n故障位置：{{keyword1.DATA}}\n维修人员：{{keyword2.DATA}}\n维修说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，故障已处理完成\r\n故障位置：3幢A0电梯\r\n维修人员：张君\r\n维修说明：电梯故障已经维修\r\n感谢您的理解，请点击查看维修详情。',
    modify_time: '2019-08-27 11:30:18'
  },
  {
    id: 'OPENTM417975509',
    title: '维修完成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n故障位置：{{keyword1.DATA}}\n维修人员：{{keyword2.DATA}}\n维修说明：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，故障已处理完成\r\n故障位置：3幢A0电梯\r\n维修人员：张君\r\n维修说明：电梯故障已经维修\r\n感谢您的理解，请点击查看维修详情。',
    modify_time: '2019-08-27 11:30:18'
  },
  {
    id: 'OPENTM417965212',
    title: '车位预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n预约停车场：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n车牌号：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '恭喜成功预约车位\r\n预约停车场：xx停车场\r\n预约时间：2018-10-30 19:37:00\r\n车牌号：苏A11111\r\n欢迎使用停车预约系统',
    modify_time: '2019-08-15 15:42:35'
  },
  {
    id: 'OPENTM417965963',
    title: '年租车逾期通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n注册时间：{{keyword2.DATA}}\n到期时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '年租车逾期通知\r\n车牌号：鄂A89KL58\r\n注册时间：2018-01-01 00:00:00\r\n到期时间：2019-01-01 00:00:00\r\n停车逾期，请即时缴纳停车年费！',
    modify_time: '2019-08-16 17:37:14'
  },
  {
    id: 'OPENTM417964414',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n小区名称：{{keyword1.DATA}}\n业主信息：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n缴费类型：{{keyword4.DATA}}\n缴费时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，业主\r\n小区名称：香开新城1号楼101\r\n业主信息：张三\r\n缴费金额：100\r\n缴费类型：物业费\r\n缴费时间：2019年8月1日\r\n缴费成功。',
    modify_time: '2019-08-14 15:24:39'
  },
  {
    id: 'OPENTM417971267',
    title: '缴费失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n缴费时间：{{keyword1.DATA}}\n缴费方式：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n失败原因：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的XXX住户，您好：您有一笔缴费失败了，具体信息如下：\r\n缴费时间：2019-08-20 16:48:21\r\n缴费方式：微信刷卡\r\n缴费金额：123元\r\n失败原因：余额不足；\r\n以上信息仅供参考。',
    modify_time: '2019-08-22 12:02:09'
  },
  {
    id: 'OPENTM417974022',
    title: '办公用品审核完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n审核人员：{{keyword1.DATA}}\n审核时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你申请的办公用品已审核\r\n审核人员：刘三\r\n审核时间：2018年12月1日\r\n请及时查看审核结果',
    modify_time: '2019-08-26 11:33:00'
  },
  {
    id: 'OPENTM417971323',
    title: '房租账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n账单日期：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n账单类型：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的彤彤公寓101房第2期账单已生成。\r\n账单日期：2017-03-07\r\n账单金额：1200元\r\n账单类型：房租\r\n感谢你的使用。',
    modify_time: '2019-08-22 13:14:50'
  },
  {
    id: 'OPENTM417964324',
    title: '解绑成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n解绑账号：{{keyword1.DATA}}\n解绑时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的账号已成功解除绑定！\r\n解绑账号：17343748684\r\n解绑时间：2019年7月29日 13:21\r\n感谢您的使用。',
    modify_time: '2019-08-14 12:58:31'
  },
  {
    id: 'OPENTM417964824',
    title: '投诉处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n投诉人房号：{{keyword1.DATA}}\n投诉主题：{{keyword2.DATA}}\n投诉时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的XXX，您的投诉我们已收到并处理\r\n投诉人房号：深圳湾一号院1单元1栋101\r\n投诉主题：投诉\r\n投诉时间：2019-07-31 11:48\r\n当前进展：已安排专人跟进处理\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2019-08-15 09:13:28'
  },
  {
    id: 'OPENTM417965824',
    title: '房屋信息绑定成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房屋编号：{{keyword1.DATA}}\n住户姓名：{{keyword2.DATA}}\n机构名称：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '房屋信息绑定成功！\r\n房屋编号：11-1-201\r\n住户姓名：王一\r\n机构名称：长春市城市物业有限公司\r\n点击查看待缴账单信息，谢谢合作！',
    modify_time: '2019-08-16 12:30:49'
  },
  {
    id: 'OPENTM417968924',
    title: '办公用品申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人员：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '张山申请领取1张办公椅\r\n申请人员：张山\r\n申请时间：2019年1月5日\r\n请及时审核申请记录',
    modify_time: '2019-08-19 19:45:00'
  },
  {
    id: 'OPENTM417974825',
    title: '车辆上锁通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n车场名称：{{keyword2.DATA}}\n入场时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您设置了车辆入场自动锁车，系统已为您自动锁车成功\r\n车牌号：粤B888665\r\n车场名称：梅林停车场\r\n入场时间：2019-08-15 8:00:00\r\n欢迎光临',
    modify_time: '2019-08-26 18:23:29'
  },
  {
    id: 'OPENTM417968927',
    title: '账单缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 5,
    content: '{{first.DATA}}\n物业信息：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n费用日期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您有一笔新的账单需要支付。\r\n物业信息：清华园1栋1单元205\r\n账单金额：205.30元\r\n费用日期：2019/6/6\r\n请您及时缴费，避免账单逾期。祝您生活愉快。',
    modify_time: '2019-08-19 19:49:04'
  },
  {
    id: 'OPENTM417964381',
    title: '电子合同已生效通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您租住的桃源居101房间的电子合同已生效，点击查看合同详情。\r\n房间号：桃源居101房\r\n租期：2019/06/01-2019/09/01\r\n感谢您的使用。',
    modify_time: '2019-08-14 14:52:41'
  },
  {
    id: 'OPENTM417964382',
    title: '电子合同已生成提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n房间号：{{keyword1.DATA}}\n租期：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您租住的桃源居101房间的电子合同已生成。请耐心等待房东审核。\r\n房间号：桃源居101房\r\n租期：2019/06/01-2019/09/01\r\n感谢您的使用。',
    modify_time: '2019-08-14 14:52:46'
  },
  {
    id: 'OPENTM417964383',
    title: '房租缴纳提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n账单期数：{{keyword1.DATA}}\n交租日：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，顺德楼101房第1期账单将于3天后生成，请您及时缴纳，谢谢。\r\n账单期数：第2期\r\n交租日：2019-8-15\r\n谢谢您的支持！',
    modify_time: '2019-08-14 14:53:32'
  },
  {
    id: 'OPENTM417966034',
    title: '物业欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n业务周期：{{keyword1.DATA}}\n用户编号：{{keyword2.DATA}}\n用户名称：{{keyword3.DATA}}\n用户位置：{{keyword4.DATA}}\n欠费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '空调欠费通知\r\n业务周期：2019年5月2号-6月1号\r\n用户编号：U01020101\r\n用户名称：李明\r\n用户位置：1号楼2单元101户\r\n欠费金额：10.00元\r\n感谢您的使用，如有疑问，请致电物业。',
    modify_time: '2019-08-16 18:33:59'
  },
  {
    id: 'OPENTM417964336',
    title: '订单审核不通过通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n报修描述：{{keyword3.DATA}}\n审核时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，很遗憾您的订单未通过审核。\r\n订单号：001\r\n联系方式：13817001022\r\n报修描述：家里面外墙漏水，马桶堵塞\r\n审核时间：2019年8月6日 9:40\r\n如有疑问，请致电统一客户服务热线400-966-9161。',
    modify_time: '2019-08-14 13:21:36'
  },
  {
    id: 'OPENTM417965799',
    title: '维修返工通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n维修单号：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您有一个维修单需要进行返工\r\n维修单号：11111XXXX\r\n报修内容：闭门器坏\r\n报修时间：2019-8-10 13:00\r\n点击查看详情。',
    modify_time: '2019-08-16 10:58:55'
  },
  {
    id: 'OPENTM417986450',
    title: '设备故障报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属电梯：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n故障类型：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您所负责的设备有故障提报，请及时处理！\r\n所属小区：花园小区\r\n所属电梯：5 号楼 D2 货梯\r\n反馈时间：2019-09-04 2:25 PM\r\n故障类型：电梯停摆\r\n故障描述：电梯突然下滑',
    modify_time: '2019-09-09 12:52:01'
  },
  {
    id: 'OPENTM417986451',
    title: '设备维修进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n所属小区：{{keyword1.DATA}}\n所属电梯：{{keyword2.DATA}}\n反馈时间：{{keyword3.DATA}}\n处理时间：{{keyword4.DATA}}\n故障类型：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '已安排专人处理，请耐心等候\r\n所属小区：花园小区\r\n所属电梯：5 号楼 D2 货梯\r\n反馈时间：2019-09-04 2:25 PM\r\n处理时间：2019-09-04 2:30 PM\r\n故障类型：电梯停摆\r\n反馈已受理，我们会尽快安排工作人员前往查看。',
    modify_time: '2019-09-09 12:52:19'
  },
  {
    id: 'OPENTM417988803',
    title: '支付成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n驶入时间：{{keyword1.DATA}}\n驶离时间：{{keyword2.DATA}}\n停车时长：{{keyword3.DATA}}\n优惠券：{{keyword4.DATA}}\n已付费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '【浙A12345】车主，您已支付停车费用\r\n驶入时间：2019-07-07 8:00:00\r\n驶离时间：2019-07-07 9:22:00\r\n停车时长：1小时22分钟\r\n优惠券：满减券\r\n已付费：5元\r\n如果您还未驶离，请在15分钟内驶离，以免造成额外费用。',
    modify_time: '2019-09-11 16:45:54'
  },
  {
    id: 'OPENTM417989403',
    title: '水费帐单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n客户编号：{{keyword1.DATA}}\n客户姓名：{{keyword2.DATA}}\n用水地址：{{keyword3.DATA}}\n本期用水量：{{keyword4.DATA}}\n水费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的李在先用户您7-8月水费已出，信息如下：\r\n客户编号：3700502\r\n客户姓名：李在先\r\n用水地址：新永北巷12号\r\n本期用水量：10\r\n水费金额：26.10\r\n详情',
    modify_time: '2019-09-12 16:28:01'
  },
  {
    id: 'OPENTM417988804',
    title: '车辆未缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车地点：{{keyword1.DATA}}\n驶入时间：{{keyword2.DATA}}\n驶离时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n停车费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '【浙A12345】车主，您有未缴费订单\r\n停车地点：杭州市西湖区解放路\r\n驶入时间：2019-07-07 8:00:00\r\n驶离时间：2019-07-07 9:10:00\r\n停车时长：1小时10分钟\r\n停车费：10元\r\n请您及时缴费。',
    modify_time: '2019-09-11 16:46:07'
  },
  {
    id: 'OPENTM417988805',
    title: '停车缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n停车地点：{{keyword1.DATA}}\n驶入时间：{{keyword2.DATA}}\n驶离时间：{{keyword3.DATA}}\n停车时长：{{keyword4.DATA}}\n停车费：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '【浙A12345】车主，您有一笔未缴费记录\r\n停车地点：解放路\r\n驶入时间：2019-08-28 07:28:22\r\n驶离时间：2019-08-28 08:29:22\r\n停车时长：1小时1分钟\r\n停车费：5元\r\n请您尽快支付。',
    modify_time: '2019-09-11 16:46:13'
  },
  {
    id: 'OPENTM417981769',
    title: '电动车违停提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n上报时间：{{keyword1.DATA}}\n上报小区：{{keyword2.DATA}}\n违停位置：{{keyword3.DATA}}\n报警类型：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '平台发现了新的电动车违停事件。\r\n上报时间：2019-08-08 16:00:00\r\n上报小区：金色家园\r\n违停位置：37幢2单元\r\n报警类型：疑似电动车违停\r\n请及时核实并前往排除隐患。',
    modify_time: '2019-09-03 17:02:48'
  },
  {
    id: 'OPENTM417982684',
    title: '租用申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n广告位：{{keyword1.DATA}}\n展示时间：{{keyword2.DATA}}\n申请结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的广告位租用申请已经处理，请查看。\r\n广告位：园区T2栋G1电梯内广告位\r\n展示时间：2019年6月 至 2019年9月\r\n申请结果：已通过/已驳回\r\n如有其它咨询请联系客服0763-3151620，感谢您的使用。',
    modify_time: '2019-09-04 10:35:01'
  },
  {
    id: 'OPENTM417984534',
    title: '维修订单状态变更通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n报修详情：{{keyword2.DATA}}\n订单状态：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的报修进度已更新。\r\n订单号：001\r\n报修详情：卫生间渗水\r\n订单状态：维修中\r\n阅览订单详情进前往线上服务平台。',
    modify_time: '2019-09-06 10:28:23'
  },
  {
    id: 'OPENTM417984834',
    title: '物业租金缴费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n公司名称：{{keyword1.DATA}}\n账单日期：{{keyword2.DATA}}\n费用详情：{{keyword3.DATA}}\n总金额：{{keyword4.DATA}}\n缴费信息：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有新的缴费通知啦\r\n公司名称：火焰科技（A503）\r\n账单日期：2018-9-4\r\n费用详情：租金100\r\n总金额：200\r\n缴费信息：缴费如疑问，请致电13563698630\r\n感谢您的支持',
    modify_time: '2019-09-06 18:01:03'
  },
  {
    id: 'OPENTM417982685',
    title: '租用申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n广告位：{{keyword1.DATA}}\n展示时间：{{keyword2.DATA}}\n申请人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的用户提交了新的广告位申请。\r\n广告位：园区A3栋G1梯电梯广告位\r\n展示时间：2019年3月 至 2019年6月\r\n申请人：张潇潇\r\n联系电话：13666666666\r\n请尽快处理。',
    modify_time: '2019-09-04 10:35:06'
  },
  {
    id: 'OPENTM417981787',
    title: '装修申请结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n装修地址：{{keyword1.DATA}}\n装修时间：{{keyword2.DATA}}\n装修详情：{{keyword3.DATA}}\n申请结果：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的装修申请已处理，请查看。\r\n装修地址：华南装饰城T2栋，705卡位\r\n装修时间：2019-9-1 至 2020-2-1\r\n装修详情：对店铺进行翻新装修\r\n申请结果：已通过/已驳回\r\n如有其他问题，请咨询客服0763-3151620，感谢您的使用。',
    modify_time: '2019-09-03 17:12:02'
  },
  {
    id: 'OPENTM417987737',
    title: '维修订单转单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n报修描述：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '本单已转派责任方单位集美天成（13987654321）进行处理，责任方将于24H内电话联系确认具体维修事宜，请您保持电话畅通。\r\n订单号：001\r\n报修描述：家里卫生间漏水，马桶旁边瓷砖坏了，需要找人修\r\n如未及时联系，欢迎致电400-966-9161问询。',
    modify_time: '2019-09-10 10:05:58'
  },
  {
    id: 'OPENTM417988588',
    title: '用电异常预警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n预警内容：{{keyword1.DATA}}\n预警时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '预警提醒\r\n预警内容：电流电压过大\r\n预警时间：2019-08-01\r\n请及时处理',
    modify_time: '2019-09-11 11:16:18'
  },
  {
    id: 'OPENTM417982689',
    title: '装修申请审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人姓名：{{keyword1.DATA}}\n装修地址：{{keyword2.DATA}}\n装修时间：{{keyword3.DATA}}\n装修详情：{{keyword4.DATA}}\n当前状态：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的管理员，您好！有新的装修申请需要您处理。\r\n申请人姓名：李四\r\n装修地址：园区A2栋-703、704、705号\r\n装修时间：2019-9-1 至 2019-12-1\r\n装修详情：对单位进行全面装修。\r\n当前状态：待审核\r\n感谢您的使用。',
    modify_time: '2019-09-04 10:36:51'
  },
  {
    id: 'OPENTM417982690',
    title: '场地预约申请审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约人：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的管理员，您好，您又一个新的预约申请。\r\n场地名称：T2栋 一楼会议室\r\n预约时间：2019年9月2日\r\n预约人：张菲菲\r\n联系电话：136*****625\r\n感谢您的使用，请尽快处理。',
    modify_time: '2019-09-04 10:37:00'
  },
  {
    id: 'OPENTM417980841',
    title: '场地预约失败通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的场地预约申请已驳回，请查看。\r\n场地名称：T2栋 一楼会议室\r\n预约时间：2019年9月2日\r\n预约结果：已驳回\r\n感谢您的使用',
    modify_time: '2019-09-02 14:49:11'
  },
  {
    id: 'OPENTM417980842',
    title: '场地预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n场地名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您的场地预约申请已通过，请查看。\r\n场地名称：T2栋 一楼会议室\r\n预约时间：2019年9月2日\r\n预约结果：已审批\r\n感谢您的使用',
    modify_time: '2019-09-02 14:49:37'
  },
  {
    id: 'OPENTM417988596',
    title: '车辆入场提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车地点：{{keyword2.DATA}}\n驶入时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您已驶入解放路道路泊位\r\n车牌号：浙A12345\r\n停车地点：杭州市西湖区解放路\r\n驶入时间：2019-07-07 8:00:00\r\n请您规范停车。',
    modify_time: '2019-09-11 11:20:05'
  },
  {
    id: 'OPENTM417987797',
    title: '电梯异常预警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n预警内容：{{keyword1.DATA}}\n预警时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '预警提醒\r\n预警内容：1#电梯关人\r\n预警时间：2019-08-01\r\n请及时处理',
    modify_time: '2019-09-10 11:22:36'
  },
  {
    id: 'OPENTM417997200',
    title: '用电告警通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n故障名称：{{keyword1.DATA}}\n异常内容：{{keyword2.DATA}}\n提醒时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '过载通知\r\n故障名称：配电柜电流电压过大\r\n异常内容：2019-08-01\r\n提醒时间：2014年7月21日 18:36\r\n请及时处理',
    modify_time: '2019-09-23 15:29:38'
  },
  {
    id: 'OPENTM417992055',
    title: '无匹配场内车提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n车场名称：{{keyword1.DATA}}\n出口通道：{{keyword2.DATA}}\n车牌号：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有一个无匹配场内车辆需要您处理。\r\n车场名称：久和大厦\r\n出口通道：1号出口\r\n车牌号：皖A99999\r\n时间：2019年9月9日 19:19\r\n点击进行处理。',
    modify_time: '2019-09-16 17:35:37'
  },
  {
    id: 'OPENTM418000261',
    title: '接单成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 12,
    content: '{{first.DATA}}\n订单编号：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n维修师傅：{{keyword3.DATA}}\n联系电话：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的维修申请已派单\r\n订单编号：201909270001\r\n报修内容：点灯不亮\r\n维修师傅：张山\r\n联系电话：19855226622\r\n稍后物业上门服务',
    modify_time: '2019-09-27 16:28:33'
  },
  {
    id: 'OPENTM417998213',
    title: '工单已接单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n工单名称：{{keyword1.DATA}}\n工单状态：{{keyword2.DATA}}\n处理人：{{keyword3.DATA}}\n处理时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的报修工单已被接单！\r\n工单名称：空调维修工单\r\n工单状态：已接单\r\n处理人：张工\r\n处理时间：2019年9月23日 10:02\r\n维修人员会尽快上门维修！',
    modify_time: '2019-09-25 14:25:27'
  },
  {
    id: 'OPENTM418007763',
    title: '取消工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n工单位置：{{keyword1.DATA}}\n工单内容：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n截止时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '工单取消提醒\r\n工单位置：1#楼\r\n工单内容：1#楼没电。\r\n报修时间：2014年7月21日 18:36\r\n截止时间：2014年7月22日 18:36\r\n无需处理此条工单',
    modify_time: '2019-10-10 10:02:20'
  },
  {
    id: 'OPENTM417997316',
    title: '房屋报事报修进度提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n报事类型：{{keyword1.DATA}}\n报事内容：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '208房灯具损坏报修进度提醒 \r\n报事类型：报事工单进度提醒 \r\n报事内容：尊敬的业主您好，关于您在本小区申报的\r\n时间：2019年9月16日 18:36\r\n祝您生活愉快。',
    modify_time: '2019-09-23 18:12:12'
  },
  {
    id: 'OPENTM418002116',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预约日期：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约业务：{{keyword3.DATA}}\n携带资料：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: 'A1001\r\n预约日期：2019-10-01\r\n预约时间：09:30-10:30\r\n预约业务：租户日常缴款\r\n携带资料：含档口号信息的租赁合同\r\n如需退号或修改，请点击链接',
    modify_time: '2019-09-30 17:10:11'
  },
  {
    id: 'OPENTM418000226',
    title: '门禁设备掉线提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n设备位置：{{keyword1.DATA}}\n掉线时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一条门禁机设备掉线通知。\r\n设备位置：清华科技园3栋3单元前门\r\n掉线时间：2019年9月23日10:00\r\n请知悉并核实情况。',
    modify_time: '2019-09-27 15:49:29'
  },
  {
    id: 'OPENTM417997632',
    title: '访客预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n被约人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '你好,你已预约成功\r\n被约人：张三\r\n到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2019-09-24 14:28:27'
  },
  {
    id: 'OPENTM417997633',
    title: '访客预约失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n被约人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '此次预约失败\r\n被约人：张三\r\n到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2019-09-24 14:29:48'
  },
  {
    id: 'OPENTM417994985',
    title: '热水开启提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n学校楼栋号：{{keyword1.DATA}}\n用户编号：{{keyword2.DATA}}\n预付金额：{{keyword3.DATA}}\n热水开启时间：{{keyword4.DATA}}\n热水设备编号端口：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '热水开启提醒\r\n学校楼栋号：柳州生态学院东区201\r\n用户编号：21341\r\n预付金额：12\r\n热水开启时间：2014年7月21日 18:36:12\r\n热水设备编号端口：12345678:01\r\n感谢你的使用。',
    modify_time: '2019-09-19 18:38:33'
  },
  {
    id: 'OPENTM417994986',
    title: '热水关闭提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n学校楼栋号：{{keyword1.DATA}}\n用户编号：{{keyword2.DATA}}\n消费退费金额：{{keyword3.DATA}}\n热水关闭时间：{{keyword4.DATA}}\n账户余额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '热水关闭提醒\r\n学校楼栋号：柳州生态学院东区201\r\n用户编号：124123\r\n消费退费金额：12:2\r\n热水关闭时间：2014年7月21日 18:36:32\r\n账户余额：123\r\n感谢你的使用。',
    modify_time: '2019-09-19 18:38:37'
  },
  {
    id: 'OPENTM417997586',
    title: '维保工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n工单位置：{{keyword1.DATA}}\n报修时间：{{keyword2.DATA}}\n截止时间：{{keyword3.DATA}}\n工单内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '工单处理提醒\r\n工单位置：老楼1F101房间\r\n报修时间：2019年7月21日 18:36\r\n截止时间：2019年8月21日 18:36\r\n工单内容：空调坏了\r\n请及时处理',
    modify_time: '2019-09-24 11:56:03'
  },
  {
    id: 'OPENTM418001686',
    title: '新建工单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n工单位置：{{keyword1.DATA}}\n工单内容：{{keyword2.DATA}}\n报修时间：{{keyword3.DATA}}\n截止时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '之前有改标题的模板，因为换行符的原因需要重新申请\r\n工单位置：4F\r\n工单内容：空调坏了\r\n报修时间：2014年7月21日 18:36\r\n截止时间：2014年7月21日 18:36\r\n请及时处理',
    modify_time: '2019-09-29 18:02:10'
  },
  {
    id: 'OPENTM417998437',
    title: '访客预约变更成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n被约人：{{keyword1.DATA}}\n变更后到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '预约已变更\r\n被约人：张三\r\n变更后到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2019-09-25 19:30:12'
  },
  {
    id: 'OPENTM417995540',
    title: '断合闸通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n房号：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n原因：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您入住的房间已断闸。\r\n房号：2001\r\n时间：2019-9-19 17:00\r\n原因：水电欠费\r\n为确保您能正常使用水电，请及时充值，感谢您的配合！',
    modify_time: '2019-09-20 11:10:40'
  },
  {
    id: 'OPENTM418001942',
    title: '排队进度通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n当前票号：{{keyword1.DATA}}\n业务类型：{{keyword2.DATA}}\n受理窗口：{{keyword3.DATA}}\n取号时间：{{keyword4.DATA}}\n等候人数：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的李四用户\r\n当前票号：A1002\r\n业务类型：签约业务\r\n受理窗口：1,4,6\r\n取号时间：2019-09-17 11:23:12\r\n等候人数：2人\r\n请留意窗口叫号信息，过号请重新取号。',
    modify_time: '2019-09-30 10:31:17'
  },
  {
    id: 'OPENTM417997044',
    title: '月租办理成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n支付金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '月租办理成功\r\n订单号：2201254\r\n车牌号：粤A66666\r\n支付金额：180元\r\n支付时间：2019-09-22\r\n欢迎使用',
    modify_time: '2019-09-23 10:08:53'
  },
  {
    id: 'OPENTM417994948',
    title: '车辆预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n联系方式：{{keyword2.DATA}}\n车牌号：{{keyword3.DATA}}\n来访时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '恭喜你，您的预约信息已通过审核！\r\n访客姓名：封芳华\r\n联系方式：15994755819\r\n车牌号：粤B123456\r\n来访时间：2019-05-01 19:00-2019-05-01 20:00\r\n你本次的来访原因为：送货；货物名称:西瓜；货物数量:10；毛重:3.2吨；备注信息:送水果 若有其他问题请联系车场相关人员！',
    modify_time: '2019-09-19 18:27:59'
  },
  {
    id: 'OPENTM417998948',
    title: '维修质量异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报修内容：{{keyword1.DATA}}\n累计故障次数：{{keyword2.DATA}}\n上次维保时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '报修工单提醒\r\n报修内容：1楼101房间空调坏了\r\n累计故障次数：2次\r\n上次维保时间：2014年7月21日 18:36\r\n请及时处理',
    modify_time: '2019-09-26 14:12:04'
  },
  {
    id: 'OPENTM418008850',
    title: '缴费单逾期通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n应缴金额：{{keyword1.DATA}}\n缴费状态：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租户你好，你有预期缴费通知单\r\n应缴金额：1000\r\n缴费状态：未缴费\r\n请尽快缴费',
    modify_time: '2019-10-11 17:57:25'
  },
  {
    id: 'OPENTM418028602',
    title: '面试安排提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n面试者：{{keyword1.DATA}}\n联系电话：{{keyword2.DATA}}\n面试职位：{{keyword3.DATA}}\n面试时间：{{keyword4.DATA}}\n面试地点：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '面试官您好，您收到新的面试邀请\r\n面试者：卢健\r\n联系电话：175211****1\r\n面试职位：微信开发\r\n面试时间：2019-10-30\r\n面试地点：新世界\r\n请点击查看详情',
    modify_time: '2019-10-28 18:10:03'
  },
  {
    id: 'OPENTM418024853',
    title: '预付费停电通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n部位名称：{{keyword1.DATA}}\n欠费金额：{{keyword2.DATA}}\n停电时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '业主您好，截止目前您已欠费\r\n部位名称：海丰新村1栋101室\r\n欠费金额：100元\r\n停电时间：2014年7月21日\r\n感谢你的使用',
    modify_time: '2019-10-22 18:00:48'
  },
  {
    id: 'OPENTM418008606',
    title: '电费欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n入住房间：{{keyword1.DATA}}\n电费剩余：{{keyword2.DATA}}\n发送时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客，您所住的合作金融大厦17楼电表余额不足20.00元，未避免影响使用，请及时充值，点击前往充值&amp;amp;amp;gt;&amp;amp;amp;gt;\r\n入住房间：合作金融大厦17楼门禁房间\r\n电费剩余：-19.80元\r\n发送时间：2019-10-01\r\n详情',
    modify_time: '2019-10-11 15:19:30'
  },
  {
    id: 'OPENTM418022706',
    title: '访客预约变更成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n变更后到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '访客预约变更成功\r\n访客姓名：张三\r\n变更后到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2019-10-18 20:50:08'
  },
  {
    id: 'OPENTM418008607',
    title: '电费充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n入住房间：{{keyword1.DATA}}\n电费剩余：{{keyword2.DATA}}\n发送时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的租客，您所住的合作金融大厦17楼电费已成功充值100.00元，点击查看详情&amp;amp;amp;amp;gt;&amp;amp;amp;amp;gt;\r\n入住房间：合作金融大厦17楼门禁房间\r\n电费剩余：92.98元\r\n发送时间：2019-10-01\r\n详情',
    modify_time: '2019-10-11 15:19:38'
  },
  {
    id: 'OPENTM418024807',
    title: '预约排队提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n事项名称：{{keyword1.DATA}}\n预约时间：{{keyword2.DATA}}\n预约网点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，你有一条预约就到时间了\r\n事项名称：房产签约\r\n预约时间：2019-03-17  11\r\n预约网点：南山区服务大厅\r\n请您持身份证及业务办理所需材料在预约办理时间段内完成取号，不能办理业务请与今日下午五点前取消预约。',
    modify_time: '2019-10-22 16:57:30'
  },
  {
    id: 'OPENTM418023958',
    title: '设备故障提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n设备：{{keyword2.DATA}}\n原因：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '有手机开门设备出现故障\r\n小区：厦门 - 中央天成\r\n设备：10栋1层\r\n原因：连续2次开门失败\r\n时间：2019年10月17日  17:15\r\n请马上处理。',
    modify_time: '2019-10-21 09:41:57'
  },
  {
    id: 'OPENTM418025863',
    title: '工单处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 4,
    content: '{{first.DATA}}\n工单位置：{{keyword1.DATA}}\n报修时间：{{keyword2.DATA}}\n截止时间：{{keyword3.DATA}}\n工单内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '工单处理提醒\r\n工单位置：老楼1F101房间\r\n报修时间：2019年7月21日 18:36\r\n截止时间：2019年8月21日 18:36\r\n工单内容：空调坏了\r\n模板里这种标题很多，只是里面字段不合适。',
    modify_time: '2019-10-24 18:14:31'
  },
  {
    id: 'OPENTM418024867',
    title: '预付费欠费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n应缴金额：{{keyword1.DATA}}\n账单金额：{{keyword2.DATA}}\n当前余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您的余额不足\r\n应缴金额：100\r\n账单金额：100\r\n当前余额：100\r\n感谢你的使用',
    modify_time: '2019-10-22 18:10:02'
  },
  {
    id: 'OPENTM418028417',
    title: '充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n账户名称：{{keyword1.DATA}}\n充值时间：{{keyword2.DATA}}\n充值金额：{{keyword3.DATA}}\n当前余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您已充值成功\r\n账户名称：麦当劳\r\n充值时间：2019-10-22 10:00:00\r\n充值金额：1000元\r\n当前余额：1020元\r\n如有疑问，或需进一步核实，请与中电物业管理处联系。',
    modify_time: '2019-10-28 16:47:35'
  },
  {
    id: 'OPENTM418025269',
    title: '车辆授权审批提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n申请人：{{keyword2.DATA}}\n申请人手机号：{{keyword3.DATA}}\n时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '车牌号：粤B 5668\r\n申请人：张三\r\n申请人手机号：19865761236\r\n时间：2019-10-12 10:30\r\n点击详情可前往审批',
    modify_time: '2019-10-23 18:19:19'
  },
  {
    id: 'OPENTM418012423',
    title: '月度电费账单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n本期电费：{{keyword1.DATA}}\n时间：{{keyword2.DATA}}\n单价：{{keyword3.DATA}}\n地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '月度电费账单提醒\r\n本期电费：180.89元\r\n时间：2019-9-1至2019-9-30\r\n单价：3元/度\r\n地址：科技大厦-A栋一楼202\r\n如有疑问请拨打0851-88888888咨询',
    modify_time: '2019-10-17 10:42:42'
  },
  {
    id: 'OPENTM418007776',
    title: '取消维修预约通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n报修时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '用户取消了维修预约，请知悉\r\n联系人：张三\r\n电话：18800000001\r\n房号：一号楼101房间\r\n报修时间：2019年10月8号 12:30\r\n工作辛苦了，注意劳逸结合。',
    modify_time: '2019-10-10 10:24:57'
  },
  {
    id: 'OPENTM418010378',
    title: '设备掉线通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n停车场：{{keyword1.DATA}}\n通道：{{keyword2.DATA}}\n设备类型：{{keyword3.DATA}}\n掉线时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，你的停车场通道设备已掉线，请速核实\r\n停车场：优库停车场\r\n通道：出口\r\n设备类型：主摄像机\r\n掉线时间：2019-10-10 10:10:10\r\n感谢你的使用。',
    modify_time: '2019-10-14 16:22:50'
  },
  {
    id: 'OPENTM418012044',
    title: '取件通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n订单号：{{keyword1.DATA}}\n顾客姓名：{{keyword2.DATA}}\n取件状态：{{keyword3.DATA}}\n取件时间：{{keyword4.DATA}}\n服务人员：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您好，你提交的预约订单我方已派遣服务人员上门取件\r\n订单号：19072516530301\r\n顾客姓名：张三\r\n取件状态：上门取件中\r\n取件时间：2019-09-04 10:30-11:00\r\n服务人员：李四 136xxxx5482\r\n订单已派遣服务人员取件中，请及时关注',
    modify_time: '2019-10-16 11:43:16'
  },
  {
    id: 'OPENTM418012494',
    title: '月度缴费单提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n缴费类型：{{keyword1.DATA}}\n应缴金额：{{keyword2.DATA}}\n最迟缴费日：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的租户，您有一张新的缴费单\r\n缴费类型：租金缴费单\r\n应缴金额：1000\r\n最迟缴费日：2019-01-01\r\n谢谢',
    modify_time: '2019-10-17 11:32:51'
  },
  {
    id: 'OPENTM418028594',
    title: '电费过低提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n用户户号：{{keyword1.DATA}}\n用户姓名：{{keyword2.DATA}}\n用户地址：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '{first.电费过低}}\r\n用户户号：{{keyword1.222222}}\r\n用户姓名：{{keyword2.许继电表}}\r\n用户地址：{{keyword3.222222}}\r\n{{remark.当前余额0.01元,欠费将自动停电,为不影响你的正常用电,请及时缴费！}}',
    modify_time: '2019-10-28 18:06:32'
  },
  {
    id: 'OPENTM418010446',
    title: '预付费余额预警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n账户余额：{{keyword1.DATA}}\n预警时间：{{keyword2.DATA}}\n预警金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您当前余额已低于预警金额\r\n账户余额：10元\r\n预警时间：2014年7月21日\r\n预警金额：100元\r\n感谢您的使用',
    modify_time: '2019-10-14 18:10:04'
  },
  {
    id: 'OPENTM418012548',
    title: '预付费扣费成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n账单金额：{{keyword1.DATA}}\n结算日期：{{keyword2.DATA}}\n当前余额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您已扣费成功\r\n账单金额：100\r\n结算日期：2014年7月21日\r\n当前余额：100\r\n感谢你的使用',
    modify_time: '2019-10-17 13:05:32'
  },
  {
    id: 'OPENTM418030251',
    title: '审批拒绝提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n拜访对象：{{keyword1.DATA}}\n拜访事由：{{keyword2.DATA}}\n拜访时间：{{keyword3.DATA}}\n随行车辆：{{keyword4.DATA}}\n拒绝理由：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '审批时间：2019-01-01\r\n拜访对象：万科小区-1栋-701-张三\r\n拜访事由：面试\r\n拜访时间：2019-01-01\r\n随行车辆：粤B12345\r\n拒绝理由：预约已满\r\n预约申请被拒绝，请修改预约时间！',
    modify_time: '2019-10-31 16:41:33'
  },
  {
    id: 'OPENTM418042701',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n缴费项目：{{keyword1.DATA}}\n缴费金额：{{keyword2.DATA}}\n缴费时间：{{keyword3.DATA}}\n物业地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '【缴费成功通知】\r\n缴费项目：物业及相关费用\r\n缴费金额：1200.00\r\n缴费时间：2019-11-20 10:30:59\r\n物业地址：XXXXXX\r\n感谢您对我们的大力支持',
    modify_time: '2019-11-21 17:33:56'
  },
  {
    id: 'OPENTM418038002',
    title: '预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n预约项目：{{keyword1.DATA}}\n预约编号：{{keyword2.DATA}}\n预约状态：{{keyword3.DATA}}\n预约时段：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的预约工单已提交成功\r\n预约项目：半岛城邦花园一期住宅\r\n预约编号：19072608372101\r\n预约状态：成功\r\n预约时段：2019-11-12\r\n您的预约工单已预约成功，请及时关注',
    modify_time: '2019-11-13 13:04:28'
  },
  {
    id: 'OPENTM418033005',
    title: '电表离线时间过长通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n电表表号：{{keyword1.DATA}}\n房屋地址：{{keyword2.DATA}}\n离线时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的房东，您的电表离线时间已超过24小时，请及时处理~\r\n电表表号：8004201901290021\r\n房屋地址：武汉市洪山区光谷国际A座2088室\r\n离线时间：2019-08-12 16:45:30\r\n点击这里，查看快速解决方案',
    modify_time: '2019-11-06 12:58:44'
  },
  {
    id: 'OPENTM418029006',
    title: '报销单审核完成通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n审核人员：{{keyword1.DATA}}\n审核时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您申请的报销单已审核\r\n审核人员：刘达\r\n审核时间：2019-11-11 12:21:04\r\n请及时查看审核结果',
    modify_time: '2019-10-29 14:18:02'
  },
  {
    id: 'OPENTM418032606',
    title: '入职办理预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n员工姓名：{{keyword1.DATA}}\n入职办理时间：{{keyword2.DATA}}\n入职办理地点：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的XX，您的入职办理已成功预约，请核对入职信息\r\n员工姓名：XX\r\n入职办理时间：2019年11月4日9:00\r\n入职办理地点：XX区XX路20号\r\n请按以上信息前往办理入职',
    modify_time: '2019-11-05 17:11:57'
  },
  {
    id: 'OPENTM418033411',
    title: '审核不通过通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n员工姓名：{{keyword1.DATA}}\n审核结果：{{keyword2.DATA}}\n原因：{{keyword3.DATA}}\n审核时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的资料未通过审核\r\n员工姓名：XX\r\n审核结果：审核不通过\r\n原因：未提交附件\r\n审核时间：2019年11月4日16:36\r\n请修改资料后重新提交',
    modify_time: '2019-11-07 11:21:13'
  },
  {
    id: 'OPENTM418038013',
    title: '订单已签收通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n会员名称：{{keyword1.DATA}}\n签收日期：{{keyword2.DATA}}\n订单号：{{keyword3.DATA}}\n签收数量：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您好，您的订单已被签收\r\n会员名称：张三\r\n签收日期：2019-10-15 11:57\r\n订单号：190829004\r\n签收数量：3\r\n您的订单已经签收完成，半岛城邦物业感谢您的关注。',
    modify_time: '2019-11-13 13:11:26'
  },
  {
    id: 'OPENTM418034314',
    title: '排队过号提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n排队号码：{{keyword1.DATA}}\n过号时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '已过号！\r\n排队号码：11号\r\n过号时间：2014年7月21日 18:36\r\n请前往大厅与工作人员联系',
    modify_time: '2019-11-08 16:30:57'
  },
  {
    id: 'OPENTM418034417',
    title: '预约成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n拜访人姓名：{{keyword1.DATA}}\n被访人姓名：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n结束时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您已预约成功。请在预约时间内来访。\r\n拜访人姓名：张三\r\n被访人姓名：李四\r\n预约时间：2016年12月1日 10:27\r\n结束时间：2016年12月1日 12:00\r\n请在预约时间内来访，过时失效！',
    modify_time: '2019-11-08 18:14:53'
  },
  {
    id: 'OPENTM418030718',
    title: '停车退款失败提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n停车场：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n支付时间：{{keyword4.DATA}}\n订单号：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '退款失败\r\n车牌号：粤Q123443\r\n停车场：大华停车场\r\n缴费金额：50元\r\n支付时间：2019年10月12日 14:34\r\n订单号：200459495354\r\n请重新申请退款',
    modify_time: '2019-11-01 12:55:42'
  },
  {
    id: 'OPENTM418047270',
    title: '购买成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n月卡金额：{{keyword1.DATA}}\n月卡到期时间：{{keyword2.DATA}}\n绑定车牌号：{{keyword3.DATA}}\n适用停车场：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好，购买月卡成功\r\n月卡金额：200元\r\n月卡到期时间：2019-12-11\r\n绑定车牌号：闽A12345\r\n适用停车场：xxx停车场\r\n感谢你的使用。',
    modify_time: '2019-11-26 11:05:38'
  },
  {
    id: 'OPENTM418041074',
    title: '预付缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n金额：{{keyword1.DATA}}\n场区：{{keyword2.DATA}}\n时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '预付缴费成功【粤B 88888】\r\n金额：100\r\n场区：华侨城小区\r\n时间：2019-11-12 10:00\r\n点击查看详情',
    modify_time: '2019-11-18 11:24:48'
  },
  {
    id: 'OPENTM418042524',
    title: '用水量异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n客户名称：{{keyword1.DATA}}\n时间起：{{keyword2.DATA}}\n时间止：{{keyword3.DATA}}\n实时用量：{{keyword4.DATA}}\n平均用量：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有一条用水信息。\r\n客户名称：绍兴市冠友电子商务有限公司\r\n时间起：2019-11-20 10:00:00\r\n时间止：2019-11-20 11:00:00\r\n实时用量：5吨\r\n平均用量：6吨\r\n贵公司在以上区间内的水用量超过以往平均用量，请及时查看情况。',
    modify_time: '2019-11-21 16:24:11'
  },
  {
    id: 'OPENTM418033075',
    title: '水电表自助提交通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房源信息：{{keyword1.DATA}}\n租客：{{keyword2.DATA}}\n交租日期：{{keyword3.DATA}}\n上月水表吨数：{{keyword4.DATA}}\n上月电表度数：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，交租日期前，房东请你提交水电数据！\r\n房源信息：XX小区 A5栋1101房\r\n租客：张三\r\n交租日期：2019-11-01\r\n上月水表吨数：100吨\r\n上月电表度数：1000度\r\n已经提交过的可以忽略本消息，谢谢！',
    modify_time: '2019-11-06 14:21:05'
  },
  {
    id: 'OPENTM418035730',
    title: '流程待审批通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n流程名称：{{keyword1.DATA}}\n流程申请人：{{keyword2.DATA}}\n流程申请时间：{{keyword3.DATA}}\n流程摘要：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您有一个流程正待审批。\r\n流程名称：物资领用申请流程\r\n流程申请人：胡晓晓\r\n流程申请时间：2019-10-26 14:22:10\r\n流程摘要：耗材领用申请\r\n快去查看审批详情吧。',
    modify_time: '2019-11-11 17:28:30'
  },
  {
    id: 'OPENTM418033034',
    title: '设备故障智能诊断提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n异常设备：{{keyword1.DATA}}\n异常信息：{{keyword2.DATA}}\n报警时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '设备故障提醒\r\n异常设备：空压机\r\n异常信息：压力过大\r\n报警时间：2014年7月21日 18:36\r\n这个公众号是it 与房地产两个行业，物业上设备确实需要这种类型的提醒',
    modify_time: '2019-11-06 13:21:57'
  },
  {
    id: 'OPENTM418035737',
    title: '申请流程审批结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n申请类型：{{keyword1.DATA}}\n申请备注：{{keyword2.DATA}}\n审批结果：{{keyword3.DATA}}\n审批备注：{{keyword4.DATA}}\n审批时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您有一个申请已完成审批。\r\n申请类型：物资领用申请\r\n申请备注：日常消耗\r\n审批结果：审批通过\r\n审批备注：已经发放物资\r\n审批时间：2019-10-12 16:08:30\r\n点击查看详情。',
    modify_time: '2019-11-11 17:31:46'
  },
  {
    id: 'OPENTM418034447',
    title: '报销单申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人员：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '张山已经申请了一份报销单，请及时审核\r\n申请人员：张山\r\n申请时间：2019年10月11日\r\n如有问题请及时联系申请人！',
    modify_time: '2019-11-08 18:46:58'
  },
  {
    id: 'OPENTM418041097',
    title: '投诉处理通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n房源编号：{{keyword1.DATA}}\n处理时间：{{keyword2.DATA}}\n处理结果：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您的投诉已处理\r\n房源编号：CA03001\r\n处理时间：2019-11-16\r\n处理结果：物业已改进\r\n查看详情',
    modify_time: '2019-11-18 11:44:47'
  },
  {
    id: 'OPENTM418056401',
    title: '物业费缴费到账通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n客户住址：{{keyword1.DATA}}\n到账金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '收到物业费线上缴交到账\r\n客户住址：一号区1号1单元101\r\n到账金额：208\r\n谢谢使用',
    modify_time: '2019-12-12 14:14:35'
  },
  {
    id: 'OPENTM418049205',
    title: '电表充值成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n电表名：{{keyword1.DATA}}\n门牌号：{{keyword2.DATA}}\n电表号：{{keyword3.DATA}}\n剩余余额：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您的电表充值成功\r\n电表名：30002--1-1北空调\r\n门牌号：A3-4-1101\r\n电表号：0000000\r\n剩余余额：100.00 元\r\n感谢您的使用',
    modify_time: '2019-11-29 17:26:23'
  },
  {
    id: 'OPENTM418049206',
    title: '电表充值异常通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n电表名：{{keyword1.DATA}}\n门牌号：{{keyword2.DATA}}\n电表号：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '电表充值异常，请耐心等待，充值成功后会进行通知，若长时间未到账，请拨打0531-23414进行处理\r\n电表名：30002--1-1\r\n门牌号：A3-4-1101\r\n电表号：709202002002\r\n给您带来的不便请见谅',
    modify_time: '2019-11-29 17:26:32'
  },
  {
    id: 'OPENTM418055357',
    title: '新报修通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修联系人：{{keyword1.DATA}}\n电话：{{keyword2.DATA}}\n房号：{{keyword3.DATA}}\n保修内容：{{keyword4.DATA}}\n保修时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '你好，新报修通知\r\n报修联系人：张三\r\n电话：13213213211\r\n房号：1号楼A单元1户\r\n保修内容：水管漏水\r\n保修时间：2014年7月21日 18:36\r\n请及时联系保修业主。',
    modify_time: '2019-12-10 12:24:08'
  },
  {
    id: 'OPENTM418056408',
    title: '物料申请成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n申请人员：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '张山申请领用办公椅1张\r\n申请人员：张山\r\n申请时间：2019年1月5日\r\n请及时审核申请记录',
    modify_time: '2019-12-12 14:19:21'
  },
  {
    id: 'OPENTM418055759',
    title: '电表缴费退费通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n电表名：{{keyword1.DATA}}\n退费金额：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您的电表缴费退费成功\r\n电表名：3002-1-北照明\r\n退费金额：100.00元\r\n感谢您的使用。',
    modify_time: '2019-12-11 09:29:54'
  },
  {
    id: 'OPENTM418053510',
    title: '叫号成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n排队号码：{{keyword1.DATA}}\n服务大厅：{{keyword2.DATA}}\n办理窗口：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的张三，您好！\r\n排队号码：A99\r\n服务大厅：保利华南佛山签约中心\r\n办理窗口：22号\r\n请前往窗口办理业务！请及时办理，过号作废须重新取号！',
    modify_time: '2019-12-06 12:09:40'
  },
  {
    id: 'OPENTM418048015',
    title: '物业账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n产权地址：{{keyword2.DATA}}\n账单金额：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的用户，您2018年09月-10月的物业账单已出，请尽快缴费。\r\n业主姓名：张三\r\n产权地址：福州市鼓楼区巴黎之春19栋601\r\n账单金额：600.00元\r\n点击详情，可查看账单明细并缴费，如有疑问请联系物业处',
    modify_time: '2019-11-28 14:48:43'
  },
  {
    id: 'OPENTM418047616',
    title: '开门申请审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n小区名称：{{keyword1.DATA}}\n申请时间：{{keyword2.DATA}}\n申请条数：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲，本小区有人提交了开门申请，请进行审核。详细信息如下\r\n小区名称：紫光信息港\r\n申请时间：2019-12-12\r\n申请条数：23\r\n请点击这里，跳转至开门申请界面→→→',
    modify_time: '2019-11-27 10:16:11'
  },
  {
    id: 'OPENTM418047320',
    title: '物业反馈问题受理成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n问题标题：{{keyword1.DATA}}\n反馈类型：{{keyword2.DATA}}\n受理时间：{{keyword3.DATA}}\n查看链接：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '您提交的小区相关问题已受理\r\n问题标题：小区广场设施老化\r\n反馈类型：设施维修\r\n受理时间：2014-07-21\r\n查看链接：http://221.1.81.200\r\n您好，您所提交的问题已受理。受理时间：2014-07-21',
    modify_time: '2019-11-26 12:56:53'
  },
  {
    id: 'OPENTM418048075',
    title: '停车入场通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n入场时间：{{keyword2.DATA}}\n停车场：{{keyword3.DATA}}\n泊位号：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '尊敬的车主，您的车辆\r\n车牌号：粤A3G500G\r\n入场时间：于2020年1月15日 15:00驶入\r\n停车场：大华停车场\r\n泊位号：0499945\r\n欢迎光临！',
    modify_time: '2019-11-28 16:05:23'
  },
  {
    id: 'OPENTM418053480',
    title: '物业缴费提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n应缴房间：{{keyword1.DATA}}\n应缴费用：{{keyword2.DATA}}\n费用账期：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主或租户，您当前有如下应缴费用，请及时支付。\r\n应缴房间：HD-1906\r\n应缴费用：350\r\n费用账期：2019-11\r\n感谢您对我们工作的支持，祝您生活愉快！',
    modify_time: '2019-12-06 10:52:24'
  },
  {
    id: 'OPENTM418055333',
    title: '月度缴费账单通知',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n所在小区：{{keyword1.DATA}}\n房号：{{keyword2.DATA}}\n结算周期：{{keyword3.DATA}}\n缴费项目：{{keyword4.DATA}}\n缴费金额：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主/住户： 您好，您的缴费订单已生成，请尽快缴纳。\r\n所在小区：紫光信息港\r\n房号：1栋-2单元-102\r\n结算周期：2019/1/21-2019/3/21\r\n缴费项目：物业管理费\r\n缴费金额：320.5\r\n请点击【详情】完成缴纳，如有疑问，请咨询物业管理处&amp;amp;lt;0755-13454564&amp;amp;gt;，感谢您的理解与支持！',
    modify_time: '2019-12-10 11:22:48'
  },
  {
    id: 'OPENTM418056284',
    title: '电表配置异常提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n相关表号：{{keyword1.DATA}}\n相关地址：{{keyword2.DATA}}\n建议配置：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '亲爱的房东，您配置的电表参数有误，请及时处理！\r\n相关表号：80235127091\r\n相关地址：A区9栋1单元2906室\r\n建议配置：开启远程通讯\r\n点击这里，使用“建议配置”方案一键快速修复异常配置',
    modify_time: '2019-12-12 10:14:31'
  },
  {
    id: 'OPENTM418056335',
    title: '车辆登记申请通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n社区名称：{{keyword1.DATA}}\n车主姓名：{{keyword2.DATA}}\n车牌号码：{{keyword3.DATA}}\n单元楼号：{{keyword4.DATA}}\n联系电话：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '您收到由刘禹发起的车牌登记申请\r\n社区名称：叮咚万家\r\n车主姓名：刘禹\r\n车牌号码：冀AU0Q63\r\n单元楼号：1-1-101\r\n联系电话：15231166835\r\n正等待客服审核！请尽快登录社区服务管理平台处理！',
    modify_time: '2019-12-12 12:01:59'
  },
  {
    id: 'OPENTM418056336',
    title: '水电表充值成功提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n充值时间：{{keyword1.DATA}}\n充值费用：{{keyword2.DATA}}\n充值量：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '水电表充值成功\r\n充值时间：2019-01-01\r\n充值费用：100\r\n充值量：100\r\n请点击查看',
    modify_time: '2019-12-12 12:09:45'
  },
  {
    id: 'OPENTM418056339',
    title: '访客预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n小区：{{keyword1.DATA}}\n车牌号：{{keyword2.DATA}}\n联系电话：{{keyword3.DATA}}\n来访时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '欢迎光临本小区，请规范停车。\r\n小区：中海万锦熙岸\r\n车牌号：闽D11111\r\n联系电话：13200000000\r\n来访时间：2020年1月1日\r\n感谢使用',
    modify_time: '2019-12-12 12:11:25'
  },
  {
    id: 'OPENTM418047292',
    title: '宿舍费用申报成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n当月水费：{{keyword1.DATA}}\n当月电费：{{keyword2.DATA}}\n当月气费：{{keyword3.DATA}}\n房租费用：{{keyword4.DATA}}\n合计费用：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '张三(11001221)你宿舍1507当月费用已成功申报，以下为费用明细：\r\n当月水费：18元\r\n当月电费：66元\r\n当月气费：26元\r\n房租费用：60元\r\n合计费用：170元\r\n费用若有误，请及时修改！',
    modify_time: '2019-11-26 12:05:34'
  },
  {
    id: 'OPENTM418047293',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n房屋地址：{{keyword1.DATA}}\n缴费项目：{{keyword2.DATA}}\n缴费金额：{{keyword3.DATA}}\n缴费时间：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '水费\r\n房屋地址：合肥市悠然居1#101\r\n缴费项目：水费\r\n缴费金额：234.54\r\n缴费时间：2019-01-01 12:00:00\r\n缴费成功，感谢使用，祝生活愉快！',
    modify_time: '2019-11-26 12:07:55'
  },
  {
    id: 'OPENTM418056394',
    title: '天然气预警报警提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n报警时间：{{keyword1.DATA}}\n报警位置：{{keyword2.DATA}}\n报警级别：{{keyword3.DATA}}\n报警内容：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '你好\r\n报警时间：2014年7月21日 18:36\r\n报警位置：1楼厨房\r\n报警级别：低报\r\n报警内容：1楼厨房弄出25，超出阈值\r\n请及时处理',
    modify_time: '2019-12-12 14:10:35'
  },
  {
    id: 'OPENTM418073250',
    title: '访客来访变更时间成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '访客来访预约变更成功通知\r\n访客姓名：张三\r\n到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2020-01-03 11:49:53'
  },
  {
    id: 'OPENTM418062101',
    title: '缴费成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n缴费金额：{{keyword1.DATA}}\n缴费方式：{{keyword2.DATA}}\n业主姓名：{{keyword3.DATA}}\n房源地址：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '物业费、车位租金\r\n缴费金额：¥504.90\r\n缴费方式：线上缴费\r\n业主姓名：张三\r\n房源地址：宏业大厦8栋A单元8-2\r\n具体信息请查看详情&amp;amp;amp;gt;&amp;amp;amp;gt;',
    modify_time: '2019-12-20 21:28:16'
  },
  {
    id: 'OPENTM418056452',
    title: '电表电量不足提醒通知',
    class1: '房地产',
    class2: '物业',
    person_used: 3,
    content: '{{first.DATA}}\n电表名称：{{keyword1.DATA}}\n电表剩余电量：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '您好，您的电表剩余电量不足，请及时充值\r\n电表名称：华新园A栋1201\r\n电表剩余电量：100度\r\n为了避免欠费断电，请关注物业公众号缴费充值，如有疑问，请联系物业。',
    modify_time: '2019-12-12 16:24:17'
  },
  {
    id: 'OPENTM418069702',
    title: '访客预约来访审核提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n来访日期：{{keyword2.DATA}}\n来访事由：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '业主您好，您有一条访客预约待审批\r\n访客姓名：朱皇\r\n来访日期：2019年12月25日\r\n来访事由：商务\r\n请点击查看详情并处理，感谢您的使用',
    modify_time: '2020-01-01 13:02:47'
  },
  {
    id: 'OPENTM418073311',
    title: '车辆授权结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n车牌号：{{keyword1.DATA}}\n项目名称：{{keyword2.DATA}}\n审批时间：{{keyword3.DATA}}\n车辆权限：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '单位用户【车安科技】\r\n车牌号：粤B 88888\r\n项目名称：麻勘村项目\r\n审批时间：2019-10-10 12:12\r\n车辆权限：团体月租\r\n点击详情可前往激活权限',
    modify_time: '2020-01-03 13:15:34'
  },
  {
    id: 'OPENTM418075861',
    title: '维修结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n报修人员：{{keyword1.DATA}}\n报修内容：{{keyword2.DATA}}\n维修人员：{{keyword3.DATA}}\n维修反馈：{{keyword4.DATA}}\n通知时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '业主的报修未解决\r\n报修人员：张三\r\n报修内容：客厅漏水\r\n维修人员：李四\r\n维修反馈：漏水问题未解决\r\n通知时间：2019-12-13 13:14:50\r\n备注',
    modify_time: '2020-01-07 11:15:53'
  },
  {
    id: 'OPENTM418058316',
    title: '投诉处理结果通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n工单编号：{{keyword1.DATA}}\n房屋编号：{{keyword2.DATA}}\n投诉主题：{{keyword3.DATA}}\n跟进处理人：{{keyword4.DATA}}\n完成时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '尊敬的业主您好，您的投诉任务已经处理完毕，给您带来不便请谅解！\r\n工单编号：SZAREA_GZGS20140800\r\n房屋编号：西安万科城二期19号楼2402\r\n投诉主题：房屋窗户漏水。\r\n跟进处理人：工程师赵威，联系电话13888888888\r\n完成时间：2014.09.25\r\n如有疑问， 请拨打服务热线4008888888',
    modify_time: '2019-12-16 14:19:46'
  },
  {
    id: 'OPENTM418069720',
    title: '投诉建议处理进展通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n所在小区：{{keyword1.DATA}}\n主题：{{keyword2.DATA}}\n上报时间：{{keyword3.DATA}}\n当前进展：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '亲爱的小花，您的投诉正在处理。\r\n所在小区：安居小区\r\n主题：大门保安态度恶劣\r\n上报时间：2019年12月25日\r\n当前进展：已联系保安部进行教育处理\r\n如有其它疑问，欢迎来C2栋物业来反馈。',
    modify_time: '2020-01-01 13:48:29'
  },
  {
    id: 'OPENTM418062024',
    title: '拜访预约取消提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 2,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n访客手机：{{keyword2.DATA}}\n预约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，张杉取消了拜访预约，请留意。谢谢。\r\n访客姓名：张杉\r\n访客手机：12233334444\r\n预约时间：2019-12-16 08:30\r\n详情',
    modify_time: '2019-12-20 20:04:34'
  },
  {
    id: 'OPENTM418066075',
    title: '访客来访已离开成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n访客姓名：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '访客来访已离开成功通知\r\n访客姓名：张三\r\n到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2019-12-26 22:04:54'
  },
  {
    id: 'OPENTM418077126',
    title: '拜访预约送达提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n被拜访人姓名：{{keyword1.DATA}}\n被拜访人手机：{{keyword2.DATA}}\n拜访预约时间：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '你好，你发起的拜访预约申请已送达被拜访者。\r\n被拜访人姓名：李思\r\n被拜访人手机：13344445555\r\n拜访预约时间：2019-12-12 08:30\r\n请耐心等待被拜访人的回复。',
    modify_time: '2020-01-09 21:48:02'
  },
  {
    id: 'OPENTM418073231',
    title: '访客去访预约成功通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n被约人：{{keyword1.DATA}}\n到访时间：{{keyword2.DATA}}\n{{remark.DATA}}',
    example: '访客名片预约去访成功通知\r\n被约人：张三\r\n到访时间：2014年7月21日 18:36\r\n感谢你的使用',
    modify_time: '2020-01-03 11:39:24'
  },
  {
    id: 'OPENTM418064482',
    title: '设备故障提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 1,
    content: '{{first.DATA}}\n设备类型：{{keyword1.DATA}}\n所在小区：{{keyword2.DATA}}\n设备编码：{{keyword3.DATA}}\n故障原因：{{keyword4.DATA}}\n故障时间：{{keyword5.DATA}}\n{{remark.DATA}}',
    example: '有设备发生故障\r\n设备类型：手机开门\r\n所在小区：厦门 - 中央天成\r\n设备编码：10栋1层\r\n故障原因：连续两次开门失败\r\n故障时间：2019年12月18日 17:02\r\n请马上处理。',
    modify_time: '2019-12-24 19:56:44'
  },
  {
    id: 'OPENTM418058240',
    title: '智能锁密码发放通知',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n业主姓名：{{keyword1.DATA}}\n房屋坐落：{{keyword2.DATA}}\n密码：{{keyword3.DATA}}\n失效日期：{{keyword4.DATA}}\n{{remark.DATA}}',
    example: '智能锁密码已发放\r\n业主姓名：张三\r\n房屋坐落：XX公寓1#303\r\n密码：123456\r\n失效日期：2019-12-30 13:00:00\r\n请妥善保管密码，感谢您的使用。',
    modify_time: '2019-12-16 12:59:01'
  },
  {
    id: 'OPENTM418058244',
    title: '投诉处理提醒',
    class1: '房地产',
    class2: '物业',
    person_used: 0,
    content: '{{first.DATA}}\n投诉商户：{{keyword1.DATA}}\n商铺地址：{{keyword2.DATA}}\n投诉内容：{{keyword3.DATA}}\n{{remark.DATA}}',
    example: '您好，您有一条投诉需要处理\r\n投诉商户：张三\r\n商铺地址：A座1楼XX路XX号\r\n投诉内容：我的店铺墙面有裂痕\r\n请尽快处理。',
    modify_time: '2019-12-16 13:04:15'
  }
];
