import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';
import { developerHints, quickTips } from '../data/developerHintsData';

export default function HintsScreen({ navigation }) {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Object.values(developerHints);

  const renderQuickTips = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>⚡ {t('hints.quickTips')}</Text>
      <Text style={styles.sectionSubtitle}>
        {t('hints.quickTipsDescription')}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tipsScroll}
      >
        {quickTips.map((tip) => (
          <View key={tip.id} style={styles.tipCard}>
            <Text style={styles.tipIcon}>{tip.icon}</Text>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipAnswer}>{tip.answer}</Text>
            <View style={styles.tipBadge}>
              <Text style={styles.tipBadgeText}>{tip.category}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const renderCategories = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>📚 {t('hints.browseByCategory')}</Text>
      <View style={styles.categoriesGrid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryCard,
              { borderLeftColor: category.color },
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <Text style={styles.categoryHintCount}>
              {t('hints.hintsCount', { count: category.hints.length })}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderCategoryDetail = () => {
    if (!selectedCategory) return null;

    return (
      <View style={styles.detailContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.backButtonText}>← {t('hints.backToCategories')}</Text>
        </TouchableOpacity>

        <View style={styles.detailHeader}>
          <Text style={styles.detailIcon}>{selectedCategory.icon}</Text>
          <Text style={styles.detailTitle}>{selectedCategory.title}</Text>
          <Text style={styles.detailCategory}>{selectedCategory.category}</Text>
        </View>

        <ScrollView style={styles.hintsContainer}>
          {selectedCategory.hints.map((hint, index) => (
            <View key={index} style={styles.hintCard}>
              <View style={styles.hintHeader}>
                <Text style={styles.hintScenario}>💡 {hint.scenario}</Text>
              </View>

              <View style={styles.recommendationBox}>
                <Text style={styles.recommendationLabel}>✅ Recommendation:</Text>
                <Text style={styles.recommendationText}>{hint.recommendation}</Text>
              </View>

              <Text style={styles.reasonText}>
                <Text style={styles.reasonLabel}>Why: </Text>
                {hint.reason}
              </Text>

              <View style={styles.technologiesBox}>
                <Text style={styles.technologiesLabel}>Technologies:</Text>
                <View style={styles.techTags}>
                  {hint.technologies.map((tech, idx) => (
                    <View key={idx} style={styles.techTag}>
                      <Text style={styles.techTagText}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.whenBox}>
                <Text style={styles.whenLabel}>⏰ When to use:</Text>
                <Text style={styles.whenText}>{hint.whenToUse}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {selectedCategory ? (
        renderCategoryDetail()
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>💡 {t('hints.title')}</Text>
            <Text style={styles.headerSubtitle}>
              {t('hints.subtitle')}
            </Text>
          </View>

          {renderQuickTips()}
          {renderCategories()}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {t('hints.footer')}
            </Text>
          </View>
        </ScrollView>
      )}
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
    padding: 20,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  tipsScroll: {
    marginTop: 8,
  },
  tipCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 200,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tipIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  tipAnswer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  tipBadge: {
    backgroundColor: colors.primaryAlpha,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  tipBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
  },
  categoriesGrid: {
    gap: 12,
  },
  categoryCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  categoryTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  categoryHintCount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  detailContainer: {
    flex: 1,
  },
  backButton: {
    padding: 16,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
  },
  detailHeader: {
    padding: 20,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  detailCategory: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  hintsContainer: {
    flex: 1,
    padding: 16,
  },
  hintCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  hintHeader: {
    marginBottom: 12,
  },
  hintScenario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  recommendationBox: {
    backgroundColor: colors.successAlpha,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.success,
  },
  recommendationLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.success,
    marginBottom: 4,
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  reasonText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  reasonLabel: {
    fontWeight: '600',
    color: colors.text,
  },
  technologiesBox: {
    marginBottom: 12,
  },
  technologiesLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    backgroundColor: colors.primaryAlpha,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  techTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  whenBox: {
    backgroundColor: colors.accentAlpha,
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  whenLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.accent,
    marginBottom: 4,
  },
  whenText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
