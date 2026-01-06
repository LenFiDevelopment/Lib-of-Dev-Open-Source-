import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

/**
 * CodeBlock component for displaying code with syntax highlighting
 * Similar to shadcn/ui code blocks
 */
export const CodeBlock = ({ code, language = 'javascript', showLineNumbers = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.language}>{language}</Text>
        <TouchableOpacity onPress={handleCopy} style={styles.copyButton}>
          <Text style={styles.copyButtonText}>{copied ? '✓ Copied' : '📋 Copy'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>{code}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

/**
 * Preview component for showing live component previews
 * Similar to shadcn/ui preview sections
 */
export const Preview = ({ children, title, description }) => {
  return (
    <View style={styles.previewContainer}>
      {(title || description) && (
        <View style={styles.previewHeader}>
          {title && <Text style={styles.previewTitle}>{title}</Text>}
          {description && <Text style={styles.previewDescription}>{description}</Text>}
        </View>
      )}
      <View style={styles.previewContent}>
        {children}
      </View>
    </View>
  );
};

/**
 * ComponentShowcase combines Preview and CodeBlock
 * Shows component example with code below
 */
export const ComponentShowcase = ({ 
  title, 
  description, 
  preview, 
  code, 
  language = 'javascript',
  installation 
}) => {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <View style={styles.showcaseContainer}>
      {/* Title & Description */}
      {(title || description) && (
        <View style={styles.showcaseHeader}>
          {title && <Text style={styles.showcaseTitle}>{title}</Text>}
          {description && <Text style={styles.showcaseDescription}>{description}</Text>}
        </View>
      )}

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'preview' && styles.tabActive]}
          onPress={() => setActiveTab('preview')}
        >
          <Text style={[styles.tabText, activeTab === 'preview' && styles.tabTextActive]}>
            Preview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'code' && styles.tabActive]}
          onPress={() => setActiveTab('code')}
        >
          <Text style={[styles.tabText, activeTab === 'code' && styles.tabTextActive]}>
            Code
          </Text>
        </TouchableOpacity>
        {installation && (
          <TouchableOpacity
            style={[styles.tab, activeTab === 'install' && styles.tabActive]}
            onPress={() => setActiveTab('install')}
          >
            <Text style={[styles.tabText, activeTab === 'install' && styles.tabTextActive]}>
              Install
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Content */}
      <View style={styles.showcaseContent}>
        {activeTab === 'preview' && (
          <View style={styles.previewPane}>
            {preview}
          </View>
        )}
        
        {activeTab === 'code' && code && (
          <CodeBlock code={code} language={language} />
        )}
        
        {activeTab === 'install' && installation && (
          <CodeBlock code={installation} language="bash" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // CodeBlock Styles
  container: {
    backgroundColor: colors.codeBackground,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.backgroundElevated,
  },
  language: {
    fontSize: typography.sizes.xs,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  copyButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.background,
  },
  copyButtonText: {
    fontSize: typography.sizes.xs,
    color: colors.text,
    fontWeight: '500',
  },
  codeContainer: {
    padding: spacing.md,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: typography.sizes.sm,
    color: colors.codeText,
    lineHeight: 20,
  },

  // Preview Styles
  previewContainer: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  previewHeader: {
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  previewTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  previewDescription: {
    fontSize: typography.sizes.sm,
    color: colors.textMuted,
    lineHeight: 20,
  },
  previewContent: {
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },

  // ComponentShowcase Styles
  showcaseContainer: {
    marginBottom: spacing.xl,
  },
  showcaseHeader: {
    marginBottom: spacing.md,
  },
  showcaseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  showcaseDescription: {
    fontSize: typography.sizes.md,
    color: colors.textMuted,
    lineHeight: 22,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: spacing.md,
  },
  tab: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.xs,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: typography.sizes.sm,
    fontWeight: '500',
    color: colors.textMuted,
  },
  tabTextActive: {
    color: colors.text,
  },
  showcaseContent: {
    minHeight: 200,
  },
  previewPane: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
