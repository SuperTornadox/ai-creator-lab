# Lesson 5: AI Musician — Teacher Script
# 第五课：AI 音乐家 — 教师逐字稿

**Duration / 时长**: 43–45 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops, 3 pre-prepared music clips (mix of real and AI-generated), Suno account (tested beforehand)
**Goal / 目标**: Students explore AI music creation by writing lyrics with AI assistance and generating songs on Suno, comparing how different styles change the feel of the same song.
**目标**: 学生通过 AI 辅助写歌词和在 Suno 上生成歌曲来探索 AI 音乐创作，比较不同风格如何改变同一首歌的感觉。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> Before class, prepare 3 short music clips for the guessing game (Slide 2):
> - Mix of real musician recordings and AI-generated songs
> - Keep each clip 15–30 seconds long
> - Pick clips where the AI ones sound surprisingly good
>
> **Where to find AI-generated music samples / 在哪里找 AI 生成的音乐样本:**
> - Generate 1–2 songs on Suno yourself beforehand — use simple prompts like "upbeat pop song about sunshine" or "chill lo-fi instrumental"
> - Save or bookmark the Suno links for playback in class
> - For real music clips, use any well-known song snippets the students might recognize
>
> **Suno setup / Suno 设置:**
> - Create a free Suno account at https://suno.com and test it
> - Verify that the "Custom" mode works (paste lyrics + set style)
> - Generate at least one test song to confirm everything works smoothly
> - Note: Free tier allows a limited number of generations per day — plan accordingly
>
> 课前准备3段短音乐片段用于猜测游戏（幻灯片2）：
> - 混合真实音乐家录音和 AI 生成的歌曲
> - 每段保持 15-30 秒
> - 选择 AI 生成听起来很惊人的片段
>
> **在哪里找 AI 音乐样本：**
> - 提前在 Suno 上自己生成 1-2 首歌——用简单的提示词如"关于阳光的欢快流行歌"或"舒缓的 lo-fi 纯音乐"
> - 保存或收藏 Suno 链接以便课堂播放
> - 真实音乐片段可以用学生可能认识的知名歌曲片段
>
> **Suno 设置：**
> - 在 https://suno.com 创建免费账户并测试
> - 确认"Custom"模式正常工作（粘贴歌词 + 设置风格）
> - 至少生成一首测试歌曲确认一切顺利
> - 注意：免费版每天生成次数有限——相应安排

---

## Warm-up / 概念热身 (8 minutes / 分钟)

### [SLIDE 1 — Title] *(0:00)*

EN: "Welcome back to AI Creator Lab! So far, we've used AI to write stories, create images, and make picture books. Today we're adding something brand new — today we're going to make AI create MUSIC. Real songs, with real instruments and even vocals."

CN: "欢迎回到 AI 创造者实验室！到目前为止，我们已经用 AI 写了故事、创造了图片、做了绘本。今天我们要加入一个全新的东西——今天我们要让 AI 创造音乐。真正的歌曲，有真正的乐器，甚至还有人声。"

---

### [SLIDE 2 — Guessing Game] *(0:01)*

**[Play 3 music clips, one at a time / 逐个播放3段音乐片段]**

EN: "But first, let's play a game. I'm going to play you three short music clips. Some were made by real musicians, and some were made entirely by AI. Your job: figure out which is which. Ready?"

CN: "但首先，我们来玩个游戏。我要给你们播放三段短音乐片段。有些是真实音乐家做的，有些完全是 AI 做的。你们的任务：分辨哪些是哪些。准备好了吗？"

**[Play Song 1 — 15–30 seconds / 播放歌曲1 — 15-30秒]**

EN: "Okay, Song 1. What do you think — real musician or AI? Put your answer in your head."

CN: "好，歌曲1。你怎么想——真实音乐家还是 AI？先在心里想好答案。"

**[Play Song 2 — 15–30 seconds / 播放歌曲2 — 15-30秒]**

EN: "Song 2. Real or AI?"

CN: "歌曲2。真实的还是 AI？"

**[Play Song 3 — 15–30 seconds / 播放歌曲3 — 15-30秒]**

EN: "And Song 3. Last one. Real or AI?"

CN: "歌曲3。最后一个。真实的还是 AI？"

EN: "Okay, let's vote! Raise your hand if you think Song 1 is AI..."

CN: "好，我们来投票！如果你觉得歌曲1是 AI 的，举手……"

**[Go through each song, count hands / 逐一询问每首歌，数举手人数]**

---

### [SLIDE 3 — Reveal] *(0:04)*

EN: "The answers are... [reveal which songs were AI]. Surprised? AI music is getting REALLY good. It can create full songs — with vocals, multiple instruments, harmonies, everything. A few years ago this was impossible!"

CN: "答案是……[揭示哪些歌是 AI 的]。惊讶吗？AI 音乐变得非常好了。它可以创建完整的歌曲——有人声、多种乐器、和声，一切。几年前这是不可能的！"

EN: "What surprised you the most? Could you hear any differences?"

CN: "什么最让你惊讶？你能听出什么区别吗？"

**[Wait for student responses / 等待学生回答]**

---

### [SLIDE 4 — How It Works] *(0:05)*

EN: "So how does AI music work? Same idea as everything else we've done — you DESCRIBE what you want, and AI CREATES it. For stories, you described a plot. For images, you described a scene. For music, you describe a genre, a mood, and lyrics."

CN: "那 AI 音乐是怎么工作的？和我们之前做的所有事情一样的原理——你描述你想要的，AI 创造出来。对于故事，你描述了情节。对于图片，你描述了场景。对于音乐，你描述风格、氛围和歌词。"

EN: "Genre plus mood plus lyrics equals your song!"

CN: "风格加氛围加歌词等于你的歌！"

---

### [SLIDE 5 — Style Showcase] *(0:06)*

EN: "Just like with images, the style you choose completely changes the result. Same lyrics about, say, friendship — as Pop it sounds catchy and upbeat. As Rock it sounds powerful and bold. As Lo-fi it sounds chill and cozy. As Electronic it sounds danceable and modern."

CN: "就像图片一样，你选择的风格完全改变结果。同样关于友谊的歌词——作为流行乐听起来朗朗上口很欢快。作为摇滚听起来有力量很大胆。作为 Lo-fi 听起来轻松舒适。作为电子乐听起来适合跳舞很现代。"

EN: "Today you're going to try different styles and hear the difference yourself."

CN: "今天你们要尝试不同的风格，自己听听区别。"

---

### [SLIDE 6 — Today's Tools] *(0:07)*

EN: "Today we have two tools working together. On our lesson page, you have a lyrics helper — it's an AI chat that helps you write song lyrics. You also have a style explorer to pick your genre. Then you'll go to Suno — that's the website that actually turns your lyrics and style into a real song."

CN: "今天我们有两个工具配合使用。在我们的课程页面上，你有一个歌词助手——一个帮你写歌词的 AI 聊天。你还有一个风格探索器来选择你的音乐风格。然后你会去 Suno——那是真正把你的歌词和风格变成真实歌曲的网站。"

EN: "Think of our page as your planning studio, and Suno as the recording studio."

CN: "把我们的页面想象成你的规划工作室，Suno 是录音棚。"

---

### [SLIDE 7 — Today's Mission] *(0:07)*

EN: "Your mission: create your own original song! First, write lyrics with the AI helper. Then choose a style. Then open Suno and actually generate your song. Try at least two different styles so you can compare. And at the end, pick your favorite as your 'hit single.'"

CN: "你的任务：创造你自己的原创歌曲！首先，用 AI 助手写歌词。然后选择一个风格。然后打开 Suno 真正生成你的歌曲。至少尝试两种不同的风格这样你可以比较。最后，选出你最喜欢的作为你的'热门单曲'。"

---

### [SLIDE 8 — Let's Go!] *(0:08)*

EN: "Alright — open your laptops and go to the Lesson 5 page!"

CN: "好了——打开电脑，进入第五课的页面！"

---

## Hands-on Project / 动手项目 (30 minutes / 分钟)

### Phase 1: Lyrics Writing with AI Helper (10 min) *(0:08–0:18)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "You should see the AI Musician page. Start at the top — the Lyrics Workshop. Think about what you want your song to be about. It could be anything — summer vacation, your best friend, pizza, video games, adventure, whatever you feel like!"

CN: "你应该看到 AI 音乐家页面。从顶部开始——歌词工坊。想想你想让你的歌关于什么。可以是任何东西——暑假、你最好的朋友、披萨、电子游戏、冒险，任何你想到的！"

EN: "Type your idea into the chat — like 'write a happy song about summer vacation' — and the AI will help you draft lyrics. Try it!"

CN: "在聊天中输入你的想法——比如'写一首关于暑假的开心歌曲'——AI 会帮你起草歌词。试试看！"

**[Give students 2-3 minutes to generate first lyrics / 给学生 2-3 分钟生成第一版歌词]**

EN: "Once you have lyrics you like, click the 'Copy Lyrics' button. That will put them in the 'Your Final Lyrics' box below. You can edit them there — change words, add lines, make them yours!"

CN: "一旦你有了喜欢的歌词，点击'Copy Lyrics'按钮。歌词会放到下面的'Your Final Lyrics'框里。你可以在那里编辑——改词、加行、让它们变成你自己的！"

**[Give students 5–7 more minutes to refine lyrics / 再给学生 5-7 分钟润色歌词]**

> **Contingency / 应对方案:**
> EN: If a student doesn't know what to write about: "Here are some themes: friendship, adventure, pizza, summer, your pet, dreaming big, a silly day at school, or outer space! Pick anything that sounds fun."
> CN: 如果学生不知道写什么："这里有一些主题：友谊、冒险、披萨、夏天、你的宠物、大梦想、学校里搞笑的一天、或者外太空！选任何听起来有趣的。"

> **Contingency / 应对方案:**
> EN: If the AI gives lyrics the student doesn't like: "That's okay! Tell the AI what to change — say 'make it funnier' or 'change the topic to cats' or 'make it shorter.' The AI will adjust."
> CN: 如果 AI 给的歌词学生不喜欢："没关系！告诉 AI 要改什么——说'让它更搞笑'或'改成关于猫的'或'让它更短'。AI 会调整的。"

---

### Phase 2: Explore Styles & Pick One (3 min) *(0:18–0:21)*

EN: "Great, now scroll down to the 'Explore Music Styles' section. You'll see eight genre cards — Pop, Hip-Hop, Rock, Classical, Jazz, Electronic, Country, and Lo-fi. Click on the one that you think would go best with your lyrics."

CN: "很好，现在向下滚动到'Explore Music Styles'部分。你会看到八张音乐风格卡片——流行、嘻哈、摇滚、古典、爵士、电子、乡村和 Lo-fi。点击你觉得最适合你歌词的那个。"

EN: "Think about it — is your song upbeat? Maybe Pop or Electronic. Is it chill? Maybe Lo-fi or Jazz. Is it about adventure? Maybe Rock!"

CN: "想一想——你的歌曲是欢快的吗？也许流行或电子。是放松的吗？也许 Lo-fi 或爵士。是关于冒险的吗？也许摇滚！"

**[Give students 2–3 minutes / 给学生 2-3 分钟]**

---

### Phase 3: Open Suno & Create First Song (10 min) *(0:21–0:31)*

EN: "Now the exciting part! Scroll down to the 'Create Your Music on Suno' section. Click the big purple button that says 'Open Suno Music Studio.' This will open Suno in a new tab."

CN: "现在是激动人心的部分！向下滚动到'Create Your Music on Suno'部分。点击那个大紫色按钮'Open Suno Music Studio'。这会在新标签页中打开 Suno。"

**[Teacher demonstrates on screen / 老师在屏幕上演示]**

EN: "Let me show you how to use it. First, click 'Create' on the Suno page. Then toggle on 'Custom' mode — that lets you paste your own lyrics. Copy your lyrics from our page and paste them in. Then type your style — use the genre you picked, maybe add a mood word like 'upbeat pop' or 'chill lo-fi.' Then click 'Create' and wait about 30 seconds."

CN: "让我演示怎么用。首先，在 Suno 页面点击'Create'。然后打开'Custom'模式——这样你可以粘贴自己的歌词。从我们的页面复制歌词粘贴进去。然后输入你的风格——用你选的音乐类型，也许加个情绪词比如'upbeat pop'或'chill lo-fi'。然后点击'Create'等大约30秒。"

**[Do a live demo if possible / 如果可以的话做一个现场演示]**

EN: "Now you try! Follow the steps on the page — they're listed right there for you."

CN: "现在你来试！按照页面上的步骤做——步骤就列在那里。"

**[Give students 8–10 minutes / 给学生 8-10 分钟]**

> **Walk around and help / 走动并帮助:**
> EN: Help students with the Suno interface — the "Custom" toggle, pasting lyrics, and entering style keywords.
> CN: 帮助学生使用 Suno 界面——"Custom"开关、粘贴歌词和输入风格关键词。

> **Contingency / 应对方案:**
> EN: If Suno is slow or down: "While we wait, let's focus on perfecting your lyrics! Go back to the lyrics helper and try asking for a second version. We can also try different styles when Suno is ready."
> CN: 如果 Suno 很慢或宕机："在等待的时候，让我们专注于完善歌词！回到歌词助手，试着要求第二个版本。等 Suno 准备好了我们可以试不同的风格。"

> **Contingency / 应对方案:**
> EN: If the Suno output sounds bad: "Don't worry — try different style keywords, or simplify your lyrics. Sometimes shorter lyrics work better. Also try adding words like 'catchy' or 'melodic' to your style."
> CN: 如果 Suno 输出效果不好："别担心——试试不同的风格关键词，或者简化歌词。有时候短一点的歌词效果更好。也可以试着在风格里加上'catchy'或'melodic'这样的词。"

---

### Phase 4: Try a Second Style (5 min) *(0:31–0:36)*

EN: "Now here's the fun part — take the SAME lyrics and create a second song with a completely different style! If you did pop, try lo-fi. If you did rock, try electronic. See how the same words sound totally different in a new genre."

CN: "现在是有趣的部分——用同样的歌词创建第二首歌，但用完全不同的风格！如果你做了流行，试试 lo-fi。如果你做了摇滚，试试电子。看看同样的词在新的音乐类型里听起来完全不同。"

EN: "Remember the tips on our page — you can combine styles too! Try 'jazz pop' or 'electronic rock' or 'acoustic country.'"

CN: "记住我们页面上的提示——你也可以组合风格！试试'jazz pop'或'electronic rock'或'acoustic country'。"

**[Give students 5 minutes / 给学生 5 分钟]**

---

### Phase 5: Record Songs & Pick Hit Single (2 min) *(0:36–0:38)*

EN: "Alright, go back to our lesson page and scroll down to 'My Songs' at the bottom. For each song you created on Suno, add an entry — put in the title, the style you used, and any notes about how it turned out. Then mark your absolute favorite as your 'Hit Single' by checking the star!"

CN: "好，回到我们的课程页面，向下滚动到底部的'My Songs'。对于你在 Suno 上创建的每首歌，添加一个条目——写上标题、你用的风格，以及关于效果的任何笔记。然后勾选星星把你最喜欢的标记为'Hit Single'！"

**[Give students 2 minutes / 给学生 2 分钟]**

---

## Show & Share / 展示分享 (5 minutes / 分钟) *(0:38–0:43)*

EN: "Alright, time to share your music! Who wants to play their hit single for us?"

CN: "好了，是时候分享你的音乐了！谁想给我们放他们的热门单曲？"

**[Wait for a volunteer / 等待志愿者]**

EN: "Tell us: what's the song about, and what style did you use? Then play it from Suno!"

CN: "告诉我们：歌曲关于什么，你用了什么风格？然后从 Suno 放给我们听！"

**[Student 1 plays their song from Suno / 学生1从 Suno 播放他们的歌]**

EN: "Nice! And how about you?"

CN: "不错！你呢？"

**[Student 2 plays their song / 学生2播放他们的歌]**

EN: "Awesome! Now a question for both of you: you tried two different styles with the same lyrics. How did changing the style change the feel of the song?"

CN: "太棒了！现在问你们俩一个问题：你们用同样的歌词尝试了两种不同的风格。改变风格是怎么改变歌曲感觉的？"

**[Wait for responses / 等待回答]**

EN: "Exactly — the same words can feel completely different depending on the music. That's the power of genre and mood in music creation."

CN: "没错——同样的词可以根据音乐感觉完全不同。这就是音乐创作中风格和氛围的力量。"

> **Contingency / 应对方案:**
> EN: If Suno playback doesn't work in class: "No problem — describe your song to us instead! What was it about, what style did you pick, and how did it sound?"
> CN: 如果 Suno 播放在课堂上不行："没问题——改为描述你的歌曲！它关于什么，你选了什么风格，听起来怎么样？"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(0:43–0:45)*

EN: "Today you learned that AI can create music from descriptions — just like it creates text and images. The key ingredients are lyrics, genre, and mood. And just like with images, different styles give you completely different results from the same input."

CN: "今天你学到了 AI 可以从描述中创造音乐——就像它创造文字和图片一样。关键要素是歌词、音乐类型和氛围。就像图片一样，不同的风格从相同的输入给你完全不同的结果。"

EN: "Remember — AI is a tool that helps you create. YOU are the songwriter. You chose the topic, you wrote the ideas, you picked the style. AI just helped bring it to life."

CN: "记住——AI 是帮助你创作的工具。你才是词曲作者。你选了主题，你写了想法，你选了风格。AI 只是帮你把它变成现实。"

EN: "Next week, we're going to make AI create videos! See you then!"

CN: "下周我们要让 AI 创造视频！下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00–0:01 | Welcome | Slide 1 — Title & introduction |
| 0:01–0:04 | Guessing Game | Slide 2 — Play 3 clips, students guess |
| 0:04–0:05 | Reveal | Slide 3 — Answers & discussion |
| 0:05–0:06 | Concept | Slide 4 — How AI music works |
| 0:06–0:07 | Styles | Slide 5 — Genre showcase |
| 0:07–0:08 | Tools | Slides 6–7 — Today's tools & mission |
| 0:08 | Launch | Slide 8 — Students open laptops |
| 0:08–0:18 | Lyrics | Students write lyrics with AI helper |
| 0:18–0:21 | Styles | Students explore genres, pick one |
| 0:21–0:31 | Create | Students open Suno, create first song |
| 0:31–0:36 | Experiment | Students try second style |
| 0:36–0:38 | Record | Students add songs to collection, pick hit |
| 0:38–0:43 | Share | Students play songs & discuss |
| 0:43–0:45 | Wrap-up | Recap key ideas, preview next lesson |
