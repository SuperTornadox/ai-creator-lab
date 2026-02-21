/* ==========================================================================
   AI Teaching Platform — Shared Component Library
   Reusable vanilla JS components for lesson pages.
   Uses CSS classes from shared/styles.css — no inline styles.
   ========================================================================== */

/* ==========================================================================
   Shared Utility: Clear all children of an element (safe alternative to innerHTML)
   ========================================================================== */

/**
 * Removes all child nodes from an element.
 * @param {HTMLElement} el
 */
function clearChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

/* ==========================================================================
   1. ChatWidget
   ==========================================================================

   Creates a chat interface that communicates with /api/chat.

   @param {HTMLElement} container - DOM element to render into
   @param {Object} options
   @param {string}   options.systemPrompt  - System prompt for the AI
   @param {string}   options.placeholder   - Input placeholder text
   @param {string}   options.avatarAI      - Emoji/text for AI avatar
   @param {string}   options.avatarUser    - Emoji/text for user avatar
   @param {Function} options.onMessage     - Callback after each exchange
   @returns {{ clearChat, getMessages, addMessage }}
   ========================================================================== */
function createChatWidget(container, options) {
  var opts = options || {};
  var systemPrompt = opts.systemPrompt || '';
  var placeholder = opts.placeholder || 'Type your message...';
  var avatarAI = opts.avatarAI || 'AI';
  var avatarUser = opts.avatarUser || 'You';
  var onMessage = opts.onMessage || null;

  // Conversation history in the format the API expects
  var messages = [];

  // Build DOM structure
  var wrapper = document.createElement('div');
  wrapper.className = 'flex-col gap-md';

  var chatContainer = document.createElement('div');
  chatContainer.className = 'chat-container';

  var inputRow = document.createElement('div');
  inputRow.className = 'flex gap-sm';

  var inputEl = document.createElement('textarea');
  inputEl.className = 'input';
  inputEl.placeholder = placeholder;
  inputEl.rows = 1;

  var sendBtn = document.createElement('button');
  sendBtn.className = 'btn btn-primary';
  sendBtn.textContent = 'Send';

  inputRow.appendChild(inputEl);
  inputRow.appendChild(sendBtn);
  wrapper.appendChild(chatContainer);
  wrapper.appendChild(inputRow);
  container.appendChild(wrapper);

  /**
   * Renders a single message bubble in the chat container.
   * @param {'user'|'assistant'} role
   * @param {string} content
   */
  function renderMessage(role, content) {
    var msg = document.createElement('div');
    msg.className = 'chat-message ' + (role === 'user' ? 'chat-user' : 'chat-ai');

    var avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = role === 'user' ? avatarUser : avatarAI;

    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = content;

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  /**
   * Shows the loading dots indicator and returns the element for later removal.
   * @returns {HTMLElement}
   */
  function showLoading() {
    var msg = document.createElement('div');
    msg.className = 'chat-message chat-ai';

    var avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = avatarAI;

    var dots = document.createElement('div');
    dots.className = 'loading-dots';
    for (var i = 0; i < 3; i++) {
      dots.appendChild(document.createElement('span'));
    }

    msg.appendChild(avatar);
    msg.appendChild(dots);
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return msg;
  }

  /**
   * Shows a user-visible error message inside the chat.
   * @param {string} text
   */
  function showError(text) {
    var msg = document.createElement('div');
    msg.className = 'chat-message chat-ai';

    var avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = avatarAI;

    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  /**
   * Sends the current input to the API and displays the response.
   */
  async function handleSend() {
    var text = inputEl.value.trim();
    if (!text) return;

    // Show user bubble and clear input
    renderMessage('user', text);
    inputEl.value = '';
    inputEl.rows = 1;

    // Track in history
    messages.push({ role: 'user', content: text });

    // Disable input while waiting
    inputEl.disabled = true;
    sendBtn.disabled = true;

    var loadingEl = showLoading();

    try {
      var body = { messages: messages };
      if (systemPrompt) {
        body.system = systemPrompt;
      }

      var res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      var data = await res.json();

      // Remove loading indicator
      loadingEl.remove();

      if (!res.ok) {
        showError(data.error || 'Something went wrong. Please try again.');
        // Remove the failed user message from history so they can retry
        messages.pop();
        return;
      }

      var reply = data.response || '';
      messages.push({ role: 'assistant', content: reply });
      renderMessage('assistant', reply);

      if (onMessage) {
        onMessage(messages);
      }
    } catch (err) {
      loadingEl.remove();
      showError('Could not reach the AI service. Check your connection and try again.');
      messages.pop();
    } finally {
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  // Enter to send, Shift+Enter for newline
  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  sendBtn.addEventListener('click', handleSend);

  // Public API
  return {
    /** Clears all messages and resets conversation history. */
    clearChat: function () {
      messages = [];
      clearChildren(chatContainer);
    },
    /** Returns a copy of the current messages array. */
    getMessages: function () {
      return messages.slice();
    },
    /**
     * Programmatically adds a message to the display and history.
     * @param {'user'|'assistant'} role
     * @param {string} content
     */
    addMessage: function (role, content) {
      messages.push({ role: role, content: content });
      renderMessage(role, content);
    },
  };
}

/* ==========================================================================
   2. ImageGenerator
   ==========================================================================

   Creates an image generation interface that communicates with /api/image.

   @param {HTMLElement} container - DOM element to render into
   @param {Object} options
   @param {Function} options.onGenerate  - Callback after each generation
   @param {Array}    options.styles      - Custom style list (optional)
   @param {boolean}  options.showGallery - Whether to show gallery below
   @returns {{ getImages, clearGallery }}
   ========================================================================== */
function createImageGenerator(container, options) {
  var opts = options || {};
  var onGenerate = opts.onGenerate || null;
  var showGallery = opts.showGallery !== undefined ? opts.showGallery : true;

  var defaultStyles = [
    { label: 'Realistic photo', emoji: '\uD83D\uDCF8', value: 'realistic photo' },
    { label: 'Cartoon / Anime', emoji: '\uD83C\uDFA8', value: 'cartoon anime style' },
    { label: 'Watercolor', emoji: '\uD83D\uDD8C\uFE0F', value: 'watercolor painting style' },
    { label: 'Pixel art', emoji: '\uD83D\uDC7E', value: 'pixel art style' },
    { label: 'Oil painting', emoji: '\uD83C\uDFAD', value: 'oil painting style' },
    { label: '3D render', emoji: '\uD83D\uDC8E', value: '3D render style' },
  ];

  var styles = opts.styles || defaultStyles;
  var selectedStyle = styles[0];
  var images = [];

  // Build DOM
  var wrapper = document.createElement('div');
  wrapper.className = 'flex-col gap-md';

  // Prompt area
  var promptGroup = document.createElement('div');
  promptGroup.className = 'form-group';

  var promptLabel = document.createElement('label');
  promptLabel.textContent = 'Describe the image you want to create';

  var promptInput = document.createElement('textarea');
  promptInput.className = 'textarea';
  promptInput.placeholder = 'e.g. A friendly robot walking through a colorful garden...';

  promptGroup.appendChild(promptLabel);
  promptGroup.appendChild(promptInput);

  // Style selector — card-based selection
  var styleGroup = document.createElement('div');
  styleGroup.className = 'form-group';

  var styleLabel = document.createElement('label');
  styleLabel.textContent = 'Choose a style';

  var styleGrid = document.createElement('div');
  styleGrid.className = 'card-grid';

  var styleCards = [];

  styles.forEach(function (style, idx) {
    var card = document.createElement('div');
    card.className = 'card card-hover' + (idx === 0 ? ' card-selected' : '');
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', idx === 0 ? 'true' : 'false');
    card.setAttribute('tabindex', '0');

    var emojiSpan = document.createElement('div');
    emojiSpan.className = 'text-center';
    emojiSpan.style.fontSize = '1.5rem';
    emojiSpan.textContent = style.emoji;

    var labelSpan = document.createElement('div');
    labelSpan.className = 'text-center';
    labelSpan.textContent = style.label;

    card.appendChild(emojiSpan);
    card.appendChild(labelSpan);

    card.addEventListener('click', function () {
      styleCards.forEach(function (c) {
        c.className = 'card card-hover';
        c.setAttribute('aria-checked', 'false');
      });
      card.className = 'card card-hover card-selected';
      card.setAttribute('aria-checked', 'true');
      selectedStyle = style;
    });

    styleCards.push(card);
    styleGrid.appendChild(card);
  });

  styleGroup.appendChild(styleLabel);
  styleGroup.appendChild(styleGrid);

  // Generate button
  var generateBtn = document.createElement('button');
  generateBtn.className = 'btn btn-primary btn-lg w-full';
  generateBtn.textContent = 'Generate Image';

  // Result area
  var resultArea = document.createElement('div');
  resultArea.className = 'flex-col gap-md mt-md';

  // Gallery
  var galleryEl = null;
  if (showGallery) {
    galleryEl = document.createElement('div');
    galleryEl.className = 'gallery-grid mt-lg';
  }

  wrapper.appendChild(promptGroup);
  wrapper.appendChild(styleGroup);
  wrapper.appendChild(generateBtn);
  wrapper.appendChild(resultArea);
  if (galleryEl) {
    wrapper.appendChild(galleryEl);
  }
  container.appendChild(wrapper);

  /**
   * Handles the generate button click — sends prompt to API.
   */
  async function handleGenerate() {
    var prompt = promptInput.value.trim();
    if (!prompt) {
      clearChildren(resultArea);
      var errDiv = document.createElement('div');
      errDiv.className = 'card';
      errDiv.textContent = 'Please describe the image you want to create.';
      resultArea.appendChild(errDiv);
      return;
    }

    // Build full prompt with style
    var fullPrompt = prompt + ', ' + selectedStyle.value;

    // Show loading state
    generateBtn.disabled = true;
    clearChildren(resultArea);

    var spinnerWrapper = document.createElement('div');
    spinnerWrapper.className = 'flex-center p-lg';
    var spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinnerWrapper.appendChild(spinner);
    resultArea.appendChild(spinnerWrapper);

    try {
      var res = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt, style: selectedStyle.value }),
      });

      var data = await res.json();
      clearChildren(resultArea);

      if (!res.ok) {
        var errCard = document.createElement('div');
        errCard.className = 'card';
        errCard.textContent = data.error || 'Something went wrong. Please try again.';
        resultArea.appendChild(errCard);
        return;
      }

      var url = data.url;
      if (!url) {
        var noUrlCard = document.createElement('div');
        noUrlCard.className = 'card';
        noUrlCard.textContent = 'No image was returned. Please try again.';
        resultArea.appendChild(noUrlCard);
        return;
      }

      // Display the generated image
      var imgWrapper = document.createElement('div');
      imgWrapper.className = 'gallery-item';

      var img = document.createElement('img');
      img.src = url;
      img.alt = prompt;
      imgWrapper.appendChild(img);
      resultArea.appendChild(imgWrapper);

      // Track image
      images.push({ url: url, caption: prompt });

      // Add to gallery if enabled
      if (galleryEl) {
        addToGallery(url, prompt);
      }

      if (onGenerate) {
        onGenerate({ url: url, prompt: prompt, style: selectedStyle.value });
      }
    } catch (err) {
      clearChildren(resultArea);
      var networkErr = document.createElement('div');
      networkErr.className = 'card';
      networkErr.textContent = 'Could not reach the image service. Check your connection and try again.';
      resultArea.appendChild(networkErr);
    } finally {
      generateBtn.disabled = false;
    }
  }

  /**
   * Adds an image to the gallery grid.
   * @param {string} url
   * @param {string} caption
   */
  function addToGallery(url, caption) {
    if (!galleryEl) return;

    var item = document.createElement('div');
    item.className = 'gallery-item';

    var img = document.createElement('img');
    img.src = url;
    img.alt = caption || '';

    item.appendChild(img);

    if (caption) {
      var cap = document.createElement('div');
      cap.className = 'gallery-item-caption';
      cap.textContent = caption;
      item.appendChild(cap);
    }

    // Click to show fullscreen
    item.addEventListener('click', function () {
      showFullscreen(url, caption);
    });

    galleryEl.appendChild(item);
  }

  generateBtn.addEventListener('click', handleGenerate);

  // Public API
  return {
    /** Returns a copy of all generated images. */
    getImages: function () {
      return images.slice();
    },
    /** Clears the gallery display and images array. */
    clearGallery: function () {
      images = [];
      if (galleryEl) {
        clearChildren(galleryEl);
      }
    },
  };
}

/* ==========================================================================
   3. TaskCards
   ==========================================================================

   Creates a task checklist with progress bar. Saves to localStorage.

   @param {HTMLElement} container - DOM element to render into
   @param {Array} tasks - Array of { title, description, id }
   @returns {{ isComplete, setComplete, getProgress }}
   ========================================================================== */
function createTaskCards(container, tasks) {
  if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
    container.textContent = 'No tasks provided.';
    return {
      isComplete: function () { return false; },
      setComplete: function () {},
      getProgress: function () { return { completed: 0, total: 0 }; },
    };
  }

  // localStorage key based on current page URL
  var storageKey = 'tasks_' + window.location.pathname;

  /**
   * Loads saved completion state from localStorage.
   * @returns {Object} Map of task id to boolean
   */
  function loadState() {
    try {
      var saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  /**
   * Saves the current completion state to localStorage.
   * @param {Object} state
   */
  function saveState(state) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (e) {
      // localStorage may be unavailable; silently ignore
    }
  }

  var state = loadState();

  // Build DOM
  var wrapper = document.createElement('div');
  wrapper.className = 'flex-col gap-md';

  // Progress label
  var progressLabel = document.createElement('div');
  progressLabel.className = 'text-center';

  // Progress bar
  var progressBar = document.createElement('div');
  progressBar.className = 'task-progress';

  var progressFill = document.createElement('div');
  progressFill.className = 'task-progress-bar';
  progressBar.appendChild(progressFill);

  // Task list
  var taskList = document.createElement('div');
  taskList.className = 'flex-col gap-sm';

  var taskElements = {};

  tasks.forEach(function (task) {
    var item = document.createElement('div');
    item.className = 'task-item' + (state[task.id] ? ' completed' : '');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!state[task.id];

    var content = document.createElement('div');
    content.className = 'task-item-content';

    var title = document.createElement('div');
    title.className = 'task-item-title';
    title.textContent = task.title;

    var desc = document.createElement('div');
    desc.className = 'task-item-desc';
    desc.textContent = task.description || '';

    content.appendChild(title);
    if (task.description) {
      content.appendChild(desc);
    }

    item.appendChild(checkbox);
    item.appendChild(content);

    // Toggle on click anywhere in the item
    item.addEventListener('click', function (e) {
      // Prevent double-toggle when clicking directly on checkbox
      if (e.target === checkbox) return;
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change'));
    });

    checkbox.addEventListener('change', function () {
      state[task.id] = checkbox.checked;
      item.className = 'task-item' + (checkbox.checked ? ' completed' : '');
      saveState(state);
      updateProgress();
    });

    taskElements[task.id] = { item: item, checkbox: checkbox };
    taskList.appendChild(item);
  });

  wrapper.appendChild(progressLabel);
  wrapper.appendChild(progressBar);
  wrapper.appendChild(taskList);
  container.appendChild(wrapper);

  /**
   * Updates the progress bar and label to reflect current state.
   */
  function updateProgress() {
    var completed = tasks.filter(function (t) { return state[t.id]; }).length;
    var total = tasks.length;
    var pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    progressFill.style.width = pct + '%';
    progressLabel.textContent = completed + ' / ' + total + ' completed';
  }

  // Initial render
  updateProgress();

  // Public API
  return {
    /**
     * Checks whether a specific task is complete.
     * @param {string} id
     * @returns {boolean}
     */
    isComplete: function (id) {
      return !!state[id];
    },
    /**
     * Programmatically sets a task's completion state.
     * @param {string} id
     * @param {boolean} complete
     */
    setComplete: function (id, complete) {
      state[id] = !!complete;
      if (taskElements[id]) {
        taskElements[id].checkbox.checked = !!complete;
        taskElements[id].item.className = 'task-item' + (complete ? ' completed' : '');
      }
      saveState(state);
      updateProgress();
    },
    /**
     * Returns current progress info.
     * @returns {{ completed: number, total: number }}
     */
    getProgress: function () {
      var completed = tasks.filter(function (t) { return state[t.id]; }).length;
      return { completed: completed, total: tasks.length };
    },
  };
}

/* ==========================================================================
   4. ExportButton
   ==========================================================================

   Creates a download button that exports content as a file.

   @param {HTMLElement} container - DOM element to render into
   @param {Object} options
   @param {string}   options.label    - Button label text
   @param {Function} options.getData  - Returns the content to export
   @param {string}   options.filename - Download filename
   @param {string}   options.format   - "text" | "html" | "json"
   ========================================================================== */
function createExportButton(container, options) {
  var opts = options || {};
  var label = opts.label || 'Export';
  var getData = opts.getData;
  var filename = opts.filename || 'export.txt';
  var format = opts.format || 'text';

  var btn = document.createElement('button');
  btn.className = 'btn btn-secondary';
  // Download icon as Unicode character
  btn.textContent = '\u2B07 ' + label;

  btn.addEventListener('click', function () {
    if (typeof getData !== 'function') {
      console.error('ExportButton: getData must be a function');
      return;
    }

    var content = getData();
    var mimeType;
    var fileContent;

    switch (format) {
      case 'html':
        mimeType = 'text/html;charset=utf-8';
        fileContent = typeof content === 'string' ? content : String(content);
        break;
      case 'json':
        mimeType = 'application/json;charset=utf-8';
        fileContent = typeof content === 'string' ? content : JSON.stringify(content, null, 2);
        break;
      case 'text':
      default:
        mimeType = 'text/plain;charset=utf-8';
        fileContent = typeof content === 'string' ? content : String(content);
        break;
    }

    try {
      var blob = new Blob([fileContent], { type: mimeType });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      // Show a user-visible fallback error
      var errEl = document.createElement('div');
      errEl.className = 'card mt-sm';
      errEl.textContent = 'Could not download the file. Try copying the content manually.';
      container.appendChild(errEl);
    }
  });

  container.appendChild(btn);
}

/* ==========================================================================
   5. CodePlayground
   ==========================================================================

   Creates a two-panel code playground with AI code generation via /api/code.

   @param {HTMLElement} container - DOM element to render into
   @param {Object} options
   @param {Function} options.onRun        - Callback when code is generated
   @param {Array}    options.guidedTasks   - Optional list of guided task cards
   @returns {{ getCode, setCode }}
   ========================================================================== */
function createCodePlayground(container, options) {
  var opts = options || {};
  var onRun = opts.onRun || null;
  var guidedTasks = opts.guidedTasks || null;

  var currentCode = '';

  // Build DOM — two-panel layout
  var wrapper = document.createElement('div');
  wrapper.className = 'flex gap-md';

  // Left panel: prompt + controls
  var leftPanel = document.createElement('div');
  leftPanel.className = 'flex-col gap-md';
  leftPanel.style.flex = '1';

  // Generate prompt
  var genGroup = document.createElement('div');
  genGroup.className = 'form-group';

  var genLabel = document.createElement('label');
  genLabel.textContent = 'Tell AI what you want to build...';

  var genInput = document.createElement('textarea');
  genInput.className = 'textarea';
  genInput.placeholder = 'e.g. A page with a bouncing ball animation...';

  var genBtn = document.createElement('button');
  genBtn.className = 'btn btn-primary w-full';
  genBtn.textContent = 'Generate';

  genGroup.appendChild(genLabel);
  genGroup.appendChild(genInput);
  genGroup.appendChild(genBtn);

  // Modification prompt
  var modGroup = document.createElement('div');
  modGroup.className = 'form-group mt-md';

  var modLabel = document.createElement('label');
  modLabel.textContent = 'What to change?';

  var modInput = document.createElement('textarea');
  modInput.className = 'textarea';
  modInput.placeholder = 'e.g. Make the ball bigger and change the color to red...';
  modInput.rows = 2;

  var modBtn = document.createElement('button');
  modBtn.className = 'btn btn-secondary w-full';
  modBtn.textContent = 'Update';

  modGroup.appendChild(modLabel);
  modGroup.appendChild(modInput);
  modGroup.appendChild(modBtn);

  // View Code toggle
  var codeToggle = document.createElement('button');
  codeToggle.className = 'btn btn-icon mt-sm';
  codeToggle.textContent = '\u25B6 View Code';

  var codePanel = document.createElement('pre');
  codePanel.className = 'card hidden';

  var codeVisible = false;
  codeToggle.addEventListener('click', function () {
    codeVisible = !codeVisible;
    codePanel.className = codeVisible ? 'card' : 'card hidden';
    codeToggle.textContent = (codeVisible ? '\u25BC' : '\u25B6') + ' View Code';
  });

  leftPanel.appendChild(genGroup);
  leftPanel.appendChild(modGroup);
  leftPanel.appendChild(codeToggle);
  leftPanel.appendChild(codePanel);

  // Right panel: iframe preview
  var rightPanel = document.createElement('div');
  rightPanel.className = 'flex-col';
  rightPanel.style.flex = '1';

  var previewLabel = document.createElement('label');
  previewLabel.textContent = 'Live Preview';
  previewLabel.className = 'mb-sm';

  var iframe = document.createElement('iframe');
  iframe.className = 'card';
  iframe.style.width = '100%';
  iframe.style.minHeight = '400px';
  iframe.style.border = 'none';
  iframe.sandbox = 'allow-scripts';

  rightPanel.appendChild(previewLabel);
  rightPanel.appendChild(iframe);

  wrapper.appendChild(leftPanel);
  wrapper.appendChild(rightPanel);

  // Guided tasks sidebar (optional)
  if (guidedTasks && guidedTasks.length > 0) {
    var sidebar = document.createElement('div');
    sidebar.className = 'task-sidebar';

    var sidebarTitle = document.createElement('h3');
    sidebarTitle.textContent = 'Try These!';
    sidebar.appendChild(sidebarTitle);

    guidedTasks.forEach(function (task) {
      var item = document.createElement('div');
      item.className = 'task-item';

      var content = document.createElement('div');
      content.className = 'task-item-content';

      var title = document.createElement('div');
      title.className = 'task-item-title';
      title.textContent = task.title || '';

      var desc = document.createElement('div');
      desc.className = 'task-item-desc';
      desc.textContent = task.description || '';

      var tryBtn = document.createElement('button');
      tryBtn.className = 'btn btn-secondary mt-sm';
      tryBtn.textContent = 'Try this';
      tryBtn.addEventListener('click', function () {
        genInput.value = task.prompt || task.description || '';
        genInput.focus();
      });

      content.appendChild(title);
      content.appendChild(desc);
      content.appendChild(tryBtn);
      item.appendChild(content);
      sidebar.appendChild(item);
    });

    wrapper.appendChild(sidebar);
  }

  container.appendChild(wrapper);

  /**
   * Writes a simple message into the iframe preview using srcdoc.
   * Only uses static, safe content — no user input is injected as HTML.
   * @param {string} text - The plain-text message to display
   * @param {string} color - CSS color for the text
   */
  function setPreviewMessage(text, color) {
    var safeText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    iframe.srcdoc = [
      '<html><body style="display:flex;align-items:center;justify-content:center;',
      'height:100vh;font-family:sans-serif;color:' + color + ';">',
      '<p>' + safeText + '</p></body></html>',
    ].join('');
  }

  /**
   * Shows an error message in the preview iframe.
   * @param {string} text
   */
  function showPreviewError(text) {
    var safeText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    iframe.srcdoc = [
      '<html><body style="font-family:sans-serif;padding:2rem;color:#ef4444;">',
      '<h3>Oops!</h3><p>' + safeText + '</p></body></html>',
    ].join('');
  }

  /**
   * Sends a generate request to /api/code and updates the preview.
   */
  async function handleGenerate() {
    var prompt = genInput.value.trim();
    if (!prompt) {
      showPreviewError('Please describe what you want to build.');
      return;
    }

    genBtn.disabled = true;
    modBtn.disabled = true;

    // Show loading in preview
    setPreviewMessage('Generating your creation...', '#6b7280');

    try {
      var res = await fetch('/api/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt }),
      });

      var data = await res.json();

      if (!res.ok) {
        showPreviewError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      currentCode = data.code || '';
      iframe.srcdoc = currentCode;
      codePanel.textContent = currentCode;

      if (onRun) {
        onRun(currentCode);
      }
    } catch (err) {
      showPreviewError('Could not reach the code service. Check your connection and try again.');
    } finally {
      genBtn.disabled = false;
      modBtn.disabled = false;
    }
  }

  /**
   * Sends a modification request to /api/code with the current code context.
   */
  async function handleUpdate() {
    var modification = modInput.value.trim();
    if (!modification) {
      showPreviewError('Please describe what you want to change.');
      return;
    }

    if (!currentCode) {
      showPreviewError('Generate some code first, then try modifying it.');
      return;
    }

    genBtn.disabled = true;
    modBtn.disabled = true;

    setPreviewMessage('Updating your creation...', '#6b7280');

    try {
      var res = await fetch('/api/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: modification, currentCode: currentCode }),
      });

      var data = await res.json();

      if (!res.ok) {
        showPreviewError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      currentCode = data.code || '';
      iframe.srcdoc = currentCode;
      codePanel.textContent = currentCode;

      if (onRun) {
        onRun(currentCode);
      }
    } catch (err) {
      showPreviewError('Could not reach the code service. Check your connection and try again.');
    } finally {
      genBtn.disabled = false;
      modBtn.disabled = false;
      modInput.value = '';
    }
  }

  genBtn.addEventListener('click', handleGenerate);
  modBtn.addEventListener('click', handleUpdate);

  // Public API
  return {
    /** Returns the current HTML code string. */
    getCode: function () {
      return currentCode;
    },
    /**
     * Sets the iframe preview to the given HTML and stores it as current code.
     * @param {string} html
     */
    setCode: function (html) {
      currentCode = html;
      iframe.srcdoc = html;
      codePanel.textContent = html;
    },
  };
}

/* ==========================================================================
   6. Gallery
   ==========================================================================

   Creates a responsive image gallery with fullscreen overlay.

   @param {HTMLElement} container - DOM element to render into
   @param {Object} options
   @param {number} options.columns - Number of gallery columns (CSS handles responsiveness)
   @returns {{ addImage, removeImage, getImages, clear }}
   ========================================================================== */
function createGallery(container, options) {
  var images = [];

  var grid = document.createElement('div');
  grid.className = 'gallery-grid';

  container.appendChild(grid);

  /**
   * Adds an image to the gallery.
   * @param {string} url - Image source URL
   * @param {string} caption - Caption text
   */
  function addImage(url, caption) {
    var index = images.length;
    images.push({ url: url, caption: caption || '' });

    var item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;

    var img = document.createElement('img');
    img.src = url;
    img.alt = caption || '';

    item.appendChild(img);

    if (caption) {
      var cap = document.createElement('div');
      cap.className = 'gallery-item-caption';
      cap.textContent = caption;
      item.appendChild(cap);
    }

    item.addEventListener('click', function () {
      showFullscreen(url, caption);
    });

    grid.appendChild(item);
  }

  /**
   * Removes an image by index.
   * @param {number} index
   */
  function removeImage(index) {
    if (index < 0 || index >= images.length) return;
    images.splice(index, 1);
    rebuildGrid();
  }

  /**
   * Rebuilds the gallery grid from the images array.
   */
  function rebuildGrid() {
    clearChildren(grid);
    var copy = images.slice();
    images = [];
    copy.forEach(function (img) {
      addImage(img.url, img.caption);
    });
  }

  // Public API
  return {
    addImage: addImage,
    removeImage: removeImage,
    /** Returns a copy of all images in the gallery. */
    getImages: function () {
      return images.slice();
    },
    /** Clears all images from the gallery. */
    clear: function () {
      images = [];
      clearChildren(grid);
    },
  };
}

/* ==========================================================================
   Shared Utility: Fullscreen Image Overlay
   ==========================================================================
   Used by ImageGenerator and Gallery for fullscreen image viewing.
   ========================================================================== */

/**
 * Shows a fullscreen modal overlay with the given image.
 * @param {string} url - Image URL
 * @param {string} caption - Optional caption text
 */
function showFullscreen(url, caption) {
  // Create overlay
  var overlay = document.createElement('div');
  overlay.className = 'flex-center';
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = 'rgba(0, 0, 0, 0.85)';
  overlay.style.zIndex = '9999';
  overlay.style.cursor = 'pointer';
  overlay.style.flexDirection = 'column';
  overlay.style.gap = 'var(--space-md)';

  var img = document.createElement('img');
  img.src = url;
  img.alt = caption || '';
  img.style.maxWidth = '90vw';
  img.style.maxHeight = '80vh';
  img.style.borderRadius = 'var(--radius-md)';
  img.style.objectFit = 'contain';

  overlay.appendChild(img);

  if (caption) {
    var cap = document.createElement('div');
    cap.style.color = '#ffffff';
    cap.style.fontSize = 'var(--text-md)';
    cap.textContent = caption;
    overlay.appendChild(cap);
  }

  // Close hint
  var hint = document.createElement('div');
  hint.style.color = 'rgba(255,255,255,0.5)';
  hint.style.fontSize = 'var(--text-sm)';
  hint.textContent = 'Click anywhere to close';
  overlay.appendChild(hint);

  // Close on click
  overlay.addEventListener('click', function () {
    overlay.remove();
  });

  // Close on Escape
  function onKeydown(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', onKeydown);
    }
  }
  document.addEventListener('keydown', onKeydown);

  document.body.appendChild(overlay);
}

/* ==========================================================================
   Attach to Window
   ==========================================================================
   All components are made globally available so lesson pages can use them
   with a simple script include.
   ========================================================================== */

window.ChatWidget = createChatWidget;
window.ImageGenerator = createImageGenerator;
window.TaskCards = createTaskCards;
window.ExportButton = createExportButton;
window.CodePlayground = createCodePlayground;
window.Gallery = createGallery;
