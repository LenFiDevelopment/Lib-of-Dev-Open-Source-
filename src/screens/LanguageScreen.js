import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { getLanguageById } from '../data/languagesData';

export default function LanguageScreen({ route, navigation }) {
  const { languageId } = route.params;
  const language = getLanguageById(languageId);

  if (!language) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Language not found</Text>
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
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.sectionSubtitle}>
            Explore different aspects of {language.name}
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
                    {category.items.length} items
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
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 60,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  categoriesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 16,
  },
  categoriesList: {
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryContent: {
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    color: '#8E8E93',
  },
  categoryArrow: {
    fontSize: 24,
    color: '#C7C7CC',
    fontWeight: '300',
  },
  errorText: {
    fontSize: 18,
    color: '#FF3B30',
    textAlign: 'center',
    marginTop: 40,
  },
});
