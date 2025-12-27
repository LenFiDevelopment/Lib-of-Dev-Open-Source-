import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getAllLearningPaths, getBestPractices, getDeveloperTools, getCareerAdvice } from '../data/learningResourcesData';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';

export default function LearningScreen() {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('paths'); // paths, practices, tools, career
  
  const learningPaths = getAllLearningPaths();
  const bestPractices = getBestPractices();
  const developerTools = getDeveloperTools();
  const careerAdvice = getCareerAdvice();

  const renderPaths = () => (
    <View style={styles.content}>
      <Text style={styles.description}>
        {t('learning.pathsDescription')}
      </Text>
      {learningPaths.map((path) => (
        <View key={path.id} style={styles.pathCard}>
          <View style={styles.pathHeader}>
            <View style={[styles.pathIcon, { backgroundColor: path.color + '20' }]}>
              <Text style={styles.pathIconText}>{path.icon}</Text>
            </View>
            <View style={styles.pathInfo}>
              <Text style={styles.pathName}>{path.name}</Text>
              <Text style={styles.pathDescription}>{path.description}</Text>
            </View>
          </View>

          {path.levels.map((level, index) => (
            <View key={index} style={styles.levelContainer}>
              <View style={styles.levelHeader}>
                <Text style={styles.levelName}>{level.level}</Text>
                <View style={styles.durationBadge}>
                  <Text style={styles.durationText}>⏱️ {level.duration}</Text>
                </View>
              </View>

              {level.topics.map((topic, topicIndex) => (
                <View key={topicIndex} style={styles.topicContainer}>
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  <View style={styles.itemsList}>
                    {topic.items.map((item, itemIndex) => (
                      <View key={itemIndex} style={styles.item}>
                        <Text style={styles.itemBullet}>•</Text>
                        <Text style={styles.itemText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          ))}

          {path.resources && (
            <View style={styles.resourcesContainer}>
              <Text style={styles.resourcesTitle}>📚 {t('learning.recommendedResources')}</Text>
              <View style={styles.resourceTags}>
                {path.resources.map((resource, index) => (
                  <View key={index} style={styles.resourceTag}>
                    <Text style={styles.resourceTagText}>{resource}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );

  const renderPractices = () => (
    <View style={styles.content}>
      <Text style={styles.description}>
        {t('learning.practicesDescription')}
      </Text>
      {Object.values(bestPractices).map((category, index) => (
        <View key={index} style={styles.practiceCard}>
          <Text style={styles.practiceTitle}>
            {category.icon} {category.title}
          </Text>
          {category.practices.map((practice, practiceIndex) => (
            <View key={practiceIndex} style={styles.practiceItem}>
              <Text style={styles.practiceName}>{practice.name}</Text>
              {practice.description && (
                <Text style={styles.practiceDescription}>{practice.description}</Text>
              )}
              <View style={styles.tipsList}>
                {practice.tips.map((tip, tipIndex) => (
                  <View key={tipIndex} style={styles.tipItem}>
                    <Text style={styles.tipBullet}>✓</Text>
                    <Text style={styles.tipText}>{tip}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  const renderTools = () => (
    <View style={styles.content}>
      <Text style={styles.description}>
        {t('learning.toolsDescription')}
      </Text>
      {Object.values(developerTools).map((tool, index) => (
        <View key={index} style={styles.toolCard}>
          <View style={styles.toolHeader}>
            <Text style={styles.toolIcon}>{tool.icon}</Text>
            <View style={styles.toolInfo}>
              <Text style={styles.toolName}>{tool.name}</Text>
              <Text style={styles.toolCategory}>{tool.category}</Text>
            </View>
          </View>
          <Text style={styles.toolDescription}>{tool.description}</Text>

          {tool.extensions && (
            <View style={styles.extensionsContainer}>
              <Text style={styles.subsectionTitle}>Popular Extensions:</Text>
              {tool.extensions.map((ext, extIndex) => (
                <View key={extIndex} style={styles.extensionItem}>
                  <Text style={styles.extensionName}>{ext.name}</Text>
                  <Text style={styles.extensionDescription}>{ext.description}</Text>
                </View>
              ))}
            </View>
          )}

          {tool.shortcuts && (
            <View style={styles.shortcutsContainer}>
              <Text style={styles.subsectionTitle}>Keyboard Shortcuts:</Text>
              {tool.shortcuts.map((shortcut, shortcutIndex) => (
                <View key={shortcutIndex} style={styles.shortcutItem}>
                  <View style={styles.keyBadge}>
                    <Text style={styles.keyText}>{shortcut.key}</Text>
                  </View>
                  <Text style={styles.shortcutAction}>{shortcut.action}</Text>
                </View>
              ))}
            </View>
          )}

          {tool.commonCommands && (
            <View style={styles.commandsContainer}>
              <Text style={styles.subsectionTitle}>{t('learning.commonCommands')}</Text>
              {tool.commonCommands.map((cmd, cmdIndex) => (
                <View key={cmdIndex} style={styles.commandItem}>
                  <View style={styles.commandCode}>
                    <Text style={styles.commandText}>{cmd.command}</Text>
                  </View>
                  <Text style={styles.commandDescription}>{cmd.description}</Text>
                </View>
              ))}
            </View>
          )}

          {tool.features && (
            <View style={styles.featuresContainer}>
              <Text style={styles.subsectionTitle}>{t('learning.features')}</Text>
              <View style={styles.featuresList}>
                {tool.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={styles.featureTag}>
                    <Text style={styles.featureText}>• {feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );

  const renderCareer = () => (
    <View style={styles.content}>
      <Text style={styles.description}>
        {t('learning.careerDescription')}
      </Text>
      {Object.values(careerAdvice).map((level, index) => (
        <View key={index} style={styles.careerCard}>
          <Text style={styles.careerTitle}>{level.title}</Text>
          
          <View style={styles.careerSection}>
            <Text style={styles.careerSectionTitle}>🎯 {t('learning.focusAreas')}</Text>
            {level.focus.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.careerItem}>
                <Text style={styles.careerBullet}>•</Text>
                <Text style={styles.careerText}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.careerSection}>
            <Text style={styles.careerSectionTitle}>💼 {t('learning.keySkills')}</Text>
            <View style={styles.skillTags}>
              {level.skills.map((skill, skillIndex) => (
                <View key={skillIndex} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 {t('learning.title')}</Text>
        <Text style={styles.headerSubtitle}>
          {t('learning.subtitle')}
        </Text>
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'paths' && styles.tabActive]}
          onPress={() => setSelectedTab('paths')}
        >
          <Text style={[styles.tabText, selectedTab === 'paths' && styles.tabTextActive]}>
            🎓 {t('learning.learningPathsTab')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'practices' && styles.tabActive]}
          onPress={() => setSelectedTab('practices')}
        >
          <Text style={[styles.tabText, selectedTab === 'practices' && styles.tabTextActive]}>
            ✨ {t('learning.bestPracticesTab')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'tools' && styles.tabActive]}
          onPress={() => setSelectedTab('tools')}
        >
          <Text style={[styles.tabText, selectedTab === 'tools' && styles.tabTextActive]}>
            🛠️ {t('learning.toolsTab')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'career' && styles.tabActive]}
          onPress={() => setSelectedTab('career')}
        >
          <Text style={[styles.tabText, selectedTab === 'career' && styles.tabTextActive]}>
            🚀 {t('learning.careerTab')}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.scrollView}>
        {selectedTab === 'paths' && renderPaths()}
        {selectedTab === 'practices' && renderPractices()}
        {selectedTab === 'tools' && renderTools()}
        {selectedTab === 'career' && renderCareer()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    ...typography.h2,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    ...typography.bodySecondary,
  },
  tabContainer: {
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  tab: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginRight: spacing.xs,
    backgroundColor: colors.backgroundCard,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  tabText: {
    ...typography.label,
    color: colors.text,
  },
  tabTextActive: {
    color: colors.buttonText,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
  },
  description: {
    ...typography.bodySecondary,
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  // Path styles
  pathCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  pathHeader: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  pathIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  pathIconText: {
    fontSize: 24,
  },
  pathInfo: {
    flex: 1,
  },
  pathName: {
    ...typography.h3,
    marginBottom: 4,
  },
  pathDescription: {
    ...typography.bodySecondary,
  },
  levelContainer: {
    marginBottom: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  levelName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  durationBadge: {
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  durationText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  topicContainer: {
    marginBottom: spacing.sm,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  itemsList: {
    marginLeft: spacing.sm,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  itemBullet: {
    color: colors.success,
    marginRight: spacing.xs,
  },
  itemText: {
    ...typography.bodySecondary,
    flex: 1,
  },
  resourcesContainer: {
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  resourcesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  resourceTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  resourceTag: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  resourceTagText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  // Practice styles
  practiceCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  practiceTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
  },
  practiceItem: {
    marginBottom: spacing.md,
  },
  practiceName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  practiceDescription: {
    ...typography.bodySecondary,
    marginBottom: spacing.xs,
  },
  tipsList: {
    marginLeft: spacing.sm,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  tipBullet: {
    color: colors.success,
    marginRight: spacing.xs,
  },
  tipText: {
    ...typography.bodySecondary,
    flex: 1,
  },
  // Tool styles
  toolCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  toolHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  toolIcon: {
    fontSize: 32,
    marginRight: spacing.sm,
  },
  toolInfo: {
    flex: 1,
  },
  toolName: {
    ...typography.h3,
  },
  toolCategory: {
    ...typography.caption,
  },
  toolDescription: {
    ...typography.body,
    marginBottom: spacing.md,
  },
  subsectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  extensionsContainer: {
    marginBottom: spacing.md,
  },
  extensionItem: {
    marginBottom: spacing.xs,
    paddingLeft: spacing.sm,
  },
  extensionName: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  extensionDescription: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  shortcutsContainer: {
    marginBottom: spacing.md,
  },
  shortcutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  keyBadge: {
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
    minWidth: 120,
  },
  keyText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: colors.primary,
  },
  shortcutAction: {
    fontSize: 13,
    color: colors.textSecondary,
    flex: 1,
  },
  commandsContainer: {
    marginBottom: spacing.md,
  },
  commandItem: {
    marginBottom: spacing.sm,
  },
  commandCode: {
    backgroundColor: colors.codeBackground,
    padding: spacing.xs,
    borderRadius: borderRadius.sm,
    marginBottom: 4,
  },
  commandText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: colors.codeText,
  },
  commandDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    paddingLeft: spacing.xs,
  },
  featuresContainer: {
    marginBottom: spacing.md,
  },
  featuresList: {
    marginLeft: spacing.sm,
  },
  featureTag: {
    marginBottom: 4,
  },
  featureText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  // Career styles
  careerCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  careerTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
  },
  careerSection: {
    marginBottom: spacing.md,
  },
  careerSectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  careerItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  careerBullet: {
    color: colors.primary,
    marginRight: spacing.xs,
  },
  careerText: {
    ...typography.bodySecondary,
    flex: 1,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  skillTag: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  skillText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
});
