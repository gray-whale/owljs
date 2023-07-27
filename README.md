# owljs
前端监控 SDK

## Web 监控 SDK

支持的插件有：

* PV插件
* JS错误插件
* 面包屑插件
* 静态资源性能插件
* 静态资源错误插件
* XHR监控插件
* Fetch监控插件
* 性能监控相关插件
* 白屏插件

### 步骤一：接入SDK

接入SDK有两种方式：NPM包接入和CDN接入。

两种接入方式主要有以下区别：

* 升级：升级SDK版本时，NPM接入需要手动更新版本并重新上线，CDN接入不用手动更新，永远能拉取到最新版本的SDK。
* 监控时机：NPM包最终会被打包到业务代码里，CDN接入是直接在html中插入一段脚本，脚本会预先开始收集异常。所以相对来说，CDN接入方式监控异常的时机较早。

因此，两种接入方式中，推荐使用CDN接入。

#### NPM

##### 前提条件
已安装NPM。NPM的安装和使用，请参见[官方文档](https://docs.npmjs.com/getting-started)。

##### 操作步骤
1. 执行以下命令，安装SDK。

```ts
npm install @owl-js/web
```

2. 修改代码，接入SDK。

```ts
// 在项目最开始的地方引入下面的代码
import browserClient  from '@owl-js/web'// 配置参数

browserClient('init', {
 aid: 'xxxxx', // 应用唯一标识，必填参数
 token:'xxx-xxx' // 应用 token,必填参数
})

// 开启上报
browserClient('start')
```

#### CDN（推荐）
在html的head标签顶部添加以下代码即可。

```html
<script>
        !function(e,t,r,n,a){var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.push(Date.now(),location.href),("precollect"==e[0]?o.p.a:o.q).push(e)};o.q=[],o.p={a:[]},e[a]=o;var s=document.createElement("script");s.src=r+"?aid="+n+"&globalName="+a,s.crossOrigin="anonymous",t.getElementsByTagName("head")[0].appendChild(s),"addEventListener"in e&&(o.pcErr=function(t){var r=t||e.event,n=r.target||r.srcElement;n instanceof Element||n instanceof HTMLElement?e[a]("precollect","st",{tagName:n.tagName,url:n.getAttribute("href")||n.getAttribute("src")}):e[a]("precollect","err",r.error||r.message)},o.pcRej=function(t){var r=t||e.event;e[a]("precollect","err",r.reason||r.detail&&r.detail.reason)},e.addEventListener("error",o.pcErr,!0),e.addEventListener("unhandledrejection",o.pcRej,!0)),"PerformanceLongTaskTiming"in e&&(o.pp={entries:[]},o.pp.observer=new PerformanceObserver((function(e){o.pp.entries=o.pp.entries.concat(e.getEntries())})),o.pp.observer.observe({entryTypes:["longtask","largest-contentful-paint","layout-shift"]}))}(window,document,"https://www.unpkg.com/@owl-js/web@latest/cdn/browser.js","aid","browserClient");
</script>
<script>
  window.browserClient("init", {
      aid: aidInput.value,
      token: 'xxx-xxx',
      domain: 'http://localhost:3000'
  });
  window.browserClient("start");
</script>
```

参考下列步骤，传入相应的配置，初始化 SDK 。

```js
window.browserClient("init",{
  aid:0,
  token: 'xxx-xxx'
});
window.browserClient("start");
```

## 小程序监控 SDK
### 已支持小程序平台
* 微信小程序
* 字节小程序
* 支付宝小程序
* 百度小程序
* 飞书小程序

### 已支持三方框架
* Taro
* Uni App

### 支持的插件

* PV插件
* JS错误插件
* 面包屑插件
* XHR监控插件
* 性能监控相关插件
* 页面性能监控插件
* 应用启动性能监控插件
* setData 监控插件

### 步骤一：接入SDK
#### 原生小程序接入
##### CJS（推荐）
相对于NPM，CJS接入方式省去构建NPM的步骤。

1. 获取SDK。

* 微信平台SDK地址：[CJS](https://www.unpkg.com/@owl-js/mini-program@latest/lib/wx.cjs.js)、[ESM](https://www.unpkg.com/@owl-js/mini-program@latest/lib/wx.esm.js)
* 抖音平台SDK地址：[CJS](https://www.unpkg.com/@owl-js/mini-program@latest/lib/tt.cjs.js)、[ESM](https://www.unpkg.com/@owl-js/mini-program@latest/lib/tt.esm.js)
* 支付宝平台SDK地址：[CJS](https://www.unpkg.com/@owl-js/mini-program@latest/lib/my.cjs.js)、[ESM](https://www.unpkg.com/@owl-js/mini-program@latest/lib/my.esm.js)
* 百度平台SDK地址：[CJS](https://www.unpkg.com/@owl-js/mini-program@latest/lib/swan.cjs.js)、[ESM](https://www.unpkg.com/@owl-js/mini-program@latest/lib/swan.esm.js)
* 飞书平台SDK地址：[CJS](https://www.unpkg.com/@owl-js/mini-program@latest/lib/lark.cjs.js)、[ESM](https://www.unpkg.com/@owl-js/mini-program@latest/lib/lark.esm.js)
<!-- * [钉钉平台SDK地址]() -->

将SDK地址下的内容复制并放在 `小程序/monitor/index.js` 文件中。

1. 接入并初始化。

* 使用node module(require)方式集成，将以下内容添加至 app.js 文件中，完成初始化。

```js
// app.js
const client = require('./monitor/index.js');
client.init({
  aid: 123, // 替换成您的aid
  token:'xxx-xxx' // 替换成您的token
})    
client.start()

// App({...})
```

* 使用ES module(import)方式集成，将以下内容添加至 app.js 文件中，完成初始化。

```js
// app.js
import client from './monitor/index.js'
client.init({
  aid: 123, // 替换成您的aid
  token:'xxx-xxx' // 替换成您的token
})    
client.start()

// App({...})
```

##### NPM
NPM方式接入SDK需要引入指定小程序的适配层。

所有平台的适配层如下所示：

* 微信小程序平台：WxAdapter
* 抖音小程序平台：TtAdapter
* 支付宝小程序平台：MyAdapter
* 百度小程序平台：SwanAdapter
* 飞书小程序平台：LarkAdapter

1. 小程序接入NPM。每个小程序平台都有各自NPM的接入方式，例如： [微信小程序NPM接入指南](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html) 。
2. 安装NPM。

```shell
npm install @owl-js/mini-program
```

3. 将以下代码添加到app.js文件中，接入并初始化。

```js
// app.js
import { createMiniProgramClient, WxAdapter } from '@owl-js/mini-program'
const client = createMiniProgramClient([WxAdapter])
client.init({
  aid: 123, // 替换成您的aid
  token:'xxx-xxx' // 替换成您的token
})
client.start()

// App({...})
```

#### 三方框架接入
##### NPM(推荐)
```shell
npm install @owl-js/mini-program
```

1. Taro

Taro支持产物为微信小程序、抖音小程序、支付宝小程序、百度小程序

* 如果您的产物是一个平台，以微信小程序为例。将以下内容添加至 app.js 文件中以完成初始化。
```js
// app.js
import { createMiniProgramClient, WxAdapter } from '@owl-js/mini-program';

const client = createMiniProgramClient([WxAdapter]);
if (client) {
  client.init({
    aid: 123, // 替换成您的aid
    token:'xxx-xxx' // 替换成您的token
  });
  client.start();
}
// class App extends Component {
```

* 如果您的产物是多个平台，那么可以用环境变量TARO_ENV的方式按需引入正确的适配层。例如您要编译两个端：微信小程序、抖音小程序的产物。

1. 添加微信小程序对应的文件wx.js。

```js
// wx.js
import { createMiniProgramClient, WxAdapter } from '@owl-js/mini-program'
const client = createMiniProgramClient([WxAdapter])
export default client
```

2. 添加抖音小程序对应的文件tt.js。

```js
// tt.js
import { createMiniProgramClient, TtAdapter } from '@owl-js/mini-program'
const client = createMiniProgramClient([TtAdapter])
export default client
```

3. 在app.js中根据环境名TARO_ENV动态引入指定文件。

```js
// app.js
let client
if (process.env.TARO_ENV === 'weapp') {
  client = require('./wx').default
} else if (process.env.TARO_ENV === 'tt') {
  client = require('./tt').default
}
if (client) {
  client.init({
    aid: 123, // 替换成您的aid
    token:'xxx-xxx' // 替换成您的token
  })
  client.start()
}
// class App extends Component {
```

* 如果您的产物下包含支付宝小程序平台，则需要额外配置一个integration。
  
```js
import Taro from '@tarojs/taro';
import { createMiniProgramClient, MyAdapter, FrameworksAdapterIntegration } from '@owl-js/mini-program';
const client = createMiniProgramClient([MyAdapter]);
if (client) {
  client.init({
    aid: 123, // 替换成您的aid
    token:'xxx-xxx' // 替换成您的token
    integrations: [FrameworksAdapterIntegration({ Taro })],
  });
  client.start();
}
```

2. Uni app

Uni app也支持产物为微信小程序、抖音小程序、支付宝小程序、百度小程序。如果你的产物是多个平台，可以用条件编译按需引入正确的适配层，示例代码如下：

```js
import { createMiniProgramClient, WxAdapter, TtAdapter } from '@owl-js/mini-program'

const getCorrectAdapter = () => {
  switch (process.env.VUE_APP_PLATFORM) {
    case 'mp-weixin':
      return [WxAdapter]
    case 'mp-toutiao':
      return [TtAdapter]
    default:
      return null
  }
}

const client = createMiniProgramClient(getCorrectAdapter())
if (client) {
  client.init({
    aid: 123, // 替换成您的aid
    token:'xxx-xxx' // 替换成您的token
  })
  client.start()
}
```


> Uni App版本不同导致环境变量名不同，需根据实际业务场景进行代码优化。


