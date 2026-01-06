# Field Component - shadcn/ui Inspired

Modern, accessible form field components for React Native, inspired by [shadcn/ui](https://ui.shadcn.com/).

## Features

✨ **shadcn/ui Design System** - Clean, modern design inspired by shadcn/ui  
🎨 **Dark Mode Native** - Built for dark mode with high contrast  
♿ **Accessible** - Proper labels, descriptions, and error messages  
📝 **Validation Ready** - Built-in error state and messaging  
🔧 **Flexible** - Highly customizable with sensible defaults  
📏 **Character Counter** - Optional character limit display  
🎯 **Focus States** - Beautiful focus rings like shadcn/ui  

## Components

### Field
The main input component with label, description, and error support.

### FieldGroup
A container for grouping multiple fields with consistent spacing.

## Usage

### Basic Field

```javascript
import { Field } from '../components/Field';

<Field
  label="Email"
  placeholder="name@example.com"
  value={email}
  onChangeText={setEmail}
/>
```

### Field with Description

```javascript
<Field
  label="Email"
  placeholder="name@example.com"
  value={email}
  onChangeText={setEmail}
  description="We'll never share your email with anyone else."
/>
```

### Field with Error

```javascript
<Field
  label="Email"
  placeholder="name@example.com"
  value={email}
  onChangeText={setEmail}
  error="Please enter a valid email address"
/>
```

### Required Field

```javascript
<Field
  label="Name"
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
  required
/>
```

### Multiline Field with Character Limit

```javascript
<Field
  label="Bio"
  placeholder="Tell us about yourself"
  value={bio}
  onChangeText={setBio}
  multiline
  numberOfLines={4}
  maxLength={200}
  description="Write a short bio about yourself."
/>
```

### Password Field

```javascript
<Field
  label="Password"
  placeholder="Enter password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  autoCapitalize="none"
  autoCorrect={false}
/>
```

### Disabled Field

```javascript
<Field
  label="Username"
  value="john_doe"
  editable={false}
/>
```

### Field Group

```javascript
import { Field, FieldGroup } from '../components/Field';

<FieldGroup>
  <Field
    label="First Name"
    value={firstName}
    onChangeText={setFirstName}
  />
  <Field
    label="Last Name"
    value={lastName}
    onChangeText={setLastName}
  />
  <Field
    label="Email"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
  />
</FieldGroup>
```

## Props

### Field Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Label text displayed above input |
| `description` | string | - | Helper text displayed below input |
| `error` | string | - | Error message (overrides description) |
| `value` | string | - | Input value |
| `onChangeText` | function | - | Callback when text changes |
| `placeholder` | string | - | Placeholder text |
| `multiline` | boolean | false | Enable multiline input |
| `numberOfLines` | number | 1 | Number of lines for multiline |
| `maxLength` | number | - | Maximum character length |
| `keyboardType` | string | 'default' | Keyboard type |
| `autoCapitalize` | string | 'sentences' | Auto-capitalization |
| `autoCorrect` | boolean | true | Enable auto-correct |
| `secureTextEntry` | boolean | false | Hide input (for passwords) |
| `editable` | boolean | true | Allow editing |
| `required` | boolean | false | Show required indicator (*) |
| `style` | object | - | Container style |
| `inputStyle` | object | - | Input style |

### FieldGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | node | - | Field components |
| `style` | object | - | Container style |

## Complete Form Example

```javascript
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Field, FieldGroup } from '../components/Field';
import { Button } from '../components/Button';

export default function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Validation logic
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    console.log({ name, email, bio });
  };

  return (
    <ScrollView>
      <FieldGroup>
        <Field
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            if (errors.name) setErrors({ ...errors, name: null });
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
            if (errors.email) setErrors({ ...errors, email: null });
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
          description="We'll never share your email."
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
          description="Max 200 characters"
        />

        <Button
          title="Save Profile"
          onPress={handleSubmit}
          variant="primary"
        />
      </FieldGroup>
    </ScrollView>
  );
}
```

## Design Philosophy

This component follows shadcn/ui's design principles:

- **Consistent spacing** - Uses theme spacing system
- **High contrast** - Optimized for readability in dark mode
- **Focus states** - Clear visual feedback with focus rings
- **Subtle borders** - Clean, minimal border styling
- **Typography** - Consistent font sizing and weights
- **Accessibility** - Proper labels and error messaging

## Integration with Existing Screens

You can easily integrate these fields into your existing screens:

```javascript
// In SettingsScreen.js
import { Field, FieldGroup } from '../components/Field';

// Replace TextInput with Field
<Field
  label="API Key"
  placeholder="Enter your API key"
  value={apiKey}
  onChangeText={setApiKey}
  description="Enter your Groq API key for AI features"
/>
```

## Customization

You can customize the appearance by overriding styles:

```javascript
<Field
  label="Custom Field"
  value={value}
  onChangeText={setValue}
  style={{ marginBottom: 20 }}
  inputStyle={{ 
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
  }}
/>
```

## Demo

Check out [FieldDemoScreen.js](../screens/FieldDemoScreen.js) for a complete demo with all variants and use cases.
