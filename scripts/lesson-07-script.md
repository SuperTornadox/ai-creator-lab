# Lesson 7: AI Coder (Part 1) — Teacher Script
# 第七课：AI 编程师（第一部分） — 教师逐字稿

**Duration / 时长**: 40–43 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students break the intimidation barrier around coding by using AI to build interactive mini-programs from natural language descriptions, learning that programming is about describing ideas clearly.
**目标**: 学生通过使用 AI 从自然语言描述构建交互式小程序，打破对编程的恐惧，学习到编程的核心是清晰地描述想法。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> - Test the Code Playground on the lesson page beforehand — generate at least one program (e.g., "Color Clicker") and verify the live preview works
> - Make sure the `/api/code` endpoint is functioning
> - Have a backup plan: if the API is slow, you can extend the discussion sections or have students refine their descriptions before generating
> - Familiarize yourself with all 5 challenges so you can help students write good descriptions
>
> 课前准备：
> - 提前测试课程页面上的代码游乐场——至少生成一个程序（如"变色按钮"）并验证实时预览是否正常
> - 确保 `/api/code` API 端点正常运行
> - 准备备用方案：如果 API 很慢，可以延长讨论环节或让学生在生成前润色描述
> - 熟悉所有5个挑战，以便帮助学生写出好的描述

---

## Warm-up / 概念热身 (10 minutes / 分钟)

### [SLIDE 1 — Title] *(0:00)*

EN: "Welcome back to AI Creator Lab! So far we've made stories, art, picture books, music, and videos with AI. Today we're doing something totally different — today, YOU are going to become a programmer. You're going to build real, working programs that run in your browser!"

CN: "欢迎回到 AI 创造者实验室！到目前为止，我们用 AI 创作了故事、美术、绘本、音乐和视频。今天我们要做一些完全不同的事情——今天，你们要成为程序员。你们要构建真正的、能在浏览器中运行的程序！"

EN: "Quick question before we start — when you hear the word 'coding' or 'programming,' what's the first thing that comes to mind? What do you think it feels like?"

CN: "开始之前先问一个问题——当你听到'编程'或'写代码'这个词时，你脑海中最先想到的是什么？你觉得编程是什么感觉？"

**[Wait for student responses — they might say "hard," "confusing," "lots of typing," etc. / 等待学生回答——他们可能会说"很难""很复杂""打很多字"等]**

---

### [SLIDE 2 — What does coding look like?] *(0:02)*

EN: "Most people think coding looks like THIS — the left side. A wall of confusing symbols and weird words. And honestly, traditional coding IS like that. You have to memorize rules, get every single character right, and one tiny mistake breaks everything."

CN: "大多数人觉得编程看起来像这样——左边这些。一堆让人困惑的符号和奇怪的词。说实话，传统编程确实是这样的。你得记住规则，每个字符都不能错，一个小错误就会把整个东西搞坏。"

EN: "But look at the right side. What if coding was just... telling AI what you want? 'Make a colorful ball that bounces around the screen.' That's it. And here's the thing — both sides make the EXACT SAME PROGRAM."

CN: "但看看右边。如果编程只是……告诉 AI 你想要什么呢？'做一个在屏幕上弹跳的彩色球'。就这么简单。而且重点是——两边做出来的是完全一样的程序。"

**[Pause for effect / 停顿一下让学生感受]**

---

### [SLIDE 3 — The Magic] *(0:04)*

EN: "This is the magic of AI coding. You describe what you want in plain English — normal words, no code — AI writes all the confusing code for you, and you instantly see your program come to life. No memorizing. No confusing symbols. Just your IDEAS turned into real, working programs."

CN: "这就是 AI 编程的魔力。你用普通的英语描述你想要的——正常的话，不用写代码——AI 帮你写所有那些复杂的代码，然后你立刻看到你的程序活过来。不用记忆。不用费解的符号。只是你的想法变成真正的、能运行的程序。"

---

### [SLIDE 4 — How It Works] *(0:05)*

EN: "Here's how it works, step by step. First, YOU describe what you want — like 'make a button that counts clicks.' Then AI writes the code — HTML, CSS, and JavaScript. Then you see the result immediately in a live preview. And if you want to change something, you just describe the change — 'make the button bigger' — and AI updates the code instantly."

CN: "这是它的工作流程，一步一步来。首先，你描述你想要的——比如'做一个计算点击次数的按钮'。然后 AI 写代码——HTML、CSS 和 JavaScript。然后你立刻在实时预览中看到结果。如果你想改什么，只需描述你想改的——'把按钮变大'——AI 就会立刻更新代码。"

---

### [SLIDE 5 — HTML/CSS/JS] *(0:06)*

EN: "Quick crash course: every website you've ever used is built from three things. HTML is the structure — think of it as the walls and rooms of a house. CSS is the style — the paint, the decoration, making it look nice. And JavaScript is the action — the electricity, the things that move and respond when you click."

CN: "快速科普：你用过的每个网站都是由三样东西组成的。HTML 是结构——把它想象成房子的墙壁和房间。CSS 是样式——油漆、装饰，让它看起来漂亮。JavaScript 是动作——电力，点击时会动和响应的东西。"

EN: "You don't need to learn any of these today. AI handles all of it. But now you know what's happening behind the scenes!"

CN: "今天你们不需要学这些。AI 全部搞定。但现在你们知道幕后发生了什么！"

---

### [SLIDE 6 — Being Specific] *(0:07)*

EN: "Now here's the secret to being a great AI coder: be specific. The more details you give AI, the better your program will be. Think about two things: what does it LOOK like? And what HAPPENS when you interact with it?"

CN: "现在告诉你们成为优秀 AI 编程师的秘诀：要具体。你给 AI 的细节越多，你的程序就越好。想两件事：它看起来是什么样的？当你和它交互时会发生什么？"

---

### [SLIDE 7 — Good vs Vague] *(0:08)*

EN: "Look at the difference. On the left: 'Make a button.' Okay... what kind of button? What does it do? AI has no idea, so you get something boring. On the right: 'A big red button that changes to a random color when I click it.' NOW AI knows exactly what you want, and it builds exactly that."

CN: "看看区别。左边：'做一个按钮'。好吧……什么样的按钮？它做什么？AI 不知道，所以你得到的会很无聊。右边：'一个大的红色按钮，点击时变成随机颜色'。现在 AI 确切知道你想要什么，它就会精确地构建出来。"

EN: "Same idea with games — 'make a game' could be anything. But 'a clicking game where a circle appears randomly and I have 30 seconds to click as many as I can' — that's clear, and AI can actually build it."

CN: "游戏也是一样——'做个游戏'可以是任何东西。但'一个点击游戏，圆圈随机出现，我有30秒尽可能多地点击'——这很清楚，AI 真的能做出来。"

---

### [SLIDE 8 — Your Mission] *(0:09)*

EN: "Your mission today: 5 challenges, from easy to hard. Start with Color Clicker or Click Counter — those are easy wins to get you started. Then try the medium ones — Bouncing Ball and Drawing Canvas. If you're feeling confident, go for the hard one — a Mini Game with a timer and score! You can also invent your own programs. Be creative!"

CN: "今天的任务：5个挑战，从简单到难。从变色按钮或点击计数器开始——这些是简单的入门项目。然后尝试中等难度的——弹跳球和画画画布。如果你有信心，挑战高难度的——一个有计时器和分数的迷你游戏！你也可以发明自己的程序。发挥创意！"

---

### [SLIDE 9 — Let's Code!] *(0:10)*

EN: "Alright — open your laptops and go to the Lesson 7 page. Let's code!"

CN: "好了——打开电脑，进入第七课的页面。开始编程！"

---

## Hands-on Project / 动手项目 (25 minutes / 分钟)

### Phase 1: First Program — Color Clicker or Click Counter (8 min) *(0:10–0:18)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "You should see the AI Coder page with the challenge cards at the top. Start by clicking one of the easy challenges — 'Color Clicker' or 'Click Counter.' That will fill in a description for you. Then just hit 'Generate' and watch the magic!"

CN: "你应该看到 AI 编程师页面，顶部有挑战卡片。先点击一个简单的挑战——'变色按钮'或'点击计数器'。那会为你填入描述。然后点'Generate'，看魔法发生！"

**[Give students 2-3 minutes to generate their first program / 给学生 2-3 分钟生成第一个程序]**

EN: "Awesome! You just built your first program. Now try changing it! Look at the 'What to change?' box below. Type something like 'make the button bigger' or 'change the color to blue' or 'add a background gradient.' Then click 'Update.'"

CN: "太棒了！你刚刚构建了你的第一个程序。现在试着改改它！看下面的'What to change?'框。输入一些东西比如'把按钮变大'或'把颜色改成蓝色'或'添加渐变背景'。然后点击'Update'。"

**[Give students 3-5 more minutes to modify / 再给学生 3-5 分钟修改]**

> **Contingency / 应对方案:**
> EN: If the API is slow or fails: "While it's loading, think about what you'd change about the design. When it comes back, try describing your ideal version."
> CN: 如果 API 很慢或失败："加载的时候，想想你会怎么修改设计。等它恢复后，试着描述你理想的版本。"

> **Contingency / 应对方案:**
> EN: If a student's program doesn't work right: "That happens! Try describing it more specifically. Instead of 'make a counter,' try 'make a page with a big number in the center that starts at 0, and a button below it that says Click. Every time I click the button, the number goes up by 1.' More detail = better results."
> CN: 如果学生的程序不正常："这会发生的！试着更具体地描述。不要说'做一个计数器'，试试'做一个页面，中间有一个大数字从0开始，下面有一个写着Click的按钮。每次我点击按钮，数字加1。'更多细节=更好的结果。"

---

### Phase 2: Try Medium Challenges (8 min) *(0:18–0:26)*

EN: "Great work on the easy ones! Now let's level up. Go back to the challenge cards and try a medium one — Bouncing Ball or Drawing Canvas. These are more complex, so pay attention to how the descriptions are more detailed."

CN: "简单的做得很好！现在升级。回到挑战卡片，试试一个中等难度的——弹跳球或画画画布。这些更复杂，所以注意描述是怎样更详细的。"

EN: "After you generate it, try modifying it! For the Bouncing Ball, maybe say 'add more balls' or 'make the ball leave a trail.' For the Drawing Canvas, try 'add a line thickness slider' or 'make it draw rainbow colors.'"

CN: "生成后，试着修改它！对于弹跳球，也许说'加更多球'或'让球留下轨迹'。对于画画画布，试试'加一个线条粗细滑块'或'让它画彩虹色'。"

**[Give students 8 minutes / 给学生 8 分钟]**

> **Teacher tip / 教师提示:**
> EN: Walk around and look at screens. If a student finishes quickly, encourage them to try the hard challenge or to invent their own program. Some fun custom ideas: "a digital clock," "a to-do list," "a quiz game," "a mood tracker with emojis."
> CN: 走动看学生屏幕。如果学生很快完成，鼓励他们尝试困难挑战或发明自己的程序。一些有趣的自定义想法："一个数字时钟""一个待办事项列表""一个问答游戏""一个表情心情追踪器"。

---

### Phase 3: Hard Challenge or Free Build (7 min) *(0:26–0:33)*

EN: "For the last stretch, you have two choices. Choice one: try the hard challenge — the Mini Game. It has a timer, a score, random circles to click, and a Game Over screen. Choice two: invent your OWN program! Think of something cool you want to exist, describe it, and see if AI can build it."

CN: "最后一段时间，你有两个选择。选择一：尝试困难挑战——迷你游戏。它有计时器、分数、随机出现的圆圈，还有游戏结束画面。选择二：发明你自己的程序！想想你希望存在的酷东西，描述它，看看 AI 能不能做出来。"

**[Give students 7 minutes / 给学生 7 分钟]**

> **Contingency / 应对方案:**
> EN: If students are stuck on what to invent: "Here are some fun ideas: a digital pet that reacts when you click it, a random joke generator, a color mixer tool, or a name generator for fantasy characters!"
> CN: 如果学生不知道发明什么："这里有一些有趣的想法：一个点击时会反应的电子宠物、一个随机笑话生成器、一个颜色混合工具，或者一个奇幻角色名字生成器！"

---

### Phase 4: Export Favorite (2 min) *(0:33–0:35)*

EN: "Before we share, let's save your best work! Scroll down to 'Save Your Work' and click the download button. This saves your program as a real HTML file — you can open it on any computer in any browser. It's a real program you made!"

CN: "分享之前，先保存你最好的作品！向下滚动到'Save Your Work'然后点击下载按钮。这会把你的程序保存为一个真正的 HTML 文件——你可以在任何电脑的任何浏览器中打开它。这是你做的真正的程序！"

EN: "Also, check off the tasks on the right side to track your progress."

CN: "另外，勾选右边的任务来跟踪你的进度。"

**[Give students 2 minutes / 给学生 2 分钟]**

---

## Show & Share / 展示分享 (5 minutes / 分钟) *(0:35–0:40)*

EN: "Alright, sharing time! Who wants to show what they built? Tell us what it is and what description you used."

CN: "好了，分享时间！谁想展示你做的东西？告诉我们它是什么以及你用了什么描述。"

**[Wait for a volunteer / 等待志愿者]**

EN: "Show us your program! Click around, demonstrate how it works."

CN: "给我们看看你的程序！点击操作，演示它是怎么工作的。"

**[Student 1 demonstrates / 学生1演示]**

EN: "That's awesome! And how about you?"

CN: "太棒了！你呢？"

**[Student 2 demonstrates / 学生2演示]**

EN: "Now try each other's! Since you downloaded your programs, you could swap and try each other's creations."

CN: "现在试试对方的！既然你们下载了程序，可以交换试试对方的作品。"

**[Give 1-2 minutes for cross-play / 给 1-2 分钟互相试玩]**

EN: "What was the hardest part? Was it getting the program to work, or figuring out how to describe what you wanted?"

CN: "最难的部分是什么？是让程序正常工作，还是想清楚怎么描述你想要的？"

**[Wait for responses / 等待回答]**

---

## Wrap-up / 课程总结 (2–3 minutes / 分钟) *(0:40–0:43)*

EN: "Today you learned that programming doesn't have to be scary. With AI, the hard part isn't memorizing code — it's learning to DESCRIBE clearly what you want. That's a real skill! Professional programmers spend most of their time thinking about WHAT to build, not just how to type code."

CN: "今天你学到了编程不一定很可怕。有了 AI，难的部分不是记代码——而是学会清晰地描述你想要什么。这是真正的技能！专业程序员花大部分时间思考要构建什么，而不只是怎么敲代码。"

EN: "Remember — you built REAL programs today. The HTML files you downloaded will work on any computer. You are now officially coders!"

CN: "记住——你今天构建了真正的程序。你下载的 HTML 文件可以在任何电脑上运行。你们现在正式是程序员了！"

EN: "Next time, in Part 2, we'll take this further and build something even bigger. See you then!"

CN: "下次，在第二部分，我们会更进一步，构建更大的东西。下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00–0:02 | Welcome | Slide 1 — Title, ask what coding feels like |
| 0:02–0:04 | Break intimidation | Slide 2 — Scary code vs friendly description |
| 0:04–0:05 | The magic | Slide 3 — AI writes code from your words |
| 0:05–0:06 | How it works | Slide 4 — Describe > AI codes > see result |
| 0:06–0:07 | Tech basics | Slide 5 — HTML/CSS/JS crash course |
| 0:07–0:09 | Description tips | Slides 6–7 — Specific vs vague descriptions |
| 0:09–0:10 | Mission | Slides 8–9 — 5 challenges, open laptops |
| 0:10–0:18 | Easy challenges | Students build first program + modify it |
| 0:18–0:26 | Medium challenges | Students try Bouncing Ball or Drawing Canvas |
| 0:26–0:33 | Hard / free build | Mini Game or invent own program |
| 0:33–0:35 | Export | Students download their favorite program |
| 0:35–0:40 | Share | Demo programs, try each other's creations |
| 0:40–0:43 | Wrap-up | Recap key ideas, preview Part 2 |
