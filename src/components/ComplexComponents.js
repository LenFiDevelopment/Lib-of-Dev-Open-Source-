import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

/**
 * Stats Card Component - Dashboard style
 */
export const StatsCard = ({ title, value, icon, trend, trendValue, color = colors.primary }) => {
  const isPositive = trend === 'up';
  
  return (
    <View style={styles.statsCard}>
      <View style={styles.statsHeader}>
        <Text style={styles.statsTitle}>{title}</Text>
        <View style={[styles.statsIcon, { backgroundColor: color + '20' }]}>
          <Text style={{ fontSize: 20 }}>{icon}</Text>
        </View>
      </View>
      <Text style={styles.statsValue}>{value}</Text>
      {trendValue && (
        <View style={styles.statsTrend}>
          <Text style={[
            styles.statsTrendText,
            { color: isPositive ? colors.success : colors.error }
          ]}>
            {isPositive ? '↑' : '↓'} {trendValue}
          </Text>
          <Text style={styles.statsTrendLabel}>vs last month</Text>
        </View>
      )}
    </View>
  );
};

/**
 * Pricing Card Component
 */
export const PricingCard = ({ 
  title, 
  price, 
  period = '/month',
  features, 
  recommended = false,
  onSelect 
}) => {
  return (
    <View style={[
      styles.pricingCard,
      recommended && styles.pricingCardRecommended
    ]}>
      {recommended && (
        <View style={styles.pricingBadge}>
          <Text style={styles.pricingBadgeText}>Most Popular</Text>
        </View>
      )}
      <Text style={styles.pricingTitle}>{title}</Text>
      <View style={styles.pricingPriceContainer}>
        <Text style={styles.pricingCurrency}>$</Text>
        <Text style={styles.pricingPrice}>{price}</Text>
        <Text style={styles.pricingPeriod}>{period}</Text>
      </View>
      <View style={styles.pricingFeatures}>
        {features.map((feature, index) => (
          <View key={index} style={styles.pricingFeature}>
            <Text style={styles.pricingFeatureIcon}>✓</Text>
            <Text style={styles.pricingFeatureText}>{feature}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.pricingButton,
          recommended && styles.pricingButtonRecommended
        ]}
        onPress={onSelect}
      >
        <Text style={[
          styles.pricingButtonText,
          recommended && styles.pricingButtonTextRecommended
        ]}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Feature Card Component - Landing page style
 */
export const FeatureCard = ({ icon, title, description, style }) => {
  return (
    <View style={[styles.featureCard, style]}>
      <View style={styles.featureIcon}>
        <Text style={styles.featureIconText}>{icon}</Text>
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
};

/**
 * Testimonial Card Component
 */
export const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  avatar,
  rating = 5 
}) => {
  return (
    <View style={styles.testimonialCard}>
      <View style={styles.testimonialRating}>
        {[...Array(5)].map((_, i) => (
          <Text key={i} style={styles.testimonialStar}>
            {i < rating ? '⭐' : '☆'}
          </Text>
        ))}
      </View>
      <Text style={styles.testimonialQuote}>"{quote}"</Text>
      <View style={styles.testimonialAuthor}>
        <View style={styles.testimonialAvatar}>
          <Text style={styles.testimonialAvatarText}>{avatar}</Text>
        </View>
        <View>
          <Text style={styles.testimonialName}>{author}</Text>
          <Text style={styles.testimonialRole}>{role}</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * Timeline Item Component
 */
export const TimelineItem = ({ 
  time, 
  title, 
  description, 
  icon,
  isLast = false 
}) => {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineLeft}>
        <Text style={styles.timelineTime}>{time}</Text>
      </View>
      <View style={styles.timelineCenter}>
        <View style={styles.timelineDot}>
          <Text style={styles.timelineDotIcon}>{icon || '•'}</Text>
        </View>
        {!isLast && <View style={styles.timelineLine} />}
      </View>
      <View style={styles.timelineRight}>
        <Text style={styles.timelineTitle}>{title}</Text>
        <Text style={styles.timelineDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Stats Card
  statsCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.small,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  statsTitle: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '500',
  },
  statsIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statsTrend: {
    flexDirection: 'row',
    gap: spacing.xs,
    alignItems: 'center',
  },
  statsTrendText: {
    fontSize: 14,
    fontWeight: '600',
  },
  statsTrendLabel: {
    fontSize: 12,
    color: colors.textMuted,
  },
  
  // Pricing Card
  pricingCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    position: 'relative',
  },
  pricingCardRecommended: {
    borderColor: colors.primary,
    borderWidth: 2,
    ...shadows.large,
  },
  pricingBadge: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs - 2,
    borderRadius: borderRadius.full,
  },
  pricingBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.buttonText,
  },
  pricingTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  pricingPriceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  pricingCurrency: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 4,
  },
  pricingPrice: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 56,
  },
  pricingPeriod: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 20,
  },
  pricingFeatures: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  pricingFeature: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  pricingFeatureIcon: {
    fontSize: 16,
    color: colors.success,
  },
  pricingFeatureText: {
    fontSize: 14,
    color: colors.text,
  },
  pricingButton: {
    backgroundColor: colors.backgroundCard,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  pricingButtonRecommended: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  pricingButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  pricingButtonTextRecommended: {
    color: colors.buttonText,
  },
  
  // Feature Card
  featureCard: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primaryAlpha,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  featureIconText: {
    fontSize: 32,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
  },
  
  // Testimonial Card
  testimonialCard: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  testimonialRating: {
    flexDirection: 'row',
    gap: spacing.xs - 2,
    marginBottom: spacing.md,
  },
  testimonialStar: {
    fontSize: 16,
  },
  testimonialQuote: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  testimonialAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonialAvatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.buttonText,
  },
  testimonialName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  testimonialRole: {
    fontSize: 12,
    color: colors.textMuted,
  },
  
  // Timeline
  timelineItem: {
    flexDirection: 'row',
    paddingBottom: spacing.lg,
  },
  timelineLeft: {
    width: 80,
    paddingRight: spacing.sm,
  },
  timelineTime: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
  },
  timelineCenter: {
    width: 40,
    alignItems: 'center',
  },
  timelineDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  timelineDotIcon: {
    fontSize: 12,
    color: colors.buttonText,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: colors.border,
    marginTop: spacing.xs,
  },
  timelineRight: {
    flex: 1,
    paddingLeft: spacing.sm,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  timelineDescription: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
});
