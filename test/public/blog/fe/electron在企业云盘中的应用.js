webpackJsonp([36,40],{907:function(e,n){e.exports={content:'<h1 id="简要介绍"><a href="#%E7%AE%80%E8%A6%81%E4%BB%8B%E7%BB%8D" aria-hidden="true"><span class="icon icon-link"></span></a>简要介绍</h1>\n<ul>\n<li>Electron是一个可以使用js、html、css创建桌面应用的库</li>\n<li>可以创建mac、window、linux等应用</li>\n<li>atom基于electron开发，以前叫atom-shell</li>\n</ul>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjannpuzoj216s0gg780.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjannpuzoj216s0gg780.jpg">\n</a>  </p>\n<h1 id="如何开发你的desktop应用"><a href="#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E4%BD%A0%E7%9A%84desktop%E5%BA%94%E7%94%A8" aria-hidden="true"><span class="icon icon-link"></span></a>如何开发你的desktop应用</h1>\n<ul>\n<li>一个简单的 demo  </li>\n</ul>\n<p><a href="https://github.com/sindresorhus/electron-boilerplate/tree/master/boilerplate">demo</a></p>\n<ul>\n<li>一个入口main.js（mainProcess）+ 一个index.html（renderProcess）</li>\n<li>执行 electron main.js</li>\n</ul>\n<h1 id="企业云盘的整体结构"><a href="#%E4%BC%81%E4%B8%9A%E4%BA%91%E7%9B%98%E7%9A%84%E6%95%B4%E4%BD%93%E7%BB%93%E6%9E%84" aria-hidden="true"><span class="icon icon-link"></span></a>企业云盘的整体结构</h1>\n<pre><code data-query="{}" data-lang="">├── build(app打包资源)\n├── readme.md\n├── release(发布路径)\n├── renderProcess（渲染进程）\n├── mainProcess（主进程）\n├── plugin(插件)\n├── certs(证书)\n├── build.sh(自动发版脚本)\n├── config.js(全局配置项)\n├── package.json\n└── windowinstall.js（window安装包生成脚本）\n</code></pre>\n<ul>\n<li>整体的结构就是按照两个进程来划分</li>\n<li>renderProcess中可以使用任何你想用的架构，企业云盘采用的是react+redux+router结构</li>\n<li>企业云盘开发环境中采用localhost:3000的实时编译调试模式，发包时采用file协议</li>\n</ul>\n<h3 id="mainproces"><a href="#mainproces" aria-hidden="true"><span class="icon icon-link"></span></a>mainProces:</h3>\n<h4 id="数据库采用nodejs库-nedbmainprocessdatabase"><a href="#%E6%95%B0%E6%8D%AE%E5%BA%93%E9%87%87%E7%94%A8nodejs%E5%BA%93-nedbmainprocessdatabase" aria-hidden="true"><span class="icon icon-link"></span></a>数据库采用nodejs库 nedb(mainProcess/database)</h4>\n<p>数据文件存储在应用数据下的.clouddiskdata，刚开始采用的是mongodb,后来打包发现太大，多40多M，还卡  </p>\n<pre><code data-query="{}" data-lang="">let Datastore = require(\'nedb\');\nlet db = new Datastore({ filename: \'path/to/datafile\' });\ndb.loadDatabase(function (err) {    // Callback is optional\n  // Now commands will be executed\n});\n</code></pre>\n<p>注意nedb为了保证数据的持久性，每一次update或者delete操作实际上都是在最后一行添加一条数据，但是每次load database的时候，会自动合并所有的数据项，所以云盘里面可以看到每次update都调用了  </p>\n<p>db.loadDatabase();  </p>\n<p>官方解释如下：  </p>\n<p>Under the hood, NeDB’s persistence uses an append-only format, meaning that all updates and deletes actually result in lines added at the end of the datafile, for performance reasons. The database is automatically compacted (i.e. put back in the one-line-per-document format) every time you load each database within your application.  </p>\n<p><a href="https://github.com/louischatriot/nedb">官网</a>  </p>\n<h4 id="登录认证-mainprocessuuap"><a href="#%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81-mainprocessuuap" aria-hidden="true"><span class="icon icon-link"></span></a>登录认证 (mainProcess/uuap)</h4>\n<p>浏览器向server发起请求,server端进行登录，并且在head中set-cookie  </p>\n<p>mainProcess通过该有效cookie发起后续所有请求  </p>\n<p>renderProcess中的请求通过ipc通信方式使用nodejs的request模块来进行通信  </p>\n<h4 id="浏览器中直接调起客户端，urlschememainprocessurlprotocol"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9B%B4%E6%8E%A5%E8%B0%83%E8%B5%B7%E5%AE%A2%E6%88%B7%E7%AB%AF%EF%BC%8Curlschememainprocessurlprotocol" aria-hidden="true"><span class="icon icon-link"></span></a>浏览器中直接调起客户端，urlScheme(mainProcess/urlProtocol)</h4>\n<p>1.浏览器端  </p>\n<p><a href="ecloud-baidu://open">添加备份</a>  </p>\n<pre><code data-query="{}" data-lang=""></code></pre>\n<p>2.mainProcess代码如下  </p>\n<p><a href="http://eux.baidu.com/wp-content/uploads/2017/06/28.md0uZGp9DO.png"><img src="http://eux.baidu.com/wp-content/uploads/2017/06/28.md0uZGp9DO.png">\n</a>  </p>\n<p>3.配置info.plist  </p>\n<p><a href="http://eux.baidu.com/wp-content/uploads/2017/06/28.mdFssiOOjv.png"><img src="http://eux.baidu.com/wp-content/uploads/2017/06/28.mdFssiOOjv.png">\n</a>  </p>\n<p>4.打包过程中也需要配置下，否则mac中不生效  </p>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjapd8obnj20l406ead5.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjapd8obnj20l406ead5.jpg">\n</a>  </p>\n<h4 id="窗口管理器（mainprocesswindowmanage）"><a href="#%E7%AA%97%E5%8F%A3%E7%AE%A1%E7%90%86%E5%99%A8%EF%BC%88mainprocesswindowmanage%EF%BC%89" aria-hidden="true"><span class="icon icon-link"></span></a>窗口管理器（mainProcess/windowManage）</h4>\n<pre><code data-query="{}" data-lang="">1.企业云盘总共有三个window（主页、设置页、预览页、反馈页、二次确认页）   \n</code></pre>\n<h4 id="traymenu控制（mainprocesstraymenu）"><a href="#traymenu%E6%8E%A7%E5%88%B6%EF%BC%88mainprocesstraymenu%EF%BC%89" aria-hidden="true"><span class="icon icon-link"></span></a>traymenu控制（mainProcess/trayMenu）</h4>\n<p>参考官方api写即可，大致代码如下：  </p>\n<pre><code data-query="{}" data-lang="">const contextMenu = Menu.buildFromTemplate([\n    {\n        label: \'访问网页版\',\n        click: () => {\n            shell.openExternal(\'http://ecloud.baidu.com\')\n        }\n    }, {\n        label: \'反馈\',\n        click: (e) => {\n            renderFeedBack(1);\n        }\n    }, {\n        label: \'设置\',\n        click: (e) => {\n            renderSettingWindow(1);\n\n        }\n    }, {\n        label: \'退出\',\n        click: () => {\n            app.quit();\n        }\n    }\n])\n</code></pre>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjapsyh6dj20c2072jt3.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjapsyh6dj20c2072jt3.jpg">\n</a>  </p>\n<h4 id="传输控制（mainprocesstransfile-、-mainprocesswatcher）"><a href="#%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%EF%BC%88mainprocesstransfile-%E3%80%81-mainprocesswatcher%EF%BC%89" aria-hidden="true"><span class="icon icon-link"></span></a>传输控制（mainProcess/transfile 、 mainProcess/watcher）</h4>\n<p>本地文件增删改查检测（使用nodejs库chokidar，目前mac已迁移到Object-c的app中）  </p>\n<p>关于electron中与oc app的通信方式。目前采用的是shell里面的open命令，以及web server方式  </p>\n<p>mainProcess中创建webserver服务，oc中通过发起http请求进行通信  </p>\n<p>mainProcess和oc通信采用open方式  </p>\n<p>云盘接受oc的web服务  </p>\n<pre><code data-query="{}" data-lang="">let server = http.createServer(function (request, response) { \n\n        //.....\n        /*前端需要备份的文件*/\n        if (urlObj.pathname === \'/set/file\') {\n            response.end(\'end\');\n            \n        }\n        /*获取我的备份下需要备份的根目录或者文件*/\n        if (urlObj.pathname === \'/get/rootpath\') {\n        }\n}).listen(8887);\n        //.......\n</code></pre>\n<p>md5计算，采用md5-file  </p>\n<pre><code data-query="{}" data-lang="">let execSync = require(\'child_process\').execSync;\nexecSync(\'open ecloud-sync-backup-file.app\', {\n    cwd: `${config.projectPath}/mainProcess/watcher/OC/ecloud-sync-backup-file`\n})\n</code></pre>\n<p>分片：  </p>\n<pre><code data-query="{}" data-lang="">fs.createReadStream(filePath, {\n    start : i * limit,\n    end   : (i * limit + limit - 1) > lastByte? lastByte: i * limit + limit - 1\n}\n</code></pre>\n<h4 id="系统通知："><a href="#%E7%B3%BB%E7%BB%9F%E9%80%9A%E7%9F%A5%EF%BC%9A" aria-hidden="true"><span class="icon icon-link"></span></a>系统通知：</h4>\n<p>mac采用 <a href="https://developer.mozilla.org/en-US/docs/Web/API/notification">notification</a>  </p>\n<p>window采用nodejs的node-notifier模块  </p>\n<h4 id="自动更新客户端（mainprocesscheckupdate）"><a href="#%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%EF%BC%88mainprocesscheckupdate%EF%BC%89" aria-hidden="true"><span class="icon icon-link"></span></a>自动更新客户端（mainProcess/checkUpdate）</h4>\n<p><a href="https://electron.atom.io/docs/api/auto-updater/">官方文档</a>  </p>\n<p>官方提供了几个自动更新的项目，nuts/electron-release-server/squirrel-updates-server/squirrel-release-server,这几个项目中其中2个都是采用github来进行发布，不符合我国国情  </p>\n<p>企业云采用了electron-release-server这个项目来搭建自动升级服务  </p>\n<ul>\n<li>基于docker-compose</li>\n</ul>\n<ul>\n<li>中间遇到的坑，这个项目基于docker-composer 的version2 版本，最低要求docker的版本为1.9.1以上，具体可参考 <a href="https://docs.docker.com/compose/compose-file/compose-file-v2/#args">https://docs.docker.com/compose/compose-file/compose-file-v2/#args</a></li>\n<li>最后采用了ubuntu的服务器，centos版本都太低</li>\n<li>开源项目里面需要简单的配置下数据库、服务器、修改资源存储的路径为永久存储</li>\n<li>公司的服务器的端口必须是8000以上，刚开始设置了个5555 怎么都不好使，能ping通，但是浏览器没法访问</li>\n</ul>\n<ul>\n<li>包含了资源存储</li>\n<li>强大的api支持</li>\n<li>使用Squirrel来模块来完成自动升级</li>\n</ul>\n<ul>\n<li>mac使用.dmg和.zip</li>\n<li>window 使用.exe .nupkg</li>\n</ul>\n<p>关于自动更新中必须要注意的几个点：  </p>\n<ul>\n<li>必须要有证书</li>\n</ul>\n<ul>\n<li>mac通过开发者账号生成,公司苹果开发者团队，可以通过权限申请加入，地址：<a href="http://appdev.baidu.com/">http://appdev.baidu.com/</a>  </li>\n</ul>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjaqgp9f1j20do0amdit.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjaqgp9f1j20do0amdit.jpg">\n</a></p>\n<ul>\n<li>window证书  </li>\n</ul>\n<p>ecloud.pfx,带秘钥的证书，具体可以参考 <a href="https://www.npmjs.com/package/electron-installer-windows">如何生成pfx的证书</a></p>\n<ul>\n<li>具体方案可以参考 <a href="https://medium.com/@svilen/auto-updating-apps-for-windows-and-osx-using-electron-the-complete-guide-4aa7a50b904c">Auto-updating apps for Windows and OSX using Electron: The complete guide</a></li>\n<li>自动更新提示如下  </li>\n</ul>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjaqw909ij21a20i0wkm.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjaqw909ij21a20i0wkm.jpg">\n</a>  </p>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjar8dcv5j20k009c77w.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjar8dcv5j20k009c77w.jpg">\n</a></p>\n<ul>\n<li>遇到坑  </li>\n</ul>\n<p>mac中autoUpdater.quitAndInstall(); 没有自动重启应用  </p>\n<p>可以通过  </p>\n<p>/Users/liuhui/Library/Caches/com.electron.ecloud.ShipIt下的  </p>\n<p>ShipIt_stderr.log来查看问题所在</p>\n<p>window中采用squirrel安装方式后很多问题，安装过程中应用就被打开，需要处理下squirrel事件,可以参考 <a href="https://github.com/electron/windows-installer">https://github.com/electron/windows-installer</a>  </p>\n<h4 id="flash的支持"><a href="#flash%E7%9A%84%E6%94%AF%E6%8C%81" aria-hidden="true"><span class="icon icon-link"></span></a>flash的支持</h4>\n<p>需要添加pepper flash插件，Pepper Flash Player 是由Google维护的专用于chromium引擎的flash播放器  </p>\n<p>首先是在自己电脑上找到pepper flash的插件（mac及window版本）  </p>\n<p>结果如下：  </p>\n<p>• 如果你有安装Chrome浏览器，可以在地址栏输入chrome://plugins/，点击右侧的详细信息，找到Adobe Flash Player条目,目前chrome已经废弃掉chrome://plugins/地址  </p>\n<p>• 实际mac地址：/Library/Internet Plug-Ins/PepperFlashPlayer/PepperFlashPlayer.plugin  </p>\n<p>window地址：C:\\Windows\\System32\\Macromed\\Flash\\pepflashplayer64_24_0_0_194.dll(名称和版本号可能有出入) 重命名为pepflashplayer.dll即可。  </p>\n<p>中间遇到的坑：  </p>\n<ul>\n<li>window上不好使，提示“无法加载插件”，确定为pepflashplayer64_24_0_0_194.dll的问题，去网上下载了一个</li>\n<li>chrome 53里面的flash有个闪烁的bug，浏览器bug，需要升级chrome版本</li>\n</ul>\n<p>pepper flash引入  </p>\n<pre><code data-query="{}" data-lang="">let pluginName;\nswitch (process.platform) {\n  case \'win32\':\n    pluginName = \'pepflashplayer.dll\'\n    break\n  case \'darwin\':\n    pluginName = \'PepperFlashPlayer.plugin\'\n    break\n  case \'linux\':\n    pluginName = \'libpepflashplayer.so\'\n    break\n}\napp.commandLine.appendSwitch(\'ppapi-flash-path\', path.join(__dirname+\'/plugins/\', pluginName))\n</code></pre>\n<h4 id="网络检测mainprocessnetwork"><a href="#%E7%BD%91%E7%BB%9C%E6%A3%80%E6%B5%8Bmainprocessnetwork" aria-hidden="true"><span class="icon icon-link"></span></a>网络检测(mainProcess/network)</h4>\n<p>网络监测刚开始采用的 <a href="https://developer.mozilla.org/en-US/docs/Online_and_offline_events">https://developer.mozilla.org/en-US/docs/Online_and_offline_events</a>  </p>\n<p>监测很准确，这种检测仅仅针对lan是否有连接，实际情况是很多时候网络是连着的，但是不能上网  </p>\n<p>后面换成nodejs的方案  </p>\n<h3 id="renderprocess"><a href="#renderprocess" aria-hidden="true"><span class="icon icon-link"></span></a>renderProcess</h3>\n<pre><code data-query="{}" data-lang="">├── bin\n│   ├── compile.js\n│   └── server.js\n├── build\n│   ├── dll\n│   ├── package.json\n│   ├── webpack-compiler.js\n│   ├── webpack.config.js\n│   └── webpack.dll.config.js\n├── config\n│   └── index.js\n├── package.json\n├── server\n│   └── main.js\n└── src\n    ├── components 组件\n    ├── containers 容器\n    ├── index.html 入口html\n    ├── ipcCenter.js 消息中心\n    ├── layouts 布局\n    ├── main.js 入口js\n    ├── routes 路由\n    ├── static 静态js\n    ├── statichtml 其他入口html\n    ├── store 通用的store\n    └── styles 样式\n</code></pre>\n<h3 id="两个进程"><a href="#%E4%B8%A4%E4%B8%AA%E8%BF%9B%E7%A8%8B" aria-hidden="true"><span class="icon icon-link"></span></a>两个进程</h3>\n<p><a href="https://electron.atom.io/docs/">官方网站</a>  </p>\n<ul>\n<li>electron合并了chromium和node.js</li>\n<li>提供了一系列的api进行native开发，例如file dialogs,notifications,icons更多</li>\n</ul>\n<h4 id="中间的坑："><a href="#%E4%B8%AD%E9%97%B4%E7%9A%84%E5%9D%91%EF%BC%9A" aria-hidden="true"><span class="icon icon-link"></span></a>中间的坑：</h4>\n<ul>\n<li>可以看到官方网站提供了mainProcess和renderProcess区分了接口，但是这两个api并不是完全独立的，renderProces提供的remote模块可以获取到mainProcess到所有的api，详细见接口 <a href="https://electron.atom.io/docs/api/remote/">接口文档</a></li>\n<li>企业云盘在mainProcess里面定义了整个app通用的全局变量：  </li>\n</ul>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjarqtk6ej20fe0ac0x4.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjarqtk6ej20fe0ac0x4.jpg">\n</a></p>\n<ul>\n<li>虽然renderProcess中可以访问到mainProcess里面的全局变量，但是renderProcess里面修改并不会影响到mainPorcess里面的变量  </li>\n</ul>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjas3p2gkj2192076dm5.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjas3p2gkj2192076dm5.jpg">\n</a></p>\n<h2 id="打包方式"><a href="#%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F" aria-hidden="true"><span class="icon icon-link"></span></a>打包方式</h2>\n<p>打包方式，企业云盘用过2种  </p>\n<ul>\n<li><a href="https://github.com/electron-userland/electron-packager">electron-package</a></li>\n</ul>\n<pre><code data-query="{}" data-lang="">"build": "electron-packager ./ clouddisk --platform=darwin,win32 --arch=x64 --prune --overwrite --version=1.4.13 --ignore renderProcess/node_modules --icon ./icon",\n"buildwin": "electron-packager ./ clouddisk --platform=win32 --arch=x64 --prune --overwrite --version=1.4.13 --ignore renderProcess/node_modules --icon ./icon",\n"buildmac": "electron-packager ./ clouddisk --platform=darwin --arch=x64 --prune --overwrite --version=1.4.3 --ignore renderProcess/node_modules --icon ./icon",\n</code></pre>\n<ul>\n<li><a href="https://github.com/electron-userland/electron-builder">electron-builder</a></li>\n</ul>\n<pre><code data-query="{}" data-lang="">"build": {\n    "appId": "com.electron.ecloud",\n    "productName": "ecloud",\n    "mac": {\n      "extendInfo": "build/info.plist"\n    },\n    // ...\n</code></pre>\n<p>这两种打包方式的区别：  </p>\n<p>electron-package 仅能打出应用程序，无法打出安装包，配置项没有electron-builder那么灵活  </p>\n<p>electron-builder 支持非常强大的配置，可以参考 <a href="https://github.com/electron-userland/electron-builder/wiki/Options">官网</a>  </p>\n<p>需要注意的是自动更新需要打出nupkg的包，electron-builder也是支持的  </p>\n<pre><code data-query="{}" data-lang="">    "win": {\n      "target": "squirrel",\n      "certificateFile": "./certs/ecloud.pfx",\n      "certificatePassword": "***"\n    },\n    "squirrelWindows": {\n      "iconUrl": "https://ecloud.baidu.com/static/common/img/auto_logo.ico"\n    },\n    "nsis": {\n      "oneClick": false,\n      "allowToChangeInstallationDirectory": true\n    },\n</code></pre>\n<p><a href="http://ww1.sinaimg.cn/large/bdab2ccely1fjjasih7h5j20k9049q51.jpg"><img src="http://ww1.sinaimg.cn/large/bdab2ccely1fjjasih7h5j20k9049q51.jpg">\n</a>  </p>\n<p>自动更新依赖于squirrel模块，这个模块决定了window的打包方式必须是squirrel的安装包，从而决定了不一样的window安装包（nsis或者squirrel）  </p>\n<p>squirrel安装包依赖于net 4.5  </p>\n<h2 id="调试技巧"><a href="#%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7" aria-hidden="true"><span class="icon icon-link"></span></a>调试技巧</h2>\n<ul>\n<li>抓包  </li>\n</ul>\n<p>企业云盘里面所有的请求都基于node的request模块，所以给request设置下代理即可，如下</p>\n<pre><code data-query="{}" data-lang="">// 只能代理到http\nrequire(\'./mainProcess/request\').defaults({ proxy: \'http://127.0.0.1:8888\' }) \n// https如下\nlet useProxy=1;\nif(useProxy){\n    process.env.https_proxy = "http://127.0.0.1:8888";\n    process.env.http_proxy = "http://127.0.0.1:8888";\n    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";\n}\n</code></pre>\n<p>调试renderProcess 打开browser window的控制台  </p>\n<pre><code data-query="{}" data-lang="">/localhost/.test(appUrl) &#x26;&#x26; win.webContents.openDevTools();\n</code></pre>\n<ul>\n<li>调试mainProcess  </li>\n</ul>\n<p>console.log直接会在terminal中打出，另外全局有写一个小工具debugInRender,这个工具会将mainProcess的调试信息打印在renderProcess的控制台中</p>\n<ul>\n<li>调试用户的电脑  </li>\n</ul>\n<p>企业云盘-显示包内容-contents-resources-app里面，修改代码重启可生效，  </p>\n<p>当然云盘在打包的时候可以压缩所有代码为asar格式的，只需要在package的配置中添加</p>\n<pre><code data-query="{}" data-lang=""> "asar": true\n</code></pre>\n<ul>\n<li>mac中crash情况debugger</li>\n</ul>\n<p><a href="https://electron.atom.io/docs/development/debugging-instructions-macos/">https://electron.atom.io/docs/development/debugging-instructions-macos/</a>  </p>\n<ul>\n<li>官方给出的调试方案  </li>\n</ul>\n<p><a href="https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md">https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md</a></p>\n<p>electron 文章  </p>\n<p><a href="https://nulab-inc.com/blog/typetalk/3-necessary-things-to-correctly-release-a-product-based-on-the-electron-app/">https://nulab-inc.com/blog/typetalk/3-necessary-things-to-correctly-release-a-product-based-on-the-electron-app/</a>  </p>\n<p>electron和nw区别  </p>\n<p><a href="https://github.com/electron/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md">https://github.com/electron/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md</a>  </p>\n<h2 id="相关资源"><a href="#%E7%9B%B8%E5%85%B3%E8%B5%84%E6%BA%90" aria-hidden="true"><span class="icon icon-link"></span></a>相关资源</h2>\n<p><a href="https://electron.atom.io/docs/">https://electron.atom.io/docs/</a>  </p>\n<p><a href="https://github.com/electron-userland/electron-builder">https://github.com/electron-userland/electron-builder</a>  </p>\n<p><a href="https://github.com/electron/windows-installer">https://github.com/electron/windows-installer</a>  </p>\n<p><a href="https://github.com/ArekSredzki/electron-release-server">https://github.com/ArekSredzki/electron-release-server</a>  </p>\n<p><a href="https://github.com/electron/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md">https://github.com/electron/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md</a>  </p>\n<p><a href="https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658">https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658</a></p>\n',extra:{}}}});