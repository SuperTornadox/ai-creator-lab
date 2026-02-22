# Lesson 3: AI Media — Sound, Scene, Action! — Teacher Script
# 第三课：AI 媒体 — 声音、场景、开拍！— 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops, 3 audio clips for guessing game (2 AI + 1 real, or mix)
**Goal / 目标**: Students write lyrics and create music with AI (Suno), then combine text AI + image AI + music AI to produce a mini slideshow film.
**目标**: 学生用 AI 写歌词并创作音乐（Suno），然后结合文本 AI + 图片 AI + 音乐 AI 制作一部迷你幻灯片电影。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> 1. Prepare 3 short music clips for the guessing game (Slide 2):
>    - Mix of real musician clips and AI-generated clips (from Suno or similar)
>    - Pick clips where AI is surprisingly convincing
>    - Have them ready to play from your computer
>
> 2. Have Suno.com open and ready to demo if needed
>
> 3. Make sure /api/chat and /api/image endpoints are running
>
> 课前准备：
> 1. 准备3段短音乐片段用于猜测游戏（幻灯片2）：
>    - 混合真人音乐家和 AI 生成的片段（来自 Suno 或类似工具）
>    - 选择 AI 生成的听起来很逼真的片段
>    - 准备好从你的电脑播放
>
> 2. 提前打开 Suno.com 准备演示
>
> 3. 确保 /api/chat 和 /api/image 接口正常运行

---

## Warm-up / 热身 (12 minutes / 分钟)

### [SLIDE 1 — Title] *(0:00)*

EN: "Welcome back to AI Creator Lab! Today is a big day — we're going to use AI to make MUSIC and MOVIES. That's right — by the end of class, you'll have your own original song AND your own mini film. Sound, scene, action!"

CN: "欢迎回到 AI 创造者实验室！今天是很重要的一天——我们要用 AI 做音乐和电影。没错——到课结束时，你会有自己的原创歌曲和自己的迷你电影。声音、场景、开拍！"

---

### [SLIDE 2 — "Real or AI?" Guessing Game] *(0:01)*

**[Play 3 music clips from your computer / 从你的电脑播放3段音乐]**

EN: "But first, let's play a game. I'm going to play you three short music clips. Some are by real musicians, and some were made entirely by AI. Your job: figure out which is which."

CN: "但首先，我们来玩个游戏。我要给你们播放三段短音乐。有些是真人音乐家演奏的，有些完全是 AI 制作的。你们的任务：分辨哪些是哪些。"

EN: "Listen carefully to each one. After all three, I'll ask you to vote."

CN: "仔细听每一段。三段都播完后，我会让你们投票。"

**[Play clip 1, pause, play clip 2, pause, play clip 3 / 播放片段1，暂停，播放片段2，暂停，播放片段3]**

EN: "Okay, time to vote! Raise your hand if you think Song 1 is AI... Song 2... Song 3..."

CN: "好了，投票时间！如果你觉得歌曲1是 AI 的，举手……歌曲2……歌曲3……"

**[Reveal answers, discuss / 揭示答案，讨论]**

EN: "AI music has gotten REALLY good. You can barely tell the difference sometimes! And today, YOU get to be a music producer."

CN: "AI 音乐已经变得非常好了。有时候你几乎分辨不出区别！今天，你们要成为音乐制作人。"

---

### [SLIDE 3 — How AI Makes Music] *(0:04)*

EN: "So how does AI make music? Same idea as everything we've done before — you DESCRIBE what you want, and AI CREATES it. You give it a description, a genre, and maybe some lyrics, and it generates a full song with vocals, instruments, everything."

CN: "那 AI 是怎么做音乐的呢？和我们之前做的一切一样——你描述你想要的，AI 就创造出来。你给它一个描述、一种风格，也许还有一些歌词，它就生成一首完整的歌，包括人声、乐器，所有的一切。"

---

### [SLIDE 4 — Music Genre Showcase] *(0:05)*

EN: "Just like art has different styles, music has different genres. Pop is catchy and fun. Hip-hop is rhythmic and bold. Classical is elegant. Electronic is danceable. Jazz is smooth. Rock is powerful. Today you can try any of these!"

CN: "就像艺术有不同的风格一样，音乐有不同的类型。流行乐朗朗上口又有趣。嘻哈有节奏感又大胆。古典乐优雅。电子乐适合跳舞。爵士乐很顺滑。摇滚很有力量。今天你可以尝试任何一种！"

---

### [SLIDE 5 — How to Describe Music to AI] *(0:06)*

EN: "When you describe music to AI, think about four things: Mood — is it happy, epic, chill, or mysterious? Genre — pop, rock, lo-fi? Instruments — guitar, piano, synth? And Theme — what is the song about? Summer? Adventure? Friendship? The more specific you are, the better your song will be."

CN: "当你向 AI 描述音乐时，想想四件事：氛围——是快乐的、史诗的、放松的还是神秘的？类型——流行、摇滚、lo-fi？乐器——吉他、钢琴、合成器？主题——歌曲是关于什么的？夏天？冒险？友谊？你越具体，你的歌就会越好。"

---

### [SLIDE 6 — What Makes a Great Movie?] *(0:08)*

EN: "Now let's talk about the second part of today — making a MOVIE. What makes a great movie? Four things: a good story, great visuals, music that sets the mood, and good pacing — how the story flows from scene to scene."

CN: "现在让我们谈谈今天的第二部分——做电影。什么让一部电影变得伟大？四件事：好故事、好画面、设定氛围的音乐，以及好的节奏——故事如何从一个场景流到下一个场景。"

EN: "And guess what? We now have AI tools for ALL of these. Text AI for the story, Image AI for the visuals, and Music AI for the soundtrack."

CN: "猜猜怎么着？我们现在有 AI 工具来做所有这些。文本 AI 写故事，图片 AI 做画面，音乐 AI 做配乐。"

---

### [SLIDE 7 — Review: All Tools] *(0:09)*

EN: "Look at this — Text AI can write stories, lyrics, and scripts. Image AI can create illustrations and scenes. Music AI can make songs and soundtracks. Today we combine ALL THREE into one project — your own mini film!"

CN: "看——文本 AI 可以写故事、歌词和剧本。图片 AI 可以创建插图和场景。音乐 AI 可以做歌曲和配乐。今天我们把三者全部结合成一个项目——你自己的迷你电影！"

---

### [SLIDE 8 — Storyboard Concept] *(0:10)*

EN: "Before we start, let me explain what a storyboard is. A storyboard is like a comic strip that plans out your film. Each box is one scene — what happens, what the viewer sees. Real Hollywood directors use storyboards to plan every scene. Today, YOU are the director, and AI is your crew."

CN: "在我们开始之前，让我解释一下什么是故事板。故事板就像一个漫画条，规划你的电影。每个格子是一个场景——发生了什么，观众看到什么。真正的好莱坞导演用故事板来规划每个场景。今天，你就是导演，AI 是你的团队。"

---

### [SLIDE 9 — Workflow] *(0:11)*

EN: "Here's your workflow today. Part 1: Write lyrics, then create music on Suno. Part 2: Write a film script with AI, generate images for each scene, add your soundtrack, and preview your film. Two big projects in one class!"

CN: "这是你今天的工作流程。第一部分：写歌词，然后在 Suno 上创作音乐。第二部分：用 AI 写电影剧本，为每个场景生成图片，添加你的配乐，预览你的电影。一节课做两个大项目！"

---

## Part 1: AI Musician / AI 音乐家 (18 minutes / 分钟)

### [SLIDE 10 — Tips for Scene Images] *(save for later reference)*

### [SLIDE 11 — Your Mission] *(0:12)*

EN: "Here's the plan. Part 1: Write lyrics with AI, then create a song on Suno. You have about 15 minutes for this. Part 2: Write your film script, generate scene images, add your music, and preview your film. Let's start with music! Open your laptops and go to Lesson 3."

CN: "计划是这样的。第一部分：用 AI 写歌词，然后在 Suno 上创作歌曲。你有大约15分钟做这个。第二部分：写电影剧本，生成场景图片，添加音乐，预览电影。让我们从音乐开始！打开电脑，进入第三课。"

### [SLIDE 12 — Lights, Camera, AI!] *(0:12)*

**[Students open laptops / 学生打开电脑]**

---

### Phase 1A: Lyrics Workshop (7 min) *(0:12–0:19)*

**[Switch from slides to monitoring / 从幻灯片切换到巡视]**

EN: "You should see the Lesson 3 page with two tabs — Part 1: AI Musician and Part 2: AI Director. Start with Part 1. First, use the Lyrics Workshop to write lyrics with AI. Tell the AI what your song should be about — anything you want! A happy summer song, a funny rap about homework, an epic adventure anthem."

CN: "你应该看到第三课页面，有两个标签——第一部分：AI 音乐家和第二部分：AI 导演。从第一部分开始。首先，使用歌词工作室用 AI 写歌词。告诉 AI 你的歌应该是关于什么的——任何你想要的！一首快乐的夏日歌曲、一首关于作业的搞笑说唱、一首史诗冒险赞歌。"

EN: "Once you like your lyrics, click 'Copy Lyrics' to save them. Then scroll down to check out the music genres — pick one that fits your song."

CN: "一旦你喜欢你的歌词，点击'复制歌词'保存。然后往下滚动看看音乐类型——选一个适合你歌曲的。"

**[Give students 7 minutes / 给学生7分钟]**

> **Contingency / 应对方案:**
> EN: If a student can't think of a topic: "What's something you care about? Your favorite hobby? Something funny that happened this week? Your dream vacation? Any topic works!"
> CN: 如果学生想不出主题："你关心什么？你最喜欢的爱好？这周发生的搞笑的事？你梦想的假期？任何主题都行！"

---

### Phase 1B: Create on Suno (8 min) *(0:19–0:27)*

EN: "Okay, now the fun part! Click the big purple button to open Suno Music Studio. Follow the step-by-step guide on the page. Toggle Custom mode on, paste your lyrics, type a style like 'upbeat pop' or 'chill lo-fi', and hit Create!"

CN: "好了，现在是有趣的部分！点击大紫色按钮打开 Suno 音乐工作室。按照页面上的分步指南操作。打开自定义模式，粘贴你的歌词，输入一个风格比如'upbeat pop'或'chill lo-fi'，然后点创建！"

EN: "While your first song is generating, try a different style! Same lyrics, different genre. See how it changes the feel."

CN: "在你的第一首歌生成的时候，试试不同的风格！同样的歌词，不同的类型。看看感觉有什么变化。"

**[Give students 8 minutes / 给学生8分钟]**

> **Walk around and help / 走动并帮助:**
> EN: Help students with Suno if they get stuck. Common issues: forgetting to toggle Custom mode, or typing lyrics in the wrong field.
> CN: 如果学生遇到困难，帮助他们使用 Suno。常见问题：忘记打开自定义模式，或在错误的字段输入歌词。

---

### Phase 1C: Log Your Songs (3 min) *(0:27–0:30)*

EN: "Nice work! Now go back to the lesson page and scroll down to 'My Songs.' Add your songs there — give them a title, the style you used, and any notes. This will help you remember which ones you made when we pick music for the film later."

CN: "做得好！现在回到课程页面，往下滚到'我的歌曲'。在那里添加你的歌曲——给它们一个标题、你使用的风格和任何备注。这会帮你记住你做了哪些歌，以便我们稍后为电影选音乐。"

**[Give students 3 minutes / 给学生3分钟]**

---

## Part 2: AI Director / AI 导演 (22 minutes / 分钟)

### Phase 2A: Write the Script (7 min) *(0:30–0:37)*

EN: "Awesome! Now switch to the Part 2 tab — AI Director. This is where you become a film director! Step 1 is writing your script. Chat with the AI to brainstorm a story. Tell it your idea — a space adventure, a mystery at school, a funny day in the life of a pet — and the AI will help you organize it into 4 to 6 scenes."

CN: "太棒了！现在切换到第二部分标签——AI 导演。在这里你要成为电影导演！第一步是写剧本。和 AI 聊天来头脑风暴一个故事。告诉它你的想法——太空冒险、学校里的谜团、宠物有趣的一天——AI 会帮你把它组织成4到6个场景。"

EN: "Once the AI gives you scenes, click 'Use These Scenes' to load them into Step 2. If you don't like the story, keep chatting — tell the AI what to change!"

CN: "一旦 AI 给你场景，点击'使用这些场景'将它们加载到第二步。如果你不喜欢这个故事，继续聊——告诉 AI 要改什么！"

**[Give students 7 minutes / 给学生7分钟]**

> **Contingency / 应对方案:**
> EN: If a student is stuck on a story idea: "Think about your favorite movie or book. What if you could remix it? A superhero who's afraid of heights? A chef who cooks for dragons? Start with a 'what if' question!"
> CN: 如果学生在故事想法上卡住了："想想你最喜欢的电影或书。如果你能重新混合它呢？一个恐高的超级英雄？一个给龙做饭的厨师？从一个'如果'的问题开始！"

---

### Phase 2B: Generate Scene Images (10 min) *(0:37–0:47)*

EN: "Click 'Next' to go to Step 2 — Scenes. You'll see each scene from your story. For each one, you can write an image prompt or click 'Suggest Prompt' to let AI help. Then click 'Generate Image' to create the picture."

CN: "点击'下一步'进入第二步——场景。你会看到故事中的每个场景。对于每个场景，你可以写一个图片提示或点击'建议提示'让 AI 帮忙。然后点击'生成图片'来创建画面。"

EN: "Try to generate images for at least 4 scenes. Remember the tips from the slides — be specific, include mood, mention characters, think cinematic!"

CN: "尝试为至少4个场景生成图片。记住幻灯片上的提示——要具体，包含氛围，提到人物，想象电影画面！"

**[Give students 10 minutes / 给学生10分钟]**

> **Walk around and help / 走动并帮助:**
> EN: Image generation takes time. Encourage students to work on the next scene's prompt while waiting. "While that image loads, write the prompt for your next scene!"
> CN: 图片生成需要时间。鼓励学生在等待时写下一个场景的提示。"在那张图片加载的时候，写下一个场景的提示！"

> **Contingency / 应对方案:**
> EN: If images are slow: "While we wait, let's review your prompts. Can you make them more specific? What time of day? What's the lighting like? What colors do you see?"
> CN: 如果图片很慢："在等待的时候，让我们检查你的提示。你能让它们更具体吗？什么时间？光线怎样？你看到什么颜色？"

---

### Phase 2C: Soundtrack & Preview (5 min) *(0:47–0:52)*

EN: "Great progress! Now click Next to go to Step 3 — Soundtrack. You can use the music you already made in Part 1! Paste the Suno link, or just describe the music you want. Then click Next to preview your film!"

CN: "进展很好！现在点击下一步进入第三步——配乐。你可以使用你在第一部分已经做好的音乐！粘贴 Suno 链接，或者只是描述你想要的音乐。然后点击下一步预览你的电影！"

EN: "In the Preview, use the arrow buttons to step through your film, or check the Auto-play box to watch it play automatically. You can also download it as an HTML file to keep forever!"

CN: "在预览中，用箭头按钮逐步浏览你的电影，或勾选自动播放框来自动播放。你还可以把它下载为 HTML 文件永久保存！"

**[Give students 5 minutes / 给学生5分钟]**

---

## Share / Film Premiere / 电影首映 (6 minutes / 分钟) *(0:52–0:58)*

EN: "It's PREMIERE TIME! Who wants to show their film first? Bring your laptop up, or I'll show it on the screen. When you present, tell us: What's your film about? And play your favorite song from Part 1 too!"

CN: "首映时间到了！谁想先展示自己的电影？把电脑拿上来，或者我在屏幕上展示。当你展示时，告诉我们：你的电影是关于什么的？也播放你第一部分中最喜欢的歌曲！"

**[Wait for volunteer / 等待志愿者]**

**[Student 1 presents — play their film on auto-play / 学生1展示——自动播放他们的电影]**

EN: "Amazing! What did you like about making this? What was the hardest part?"

CN: "太棒了！你觉得制作过程中什么最有趣？最难的部分是什么？"

**[Student 2 presents / 学生2展示]**

EN: "Great work! Let's hear your song too. What style did you use?"

CN: "做得好！我们也来听听你的歌。你用了什么风格？"

**[If time allows, 1-2 more students present / 如果时间允许，再让1-2个学生展示]**

EN: "Give everyone a round of applause — you just made original music AND a mini film in one class!"

CN: "给大家一个掌声——你们刚刚在一节课里做了原创音乐和迷你电影！"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(0:58–1:00)*

EN: "Today you combined ALL the AI tools we've learned — text, images, and music — into two creative projects. You wrote lyrics, made songs, wrote film scripts, generated scene images, and put it all together into a mini film."

CN: "今天你们结合了我们学过的所有 AI 工具——文本、图片和音乐——做了两个创意项目。你们写了歌词、做了歌曲、写了电影剧本、生成了场景图片，把所有东西组合成了一部迷你电影。"

EN: "Remember — AI is just a tool. YOU are the musician, the director, the creator. You had the ideas, you made the choices, you told the story. AI just helped you bring it to life."

CN: "记住——AI 只是一个工具。你才是音乐家、导演、创造者。你有想法，你做选择，你讲故事。AI 只是帮你把它变成现实。"

EN: "Great work today. See you next time!"

CN: "今天做得很好。下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00–0:01 | Welcome | Slide 1 — Title & introduction |
| 0:01–0:04 | Guessing Game | Slide 2 — "Real or AI?" music clips |
| 0:04–0:06 | How AI Music Works | Slides 3–5 — Genre, describing music |
| 0:06–0:10 | What Makes a Movie? | Slides 6–8 — Film elements, tools review, storyboard |
| 0:10–0:12 | Workflow & Mission | Slides 9–12 — Workflow overview, mission, launch |
| 0:12–0:19 | Part 1A: Lyrics | Students write lyrics with AI ChatWidget |
| 0:19–0:27 | Part 1B: Suno | Students create songs on Suno |
| 0:27–0:30 | Part 1C: Log Songs | Students record their songs in My Songs |
| 0:30–0:37 | Part 2A: Script | Students write film script with AI (Step 1) |
| 0:37–0:47 | Part 2B: Images | Students generate scene images (Step 2) |
| 0:47–0:52 | Part 2C: Preview | Soundtrack (Step 3) + Preview film (Step 4) |
| 0:52–0:58 | Premiere | Students present films & songs |
| 0:58–1:00 | Wrap-up | Recap key ideas |
