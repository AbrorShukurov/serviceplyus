import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { translations, boilerTranslationsRu } from '../data/translations'

const LanguageContext = createContext()

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}

const getLangFromPath = pathname => {
	if (pathname.startsWith('/ru')) return 'ru'
	if (pathname.startsWith('/uz')) return 'uz'
	return null
}

const addLangToPath = (pathname, lang) => {
	if (!pathname || pathname === '/') return `/${lang}`
	if (pathname.startsWith('/uz') || pathname.startsWith('/ru')) return pathname
	return `/${lang}${pathname}`
}

export const LanguageProvider = ({ children }) => {
	const location = useLocation()
	const navigate = useNavigate()

	const [language, setLanguageState] = useState(() => {
		const savedLang = localStorage.getItem('serviceplyus_language')
		return savedLang || 'uz'
	})

	useEffect(() => {
		const pathLang = getLangFromPath(location.pathname)

		if (pathLang) {
			if (pathLang !== language) {
				setLanguageState(pathLang)
			}
			return
		}

		const savedLang = localStorage.getItem('serviceplyus_language') || 'uz'
		const localizedPath = addLangToPath(location.pathname, savedLang)

		if (localizedPath !== location.pathname) {
			navigate(localizedPath, { replace: true })
		}
	}, [location.pathname, navigate, language])

	useEffect(() => {
		localStorage.setItem('serviceplyus_language', language)
		document.documentElement.lang = language
	}, [language])

	const setLanguage = newLang => {
		if (!['uz', 'ru'].includes(newLang)) return

		const currentPath = location.pathname

		let newPath = currentPath

		if (currentPath.startsWith('/uz')) {
			newPath = currentPath.replace(/^\/uz/, `/${newLang}`)
		} else if (currentPath.startsWith('/ru')) {
			newPath = currentPath.replace(/^\/ru/, `/${newLang}`)
		} else {
			newPath = addLangToPath(currentPath, newLang)
		}

		setLanguageState(newLang)
		navigate(newPath)
	}

	const toggleLanguage = () => {
		setLanguage(language === 'uz' ? 'ru' : 'uz')
	}

	const t = translations[language]

	const getBoilerTranslation = slug => {
		if (language === 'ru' && boilerTranslationsRu[slug]) {
			return boilerTranslationsRu[slug]
		}
		return null
	}

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				toggleLanguage,
				t,
				getBoilerTranslation,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}
