# Lesson 8: AI App Inventor --- Build Something Useful! --- Teacher Script
# 第八课：AI 应用发明家 --- 创建实用应用！ --- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive workspace (`index.html`), Student laptops
**Goal / 目标**: Students learn the difference between toy programs and useful applications, build a mini-app using AI code generation, add power features, and user-test each other's apps.
**目标**: 学生理解"玩具"程序和实用应用的区别，使用 AI 代码生成构建迷你应用，添加高级功能，并互相测试对方的应用。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> This lesson is heavily hands-on with AI code generation. Students will be using the CodePlayground component to generate full HTML applications. Expect varying results from the AI --- some apps will work perfectly, others will need modification prompts to fix issues.
>
> **Before class / 课前准备:**
> - Test the lesson page: open `/lesson-08/index.html` and verify both CodePlayground instances load correctly
> - Verify `/api/code` endpoint is working by generating a simple test app
> - Try clicking each of the 5 app template cards and generating at least 1-2 of them to see what the AI produces
> - Try clicking an upgrade card and applying a modification to confirm the update workflow works
> - Test the Export button to confirm HTML downloads work
> - Have a backup plan: if the code API is slow, students can spend more time on planning and describing their app before generating
> - Consider which app template you personally find most interesting --- having a quick demo ready helps
>
> **这节课以 AI 代码生成为主要活动。学生将使用 CodePlayground 组件生成完整的 HTML 应用。预期 AI 产生的结果会有差异——有些应用会完美运行，有些需要修改提示来修复问题。**
>
> **课前准备：**
> - 测试课程页面：打开 `/lesson-08/index.html`，验证两个 CodePlayground 实例正确加载
> - 通过生成简单的测试应用验证 `/api/code` 接口正常工作
> - 尝试点击5个应用模板卡片并生成至少1-2个，看看 AI 产生什么
> - 尝试点击升级卡片并应用修改，确认更新工作流正常
> - 测试导出按钮确认 HTML 下载正常
> - 准备备用方案：如果代码 API 很慢，学生可以花更多时间规划和描述应用
> - 考虑你个人觉得最有趣的应用模板——准备一个快速演示会有帮助

---

## Warm-up / 热身引入 (12 minutes / 分钟)

### [SLIDE 1 --- Title] *(0:00)*

EN: "Welcome back to AI Creator Lab! Last time we learned how to make AI write code. Today we take it to the next level --- we are going to build real applications. Not just fun little demos, but apps that someone would actually want to use. Today you are an App Inventor!"

CN: "欢迎回到 AI 创造者实验室！上次我们学了如何让 AI 写代码。今天我们更进一步——我们要构建真正的应用。不是好玩的小演示，而是别人真正想用的应用。今天你们是应用发明家！"

---

### [SLIDE 2 --- Games vs Apps] *(0:01)*

EN: "Let's start with an important question: What is the difference between a game and an app? Games are made for fun --- you play them for entertainment. Apps are made to be useful --- they solve a problem or help you get something done. Both are programs, both are code, but they have different purposes."

CN: "让我们从一个重要问题开始：游戏和应用有什么区别？游戏是为了好玩——你玩它们是为了娱乐。应用是为了有用——它们解决问题或帮你完成事情。两者都是程序，都是代码，但目的不同。"

EN: "Think about the apps on your phone. Your calculator --- that is an app, it helps you do math. Your calendar --- that is an app, it helps you remember things. Your notes app --- it helps you write stuff down. All of these solve real problems."

CN: "想想你手机上的应用。计算器——那是个应用，帮你做数学。日历——那是个应用，帮你记住事情。笔记应用——帮你记东西。所有这些都解决真正的问题。"

---

### [SLIDE 3 --- Famous apps started simple] *(0:03)*

EN: "Here is something cool. The biggest apps in the world all started incredibly simple. Instagram? When it first launched, it was just photo filters. That is it. You took a photo, added a filter, and shared it. Now it has two billion users. Twitter started as just 140 characters of text. Google started as one search box on a white page."

CN: "这里有一个很酷的事实。世界上最大的应用一开始都非常简单。Instagram？它刚推出时只是照片滤镜。就是这样。你拍一张照片，加个滤镜，然后分享。现在它有二十亿用户。Twitter 一开始只是140个字符的文字。Google 一开始只是白色页面上的一个搜索框。"

EN: "So don't think you need to build something complicated today. Every great app started with one simple idea."

CN: "所以不要觉得今天需要做什么复杂的东西。每个伟大的应用都从一个简单的想法开始。"

---

### [SLIDE 4 --- What makes a great app?] *(0:05)*

EN: "What makes a great app? Four things. First, it is USEFUL --- it solves a real problem that people have. Second, it is EASY --- anyone can figure out how to use it without being taught. Third, it is BEAUTIFUL --- it looks clean and modern, which makes people trust it. Fourth, it is RELIABLE --- it saves your data and does not lose your work."

CN: "什么是好应用？四件事。第一，有用——它解决人们真正的问题。第二，简单——任何人不用教就能弄清楚怎么用。第三，好看——它看起来干净现代，让人信任。第四，可靠——它保存你的数据，不会丢失你的工作。"

EN: "Today you will try to hit all four of these targets."

CN: "今天你要尝试达到这四个目标。"

---

### [SLIDE 5 --- App showcase] *(0:06)*

EN: "Here are five app templates you can choose from today. Calculator Pro --- a scientific calculator that remembers your past calculations. Quiz Maker --- create your OWN quiz and let someone else take it. Language Translator --- type text, pick a language, see the translation. Habit Tracker --- a daily checklist that counts your streaks. And Flashcard App --- create flashcard decks and study them."

CN: "这里有五个你今天可以选择的应用模板。Calculator Pro——一个记住你过去计算的科学计算器。Quiz Maker——创建你自己的测验让别人来做。语言翻译器——输入文字，选语言，看翻译。习惯追踪器——一个计算你连续天数的每日清单。还有闪卡应用——创建闪卡组并学习。"

EN: "Each one has a detailed description you can send straight to the AI."

CN: "每个都有一个详细的描述，你可以直接发给 AI。"

---

### [SLIDE 6 --- How to describe an app to AI] *(0:08)*

EN: "When you describe an app to the AI, be specific about four things. Features --- what should the app DO? Layout --- where do things go on the screen? Behavior --- what happens when someone clicks a button or types something? And Data --- what needs to be saved or remembered? The more specific you are, the better the AI will build it."

CN: "当你向 AI 描述一个应用时，要具体说四件事。功能——应用应该做什么？布局——东西在屏幕上的位置？行为——当有人点击按钮或输入时会发生什么？还有数据——什么需要保存或记住？你越具体，AI 构建得就越好。"

EN: "Look at the difference: saying 'make a calculator' is okay, but saying 'make a calculator with a history panel, dark theme, and keyboard input' is much better."

CN: "看看区别：说'做一个计算器'还行，但说'做一个有历史面板、暗色主题和键盘输入的计算器'就好多了。"

---

### [SLIDE 7 --- UI/UX Basics] *(0:09)*

EN: "Quick lesson on design. UI means User Interface --- what the app looks like. UX means User Experience --- how it feels to use. Four important rules. Clear labels --- every button and input should say exactly what it does. Obvious buttons --- big enough to click, colored to stand out. Feedback --- when something works, tell the user! When something fails, tell the user! And consistent design --- use the same colors, fonts, and spacing everywhere."

CN: "关于设计的快速课程。UI 是用户界面——应用看起来什么样。UX 是用户体验——用起来什么感觉。四条重要规则。清晰的标签——每个按钮和输入框都应该说清楚它做什么。明显的按钮——够大够显眼。反馈——当操作成功时，告诉用户！当操作失败时，也告诉用户！还有一致的设计——到处使用相同的颜色、字体和间距。"

---

### [SLIDE 8 --- Power Features] *(0:10)*

EN: "After you build your basic app, you will upgrade it with power features. These are things real developers add to make apps better. localStorage saves data between sessions. Dark mode lets users switch themes. Keyboard shortcuts make power users happy. Validation prevents errors. Undo lets you take back mistakes. Export lets users download their data. Tabs organize complex apps. And a settings panel lets users customize the app."

CN: "在你构建基本应用后，你会用高级功能升级它。这些是真正的开发者添加来让应用更好的东西。localStorage 在会话之间保存数据。暗色模式让用户切换主题。键盘快捷键让高级用户开心。验证防止错误。撤销让你收回错误操作。导出让用户下载数据。标签页整理复杂的应用。设置面板让用户自定义应用。"

EN: "You will add at least ONE of these to your app today."

CN: "今天你要给你的应用至少添加一个这样的功能。"

---

### [SLIDE 9 --- Real Developer Workflow] *(0:11)*

EN: "This is how real developers work. Plan, Build, Test, Improve. They don't build perfect apps on the first try. They build something, test it, find problems, and improve it. That is called iteration. You are going to do the exact same thing today."

CN: "这就是真正开发者的工作方式。规划、构建、测试、改进。他们不会第一次就构建完美的应用。他们构建一些东西，测试它，发现问题，然后改进。这叫做迭代。今天你要做同样的事情。"

---

### [SLIDE 10 --- User Testing] *(0:11)*

EN: "At the end, you will do something called user testing. This is when you watch someone ELSE use your app. The key rule: watch silently. Do not tell them what to do! Notice where they get confused. Ask them what they expected to happen. If they need your help to use the app, that means the app needs improvement --- not the user."

CN: "最后，你会做一个叫用户测试的事情。就是你看别人使用你的应用。关键规则：默默观察。不要告诉他们该怎么做！注意他们在哪里困惑。问他们期望会发生什么。如果他们需要你的帮助才能使用应用，那说明应用需要改进——不是用户的问题。"

---

### [SLIDE 11 --- Your Mission] *(0:12)*

EN: "Here is your mission. Step 1: Build. Pick a template and generate your app. Step 2: Upgrade. Add at least one power feature. Step 3: Test. Have your partner try your app and watch what happens. Step 4: Export. Download your finished app as an HTML file!"

CN: "这是你的任务。第一步：构建。选一个模板并生成你的应用。第二步：升级。添加至少一个高级功能。第三步：测试。让你的搭档试用你的应用并观察会发生什么。第四步：导出。把你完成的应用下载为 HTML 文件！"

---

### [SLIDE 12 --- Let's Invent!] *(0:12)*

EN: "Open your laptops and go to Lesson 8. Start by choosing one of the five app templates. Click on the card, and the prompt will fill in automatically. Then hit Generate! You have 25 minutes for Part 1."

CN: "打开电脑，进入第八课。首先选择五个应用模板中的一个。点击卡片，提示会自动填入。然后点击生成！第一部分你有25分钟。"

EN: "Let's invent!"

CN: "开始发明！"

**[Students open laptops / 学生打开电脑]**

---

## Part 1: Starter Apps / 入门应用 (25 minutes / 分钟)

### Active Building *(0:12--0:37)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

**[Walk around continuously / 持续走动巡视:]**

EN: Check that every student has:
- Clicked on an app template card
- Generated their first app in the CodePlayground
- Their app is displaying in the preview panel

Help students who are stuck. Common issues:
- "The app doesn't work right" --- help them describe the bug in the modification box, e.g., "The buttons don't do anything when I click them"
- "I don't like how it looks" --- help them describe their visual preferences: "Make it use a blue and white color scheme with rounded corners"
- "It's loading forever" --- the API might be slow, be patient and try again
- "I want to change the app template" --- that's fine, just click a different card and generate again

CN: 检查每个学生是否：
- 点击了一个应用模板卡片
- 在 CodePlayground 中生成了第一个应用
- 应用在预览面板中显示

帮助卡住的学生。常见问题：
- "应用不能正常工作"——帮他们在修改框中描述 bug，例如"按钮点击后什么都不做"
- "我不喜欢它的样子"——帮他们描述视觉偏好："用蓝白配色方案和圆角"
- "一直在加载"——API 可能很慢，耐心等待并重试
- "我想换个应用模板"——没问题，点击不同的卡片重新生成

> **Contingency / 应对方案:**
> EN: If the code API is very slow or down: Have students describe their ideal app in detail using the text area. They can write out every feature, every button, and every behavior. "Plan while you wait --- a great description leads to a great app." When the API comes back, their detailed prompt will produce better results.
> CN: 如果代码 API 非常慢或宕机：让学生在文本区详细描述他们的理想应用。他们可以写出每个功能、每个按钮和每个行为。"等待时做计划——好的描述会产生好的应用。"当 API 恢复时，他们的详细提示会产生更好的结果。

> **Contingency / 应对方案:**
> EN: If a student's generated app has major bugs: "This is normal! Even professional developers debug their code. Describe the problem to the AI in the 'What to change?' box and hit Update. Be specific: instead of 'fix it,' say 'the add button should add the item to the list below and clear the input field.'"
> CN: 如果学生生成的应用有严重 bug："这很正常！即使专业开发者也要调试代码。在'What to change?'框中向 AI 描述问题并点击 Update。要具体：不要说'修复它'，而是说'添加按钮应该把项目添加到下面的列表并清空输入框。'"

EN: At the 20-minute mark (0:32 from start), give a 5-minute warning:

EN: "Five minutes left for Part 1! If your app is working, great --- you can start thinking about what power feature you want to add next. If your app still has issues, use the modification prompt to describe what is wrong and let the AI fix it."

CN: "第一部分还有5分钟！如果你的应用能用了，很好——你可以开始想下一步要添加什么高级功能。如果应用还有问题，用修改提示描述哪里不对，让 AI 修复它。"

---

## Part 2: Power Features / 高级功能 (15 minutes / 分钟)

### *(0:37--0:52)*

EN: "Time for Part 2 --- Power Features! Scroll down on the lesson page to the Power Features section. You'll see 8 upgrade cards. Each one adds a cool feature to your app. Click on a card and it will fill in the modification prompt."

CN: "进入第二部分——高级功能！在课程页面上向下滚动到高级功能部分。你会看到8张升级卡片。每张都给你的应用添加一个很酷的功能。点击一张卡片，它会填入修改提示。"

EN: "Here is the important part: you can use the SECOND CodePlayground at the bottom of Part 2. First, copy the code from your first app by clicking View Code. Then paste it into the second playground and use the modifications to add features. OR you can go back to the first playground and use the Update button there."

CN: "重要的部分是：你可以使用第二部分底部的第二个 CodePlayground。首先，点击 View Code 复制你第一个应用的代码。然后粘贴到第二个 playground 中并用修改来添加功能。或者你可以回到第一个 playground 用那里的 Update 按钮。"

EN: "Try to add at least ONE power feature. If your app already works well, try two!"

CN: "尝试至少添加一个高级功能。如果你的应用已经运行得很好，试试两个！"

**[Walk around and help / 走动帮助]**

EN: Check that students are:
- Selecting upgrade cards
- Successfully applying modifications
- Testing that the new features actually work

Common issues:
- "The upgrade broke my app" --- help them describe what went wrong and ask the AI to fix it while keeping the upgrade
- "I don't know which upgrade to pick" --- suggest dark mode (most visual) or localStorage (most useful)
- "The upgrade didn't seem to change anything" --- make sure they clicked Update, not Generate (which would create a new app)

CN: 检查学生是否在：
- 选择升级卡片
- 成功应用修改
- 测试新功能是否真正运行

常见问题：
- "升级搞坏了我的应用"——帮他们描述哪里出错了，让 AI 在保留升级的同时修复
- "我不知道选哪个升级"——建议暗色模式（最直观）或 localStorage（最有用）
- "升级好像什么都没变"——确保他们点的是 Update 而不是 Generate（会创建新应用）

> **Contingency / 应对方案:**
> EN: If the upgrade completely breaks the app: "No worries! Go back to the first CodePlayground --- your original app is still there. Copy the code from View Code and try the upgrade again with a different approach. You can also try a different upgrade."
> CN: 如果升级完全破坏了应用："别担心！回到第一个 CodePlayground——你的原始应用还在那。从 View Code 复制代码然后用不同的方法重试升级。你也可以试试不同的升级。"

EN: At the 10-minute mark (0:47), mention the UX Best Practices section:

EN: "While you're testing your app, look at the UI/UX Best Practices box. Does your app have clear labels? Obvious buttons? Does it give feedback when you do something? These little details make the difference between a toy and a real app."

CN: "测试应用的时候，看看 UI/UX 最佳实践框。你的应用有清晰的标签吗？明显的按钮吗？做了操作后有反馈吗？这些小细节是'玩具'和'真正应用'之间的区别。"

---

## Share & Export / 分享与导出 (8 minutes / 分钟)

### *(0:52--1:00)*

EN: "Building time is over! Now it is time to share. First, scroll down to the Share & Export section and click 'Download My App.' This saves your app as an HTML file on your computer."

CN: "创建时间结束！现在是分享时间。首先，向下滚动到分享与导出部分，点击'Download My App'。这会把你的应用保存为电脑上的 HTML 文件。"

EN: "Now, swap with your partner. Open their app in your browser and try to use it WITHOUT any instructions from them. They should watch you silently."

CN: "现在和搭档交换。在浏览器中打开他们的应用，试着在没有任何说明的情况下使用它。他们应该默默观察你。"

**[Give students 4-5 minutes to test each other's apps / 给学生 4-5 分钟互相测试应用]**

EN: Walk around and encourage students to:
- Actually try to use the app, not just look at it
- Notice where they get confused
- Give honest, constructive feedback

CN: 走动并鼓励学生：
- 真正尝试使用应用，而不是只看看
- 注意他们感到困惑的地方
- 给出诚实的、建设性的反馈

---

### Quick Share *(0:57)*

EN: "Quick round! Tell us: what app did you build, and what was the one thing you are most proud of?"

CN: "快速分享！告诉我们：你做了什么应用，你最自豪的一件事是什么？"

**[Each student gets 1-2 minutes / 每个学生 1-2 分钟]**

EN: Ask each student:
1. "What app did you build?" / "你做了什么应用？"
2. "What power feature did you add?" / "你添加了什么高级功能？"
3. "What did your partner say when they tested it?" / "你的搭档测试时说了什么？"

**[Lead applause after each share / 每次分享后带头鼓掌]**

---

### Wrap Up *(0:59)*

EN: "You did something amazing today. You didn't just write code --- you built real applications. Apps that solve problems, that look good, and that other people can actually use. That is what software developers do every day. And today, you proved that you can do it too."

CN: "今天你们做了一件了不起的事情。你们不只是写了代码——你们构建了真正的应用。解决问题的应用，好看的应用，别人真正可以使用的应用。这就是软件开发者每天做的事情。今天，你们证明了你们也能做到。"

EN: "Remember: every app on your phone was once just an idea. Now you know how to turn YOUR ideas into real apps. Keep inventing!"

CN: "记住：你手机上的每个应用曾经都只是一个想法。现在你知道怎么把你的想法变成真正的应用了。继续发明！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:01 | Welcome | Slide 1 --- Title & introduction |
| 0:01--0:03 | Concept | Slide 2 --- Games vs Apps |
| 0:03--0:05 | Inspiration | Slide 3 --- Famous apps started simple |
| 0:05--0:06 | Framework | Slide 4 --- What makes a great app? |
| 0:06--0:08 | Templates | Slide 5 --- 5 app templates preview |
| 0:08--0:09 | Prompting | Slide 6 --- How to describe an app to AI |
| 0:09--0:10 | Design | Slide 7 --- UI/UX basics |
| 0:10--0:11 | Preview | Slide 8 --- Power features preview |
| 0:11--0:12 | Workflow | Slides 9--11 --- Developer workflow, user testing, mission |
| 0:12 | Launch | Slide 12 --- Students open laptops |
| 0:12--0:37 | Part 1 | Build starter apps with CodePlayground |
| 0:37--0:52 | Part 2 | Add power features / upgrades |
| 0:52--0:57 | Share | Export + swap apps for user testing |
| 0:57--1:00 | Wrap up | Quick share + closing message |

---

## Contingency Plans / 应急方案

### If code API is slow or unresponsive / 如果代码 API 缓慢或无响应
- Have students spend more time writing detailed app descriptions
- They can describe their ideal app on paper or in the text area: every feature, every button, every interaction
- If the API is partially working, prioritize one generation per student rather than multiple iterations
- Students can sketch their app layout on paper as a wireframe

### If student finishes early / 如果学生提前完成
- Challenge them to add 2-3 more power features
- Ask them to help another student debug their app
- Suggest they try building a second app from a different template
- Have them write a "user manual" for their app in the modification box

### If an app has unfixable bugs / 如果应用有无法修复的 bug
- "Even professional developers sometimes start over. Copy the prompt, make it more specific, and regenerate. This time, add details about what went wrong."
- "即使专业开发者有时也要重新开始。复制提示，让它更具体，然后重新生成。这次加上上次出问题的细节。"

### If a student cannot decide which template / 如果学生无法决定选哪个模板
- "Which of these would YOU personally use? Pick the one that would be useful in your own life. If you study a lot, try the Flashcard App. If you like testing yourself, try the Quiz Maker."
- "这些中你个人会用哪个？选一个在你生活中有用的。如果你经常学习，试试闪卡应用。如果你喜欢测试自己，试试 Quiz Maker。"

### If user testing time is short / 如果用户测试时间不够
- Each student shows their app to their partner for just 2 minutes
- Skip the detailed silent observation and just let them demo
- Focus on: "Show one feature you're proud of" rather than a full user test
