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

export default function CategoryScreen({ route, navigation }) {
  const { languageId, categoryId, languageName } = route.params;
  const language = getLanguageById(languageId);

  if (!language || !language.categories[categoryId]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Category not found</Text>
      </SafeAreaView>
    );
  }

  const category = language.categories[categoryId];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.breadcrumb}>
            {languageName} › {category.name}
          </Text>
        </View>

        <View style={styles.itemsContainer}>
          {category.items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemCard}
              onPress={() =>
                navigation.navigate('CodeDetail', {
                  languageId,
                  categoryId,
                  itemIndex: index,
                  itemTitle: item.title,
                  languageName,
                })
              }
            >
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemArrow}>›</Text>
              </View>
              <Text style={styles.itemDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <View style={styles.codePreview}>
                <Text style={styles.codePreviewText} numberOfLines={3}>
                  {item.code}
                </Text>
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
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  breadcrumb: {
    fontSize: 14,
    color: '#8E8E93',
  },
  itemsContainer: {
    padding: 16,
    gap: 12,
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  itemArrow: {
    fontSize: 24,
    color: '#C7C7CC',
    fontWeight: '300',
  },
  itemDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 12,
  },
  codePreview: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  codePreviewText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#000000',
  },
  errorText: {
    fontSize: 18,
    color: '#FF3B30',
    textAlign: 'center',
    marginTop: 40,
  },
});
