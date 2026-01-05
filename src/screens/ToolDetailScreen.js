import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Linking,
  Share
} from 'react-native';
import { theme } from '../constants/theme';
import * as Clipboard from 'expo-clipboard';

export default function ToolDetailScreen({ route, navigation }) {
  const { tool } = route.params;
  const [expandedSections, setExpandedSections] = useState({
    features: true,
    useCases: false,
    gettingStarted: false,
    tips: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    alert('✅ Copied to clipboard!');
  };

  const openURL = (url) => {
    if (url) {
      Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
    }
  };

  const shareTool = async () => {
    try {
      await Share.share({
        message: `Check out ${tool.name} - ${tool.description}\n\n${tool.officialDocs}`,
        title: tool.name
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const renderCodeBlock = (code) => {
    if (!code) return null;
    
    return (
      <View style={styles.codeBlock}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text style={styles.codeText}>{code}</Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => copyToClipboard(code)}
        >
          <Text style={styles.copyButtonText}>📋 Copy</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSection = (title, items, sectionKey, renderItem) => {
    if (!items || items.length === 0) return null;
    
    const isExpanded = expandedSections[sectionKey];
    
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection(sectionKey)}
          activeOpacity={0.7}
        >
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
        </TouchableOpacity>
        
        {isExpanded && (
          <View style={styles.sectionContent}>
            {items.map((item, index) => renderItem(item, index))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={shareTool}>
          <Text style={styles.shareButtonText}>🔗 Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Tool Header */}
        <View style={[styles.toolHeader, { backgroundColor: tool.color + '20' }]}>
          <Text style={styles.toolIcon}>{tool.icon}</Text>
          <Text style={styles.toolName}>{tool.name}</Text>
          <Text style={styles.toolDeveloper}>by {tool.developer}</Text>
          <Text style={styles.toolDescription}>{tool.description}</Text>
        </View>

        {/* Info Cards */}
        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Category</Text>
            <Text style={styles.infoValue}>{tool.category}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Pricing</Text>
            <Text style={styles.infoValue}>{tool.pricing}</Text>
          </View>
        </View>

        {/* Platforms */}
        {tool.platforms && (
          <View style={styles.platformsSection}>
            <Text style={styles.sectionTitle}>Available Platforms</Text>
            <View style={styles.platformsList}>
              {tool.platforms.map((platform, index) => (
                <View key={index} style={styles.platformBadge}>
                  <Text style={styles.platformText}>{platform}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Features */}
        {renderSection(
          '✨ Features',
          tool.features,
          'features',
          (feature, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listItemText}>{feature}</Text>
            </View>
          )
        )}

        {/* Use Cases */}
        {renderSection(
          '💡 Use Cases',
          tool.useCases,
          'useCases',
          (useCase, index) => (
            <View key={index} style={styles.useCaseCard}>
              <Text style={styles.useCaseText}>{useCase}</Text>
            </View>
          )
        )}

        {/* Getting Started */}
        {tool.gettingStarted && (
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection('gettingStarted')}
              activeOpacity={0.7}
            >
              <Text style={styles.sectionTitle}>🚀 Getting Started</Text>
              <Text style={styles.expandIcon}>
                {expandedSections.gettingStarted ? '▼' : '▶'}
              </Text>
            </TouchableOpacity>
            
            {expandedSections.gettingStarted && (
              <View style={styles.sectionContent}>
                {renderCodeBlock(tool.gettingStarted)}
              </View>
            )}
          </View>
        )}

        {/* Pro Tips */}
        {tool.proTips && renderSection(
          '💎 Pro Tips',
          tool.proTips,
          'tips',
          (tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Text style={styles.tipIcon}>💡</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          )
        )}

        {/* Best Extensions (for IDEs) */}
        {tool.bestExtensions && renderSection(
          '🔌 Best Extensions',
          tool.bestExtensions,
          'extensions',
          (ext, index) => (
            <View key={index} style={styles.extensionCard}>
              <Text style={styles.extensionText}>{ext}</Text>
            </View>
          )
        )}

        {/* Best For */}
        {tool.bestFor && tool.bestFor.length > 0 && (
          <View style={styles.bestForSection}>
            <Text style={styles.sectionTitle}>🎯 Best For</Text>
            <View style={styles.bestForList}>
              {tool.bestFor.map((item, index) => (
                <View key={index} style={styles.bestForBadge}>
                  <Text style={styles.bestForText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Requirements */}
        {tool.requirements && tool.requirements.length > 0 && (
          <View style={styles.requirementsSection}>
            <Text style={styles.sectionTitle}>📋 Requirements</Text>
            {tool.requirements.map((req, index) => (
              <View key={index} style={styles.requirementItem}>
                <Text style={styles.requirementText}>✓ {req}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={() => openURL(tool.officialDocs)}
          >
            <Text style={styles.actionButtonText}>📚 Official Documentation</Text>
          </TouchableOpacity>
          
          {tool.tutorial && (
            <TouchableOpacity
              style={[styles.actionButton, styles.secondaryButton]}
              onPress={() => openURL(tool.tutorial)}
            >
              <Text style={styles.actionButtonText}>🎓 View Tutorial</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Last updated: January 2026
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  shareButton: {
    padding: 8,
  },
  shareButtonText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 0,
  },
  toolHeader: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  toolIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  toolName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  toolDeveloper: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 12,
  },
  toolDescription: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    lineHeight: 24,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  infoLabel: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 14,
    color: theme.colors.text,
    fontWeight: '600',
  },
  platformsSection: {
    marginBottom: 20,
  },
  platformsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  platformBadge: {
    backgroundColor: theme.colors.primary + '20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  platformText: {
    fontSize: 13,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  expandIcon: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  sectionContent: {
    marginTop: 12,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 8,
  },
  bullet: {
    fontSize: 16,
    color: theme.colors.primary,
    marginRight: 8,
    marginTop: 2,
  },
  listItemText: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.text,
    lineHeight: 22,
  },
  useCaseCard: {
    backgroundColor: theme.colors.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  useCaseText: {
    fontSize: 14,
    color: theme.colors.text,
  },
  codeBlock: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#D4D4D4',
    lineHeight: 20,
  },
  copyButton: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 8,
  },
  copyButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: theme.colors.warning + '40',
  },
  tipIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.text,
  },
  extensionCard: {
    backgroundColor: theme.colors.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  extensionText: {
    fontSize: 14,
    color: theme.colors.text,
  },
  bestForSection: {
    marginBottom: 20,
  },
  bestForList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  bestForBadge: {
    backgroundColor: theme.colors.success + '20',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  bestForText: {
    fontSize: 13,
    color: theme.colors.success,
    fontWeight: '600',
  },
  requirementsSection: {
    marginBottom: 20,
  },
  requirementItem: {
    backgroundColor: theme.colors.card,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  requirementText: {
    fontSize: 14,
    color: theme.colors.text,
  },
  actionsContainer: {
    marginTop: 20,
    gap: 12,
  },
  actionButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.card,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
  },
});
