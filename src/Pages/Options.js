import { useTranslation } from 'react-i18next';
import * as st from './PageStyles/Options.style'


function Options() {
  const { t, i18n } = useTranslation();

  return (
    <st.OptionsPageWrapper>
      <st.LanguageOptions>
        <span>{t('language')}:</span>
        <st.LangChoice >
          <st.Lang currentLang={i18n.language === 'en'} onClick={()=> i18n.changeLanguage('en')}><span >{t('en')}</span></st.Lang>
          <st.Lang currentLang={i18n.language === 'sv'} onClick={()=> i18n.changeLanguage('sv')}><span >{t('sv')}</span></st.Lang>
        
        </st.LangChoice>
      </st.LanguageOptions>
    </st.OptionsPageWrapper>
  );
}

export default Options;