(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{505:function(_,t,v){"use strict";v.r(t);var e=v(15),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("a",{attrs:{href:"https://docs.github.com/cn",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方文档"),v("OutboundLink")],1)]),_._v(" "),v("h1",{attrs:{id:"_1-快速入门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速入门"}},[_._v("#")]),_._v(" 1.快速入门")]),_._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[_._v("#")]),_._v(" 简介")]),_._v(" "),v("p",[_._v("GitHub 是一个用于版本控制和协作的代码托管平台。 它使您和其他人可以在任何地方一起处理项目。")]),_._v(" "),v("p",[_._v("本教程向您介绍 GitHub 基本知识，例如存储库、分支、提交和拉取请求。 您将创建自己的 Hello World 存储库并学习 GitHub 的拉取请求工作流程，这是一种创建和审查代码的流行方式。")]),_._v(" "),v("p",[_._v("在本快速入门指南中，您将：")]),_._v(" "),v("ul",[v("li",[_._v("创建和使用存储库（repository）")]),_._v(" "),v("li",[_._v("启动和管理新分支（branch）")]),_._v(" "),v("li",[_._v("对文件进行更改并将其作为提交（commits）推送（push）到 GitHub")]),_._v(" "),v("li",[_._v("打开并合并（merge）拉取请求（pull request）")])]),_._v(" "),v("p",[_._v("要完成本教程，您需要一个 "),v("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub 帐户"),v("OutboundLink")],1),_._v("和 Internet 访问权限。您无需知道如何编码、使用命令行或安装 Git（构建 GitHub 的版本控制软件）。")]),_._v(" "),v("h2",{attrs:{id:"创建仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[_._v("#")]),_._v(" 创建仓库")]),_._v(" "),v("p",[_._v("存储库通常用于组织单个项目。存储库可以包含文件夹和文件、图像、视频、电子表格和数据集——项目需要的任何内容。通常，存储库包括一个"),v("code",[_._v("README")]),_._v("自述文件，一个包含项目信息的文件。GitHub使您可以轻松地在创建新存储库的同时添加一个存储库。它还提供了其他常见选项，如许可证文件。")]),_._v(" "),v("p",[_._v("您的"),v("code",[_._v("hello world")]),_._v("存储库可以是您存储想法、资源，甚至与他人共享和讨论事物的地方。")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("在任何页面的右上角，使用 下拉菜单选择 "),v("strong",[_._v("New repository（新建仓库）")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://docs.github.com/assets/cb-11427/images/help/repository/repo-create.png",alt:"带有创建新仓库选项的下拉菜单",loading:"lazy"}})])]),_._v(" "),v("li",[v("p",[_._v("在存储库名称框中，输入"),v("code",[_._v("hello-world")]),_._v("。")]),_._v(" "),v("p",[_._v("。")])]),_._v(" "),v("li",[v("p",[_._v("在描述框中，写一个简短的描述。")])]),_._v(" "),v("li",[v("p",[_._v("选择 "),v("strong",[_._v("Add a README file")]),_._v("添加自述文件")])]),_._v(" "),v("li",[v("p",[_._v("单击 "),v("strong",[_._v("Create repository（创建仓库）")]),_._v("。")]),_._v(" "),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/hello-world-repo.png",alt:"Create a hello world repository"}})])]),_._v(" "),v("h2",{attrs:{id:"创建分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[_._v("#")]),_._v(" 创建分支")]),_._v(" "),v("p",[_._v("分支允许您一次拥有不同版本的存储库。")]),_._v(" "),v("p",[_._v("默认情况下，存储库有一个名为"),v("code",[_._v("main")]),_._v("的分支，该分支被视为最终分支。在将分支提交到"),v("code",[_._v("main")]),_._v("之前，可以"),v("strong",[_._v("使用分支进行试验和编辑")]),_._v("。")]),_._v(" "),v("p",[_._v("当您在"),v("code",[_._v("main")]),_._v("分支之外创建分支时，您正在创建"),v("code",[_._v("main")]),_._v("分支在该时间点的副本或快照（snapshot）。如果其他人在您处理您的分支时对"),v("code",[_._v("main")]),_._v("分支进行了更改，您可以拉入这些更新。")]),_._v(" "),v("p",[_._v("此图显示：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("main")]),_._v("分支")]),_._v(" "),v("li",[_._v("一个叫"),v("code",[_._v("feature")]),_._v("的新分支")]),_._v(" "),v("li",[_._v("该"),v("code",[_._v("feature")]),_._v("分支在合并到"),v("code",[_._v("main")]),_._v("分支之前所经历的过程\n"),v("ul",[v("li",[v("img",{attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/branching.png",alt:"branching diagram",loading:"lazy"}})])])])]),_._v(" "),v("p",[_._v("您是否保存过文件的不同版本？比如：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("story.txt")])]),_._v(" "),v("li",[v("code",[_._v("story-joe-edit.txt")])]),_._v(" "),v("li",[v("code",[_._v("story-joe-edit-reviewed.txt")])])]),_._v(" "),v("p",[_._v("分支在GitHub存储库中实现类似的目标。\n在GitHub，我们的开发人员、编写人员和设计人员使用分支将bug修复和功能工作与我们的"),v("code",[_._v("main")]),_._v("（生产）分支分开。当变更准备就绪时，它们将分支合并到"),v("code",[_._v("main")]),_._v("分支中。")]),_._v(" "),v("h2",{attrs:{id:"创建分支-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建分支-2"}},[_._v("#")]),_._v(" 创建分支")]),_._v(" "),v("p",[_._v("1.单击 "),v("code",[_._v("hello-world")]),_._v(" 存储库的"),v("code",[_._v("Code")]),_._v("选项卡。")]),_._v(" "),v("p",[_._v("2.单击"),v("code",[_._v("main")]),_._v("文件列表顶部的下拉菜单。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/branch-selection-dropdown.png",alt:"Branch menu",loading:"lazy"}})]),_._v(" "),v("p",[_._v("3.在文本框中输入分支名称 "),v("code",[_._v("readme-edits")]),_._v("。")]),_._v(" "),v("p",[_._v("4.单击Create branch: readme-edits创建分支。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/new-branch.png",alt:"Branch menu"}}),_._v(" "),v("p",[_._v("现在有了两个分支，"),v("code",[_._v("main")]),_._v("和"),v("code",[_._v("readme-edits")]),_._v("。现在，他们看起来一模一样。接下来，您将向新分支添加更改。")]),_._v(" "),v("h2",{attrs:{id:"进行和提交更改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进行和提交更改"}},[_._v("#")]),_._v(" 进行和提交更改")]),_._v(" "),v("p",[_._v("在上一步中创建新分支时，GitHub将您带到新"),v("code",[_._v("readme-edits")]),_._v("分支的代码页，这是"),v("code",[_._v("main")]),_._v("的副本。")]),_._v(" "),v("p",[_._v("您可以对存储库中的文件进行更改并保存。在GitHub上，保存的更改称为提交(commits)。每个提交都有一条关联的提交消息，这是一条解释为什么要进行特定更改的描述。提交消息捕获更改的历史记录，以便其他贡献者能够理解您所做的事情及其原因。")]),_._v(" "),v("ol",[v("li",[_._v("点击 "),v("code",[_._v("README.md")]),_._v("文件.")]),_._v(" "),v("li",[_._v("点击编辑文件.")]),_._v(" "),v("li",[_._v("在编辑器中写点东西.")]),_._v(" "),v("li",[_._v("在 "),v("strong",[_._v("Commit changes")]),_._v("框中, 写下有关你的更改的提交信息.")]),_._v(" "),v("li",[_._v("单击 "),v("strong",[_._v("Commit changes（提交更改）")]),_._v("。")])]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/first-commit.png",alt:"Commit example"}}),_._v(" "),v("p",[_._v("这些更改将仅对您的 "),v("code",[_._v("readme-edits")]),_._v(" 分支上的 "),v("code",[_._v("README")]),_._v(" 文件进行，因此现在此分支包含与 "),v("code",[_._v("main")]),_._v(" 不同的内容。")]),_._v(" "),v("h2",{attrs:{id:"打开拉取请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#打开拉取请求"}},[_._v("#")]),_._v(" 打开拉取请求")]),_._v(" "),v("p",[_._v("既然在"),v("code",[_._v("main")]),_._v("的分支中进行了更改，就可以打开一个pull请求。")]),_._v(" "),v("p",[_._v("拉取请求是GitHub上协作的核心。当您打开一个pull request时，您正在建议您的更改，并请求某人审查(review )并加入您的贡献，并将它们合并到他们的分支中。Pull requests显示来自两个分支的内容的差异。更改、添加和删除以不同的颜色显示。")]),_._v(" "),v("p",[_._v("一旦进行提交，就可以打开pull request并开始讨论，甚至在代码完成之前。")]),_._v(" "),v("p",[_._v("通过在pull request消息中使用GitHub的"),v("code",[_._v("@notice")]),_._v("功能，您可以请求特定人员或团队的反馈，无论他们是在大厅内还是在10个时区之外。")]),_._v(" "),v("p",[_._v("您甚至可以在自己的存储库中打开pull request并自己合并它们。在进行更大的项目之前，这是学习GitHub流(flow)的一个好方法。")]),_._v(" "),v("ol",[v("li",[_._v("点击"),v("strong",[_._v("Pull requests")]),_._v(" 选项卡。")]),_._v(" "),v("li",[_._v("点击 "),v("strong",[_._v("New pull request")])]),_._v(" "),v("li",[_._v("在 "),v("strong",[_._v("Example Comparisons")]),_._v(" 框中，选择您创建的分支 "),v("code",[_._v("readme-edits")]),_._v(" 以与 "),v("code",[_._v("main")]),_._v("（原始）进行比较。")]),_._v(" "),v("li",[_._v("在比较页面上查看您对差异的更改，确保它们是您要提交的内容。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/diffs.png",alt:"diff example",loading:"lazy"}})]),_._v(" "),v("p",[_._v("​\t5.单击 "),v("strong",[_._v("Create pull request（创建拉取请求）")]),_._v("。")]),_._v(" "),v("p",[_._v("​\t6.给你的拉取请求一个标题并写下你的更改的简短描述。您可以包含表情符号以及拖放图像和 GIF。")]),_._v(" "),v("p",[_._v("​\t7.单击 "),v("strong",[_._v("Create pull request（创建拉取请求）")]),_._v("。")]),_._v(" "),v("p",[_._v("您的协作者现在可以查看您的编辑并提出建议。")]),_._v(" "),v("h2",{attrs:{id:"合并您的pull-request"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合并您的pull-request"}},[_._v("#")]),_._v(" 合并您的pull request")]),_._v(" "),v("p",[_._v("在这最后一步中，您会将"),v("code",[_._v("readme-edits")]),_._v("分支合并到"),v("code",[_._v("main")]),_._v("分支中。")]),_._v(" "),v("ol",[v("li",[_._v("点击"),v("strong",[_._v("Merge pull request")]),_._v(" 合并更改到 "),v("code",[_._v("main")]),_._v(".")]),_._v(" "),v("li",[_._v("单击 "),v("strong",[_._v("Confirm merge（确认合并）")]),_._v("。")]),_._v(" "),v("li",[_._v("通过单击"),v("strong",[_._v("Delete branch")]),_._v("继续并删除分支，因为它的更改已被合并。")])]),_._v(" "),v("h2",{attrs:{id:"后续步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤"}},[_._v("#")]),_._v(" 后续步骤")]),_._v(" "),v("p",[_._v("通过完成本教程，您已经学会了在GitHub上创建项目并发出请求。")]),_._v(" "),v("p",[_._v("以下是您在本教程中完成的内容：")]),_._v(" "),v("ul",[v("li",[_._v("创建了一个开源存储库")]),_._v(" "),v("li",[_._v("创办并管理了一个新的分支机构")]),_._v(" "),v("li",[_._v("更改了一个文件并将这些更改提交给GitHub")]),_._v(" "),v("li",[_._v("打开并合并拉取请求")])]),_._v(" "),v("p",[_._v("查看一下您的GitHub配置文件，您将看到您的工作反映在您的贡献图上。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://yq-tuchuang.oss-cn-beijing.aliyuncs.com/image-20220124235222209.png",alt:"image-20220124235222209",loading:"lazy"}})]),_._v(" "),v("p",[_._v("有关分支和拉请求功能的更多信息，请参阅“"),v("a",{attrs:{href:"https://docs.github.com/cn/get-started/quickstart/github-flow",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub流"),v("OutboundLink")],1),_._v("”")]),_._v(" "),v("p",[_._v("有关GitHub入门的更多信息，请参阅《"),v("a",{attrs:{href:"https://docs.github.com/cn/get-started/quickstart",target:"_blank",rel:"noopener noreferrer"}},[_._v("快速入门"),v("OutboundLink")],1),_._v("》中的其他指南。")])])}),[],!1,null,null,null);t.default=r.exports}}]);