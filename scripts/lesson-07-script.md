# Lesson 7: AI Chatbot Creator --- Design a Digital Friend! --- Teacher Script
# 第七课：AI 聊天机器人创造者 --- 设计一个数字朋友！ --- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive workspace (`index.html`), Student laptops
**Goal / 目标**: Students design custom chatbot personalities using system prompts, test them in a live chat, then build a standalone chatbot app interface using the CodePlayground.
**目标**: 学生使用系统提示设计自定义聊天机器人个性，在实时聊天中测试，然后使用 CodePlayground 构建一个独立的聊天机器人应用界面。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> This lesson has two distinct halves: Part 1 focuses on the *behavior* of a chatbot (personality design via system prompts), and Part 2 focuses on the *visual design* of a chatbot interface (using CodePlayground). Both halves are creative and hands-on.
>
> **Before class / 课前准备:**
> - Test the lesson page: open `/lesson-07/index.html` and verify the personality grid, knowledge checkboxes, speaking style dropdown, prompt generation, and ChatWidget all work
> - Verify `/api/chat` and `/api/code` endpoints are responding
> - Test generating a system prompt: pick a personality, knowledge areas, and style, then click "Generate System Prompt" --- confirm the prompt appears in the dark text area
> - Test "Test My Chatbot" --- a ChatWidget should appear and the AI should respond in character
> - Test the CodePlayground in Part 2: pick a template, confirm it pre-fills the prompt, and generate code
> - Prepare a fun example chatbot to demo: e.g., "Captain Quack" with Funny Comedian + Pirate Talk + Animals + Space
>
> **这节课有两个明确的部分：第1部分关注聊天机器人的行为（通过系统提示设计个性），第2部分关注聊天机器人界面的视觉设计（使用 CodePlayground）。两个部分都是创意性和动手实践的。**
>
> **课前准备：**
> - 测试课程页面：打开 `/lesson-07/index.html`，验证个性网格、知识复选框、说话风格下拉、提示生成和 ChatWidget 都正常工作
> - 验证 `/api/chat` 和 `/api/code` 接口正常响应
> - 测试生成系统提示：选一个个性、知识领域和风格，然后点击 "Generate System Prompt" --- 确认提示出现在深色文本区
> - 测试 "Test My Chatbot" --- 应出现一个 ChatWidget，AI 应以角色方式回应
> - 测试第2部分的 CodePlayground：选一个模板，确认它预填了提示，并生成代码
> - 准备一个有趣的示例聊天机器人来演示：例如 "Captain Quack"（鸭子船长），选择 Funny Comedian + Pirate Talk + Animals + Space

---

## Warm-up / 热身 (12 minutes / 分钟)

### [SLIDE 1 --- Title] *(0:00)*

EN: "Welcome to Lesson 7! Today you are going to create something really cool --- your very own AI chatbot with its own personality. Imagine designing a character that can actually talk back to you. That's exactly what we're building today."

CN: "欢迎来到第七课！今天你们要创造一些非常酷的东西——你们自己的 AI 聊天机器人，有自己的个性。想象一下设计一个真的能跟你对话的角色。这正是我们今天要做的。"

---

### [SLIDE 2 --- What makes a great chatbot?] *(0:01)*

EN: "Before we start building, let's think about what makes a chatbot great. Three things. First, PERSONALITY --- a great chatbot has a unique voice. It doesn't sound like a boring robot. Second, KNOWLEDGE --- it knows about specific topics and can actually help you. Third, HELPFULNESS --- it gives responses that are useful, interesting, or fun. Today you'll design a bot that has all three."

CN: "在我们开始之前，让我们想想什么让聊天机器人变得出色。三件事。第一，个性——一个好的聊天机器人有独特的声音。它听起来不像无聊的机器人。第二，知识——它了解特定的话题，能真正帮助你。第三，实用性——它给出有用的、有趣的或好玩的回应。今天你们要设计一个三者兼具的机器人。"

EN: "Quick question for you: Think of a chatbot or AI character you'd love to talk to. What would their personality be? Take 10 seconds to think..."

CN: "给你们一个快速问题：想想一个你想跟它聊天的聊天机器人或 AI 角色。它的个性会是什么？花10秒钟想想..."

**[Pause 10 seconds, then ask 1-2 students to share / 暂停10秒，然后让1-2个学生分享]**

---

### [SLIDE 3 --- System prompts explained] *(0:03)*

EN: "Here is the secret that makes this possible: the SYSTEM PROMPT. A system prompt is like secret instructions that you give to the AI. The user never sees them, but they control everything about how the AI behaves. Look at this example --- we tell the AI 'You are Captain Quack, a pirate duck. You speak like a pirate and love telling jokes about the ocean.' Now every time someone chats with this bot, it will talk like a pirate duck! The user has no idea these instructions exist --- they just see a fun character."

CN: "这里是让这一切成为可能的秘密：系统提示。系统提示就像你给 AI 的秘密指令。用户永远看不到它们，但它们控制 AI 行为的一切。看这个例子——我们告诉 AI '你是 Captain Quack，一只海盗鸭子。你说话像海盗，喜欢讲关于海洋的笑话。'现在每次有人跟这个机器人聊天，它都会像海盗鸭子一样说话！用户不知道这些指令的存在——他们只看到一个有趣的角色。"

---

### [SLIDE 4 --- Personality types showcase] *(0:05)*

EN: "For your chatbot, you'll pick from six personality types. Helpful Tutor --- patient and encouraging, explains things simply. Funny Comedian --- tells jokes, uses humor, keeps things light. Adventure Guide --- narrates everything like an epic quest. Wise Sage --- philosophical, gives life advice with calm wisdom. Sports Commentator --- energetic, uses sports metaphors for everything. And my favorite --- Custom Character --- where YOU write whatever personality you want! You could make a time-traveling chef, a grumpy cat professor, a superhero who is afraid of butterflies --- anything!"

CN: "对于你的聊天机器人，你要从六种个性类型中选择。乐于助人的导师——耐心且鼓励，用简单的方式解释。搞笑喜剧演员——讲笑话，使用幽默，保持轻松。冒险向导——像史诗般的任务一样叙述一切。智慧贤者——哲学性的，用平静的智慧给出人生建议。体育评论员——充满活力，用体育比喻来描述一切。还有我最喜欢的——自定义角色——你自己写任何你想要的个性！你可以做一个穿越时空的厨师、一个脾气暴躁的猫教授、一个害怕蝴蝶的超级英雄——任何东西！"

---

### [SLIDE 5 --- Same question, different personalities] *(0:07)*

EN: "Watch how powerful the system prompt is. Same question --- 'Why is the sky blue?' But look at the two different answers. The Helpful Tutor gives a clear, educational answer about light scattering. The Pirate Talk Comedian gives the SAME information but wrapped in pirate language and a joke! The CONTENT is similar, but the EXPERIENCE is totally different. That is the power of personality design."

CN: "看看系统提示有多强大。同样的问题——'为什么天空是蓝色的？'但看看两个不同的回答。乐于助人的导师给出了关于光散射的清晰教育性回答。海盗话喜剧演员给出了相同的信息，但用海盗语言和笑话包装起来！内容是类似的，但体验完全不同。这就是个性设计的力量。"

---

### [SLIDE 6 --- Part 1 mission] *(0:09)*

EN: "Alright, here is your Part 1 mission. You are going to open Lesson 7 and go through these six steps. Name your bot --- give it a creative name. Pick a personality type --- or write your own custom one. Choose knowledge areas --- what should your bot be an expert in? Select a speaking style --- formal? pirate talk? Gen-Z slang? Then click Generate System Prompt --- the page will build the secret instructions for you. And finally, Test it out --- click Test My Chatbot and actually talk to your creation."

CN: "好的，这是你的第1部分任务。你要打开第七课，按这六个步骤操作。给你的机器人起名——给它一个有创意的名字。选一个个性类型——或写你自己的自定义角色。选知识领域——你的机器人应该在什么方面是专家？选说话风格——正式的？海盗话？Gen-Z 俚语？然后点击生成系统提示——页面会为你构建秘密指令。最后，测试它——点击 Test My Chatbot，实际跟你的作品对话。"

EN: "Open your laptops and go to Lesson 7 now. You have 25 minutes for Part 1. Start with your bot's name!"

CN: "现在打开电脑，进入第七课。你有25分钟完成第1部分。从你的机器人名字开始！"

---

## Part 1: Design Your Chatbot / 设计你的聊天机器人 (25 minutes / 分钟)

### Active Design Phase *(0:12--0:37)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

**[Walk around continuously / 持续走动巡视:]**

EN: Check that every student has:
- Entered a bot name
- Selected a personality type (or started writing a custom one)
- Checked at least 2-3 knowledge areas
- Selected a speaking style

CN: 检查每个学生是否：
- 输入了机器人名字
- 选择了个性类型（或开始写自定义的）
- 勾选了至少2-3个知识领域
- 选择了说话风格

**At 5 minutes in (0:17), check-in / 5分钟时检查 (0:17):**

EN: "Has everyone generated their system prompt? If not, click the purple 'Generate System Prompt' button now. You should see green text appear in the dark box --- that is your bot's secret instructions!"

CN: "大家都生成系统提示了吗？如果没有，现在点击紫色的'Generate System Prompt'按钮。你应该看到绿色文字出现在深色框中——那是你的机器人的秘密指令！"

**At 10 minutes in (0:22), encourage testing / 10分钟时鼓励测试 (0:22):**

EN: "If you have your system prompt, click 'Test My Chatbot' and start chatting! Try asking your bot different types of questions. Does it stay in character? Is it fun to talk to? If you want to change something, you can edit the green text directly and click 'Test My Chatbot' again."

CN: "如果你有了系统提示，点击'Test My Chatbot'开始聊天！试着问你的机器人不同类型的问题。它保持角色了吗？跟它聊天有趣吗？如果你想改什么，可以直接编辑绿色文字，然后再次点击'Test My Chatbot'。"

**At 20 minutes in (0:32), give 5-minute warning / 20分钟时给5分钟警告 (0:32):**

EN: "Five more minutes for Part 1! Make sure you have tested your chatbot at least once. If you're happy with your bot's personality, great! In Part 2, we'll design what your chatbot LOOKS like."

CN: "第1部分还剩5分钟！确保你至少测试了一次聊天机器人。如果你对机器人的个性满意，太好了！在第2部分，我们要设计你的聊天机器人的外观。"

> **Contingency / 应对方案:**
> EN: If a student's bot is not staying in character: "Try making your system prompt more specific. Instead of just saying 'be funny', describe exactly HOW the bot should be funny. Does it tell puns? Does it make everything into a joke? The more detail you give, the better the AI follows the instructions."
> CN: 如果学生的机器人没有保持角色："试着让你的系统提示更具体。不要只说'要有趣'，精确描述机器人应该怎样有趣。它讲双关语吗？它把所有事情都变成笑话吗？你给的细节越多，AI 就越好地遵循指令。"

> **Contingency / 应对方案:**
> EN: If the chat API is slow: "While the AI is thinking, try editing your system prompt. Can you make it more detailed? Add another line about how your bot should handle questions it doesn't know the answer to."
> CN: 如果聊天 API 很慢："AI 在思考的时候，试着编辑你的系统提示。你能让它更详细吗？加一行关于你的机器人应该如何处理它不知道答案的问题。"

> **Contingency / 应对方案:**
> EN: If a student finishes very quickly: "Challenge mode! Can you make your bot handle edge cases? Try asking it something completely off-topic and see if it stays in character. Or try asking it something mean --- a great chatbot should handle that gracefully."
> CN: 如果学生很快完成了："挑战模式！你能让你的机器人处理边界情况吗？试着问它一些完全不相关的东西，看看它是否保持角色。或者试着对它说一些不好的话——一个好的聊天机器人应该优雅地处理这种情况。"

---

## Part 2: Build a Chatbot App / 构建聊天机器人应用 (15 minutes / 分钟)

### [SLIDE 7 --- What makes a great chat interface?] *(0:37)*

EN: "Great work on your chatbot personalities! Now here's the twist for Part 2: you're going to design what your chatbot APP looks like. Not just the personality --- the actual visual interface. Look at this mockup --- a good chat interface has a header, chat bubbles, and an input bar. The design can make your bot feel professional, fun, scary, cute --- whatever you want."

CN: "你们的聊天机器人个性做得很好！现在第2部分有个转折：你们要设计你们的聊天机器人应用的外观。不只是个性——实际的视觉界面。看看这个模型——一个好的聊天界面有头部、聊天气泡和输入栏。设计可以让你的机器人感觉专业、有趣、可怕、可爱——任何你想要的。"

---

### [SLIDE 8 --- Chat UI patterns] *(0:38)*

EN: "Here are the building blocks of a chat interface: bubbles for messages, colors to set the mood, avatars to give your bot a face, and timestamps for when messages were sent. And here are four design templates you can start with: Messenger style --- clean and modern, like iMessage. Terminal style --- green text on black, like a hacker movie. Kawaii style --- cute pastels, rounded shapes, lots of emoji. Professional style --- clean and business-like. You'll pick one of these as a starting point, and then customize it."

CN: "这里是聊天界面的构建模块：消息气泡、设定氛围的颜色、给你的机器人一个面孔的头像、以及消息发送时间的时间戳。这里有四个设计模板可以开始：Messenger 风格——干净现代，像 iMessage。终端风格——黑色背景上的绿色文字，像黑客电影。Kawaii 风格——可爱的粉彩色、圆角、很多表情符号。专业风格——干净的商务风格。你选一个作为起点，然后自定义它。"

---

### [SLIDE 9 --- Part 2 mission] *(0:39)*

EN: "Here is your Part 2 mission. Scroll down on the Lesson 7 page to Part 2. Step 1: Pick a design template --- click one of the four cards. It will automatically fill in a description for the CodePlayground. Step 2: Click Generate to create your chatbot interface. Step 3: Use the 'Upgrade Your Bot' tips at the bottom to make it even better! Add avatars, typing animations, quick-reply buttons --- whatever you like. You have 15 minutes. Go!"

CN: "这是你的第2部分任务。在第七课页面上向下滚动到第2部分。第1步：选一个设计模板——点击四张卡片中的一张。它会自动为 CodePlayground 填入描述。第2步：点击生成来创建你的聊天机器人界面。第3步：使用底部的'升级你的机器人'提示让它变得更好！添加头像、打字动画、快速回复按钮——任何你喜欢的。你有15分钟。开始！"

---

### Active Building Phase *(0:40--0:52)*

**[Walk around continuously / 持续走动巡视:]**

EN: Check that every student has:
- Selected a design template
- Generated at least one version of their chatbot interface
- Tried at least one upgrade tip

CN: 检查每个学生是否：
- 选择了设计模板
- 生成了至少一个版本的聊天机器人界面
- 尝试了至少一个升级提示

**At 8 minutes in (0:48), give a heads-up / 8分钟时提醒 (0:48):**

EN: "About 5 minutes left! If you haven't tried an upgrade yet, click one of the tip items in the 'Upgrade Your Bot' section --- it will fill in a suggestion for you. Then click Update."

CN: "大约还剩5分钟！如果你还没有尝试升级，点击'升级你的机器人'部分中的一个提示项——它会为你填入一个建议。然后点击更新。"

> **Contingency / 应对方案:**
> EN: If CodePlayground is slow to generate: "While the code generates, think about what upgrades you want to add next. You can also go back to Part 1 and test your chatbot some more while you wait."
> CN: 如果 CodePlayground 生成很慢："代码生成的时候，想想你接下来想添加什么升级。你也可以回到第1部分，在等待的时候继续测试你的聊天机器人。"

> **Contingency / 应对方案:**
> EN: If generated code does not look right: "No problem! Try being more specific in the modification box. Instead of 'make it look better', say exactly what you want: 'Make the chat bubbles more rounded, change the background to dark blue, and make the bot messages green'."
> CN: 如果生成的代码看起来不对："没问题！试着在修改框中更具体。不要说'让它看起来更好'，而是准确地说你想要什么：'让聊天气泡更圆，把背景改成深蓝色，让机器人的消息变成绿色'。"

---

## Share & Export / 分享与导出 (8 minutes / 分钟)

### [SLIDE 10 --- Conversation design tips] *(0:52)*

**[Brief pause before sharing / 分享前短暂暂停]**

EN: "Before you share, here are some quick conversation design tips. A welcome message greets the user right away --- your bot should say hi first. Suggested questions help users know what to ask. And always stay in character! If your bot is a pirate, even error messages should sound pirate-y."

CN: "在分享之前，这里有一些快速的对话设计提示。欢迎消息立即向用户打招呼——你的机器人应该先说嗨。建议的问题帮助用户知道该问什么。而且始终保持角色！如果你的机器人是海盗，即使错误消息也应该听起来像海盗。"

---

### Sharing Time *(0:53--0:58)*

EN: "Time to share! First, export your chatbot app by clicking the download button in the Share section at the bottom. This gives you an HTML file you can open on any computer."

CN: "分享时间！首先，通过点击底部分享部分的下载按钮导出你的聊天机器人应用。这会给你一个可以在任何电脑上打开的 HTML 文件。"

EN: "Now, let's see each other's creations! Who wants to show their chatbot first? Tell us your bot's name and personality, then show us the interface you designed."

CN: "现在，让我们看看彼此的作品！谁想先展示他们的聊天机器人？告诉我们你的机器人的名字和个性，然后展示你设计的界面。"

**[Each student gets approximately 2-3 minutes / 每个学生大约 2-3 分钟]**

**For each presenter / 对每个展示者：**

1. Ask: "What is your bot's name and personality?" / "你的机器人叫什么名字，有什么个性？"
2. Have them show the chat (Part 1) --- ask the bot a question live
3. Have them show the interface (Part 2) --- what design template did they pick?
4. Quick audience question: "Would you want to chat with this bot? What would you ask it?"
5. Applause! / 鼓掌！

> **Contingency / 应对方案:**
> EN: If time is very short: Have students swap laptops and test each other's chatbots for 2 minutes, then share one reaction each: "What was the coolest thing about your partner's chatbot?"
> CN: 如果时间非常紧张：让学生交换电脑，花2分钟测试对方的聊天机器人，然后各分享一个反应："你搭档的聊天机器人最酷的地方是什么？"

---

### [SLIDE 11 --- Your full mission] *(0:58)*

**[Quick recap / 快速回顾]**

EN: "Amazing work today! Let's recap what you accomplished. You learned about SYSTEM PROMPTS --- the secret instructions that control AI behavior. You DESIGNED a chatbot personality from scratch. You TESTED it in a real conversation. And you BUILT a visual chatbot interface. That's serious AI creator skills!"

CN: "今天的工作太棒了！让我们回顾一下你们完成了什么。你们学习了系统提示——控制 AI 行为的秘密指令。你们从头设计了一个聊天机器人个性。你们在真实对话中测试了它。你们还构建了一个视觉聊天机器人界面。这是严肃的 AI 创造者技能！"

---

### [SLIDE 12 --- Let's build!] *(0:59)*

EN: "Next time, we'll take these skills even further. For now, if you have your exported HTML file, you can open it at home and show your family your chatbot app. And remember --- the system prompt is the most powerful tool in AI. Whoever writes the system prompt controls the AI's personality. Now YOU know how to write one. See you next lesson!"

CN: "下次，我们会把这些技能提升得更远。现在，如果你有导出的 HTML 文件，你可以在家打开它，给你的家人展示你的聊天机器人应用。记住——系统提示是 AI 中最强大的工具。谁写系统提示，谁就控制 AI 的个性。现在你知道怎么写了。下节课见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:01 | Welcome | Slide 1 --- Title & introduction |
| 0:01--0:03 | What's a chatbot | Slide 2 --- Personality, Knowledge, Helpfulness |
| 0:03--0:05 | System prompts | Slide 3 --- The secret instructions |
| 0:05--0:07 | Personality types | Slide 4 --- Six personality options |
| 0:07--0:09 | Demo | Slide 5 --- Same question, different answers |
| 0:09--0:12 | Part 1 launch | Slide 6 --- Mission + students open laptops |
| 0:12--0:37 | Part 1: Design | Students design chatbot personality & test |
| 0:37--0:38 | UI intro | Slide 7 --- What makes a great chat interface |
| 0:38--0:39 | UI patterns | Slide 8 --- Building blocks + templates |
| 0:39--0:40 | Part 2 launch | Slide 9 --- Mission for building the interface |
| 0:40--0:52 | Part 2: Build | Students build chatbot app interface |
| 0:52--0:53 | Design tips | Slide 10 --- Conversation design tips |
| 0:53--0:58 | Share | Students export, swap, and show chatbots |
| 0:58--0:59 | Recap | Slide 11 --- Full mission recap |
| 0:59--1:00 | Wrap-up | Slide 12 --- Homework and preview of next lesson |

---

## Contingency Plans / 应急方案

### If Part 1 takes longer than expected / 如果第1部分时间超出预期
- Reduce Part 2 to 10 minutes --- have students just pick a template and generate once (skip upgrades)
- Cut sharing to 3 minutes total --- quick show-and-tell with laptops
- The core learning (system prompts) happens in Part 1, so prioritize it

### If students struggle with the system prompt / 如果学生在系统提示上遇到困难
- Walk them through the UI step by step: "First pick a name, then click a personality card..."
- The "Generate System Prompt" button does the hard work --- students just need to make selections
- If the generated prompt is not working well, help them edit it: "Try adding 'Always respond in 1-2 short sentences' to keep answers concise"

### If the Code API is down / 如果代码 API 宕机
- Part 2 becomes a design exercise on paper: students sketch their ideal chatbot interface
- They can describe their design in the Text AI chat and get feedback
- Focus more time on Part 1 (chatbot personality testing) since it only needs the Chat API

### If the Chat API is down / 如果聊天 API 宕机
- Students can still design their system prompts (Part 1 steps 1-5)
- Part 2 (CodePlayground) may still work if the Code API is separate
- Have students read their system prompts aloud and classmates role-play as the chatbot
- This can actually be a fun activity: "You be the AI --- try to respond in character!"

### If a student wants to make inappropriate content / 如果学生想制作不当内容
- The system prompt includes a safety line: "Never say anything inappropriate"
- Remind students: "Your chatbot should be something you'd be proud to show your parents"
- If needed, review their system prompt before they test it

### If students finish early / 如果学生提前完成
- Challenge them to create a SECOND chatbot with a completely different personality
- Have them try to "break" their own bot: ask tricky questions and see if it stays in character
- Encourage them to try all 6 speaking styles with the same personality to see the difference
