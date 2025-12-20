import { useTranslation } from 'react-i18next';

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng);
  };

  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage: i18n.language,
  };
};
