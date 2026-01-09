import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors, spacing, borderRadius } from '../constants/theme';
import { getAllProjects } from '../data/projectsData';

export default function ProjectsScreen({ navigation }) {
  const { t } = useTranslation();
  const [allProjects, setAllProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load projects safely with extensive error handling
  useEffect(() => {
    const loadProjects = async () => {
      try {
        console.log('ProjectsScreen: Starting to load projects...');
        
        // Try to get projects
        const projects = getAllProjects();
        
        console.log('ProjectsScreen: Projects loaded:', projects?.length || 0);
        
        if (!projects || !Array.isArray(projects)) {
          throw new Error('Projects data is invalid or not an array');
        }
        
        if (projects.length === 0) {
          console.warn('ProjectsScreen: No projects found');
        }
        
        setAllProjects(projects);
        setFilteredProjects(projects);
        setIsLoading(false);
        console.log('ProjectsScreen: Successfully loaded projects');
      } catch (err) {
        console.error('ProjectsScreen: Error loading projects:', err);
        setError(err?.message || 'Failed to load projects');
        setIsLoading(false);
        
        // Set empty array as fallback
        setAllProjects([]);
        setFilteredProjects([]);
      }
    };
    
    loadProjects();
  }, []);

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterProjects(query, selectedDifficulty);
  };

  const handleDifficultyFilter = (difficulty) => {
    setSelectedDifficulty(difficulty);
    filterProjects(searchQuery, difficulty);
  };

  const filterProjects = (query, difficulty) => {
    let filtered = allProjects;

    // Filter by difficulty
    if (difficulty !== 'All') {
      filtered = filtered.filter(project => project.difficulty === difficulty);
    }

    // Filter by search query
    if (query.trim() !== '') {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
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

  // Show loading state
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading projects...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Show error state
  if (error) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorTitle}>Error Loading Projects</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => {
              setIsLoading(true);
              setError(null);
              try {
                const projects = getAllProjects();
                setAllProjects(projects);
                setFilteredProjects(projects);
                setIsLoading(false);
              } catch (err) {
                setError(err.message);
                setIsLoading(false);
              }
            }}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>🚀 Project Tutorials</Text>
          <Text style={styles.subtitle}>
            Build real-world projects with step-by-step guides
          </Text>
        </View>

        {/* Light Version Notice */}
        <View style={styles.noticeCard}>
          <Text style={styles.noticeIcon}>💡</Text>
          <View style={styles.noticeContent}>
            <Text style={styles.noticeTitle}>Light Version</Text>
            <Text style={styles.noticeText}>
              This is the light version. The best project tutorials are coming soon with the new app!
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search projects..."
            placeholderTextColor={colors.textMuted}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Difficulty Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
        >
          {difficulties.map((difficulty) => (
            <TouchableOpacity
              key={difficulty}
              style={[
                styles.filterChip,
                selectedDifficulty === difficulty && styles.filterChipActive,
              ]}
              onPress={() => handleDifficultyFilter(difficulty)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  selectedDifficulty === difficulty && styles.filterChipTextActive,
                ]}
              >
                {difficulty}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Projects List */}
        <View style={styles.projectsContainer}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <React.Fragment key={project.id}>
                <TouchableOpacity
                  style={styles.projectCard}
                  onPress={() => navigation.navigate('ProjectDetail', { project })}
                  activeOpacity={0.7}
                >
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectIcon}>{project.icon}</Text>
                    <View style={styles.projectHeaderRight}>
                      <View
                        style={[
                          styles.difficultyBadge,
                          { backgroundColor: getDifficultyColor(project.difficulty) + '20' },
                        ]}
                      >
                        <Text
                          style={[
                            styles.difficultyText,
                            { color: getDifficultyColor(project.difficulty) },
                          ]}
                        >
                          {project.difficulty}
                        </Text>
                      </View>
                      <View style={styles.durationBadge}>
                        <Text style={styles.durationText}>⏱️ {project.duration}</Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectDescription} numberOfLines={2}>
                    {project.description}
                  </Text>

                  {/* Tags */}
                  <View style={styles.tagsContainer}>
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <View key={tagIndex} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                      </View>
                    ))}
                    {project.tags.length > 3 && (
                      <View style={styles.tag}>
                        <Text style={styles.tagText}>+{project.tags.length - 3}</Text>
                      </View>
                    )}
                  </View>

                  {/* Steps Count */}
                  <View style={styles.stepsInfo}>
                    <Text style={styles.stepsText}>
                      📋 {project.steps.length} Steps
                    </Text>
                    <Text style={styles.arrowText}>→</Text>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>🔍</Text>
              <Text style={styles.emptyStateText}>No projects found</Text>
              <Text style={styles.emptyStateSubtext}>
                Try adjusting your search or filters
              </Text>
            </View>
          )}
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>💡</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Learn by Building</Text>
            <Text style={styles.infoText}>
              Each project includes step-by-step instructions, code examples, tips, and resources to help you build real-world applications.
            </Text>
          </View>
        </View>

        <View style={{ height: 20 }} />
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
    paddingBottom: spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 22,
  },
  noticeCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  noticeIcon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  noticeContent: {
    flex: 1,
  },
  noticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  noticeText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  searchContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  searchInput: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  filterChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundElevated,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterChipText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: '#000',
  },
  projectsContainer: {
    padding: spacing.lg,
    paddingTop: spacing.sm,
  },
  projectCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  projectIcon: {
    fontSize: 48,
  },
  projectHeaderRight: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  difficultyBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.md,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '700',
  },
  durationBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
  },
  durationText: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '600',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  projectDescription: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  tag: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.md,
  },
  tagText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  stepsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  stepsText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  arrowText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.xl * 2,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.textMuted,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  infoIcon: {
    fontSize: 32,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  infoText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  adContainer: {
    marginVertical: spacing.md,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 16,
    color: colors.textMuted,
    marginTop: spacing.md,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
  },
  retryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
