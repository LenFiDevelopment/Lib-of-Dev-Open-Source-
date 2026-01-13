import { Dimensions, Platform } from 'react-native';

/**
 * Responsive Helper - Device-aware positioning and sizing
 */

export const getScreenInfo = () => {
  const { width, height } = Dimensions.get('window');
  
  // Determine device type based on screen size
  let deviceType = 'phone'; // default
  let orientation = width > height ? 'landscape' : 'portrait';
  
  if (width >= 768) {
    deviceType = 'tablet';
  } else if (width >= 600) {
    deviceType = 'large-phone';
  } else {
    deviceType = 'small-phone';
  }
  
  // Calculate safe areas
  const statusBarHeight = Platform.OS === 'android' ? 24 : 44;
  const tabBarHeight = 56; // Standard React Navigation tab bar
  const safeArea = {
    top: statusBarHeight,
    bottom: tabBarHeight + 10,
    left: 10,
    right: 10,
  };
  
  const availableHeight = height - safeArea.top - safeArea.bottom;
  
  return {
    width,
    height,
    deviceType,
    orientation,
    isTablet: deviceType === 'tablet',
    isSmallPhone: deviceType === 'small-phone',
    isLargePhone: deviceType === 'large-phone',
    safeArea,
    availableHeight,
  };
};

/**
 * Calculate responsive tooltip dimensions and position
 */
export const getTooltipDimensions = () => {
  const screen = getScreenInfo();
  
  let maxWidth = 320;
  let maxHeight = 280;
  let padding = 12;
  let fontSize = {
    title: 13,
    description: 11,
    button: 12,
  };
  
  if (screen.isTablet) {
    maxWidth = 420;
    maxHeight = 340;
    padding = 16;
    fontSize = { title: 15, description: 13, button: 13 };
  } else if (screen.isLargePhone) {
    maxWidth = 360;
    maxHeight = 300;
    padding = 14;
    fontSize = { title: 14, description: 12, button: 12 };
  }
  
  return { maxWidth, maxHeight, padding, fontSize };
};

/**
 * Smart tooltip positioning - avoids overlaps with content and navigation
 */
export const calculateSmartTooltipPosition = (stepId, spotlightY = 0) => {
  const screen = getScreenInfo();
  const dims = getTooltipDimensions();
  
  // Reserve space for tab bar at bottom and status bar at top
  const tabBarStart = screen.height - screen.safeArea.bottom;
  const statusBarEnd = screen.safeArea.top;
  
  // Strategy by step - special positioning for known problematic steps
  switch (stepId) {
    case 'quick-access':
      // Position lower on screen, give user time to scroll to quick access
      return {
        top: screen.height * 0.35,
        bottom: undefined,
        strategy: 'middle-upper',
      };
      
    case 'programming-languages':
      // Position above or below languages
      return {
        top: screen.height / 2 - 100,
        bottom: undefined,
        strategy: 'middle',
      };
      
    case 'community':
      // Position MUCH lower to show after scroll
      return {
        top: screen.height * 0.55,
        bottom: undefined,
        strategy: 'middle-lower',
      };
      
    case 'search':
      // Position in top half, away from tab bar
      return {
        top: statusBarEnd + 80,
        bottom: undefined,
        strategy: 'top-safe',
      };
      
    case 'ask-ai':
      // Center the AI intro
      return {
        top: screen.height / 2 - dims.maxHeight / 2,
        bottom: undefined,
        strategy: 'centered',
      };
      
    case 'ai-response-modes':
      // Position BELOW the selector so spotlight is visible
      return {
        top: screen.height * 0.5,
        bottom: undefined,
        strategy: 'middle',
      };
      
    case 'ai-api-key':
      // Center for API key setup
      return {
        top: screen.height / 2 - dims.maxHeight / 2,
        bottom: undefined,
        strategy: 'centered',
      };
      
    case 'favorites':
      // Position to avoid tab bar
      return {
        top: statusBarEnd + 60,
        bottom: undefined,
        strategy: 'top-safe',
      };
      
    case 'settings-overview':
      // Position to avoid tab bar
      return {
        top: statusBarEnd + 60,
        bottom: undefined,
        strategy: 'top-safe',
      };
      
    case 'restart-tutorial':
      // Position in top-middle to show restart button area
      return {
        top: screen.height / 2 - dims.maxHeight / 2 - 60,
        bottom: undefined,
        strategy: 'upper-middle',
      };
      
    default:
      // Default: position based on spotlight if available
      if (spotlightY && spotlightY > 0) {
        return calculateTooltipPosition(spotlightY);
      }
      
      return {
        top: screen.height / 2 - dims.maxHeight / 2,
        bottom: undefined,
        strategy: 'default',
      };
  }
};

/**
 * Calculate best tooltip position based on spotlight and available space
 */
export const calculateTooltipPosition = (spotlightY, spotlightRadius = 70) => {
  const screen = getScreenInfo();
  const dims = getTooltipDimensions();
  
  // Min space needed above/below spotlight
  const minSpaceNeeded = dims.maxHeight + 40;
  
  // Space available above and below spotlight
  const spaceAbove = spotlightY - screen.safeArea.top - minSpaceNeeded;
  const spaceBelow = screen.height - spotlightY - spotlightRadius - screen.safeArea.bottom - minSpaceNeeded;
  
  let position = {};
  
  if (spaceBelow > 0) {
    // Place below spotlight if enough space
    position.top = spotlightY + spotlightRadius + 30;
    position.bottom = undefined;
  } else if (spaceAbove > 0) {
    // Place above spotlight if not enough space below
    position.bottom = screen.height - spotlightY + 30;
    position.top = undefined;
  } else {
    // Both spaces tight - use center screen positioning
    position.top = screen.height / 2 - dims.maxHeight / 2;
    position.bottom = undefined;
  }
  
  return position;
};

/**
 * Calculate position for info-only steps (no spotlight)
 */
export const calculateInfoStepPosition = (stepPosition) => {
  const screen = getScreenInfo();
  const dims = getTooltipDimensions();
  
  const padding = 60;
  
  switch (stepPosition) {
    case 'top':
      return { top: padding, bottom: undefined };
    case 'center':
      return { 
        top: screen.availableHeight / 2 - dims.maxHeight / 2 + screen.safeArea.top,
        bottom: undefined 
      };
    case 'bottom':
      return { bottom: padding, top: undefined };
    default:
      return { 
        top: screen.availableHeight / 2 - dims.maxHeight / 2 + screen.safeArea.top,
        bottom: undefined 
      };
  }
};

/**
 * Get responsive scroll offset - ensures element is visible with padding
 */
export const getScrollOffset = (componentY, componentHeight) => {
  const screen = getScreenInfo();
  const padding = 100; // Extra padding to show context
  
  // Calculate where to scroll so component is centered with padding
  const targetScroll = Math.max(0, componentY - padding);
  
  return targetScroll;
};

/**
 * Get responsive font sizes based on device
 */
export const getResponsiveFontSize = () => {
  const dims = getTooltipDimensions();
  return dims.fontSize;
};

/**
 * Get responsive spacing based on device
 */
export const getResponsiveSpacing = () => {
  const screen = getScreenInfo();
  const dims = getTooltipDimensions();
  
  return {
    padding: dims.padding,
    margin: dims.padding / 2,
    gap: dims.padding / 3,
  };
};

/**
 * Calculate if element is visible in viewport with margin
 */
export const isElementVisible = (elementY, elementHeight, margin = 100) => {
  const screen = getScreenInfo();
  
  const elementTop = elementY - margin;
  const elementBottom = elementY + elementHeight + margin;
  
  const viewportTop = screen.safeArea.top;
  const viewportBottom = screen.height - screen.safeArea.bottom;
  
  return !(elementBottom < viewportTop || elementTop > viewportBottom);
};
