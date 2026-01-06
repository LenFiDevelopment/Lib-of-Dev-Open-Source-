/**
 * App Constants
 * Central place for app-wide constants
 */

// Storage Keys
export const STORAGE_KEYS = {
  API_KEY: '@groq_api_key',
  CHAT_HISTORY: '@ai_chat_history',
  USER_PREFERENCES: '@user_preferences',
  USER_INTERESTS: '@user_interests',
  USER_LANGUAGES: '@user_languages',
  SELECTED_LANGUAGE: '@app_language',
};

// API Configuration
export const API_CONFIG = {
  GROQ_URL: 'https://api.groq.com/openai/v1/chat/completions',
  DEFAULT_MODEL: 'llama-3.3-70b-versatile',
  TIMEOUT: 30000, // 30 seconds
};

// AdMob Configuration
export const ADMOB_CONFIG = {
  APP_ID: 'ca-app-pub-5526801232554836~6275754332',
  BANNER_IDS: {
    HOME: 'ca-app-pub-5526801232554836/5282576179',
    GROQ_CHAT: 'ca-app-pub-5526801232554836/8545682699',
  },
  TEST_DEVICES: [],
};

// Response Modes for AI Chat
export const RESPONSE_MODES = {
  SHORT: 'short',
  NORMAL: 'normal',
  DETAILED: 'detailed',
};

// Animation Durations
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints (for potential responsive design)
export const BREAKPOINTS = {
  SMALL: 320,
  MEDIUM: 768,
  LARGE: 1024,
  XLARGE: 1440,
};

// App Metadata
export const APP_METADATA = {
  VERSION: '2.0.0',
  BUILD: '1',
  NAME: 'Lib of Dev',
  DESCRIPTION: 'Your comprehensive development library',
  GITHUB_URL: 'https://github.com/LenFiDevelopment/Lib-of-Dev-Open-Source-',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  API_ERROR: 'API request failed. Please try again.',
  STORAGE_ERROR: 'Failed to save data locally.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  SAVED: 'Successfully saved!',
  COPIED: 'Copied to clipboard!',
  DELETED: 'Successfully deleted!',
};

export default {
  STORAGE_KEYS,
  API_CONFIG,
  ADMOB_CONFIG,
  RESPONSE_MODES,
  ANIMATION,
  BREAKPOINTS,
  APP_METADATA,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
