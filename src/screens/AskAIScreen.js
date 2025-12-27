import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Clipboard from 'expo-clipboard';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const CHAT_HISTORY_KEY = '@ai_chat_history';
const API_KEY_STORAGE = '@groq_api_key';

export default function AskAIScreen({ navigation }) {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const scrollViewRef = useRef();

  useEffect(() => {
    loadChatHistory();
    loadApiKey();
  }, []);

  const loadApiKey = async () => {
    try {
      const key = await AsyncStorage.getItem(API_KEY_STORAGE);
      if (key) {
        setApiKey(key);
      }
    } catch (error) {
      console.log('Error loading API key:', error);
    }
  };

  const loadChatHistory = async () => {
    try {
      const history = await AsyncStorage.getItem(CHAT_HISTORY_KEY);
      if (history) {
        setMessages(JSON.parse(history));
      }
    } catch (error) {
      console.log('Error loading chat history:', error);
    }
  };

  const saveChatHistory = async (newMessages) => {
    try {
      await AsyncStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(newMessages));
    } catch (error) {
      console.log('Error saving chat history:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    if (!apiKey) {
      Alert.alert(
        t('askAI.noApiKey'),
        t('askAI.noApiKeyMessage'),
        [
          { text: t('common.cancel'), style: 'cancel' },
          { 
            text: t('askAI.goToSettings'), 
            onPress: () => navigation.navigate('Settings')
          }
        ]
      );
      return;
    }

    const userMessage = {
      role: 'user',
      content: inputText.trim(),
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-70b-versatile',
          messages: newMessages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
          temperature: 0.7,
          max_tokens: 2048,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      const updatedMessages = [...newMessages, assistantMessage];
      setMessages(updatedMessages);
      saveChatHistory(updatedMessages);
    } catch (error) {
      Alert.alert(t('common.error'), error.message || t('askAI.errorMessage'));
      // Remove the user message if request failed
      setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    Alert.alert(
      t('askAI.clearChat'),
      t('askAI.clearChatConfirm'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('askAI.clear'),
          style: 'destructive',
          onPress: async () => {
            setMessages([]);
            await AsyncStorage.removeItem(CHAT_HISTORY_KEY);
          },
        },
      ]
    );
  };

  const copyMessage = async (content) => {
    await Clipboard.setStringAsync(content);
    Alert.alert(t('common.success'), t('askAI.copiedToClipboard'));
  };

  const renderMessage = (message, index) => {
    const isUser = message.role === 'user';
    
    return (
      <View
        key={index}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.assistantMessage,
        ]}
      >
        <View style={styles.messageHeader}>
          <Text style={styles.messageRole}>
            {isUser ? '👤 ' + t('askAI.you') : '🤖 ' + t('askAI.ai')}
          </Text>
          {!isUser && (
            <TouchableOpacity
              onPress={() => copyMessage(message.content)}
              style={styles.copyButton}
            >
              <Text style={styles.copyButtonText}>📋</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.messageContent}>{message.content}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>🤖 {t('askAI.title')}</Text>
            <Text style={styles.headerSubtitle}>{t('askAI.subtitle')}</Text>
          </View>
          {messages.length > 0 && (
            <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>🗑️</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>💬</Text>
              <Text style={styles.emptyTitle}>{t('askAI.emptyTitle')}</Text>
              <Text style={styles.emptyDescription}>
                {t('askAI.emptyDescription')}
              </Text>
              <View style={styles.examplesContainer}>
                <Text style={styles.examplesTitle}>{t('askAI.examples')}</Text>
                <TouchableOpacity
                  style={styles.exampleCard}
                  onPress={() => setInputText('Explain async/await in JavaScript')}
                >
                  <Text style={styles.exampleText}>💡 Explain async/await in JavaScript</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.exampleCard}
                  onPress={() => setInputText('How do I create a React component?')}
                >
                  <Text style={styles.exampleText}>⚛️ How do I create a React component?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.exampleCard}
                  onPress={() => setInputText('What are Python decorators?')}
                >
                  <Text style={styles.exampleText}>🐍 What are Python decorators?</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            messages.map((message, index) => renderMessage(message, index))
          )}
          {isLoading && (
            <View style={[styles.messageContainer, styles.assistantMessage]}>
              <Text style={styles.messageRole}>🤖 {t('askAI.ai')}</Text>
              <ActivityIndicator color={colors.primary} style={{ marginTop: 8 }} />
            </View>
          )}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder={t('askAI.placeholder')}
            placeholderTextColor={colors.textMuted}
            multiline
            maxLength={2000}
            editable={!isLoading}
          />
          <TouchableOpacity
            style={[styles.sendButton, (!inputText.trim() || isLoading) && styles.sendButtonDisabled]}
            onPress={sendMessage}
            disabled={!inputText.trim() || isLoading}
          >
            <Text style={styles.sendButtonText}>
              {isLoading ? '⏳' : '📤'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.backgroundElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
  },
  clearButton: {
    padding: spacing.xs,
  },
  clearButtonText: {
    fontSize: 24,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xxl,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: spacing.md,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  examplesContainer: {
    width: '100%',
    marginTop: spacing.md,
  },
  examplesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  exampleCard: {
    backgroundColor: colors.backgroundElevated,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  exampleText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  messageContainer: {
    marginBottom: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    maxWidth: '85%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary + '30',
    borderWidth: 1,
    borderColor: colors.primary + '50',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.backgroundElevated,
    borderWidth: 1,
    borderColor: colors.border,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  messageRole: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  copyButton: {
    padding: spacing.xs,
  },
  copyButtonText: {
    fontSize: 16,
  },
  messageContent: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.md,
    backgroundColor: colors.backgroundElevated,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: spacing.sm,
    paddingTop: spacing.sm,
    color: colors.text,
    fontSize: 16,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.sm,
    ...shadows.small,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    fontSize: 20,
  },
});
