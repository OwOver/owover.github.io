// 配置
window.Config = {

  // 站点名
  SiteName: 'Ohhh!',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'www.wota.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm788658819-d6f3f2fb188a713c55ab93b8',
    'm787662055-17de8410f399979177b0194b',
    'm787897072-32a3d537513442c7698a94fb',
    'm787047474-25753affafdb756af027ee6f',
    'm787198993-22e3fc24be8907d30f34622b',
    'm787897075-7c22b609f83c27b5fbf44bc1',
    'm788852499-b6598a7f3b588a4c6c9c730b',
    'm788491743-b152c4c94756848c6246f03a',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://ohhh.site/'
    },
    {
      text: 'SSL Status',
      url: 'https://ohhh.site/ssl'
    }
  ]
};

