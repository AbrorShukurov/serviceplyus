# Russian Language Integration - Completion Guide

## ✅ COMPLETED
1. **Translation Files**: Created `/app/frontend/src/data/translations.js` with complete UZ/RU translations
2. **Language Context**: Created `/app/frontend/src/contexts/LanguageContext.jsx` with localStorage persistence
3. **App.js**: Wrapped with LanguageProvider
4. **Navbar**: Fully integrated with language switcher (UZ | RU) - WORKING ✓
5. **Footer**: Fully translated and integrated - WORKING ✓
6. **react-helmet-async**: Installed for SEO meta tags

## 🔄 REMAINING WORK - Pages Content Updates

### Pattern to Follow:
Each page needs:
```javascript
import { useLanguage } from '../contexts/LanguageContext';

const PageName = () => {
  const { t } = useLanguage();
  
  // Replace hardcoded text with t.section.key
  // Example: "Bosh sahifa" → {t.home.heroTitle}
```

### Pages to Update:

#### 1. Home.jsx (`/app/frontend/src/pages/Home.jsx`)
**Import add**: `import { useLanguage } from '../contexts/LanguageContext';`
**Hook add**: `const { t } = useLanguage();`

**Replacements needed**:
- Line ~30: `heroContent.title` → `t.home.heroTitle`
- Line ~32: `heroContent.subtitle` → `t.home.heroSubtitle`
- Line ~35: `heroContent.description` → `t.home.heroDescription`
- Line ~42: "Hozir qo'ng'iroq qilish" → `{t.common.callNow}`
- Line ~52: "Telegram orqali" → `{t.common.telegram} {t.common.orqali}`
- All advantage titles/descriptions
- All button texts
- All section titles

#### 2. About.jsx (`/app/frontend/src/pages/About.jsx`)
**Import add**: `import { useLanguage } from '../contexts/LanguageContext';`
**Hook add**: `const { t } = useLanguage();`

**Replacements**: All titles, descriptions, process steps using `t.about.*`

#### 3. Services.jsx (`/app/frontend/src/pages/Services.jsx`)
**Import add**: `import { useLanguage } from '../contexts/LanguageContext';`
**Hook add**: `const { t } = useLanguage();`

**Replacements**: Service titles, descriptions, pricing info using `t.services.*`

#### 4. Contact.jsx (`/app/frontend/src/pages/Contact.jsx`)
**Import add**: `import { useLanguage } from '../contexts/LanguageContext';`
**Hook add**: `const { t } = useLanguage();`

**Replacements**: Form labels, placeholders, button texts using `t.contact.*`

#### 5. BoilerBrandPage.jsx (`/app/frontend/src/pages/BoilerBrandPage.jsx`)
**Most complex** - needs both translations and Russian boiler descriptions

```javascript
import { useLanguage } from '../contexts/LanguageContext';

const BoilerBrandPage = () => {
  const { slug } = useParams();
  const { t, language, getBoilerTranslation } = useLanguage();
  const brand = boilerBrands.find(b => b.slug === slug);
  
  // Get Russian translation if available
  const boilerTrans = getBoilerTranslation(slug);
  const description = boilerTrans?.description || brand.description;
  const problems = boilerTrans?.problems || brand.commonProblems;
  
  // Use in JSX:
  <h1>{brand.name} {t.boiler.titleSuffix}</h1>
  <p>{description}</p>
  // etc.
}
```

## 📋 Quick Reference - Translation Keys

### Navigation
- `t.nav.home` - Home
- `t.nav.about` - About
- `t.nav.services` - Services  
- `t.nav.contact` - Contact
- `t.nav.boilers` - Boilers

### Common Buttons
- `t.common.callNow` - Call Now
- `t.common.onlineRequest` - Online Request
- `t.common.orderNow` - Order Now
- `t.common.callMaster` - Call Master

### Home Page
- `t.home.heroTitle`
- `t.home.advantagesTitle`
- `t.home.advantage1Title`
- etc.

### Services
- `t.services.title`
- `t.services.service1Title`
- `t.services.pricingTitle`
- etc.

### Contact
- `t.contact.nameLabel`
- `t.contact.phonePlaceholder`
- `t.contact.submitButton`
- etc.

### Boiler Pages
- `t.boiler.titleSuffix`
- `t.boiler.aboutTitle`
- `t.boiler.problemsTitle`
- etc.

## 🎯 Testing Checklist

After updates:
- [ ] Switch language on each page
- [ ] Verify all text changes
- [ ] Check mobile menu language switcher
- [ ] Test all 14 boiler brand pages
- [ ] Verify form placeholders change
- [ ] Check footer translations
- [ ] Verify buttons and CTAs
- [ ] Test language persistence (refresh page)

## 📝 Example Code Snippet

Before:
```jsx
<h1 className="text-4xl">Katyol remont va texnik xizmat</h1>
<button>Hozir qo'ng'iroq qilish</button>
```

After:
```jsx
const { t } = useLanguage();

<h1 className="text-4xl">{t.home.heroTitle}</h1>
<button>{t.common.callNow}</button>
```

## 🚀 SEO Meta Tags (Future Enhancement)

Add to each page:
```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>{language === 'uz' ? 'UZ Title' : 'RU Title'}</title>
  <meta name="description" content={language === 'uz' ? 'UZ Desc' : 'RU Desc'} />
  <html lang={language} />
</Helmet>
```

## ✅ Current Status

**WORKING NOW**:
- ✅ Language Context with localStorage
- ✅ Navbar with language switcher (UZ | RU)
- ✅ Footer with translations
- ✅ Language state persists across navigation
- ✅ Visual Globe icon with current language

**NEEDS COMPLETION**:
- 🔄 Home page content
- 🔄 About page content
- 🔄 Services page content
- 🔄 Contact page content
- 🔄 All 14 boiler brand pages

**ESTIMATED TIME**: 2-3 hours to complete all page updates following the pattern above.
