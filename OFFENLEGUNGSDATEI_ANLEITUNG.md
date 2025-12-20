# Google Play Offenlegungsdatei (Mapping File) hochladen

## Problem
Google Play zeigt die Warnung: **"Mit diesem App Bundle ist keine Offenlegungsdatei verknüpft"**

Diese Datei ist essentiell für:
- Deobfuskierung von Absturzberichten
- Debugging von ANRs (Anwendung reagiert nicht)
- Stack-Trace-Analyse in der Google Play Console

## Was wurde konfiguriert

### ✅ R8/ProGuard ist jetzt aktiviert
In `android/gradle.properties`:
```properties
android.enableMinifyInReleaseBuilds=true
android.enableShrinkResourcesInReleaseBuilds=true
```

Dies reduziert die App-Größe um **30-50%** und verschleiert den Code.

## Offenlegungsdatei hochladen - 3 Methoden

### **Methode 1: Automatisch mit EAS Build** (Empfohlen)

EAS Build generiert die Mapping Files automatisch. Du findest sie hier:

1. Baue die App:
```bash
eas build --platform android --profile production
```

2. Nach dem Build, lade die Mapping Files herunter:
   - Öffne https://expo.dev/accounts/[dein-username]/projects/[projekt-name]/builds
   - Klicke auf deinen letzten Build
   - Im Abschnitt "Artifacts" findest du: **`mapping.txt`** oder **`mapping-xxx.txt`**
   - Lade diese Datei herunter

3. Hochladen zu Google Play:
   - Öffne [Google Play Console](https://play.google.com/console)
   - Gehe zu: **App-Bundle-Explorer** → Wähle deine Version aus
   - Klicke auf **"Downloads"** Tab
   - Unter **"ProGuard-Zuordnungsdatei"** → **"Hochladen"**
   - Wähle die heruntergeladene `mapping.txt` aus

### **Methode 2: Lokal aus dem Projekt** (Wenn du lokal buildest)

Wenn du den Build lokal durchführst (`eas build --local`), findest du die Mapping Files hier:

```
android/app/build/outputs/mapping/release/mapping.txt
```

Diese Datei dann zu Google Play hochladen (siehe Schritt 3 oben).

### **Methode 3: Automatisches Upload mit EAS Submit** (Fortgeschritten)

Konfiguriere in `eas.json`:

```json
{
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./path/to/service-account.json",
        "track": "production",
        "releaseStatus": "completed"
      }
    }
  }
}
```

Dann:
```bash
eas submit --platform android --latest
```

## Wichtig: Mapping Files archivieren!

⚠️ **Bewahre ALLE Mapping Files auf!** Ohne das passende Mapping File kannst du Absturzberichte nicht deobfuskieren.

Erstelle ein Archiv:
```
mapping-files/
  ├── v1.0.0-build1-mapping.txt
  ├── v1.0.0-build2-mapping.txt
  ├── v2.0.0-build5-mapping.txt
  └── ...
```

## Absturzberichte mit Mapping Files

Wenn du Sentry oder Firebase Crashlytics verwendest:

### Sentry
```bash
# Upload mapping file zu Sentry
npx sentry-cli upload-proguard \
  --android-manifest android/app/src/main/AndroidManifest.xml \
  --write-properties android/app/build/generated/assets/sentry-debug-meta.properties \
  android/app/build/outputs/mapping/release/
```

### Firebase Crashlytics
Die Mapping Files werden automatisch hochgeladen, wenn du das Firebase Gradle Plugin verwendest.

## Nächster Build

Beim nächsten Build:
```bash
eas build --platform android --profile production
```

Die Mapping Files werden automatisch generiert. Du musst sie nur noch zu Google Play hochladen.

## Überprüfung

Nach dem Upload in Google Play Console:
1. Gehe zu **Qualität** → **Android Vitals** → **Abstürze und ANRs**
2. Absturzberichte sollten jetzt deobfuskiert angezeigt werden
3. Stack Traces zeigen echte Klassen- und Methodennamen statt `a.b.c()`

## Weitere Ressourcen

- [Android R8/ProGuard Dokumentation](https://developer.android.com/build/shrink-code)
- [EAS Build Artefakte](https://docs.expo.dev/build-reference/artifacts/)
- [Google Play Mapping Files Anleitung](https://support.google.com/googleplay/android-developer/answer/9848633)

---

## Schnellanleitung (TL;DR)

1. **Neuer Build läuft bereits** mit aktiviertem R8/ProGuard ✅
2. **Nach Build-Abschluss:**
   - Öffne expo.dev → Builds
   - Lade `mapping.txt` herunter
3. **Hochladen:**
   - Google Play Console → App-Bundle-Explorer → Downloads
   - "ProGuard-Zuordnungsdatei hochladen"
4. **Fertig!** Absturzberichte sind jetzt lesbar 🎉
