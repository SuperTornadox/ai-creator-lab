# Lesson 5: AI Web Designer -- Build Your Own Website -- Teacher Script
# 第五课：AI 网页设计师 -- 搭建你自己的网站 -- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students learn to build personal websites/portfolios using AI code generation, apply design principles, and export a real HTML website they can share.
**目标**: 学生学习使用 AI 代码生成构建个人网站/作品集，应用设计原则，并导出一个真正的 HTML 网站文件与他人分享。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> - Test the lesson page: make sure the `/api/code` endpoint is working. Try generating a simple website (e.g., "a page with a blue header that says Hello") and verify the preview iframe shows the result.
> - This lesson has two CodePlayground instances: one in Part 1 (template-based) and one in Part 2 (advanced customization). Both use the same `/api/code` endpoint.
> - Website generation may take 10-15 seconds because the prompts are longer than game prompts. Warn students about the wait time.
> - Prepare to show the page on the projector for the warm-up demo.
> - Consider having a finished example website open in a browser tab to show students what a completed project looks like.
>
> - 测试课程页面：确保 `/api/code` 接口正常工作。尝试生成一个简单的网站（如"一个蓝色标题写着 Hello 的页面"），验证预览框显示结果。
> - 这节课有两个 CodePlayground 实例：第一部分（模板驱动）和第二部分（高级自定义）。都使用相同的 `/api/code` 接口。
> - 网站生成可能需要 10-15 秒，因为提示词比游戏的更长。提醒学生耐心等待。
> - 准备在投影仪上展示页面进行热身演示。
> - 考虑在浏览器标签中打开一个完成的示例网站，展示给学生看最终成品的样子。

---

## Warm-up / 概念热身 (12 minutes / 分钟)

### [SLIDE 1 -- Title] *(0:00)*

EN: "Welcome! Today is one of the most exciting lessons we've had so far. You are going to build your very own website -- a real one! Not a pretend one, not a drawing of one -- an actual website file that you can open in any browser and show to anyone."

CN: "欢迎！今天是我们目前为止最令人兴奋的课程之一。你们要建造自己的网站——一个真正的网站！不是假装的，不是画出来的——是一个真正的网站文件，你可以在任何浏览器中打开，展示给任何人。"

EN: "And the best part? You already have the skills from Lesson 4. You know how to describe things to AI and get code back. Today we're taking that same skill and building something you can actually keep and share."

CN: "而且最棒的是？你已经从第四课中学会了这些技能。你知道如何向 AI 描述事物并获得代码。今天我们要用同样的技能来构建一些你可以真正保留和分享的东西。"

---

### [SLIDE 2 -- What IS a website?] *(0:02)*

EN: "First, a quick question: what IS a website? Every website you've ever visited -- Google, YouTube, Wikipedia -- is made of three building blocks. HTML is the structure and content. Think of it like the skeleton of a building. CSS is the style -- the colors, fonts, and layout. It's like the paint, wallpaper, and furniture. And JavaScript is the behavior -- what happens when you click a button or scroll the page. It's like the electricity and plumbing."

CN: "首先，一个快速的问题：什么是网站？你访问过的每一个网站——Google、YouTube、Wikipedia——都是由三个组成部分构成的。HTML 是结构和内容。把它想象成建筑的骨架。CSS 是样式——颜色、字体和布局。就像油漆、壁纸和家具。JavaScript 是行为——当你点击按钮或滚动页面时发生什么。就像电力和管道。"

EN: "But here's the thing: you do NOT need to learn any of this. AI will write all three for you. You just need to describe what you want."

CN: "但重点是：你不需要学这些。AI 会帮你写出全部三个部分。你只需要描述你想要什么。"

---

### [SLIDE 3 -- Real websites built by kids] *(0:04)*

EN: "And this is not just a classroom exercise. Young people around the world are building real websites. A 13-year-old started a book review blog that now has hundreds of readers. A 12-year-old built an art portfolio that helped them get into an art camp. A group of students created a news website for their school. Your website starts today. Where it goes is up to you."

CN: "而且这不只是课堂练习。全世界的年轻人都在建造真正的网站。一个 13 岁的孩子开始了一个书评博客，现在有几百个读者。一个 12 岁的孩子建了一个艺术作品集，帮助他们进入了一个艺术夏令营。一群学生为他们的学校创建了一个新闻网站。你的网站从今天开始。它未来会怎样取决于你。"

---

### [SLIDE 4 -- Anatomy of a web page] *(0:05)*

EN: "Before we build, let's look at the structure most websites follow. At the top, there's a header -- your name, logo, or welcome message. Below that, a navigation bar with links to jump between sections. The middle is the content -- that's where all the interesting stuff goes: text, images, cards, galleries. And at the bottom, a footer with credits and links."

CN: "在我们开始建造之前，让我们看看大多数网站遵循的结构。在顶部，有一个 header——你的名字、标志或欢迎信息。下面是导航栏，有链接可以在各部分之间跳转。中间是内容——这是所有有趣的东西：文字、图片、卡片、画廊。在底部，一个 footer 有制作信息和链接。"

EN: "Almost every website you visit has this exact same structure. When you describe your website to AI, think about each of these four parts."

CN: "你访问的几乎每一个网站都有这完全一样的结构。当你向 AI 描述你的网站时，想想这四个部分。"

---

### [SLIDE 5 -- How to describe a website to AI] *(0:07)*

EN: "So how do you describe a website to AI? The secret is: go section by section. Don't just say 'make me a website.' That's too vague! Instead, describe each section. For the header: 'A big welcome banner with my name and a gradient background.' For the about section: 'My photo on the left and bio on the right.' For the content: 'A grid of 4 hobby cards with icons.' For the colors: 'Blue and white with rounded corners.' For the footer: 'A dark footer with my name.'"

CN: "那么你怎么向 AI 描述一个网站呢？秘诀是：一个部分一个部分地描述。不要只说'给我做一个网站。'这太模糊了！取而代之的是，描述每个部分。对于标题：'一个大的欢迎横幅，写着我的名字和渐变背景。'对于关于部分：'我的照片在左边，个人简介在右边。'对于内容：'一个 4 张爱好卡片的网格，带图标。'对于颜色：'蓝色和白色，到处都是圆角。'对于页脚：'一个深色页脚，写着我的名字。'"

---

### [SLIDE 6 -- Template showcase] *(0:08)*

EN: "Now, you don't have to start from scratch! We have 4 templates ready for you. Personal Portfolio is an 'About Me' page -- great first choice if you're not sure what to build. Fan Page is for showing off your favorite topic -- cats, Minecraft, BTS, anything! Recipe Book is a mini cookbook. And News Blog is for writers who want to create articles. Click any template card and a detailed prompt loads right into the builder."

CN: "现在，你不需要从头开始！我们为你准备了 4 个模板。个人作品集是一个'关于我'的页面——如果你不确定要建什么，这是很好的第一选择。粉丝页是展示你最喜欢的话题——猫、Minecraft、BTS，任何东西！食谱书是一个迷你烹饪书。新闻博客是给想写文章的人准备的。点击任何模板卡片，详细的提示词就会自动加载到构建器中。"

---

### [SLIDE 7 -- Design principles] *(0:09)*

EN: "While your website is generating, let me teach you something real designers use. Four principles. Contrast means making important things stand out -- big headings, bold buttons. Alignment means lining things up neatly on invisible grid lines. Whitespace means giving things room to breathe -- don't cram everything together. And Consistency means using the same fonts, colors, and styles throughout your whole page."

CN: "当你的网站在生成时，让我教你一些真正的设计师使用的东西。四个原则。对比是让重要的东西突出——大标题、粗按钮。对齐是在隐形的网格线上整齐排列。留白是给东西呼吸的空间——不要把所有东西挤在一起。一致性是在整个页面中使用相同的字体、颜色和样式。"

EN: "When you look at your website later, ask yourself: 'Does this follow the four principles?'"

CN: "当你之后看你的网站时，问问自己：'这遵循了四个原则吗？'"

---

### [SLIDE 8 -- Website upgrades preview] *(0:10)*

EN: "After you build your first website, we have 8 upgrade tips waiting for you in Part 2. Things like adding a navigation bar, a photo gallery, a contact form, dark mode, animations, and even an interactive quiz! Each tip is a clickable card that automatically fills in the upgrade instruction for you."

CN: "在你建好第一个网站后，第二部分有 8 个升级提示等着你。比如添加导航栏、照片画廊、联系表单、深色模式、动画，甚至互动测验！每个提示都是一个可点击的卡片，会自动为你填写升级指令。"

---

### [SLIDE 9 -- Good vs Bad web descriptions] *(0:10)*

EN: "One more thing before we start. Remember from Lesson 4: specific descriptions give you better results. 'Make me a website' gets you something generic. But 'A portfolio with a blue header, About Me section with my photo, and 4 hobby cards in a grid' gets you exactly what you imagined. The more sections and details you describe, the better."

CN: "开始之前再说一件事。记住第四课的内容：具体的描述给你更好的结果。'给我做一个网站'会得到一些通用的东西。但'一个有蓝色标题的作品集，关于我的部分有我的照片，和 4 张爱好卡片的网格'会得到你想象的东西。你描述的部分和细节越多，结果越好。"

---

### [SLIDE 10 -- Your mission] *(0:11)*

EN: "Here's your mission: Pick a template, generate your website, customize it, upgrade it with at least 2 new features from the tip cards, and then export it! At the end, you'll swap laptops with a partner and explore each other's websites."

CN: "这是你的任务：选择一个模板，生成你的网站，自定义它，使用至少 2 个提示卡片中的新功能来升级它，然后导出它！最后，你将和搭档交换电脑，浏览彼此的网站。"

---

### [SLIDE 11 -- Open your laptops!] *(0:12)*

EN: "Open your laptops and go to the Lesson 5 page. You'll see the template cards at the top. Click one you like, and its prompt will load into the website builder. Then click 'Generate'!"

CN: "打开电脑，进入第五课的页面。你会在顶部看到模板卡片。点击一个你喜欢的，它的提示词会加载到网站构建器中。然后点击'Generate'！"

---

## Part 1: My First Website / 我的第一个网站 (25 minutes / 分钟)

### Hands-on Work *(0:12--0:37)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "Go ahead and start! Click a template card, then click Generate. Website generation takes a bit longer than what we did last time -- maybe 10-15 seconds -- because websites have more code. Be patient!"

CN: "开始吧！点击一个模板卡片，然后点击 Generate。网站生成比我们上次做的要长一点——大概 10-15 秒——因为网站有更多的代码。耐心等待！"

**[Give students 25 minutes total for Part 1 / 给学生第一部分总共 25 分钟]**

> **First 5 minutes -- generation and first look / 前 5 分钟 -- 生成和第一次浏览:**
> EN: "Your website appeared! Look at the preview on the right. Scroll down inside it -- does it have all the sections? A header? Content? A footer? What do you like about it? What would you change?"
> CN: "你的网站出现了！看右边的预览。在里面向下滚动——它有所有的部分吗？标题？内容？页脚？你喜欢什么？你想改什么？"

> **After 5 minutes -- encourage customization / 5 分钟后 -- 鼓励自定义:**
> EN: "Now the fun part! Use the 'What to change?' box to start making it yours. Try things like: 'Change my name to [your actual name]' or 'Change the color scheme to green and black' or 'Replace the hobby cards with my real hobbies: basketball, Roblox, drawing, and cooking.' Make this YOUR website, not just a template!"
> CN: "现在是有趣的部分！使用'What to change?'框开始让它成为你自己的。试试这些：'把我的名字改成[你的真名]'或'把颜色方案改成绿色和黑色'或'用我真实的爱好替换爱好卡片：篮球、Roblox、画画和烹饪。'让这成为你的网站，而不仅仅是一个模板！"

> **After 12 minutes -- check progress / 12 分钟后 -- 检查进度:**
> EN: "Has everyone generated a website? If your first template didn't work well, try a different one! Personal Portfolio is the most reliable if you're having trouble. And remember the tips box below the playground -- it tells you how to describe sections and colors."
> CN: "每个人都生成了一个网站吗？如果你的第一个模板效果不好，试试另一个！如果遇到困难，Personal Portfolio 是最可靠的。记住操场下面的提示框——它告诉你如何描述各部分和颜色。"

> **After 18 minutes -- preview Part 2 transition / 18 分钟后 -- 预告第二部分过渡:**
> EN: "In a few minutes we're moving to Part 2 -- the upgrade section. If you're happy with your current website, great! In Part 2 you'll add cool features like navigation bars, dark mode, and animations."
> CN: "几分钟后我们将进入第二部分——升级部分。如果你对你目前的网站满意，太好了！在第二部分你将添加很酷的功能，比如导航栏、深色模式和动画。"

> **Contingency / 应对方案:**
> EN: If a student's website looks broken or incomplete: "Don't worry! Sometimes the AI doesn't get it perfect. Try these things: (1) Click Generate again with the same prompt -- you might get a better version. (2) Add more specific details like 'Make sure all sections are centered and use a clean white background.' (3) Try the Personal Portfolio template -- it's the simplest one."
> CN: 如果学生的网站看起来有问题："别担心！有时候 AI 不会做到完美。试试这些：(1) 用相同的提示词再点一次 Generate——你可能会得到更好的版本。(2) 添加更具体的细节，如'确保所有部分居中，使用干净的白色背景。'(3) 试试 Personal Portfolio 模板——它是最简单的。"

> **Contingency / 应对方案:**
> EN: If a student finishes quickly and their site looks great: "Impressive! Now try making it more personal. Can you add your real hobbies? Change the colors to match your favorite ones? Or try a SECOND template and build a completely different site!"
> CN: 如果学生很快完成且网站看起来很好："令人印象深刻！现在试着让它更个人化。你能添加你真实的爱好吗？把颜色改成你最喜欢的？或者试试第二个模板，建一个完全不同的网站！"

---

## Part 2: Customize & Expand / 自定义和扩展 (15 minutes / 分钟)

### Transition *(0:37)*

EN: "Alright, everyone scroll down past the Part 1 playground. You'll see the big banner that says 'Part 2: Customize & Expand.' Below that are 8 upgrade tip cards. This is where you make your website really shine."

CN: "好了，大家向下滚动过第一部分的操场。你会看到写着'Part 2: Customize & Expand'的大横幅。下面有 8 个升级提示卡片。这是你让你的网站真正闪耀的地方。"

---

### Hands-on Work *(0:37--0:52)*

EN: "Here's how the upgrades work: click any tip card, and it automatically fills in the instruction in the 'What to change?' box of the playground below. Then click Update. Try at least TWO upgrades. My favorites are 'Add animations' and 'Change the color scheme' -- but they're all great."

CN: "升级是这样工作的：点击任何提示卡片，它会自动在下面操场的'What to change?'框中填写指令。然后点击 Update。至少尝试两个升级。我最喜欢的是'Add animations'和'Change the color scheme'——但它们都很棒。"

**[Give students 15 minutes for Part 2 / 给学生第二部分 15 分钟]**

> **First 5 minutes -- upgrades / 前 5 分钟 -- 升级:**
> EN: "If you want to try upgrades on the SAME website you built in Part 1, you can copy your code. Click on the code area in Part 1, select all and copy. Then paste it into the Part 2 playground's code box before applying upgrades."
> CN: "如果你想在第一部分建的同一个网站上尝试升级，你可以复制你的代码。点击第一部分的代码区域，全选并复制。然后在应用升级之前，粘贴到第二部分操场的代码框中。"

> **After 8 minutes -- design principles discussion / 8 分钟后 -- 设计原则讨论:**
> EN: "Scroll down a bit more -- you'll see the 4 Design Principles section. Take 30 seconds to read them: Contrast, Alignment, Whitespace, Consistency. Now look at YOUR website. Does it follow these principles? If not, you can ask AI to fix it! Try: 'Add more whitespace between sections' or 'Make the headings bigger for better contrast.'"
> CN: "再向下滚动一点——你会看到 4 个设计原则部分。花 30 秒阅读它们：对比、对齐、留白、一致性。现在看看你的网站。它遵循这些原则吗？如果不遵循，你可以让 AI 修复！试试：'在各部分之间添加更多留白'或'把标题变大以获得更好的对比。'"

> **Last 3 minutes of Part 2 / 第二部分最后 3 分钟:**
> EN: "We're almost at sharing time! If you're happy with your website, scroll down to 'Save & Share Your Website' and click the download button. This saves your website as an HTML file you can keep forever."
> CN: "我们快到分享时间了！如果你对你的网站满意了，向下滚动到'Save & Share Your Website'，点击下载按钮。这会把你的网站保存为一个 HTML 文件，你可以永远保留。"

> **Contingency / 应对方案:**
> EN: If students are stuck on what to upgrade: "Here's an easy one to try first: click 'Change the color scheme.' Your entire website will get a new look! Dark mode makes everything feel professional. Or try 'Add animations' -- it makes your website feel alive."
> CN: 如果学生不知道要升级什么："先试试这个简单的：点击'Change the color scheme'。你的整个网站会获得新外观！深色模式让一切感觉更专业。或者试试'Add animations'——它让你的网站感觉活了起来。"

> **Contingency / 应对方案:**
> EN: If the Part 2 playground seems disconnected from Part 1's code: "The Part 2 playground starts fresh. If you want to keep building on your Part 1 website, just use the Part 1 playground! The upgrade tips work with any playground -- they'll fill in the closest 'What to change?' box."
> CN: 如果第二部分操场与第一部分的代码似乎不相关："第二部分操场是重新开始的。如果你想继续在第一部分的网站上构建，就使用第一部分的操场！升级提示适用于任何操场——它们会填写最近的'What to change?'框。"

---

## Share & Export / 分享与展示 (8 minutes / 分钟) *(0:52--1:00)*

EN: "Time to show off your websites! First, make sure you've clicked the download button to save your website. Then find a partner and swap laptops. Spend 2 minutes exploring each other's website."

CN: "展示你们网站的时间到了！首先，确保你已经点击了下载按钮保存你的网站。然后找一个搭档，交换电脑。花 2 分钟浏览彼此的网站。"

**[Give students 3-4 minutes for pair sharing / 给学生 3-4 分钟互相分享]**

EN: "When you look at your partner's website, give them one compliment and one suggestion. What looks great? What could they add or change to make it even better?"

CN: "当你看搭档的网站时，给他们一个赞美和一个建议。什么看起来很棒？他们可以添加或改变什么来让它更好？"

**[After pair sharing / 互相分享后]**

EN: "OK, who wants to show their website to the whole class? Come up and we'll project it!"

CN: "好的，谁想把自己的网站展示给全班看？上来，我们投影出来！"

**[1-2 volunteers demo their websites / 1-2 个志愿者展示他们的网站]**

EN: "Tell us about your website! What template did you start with? What did you customize? Which upgrades did you add?"

CN: "给我们介绍你的网站！你从哪个模板开始的？你自定义了什么？你添加了哪些升级？"

**[After demos / 展示后]**

EN: "Great work! Here's something cool to think about: the HTML file you downloaded today is EXACTLY how real websites work. Every website you visit is just HTML, CSS, and JavaScript -- the same things AI generated for you today. The difference between your website and YouTube is just the amount of code, not the technology."

CN: "做得好！这里有一个很酷的事情要想想：你今天下载的 HTML 文件和真正的网站工作方式完全一样。你访问的每个网站都只是 HTML、CSS 和 JavaScript——和今天 AI 为你生成的完全相同。你的网站和 YouTube 之间的区别只是代码量，不是技术。"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(1:00)*

EN: "Today you did something amazing. You built a real website from scratch using AI. You learned that websites are made of HTML, CSS, and JavaScript. You learned how to describe sections to AI. You applied 4 design principles: contrast, alignment, whitespace, and consistency. And you exported a file that works in any browser."

CN: "今天你们做了一件了不起的事。你们用 AI 从零开始构建了一个真正的网站。你们学到了网站由 HTML、CSS 和 JavaScript 组成。你们学会了如何向 AI 描述各个部分。你们应用了 4 个设计原则：对比、对齐、留白和一致性。你们导出了一个在任何浏览器中都能工作的文件。"

EN: "The website you made today is yours to keep. You can open that HTML file on any computer, show it to your parents, share it with friends. You're not just users of the internet anymore -- you're builders. See you next time!"

CN: "你今天做的网站是你自己的。你可以在任何电脑上打开那个 HTML 文件，展示给你的父母，和朋友分享。你不再只是互联网的使用者——你是建造者。下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:02 | Welcome | Slide 1 -- Title & intro |
| 0:02--0:04 | What is a website? | Slide 2 -- HTML, CSS, JS building blocks |
| 0:04--0:05 | Inspiration | Slide 3 -- Young people build real websites |
| 0:05--0:07 | Anatomy | Slide 4 -- Header, Nav, Content, Footer structure |
| 0:07--0:08 | Describe to AI | Slide 5 -- Section-by-section approach |
| 0:08--0:09 | Templates | Slide 6 -- 4 template options |
| 0:09--0:10 | Design principles | Slide 7 -- Contrast, Alignment, Whitespace, Consistency |
| 0:10--0:11 | Upgrades + Descriptions | Slides 8--9 -- Upgrade preview, good vs bad descriptions |
| 0:11--0:12 | Mission + Launch | Slides 10--11 -- Mission overview; students open laptops |
| 0:12--0:37 | Part 1 work | Students pick templates, generate and customize websites (25 min) |
| 0:37--0:52 | Part 2 work | Students apply upgrades, learn design principles (15 min) |
| 0:52--1:00 | Share & wrap-up | Swap websites, volunteers demo, discussion, export (8 min) |
