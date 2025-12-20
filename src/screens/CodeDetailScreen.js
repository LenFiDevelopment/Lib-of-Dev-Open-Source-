import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Clipboard from '@react-native-clipboard/clipboard';
import { getLanguageById } from '../data/languagesData';

export default function CodeDetailScreen({ route }) {
  const { t } = useTranslation();
  const { languageId, categoryId, itemIndex, languageName } = route.params;
  const language = getLanguageById(languageId);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!language || !language.categories[categoryId]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{t('common.notFound')}</Text>
      </SafeAreaView>
    );
  }

  const category = language.categories[categoryId];
  
  if (!category.items || !category.items[itemIndex]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{t('common.notFound')}</Text>
      </SafeAreaView>
    );
  }
  
  const item = category.items[itemIndex];

  const copyToClipboard = () => {
    Clipboard.setString(item.code);
    Alert.alert(t('codeDetail.copied'), t('codeDetail.copiedMessage'));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Alert.alert(
      isFavorite ? t('codeDetail.removedFromFavorites') : t('codeDetail.addedToFavorites'),
      isFavorite ? t('codeDetail.removedMessage') : t('codeDetail.addedMessage')
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.breadcrumb}>
                {languageName} › {category.name}
              </Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={toggleFavorite}
            >
              <Text style={styles.favoriteIcon}>
                {isFavorite ? '⭐' : '☆'}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{t('codeDetail.codeExample')}</Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={copyToClipboard}
            >
              <Text style={styles.copyButtonText}>📋 {t('codeDetail.copy')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.codeBlock}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Text style={styles.codeText}>{item.code}</Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('codeDetail.usage')}</Text>
          <View style={styles.usageBox}>
            <Text style={styles.usageText}>{item.usage}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('codeDetail.keyPoints')}</Text>
          <View style={styles.keyPointsBox}>
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>
                {t('codeDetail.keyPoint1')}
              </Text>
            </View>
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>
                {t('codeDetail.keyPoint2')}
              </Text>
            </View>
            <View style={styles.keyPoint}>
              <Text style={styles.keyPointBullet}>•</Text>
              <Text style={styles.keyPointText}>
                {t('codeDetail.keyPoint3')}
              </Text>
            </View>
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
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  breadcrumb: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    fontSize: 28,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  copyButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  copyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  codeBlock: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#D4D4D4',
    lineHeight: 20,
  },
  usageBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#34C759',
  },
  usageText: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
  },
  keyPointsBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  keyPoint: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  keyPointBullet: {
    fontSize: 20,
    color: '#007AFF',
    marginRight: 12,
    marginTop: -2,
  },
  keyPointText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
  },
  errorText: {
    fontSize: 18,
    color: '#FF3B30',
    textAlign: 'center',
    marginTop: 40,
  },
});
