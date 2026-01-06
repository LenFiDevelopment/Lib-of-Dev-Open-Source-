import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentShowcase } from '../components/ComponentShowcase';
import { Switch, Checkbox, Radio, RadioGroup } from '../components/FormControls';
import { Tabs, Accordion, Toast, Tag, Slider } from '../components/AdvancedComponents';
import { StatsCard, PricingCard, FeatureCard, TestimonialCard, TimelineItem } from '../components/ComplexComponents';
import { Button } from '../components/Button';
import { colors, spacing, borderRadius } from '../constants/theme';

/**
 * Advanced Components Library Screen
 * More complex components and real-world patterns
 */
export default function AdvancedComponentsScreen() {
  const [switchValue, setSwitchValue] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [activeTab, setActiveTab] = useState('home');
  const [showToast, setShowToast] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Advanced Components</Text>
          <Text style={styles.subtitle}>
            Complex components for building professional apps and dashboards.
          </Text>
        </View>

        {/* SECTION: Form Controls */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Form Controls</Text>
          <Text style={styles.sectionDescription}>
            Interactive form inputs and controls.
          </Text>
        </View>

        {/* Switch Component */}
        <ComponentShowcase
          title="Switch (Toggle)"
          description="iOS/Material style toggle switch for boolean values."
          preview={
            <View style={{ flexDirection: 'row', gap: spacing.xl, alignItems: 'center' }}>
              <View style={{ alignItems: 'center', gap: spacing.xs }}>
                <Switch value={false} onValueChange={() => {}} />
                <Text style={{ fontSize: 12, color: colors.textMuted }}>Off</Text>
              </View>
              <View style={{ alignItems: 'center', gap: spacing.xs }}>
                <Switch value={true} onValueChange={() => {}} />
                <Text style={{ fontSize: 12, color: colors.textMuted }}>On</Text>
              </View>
              <View style={{ alignItems: 'center', gap: spacing.xs }}>
                <Switch value={switchValue} onValueChange={setSwitchValue} />
                <Text style={{ fontSize: 12, color: colors.textMuted }}>Interactive</Text>
              </View>
            </View>
          }
          code={`import { Switch } from '../components/FormControls';

const [enabled, setEnabled] = useState(false);

<Switch 
  value={enabled} 
  onValueChange={setEnabled} 
/>`}
        />

        {/* Checkbox Component */}
        <ComponentShowcase
          title="Checkbox"
          description="Standard checkbox with label support."
          preview={
            <View style={{ gap: spacing.sm }}>
              <Checkbox checked={false} onChange={() => {}} label="Unchecked" />
              <Checkbox checked={true} onChange={() => {}} label="Checked" />
              <Checkbox checked={checked} onChange={setChecked} label="Interactive" />
            </View>
          }
          code={`import { Checkbox } from '../components/FormControls';

const [checked, setChecked] = useState(false);

<Checkbox 
  checked={checked} 
  onChange={setChecked} 
  label="Accept terms and conditions" 
/>`}
        />

        {/* Radio Button */}
        <ComponentShowcase
          title="Radio Button"
          description="Single selection from multiple options."
          preview={
            <RadioGroup
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
              value={radioValue}
              onChange={setRadioValue}
            />
          }
          code={`import { RadioGroup } from '../components/FormControls';

const [selected, setSelected] = useState('option1');

<RadioGroup
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}
  value={selected}
  onChange={setSelected}
/>`}
        />

        {/* Slider */}
        <ComponentShowcase
          title="Slider"
          description="Visual slider for selecting numeric values."
          preview={
            <View style={{ width: '100%' }}>
              <Slider value={sliderValue} onChange={setSliderValue} />
            </View>
          }
          code={`import { Slider } from '../components/AdvancedComponents';

const [value, setValue] = useState(50);

<Slider 
  value={value} 
  min={0} 
  max={100} 
  onChange={setValue} 
/>`}
        />

        {/* SECTION: Navigation */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Navigation & Layout</Text>
          <Text style={styles.sectionDescription}>
            Tabs, accordions, and navigation components.
          </Text>
        </View>

        {/* Tabs Component */}
        <ComponentShowcase
          title="Tabs (Material Design)"
          description="Horizontal tabs for organizing content."
          preview={
            <View style={{ width: '100%' }}>
              <Tabs
                tabs={[
                  { value: 'home', label: 'Home', icon: '🏠' },
                  { value: 'profile', label: 'Profile', icon: '👤' },
                  { value: 'messages', label: 'Messages', icon: '💬', badge: '3' },
                  { value: 'settings', label: 'Settings', icon: '⚙️' },
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
              <View style={{ padding: spacing.md, backgroundColor: colors.backgroundElevated, marginTop: spacing.md, borderRadius: borderRadius.md }}>
                <Text style={{ color: colors.text }}>
                  {activeTab === 'home' && 'Home Content'}
                  {activeTab === 'profile' && 'Profile Content'}
                  {activeTab === 'messages' && 'Messages Content'}
                  {activeTab === 'settings' && 'Settings Content'}
                </Text>
              </View>
            </View>
          }
          code={`import { Tabs } from '../components/AdvancedComponents';

const [activeTab, setActiveTab] = useState('home');

<Tabs
  tabs={[
    { value: 'home', label: 'Home', icon: '🏠' },
    { value: 'profile', label: 'Profile', icon: '👤' },
    { value: 'messages', label: 'Messages', icon: '💬', badge: '3' },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`}
        />

        {/* Accordion */}
        <ComponentShowcase
          title="Accordion"
          description="Collapsible content sections."
          preview={
            <View style={{ width: '100%', gap: spacing.sm }}>
              <Accordion title="What is React Native?">
                <Text style={{ color: colors.text, lineHeight: 20 }}>
                  React Native is an open-source framework for building mobile applications using React and JavaScript.
                </Text>
              </Accordion>
              <Accordion title="How does it work?" defaultExpanded>
                <Text style={{ color: colors.text, lineHeight: 20 }}>
                  React Native uses native components and provides a bridge between JavaScript and native APIs.
                </Text>
              </Accordion>
              <Accordion title="Is it production-ready?">
                <Text style={{ color: colors.text, lineHeight: 20 }}>
                  Yes! Many popular apps like Facebook, Instagram, and Airbnb use React Native.
                </Text>
              </Accordion>
            </View>
          }
          code={`import { Accordion } from '../components/AdvancedComponents';

<Accordion title="Section Title">
  <Text>Content goes here</Text>
</Accordion>

<Accordion title="Expanded by Default" defaultExpanded>
  <Text>This section is open initially</Text>
</Accordion>`}
        />

        {/* SECTION: Feedback */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Feedback & Notifications</Text>
          <Text style={styles.sectionDescription}>
            Toasts, tags, and notification components.
          </Text>
        </View>

        {/* Toast */}
        <ComponentShowcase
          title="Toast / Snackbar"
          description="Temporary notification messages."
          preview={
            <View style={{ width: '100%', gap: spacing.sm }}>
              <Button 
                title="Show Toast" 
                onPress={() => {
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 3000);
                }}
              />
              <Toast
                message="Successfully saved!"
                type="success"
                visible={showToast}
                onDismiss={() => setShowToast(false)}
              />
            </View>
          }
          code={`import { Toast } from '../components/AdvancedComponents';

const [visible, setVisible] = useState(false);

<Toast
  message="Successfully saved!"
  type="success"
  visible={visible}
  onDismiss={() => setVisible(false)}
/>

// Types: 'info' | 'success' | 'warning' | 'error'`}
        />

        {/* Tags */}
        <ComponentShowcase
          title="Tag / Label"
          description="Removable tags for categories or filters."
          preview={
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }}>
              <Tag>React Native</Tag>
              <Tag color={colors.secondary}>TypeScript</Tag>
              <Tag color={colors.warning} onClose={() => {}}>JavaScript</Tag>
              <Tag color={colors.success}>Expo</Tag>
              <Tag color={colors.error} onClose={() => {}}>Redux</Tag>
            </View>
          }
          code={`import { Tag } from '../components/AdvancedComponents';

<Tag>React Native</Tag>
<Tag color={colors.secondary}>TypeScript</Tag>
<Tag color={colors.primary} onClose={() => handleRemove()}>
  Removable
</Tag>`}
        />

        {/* SECTION: Dashboard & Business */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Dashboard & Business</Text>
          <Text style={styles.sectionDescription}>
            Professional components for dashboards and business apps.
          </Text>
        </View>

        {/* Stats Cards */}
        <ComponentShowcase
          title="Stats Card"
          description="Display key metrics and statistics."
          preview={
            <View style={{ width: '100%', gap: spacing.md }}>
              <View style={{ flexDirection: 'row', gap: spacing.md }}>
                <View style={{ flex: 1 }}>
                  <StatsCard
                    title="Total Users"
                    value="12,345"
                    icon="👥"
                    trend="up"
                    trendValue="+12.5%"
                    color={colors.primary}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <StatsCard
                    title="Revenue"
                    value="$89.2K"
                    icon="💰"
                    trend="up"
                    trendValue="+8.3%"
                    color={colors.success}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: spacing.md }}>
                <View style={{ flex: 1 }}>
                  <StatsCard
                    title="Bounce Rate"
                    value="42.3%"
                    icon="📉"
                    trend="down"
                    trendValue="-4.2%"
                    color={colors.warning}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <StatsCard
                    title="Active Now"
                    value="892"
                    icon="🟢"
                    color={colors.success}
                  />
                </View>
              </View>
            </View>
          }
          code={`import { StatsCard } from '../components/ComplexComponents';

<StatsCard
  title="Total Users"
  value="12,345"
  icon="👥"
  trend="up"
  trendValue="+12.5%"
  color={colors.primary}
/>`}
        />

        {/* Pricing Card */}
        <ComponentShowcase
          title="Pricing Card"
          description="Pricing plans with features and CTA."
          preview={
            <View style={{ width: '100%', flexDirection: 'row', gap: spacing.md }}>
              <View style={{ flex: 1 }}>
                <PricingCard
                  title="Basic"
                  price="9"
                  features={[
                    '10 Projects',
                    '5 GB Storage',
                    'Email Support',
                  ]}
                  onSelect={() => {}}
                />
              </View>
              <View style={{ flex: 1 }}>
                <PricingCard
                  title="Pro"
                  price="29"
                  recommended
                  features={[
                    'Unlimited Projects',
                    '100 GB Storage',
                    'Priority Support',
                    'Advanced Analytics',
                  ]}
                  onSelect={() => {}}
                />
              </View>
            </View>
          }
          code={`import { PricingCard } from '../components/ComplexComponents';

<PricingCard
  title="Pro"
  price="29"
  period="/month"
  recommended
  features={[
    'Unlimited Projects',
    '100 GB Storage',
    'Priority Support',
  ]}
  onSelect={() => handleSelect()}
/>`}
        />

        {/* Feature Card */}
        <ComponentShowcase
          title="Feature Card"
          description="Highlight product features and benefits."
          preview={
            <View style={{ width: '100%', gap: spacing.md }}>
              <View style={{ flexDirection: 'row', gap: spacing.md }}>
                <View style={{ flex: 1 }}>
                  <FeatureCard
                    icon="⚡"
                    title="Fast"
                    description="Optimized for performance and speed"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <FeatureCard
                    icon="🔒"
                    title="Secure"
                    description="Enterprise-grade security"
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: spacing.md }}>
                <View style={{ flex: 1 }}>
                  <FeatureCard
                    icon="📱"
                    title="Responsive"
                    description="Works on all devices"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <FeatureCard
                    icon="🎨"
                    title="Customizable"
                    description="Fully themeable"
                  />
                </View>
              </View>
            </View>
          }
          code={`import { FeatureCard } from '../components/ComplexComponents';

<FeatureCard
  icon="⚡"
  title="Fast Performance"
  description="Optimized for speed and efficiency"
/>`}
        />

        {/* Testimonial */}
        <ComponentShowcase
          title="Testimonial Card"
          description="Display customer reviews and testimonials."
          preview={
            <View style={{ width: '100%' }}>
              <TestimonialCard
                quote="This library saved me so much time! The components are beautiful and easy to use."
                author="Sarah Johnson"
                role="Senior Developer at TechCorp"
                avatar="SJ"
                rating={5}
              />
            </View>
          }
          code={`import { TestimonialCard } from '../components/ComplexComponents';

<TestimonialCard
  quote="Amazing product! Highly recommended."
  author="John Doe"
  role="CEO at StartupXYZ"
  avatar="JD"
  rating={5}
/>`}
        />

        {/* Timeline */}
        <ComponentShowcase
          title="Timeline"
          description="Display events in chronological order."
          preview={
            <View style={{ width: '100%' }}>
              <TimelineItem
                time="09:00 AM"
                title="Project Kickoff"
                description="Initial meeting with the team"
                icon="🚀"
              />
              <TimelineItem
                time="11:30 AM"
                title="Design Review"
                description="Review mockups and wireframes"
                icon="🎨"
              />
              <TimelineItem
                time="02:00 PM"
                title="Development Started"
                description="Begin implementation phase"
                icon="💻"
              />
              <TimelineItem
                time="04:30 PM"
                title="First Deployment"
                description="Deploy to staging environment"
                icon="🎉"
                isLast
              />
            </View>
          }
          code={`import { TimelineItem } from '../components/ComplexComponents';

<TimelineItem
  time="09:00 AM"
  title="Project Kickoff"
  description="Initial meeting with the team"
  icon="🚀"
/>
<TimelineItem
  time="11:30 AM"
  title="Design Review"
  description="Review mockups and wireframes"
  icon="🎨"
  isLast
/>`}
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
});
