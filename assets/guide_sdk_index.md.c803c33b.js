import{_ as s,o as a,c as n,O as l}from"./chunks/framework.9bd6856a.js";const b=JSON.parse('{"title":"Web SDK接入","description":"","frontmatter":{},"headers":[],"relativePath":"guide/sdk/index.md","filePath":"guide/sdk/index.md","lastUpdated":1685551433000}'),e={name:"guide/sdk/index.md"},p=l(`<h1 id="web-sdk接入" tabindex="-1">Web SDK接入 <a class="header-anchor" href="#web-sdk接入" aria-label="Permalink to &quot;Web SDK接入&quot;">​</a></h1><h2 id="步骤一-接入sdk" tabindex="-1">步骤一：接入SDK <a class="header-anchor" href="#步骤一-接入sdk" aria-label="Permalink to &quot;步骤一：接入SDK&quot;">​</a></h2><p>接入SDK有两种方式：NPM包接入和CDN接入。</p><p>两种接入方式主要有以下区别：</p><ul><li>升级：升级SDK版本时，NPM接入需要手动更新版本并重新上线，CDN接入不用手动更新，永远能拉取到最新版本的SDK。</li><li>监控时机：NPM包最终会被打包到业务代码里，CDN接入是直接在html中插入一段脚本，脚本会预先开始收集异常。所以相对来说，CDN接入方式监控异常的时机较早。</li></ul><p>因此，两种接入方式中，推荐使用CDN接入。</p><h3 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;NPM&quot;">​</a></h3><h4 id="前提条件" tabindex="-1">前提条件 <a class="header-anchor" href="#前提条件" aria-label="Permalink to &quot;前提条件&quot;">​</a></h4><p>已安装NPM。NPM的安装和使用，请参见<a href="https://docs.npmjs.com/getting-started" target="_blank" rel="noreferrer">官方文档</a>。</p><h4 id="操作步骤" tabindex="-1">操作步骤 <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤&quot;">​</a></h4><ol><li>执行以下命令，安装SDK。</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">owl</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">js</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">sdk</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>修改代码，接入SDK。</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在项目最开始的地方引入下面的代码</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> browserClient  </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@owl-js/web-sdk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#676E95;font-style:italic;">// 配置参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">browserClient</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">init</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">aid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 应用唯一标识，必填参数</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx-xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 应用 token,必填参数</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 开启上报</span></span>
<span class="line"><span style="color:#82AAFF;">browserClient</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,14),o=[p];function t(r,c,i,D,d,y){return a(),n("div",null,o)}const F=s(e,[["render",t]]);export{b as __pageData,F as default};
