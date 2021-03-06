---
title: "Data Visulization with JavaScript 翻译"
author: "sucer"
datetime: 2015-09-30 12:00:00
cover: "http://ww3.sinaimg.cn/large/633b942ejw1eyc6mbk5oxj20rs0gi77o.jpg"
---

## <span class="s1">前言</span>

[原文地址在这里](http://jsdatav.is/intro.html)  


<span class="s1">在我们的生活中，数据正变得越来越不可忽视。对于那些大型的社会组织来说，数据从来都是至关重要的，它影响着每一个微小的决策。数据的集合通常有广泛的地理政治含义。然而数据本身仍然很容易受到忽视。有研究表示我们的政府机构收集的数据有</span><span class="s2">99.5%</span><span class="s1">都浪费了，没有得到有效的分析和利用。</span>  


<span class="s1">数据可视化是弥补这一空缺的工具。</span>  


<img src="http://ww1.sinaimg.cn/large/43b712ebjw1ewk9zru1ggj20d40audgh.jpg" alt="" width="472" height="390" />
数据可视化的发展过程  


<span class="s1">有效的图表澄清事实；它们将抽象数据集合转换成图形和表格，使得读者能迅速的抓住重点并理解。事实上最优质的图表能凭直觉理解，读者不需要思考就能立刻理解数据要表达的意思。这样的展现形式不需要读者费劲揣摩数据的含义：它要表达的故事，要阐述的观点，甚至提出的警示。这当然是一种最好的表达方式。</span>  


<span class="s1">如果你正在开发网站或</span><span class="s2">web</span><span class="s1">应用程序，你很有可能需要传达某些数据，而且急需一种合适的数据可视化展现形式。但是你怎么知道哪种视图是合适的呢？更重要的，怎么去创造这样的视图呢？本书的核心正是为了解答这些问题。在接下来的章节中，我们会介绍一系列不同的视图类型、适用的技术和工具集。每个例子中都会探讨其所使用的数据类型及可能的变体，并且对如何应用在你的网页中做出一步步详细的说明。</span>  



## <span class="s1">本书的哲学</span>

<span class="s1">如果你正在考虑是否投入时间和</span><span class="s2">/</span><span class="s1">或金钱在这本书上，你需要了解本书的编写哲学。在写这本书时，我尝试遵循四个主要的原则来保证这本书能提供有实用价值的指导。</span>  


<img src="http://ww2.sinaimg.cn/large/43b712ebjw1ewka44v2z1j20b60adwes.jpg" alt="" width="402" height="373" />
  


数据可视化的优点  




- 实现和设计


这本书不会教你如何设计数据视图。诚实的说，在这方面有其它的作家比我更有资格（Edward Tufte）。我们会把重点放在实现数据视图上。在合适的时候，我们会以一个更大的视角探讨特定的展现形式所适用的数据类型。不过我发现有时候老板总是坚持用一个饼图。  




- 代码和样式


你从书的标题可能就猜出来了，这本书的重点放在如何用JavaScript代码实现一个视图上。我们不会花费太长时间讨论视图的样式。幸运的是，定义视图的样式跟定义其它网页内容的样式基本没什么区别，基本的HTML和CSS经验足够了。书中的例子并没有假设读者是JavaScript方面的专家，我们对任何比jQuery基本选择器还复杂的代码都会作详细解释。  




- 简单和复杂


本书的大部分例子都是简单直接的视图。复杂的视图可能更吸引人，更容易留下深刻印象，但学习大量复杂的实现代码可能并不利于学习基本视图的绘制。在我们的例子中，会尽量保持简单以使读者能清楚的明白如何使用不同的工具和技术。然而，简单并不意味着无聊，即使最简单的视图也可以具有启发作用。  




- 现实和理想世界


当你开始构建你自己的视图的时候，你会发现现实世界往往并不想你希望的那样友好。开源工具库会有bug存在；第三方服务器会有安全性问题；而且并不是每一个用户都更新到了最新性能最好的浏览器。在例子中我们不会忽视这些现实性问题，相应的我们会介绍如何避免第三方代码中的bug；如何应对服务器安全限制如CORS(跨域问题)；如何在可行的情况下兼容旧版本的浏览器。  



## 本书内容

<img src="http://ww4.sinaimg.cn/large/43b712ebjw1ewka8olfqij20ej0dogmt.jpg" alt="" width="523" height="492" />
  


   


**常见技术**  


<span class="s1">接下来的章节和附录中会覆盖各种不同的视图实现技术和用到的</span><span class="s2">JavaScript</span><span class="s1">库。</span>  




2. 
<span class="s1">第一章介绍了最基本的视图</span><span class="s2">——</span><span class="s1">静态的图表和折线图。所有的例子都是基于</span><span class="s1"><b> </b><span class="s2"><a href="http://www.humblesoftware.com/flotr2/">flotr2 library</a>库。</span></span>  



4. 
<span class="s1">第二章在视图中加入了交互，让用户可以选择内容、放大，追踪数据值。这一章也介绍了直接从网络获取数据。为了介绍不同的库，让你知道有好些选择在，本章的例子都是基于</span><span class="s1"><a href="http://www.flotcharts.org/">Flot library</a>，一个基于jQuery的库。</span>  



6. 
<span class="s1">第三章介绍如何将多个视图整合在一起，并且作为网页内容的一部分而不是独立的图表存在于网页中；它使用了</span><span class="s1"><a href="http://omnipotent.net/jquery.sparkline/#s-about">jQuery sparklines</a>库。</span>  



8. 
<span class="s1">第四章介绍了一些除基本图表和折线图之外的特殊的视图模式，如树形图、热点图、网络图以及标签云（</span>**<span class="s2">word cloud</span>**<span class="s1">）。每个例子都是基于一个特殊的专为某个视图类型设计的</span>**<span class="s2">JavaScript</span>**<span class="s1">库。</span>  



10. 
<span class="s1">第五章重点放在了时间序列数据，它使用了几种不同的方式来视觉化时间轴，包括传统的</span>**<span class="s2">JavaScript</span>**<span class="s1">库实现；纯</span>**<span class="s2">HTML</span>**<span class="s1">、</span>**<span class="s2">CSS</span>**<span class="s1">、</span>**<span class="s2">JavaScript</span>**<span class="s1">实现；全功能的</span><span class="s2">web</span><span class="s1">组件（</span>**<span class="s2">web component</span>**<span class="s1">）实现。</span>  



12. 
<span class="s1">第六章介绍了地理数据，以及将地图与视图结合起来的不同方式。</span>  



14. 
<span class="s1">第七章介绍了功能强大的</span><span class="s1"><a href="http://d3js.org/">D3.js</a></span><span class="s1">库，一个能构建各种类型的定制化图表的，灵活的、全功能的工具集。</span>  



16. 
<span class="s1">在附录</span><span class="s2">A</span><span class="s1">中，我们探讨了基于</span><span class="s2">web</span><span class="s1">的数据视图的其它方面。特别的，我们介绍了</span><span class="s1"><a href="http://underscorejs.org/">Underscore.js</a></span><span class="s1">库是如何使得数据的准备和处理变得更加简便的。</span>  



18. 
<span class="s1">在附录</span><span class="s2">B</span><span class="s1">中，我们开发了一个基于数据可视化的单页面</span><span class="s2">web</span><span class="s1">应用程序。在这一篇我们会介绍怎样使用现代化的开发工具如</span><span class="s1"><a href="http://yeoman.io/">yeoman</a></span><span class="s1">以及</span><span class="s1"><a href="http://backbonejs.org/">Backbone.js</a></span><span class="s1">库。</span>  






## 本书源代码

<span class="s1">为了使内容尽可能的清晰和具有可读性，本书的例子通常带有独立</span><span class="s2">JavaScript</span><span class="s1">代码片段，有时还会有</span><span class="s2">HTML</span><span class="s1">或</span><span class="s2">CSS</span><span class="s1">片段。所有例子的完整的源代码可以在</span><span class="s1"><a href="https://github.com/sathomas/jsdatav.is-source"><span class="s2">GitHub</span></a></span><span class="s1">上找到。</span>  



## <span class="s1">第一章 数据图表（1 柱状图）</span>

<span class="s1">许多人认为数据可视化即是精致炫目的具有复杂交互的图形。然而创造一个有效的数据图表并不需要毕加索式的艺术技艺或者图灵式的专业编程水平。事实上，当你考虑到数据可视化的最终目标</span><span class="s2">——</span><span class="s1">帮助用户理解数据</span><span class="s2">——</span><span class="s1">时，简洁明了才是有效图表的最重要的特征之一。简单直接的图形通常最容易被理解。毕竟用户已经看过无数的柱状图、线形图、</span><span class="s2">x/y</span><span class="s1">轴折线图等等，他们知道这些图形和标记通常意味着什么。所以一个按照惯例设计的图形能够很容易被人理解。如果一个简单、静态的图形能够很好的展现你的数据，那就用它。你会节省很多时间和精力来创造自己的视觉图形，你的用户也更容易理解数据图表。</span>  


<span class="s1">有很多优秀的工具和库能帮你构造简单的数据图形，使用这些工具能让你避免重新发明轮子。而且遵循这些库提供的默认参数能保证你构造的图形能有合理且美观的外形。本书会介绍几个不同的工具，但本章我们只用</span><span class="s2">flotr2 library</span><span class="s1">这个库。它使你向网页中加入标准的柱状图、线形图、饼状图变得非常容易，而且它还支持一些不是那么常见的图形种类。本章我们会介绍所有实现这些图形的</span>技术。你会学习：  




- 如何实现一个基本的柱状图
- 如何用线形图表现连续的数据
- 如何在饼状图中突出显示其中的一块
- 如何绘制x/y轴散点图
- 如何在x/y轴气泡图中表现量级
- 如何在雷达图中表现多维度数据



### 实现基本柱状图

<span class="s1">如何你正在考虑什么样的图形才最适合展现你的数据，你需要第一个考虑基本柱状图。基本柱状图是如此常见以至于往往被忽略它的有效性。柱状图可以表示一个单一值随时间的变化情况，也可以直观的比较多个值的大小。接下来会分步骤的讲解怎么去构造一个柱状图。</span>  



#### 第1步 引入JavaScript文件

首先需要在网页中引入flotr2 library库文件。flotr2并没那么流行，所以你没法直接在公共资源分发网络（CDN）中引用它，需要下载下来在自己的web服务器中维护它。为了得到最好的性能，我们会用压缩版（flotr2.min.js）。  


Flotr2并不需要其它的JavaScript库（比如jQuery），但是它依赖HTML canvas元素。主流现代浏览器（Safari、Chrome、Firefox）都支持canvas，但是IE直到IE9版本才支持。不幸的是，仍然有大量的用户使用IE8甚至更低版本的浏览器。为了支持这些用户，你可以另外引入一个库（excanvas.min.js）来兼容旧版本浏览器，这个库在Google上可以找到。因为其它浏览器并不需要这个库，我们可以用一些特殊的标签来保证只有IE8以及更旧版本的浏览器才会加载这个库（第9行）。你的HTML文件开头是这样的：  



```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<!-- Page Content Here -->
	<!-- [if lt IE 9]><script src="js/excanvas.min.js"></script><<img width="375" height="257" src="http://ww3.sinaimg.cn/large/43b712ebjw1ewkbjgi4hyj20af075q34.jpg" alt="endif] -->
	<script src="js/flotr2.min.js"></script>
</body>
</html>
```

如你所见，我们在文件的末尾引入JavaScript库，这种方式能使浏览器在加载了所有HTML标签并开始熏染页面的同时等待服务器返回JavaScript库文件。  



#### 第2步 添加一个div标签容纳图形

我们需要在文件中添加一个div标签放置图形，这个div标签必须要设置明确的高度和宽度，否则flotr2没办法构造图形。我们可以在CSS样式表中指定大小，或者直接放在元素上。下面是用后一种方法HTML文件的样子：  



```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<!-- Page Content Here -->
	<div id="chart" style="width:600px;height:300px;"></div>
	<!-- [if lt IE 9]><script src="js/excanvas.min.js"></script><![endif] -->
	<script src="js/flotr2.min.js"></script>
</body>
</html>
```

注意到我们给了这个div标签一个id（chart）以便之后方便的引用它。对于本章的所有图形，你都需要一个这样的模板（引入flotr2并创建一个div标签）。  



#### 第3步 定义数据

现在我们需要处理显示的数据。对于这个例子，我使用过去七年曼城队在英超联赛中取胜的次数作为数据。当然你实际上需要使用自己的真实数据，或者是内联的JavaScript代码（如下面的例子），或者是其它的方法（比如向服务器发送AJAX请求）。  



```
var wins = [
 [
 [2006, 13],
 [2007, 11],
 [2008, 15],
 [2009, 15],
 [2010, 18],
 [2011, 21],
 [2012, 28]
 ]
];
```

这里定义了一个三层数组，我们会从里向外来解释。对于flotr2图表，每一个数据点由一个两个元素的数组表示，这两个元素分别代码x值和y值。这个例子中我们用年份作x值，用取胜次数作y值。我们把所有这些二元数据放在一个数组中，它叫做数列（series）。再把这个数列（series）放在另一个外部数组中。在这个外部数组中可以放入多个这样的数列（series），但这里我们只放一个。总结一下每层数组的作用：  




- 每个数据点都由x值和y值组成，并放在一个数组中
- 每个数列（series）都是一个数组，由一系列的数据点组成
- 数据图由一个或多个数列（series）组成，这些数列（series）都放在一个数组中



#### 第4步 绘制图形

所有准备工作都完成了，一个简单的API调用就能绘制基本的图形。首先需要保证浏览器已经加载了页面文件，否则chart节点可能不会显示。所以需要在window.onload函数中调用Flotr.draw，需要三个参数：包含图形的HTML元素、需要表现的数据以及任何绘图参数（这里我们只是告诉flotr2需要创建一个柱状图）。  



```
window.onload = function () {
    Flotr.draw(
        document.getElementById("chart"),
	wins,
	{
	    bars: {
                show: true
	    }
	}
    );
};
```

因为flotr2并不需要jQuery，我们这里并没有用任何jQuery的简便方法。如果你的页面已经引用了jQuery，你可以使用jQuery事件和选择器来实现这段代码。下图是这段代码所绘制的图形：  


![" width="375" height="257" />
  


现在我们有了一个柱状图，但它还不能有效的显示信息。接下来我们会逐步的加上绘图参数直到得到理想的图形。  



#### 第5步 修改纵轴

纵轴最明显的问题是它的取值范围。默认的，flotr2会根据数据的最大值和最小值自动计算轴的取值范围。在我们的例子中最小值是11（2007年），所以flotr2用11作为y轴的最小值。然而在柱状图中，通常情况下最好将y轴的最小值设为0。如果不用0的话，你可能过分强调了数值之间的差异而给用户造成迷惑。任何人第一眼看到上面的图形，都可能认为曼城队在2007年并没有赢任何一场比赛。这显然对人家球队不公平。  


另一个是格式问题，flotr2默认给数值一位小数，所以它给所有的标签都加了一个多余的“.0“。我们可以给y轴加一些参数来避免这些问题。min属性设置y轴的最小值，tickDecimals属性告诉flotr2应该给标签设置多少位小数。这里我们不需要任何小数位。  



```
Flotr.draw(document.getElementById("chart"), wins, {
    bars: {
        show: true
    },
    yaxis: {
        min: 0,
        tickDecimals: 0
    }
});
```

修改后的效果：  


<img src="http://ww1.sinaimg.cn/large/43b712ebjw1ewkbokoffij20af06imxd.jpg" alt="" width="375" height="234" />
  



#### 第6步 修改横轴

横轴同样需要一些修改，同y轴一样，flotr2把x轴标签当作实数，并且加上了一位小数点。因为图形要表现年份，我们可以像y轴一样简单的把精度设为0。但这并不是一个统一的解决办法，因为它并不适用于x轴表示非数值类别的情况（比如队名）。为适用更普遍的情况，我们改变一下数据，把x轴的年份改为简单数值（0、1、2 ……）。然后再创建一个数组，把这些数值映射为任意的字符串，用这些字符串作为x轴标签。  



```
var wins = [[[0, 13], [1, 11], [2, 15], [3, 15], [4, 18], [5, 21], [6, 28]]];
var years = [
    [0, "2006"],
    [1, "2007"],
    [2, "2008"],
    [3, "2009"],
    [4, "2010"],
    [5, "2011"],
    [6, "2012"]
];
```

另外一个问题是柱子之间缺乏空间。默认的，flotr2让每一个柱子都占满了它的整个横轴空间，但这样让图形显得太紧凑了。我们可以调整barWidth属性，设为0.5，让柱子只占一半的空间。下面是传给flotr2的所有参数，注意第11行，它给x轴一个ticks参数，告诉flotr2每个x值对应哪个标签。  



```
Flotr.draw(document.getElementById("chart"), wins, {
    bars: {
        show: true,
        barWidth: 0.5
    },
    yaxis: {
        min: 0,
        tickDecimals: 0
    },
    xaxis: {
        ticks: years
    }
});
```

现在我们的图形更加具有可读性了，如下图所示：  


<img src="http://ww4.sinaimg.cn/large/43b712ebjw1ewkby3cln1j20af06gmxe.jpg" alt="" width="375" height="232" />
  



#### 第7步 修改样式

现在我们的图表在功能上和可读性上都令人满意了，我们可以花一些精力在图形的美观上。让我们加上一个标题，去掉不必要的网格线并调整柱子的颜色值。  



```
Flotr.draw(document.getElementById("chart"), wins, {
    title: "Manchester City Wins",
    colors: ["#89AFD2"],
    bars: {
        show: true,
        barWidth: 0.5,
        shadowSize: 0,
        fillOpacity: 1,
        lineWidth: 0
    },
    yaxis: {
        min: 0,
        tickDecimals: 0
    },
    xaxis: {
        ticks: years
    },
    grid: {
        horizontalLines: false,
        verticalLines: false
    }
});
```

效果如下图所示：  


<img src="http://ww4.sinaimg.cn/large/43b712ebjw1ewkdb4w3t9j20af06cglo.jpg" alt="" width="375" height="228" />
  


对于正常大小的数据集，标准的柱状图通常是最有效的视觉表现。用户已经熟悉了基本的柱状图模型，不需要花任何多余的精力去理解数据的表现形式。柱子本身和背景产生了鲜明的视觉反差，而且使用了单一的线性维度（高度）来表现数值差异，因此用户可以很容易的抓住要表达的重点。  



#### 第8步 调整柱子颜色

到目前为止，我们的图形都是单一颜色的。事实上这是合理的，因为我们表现的是同一数值随时间的变化。但柱形图同样非常适用于比较不同数值之间的差异。假设我们想比较同一年里多个球队的赢球次数，那么合理的做法是给代表每个队的柱子不同的颜色。让我们看下要怎么实现。  


首先我们需要重新构造一下数据结构，之前我们只用了一个数列（series），现在需要给每个队都设一个对应的数列。构造多个数列能使flotr2独立的给每个数列着色。下面的例子给出新的数据结构与原先的差异。我们保留原有的wins数组，新增了wins2数组。注意数组内部嵌套的变化。我们还会把每个柱子的标签由年份改为队名缩写。  



```
var wins = [[[0, 13], [1, 11], [2, 15], [3, 15], [4, 18], [5, 21], [6, 28]]];
var wins2 = [[[0, 28]], [[1, 28]], [[2, 21]], [[3, 30]], [[4, 19]]];
var teams = [
    [0, "MCI"],
    [1, "MUN"],
    [2, "ARS"],
    [3, "TOT"],
    [4, "NEW"]
];
```

基础数据准备好了，接下来可以让flotr2绘制图形了，下面的代码给每个柱子都设置了不同的颜色。  



```
Flotr.draw(document.getElementById("chart"), wins, {
    title: "Premier League Wins (2011-2012)",
    colors: ["#89AFD2", "#1D1D1D", "#DF021D", "#0E2048", "#E67840"],
    bars: {
        show: true,
        barWidth: 0.5,
        shadowSize: 0,
        fillOpacity: 1,
        lineWidth: 0
    },
    yaxis: {
        min: 0,
        tickDecimals: 0
    },
    xaxis: {
        ticks: teams
    },
    grid: {
        horizontalLines: false,
        verticalLines: false
    }
});
```

如下图所见，一个微小的改变就可以完全改变柱状图的焦点。由原来的展示同一个队在不同时间点的数据变成比较不同的队在相同时间点的数据差异。这就是简单柱状图的多样性。  


<img src="http://ww4.sinaimg.cn/large/43b712ebjw1ewkdj28ik2j20af06eglo.jpg" alt="" width="375" height="230" />
  


我们用了很多代码片段来讲解这些例子，如果你想看到完整的例子，请下载本书源代码。  



####  第9步 规避Flotr2的“bug”

如果你正在构建一个由很多内容组成的大型网页，你可能会遇到一个flotr2的恼人的“bug”。我把“bug”放在双引号中是因为flotr2是故意这么做的，但我认为它是不正确的。在构建图形的过程中，flotr2创建隐藏元素来计算它的大小。Flotr2隐藏元素的方法是使用绝对定位来把它们放到屏幕之外。但是flotr2的做法是有问题的，在flotr2.js源代码的第2280行，你会找到这么一行代码：  



```
D.setStyles(div, { 'position' : 'absolute', 'top' : '-10000px' });
```

Flotr2的本意是把这些隐藏元素放在高于浏览器窗口10,000像素的地方。但是CSS绝对定位可以是相对于父容器的，而不总是相对于浏览器窗口的。所以如果你的网页很长，长过10,000像素，你可能发现一些元素会随机分布于网页中。有好些方法可以绕过这个bug，至少在flotr2修正其代码之前。  


一个方案是自己修改源代码。Flotr2是开源的，所以你可以自由下载完整的源代码并作修改。一个简单的修改方法是把隐藏元素放在网页的右侧或左侧，而不是顶部。你可以直接把代码中的“top”改成“right”。如果你不想改源码的话，可以在自己的代码里找出这些隐藏元素并作处理。你应该在所有的Flotr.draw() 函数调用结束之后做这件事。如果你使用jQuery的话，下面这行代码就可以解决问题：  



```
$(".flotr-dummy-div").parent().hide();
```