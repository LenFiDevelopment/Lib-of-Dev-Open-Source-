const { AndroidConfig, withAndroidManifest } = require('@expo/config-plugins');

const withGoogleMobileAds = (config) => {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(androidManifest);

    // Add tools namespace if not present
    if (!androidManifest.manifest.$) {
      androidManifest.manifest.$ = {};
    }
    androidManifest.manifest.$['xmlns:tools'] = 'http://schemas.android.com/tools';

    // Find or create meta-data array
    if (!mainApplication['meta-data']) {
      mainApplication['meta-data'] = [];
    }

    // Remove existing AdMob entries to avoid conflicts
    mainApplication['meta-data'] = mainApplication['meta-data'].filter(
      (item) =>
        item.$['android:name'] !== 'com.google.android.gms.ads.APPLICATION_ID' &&
        item.$['android:name'] !== 'com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT'
    );

    // Add AdMob Application ID with tools:replace
    mainApplication['meta-data'].push({
      $: {
        'android:name': 'com.google.android.gms.ads.APPLICATION_ID',
        'android:value': 'ca-app-pub-5526801232554836~6275754332',
        'tools:replace': 'android:value',
      },
    });

    // Add delay measurement init with tools:replace
    mainApplication['meta-data'].push({
      $: {
        'android:name': 'com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT',
        'android:value': 'true',
        'tools:replace': 'android:value',
      },
    });

    return config;
  });
};

module.exports = withGoogleMobileAds;
