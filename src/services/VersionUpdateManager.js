/**
 * Version Update Manager
 * 
 * Verwaltet App-Versionsprüfungen gegen einen zentralen Server.
 * Versionscode-Format: TagMonatJahrRevision (z.B. 080120263)
 */

const VERSION_CHECK_URL = 'https://www.lenfi.uk/scr_appversionupdatemanager.json';
const APP_KEY = 'lib_of_dev';
const CURRENT_VERSION_CODE = '140120261'; // TagMonatJahrRevision (als String wegen führender 0)

/**
 * Update-Status-Typen
 */
export const UpdateStatus = {
  UP_TO_DATE: 'up_to_date',
  OPTIONAL_UPDATE: 'optional_update',
  FORCE_UPDATE: 'force_update',
  ERROR: 'error',
};

/**
 * Parst einen Versionscode in Datum und Revision
 * Format: TagMonatJahrRevision (z.B. 080120263)
 * 
 * @param {string|number} code - Versionscode
 * @returns {Object} Geparste Version
 * @returns {Date} return.date - Datum der Version
 * @returns {number} return.revision - Revisionsnummer
 * @returns {number} return.numericCode - Numerischer Code für Rückgabe
 */
const parseVersionCode = (code) => {
  const codeStr = code.toString().padStart(9, '0');
  const day = parseInt(codeStr.substring(0, 2), 10);
  const month = parseInt(codeStr.substring(2, 4), 10) - 1; // JS Monate sind 0-basiert (0=Jan, 11=Dez)
  const year = parseInt(codeStr.substring(4, 8), 10);
  const revision = parseInt(codeStr.substring(8), 10);
  
  return {
    date: new Date(year, month, day),
    revision,
    numericCode: parseInt(code, 10),
  };
};

/**
 * Vergleicht zwei Versionscodes
 * Vergleicht zuerst das Datum, dann die Revision bei gleichem Datum
 * 
 * @param {string|number} code1 - Erster Versionscode
 * @param {string|number} code2 - Zweiter Versionscode
 * @returns {number} -1 wenn code1 < code2, 0 wenn gleich, 1 wenn code1 > code2
 */
const compareVersionCodes = (code1, code2) => {
  const v1 = parseVersionCode(code1);
  const v2 = parseVersionCode(code2);
  
  // Vergleiche Datum
  if (v1.date < v2.date) return -1;
  if (v1.date > v2.date) return 1;
  
  // Bei gleichem Datum: Vergleiche Revision
  if (v1.revision < v2.revision) return -1;
  if (v1.revision > v2.revision) return 1;
  
  return 0; // Beide Versionen sind identisch
};

/**
 * Prüft die App-Version gegen den Server
 * 
 * @returns {Promise<Object>} Update-Informationen
 * @returns {string} return.status - UpdateStatus
 * @returns {number} return.currentCode - Aktueller Versionscode der App
 * @returns {number} return.latestCode - Neuester Versionscode
 * @returns {number} return.minSupportedCode - Minimal unterstützter Versionscode
 * @returns {boolean} return.forceUpdate - Ob Update erzwungen wird
 * @returns {string} return.info - Info-Text zum Update
 * @returns {string} return.updateUrlAndroid - Android Update URL
 * @returns {string} return.updateUrliOS - iOS Update URL
 */
export const checkAppVersion = async () => {
  try {
    console.log('🔍 Prüfe App-Version...');
    console.log('📡 URL:', VERSION_CHECK_URL);
    
    const response = await fetch(VERSION_CHECK_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Hole Text-Response für bessere Fehlerbehandlung
    const responseText = await response.text();
    console.log('📄 Server-Response erhalten (erste 200 Zeichen):', responseText.substring(0, 200));
    
    // Versuche JSON zu parsen
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (jsonError) {
      console.error('❌ JSON Parse Fehler:', jsonError.message);
      console.error('⚠️ WICHTIG: Die JSON-Datei auf dem Server ist fehlerhaft!');
      console.error('⚠️ Versionscodes mit führender 0 müssen als Strings gespeichert werden:');
      console.error('⚠️ Richtig: "latestCode": "080120263"');
      console.error('⚠️ Falsch:  "latestCode": 080120263');
      throw new Error(`JSON Parse Error: ${jsonError.message}. Prüfe die JSON-Datei auf dem Server!`);
    }
    const appData = data[APP_KEY];
    
    if (!appData) {
      console.error(`❌ App-Daten für "${APP_KEY}" nicht gefunden in JSON`);
      console.error('📋 Verfügbare Keys:', Object.keys(data).join(', '));
      throw new Error(`App-Daten für "${APP_KEY}" nicht gefunden`);
    }
    
    console.log('✅ App-Daten gefunden:', appData);
    
    const {
      latestCode,
      minSupportedCode,
      forceUpdate,
      info,
      updateUrlAndroid,
      updateUrliOS,
    } = appData;
    
    // Parse Versionscodes für korrekte Datumsvergleiche
    const currentParsed = parseVersionCode(CURRENT_VERSION_CODE);
    const latestParsed = parseVersionCode(latestCode);
    const minSupportedParsed = parseVersionCode(minSupportedCode);
    
    // Numerische Codes für Rückgabe (Kompatibilität)
    const currentCodeNum = currentParsed.numericCode;
    const latestCodeNum = latestParsed.numericCode;
    const minSupportedCodeNum = minSupportedParsed.numericCode;
    
    console.log('🔢 Version-Vergleich:');
    console.log('  - Aktuell:', currentCodeNum, `(${formatVersionCode(CURRENT_VERSION_CODE)})`);
    console.log('  - Neueste:', latestCodeNum, `(${formatVersionCode(latestCode.toString())})`);
    console.log('  - Min. unterstützt:', minSupportedCodeNum, `(${formatVersionCode(minSupportedCode.toString())})`);
    
    // Versionscode-Vergleich basierend auf Datum + Revision
    let status = UpdateStatus.UP_TO_DATE;
    
    const comparedToMin = compareVersionCodes(CURRENT_VERSION_CODE, minSupportedCode);
    const comparedToLatest = compareVersionCodes(CURRENT_VERSION_CODE, latestCode);
    
    if (comparedToMin < 0) {
      // Version zu alt - Force Update erforderlich
      console.log('⚠️ FORCE UPDATE: Version zu alt');
      status = UpdateStatus.FORCE_UPDATE;
    } else if (comparedToLatest < 0) {
      // Neuere Version verfügbar - optionales Update
      if (forceUpdate) {
        console.log('⚠️ FORCE UPDATE: Erzwungenes Update');
        status = UpdateStatus.FORCE_UPDATE;
      } else {
        console.log('ℹ️ OPTIONAL UPDATE: Neuere Version verfügbar');
        status = UpdateStatus.OPTIONAL_UPDATE;
      }
    } else {
      console.log('✅ UP TO DATE: App ist aktuell');
    }
    
    return {
      status,
      currentCode: currentCodeNum,
      latestCode: latestCodeNum,
      minSupportedCode: minSupportedCodeNum,
      forceUpdate,
      info: info || '',
      updateUrlAndroid: updateUrlAndroid || '',
      updateUrliOS: updateUrliOS || '',
    };
  } catch (error) {
    console.error('Fehler bei Versionsprüfung:', error);
    const currentCodeNum = parseInt(CURRENT_VERSION_CODE, 10);
    return {
      status: UpdateStatus.ERROR,
      currentCode: currentCodeNum,
      latestCode: currentCodeNum,
      minSupportedCode: currentCodeNum,
      forceUpdate: false,
      info: `Fehler: ${error.message}`,
      updateUrlAndroid: '',
      updateUrliOS: '',
      error: error.message,
    };
  }
};

/**
 * Formatiert einen Versionscode für Anzeige
 * Format: TagMonatJahrRevision -> TT.MM.YYYY (Rev. R)
 * 
 * @param {number} code - Versionscode
 * @returns {string} Formatierter Versionsstring
 */
export const formatVersionCode = (code) => {
  const codeStr = code.toString().padStart(9, '0');
  const tag = codeStr.substring(0, 2);
  const monat = codeStr.substring(2, 4);
  const jahr = codeStr.substring(4, 8);
  const revision = codeStr.substring(8);
  
  return `${tag}.${monat}.${jahr} (Rev. ${parseInt(revision)})`;
};

/**
 * Gibt die passende Update-URL für die aktuelle Plattform zurück
 * Konvertiert Play Store URLs zu market:// URIs für direkte App-Öffnung
 * 
 * @param {string} androidUrl - Android Update URL
 * @param {string} iosUrl - iOS Update URL
 * @returns {string} Plattform-spezifische URL
 */
export const getPlatformUpdateUrl = (androidUrl, iosUrl) => {
  const { Platform } = require('react-native');
  
  if (Platform.OS === 'ios') {
    return iosUrl;
  }
  
  // Android: Konvertiere Play Store URL zu market:// URI
  if (androidUrl) {
    // Extrahiere Package Name aus Play Store URL
    const match = androidUrl.match(/id=([^&]+)/);
    if (match && match[1]) {
      const packageName = match[1];
      // Verwende market:// für direkte Play Store App-Öffnung
      return `market://details?id=${packageName}`;
    }
  }
  
  return androidUrl;
};

export default {
  checkAppVersion,
  formatVersionCode,
  getPlatformUpdateUrl,
  UpdateStatus,
  CURRENT_VERSION_CODE,
};
