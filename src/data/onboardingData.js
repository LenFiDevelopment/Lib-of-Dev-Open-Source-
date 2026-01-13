// Onboarding Tutorial Steps - Optimized user experience flow
export const onboardingSteps = [
  {
    id: 'welcome',
    title: '👋 Welcome to Lib of Dev!',
    description: 'Your all-in-one developer companion! 20+ programming languages, 1000+ code examples, AI chat assistant, tutorials, tools, and more. Let\'s show you around in 60 seconds!',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Browse',
    icon: '🎓',
  },
  {
    id: 'home-screen',
    title: '🏠 Your Home Base',
    description: 'Everything starts here! Browse 20+ programming languages (JavaScript, Python, Java, C++, Rust...), access quick shortcuts, and discover what\'s new. This is your command center.',
    position: 'center',
    targetComponent: 'homeTabBar',
    navigationTarget: 'Browse',
    icon: '🏠',
  },
  {
    id: 'quick-access',
    title: '⚡ Quick Access Shortcuts',
    description: '8 fast shortcuts to jump directly to:\n🎨 UI Components • 💡 Dev Hints • 🛠️ Tools • 📋 Projects • 🎯 How-To Guides • 🔌 Specialized Topics • 📚 Resources • 🧩 Tutorials',
    position: 'center',
    targetComponent: 'quickAccess',
    navigationTarget: 'Browse',
    icon: '🚀',
    highlightText: 'These cards save you time - tap any one! ↑',
    scrollDelay: 800,
  },
  {
    id: 'programming-languages',
    title: '💻 20+ Programming Languages',
    description: 'Each language card shows:\n✓ Total code examples available\n✓ Brief description\n✓ Tap to explore syntax, patterns, best practices, and real examples',
    position: 'center',
    targetComponent: 'languages',
    navigationTarget: 'Browse',
    icon: '🔤',
    highlightText: 'Tap any language to dive deep into code examples ↓',
    scrollDelay: 800,
  },
  {
    id: 'search',
    title: '🔍 Powerful Smart Search',
    description: 'Can\'t find something? Search across everything:\n• Languages & frameworks\n• Code examples & tutorials\n• Tools & resources\n• How-to guides\nResults appear instantly!',
    position: 'center',
    targetComponent: 'searchTabBar',
    navigationTarget: 'Search',
    icon: '🔎',
  },
  {
    id: 'favorites',
    title: '⭐ Your Personal Collection',
    description: 'Found something useful? Save it!\n\nTap the ⭐ star icon on any:\n• Code example\n• Tutorial\n• Tool\n• Guide\n\nAll your starred items live here for quick access.',
    position: 'center',
    targetComponent: 'favoritesTabBar',
    navigationTarget: 'Favorites',
    icon: '💎',
  },
  {
    id: 'settings-overview',
    title: '⚙️ Settings & Customization',
    description: 'Personalize your experience:\n• Switch language (EN/DE)\n• Add AI API key\n• View privacy & security info\n• Rate the app\n• Restart this tutorial\n• Check app version & open-source details',
    position: 'center',
    targetComponent: 'settingsTabBar',
    navigationTarget: 'Settings',
    icon: '⚙️',
  },
  {
    id: 'ai-api-key',
    title: '🔑 AI Setup (Optional but Awesome!)',
    description: 'Want AI coding help? Get a FREE Groq API key:\n\n1️⃣ Visit console.groq.com\n2️⃣ Sign up (takes 2 minutes)\n3️⃣ Generate API key\n4️⃣ Add it in Settings → AI Chat\n\nNo credit card needed! 100% free tier available.',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Settings',
    icon: '🔐',
    highlightText: 'AI Chat Settings is in this screen ↓',
  },
  {
    id: 'ask-ai',
    title: '🤖 AI Coding Assistant',
    description: 'Once you add your API key, ask anything:\n• "Explain async/await in JavaScript"\n• "Find bugs in my code"\n• "Optimize this function"\n• "Convert Python to JavaScript"\n\nPowered by Groq\'s lightning-fast AI!',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'AskAI',
    icon: '🤖',
  },
  {
    id: 'ai-response-modes',
    title: '📝 Choose Your AI Style',
    description: 'Customize how AI responds:\n\n📌 SHORT: Quick, concise answers\n📌 NORMAL: Balanced (recommended)\n📌 DETAILED: Deep explanations with examples\n\nSwitch anytime based on what you need!',
    position: 'center',
    targetComponent: 'aiResponseModes',
    navigationTarget: 'AskAI',
    icon: '⚙️',
    highlightText: 'Tap here to switch response modes ↑',
  },
  {
    id: 'community',
    title: '🌟 Join Our Community!',
    description: 'This is open-source! Help us improve:\n\n🐛 Report bugs on GitHub\n💡 Suggest features\n⭐ Star the repository\n🤝 Contribute code\n📸 Share on Instagram\n\nLet\'s build something amazing together!',
    position: 'center',
    targetComponent: 'community',
    navigationTarget: 'Browse',
    icon: '👥',
    highlightText: 'Scroll down on Home to find community links ↓',
    scrollDelay: 900,
  },
  {
    id: 'ready-to-code',
    title: '🚀 You\'re All Set!',
    description: 'That\'s it! You now know:\n✓ How to browse languages & examples\n✓ Quick access shortcuts\n✓ Search & favorites\n✓ AI assistant setup\n✓ How to join the community\n\nNeed this again? Go to Settings → Restart Tutorial\n\nHappy coding! 💻',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Browse',
    icon: '🎉',
  },
];

// Onboarding state configuration
export const onboardingConfig = {
  storageKey: '@onboarding_completed',
  stepStorageKey: '@onboarding_last_step',
  versionKey: '@onboarding_version',
  currentVersion: '1.0', // Bump this to show onboarding again after major app updates
};

// Helper function to get next step
export function getNextStep(currentStepIndex) {
  if (currentStepIndex < onboardingSteps.length - 1) {
    return onboardingSteps[currentStepIndex + 1];
  }
  return null;
}

// Helper function to get previous step
export function getPreviousStep(currentStepIndex) {
  if (currentStepIndex > 0) {
    return onboardingSteps[currentStepIndex - 1];
  }
  return null;
}
