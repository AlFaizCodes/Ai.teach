document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('heroVideo');
    let fadeAnimationId = null;
    let fadingOut = false;

    // Custom JS Fade System (requestAnimationFrame)
    function fade(targetOpacity, duration, callback) {
        if (fadeAnimationId) cancelAnimationFrame(fadeAnimationId);
        
        const startOpacity = parseFloat(video.style.opacity) || 0;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
            video.style.opacity = currentOpacity;

            if (progress < 1) {
                fadeAnimationId = requestAnimationFrame(animate);
            } else {
                fadeAnimationId = null;
                if (callback) callback();
            }
        }
        fadeAnimationId = requestAnimationFrame(animate);
    }

    // Video Control Logic
    video.addEventListener('loadeddata', () => {
        video.play();
        fade(1, 250);
    });

    video.addEventListener('timeupdate', () => {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft <= 0.55 && !fadingOut) {
            fadingOut = true;
            fade(0, 250);
        }
    });

    video.addEventListener('ended', () => {
        video.style.opacity = 0;
        setTimeout(() => {
            video.currentTime = 0;
            video.play();
            fadingOut = false;
            fade(1, 250);
        }, 100);
    });

    // --- AI Teacher Assistant Logic ---
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const attachBtn = document.getElementById('attachBtn');
    const fileInput = document.getElementById('fileInput');
    const resultsArea = document.getElementById('resultsArea');
    const notesContent = document.getElementById('notesContent');
    const summaryContent = document.getElementById('summaryContent');

    // Attach File
    attachBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Simulate Upload & Processing
        userInput.value = "Processing: " + file.name;
        
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', { method: 'POST', body: formData });
            const data = await response.json();
            
            resultsArea.style.display = 'grid';
            notesContent.innerText = data.text;
            
            // Auto Summarize
            const summResp = await fetch('/api/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: data.text })
            });
            const summData = await summResp.json();
            summaryContent.innerText = summData.summary;
            
            userInput.value = "";
        } catch (err) {
            console.error(err);
            alert("Error processing file.");
        }
    });

    // Voice Simulation
    document.getElementById('voiceBtn').addEventListener('click', () => {
        alert("Voice capture started... (Demo Mode)");
        setTimeout(() => {
            userInput.value = "How does machine learning work?";
            sendBtn.click();
        }, 2000);
    });

    // Chat / Questions
    sendBtn.addEventListener('click', async () => {
        const text = userInput.value.trim();
        const context = notesContent.innerText;

        if (!text) return;

        try {
            const response = await fetch('/api/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: text, context: context || "General AI Knowledge" })
            });
            const data = await response.json();
            
            // Display answer as a new card or append
            const answerCard = document.createElement('div');
            answerCard.className = 'result-card';
            answerCard.style.gridColumn = 'span 2';
            answerCard.innerHTML = `<h3><svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> AI Answer</h3><p>${data.answer}</p>`;
            resultsArea.appendChild(answerCard);
            resultsArea.style.display = 'grid';
        } catch (err) {
            console.error(err);
        }
    });

    // Character Counter
    userInput.addEventListener('input', () => {
        document.querySelector('.char-counter').innerText = `${userInput.value.length}/3,000`;
    });
});
