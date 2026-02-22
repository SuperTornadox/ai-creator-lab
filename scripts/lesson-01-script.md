# Lesson 1: AI Words — Chat, Write, Create — Teacher Script
# 第一课：AI 对话 — 聊天、写作、创作 — 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops, optionally ChatGPT open for live demos
**Goals / 目标**:
1. Students understand what AI is (and isn't) at a basic level
2. Students have their first conversation with AI and practice asking creative questions
3. Students learn what a prompt is and why specific prompts produce better results
4. Students use a story framework + AI to collaboratively write and revise a short story

**目标**:
1. 学生基本了解 AI 是什么（以及不是什么）
2. 学生与 AI 进行第一次对话，并练习提出有创意的问题
3. 学生了解什么是提示词 (prompt)，以及为什么具体的提示词能产生更好的结果
4. 学生使用故事框架 + AI 协作写作并修改一篇短篇故事

---

## Pre-Class Preparation / 课前准备

- [ ] Test the lesson page in a browser — verify both Part 1 and Part 2 load correctly
- [ ] Test the /api/chat endpoint — make sure AI responses come back
- [ ] Have slides.html open in a second tab, ready to present
- [ ] Optional: Have ChatGPT or the course chat page open for the live demo on Slide 10
- [ ] Prepare a backup plan: if internet is slow, have 2-3 pre-written AI responses you can read aloud as "examples"

---

## Warm-up / 概念热身 (12 minutes)

### [SLIDE 1 — Title: AI Words]

**0:00**

EN: "Welcome to AI Creator Lab! Over the next 12 weeks, you're going to learn how to create amazing things using artificial intelligence. But first — let's find out what you already know about AI."

CN: "欢迎来到 AI 创造者实验室！在接下来的 12 周里，你们将学会如何用人工智能创造很棒的东西。但首先——让我们看看你们对 AI 已经了解多少。"

EN: "Today's lesson is called 'AI Words' because we'll be using AI to do two things with words: chat and write stories."

CN: "今天的课叫'AI 对话'，因为我们会用 AI 做两件和文字有关的事：聊天和写故事。"

---

### [SLIDE 2 — What do you think AI is?]

**0:02**

EN: "So, what do you think AI is? Just say whatever comes to mind — there's no wrong answer."

CN: "那你们觉得 AI 是什么？想到什么就说什么——没有错误的答案。"

**[Wait for student responses / 等待学生回答 — 1-2 minutes]**

> **Teacher tip / 教师提示:**
> EN: Most students will mention robots or Siri. Accept all answers warmly. If they're shy, prompt with: "Have you heard the word AI before? Where?" or "Has anyone used ChatGPT?"
> CN: 大多数学生会提到机器人或 Siri。热情地接受所有回答。如果他们害羞，可以提示："你们之前听说过 AI 这个词吗？在哪里听到的？" 或 "有人用过 ChatGPT 吗？"

EN: "Great answers! Let me show you — AI is actually already in your life..."

CN: "回答得很好！让我给你们看——AI 其实已经在你们的生活中了……"

---

### [SLIDE 3 — AI Is Already In Your Life]

**0:04**

EN: "When you talk to Siri or Alexa — that's AI listening and understanding your voice."

CN: "当你跟 Siri 或 Alexa 说话时——那就是 AI 在听和理解你的声音。"

EN: "When YouTube or TikTok recommends videos you like — that's AI learning your taste."

CN: "当 YouTube 或 TikTok 给你推荐你喜欢的视频时——那是 AI 在学习你的喜好。"

EN: "When you unlock your phone with your face — that's AI recognizing you."

CN: "当你用脸解锁手机时——那是 AI 在识别你。"

EN: "So AI isn't some far-away future thing. It's already right here."

CN: "所以 AI 不是什么遥远的未来事物。它已经就在这里了。"

---

### [SLIDE 4 — What AI is NOT]

**0:05**

EN: "But there are a lot of myths about AI. Let's clear some up."

CN: "但是关于 AI 有很多误解。让我们澄清一下。"

EN: "AI is not a brain. It doesn't think the way you and I think. It's not alive — it doesn't have feelings. It's not magic — it runs on math and data. And very importantly: it's not always right. AI can make mistakes — sometimes big ones!"

CN: "AI 不是大脑。它不像你我这样思考。它不是活的——它没有感受。它不是魔法——它靠数学和数据运行。而且非常重要：它并不总是对的。AI 会犯错——有时候是大错！"

EN: "At its core, AI is a computer program that learns patterns from huge amounts of data."

CN: "本质上，AI 是一个从大量数据中学习规律的计算机程序。"

---

### [SLIDE 5 — How AI Works]

**0:06**

EN: "Here's a way to think about it: Imagine a student who read every single book in the library. Every novel, every textbook, every comic book. They can talk about almost anything — but they never actually experienced any of it. They're just really, really good at remembering and combining what they read."

CN: "这样来想：想象一个学生读了图书馆里每一本书。每本小说、每本教材、每本漫画书。他们几乎什么都能聊——但他们从来没有真正经历过。他们只是非常非常擅长记住和组合他们读过的东西。"

EN: "That's kind of what AI does. It learned from billions of pieces of text, and now it can generate new text that sounds smart and creative — but it doesn't actually understand what it's saying."

CN: "这有点像 AI 做的事情。它从数十亿条文本中学习，现在它可以生成听起来聪明又有创意的新文本——但它实际上并不理解自己在说什么。"

---

### [SLIDE 6 — Today: Two Activities!]

**0:08**

EN: "Today we have TWO activities! First, in Part 1, you'll interview a funny AI character — a talking cat, a dragon chef, a robot comedian — and practice asking great questions. Then in Part 2, you'll learn about prompts and write your own creative story WITH AI."

CN: "今天我们有两个活动！首先在第一部分，你们会采访一个有趣的 AI 角色——会说话的猫、龙厨师、机器人喜剧演员——练习提出好问题。然后在第二部分，你们会学习提示词并和 AI 一起写自己的创意故事。"

EN: "But before we start, let me teach you something that'll make BOTH activities way better..."

CN: "但在开始之前，让我教你们一些会让两个活动都更有趣的东西……"

---

### [SLIDE 7 — What Is a Prompt?]

**0:09**

EN: "There's a word you'll hear a lot in this course: PROMPT. A prompt is basically your instructions to AI. It's what you type in to tell AI what you want."

CN: "有一个词你们在这门课会经常听到：PROMPT（提示词）。提示词基本上就是你给 AI 的指令。就是你输入的内容，告诉 AI 你想要什么。"

EN: "Think of it like a recipe. If you tell someone 'make me food,' they might bring you anything — maybe a raw potato. But if you say 'make me a chocolate cake with strawberries on top,' you'll get exactly what you want."

CN: "把它想象成一个食谱。如果你告诉别人'给我做食物'，他们可能给你任何东西——也许是个生土豆。但如果你说'给我做一个上面放草莓的巧克力蛋糕'，你就会得到你想要的。"

---

### [SLIDE 8 — Vague vs. Specific Prompts]

**0:10**

EN: "Look at this comparison. On the left: 'Write me a story' — vague, boring result. On the right: 'Write a funny story about a shy dragon who accidentally gets superpowers in a candy world' — now AI has specific things to work with! The result is way, way better."

CN: "看看这个对比。左边：'给我写一个故事'——模糊的，无聊的结果。右边：'写一个关于一条害羞的龙在糖果世界意外获得超能力的搞笑故事'——现在 AI 有了具体的素材！结果好太多了。"

EN: "This applies to EVERYTHING you do with AI — interviews, stories, art, code. Better instructions = better results."

CN: "这适用于你用 AI 做的所有事情——采访、故事、艺术、代码。更好的指令 = 更好的结果。"

---

### [SLIDE 9 — Good Prompt Formula]

**0:11**

EN: "Here's the formula for a good prompt: Clear — AI knows exactly what you want. Specific — include details and examples. Creative — interesting ideas get interesting results."

CN: "好提示词的公式是：清晰——AI 知道你到底想要什么。具体——包含细节和例子。有创意——有趣的想法得到有趣的结果。"

EN: "Remember: you're the director. AI is your assistant. The better your directions, the better the show."

CN: "记住：你是导演。AI 是你的助手。你的指导越好，表演就越好。"

---

### [SLIDE 10 — Demo: Same Topic, Different Prompts]

**0:11:30**

EN: "Let me show you the difference live. I'll type two prompts about the same topic — cats — and look at how different the results are."

CN: "让我现场给你们看区别。我会输入两个关于同一话题——猫——的提示词，看看结果有多不同。"

**[Open ChatGPT or course chat page. Type "Tell me about cats" first, show the generic response. Then type "You are a sassy talking cat. Describe your typical Tuesday in 3 sentences. Be dramatic." Show the fun response.]**

EN: "See the difference? Same topic, totally different results. That's the power of a good prompt!"

CN: "看到区别了吗？同一个话题，完全不同的结果。这就是好提示词的力量！"

---

### [SLIDE 11 — Your Mission Today]

**0:12**

EN: "Here's your mission. Part 1: pick an AI character, interview them by asking 8 to 10 creative questions, and find the funniest answer! Part 2: build a story framework, let AI write a draft, then revise it at least 2 times until it's great."

CN: "这是你们的任务。第一部分：选一个 AI 角色，通过问 8 到 10 个有创意的问题来采访他们，找到最搞笑的回答！第二部分：建立故事框架，让 AI 写初稿，然后至少修改 2 次直到满意。"

---

### [SLIDE 12 — Meet Your Characters]

**0:12:30**

EN: "Here are your six characters. A talking cat who thinks it's your boss... a time traveler from the year 3000... a friendly alien confused by everything... a time traveler from ancient Rome stuck in our century... a dragon who runs a restaurant... and a robot trying to learn comedy."

CN: "这是你们的六个角色。一只觉得自己是你老板的会说话的猫……一个来自 3000 年的时间旅行者……一个被一切迷惑的友好外星人……一个从古罗马穿越来被困在我们世纪的时间旅行者……一条开餐厅的龙……还有一个在学喜剧的机器人。"

---

### [SLIDE 13 — Story Framework Preview]

**0:13**

EN: "And for the story part, you'll use four ingredients: WHO is the main character, WHERE does it happen, WHAT goes wrong, and HOW does it end. We'll get to this after the interview."

CN: "故事部分你们会用四个要素：主角是谁，故事发生在哪里，出了什么问题，以及结局如何。采访完之后我们会做这个。"

---

### [SLIDE 14 — Let's Go!]

**0:13:30**

EN: "Alright — open your laptops and go to the Lesson 1 page! Start with Part 1 — the interview is at the top. You have about 18 minutes for the interview, then we'll move to the story."

CN: "好了——打开电脑，进入第一课的页面！从第一部分开始——采访在页面顶部。你们有大约 18 分钟进行采访，然后我们会做故事。"

---

## Part 1: AI Interview / AI 采访 (18 minutes)

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

### Setup Phase (2 min)

**0:14**

EN: "You should see six character cards at the top of the page. Take a moment to read about each one, then click on the one you want to interview."

CN: "你应该能看到页面顶部有六个角色卡片。花一点时间读一下每个角色的介绍，然后点击你想采访的那个。"

**[Give students 1-2 minutes to choose / 给学生 1-2 分钟选择]**

EN: "Has everyone picked a character? Great!"

CN: "每个人都选好角色了吗？很好！"

### Warm-up Questions (4 min)

**0:16**

EN: "Start with some easy warm-up questions to get the conversation going. Try asking things like: 'What's your name?', 'Where are you from?', 'What do you do every day?' These get the character talking."

CN: "先用一些简单的热身问题开始对话。试着问：'你叫什么名字？'、'你从哪里来？'、'你每天做什么？'这些问题能让角色说起来。"

**[Give students 3-4 minutes / 给学生 3-4 分钟]**

> **Walk around and check / 走动检查:**
> EN: Make sure every student has successfully sent at least one message and received a response. Help with any technical issues.
> CN: 确保每个学生都成功发送了至少一条消息并收到了回复。帮助解决任何技术问题。

### Deep/Creative Questions (10 min)

**0:20**

EN: "Good! Now let's get creative. Remember the prompt lesson — the more specific and interesting your questions, the better AI's answers will be!"

CN: "很好！现在让我们来点有创意的。记住提示词的课——你的问题越具体越有趣，AI 的回答就越好！"

EN: "Try questions like: 'What's your biggest secret?', 'What are you afraid of?', 'What's the most embarrassing thing that ever happened to you?', 'If you could have one superpower, what would it be?', 'Tell me about your weirdest adventure.'"

CN: "试试这些问题：'你最大的秘密是什么？'、'你害怕什么？'、'你遇到过最尴尬的事是什么？'、'如果你有一个超能力，你想要什么？'、'告诉我你最奇怪的冒险。'"

**[Give students 10 minutes / 给学生 10 分钟]**

> **If a student is stuck / 如果学生卡住了:**
> EN: "Try asking something silly or unexpected. 'What's your opinion on homework?' or 'Do you have any enemies?' The weirder the question, the funnier the answer!"
> CN: "试着问一些傻傻的或出人意料的问题。'你对作业有什么看法？'或'你有敌人吗？'问题越奇怪，回答就越搞笑！"

> **If a student finishes early / 如果学生提前完成:**
> EN: "Try clicking 'Change Character' and interview someone else! See how different characters answer the same questions. This also completes the stretch goal in your task sidebar."
> CN: "试着点击'换角色'来采访另一个人！看看不同的角色怎么回答同样的问题。这也能完成侧边栏里的拓展任务。"

### Wrap Part 1 (2 min)

**0:30**

EN: "Alright, pause your interviews! Quick — look through your chat and find the funniest or most surprising answer the AI gave you. We'll share at the end of class."

CN: "好的，暂停你们的采访！快速看看你的聊天记录，找到 AI 给你的最搞笑或最惊讶的回答。我们会在课程结束时分享。"

---

## Transition / 过渡 (2 minutes)

**0:32**

EN: "Great work on Part 1! You just practiced something really important — asking good questions. Notice how when you asked specific, creative questions, you got much better answers than when you asked boring ones? That's the prompt skill in action."

CN: "第一部分做得很好！你们刚练习了一些非常重要的东西——问好问题。注意到了吗，当你问具体的、有创意的问题时，你得到的回答比问无聊问题时好得多？这就是提示词技巧的实际运用。"

EN: "Now we're going to use that SAME skill for something different — writing a story. Scroll down on your page to Part 2: Write a Story."

CN: "现在我们要把同样的技巧用在不同的事情上——写故事。在页面上往下滚动到第二部分：写故事。"

---

## Part 2: AI Story Factory / AI 故事工厂 (20 minutes)

### Phase 1: Building the Framework (5 min)

**0:34**

EN: "You should see four fields to fill in. This is your story framework — the ingredients AI needs to cook up a great story."

CN: "你应该能看到四个要填写的字段。这是你的故事框架——AI 需要用来做出好故事的材料。"

EN: "First, type your main character. You can use the suggestion chips if you want, or make up your own! A ninja cat? A grumpy wizard? A talking backpack? Anything goes."

CN: "首先，输入你的主角。你可以用建议标签，或者自己创造！一只忍者猫？一个暴脾气的巫师？一个会说话的书包？什么都行。"

EN: "Then pick your setting, your conflict, and your ending style. Remember: the more interesting your choices, the more interesting your story!"

CN: "然后选择场景、冲突和结局风格。记住：你的选择越有趣，你的故事就越有趣！"

**[Give students 3-4 minutes to complete the framework / 给学生 3-4 分钟完成框架]**

> **If a student can't decide / 如果学生无法决定:**
> EN: "Just pick whatever sounds fun! There's no wrong answer. You can always start a new story later."
> CN: "选听起来有趣的就行！没有错误答案。之后你随时可以做一个新故事。"

EN: "Everyone filled in all four fields? Great — hit the big 'Generate My Story' button!"

CN: "每个人都填好四个字段了吗？很好——点击大的'生成我的故事'按钮！"

### Phase 2: Reading and First Revision (5 min)

**0:39**

EN: "Give AI a moment to write... and there's your story! Take a minute to read through it."

CN: "给 AI 一点时间来写……你的故事出来了！花一分钟读一读。"

**[Give students 2 minutes to read / 给学生 2 分钟阅读]**

EN: "What do you think? Is it good? Funny? Here's where it gets really fun — you're going to become the EDITOR. Below the story, you'll see a revision box. Type what you want to change, then click 'Revise.' For example: 'Make the dialogue funnier', 'Add a plot twist in the middle', 'Make the villain more scary', 'Add a sidekick character.'"

CN: "你们觉得怎么样？好不好？搞笑吗？现在才是真正有趣的部分——你要变成编辑了。故事下方有一个修改框。输入你想改的内容，然后点击'修改'。比如：'让对话更搞笑'、'在中间加一个剧情反转'、'让反派更可怕'、'加一个搭档角色'。"

EN: "Try your first revision now!"

CN: "现在试试你的第一次修改！"

**[Give students 3 minutes / 给学生 3 分钟]**

### Phase 3: More Revisions (10 min)

**0:44**

EN: "Good! Now keep going. Your goal is at least 2 revisions total, but you can do more! Each time, be SPECIFIC about what you want to change. Remember the prompt lesson — 'make it better' is weak, but 'add a funny scene where the robot trips over a cat' is strong."

CN: "很好！继续。你的目标是至少 2 次修改，但你可以做更多！每次都要具体说明你想改什么。记住提示词课——'让它更好'是弱修改，而'加一个机器人被猫绊倒的搞笑场景'是强修改。"

EN: "You can also click the version buttons (v1, v2, v3) to compare your story before and after each revision. See how it improves!"

CN: "你也可以点击版本按钮（v1, v2, v3）来比较每次修改前后的故事。看看它怎么变好的！"

**[Give students 8-10 minutes to revise / 给学生 8-10 分钟修改]**

> **Revision ideas if a student is stuck / 如果学生卡住了：**
> - "Make the ending funnier / more surprising"
> - "Add more dialogue between the characters"
> - "Describe the setting with more detail — what does it look, smell, sound like?"
> - "Add a sidekick character who is the opposite of the main character"
> - "Add sound effects and action words"
> - "Make the main character more dramatic and emotional"

> **Walk around and check / 走动检查:**
> EN: Look at revision requests. Praise students who write specific revision prompts. Point out the connection: "See? Just like in the interview — the more detail you give AI, the better the result."
> CN: 看看修改请求。表扬写了具体修改提示词的学生。指出联系："看到了吗？就像采访一样——你给 AI 的细节越多，结果就越好。"

---

## Share / 展示分享 (8 minutes)

**0:54**

EN: "Okay, time's up! Let's hear about your work. First, interviews — who got the funniest answer from their character?"

CN: "好了，时间到！让我们听听你们的成果。首先是采访——谁从角色那里得到了最搞笑的回答？"

**[Wait for 1-2 volunteers to share their funniest interview Q&A / 等待 1-2 个志愿者分享]**

EN: "Ha! That's great. Now, who wants to read their story? Or at least tell us about it?"

CN: "哈！太好了。现在，谁想读自己的故事？或者至少告诉我们它是关于什么的？"

**[Wait for 1-2 volunteers to share stories / 等待 1-2 个志愿者分享故事]**

EN: "Awesome story! What revisions did you make? What did you ask AI to change?"

CN: "很棒的故事！你做了什么修改？你让 AI 改了什么？"

**[Student describes their revisions / 学生描述修改]**

EN: "Interesting! Here's the big question for everyone: did you notice that the MORE specific your questions and instructions were, the BETTER the AI's responses turned out? Whether it was interview questions or story revisions?"

CN: "有意思！给大家一个大问题：你们有没有注意到，你的问题和指令越具体，AI 的回答就越好？不管是采访问题还是故事修改？"

**[Wait for responses / 等待回答]**

EN: "That's the number one skill of working with AI. You are the director. AI follows your lead. The clearer your directions, the better the result."

CN: "这就是和 AI 工作的第一技巧。你是导演。AI 跟着你的指导走。你的指示越清楚，结果就越好。"

EN: "One more question: did AI ever say something that seemed wrong, or didn't make sense?"

CN: "再问一个问题：AI 有没有说过看起来不对的，或者不合理的东西？"

**[Wait for responses / 等待回答]**

EN: "That's important to remember. AI is great at creating things that sound convincing, but it doesn't really understand anything. It makes mistakes. It's a powerful tool, but YOU have to be the judge of whether its output is good."

CN: "这一点很重要。AI 很擅长创造听起来令人信服的东西，但它并不真正理解任何东西。它会犯错。它是一个强大的工具，但你必须来判断它的输出好不好。"

---

## Wrap-up / 课程总结 (2 minutes)

**0:58**

EN: "Let's quickly save your work. Scroll to the bottom of the page and click 'Export All Work' to download everything — both your interview and your story."

CN: "让我们快速保存你的作品。滚动到页面底部，点击'导出所有作品'来下载所有东西——你的采访和故事都在里面。"

**[Give students 30 seconds to export / 给学生 30 秒导出]**

EN: "Today you learned three big things: First, AI is a pattern-matching program, not a brain. Second, a PROMPT is your instructions to AI — and specific prompts get much better results. Third, when you work with AI, YOU are the director. You have the ideas. AI helps bring them to life."

CN: "今天你学了三件重要的事：第一，AI 是一个模式匹配的程序，不是大脑。第二，提示词 (PROMPT) 是你给 AI 的指令——具体的提示词能得到更好的结果。第三，当你和 AI 合作时，你是导演。你有想法，AI 帮你实现。"

EN: "Next week, we're going to use AI to create actual images — art from text descriptions. It's going to be amazing. See you then!"

CN: "下周，我们要用 AI 来创作实际的图片——用文字描述生成艺术。会非常精彩。下次见！"

---

## Contingency Plans / 应急方案

### If the API is slow or down:
- EN: Switch to a "demo mode" — show students pre-prepared examples of interviews and stories. Have them write their questions on paper and discuss what kinds of prompts would work best.
- CN: 切换到"演示模式"——给学生展示预先准备的采访和故事示例。让他们在纸上写问题，讨论什么样的提示词最有效。

### If students finish Part 1 too quickly (under 12 min):
- EN: Encourage them to try a second character. Ask them to compare how two different characters answer the same question. Start Part 2 earlier.
- CN: 鼓励他们尝试第二个角色。让他们比较两个不同角色对同一问题的回答。提前开始第二部分。

### If students are slow on Part 1 (over 20 min):
- EN: At the 20-minute mark, ask everyone to ask their final question and move to Part 2. Reduce the share time to 5 minutes.
- CN: 在 20 分钟时，让每个人问最后一个问题并转到第二部分。把分享时间缩短到 5 分钟。

### If students struggle with the story framework:
- EN: Walk them through an example on the screen: "Let's say our character is 'a shy ghost,' setting is 'Haunted School,' conflict is 'Discovers a secret,' ending is 'Surprise twist.' See? Now AI has everything it needs!"
- CN: 在屏幕上引导他们看一个例子："比如我们的角色是'一个害羞的幽灵'，场景是'闹鬼的学校'，冲突是'发现了一个秘密'，结局是'意外反转'。看到了吗？现在 AI 有了它需要的一切！"

### If there's extra time (5+ minutes remaining):
- EN: Let students start a second story with a completely different framework. Or have them compare their v1 and final version and discuss what made the biggest difference.
- CN: 让学生用完全不同的框架开始第二个故事。或者让他们比较 v1 和最终版本，讨论什么改变影响最大。

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Slides | Activity / 活动 |
|---|---|---|---|
| 0:00–0:02 | Welcome | Slide 1 | Title & introduction |
| 0:02–0:04 | Discussion | Slide 2 | "What is AI?" — student responses |
| 0:04–0:06 | AI in life | Slides 3–4 | Examples + What AI is NOT |
| 0:06–0:08 | How AI works | Slides 5–6 | Analogy + today's two activities |
| 0:08–0:12 | Prompts | Slides 7–10 | What's a prompt, vague vs specific, demo |
| 0:12–0:14 | Mission | Slides 11–14 | Characters, framework preview, launch |
| 0:14–0:16 | Part 1 setup | — | Students choose character |
| 0:16–0:20 | Part 1 warm-up | — | Easy interview questions |
| 0:20–0:30 | Part 1 deep Qs | — | Creative questions, try 2nd character |
| 0:30–0:32 | Transition | — | Pause interviews, bridge to Part 2 |
| 0:32–0:34 | Part 2 intro | — | Scroll to Part 2, explain framework |
| 0:34–0:39 | Framework | — | Students fill in 4 fields, generate |
| 0:39–0:44 | First draft | — | Read draft, first revision |
| 0:44–0:54 | Revisions | — | 2+ revisions, compare versions |
| 0:54–0:58 | Share | — | Read interviews & stories aloud |
| 0:58–1:00 | Wrap-up | — | Export, recap, preview next week |
