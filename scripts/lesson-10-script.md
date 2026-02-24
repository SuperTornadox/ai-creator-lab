# Lesson 10: AI Toolbox --- Combine Everything! --- Teacher Script
# 第十课：AI 工具箱 --- 综合运用！ --- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive workspace (`index.html`), Student laptops
**Goal / 目标**: Students combine all three AI tools (Text AI, Image AI, Code AI) into one complex creative project, practicing the full workflow of planning, creating content, and assembling a final product.
**目标**: 学生将三种 AI 工具（文本 AI、图片 AI、代码 AI）综合运用到一个复杂的创意项目中，练习规划、创建内容和组装最终产品的完整流程。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> This lesson is the "dress rehearsal" before the final project. Students will pick a mega-project and use all three AI tools to build it. The key difference from the final project (Lesson 11) is that this is structured practice with a workflow guide --- the final project gives more freedom.
>
> **Before class / 课前准备:**
> - Test the lesson page: open `/lesson-10/index.html` and verify all four tabs (Text AI, Image AI, Code AI, My Collection) work
> - Verify `/api/chat`, `/api/image`, and `/api/code` endpoints are all working
> - Consider preparing a simple 1-minute demo of the workflow: write text -> generate image -> build a code page that uses both
> - Have a timer visible for the class --- this lesson has a long build phase and students can easily lose track of time
> - Be ready to help students copy-paste text and image URLs between tools --- this is the trickiest part for beginners
>
> 这节课是期末项目前的"彩排"。学生将选择一个大项目并使用所有三种 AI 工具来构建它。与期末项目（第11课）的主要区别是这节课有结构化的练习和工作流程指南——期末项目给予更多自由。
>
> **课前准备：**
> - 测试课程页面：打开 `/lesson-10/index.html`，验证所有四个标签（文本 AI、图片 AI、代码 AI、我的收藏）正常工作
> - 验证 `/api/chat`、`/api/image` 和 `/api/code` 接口都正常工作
> - 考虑准备一个简单的1分钟工作流程演示：写文本 -> 生成图片 -> 构建使用两者的代码页面
> - 准备一个对全班可见的计时器——这节课有很长的构建阶段，学生很容易忘记时间
> - 准备好帮助学生在工具之间复制粘贴文本和图片 URL——这是初学者最棘手的部分

---

## Warm-up & Review / 热身与回顾 (10 minutes / 分钟)

### [SLIDE 1 --- Title] *(0:00)*

EN: "Welcome to Lesson 10! This is a big one. Today is called 'AI Toolbox' because you are going to open up your entire toolbox and use EVERY AI tool we have learned. Text AI, Image AI, Code AI --- all of them, in one project."

CN: "欢迎来到第10课！这是一堂重要的课。今天叫做'AI 工具箱'，因为你要打开你的整个工具箱，使用我们学过的每一个 AI 工具。文本 AI、图片 AI、代码 AI——全部在一个项目中使用。"

---

### [SLIDE 2 --- Your AI Skills So Far] *(0:01)*

EN: "Let's review what's in your toolbox. Text AI --- you can make AI write stories, articles, descriptions, any kind of text. Image AI --- you can generate artwork, photos, illustrations in any style. Music AI --- you learned to compose songs and soundtracks. And Code AI --- you can build interactive web pages. That's an incredible set of skills!"

CN: "让我们回顾一下你工具箱里有什么。文本 AI——你可以让 AI 写故事、文章、描述，任何类型的文字。图片 AI——你可以生成任何风格的艺术品、照片、插图。音乐 AI——你学会了创作歌曲和配乐。代码 AI——你可以构建互动网页。这是一套令人难以置信的技能！"

EN: "Today we are going to use Text AI, Image AI, and Code AI all together."

CN: "今天我们要一起使用文本 AI、图片 AI 和代码 AI。"

---

### [SLIDE 3 --- Real Creators Combine Tools] *(0:03)*

EN: "Here's the thing --- real creators never use just one tool. A journalist writes articles AND takes photos AND designs the page layout. A game designer codes the mechanics AND creates the art AND composes the music. A marketer writes the copy AND designs the visuals AND builds the website."

CN: "事实是这样的——真正的创作者从不只使用一种工具。记者写文章、拍照、设计页面布局。游戏设计师编写游戏机制、创建美术、创作音乐。营销人员写文案、设计视觉效果、建设网站。"

EN: "The more tools you can combine, the more powerful your creations become. That's what you're going to practice today."

CN: "你能组合的工具越多，你的创作就越强大。这就是你今天要练习的。"

---

### [SLIDE 4 --- The 4 Mega-Project Options] *(0:05)*

EN: "You get to choose one of four mega-projects. Let me walk through each one."

CN: "你可以从四个大项目中选择一个。让我逐一介绍。"

EN: "First: AI Magazine. You write articles using Text AI, generate a cover and illustrations with Image AI, and build the magazine layout with Code AI. Think of it as your own digital magazine about any topic you want."

CN: "第一个：AI 杂志。你用文本 AI 写文章，用图片 AI 生成封面和插图，然后用代码 AI 构建杂志布局。把它想象成你自己关于任何主题的数字杂志。"

EN: "Second: AI Product Pitch. You invent a fake product --- it can be anything, a flying backpack, a robot pet, whatever --- then write marketing copy, design the product image, and build a landing page. Like a real startup!"

CN: "第二个：AI 产品推介。你发明一个假产品——可以是任何东西，飞行背包、机器人宠物，随便什么——然后写营销文案、设计产品图片，并建一个着陆页面。就像一个真正的创业公司！"

EN: "Third: AI Tutorial. You pick any topic you know about --- cooking, drawing, a video game --- and create a how-to guide with step-by-step instructions, illustrations for each step, and an interactive tutorial page."

CN: "第三个：AI 教程。你选择你了解的任何主题——烹饪、绘画、电子游戏——然后创建一个带有分步说明、每步插图和互动教程页面的操作指南。"

EN: "Fourth: AI Travel Guide. Write about a destination --- it can be a real place or a completely imaginary one --- generate travel photos, and build a travel website."

CN: "第四个：AI 旅游指南。写一个目的地——可以是真实的地方，也可以是完全虚构的——生成旅行照片，并建一个旅游网站。"

EN: "Every single project uses all three tools: Text AI for writing, Image AI for visuals, and Code AI for the final product."

CN: "每一个项目都使用所有三种工具：文本 AI 写作，图片 AI 做视觉效果，代码 AI 做最终产品。"

---

### [SLIDE 5 --- The Workflow] *(0:07)*

EN: "Here's how to approach this. Don't just dive in randomly. Follow this workflow: Plan, Write, Illustrate, Build, Polish."

CN: "这是方法。不要随便开始。遵循这个流程：规划、写作、插图、构建、润色。"

EN: "First, plan --- think about what content you need. What text? What images? What should the final page look like? Then write your text content using Text AI. Then generate your images. Then put it all together using Code AI. And finally, go back and polish everything."

CN: "首先，规划——想想你需要什么内容。什么文字？什么图片？最终页面应该是什么样的？然后用文本 AI 写你的文字内容。然后生成图片。然后用代码 AI 把所有东西组合在一起。最后，回去润色所有东西。"

EN: "The key thing is: start with your content, THEN assemble it. Don't try to build the page before you have anything to put on it."

CN: "关键是：先准备内容，然后再组装。不要在你没有任何内容之前就试图建立页面。"

---

### [SLIDE 6 --- How Tools Connect] *(0:08)*

EN: "Let me show you how the three tools connect. Text AI creates your words --- articles, descriptions, headlines. Image AI creates your visuals --- photos, illustrations, product images. And Code AI is the assembler --- it takes your text and images and puts them into a finished page."

CN: "让我展示三个工具是如何连接的。文本 AI 创建你的文字——文章、描述、标题。图片 AI 创建你的视觉效果——照片、插图、产品图片。而代码 AI 是组装者——它把你的文字和图片放到一个完成的页面中。"

EN: "So the formula is: Text plus Images, assembled by Code, equals a complete project."

CN: "所以公式是：文字加图片，由代码组装，等于一个完整的项目。"

---

### [SLIDE 7 --- Tips for Combining Outputs] *(0:09)*

EN: "Here are the practical tips you need. When you write text in the chat, you can copy it and paste it into your code prompt. For example, tell Code AI: 'Make a web page with this article' and paste the text."

CN: "这是你需要的实用技巧。当你在聊天中写文字时，可以复制它并粘贴到你的代码提示中。例如，告诉代码 AI：'用这篇文章做一个网页'然后粘贴文字。"

EN: "For images, after you generate one, you can right-click and copy the image URL. Then tell Code AI to use that URL in the page. And use the project notes area to save anything you want to remember --- URLs, good prompts, text snippets."

CN: "对于图片，在你生成一张之后，你可以右键复制图片 URL。然后告诉代码 AI 在页面中使用那个 URL。并使用项目笔记区保存任何你想记住的东西——URL、好的提示、文字片段。"

---

## Project Selection / 项目选择 (5 minutes / 分钟) *(0:10--0:15)*

### [SLIDE 8 --- Common Mistakes] *(0:10)*

EN: "One more thing before you start. Here are the common mistakes to avoid. Number one: don't try to do everything at once. Work step by step. Number two: don't jump straight to code without having your content ready. Get your text and images first. Number three: don't spend ALL your time on just one tool. You need to use all three."

CN: "在你开始之前还有一件事。这是要避免的常见错误。第一：不要试图一次做所有事情。一步一步来。第二：不要在没有准备好内容的情况下直接跳到代码。先准备好文字和图片。第三：不要把所有时间都花在一个工具上。你需要使用全部三个。"

---

### [SLIDE 9 --- Quality Checklist] *(0:11)*

EN: "And when you think you're done, check these five things. Does it look good? Is the layout clean? Does it read well? Is the text interesting? Do the images match your content? Does the page actually work correctly? And the big one --- would you be proud to show this to someone?"

CN: "当你觉得完成时，检查这五件事。看起来好吗？布局干净吗？读起来好吗？文字有趣吗？图片和内容匹配吗？页面确实正确运行吗？最重要的——你会自豪地向别人展示这个吗？"

---

### [SLIDE 10 --- Your Mission] *(0:12)*

EN: "Your mission: Pick a mega-project. Use all three AI tools. Build a complete project you can share. And export it at the end. You have about 35 minutes to build, then we'll share."

CN: "你的任务：选择一个大项目。使用全部三种 AI 工具。构建一个可以分享的完整项目。最后导出它。你有大约35分钟来构建，然后我们分享。"

---

### [SLIDE 11 --- Open Your Laptops] *(0:13)*

EN: "Open your laptops and go to the Lesson 10 page. The first thing you'll see is four project cards. Click on the one you want to do. Once you choose, the build workspace and workflow guide will appear. Take 2 minutes to pick your project and read the workflow guide. Then start building!"

CN: "打开电脑，进入第10课的页面。你首先会看到四张项目卡片。点击你想做的那个。一旦你选择了，构建工作区和工作流程指南就会出现。花2分钟选择你的项目并阅读工作流程指南。然后开始构建！"

**[Switch from slides to monitoring / 从幻灯片切换到巡视]**

**[Give students 2-3 minutes to choose their project / 给学生 2-3 分钟选择项目]**

EN: "Has everyone picked a project? Great. Now follow the workflow: start with text, then images, then code."

CN: "每个人都选好项目了吗？很好。现在遵循工作流程：先文字，然后图片，然后代码。"

---

## Build Phase / 构建阶段 (35 minutes / 分钟) *(0:15--0:50)*

### Text Phase (0:15--0:25)

EN: "Start with the Text AI tab. Ask it to help you write the content for your project. If you're doing a magazine, ask it to write an article. If you're doing a product pitch, ask it to write marketing copy. Spend about 10 minutes here getting your text ready."

CN: "从文本 AI 标签开始。让它帮你写项目的内容。如果你做杂志，让它写一篇文章。如果你做产品推介，让它写营销文案。在这里花大约10分钟准备好你的文字。"

> **Tip for walking around / 巡视提示:**
> Help students formulate good prompts. If someone is stuck, suggest they start with: "Write a short [article/description/guide] about [topic]."
>
> 帮助学生制定好的提示。如果有人卡住了，建议他们从这里开始："写一篇关于[主题]的简短[文章/描述/指南]。"

**[At the 10-minute mark / 在10分钟标记处]**

EN: "If you've been working on text for a while, it's time to switch to Image AI. You can always come back to text later."

CN: "如果你已经在文字上工作了一段时间，是时候切换到图片 AI 了。你随时可以回来做文字。"

---

### Image Phase (0:25--0:35)

EN: "Now switch to the Image AI tab. Generate the images you need for your project. Think about what visuals would make your project look great. A cover image? Illustrations? Product photos? Remember to check the 'My Collection' tab to see all your generated images."

CN: "现在切换到图片 AI 标签。生成你项目需要的图片。想想什么视觉效果会让你的项目看起来很棒。封面图片？插图？产品照片？记得查看'我的收藏'标签来查看你生成的所有图片。"

> **Tip / 提示:**
> Remind students that they can right-click on generated images to copy the URL for later use in Code AI.
>
> 提醒学生可以右键单击生成的图片来复制 URL，以便之后在代码 AI 中使用。

**[At the 10-minute mark / 在10分钟标记处]**

EN: "Time to switch to Code AI! You should have some text and images ready. Now let's put it all together."

CN: "是时候切换到代码 AI 了！你应该已经准备好一些文字和图片了。现在让我们把它们组合在一起。"

---

### Code Phase (0:35--0:50)

EN: "Switch to the Code AI tab. This is where the magic happens --- you're going to combine your text and images into a finished page. Here's a good way to start: tell Code AI something like 'Build me a [magazine page / landing page / tutorial page / travel website] with this content:' and then paste your text and mention your image URLs."

CN: "切换到代码 AI 标签。这就是魔法发生的地方——你要把你的文字和图片组合成一个完成的页面。这是一个好的开始方式：告诉代码 AI 类似'用这个内容给我建一个[杂志页面/着陆页面/教程页面/旅游网站]：'然后粘贴你的文字并提到你的图片 URL。"

> **Common issues and solutions / 常见问题和解决方案:**
>
> **Problem:** Student can't figure out how to get image URLs into the code.
> **Solution:** "Go to the Image AI tab or My Collection tab, right-click on the image, and select 'Copy image address.' Then paste that URL into your code prompt."
>
> **问题：** 学生不知道如何将图片 URL 放入代码。
> **解决方案：** "去图片 AI 标签或我的收藏标签，右键单击图片，选择'复制图片地址'。然后把那个 URL 粘贴到你的代码提示中。"
>
> **Problem:** The code doesn't look right.
> **Solution:** "Use the 'What to change?' box below the code. Tell it what you want to fix, like 'Make the title bigger' or 'Center the images' or 'Add more padding.'"
>
> **问题：** 代码看起来不对。
> **解决方案：** "使用代码下面的'What to change?'框。告诉它你想修复什么，比如'让标题更大'或'居中图片'或'增加更多填充'。"
>
> **Problem:** Student wants to start over.
> **Solution:** "That's fine! Just write a new prompt in the 'Tell AI what you want to build' box. Each new generation starts fresh."
>
> **问题：** 学生想重新开始。
> **解决方案：** "没问题！只需在'Tell AI what you want to build'框中写一个新的提示。每次新生成都是全新开始的。"

> **Contingency: Student finishes early / 应对方案：学生提前完成**
> EN: "Already done? Awesome! Try adding more to your project. Can you add a second page? More images? An interactive element? Or try polishing the design --- make the fonts look better, adjust the colors, add spacing."
> CN: 如果学生提前完成："已经做完了？太棒了！试着给你的项目添加更多内容。你能添加第二个页面吗？更多图片？互动元素？或者试着润色设计——让字体看起来更好、调整颜色、增加间距。"

> **Contingency: Student feels overwhelmed / 应对方案：学生感到不知所措**
> EN: "Feel stuck? That's okay. Let's simplify. Just get ONE piece of text and ONE image. Then tell Code AI: 'Make a simple page with this title, this paragraph, and this image.' Start small, then add more."
> CN: 如果学生感到不知所措："卡住了？没关系。让我们简化。只准备一段文字和一张图片。然后告诉代码 AI：'用这个标题、这段文字和这张图片做一个简单的页面。'从小处开始，然后再添加更多。"

**[5-minute warning / 5分钟警告]**

EN: "Five minutes left for building! Start wrapping up your code. Make sure your page looks good. If you haven't used Code AI yet, do it now --- even a simple page counts."

CN: "构建还剩5分钟！开始收尾你的代码。确保你的页面看起来好。如果你还没用代码 AI，现在就用——即使是简单的页面也算。"

---

## Share & Export / 分享与导出 (10 minutes / 分钟) *(0:50--1:00)*

EN: "Time's up for building! Scroll down to the 'Share Your Creation' section and click the export button to download your project as an HTML file."

CN: "构建时间到！向下滚动到'Share Your Creation'部分，点击导出按钮将你的项目下载为 HTML 文件。"

**[Give students 2 minutes to export / 给学生2分钟导出]**

EN: "Now, who wants to show us what they made? I'd love to see your projects."

CN: "现在，谁想给我们展示他们做了什么？我很想看看你们的项目。"

**[Call on each student to present for 2-3 minutes / 让每位学生用 2-3 分钟展示]**

> **Presentation prompts / 展示提示:**
> - "What project did you choose?"
> - "Show us one thing you're proud of."
> - "What was the hardest part?"
> - "Which tool was your favorite to use?"
>
> - "你选了什么项目？"
> - "给我们看一个你引以为豪的东西。"
> - "最难的部分是什么？"
> - "你最喜欢使用哪个工具？"

EN: "These are fantastic! You just combined three different AI tools into one project. That's exactly what real creators and professionals do every day."

CN: "太棒了！你们刚刚把三种不同的 AI 工具组合到一个项目中。这正是真正的创作者和专业人士每天做的事情。"

---

### Wrap-up *(0:58)*

EN: "Today was practice for next week. In the final project, you'll have even more freedom to create whatever you want. Think about what you'd like to make --- and come ready to build something amazing."

CN: "今天是下周的练习。在期末项目中，你将有更多的自由来创造你想要的任何东西。想想你想做什么——准备好来创造一些令人惊叹的东西。"

EN: "Great work today! See you next time."

CN: "今天干得好！下次见。"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:01 | Welcome | Slide 1 --- Title |
| 0:01--0:03 | Review | Slide 2 --- Tools review |
| 0:03--0:05 | Context | Slide 3 --- Real creators combine tools |
| 0:05--0:07 | Options | Slide 4 --- 4 mega-project options |
| 0:07--0:08 | Workflow | Slide 5 --- Plan, Write, Illustrate, Build, Polish |
| 0:08--0:09 | Diagram | Slide 6 --- How text + image + code connect |
| 0:09--0:10 | Tips | Slide 7 --- Combining AI outputs |
| 0:10--0:11 | Mistakes | Slide 8 --- Step by step, not all at once |
| 0:11--0:12 | Checklist | Slide 9 --- Quality checklist |
| 0:12--0:13 | Mission | Slide 10 --- Your mission |
| 0:13--0:15 | Launch | Slide 11 --- Open laptops, choose projects |
| 0:15--0:25 | Build: Text | Students use Text AI to write content |
| 0:25--0:35 | Build: Image | Students use Image AI to generate visuals |
| 0:35--0:50 | Build: Code | Students use Code AI to assemble final page |
| 0:50--0:52 | Export | Students download their projects |
| 0:52--0:58 | Present | Mini-presentations, 2-3 min each |
| 0:58--1:00 | Wrap-up | Preview of final project next week |
