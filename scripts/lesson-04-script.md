# Lesson 4: AI Code -- Build and Play -- Teacher Script
# 第四课：AI 编程 -- 创造与游戏 -- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students learn that AI can turn plain-language descriptions into working programs, then apply that skill to design and build a playable game.
**目标**: 学生了解 AI 可以将自然语言描述转化为可运行的程序，然后运用这项技能设计并构建一个可玩的游戏。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> - Test the lesson page: make sure the `/api/code` endpoint is working. Try generating a simple program (e.g., "a red button") and verify the preview iframe shows the result.
> - This is a 60-minute merged lesson. Part 1 (coding challenges) and Part 2 (game design) are on the SAME page with two separate CodePlayground instances.
> - Prepare to show the page on the projector for the warm-up demo.
> - If internet is slow, the code generation may take 5-10 seconds per request. Encourage students to start describing their next challenge while waiting.
>
> - 测试课程页面：确保 `/api/code` 接口正常工作。尝试生成一个简单程序（如"一个红色按钮"），验证预览框显示结果。
> - 这是一节 60 分钟的合并课程。第一部分（编程挑战）和第二部分（游戏设计）在同一个页面上，有两个独立的 CodePlayground 实例。
> - 准备在投影仪上展示页面进行热身演示。
> - 如果网速慢，代码生成可能每次需要 5-10 秒。鼓励学生在等待时开始描述下一个挑战。

---

## Warm-up / 概念热身 (12 minutes / 分钟)

### [SLIDE 1 -- Title] *(0:00)*

EN: "Welcome to today's lesson! Today is special -- you're going to become both a programmer AND a game designer, all in one class. And the best part? You don't need to know ANY code. Zero. None."

CN: "欢迎来到今天的课程！今天很特别——你们将在一节课里同时成为程序员和游戏设计师。最棒的是？你们不需要知道任何代码。零。完全不需要。"

---

### [SLIDE 2 -- What does coding feel like?] *(0:01)*

EN: "Let me ask you: what do you think coding looks like? Most people imagine something like this -- scary symbols, brackets, weird words like 'ctx.beginPath'. Looks intimidating, right?"

CN: "让我问你们：你们觉得编程是什么样的？大多数人想象的是这样——吓人的符号、括号、奇怪的词，比如 'ctx.beginPath'。看起来很吓人，对吧？"

EN: "But look at the right side. 'Make a colorful ball that bounces around the screen.' That's just normal English! And here's the amazing thing: both of these produce the EXACT same result. A bouncing ball on your screen."

CN: "但看看右边。'制作一个在屏幕上弹跳的彩色球。'这只是普通的英语！而且令人惊奇的是：这两个产生的结果完全一样。一个在你屏幕上弹跳的球。"

---

### [SLIDE 3 -- The magic] *(0:03)*

EN: "This is the magic of AI coding. You describe what you want in regular words. AI writes all the complicated code. And you see your creation come to life instantly. No memorizing code, no confusing symbols -- just your ideas turned into real, working programs."

CN: "这就是 AI 编程的魔力。你用普通的语言描述你想要什么。AI 写出所有复杂的代码。然后你立刻看到你的创作活过来。不用记忆代码，不用看令人困惑的符号——只是你的想法变成真正可运行的程序。"

---

### [SLIDE 4 -- How it works] *(0:04)*

EN: "Here's how it works, in three steps. Step one: YOU describe what you want. 'Make a button that counts clicks.' Step two: AI writes the code -- HTML for the structure, CSS for the styling, and JavaScript for the action. Step three: you see it live, working, right in your browser. And if you want to change something? Just tell it! 'Make the button bigger' -- and it updates instantly."

CN: "它是这样工作的，三个步骤。第一步：你描述你想要什么。'制作一个计数点击的按钮。'第二步：AI 写代码——HTML 用于结构，CSS 用于样式，JavaScript 用于行为。第三步：你在浏览器中直接看到它运行。如果你想改什么？告诉它！'把按钮变大'——它会立即更新。"

---

### [SLIDE 5 -- Be specific] *(0:06)*

EN: "But there's one important secret to making this work well: be SPECIFIC. Look at the left side: 'Make a button.' That's too vague! AI doesn't know what kind of button, what color, what it does. Now look at the right side: 'A big red button that changes to a random color when I click it.' That's specific! AI knows exactly what to build."

CN: "但有一个重要的秘诀能让它效果很好：要具体。看左边：'做一个按钮。'这太模糊了！AI 不知道什么样的按钮、什么颜色、做什么。现在看右边：'一个大红色按钮，点击时变成随机颜色。'这很具体！AI 确切知道要构建什么。"

EN: "The rule is: tell AI what it LOOKS like, and what HAPPENS when you interact with it. The more details, the better the result."

CN: "规则是：告诉 AI 它看起来是什么样的，以及当你与它互动时会发生什么。细节越多，结果越好。"

---

### [SLIDE 6 -- Part 1 challenges] *(0:08)*

EN: "Alright, Part 1! You're going to tackle coding challenges -- five of them, from easy to hard. Color Clicker and Click Counter are easy, perfect for warming up. Bouncing Ball and Drawing Canvas are medium. And Mini Game is hard -- for the adventurous ones! You don't have to do them in order, but I recommend starting easy to build confidence."

CN: "好了，第一部分！你们要挑战编程任务——五个，从简单到困难。Color Clicker 和 Click Counter 是简单的，非常适合热身。Bouncing Ball 和 Drawing Canvas 是中等。Mini Game 是困难的——给勇于冒险的同学！你们不必按顺序做，但我建议从简单的开始来建立信心。"

EN: "Open your laptops and go to the Lesson 4 page. You'll see the challenge cards at the top -- click any card and its description loads right into the playground. Then click 'Generate'!"

CN: "打开你们的电脑，进入第四课的页面。你会在顶部看到挑战卡片——点击任何卡片，它的描述就会加载到编程操场中。然后点击'Generate'！"

---

## Part 1: Coding Challenges / 编程挑战 (18 minutes / 分钟)

### Hands-on Work *(0:12--0:30)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "Go ahead and start! Click a challenge card, then click Generate to see what AI builds. Try the easy ones first -- Color Clicker is a great starting point."

CN: "开始吧！点击一个挑战卡片，然后点击 Generate 看 AI 构建了什么。先试简单的——Color Clicker 是一个很好的起点。"

**[Give students 18 minutes total for Part 1 / 给学生第一部分总共 18 分钟]**

> **Walk around and help / 走动并帮助 (first 5 min):**
> EN: "Did your first program work? Great! Now try clicking the 'What to change?' box and type something like 'Make the button bigger' or 'Add more colors.' See what happens!"
> CN: "你的第一个程序成功了吗？太好了！现在试试点击'What to change?'框，输入类似'Make the button bigger'或'Add more colors'的内容。看看会发生什么！"

> **Encourage exploration / 鼓励探索 (after 8 min):**
> EN: "If you've done two challenges, try a medium one! Bouncing Ball is really fun to watch. And you can modify it -- 'add more balls,' 'make them different colors,' 'make them leave trails.'"
> CN: "如果你已经做了两个挑战，试试中等的！Bouncing Ball 看起来很有趣。而且你可以修改它——'加更多球'、'让它们变成不同颜色'、'让它们留下轨迹'。"

> **Contingency / 应对方案:**
> EN: If a student's code doesn't look right: "Don't worry -- try describing it more specifically. Instead of just 'make a game,' say exactly what should happen step by step. Or try clicking Generate again -- AI might give you a different result."
> CN: 如果学生的代码看起来不对："别担心——试着更具体地描述。不要只说'做一个游戏'，要一步一步说清楚应该发生什么。或者再点一次 Generate——AI 可能会给你不同的结果。"

> **Contingency / 应对方案:**
> EN: If a student finishes all 5 quickly: "Amazing speed! Try inventing your OWN program. What's something you've always wanted to build? A calculator? An animation? A drawing tool? Describe it and see if AI can build it!"
> CN: 如果学生很快完成了所有 5 个："速度惊人！试着发明你自己的程序。你一直想建什么？一个计算器？一个动画？一个绘画工具？描述它，看看 AI 能不能构建出来！"

---

### Vibe Coding Techniques *(0:28)*

**[SLIDE 7 -- Vibe Coding Techniques]**

EN: "Before we move on to games, I want to teach you some PRO techniques. This is called 'vibe coding' -- and real developers actually use this every day. Let me scroll down to the Vibe Coding section on the page."

CN: "在我们开始做游戏之前，我想教你们一些专业技巧。这叫做'vibe coding'——真正的开发者每天都在用这个。让我在页面上滚动到 Vibe Coding 部分。"

**[Scroll to the Vibe Coding section on the lesson page / 在课程页面上滚动到 Vibe Coding 部分]**

EN: "Five key techniques. Number one: Start Simple, Then Iterate. Don't try to describe the perfect program all at once. Start basic, then add features one by one. Number two: Debug by Describing. When something breaks, don't say 'fix it' -- tell AI EXACTLY what went wrong. Number three: Read the Code. Even a little! Look for words you recognize like 'score' or 'color'. Number four: Chain Your Prompts -- each change builds on the last, like giving directions one turn at a time. Number five: Combine ideas from different programs you've built."

CN: "五个关键技巧。第一：从简单开始，然后迭代。不要一次性描述完美的程序。从基础开始，然后逐个添加功能。第二：通过描述来调试。当出问题时，不要说'修好它'——告诉 AI 到底哪里出错了。第三：读代码。哪怕只是一点点！寻找你认识的词，比如 'score' 或 'color'。第四：链接你的提示——每次修改都建立在上一次的基础上，就像一步一步给方向。第五：把不同程序的创意组合起来。"

EN: "There are also three challenges at the bottom of this section -- 3-Step Rocket, Bug Hunter, and Frankenstein Build. Try one if you have time during the game design part!"

CN: "这个部分底部还有三个挑战——3-Step Rocket、Bug Hunter 和 Frankenstein Build。如果你在游戏设计部分有时间，试试其中一个！"

---

### Transition to Part 2 *(0:30)*

EN: "Great work, everyone! Now we're going to level up -- in Part 2, we're going to use these vibe coding skills to design and build REAL GAMES."

CN: "大家做得太好了！现在我们要升级——在第二部分，我们要用这些 vibe coding 技能来设计和构建真正的游戏。"

**[Show slides 8-12 quickly, about 2 minutes total / 快速展示幻灯片 8-12，大约总共 2 分钟]**

---

### [SLIDE 8 -- What makes a game?] *(0:30)*

EN: "What makes something a GAME and not just a program? Four things: Goals -- what are you trying to do? Rules -- what can and can't you do? Challenge -- what makes it hard? And Fun -- what makes you want to keep playing? When you design your game, think about all four."

CN: "什么让一个东西成为游戏而不只是一个程序？四个要素：目标——你要做什么？规则——什么能做什么不能做？挑战——什么让它困难？还有乐趣——什么让你想继续玩？当你设计游戏时，想想这四个要素。"

---

### [SLIDE 9 -- Game types] *(0:31)*

EN: "You have four game types to choose from. Quiz Game is the easiest to start with. Catch Game uses your mouse. Maze Runner uses arrow keys. And Whack-a-Mole is all about clicking fast. Each one has a detailed prompt ready for you -- just click the card!"

CN: "你有四种游戏类型可以选择。Quiz Game 最容易上手。Catch Game 用鼠标。Maze Runner 用方向键。Whack-a-Mole 全靠快速点击。每个都有详细的提示词准备好了——只需点击卡片！"

---

### [SLIDE 10 -- Design loop] *(0:31)*

EN: "Here's the key to making a great game: the design loop. Describe, Generate, Play, Improve -- and REPEAT. Every time you go around the loop, your game gets better. Real game designers do this hundreds of times!"

CN: "这是制作一个好游戏的关键：设计循环。描述、生成、游戏、改进——然后重复。每次你经历这个循环，你的游戏就会变得更好。真正的游戏设计师这样做几百次！"

---

### [SLIDE 11 -- How to describe a game] *(0:32)*

EN: "When describing your game to AI, include the rules, the controls, the scoring system, and the look and feel. The more specific you are, the better your game will be!"

CN: "当你向 AI 描述你的游戏时，包括规则、控制方式、计分系统，以及外观和感觉。你越具体，你的游戏就越好！"

---

### [SLIDE 12 -- Part 2 mission] *(0:32)*

EN: "Your Part 2 mission: scroll down on the page to the Game Designer section. Pick a game type, generate it, play-test it, make at least 2 improvements using the Level Up tips, and export your game!"

CN: "你的第二部分任务：在页面上向下滚动到游戏设计师部分。选择一种游戏类型，生成它，试玩它，使用 Level Up 提示至少做 2 次改进，然后导出你的游戏！"

---

## Part 2: Game Design / 游戏设计 (20 minutes / 分钟)

### Hands-on Work *(0:32--0:52)*

**[Students scroll down to Part 2 section / 学生向下滚动到第二部分]**

EN: "Scroll down past the Part 1 playground and you'll see the big purple divider that says 'Part 2: AI Game Designer.' Below that are four game type cards. Click one you like! Its prompt will load into the game builder. Then click Generate and wait for your game to appear!"

CN: "向下滚动过第一部分的编程操场，你会看到紫色的大分隔条写着 'Part 2: AI Game Designer'。下面有四张游戏类型卡片。点击一个你喜欢的！它的提示词会加载到游戏构建器中。然后点击 Generate，等待你的游戏出现！"

**[Give students 20 minutes for Part 2 / 给学生第二部分 20 分钟]**

> **First 8 min -- Game generation / 前 8 分钟 -- 游戏生成:**
> EN: "Your game is loading! While you wait, try playing the preview as soon as it appears. Does everything work? Can you play it? Is it fun?"
> CN: "你的游戏正在加载！在等待的时候，一旦它出现就试着玩预览。所有功能都工作吗？你能玩吗？有趣吗？"

> **After first game generates / 第一个游戏生成后:**
> EN: "Now the fun part -- improving your game! Scroll down a little to the 'Level Up Your Game' section. You'll see tip cards like 'Change the theme,' 'Add sound effects,' 'Add difficulty levels.' Click a tip and it automatically fills in the 'What to change?' box. Then click Update! Try to make at least 2 improvements."
> CN: "现在是有趣的部分——改进你的游戏！向下滚动一点到'Level Up Your Game'部分。你会看到提示卡片，比如'Change the theme'、'Add sound effects'、'Add difficulty levels'。点击一个提示，它会自动填写'What to change?'框。然后点击 Update！尝试至少做 2 次改进。"

> **Contingency / 应对方案:**
> EN: If a game doesn't work properly: "Sometimes AI doesn't get it perfect on the first try. That's OK! Try clicking Generate again, or be more specific in your description. You can also try a different game type -- Quiz Game is the most reliable one."
> CN: 如果游戏不能正常工作："有时 AI 第一次做不到完美。没关系！试着再点一次 Generate，或者在你的描述中更具体。你也可以试试不同的游戏类型——Quiz Game 是最可靠的一个。"

> **Contingency / 应对方案:**
> EN: If students are stuck on improvements: "Here's an easy one to try: click 'Change the theme' and your game will get a whole new look! Or try 'Add animations' to make it feel more polished. You can also write your own improvements -- like 'make the game harder as the score goes up.'"
> CN: 如果学生对改进感到困惑："试试这个简单的：点击'Change the theme'，你的游戏会得到全新的外观！或者试试'Add animations'让它感觉更精致。你也可以写自己的改进——比如'随着分数增加让游戏变难。'"

> **Last 3 minutes of Part 2 / 第二部分最后 3 分钟:**
> EN: "If you're happy with your game, scroll down to 'Save Your Game' and click the download button! This saves it as an HTML file you can open in any browser and share with anyone."
> CN: "如果你对你的游戏满意了，向下滚动到'Save Your Game'，点击下载按钮！这会把它保存为一个 HTML 文件，你可以在任何浏览器中打开，和任何人分享。"

---

## Share / 分享与试玩 (8 minutes / 分钟) *(0:52--1:00)*

EN: "Time to play each other's games! Find a partner -- swap laptops or share screens. Play each other's games for 2 minutes."

CN: "互相试玩游戏的时间到了！找一个搭档——交换电脑或共享屏幕。花 2 分钟互相试玩对方的游戏。"

**[Give students 3-4 minutes for pair play / 给学生 3-4 分钟互相试玩]**

EN: "OK, who wants to show their game to the whole class? Come up and we'll project it!"

CN: "好的，谁想把自己的游戏展示给全班看？上来，我们投影出来！"

**[1-2 volunteers demo their games / 1-2 个志愿者展示他们的游戏]**

EN: "Let's play this game! What kind of game did you build? What improvements did you make?"

CN: "让我们玩这个游戏！你做的是什么类型的游戏？你做了什么改进？"

**[After demos / 展示后]**

EN: "Great work! Let me ask: what was easier -- writing the description, or knowing what to change to make it better? That second part -- knowing HOW to improve something -- is what real game designers spend most of their time doing."

CN: "做得好！让我问：什么更容易——写描述，还是知道如何改进来让它更好？第二部分——知道如何改进某样东西——才是真正的游戏设计师花大部分时间做的事情。"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(1:00)*

**[SLIDE 13 -- optional, or just speak]**

EN: "Today you did two things. In Part 1, you learned that describing things clearly to AI gives you real, working programs -- no coding needed. In Part 2, you used that skill to design actual games, and you learned the design loop: describe, generate, play, improve, repeat."

CN: "今天你们做了两件事。在第一部分，你们学到了清楚地向 AI 描述事物可以给你真正可运行的程序——不需要编程。在第二部分，你们用这项技能设计了真正的游戏，并且学到了设计循环：描述、生成、试玩、改进、重复。"

EN: "The programs you built today are REAL. You can open those HTML files on any computer, on any phone. You're now creators of interactive things that other people can actually use and play. See you next time!"

CN: "你们今天构建的程序是真实的。你可以在任何电脑、任何手机上打开那些 HTML 文件。你们现在是创造互动内容的创造者，别人可以真正使用和玩你们的作品。下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:01 | Welcome | Slide 1 -- Title & intro |
| 0:01--0:03 | Coding intimidation | Slide 2 -- Scary code vs friendly description |
| 0:03--0:04 | The magic | Slide 3 -- You describe, AI codes, you see it |
| 0:04--0:06 | How it works | Slide 4 -- Describe, Generate, See (3-step flow) |
| 0:06--0:08 | Be specific | Slide 5 -- Vague vs specific examples |
| 0:08--0:12 | Part 1 launch | Slide 6 -- 5 challenges; students open laptops |
| 0:12--0:28 | Part 1 work | Students build programs from challenge cards (16 min) |
| 0:28--0:30 | Vibe Coding | Slide 7 -- 5 pro techniques for AI coding |
| 0:30--0:32 | Transition | Slides 8--12 -- What makes a game, game types, design loop |
| 0:32--0:52 | Part 2 work | Students design and build games (20 min) |
| 0:52--1:00 | Share & play | Swap games, volunteers demo, discussion (8 min) |
| 1:00 | Wrap-up | Recap key ideas (2 min) |
