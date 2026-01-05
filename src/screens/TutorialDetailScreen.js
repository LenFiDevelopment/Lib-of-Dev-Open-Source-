import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import * as Clipboard from 'expo-clipboard';
import { getTutorialsByLanguage } from '../data/tutorialsData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function TutorialDetailScreen({ route }) {
  const { t } = useTranslation();
  const { languageId, tutorialId, languageName } = route.params;
  const languageTutorials = getTutorialsByLanguage(languageId);
  const [expandedLesson, setExpandedLesson] = useState(0);
  const [showSolution, setShowSolution] = useState({});

  if (!languageTutorials) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Tutorial not found</Text>
      </SafeAreaView>
    );
  }

  const tutorial = languageTutorials.tutorials.find(t => t.id === tutorialId);

  if (!tutorial) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Tutorial not found</Text>
      </SafeAreaView>
    );
  }

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    Alert.alert('Copied', 'Code has been copied to clipboard');
  };

  const toggleSolution = (index) => {
    setShowSolution(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.breadcrumb}>{languageName} › Tutorials</Text>
          <Text style={styles.title}>{tutorial.title}</Text>
          <Text style={styles.description}>{tutorial.description}</Text>
          <View style={styles.metaInfo}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Level:</Text>
              <Text style={styles.metaValue}>{tutorial.level}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Duration:</Text>
              <Text style={styles.metaValue}>{tutorial.duration}</Text>
            </View>
          </View>
        </View>

        <View style={styles.lessonsContainer}>
          <Text style={styles.sectionTitle}>📖 Lessons</Text>
          
          {tutorial.lessons && tutorial.lessons.map((lesson, index) => (
            <View key={index} style={styles.lessonCard}>
              <TouchableOpacity
                style={styles.lessonHeader}
                onPress={() => setExpandedLesson(expandedLesson === index ? -1 : index)}
              >
                <View style={styles.lessonNumber}>
                  <Text style={styles.lessonNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.expandIcon}>
                  {expandedLesson === index ? '▼' : '▶'}
                </Text>
              </TouchableOpacity>

              {expandedLesson === index && (
                <View style={styles.lessonContent}>
                  <Text style={styles.lessonText}>{lesson.content}</Text>

                  {/* Code Example */}
                  <View style={styles.codeSection}>
                    <View style={styles.codeSectionHeader}>
                      <Text style={styles.codeSectionTitle}>💻 Code Example</Text>
                      <TouchableOpacity
                        style={styles.copyButton}
                        onPress={() => copyToClipboard(lesson.code)}
                      >
                        <Text style={styles.copyButtonText}>📋 Copy</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.codeBlock}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={styles.codeText}>{lesson.code}</Text>
                      </ScrollView>
                    </View>
                  </View>

                  {/* Exercise */}
                  {lesson.exercise && (
                    <View style={styles.exerciseSection}>
                      <Text style={styles.exerciseTitle}>✏️ Exercise</Text>
                      <Text style={styles.exerciseText}>{lesson.exercise}</Text>
                      
                      {lesson.solution && (
                        <View style={styles.solutionContainer}>
                          <TouchableOpacity
                            style={styles.solutionButton}
                            onPress={() => toggleSolution(index)}
                          >
                            <Text style={styles.solutionButtonText}>
                              {showSolution[index] ? '👁️ Hide Solution' : '💡 Show Solution'}
                            </Text>
                          </TouchableOpacity>

                          {showSolution[index] && (
                            <View style={styles.solutionBox}>
                              <View style={styles.solutionHeader}>
                                <Text style={styles.solutionHeaderText}>✅ Solution</Text>
                                <TouchableOpacity
                                  style={styles.copySolutionButton}
                                  onPress={() => copyToClipboard(lesson.solution)}
                                >
                                  <Text style={styles.copyButtonText}>📋</Text>
                                </TouchableOpacity>
                              </View>
                              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Text style={styles.solutionCode}>{lesson.solution}</Text>
                              </ScrollView>
                            </View>
                          )}
                        </View>
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.completionSection}>
          <Text style={styles.completionEmoji}>🎉</Text>
          <Text style={styles.completionTitle}>Complete Tutorial</Text>
          <Text style={styles.completionText}>
            Work through all lessons and practice with the examples!
          </Text>
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
    backgroundColor: colors.surface,
  },
  breadcrumb: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  metaInfo: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: spacing.xs,
  },
  metaValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  lessonsContainer: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  lessonCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    ...shadows.small,
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  lessonNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  lessonNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  lessonTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  expandIcon: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  lessonContent: {
    padding: spacing.md,
    paddingTop: 0,
  },
  lessonText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  codeSection: {
    marginBottom: spacing.md,
  },
  codeSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  codeSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  copyButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
  },
  copyButtonText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: 'bold',
  },
  codeBlock: {
    backgroundColor: colors.codeBackground,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.codeText,
    lineHeight: 18,
  },
  exerciseSection: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  exerciseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  exerciseText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  solutionContainer: {
    marginTop: spacing.sm,
  },
  solutionButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  solutionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  solutionBox: {
    marginTop: spacing.md,
    backgroundColor: colors.success + '20',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.success,
  },
  solutionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  solutionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.success,
  },
  copySolutionButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  solutionCode: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.text,
    lineHeight: 18,
  },
  completionSection: {
    alignItems: 'center',
    padding: spacing.xl,
    marginBottom: spacing.xl,
  },
  completionEmoji: {
    fontSize: 60,
    marginBottom: spacing.md,
  },
  completionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  completionText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
