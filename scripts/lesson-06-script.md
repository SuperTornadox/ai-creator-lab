# Lesson 6: AI Animation Studio --- Code in Motion! --- Teacher Script
# 第六课：AI 动画工作室 --- 代码变动画！ --- 教师逐字稿

**Duration / 时长**: 60 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students create visual animations, particle effects, and generative art by describing what they imagine to AI, which generates the code. Students learn animation concepts, motion vocabulary, and the idea of generative art (rules + randomness).
**目标**: 学生通过向 AI 描述想象来创建视觉动画、粒子效果和生成艺术。学生学习动画概念、运动词汇以及生成艺术（规则 + 随机性）的概念。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> This lesson is highly visual and exciting for students. The code playground generates HTML/JS animations that run in an iframe --- make sure the API is working before class. Students will want to try many animations, so expect high engagement and potentially high API usage.
>
> **这节课非常视觉化，学生会很兴奋。代码游乐场生成在 iframe 中运行的 HTML/JS 动画——课前确保 API 正常工作。学生会想尝试很多动画，所以预期高参与度和可能的高 API 使用量。**
>
> **Technical prep / 技术准备:**
> - Test the lesson page: open `/lesson-06/index.html` and verify both Code Playgrounds load and generate working animations
> - Verify `/api/code` endpoint is working --- this is the primary API used in this lesson
> - Try generating at least one animation challenge (e.g., "Rainbow Wave") to confirm the output works in the preview iframe
> - The export button downloads an `.html` file --- test it on your machine
> - Have a backup plan if the API is slow: students can iterate on existing generations using the "What to change?" input rather than generating from scratch
>
> **测试课程页面：打开 `/lesson-06/index.html`，验证两个代码游乐场都能加载并生成工作动画。验证 `/api/code` 端点正常工作。尝试生成至少一个动画挑战来确认输出在预览 iframe 中工作。导出按钮下载 `.html` 文件——在你的机器上测试。**

---

## Warm-up / 热身引入 (12 minutes / 分钟)

### [SLIDE 1 --- Title] *(0:00)*

EN: "Welcome to AI Animation Studio! Today we are going to do something super cool --- we are going to turn plain English descriptions into moving, animated art. No coding knowledge needed. You describe what you want to see, and AI writes the code to make it happen."

CN: "欢迎来到 AI 动画工作室！今天我们要做一些超酷的事情——我们要把普通的英文描述变成会动的动画艺术。不需要任何编程知识。你描述你想看到的，AI 就会写代码让它实现。"

EN: "By the end of today, you will have created your own animations --- things like particle fountains, starfields, falling Matrix rain, fireworks --- and you can download them to keep forever!"

CN: "在今天结束时，你将创建你自己的动画——像粒子喷泉、星空飞行、黑客帝国的字符雨、烟花——你可以下载它们永久保存！"

---

### [SLIDE 2 --- What Is Animation?] *(0:02)*

EN: "First, let us understand what animation actually is. Animation is just showing pictures really fast --- so fast that your eyes see them as movement. Think of a flipbook. Each page has a slightly different drawing, and when you flip through them quickly, it looks like things are moving."

CN: "首先，让我们理解动画到底是什么。动画就是非常快速地显示图片——快到你的眼睛看到的是运动。想想翻页书。每一页都有一个稍微不同的图画，当你快速翻动它们时，看起来东西在移动。"

EN: "Your computer screen works the same way. It shows you about 60 tiny pictures every single second. Each picture is slightly different from the last one. That is how you see smooth movement on screen."

CN: "你的电脑屏幕工作方式相同。它每秒给你展示大约60个小图片。每张图片都和上一张略有不同。这就是你在屏幕上看到流畅运动的原因。"

---

### [SLIDE 3 --- CSS vs Canvas] *(0:04)*

EN: "There are two main ways to animate things on a webpage. The first is CSS animations --- this is like telling HTML elements to move around, spin, fade, or change colors. Great for simple effects. The second is Canvas --- this is like having a blank drawing board where you can draw anything pixel by pixel. This is more powerful and is what most games and particle effects use."

CN: "在网页上有两种主要的动画方式。第一种是 CSS 动画——这就像告诉 HTML 元素移动、旋转、渐隐或改变颜色。适合简单效果。第二种是 Canvas——这就像有一个空白画板，你可以逐像素地画任何东西。这更强大，是大多数游戏和粒子效果使用的方式。"

EN: "But here is the good news --- you do not need to know ANY of this! AI handles all the code. Your job is to describe what you want the animation to look like. You are the creative director. AI is the programmer."

CN: "但好消息是——你不需要知道任何这些！AI 处理所有代码。你的工作是描述你想要动画看起来像什么。你是创意总监。AI 是程序员。"

---

### [SLIDE 4 --- Animation Vocabulary] *(0:06)*

EN: "To be a great creative director, you need the right vocabulary. These are the MOTION WORDS that help AI understand what kind of animation you want."

CN: "要成为一个出色的创意总监，你需要正确的词汇。这些是帮助 AI 理解你想要什么样动画的运动词。"

**[Point to each word / 指向每个词]**

EN: "Bounce --- things jumping up and down. Spin --- rotating around. Fade --- gradually appearing or disappearing. Pulse --- getting bigger and smaller rhythmically, like a heartbeat. Orbit --- moving in a circle around something else. Morph --- smoothly changing from one shape into another."

CN: "Bounce 弹跳——东西上下跳动。Spin 旋转——围绕旋转。Fade 渐变——逐渐出现或消失。Pulse 脉动——有节奏地变大变小，像心跳。Orbit 轨道——围绕另一个东西做圆周运动。Morph 变形——从一个形状平滑地变成另一个。"

EN: "The more specific your description is, the better the animation will be. 'A ball that bounces and pulses with color' is much better than just 'a moving ball.' Remember this!"

CN: "你的描述越具体，动画就越好。'一个弹跳并脉动变色的球'比只说'一个移动的球'好得多。记住这一点！"

---

### [SLIDE 5 --- Same Description, Different Results] *(0:08)*

EN: "Here is something fun about working with AI --- even when you give it the exact same description twice, you get different results! This is because AI adds some randomness each time it generates code. So every animation you create is truly unique."

CN: "与 AI 一起工作有一件有趣的事——即使你给它完全相同的描述两次，你也会得到不同的结果！这是因为 AI 每次生成代码时都会添加一些随机性。所以你创建的每个动画都是真正独一无二的。"

EN: "This means if you do not like what you get, just click Generate again! And if you DO like it but want to change something, use the 'What to change?' box to modify it."

CN: "这意味着如果你不喜欢得到的结果，只需再次点击 Generate！如果你喜欢但想改变一些东西，使用'What to change?'框来修改它。"

---

### [SLIDE 6 --- Part 1 Challenges Preview] *(0:09)*

EN: "Now let me show you what you will be building in Part 1. There are six animation challenges, from Easy to Hard. The Easy ones are Rainbow Wave --- colorful bars that wave back and forth --- and Particle Fountain --- particles spraying up like a water fountain. Medium challenges are Starfield --- that classic screensaver where stars fly toward you --- and Lava Lamp --- smooth blobby shapes floating around. And the Hard challenges are Matrix Rain --- you know, the green falling characters from The Matrix movie --- and Fireworks Show --- where you click to launch fireworks!"

CN: "现在让我给你们看第一部分你们要创建什么。有六个动画挑战，从简单到困难。简单的是彩虹波浪——彩色条来回波动——和粒子喷泉——粒子像水喷泉一样向上喷射。中等挑战是星空飞行——那个经典的屏保，星星向你飞来——和熔岩灯——光滑的团块状形状漂浮。困难挑战是黑客帝国字符雨——你知道的，黑客帝国电影中绿色下落的字符——和烟花秀——你点击来发射烟花！"

EN: "I recommend starting with Easy and working your way up. But you can try any challenge in any order."

CN: "我建议从简单的开始，然后逐步提升。但你可以按任何顺序尝试任何挑战。"

---

### [SLIDE 7 --- What Is Generative Art?] *(0:10)*

EN: "In Part 2, we move into something called generative art. This is art made by combining rules with randomness. You set the rules --- like 'draw spirals with rainbow colors' --- and the computer adds random variation so every result is different. Rules plus randomness equals unique art, every single time."

CN: "在第二部分，我们进入一种叫做生成艺术的东西。这是通过结合规则和随机性制作的艺术。你设定规则——比如'用彩虹色画螺旋'——计算机添加随机变化，所以每次结果都不同。规则加随机性等于独特的艺术，每一次都是。"

---

### [SLIDE 8 --- Famous Generative Art] *(0:11)*

EN: "Generative art is not just a school project --- it is everywhere in the real world! Music visualizers on Spotify and YouTube use generative algorithms to create visuals that react to music. Video games like Minecraft generate random worlds using rules plus randomness. And professional artists sell generative art pieces for thousands of dollars --- each one is unique because of the random elements."

CN: "生成艺术不只是学校项目——它在现实世界中无处不在！Spotify 和 YouTube 上的音乐可视化器使用生成算法创建对音乐做出反应的视觉效果。像 Minecraft 这样的视频游戏使用规则加随机性生成随机世界。专业艺术家以数千美元的价格出售生成艺术品——每件都因为随机元素而独一无二。"

EN: "Today YOU become a generative artist."

CN: "今天你成为一个生成艺术家。"

---

### [SLIDE 9 --- Part 2 Art Styles] *(0:11)*

EN: "In Part 2, you will have four art styles to choose from. Spiral Patterns --- colorful spirals growing from the center. Geometric Tiles --- repeating shapes creating mesmerizing patterns. Nature Simulation --- a growing tree with branches and leaves. And Abstract Painter --- random brush strokes creating a painting in real time."

CN: "在第二部分，你将有四种艺术风格可供选择。螺旋图案——从中心生长的彩色螺旋。几何瓷砖——重复形状创造引人入胜的图案。自然模拟——一棵生长的树，有树枝和叶子。还有抽象画家——随机笔触实时创作一幅画。"

---

### [SLIDE 10 --- Making It Interactive] *(0:11)*

EN: "And once you have a working animation or art piece, you can make it INTERACTIVE. We have upgrade tips like mouse follower --- where elements chase your cursor --- click to create, color shifting, a music visualizer effect, gravity simulation, and speed controls. These are all on the lesson page for you to try."

CN: "一旦你有了一个工作的动画或艺术品，你可以让它变得可交互。我们有升级提示，比如鼠标跟随——元素追随你的光标——点击创建、颜色变换、音乐可视化效果、重力模拟和速度控制。这些都在课程页面上供你尝试。"

---

### [SLIDE 11 --- Your Mission] *(0:12)*

EN: "Here is your mission for today. Step 1: Create --- try at least 3 animation challenges in Part 1. Step 2: Customize --- make generative art in Part 2 and add interactivity. Step 3: Export --- download your best animation as an HTML file you can keep."

CN: "这是你今天的任务。第一步：创建——在第一部分尝试至少3个动画挑战。第二步：定制——在第二部分制作生成艺术并添加交互性。第三步：导出——下载你最好的动画作为 HTML 文件保存。"

EN: "You have 25 minutes for Part 1 and 25 minutes for Part 2. At the end, you will share your favorite animation with the class."

CN: "你有25分钟做第一部分和25分钟做第二部分。最后，你将与全班分享你最喜欢的动画。"

---

### [SLIDE 12 --- Let's Animate!] *(0:12)*

EN: "Open your laptops and go to Lesson 6. Start with the Easy animation challenges --- Rainbow Wave or Particle Fountain. Click a challenge card, and it will load the prompt for you. Then just click Generate and watch the magic happen! Ready? Go!"

CN: "打开电脑，进入第六课。从简单的动画挑战开始——彩虹波浪或粒子喷泉。点击挑战卡片，它会为你加载提示。然后只需点击 Generate，看魔法发生！准备好了吗？开始！"

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

---

## Part 1: Animation Playground / 动画游乐场 (25 minutes / 分钟) *(0:12--0:37)*

### Hands-on: Animation Challenges (25 min)

EN: "Remember, start with the Easy challenges. Click a challenge card to load the prompt. If the animation does not look right, try clicking Generate again --- every result is different!"

CN: "记住，从简单挑战开始。点击挑战卡片来加载提示。如果动画看起来不对，试试再次点击 Generate——每次结果都不同！"

**[Walk around and observe / 走动观察]**

> **What to look for while walking around / 走动时注意什么:**
> - Are students clicking challenge cards to load prompts?
> - Are they getting results in the preview iframe?
> - Are they trying the "What to change?" input to iterate?
> - Are any students stuck on an error?
>
> 学生是否在点击挑战卡片加载提示？他们在预览 iframe 中得到结果了吗？他们在尝试"What to change?"输入来迭代吗？有没有学生卡在错误上？

**[After 5 minutes / 5 分钟后]**

EN: "If you have finished your first animation, great! Now try a second one. And here is a pro tip: after you generate an animation, use the 'What to change?' box to customize it. For example, 'Make the colors neon' or 'Make it faster' or 'Add a dark background.' This is how you make it YOUR animation."

CN: "如果你完成了第一个动画，太好了！现在尝试第二个。这里有一个专业提示：生成动画后，使用'What to change?'框来定制它。例如，'让颜色变成霓虹色'或'让它更快'或'添加一个深色背景'。这就是你如何让它成为你的动画。"

**[After 15 minutes / 15 分钟后]**

EN: "You should be on your second or third animation by now. If you have finished three --- awesome! Try one of the Hard challenges: Matrix Rain or Fireworks. The Fireworks one is interactive --- you click to launch them!"

CN: "你现在应该在做第二个或第三个动画了。如果你完成了三个——太棒了！试试困难挑战之一：黑客帝国字符雨或烟花。烟花那个是可交互的——你点击来发射！"

> **Contingency / 应对方案:**
> EN: If a student's animation does not work (blank preview or error): "That happens sometimes. Try clicking Generate again --- AI gives a different result each time. If it still does not work, try a different challenge and come back to this one later."
> CN: 如果学生的动画不工作（空白预览或错误）："这有时会发生。试试再次点击 Generate——AI 每次给出不同的结果。如果仍然不工作，试试不同的挑战，稍后再回来做这个。"

> **Contingency / 应对方案:**
> EN: If the API is slow: "While waiting, read the tips box below the playground. It has great advice on motion words you can use. Also, try using the 'What to change?' box on an animation you already have --- modifications are usually faster than new generations."
> CN: 如果 API 很慢："等待的时候，阅读游乐场下面的提示框。它有关于你可以使用的运动词的好建议。也试试对你已有的动画使用'What to change?'框——修改通常比新生成快。"

> **Contingency / 应对方案:**
> EN: If a student finishes all 6 challenges quickly: "Impressive! Now try writing your OWN prompt from scratch --- describe any animation you can imagine. A galaxy spinning? Snowflakes falling? Bubbles floating? The playground works with any description, not just the challenge cards."
> CN: 如果学生快速完成了所有6个挑战："太厉害了！现在尝试从头写你自己的提示——描述你能想象的任何动画。一个旋转的银河？飘落的雪花？漂浮的气泡？游乐场适用于任何描述，不仅仅是挑战卡片。"

---

## Part 2: Generative Art Gallery / 生成艺术画廊 (15 minutes / 分钟) *(0:37--0:52)*

EN: "Great work on the animations! Now scroll down to Part 2: Generative Art Gallery. Remember, generative art is art made by rules plus randomness. You will see four art style cards. Click one to load its prompt, then Generate it in the second playground."

CN: "动画做得很好！现在向下滚动到第二部分：生成艺术画廊。记住，生成艺术是由规则加随机性制作的艺术。你会看到四个艺术风格卡片。点击一个来加载提示，然后在第二个游乐场中 Generate 它。"

EN: "After you generate your art, try the upgrade tips in the 'Make It Interactive' section below. Click any tip card and it will load an upgrade idea into the 'What to change?' box. This is how you add mouse interaction, click effects, or other cool features to your art."

CN: "生成你的艺术后，试试下面'Make It Interactive'部分的升级提示。点击任何提示卡片，它会将升级想法加载到'What to change?'框中。这就是你如何给你的艺术添加鼠标交互、点击效果或其他酷功能。"

**[Give students 12-13 minutes / 给学生 12-13 分钟]**

**[Walk around and observe / 走动观察]**

> **What to look for while walking around / 走动时注意什么:**
> - Are students trying different art styles?
> - Are they using the upgrade tips to add interactivity?
> - Are they excited about the visual results?
>
> 学生是否在尝试不同的艺术风格？他们在使用升级提示添加交互性吗？他们对视觉结果感到兴奋吗？

EN: "Five minutes left for Part 2. If you haven't tried an interactive upgrade yet, now is a great time! Click one of the tip cards in the 'Make It Interactive' section."

CN: "第二部分还剩5分钟。如果你还没有尝试交互式升级，现在是好时机！点击'Make It Interactive'部分中的一个提示卡片。"

EN: "Also, make sure to download your favorite animation! Scroll to the bottom and click the 'Download My Animation' button. This saves it as an HTML file you can open in any browser."

CN: "也确保下载你最喜欢的动画！滚动到底部，点击'Download My Animation'按钮。这会将它保存为 HTML 文件，你可以在任何浏览器中打开。"

---

## Share & Exhibition / 分享与展览 (8 minutes / 分钟) *(0:52--1:00)*

EN: "Time for our student art exhibition! Who wants to show their favorite animation to the class? Come up and tell us: what animation did you make, and what makes it cool?"

CN: "是时候进行我们的学生艺术展了！谁想给全班展示他们最喜欢的动画？上来告诉我们：你做了什么动画，是什么让它酷？"

**[Each student gets 2-3 minutes / 每个学生 2-3 分钟]**

**For each presenter / 对每个展示者：**

1. Ask them to show their animation in the preview panel (or open the downloaded HTML file in full screen).
   让他们在预览面板中展示动画（或全屏打开下载的 HTML 文件）。

2. Ask one question:
   - "What words did you use in your description to get this effect?" / "你在描述中用了什么词来得到这个效果？"
   - "What did you change from the original to make it your own?" / "你从原始版本改了什么来让它成为你自己的？"
   - "If you could add one more feature, what would it be?" / "如果你能再添加一个功能，会是什么？"

3. Lead applause after each presentation / 每次展示后带头鼓掌

> **Contingency / 应对方案:**
> EN: If a student is shy: "That's fine! Just show us the animation running --- the art speaks for itself. You do not have to say anything if you do not want to."
> CN: 如果学生害羞："没关系！就给我们看动画运行——艺术会说话。如果你不想说话，不必说任何东西。"

> **Contingency / 应对方案:**
> EN: If time is short: Have students show their animations to the person sitting next to them (pair share) instead of presenting to the whole class. Give 2 minutes for pair sharing. Then ask: "Who saw something amazing? Tell us what your partner made!"
> CN: 如果时间不够：让学生向旁边坐的人展示他们的动画（配对分享）而不是向全班展示。给2分钟配对分享。然后问："谁看到了很棒的东西？告诉我们你的搭档做了什么！"

EN: "Amazing work today! You created animations from nothing but words. Think about that --- you described something you imagined, and AI turned it into real, moving, visual art that you can keep and share. That is the power of AI as a creative tool."

CN: "今天做得太棒了！你们从纯文字创造了动画。想想这个——你描述了你想象的东西，AI 把它变成了真实的、会动的视觉艺术，你可以保存和分享。这就是 AI 作为创意工具的力量。"

EN: "Make sure you have downloaded your favorite animation. See you next time!"

CN: "确保你下载了你最喜欢的动画。下次见！"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00--0:02 | Welcome | Slide 1 --- Title & framing |
| 0:02--0:04 | Animation basics | Slide 2 --- What is animation? (flipbook analogy) |
| 0:04--0:06 | Approaches | Slide 3 --- CSS vs Canvas (simplified) |
| 0:06--0:08 | Vocabulary | Slide 4 --- Motion words: bounce, spin, fade, pulse, orbit, morph |
| 0:08--0:09 | Uniqueness | Slide 5 --- Same description, different results |
| 0:09--0:10 | Preview | Slide 6 --- 6 animation challenges overview |
| 0:10--0:11 | Generative Art | Slide 7 --- Rules + Randomness = Unique Art |
| 0:11--0:12 | Examples | Slides 8-10 --- Famous examples, art styles, interactive tips |
| 0:12 | Launch | Slides 11-12 --- Mission overview, students open laptops |
| 0:12--0:37 | Part 1 | Animation Playground --- 6 challenges (easy to hard) |
| 0:37--0:52 | Part 2 | Generative Art Gallery + Interactive upgrades |
| 0:52--1:00 | Share | Student art exhibition + download animations |

---

## Contingency Plans / 应急方案

### If students are very fast / 如果学生速度很快
- Encourage them to write original prompts from scratch (not using the challenge cards)
- Suggest combining two concepts: "What if the starfield had fireworks in it?"
- Challenge them to make something interactive that responds to BOTH mouse AND keyboard
- Let them help slower students by suggesting motion words

### If students are slow / 如果学生速度慢
- Have them focus on just 2 animations in Part 1 instead of 3
- Skip the generative art section and let them spend more time on Part 1 animations
- Use pair work: one student describes, the other types
- Pre-select the "Particle Fountain" (easiest visual result) and have everyone start with that

### If API is slow or down / 如果 API 慢或宕机
- Have students iterate on existing generations using "What to change?" (faster than new generations)
- Reduce the number of required animations from 3 to 1
- Use the lesson as a vocabulary and concept lesson --- focus on the slides and discussion about animation and generative art
- Students can write their descriptions on paper and try generating after class

### If animations do not render in the preview / 如果动画不在预览中渲染
- Try clicking Generate again --- the AI produces different code each time
- Check if the iframe preview area is visible (not collapsed)
- Try a simpler prompt: "A red circle that bounces around the screen on a black background"
- If all else fails, switch to Part 2 and try generative art prompts instead
