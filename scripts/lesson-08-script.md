# Lesson 8: AI Game Designer — Teacher Script
# 第八课：AI 游戏设计师 — 教师逐字稿

**Duration / 时长**: 43–45 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students design and build a playable web game by describing game mechanics in natural language, using AI to generate code, play-testing, and iterating on improvements.
**目标**: 学生通过用自然语言描述游戏机制、使用 AI 生成代码、试玩测试和迭代改进来设计和构建一个可玩的网页游戏。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> - Open the lesson page (`index.html`) and test each of the 4 game templates yourself by clicking a game card and clicking Generate. Verify that the /api/code endpoint returns working games. This may take 10–15 seconds per generation.
> - Test the Export button — download a game HTML file and open it in a browser to confirm it works standalone.
> - Have a backup plan: if the API is slow, pre-generate one example game (a Quiz Game works well) and save the HTML so you can demo it to students while they wait.
> - Consider which game type you think each student might enjoy — you can gently steer them if they are stuck choosing.
>
> 课前准备：
> - 打开课程页面（`index.html`），自己测试每个游戏模板——点击游戏卡片然后点击 Generate。确认 /api/code 接口返回能正常运行的游戏。每次生成可能需要 10-15 秒。
> - 测试导出按钮——下载一个游戏 HTML 文件并在浏览器中打开确认它能独立运行。
> - 准备备用方案：如果 API 很慢，提前生成一个示例游戏（Quiz Game 效果不错），保存 HTML 文件以便在学生等待时演示。
> - 考虑哪种游戏类型适合每个学生——如果他们选择困难，你可以温和地引导。

---

## Warm-up / 概念热身 (8 minutes / 分钟)

### [SLIDE 1 — Title] *(0:00)*

EN: "Welcome back to AI Creator Lab! Today is going to be really fun — today you are going to become game designers. Not just playing games — actually BUILDING them. Real, playable games that you can share with your friends."

CN: "欢迎回到 AI 创造者实验室！今天会非常有趣——今天你们要成为游戏设计师。不是只是玩游戏——而是真正地构建它们。真正的、可以玩的游戏，你可以分享给你的朋友。"

---

### [SLIDE 2 — Last Week Recap] *(0:01)*

EN: "Quick review. Over these weeks, you've seen that AI can write text, create images, and write code. Last time you learned that AI can generate actual working code from plain English descriptions. Today, we're taking that same superpower and using it to build something much more exciting — games!"

CN: "快速回顾。这几周来，你们已经看到 AI 可以写文字、创建图片和写代码。上次你们学到 AI 可以从简单的英文描述生成实际可运行的代码。今天，我们要用同样的超能力来构建更令人兴奋的东西——游戏！"

EN: "Who here plays games? What's your favorite? ... The games you play were made by developers writing thousands of lines of code. Today, you're going to describe a game in your own words, and AI will write that code for you."

CN: "这里谁玩游戏的？你最喜欢的是什么？……你们玩的游戏是开发者写了几千行代码做出来的。今天，你们要用自己的话描述一个游戏，AI 会帮你写代码。"

---

### [SLIDE 3 — What Makes a Game?] *(0:03)*

EN: "But before we start building, let's think about what makes a game a game. Every good game has four things."

CN: "但在我们开始构建之前，让我们想想什么让一个游戏成为游戏。每个好游戏都有四个要素。"

EN: "First, Goals — what are you trying to do? Catch all the falling stars? Answer every question right? Second, Rules — what can and can't you do? Maybe you can only move left and right, or you only have 30 seconds. Third, Challenge — what makes it hard? Things speed up, you have limited lives, there's a time limit. And fourth, Fun — what makes you want to keep playing? Bright colors, satisfying sounds, the feeling of beating your high score."

CN: "第一，目标——你要做什么？接住所有掉落的星星？答对每一道题？第二，规则——你能做什么不能做什么？也许你只能左右移动，或者你只有30秒。第三，挑战——是什么让它变难？东西加速、生命有限、有时间限制。第四，乐趣——是什么让你想继续玩？明亮的颜色、令人满足的声音、打破最高分的感觉。"

EN: "When you describe your game to AI, you'll want to include all four of these!"

CN: "当你向 AI 描述你的游戏时，你会想要包含这四个要素！"

---

### [SLIDE 4 — Game Types Showcase] *(0:04)*

EN: "Here are four game types you can build today. Quiz — make a trivia game with questions and score tracking. Catch — catch things falling from the sky with your mouse. Maze — navigate through a maze with arrow keys. And Whack-a-Mole — click as fast as you can when something pops up."

CN: "这里有四种你今天可以构建的游戏类型。问答——做一个有题目和分数追踪的问答游戏。接住——用鼠标接住从天上掉下来的东西。迷宫——用方向键在迷宫中导航。打地鼠——当东西弹出来时尽可能快地点击。"

EN: "You pick which one sounds the most fun to you. There's no wrong answer!"

CN: "你来选哪个听起来最有趣。没有错误的答案！"

---

### [SLIDE 5 — The Game Design Loop] *(0:05)*

EN: "Here's the secret to making great games — it's a loop. First, you Describe what you want. Then AI Generates the code. Then you Play-test it — try it yourself and see what works and what doesn't. Then you Improve it — tell AI what to change. And then you go back and do it again!"

CN: "这是制作好游戏的秘诀——是一个循环。首先，你描述你想要什么。然后 AI 生成代码。然后你试玩——自己试试看什么有效什么没有。然后你改进它——告诉 AI 要改什么。然后你回去再来一遍！"

EN: "Real game designers do this exact same thing — they build, test, fix, build, test, fix. Over and over. Each time the game gets a little bit better. Today, you should go through this loop at least 2 or 3 times."

CN: "真正的游戏设计师做的就是完全一样的事情——他们构建、测试、修复，构建、测试、修复。一遍又一遍。每次游戏都会变得好一点。今天，你应该至少经历2到3次这个循环。"

---

### [SLIDE 6 — How to Describe a Game to AI] *(0:06)*

EN: "When you describe your game to AI, be specific. Don't just say 'make something cool.' Instead, tell AI the details: how many lives does the player have? What are the controls? How do you score points? What does the screen look like?"

CN: "当你向 AI 描述你的游戏时，要具体。不要只说'做个酷的东西'。相反，告诉 AI 细节：玩家有几条命？控制方式是什么？怎么得分？屏幕看起来是什么样的？"

EN: "The more details you include, the better your game will turn out."

CN: "你包含的细节越多，你的游戏做出来就越好。"

---

### [SLIDE 7 — Example: From Words to Game] *(0:07)*

EN: "Here's an example. On the left, someone wrote: 'Make a whack-a-mole game. A 3x3 grid of holes. A hamster emoji pops up randomly. You have 30 seconds. Click the hamster to score. It gets faster over time. Show my score at the end.' See how specific that is? They told AI about the grid, the character, the timer, the scoring, the difficulty, and the ending."

CN: "这是一个例子。左边，有人写道：'做一个打地鼠游戏。3x3的洞格子。一个仓鼠表情随机弹出。你有30秒。点击仓鼠得分。随着时间推移速度加快。最后显示我的分数。'看到有多具体了吗？他们告诉 AI 关于格子、角色、计时器、得分、难度和结局。"

EN: "And on the right — that's what AI built from that description. A working game with all those features! That's what you're going to do today."

CN: "右边——这就是 AI 根据那个描述构建出来的。一个有所有这些功能的可运行游戏！这就是你今天要做的。"

---

### [SLIDE 8 — Your Mission] *(0:08)*

EN: "Your mission: design and build a playable game! Pick a game type, generate it with AI, play-test it, make at least 2 improvements, and export it so you can take it home. Let's go!"

CN: "你的任务：设计和构建一个可玩的游戏！选择一种游戏类型，用 AI 生成它，试玩它，做至少2个改进，然后导出它这样你可以带回家。我们开始吧！"

EN: "Open your laptops and go to the Lesson 8 page!"

CN: "打开电脑，进入第八课的页面！"

---

## Hands-on Project / 动手项目 (30 minutes / 分钟)

### Phase 1: Choose a Game Type (3 min) *(0:08–0:11)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "You should see the AI Game Designer page with four game cards at the top. Take a moment to read through them: Quiz, Catch, Maze, and Whack-a-Mole. Click the one that sounds most fun to you!"

CN: "你应该看到 AI 游戏设计师页面，顶部有四张游戏卡片。花一点时间读读它们：问答、接住、迷宫和打地鼠。点击你觉得最有趣的那个！"

EN: "When you click a card, it will automatically fill in a detailed description in the builder below. You can edit that description before generating if you want to customize it — or just click Generate to start!"

CN: "当你点击一张卡片，它会自动在下面的构建器中填入详细描述。如果你想自定义，可以在生成前编辑那个描述——或者直接点击 Generate 开始！"

**[Give students 2–3 minutes to pick and review / 给学生 2-3 分钟选择和浏览]**

> **Contingency / 应对方案:**
> EN: If a student can't decide: "The Quiz Game has the 'Easy Start' badge — that's a great first choice! You can always try a different type after."
> CN: 如果学生不能决定："Quiz Game 有'Easy Start'标记——这是一个很好的第一选择！之后你随时可以尝试不同类型。"

---

### Phase 2: Generate and Play-Test First Game (10 min) *(0:11–0:21)*

EN: "Alright, click the Generate button! This will take about 10–15 seconds. Watch the preview panel on the right — your game will appear there."

CN: "好的，点击 Generate 按钮！这大约需要 10-15 秒。看右边的预览面板——你的游戏会出现在那里。"

**[Wait for first generations to complete / 等待第一次生成完成]**

EN: "Can you see your game? Try playing it right there in the preview! Click the buttons, move the mouse, or use your arrow keys depending on which game you picked."

CN: "你能看到你的游戏了吗？就在预览窗口试着玩一下！点击按钮、移动鼠标或使用方向键，取决于你选了哪个游戏。"

**[Give students 3–4 minutes to play-test / 给学生 3-4 分钟试玩]**

EN: "As you play, think about: Is it fun? Is anything broken? Is it too easy or too hard? What would make it better? Write down or remember at least one thing you want to change."

CN: "在你玩的时候，想想：有趣吗？有什么坏了吗？太简单还是太难？什么能让它更好？记下或记住至少一件你想改变的事。"

> **Walk around and help / 走动并帮助:**
> - Check that games actually loaded in the preview iframe
> - Help students who got an error by suggesting they click Generate again
> - Encourage students who are playing to start thinking about improvements

> **Contingency / 应对方案:**
> EN: If the generated game has a bug (e.g., buttons don't work, things overlap): "That's totally normal! Even professional game developers deal with bugs. This is why we play-test. Write down what went wrong and we'll tell AI to fix it in the next step."
> CN: 如果生成的游戏有 bug（比如按钮不工作、东西重叠）："这完全正常！即使是专业游戏开发者也会遇到 bug。这就是为什么我们要试玩。写下哪里出了问题，下一步我们告诉 AI 来修复。"

> **Contingency / 应对方案:**
> EN: If the API is slow or times out: "While we wait, let's look at the description you used. Can you think of how to make it more specific? Sometimes adding more detail helps AI create a better game. Try editing your prompt and generating again."
> CN: 如果 API 很慢或超时："在等待的时候，让我们看看你用的描述。你能想到怎么让它更具体吗？有时候添加更多细节能帮助 AI 创建更好的游戏。试着编辑你的提示并重新生成。"

---

### Phase 3: First Improvement Round (8 min) *(0:21–0:29)*

EN: "Now the fun part — improving your game! Look at the 'What to change?' box below the Generate button. Type what you want AI to fix or add. For example: 'Make the falling objects bigger and slower' or 'Change the background to dark blue with stars.'"

CN: "现在有趣的部分——改进你的游戏！看 Generate 按钮下面的'What to change?'框。输入你想让 AI 修复或添加的内容。比如：'让掉落的物体更大更慢'或'把背景改成深蓝色加星星'。"

EN: "You can also scroll down to the 'Level Up Your Game' section — there are tip cards with pre-written improvement ideas. Click any tip card and it will fill in the suggestion for you. Then click the Update button."

CN: "你也可以向下滚动到'Level Up Your Game'部分——那里有写好改进建议的提示卡片。点击任何提示卡片它会帮你填入建议。然后点击 Update 按钮。"

**[Give students 6–8 minutes for first round of improvements / 给学生 6-8 分钟进行第一轮改进]**

> **Tips for guiding improvements / 引导改进的提示:**
> EN: "If your game is working but feels boring, try: 'Add a theme' or 'Add sound effects'. If your game is broken, try: 'Fix the bug where [describe what happens]'."
> CN: "如果你的游戏能运行但感觉无聊，试试：'添加一个主题'或'添加音效'。如果你的游戏坏了，试试：'修复[描述发生了什么]的 bug'。"

> EN: If the update makes things worse: "Sometimes an update can break something that was working. Don't worry — try being more specific about what to change, and what NOT to change. You can say: 'Keep everything the same, but just change the background color to dark blue.'"
> CN: 如果更新让事情变差了："有时更新会破坏原本正常运行的东西。别担心——试着更具体地说明要改什么，和不要改什么。你可以说：'保持其他都一样，只把背景颜色改成深蓝色。'"

---

### Phase 4: Second Improvement Round (7 min) *(0:29–0:36)*

EN: "Great job! You've gone through the design loop once. Now let's do it again! Play your updated game — is there something else you want to improve? Maybe add a difficulty level, a high score tracker, or some animations."

CN: "干得好！你已经经历了一次设计循环。现在让我们再来一次！玩玩你更新后的游戏——还有什么你想改进的吗？也许加个难度等级、最高分追踪器，或者一些动画。"

EN: "Try to do at least one more improvement. The more you iterate, the cooler your game gets!"

CN: "试着至少再做一次改进。你迭代得越多，你的游戏就越酷！"

**[Give students 5–7 minutes / 给学生 5-7 分钟]**

> **For fast finishers / 对于做得快的学生:**
> EN: "Already done? Awesome! Try something bold — ask AI to add power-ups, multiple levels, or a completely new feature. Or click a different game card at the top and generate a second game!"
> CN: "已经做完了？太棒了！试试大胆的——让 AI 添加道具、多个关卡，或一个全新的功能。或者点击顶部不同的游戏卡片生成第二个游戏！"

---

### Phase 5: Export (2 min) *(0:36–0:38)*

EN: "Alright, let's save your masterpiece! Scroll down to the bottom of the page — 'Step 4: Save Your Game.' Click the 'Download My Game' button. This saves your game as an HTML file that you can open in any browser — even without internet!"

CN: "好了，让我们保存你的杰作！向下滚动到页面底部——'Step 4: Save Your Game'。点击'Download My Game'按钮。这会把你的游戏保存为 HTML 文件，你可以在任何浏览器中打开——即使没有网络！"

**[Give students 1–2 minutes to export / 给学生 1-2 分钟导出]**

---

## Show & Share / 展示分享 (5 minutes / 分钟) *(0:38–0:43)*

EN: "Time to play each other's games! Let's switch — you're going to play your partner's game and they'll play yours."

CN: "是时候玩彼此的游戏了！我们换一下——你来玩你搭档的游戏，他们来玩你的。"

**[Have the 2 students swap laptops or share screens / 让两个学生交换电脑或分享屏幕]**

EN: "Play your partner's game for about 2 minutes. Then give them feedback: What did you like best about their game? What's one thing they could add to make it even better?"

CN: "玩你搭档的游戏大约2分钟。然后给他们反馈：你最喜欢他们游戏的什么？有一件什么事可以让它更好？"

**[Give students 2 minutes to play each other's games / 给学生 2 分钟玩彼此的游戏]**

EN: "Alright, let's hear about it! [Student name], what game did you build and what was your favorite improvement?"

CN: "好，让我们来听听！[学生名字]，你做了什么游戏，你最喜欢的改进是什么？"

**[Student 1 shares / 学生1分享]**

EN: "And [Student 2 name], what did you think of their game? ... Now tell us about your game!"

CN: "那[学生2名字]，你觉得他们的游戏怎么样？……现在告诉我们你的游戏！"

**[Student 2 shares / 学生2分享]**

EN: "Awesome work, both of you! You went from an idea, to words, to a real playable game. That's exactly what game designers and programmers do every day."

CN: "两位都做得太好了！你们从一个想法，到文字，到一个真正可以玩的游戏。这正是游戏设计师和程序员每天在做的事。"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(0:43–0:45)*

EN: "Today you learned the game design loop — describe, generate, play, improve, repeat. You saw that AI can turn plain English into real working games. But here's the important part: AI built the code, but YOU were the designer. You chose the game type, you described the rules, you play-tested it, and you decided what to improve. The creative decisions were all yours."

CN: "今天你学到了游戏设计循环——描述、生成、试玩、改进、重复。你看到 AI 可以把普通英文变成真正可运行的游戏。但重要的是：AI 写了代码，但你是设计师。你选了游戏类型，你描述了规则，你试玩了它，你决定了改进什么。所有创意决策都是你的。"

EN: "And remember — your game is saved as an HTML file. You can open it at home, share it with your family, even put it online if you want!"

CN: "记住——你的游戏保存为了 HTML 文件。你可以在家打开它，分享给你的家人，甚至如果你想的话可以放到网上！"

EN: "Great work today, game designers!"

CN: "今天干得好，游戏设计师们！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00–0:01 | Welcome | Slide 1 — Title & introduction |
| 0:01–0:03 | Recap | Slide 2 — You already know AI writes code |
| 0:03–0:04 | Concept | Slide 3 — What makes a game? |
| 0:04–0:05 | Showcase | Slide 4 — Four game types |
| 0:05–0:06 | Design loop | Slide 5 — Describe, generate, play, improve |
| 0:06–0:07 | Tips | Slide 6 — How to describe a game to AI |
| 0:07–0:08 | Example | Slide 7 — From description to working game |
| 0:08 | Launch | Slide 8 — Students open laptops |
| 0:08–0:11 | Choose | Students pick a game type |
| 0:11–0:21 | Build | Students generate and play-test first game |
| 0:21–0:29 | Improve 1 | First round of improvements |
| 0:29–0:36 | Improve 2 | Second round of improvements |
| 0:36–0:38 | Export | Students download their game |
| 0:38–0:43 | Share | Students play each other's games & discuss |
| 0:43–0:45 | Wrap-up | Recap key ideas |
