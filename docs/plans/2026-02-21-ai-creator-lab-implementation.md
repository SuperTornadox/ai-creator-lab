# AI Creator Lab - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 12-lesson interactive AI teaching platform with slides and bilingual teacher scripts, deployed on Vercel.

**Architecture:** Static HTML/CSS/JS site with Vercel serverless functions as API proxy. Each lesson is a standalone page that shares common components (chat widget, image generator, task cards). Teacher scripts are Markdown files in the repo (not deployed). Slides use Reveal.js.

**Tech Stack:** Vanilla HTML/CSS/JS, Vercel serverless functions (Node.js), Anthropic Claude API (text/code), OpenAI DALL-E 3 API (images), Suno (music, external link), Reveal.js (slides).

**API Choices:**
- Text/Code AI: Anthropic Claude API (claude-sonnet-4-20250514)
- Image AI: OpenAI DALL-E 3 API
- Music AI: Suno (external link — no stable API, students use Suno website directly)

---

## Phase 1: Project Infrastructure

### Task 1: Initialize project and Vercel config

**Files:**
- Create: `package.json`
- Create: `vercel.json`
- Create: `.gitignore`
- Create: `.vercelignore`
- Create: `.env.example`

**Steps:**

1. Create `package.json` with project metadata and dependencies:
   - `@anthropic-ai/sdk` for Claude API
   - `openai` for DALL-E API
   - No frontend framework needed

2. Create `vercel.json`:
   ```json
   {
     "buildCommand": "",
     "outputDirectory": "public",
     "functions": {
       "api/*.js": {
         "memory": 256,
         "maxDuration": 30
       }
     },
     "headers": [
       {
         "source": "/api/(.*)",
         "headers": [
           { "key": "Access-Control-Allow-Origin", "value": "*" },
           { "key": "Access-Control-Allow-Methods", "value": "POST, OPTIONS" },
           { "key": "Access-Control-Allow-Headers", "value": "Content-Type" }
         ]
       }
     ]
   }
   ```

3. Create `.gitignore` (node_modules, .env, .vercel)

4. Create `.vercelignore` (scripts/, docs/)

5. Create `.env.example` with required keys:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   OPENAI_API_KEY=sk-...
   ```

6. Run `npm install`

7. Commit: "chore: initialize project with Vercel config"

---

### Task 2: Build API proxy — Chat endpoint

**Files:**
- Create: `api/chat.js`

**Steps:**

1. Create `api/chat.js` — Vercel serverless function that:
   - Accepts POST with `{ messages: [...], system?: string }`
   - Forwards to Anthropic Claude API (claude-sonnet-4-20250514)
   - Returns `{ response: string }`
   - Handles errors gracefully (returns user-friendly error messages)
   - Simple rate limiting: max 30 requests per minute per IP (in-memory, resets on cold start — good enough for 2 students)

2. Test locally with `vercel dev`

3. Commit: "feat: add chat API proxy for Claude"

---

### Task 3: Build API proxy — Image endpoint

**Files:**
- Create: `api/image.js`

**Steps:**

1. Create `api/image.js` — Vercel serverless function that:
   - Accepts POST with `{ prompt: string, size?: string, style?: string }`
   - Forwards to OpenAI DALL-E 3 API
   - Returns `{ url: string }` (the generated image URL)
   - Size defaults to "1024x1024"
   - Style can be "natural" or "vivid"
   - Rate limit: max 10 requests per minute per IP

2. Test locally with `vercel dev`

3. Commit: "feat: add image generation API proxy for DALL-E 3"

---

### Task 4: Build API proxy — Code endpoint

**Files:**
- Create: `api/code.js`

**Steps:**

1. Create `api/code.js` — Vercel serverless function that:
   - Accepts POST with `{ prompt: string, currentCode?: string }`
   - Uses Claude with a system prompt optimized for generating safe, runnable HTML/CSS/JS code
   - System prompt: "You are a coding assistant for kids. Generate complete, runnable HTML pages with inline CSS and JS. Keep code simple and fun. Always include visual output. Never use external dependencies. Return ONLY the HTML code, no explanations."
   - Returns `{ code: string }` (complete HTML that can be rendered in an iframe)
   - Rate limit: max 20 requests per minute

2. Test locally

3. Commit: "feat: add code generation API proxy"

---

## Phase 2: Shared Design System & Components

### Task 5: Create shared CSS design system

**Files:**
- Create: `public/shared/styles.css`

**Steps:**

1. Create a design system CSS file with:
   - CSS variables for colors (bright, fun palette suitable for middle schoolers — not childish)
   - Base typography (system fonts, good readability)
   - Layout utilities (flex, grid helpers)
   - Card component styles
   - Button styles (primary, secondary, icon buttons)
   - Form input styles
   - Chat bubble styles (user vs AI)
   - Task card sidebar styles
   - Loading/spinner animations
   - Responsive breakpoints
   - Dark header bar with lesson title

2. Design aesthetic: Clean, modern, bright colors (blues, purples, teals), rounded corners, subtle shadows. Think "Notion for kids" — not Google Classroom, not Sesame Street.

3. Commit: "feat: add shared CSS design system"

---

### Task 6: Create shared JS components library

**Files:**
- Create: `public/shared/components.js`

**Steps:**

1. Build reusable JS components (vanilla JS, no framework):

   **ChatWidget**: Reusable chat interface
   - `createChatWidget(container, { systemPrompt, placeholder, onMessage })`
   - Renders: message list + input box + send button
   - Handles: sending to /api/chat, displaying responses, loading state
   - Supports: character avatars, custom system prompts
   - Auto-scroll to latest message

   **ImageGenerator**: Image generation interface
   - `createImageGenerator(container, { onGenerate, styles })`
   - Renders: prompt input + style selector + generate button + image display
   - Handles: sending to /api/image, displaying result, loading state
   - Supports: style presets (realistic, cartoon, watercolor, pixel, etc.)

   **TaskCards**: Sidebar task guidance
   - `createTaskCards(container, tasks[])`
   - Each task: title, description, checkbox
   - Tracks completion progress
   - Visual progress bar at top

   **ExportButton**: Save/export functionality
   - `createExportButton(container, { getData, filename, format })`
   - Supports: text export, image download, HTML export

   **CodePlayground**: Code editor + preview (for lessons 7-8)
   - `createCodePlayground(container, { onRun })`
   - Left panel: natural language input + "Generate" button
   - Right panel: iframe preview of generated code
   - "Modify" input for iterating on code

   **Gallery**: Image gallery display
   - `createGallery(container)`
   - Grid layout, click to enlarge, add/remove images
   - Caption support

2. Each component is a function that takes a container element and config object. No classes, no state management — keep it dead simple.

3. Commit: "feat: add shared JS component library"

---

### Task 7: Create course homepage

**Files:**
- Create: `public/index.html`

**Steps:**

1. Build the course homepage:
   - Course title: "AI Creator Lab"
   - 12 lesson cards in a grid (3x4 or responsive)
   - Each card: lesson number, title, icon/emoji, brief description
   - Click → goes to `/lesson-XX/`
   - Locked/unlocked visual state (all unlocked by default, but teacher can lock future lessons if desired via URL param)
   - Footer with teacher info

2. Commit: "feat: add course homepage"

---

### Task 8: Download and setup Reveal.js

**Files:**
- Create: `public/shared/reveal/` (Reveal.js library files)
- Create: `public/shared/slides-base.css` (custom slide theme)

**Steps:**

1. Download Reveal.js dist files (reveal.js, reveal.css) into `public/shared/reveal/`

2. Create custom slide theme `slides-base.css`:
   - Matches the course design aesthetic
   - Large readable fonts
   - Bright background colors
   - Image-heavy layout support
   - Centered content by default

3. Commit: "feat: add Reveal.js and custom slide theme"

---

## Phase 3: Lessons 1-3 (Text AI + Image AI Basics)

### Task 9: Lesson 1 — Interactive page: AI First Contact

**Files:**
- Create: `public/lesson-01/index.html`

**Page design:**

1. Header: "Lesson 1: AI First Contact" with fun subtitle

2. Main area split into two sections:
   - **Left: Role Selector** — Grid of 6 character cards students can pick from:
     - A talking cat / 一只会说话的猫
     - A person from the year 3000 / 来自 3000 年的人
     - A friendly alien / 一个友好的外星人
     - A famous chef who only cooks desserts / 一个只做甜品的名厨
     - A superhero on vacation / 一个在度假的超级英雄
     - A dinosaur who survived extinction / 一只躲过灭绝的恐龙
   - **Right: Chat Interface** — ChatWidget with the selected character's system prompt

3. After selecting a role, the system prompt is set to make AI respond as that character

4. Task cards sidebar:
   - [ ] Pick a character to interview
   - [ ] Ask at least 3 warm-up questions
   - [ ] Ask 5 deeper/funnier questions
   - [ ] Find the character's funniest answer
   - [ ] Export your interview

5. Bottom: "Export Interview" button — saves chat as a formatted text file

6. Commit: "feat: add Lesson 1 interactive page — AI First Contact"

---

### Task 10: Lesson 1 — Slides

**Files:**
- Create: `public/lesson-01/slides.html`

**Slides (10 slides for ~10 min warm-up):**

1. Title: "AI First Contact" + cool graphic
2. "What do you think AI is?" — discussion prompt
3. AI in your daily life — Siri, YouTube recommendations, Face ID (with images)
4. What AI is NOT — it's not a brain, not alive, not magic
5. What AI IS — pattern matching from tons of data (simple visual analogy)
6. Fun demo: "Let's ask AI something weird!" (teacher does live demo)
7. AI response — discuss: "How did it know that? Did it really 'know'?"
8. Today's mission: You're a REPORTER interviewing an AI character
9. Meet your characters (show the 6 options with fun descriptions)
10. Let's go! Open your laptops → [URL]

Commit: "feat: add Lesson 1 slides"

---

### Task 11: Lesson 1 — Teacher Script

**Files:**
- Create: `scripts/lesson-01-script.md`

**Structure:**

Full bilingual (EN/CN) script covering:
- Warm-up segment (10 min): Every sentence in EN then CN, with [SLIDE X] cues
- Transition to project: Instructions for opening laptops
- Project segment (25 min): Walking script with checkpoints, troubleshooting tips
- Share segment (5 min): How to facilitate the sharing
- Timing markers throughout
- Contingency notes: "If students finish early..." / "If students are stuck..."

Commit: "feat: add Lesson 1 teacher script"

---

### Task 12: Lesson 2 — Interactive page: AI Story Factory

**Files:**
- Create: `public/lesson-02/index.html`

**Page design:**

1. Header: "Lesson 2: AI Story Factory"

2. Three-step wizard layout:
   - **Step 1: Story Framework** — Form with:
     - Main character (text input + suggestion chips: "a brave robot", "a shy dragon", etc.)
     - Setting (dropdown: outer space, underwater kingdom, haunted school, future city, enchanted forest)
     - Conflict (dropdown: lost something important, must save a friend, discovers a secret, enters a competition)
     - Ending style (dropdown: happy, surprise twist, funny, mysterious)
   - **Step 2: AI Draft** — AI generates a ~300 word story based on the framework. Full story displayed in a nice reading pane.
   - **Step 3: Revision Studio** — Chat-like interface below the story:
     - Student types revision requests ("Make the ending funnier", "Add a talking sword")
     - AI rewrites the story with the changes
     - History of versions (can go back)

3. Task cards:
   - [ ] Fill in your story framework
   - [ ] Read the AI's first draft
   - [ ] Request at least 2 changes
   - [ ] Finalize your story
   - [ ] Export and save

4. Export button: saves as formatted text file with title and author name

5. Commit: "feat: add Lesson 2 interactive page — AI Story Factory"

---

### Task 13: Lesson 2 — Slides + Script

**Files:**
- Create: `public/lesson-02/slides.html`
- Create: `scripts/lesson-02-script.md`

**Slides (8 slides, ~8 min):**
1. Title: "AI Story Factory"
2. Review: Last week we interviewed AI characters. Today we WRITE with AI!
3. What's a prompt? — Your instructions to AI
4. Demo: Vague prompt vs specific prompt (side-by-side comparison)
5. The secret: Better prompt = Better story
6. Prompt tips for storytelling (who, where, what happens, how it ends)
7. Today's mission: Write your own creative short story
8. Let's go! → [URL]

**Script:** Full bilingual teacher script with all segments, timing, and contingency notes.

Commit: "feat: add Lesson 2 slides and script"

---

### Task 14: Lesson 3 — Interactive page: AI Artist

**Files:**
- Create: `public/lesson-03/index.html`

**Page design:**

1. Header: "Lesson 3: AI Artist"

2. Main area:
   - **Prompt Editor**: Large text input for image description
   - **Style Selector**: Visual grid of style options (each with a tiny example):
     - Realistic photo
     - Cartoon / anime
     - Watercolor painting
     - Pixel art
     - Oil painting
     - 3D render
   - **Generate Button**: Sends prompt + style to /api/image
   - **Result Area**: Shows generated image, large

3. **Gallery**: Below the generator — all images the student has generated this session
   - Grid of thumbnails
   - Click to enlarge
   - Add title/caption to each
   - Delete unwanted ones

4. **Challenge Mode** (tab or toggle):
   - Shows a target image (pre-loaded)
   - Student tries to write a prompt that generates something similar
   - Side-by-side comparison

5. Task cards:
   - [ ] Generate your first image — try anything!
   - [ ] Generate 2 more images in different styles
   - [ ] Try the Challenge: match the target image
   - [ ] Pick your best work and give it a title
   - [ ] Write a 1-sentence "artist statement"

6. Export: Download images + gallery view as HTML

Commit: "feat: add Lesson 3 interactive page — AI Artist"

---

### Task 15: Lesson 3 — Slides + Script

**Files:**
- Create: `public/lesson-03/slides.html`
- Create: `scripts/lesson-03-script.md`

**Slides (10 slides, ~8 min):**
1. Title: "AI Artist"
2. Guessing game: Which is AI? Which is human? (4 images, 2 of each)
3. Reveal answers — discuss what surprised them
4. How does AI make images? — Same idea as text: you describe, AI creates
5. The power of details (vague prompt → meh image, specific prompt → amazing image)
6. Demo: "a cat" vs "a fluffy orange cat wearing a top hat, watercolor style"
7. Style matters — show same prompt in different styles
8. Today's mission: Create your own AI art exhibition
9. Challenge preview: Can you recreate THIS image with just words?
10. Let's go! → [URL]

**Script:** Full bilingual script.

Commit: "feat: add Lesson 3 slides and script"

---

## Phase 4: Lessons 4-6 (Combining Tools)

### Task 16: Lesson 4 — Interactive page: AI Picture Book

**Files:**
- Create: `public/lesson-04/index.html`

**Page design:**

1. Header: "Lesson 4: AI Picture Book"

2. **Picture Book Editor** — Multi-step tool:
   - **Step 1: Story** — Text area + "Generate with AI" button. Student can write their own or use AI to generate/adapt. Can import from Lesson 2 if they saved it.
   - **Step 2: Pages** — AI auto-splits story into 4-6 pages. Student can adjust splits. Each page shows: page number, text excerpt, "Generate Illustration" button.
   - **Step 3: Illustrate** — For each page, a prompt editor pre-filled with a suggested prompt based on the text. Student can edit. Generate button per page. Shows text + image side by side.
   - **Step 4: Preview** — Full picture book preview with page-flip animation. Cover page with title/author.

3. Task cards:
   - [ ] Write or generate your story
   - [ ] Split into 4-6 pages
   - [ ] Generate an illustration for each page
   - [ ] Adjust any illustrations you don't like
   - [ ] Preview your picture book
   - [ ] Add a title and your name as author

4. Export: Download as a self-contained HTML file (viewable offline with page-flip)

Commit: "feat: add Lesson 4 interactive page — AI Picture Book"

---

### Task 17: Lesson 4 — Slides + Script

**Files:**
- Create: `public/lesson-04/slides.html`
- Create: `scripts/lesson-04-script.md`

**Slides (8 slides, ~8 min):**
1. Title: "AI Picture Book"
2. Show a real picture book — what makes it work? (text + pictures TOGETHER)
3. The workflow: Story → Pages → Illustrations
4. Key tip: Your prompt for images should match the story mood
5. Example: Story about a brave knight → image style should feel adventurous
6. Bad match example: Silly story + scary image = confusing
7. Today's mission: Create your own AI picture book
8. Let's go! → [URL]

**Script:** Full bilingual script.

Commit: "feat: add Lesson 4 slides and script"

---

### Task 18: Lesson 5 — Interactive page: AI Musician

**Files:**
- Create: `public/lesson-05/index.html`

**Page design:**

Since Suno doesn't have a stable API, this page is a **mission control + companion** that guides students through using Suno:

1. Header: "Lesson 5: AI Musician"

2. **Lyrics Workshop** (our page):
   - ChatWidget configured as a "lyrics assistant"
   - System prompt: "You help kids write fun song lyrics. Keep it clean and creative."
   - Student describes what they want the song about → AI helps write lyrics
   - Lyrics display area (editable)

3. **Music Style Explorer** (our page):
   - Visual grid of music genres with descriptions and example audio clips (embedded short clips)
   - Genres: Pop, Hip-hop, Rock, Classical, Jazz, Electronic, Country, Lo-fi
   - Click to hear a 10-second sample of each style

4. **Suno Launch Pad**:
   - Big button: "Open Suno Music Studio →" (links to suno.com)
   - Step-by-step instructions with screenshots:
     1. Click "Create"
     2. Paste your lyrics (or select "Instrumental")
     3. Choose your style
     4. Click "Generate"
     5. Listen and iterate!
   - Tip: Copy your lyrics from our page to paste into Suno

5. **Listening Party** (our page):
   - Area to paste Suno share links
   - Embedded player for sharing results

6. Task cards:
   - [ ] Choose a topic for your song
   - [ ] Write lyrics with AI help (or go instrumental)
   - [ ] Pick a music style
   - [ ] Open Suno and create your song
   - [ ] Try at least 2 different styles
   - [ ] Pick your favorite as your "hit single"

Commit: "feat: add Lesson 5 interactive page — AI Musician"

---

### Task 19: Lesson 5 — Slides + Script

**Files:**
- Create: `public/lesson-05/slides.html`
- Create: `scripts/lesson-05-script.md`

**Slides (8 slides, ~8 min):**
1. Title: "AI Musician"
2. Guessing game: Real musician or AI? (play 3 clips, 1-2 are AI-generated)
3. Reveal answers — AI music is getting REALLY good
4. How AI music works: describe genre + mood + lyrics → AI creates a full song
5. Style showcase: Same lyrics, different genres (play short clips)
6. Today's tools: Our lyrics helper + Suno for music generation
7. Today's mission: Create your own hit song
8. Let's go! → [URL]

**Script:** Full bilingual script. Include instructions for playing audio clips and managing Suno access.

Commit: "feat: add Lesson 5 slides and script"

---

### Task 20: Lesson 6 — Interactive page: AI Director

**Files:**
- Create: `public/lesson-06/index.html`

**Page design:**

1. Header: "Lesson 6: AI Director"

2. **Film Timeline Editor**:
   - Horizontal timeline with 4-6 "scene" slots
   - Each scene has:
     - Scene title (editable)
     - Narration/text (editable, can use AI to generate)
     - Image (generate with /api/image or upload)
     - Duration slider (3-8 seconds per scene)
   - Add/remove scene buttons

3. **Soundtrack Panel**:
   - Option A: Select from pre-loaded royalty-free background music (5-6 choices)
   - Option B: Link to a Suno creation from Lesson 5
   - Volume control

4. **Preview Player**:
   - Plays the "film" — shows images in sequence with transition effects (fade, slide)
   - Displays narration text as subtitles
   - Plays background music simultaneously
   - Play/pause/restart controls

5. Task cards:
   - [ ] Plan your 4-6 scene story
   - [ ] Write narration for each scene
   - [ ] Generate or choose an image for each scene
   - [ ] Pick your background music
   - [ ] Preview your mini film
   - [ ] Adjust timing and transitions

6. Export: Download as self-contained HTML file or video (using canvas recording)

Commit: "feat: add Lesson 6 interactive page — AI Director"

---

### Task 21: Lesson 6 — Slides + Script

**Files:**
- Create: `public/lesson-06/slides.html`
- Create: `scripts/lesson-06-script.md`

**Slides (8 slides, ~8 min):**
1. Title: "AI Director"
2. What makes a movie? — Story + Visuals + Music + Pacing
3. We've already learned all the pieces! (recap: text, images, music)
4. Today: Combine everything into a mini film
5. Show example mini-film (teacher plays a pre-made one)
6. Workflow: Plan scenes → Write narration → Generate images → Add music → Preview
7. Tips: Keep it short, match mood between visuals and music
8. Let's go! → [URL]

**Script:** Full bilingual script.

Commit: "feat: add Lesson 6 slides and script"

---

## Phase 5: Lessons 7-8 (Coding + AI)

### Task 22: Lesson 7 — Interactive page: AI Coder (Part 1)

**Files:**
- Create: `public/lesson-07/index.html`

**Page design:**

1. Header: "Lesson 7: AI Coder"

2. **Code Playground** (main area):
   - **Left panel**: Natural language input
     - Large text area: "Tell AI what you want to build..."
     - "Generate" button
     - Below: "Modify" input — "What do you want to change?"
     - "Update" button
   - **Right panel**: Live preview iframe
     - Shows the generated HTML/CSS/JS running in real-time
     - Refresh button
   - Code generated via /api/code endpoint

3. **Guided Task Cards** (sidebar):
   - Task 1: "Make a button that changes color when you click it"
   - Task 2: "Make a counter that goes up when you click +"
   - Task 3: "Make your name appear with a cool animation"
   - Task 4: "Make a simple drawing canvas"
   - Task 5 (bonus): "Surprise me — make something fun!"
   - Each card has a "Try this prompt" button that fills in a starter prompt

4. **Code Viewer** (collapsible panel):
   - Shows the actual HTML/CSS/JS code generated
   - Students don't need to understand it, but curious ones can peek
   - "What does this code do?" button — sends code to AI for a kid-friendly explanation

5. Task cards:
   - [ ] Complete Task 1 (button)
   - [ ] Complete Task 2 (counter)
   - [ ] Complete Task 3 (animation)
   - [ ] Try making something on your own
   - [ ] (Bonus) Complete the surprise task

Commit: "feat: add Lesson 7 interactive page — AI Coder"

---

### Task 23: Lesson 7 — Slides + Script

**Files:**
- Create: `public/lesson-07/slides.html`
- Create: `scripts/lesson-07-script.md`

**Slides (10 slides, ~10 min):**
1. Title: "AI Coder"
2. "What do you think coding looks like?" — let students share
3. Traditional coding: You write every instruction, one line at a time (show example)
4. Coding with AI: You DESCRIBE what you want, AI writes the code
5. Live demo: Teacher types "Make a button that says 'Click me' and shows a random emoji when clicked"
6. AI generates → Show the result → "That took 5 seconds instead of 30 minutes!"
7. The magic: You don't need to understand the code — you just need to describe well
8. But wait — what if it's not right? → Just tell AI to change it!
9. Today's mission: 5 coding challenges, from easy to creative
10. Let's go! → [URL]

**Script:** Full bilingual script.

Commit: "feat: add Lesson 7 slides and script"

---

### Task 24: Lesson 8 — Interactive page: AI Game Designer

**Files:**
- Create: `public/lesson-08/index.html`

**Page design:**

1. Header: "Lesson 8: AI Game Designer"

2. **Game Type Selector** (first screen):
   - Visual cards for game types:
     - Quiz Game — "Test your friends' knowledge!"
     - Catch Game — "Catch falling objects!"
     - Memory Game — "Match the pairs!"
     - Maze Game — "Find your way out!"
     - Click Speed — "How fast can you click?"
   - Each card has a mini animated preview

3. **Game Workshop** (after selection):
   - **Description Panel**: Pre-filled prompt based on game type, editable
     - E.g. for Quiz: "Make a quiz game about [topic] with [N] questions. Show score at the end."
     - Student customizes: topic, difficulty, visual style
   - **Generate Button** → sends to /api/code
   - **Game Preview**: Full iframe showing the playable game
   - **Iteration Panel**: "What do you want to change?" input
     - "Make it harder", "Change the colors to blue", "Add a timer", "Add sound effects"

4. **Asset Studio** (optional panel):
   - Generate custom images for the game using /api/image
   - E.g., generate character sprites, backgrounds

5. Task cards:
   - [ ] Choose your game type
   - [ ] Customize the game description
   - [ ] Generate and play-test your game
   - [ ] Make at least 2 improvements
   - [ ] Play your partner's game!

6. Export: Download as standalone HTML file (can be opened and played offline)

Commit: "feat: add Lesson 8 interactive page — AI Game Designer"

---

### Task 25: Lesson 8 — Slides + Script

**Files:**
- Create: `public/lesson-08/slides.html`
- Create: `scripts/lesson-08-script.md`

**Slides (8 slides, ~8 min):**
1. Title: "AI Game Designer"
2. Last week: You made AI write code. This week: A REAL GAME.
3. What makes a game fun? (discuss: challenge, reward, surprise)
4. Game types showcase (show examples of each type with screenshots)
5. The process: Choose type → Describe → Generate → Play → Improve
6. Pro tip: The best games start simple and add features
7. Today's mission: Design and build your own game
8. Let's go! → [URL]

**Script:** Full bilingual script.

Commit: "feat: add Lesson 8 slides and script"

---

## Phase 6: Lesson 9 (Ethics)

### Task 26: Lesson 9 — Interactive page: AI Truth Challenge

**Files:**
- Create: `public/lesson-09/index.html`
- Create: `public/lesson-09/assets/` (pre-loaded images and text samples)

**Page design:**

1. Header: "Lesson 9: AI Truth Challenge"

2. **Challenge Interface** — 3 levels, game-show style:

   **Level 1: Real or AI? (Images)**
   - Show 8-10 images one at a time
   - Two buttons: "Real Photo" / "AI Generated"
   - After answering: reveal the truth + brief explanation of clues
   - Running score
   - Images: Mix of real photos and AI-generated images (pre-loaded in assets/)

   **Level 2: Real or AI? (Text)**
   - Show 6-8 text passages one at a time
   - Two buttons: "Human Wrote This" / "AI Wrote This"
   - After answering: reveal + explanation of AI writing tells
   - Running score

   **Level 3: AI Bias Experiment**
   - Interactive: Students type the SAME question to AI but with different contexts
   - Pre-set experiments:
     - "Describe a doctor" vs "Describe a nurse" → observe gender assumptions
     - "Write a story about a kid named [American name]" vs "[non-American name]"
   - Side-by-side response comparison
   - Discussion prompts after each experiment

3. **Scoreboard**: Final scores for Levels 1 + 2, comparison between the two students

4. **Takeaways Panel**: Key lessons (always visible):
   - AI can create convincing fake content
   - AI has biases from its training data
   - Always verify information from multiple sources
   - Think before you share

5. No traditional task cards — the levels ARE the tasks

Commit: "feat: add Lesson 9 interactive page — AI Truth Challenge"

---

### Task 27: Lesson 9 — Slides + Script

**Files:**
- Create: `public/lesson-09/slides.html`
- Create: `scripts/lesson-09-script.md`

**Slides (10 slides, ~10 min):**
1. Title: "AI Truth Challenge — Can You Spot the Fake?"
2. Video/image: A deepfake example (use a well-known, publicly available example)
3. "Was that real?" — discussion
4. Reveal: That was made by AI. Here's how.
5. Three things to know: Deepfakes, AI Bias, AI Mistakes
6. Deepfakes: AI can fake faces, voices, and text
7. AI Bias: AI learns from human data — including our biases
8. AI Mistakes: AI sounds confident even when wrong ("hallucination")
9. Today's mission: A 3-level challenge to test your detective skills
10. Let's go! → [URL]

**Script:** Full bilingual script. Extra notes on facilitating sensitive discussions about bias.

Commit: "feat: add Lesson 9 slides and script"

---

## Phase 7: Lessons 10-12 (Final Project)

### Task 28: Lessons 10-12 — Interactive page: Final Project Workspace

**Files:**
- Create: `public/lesson-10/index.html`
- Create: `public/lesson-11/index.html` (symlink or redirect to lesson-10)
- Create: `public/lesson-12/index.html` (symlink or redirect to lesson-10)

**Page design:**

One comprehensive workspace that students use across all 3 final project lessons:

1. Header: "Final Project Workspace"

2. **Project Selector** (first visit):
   - Option A: AI Magazine — Articles + illustrations + layout
   - Option B: AI Short Film — Story + images + music + narration
   - Option C: AI Game — Themed game with custom art and sound
   - Option D: Free Choice — Combine tools however you want
   - Each option has a description and example

3. **Planning Tab** (Lesson 10 focus):
   - Project title input
   - Project description (what are you making?)
   - Checklist generator: Based on project type, auto-generate steps
   - Notes area

4. **Creation Tab** (Lesson 11 focus):
   - Integrated tool panel with tabs:
     - Text AI (ChatWidget)
     - Image AI (ImageGenerator)
     - Code AI (CodePlayground)
     - Music (link to Suno)
   - Asset gallery: All generated content organized
   - Preview area: See work in progress

5. **Presentation Tab** (Lesson 12 focus):
   - Auto-generate a presentation from project assets
   - Title slide, content slides, credits
   - Present button (fullscreen mode)

6. Auto-save: Project state saved to localStorage

Commit: "feat: add Lessons 10-12 Final Project Workspace"

---

### Task 29: Lessons 10-12 — Slides + Scripts

**Files:**
- Create: `public/lesson-10/slides.html`
- Create: `public/lesson-11/slides.html`
- Create: `public/lesson-12/slides.html`
- Create: `scripts/lesson-10-script.md`
- Create: `scripts/lesson-11-script.md`
- Create: `scripts/lesson-12-script.md`

**Lesson 10 slides (8 slides, ~5 min — shorter warm-up, more project time):**
1. Title: "Final Project — Let's Build Something Amazing"
2. Look what you've learned! (recap all 8 previous lessons with icons)
3. Project options: Magazine, Film, Game, or Your Idea
4. What makes a great project? (creative, complete, fun to share)
5. Planning tips: Start with a plan, break into steps
6. Today: Choose + Plan + Start collecting materials
7. Timeline: Today=Plan, Next week=Build, Week after=Polish+Present
8. Let's go! → [URL]

**Lesson 11 slides (3 slides, ~2 min — minimal warm-up, maximum build time):**
1. "Build Day!" — Let's keep creating
2. Check-in: Where are you? What's next?
3. Go! → [URL]

**Lesson 12 slides (5 slides):**
1. "Presentation Day!"
2. Final polish time (20 min)
3. Presentation order + format (5-7 min per student)
4. What to cover: What you made, how you made it, what was hardest, what are you proud of
5. (After presentations) "Congratulations! You are now AI Creators!"

**Scripts:** Full bilingual scripts for all three lessons.

Commit: "feat: add Lessons 10-12 slides and scripts"

---

## Phase 8: Syllabus & Polish

### Task 30: Create syllabus.md

**Files:**
- Create: `syllabus.md`

**Content:** A clean, shareable course syllabus covering:
- Course title, description, target audience
- 12-week schedule table
- Learning objectives
- Materials needed
- Teacher contact info placeholder

Commit: "feat: add course syllabus"

---

### Task 31: Collect assets for Lesson 9

**Files:**
- Create: `public/lesson-09/assets/` — curated set of real vs AI images and text samples

**Steps:**
1. Source 8-10 pairs of images: real photos + AI-generated images on similar subjects
   - Use publicly available AI-generated images and Creative Commons real photos
   - Save with metadata (source, real/ai label)
2. Source 6-8 text passages: human-written + AI-generated on similar topics
3. Create a `manifest.json` listing all assets with their labels

Commit: "feat: add Lesson 9 truth challenge assets"

---

### Task 32: Vercel deployment and testing

**Steps:**
1. Verify `vercel.json` configuration
2. Run `vercel dev` locally — test all pages and API endpoints
3. Deploy to Vercel: `vercel --prod`
4. Set environment variables on Vercel dashboard:
   - `ANTHROPIC_API_KEY`
   - `OPENAI_API_KEY`
5. Test all 12 lesson pages on the live URL
6. Test API endpoints (chat, image, code)
7. Share URL with teacher for review

Commit: "chore: verify deployment configuration"

---

## Task Dependency Overview

```
Phase 1 (Tasks 1-4): Infrastructure — MUST be first
    ↓
Phase 2 (Tasks 5-8): Shared components — depends on Phase 1
    ↓
Phases 3-7 (Tasks 9-29): Individual lessons — depend on Phase 2, can be done in order
    ↓
Phase 8 (Tasks 30-32): Polish & deploy — depends on all above
```

Within each lesson, the build order is: Interactive page → Slides → Script (since the script references both the page and slides).

---

## Estimated Scope

- **32 tasks** across 8 phases
- Tasks 1-8 (infrastructure): Foundation for everything
- Tasks 9-29 (lessons): The bulk of the work — 12 lessons × 3 deliverables
- Tasks 30-32 (polish): Final touches and deployment

Each lesson task produces a complete, usable deliverable. The course can be taught incrementally — you don't need all 12 lessons done before teaching Lesson 1.
