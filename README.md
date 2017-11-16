# 爬虫框架调研
## 需要的功能
* 设置项目
  * 针对反爬虫
    * user agent
    * 禁用 Cookie
    * 抓取页面的间隔
    * ip池。检测ip被封时，可动态改。
  * 爬取效率
    * 重复的url不会爬。
    * 分布式爬。
* 抓取页面前
  * 支持回调。一般是做登录。
* 获得页面的响应后
  * 探测页面编码。防止乱码。
  * 支持回调。
* 提取页面数据
  * 支持用 CSS 选择器和 xpath 来解析 HTML。
  * 设置 Cookie。
  * 能模拟用户操作。
* 能动态添加要爬取的页面。

## 框架调研
* node-crawler 暂时不支持无头浏览器。
* [webster](https://github.com/zhuyingda/webster) 支持无头浏览器(puppeteer)。百度的一家伙写的。

