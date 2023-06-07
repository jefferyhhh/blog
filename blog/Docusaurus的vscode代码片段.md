---
authors: Jeffery
title: Docusaurus之markdown文档的vscode代码片段
date: 2023-5-31
description: 适用于Docusaurus的md文档的vscode代码片段
keywords: [Docusaurus,markdown,vscode代码片段]
tags: [Docusaurus,markdown,vscode]
---
### 需求

我是使用Docusaurus建立的[个人站点](https://blog.hhdev.top/ "Jeffery's blog")，在写文档是总是要在开头配置作者、日期等等，用过[Docusaurus](https://docusaurus.io/zh-CN/ "Docusaurus")的都应该知道。

因为每次新建一个md文档都需要重新配置，很麻烦，于是我就想能不能新建一个用户代码片段（vscode的一个功能），每次我只需要敲几个字符，按回车就能得到一个模板，以至于每次写markdown的时候都不需要从零开始写配置。

### vscode代码片段

经过一番折腾，中间还出现了问题，网上找了一些教程才解决。于是有了下面的代码片段：

```json
{
	"Print to ---doc":{
		"prefix":"---doc",
		"scope": "markdown",
		"body":[
			"---",
			"authors: Jeffery",
			"title: ",
			"date: 2023-",
			"description: ",
			"keywords: []",
			"tags: []",
			"---",
		],
		"description":"Docusaurusb front matter"
	  }
}
```

> 注：vscode用户代码片段：左下角管理--用户代码片段--新建

### markdown语言的配置

一开始我没有在vscode中配置markdown，所以我的用户代码片段没有生效。

上网查资料得知需要如下配置：

1. vscode“设置”页面中点击右上角的json
2. 输入下面的内容(主要是 `"editor.quickSuggestions": true,`)

   ```json
   "[markdown]": {
           "editor.renderWhitespace": "all",
           "editor.quickSuggestions": true,
           "editor.acceptSuggestionOnEnter": "on"
         }
   ```

### 效果

完成以上的配置之后，我在用vscode写markdown的时候，只需要敲 `---doc`然后回车就能得到我自定义的模板啦。
