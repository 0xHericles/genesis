/**
 * Landing page HTML with Tailwind CSS
 * Shown to browsers, not CLI tools
 */
export const LANDING_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Genesis - Personal AI Agent Framework</title>
  <meta name="description" content="A self-learning AI agent framework for Cursor that accumulates your patterns over time.">
  <meta name="theme-color" content="#0a0a0f">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Genesis - Personal AI Agent Framework">
  <meta property="og:description" content="A self-learning system that accumulates your patterns over time.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://genesis.hericl.es">
  
  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
        },
      },
    }
  </script>
  
  <style>
    .gradient-bg {
      background: radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                  radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    }
    .code-block {
      background: linear-gradient(135deg, #1e1e2e 0%, #11111b 100%);
    }
    .glow {
      box-shadow: 0 0 60px rgba(99, 102, 241, 0.3);
    }
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body class="bg-[#0a0a0f] text-white font-sans min-h-screen gradient-bg">
  <div class="max-w-4xl mx-auto px-6 py-20 fade-in">
    <!-- Logo -->
    <div class="flex justify-center mb-8">
      <svg class="w-16 h-16 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="15" r="6" fill="currentColor"/>
        <circle cx="85" cy="35" r="6" fill="currentColor"/>
        <circle cx="85" cy="65" r="6" fill="currentColor"/>
        <circle cx="50" cy="85" r="6" fill="currentColor"/>
        <circle cx="15" cy="65" r="6" fill="currentColor"/>
        <circle cx="15" cy="35" r="6" fill="currentColor"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
        <path d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M50 15 L50 50 M85 35 L50 50 M85 65 L50 50 M50 85 L50 50 M15 65 L50 50 M15 35 L50 50" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    </div>

    <!-- Title -->
    <h1 class="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
      GENESIS
    </h1>
    
    <!-- Tagline -->
    <p class="text-xl md:text-2xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Personal AI agent framework for Cursor.<br>
      <span class="text-gray-500">A self-learning system that accumulates your patterns over time.</span>
    </p>

    <!-- Install Command -->
    <div class="code-block rounded-xl p-6 mb-16 glow max-w-xl mx-auto">
      <div class="flex items-center justify-between mb-3">
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <button onclick="copyInstall()" class="text-xs text-gray-500 hover:text-white transition-colors" id="copy-btn">
          Copy
        </button>
      </div>
      <code class="font-mono text-lg text-indigo-300">
        <span class="text-gray-500">$</span> curl -fsSL genesis.hericl.es | bash
      </code>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-6 mb-16">
      <div class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
        <div class="text-2xl mb-3">⚡</div>
        <h3 class="font-semibold text-lg mb-2">Slash Commands</h3>
        <p class="text-gray-400 text-sm">/plan, /build, /review, /fix, /learn — orchestrate your workflow</p>
      </div>
      <div class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
        <div class="text-2xl mb-3">🧠</div>
        <h3 class="font-semibold text-lg mb-2">Self-Learning</h3>
        <p class="text-gray-400 text-sm">Extracts patterns from your work and builds a personal knowledge base</p>
      </div>
      <div class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
        <div class="text-2xl mb-3">📐</div>
        <h3 class="font-semibold text-lg mb-2">Principles & Playbooks</h3>
        <p class="text-gray-400 text-sm">Codified rules and patterns that guide consistent behavior</p>
      </div>
    </div>

    <!-- Quick Start -->
    <div class="text-center mb-16">
      <h2 class="text-2xl font-semibold mb-6">Quick Start</h2>
      <div class="inline-flex flex-col gap-3 text-left font-mono text-sm">
        <div class="flex items-center gap-3">
          <span class="text-indigo-400">1.</span>
          <span class="text-gray-300">Install with the command above</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-indigo-400">2.</span>
          <span class="text-gray-300">Restart Cursor</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-indigo-400">3.</span>
          <span class="text-gray-300">Type <span class="text-indigo-300">/ask</span> in any chat</span>
        </div>
      </div>
    </div>

    <!-- Links -->
    <footer class="flex justify-center gap-8 text-gray-500">
      <a href="https://github.com/0xHericles/genesis" class="hover:text-white transition-colors flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="https://github.com/0xHericles/genesis#commands" class="hover:text-white transition-colors">
        Docs
      </a>
      <a href="https://github.com/0xHericles/genesis/blob/main/LICENSE" class="hover:text-white transition-colors">
        MIT License
      </a>
    </footer>
  </div>

  <script>
    function copyInstall() {
      navigator.clipboard.writeText('curl -fsSL genesis.hericl.es | bash');
      const btn = document.getElementById('copy-btn');
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy', 2000);
    }
  </script>
</body>
</html>`;
