import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentShowcase } from '../components/ComponentShowcase';
import { Field, FieldGroup } from '../components/Field';
import { Button } from '../components/Button';
import { Alert } from '../components/Alert';
import { Badge } from '../components/Badge';
import { CardComponent, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, InteractiveCard } from '../components/CardComponents';
import { Skeleton, Avatar, Divider, Progress, Chip } from '../components/UIComponents';
import { colors, spacing, borderRadius } from '../constants/theme';

/**
 * Components Library Screen - shadcn/ui style
 * Shows all UI components with live preview, code, and installation
 */
export default function ComponentsScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Components</Text>
          <Text style={styles.subtitle}>
            Beautifully designed components built with React Native. Copy, paste, and customize.
          </Text>
          <Button
            title="🚀 View Advanced Components"
            onPress={() => navigation.navigate('AdvancedComponents')}
            variant="outline"
            style={{ marginTop: spacing.md }}
          />
        </View>

        {/* Field Component */}
        <ComponentShowcase
          title="Field"
          description="A form input field with label, description, and error state support."
          preview={
            <View style={{ width: '100%' }}>
              <Field
                label="Email"
                placeholder="name@example.com"
                value={email}
                onChangeText={setEmail}
                description="We'll never share your email."
              />
            </View>
          }
          code={`import { Field } from '../components/Field';

<Field
  label="Email"
  placeholder="name@example.com"
  value={email}
  onChangeText={setEmail}
  description="We'll never share your email."
/>`}
          installation={`# The Field component is already included in your project
# No installation needed - just import and use!

import { Field } from '../components/Field';`}
        />

        {/* Field with Error */}
        <ComponentShowcase
          title="Field with Error"
          description="Display validation errors with a red border and error message."
          preview={
            <View style={{ width: '100%' }}>
              <Field
                label="Email"
                placeholder="name@example.com"
                value="invalid-email"
                onChangeText={() => {}}
                error="Please enter a valid email address"
              />
            </View>
          }
          code={`<Field
  label="Email"
  placeholder="name@example.com"
  value={email}
  onChangeText={setEmail}
  error="Please enter a valid email address"
/>`}
        />

        {/* Required Field */}
        <ComponentShowcase
          title="Required Field"
          description="Mark fields as required with an asterisk indicator."
          preview={
            <View style={{ width: '100%' }}>
              <Field
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                required
              />
            </View>
          }
          code={`<Field
  label="Name"
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
  required
/>`}
        />

        {/* Multiline Field */}
        <ComponentShowcase
          title="Multiline Field"
          description="Textarea-style input with character counter."
          preview={
            <View style={{ width: '100%' }}>
              <Field
                label="Bio"
                placeholder="Tell us about yourself"
                value={bio}
                onChangeText={setBio}
                multiline
                numberOfLines={4}
                maxLength={200}
                description="Write a short bio. Max 200 characters."
              />
            </View>
          }
          code={`<Field
  label="Bio"
  placeholder="Tell us about yourself"
  value={bio}
  onChangeText={setBio}
  multiline
  numberOfLines={4}
  maxLength={200}
  description="Write a short bio. Max 200 characters."
/>`}
        />

        {/* Field Group */}
        <ComponentShowcase
          title="Field Group"
          description="Group multiple fields with consistent spacing."
          preview={
            <View style={{ width: '100%' }}>
              <FieldGroup>
                <Field
                  label="First Name"
                  placeholder="John"
                  value=""
                  onChangeText={() => {}}
                />
                <Field
                  label="Last Name"
                  placeholder="Doe"
                  value=""
                  onChangeText={() => {}}
                />
                <Field
                  label="Email"
                  placeholder="john@example.com"
                  value=""
                  onChangeText={() => {}}
                  keyboardType="email-address"
                />
              </FieldGroup>
            </View>
          }
          code={`import { Field, FieldGroup } from '../components/Field';

<FieldGroup>
  <Field
    label="First Name"
    placeholder="John"
    value={firstName}
    onChangeText={setFirstName}
  />
  <Field
    label="Last Name"
    placeholder="Doe"
    value={lastName}
    onChangeText={setLastName}
  />
  <Field
    label="Email"
    placeholder="john@example.com"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
  />
</FieldGroup>`}
        />

        {/* Button Component */}
        <ComponentShowcase
          title="Button"
          description="Primary action button with variants and states."
          preview={
            <View style={{ flexDirection: 'row', gap: spacing.md, flexWrap: 'wrap' }}>
              <Button title="Primary" onPress={() => {}} variant="primary" />
              <Button title="Secondary" onPress={() => {}} variant="secondary" />
              <Button title="Outline" onPress={() => {}} variant="outline" />
            </View>
          }
          code={`import { Button } from '../components/Button';

<Button 
  title="Primary" 
  onPress={() => {}} 
  variant="primary" 
/>

<Button 
  title="Secondary" 
  onPress={() => {}} 
  variant="secondary" 
/>

<Button 
  title="Outline" 
  onPress={() => {}} 
  variant="outline" 
/>`}
          installation={`# The Button component is already included
import { Button } from '../components/Button';`}
        />

        {/* Button Sizes */}
        <ComponentShowcase
          title="Button Sizes"
          description="Different button sizes for various use cases."
          preview={
            <View style={{ gap: spacing.md, alignItems: 'flex-start' }}>
              <Button title="Small" onPress={() => {}} size="small" />
              <Button title="Medium" onPress={() => {}} size="medium" />
              <Button title="Large" onPress={() => {}} size="large" />
            </View>
          }
          code={`<Button title="Small" onPress={() => {}} size="small" />
<Button title="Medium" onPress={() => {}} size="medium" />
<Button title="Large" onPress={() => {}} size="large" />`}
        />

        {/* Complete Form Example */}
        <ComponentShowcase
          title="Complete Form"
          description="A full form example with validation and submission."
          preview={
            <View style={{ width: '100%' }}>
              <View style={styles.formCard}>
                <Text style={styles.formTitle}>Sign Up</Text>
                <FieldGroup>
                  <Field
                    label="Name"
                    placeholder="Enter your name"
                    value=""
                    onChangeText={() => {}}
                    required
                  />
                  <Field
                    label="Email"
                    placeholder="name@example.com"
                    value=""
                    onChangeText={() => {}}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    required
                  />
                  <Button
                    title="Create Account"
                    onPress={() => {}}
                    variant="primary"
                  />
                </FieldGroup>
              </View>
            </View>
          }
          code={`import { Field, FieldGroup } from '../components/Field';
import { Button } from '../components/Button';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Validation
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    console.log({ name, email });
  };

  return (
    <View style={styles.formCard}>
      <Text style={styles.formTitle}>Sign Up</Text>
      <FieldGroup>
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
          error={errors.email}
          required
        />
        <Button
          title="Create Account"
          onPress={handleSubmit}
          variant="primary"
        />
      </FieldGroup>
    </View>
  );
}`}
        />

        {/* SECTION: Feedback Components */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Feedback & Status</Text>
          <Text style={styles.sectionDescription}>
            Components for displaying alerts, notifications, and status updates.
          </Text>
        </View>

        {/* Alert Component */}
        <ComponentShowcase
          title="Alert"
          description="Display important messages with different severity levels."
          preview={
            <View style={{ width: '100%', gap: spacing.md }}>
              <Alert
                variant="info"
                title="Information"
                description="This is an informational alert message."
              />
              <Alert
                variant="success"
                title="Success"
                description="Your action was completed successfully!"
              />
              <Alert
                variant="warning"
                title="Warning"
                description="Please review this before proceeding."
              />
              <Alert
                variant="error"
                title="Error"
                description="Something went wrong. Please try again."
              />
            </View>
          }
          code={`import { Alert } from '../components/Alert';

<Alert
  variant="info"
  title="Information"
  description="This is an informational alert message."
/>

<Alert
  variant="success"
  title="Success"
  description="Your action was completed successfully!"
/>

<Alert
  variant="warning"
  title="Warning"
  description="Please review this before proceeding."
/>

<Alert
  variant="error"
  title="Error"
  description="Something went wrong. Please try again."
/>`}
        />

        {/* Badge Component */}
        <ComponentShowcase
          title="Badge"
          description="Small status indicators and labels."
          preview={
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }}>
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </View>
          }
          code={`import { Badge } from '../components/Badge';

<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="outline">Outline</Badge>`}
        />

        {/* Badge Sizes */}
        <ComponentShowcase
          title="Badge Sizes"
          description="Different badge sizes for various use cases."
          preview={
            <View style={{ flexDirection: 'row', gap: spacing.sm, alignItems: 'center' }}>
              <Badge variant="primary" size="small">Small</Badge>
              <Badge variant="primary" size="medium">Medium</Badge>
              <Badge variant="primary" size="large">Large</Badge>
            </View>
          }
          code={`<Badge variant="primary" size="small">Small</Badge>
<Badge variant="primary" size="medium">Medium</Badge>
<Badge variant="primary" size="large">Large</Badge>`}
        />

        {/* Progress Component */}
        <ComponentShowcase
          title="Progress Bar"
          description="Display progress or completion status."
          preview={
            <View style={{ width: '100%', gap: spacing.md }}>
              <View>
                <Text style={{ color: colors.textMuted, fontSize: 12, marginBottom: spacing.xs }}>25%</Text>
                <Progress value={25} />
              </View>
              <View>
                <Text style={{ color: colors.textMuted, fontSize: 12, marginBottom: spacing.xs }}>50%</Text>
                <Progress value={50} />
              </View>
              <View>
                <Text style={{ color: colors.textMuted, fontSize: 12, marginBottom: spacing.xs }}>75%</Text>
                <Progress value={75} color={colors.warning} />
              </View>
              <View>
                <Text style={{ color: colors.textMuted, fontSize: 12, marginBottom: spacing.xs }}>100%</Text>
                <Progress value={100} color={colors.success} />
              </View>
            </View>
          }
          code={`import { Progress } from '../components/UIComponents';

<Progress value={25} />
<Progress value={50} />
<Progress value={75} color={colors.warning} />
<Progress value={100} color={colors.success} />`}
        />

        {/* SECTION: Layout Components */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Layout & Structure</Text>
          <Text style={styles.sectionDescription}>
            Cards, containers, and structural components.
          </Text>
        </View>

        {/* Card Component */}
        <ComponentShowcase
          title="Card"
          description="A flexible container for content with header, body, and footer."
          preview={
            <View style={{ width: '100%' }}>
              <CardComponent>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    This is a description of the card content. It provides context.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text style={{ color: colors.text }}>
                    Card content goes here. You can put any components inside.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Button title="Action" onPress={() => {}} size="small" />
                </CardFooter>
              </CardComponent>
            </View>
          }
          code={`import { 
  CardComponent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '../components/CardComponents';

<CardComponent>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      This is a description of the card content.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Card content goes here.</Text>
  </CardContent>
  <CardFooter>
    <Button title="Action" onPress={() => {}} />
  </CardFooter>
</CardComponent>`}
        />

        {/* Card Variants */}
        <ComponentShowcase
          title="Card Variants"
          description="Different card styles for various use cases."
          preview={
            <View style={{ width: '100%', gap: spacing.md }}>
              <CardComponent variant="default">
                <CardContent>
                  <Text style={{ color: colors.text, fontWeight: '600' }}>Default Card</Text>
                  <Text style={{ color: colors.textMuted, fontSize: 14, marginTop: 4 }}>
                    With border and shadow
                  </Text>
                </CardContent>
              </CardComponent>
              <CardComponent variant="elevated">
                <CardContent>
                  <Text style={{ color: colors.text, fontWeight: '600' }}>Elevated Card</Text>
                  <Text style={{ color: colors.textMuted, fontSize: 14, marginTop: 4 }}>
                    With larger shadow
                  </Text>
                </CardContent>
              </CardComponent>
              <CardComponent variant="outline">
                <CardContent>
                  <Text style={{ color: colors.text, fontWeight: '600' }}>Outline Card</Text>
                  <Text style={{ color: colors.textMuted, fontSize: 14, marginTop: 4 }}>
                    With border only
                  </Text>
                </CardContent>
              </CardComponent>
            </View>
          }
          code={`<CardComponent variant="default">...</CardComponent>
<CardComponent variant="elevated">...</CardComponent>
<CardComponent variant="outline">...</CardComponent>`}
        />

        {/* Divider Component */}
        <ComponentShowcase
          title="Divider"
          description="Separate content with horizontal or vertical dividers."
          preview={
            <View style={{ width: '100%' }}>
              <Text style={{ color: colors.text }}>Content above</Text>
              <Divider />
              <Text style={{ color: colors.text }}>Content below</Text>
            </View>
          }
          code={`import { Divider } from '../components/UIComponents';

<Text>Content above</Text>
<Divider />
<Text>Content below</Text>`}
        />

        {/* SECTION: Data Display */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Data Display</Text>
          <Text style={styles.sectionDescription}>
            Components for displaying data and user information.
          </Text>
        </View>

        {/* Avatar Component */}
        <ComponentShowcase
          title="Avatar"
          description="Display user initials or profile pictures."
          preview={
            <View style={{ flexDirection: 'row', gap: spacing.md, alignItems: 'center' }}>
              <Avatar size={32} label="John Doe" />
              <Avatar size={40} label="Jane Smith" />
              <Avatar size={48} label="Bob Johnson" />
              <Avatar size={56} label="Alice Williams" />
            </View>
          }
          code={`import { Avatar } from '../components/UIComponents';

<Avatar size={32} label="John Doe" />
<Avatar size={40} label="Jane Smith" />
<Avatar size={48} label="Bob Johnson" />
<Avatar size={56} label="Alice Williams" />`}
        />

        {/* Chip Component */}
        <ComponentShowcase
          title="Chip (Material Design)"
          description="Compact elements representing attributes, tags, or categories."
          preview={
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }}>
              <Chip label="React Native" icon="⚛️" />
              <Chip label="TypeScript" icon="📘" />
              <Chip label="JavaScript" icon="💛" />
              <Chip label="Trending" icon="🔥" variant="outlined" />
              <Chip label="New" icon="✨" variant="outlined" />
            </View>
          }
          code={`import { Chip } from '../components/UIComponents';

<Chip label="React Native" icon="⚛️" />
<Chip label="TypeScript" icon="📘" />
<Chip label="JavaScript" icon="💛" />
<Chip label="Trending" icon="🔥" variant="outlined" />
<Chip label="New" icon="✨" variant="outlined" />`}
        />

        {/* Skeleton Loader */}
        <ComponentShowcase
          title="Skeleton Loader"
          description="Loading placeholder for content."
          preview={
            <View style={{ width: '100%', gap: spacing.md }}>
              <View style={{ flexDirection: 'row', gap: spacing.md, alignItems: 'center' }}>
                <Skeleton variant="circular" width={40} height={40} />
                <View style={{ flex: 1, gap: spacing.xs }}>
                  <Skeleton width="60%" height={16} />
                  <Skeleton width="40%" height={12} />
                </View>
              </View>
              <Skeleton width="100%" height={100} variant="rectangular" />
              <View style={{ gap: spacing.xs }}>
                <Skeleton width="100%" height={12} />
                <Skeleton width="90%" height={12} />
                <Skeleton width="80%" height={12} />
              </View>
            </View>
          }
          code={`import { Skeleton } from '../components/UIComponents';

// Avatar + Text Skeleton
<View style={{ flexDirection: 'row', gap: spacing.md }}>
  <Skeleton variant="circular" width={40} height={40} />
  <View style={{ flex: 1 }}>
    <Skeleton width="60%" height={16} />
    <Skeleton width="40%" height={12} />
  </View>
</View>

// Image Skeleton
<Skeleton width="100%" height={100} variant="rectangular" />

// Text Lines Skeleton
<Skeleton width="100%" height={12} />
<Skeleton width="90%" height={12} />
<Skeleton width="80%" height={12} />`}
        />

        {/* Real-world Example - User Card */}
        <ComponentShowcase
          title="Real Example: User Profile Card"
          description="A complete user profile card combining multiple components."
          preview={
            <View style={{ width: '100%' }}>
              <CardComponent>
                <CardContent>
                  <View style={{ flexDirection: 'row', gap: spacing.md, marginBottom: spacing.md }}>
                    <Avatar size={56} label="Sarah Johnson" />
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text }}>
                        Sarah Johnson
                      </Text>
                      <Text style={{ fontSize: 14, color: colors.textMuted, marginTop: 2 }}>
                        Senior Developer
                      </Text>
                      <View style={{ flexDirection: 'row', gap: spacing.xs, marginTop: spacing.xs }}>
                        <Badge variant="primary" size="small">Pro</Badge>
                        <Badge variant="success" size="small">Verified</Badge>
                      </View>
                    </View>
                  </View>
                  <Divider />
                  <View style={{ marginTop: spacing.md, gap: spacing.sm }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: colors.textMuted, fontSize: 14 }}>Projects</Text>
                      <Text style={{ color: colors.text, fontWeight: '600' }}>24</Text>
                    </View>
                    <Progress value={80} />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginTop: spacing.sm }}>
                      <Chip label="React" icon="⚛️" variant="outlined" />
                      <Chip label="TypeScript" icon="📘" variant="outlined" />
                      <Chip label="Node.js" icon="💚" variant="outlined" />
                    </View>
                  </View>
                </CardContent>
                <CardFooter>
                  <View style={{ flexDirection: 'row', gap: spacing.sm }}>
                    <Button title="Message" onPress={() => {}} variant="primary" size="small" style={{ flex: 1 }} />
                    <Button title="Follow" onPress={() => {}} variant="outline" size="small" style={{ flex: 1 }} />
                  </View>
                </CardFooter>
              </CardComponent>
            </View>
          }
          code={`// Complete User Profile Card Example
import { CardComponent, CardContent, CardFooter } from '../components/CardComponents';
import { Avatar, Divider, Progress, Chip } from '../components/UIComponents';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

<CardComponent>
  <CardContent>
    <View style={{ flexDirection: 'row', gap: spacing.md }}>
      <Avatar size={56} label="Sarah Johnson" />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Sarah Johnson
        </Text>
        <Text style={{ fontSize: 14, color: colors.textMuted }}>
          Senior Developer
        </Text>
        <View style={{ flexDirection: 'row', gap: spacing.xs }}>
          <Badge variant="primary" size="small">Pro</Badge>
          <Badge variant="success" size="small">Verified</Badge>
        </View>
      </View>
    </View>
    <Divider />
    <View style={{ marginTop: spacing.md }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Projects</Text>
        <Text style={{ fontWeight: '600' }}>24</Text>
      </View>
      <Progress value={80} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs }}>
        <Chip label="React" icon="⚛️" variant="outlined" />
        <Chip label="TypeScript" icon="📘" variant="outlined" />
        <Chip label="Node.js" icon="💚" variant="outlined" />
      </View>
    </View>
  </CardContent>
  <CardFooter>
    <View style={{ flexDirection: 'row', gap: spacing.sm }}>
      <Button title="Message" variant="primary" />
      <Button title="Follow" variant="outline" />
    </View>
  </CardFooter>
</CardComponent>`}
        />

        <View style={{ height: spacing.xxxl }} />
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
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 24,
  },
  sectionHeader: {
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  formCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
});
