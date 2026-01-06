import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Field, FieldGroup } from '../components/Field';
import { Button } from '../components/Button';
import { ComponentShowcase } from '../components/ComponentShowcase';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

/**
 * Demo screen showcasing the shadcn/ui inspired Field components
 */
export default function FieldDemoScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Form Fields</Text>
          <Text style={styles.subtitle}>
            Modern, accessible form components inspired by shadcn/ui
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Create Account</Text>
          <Text style={styles.cardDescription}>
            Enter your information to create an account
          </Text>

          <FieldGroup style={{ marginTop: spacing.lg }}>
            <Field
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => {
                setName(text);
                if (errors.name) {
                  setErrors({ ...errors, name: null });
                }
              }}
              error={errors.name}
              required
            />

            <Field
              label="Email"
              placeholder="name@example.com"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (errors.email) {
                  setErrors({ ...errors, email: null });
                }
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.email}
              description="We'll never share your email with anyone else."
              required
            />

            <Field
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password) {
                  setErrors({ ...errors, password: null });
                }
              }}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.password}
              description="Password must be at least 8 characters long."
              required
            />

            <Field
              label="Bio"
              placeholder="Tell us about yourself"
              value={bio}
              onChangeText={setBio}
              multiline
              numberOfLines={4}
              maxLength={200}
              description="Write a short bio about yourself. Max 200 characters."
            />

            <Button
              title="Create Account"
              onPress={handleSubmit}
              variant="primary"
              style={{ marginTop: spacing.sm }}
            />
          </FieldGroup>
        </View>

        {/* Examples Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Field Variants</Text>
          <Text style={styles.cardDescription}>
            Different states and configurations
          </Text>

          <FieldGroup style={{ marginTop: spacing.lg }}>
            <Field
              label="Default Field"
              placeholder="Enter text"
              value=""
              onChangeText={() => {}}
            />

            <Field
              label="With Description"
              placeholder="Enter text"
              value=""
              onChangeText={() => {}}
              description="This is a helpful description for the field."
            />

            <Field
              label="With Error"
              placeholder="Enter text"
              value="invalid"
              onChangeText={() => {}}
              error="This field contains an error."
            />

            <Field
              label="Disabled Field"
              placeholder="Cannot edit"
              value="Disabled"
              onChangeText={() => {}}
              editable={false}
            />

            <Field
              label="Multiline Field"
              placeholder="Enter multiple lines"
              value=""
              onChangeText={() => {}}
              multiline
              numberOfLines={3}
              maxLength={150}
            />
          </FieldGroup>
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
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.medium,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
});
