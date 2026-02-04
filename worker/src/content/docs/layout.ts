/**
 * Docs HTML layout
 */
import { marked } from "marked";
import { DOC_NAV } from "./index";

export function renderDocsPage(title: string, markdown: string, currentPath: string): string {
  const content = marked.parse(markdown) as string;

  const nav = DOC_NAV.map(
    (page) =>
      `<a href="${page.path}" class="${
        page.path === currentPath
          ? "text-indigo-400 font-medium"
          : "text-gray-400 hover:text-white"
      } block py-1.5 transition-colors">${page.title}</a>`
  ).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Genesis Docs</title>
  <meta name="description" content="Genesis documentation - ${title}">
  <meta name="theme-color" content="#0a0a0f">
  
  <script src="https://cdn.tailwindcss.com"></script>
  
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
      background: radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
    }
    
    /* Prose styles for markdown */
    .prose { color: #d1d5db; line-height: 1.75; }
    .prose h1 { font-size: 2.25rem; font-weight: 700; color: white; margin-top: 0; margin-bottom: 1rem; }
    .prose h2 { font-size: 1.5rem; font-weight: 600; color: white; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; }
    .prose h3 { font-size: 1.25rem; font-weight: 600; color: white; margin-top: 1.5rem; margin-bottom: 0.75rem; }
    .prose p { margin-bottom: 1.25rem; }
    .prose a { color: #a5b4fc; text-decoration: underline; }
    .prose a:hover { color: #c7d2fe; }
    .prose strong { color: white; font-weight: 600; }
    .prose em { color: #9ca3af; }
    .prose ul, .prose ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
    .prose ul { list-style-type: disc; }
    .prose ol { list-style-type: decimal; }
    .prose li { margin-bottom: 0.5rem; }
    .prose li > ul, .prose li > ol { margin-top: 0.5rem; margin-bottom: 0; }
    .prose blockquote { border-left: 4px solid #6366f1; padding-left: 1rem; margin: 1.5rem 0; color: #9ca3af; font-style: italic; }
    .prose code { 
      background: rgba(99, 102, 241, 0.15); 
      padding: 0.125rem 0.375rem; 
      border-radius: 0.25rem; 
      font-size: 0.875em; 
      font-family: 'JetBrains Mono', monospace;
      color: #c7d2fe;
    }
    .prose pre { 
      background: linear-gradient(135deg, #1e1e2e 0%, #11111b 100%);
      border-radius: 0.5rem; 
      padding: 1rem; 
      margin: 1.25rem 0; 
      overflow-x: auto;
    }
    .prose pre code { 
      background: none; 
      padding: 0; 
      color: #d1d5db;
      font-size: 0.875rem;
    }
    .prose table { width: 100%; margin: 1.25rem 0; border-collapse: collapse; }
    .prose th, .prose td { padding: 0.75rem; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .prose th { font-weight: 600; color: #a5b4fc; }
    .prose hr { border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 2rem 0; }
  </style>
</head>
<body class="bg-[#0a0a0f] text-white font-sans min-h-screen gradient-bg">
  <div class="flex">
    <!-- Sidebar -->
    <aside class="w-64 min-h-screen border-r border-white/10 p-6 fixed">
      <a href="/" class="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
        <svg class="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <span class="font-semibold text-lg">Genesis</span>
      </a>
      
      <nav class="space-y-1">
        ${nav}
      </nav>
      
      <div class="mt-8 pt-8 border-t border-white/10">
        <a href="https://github.com/0xHericles/genesis" class="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </aside>
    
    <!-- Main content -->
    <main class="flex-1 ml-64 p-12 max-w-4xl">
      <article class="prose">
        ${content}
      </article>
    </main>
  </div>
</body>
</html>`;
}
