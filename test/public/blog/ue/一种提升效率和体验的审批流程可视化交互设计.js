webpackJsonp([12,40],{931:function(p,n){p.exports={content:'<p>以审批为代表的等待进度场景是企业产品中，甚至是日常生活中常见的服务场景，如银行排队叫号等。  </p>\n<p>为了避免用户因为等待进度而产生焦虑情绪，产品服务上通常有两种解决方式：一是告知用户下一个审批节点名称和已经审批过的节点详情；二是告知用户所有的审批节点数量和当前审批节点位置。  </p>\n<p>第一种只告知用户下一个审批节点的做法广泛运用于企业审批场景中。普通用户申请项目时无法对审批时间进行预期，并不知道要经历多少审批节点，大概需要多长时间，出了问题找谁催办；而审批者工作繁忙时存在延误审批的现象。对于一些交易金额较大的广告交易类产品，如百汇，审批时间过长会直接影响用户活跃度；现有的方案无法满足用户完全快速地获取审批进度，敦促审批者主动审批的需求。从产品需求上说，审批的天平需要向普通用户倾斜。  </p>\n<p><img src="http://ww1.sinaimg.cn/large/b73187b9gy1fgqjdn1v0lj20om07iq40.jpg"></p>\n<p>如上图，产品常以表格的方式，展示申请者在申请买资源后的审批进度，记录当前审批环节和已完成审批环节的审批详情。每条审批流有6-12个审批节点，遇驳回再申请的情况，审批节点更多，审批时间更长。百汇平台曾经创下单人审批100多天的纪录。  </p>\n<p>从普通用户的角度：1、紧急宣传的场景下无法预期审批时长，并根据审批时长判断是否申请某资源；2、审批节点过多的审批流，只能获取当前节点，用户无法判断还要等待多长时间，容易造成用户焦虑；3、表格的形式无法帮助用户快速理解进度，表格长短不一，详情通常位于二级页面，不利于用户快速获知；4、用户在焦虑时，通常会硬着头皮采取催办的方式，获得当前审批人姓名后找到其联系方式催办，当当前审批人为比自己职级高的人时，用户可能陷入左右两难的境地，极大影响体验。  </p>\n<p>从审批者的角度：帮助审批者克服拖延症，避免催办扰人情况的发生，利好双方是需要考虑的隐性因素。  </p>\n<p>从整体服务的角度来说，审批的设计除了交互设计，还包含了前期平台提供每个资源的平均审批时间，帮助用户预判资源投放时间是否允许申请；中期审批发生时邮件系统即时提示普通用户和下一个审批者，并且对时间过长的审批进行邮件报警；与ERP系统进行对接及时获取审批者状态变更，如休假、离职等特殊情况发生时能够及时变更审批者。  </p>\n<p>主要设计如下图，用户在提交申请后，在个人中心能1秒直接获知：总共有几个节点，已经经过了几个节点，我在哪个节点，还有几个节点，还有多长时间。审批流上方文字对审批者进行强调：当前用户什么时间提交申请，已经审批了多长时间，总共几个节点，当前位置，暗示审批者时间过长用户可能进行催办。审批流的主要部分暴露所有审批者的姓名，以固定长度线段的方式进行展现：下一个审批者的位置固定，用户每次刷新时，页面上当前审批者和已经完成的审批者按照审批效率分配前一部分线段，下一个审批者之后的所有审批者平均分配剩余线段。用户和所有审批者能够秒速获知当前审批者是谁，前面的人已经审批了多长时间，甚至谁的速度最慢，暗示审批者当审批差距越来越明显时用户随时会找上门，及审批流当中是否存在己方或对方的上司随时会责怪，帮助审批者主动完成审批。  </p>\n<p><img src="http://ww1.sinaimg.cn/large/b73187b9ly1fgqnfst7q4j20uy07gq4b.jpg"></p>\n<p>当用户需要催办审批者时，如下图，鼠标移至审批者姓名时，会出现该审批者联系方式（如百度hi），点击则直接调起用户与该审批者的会话窗口，缩短用户催办路径，对审批者来说亦是一种威慑。  </p>\n<p><img src="http://ww1.sinaimg.cn/large/b73187b9ly1fgqngpcr8cj20us07iwfz.jpg"></p>\n<p>当发生审批驳回时，如下图，审批流会截断，并在用户再次提交申请后出现第二条审批流，审批者和用户能够快速获知该项目被驳回的次数和各阶段驳回原因。  </p>\n<p><img src="http://ww1.sinaimg.cn/large/b73187b9ly1fgqnhavaozj20us09qtak.jpg"></p>\n<p>下图是审批流在线上界面中的效果。  </p>\n<p><img src="http://ww1.sinaimg.cn/large/b73187b9ly1fgqni4v9buj20xe0gktc7.jpg"></p>\n',extra:{}}}});