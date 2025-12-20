import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { getAllLanguages } from '../data/languagesData';

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const results = [];
    const languages = getAllLanguages();
    const lowerQuery = query.toLowerCase();

    languages.forEach((language) => {
      Object.entries(language.categories).forEach(([categoryId, category]) => {
        category.items.forEach((item, itemIndex) => {
          const searchableText = `${item.title} ${item.description} ${item.code} ${item.usage}`.toLowerCase();
          
          if (searchableText.includes(lowerQuery)) {
            results.push({
              language,
              categoryId,
              category,
              item,
              itemIndex,
            });
          }
        });
      });
    });

    setSearchResults(results);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search code, functions, syntax..."
            value={searchQuery}
            onChangeText={handleSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Text style={styles.clearButton}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {searchQuery.trim().length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>Search the Library</Text>
            <Text style={styles.emptyDescription}>
              Search across all programming languages for commands, functions,
              syntax, and examples
            </Text>
          </View>
        )}

        {searchQuery.trim().length > 0 && searchResults.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>😕</Text>
            <Text style={styles.emptyTitle}>No Results Found</Text>
            <Text style={styles.emptyDescription}>
              Try searching with different keywords
            </Text>
          </View>
        )}

        {searchResults.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsCount}>
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </Text>
            {searchResults.map((result, index) => (
              <TouchableOpacity
                key={index}
                style={styles.resultCard}
                onPress={() =>
                  navigation.navigate('Browse', {
                    screen: 'CodeDetail',
                    params: {
                      languageId: result.language.id,
                      categoryId: result.categoryId,
                      itemIndex: result.itemIndex,
                      itemTitle: result.item.title,
                      languageName: result.language.name,
                    },
                  })
                }
              >
                <View style={styles.resultHeader}>
                  <Text style={styles.resultLanguage}>
                    {result.language.icon} {result.language.name}
                  </Text>
                  <Text style={styles.resultCategory}>
                    {result.category.name}
                  </Text>
                </View>
                <Text style={styles.resultTitle}>{result.item.title}</Text>
                <Text style={styles.resultDescription} numberOfLines={2}>
                  {result.item.description}
                </Text>
                <View style={styles.resultCodePreview}>
                  <Text style={styles.resultCode} numberOfLines={2}>
                    {result.item.code}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  clearButton: {
    fontSize: 18,
    color: '#8E8E93',
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 24,
  },
  resultsContainer: {
    padding: 16,
  },
  resultsCount: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 16,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultLanguage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  resultCategory: {
    fontSize: 12,
    color: '#8E8E93',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  resultCodePreview: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 8,
  },
  resultCode: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#000000',
  },
});
