import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a,b as n,d as e,e as t,r as p}from"./app.46ccea64.js";const l={},o={href:"https://github.com/Genymobile/scrcpy",target:"_blank",rel:"noopener noreferrer"},d=a("p",null,"市面上主流的多屏协同软件都是基于 scrcpy 开发的套壳产品，bug 也没修复，推荐直接使用官方的 scrcpy。",-1),m={href:"https://github.com/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip",target:"_blank",rel:"noopener noreferrer"},u={href:"https://wwz.lanzouf.com/iezWX03zx4de",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="有线投屏" tabindex="-1"><a class="header-anchor" href="#有线投屏" aria-hidden="true">#</a> 有线投屏</h2><ol><li>下载并解压 scrcpy。</li><li>手机端开启 <code>开发者选项</code> 及 <code>USB 调试</code>。开发者选项默认情况下处于隐藏状态，转到「设置」&gt;「关于手机」，然后点按版本号七次，返回上一屏幕，在底部可以找到开发者选项。</li><li>用数据线将手机和电脑连接起来，此时手机上弹出授权提示，点击 <code>允许 USB 调试</code>。</li><li>双击解压得到的 <strong>scrcpy.exe</strong> 文件，就能进行有线投屏了。</li></ol><h2 id="无线投屏" tabindex="-1"><a class="header-anchor" href="#无线投屏" aria-hidden="true">#</a> 无线投屏</h2><p>无线投屏的前提是，<strong>电脑与手机处于同一局域网</strong>。</p><p>有线投屏中的前三步同样适用于无线投屏，完成后以上步骤后打开 PowerShell (~ cmd)，依次输入操作命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># a.将命令目录切换 scrcpy 文件夹。Win11 在 scrcpy 文件夹中右键「在终端中打开」，会自动切换到当前路径。</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>scrcpy-win64-v1.24
​
<span class="token comment"># b.在手机端开启「开发者选项」及「USB 调试」，然后使用数据线将手机和电脑连接并允许 USB 调试，开启手机端口。</span>
.<span class="token punctuation">\\</span>adb tcpip <span class="token number">5555</span>

<span class="token comment"># 如果本行显示 no device 或未启动 adb，需检查「USB 调试」是否开启，或更换数据线。</span>
<span class="token comment"># 此外，一些手机需选择「文件传输」模式方能使用 adb。</span>
​
<span class="token comment"># c.拔出手机数据线，开始无线投屏。(192.168.2.20 为手机端的 WIFI 局域网 ip，需更改)</span>
.<span class="token punctuation">\\</span>adb connect <span class="token number">192.168</span>.2.20:5555
​
<span class="token comment"># d.启动 scrcpy.exe</span>
.<span class="token punctuation">\\</span>scrcpy

<span class="token comment"># 如有报错或延迟较大，可启动低分辨率投屏</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">-m</span> <span class="token number">1024</span>
<span class="token comment"># 连接多个设备，报错提示\`failed to get feature set: more than one device/emulator\`，则指定连接 tcpip 设备</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">-e</span> <span class="token parameter variable">-m</span> <span class="token number">1024</span>
<span class="token comment"># 简化操作：合并步骤 c 和 d，保持屏幕常亮，使用 1024 分辨率</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">--tcpip</span><span class="token operator">=</span><span class="token number">192.168</span>.2.20 <span class="token parameter variable">-w</span> <span class="token parameter variable">-m</span> <span class="token number">1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><figure><img src="http://tc.seoipo.com/20190829093407.png" alt="" title="scrcpy 命令行截图" loading="lazy"><figcaption>scrcpy 命令行截图</figcaption></figure></p><h2 id="屏幕录制" tabindex="-1"><a class="header-anchor" href="#屏幕录制" aria-hidden="true">#</a> 屏幕录制</h2><p>如果想在投屏的同时，对手机屏幕进行录制，则输入按下方命令操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将命令目录切换到 scrcpy 文件夹</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>scrcpy-win64-v1.24
​
<span class="token comment"># 开始录制，录屏文件会以命令指定的文件名自动保存在当前文件夹内。</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">-r</span> filename.mp4
​
<span class="token comment"># 关闭投屏窗口后，自动停止录屏并将视频保存在相应目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="错误检查" tabindex="-1"><a class="header-anchor" href="#错误检查" aria-hidden="true">#</a> 错误检查</h3><p>遇到报错时，检查下方三种情况，可以解决 90% 的错误。</p><ul><li>更换数据线；</li><li>检查手机的「本机 IP」是否正确；</li><li>核对有线连接步骤，选择「开启 USB 调试」&gt;「连接手机与电脑」&gt;「启动 scrcpy」。</li></ul><h3 id="error-exception-on-thread" tabindex="-1"><a class="header-anchor" href="#error-exception-on-thread" aria-hidden="true">#</a> ERROR: Exception on thread</h3><p>报错 <code>ERROR: Exception on thread Thread[main,5,main]</code>，多为手机不兼容 scrcpy 默认分辨率设置。解决方位为，按下方修改 scrcpy 启动代码，使用较低的分辨率。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 三项设置，任选其一</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">-m</span> <span class="token number">1920</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">-m</span> <span class="token number">1024</span>
.<span class="token punctuation">\\</span>scrcpy <span class="token parameter variable">-m</span> <span class="token number">800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="投屏模糊" tabindex="-1"><a class="header-anchor" href="#投屏模糊" aria-hidden="true">#</a> 投屏模糊</h3><p>如果屏幕设置了缩放比例，投屏界面会模糊。右键单击 scrcpy.exe，点击「属性」&gt;「兼容性」&gt;「更改高 DPI 设置」，然后勾选「替代高 DPI 缩放行为」，应用后投屏恢复正常。</p><p><figure><img src="http://tc.seoipo.com/20190829095640.png" alt="" title="解决 scrcpy 投屏模糊" loading="lazy"><figcaption>解决 scrcpy 投屏模糊</figcaption></figure></p>`,20),b={href:"https://github.com/Genymobile/scrcpy/blob/master/FAQ.md",target:"_blank",rel:"noopener noreferrer"};function h(k,g){const s=p("ExternalLinkIcon");return i(),r("div",null,[a("p",null,[a("a",o,[n("scrcpy"),e(s)]),n(" 是免费开源的投屏软件，支持将安卓手机屏幕投放在 Windows、macOS、GNU/Linux 上，并可直接借助鼠标在投屏窗口中进行交互和录制。")]),d,a("p",null,[n("本文以 Window 投屏为例，进入官方站点下载 "),a("a",m,[n("scrcpy-win64-v1.24.zip"),e(s)]),n("，或使用 "),a("a",u,[n("国内搬运链接"),e(s)]),n("。")]),v,a("p",null,[n("更多问题报错的解决方法，查看 "),a("a",b,[n("scrcpy FAQ"),e(s)]),n("。")])])}const _=c(l,[["render",h],["__file","2019-08-26-scrcpy_screen_projection.html.vue"]]);export{_ as default};
