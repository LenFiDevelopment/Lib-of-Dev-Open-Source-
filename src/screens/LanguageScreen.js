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
import { getLanguageById } from '../data/languagesData';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

export default function LanguageScreen({ route, navigation }) {
  const { t } = useTranslation();
  const { languageId } = route.params;
  const language = getLanguageById(languageId);

  if (!language) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{t('common.notFound')}</Text>
      </SafeAreaView>
    );
  }

  const categories = Object.entries(language.categories);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header, { backgroundColor: language.color }]}>
          <Text style={styles.headerIcon}>{language.icon}</Text>
          <Text style={styles.headerTitle}>{language.name}</Text>
          <Text style={styles.headerDescription}>{language.description}</Text>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>{t('categories.title')}</Text>
          <Text style={styles.sectionSubtitle}>
            {t('categories.exploreLanguage', { language: language.name })}
          </Text>

          <View style={styles.categoriesList}>
            {categories.map(([categoryId, category]) => (
              <TouchableOpacity
                key={categoryId}
                style={styles.categoryCard}
                onPress={() =>
                  navigation.navigate('Category', {
                    languageId,
                    categoryId,
                    categoryName: category.name,
                    languageName: language.name,
                  })
                }
              >
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categoryCount}>
                    {t('categories.itemsCount', { count: category.items.length })}
                  </Text>
                </View>
                <Text style={styles.categoryArrow}>›</Text>
              </TouchableOpacity>
            ))}
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
    padding: spacing.lg,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 60,
    marginBottom: spacing.sm,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  headerDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  categoriesContainer: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  categoriesList: {
    gap: spacing.md,
  },
  categoryCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  categoryContent: {
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    color: colors.textMuted,
  },
  categoryArrow: {
    fontSize: 24,
    color: colors.textMuted,
    fontWeight: '300',
  },
  errorText: {
    fontSize: 18,
    color: colors.error,
    textAlign: 'center',
    marginTop: 40,
  },
});
