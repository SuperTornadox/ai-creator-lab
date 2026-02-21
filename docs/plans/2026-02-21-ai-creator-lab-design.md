# AI Creator Lab - Course Design Document

**Date**: 2026-02-21
**Status**: Approved

## Overview

A 12-week AI course for 2 students (grades 6-7, US, no programming experience). Each lesson is 40-45 minutes. The course focuses on practical AI skills through a project-spiral approach — every lesson produces a tangible creative work.

## Course Parameters

- **Students**: 2, grades 6-7, no coding experience
- **Schedule**: 12 weekly lessons, 40-45 min each
- **Goal**: Practical AI skills (text, image, music/audio, coding with AI)
- **Devices**: Each student has their own laptop; teacher provides AI access via API
- **Deployment**: Vercel

## Lesson Structure (each lesson)

- Concept warm-up (8-10 min): Demo, mini-game, discussion
- Hands-on project (25-30 min): Build something on the interactive webpage
- Show & share (5 min): Present work, brief reflection

## 12-Lesson Curriculum

| Week | Title | Project Output | Primary Tools |
|------|-------|---------------|---------------|
| 1 | AI First Contact | Fun "interview" with AI | Text AI |
| 2 | AI Story Factory | A creative short story | Text AI |
| 3 | AI Artist | 3-5 AI-generated artworks | Image AI |
| 4 | AI Picture Book | A 4-6 page illustrated book | Text + Image AI |
| 5 | AI Musician | An original AI song | Music AI |
| 6 | AI Director | A mini slideshow film with music | Text + Image + Music AI |
| 7 | AI Coder (Part 1) | A simple interactive program | Coding + AI |
| 8 | AI Game Designer | A playable web mini-game | Coding + AI |
| 9 | AI Truth Challenge | Deepfake/bias detection challenge | Discussion + Interactive |
| 10 | Final Project - Planning | Project plan + initial materials | All tools |
| 11 | Final Project - Building | Main project body complete | All tools |
| 12 | Final Project - Polish & Present | Final work + presentation | All tools |

## Detailed Lesson Designs

### Lesson 1: AI First Contact

**Warm-up (10 min)**:
- Ask students: "What do you think AI is?"
- Real-life examples: Siri, recommendation algorithms, face unlock
- Demo: Ask AI a weird question for laughs
- Core concept: AI = pattern matching from data, not a thinking brain

**Project (25 min)**: AI Interview
- Students play "reporter," AI plays a character (talking cat, person from the future)
- Interactive page: role selection → student types questions → AI responds in character
- Task: Complete 8-10 rounds, compile into an "interview article"
- Stretch: Interview two different characters, compare styles

**Share (5 min)**: Read each other's interviews, vote for funniest answer

### Lesson 2: AI Story Factory

**Warm-up (8 min)**:
- Review: AI can chat, but does it "understand" you?
- Introduce prompts: clearer instructions = better output
- Demo: vague vs specific prompt comparison

**Project (30 min)**: Write a Creative Short Story
- Story builder: choose protagonist, setting, conflict, ending style
- AI generates draft from framework → student reads → requests modifications
- At least 2-3 rounds of revision
- Export final story

**Share (5 min)**: Read stories aloud, discuss prompt strategies

### Lesson 3: AI Artist

**Warm-up (8 min)**:
- AI art vs human art guessing game
- Concept: image generation also uses prompts — "painting with words"
- Demo: same subject, different descriptions → different images

**Project (30 min)**: AI Art Exhibition
- Prompt editor + style selector (realistic, cartoon, watercolor, pixel)
- Task 1: Create 3 freely, learn to describe visuals
- Task 2: Challenge — replicate a target image via prompt
- Task 3: Title and artist statement for best work

**Share (5 min)**: Mini art exhibition, peer critique

### Lesson 4: AI Picture Book

**Warm-up (8 min)**:
- Analyze a real picture book structure
- Key point: text and images must work together
- Workflow: write story → split into pages → generate illustrations

**Project (30 min)**: Make a 4-6 Page AI Picture Book
- Step 1: Generate/adapt a short story with text AI
- Step 2: Split into 4-6 pages
- Step 3: Generate illustration for each page
- Step 4: Preview as a flippable book
- Export final picture book

**Share (5 min)**: Read each other's picture books

### Lesson 5: AI Musician

**Warm-up (8 min)**:
- "Real or AI?" music guessing game
- AI music works like text/image — description-based generation
- Demo: one sentence → different genre outputs (pop, hip-hop, classical)

**Project (30 min)**: Create an Original Song
- Select style/mood/instruments
- Optional: write lyrics with text AI assistance
- Generate → listen → modify description → regenerate
- Try at least 3 different styles
- Pick one as the "hit single"

**Share (5 min)**: Listen to each other's music, share creative process

### Lesson 6: AI Director

**Warm-up (8 min)**:
- What makes a movie? (story, visuals, music, pacing)
- Review all tools learned so far — today we combine them
- Show example mini-film

**Project (30 min)**: Make a Mini Film (slideshow + soundtrack + text)
- Step 1: Write a 4-6 scene story outline
- Step 2: Generate a scene image for each act
- Step 3: Select or generate background music
- Step 4: Combine into a slideshow film with transitions
- Optional: add subtitles/narration text

**Share (5 min)**: "Premiere" — watch each other's films

### Lesson 7: AI Coder (Part 1)

**Warm-up (10 min)**:
- "What do you think coding feels like?" — break the intimidation
- Demo: tell AI "make a button that changes color when clicked" → instant code
- Core concept: you can now "tell AI what you want" instead of writing code yourself

**Project (25 min)**: Build an Interactive Mini-Program
- Code playground: natural language input (left) → live preview (right)
- Progressive tasks: color-changing button → counter → simple animation
- 5 guided task cards from easy to hard
- Focus: learning to describe desired programs in words

**Share (5 min)**: Demo programs, try each other's creations

### Lesson 8: AI Game Designer

**Warm-up (8 min)**:
- Review: you already know how to make AI write code
- Today's goal: a real playable game
- Show examples (quiz, catch game, maze) — students choose direction

**Project (30 min)**: Make a Simple Web Game
- Game workshop: choose game type → describe rules in natural language
- AI generates game → playtest → suggest changes → AI updates
- Can use image AI for game assets
- 2-3 iteration rounds

**Share (5 min)**: Play each other's games, give feedback

### Lesson 9: AI Truth Challenge

**Warm-up (10 min)**:
- Play a deepfake video — "Is this real?"
- Reveal answer, spark discussion: AI can create AND deceive
- Three themes: deepfakes, AI bias, privacy/safety

**Project (25 min)**: AI Truth Detection Challenge
- Level 1: AI-generated images vs real photos (8-10 questions)
- Level 2: AI-written text vs human-written text
- Level 3: AI bias experiment — same question, different contexts
- Post-level explanations and discussions
- Competition: who detects more accurately?

**Share (5 min)**: Discussion — how will you evaluate online information going forward?

### Lessons 10-12: Final Project

**Lesson 10 - Planning (40 min)**:
- Review all tools (5 min)
- Project options (10 min): AI Magazine, AI Short Film, AI Game, or free choice
- Students choose topic, write plan, begin collecting materials (25 min)

**Lesson 11 - Building (40 min)**:
- Full build time with teacher guidance
- Mid-session check-in

**Lesson 12 - Polish & Present (40 min)**:
- Final polish (20 min)
- Formal presentations (15 min): show work, explain creative process
- Course review + "graduation" (5 min)

## Deliverables Per Lesson

### 1. Interactive Webpage
- Single-page HTML app per lesson
- Backend API proxy to protect API keys
- Common structure: title + task description, main tool area, task cards, export/save

### 2. Slides
- HTML slides (Reveal.js) for warm-up segment only
- 8-12 slides per lesson, visual-heavy, minimal text
- Age-appropriate aesthetic: bright, fun, not childish

### 3. Bilingual Teacher Script
- Markdown files, English/Chinese paragraph-by-paragraph
- Includes: slide cues, interaction prompts, timing, contingency tips

## Technical Architecture

### Deployment: Vercel
- Static site with serverless API routes for AI proxy
- Environment variables for API keys (never exposed to client)

### Project Structure
```
teaching/
├── site/                          # Deployed website
│   ├── index.html                 # Course homepage (entry to all 12 lessons)
│   ├── shared/                    # Shared resources
│   │   ├── styles.css
│   │   ├── api-proxy.js           # API proxy (protect keys)
│   │   └── components.js          # Common UI components
│   ├── lesson-01/
│   │   ├── index.html             # Interactive webpage
│   │   ├── slides.html            # Slides
│   │   └── assets/
│   ├── lesson-02/
│   │   └── ...
│   └── ...
├── api/                           # Vercel serverless functions
│   ├── chat.js                    # Text AI proxy
│   ├── image.js                   # Image AI proxy
│   └── music.js                   # Music AI proxy
├── scripts/                       # Teacher scripts
│   ├── lesson-01-script.md
│   ├── lesson-02-script.md
│   └── ...
├── docs/plans/
│   └── 2026-02-21-ai-creator-lab-design.md
├── syllabus.md
├── vercel.json                    # Vercel config
└── package.json
```

### API Proxy Design
- Vercel serverless functions under `/api/`
- Each function handles one AI modality (chat, image, music)
- API keys stored as Vercel environment variables
- Simple rate limiting to prevent accidental overuse
- CORS configured for the deployed domain only

### Frontend Stack
- Vanilla HTML/CSS/JS (no framework — keep it simple)
- Reveal.js for slides
- Shared CSS for consistent look across all lessons
- Responsive design (works on any laptop)
