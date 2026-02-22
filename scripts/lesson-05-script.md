# Lesson 5: AI Ethics -- Truth, Bias, and You -- Teacher Script
# 第五课：AI 伦理 -- 真相、偏见与你 -- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students learn to identify AI-generated content, discover AI bias through hands-on experiments, and create their own responsible AI use guidelines.
**目标**: 学生学会识别 AI 生成的内容，通过动手实验发现 AI 偏见，并制定自己的负责任 AI 使用准则。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> This lesson covers sensitive topics including bias, stereotypes, and fairness. Review the content beforehand and be prepared to facilitate respectful discussion.
>
> **Sensitivity notes / 敏感性说明:**
> - The bias experiments may surface gender, racial, or cultural stereotypes. Frame these as problems with the technology and data, not with any group of people.
> - Some students may have personal experiences with bias or stereotyping. Be ready to acknowledge those experiences respectfully.
> - Emphasize that bias in AI comes from biased data, not from AI being "evil." The goal is awareness, not blame.
> - If a student's bias experiment result is uncomfortable, validate their observation and redirect to "how can we fix this?" rather than dwelling on the negative.
>
> 这节课涉及偏见、刻板印象和公平等敏感话题。请提前查看内容，准备好引导尊重性讨论。
>
> **敏感性说明：**
> - 偏见实验可能呈现性别、种族或文化刻板印象。将这些框定为技术和数据的问题，而不是任何群体的问题。
> - 一些学生可能有与偏见或刻板印象相关的个人经历。准备好尊重地承认这些经历。
> - 强调 AI 中的偏见来自有偏见的数据，不是因为 AI 是"邪恶的"。目标是提高意识，而不是指责。
> - 如果学生的偏见实验结果令人不适，肯定他们的观察并引导到"我们如何解决这个问题？"而不是停留在负面内容上。
>
> **Technical prep / 技术准备:**
> - Test the lesson page (`index.html`) to ensure the quiz loads and the chat widget works.
> - Verify `/api/chat` is running -- the bias experiments require the ChatWidget.
> - The guideline export feature downloads a `.txt` file -- test it on your machine.
>
> 测试课程页面确保测验加载正常、聊天控件工作。验证 `/api/chat` 正在运行。

---

## Warm-up / 热身引入 (15 minutes / 分钟)

### [SLIDE 1 -- Title] *(0:00)*

EN: "Welcome to a very different kind of lesson today. So far in AI Creator Lab, we've been using AI to create cool things -- stories, images, music, videos. But today we need to talk about something just as important: the problems with AI. Because AI is powerful, and with power comes responsibility."

CN: "欢迎来到今天这堂很不一样的课。到目前为止，在 AI 创造者实验室中，我们一直在用 AI 创造很酷的东西——故事、图片、音乐、视频。但今天我们需要谈谈同样重要的事情：AI 的问题。因为 AI 是强大的，而力量伴随着责任。"

EN: "Today's lesson is called 'AI Ethics -- Truth, Bias, and You.' We're going to learn how AI can trick people, how AI can be unfair, and what YOU can do about it."

CN: "今天的课叫做'AI 伦理——真相、偏见与你'。我们要学习 AI 如何欺骗人、AI 如何可能不公平，以及你能做些什么。"

---

### [SLIDE 2 -- Quick Poll] *(0:02)*

EN: "Let's start with a quick poll. I want you to think honestly about this: Can you ALWAYS tell if something was made by AI? Raise your hand for 'Yes, always'... 'Sometimes'... 'Not really'..."

CN: "我们先做一个快速投票。我想让你诚实地想想：你能总是分辨出什么东西是 AI 做的吗？认为'是的，总是能'的举手……'有时候能'……'不太能'……"

**[Count hands for each option / 统计每个选项的举手人数]**

EN: "Interesting. Let's see how confident you still feel by the end of today's lesson."

CN: "有趣。让我们看看在今天课结束时你还会有多自信。"

---

### [SLIDE 3 -- What Are Deepfakes?] *(0:04)*

EN: "Has anyone heard the word 'deepfake' before?"

CN: "有没有人以前听过'深度伪造'这个词？"

**[Wait for responses / 等待回答]**

EN: "Deepfakes are images, videos, or audio that are created by AI to look and sound incredibly real -- but they are completely fake. AI can now create photos of people who have never existed. It can make videos of real people saying things they never actually said. It can even clone someone's voice."

CN: "深度伪造是由 AI 创建的图片、视频或音频，看起来和听起来都非常真实——但它们完全是假的。AI 现在可以创建从未存在过的人的照片。它可以制作真人说着他们从未说过的话的视频。它甚至可以克隆某人的声音。"

EN: "Think about that. A few years ago, you could trust that a photo or video was real. Now you can't always be sure."

CN: "想想这个。几年前，你可以相信照片或视频是真的。现在你不能总是确定了。"

---

### [SLIDE 4 -- Spotting Fake Images] *(0:06)*

EN: "But the good news is, AI images are not perfect. They leave clues. Here are five things to look for."

CN: "但好消息是，AI 图片并不完美。它们会留下线索。这里有五件要注意的事情。"

**[Go through each clue / 逐一讲解每条线索]**

EN: "First, hands and fingers. AI is terrible at hands -- you'll often see extra fingers or fingers bending the wrong way. Second, eyes -- they might be different sizes, or the reflections in each eye might not match. Third, text in images -- AI cannot spell. You'll see jumbled letters or nonsense words on signs and labels. Fourth, everything looks too perfect -- no wrinkles, no dirt, no scratches. Real life is messy. Fifth, backgrounds -- look for things that blur, melt, or don't make sense."

CN: "首先，手和手指。AI 非常不擅长画手——你经常会看到多余的手指或手指弯曲方向不对。其次，眼睛——它们可能大小不同，或者每只眼睛里的倒影不匹配。第三，图片中的文字——AI 不会拼写。你会在标志和标签上看到混乱的字母或无意义的词。第四，一切看起来太完美了——没有皱纹、没有污渍、没有刮痕。现实生活是杂乱的。第五，背景——注意那些模糊、融化或不合逻辑的东西。"

---

### [SLIDE 5 -- Spotting AI Writing] *(0:08)*

EN: "AI doesn't just make fake images -- it writes text too. And AI writing has its own telltale signs. Look at these two columns."

CN: "AI 不只是制作假图片——它还写文字。AI 写作有它自己的特征。看看这两栏。"

EN: "Human writing has personality. It's messy, it has opinions, it uses slang and makes mistakes. AI writing sounds like a textbook -- it's polished, formal, uses lists, and never takes a strong position on anything. If something reads like a perfect essay written by a very boring adult, it might be AI."

CN: "人类写作有个性。它很随意，有观点，用俚语，还会犯错。AI 写作听起来像教科书——它很精致、正式，使用列表，对任何事情都不会有强烈的立场。如果某个东西读起来像一篇由非常无聊的成年人写的完美文章，它可能是 AI 写的。"

---

### [SLIDE 6 -- Real-World Examples] *(0:10)*

EN: "This is not just a fun game. AI deception is happening right now in the real world. Fake news articles written by AI get shared millions of times. There are social media accounts with thousands of followers that belong to AI-generated people who don't actually exist. And criminals are using AI to clone people's voices to trick their family members into sending money."

CN: "这不仅仅是一个好玩的游戏。AI 欺骗现在正在现实世界中发生。AI 写的假新闻文章被分享数百万次。有些社交媒体账号有成千上万的粉丝，但这些人是 AI 生成的，根本不存在。犯罪分子正在使用 AI 克隆人们的声音，欺骗他们的家人发送金钱。"

EN: "This is why learning to spot fakes is not just interesting -- it's a real skill you need."

CN: "这就是为什么学会识别假内容不仅仅是有趣的——它是你需要的真正技能。"

---

### [SLIDE 7 -- What Is AI Bias?] *(0:11)*

EN: "Now let's talk about a different problem. Even when AI is not lying to you, it can still be unfair. This is called AI bias."

CN: "现在让我们谈谈另一个问题。即使 AI 没有对你说谎，它仍然可能不公平。这被称为 AI 偏见。"

EN: "Bias means unfairly favoring or disfavoring certain groups of people. And AI learns bias from us -- from the data we created. If most of the text AI read describes doctors as men and nurses as women, the AI will repeat that pattern."

CN: "偏见意味着不公平地偏好或不利于某些群体。AI 从我们这里学到偏见——从我们创造的数据中。如果 AI 阅读的大多数文本将医生描述为男性，将护士描述为女性，AI 就会重复这种模式。"

---

### [SLIDE 8 -- Where Does Bias Come From?] *(0:12)*

EN: "Here's how it works. AI trains on billions of texts written by people. People have biases and stereotypes. So AI learns those patterns and associations -- including the unfair ones. Then when AI creates output, it may repeat those same unfair assumptions."

CN: "它是这样运作的。AI 在人类写的数十亿文本上训练。人们有偏见和刻板印象。所以 AI 学会了那些模式和关联——包括不公平的。然后当 AI 创建输出时，它可能会重复那些同样不公平的假设。"

EN: "The important thing to remember: the AI isn't doing this on purpose. It's copying patterns from data. But that doesn't make it okay."

CN: "重要的是要记住：AI 不是故意这样做的。它在从数据中复制模式。但这并不意味着它是对的。"

> **Sensitivity note / 敏感性说明:**
> EN: If students ask "Is AI racist/sexist?" -- redirect to: "AI can produce biased results because of biased training data. The AI doesn't have feelings or intentions. But the output can still be harmful, which is why we need to be aware of it."
> CN: 如果学生问"AI 是不是有种族歧视/性别歧视？"——引导到："AI 可能因为有偏见的训练数据而产生有偏见的结果。AI 没有感情或意图。但输出仍然可能是有害的，这就是我们需要意识到它的原因。"

---

### [SLIDE 9 -- Bias in Action] *(0:13)*

EN: "Here are real examples of AI bias causing problems. A major company's AI hiring tool learned to reject women's resumes because it was trained on past hiring data that favored men. Image search results for 'doctor' mostly showed men, while 'nurse' mostly showed women. And a healthcare AI system gave less attention to certain patients based on their background."

CN: "这里有 AI 偏见造成问题的真实例子。一家大公司的 AI 招聘工具学会了拒绝女性的简历，因为它是在偏向男性的过去招聘数据上训练的。搜索'医生'的图片结果大多显示男性，而搜索'护士'大多显示女性。一个医疗保健 AI 系统根据患者的背景减少了对某些患者的关注。"

EN: "AI bias is not just annoying. It can cause real harm to real people."

CN: "AI 偏见不仅仅是令人烦恼。它可以对真实的人造成真正的伤害。"

---

### [SLIDE 10 -- Why Does This Matter for YOU?] *(0:14)*

EN: "You might think, 'I'm just a kid, this doesn't affect me.' But you already use AI every single day. Search engines decide what information you see. Social media algorithms choose what shows up in your feed. AI tools help you with homework. Recommendation systems suggest what videos to watch."

CN: "你可能会想，'我只是个孩子，这不影响我。'但你每天都在使用 AI。搜索引擎决定你看到什么信息。社交媒体算法选择你的动态中出现什么。AI 工具帮你做作业。推荐系统建议你看什么视频。"

EN: "Understanding how AI works -- including its problems -- makes you a smarter, safer person online."

CN: "理解 AI 如何工作——包括它的问题——让你在网上成为更聪明、更安全的人。"

---

## Part 1: Detection Challenge / 检测挑战 (15 minutes / 分钟)

### [SLIDE 11 -- 5 Principles] *(0:15)*

EN: "Before we start our hands-on activities, here are five principles for using AI responsibly. First, verify -- don't believe everything you see. Second, question bias -- AI can be unfair. Third, protect your privacy -- never share personal info with AI. Fourth, give credit -- be honest when AI helps you. Fifth, stay safe -- tell a trusted adult if something goes wrong."

CN: "在我们开始动手活动之前，这里有五条负责任使用 AI 的原则。第一，验证——不要相信你看到的一切。第二，质疑偏见——AI 可能不公平。第三，保护隐私——永远不要与 AI 分享个人信息。第四，给予信用——当 AI 帮助你时要诚实。第五，保持安全——如果出了问题，告诉你信任的成年人。"

---

### [SLIDE 12 -- Mission Part 1] *(0:15)*

EN: "Now your mission! On the lesson page, you have three parts. Part 1 is the Detection Challenge -- you'll try to figure out which images and texts are real and which are AI. Part 2 is the Bias Lab -- you'll experiment with the AI chatbot to find hidden biases."

CN: "现在是你的任务！在课程页面上，你有三个部分。第一部分是检测挑战——你要试着找出哪些图片和文字是真的，哪些是 AI 的。第二部分是偏见实验室——你会用 AI 聊天机器人来发现隐藏的偏见。"

---

### [SLIDE 13 -- Mission Part 2] *(0:15)*

EN: "And Part 3 is brand new -- you're going to write your own AI Guidelines. These are YOUR personal rules for how you want to use AI responsibly. You'll think about truth, fairness, privacy, credit, and safety. And at the end, you'll sign a pledge and get a certificate."

CN: "第三部分是全新的——你要写你自己的 AI 准则。这些是你个人关于如何负责任使用 AI 的规则。你要思考真相、公平、隐私、信用和安全。最后，你会签署一个承诺并获得一份证书。"

---

### [SLIDE 14 -- Let's Go!] *(0:15)*

EN: "Open your laptops and go to the Lesson 5 page. Start with Part 1a -- the image detection challenge. You have about 15 minutes for the whole detection challenge -- that's both images and text. Ready? Go!"

CN: "打开电脑，进入第五课的页面。从第 1a 部分开始——图片检测挑战。整个检测挑战大约有15分钟——包括图片和文字。准备好了吗？开始！"

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

---

### Hands-on: Detection Challenge (15 min) *(0:15--0:30)*

EN: "Take your time reading each description carefully. Look for the clues we just talked about -- hands, eyes, text, perfection, backgrounds."

CN: "仔细阅读每个描述。寻找我们刚才谈到的线索——手、眼睛、文字、完美度、背景。"

**[Give students 7-8 minutes for Part 1a (images) / 给学生 7-8 分钟做第 1a 部分（图片）]**

EN: "If you've finished the image challenge, click 'Continue to Part 1b' for the text challenge. Now you're looking for different clues -- is the writing too perfect? Too formal? Does it have personality?"

CN: "如果你完成了图片挑战，点击'Continue to Part 1b'进入文字挑战。现在你要寻找不同的线索——写作是否太完美？太正式？有没有个性？"

**[Give students 7 minutes for Part 1b (text) / 给学生 7 分钟做第 1b 部分（文字）]**

> **Contingency / 应对方案:**
> EN: If students finish early: "Great score! Now go back and read the explanations for the ones you got wrong. Understanding WHY is more important than getting a high score."
> CN: 如果学生提前完成："好分数！现在回去阅读你答错的那些的解释。理解为什么比获得高分更重要。"

> **Contingency / 应对方案:**
> EN: If students are stuck: "Don't overthink it. Ask yourself: 'Is there anything weird here? Anything too perfect?' Trust your gut, then read the explanation."
> CN: 如果学生卡住了："不要想太多。问自己：'这里有什么奇怪的吗？有什么太完美的吗？'相信你的直觉，然后阅读解释。"

---

## Part 2: Bias Lab / 偏见实验室 (15 minutes / 分钟) *(0:30--0:45)*

EN: "Alright, time for Part 2 -- the Bias Lab. Click on the 'Part 2' tab. You'll see four experiment cards. Each one has two prompts that test the AI in a different way."

CN: "好了，是时候进入第二部分——偏见实验室了。点击'Part 2'标签。你会看到四张实验卡片。每张都有两个提示以不同方式测试 AI。"

EN: "Here's what to do: pick an experiment card, then use the chat to ask BOTH prompts. Compare how the AI answers them. Does it describe a nurse differently from an engineer? Does it talk about different countries in different ways? Write down what you notice in the observations box."

CN: "你要这样做：选一张实验卡片，然后用聊天分别问两个提示。比较 AI 是怎么回答的。它描述护士和工程师是不是不一样？它谈论不同国家的方式是不是不同？在观察框中写下你注意到的。"

EN: "Try to do at least TWO experiments. Click on the experiment cards to select them."

CN: "至少尝试两个实验。点击实验卡片来选择它们。"

**[Give students 12-13 minutes / 给学生 12-13 分钟]**

**[Walk around and observe / 走动观察]**

> **What to look for while walking around / 走动时注意什么:**
> - Are students comparing both prompts from the same experiment?
> - Are they writing observations?
> - Are any students uncomfortable with what the AI produces?
>
> 学生是否在比较同一实验的两个提示？他们在写观察吗？有没有学生对 AI 产生的内容感到不适？

> **Sensitivity note / 敏感性说明:**
> EN: If the AI produces a response that feels offensive or hurtful: "This is exactly what we're looking for -- the AI just showed bias! It's not okay that the AI said that. Let's talk about why it might have learned that pattern, and why it's a problem."
> CN: 如果 AI 产生了冒犯性的回复："这正是我们在寻找的——AI 刚刚显示了偏见！AI 这样说是不对的。让我们谈谈它为什么可能学到了这种模式，以及为什么这是一个问题。"

EN: "Two minutes left for the Bias Lab. Make sure you've written at least a few sentences in the observations box about what you noticed."

CN: "偏见实验室还有两分钟。确保你已经在观察框中写了至少几句话关于你注意到的。"

---

## Part 3: My AI Guidelines / 我的 AI 准则 (10 minutes / 分钟) *(0:45--0:55)*

EN: "Great work on the experiments. Now switch to Part 3 -- 'My AI Guidelines.' This is where you take everything you've learned today and turn it into YOUR personal rules."

CN: "实验做得很好。现在切换到第三部分——'我的 AI 准则'。这是你把今天学到的一切变成你个人规则的地方。"

EN: "You'll see five categories: Truth and Verification, Fairness and Bias, Privacy, Creative Credit, and Safety. Each one has a starter sentence to help you think. Write at least three of these. These should be YOUR words -- what matters to you."

CN: "你会看到五个类别：真相与验证、公平与偏见、隐私、创意信用和安全。每个都有一个起始句子帮你思考。至少写三个。这些应该是你自己的话——对你来说什么是重要的。"

**[Give students 6-7 minutes to write guidelines / 给学生 6-7 分钟写准则]**

EN: "Some examples to get you thinking: For truth, you might write 'I will check at least two sources before believing something I see online.' For privacy, maybe 'I will never tell an AI chatbot my real name or address.' For creative credit, 'I will always be honest about when AI helped me with my schoolwork.'"

CN: "一些例子帮你思考：对于真相，你可以写'在相信网上看到的东西之前，我会检查至少两个来源。'对于隐私，也许是'我永远不会告诉 AI 聊天机器人我的真名或地址。'对于创意信用，'我会诚实地说明 AI 什么时候帮助了我的作业。'"

EN: "When you're done with your guidelines, scroll down to the pledge section. Enter your name and sign it. You'll get a certificate!"

CN: "当你完成准则后，向下滚动到承诺部分。输入你的名字并签署。你会得到一份证书！"

**[Give students 2-3 minutes to sign pledge / 给学生 2-3 分钟签署承诺]**

EN: "You can also download your guidelines as a file using the export button."

CN: "你也可以使用导出按钮将你的准则下载为文件。"

---

## Discussion & Share / 讨论分享 (5 minutes / 分钟) *(0:55--1:00)*

EN: "Alright, let's hear from some of you. First -- what surprised you most about the detection challenge? Did you expect to get all the answers right?"

CN: "好了，让我们听听你们的想法。首先——检测挑战中最让你惊讶的是什么？你期望自己能答对所有问题吗？"

**[Wait for 2-3 responses / 等待 2-3 个回答]**

EN: "And what about the Bias Lab? What did you notice when you compared the AI's answers?"

CN: "偏见实验室呢？当你比较 AI 的答案时，你注意到了什么？"

**[Wait for 2-3 responses / 等待 2-3 个回答]**

> **Sensitivity note / 敏感性说明:**
> EN: If a student shares something about bias that could be hurtful to another student, gently redirect: "Thank you for noticing that. That's an example of bias in the AI's training data. It's important to remember that these stereotypes are not true -- people are much more diverse than AI sometimes shows."
> CN: 如果学生分享了关于偏见的内容可能伤害到其他学生，温和地引导："谢谢你注意到了这一点。这是 AI 训练数据中偏见的一个例子。重要的是要记住，这些刻板印象不是真的——人们比 AI 有时展示的要多样化得多。"

EN: "Last question: share one rule from your AI guidelines that you think is the most important. Who wants to go first?"

CN: "最后一个问题：分享你 AI 准则中你认为最重要的一条规则。谁想先来？"

**[Wait for 2-3 responses / 等待 2-3 个回答]**

EN: "Those are great rules. Here's the thing -- AI is an amazing tool. We've used it to create stories, art, music, and code. But like any powerful tool, it can be misused, and it can have problems. Today you learned to be a smarter AI user. You can spot fakes, you understand bias, and you have your own guidelines."

CN: "这些都是很棒的规则。是这样的——AI 是一个了不起的工具。我们用它创造了故事、艺术、音乐和代码。但就像任何强大的工具一样，它可能被滥用，也可能有问题。今天你学会了成为更聪明的 AI 用户。你能识别假内容，你理解偏见，你还有自己的准则。"

EN: "Remember: the goal isn't to be afraid of AI. The goal is to use it wisely. See you next time!"

CN: "记住：目标不是害怕 AI。目标是明智地使用它。下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:02 | Welcome | Slide 1 -- Title & framing |
| 0:02--0:04 | Poll | Slide 2 -- Quick poll, raise hands |
| 0:04--0:06 | Deepfakes | Slide 3 -- What are deepfakes? |
| 0:06--0:08 | Detection | Slide 4 -- 5 clues for fake images |
| 0:08--0:10 | AI Writing | Slide 5 -- Human vs AI writing |
| 0:10--0:11 | Real World | Slide 6 -- Real-world AI deception examples |
| 0:11--0:12 | Bias Intro | Slide 7 -- What is AI bias? |
| 0:12--0:13 | Bias Source | Slide 8 -- Where bias comes from |
| 0:13--0:14 | Bias Examples | Slide 9 -- Real bias examples |
| 0:14--0:15 | Relevance | Slides 10--11 -- Why it matters, 5 principles |
| 0:15 | Launch | Slides 12--14 -- Mission overview, students open laptops |
| 0:15--0:30 | Part 1 | Detection Challenge (images + text) |
| 0:30--0:45 | Part 2 | Bias Lab experiments with AI chat |
| 0:45--0:55 | Part 3 | Write AI Guidelines + Sign Pledge |
| 0:55--1:00 | Share | Discussion -- surprises, observations, rules |
