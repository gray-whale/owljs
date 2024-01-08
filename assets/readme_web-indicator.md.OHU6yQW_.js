import{_ as t,c as d,o as r,U as e,a6 as a}from"./chunks/framework.2wf1fOOO.js";const m=JSON.parse('{"title":"指标说明","description":"","frontmatter":{},"headers":[],"relativePath":"readme/web-indicator.md","filePath":"readme/web-indicator.md","lastUpdated":1704694661000}'),o={name:"readme/web-indicator.md"},n=e('<h1 id="指标说明" tabindex="-1">指标说明 <a class="header-anchor" href="#指标说明" aria-label="Permalink to &quot;指标说明&quot;">​</a></h1><h2 id="用户分析指标" tabindex="-1">用户分析指标 <a class="header-anchor" href="#用户分析指标" aria-label="Permalink to &quot;用户分析指标&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>PV</td><td>Page View，页面访问次数。对上报的pageview根据view_id去重。</td></tr><tr><td>UV</td><td>User View，用户访问次数。对上报的pageview根据user_id去重。</td></tr><tr><td>Session</td><td>用户会话访问次数，从进入页面到关闭页面作为一次会话。对上报的pageview根据session_id去重。</td></tr></tbody></table><h2 id="js错误指标" tabindex="-1">JS错误指标 <a class="header-anchor" href="#js错误指标" aria-label="Permalink to &quot;JS错误指标&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>错误数</td><td>JS错误发生的PV数</td></tr><tr><td>错误率</td><td>JS错误发生的PV数/总PV</td></tr><tr><td>影响用户数</td><td>发生JS错误的UV数</td></tr><tr><td>影响用户率</td><td>发生JS错误的UV数/总UV</td></tr></tbody></table><h2 id="请求总览" tabindex="-1">请求总览 <a class="header-anchor" href="#请求总览" aria-label="Permalink to &quot;请求总览&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>请求数</td><td>请求数量</td></tr><tr><td>用户数</td><td>发生请求的UV</td></tr><tr><td>慢请求数</td><td>超过慢请求阈值的请求数量</td></tr><tr><td>慢请求率</td><td>慢请求数/总请求上报数</td></tr><tr><td>慢请求影响用户数</td><td>发生慢请求的UV</td></tr><tr><td>慢请求影响用户率</td><td>慢请求影响用户数/总请求数UV</td></tr><tr><td>错误数</td><td>状态码&gt;=400的请求数</td></tr><tr><td>错误率</td><td>错误数/请求数（状态码!=0）</td></tr><tr><td>影响用户数</td><td>发生请求错误的UV</td></tr><tr><td>影响用户率</td><td>影响用户数/请求数总上报量按user_id去重</td></tr><tr><td>请求耗时</td><td>timing.duration != 0。取浏览器记录的resource timing中的duration，通过 performance.getEntriesByName(url)获取的, 这是真实耗时。</td></tr><tr><td>SDK打点耗时</td><td>SDK侧上报了两个耗时，一个是请求耗时，另一个是请求打点耗时，是SDK在请求开始打一个点，请求结束打一个点，得到的打点耗时。这个耗时一般情况下相比于请求耗时偏长，因为包含了浏览器事件循环的时间。异常情况下，也存在打点耗时 &lt; 请求耗时的情况，因为某些请求的响应时间很长，而打点耗时只知道responseStart的时机，所以在responseStart时标记为结束的，而非responseEnd。</td></tr></tbody></table><h2 id="请求指标" tabindex="-1">请求指标 <a class="header-anchor" href="#请求指标" aria-label="Permalink to &quot;请求指标&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>请求成功数</td><td>状态码&lt;400 &amp;&amp; 状态码!=0</td></tr><tr><td>请求成功率</td><td>请求成功数 / 请求数(状态码!=0)</td></tr><tr><td>请求取消数</td><td>请求数(状态码=0)</td></tr><tr><td>请求错误数</td><td>状态码&gt;=400</td></tr><tr><td>请求错误率</td><td>请求错误数 / 请求数(状态码!=0)</td></tr><tr><td>请求错误影响用户数</td><td>发生请求错误的UV数</td></tr><tr><td>Redirect耗时</td><td>redirectEnd - redirectStart。重定向没有发生，或者其中一个重定向非同源，则该值为 0。</td></tr><tr><td>Cache耗时</td><td>domainLookupStart - fetchStart</td></tr><tr><td>DNS耗时</td><td>domainLookupEnd - domainLookupStart。域名解析耗时，命中解析缓存时为0。</td></tr><tr><td>TCP耗时</td><td>connectEnd - connectStart。TCP连接耗时。</td></tr><tr><td>SSL耗时</td><td>connectEnd - secureConnectionStart。SSL安全连接耗时。</td></tr><tr><td>Request耗时</td><td>responseStart - requestStart。SSL链接建立好后，从客户端发送到服务端首次响应的耗时。</td></tr><tr><td>Response耗时</td><td>responseEnd - responseStart。从服务端首次响应到数据完全响应完的耗时。</td></tr></tbody></table><h2 id="静态资源监控" tabindex="-1">静态资源监控 <a class="header-anchor" href="#静态资源监控" aria-label="Permalink to &quot;静态资源监控&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>加载数</td><td>加载静态资源的数量</td></tr><tr><td>用户数</td><td>加载静态资源的UV</td></tr><tr><td>慢加载数</td><td>超过慢加载阈值的加载数量</td></tr><tr><td>慢加载率</td><td>慢加载数/总上报数</td></tr><tr><td>慢资源影响用户数</td><td>超过慢加载阈值的用户数</td></tr><tr><td>慢资源影响用户率</td><td>慢资源影响用户数/总UV</td></tr><tr><td>错误数</td><td>上报的错误静态资源数。利用window.addEventListener采集的静态资源错误</td></tr><tr><td>错误率</td><td>发生静态资源错误的PV / 总PV</td></tr><tr><td>影响用户数</td><td>上报的错误静态资源数的UV</td></tr><tr><td>影响用户率</td><td>发生静态资源错误的UV / 总UV</td></tr><tr><td>Redirect耗时</td><td>redirectEnd - redirectStart</td></tr><tr><td>Cache耗时</td><td>domainLookupStart - fetchStart</td></tr><tr><td>DNS耗时</td><td>domainLookupEnd - domainLookupStart</td></tr><tr><td>TCP耗时</td><td>connectEnd - connectStart</td></tr><tr><td>SSL耗时</td><td>connectEnd - secureConnectionStart</td></tr><tr><td>Request耗时</td><td>responseStart - requestStart</td></tr><tr><td>Response耗时</td><td>responseEnd - responseStart</td></tr><tr><td>静态资源缓存命中率</td><td>transferSize = 0</td></tr></tbody></table><h2 id="性能监控" tabindex="-1">性能监控 <a class="header-anchor" href="#性能监控" aria-label="Permalink to &quot;性能监控&quot;">​</a></h2><p><img src="'+a+'" alt=""></p><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>FP</td><td>FP (First Paint) ，即首次渲染的时间点，在性能统计指标中，从用户开始访问 Web 页面的时间点到 FP 的时间点这段时间可以被视为白屏时间，也就是说在用户访问 Web 网页的过程中，FP 时间点之前，用户看到的都是没有任何内容的白色屏幕，用户在这个阶段感知不到任何有效的工作在进行。</td></tr><tr><td>FCP</td><td>FCP (First Contentful Paint) ，即首次有内容渲染的时间点，在性能统计指标中，从用户开始访问 Web 页面的时间点到 FCP 的时间点这段时间可以被视为无内容时间，也就是说在用户访问 Web 网页的过程中，FCP 时间点之前，用户看到的都是没有任何实际内容的屏幕，用户在这个阶段获取不到任何有用的信息。</td></tr><tr><td>LCP</td><td>LCP（Largest Contentful Paint），即最大内容绘制时间，是 Core Web Vitals 度量标准，用于度量视口中最大的内容元素何时可见。它可以用来确定页面的主要内容何时在屏幕上完成渲染。</td></tr><tr><td>FMP</td><td>FMP（First Meaningful Paint），即首次绘制有意义内容的时间，当整体页面的布局和文字内容全部渲染完成后，即可认为是完成了首次有意义内容的绘制。新版逐渐废弃。</td></tr><tr><td>CLS</td><td>CLS（Cumulative Layout Shift），即累计布局偏移，是对在页面的整个生命周期中发生的每一次意外布局变化的最大布局变化得分的度量。</td></tr><tr><td>FID</td><td>FID（First Input Delay），即首次输入延迟，是度量用户第一次与页面交互的延迟时间，是用户第一次与页面交互到浏览器真正能够开始处理事件处理程序以响应该交互的时间。</td></tr><tr><td>MPFID</td><td>MPFID（Max Potential FID），即最大首次输入延迟，测量的是用户可能经历的最坏的首次输入延迟，是FCP之后的 longest task。</td></tr><tr><td>LOAD</td><td>LOAD，反映页面及其依赖资源全部加载完成的时间。在服务端路由场景下，LOAD 指标对应页面 load 事件发生的时间。根据 Navigation Timing 2.0 定义的页面加载阶段模型，同步跳转场景下，LOAD 的计算方式为：LOAD = loadEventStart - fetchStart。</td></tr><tr><td>TTI</td><td>TTI（Time to Interactive），即完全可交互时间，是一种非标准化的 Web 性能“进度”指标，定义为上一个“longtask”完成时的时间点，紧随其后的是5秒钟的网络和主线程处于不活动状态。</td></tr><tr><td>TTFB</td><td>TTFB（Time To First Byte），即首字节网络请求耗时，发出页面请求到接收到应答数据第一个字节的时间。</td></tr><tr><td>DomReady</td><td>domContentLoadedEventEnd - fetchStart 执行完所有同步脚本的耗时</td></tr><tr><td>Dom解析</td><td>domInteractive - responseEnd 从请求响应结束至Dom可交互的耗时</td></tr><tr><td>Processing</td><td>domComplete - domLoading Dom解析开始至结束的耗时</td></tr><tr><td>ResourceLoad</td><td>loadEventStart - domContentLoadedEventEnd Dom解析完后资源加载的耗时</td></tr><tr><td>Redirect</td><td>redirectEnd - redirectStart 重定向没有发生，或者其中一个重定向非同源，则该值为 0</td></tr><tr><td>DNS</td><td>domainLookupEnd - domainLookupStart 域名解析耗时（命中解析缓存时为0）</td></tr><tr><td>TCP</td><td>connectEnd - connectStart TCP连接耗时</td></tr><tr><td>SSL</td><td>connectEnd - secureConnectionStart SSL安全连接耗时</td></tr><tr><td>Request</td><td>responseStart - requestStart 在SSL链接建立后，从客户端发送至服务端首次响应的耗时</td></tr><tr><td>Response</td><td>responseEnd - responseStart 从服务端首次响应至数据完全响应完的耗时</td></tr><tr><td>longtask数</td><td>longtask的数量 / pageview 的数量，代表平均一次PV有多少个longtask</td></tr><tr><td>longtask耗时</td><td>longtask 总耗时 / pageview 的数量， 代表一次PV平均累计有多长的longtask</td></tr></tbody></table><h2 id="性能指标跳出率" tabindex="-1">性能指标跳出率 <a class="header-anchor" href="#性能指标跳出率" aria-label="Permalink to &quot;性能指标跳出率&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>FP跳出率</td><td>在FP上报前跳出页面的会话数 / 总会话数</td></tr><tr><td>FCP跳出率</td><td>在FCP上报前跳出页面的会话数 / 总会话数</td></tr><tr><td>LCP跳出率</td><td>在LCP上报前跳出页面的会话数 / 总会话数</td></tr><tr><td>Load跳出率</td><td>在Load上报前跳出页面的会话数 / 总会话数</td></tr></tbody></table><h2 id="白屏指标" tabindex="-1">白屏指标 <a class="header-anchor" href="#白屏指标" aria-label="Permalink to &quot;白屏指标&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>白屏数</td><td>发生白屏的次数</td></tr><tr><td>白屏影响用户数</td><td>发生白屏的uv数</td></tr></tbody></table><h2 id="自定义日志" tabindex="-1">自定义日志 <a class="header-anchor" href="#自定义日志" aria-label="Permalink to &quot;自定义日志&quot;">​</a></h2><table><thead><tr><th>指标</th><th>说明</th></tr></thead><tbody><tr><td>样本量</td><td>自定义上报的总数</td></tr></tbody></table>',20),i=[n];function s(h,l,c,S,b,u){return r(),d("div",null,i)}const p=t(o,[["render",s]]);export{m as __pageData,p as default};
