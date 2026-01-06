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
import { getLanguageLearningPath } from '../data/learningPathsData';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';

export default function LanguageLearningPathScreen({ route, navigation }) {
  const { t } = useTranslation();
  const { languageId, languageName } = route.params;
  const learningPath = getLanguageLearningPath(languageId);
  const [expandedPhase, setExpandedPhase] = useState(null);

  if (!learningPath) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📚</Text>
          <Text style={styles.emptyText}>Learning Path Under Development</Text>
          <Text style={styles.emptySubtext}>This learning path is in progress and coming soon!</Text>
        </View>
      </SafeAreaView>
    );
  }

  const getPhaseColor = (phase) => {
    const colors = ['#4CAF50', '#FF9800', '#F44336', '#9C27B0'];
    return colors[phase - 1] || '#6C5CE7';
  };

  const togglePhase = (phase) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: learningPath.color + '20' }]}>
          <Text style={styles.headerIcon}>{learningPath.icon}</Text>
          <Text style={styles.headerTitle}>{learningPath.name}</Text>
          <Text style={styles.headerSubtitle}>Complete Learning Path</Text>
          
          <View style={styles.estimatedTimeContainer}>
            <Text style={styles.estimatedTimeLabel}>⏱️ Estimated Duration:</Text>
            <Text style={styles.estimatedTimeValue}>{learningPath.estimatedTime}</Text>
          </View>
        </View>

        {/* Career Paths */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 Career Goals</Text>
          <View style={styles.careerPathsContainer}>
            {learningPath.careerPaths.map((career, index) => (
              <View key={index} style={styles.careerPathBadge}>
                <Text style={styles.careerPathText}>{career}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Roadmap */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🗺️ Learning Path Roadmap</Text>
          <Text style={styles.sectionSubtitle}>
            Follow this structured path from beginner to expert
          </Text>

          {learningPath.roadmap.map((phase) => (
            <View key={phase.phase} style={styles.phaseCard}>
              {/* Phase Header */}
              <TouchableOpacity
                onPress={() => togglePhase(phase.phase)}
                style={[styles.phaseHeader, { borderLeftColor: getPhaseColor(phase.phase) }]}
              >
                <View style={styles.phaseHeaderLeft}>
                  <View style={[styles.phaseBadge, { backgroundColor: getPhaseColor(phase.phase) }]}>
                    <Text style={styles.phaseNumber}>{phase.phase}</Text>
                  </View>
                  <View style={styles.phaseTitleContainer}>
                    <View style={styles.phaseTitleRow}>
                      <Text style={styles.phaseTitle}>{phase.title}</Text>
                      <View style={[styles.levelBadge, { backgroundColor: getPhaseColor(phase.phase) + '30' }]}>
                        <Text style={[styles.levelBadgeText, { color: getPhaseColor(phase.phase) }]}>
                          {phase.level}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.phaseDuration}>⏱️ {phase.duration}</Text>
                    <Text style={styles.phaseDescription}>{phase.description}</Text>
                  </View>
                </View>
                <Text style={styles.expandIcon}>{expandedPhase === phase.phase ? '▼' : '▶'}</Text>
              </TouchableOpacity>

              {/* Phase Content */}
              {expandedPhase === phase.phase && (
                <View style={styles.phaseContent}>
                  {/* Objectives */}
                  <View style={styles.objectivesContainer}>
                    <Text style={styles.subsectionTitle}>🎯 Learning Objectives</Text>
                    {phase.objectives.map((objective, index) => (
                      <View key={index} style={styles.objectiveItem}>
                        <Text style={styles.objectiveBullet}>✓</Text>
                        <Text style={styles.objectiveText}>{objective}</Text>
                      </View>
                    ))}
                  </View>

                  {/* Modules */}
                  <View style={styles.modulesContainer}>
                    <Text style={styles.subsectionTitle}>📚 Modules ({phase.modules.length})</Text>
                    {phase.modules.map((module, index) => (
                      <View key={module.id} style={styles.moduleCard}>
                        <View style={styles.moduleHeader}>
                          <Text style={styles.moduleNumber}>{index + 1}</Text>
                          <Text style={styles.moduleTitle}>{module.title}</Text>
                        </View>
                        <View style={styles.lessonsContainer}>
                          {module.lessons.map((lesson) => (
                            <View key={lesson.id} style={styles.lessonItem}>
                              <Text style={styles.lessonIcon}>📖</Text>
                              <View style={styles.lessonInfo}>
                                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                              </View>
                            </View>
                          ))}
                        </View>
                        {module.quiz && (
                          <View style={styles.quizInfo}>
                            <Text style={styles.quizIcon}>✅</Text>
                            <Text style={styles.quizText}>
                              Quiz: {module.quiz.questions} questions (Minimum {module.quiz.passingScore}%)
                            </Text>
                          </View>
                        )}
                      </View>
                    ))}
                  </View>

                  {/* Projects */}
                  {phase.projects && phase.projects.length > 0 && (
                    <View style={styles.projectsContainer}>
                      <Text style={styles.subsectionTitle}>🚀 Practical Projects</Text>
                      {phase.projects.map((project) => (
                        <View key={project.id} style={styles.projectCard}>
                          <View style={styles.projectHeader}>
                            <Text style={styles.projectTitle}>{project.title}</Text>
                            <View style={[
                              styles.projectDifficultyBadge,
                              { backgroundColor: getPhaseColor(phase.phase) + '30' }
                            ]}>
                              <Text style={[styles.projectDifficultyText, { color: getPhaseColor(phase.phase) }]}>
                                {project.difficulty}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.projectSkills}>
                            {project.skills.map((skill, index) => (
                              <View key={index} style={styles.skillTag}>
                                <Text style={styles.skillTagText}>{skill}</Text>
                              </View>
                            ))}
                          </View>
                          <Text style={styles.projectTime}>⏱️ {project.estimatedTime}</Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {/* Final Assessment */}
                  {phase.finalAssessment && (
                    <View style={styles.assessmentContainer}>
                      <Text style={styles.subsectionTitle}>🏆 Final Assessment</Text>
                      <View style={styles.assessmentCard}>
                        <View style={styles.assessmentHeader}>
                          <Text style={styles.assessmentType}>{phase.finalAssessment.type}</Text>
                          <Text style={styles.assessmentTime}>⏱️ {phase.finalAssessment.estimatedTime}</Text>
                        </View>
                        <Text style={styles.assessmentTitle}>{phase.finalAssessment.title}</Text>
                        <View style={styles.requirementsContainer}>
                          <Text style={styles.requirementsLabel}>Requirements:</Text>
                          {phase.finalAssessment.requirements.map((req, index) => (
                            <View key={index} style={styles.requirementItem}>
                              <Text style={styles.requirementBullet}>•</Text>
                              <Text style={styles.requirementText}>{req}</Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    </View>
                  )}

                  {/* Start Button */}
                  <TouchableOpacity
                    style={[styles.startButton, { backgroundColor: getPhaseColor(phase.phase) }]}
                    onPress={() => {
                      // Navigate to language learning screen with the category from first lesson
                      const firstLessonCategory = phase.modules[0]?.lessons[0]?.category || 'basics';
                      
                      // Navigate to Language screen which shows the code examples
                      navigation.navigate('Language', {
                        languageId: languageId,
                        languageName: languageName,
                        // Optional: scroll to specific category
                        highlightCategory: firstLessonCategory
                      });
                    }}
                  >
                    <Text style={styles.startButtonText}>Start Learning Phase {phase.phase}</Text>
                    <Text style={styles.startButtonIcon}>→</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎓 Certifications</Text>
          <View style={styles.certificationsContainer}>
            {learningPath.certifications.map((cert, index) => (
              <View key={index} style={styles.certCard}>
                <Text style={styles.certIcon}>🏆</Text>
                <View style={styles.certInfo}>
                  <Text style={styles.certLevel}>{cert.level}</Text>
                  <Text style={styles.certTitle}>{cert.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
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
    padding: spacing.xl,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  estimatedTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.backgroundCard,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  estimatedTimeLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  estimatedTimeValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: spacing.lg,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    lineHeight: 20,
  },
  careerPathsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  careerPathBadge: {
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.primary + '40',
  },
  careerPathText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  phaseCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.medium,
  },
  phaseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderLeftWidth: 4,
  },
  phaseHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  phaseBadge: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phaseNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  phaseTitleContainer: {
    flex: 1,
  },
  phaseTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  phaseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  levelBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  levelBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  phaseDuration: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  phaseDescription: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  expandIcon: {
    fontSize: 16,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
  phaseContent: {
    padding: spacing.md,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  objectivesContainer: {
    marginBottom: spacing.lg,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  objectiveItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  objectiveBullet: {
    fontSize: 16,
    color: colors.success,
    marginRight: spacing.sm,
    fontWeight: '700',
  },
  objectiveText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  modulesContainer: {
    marginBottom: spacing.lg,
  },
  moduleCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  moduleNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary,
    backgroundColor: colors.primary + '20',
    width: 28,
    height: 28,
    textAlign: 'center',
    lineHeight: 28,
    borderRadius: borderRadius.full,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  lessonsContainer: {
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  lessonIcon: {
    fontSize: 16,
  },
  lessonInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonTitle: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  lessonDuration: {
    fontSize: 12,
    color: colors.textMuted,
  },
  quizInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.success + '20',
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  quizIcon: {
    fontSize: 16,
  },
  quizText: {
    fontSize: 13,
    color: colors.success,
    fontWeight: '600',
  },
  projectsContainer: {
    marginBottom: spacing.lg,
  },
  projectCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  projectDifficultyBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  projectDifficultyText: {
    fontSize: 12,
    fontWeight: '600',
  },
  projectSkills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  skillTag: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  skillTagText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  projectTime: {
    fontSize: 12,
    color: colors.textMuted,
  },
  assessmentContainer: {
    marginBottom: spacing.lg,
  },
  assessmentCard: {
    backgroundColor: colors.primary + '10',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: colors.primary + '40',
  },
  assessmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  assessmentType: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
  },
  assessmentTime: {
    fontSize: 12,
    color: colors.primary,
  },
  assessmentTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  requirementsContainer: {
    marginTop: spacing.sm,
  },
  requirementsLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  requirementItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  requirementBullet: {
    fontSize: 14,
    color: colors.primary,
    marginRight: spacing.sm,
  },
  requirementText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
  },
  startButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    gap: spacing.sm,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  startButtonIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  certificationsContainer: {
    gap: spacing.sm,
  },
  certCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  certIcon: {
    fontSize: 32,
  },
  certInfo: {
    flex: 1,
  },
  certLevel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
  },
  certTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  bottomPadding: {
    height: spacing.xl,
  },
});
