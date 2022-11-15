import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as n,b as e,d as a,e as s,r as l}from"./app.46ccea64.js";const c={},p=n("p",null,"常年使用搜狗输入法，备份时发现搜狗词库高达 27 万条，其中 99% 的内容是垃圾词条，即使偶尔输入过一次的内容也被输入法记录。更可怕的是，这次词库无法从云端删除，只要你输入过一次，搜狗就永远记住了。",-1),d=n("p",null,[e("这哪里是输入法，根本是个"),n("strong",null,"键盘记录器"),e("。")],-1),u=n("p",null,"之后尝试了各种输入法，百度、讯飞、手心等依旧是键盘记录器，影子输入法开源但不稳定，谷歌拼音停止更新，微软拼音词库收录慢且难以转移，只有小狼毫开源稳定又能多设备同步词库。",-1),h={href:"https://github.com/rime/weasel/releases/download/0.14.3/weasel-0.14.3.0-installer.exe",target:"_blank",rel:"noopener noreferrer"},_={href:"https://wwi.lanzoui.com/iDyF4pdzmni",target:"_blank",rel:"noopener noreferrer"},m=s('<h2 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置" aria-hidden="true">#</a> 基础设置</h2><p>安装小狼毫时，不要修改用户文件夹位置，否则后续输入法定制容易出错。安装好后，右键单击任务栏的小狼毫图标，点击「输入法设定」，勾选输入法（推荐「朙月拼音·简化字」），点击「中」，选择皮肤后即可使用小狼毫输入法了。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p>',2),f={href:"https://github.com/fkxxyz/rime-cloverpinyin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/ssnhd/rime",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/qq_42204675/article/details/86422450",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"扩充词库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩充词库","aria-hidden":"true"},"#"),e(" 扩充词库")],-1),g={href:"https://github.com/Chernfalin/better-rime-dict",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Chernfalin/SuperRimeDict",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gist.github.com/lotem/5440677",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/rime-aca/dictionaries",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"从容量上来说，SuperRime 词库 > BetterRime 词库 > Rime 擴充詞庫，但词库越大错误收录也越多，建议按实际需求选择词库。",-1),q=n("p",null,[e("词库解压后，修改 "),n("code",null,"luna_pinyin.extended.dict.yaml"),e("，选择启用词库范围。"),n("code",null,"mysymbols.yaml"),e(" 对全角和半角符号都做了优化，有其他需求可以自行修改。")],-1),S=n("h2",{id:"双拼方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双拼方案","aria-hidden":"true"},"#"),e(" 双拼方案")],-1),A={href:"https://github.com/rime/rime-double-pinyin",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/rime/rime-double-pinyin/blob/master/double_pinyin_flypy.schema.yaml",target:"_blank",rel:"noopener noreferrer"},R={href:"https://blog.csdn.net/neninee/article/details/83692270",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"double_pinyin_flypy.schema.yaml",-1),W={href:"https://github.com/rime/rime-double-pinyin/issues/6#issuecomment-754367706",target:"_blank",rel:"noopener noreferrer"},z=s(`<p>在 double_pinyin_flypy.schema.yaml 中，找到下方的代码行</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">translator</span><span class="token punctuation">:</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> luna_pinyin
  <span class="token key atrule">prism</span><span class="token punctuation">:</span> double_pinyin_flypy
  <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后换行加入 <code>- &#39;xform/^(.*)$/\\U$1\\E\\t | $1/&#39;</code>。这段是同时显示拼音的核心代码，会显示 <code>{原始输出}|{对应拼音}</code>。</p><h2 id="进阶指南" tabindex="-1"><a class="header-anchor" href="#进阶指南" aria-hidden="true">#</a> 进阶指南</h2><p>小狼毫进阶前，需进入小狼毫默认的用户文档位置，新建 yaml 文档来存储输入法设置修改。如果使用「朙月拼音·简化字」输入法方案，则新建「luna_pinyin_simp.custom.yaml」。<code>%APPDATA%\\Rime</code> 是小狼毫默认的用户文档位置。如果安装时修改过用户文档位置，右键单击任务栏小狼毫图标，选「用户文件夹」，即会进入用户文档。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p>`,5),D={href:"https://github.com/rime/home/wiki/CustomizationGuide",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/rime/home/wiki/RimeWithSchemata#rime-%E4%B8%AD%E7%9A%84%E6%95%B8%E6%93%9A%E6%96%87%E4%BB%B6%E5%88%86%E4%BD%88%E5%8F%8A%E4%BD%9C%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/rime/rime-emoji",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/rime/home/wiki/CustomizationGuide#%E6%A8%A1%E7%B3%8A%E9%9F%B3",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/rime/home/wiki/UserGuide#%E5%90%8C%E6%AD%A5%E7%94%A8%E6%88%B6%E8%B3%87%E6%96%99",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"installation.yaml",-1),L=n("code",null,"installation_id",-1),N=n("code",null,"installation.yaml",-1),G=n("code",null,"sync_dir: 'D:\\Sync\\RIME'",-1),V=n("p",null,[e("打字习惯会保存在 "),n("code",null,"<词典名>.userdb.txt"),e(" 或 "),n("code",null,"<词典名>.userdb.kct.snapshot"),e("。还原时，点击「用户词典管理」>「导入文本码表」来恢复词频记录。")],-1),$={href:"https://github.com/rime/librime/releases",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"Rime.lua",-1),U=s('<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="开机后不能输出中文" tabindex="-1"><a class="header-anchor" href="#开机后不能输出中文" aria-hidden="true">#</a> 开机后不能输出中文</h3><p>有时开机后，不能正常输出中文，这是由于 <code>WeaselServer.exe</code> 未正常启动的原因。</p><p>此时，我们只需打开程序文件夹中的 <code>WeaselServer.exe</code> 即可解决问题，该程序默认位置为 <code>C:\\Program Files (x86)\\Rime\\weasel-0.14.3\\WeaselServer.exe</code>。不要直接将 <code>WeaselServer.exe</code> 放入开启启动程序，会导致程序报错。</p>',4),O=n("code",null,"WeaselServer.exe",-1),Y={href:"https://github.com/rockbenben/rime-WeaselServer",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"%AppData%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup",-1),J={href:"https://wwx.lanzoux.com/if3znkka01g",target:"_blank",rel:"noopener noreferrer"},K=n("h3",{id:"输入法报错",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入法报错","aria-hidden":"true"},"#"),e(" 输入法报错")],-1),Q=n("p",null,"将用户文件夹置为同步文件夹后，提示「有错误，请查看日志%TEMP%\\rime.weasel.*.INFO」。这是由于用户文件夹置为同步文件夹后导致的进程冲突。日志中有提示「另一个程序正在使用此文件，进程无法访问」。",-1),X=n("p",null,[e("遇到报错后，关闭任务管理器中的 "),n("code",null,"WeaselServer.exe"),e(" 进程，然后重新执行小狼毫算法服务。")],-1),Z=n("h3",{id:"切换输入法状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#切换输入法状态","aria-hidden":"true"},"#"),e(" 切换输入法状态")],-1),ee={href:"https://gist.github.com/lotem/2981316",target:"_blank",rel:"noopener noreferrer"},ne=n("p",null,"虽然小狼毫不能组合键切换，不过可以使用 Windows 键盘切换设置组合键。设置中选择「时间和语言」>「输入」>「高级键盘设置」>「语言栏选项」>「高级键设置」，Ctrl+Space 是 Windows 默认的中文输入法／非输入法切换的快捷键。",-1),te=n("h3",{id:"输入法候选框闪烁",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入法候选框闪烁","aria-hidden":"true"},"#"),e(" 输入法候选框闪烁")],-1),ae=n("p",null,"中文输入法的候选框闪烁，无法显示候选词。",-1),se={href:"https://github.com/rime/weasel/issues/228",target:"_blank",rel:"noopener noreferrer"},oe=s(`<h3 id="删除错误「上屏」的词" tabindex="-1"><a class="header-anchor" href="#删除错误「上屏」的词" aria-hidden="true">#</a> 删除错误「上屏」的词</h3><p>有时打错几次的字总放在预选词的前排，干扰输入法习惯。</p><p>把选字光标移到错词上，再按下 Shift+Delete 或 Control+Delete，就能删除错误「上屏」的词。</p><h3 id="符号直接上屏" tabindex="-1"><a class="header-anchor" href="#符号直接上屏" aria-hidden="true">#</a> 符号直接上屏</h3><p>小狼毫给字符都提供了多个候选，比如 / 默认有 <code>&quot;、&quot;, &quot;/&quot;, &quot;／&quot;, &quot;÷&quot;</code> 四个候选词。如果你想按 / 键直接输出「、」，则按下方代码修改 luna_pinyin.schema.yaml 中的 punctuator 区块。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">punctuator</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default
  <span class="token key atrule">full_shape</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;/&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;、&quot;</span>
  <span class="token key atrule">half_shape</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;/&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;、&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定程序中默认输入法" tabindex="-1"><a class="header-anchor" href="#指定程序中默认输入法" aria-hidden="true">#</a> 指定程序中默认输入法</h3><p>如果想在特定程序中默认使用英文输入法，在 <code>.\\weasel.custom.yaml</code> 中加入下列代码即可。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">app_options/windowsterminal.exe</span><span class="token punctuation">:</span> <span class="token comment"># 程序名字全用小寫字母</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/powershell.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/code.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/putty.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">app_options/listary.exe</span><span class="token punctuation">:</span>
    <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不能输出-emoji" tabindex="-1"><a class="header-anchor" href="#不能输出-emoji" aria-hidden="true">#</a> 不能输出 emoji</h3><p>按照官方文档教程设置了 emoji，但无法输出符号。</p>`,11),re={href:"https://github.com/ssnhd/rime",target:"_blank",rel:"noopener noreferrer"},ie=s(`<h3 id="无法触发词库的特殊符号" tabindex="-1"><a class="header-anchor" href="#无法触发词库的特殊符号" aria-hidden="true">#</a> 无法触发词库的特殊符号</h3><p>SuperRime 词库自带的标点及特殊表情设置有问题，需在输入法设置文件夹 <code>luna_pinyin_simp.custom.yaml</code> 中植入触发标点及特殊表情的代码。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">&quot;punctuator/import_preset&quot;</span><span class="token punctuation">:</span> mysymbols
  <span class="token key atrule">&quot;recognizer/patterns/punct&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^/([a-z]+|[0-9])$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,4),le={class:"footnotes"},ce={class:"footnotes-list"},pe={id:"footnote1",class:"footnote-item"},de={href:"https://www.jianshu.com/p/296bba666604",target:"_blank",rel:"noopener noreferrer"},ue=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),he={id:"footnote2",class:"footnote-item"},_e={href:"https://www.jianshu.com/p/cffc0ea094a7",target:"_blank",rel:"noopener noreferrer"},me=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),fe={id:"footnote3",class:"footnote-item"},ke={href:"https://www.dazhuanlan.com/2019/10/06/5d995d43e4432/",target:"_blank",rel:"noopener noreferrer"},be=n("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),ye={id:"footnote4",class:"footnote-item"},ge={href:"https://github.com/rime/home/wiki/CustomizationGuide#%E4%B8%80%E4%BE%8B%E5%AE%9A%E8%A3%BD%E6%A8%99%E9%BB%9E%E7%AC%A6%E8%99%9F",target:"_blank",rel:"noopener noreferrer"},ve=n("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1);function xe(Ee,we){const t=l("ExternalLinkIcon");return r(),i("div",null,[p,d,u,n("p",null,[e("Rime 小狼毫输入法下载："),n("a",h,[e("官方渠道"),a(t)]),e("，"),n("a",_,[e("国内搬运"),a(t)]),e("。")]),m,n("p",null,[e("小狼毫不推荐使用 "),n("a",f,[e("四叶草"),a(t)]),e(" 之类的集成方案，建议参考 "),n("a",k,[e("Squirrel 鼠须管配置"),a(t)]),e(" 和 "),n("a",b,[e("小狼毫 [rime_win][眀月拼音] 简单配置方法"),a(t)]),e(" 以「朙月拼音·简化字」为基础定制你自己的输入法，最大限度提升输入法效率。小狼毫的魅力正在于可自定义，让输入法按你的想法输出，定制流程参考下面的进阶指南。")]),y,n("p",null,[e("扩充词库包含英文联想、网络流行语、成语、俗语等，能提升输出效率。热门词库有 "),n("a",g,[e("BetterRime 词库"),a(t)]),e("、"),n("a",v,[e("SuperRime 拓展词库"),a(t)]),e("、"),n("a",x,[e("自定义短语"),a(t)]),e(" 和 "),n("a",E,[e("Rime 擴充詞庫"),a(t)]),e("。")]),w,q,S,n("p",null,[e("为提高效率，"),n("a",A,[e("小狼毫官方配置库"),a(t)]),e(" 收录了自然码双拼、智能 ABC 双拼、小鹤双拼、MSPY 双拼、拼音加加双拼，我使用的是小鹤双拼。")]),n("p",null,[e("配置时，将官方配置库中的 "),n("a",B,[e("double_pinyin_flypy.schema.yaml"),a(t)]),e(" 下载到小狼毫的用户文件夹。然后，右键单击任务栏小狼毫图标，选「输入法设定」，只勾选一个「小鹤双拼」。默认方案为繁体，可使用按键 F5 (部分版本是 F4)，将配置默认为简体。")]),n("p",null,[e("双拼的自定义短语，可参考 "),n("a",R,[e("小狼毫自定义短语-Rime-双拼"),a(t)]),e("。如果设定后，无法使用简体输入，将 "),C,e(" 中的 filters 模块转移到 translators 模块上方。")]),n("p",null,[e("双拼不会显示当前输出字母，可参考 "),n("a",W,[e("使用双拼时如何同时显示按下的键以及双拼对应的拼音"),a(t)]),e("。")]),z,n("p",null,[e("Rime 的官方文档非常详细，涵盖几乎所有的进阶需求，比如 "),n("a",D,[e("定制指南"),a(t)]),e("、"),n("a",j,[e("文件配置说明"),a(t)]),e("、"),n("a",F,[e("emoji 集成"),a(t)]),e(" 和 "),n("a",M,[e("模糊音设置"),a(t)]),e("。")]),n("p",null,[e("如果要多设备 "),n("a",I,[e("同步用户资料"),a(t)]),e("，则打开用户文件夹中的 "),P,e("，将其中的设备名称 "),L,e(" 从长字符串修改为方便识别的名称，并在 "),N,e(" 文本最下方添加用户资料同步位置 "),G,e("，路径中不能出现中文。")]),V,n("p",null,[e("小狼毫主版本长年未更新，使用 rime 输入法的核心库 "),n("a",$,[e("librime"),a(t)]),e(" 替换小狼毫程序文件夹中的 rime.dll 可更新输入法。如果输入法中使用了 "),T,e(" 的动态输出功能，与核心库可能会冲突，不要更换 rime.dll。")]),U,n("p",null,[e("不愿手动启动 "),O,e(" 的话，可以使用 "),n("a",Y,[e("WeaselServerAutostart"),a(t)]),e(" 脚本工具来启动。首先把脚本放置于小狼毫「程序文件夹」内，然后将脚本的快捷方式移动至开机启动目录 "),H,e("。当开机时，检测到小狼毫未正常启动，脚本会自动启动对应程序。WeaselServerAutostart 脚本国内下载："),n("a",J,[e("https://wwx.lanzoux.com/if3znkka01g"),a(t)]),e("。")]),K,Q,X,Z,n("p",null,[e("小狼毫只支持按键切换中英文，支持的按键是 Caps_Lock, Shift_L, Shift_R, Control_L, control_R，配置参考 "),n("a",ee,[e("使用 Control 鍵切換中西文"),a(t)]),e("，修改 default.custom.yaml。")]),ne,te,ae,n("p",null,[e("排除键盘硬件问题，拔除或更换键盘，确认问题是否复现。Word 2016 下候选框闪烁参考 "),n("a",se,[e("issue 228"),a(t)]),e("。")]),oe,n("p",null,[e("测试了几种方案，目前输出特殊字符最稳定的是 "),n("a",re,[e("Squirrel 鼠须管配置"),a(t)]),e("，Windows 用户可参考它调整自己的输入法。")]),ie,n("section",le,[n("ol",ce,[n("li",pe,[n("p",null,[n("a",de,[e("30 分钟搞定 自由输入法 RIME 简明配置指南"),a(t)]),e(),ue])]),n("li",he,[n("p",null,[n("a",_e,[e("Rime 输入法—鼠须管 (Squirrel) 词库添加及配置"),a(t)]),e(),me])]),n("li",fe,[n("p",null,[n("a",ke,[e("小狼毫 RIME 输入法配置"),a(t)]),e(),be])]),n("li",ye,[n("p",null,[n("a",ge,[e("一例、定製標點符號"),a(t)]),e(),ve])])])])])}const Ae=o(c,[["render",xe],["__file","2020-11-27-rime_input.html.vue"]]);export{Ae as default};
