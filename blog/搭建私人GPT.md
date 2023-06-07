---
authors: Jeffery
date: 2023-5-1
description: 刘泽桦的个人GPT
keywords: [ChatGPT]
tags: [ChatGPT]
---
前几天在掘金看到一个搭建私人ChatGPT的教程，看起来并不难。

我也有OpenAI的API Key，然后前阵子我看到我的账号余额还有很多，我的api key其实就一个机器人在用，没用多少。

还有，就是我的余额要过期了，还有一个月。歪果仁的羊毛，不薅白不薅😆

所以，就有这个文章，把我的GPT分享给大家并教大家使用。

感谢GitHub上的项目：[https://github.com/Yidadaa/ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)

## 使用方法

### 打开网站

使用手机或者电脑打开我的GPT网站：

> https://my-gpt-next-web-sigma.vercel.app/

![界面图示](https://zhimg.oss-cn-guangzhou.aliyuncs.com/wx/20230501002032.png)

### 输入密码

转到设置页面，输入密码（公众号‘摸鱼星人’获取）。

![密码设置位置](https://zhimg.oss-cn-guangzhou.aliyuncs.com/wx/20230501002301.png)

当然你也可以输入自己的API Key。

### 开启聊天

回到聊天界面，你就可以和AI聊天啦~

另外，这个网站还提供了很多“面具”，就是一些预设、Prompt，你可以使用这些“面具”让你和AI在不同的语境下聊天。

![预收界面](https://zhimg.oss-cn-guangzhou.aliyuncs.com/wx/20230501002641.png)

## 搭建过程

搭建其实很容易，在[大佬项目](https://github.com/Yidadaa/ChatGPT-Next-Web)的readme文档中点击“Deploy”，只需要一个github账号，一个手机号接受验证码，简直可以说是一键无脑部署。

有一个问题就是，vercel.app在国内被墙了的。网上说是DNS被污染了，服务器IP并没有被墙，所以可以使用自定义域名来指向它，使国内也可以访问。

### 域名准备

首先得有一个域名，我是在阿里万网弄的域名，使用它的子域名指向vercel.app就行，例如我的：chat.hhdev.top

### vercel设置域名

[vercel](https://vercel.com/)这边，找到你的project，点击setting->Domains，输入你的域名，如chat.hhdev.top

![](https://zhimg.oss-cn-guangzhou.aliyuncs.com/wx/20230501102931.png)

点击add，先不用管页面提示，先去弄DNS解析

### DNS解析

我使用的是阿里的DNS服务，填写两条解析，类型是NS，听说要比CNAME要快。

记录值填这个：

> ns1.vercel-dns.com
>
> ns2.vercel-dns.com

一个一条

![](https://zhimg.oss-cn-guangzhou.aliyuncs.com/wx/20230501104352.png)

### vercel换NS解析

返回vercel，默认是CNAME解析的，你只需要切换为NS模式。然后页面显示域名已配置好，正在生成 SSL 证书（Generating SSL Certificate）

这样你就可以很方便地通过自己的域名访问啦。

#### 参考

[使用 Vercel 快速部署前端项目_vercel删除项目_掘墓人4449的博客-CSDN博客](https://blog.csdn.net/juemuren444/article/details/127585333 "使用 Vercel 快速部署前端项目_vercel删除项目_掘墓人4449的博客-CSDN博客")
