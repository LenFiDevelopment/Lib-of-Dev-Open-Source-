// Onboarding Tutorial Steps - Scalable structure for future growth
export const onboardingSteps = [
  {
    id: 'welcome',
    title: '📚 Welcome to Lib of Dev',
    description: 'Your comprehensive library for development learning. Explore programming languages, frameworks, tools, and best practices all in one place. Let\'s take a quick tour!',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Browse',
    icon: '🎓',
  },
  {
    id: 'home-screen',
    title: '🏠 Home Screen',
    description: 'This is your main hub! Browse programming languages, tutorials, tools, learning paths, and specialized topics all organized in categories.',
    position: 'center',
    targetComponent: 'homeTabBar',
    navigationTarget: 'Browse',
    icon: '🏠',
  },
  {
    id: 'quick-access',
    title: '⚡ Quick Access Cards',
    description: 'Tap any card to jump to: Components, Tools, Hints, Projects, How-To guides, and specialized topics. Fast shortcuts to what you need!',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Browse',
    icon: '🚀',
    highlightText: 'Scroll the screen up to see these cards ↑',
    scrollDelay: 500, // Extra time for scroll animation
  },
  {
    id: 'programming-languages',
    title: '💻 Programming Languages',
    description: '20+ languages: JavaScript, Python, Java, C++, Rust & more. Tap any language to explore code examples and tutorials.',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Browse',
    icon: '🔤',
    highlightText: 'Scroll down to find these language cards ↓',
  },
  {
    id: 'community',
    title: '🌟 Join Our Community',
    description: 'Connect on GitHub, report issues, share on Instagram, or contribute code. Help make this app better for everyone!',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Browse',
    icon: '👥',
    highlightText: 'Scroll down to find community links ↓↓',
    scrollDelay: 600, // Extra time for scroll to bottom
  },
  {
    id: 'search',
    title: '🔍 Smart Search',
    description: 'Find anything quickly! Search for languages, frameworks, tools, guides, or resources by keyword. Filter results for faster discovery.',
    position: 'center',
    targetComponent: 'searchTabBar',
    navigationTarget: 'Search',
    icon: '🔎',
  },
  {
    id: 'ask-ai',
    title: '🤖 Ask AI Assistant',
    description: 'Get instant coding help! Ask questions, debug code, learn concepts. Powered by Groq\'s fast AI. Swipe left to learn more! →',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'AskAI',
    icon: '🤖',
  },
  {
    id: 'ai-response-modes',
    title: '📝 AI Response Modes',
    description: 'Choose your response style: SHORT for quick answers, NORMAL for balanced responses (recommended), or DETAILED for in-depth help.',
    position: 'center',
    targetComponent: 'aiResponseModes',
    navigationTarget: 'AskAI',
    icon: '⚙️',
    highlightText: 'Tap to change response mode ↑',
  },
  {
    id: 'ai-api-key',
    title: '🔑 API Key Setup',
    description: 'Need a free Groq API key:\n1. Visit console.groq.com\n2. Sign up (2 minutes)\n3. Copy your API key\n4. Add in Settings → AI Chat',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'AskAI',
    icon: '🔐',
  },
  {
    id: 'favorites',
    title: '⭐ Favorites',
    description: 'Save your favorite code examples, tutorials, and tools here! Tap the star icon on any content to add it to your favorites collection.',
    position: 'center',
    targetComponent: 'favoritesTabBar',
    navigationTarget: 'Favorites',
    icon: '💎',
  },
  {
    id: 'settings-overview',
    title: '⚙️ Settings & Customization',
    description: 'Customize your experience! Change language, manage your Groq API key, rate the app, view open-source info, or restart this tutorial.',
    position: 'center',
    targetComponent: 'settingsTabBar',
    navigationTarget: 'Settings',
    icon: '⚙️',
  },
  {
    id: 'restart-tutorial',
    title: '🔄 Need Help Again?',
    description: 'You can restart this tutorial anytime from Settings! Just tap "Restart Tutorial" button and you\'ll see this guide again. Happy coding! 🚀',
    position: 'center',
    targetComponent: null,
    navigationTarget: 'Settings',
    icon: '🎓',
    highlightText: 'Restart button is in the Settings screen ↓',
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
