// TOOLS & SERVICES - IDEs, Cloud Platforms, Developer Tools & More
// Comprehensive collection of modern development tools

export const toolsData = [
  // ==================== IDEs & CODE EDITORS ====================
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'IDE & Editors',
    icon: '📝',
    color: '#007ACC',
    developer: 'Microsoft',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    description: 'The most popular code editor with rich ecosystem of extensions.',
    features: [
      'IntelliSense code completion',
      'Built-in Git integration',
      'Debugging support',
      'Extensions marketplace',
      'Integrated terminal',
      'Multi-cursor editing',
      'Remote development',
      'Live Share collaboration'
    ],
    useCases: [
      'Web development (React, Vue, Angular)',
      'Backend development (Node.js, Python, Go)',
      'Mobile development (React Native, Flutter)',
      'Data science (Jupyter notebooks)',
      'DevOps (Docker, Kubernetes)',
      'General purpose programming'
    ],
    bestExtensions: [
      'ESLint - JavaScript linting',
      'Prettier - Code formatter',
      'GitLens - Git supercharged',
      'Live Server - Local dev server',
      'Auto Rename Tag - HTML/XML',
      'Path Intellisense - File path autocomplete',
      'Error Lens - Inline error display',
      'Thunder Client - REST API testing'
    ],
    gettingStarted: `// Install VS Code
1. Download from https://code.visualstudio.com
2. Install extensions from marketplace
3. Configure settings.json
4. Set up keyboard shortcuts

// Essential settings.json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "editor.minimap.enabled": false,
  "workbench.colorTheme": "Dark+",
  "terminal.integrated.fontSize": 14
}

// Install essential extensions
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens`,
    proTips: [
      'Use Ctrl+P (Cmd+P) for quick file opening',
      'Ctrl+Shift+P for command palette',
      'Alt+Click for multi-cursor',
      'F12 for "Go to Definition"',
      'Ctrl+` to toggle terminal',
      'Install "Settings Sync" for cloud backup'
    ],
    officialDocs: 'https://code.visualstudio.com/docs',
    tutorial: 'https://code.visualstudio.com/docs/getstarted/introvideos'
  },

  {
    id: 'visual-studio',
    name: 'Visual Studio',
    category: 'IDE & Editors',
    icon: '🔷',
    color: '#5C2D91',
    developer: 'Microsoft',
    platforms: ['Windows', 'macOS'],
    pricing: 'Free Community / Paid Professional & Enterprise',
    description: 'Full-featured IDE for .NET, C++, and enterprise development.',
    features: [
      'Advanced debugging & profiling',
      'IntelliSense & code navigation',
      'Built-in testing framework',
      'Azure integration',
      'Database tools',
      'Team collaboration features',
      'Live code analysis',
      'Refactoring tools'
    ],
    useCases: [
      '.NET development (C#, F#, VB.NET)',
      'ASP.NET web applications',
      'Desktop applications (WPF, WinForms)',
      'Game development (Unity)',
      'Mobile apps (Xamarin)',
      'C++ development',
      'Azure cloud development',
      'Enterprise applications'
    ],
    bestFor: ['Enterprise .NET development', 'Windows desktop apps', 'Game development with Unity'],
    officialDocs: 'https://docs.microsoft.com/en-us/visualstudio/'
  },

  {
    id: 'jetbrains-webstorm',
    name: 'WebStorm',
    category: 'IDE & Editors',
    icon: '⚡',
    color: '#00CDD7',
    developer: 'JetBrains',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Paid ($69/year for individuals)',
    description: 'Professional IDE for JavaScript and web development.',
    features: [
      'Intelligent code completion',
      'Advanced refactoring',
      'Built-in debugger',
      'Git integration',
      'npm/Yarn support',
      'Testing frameworks',
      'Framework-specific support',
      'HTTP client'
    ],
    useCases: [
      'React/Vue/Angular development',
      'Node.js backend',
      'TypeScript projects',
      'Full-stack JavaScript',
      'Testing (Jest, Mocha)',
      'Modern web applications'
    ],
    bestFor: ['Professional JavaScript developers', 'Large-scale projects', 'Team collaboration'],
    officialDocs: 'https://www.jetbrains.com/webstorm/learn/'
  },

  {
    id: 'jetbrains-intellij',
    name: 'IntelliJ IDEA',
    category: 'IDE & Editors',
    icon: '💡',
    color: '#000000',
    developer: 'JetBrains',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free Community / Paid Ultimate ($169/year)',
    description: 'The leading IDE for Java and JVM languages.',
    features: [
      'Smart code completion',
      'Framework support (Spring, etc.)',
      'Database tools',
      'Version control',
      'Testing & debugging',
      'Build tools (Maven, Gradle)',
      'Docker & Kubernetes',
      'Cloud deployment'
    ],
    useCases: ['Java development', 'Kotlin projects', 'Android apps', 'Spring Boot', 'Microservices'],
    bestFor: ['Java enterprise development', 'Android development', 'Kotlin projects'],
    officialDocs: 'https://www.jetbrains.com/idea/learn/'
  },

  {
    id: 'android-studio',
    name: 'Android Studio',
    category: 'IDE & Editors',
    icon: '🤖',
    color: '#3DDC84',
    developer: 'Google',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    description: 'Official IDE for Android app development.',
    features: [
      'Android emulator',
      'Visual layout editor',
      'APK analyzer',
      'Code templates',
      'Gradle build system',
      'Firebase integration',
      'Play Console integration',
      'Profiling tools'
    ],
    useCases: ['Android app development', 'Kotlin development', 'Java mobile apps'],
    bestFor: ['Android developers', 'Mobile app development'],
    officialDocs: 'https://developer.android.com/studio/intro'
  },

  {
    id: 'xcode',
    name: 'Xcode',
    category: 'IDE & Editors',
    icon: '🍎',
    color: '#147EFB',
    developer: 'Apple',
    platforms: ['macOS'],
    pricing: 'Free',
    description: 'Official IDE for iOS, macOS, watchOS, and tvOS development.',
    features: [
      'Interface Builder',
      'iOS Simulator',
      'Swift Playgrounds',
      'TestFlight integration',
      'Instruments profiling',
      'Asset catalogs',
      'SwiftUI preview',
      'Debugging tools'
    ],
    useCases: ['iOS app development', 'macOS apps', 'Swift development', 'SwiftUI'],
    bestFor: ['Apple platform developers', 'iOS/macOS app development'],
    officialDocs: 'https://developer.apple.com/xcode/'
  },

  // ==================== CLOUD PLATFORMS ====================
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Cloud & Hosting',
    icon: '▲',
    color: '#000000',
    developer: 'Vercel Inc.',
    platforms: ['Web'],
    pricing: 'Free Hobby / Paid Pro ($20/month) / Enterprise',
    description: 'Platform for frontend deployment with zero configuration.',
    features: [
      'Automatic deployments from Git',
      'Serverless functions',
      'Edge network (CDN)',
      'Preview deployments',
      'Custom domains & SSL',
      'Analytics',
      'Environment variables',
      'Team collaboration'
    ],
    useCases: [
      'Next.js applications',
      'React/Vue/Angular apps',
      'Static sites',
      'Jamstack projects',
      'Landing pages',
      'Serverless APIs'
    ],
    gettingStarted: `// Deploy with Vercel CLI
npm install -g vercel
vercel login
vercel

// Or via Git integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Configure build settings
4. Deploy automatically on push

// vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "framework": "nextjs"
}

// Environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...`,
    bestFor: ['Next.js apps', 'Frontend deployments', 'Jamstack sites'],
    officialDocs: 'https://vercel.com/docs',
    tutorial: 'https://vercel.com/guides'
  },

  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Cloud & Hosting',
    icon: '🔥',
    color: '#FFCA28',
    developer: 'Google',
    platforms: ['Web', 'iOS', 'Android'],
    pricing: 'Free Spark / Paid Blaze (pay-as-you-go)',
    description: 'Complete app development platform with backend services.',
    features: [
      'Realtime Database',
      'Firestore (NoSQL)',
      'Authentication',
      'Cloud Storage',
      'Cloud Functions',
      'Hosting',
      'Analytics',
      'Crashlytics',
      'Push notifications',
      'Remote Config',
      'A/B testing',
      'Performance monitoring'
    ],
    useCases: [
      'Mobile app backends',
      'Realtime applications',
      'User authentication',
      'File storage',
      'Analytics & monitoring',
      'Serverless functions'
    ],
    gettingStarted: `// Install Firebase
npm install firebase

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Firestore CRUD
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Create
await addDoc(collection(db, 'users'), {
  name: 'John Doe',
  email: 'john@example.com'
});

// Read
const snapshot = await getDocs(collection(db, 'users'));
snapshot.forEach(doc => console.log(doc.data()));

// Authentication
import { signInWithEmailAndPassword } from 'firebase/auth';

await signInWithEmailAndPassword(auth, email, password);`,
    bestFor: ['Mobile apps', 'Realtime apps', 'Rapid prototyping'],
    officialDocs: 'https://firebase.google.com/docs',
    tutorial: 'https://firebase.google.com/docs/web/setup'
  },

  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Cloud & Hosting',
    icon: '⚡',
    color: '#3ECF8E',
    developer: 'Supabase',
    platforms: ['Web', 'Mobile'],
    pricing: 'Free / Pro ($25/month) / Enterprise',
    description: 'Open source Firebase alternative with PostgreSQL database.',
    features: [
      'PostgreSQL database',
      'Auto-generated REST API',
      'Realtime subscriptions',
      'Authentication',
      'File storage',
      'Edge functions',
      'Row-level security',
      'Database backups',
      'SQL editor',
      'Database migrations'
    ],
    useCases: [
      'Full-stack applications',
      'Realtime apps',
      'User authentication',
      'CRUD applications',
      'API backends',
      'Data-driven apps'
    ],
    gettingStarted: `// Install Supabase
npm install @supabase/supabase-js

// Initialize
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
);

// Database queries
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('active', true);

// Insert data
await supabase.from('users').insert({
  name: 'John Doe',
  email: 'john@example.com'
});

// Realtime subscription
const subscription = supabase
  .channel('users')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'users' },
    (payload) => console.log('Change:', payload)
  )
  .subscribe();

// Authentication
const { user, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
});

// File storage
await supabase.storage
  .from('avatars')
  .upload('public/avatar.png', file);`,
    bestFor: ['PostgreSQL projects', 'Open source preference', 'Full-stack apps'],
    officialDocs: 'https://supabase.com/docs',
    tutorial: 'https://supabase.com/docs/guides/getting-started'
  },

  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'Cloud & Hosting',
    icon: '☁️',
    color: '#F38020',
    developer: 'Cloudflare',
    platforms: ['Web'],
    pricing: 'Free / Pro ($20/month) / Business / Enterprise',
    description: 'CDN, security, and serverless platform on the edge.',
    features: [
      'CDN & caching',
      'DDoS protection',
      'Web Application Firewall',
      'Workers (serverless)',
      'Pages (static hosting)',
      'R2 storage',
      'D1 database',
      'KV storage',
      'DNS management',
      'Analytics',
      'Load balancing',
      'SSL certificates'
    ],
    useCases: [
      'Website acceleration',
      'Security & DDoS protection',
      'Edge computing',
      'Static site hosting',
      'API optimization',
      'Global applications'
    ],
    gettingStarted: `// Cloudflare Workers
export default {
  async fetch(request) {
    return new Response('Hello World!', {
      headers: { 'content-type': 'text/plain' }
    });
  }
};

// Deploy with Wrangler
npm install -g wrangler
wrangler login
wrangler init my-worker
wrangler publish

// KV Storage
const value = await NAMESPACE.get('key');
await NAMESPACE.put('key', 'value');

// Pages deployment
npm install -g wrangler
wrangler pages publish dist`,
    bestFor: ['Global CDN', 'Edge computing', 'DDoS protection'],
    officialDocs: 'https://developers.cloudflare.com/',
    tutorial: 'https://developers.cloudflare.com/workers/get-started/guide/'
  },

  {
    id: 'netlify',
    name: 'Netlify',
    category: 'Cloud & Hosting',
    icon: '🌐',
    color: '#00C7B7',
    developer: 'Netlify',
    platforms: ['Web'],
    pricing: 'Free Starter / Pro ($19/month) / Business / Enterprise',
    description: 'All-in-one platform for modern web projects with continuous deployment.',
    features: [
      'Continuous deployment from Git',
      'Instant rollbacks',
      'Split testing (A/B testing)',
      'Serverless functions',
      'Form handling',
      'Identity and authentication',
      'Edge functions',
      'Analytics',
      'Custom domains & SSL',
      'Deploy previews'
    ],
    useCases: [
      'Static sites',
      'JAMstack applications',
      'Serverless APIs',
      'Frontend deployments',
      'Landing pages',
      'Documentation sites'
    ],
    gettingStarted: `// Install Netlify CLI
npm install -g netlify-cli

// Deploy site
netlify deploy

// Deploy to production
netlify deploy --prod

// Link to Git for continuous deployment
netlify init

// netlify.toml configuration
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

// Serverless function (netlify/functions/hello.js)
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Netlify!' })
  };
};

// Form handling (HTML)
<form name="contact" netlify>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>`,
    proTips: [
      'Use deploy previews for every pull request',
      'Enable form handling with netlify attribute',
      'Set up split testing for A/B experiments',
      'Use edge functions for dynamic content',
      'Configure redirects for SPA routing',
      'Enable Netlify Identity for user auth',
      'Use environment variables for secrets',
      'Set up build hooks for scheduled rebuilds'
    ],
    bestFor: ['JAMstack sites', 'Static site generators', 'Frontend deployments'],
    officialDocs: 'https://docs.netlify.com/',
    tutorial: 'https://docs.netlify.com/get-started/'
  },

  {
    id: 'expo',
    name: 'Expo',
    category: 'Mobile Development',
    icon: '📱',
    color: '#000020',
    developer: 'Expo',
    platforms: ['iOS', 'Android', 'Web'],
    pricing: 'Free / Production ($29/month) / Enterprise',
    description: 'Framework and platform for universal React applications on mobile and web.',
    features: [
      'Managed workflow with minimal config',
      'Access to 50+ native APIs',
      'Over-the-air (OTA) updates',
      'Easy building and deployment',
      'Web support out of the box',
      'Development tools and debugging',
      'EAS Build (cloud builds)',
      'EAS Submit (app store submission)',
      'Push notifications',
      'Hot reloading'
    ],
    useCases: [
      'Cross-platform mobile apps',
      'React Native development',
      'Rapid prototyping',
      'MVPs and startups',
      'Apps with frequent updates',
      'Progressive Web Apps (PWA)'
    ],
    gettingStarted: `// Create new Expo app
npx create-expo-app my-app
cd my-app
npx expo start

// Run on device (scan QR code with Expo Go app)
npx expo start

// Run on simulator/emulator
npx expo start --ios
npx expo start --android

// Install dependencies
npx expo install expo-camera expo-location

// Build for production with EAS
npm install -g eas-cli
eas login
eas build:configure

// Build iOS
eas build --platform ios

// Build Android
eas build --platform android

// Submit to app stores
eas submit --platform ios
eas submit --platform android

// OTA updates
eas update:configure
eas update --branch production

// app.json configuration
{
  "expo": {
    "name": "My App",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.myapp"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.yourcompany.myapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}`,
    proTips: [
      'Use Expo Go for quick testing on devices',
      'EAS Build for production apps',
      'OTA updates for instant bug fixes',
      'expo-dev-client for custom native code',
      'Use Expo Router for navigation',
      'Configure app.json for all platforms',
      'Test on real devices, not just simulators',
      'Use expo-updates for update strategies'
    ],
    bestFor: ['React Native apps', 'Cross-platform development', 'Rapid prototyping'],
    officialDocs: 'https://docs.expo.dev/',
    tutorial: 'https://docs.expo.dev/tutorial/introduction/'
  },

  {
    id: 'github',
    name: 'GitHub',
    category: 'Version Control & CI/CD',
    icon: '🐙',
    color: '#181717',
    developer: 'Microsoft',
    platforms: ['Web', 'Desktop'],
    pricing: 'Free / Team ($4/user/month) / Enterprise',
    description: 'Leading platform for version control and collaboration.',
    features: [
      'Git repositories',
      'Pull requests & code review',
      'GitHub Actions (CI/CD)',
      'Issues & project management',
      'GitHub Pages hosting',
      'Discussions',
      'Codespaces (cloud IDE)',
      'Copilot (AI assistance)',
      'Security scanning',
      'Package registry'
    ],
    useCases: [
      'Source code management',
      'Team collaboration',
      'CI/CD pipelines',
      'Open source projects',
      'Documentation hosting',
      'Project management'
    ],
    gettingStarted: `// Git basics
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/repo.git
git push -u origin main

// GitHub Actions workflow (.github/workflows/ci.yml)
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm install
    - run: npm test
    - run: npm run build

// GitHub Pages deployment
# Settings → Pages → Source: GitHub Actions
# Builds automatically on push to main`,
    bestFor: ['Open source', 'Team collaboration', 'CI/CD automation'],
    officialDocs: 'https://docs.github.com/',
    tutorial: 'https://docs.github.com/en/get-started'
  },

  // ==================== AI & ML TOOLS ====================
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'AI & ML Tools',
    icon: '🦜',
    color: '#1C3C3C',
    developer: 'LangChain',
    platforms: ['Python', 'JavaScript/TypeScript'],
    pricing: 'Open Source (Free)',
    description: 'Framework for building LLM-powered applications.',
    features: [
      'LLM integration (OpenAI, Anthropic, etc.)',
      'Prompt templates',
      'Memory management',
      'Chains & agents',
      'Vector stores',
      'Document loaders',
      'Retrievers',
      'Output parsers',
      'Callbacks',
      'Tool integration'
    ],
    useCases: [
      'Chatbots',
      'Question-answering systems',
      'Document analysis',
      'RAG applications',
      'AI agents',
      'Semantic search'
    ],
    gettingStarted: `// Install LangChain
npm install langchain

// Basic chat
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7
});

const response = await chat.call([
  new HumanMessage("What is LangChain?")
]);

// RAG (Retrieval-Augmented Generation)
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";

const vectorStore = await MemoryVectorStore.fromTexts(
  ["LangChain is a framework...", "It supports multiple LLMs..."],
  [{ id: 1 }, { id: 2 }],
  new OpenAIEmbeddings()
);

const chain = RetrievalQAChain.fromLLM(
  chat,
  vectorStore.asRetriever()
);

const result = await chain.call({
  query: "What is LangChain?"
});`,
    bestFor: ['LLM applications', 'RAG systems', 'AI chatbots'],
    officialDocs: 'https://js.langchain.com/docs/',
    tutorial: 'https://js.langchain.com/docs/get_started/introduction'
  },

  {
    id: 'ollama',
    name: 'Ollama',
    category: 'AI & ML Tools',
    icon: '🦙',
    color: '#000000',
    developer: 'Ollama',
    platforms: ['macOS', 'Linux', 'Windows'],
    pricing: 'Open Source (Free)',
    description: 'Run large language models locally on your machine.',
    features: [
      'Local LLM execution',
      'No API keys needed',
      'Multiple model support',
      'Simple CLI',
      'REST API',
      'Model library',
      'Custom models',
      'Privacy-focused'
    ],
    useCases: [
      'Local AI development',
      'Offline AI applications',
      'Privacy-sensitive projects',
      'Prototyping',
      'Learning AI',
      'Cost-effective AI'
    ],
    gettingStarted: `// Install Ollama
# macOS/Linux
curl https://ollama.ai/install.sh | sh

# Windows
Download from https://ollama.ai/download

// Run a model
ollama run llama2
ollama run codellama
ollama run mistral

// Use API
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Why is the sky blue?"
}'

// JavaScript integration
const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  body: JSON.stringify({
    model: 'llama2',
    prompt: 'Explain quantum computing',
    stream: false
  })
});

const data = await response.json();
console.log(data.response);

// Available models
ollama list           # List installed models
ollama pull llama2    # Download model
ollama rm llama2      # Remove model`,
    bestFor: ['Local AI development', 'Privacy-focused apps', 'Learning AI'],
    officialDocs: 'https://ollama.ai/docs',
    tutorial: 'https://github.com/ollama/ollama'
  },

  // ==================== UI FRAMEWORKS & DESIGN SYSTEMS ====================
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    category: 'UI Frameworks & Design',
    icon: '🎨',
    color: '#000000',
    developer: 'shadcn',
    platforms: ['Web'],
    pricing: 'Open Source (Free)',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
    features: [
      'Accessible components built on Radix UI',
      'Customizable with Tailwind CSS',
      'Copy/paste components - you own the code',
      'TypeScript support',
      'Dark mode built-in',
      'Fully responsive',
      'Server-side rendering ready',
      'No dependency lock-in'
    ],
    useCases: [
      'Modern web applications',
      'React projects',
      'Next.js applications',
      'Design systems',
      'Component libraries',
      'Admin dashboards'
    ],
    gettingStarted: `// Initialize shadcn/ui
npx shadcn-ui@latest init

// Add individual components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add select

// Button component usage
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}

// Card component usage
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

// Dialog component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

// Form with validation
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
    proTips: [
      'Copy components instead of installing - you own the code',
      'Customize with Tailwind CSS classes',
      'Built on accessible Radix UI primitives',
      'Use dark mode with CSS variables',
      'Combine components for complex UIs',
      'TypeScript support out of the box',
      'Works with Next.js, Vite, Remix',
      'Add only components you need'
    ],
    bestFor: ['React applications', 'Design systems', 'Next.js projects'],
    officialDocs: 'https://ui.shadcn.com/docs',
    tutorial: 'https://ui.shadcn.com/docs/installation'
  },

  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'UI Frameworks & Design',
    icon: '💨',
    color: '#06B6D4',
    developer: 'Tailwind Labs',
    platforms: ['Web'],
    pricing: 'Open Source (Free) / Tailwind UI (Paid)',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    features: [
      'Utility-first approach',
      'Responsive design utilities',
      'Dark mode support',
      'JIT (Just-In-Time) compiler',
      'Customizable via config file',
      'Plugin ecosystem',
      'PurgeCSS integration',
      'IntelliSense support'
    ],
    useCases: [
      'Web applications',
      'Landing pages',
      'Admin dashboards',
      'E-commerce sites',
      'Marketing websites',
      'Component libraries'
    ],
    gettingStarted: `// Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#3B82F6',
      },
    },
  },
  plugins: [],
}

// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// Button styles example
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

<button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent rounded py-2 px-4">
  Outline Button
</button>

// Card layout example
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <img className="w-full" src="/img.jpg" alt="Sunset" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 dark:text-gray-300 text-base">
      Card content goes here
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag
    </span>
  </div>
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white p-6 rounded-lg shadow">Item 1</div>
  <div className="bg-white p-6 rounded-lg shadow">Item 2</div>
  <div className="bg-white p-6 rounded-lg shadow">Item 3</div>
</div>

// Dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content here
</div>

// Custom components layer
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}`,
    proTips: [
      'Use JIT mode for faster builds',
      'Customize theme in tailwind.config.js',
      'Use @apply for reusable components',
      'Install Tailwind CSS IntelliSense extension',
      'Use dark: prefix for dark mode',
      'Responsive prefixes: sm: md: lg: xl: 2xl:',
      'Hover, focus, active states with prefixes',
      'Group utilities with group-hover'
    ],
    bestFor: ['Rapid prototyping', 'Utility-first styling', 'Custom designs'],
    officialDocs: 'https://tailwindcss.com/docs',
    tutorial: 'https://tailwindcss.com/docs/installation'
  },

  {
    id: 'radixui',
    name: 'Radix UI',
    category: 'UI Frameworks & Design',
    icon: '⚛️',
    color: '#8B5CF6',
    developer: 'WorkOS',
    platforms: ['Web'],
    pricing: 'Open Source (Free)',
    description: 'Unstyled, accessible components for building high-quality design systems.',
    features: [
      'Fully accessible (WAI-ARIA)',
      'Unstyled and customizable',
      'TypeScript support',
      'Composable components',
      'Server-side rendering',
      'Keyboard navigation',
      'Focus management',
      'Portals and layers'
    ],
    useCases: [
      'Design systems',
      'Accessible applications',
      'Custom component libraries',
      'React applications',
      'Headless UI',
      'Component foundations'
    ],
    gettingStarted: `// Install Radix UI components
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-select
npm install @radix-ui/react-tooltip

// Dialog component
import * as Dialog from '@radix-ui/react-dialog';

<Dialog.Root>
  <Dialog.Trigger className="btn">Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="dialog-overlay" />
    <Dialog.Content className="dialog-content">
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>
        Dialog description
      </Dialog.Description>
      <Dialog.Close className="btn">Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>

// Dropdown Menu
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

<DropdownMenu.Root>
  <DropdownMenu.Trigger className="btn">
    Options
  </DropdownMenu.Trigger>
  <DropdownMenu.Content className="dropdown-content">
    <DropdownMenu.Item className="dropdown-item">
      Edit
    </DropdownMenu.Item>
    <DropdownMenu.Item className="dropdown-item">
      Duplicate
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item className="dropdown-item">
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

// Select component
import * as Select from '@radix-ui/react-select';

<Select.Root>
  <Select.Trigger className="select-trigger">
    <Select.Value placeholder="Select an option" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content className="select-content">
      <Select.Item value="option1">Option 1</Select.Item>
      <Select.Item value="option2">Option 2</Select.Item>
      <Select.Item value="option3">Option 3</Select.Item>
    </Select.Content>
  </Select.Portal>
</Select.Root>

// Tooltip
import * as Tooltip from '@radix-ui/react-tooltip';

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>Hover me</Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content className="tooltip-content">
        Tooltip text
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>

// Styling with CSS
.dialog-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
}

.dialog-content {
  background: white;
  border-radius: 8px;
  padding: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
    proTips: [
      'Components are unstyled - add your own CSS',
      'Fully accessible out of the box',
      'Composable API for flexibility',
      'Use with any styling solution',
      'TypeScript definitions included',
      'Works with CSS-in-JS, CSS modules, Tailwind',
      'Portal components for overlays',
      'Keyboard navigation built-in'
    ],
    bestFor: ['Accessible UIs', 'Design systems', 'Headless components'],
    officialDocs: 'https://www.radix-ui.com/docs/primitives',
    tutorial: 'https://www.radix-ui.com/docs/primitives/overview/introduction'
  },

  // ==================== MOBILE PUBLISHING ====================
  {
    id: 'google-play-console',
    name: 'Google Play Console',
    category: 'App Publishing',
    icon: '📱',
    color: '#01875F',
    developer: 'Google',
    platforms: ['Android'],
    pricing: '$25 one-time registration fee',
    description: 'Platform for publishing and managing Android apps.',
    features: [
      'App publishing',
      'Release management',
      'In-app purchases',
      'Subscriptions',
      'User reviews',
      'Analytics',
      'Crash reports',
      'A/B testing',
      'Pre-launch reports',
      'Store listing optimization'
    ],
    useCases: [
      'Android app distribution',
      'App monetization',
      'User analytics',
      'Beta testing',
      'App updates'
    ],
    gettingStarted: `// Publishing checklist
1. Create developer account ($25)
2. Prepare app assets:
   - App icon (512x512 PNG)
   - Feature graphic (1024x500)
   - Screenshots (multiple sizes)
   - App description
   - Privacy policy URL

3. Build signed APK/AAB
# Generate keystore
keytool -genkey -v -keystore my-release-key.keystore \\
  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# Build release
./gradlew bundleRelease

4. Upload to Play Console
5. Fill in store listing
6. Set pricing & distribution
7. Submit for review

// In-app purchases setup
1. Products → In-app products
2. Create product ID
3. Set price
4. Implement billing in app

// Testing
- Internal testing (up to 100 testers)
- Closed testing (limited audience)
- Open testing (anyone with link)
- Production release`,
    requirements: [
      'Signed APK or AAB',
      'Privacy policy URL',
      'Content rating',
      'Target audience',
      'App category'
    ],
    bestFor: ['Android app distribution', 'App monetization'],
    officialDocs: 'https://support.google.com/googleplay/android-developer',
    tutorial: 'https://developer.android.com/studio/publish'
  },

  {
    id: 'apple-developer',
    name: 'Apple Developer',
    category: 'App Publishing',
    icon: '🍏',
    color: '#000000',
    developer: 'Apple',
    platforms: ['iOS', 'macOS', 'watchOS', 'tvOS'],
    pricing: '$99/year',
    description: 'Platform for publishing and managing Apple platform apps.',
    features: [
      'App Store distribution',
      'TestFlight beta testing',
      'In-app purchases',
      'Subscriptions',
      'App analytics',
      'Crash reports',
      'Code signing',
      'Provisioning profiles',
      'App Store Connect API',
      'App Store optimization'
    ],
    useCases: [
      'iOS app distribution',
      'Beta testing',
      'App monetization',
      'App analytics',
      'Enterprise distribution'
    ],
    gettingStarted: `// Publishing checklist
1. Enroll in Apple Developer Program ($99/year)
2. Create App ID in developer portal
3. Set up certificates & provisioning profiles
4. Prepare app assets:
   - App icon (1024x1024)
   - Screenshots (multiple device sizes)
   - App preview videos (optional)
   - App description
   - Keywords
   - Privacy policy

5. Archive app in Xcode
Product → Archive

6. Upload to App Store Connect
Window → Organizer → Distribute App

7. Fill in App Store listing
8. Submit for review

// TestFlight beta testing
1. Upload build to App Store Connect
2. Add internal testers (up to 100)
3. Create external test group
4. Add testers via email or public link
5. Distribute build

// In-app purchases
1. App Store Connect → Features → In-App Purchases
2. Create product
3. Set pricing
4. Implement StoreKit in app

import StoreKit

// Request products
let request = SKProductsRequest(productIdentifiers: ["com.app.product"])
request.delegate = self
request.start()`,
    requirements: [
      'macOS with Xcode',
      'Apple Developer account ($99/year)',
      'Valid certificates',
      'App Store guidelines compliance'
    ],
    bestFor: ['iOS/macOS distribution', 'Apple ecosystem'],
    officialDocs: 'https://developer.apple.com/documentation/',
    tutorial: 'https://developer.apple.com/app-store/submitting/'
  },

  // ==================== DATABASES ====================

  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    description: 'Advanced open-source relational database with powerful features and SQL compliance',
    icon: '🐘',
    color: '#336791',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free - Open Source',
    features: [
      'ACID compliance',
      'Complex queries',
      'Foreign keys',
      'Triggers',
      'Views',
      'Stored procedures',
      'JSON/JSONB support',
      'Full-text search',
      'Geospatial data (PostGIS)',
      'Transactions',
      'Replication',
      'Partitioning'
    ],
    useCases: [
      'Enterprise applications',
      'Data warehousing',
      'Geospatial applications',
      'Financial systems',
      'Analytics platforms',
      'E-commerce platforms'
    ],
    gettingStarted: `-- Install PostgreSQL and create database
-- CREATE DATABASE myapp;

-- Connect and create table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB
);

-- Create index
CREATE INDEX idx_users_email ON users(email);

-- Insert data
INSERT INTO users (email, username, metadata)
VALUES ('user@example.com', 'johndoe', '{"age": 30, "city": "NYC"}');

-- Query with JSON
SELECT username, metadata->>'city' as city
FROM users
WHERE metadata->>'age' = '30';

-- Transaction example
BEGIN;
UPDATE users SET username = 'newname' WHERE id = 1;
INSERT INTO user_logs (user_id, action) VALUES (1, 'update');
COMMIT;

-- Node.js with pg library
const { Pool } = require('pg');
const pool = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'myapp',
  password: 'password',
  port: 5432,
});

const result = await pool.query('SELECT * FROM users WHERE id = $1', [1]);`,
    proTips: [
      'Use JSONB instead of JSON for better performance',
      'Create indexes on frequently queried columns',
      'Use connection pooling for better performance',
      'Regular VACUUM and ANALYZE for maintenance',
      'Use prepared statements to prevent SQL injection',
      'Set up replication for high availability',
      'Monitor with pg_stat_statements extension',
      'Use partitioning for large tables'
    ],
    officialDocs: 'https://www.postgresql.org/docs/',
    tutorials: 'https://www.postgresqltutorial.com'
  },

  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    description: 'Popular NoSQL document database with flexible schema and scalability',
    icon: '🍃',
    color: '#47A248',
    platforms: ['Windows', 'macOS', 'Linux', 'Cloud'],
    pricing: 'Free - Open Source (Paid for Atlas)',
    features: [
      'Document-oriented storage',
      'Flexible schema',
      'Horizontal scaling',
      'Aggregation framework',
      'Full-text search',
      'Geospatial queries',
      'Change streams',
      'Transactions',
      'Replication',
      'Sharding',
      'GridFS for files',
      'Atlas managed service'
    ],
    useCases: [
      'Real-time applications',
      'Content management',
      'IoT data storage',
      'Mobile apps',
      'Catalogs and inventories',
      'User profiles and preferences'
    ],
    gettingStarted: `// Install: npm install mongodb

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('myapp');
    const users = database.collection('users');

    // Insert document
    const user = {
      email: 'user@example.com',
      username: 'johndoe',
      age: 30,
      tags: ['developer', 'javascript'],
      address: {
        city: 'NYC',
        country: 'USA'
      },
      createdAt: new Date()
    };
    await users.insertOne(user);

    // Find documents
    const query = { age: { $gte: 25 } };
    const cursor = users.find(query);
    await cursor.forEach(doc => console.log(doc));

    // Update document
    await users.updateOne(
      { email: 'user@example.com' },
      { $set: { age: 31 }, $push: { tags: 'mongodb' } }
    );

    // Aggregation
    const pipeline = [
      { $match: { tags: 'developer' } },
      { $group: { _id: '$address.city', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ];
    const results = await users.aggregate(pipeline).toArray();

    // Create index
    await users.createIndex({ email: 1 }, { unique: true });
  } finally {
    await client.close();
  }
}
run();`,
    proTips: [
      'Use indexes for frequently queried fields',
      'Embed data for 1-to-1 and 1-to-few relationships',
      'Use references for 1-to-many and many-to-many',
      'Leverage aggregation pipeline for complex queries',
      'Use change streams for real-time updates',
      'Set up replica sets for high availability',
      'Use MongoDB Atlas for managed hosting',
      'Monitor performance with Atlas performance advisor'
    ],
    officialDocs: 'https://docs.mongodb.com',
    tutorials: 'https://university.mongodb.com'
  },

  {
    id: 'redis',
    name: 'Redis',
    category: 'Databases',
    description: 'In-memory data structure store used as database, cache, and message broker',
    icon: '🔴',
    color: '#DC382D',
    platforms: ['Windows', 'macOS', 'Linux', 'Cloud'],
    pricing: 'Free - Open Source (Paid for Enterprise)',
    features: [
      'In-memory storage',
      'Multiple data structures',
      'Pub/Sub messaging',
      'Transactions',
      'Lua scripting',
      'Persistence options',
      'Replication',
      'Cluster support',
      'Streams',
      'Geospatial indexes',
      'Sorted sets',
      'HyperLogLog'
    ],
    useCases: [
      'Caching',
      'Session storage',
      'Real-time analytics',
      'Leaderboards',
      'Rate limiting',
      'Message queues'
    ],
    gettingStarted: `// Install: npm install redis

const redis = require('redis');
const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

await client.connect();

// String operations
await client.set('user:1:name', 'John Doe');
const name = await client.get('user:1:name');

// Expiring keys (caching)
await client.setEx('session:abc123', 3600, JSON.stringify({ userId: 1 }));

// Hash operations (objects)
await client.hSet('user:1', {
  name: 'John Doe',
  email: 'john@example.com',
  age: '30'
});
const user = await client.hGetAll('user:1');

// List operations (queues)
await client.lPush('tasks', 'task1', 'task2', 'task3');
const task = await client.rPop('tasks');

// Set operations (unique items)
await client.sAdd('tags', 'javascript', 'nodejs', 'redis');
const tags = await client.sMembers('tags');

// Sorted set (leaderboard)
await client.zAdd('leaderboard', [
  { score: 100, value: 'player1' },
  { score: 85, value: 'player2' },
  { score: 120, value: 'player3' }
]);
const topPlayers = await client.zRange('leaderboard', 0, 2, { REV: true });

// Pub/Sub
const subscriber = client.duplicate();
await subscriber.connect();
await subscriber.subscribe('notifications', (message) => {
  console.log('Received:', message);
});
await client.publish('notifications', 'New message');`,
    proTips: [
      'Use Redis for frequently accessed data',
      'Set appropriate TTL for cached data',
      'Use pipelining for multiple commands',
      'Use Lua scripts for atomic operations',
      'Monitor memory usage with INFO command',
      'Use Redis Cluster for horizontal scaling',
      'Configure persistence based on your needs',
      'Use connection pooling in production'
    ],
    officialDocs: 'https://redis.io/documentation',
    tutorials: 'https://redis.io/learn'
  },

  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases',
    description: 'World\'s most popular open-source relational database',
    icon: '🐬',
    color: '#4479A1',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free - Open Source (Paid for Enterprise)',
    features: [
      'ACID compliance',
      'InnoDB storage engine',
      'Replication',
      'Partitioning',
      'Stored procedures',
      'Triggers',
      'Views',
      'Full-text search',
      'JSON support',
      'High availability',
      'Performance Schema',
      'MySQL Workbench'
    ],
    useCases: [
      'Web applications',
      'E-commerce',
      'Content management',
      'Data warehousing',
      'Logging',
      'Social platforms'
    ],
    gettingStarted: `-- Create database
CREATE DATABASE myapp;
USE myapp;

-- Create table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2),
    category VARCHAR(100),
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category)
);

-- Insert data
INSERT INTO products (name, price, category, stock)
VALUES ('Laptop', 999.99, 'Electronics', 50);

-- Query
SELECT * FROM products 
WHERE category = 'Electronics' 
  AND price < 1000
ORDER BY price DESC;

-- Node.js with mysql2
const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'myapp',
  password: 'password'
});

// Prepared statement
const [rows] = await connection.execute(
  'SELECT * FROM products WHERE category = ?',
  ['Electronics']
);

// Transaction
await connection.beginTransaction();
try {
  await connection.execute('UPDATE products SET stock = stock - 1 WHERE id = ?', [1]);
  await connection.execute('INSERT INTO orders (product_id, quantity) VALUES (?, ?)', [1, 1]);
  await connection.commit();
} catch (err) {
  await connection.rollback();
  throw err;
}`,
    proTips: [
      'Use InnoDB for transactional tables',
      'Create indexes on WHERE and JOIN columns',
      'Use connection pooling',
      'Enable query cache for read-heavy workloads',
      'Regular backups with mysqldump',
      'Monitor slow query log',
      'Use EXPLAIN to optimize queries',
      'Consider MySQL 8.0 for better performance'
    ],
    officialDocs: 'https://dev.mysql.com/doc/',
    tutorials: 'https://www.mysqltutorial.org'
  },

  // ==================== TESTING FRAMEWORKS ====================

  {
    id: 'jest',
    name: 'Jest',
    category: 'Testing',
    description: 'Delightful JavaScript testing framework with focus on simplicity',
    icon: '🃏',
    color: '#C21325',
    platforms: ['Cross-platform'],
    pricing: 'Free - Open Source',
    features: [
      'Zero configuration',
      'Snapshot testing',
      'Code coverage',
      'Mocking support',
      'Parallel test execution',
      'Watch mode',
      'TypeScript support',
      'React testing',
      'Async testing',
      'Custom matchers',
      'Test isolation',
      'Great error messages'
    ],
    useCases: [
      'Unit testing',
      'Integration testing',
      'React component testing',
      'API testing',
      'Snapshot testing',
      'TDD development'
    ],
    gettingStarted: `// Install: npm install --save-dev jest

// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}

// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});

// Async testing
test('fetches user data', async () => {
  const data = await fetchUser(1);
  expect(data.name).toBe('John');
});

// Mocking
jest.mock('./api');
const api = require('./api');

test('calls API', async () => {
  api.fetchData.mockResolvedValue({ id: 1 });
  const result = await api.fetchData();
  expect(api.fetchData).toHaveBeenCalled();
  expect(result.id).toBe(1);
});

// React component testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`,
    proTips: [
      'Use describe blocks to group related tests',
      'Write tests before fixing bugs (TDD)',
      'Use watch mode during development',
      'Aim for high code coverage but focus on critical paths',
      'Mock external dependencies',
      'Use snapshot testing for UI components',
      'Run tests in CI/CD pipeline',
      'Use --onlyChanged flag for faster testing'
    ],
    officialDocs: 'https://jestjs.io/docs/getting-started',
    tutorials: 'https://jestjs.io/docs/tutorial-react'
  },

  {
    id: 'pytest',
    name: 'Pytest',
    category: 'Testing',
    description: 'Mature full-featured Python testing framework for writing better programs',
    icon: '🐍',
    color: '#0A9EDC',
    platforms: ['Cross-platform'],
    pricing: 'Free - Open Source',
    features: [
      'Simple test syntax',
      'Fixtures',
      'Parametrization',
      'Plugins ecosystem',
      'Detailed assertions',
      'Test discovery',
      'Parallel execution',
      'Coverage reporting',
      'Mocking support',
      'Test markers',
      'Skip/xfail tests',
      'Doctest integration'
    ],
    useCases: [
      'Unit testing',
      'Integration testing',
      'API testing',
      'Database testing',
      'Test automation',
      'TDD/BDD development'
    ],
    gettingStarted: `# Install: pip install pytest pytest-cov

# test_math.py
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

# Run: pytest
# Coverage: pytest --cov=myapp tests/

# Fixtures
import pytest

@pytest.fixture
def user():
    return {"id": 1, "name": "John", "email": "john@example.com"}

def test_user_name(user):
    assert user["name"] == "John"

# Parametrization
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0, 0, 0),
    (10, -5, 5)
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected

# Testing exceptions
def test_division_by_zero():
    with pytest.raises(ZeroDivisionError):
        result = 1 / 0

# Async testing
@pytest.mark.asyncio
async def test_async_function():
    result = await fetch_data()
    assert result["status"] == "success"

# Mocking
from unittest.mock import Mock, patch

def test_api_call():
    with patch('requests.get') as mock_get:
        mock_get.return_value.json.return_value = {"id": 1}
        response = fetch_user(1)
        assert response["id"] == 1
        mock_get.assert_called_once()

# Database fixture with cleanup
@pytest.fixture
def db_session():
    session = create_session()
    yield session
    session.rollback()
    session.close()`,
    proTips: [
      'Use fixtures for setup and teardown',
      'Leverage parametrize for multiple test cases',
      'Use markers to categorize tests (@pytest.mark.slow)',
      'Run specific tests with -k flag',
      'Use conftest.py for shared fixtures',
      'Generate HTML reports with pytest-html',
      'Use pytest-xdist for parallel execution',
      'Configure pytest.ini for project settings'
    ],
    officialDocs: 'https://docs.pytest.org',
    tutorials: 'https://docs.pytest.org/en/stable/getting-started.html'
  },

  {
    id: 'junit',
    name: 'JUnit',
    category: 'Testing',
    description: 'Simple framework for writing repeatable tests in Java',
    icon: '☕',
    color: '#25A162',
    platforms: ['Cross-platform (Java)'],
    pricing: 'Free - Open Source',
    features: [
      'Annotations-based testing',
      'Assertions',
      'Test lifecycle hooks',
      'Parameterized tests',
      'Test suites',
      'Exception testing',
      'Timeout support',
      'Assumptions',
      'Nested tests',
      'Test ordering',
      'Extensions',
      'Maven/Gradle integration'
    ],
    useCases: [
      'Unit testing',
      'Integration testing',
      'TDD development',
      'Regression testing',
      'CI/CD integration',
      'Spring Boot testing'
    ],
    gettingStarted: `// Add to pom.xml (Maven)
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>

// Calculator.java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Division by zero");
        return a / b;
    }
}

// CalculatorTest.java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    @DisplayName("Adding two positive numbers")
    void testAdd() {
        assertEquals(5, calculator.add(2, 3));
    }
    
    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "-1, 1, 0"
    })
    void testAddParameterized(int a, int b, int expected) {
        assertEquals(expected, calculator.add(a, b));
    }
    
    @Test
    void testDivideByZero() {
        Exception exception = assertThrows(
            IllegalArgumentException.class,
            () -> calculator.divide(10, 0)
        );
        assertTrue(exception.getMessage().contains("Division by zero"));
    }
    
    @Test
    @Timeout(1)
    void testPerformance() {
        // Test completes within 1 second
        calculator.add(1, 2);
    }
    
    @Nested
    @DisplayName("When calculator is initialized")
    class WhenInitialized {
        @Test
        void shouldAddPositiveNumbers() {
            assertTrue(calculator.add(1, 2) > 0);
        }
    }
}

// Run: mvn test`,
    proTips: [
      'Use @DisplayName for readable test names',
      'Group related tests with @Nested',
      'Use @ParameterizedTest for multiple inputs',
      'Leverage @BeforeEach and @AfterEach for setup/cleanup',
      'Use AssertJ for fluent assertions',
      'Run tests in parallel for faster execution',
      'Use @Tag for categorizing tests',
      'Integrate with Mockito for mocking'
    ],
    officialDocs: 'https://junit.org/junit5/docs/current/user-guide/',
    tutorials: 'https://junit.org/junit5/docs/current/user-guide/#overview-getting-started'
  },

  // ==================== CI/CD TOOLS ====================

  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'CI/CD',
    description: 'Automate, customize, and execute software development workflows in GitHub',
    icon: '⚡',
    color: '#2088FF',
    platforms: ['Cloud'],
    pricing: 'Free (with limits) - Paid tiers available',
    features: [
      'Workflow automation',
      'CI/CD pipelines',
      'Matrix builds',
      'Secrets management',
      'Marketplace actions',
      'Self-hosted runners',
      'Schedule triggers',
      'Manual workflow dispatch',
      'Artifact storage',
      'Environment deployments',
      'Status checks',
      'Dependency caching'
    ],
    useCases: [
      'Automated testing',
      'Build and deployment',
      'Code quality checks',
      'Release automation',
      'Documentation generation',
      'Scheduled tasks'
    ],
    gettingStarted: `# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Build application
        run: npm run build
      
      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - name: Download artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
      
      - name: Deploy to production
        env:
          DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}
        run: |
          echo "Deploying to production..."
          # Your deployment script`,
    proTips: [
      'Use matrix strategy for testing multiple versions',
      'Cache dependencies to speed up workflows',
      'Use secrets for sensitive data',
      'Leverage reusable workflows',
      'Use conditional execution with if statements',
      'Set up branch protection rules',
      'Use environments for deployment approvals',
      'Monitor workflow usage and costs'
    ],
    officialDocs: 'https://docs.github.com/en/actions',
    tutorials: 'https://docs.github.com/en/actions/learn-github-actions'
  },

  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    description: 'Platform for developing, shipping, and running applications in containers',
    icon: '🐳',
    color: '#2496ED',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free - Open Source (Paid for Enterprise)',
    features: [
      'Container orchestration',
      'Image management',
      'Docker Compose',
      'Multi-stage builds',
      'Volume management',
      'Network isolation',
      'Docker Hub registry',
      'Resource limits',
      'Health checks',
      'Swarm mode',
      'BuildKit',
      'Docker Desktop'
    ],
    useCases: [
      'Microservices deployment',
      'Development environments',
      'CI/CD pipelines',
      'Application isolation',
      'Cloud migration',
      'Testing environments'
    ],
    gettingStarted: `# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD node healthcheck.js

# Run application
CMD ["node", "server.js"]

# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d \\
  --name myapp \\
  -p 3000:3000 \\
  -e NODE_ENV=production \\
  -v /data:/app/data \\
  myapp:1.0

# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:
      - db
    restart: unless-stopped
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:

# Commands
docker-compose up -d          # Start services
docker-compose logs -f app    # View logs
docker-compose down           # Stop services
docker ps                     # List containers
docker images                 # List images
docker exec -it myapp sh      # Access container shell`,
    proTips: [
      'Use multi-stage builds to reduce image size',
      'Leverage .dockerignore to exclude files',
      'Use specific image tags instead of latest',
      'Minimize layers by combining RUN commands',
      'Use docker-compose for multi-container apps',
      'Set up health checks for containers',
      'Use volumes for persistent data',
      'Scan images for vulnerabilities with docker scan'
    ],
    officialDocs: 'https://docs.docker.com',
    tutorials: 'https://docs.docker.com/get-started/'
  },

  {
    id: 'postman',
    name: 'Postman',
    category: 'API Development',
    description: 'API platform for building, testing, and documenting APIs',
    icon: '📮',
    color: '#FF6C37',
    platforms: ['Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Free - Paid tiers available',
    features: [
      'API request builder',
      'Collections',
      'Environment variables',
      'Test scripts',
      'Mock servers',
      'API documentation',
      'Team collaboration',
      'Automated testing',
      'Monitors',
      'API versioning',
      'Code generation',
      'GraphQL support'
    ],
    useCases: [
      'API development',
      'API testing',
      'API documentation',
      'Team collaboration',
      'API monitoring',
      'Integration testing'
    ],
    gettingStarted: `// Example API collection structure

// 1. Create environment variables
{
  "baseUrl": "https://api.example.com",
  "apiKey": "your-api-key",
  "userId": ""
}

// 2. Pre-request script (runs before request)
// Set dynamic variables
pm.environment.set("timestamp", Date.now());

// Generate token
const token = CryptoJS.MD5(pm.environment.get("apiKey")).toString();
pm.environment.set("token", token);

// 3. Test script (runs after request)
// Test status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test response time
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Parse and save response data
const jsonData = pm.response.json();
pm.test("User has valid ID", function () {
    pm.expect(jsonData.id).to.be.a('number');
    pm.environment.set("userId", jsonData.id);
});

// Test array length
pm.test("Returns 10 items", function () {
    pm.expect(jsonData.items).to.have.lengthOf(10);
});

// 4. Request examples

// GET request with query params
GET {{baseUrl}}/users?page=1&limit=10
Authorization: Bearer {{token}}

// POST request with JSON body
POST {{baseUrl}}/users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john@example.com"
}

// PUT request
PUT {{baseUrl}}/users/{{userId}}
Content-Type: application/json
{
  "name": "Jane Doe"
}

// 5. Collection runner
// Run entire collection with different data
// Data file (CSV or JSON):
[
  {"email": "user1@test.com", "name": "User 1"},
  {"email": "user2@test.com", "name": "User 2"}
]`,
    proTips: [
      'Use environments for different stages (dev, staging, prod)',
      'Organize requests into collections',
      'Write comprehensive test scripts',
      'Use variables for dynamic data',
      'Share collections with team members',
      'Set up monitors for API health checks',
      'Generate API documentation from collections',
      'Use Newman for CLI and CI/CD integration'
    ],
    officialDocs: 'https://learning.postman.com/docs',
    tutorials: 'https://learning.postman.com'
  },

  // ==================== MORE CI/CD TOOLS ====================

  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'CI/CD',
    description: 'Leading open-source automation server for continuous integration and delivery',
    icon: '🔨',
    color: '#D24939',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    pricing: 'Free - Open Source',
    features: [
      'Pipeline as code',
      '1800+ plugins',
      'Distributed builds',
      'Blue Ocean UI',
      'Declarative pipelines',
      'Scripted pipelines',
      'Build triggers',
      'Test reporting',
      'Artifact management',
      'Security & credentials',
      'Role-based access',
      'Email notifications'
    ],
    useCases: [
      'CI/CD pipelines',
      'Automated testing',
      'Build automation',
      'Deployment automation',
      'Scheduled jobs',
      'Multi-branch pipelines'
    ],
    gettingStarted: `// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any
    
    tools {
        nodejs 'Node 18'
        maven 'Maven 3.9'
    }
    
    environment {
        NODE_ENV = 'production'
        DEPLOY_KEY = credentials('deploy-key-id')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/user/repo.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
                junit 'test-results/**/*.xml'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**/*',
                                fingerprint: true
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh './deploy.sh'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            emailext subject: 'Build Successful',
                     body: 'The build completed successfully',
                     to: 'team@example.com'
        }
        failure {
            emailext subject: 'Build Failed',
                     body: 'The build failed. Check console output.',
                     to: 'team@example.com'
        }
    }
}

// Scripted Pipeline
node {
    stage('Build') {
        checkout scm
        sh 'npm install'
        sh 'npm run build'
    }
}`,
    proTips: [
      'Use Jenkinsfile for version-controlled pipelines',
      'Leverage shared libraries for reusable code',
      'Use Blue Ocean for better visualization',
      'Set up webhook triggers for automatic builds',
      'Use credentials plugin for secrets management',
      'Configure distributed builds for parallel execution',
      'Regular backup of Jenkins configuration',
      'Monitor build queue and executor utilization'
    ],
    officialDocs: 'https://www.jenkins.io/doc/',
    tutorials: 'https://www.jenkins.io/doc/tutorials/'
  },

  {
    id: 'gitlab-ci',
    name: 'GitLab CI/CD',
    category: 'CI/CD',
    description: 'Integrated CI/CD platform built into GitLab for automated pipelines',
    icon: '🦊',
    color: '#FC6D26',
    platforms: ['Cloud', 'Self-hosted'],
    pricing: 'Free tier - Paid tiers available',
    features: [
      'Integrated with GitLab',
      'YAML-based pipelines',
      'Auto DevOps',
      'Container registry',
      'Environment management',
      'Review apps',
      'Kubernetes integration',
      'Security scanning',
      'Code quality reports',
      'Parallel jobs',
      'Caching',
      'Artifacts'
    ],
    useCases: [
      'Full DevOps lifecycle',
      'Automated testing',
      'Container deployment',
      'Kubernetes deployments',
      'Security scanning',
      'Multi-project pipelines'
    ],
    gettingStarted: `# .gitlab-ci.yml
image: node:18

stages:
  - install
  - lint
  - test
  - build
  - deploy

variables:
  NODE_ENV: production
  CACHE_KEY: \${CI_COMMIT_REF_SLUG}

cache:
  key: \${CACHE_KEY}
  paths:
    - node_modules/
    - .npm/

before_script:
  - node --version
  - npm --version

install:
  stage: install
  script:
    - npm ci --cache .npm --prefer-offline
  artifacts:
    paths:
      - node_modules/
    expire_in: 1 hour

lint:
  stage: lint
  script:
    - npm run lint
  needs: [install]

test:unit:
  stage: test
  script:
    - npm run test:unit
  coverage: '/Statements\\s*:\\s*(\\d+\\.\\d+)%/'
  artifacts:
    reports:
      junit: test-results/junit.xml
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml
  needs: [install]

test:integration:
  stage: test
  services:
    - postgres:15
    - redis:7
  variables:
    POSTGRES_DB: testdb
    POSTGRES_USER: user
    POSTGRES_PASSWORD: password
  script:
    - npm run test:integration
  needs: [install]

build:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 week
  only:
    - main
    - develop
  needs: [test:unit, test:integration]

deploy:staging:
  stage: deploy
  script:
    - echo "Deploying to staging"
    - ./deploy.sh staging
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - develop
  needs: [build]

deploy:production:
  stage: deploy
  script:
    - echo "Deploying to production"
    - ./deploy.sh production
  environment:
    name: production
    url: https://example.com
  only:
    - main
  when: manual
  needs: [build]`,
    proTips: [
      'Use include keyword for reusable pipeline templates',
      'Leverage cache to speed up builds',
      'Use needs for DAG pipelines',
      'Set up protected variables for secrets',
      'Use dynamic environments for review apps',
      'Enable Auto DevOps for quick setup',
      'Monitor pipeline efficiency metrics',
      'Use rules instead of only/except for better control'
    ],
    officialDocs: 'https://docs.gitlab.com/ee/ci/',
    tutorials: 'https://docs.gitlab.com/ee/ci/quick_start/'
  },

  // ==================== MONITORING & ERROR TRACKING ====================

  {
    id: 'sentry',
    name: 'Sentry',
    category: 'Monitoring',
    description: 'Application monitoring platform with real-time error tracking and performance monitoring',
    icon: '🔍',
    color: '#362D59',
    platforms: ['Cloud', 'Self-hosted'],
    pricing: 'Free tier - Paid tiers available',
    features: [
      'Real-time error tracking',
      'Performance monitoring',
      'Release tracking',
      'Source maps',
      'Breadcrumbs',
      'Issue grouping',
      'Alerts & notifications',
      'User feedback',
      'Stack traces',
      'Context & tags',
      'Search & filtering',
      'Integrations'
    ],
    useCases: [
      'Error monitoring',
      'Performance tracking',
      'Release health',
      'User impact analysis',
      'Debug production issues',
      'Crash reporting'
    ],
    gettingStarted: `// Install: npm install @sentry/node @sentry/tracing

// Node.js/Express setup
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const express = require('express');
const app = express();

// Initialize Sentry before other code
Sentry.init({
  dsn: 'your-sentry-dsn',
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  release: 'my-app@1.0.0',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
});

// RequestHandler must be first middleware
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// Your routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Capture exceptions
app.get('/error', (req, res) => {
  throw new Error('Test error');
});

// ErrorHandler must be before other error middleware
app.use(Sentry.Handlers.errorHandler());

// React setup
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'your-sentry-dsn',
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Manual error capture
try {
  riskyFunction();
} catch (error) {
  Sentry.captureException(error, {
    tags: { section: 'checkout' },
    extra: { userId: user.id },
    level: 'error',
  });
}

// Add context
Sentry.setUser({
  id: '123',
  email: 'user@example.com',
  username: 'johndoe',
});

Sentry.setTag('page_locale', 'en-us');
Sentry.setContext('character', {
  name: 'Mighty Fighter',
  level: 19,
});

// Breadcrumbs
Sentry.addBreadcrumb({
  category: 'auth',
  message: 'User logged in',
  level: 'info',
});

// Performance monitoring
const transaction = Sentry.startTransaction({
  op: 'task',
  name: 'Process Payment',
});

const span = transaction.startChild({
  op: 'http',
  description: 'Payment API call',
});

// Do work...
span.finish();
transaction.finish();`,
    proTips: [
      'Set up source maps for readable stack traces',
      'Use release tracking to identify which version has issues',
      'Configure alerts for critical errors',
      'Use breadcrumbs for debugging context',
      'Filter out noise with ignore rules',
      'Set up performance monitoring for slow transactions',
      'Use custom tags for better error categorization',
      'Integrate with issue trackers (Jira, GitHub)'
    ],
    officialDocs: 'https://docs.sentry.io',
    tutorials: 'https://docs.sentry.io/platforms/'
  },

  {
    id: 'datadog',
    name: 'Datadog',
    category: 'Monitoring',
    description: 'Cloud-scale monitoring platform for infrastructure, applications, and logs',
    icon: '🐶',
    color: '#632CA6',
    platforms: ['Cloud'],
    pricing: 'Free trial - Paid service',
    features: [
      'Infrastructure monitoring',
      'APM (Application Performance)',
      'Log management',
      'Synthetic monitoring',
      'Real User Monitoring',
      'Network monitoring',
      'Security monitoring',
      'Custom dashboards',
      'Alerting',
      'Distributed tracing',
      'Service maps',
      '500+ integrations'
    ],
    useCases: [
      'Full-stack monitoring',
      'Cloud infrastructure monitoring',
      'Application performance',
      'Log analytics',
      'Security monitoring',
      'DevOps observability'
    ],
    gettingStarted: `// Install Datadog agent
// Linux/Mac:
DD_API_KEY=<your-api-key> DD_SITE="datadoghq.com" bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_script.sh)"

// Node.js APM setup
// Install: npm install dd-trace

// At the very top of your entry file
require('dd-trace').init({
  logInjection: true,
  env: 'production',
  service: 'my-app',
  version: '1.0.0',
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Custom metrics
const tracer = require('dd-trace');
const metrics = tracer.dogstatsd;

// Increment counter
metrics.increment('page.views', 1, ['page:home']);

// Gauge (current value)
metrics.gauge('users.online', 150);

// Histogram (distribution)
metrics.histogram('request.duration', 245, ['endpoint:/api/users']);

// Custom span
const span = tracer.startSpan('custom.operation', {
  tags: {
    'user.id': '123',
    'operation.type': 'payment',
  },
});

try {
  // Your operation
  processPayment();
  span.setTag('status', 'success');
} catch (error) {
  span.setTag('error', true);
  span.setTag('error.message', error.message);
  throw error;
} finally {
  span.finish();
}

// Log correlation
const logger = require('winston');
const format = require('logform');

logger.configure({
  format: format.combine(
    format.json(),
    format.timestamp()
  ),
  transports: [
    new logger.transports.Console(),
  ],
});

logger.info('User logged in', {
  'dd.trace_id': tracer.scope().active()?.context()?.toTraceId(),
  'dd.span_id': tracer.scope().active()?.context()?.toSpanId(),
  'user.id': '123',
});`,
    proTips: [
      'Use tags consistently for better filtering',
      'Set up composite monitors for complex conditions',
      'Create service-level objectives (SLOs)',
      'Use log patterns to identify recurring issues',
      'Set up anomaly detection for unusual behavior',
      'Leverage APM flame graphs for performance optimization',
      'Use dashboards to visualize key metrics',
      'Configure alert fatigue reduction with smart grouping'
    ],
    officialDocs: 'https://docs.datadoghq.com',
    tutorials: 'https://docs.datadoghq.com/getting_started/'
  },

  // ==================== FRONTEND TESTING ====================

  {
    id: 'cypress',
    name: 'Cypress',
    category: 'Testing',
    description: 'Fast, easy and reliable testing for anything that runs in a browser',
    icon: '🌲',
    color: '#17202C',
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free - Open Source (Paid Cloud)',
    features: [
      'End-to-end testing',
      'Component testing',
      'Time travel debugging',
      'Automatic waiting',
      'Real-time reloads',
      'Screenshots & videos',
      'Network stubbing',
      'Cross-browser testing',
      'API testing',
      'Visual regression',
      'CI/CD integration',
      'Cypress Cloud'
    ],
    useCases: [
      'E2E testing',
      'Integration testing',
      'Component testing',
      'API testing',
      'Visual testing',
      'Smoke testing'
    ],
    gettingStarted: `// Install: npm install cypress --save-dev

// package.json
{
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}

// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('https://example.com/login');
  });

  it('should login successfully with valid credentials', () => {
    // Type into inputs
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('SecurePass123!');
    
    // Click button
    cy.get('button[type="submit"]').click();
    
    // Assert URL changed
    cy.url().should('include', '/dashboard');
    
    // Assert element exists
    cy.get('[data-testid="welcome-message"]')
      .should('contain', 'Welcome back');
  });

  it('should show error with invalid credentials', () => {
    cy.get('[data-testid="email"]').type('wrong@example.com');
    cy.get('[data-testid="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});

// API Testing
describe('API Tests', () => {
  it('should fetch users', () => {
    cy.request('GET', 'https://api.example.com/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);
        expect(response.body[0]).to.have.property('id');
      });
  });

  it('should create user', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.example.com/users',
      body: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });
});

// Custom commands (cypress/support/commands.js)
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Use custom command
cy.login('user@example.com', 'password');

// Intercept network requests
cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
cy.visit('/users');
cy.wait('@getUsers');`,
    proTips: [
      'Use data-testid attributes for stable selectors',
      'Leverage cy.intercept() for API mocking',
      'Use custom commands for reusable logic',
      'Run tests in CI with cypress run',
      'Use Cypress Cloud for test analytics',
      'Take advantage of time-travel debugging',
      'Use fixtures for test data',
      'Set baseUrl in cypress.config.js'
    ],
    officialDocs: 'https://docs.cypress.io',
    tutorials: 'https://docs.cypress.io/guides/getting-started/installing-cypress'
  },

  // ==================== BUILD TOOLS ====================

  {
    id: 'webpack',
    name: 'Webpack',
    category: 'Build Tools',
    description: 'Static module bundler for modern JavaScript applications',
    icon: '📦',
    color: '#8DD6F9',
    platforms: ['Cross-platform'],
    pricing: 'Free - Open Source',
    features: [
      'Module bundling',
      'Code splitting',
      'Tree shaking',
      'Hot Module Replacement',
      'Loaders',
      'Plugins',
      'Asset optimization',
      'Development server',
      'Source maps',
      'Caching',
      'Production optimization',
      'Multi-entry support'
    ],
    useCases: [
      'Single-page applications',
      'Multi-page applications',
      'Progressive web apps',
      'Library bundling',
      'Asset optimization',
      'Development workflow'
    ],
    gettingStarted: `// Install: npm install webpack webpack-cli --save-dev

// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  
  entry: {
    app: './src/index.js',
    vendor: './src/vendor.js',
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          priority: 10,
        },
      },
    },
    runtimeChunk: 'single',
  },
  
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  
  devtool: 'source-map',
};

// package.json scripts
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "analyze": "webpack-bundle-analyzer dist/stats.json"
  }
}`,
    proTips: [
      'Use contenthash for long-term caching',
      'Enable tree shaking in production mode',
      'Split code with dynamic imports',
      'Use webpack-bundle-analyzer to optimize bundle size',
      'Leverage caching for faster builds',
      'Use different configs for dev and production',
      'Minimize plugins in development for faster builds',
      'Use source maps for debugging'
    ],
    officialDocs: 'https://webpack.js.org/concepts/',
    tutorials: 'https://webpack.js.org/guides/getting-started/'
  },

  {
    id: 'vite',
    name: 'Vite',
    category: 'Build Tools',
    description: 'Next-generation frontend build tool with lightning-fast cold start',
    icon: '⚡',
    color: '#646CFF',
    platforms: ['Cross-platform'],
    pricing: 'Free - Open Source',
    features: [
      'Instant server start',
      'Lightning fast HMR',
      'Optimized builds',
      'Universal plugin interface',
      'TypeScript support',
      'CSS pre-processors',
      'Asset handling',
      'Library mode',
      'Multi-page support',
      'Environment variables',
      'Production optimization',
      'Framework plugins'
    ],
    useCases: [
      'React applications',
      'Vue applications',
      'Svelte applications',
      'Vanilla JavaScript',
      'Library development',
      'Static site generation'
    ],
    gettingStarted: `// Create new project
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, ''),
      },
    },
  },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@mui/material'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
});

// Environment variables (.env)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App

// Use in code
const apiUrl = import.meta.env.VITE_API_URL;

// Dynamic imports (code splitting)
const Dashboard = () => import('./pages/Dashboard');

// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`,
    proTips: [
      'Use Vite for faster development experience',
      'Leverage native ES modules in development',
      'Use dynamic imports for code splitting',
      'Configure proxy for API during development',
      'Use environment variables with VITE_ prefix',
      'Optimize build with manual chunks',
      'Use vite-plugin-pwa for PWA support',
      'Preview production build with vite preview'
    ],
    officialDocs: 'https://vitejs.dev/guide/',
    tutorials: 'https://vitejs.dev/guide/why.html'
  },

  // ==================== CLOUD PLATFORMS ====================

  {
    id: 'aws',
    name: 'Amazon Web Services',
    category: 'Cloud Platforms',
    description: 'Comprehensive cloud computing platform with 200+ services',
    icon: '☁️',
    color: '#FF9900',
    platforms: ['Cloud'],
    pricing: 'Pay-as-you-go',
    features: [
      'EC2 compute instances',
      'S3 object storage',
      'RDS databases',
      'Lambda serverless',
      'CloudFront CDN',
      'API Gateway',
      'DynamoDB NoSQL',
      'ECS/EKS containers',
      'CloudWatch monitoring',
      'IAM security',
      'VPC networking',
      'Elastic Beanstalk'
    ],
    useCases: [
      'Web application hosting',
      'Serverless applications',
      'Data storage & backup',
      'Machine learning',
      'IoT applications',
      'Enterprise solutions'
    ],
    gettingStarted: `// Install AWS CLI
# Windows: Download from AWS website
# Mac: brew install awscli
# Linux: apt install awscli

// Configure AWS CLI
aws configure
# AWS Access Key ID: [your-key]
# AWS Secret Access Key: [your-secret]
# Default region: us-east-1
# Default output format: json

// Node.js AWS SDK
// Install: npm install @aws-sdk/client-s3 @aws-sdk/client-dynamodb

// S3 Example
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({ region: 'us-east-1' });

// Upload file
const uploadParams = {
  Bucket: 'my-bucket',
  Key: 'file.txt',
  Body: 'Hello World',
  ContentType: 'text/plain',
};

await s3Client.send(new PutObjectCommand(uploadParams));

// Download file
const downloadParams = {
  Bucket: 'my-bucket',
  Key: 'file.txt',
};

const response = await s3Client.send(new GetObjectCommand(downloadParams));

// DynamoDB Example
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({ region: 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);

// Put item
await docClient.send(new PutCommand({
  TableName: 'Users',
  Item: {
    userId: '123',
    name: 'John Doe',
    email: 'john@example.com',
  },
}));

// Get item
const result = await docClient.send(new GetCommand({
  TableName: 'Users',
  Key: { userId: '123' },
}));

// Lambda function
exports.handler = async (event) => {
  const { name } = JSON.parse(event.body);
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: \`Hello, \${name}!\`,
    }),
  };
};`,
    proTips: [
      'Use IAM roles instead of access keys when possible',
      'Enable CloudWatch for monitoring and logging',
      'Use CloudFormation for infrastructure as code',
      'Leverage S3 lifecycle policies for cost optimization',
      'Use VPC for network isolation',
      'Enable MFA for root account',
      'Use AWS Cost Explorer to monitor spending',
      'Implement proper tagging strategy for resources'
    ],
    officialDocs: 'https://docs.aws.amazon.com',
    tutorials: 'https://aws.amazon.com/getting-started/'
  },

  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    category: 'Cloud Platforms',
    description: 'Simple cloud computing platform designed for developers',
    icon: '🌊',
    color: '#0080FF',
    platforms: ['Cloud'],
    pricing: 'Simple pricing from $4/month',
    features: [
      'Droplets (VMs)',
      'Kubernetes',
      'App Platform',
      'Managed Databases',
      'Spaces (Object Storage)',
      'Load Balancers',
      'Firewalls',
      'Block Storage',
      'Monitoring',
      'Snapshots & Backups',
      'One-click apps',
      'API access'
    ],
    useCases: [
      'Web hosting',
      'API backends',
      'Containerized apps',
      'Static sites',
      'Development environments',
      'Microservices'
    ],
    gettingStarted: `// Install doctl CLI
# Mac: brew install doctl
# Linux: snap install doctl
# Windows: Download from DigitalOcean

// Authenticate
doctl auth init

// Create Droplet
doctl compute droplet create my-droplet \\
  --image ubuntu-22-04-x64 \\
  --size s-1vcpu-1gb \\
  --region nyc1 \\
  --ssh-keys YOUR_SSH_KEY_ID

// List Droplets
doctl compute droplet list

// SSH into Droplet
doctl compute ssh my-droplet

// Deploy with App Platform
# app.yaml
name: my-app
services:
- name: web
  github:
    repo: username/repo
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  routes:
  - path: /
  envs:
  - key: NODE_ENV
    value: production

// Deploy app
doctl apps create --spec app.yaml

// Spaces (S3-compatible storage)
// Install: npm install aws-sdk

const AWS = require('aws-sdk');

const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
});

// Upload file
const params = {
  Bucket: 'my-space',
  Key: 'file.txt',
  Body: 'Hello World',
  ACL: 'public-read',
};

s3.putObject(params, (err, data) => {
  if (err) console.error(err);
  else console.log('File uploaded');
});

// Managed Database connection
const { Pool } = require('pg');

const pool = new Pool({
  host: 'db-postgresql-nyc1-12345.ondigitalocean.com',
  port: 25060,
  database: 'defaultdb',
  user: 'doadmin',
  password: 'your-password',
  ssl: { rejectUnauthorized: false },
});`,
    proTips: [
      'Use App Platform for easy deployments',
      'Enable automated backups for Droplets',
      'Use block storage for persistent data',
      'Leverage one-click apps for quick setup',
      'Use Spaces for CDN-backed object storage',
      'Set up monitoring and alerts',
      'Use managed databases for production',
      'Take snapshots before major changes'
    ],
    officialDocs: 'https://docs.digitalocean.com',
    tutorials: 'https://www.digitalocean.com/community/tutorials'
  }
];

// ==================== HELPER FUNCTIONS ====================

export function getToolsByCategory(category) {
  return toolsData.filter(tool => tool.category === category);
}

export function getAllCategories() {
  const categories = [...new Set(toolsData.map(tool => tool.category))];
  return categories.map(category => ({
    name: category,
    count: toolsData.filter(t => t.category === category).length,
    tools: getToolsByCategory(category)
  }));
}

export function getAllTools() {
  return toolsData;
}

export function searchTools(query) {
  const searchTerm = query.toLowerCase();
  return toolsData.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm) ||
    tool.description.toLowerCase().includes(searchTerm) ||
    tool.category.toLowerCase().includes(searchTerm) ||
    tool.features.some(f => f.toLowerCase().includes(searchTerm)) ||
    tool.useCases.some(u => u.toLowerCase().includes(searchTerm))
  );
}

export function getToolById(id) {
  return toolsData.find(tool => tool.id === id);
}

export function getFreeTools() {
  return toolsData.filter(tool => 
    tool.pricing.toLowerCase().includes('free') ||
    tool.pricing.toLowerCase().includes('open source')
  );
}

export function getToolsByPlatform(platform) {
  return toolsData.filter(tool =>
    tool.platforms && tool.platforms.includes(platform)
  );
}

export function getPopularTools() {
  // Popular tools based on usage
  const popularIds = ['vscode', 'github', 'firebase', 'vercel', 'android-studio'];
  return toolsData.filter(tool => popularIds.includes(tool.id));
}

export function getToolStats() {
  return {
    total: toolsData.length,
    byCategory: getAllCategories().reduce((acc, cat) => {
      acc[cat.name] = cat.count;
      return acc;
    }, {}),
    freeTools: getFreeTools().length,
    paidTools: toolsData.filter(t => !t.pricing.toLowerCase().includes('free')).length
  };
}
