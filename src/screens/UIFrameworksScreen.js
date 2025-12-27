import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { getAllUIFrameworks } from '../data/uiFrameworksData';
import { colors, spacing, borderRadius, shadows, typography } from '../constants/theme';

export default function UIFrameworksScreen({ navigation }) {
  const { t } = useTranslation();
  const frameworks = getAllUIFrameworks();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎨 {t('uiFrameworks.title')}</Text>
          <Text style={styles.headerSubtitle}>
            {t('uiFrameworks.subtitle')}
          </Text>
        </View>

        <View style={styles.content}>
          {/* Featured: shadcn/ui */}
          {frameworks.filter(f => f.id === 'shadcn').map((framework) => (
            <View key={framework.id} style={styles.featuredCard}>
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>⭐ {t('uiFrameworks.featured')}</Text>
              </View>
              <View style={styles.frameworkHeader}>
                <View style={[styles.iconContainer, { backgroundColor: framework.color + '10' }]}>
                  <Text style={styles.icon}>{framework.icon}</Text>
                </View>
                <View style={styles.frameworkInfo}>
                  <Text style={styles.frameworkName}>{framework.name}</Text>
                  <Text style={styles.frameworkCategory}>{framework.category}</Text>
                </View>
              </View>
              
              <Text style={styles.frameworkDescription}>
                {framework.description}
              </Text>

              {framework.features && (
                <View style={styles.featuresContainer}>
                  <Text style={styles.sectionTitle}>{t('uiFrameworks.keyFeatures')}</Text>
                  {framework.features.slice(0, 4).map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                      <Text style={styles.featureBullet}>•</Text>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
              )}

              {framework.designPrinciples && (
                <View style={styles.principlesContainer}>
                  <Text style={styles.sectionTitle}>{t('uiFrameworks.designPrinciples')}</Text>
                  <View style={styles.principlesGrid}>
                    {framework.designPrinciples.map((principle, index) => (
                      <View key={index} style={styles.principleCard}>
                        <Text style={styles.principleIcon}>{principle.icon}</Text>
                        <Text style={styles.principleTitle}>{principle.title}</Text>
                        <Text style={styles.principleDescription}>{principle.description}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {framework.components && (
                <View style={styles.componentsContainer}>
                  <Text style={styles.sectionTitle}>{t('uiFrameworks.availableComponents')}</Text>
                  <View style={styles.componentTags}>
                    {framework.components.slice(0, 6).map((component, index) => (
                      <View key={index} style={styles.componentTag}>
                        <Text style={styles.componentTagText}>{component.name}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {framework.links && (
                <View style={styles.linksContainer}>
                  <TouchableOpacity
                    style={[styles.linkButton, styles.primaryButton]}
                    onPress={() => openLink(framework.links.website)}
                  >
                    <Text style={styles.primaryButtonText}>🌐 {t('uiFrameworks.visitWebsite')}</Text>
                  </TouchableOpacity>
                  <View style={styles.linkRow}>
                    <TouchableOpacity
                      style={styles.secondaryButton}
                      onPress={() => openLink(framework.links.docs)}
                    >
                      <Text style={styles.secondaryButtonText}>📚 {t('uiFrameworks.docs')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.secondaryButton}
                      onPress={() => openLink(framework.links.github)}
                    >
                      <Text style={styles.secondaryButtonText}>🐙 {t('uiFrameworks.github')}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ))}

          {/* Other frameworks */}
          <Text style={styles.categoryTitle}>{t('uiFrameworks.otherFrameworks')}</Text>
          {frameworks.filter(f => f.id !== 'shadcn').map((framework) => (
            <TouchableOpacity
              key={framework.id}
              style={styles.frameworkCard}
            >
              <View style={styles.frameworkHeader}>
                <View style={[styles.iconContainer, { backgroundColor: framework.color + '20' }]}>
                  <Text style={styles.icon}>{framework.icon}</Text>
                </View>
                <View style={styles.frameworkInfo}>
                  <Text style={styles.frameworkName}>{framework.name}</Text>
                  <Text style={styles.frameworkCategory}>{framework.category}</Text>
                </View>
                <Text style={styles.arrow}>›</Text>
              </View>
              
              <Text style={styles.frameworkDescription}>
                {framework.description}
              </Text>

              {framework.features && (
                <View style={styles.featuresShort}>
                  {framework.features.slice(0, 3).map((feature, index) => (
                    <View key={index} style={styles.featureTag}>
                      <Text style={styles.featureTagText}>✓ {feature}</Text>
                    </View>
                  ))}
                </View>
              )}

              {framework.links && (
                <View style={styles.linksRow}>
                  <TouchableOpacity
                    style={styles.smallLinkButton}
                    onPress={(e) => {
                      e.stopPropagation();
                      openLink(framework.links.website);
                    }}
                  >
                    <Text style={styles.smallLinkButtonText}>🌐 Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.smallLinkButton}
                    onPress={(e) => {
                      e.stopPropagation();
                      openLink(framework.links.docs);
                    }}
                  >
                    <Text style={styles.smallLinkButtonText}>📚 Docs</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>💡 {t('uiFrameworks.whyUseTitle')}</Text>
          <Text style={styles.infoText}>
            {t('uiFrameworks.whyUseDescription')}
          </Text>
          <View style={styles.benefitsList}>
            <Text style={styles.benefitItem}>• {t('uiFrameworks.benefit1')}</Text>
            <Text style={styles.benefitItem}>• {t('uiFrameworks.benefit2')}</Text>
            <Text style={styles.benefitItem}>• {t('uiFrameworks.benefit3')}</Text>
            <Text style={styles.benefitItem}>• {t('uiFrameworks.benefit4')}</Text>
            <Text style={styles.benefitItem}>• {t('uiFrameworks.benefit5')}</Text>
            <Text style={styles.benefitItem}>• {t('uiFrameworks.benefit6')}</Text>
          </View>
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
    lineHeight: 20,
  },
  content: {
    padding: spacing.md,
  },
  featuredCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 2,
    borderColor: colors.primary,
    ...shadows.large,
  },
  featuredBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  frameworkCard: {
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  frameworkHeader: {
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
    fontSize: 28,
  },
  frameworkInfo: {
    flex: 1,
  },
  frameworkName: {
    ...typography.h3,
    marginBottom: 2,
  },
  frameworkCategory: {
    ...typography.caption,
  },
  arrow: {
    fontSize: 24,
    color: colors.textMuted,
  },
  frameworkDescription: {
    ...typography.body,
    marginBottom: spacing.md,
    lineHeight: 22,
  },
  featuresContainer: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h4,
    marginBottom: spacing.sm,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  featureBullet: {
    color: colors.primary,
    marginRight: spacing.xs,
    fontSize: 16,
  },
  featureText: {
    ...typography.bodySecondary,
    flex: 1,
  },
  principlesContainer: {
    marginBottom: spacing.md,
  },
  principlesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  principleCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  principleIcon: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  principleTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  principleDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  componentsContainer: {
    marginBottom: spacing.md,
  },
  componentTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  componentTag: {
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  componentTagText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  featuresShort: {
    marginBottom: spacing.sm,
  },
  featureTag: {
    marginBottom: 4,
  },
  featureTagText: {
    fontSize: 13,
    color: colors.success,
  },
  linksContainer: {
    marginTop: spacing.sm,
  },
  linkButton: {
    marginBottom: spacing.xs,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  linkRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.backgroundElevated,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  linksRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  smallLinkButton: {
    backgroundColor: colors.primary + '20',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  smallLinkButtonText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  categoryTitle: {
    ...typography.h3,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  infoSection: {
    backgroundColor: colors.backgroundCard,
    margin: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoTitle: {
    ...typography.h4,
    marginBottom: spacing.sm,
  },
  infoText: {
    ...typography.bodySecondary,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  benefitsList: {
    marginLeft: spacing.sm,
  },
  benefitItem: {
    ...typography.bodySecondary,
    marginBottom: spacing.xs,
    lineHeight: 20,
  },
});
