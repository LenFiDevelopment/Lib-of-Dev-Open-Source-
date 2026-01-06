import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, borderRadius } from '../constants/theme';

/**
 * Tabs Component - Material/Ant Design style
 */
export const Tabs = ({ tabs, activeTab, onTabChange, style }) => {
  return (
    <View style={[styles.tabsContainer, style]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabsList}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.value}
              style={[
                styles.tab,
                activeTab === tab.value && styles.tabActive,
              ]}
              onPress={() => onTabChange(tab.value)}
            >
              {tab.icon && <Text style={styles.tabIcon}>{tab.icon}</Text>}
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.value && styles.tabTextActive,
                ]}
              >
                {tab.label}
              </Text>
              {tab.badge && (
                <View style={styles.tabBadge}>
                  <Text style={styles.tabBadgeText}>{tab.badge}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.tabIndicator} />
    </View>
  );
};

/**
 * Accordion Component
 */
export const Accordion = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View style={styles.accordion}>
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.accordionTitle}>{title}</Text>
        <Text style={styles.accordionIcon}>{expanded ? '▼' : '▶'}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.accordionContent}>{children}</View>
      )}
    </View>
  );
};

/**
 * Toast/Snackbar Component
 */
export const Toast = ({ message, type = 'info', visible, onDismiss }) => {
  if (!visible) return null;

  const typeStyles = {
    info: { backgroundColor: colors.info },
    success: { backgroundColor: colors.success },
    warning: { backgroundColor: colors.warning },
    error: { backgroundColor: colors.error },
  };

  const typeIcons = {
    info: 'ℹ️',
    success: '✓',
    warning: '⚠️',
    error: '✕',
  };

  return (
    <View style={[styles.toast, typeStyles[type]]}>
      <Text style={styles.toastIcon}>{typeIcons[type]}</Text>
      <Text style={styles.toastMessage}>{message}</Text>
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss} style={styles.toastClose}>
          <Text style={styles.toastCloseText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

/**
 * Tag/Label Component (Different from Chip)
 */
export const Tag = ({ children, color = colors.primary, onClose, style }) => {
  return (
    <View style={[styles.tag, { backgroundColor: color + '20', borderColor: color }, style]}>
      <Text style={[styles.tagText, { color }]}>{children}</Text>
      {onClose && (
        <TouchableOpacity onPress={onClose} style={styles.tagClose}>
          <Text style={[styles.tagCloseText, { color }]}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

/**
 * Slider Component
 */
export const Slider = ({ value = 50, min = 0, max = 100, onChange, style }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <View style={[styles.sliderContainer, style]}>
      <View style={styles.sliderTrack}>
        <View style={[styles.sliderFill, { width: `${percentage}%` }]} />
        <View style={[styles.sliderThumb, { left: `${percentage}%` }]} />
      </View>
      <Text style={styles.sliderValue}>{Math.round(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Tabs
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabsList: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.primary,
  },
  tabIcon: {
    fontSize: 16,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textMuted,
  },
  tabTextActive: {
    color: colors.text,
    fontWeight: '600',
  },
  tabBadge: {
    backgroundColor: colors.error,
    borderRadius: borderRadius.full,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 18,
    alignItems: 'center',
  },
  tabBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.buttonText,
  },
  tabIndicator: {
    height: 2,
    backgroundColor: colors.primary,
  },
  
  // Accordion
  accordion: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  accordionIcon: {
    fontSize: 12,
    color: colors.textMuted,
  },
  accordionContent: {
    padding: spacing.md,
    paddingTop: 0,
  },
  
  // Toast
  toast: {
    position: 'absolute',
    bottom: spacing.xl,
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  toastIcon: {
    fontSize: 20,
    color: colors.buttonText,
  },
  toastMessage: {
    flex: 1,
    fontSize: 14,
    color: colors.buttonText,
    fontWeight: '500',
  },
  toastClose: {
    padding: spacing.xs,
  },
  toastCloseText: {
    fontSize: 18,
    color: colors.buttonText,
    fontWeight: 'bold',
  },
  
  // Tag
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: spacing.sm,
    paddingRight: spacing.xs,
    paddingVertical: spacing.xs - 2,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    gap: spacing.xs,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  tagClose: {
    padding: 2,
  },
  tagCloseText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  
  // Slider
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  sliderTrack: {
    flex: 1,
    height: 4,
    backgroundColor: colors.backgroundElevated,
    borderRadius: 2,
    position: 'relative',
  },
  sliderFill: {
    position: 'absolute',
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  sliderThumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    top: -6,
    marginLeft: -8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sliderValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    minWidth: 32,
    textAlign: 'right',
  },
});
