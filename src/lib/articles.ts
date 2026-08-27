export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Vibe Coding: Building Ugame.id with Antigravity",
    slug: "vibe-coding-antigravity",
    date: "August 28, 2026",
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
  }
];
