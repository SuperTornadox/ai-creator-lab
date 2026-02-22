# Lesson 4: AI Picture Book — Teacher Script
# 第四课：AI 绘本 — 教师逐字稿

**Duration / 时长**: 43–45 minutes / 分钟
**Materials / 材料**: Slides (`slides.html`), Interactive webpage (`index.html`), Student laptops
**Goal / 目标**: Students combine text AI and image AI to create an illustrated picture book, learning how text and images work together to tell a story.
**目标**: 学生将文字 AI 和图片 AI 结合，创建一本有插画的绘本，学习文字和图片如何共同讲述一个故事。

---

## Pre-Class Preparation / 课前准备

> **Important / 重要:**
> - Test the lesson page: make sure /api/chat and /api/image endpoints are working.
> - Optionally bring a real children's picture book to show during the warm-up, or have a few examples in mind (e.g., *Where the Wild Things Are*, *The Giving Tree*).
> - Be prepared for image generation to take 10-15 seconds per image. Plan activities for wait times.
>
> - 测试课程页面：确保 /api/chat 和 /api/image 接口正常工作。
> - 可以带一本真正的儿童绘本在热身时展示，或者心里准备几个例子（如《野兽国》、《爱心树》）。
> - 准备好图片生成可能需要 10-15 秒。为等待时间规划活动。

---

## Warm-up / 概念热身 (8 minutes / 分钟)

### [SLIDE 1 — Title] *(0:00)*

EN: "Welcome back! Last week you became AI Artists — you learned to make AI create pictures from words. And before that, you used AI to write stories. Today we're going to combine BOTH of those skills. Today we're making AI picture books."

CN: "欢迎回来！上周你们成为了 AI 艺术家——你们学会了用文字让 AI 创造图片。在那之前，你们用 AI 写了故事。今天我们要把这两项技能结合起来。今天我们要制作 AI 绘本。"

---

### [SLIDE 2 — What Makes a Picture Book?] *(0:01)*

**[If you have a physical picture book, hold it up and flip through it / 如果你有一本实体绘本，举起来翻一翻]**

EN: "Before we start, let's think about what makes a picture book. It's not just pictures, and it's not just text. A picture book has a cover with the title and author, then pages that each have text AND a picture, and it ends with a closing page."

CN: "在我们开始之前，想想什么是绘本。它不只是图片，也不只是文字。绘本有一个封面，上面有标题和作者名，然后每一页都有文字和图片，最后有一个结束页。"

EN: "The key thing is that the words and pictures work TOGETHER. The picture shows what the words describe. They match in mood, in feeling, in energy. If the story is exciting, the pictures should be exciting too."

CN: "关键是文字和图片要协同工作。图片展示文字所描述的内容。它们在氛围、感觉和能量上是匹配的。如果故事是激动人心的，图片也应该是激动人心的。"

---

### [SLIDE 3 — The Workflow] *(0:03)*

EN: "Here's our plan for today. Four steps. Step 1: Write a story — you can write your own or let AI help you. Step 2: Split it into pages — AI will help you figure out where to break the story. Step 3: Add pictures — for each page, you'll write an image prompt and generate an illustration. Step 4: Preview and share — see your whole book put together and download it!"

CN: "这是我们今天的计划。四个步骤。第一步：写一个故事——你可以自己写，也可以让 AI 帮你。第二步：分成页面——AI 会帮你确定在哪里分割故事。第三步：添加图片——为每一页写图片提示词并生成插画。第四步：预览和分享——看看你的整本书组合在一起，然后下载它！"

---

### [SLIDE 4 — Key Tip] *(0:04)*

EN: "Before we start, there's one really important tip. When you write your image prompts, they need to match the MOOD of your story. If your story is about a big adventure, your images should feel adventurous — exciting, colorful, dynamic. If your story is calm and peaceful, your images should be soft and gentle."

CN: "在我们开始之前，有一个非常重要的提示。当你写图片提示词时，它们需要匹配你故事的氛围。如果你的故事是关于一次大冒险，你的图片应该感觉像冒险——刺激的、色彩丰富的、充满动感的。如果你的故事是平静安宁的，你的图片应该是柔和温和的。"

---

### [SLIDE 5 — Good Match] *(0:05)*

EN: "Look at this example. The story says 'The brave knight charged into the dragon's cave, sword gleaming in the firelight.' So the image prompt asks for something exciting and dramatic — a knight with a glowing sword, fire, an epic adventure scene. The mood matches perfectly."

CN: "看这个例子。故事说'勇敢的骑士冲进了龙穴，剑在火光中闪闪发光。'所以图片提示词要求一些激动人心和戏剧性的东西——一个拿着发光剑的骑士、火焰、一个史诗般的冒险场景。氛围完美匹配。"

---

### [SLIDE 6 — Bad Match] *(0:06)*

EN: "Now look at what happens when the mood doesn't match. The story is funny — a cat knocking over plants and pretending nothing happened. But the image came out scary and dark! That feels totally wrong, right? A funny story needs funny, light-hearted images."

CN: "现在看看当氛围不匹配时会发生什么。故事是搞笑的——一只猫打翻了所有植物然后假装什么都没发生。但是图片生成出来却是恐怖和黑暗的！感觉完全不对，对吧？搞笑的故事需要搞笑的、轻松的图片。"

EN: "So when you write image prompts later, ask yourself: does this prompt match the feeling of my story?"

CN: "所以当你稍后写图片提示词时，问自己：这个提示词和我故事的感觉匹配吗？"

---

### [SLIDE 7 — Today's Mission] *(0:07)*

EN: "Your mission: create your own AI-powered picture book. Write or generate a story, split it into 4 to 6 pages, generate an illustration for each page, and add a title. At the end you'll be able to preview your whole book and download it!"

CN: "你的任务：创建你自己的 AI 绘本。写或生成一个故事，分成 4 到 6 页，为每一页生成一张插画，然后加一个标题。最后你可以预览你的整本书并下载它！"

---

### [SLIDE 8 — Let's Go!] *(0:08)*

EN: "Alright, open your laptops and go to the Lesson 4 page!"

CN: "好了，打开电脑，进入第四课的页面！"

---

## Hands-on Project / 动手项目 (30 minutes / 分钟)

### Phase 1: Story Writing & Generation (8 min) *(0:08–0:16)*

**[Switch from slides to monitoring student screens / 从幻灯片切换到巡视学生屏幕]**

EN: "You should see Step 1: Write Your Story. You have two options. You can write your own story in the text box — just start typing! Or if you want help, click the 'Generate a story with AI' button. It'll ask you what your story is about and what genre you want — like fantasy, adventure, or funny — and AI will write one for you."

CN: "你应该看到第一步：写你的故事。你有两个选择。你可以在文本框里写你自己的故事——直接开始打字！或者如果你想要帮助，点击'用 AI 生成故事'按钮。它会问你故事是关于什么的和你想要什么类型——比如奇幻、冒险或搞笑——然后 AI 会为你写一个。"

EN: "Either way, you can edit the story after. Aim for about 150 to 250 words — that's a good length for a picture book with 4 to 6 pages."

CN: "不管哪种方式，你之后都可以编辑故事。目标大约 150 到 250 个词——对于一本 4 到 6 页的绘本来说，这是一个好长度。"

**[Give students 8 minutes / 给学生 8 分钟]**

> **Walk around and help with story ideas / 走动并帮助故事创意:**
> EN: "What kind of story do you like? Do you like adventures? Funny stories? Mystery? Think about your favorite books or movies — what kind of world would you want to create?"
> CN: "你喜欢什么类型的故事？你喜欢冒险的？搞笑的？神秘的？想想你最喜欢的书或电影——你想创造什么样的世界？"

> **Contingency / 应对方案:**
> EN: If a student generates a story that's too long: "That's a great story, but it might be too long for a picture book. Can you pick the best parts? Try keeping it under 250 words — shorter stories work better with illustrations."
> CN: 如果学生生成的故事太长："这是个很好的故事，但对绘本来说可能太长了。你能挑出最好的部分吗？试着保持在 250 个词以内——较短的故事配插画效果更好。"

> **Contingency / 应对方案:**
> EN: If a student's story is too short (less than 4 sentences): "This is a good start! Can you add more details? What happens next? Where does this take place? Adding a few more sentences will give us enough for 4 pages."
> CN: 如果学生的故事太短（少于 4 句话）："这是个好的开始！你能加更多细节吗？接下来发生了什么？这发生在哪里？再加几句话就够我们做 4 页了。"

---

### Phase 2: Page Splitting (5 min) *(0:16–0:21)*

EN: "Great, now click 'Next: Split into Pages.' AI will automatically split your story into separate pages. Each page should have one or two sentences — just enough for one illustration."

CN: "很好，现在点击'下一步：分成页面'。AI 会自动把你的故事分成独立的页面。每页应该有一两句话——刚好配一张插画。"

EN: "Look at how it split your story. Does each page feel like its own moment or scene? You can edit the text on any page, move pages up or down, add new pages, or remove pages that don't work."

CN: "看看它是怎么分割你的故事的。每一页是否感觉像是它自己的一个时刻或场景？你可以编辑任何一页的文字，上移或下移页面，添加新页面，或删除不合适的页面。"

**[Give students 5 minutes / 给学生 5 分钟]**

> **Walk around and check splits / 走动并检查分割:**
> EN: Look for pages that are too long (3+ sentences) or too short (just a few words). Help students rebalance: "This page has a lot of text — maybe split it into two pages? And this one is very short — could you merge it with the one before it?"
> CN: 注意页面太长（3 句以上）或太短（只有几个词）。帮助学生重新平衡："这一页文字太多了——也许把它分成两页？而这一页太短了——能把它和前一页合并吗？"

---

### Phase 3: Illustration (12 min) *(0:21–0:33)*

EN: "This is the fun part! Click 'Next: Add Illustrations.' You'll see each page with its text on the left and an image area on the right. AI has already suggested an image prompt for each page based on your text."

CN: "这是最有趣的部分！点击'下一步：添加插画'。你会看到每一页，左边是文字，右边是图片区域。AI 已经根据你的文字为每一页建议了一个图片提示词。"

EN: "Look at the suggested prompt — does it match your page? You can edit it if you want. Then pick a style — I recommend 'Cartoon / Anime' or 'Watercolor' for picture books, they look great. Then click 'Generate'!"

CN: "看看建议的提示词——它和你的页面匹配吗？如果你想的话可以编辑它。然后选一个风格——我推荐'卡通/动漫'或'水彩'用于绘本，它们看起来很棒。然后点击'生成'！"

EN: "While your first image is generating, look at the next page's prompt and get it ready. That way you can keep working while waiting."

CN: "当你的第一张图片正在生成时，看看下一页的提示词并准备好。这样你可以在等待的时候继续工作。"

**[Give students 12 minutes — this is the longest phase / 给学生 12 分钟——这是最长的阶段]**

> **Important: Help manage wait times / 重要：帮助管理等待时间:**
> EN: Image generation takes 10-15 seconds. While waiting: "Great, your image is generating! While we wait, go ahead and check the next page's prompt. Does it match the mood of your story?"
> CN: 图片生成需要 10-15 秒。等待时："很好，你的图片正在生成！在我们等待的时候，继续检查下一页的提示词。它和你故事的氛围匹配吗？"

> **Contingency / 应对方案:**
> EN: If an image doesn't match the text: "Hmm, that picture doesn't quite match your story. What's different? Let's think about what words we could add to the prompt. Remember, tell AI the mood, the colors, and the action."
> CN: 如果图片和文字不匹配："嗯，那张图片和你的故事不太匹配。有什么不同？让我们想想可以在提示词中加什么词。记住，告诉 AI 氛围、颜色和动作。"

> **Contingency / 应对方案:**
> EN: If a student wants to redo everything (story, pages, images): "I understand you want it perfect, but let's focus on making the parts that need work better. You don't have to start over — just fix the pages or images that don't feel right. That's what real authors do too!"
> CN: 如果学生想全部重做（故事、页面、图片）："我理解你想要完美，但让我们专注于改进需要改进的部分。你不必从头开始——只需修复感觉不对的页面或图片。真正的作者也是这样做的！"

> **Contingency / 应对方案:**
> EN: If image generation fails or is slow: "Sometimes the AI image service gets busy. If it fails, just try again in a moment. You can also work on other pages while waiting."
> CN: 如果图片生成失败或很慢："有时候 AI 图片服务会很忙。如果失败了，等一会儿再试。你也可以在等待的时候做其他页面。"

---

### Phase 4: Preview & Title (5 min) *(0:33–0:38)*

EN: "Almost done! Click 'Next: Preview' to see your whole picture book. The first thing you'll see is the cover — type in a title for your book and your name as the author."

CN: "快完成了！点击'下一步：预览'来看你的整本绘本。你首先会看到封面——为你的书输入一个标题和你作为作者的名字。"

EN: "Then click 'Next' to flip through your pages. How does it look? If anything feels off, you can go back and fix it."

CN: "然后点击'下一步'翻阅你的页面。看起来怎么样？如果有什么感觉不对的，你可以返回去修改。"

EN: "When you're happy with it, click the download button to save your picture book as an HTML file. You can open it in any browser and even share it with your family!"

CN: "当你满意了，点击下载按钮把你的绘本保存为 HTML 文件。你可以在任何浏览器中打开它，甚至可以和家人分享！"

**[Give students 5 minutes / 给学生 5 分钟]**

---

## Show & Share / 展示分享 (5 minutes / 分钟) *(0:38–0:43)*

EN: "Time to share! Who wants to 'read' their picture book to us? You can flip through the preview and tell us your story."

CN: "分享时间到！谁想给我们'读'一下他们的绘本？你可以翻阅预览页面并给我们讲你的故事。"

**[Wait for a volunteer / 等待志愿者]**

EN: "Go ahead — flip through your book page by page. Read us the text and show us the pictures."

CN: "开始吧——一页一页翻你的书。给我们读文字并展示图片。"

**[Student 1 presents / 学生 1 展示]**

EN: "Great story! I love how the pictures match the mood. Now let's hear the other one!"

CN: "很棒的故事！我喜欢图片和氛围的匹配。现在让我们听另一个！"

**[Student 2 presents / 学生 2 展示]**

EN: "Awesome work! Both of you created real picture books using AI. Let me ask you: what was the hardest part? Writing the story, splitting pages, or getting the images right?"

CN: "做得太好了！你们俩都用 AI 创造了真正的绘本。让我问你们：最难的部分是什么？写故事、分页面，还是让图片正确？"

**[Wait for responses / 等待回答]**

EN: "Right — getting the images to match the story is actually the creative challenge. That's where YOUR ideas matter most."

CN: "没错——让图片和故事匹配其实是创造性的挑战。这就是你的想法最重要的地方。"

---

## Wrap-up / 课程总结 (2 minutes / 分钟) *(0:43–0:45)*

EN: "Today you combined two AI skills — text generation and image generation — to create something bigger: a picture book. You learned that the text and images need to work together, and that matching the mood is really important."

CN: "今天你们结合了两项 AI 技能——文字生成和图片生成——来创造更大的东西：一本绘本。你们学到了文字和图片需要协同工作，而且匹配氛围真的很重要。"

EN: "This is what real creative work with AI looks like — you're not just pressing buttons. You're directing the AI, making choices about what fits and what doesn't, and putting the pieces together into something that tells a story."

CN: "这就是用 AI 进行真正的创意工作的样子——你不只是按按钮。你在指导 AI，做出什么合适什么不合适的选择，把各个部分组合成一个讲述故事的作品。"

EN: "Next week, we're going to try something completely different — AI and music! See you then."

CN: "下周我们要尝试完全不同的东西——AI 和音乐！下次见。"

---

## Quick Reference / 快速参考

| Time / 时间 | Section / 环节 | Activity / 活动 |
|---|---|---|
| 0:00–0:01 | Welcome | Slide 1 — Title & introduction |
| 0:01–0:03 | Picture Book Structure | Slide 2 — Cover, pages, ending |
| 0:03–0:04 | Workflow | Slide 3 — Four-step process |
| 0:04–0:06 | Mood Matching | Slides 4–5 — Good match example |
| 0:06–0:07 | Bad Match | Slide 6 — Mismatched mood example |
| 0:07–0:08 | Mission | Slides 7–8 — Today's task & launch |
| 0:08–0:16 | Story Writing | Step 1: Write or generate story (8 min) |
| 0:16–0:21 | Page Splitting | Step 2: Split into pages (5 min) |
| 0:21–0:33 | Illustration | Step 3: Generate images (12 min) |
| 0:33–0:38 | Preview & Title | Step 4: Preview, title, download (5 min) |
| 0:38–0:43 | Share | Students read each other's books |
| 0:43–0:45 | Wrap-up | Recap key ideas, preview next lesson |
