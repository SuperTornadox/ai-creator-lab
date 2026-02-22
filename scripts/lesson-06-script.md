# Lesson 6: AI Director --- Teacher Script
# 第六课：AI 导演 --- 教师逐字稿

**Duration / 时长**: 43--45 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops, Suno account (tested beforehand), optionally a short example mini-film to show
**Goal / 目标**: Students combine all AI tools learned so far (text AI, image AI, music AI) to create a mini slideshow film with scenes, captions, and a soundtrack.
**目标**: 学生综合运用目前学到的所有 AI 工具（文本 AI、图片 AI、音乐 AI），创建一个包含场景、字幕和配乐的迷你幻灯片电影。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> This is the most ambitious lesson so far -- students combine text, image, and music AI into one project. Be prepared for varying paces.
>
> **Before class / 课前准备:**
> - Test the lesson page: open `/lesson-06/index.html` and walk through all 4 steps
> - Verify `/api/chat` and `/api/image` endpoints are working
> - Optionally create a sample mini-film yourself (4-5 scenes) to show students as inspiration
> - Have Suno open in a tab and confirm it works
> - Consider pre-generating 1-2 example scene images so students see what good prompts produce
>
> **Timing note / 时间提醒:**
> This lesson has 4 steps. Students who are fast can complete all 4 easily. Slower students should prioritize getting at least 4 scenes with images. The soundtrack step can be abbreviated (they can just describe their music instead of visiting Suno).
>
> 这是目前最有野心的一课——学生要把文本、图片和音乐 AI 综合到一个项目中。准备好应对不同的进度。
>
> **课前准备：**
> - 测试课程页面：打开 `/lesson-06/index.html`，走完全部4个步骤
> - 验证 `/api/chat` 和 `/api/image` 接口正常工作
> - 可以自己先做一个示例迷你电影（4-5个场景）作为灵感展示
> - 在一个标签页打开 Suno 并确认正常
> - 考虑预生成 1-2 个示例场景图片，让学生看到好提示词的效果
>
> **时间提醒：**
> 本课有4个步骤。速度快的学生可以轻松完成全部。较慢的学生应优先完成至少4个有图片的场景。配乐步骤可以缩短（他们可以只描述想要的音乐，不一定要访问 Suno）。

---

## Warm-up / 概念热身 (8 minutes / 分钟)

### [SLIDE 1 --- Title] *(0:00)*

EN: "Welcome back to AI Creator Lab! Today is a special lesson. Over the past few weeks, you have used AI to write stories, create images, make picture books, and even generate music. Today, we are going to combine ALL of those skills into one big project. Today you are going to be an AI Director and make your own mini film!"

CN: "欢迎回到 AI 创造者实验室！今天是一节特别的课。在过去几周里，你们用 AI 写了故事、创造了图片、做了绘本，甚至生成了音乐。今天，我们要把所有这些技能综合到一个大项目里。今天你们要当 AI 导演，制作你们自己的迷你电影！"

---

### [SLIDE 2 --- What Makes a Movie?] *(0:01)*

EN: "Before we start, let's think about this: what makes a movie? What are the key ingredients?"

CN: "在我们开始之前，想一想：什么组成了一部电影？关键要素是什么？"

**[Wait for student responses / 等待学生回答]**

EN: "Great answers! A movie needs four main things: a story -- the plot and characters; visuals -- what you actually see on screen; music -- the soundtrack that creates mood and emotion; and pacing -- how the story flows from beginning to end. Today you are going to create all of these with AI."

CN: "很好的回答！电影需要四个主要元素：故事——情节和角色；视觉——你在屏幕上看到的画面；音乐——创造氛围和情感的配乐；以及节奏——故事从头到尾如何展开。今天你们要用 AI 创造所有这些。"

---

### [SLIDE 3 --- Review Tools Learned] *(0:03)*

EN: "Let's review the tools in your toolkit. First, text AI -- we have used ChatGPT-style AI to write stories and lyrics. Second, image AI -- we have used image generation to create illustrations and scenes. Third, music AI -- last week we used Suno to generate songs. Today these three tools work together!"

CN: "让我们回顾一下你们工具箱里的工具。第一，文本 AI——我们用 ChatGPT 风格的 AI 写过故事和歌词。第二，图片 AI——我们用图片生成创造了插画和场景。第三，音乐 AI——上周我们用 Suno 生成了歌曲。今天这三个工具要一起工作！"

---

### [SLIDE 4 --- Today's Mission] *(0:04)*

EN: "Your mission: combine all three AI tools to make a mini film. Think of it as a slideshow film -- each scene is an image with a caption underneath, like subtitles in a movie. Plus you add a soundtrack. When you play them together, it feels like watching a short film!"

CN: "你们的任务：结合三种 AI 工具制作一个迷你电影。把它想象成一个幻灯片电影——每个场景是一张图片，下面有字幕，就像电影里的字幕。加上配乐。当它们一起播放时，就像在看一部短片！"

---

### [SLIDE 5 --- What is a Storyboard?] *(0:05)*

EN: "Real directors do not just start filming. They plan every scene first using something called a storyboard. A storyboard breaks the story into individual scenes, like panels in a comic strip. Each scene shows what happens and what the viewer sees. That is exactly what you are going to do -- plan your scenes first, then create them."

CN: "真正的导演不会直接开始拍摄。他们会先用叫做故事板的东西规划每个场景。故事板把故事分解成单独的场景，就像漫画的格子。每个场景展示发生了什么以及观众看到什么。这正是你们要做的——先规划场景，然后创造它们。"

---

### [SLIDE 6 --- Example Scene Breakdown] *(0:06)*

EN: "Here is an example. Imagine your film is a space adventure. Scene 1: a kid finds a rocket in the backyard. Scene 2: the rocket blasts off into space. Scene 3: they discover a colorful new planet. Scene 4: friendly aliens invite them to a party. See how each scene is one clear visual moment? That is what makes a good storyboard."

CN: "这里有个例子。想象你的电影是一个太空冒险。场景1：一个小孩在后院发现一艘火箭。场景2：火箭冲入太空。场景3：他们发现了一个五彩缤纷的新星球。场景4：友好的外星人邀请他们参加派对。看到每个场景是一个清晰的视觉画面了吗？这就是好故事板的特点。"

---

### [SLIDE 7 --- Workflow Overview] *(0:07)*

EN: "Here is your workflow for today. Step 1: write your script -- chat with AI to create a 4 to 6 scene story. Step 2: generate images -- create a visual for each scene using image AI. Step 3: pick your music -- go to Suno and make a soundtrack. Step 4: combine everything and watch your film in the preview player!"

CN: "这是你们今天的工作流程。第一步：写剧本——和 AI 聊天创建4到6个场景的故事。第二步：生成图片——用图片 AI 为每个场景创建视觉画面。第三步：选择音乐——去 Suno 制作配乐。第四步：把所有东西组合在一起，在预览播放器里观看你的电影！"

---

### [SLIDE 8 --- Tips for Great Scenes] *(0:07)*

EN: "Quick tips for making great scene images. Be specific -- 'a golden sunset over a mountain lake' is much better than just 'nature.' Include the mood -- 'mysterious dark forest' or 'bright cheerful kitchen.' Mention your characters -- 'a brave kid in a red cape.' And think cinematic -- imagine how it would look on a big movie screen!"

CN: "制作好场景图片的快速提示。要具体——'山湖上的金色日落'比只说'自然'好得多。包含氛围——'神秘的黑暗森林'或'明亮欢快的厨房'。提到你的角色——'穿红披风的勇敢小孩'。要想得像电影一样——想象它在大银幕上的样子！"

---

### [SLIDE 9 --- Let's Start!] *(0:08)*

EN: "Alright, directors! Open your laptops and go to Lesson 6. You have about 30 minutes to create your mini film. At the end, we will have a premiere -- you will show your films to each other. Lights, camera, AI!"

CN: "好了，导演们！打开电脑，进入第六课。你们有大约30分钟来创作迷你电影。最后，我们会举行一个首映式——你们会互相展示自己的电影。灯光，摄像机，AI！"

---

## Hands-on Project / 动手项目 (30 minutes / 分钟)

### Phase 1: Write the Script (8 min) *(0:08--0:16)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "You should see the AI Director page with four steps at the top. Start with Step 1: Script. Think of a story idea for your mini film. It can be anything -- an adventure, a mystery, something funny, a day in the life of a cat, anything! Type your idea into the chat."

CN: "你应该看到 AI 导演页面，顶部有四个步骤。从第一步开始：剧本。想一个你迷你电影的故事创意。可以是任何东西——冒险、推理、搞笑的、一只猫的一天，任何东西！在聊天中输入你的想法。"

**[Give students 2-3 minutes to chat with AI / 给学生 2-3 分钟和 AI 聊天]**

EN: "The AI should give you a list of scenes like 'Scene 1, Scene 2, Scene 3' and so on. If you do not like it, tell the AI what to change -- 'make it funnier' or 'add a twist at the end' or 'I want 6 scenes instead of 4.' Once you are happy, click the blue 'Use These Scenes' button to load them."

CN: "AI 应该会给你一个场景列表，像'场景1、场景2、场景3'等等。如果你不喜欢，告诉 AI 要改什么——'让它更搞笑'或'在结尾加个反转'或'我想要6个场景而不是4个'。满意后，点击蓝色的'Use These Scenes'按钮加载它们。"

**[Give students another 3-5 minutes / 再给学生 3-5 分钟]**

> **Contingency / 应对方案:**
> EN: If a student cannot think of a topic: "Here are some ideas: a robot's first day at school, a treasure hunt on a pirate island, a time traveler visiting ancient Egypt, a cooking competition with aliens, or a superhero who is afraid of cats!"
> CN: 如果学生想不到主题："这里有一些创意：机器人上学的第一天、海盗岛上的寻宝、时空旅行者去古埃及、和外星人的烹饪比赛、或者怕猫的超级英雄！"

> **Contingency / 应对方案:**
> EN: If the "Use These Scenes" button does not work: "Make sure the AI listed scenes with 'Scene 1:', 'Scene 2:' etc. If it used a different format, ask the AI: 'Can you rewrite that as Scene 1, Scene 2, Scene 3 format?'"
> CN: 如果"Use These Scenes"按钮不工作："确保 AI 用了'Scene 1:'、'Scene 2:'等格式列出场景。如果用了不同的格式，问 AI：'你能用 Scene 1、Scene 2、Scene 3 的格式重写吗？'"

---

### Phase 2: Generate Scene Images (12 min) *(0:16--0:28)*

EN: "Now click 'Next: Create Scene Images' or click the 'Scenes' tab at the top. You should see all your scenes listed. For each scene, you need to generate an image. The page will auto-suggest an image prompt for you. You can edit it or just click 'Generate Image' to see what you get."

CN: "现在点击'Next: Create Scene Images'或点击顶部的'Scenes'标签。你应该看到所有场景列出来了。对于每个场景，你需要生成一张图片。页面会自动建议一个图片提示词。你可以编辑它或者直接点击'Generate Image'看看效果。"

EN: "Remember the tips from the slides -- be specific, describe the mood, mention your characters. Each image takes about 10-15 seconds to generate."

CN: "记住幻灯片里的提示——要具体，描述氛围，提到你的角色。每张图片大约需要 10-15 秒生成。"

**[Give students 10-12 minutes / 给学生 10-12 分钟]**

**[Walk around and help / 走动并帮助:]**
EN: Check that students are generating images for each scene. Help with prompts if they are stuck. Encourage them to regenerate if they do not like the first result.
CN: 检查学生是否在为每个场景生成图片。如果他们卡住了帮忙写提示词。鼓励他们不喜欢第一次结果就重新生成。

> **Contingency / 应对方案:**
> EN: If image generation is slow: "While one image is generating, you can write the prompt for the next scene. That way you are always one step ahead!"
> CN: 如果图片生成很慢："在一张图片生成的时候，你可以写下一个场景的提示词。这样你总是领先一步！"

> **Contingency / 应对方案:**
> EN: If a student finishes images quickly: "Great job! Try regenerating any images you are not 100% happy with. Or go ahead to Step 3 and pick your soundtrack."
> CN: 如果学生很快完成图片："做得好！试着重新生成任何你不是100%满意的图片。或者直接去第三步选配乐。"

---

### Phase 3: Choose Soundtrack (5 min) *(0:28--0:33)*

EN: "Now let's add music! Click 'Next: Add Soundtrack' or the 'Soundtrack' tab. You will see a button to open Suno. Click it, go to Suno, and create a short instrumental track. Try something like 'cinematic orchestral adventure' or 'mysterious piano background music' or 'upbeat fun 8-bit retro.' Instrumental works best since there are no lyrics to clash with your captions."

CN: "现在加音乐！点击'Next: Add Soundtrack'或'Soundtrack'标签。你会看到一个打开 Suno 的按钮。点击它，去 Suno，创建一个短的纯音乐音轨。试试'cinematic orchestral adventure'或'mysterious piano background music'或'upbeat fun 8-bit retro'之类的。纯音乐效果最好，因为没有歌词和字幕冲突。"

EN: "Once you have a Suno song, copy the URL and paste it back on our page. Also write a short description of your music in the text box."

CN: "生成了 Suno 歌曲后，复制网址粘贴回我们的页面。也在文本框里写一段对你音乐的简短描述。"

**[Give students 5 minutes / 给学生 5 分钟]**

> **Contingency / 应对方案:**
> EN: If Suno is slow or not working: "No worries! Just describe what music you would want for your film in the description box. Something like 'I would choose epic orchestra music because my film is an adventure.' You can always add the actual music later."
> CN: 如果 Suno 很慢或不工作："没关系！只需在描述框中描述你想要什么样的电影音乐。比如'我会选择史诗管弦乐因为我的电影是冒险片。'你之后随时可以添加真正的音乐。"

---

### Phase 4: Preview Film (5 min) *(0:33--0:38)*

EN: "The exciting part! Click 'Next: Preview Film' or the 'Preview' tab. You should see your film player with your first scene image. Use the Previous and Next buttons to step through your film. You can also check 'Auto-play' and press Play to watch it automatically with transitions between scenes!"

CN: "激动人心的部分！点击'Next: Preview Film'或'Preview'标签。你应该看到你的电影播放器显示第一个场景图片。用'Previous'和'Next'按钮翻看你的电影。你也可以勾选'Auto-play'然后按 Play 自动播放，场景之间有过渡效果！"

EN: "Try different speeds -- 3 seconds is fast, 5 seconds is normal, 8 seconds gives you time to read each caption. You can also use the arrow keys on your keyboard to go forward and back."

CN: "试试不同的速度——3秒是快速，5秒是正常，8秒让你有时间阅读每个字幕。你也可以用键盘的方向键来前进和后退。"

EN: "If you want to save your film, click the 'Download Film as HTML' button at the bottom. That saves it as a file you can open in any browser!"

CN: "如果你想保存你的电影，点击底部的'Download Film as HTML'按钮。它会保存为一个你可以在任何浏览器打开的文件！"

**[Give students 3-5 minutes to preview and polish / 给学生 3-5 分钟预览和完善]**

---

## Show & Share / 展示分享 (5 minutes / 分钟) *(0:38--0:43)*

EN: "It is premiere time! Who wants to show their film first? Come up, and we will put your film on the big screen."

CN: "首映时间到！谁想先展示他们的电影？上来，我们把你的电影放到大屏幕上。"

**[Wait for a volunteer / 等待志愿者]**

EN: "Before you play it, tell us: what is your film about? What genre is it -- adventure, comedy, mystery, sci-fi?"

CN: "在播放之前，告诉我们：你的电影关于什么？是什么类型的——冒险、喜剧、推理、科幻？"

**[Student 1 presents -- use auto-play at 5-second speed / 学生1展示——用5秒速度自动播放]**

EN: "That was awesome! Great job! Now who is next?"

CN: "太棒了！做得好！下一个是谁？"

**[Student 2 presents / 学生2展示]**

EN: "Excellent! Now I have a question for you both. You used text AI, image AI, and music AI together. Which part was the hardest? Which was the most fun?"

CN: "非常好！现在问你们俩一个问题。你们一起使用了文本 AI、图片 AI 和音乐 AI。哪个部分最难？哪个最有趣？"

**[Wait for responses / 等待回答]**

EN: "And here is the big takeaway: you just directed a mini film using AI as your crew. You came up with the idea, you planned the scenes, you chose the style and mood. AI helped you create each piece, but the creative vision was all yours. That is what it means to be a director -- you do not have to do everything yourself, but you decide what the final product looks like."

CN: "这是最重要的收获：你们刚才用 AI 作为你们的团队导演了一部迷你电影。你们想出了创意，规划了场景，选择了风格和氛围。AI 帮你们创造了每个部分，但创意愿景完全是你们的。这就是做导演的意义——你不需要自己做所有事，但你决定最终作品是什么样的。"

> **Contingency / 应对方案:**
> EN: If students did not finish all 4 scenes: "That is totally fine! Even professional films take months to make. You can always come back and finish your film later. The important thing is that you learned the whole process -- story, visuals, music, combine."
> CN: 如果学生没有完成所有4个场景："完全没关系！即使专业电影也需要几个月来制作。你随时可以回来完成你的电影。重要的是你学到了整个流程——故事、视觉、音乐、组合。"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(0:43--0:45)*

EN: "Today you used everything you have learned in this course -- text AI for your script, image AI for your scenes, and music AI for your soundtrack. You put it all together and created something that none of those tools could make on their own. That is the real power of AI -- it is not about one tool, it is about combining them creatively."

CN: "今天你们用了这门课学到的所有东西——文本 AI 写剧本、图片 AI 做场景、音乐 AI 做配乐。你们把所有东西组合在一起，创造了单个工具无法独立完成的作品。这就是 AI 的真正力量——不在于单个工具，而在于创造性地组合它们。"

EN: "Remember, AI is your creative partner. You are the director. Keep creating, keep experimenting, and keep having fun with AI!"

CN: "记住，AI 是你的创作伙伴。你是导演。继续创作，继续实验，继续享受和 AI 一起的乐趣！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:01 | Welcome | Slide 1 --- Title & introduction |
| 0:01--0:03 | Movie Elements | Slide 2 --- What makes a movie? |
| 0:03--0:04 | Review Tools | Slide 3 --- Text, image, music AI |
| 0:04--0:05 | Mission | Slide 4 --- Combine all into a film |
| 0:05--0:06 | Storyboard | Slide 5 --- What is a storyboard? |
| 0:06--0:07 | Example | Slide 6 --- Space adventure example |
| 0:07--0:07 | Workflow | Slide 7 --- 4-step workflow |
| 0:07--0:08 | Tips | Slide 8 --- Image prompt tips |
| 0:08 | Launch | Slide 9 --- Students open laptops |
| 0:08--0:16 | Script | Students write story with AI chat |
| 0:16--0:28 | Images | Students generate scene images |
| 0:28--0:33 | Soundtrack | Students create music on Suno |
| 0:33--0:38 | Preview | Students preview and polish film |
| 0:38--0:43 | Premiere | Students show films & discuss |
| 0:43--0:45 | Wrap-up | Recap key ideas |
