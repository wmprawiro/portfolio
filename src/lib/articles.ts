export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  isoDate: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Vibe Coding: Building Ugame.id with Antigravity",
    slug: "vibe-coding-antigravity",
    date: "August 28, 2026",
    isoDate: "2026-08-28",
    summary: "How I built an entire automated digital goods platform end-to-end using Antigravity and Gemini 3.1 Pro, and my top tips for AI-assisted development.",
    content: `
<p>Building a full-scale product used to take months of planning and coding. Recently, I built <strong>Ugame Indonesia</strong> (a fully automated game top-up platform) entirely using <strong>Antigravity</strong>, powered by the <strong>Gemini 3.1 Pro</strong> model. The speed was incredible.</p>
<p>However, "Vibe Coding" is not just blindly typing prompts. If you just ask an AI to write code, it will hallucinate, create biased logic, and forget previous instructions. To build a complex system safely, you need a strict methodology. Here is the exact framework I used to prevent AI hallucinations.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">1. The Source of Truth: Markdown PRDs</h3>
<p>AI models do not know your business logic automatically. The first step in proper vibe coding is writing a Product Requirements Document (PRD). You must write this in plain Markdown (<code>.md</code>). Markdown is the perfect format because LLMs parse it natively.</p>
<p>In these files, I defined everything: how the Duitku payment gateway works, what happens when Digiflazz fails, and how discount vouchers are calculated. This document becomes the single source of truth that the AI must follow.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">2. Using Graphify to Prevent Memory Loss</h3>
<p>The biggest cause of AI hallucination is context loss. As your project gets bigger, the AI forgets how different files interact. To fix this, I integrated <strong>Graphify</strong> into my workflow.</p>
<p>Graphify converts your entire codebase and your Markdown PRDs into a queryable knowledge graph. Instead of passing random text files to Antigravity, Graphify maps out the relationships between all your components. It helps the AI understand the project structure and discover "God Nodes" (highly connected parts of the app). Because of Graphify, the AI maintains deep, persistent context. It knows exactly how a database change will affect your frontend dashboard without you having to explain it repeatedly.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">3. Strict Context Injection</h3>
<p>Even with good context, open-ended prompts cause bias. If you ask the AI to "build a webhook", it might invent a new schema. You must practice Context Injection.</p>
<p>Before prompting Antigravity, I forced it to read the Graphify data and the PRDs first. Then, I wrote constrained prompts like: <em>"Using the Digiflazz logic defined in the PRD, create a webhook handler. Do not invent new database fields. Always validate the Duitku signature strictly."</em></p>
<p>By heavily constraining the AI, you stop it from guessing. It is forced to use the exact architecture you defined.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">4. Modular Execution</h3>
<p>Once you have Markdown rules and Graphify context in place, you can finally build. Because Antigravity fully understood the boundaries, I could safely instruct it to build complex features:</p>
<ul class="list-disc pl-5 mt-2 space-y-2 mb-4">
  <li><strong>Dynamic Dashboard:</strong> It built secure interfaces to hot-swap payment gateways instantly.</li>
  <li><strong>Automated Cron-Jobs:</strong> It wrote scripts to sync provider prices safely, complete with Cloudflare cache-invalidation rules.</li>
  <li><strong>Vouchers & Emails:</strong> It generated accurate discount calculations and formatted email templates without breaking the existing data flow.</li>
</ul>

<p class="mt-8 pt-8 border-t border-neutral-900">Proper vibe coding is a system of control. It is about shifting your role from a typist to a system architect. By combining Markdown PRDs, Graphify for context mapping, and Antigravity for safe execution, you completely remove AI hallucination and build production-ready software much faster.</p>
    `
  },
  {
    id: "2",
    title: "9Router: One Endpoint, 60+ AI Providers, Zero Downtime",
    slug: "9router-guide",
    date: "August 28, 2026",
    isoDate: "2026-08-28",
    summary: "A complete guide to 9Router. This free AI router connects Claude Code, Codex, and Gemini CLI to 60+ providers with smart automatic fallback. It includes installation, setup, and pro tips.",
    content: `
<p>If you use multiple AI coding tools like <strong>Claude Code</strong>, <strong>OpenAI Codex</strong>, or <strong>Cursor</strong>, you have probably hit the same wall. Your Claude subscription runs out mid-task. You switch to Codex. That runs out too. You spend more time managing API keys than actually building.</p>
<p><strong>9Router</strong> solves this entirely. It is a free, open-source smart gateway that sits between your tools and 60+ AI providers. It automatically switches between them when a quota runs out. This happens with zero interruption to your workflow.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">What is 9Router?</h3>
<p>9Router is a local proxy server you install once on your machine. It exposes a single OpenAI-compatible endpoint at <code>localhost:20128</code>. Every AI tool you use points to this one address. This includes Claude Code, Codex CLI, Cursor, Cline, and Continue.</p>
<p>Behind the scenes, 9Router routes your requests through a smart <strong>3-tier fallback system</strong>:</p>
<ul class="list-disc pl-5 mt-2 space-y-2 mb-4">
  <li><strong>Tier 1 (Subscription):</strong> Your premium subscriptions go first. Examples are Claude Code, Codex, GitHub Copilot, Gemini CLI, and Cursor IDE.</li>
  <li><strong>Tier 2 (Cheap API):</strong> If Tier 1 is exhausted, it falls back to affordable pay-per-use providers. Examples are GLM Coding at $0.60, MiniMax at $0.20, and Kimi at $9/month.</li>
  <li><strong>Tier 3 (FREE):</strong> When Tier 2 is also out, it falls back to completely free providers. These include iFlow, Qwen, Kiro AI, OpenCode Free, OpenRouter free tier, NVIDIA NIM, Gemini free, and Cloudflare AI.</li>
</ul>
<p>The result is you never stop coding. The switch happens automatically in milliseconds. You do not need to intervene manually.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">1. Installation</h3>
<p>9Router requires Node.js. If you already have it, the install is a single command:</p>
<pre class="bg-neutral-900 border border-neutral-800 rounded p-4 text-xs font-mono text-neutral-300 mt-2 mb-4 overflow-x-auto">npm install -g 9router</pre>
<p>After installation, run the router with this command:</p>
<pre class="bg-neutral-900 border border-neutral-800 rounded p-4 text-xs font-mono text-neutral-300 mt-2 mb-4 overflow-x-auto">9router</pre>
<p>Your browser will open a local dashboard automatically at <code>localhost:20128</code>. This is where you connect your AI providers. Depending on the provider, you authenticate via OAuth (for subscriptions like Claude Code or Copilot) or by pasting an API key.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">2. Connecting Your Tools</h3>
<p>Once 9Router is running, you need to point each of your AI tools to <code>http://localhost:20128</code>. Here is how to do it for the most common tools:</p>
<p><strong>Claude Code CLI:</strong> Set the <code>ANTHROPIC_BASE_URL</code> environment variable.</p>
<pre class="bg-neutral-900 border border-neutral-800 rounded p-4 text-xs font-mono text-neutral-300 mt-2 mb-4 overflow-x-auto">ANTHROPIC_BASE_URL=http://localhost:20128 claude</pre>
<p><strong>OpenAI Codex CLI:</strong> Set the base URL in your Codex config or environment.</p>
<pre class="bg-neutral-900 border border-neutral-800 rounded p-4 text-xs font-mono text-neutral-300 mt-2 mb-4 overflow-x-auto">OPENAI_BASE_URL=http://localhost:20128 codex</pre>
<p><strong>Cursor IDE:</strong> Go to Settings, then Models, and add a custom model with base URL <code>http://localhost:20128</code>.</p>
<p><strong>Cline, Continue, Roo, or Kilo Code:</strong> In the extension settings, change the OpenAI base URL to <code>http://localhost:20128</code>. Each of these VS Code extensions has a dedicated field for custom base URLs.</p>
<p>The 9Router dashboard includes step-by-step setup guides for all supported tools. You do not need to memorize any of this.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">3. Using the Dashboard</h3>
<p>The dashboard is where all the power lives. It gives you several features:</p>
<ul class="list-disc pl-5 mt-2 space-y-2 mb-4">
  <li><strong>Live quota tracking:</strong> See how many tokens remain per provider. It includes a reset countdown timer and cost estimation.</li>
  <li><strong>Smart Combos:</strong> Chain multiple providers into one virtual provider. It uses sticky round-robin and automatic fallback between them.</li>
  <li><strong>Multi-account support:</strong> Add multiple accounts for the same provider. 9Router will load-balance between them to effectively multiply your monthly quota.</li>
  <li><strong>Format Translator:</strong> Convert between OpenAI, Anthropic, and Gemini API formats on the fly. Any tool will work with any provider regardless of their native format.</li>
  <li><strong>Cloud Sync and Tunnel:</strong> Sync your router config to Cloudflare's edge network. This makes your 9Router accessible from anywhere across 300+ global locations.</li>
</ul>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">4. Built-in Token Savings</h3>
<p>9Router ships with two features that quietly save you tokens on every request. This happens without changing the quality of the AI output:</p>
<p><strong>RTK Token Saver (Input, save 20 to 40%):</strong> It automatically compresses tool result content like git diffs, grep output, file trees, and directory listings before they reach the AI model. The compression is lossless. The AI sees all the same information in a more compact form. This is enabled by default and requires no configuration.</p>
<p><strong>Caveman Mode (Output, save 65%):</strong> It injects a terse-style system prompt that tells the AI to reply in a compact and telegraphic style. The technical accuracy is the same, but the response is stripped of unnecessary verbosity. There are five intensity levels you can tune from the dashboard.</p>
<p>Combined with free-tier providers, these two features mean you can route most of your AI coding workflow for exactly $0 per month.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">Tips &amp; Tricks</h3>
<ul class="list-disc pl-5 mt-2 space-y-2 mb-4">
  <li><strong>Build a free fallback chain first.</strong> Before adding paid providers, connect all the free ones like iFlow, Qwen, Kiro AI, OpenCode Free, and Cloudflare AI. This gives you a solid floor that costs nothing.</li>
  <li><strong>Use Combos for long coding sessions.</strong> Create a Combo that chains all your providers in priority order. 9Router burns through each tier automatically as you code, so there is no manual switching.</li>
  <li><strong>Leave RTK on, tune Caveman per-task.</strong> RTK compression is always safe to leave enabled. For Caveman Mode, use a lower intensity for exploratory conversations and a higher intensity for quick code edits.</li>
  <li><strong>Add multiple accounts for Claude.</strong> If you have both a personal and a work Claude subscription, add both under Multi-Account. 9Router round-robins between them to double your available monthly quota.</li>
  <li><strong>Keep the router running in the background.</strong> Run 9Router as a background process or add it to your system startup. All your tools will always find <code>localhost:20128</code> without you needing to start it manually each session.</li>
</ul>

<p class="mt-8 pt-8 border-t border-neutral-900">9Router is one of those tools that changes how you think about AI tool costs. Instead of worrying about which subscription to use or rationing your Claude quota for important tasks, you just code. The router handles everything. For a tool that is completely free and open-source, the value it delivers is remarkable. You can find it at <a href="https://9router.com" target="_blank" rel="noopener noreferrer" class="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors">9router.com</a>.</p>
    `
  },
  {
    id: "3",
    title: "It Works on My Machine",
    slug: "it-works-on-my-machine",
    date: "September 16, 2026",
    isoDate: "2026-09-16",
    summary: "If you are a web developer, you know the feeling. You’ve just finished building a project, and it runs flawlessly on localhost. But then comes the final boss: Deployment.",
    content: `
<p>If you are a web developer, you know the feeling. You’ve just finished building a project, and it runs flawlessly on <code>localhost</code>. But then comes the final boss: Deployment.</p>
<p>In the past, deploying a website was a developer's nightmare. You had to rent a remote server, wrestle with Linux command lines, configure web servers, and manually set up SSL certificates just to get a secure connection. For beginners, it was a frustrating process that could easily take hours.</p>
<p>Thankfully, the tech landscape has evolved. Today, modern platforms do the heavy lifting for us, and one of the absolute best tools you can use right now is Tencent EdgeOne Makers. If you want a platform that completely eliminates deployment headaches, you’re in the right place. Let me share my personal experience and show you how I brought my latest project to life.</p>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">What is Tencent EdgeOne Makers?</h3>
<p>Tencent EdgeOne Makers is a powerful, all-in-one platform designed to help developers build, deploy, and scale applications in record time. It doesn't just host your code; it utilizes a lightning-fast Content Delivery Network (CDN) to ensure your website loads instantly, no matter where your users are.</p>
<p>On top of that, enterprise-grade security is built right in. You get a free, out-of-the-box secure connection (HTTPS) without having to manually buy or renew security certificates.</p>

<blockquote class="border-l-2 border-neutral-700 pl-4 my-4 italic text-neutral-300">
  Bonus: If you join the DevHandal 2026 Batch 2 program and explore this platform, you can get 5 million LLM API tokens for FREE. This is a massive head start if you are planning to integrate AI into your future projects! <a href="https://devhandal2026.codepolitan.com/" target="_blank" rel="noopener noreferrer" class="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors">https://devhandal2026.codepolitan.com/</a>
</blockquote>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">My Personal Experience: From Ugame to Acomo</h3>
<p>I am no stranger to the Tencent ecosystem. Previously, I deployed a gaming platform called Ugame using a Tencent Virtual Private Server (VPS). You can check out its blazing-fast performance right now at <a href="https://ugame.id" target="_blank" rel="noopener noreferrer" class="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors">ugame.id</a>.</p>
<p>Because I had such a reliable experience with their VPS, I was eager to try Tencent EdgeOne Makers for my newest project: Acomo.</p>

<figure class="my-6 border border-neutral-800 rounded overflow-hidden">
  <img src="/articles/acomo-preview.png" alt="Acomo financial tracking Progressive Web App" class="w-full object-cover" />
  <figcaption class="p-2 text-center text-xs text-neutral-500 bg-neutral-900/50 border-t border-neutral-800">
    <a href="https://acomo.edgeone.dev/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">https://acomo.edgeone.dev/</a>
  </figcaption>
</figure>

<p>Acomo is a financial tracking Progressive Web App (PWA) built with Next.js and Supabase. Since it's a PWA, speed and security are non-negotiable. Deploying Acomo on EdgeOne Makers was an absolute breeze. The platform automatically detected my Next.js framework, configured the build commands, and within minutes, my app was live with a secure connection at <a href="https://acomo.edgeone.dev" target="_blank" rel="noopener noreferrer" class="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors">acomo.edgeone.dev</a>. Now, whenever I squash a bug or add a new feature, a simple git push is all it takes to update the live app.</p>

<p class="font-semibold text-white mt-6 mb-2">How to Deploy Your Site in 4 Simple Steps:</p>
<p>You don't need any DevOps experience to do this. Here is how easy it is:</p>
<ul class="list-disc pl-5 mt-2 space-y-2 mb-4">
  <li><strong>Push to GitHub:</strong> Make sure your web app is ready locally, create a GitHub repository, and push your code.</li>
  <li><strong>Create an Account:</strong> Go to the Tencent EdgeOne Makers dashboard and click on &quot;Deploy a new site.&quot;</li>
  <li><strong>Connect to GitHub:</strong> Authorize the platform to read your GitHub repositories (you only do this once).</li>
</ul>

<figure class="my-6 border border-neutral-800 rounded overflow-hidden">
  <img src="/articles/tencent-edgeone.png" alt="Tencent EdgeOne dashboard" class="w-full object-cover" />
  <figcaption class="p-2 text-center text-xs text-neutral-500 bg-neutral-900/50 border-t border-neutral-800">
    <a href="https://www.tencentcloud.com/products/teo" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">https://www.tencentcloud.com/products/teo</a>
  </figcaption>
</figure>

<ul class="list-disc pl-5 mt-2 space-y-2 mb-4">
  <li><strong>Deploy:</strong> Select your repository from the list. The platform will auto-detect your framework (like Next.js, React, or Vue). Click deploy, sit back, and get your live public URL in minutes!</li>
</ul>

<h3 class="text-white mt-8 mb-2 uppercase tracking-wider">Conclusion</h3>
<p>Whether you need a robust VPS for complex systems like <a href="https://ugame.id" target="_blank" rel="noopener noreferrer" class="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors">ugame.id</a>, or a rapid, automated deployment platform for modern web apps like <a href="https://acomo.edgeone.dev" target="_blank" rel="noopener noreferrer" class="text-neutral-300 underline underline-offset-4 hover:text-white transition-colors">acomo.edgeone.dev</a>, Tencent has the right tools for you. It saves time, eliminates server headaches, and lets you focus on what you do best: coding.</p>

<p class="mt-8 pt-8 border-t border-neutral-900">Don't forget to try it out yourself and join the DevHandal 2026 Batch 2 program!</p>
    `
  }
];

