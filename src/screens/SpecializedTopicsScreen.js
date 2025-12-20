import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../constants/theme';
import { specializedTopics } from '../data/specializedTopicsData';

export default function SpecializedTopicsScreen({ navigation }) {
  const topics = Object.values(specializedTopics);

  const renderTopicCard = (topic) => (
    <TouchableOpacity
      key={topic.id}
      style={styles.topicCard}
      onPress={() => navigation.navigate('Language', { language: topic })}
    >
      <View style={[styles.topicIcon, { backgroundColor: topic.color + '20' }]}>
        <Text style={styles.topicIconText}>{topic.icon}</Text>
      </View>
      <View style={styles.topicContent}>
        <Text style={styles.topicName}>{topic.name}</Text>
        <Text style={styles.topicDescription}>{topic.description}</Text>
        <View style={styles.categoryCount}>
          <Text style={styles.categoryCountText}>
            {Object.keys(topic.categories).length} Categories
          </Text>
        </View>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Specialized Topics</Text>
          <Text style={styles.subtitle}>
            IoT, E-Commerce, Linux, Home Automation & More
          </Text>
        </View>

        <View style={styles.topicsGrid}>
          {topics.map(renderTopicCard)}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🚀 New Topics Added!</Text>
          <Text style={styles.infoText}>
            • IoT with ESP32, Raspberry Pi, Arduino{'\n'}
            • Home Assistant automation{'\n'}
            • Shopify & E-Commerce{'\n'}
            • Linux system administration{'\n'}
            • Proxmox virtualization
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
  scrollContent: {
    padding: spacing.md,
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  topicsGrid: {
    gap: spacing.md,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  topicIcon: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  topicIconText: {
    fontSize: 28,
  },
  topicContent: {
    flex: 1,
  },
  topicName: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  topicDescription: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    lineHeight: 18,
  },
  categoryCount: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  categoryCountText: {
    fontSize: typography.sizes.xs,
    color: colors.primary,
    fontWeight: typography.weights.medium,
  },
  arrow: {
    fontSize: 24,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  infoCard: {
    backgroundColor: colors.primaryAlpha,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginTop: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  infoTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: typography.sizes.md,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
