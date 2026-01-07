import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getTutorialsByLanguage } from '../data/tutorialsData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import AdBanner from '../components/AdBanner';

export default function TutorialsScreen({ route, navigation }) {
  const { t } = useTranslation();
  const { languageId } = route.params;
  const languageTutorials = getTutorialsByLanguage(languageId);

  if (!languageTutorials) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>No tutorials available</Text>
      </SafeAreaView>
    );
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return '#4CAF50';
      case 'Intermediate':
        return '#FF9800';
      case 'Advanced':
        return '#F44336';
      default:
        return colors.primary;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header, { backgroundColor: languageTutorials.color }]}>
          <Text style={styles.headerIcon}>{languageTutorials.icon}</Text>
          <Text style={styles.headerTitle}>{languageTutorials.name}</Text>
          <Text style={styles.headerSubtitle}>Tutorials & Learning Paths</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>📚 Available Tutorials</Text>
          
          {/* AdMob Banner */}
          <View style={styles.adContainer}>
            <AdBanner adUnitId="ca-app-pub-5526801232554836/8911626154" />
          </View>

          {languageTutorials.tutorials && languageTutorials.tutorials.map((tutorial) => (
            <TouchableOpacity
              key={tutorial.id}
              style={styles.tutorialCard}
              onPress={() =>
                navigation.navigate('TutorialDetail', {
                  languageId,
                  tutorialId: tutorial.id,
                  languageName: languageTutorials.name,
                })
              }
            >
              <View style={styles.tutorialHeader}>
                <View style={styles.tutorialTitleRow}>
                  <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
                  <View
                    style={[
                      styles.levelBadge,
                      { backgroundColor: getLevelColor(tutorial.level) },
                    ]}
                  >
                    <Text style={styles.levelText}>{tutorial.level}</Text>
                  </View>
                </View>
                <Text style={styles.tutorialDuration}>⏱️ {tutorial.duration}</Text>
              </View>

              <Text style={styles.tutorialDescription}>{tutorial.description}</Text>

              <View style={styles.topicsContainer}>
                <Text style={styles.topicsTitle}>Contents:</Text>
                {tutorial.topics && tutorial.topics.slice(0, 3).map((topic, index) => (
                  <View key={index} style={styles.topicItem}>
                    <Text style={styles.topicBullet}>✓</Text>
                    <Text style={styles.topicText}>{topic}</Text>
                  </View>
                ))}
                {tutorial.topics && tutorial.topics.length > 3 && (
                  <Text style={styles.moreTopics}>
                    +{tutorial.topics.length - 3} more topics
                  </Text>
                )}
              </View>

              <View style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Tutorial →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 50,
    marginBottom: spacing.sm,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  content: {
    padding: spacing.md,
  },
  adContainer: {
    marginVertical: spacing.lg,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  tutorialCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  tutorialHeader: {
    marginBottom: spacing.md,
  },
  tutorialTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  tutorialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
    marginRight: spacing.sm,
  },
  levelBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  levelText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tutorialDuration: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  tutorialDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  topicsContainer: {
    marginBottom: spacing.md,
  },
  topicsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  topicBullet: {
    color: colors.success,
    marginRight: spacing.sm,
    fontSize: 14,
  },
  topicText: {
    fontSize: 14,
    color: colors.textSecondary,
    flex: 1,
  },
  moreTopics: {
    fontSize: 12,
    color: colors.primary,
    fontStyle: 'italic',
    marginTop: spacing.xs,
  },
  startButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  startButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
