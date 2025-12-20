# Mehrsprachigkeits-Implementierung (i18n)

## ✅ Fertiggestellt

1. **i18n Setup**
   - `i18next` und `react-i18next` installiert
   - i18n-Konfiguration erstellt (`src/i18n/index.js`)
   - AsyncStorage-Integration für Sprachpersistenz
   - Auto-Detection und Fallback auf Englisch

2. **Sprachdateien**
   - ✅ Englisch (US) - `src/i18n/locales/en.json`
   - ✅ Deutsch - `src/i18n/locales/de.json`
   - Vollständige Übersetzungen für alle UI-Bereiche

3. **Sprachwahl**
   - Settings-Screen mit Sprachwahl-Modal
   - Persistente Speicherung der Sprachauswahl
   - Liste verfügbarer Sprachen

4. **Hook**
   - `useAppTranslation` Hook für einfache Verwendung
   - Wrapper für i18next-Funktionalität

## 🔄 Noch zu implementieren

### Schritt 1: Screens aktualisieren

Jeder Screen muss aktualisiert werden:

```javascript
import { useTranslation } from 'react-i18next';

export default function ScreenName() {
  const { t } = useTranslation();
  
  // Ersetze alle hart-kodierten Texte:
  // Alt: <Text>Search</Text>
  // Neu: <Text>{t('common.search')}</Text>
}
```

**Betroffene Screens:**
- [x] SettingsScreen.js (teilweise)
- [ ] HomeScreen.js
- [ ] SearchScreen.js
- [ ] FavoritesScreen.js
- [ ] HintsScreen.js
- [ ] CategoryScreen.js
- [ ] CodeDetailScreen.js
- [ ] LanguageScreen.js
- [ ] LearningScreen.js
- [ ] PlatformsScreen.js
- [ ] ResourcesScreen.js
- [ ] SpecializedTopicsScreen.js
- [ ] UIFrameworksScreen.js

### Schritt 2: Navigation aktualisieren

`src/navigation/AppNavigator.js`:
```javascript
import { useTranslation } from 'react-i18next';

// Ersetze Tab-Labels mit t('navigation.home'), etc.
```

### Schritt 3: Komponenten aktualisieren

- `src/components/Button.js`
- `src/components/Card.js`

### Schritt 4: Data-Dateien mehrsprachig machen

**Option A: Separate Dateien**
```
src/data/
  - languagesData.en.js
  - languagesData.de.js
  - developerHintsData.en.js
  - developerHintsData.de.js
  ...
```

**Option B: In i18n-Dateien integrieren** (empfohlen)

Füge zu `en.json` und `de.json` hinzu:
```json
{
  "data": {
    "languages": {
      "javascript": {
        "description": "High-level, interpreted programming language",
        "categories": {
          "basics": {
            "name": "Basics & Syntax",
            "items": [...]
          }
        }
      }
    }
  }
}
```

### Schritt 5: Verwendung in Screens

```javascript
const { t, i18n } = useTranslation();

// Lade übersetzt Daten
const languageData = t('data.languages.javascript', { returnObjects: true });
```

## 📝 Translation Keys Struktur

```json
{
  "common": { /* Häufig verwendete Begriffe */ },
  "home": { /* Home Screen */ },
  "navigation": { /* Navigation Labels */ },
  "search": { /* Search Screen */ },
  "favorites": { /* Favorites Screen */ },
  "settings": { /* Settings Screen */ },
  "languages": { /* Programmiersprachen-Namen */ },
  "categories": { /* Kategorie-Namen */ },
  "codeDetail": { /* Code Detail Screen */ },
  "hints": { /* Developer Hints */ },
  "learning": { /* Learning Resources */ },
  "platforms": { /* Platforms */ },
  "specializedTopics": { /* Specialized Topics */ },
  "uiFrameworks": { /* UI Frameworks */ },
  "resources": { /* Resources */ },
  "quickAccess": { /* Quick Access Cards */ }
}
```

## 🚀 Verwendung

```javascript
// In Components/Screens
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <View>
      <Text>{t('common.search')}</Text>
      <Text>{t('home.title')}</Text>
      
      {/* Mit Interpolation */}
      <Text>{t('search.results', { count: 5 })}</Text>
      
      {/* Aktuelle Sprache */}
      <Text>Current: {i18n.language}</Text>
      
      {/* Sprache wechseln */}
      <Button onPress={() => i18n.changeLanguage('de')} />
    </View>
  );
}
```

## ✅ Testing

1. **Sprachwechsel testen:**
   - Settings öffnen
   - Sprache wählen (Englisch/Deutsch)
   - App neu starten
   - Prüfen ob alle Texte übersetzt sind

2. **Fehlende Übersetzungen finden:**
   ```bash
   # Suche nach hart-kodierten Strings
   grep -r "placeholder=" src/screens/
   grep -r "<Text>" src/screens/ | grep -v "{t("
   ```

3. **100% Coverage verifizieren:**
   - Jeden Screen manuell durchgehen
   - Alle Buttons, Labels, Placeholders prüfen
   - Toast-Nachrichten und Alerts prüfen

## 📌 Wichtige Notizen

- ✅ Standard-Sprache: Englisch (US)
- ✅ Fallback: Englisch bei fehlenden Übersetzungen
- ✅ Persistenz: AsyncStorage speichert Sprachwahl
- ⚠️ App-Neustart nach Sprachwechsel empfohlen
- 🔄 Navigation-Labels müssen noch aktualisiert werden
- 🔄 Data-Dateien (languagesData, hintsData, etc.) müssen noch übersetzt werden

## 🎯 Nächste Schritte

1. **Sofort:** HomeScreen vollständig mit `t()` aktualisieren
2. **Dann:** Alle anderen Screens systematisch durchgehen
3. **Anschließend:** Data-Dateien in i18n-JSON verschieben
4. **Abschließend:** 100% Coverage testen und verifizieren
