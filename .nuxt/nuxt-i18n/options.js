

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","translate":"en","flag":"us","file":"en.json"},{"code":"es","translate":"es","flag":"es","file":"es.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/diego/dev/others/axiemanagertracker.github.io/locale",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  flag: "en",
  translate: "en",
  normalizedLocales: [{"code":"en","translate":"en","flag":"us","file":"en.json"},{"code":"es","translate":"es","flag":"es","file":"es.json"}],
  localeCodes: ["en","es"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.json': () => import('../../locale/en.json' /* webpackChunkName: "lang-en.json" */),
  'es.json': () => import('../../locale/es.json' /* webpackChunkName: "lang-es.json" */),
}
