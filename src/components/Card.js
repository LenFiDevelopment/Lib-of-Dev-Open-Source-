import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, borderRadius, shadows, spacing } from '../constants/theme';

export const Card = React.memo(({ 
  children, 
  onPress, 
  style,
  elevated = true,
  padding = true 
}) => {
  const cardStyles = [
    styles.card,
    elevated && shadows.medium,
    padding && styles.padding,
    style
  ];

  if (onPress) {
    return (
      <TouchableOpacity 
        style={cardStyles} 
        onPress={onPress}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyles}>{children}</View>;
});

Card.displayName = 'Card';

export const LanguageCard = React.memo(({ 
  icon, 
  name, 
  description, 
  color, 
  onPress,
  itemCount 
}) => {
  return (
    <Card onPress={onPress} style={styles.languageCard}>
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.languageContent}>
        <Text style={styles.languageName}>{name}</Text>
        <Text style={styles.languageDescription} numberOfLines={2}>
          {description}
        </Text>
        {itemCount && (
          <Text style={styles.itemCount}>{itemCount} examples</Text>
        )}
      </View>
      <Text style={styles.arrow}>›</Text>
    </Card>
  );
});

LanguageCard.displayName = 'LanguageCard';

export const CodeCard = React.memo(({ 
  title, 
  code, 
  language,
  onPress,
  showPreview = true 
}) => {
  return (
    <Card onPress={onPress} style={styles.codeCard}>
      <View style={styles.codeHeader}>
        <Text style={styles.codeTitle}>{title}</Text>
        {language && (
          <View style={styles.languageBadge}>
            <Text style={styles.languageBadgeText}>{language}</Text>
          </View>
        )}
      </View>
      {showPreview && (
        <View style={styles.codePreview}>
          <Text style={styles.codeText} numberOfLines={3}>
            {code}
          </Text>
        </View>
      )}
    </Card>
  );
});

CodeCard.displayName = 'CodeCard';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  padding: {
    padding: spacing.md,
  },
  languageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  icon: {
    fontSize: 32,
  },
  languageContent: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  languageDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  itemCount: {
    fontSize: 12,
    color: colors.textMuted,
  },
  arrow: {
    fontSize: 24,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
  codeCard: {
    marginBottom: spacing.sm,
  },
  codeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  languageBadge: {
    backgroundColor: colors.primary + '30',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    marginLeft: spacing.sm,
  },
  languageBadgeText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  codePreview: {
    backgroundColor: colors.codeBackground,
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: colors.codeText,
    lineHeight: 18,
  },
});
