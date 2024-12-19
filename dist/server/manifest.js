const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "hacsfiles/ha-fusion/_app",
	assets: new Set(["documentation/Developer.md","documentation/Documentation.md","documentation/Map.md","favicon.ico","favicon.png","loader.svg","manifest.json","preview.png","robots.txt","templates/README.md","themes/contrast.yaml","themes/contrast_thumbnail.webp","themes/godis.yaml","themes/godis_background.webp","themes/godis_thumbnail.webp","themes/muted.yaml","themes/muted_background.webp","themes/muted_thumbnail.webp","themes/playground/category.yaml","translations/af.json","translations/ar.json","translations/bg.json","translations/bn.json","translations/bs.json","translations/ca.json","translations/cs.json","translations/cy.json","translations/da.json","translations/de.json","translations/el.json","translations/en-GB.json","translations/en.json","translations/eo.json","translations/es-419.json","translations/es.json","translations/et.json","translations/eu.json","translations/fa.json","translations/fi.json","translations/fr.json","translations/fy.json","translations/ga.json","translations/gl.json","translations/gsw.json","translations/he.json","translations/hi.json","translations/hr.json","translations/hu.json","translations/hy.json","translations/id.json","translations/is.json","translations/it.json","translations/ja.json","translations/ka.json","translations/ko.json","translations/lb.json","translations/lt.json","translations/lv.json","translations/mk.json","translations/ml.json","translations/nb.json","translations/nl.json","translations/nn.json","translations/no.json","translations/pl.json","translations/pt-BR.json","translations/pt.json","translations/ro.json","translations/ru.json","translations/sk.json","translations/sl.json","translations/sr-Latn.json","translations/sr.json","translations/sv.json","translations/ta.json","translations/te.json","translations/th.json","translations/tr.json","translations/uk.json","translations/ur.json","translations/vi.json","translations/zh-Hans.json","translations/zh-Hant.json","translations/zh.json","weather/meteocons/clear-night-day.svg","weather/meteocons/clear-night-night.svg","weather/meteocons/cloudy-day.svg","weather/meteocons/cloudy-night.svg","weather/meteocons/exceptional-day.svg","weather/meteocons/exceptional-night.svg","weather/meteocons/fog-day.svg","weather/meteocons/fog-night.svg","weather/meteocons/hail-day.svg","weather/meteocons/hail-night.svg","weather/meteocons/lightning-day.svg","weather/meteocons/lightning-night.svg","weather/meteocons/lightning-rainy-day.svg","weather/meteocons/lightning-rainy-night.svg","weather/meteocons/partlycloudy-day.svg","weather/meteocons/partlycloudy-night.svg","weather/meteocons/pouring-day.svg","weather/meteocons/pouring-night.svg","weather/meteocons/rainy-day.svg","weather/meteocons/rainy-night.svg","weather/meteocons/README.md","weather/meteocons/snowy-day.svg","weather/meteocons/snowy-night.svg","weather/meteocons/snowy-rainy-day.svg","weather/meteocons/snowy-rainy-night.svg","weather/meteocons/sunny-day.svg","weather/meteocons/sunny-night.svg","weather/meteocons/windy-day.svg","weather/meteocons/windy-night.svg","weather/meteocons/windy-variant-day.svg","weather/meteocons/windy-variant-night.svg"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain",".yaml":"text/yaml",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CfYX3kRf.js","app":"_app/immutable/entry/app.BuEA1sb7.js","imports":["_app/immutable/entry/start.CfYX3kRf.js","_app/immutable/chunks/entry.Cf6q3Gri.js","_app/immutable/chunks/scheduler.BGjPv-1J.js","_app/immutable/chunks/index.DqLi_Cxs.js","_app/immutable/chunks/paths.BK9v0FUF.js","_app/immutable/entry/app.BuEA1sb7.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.BGjPv-1J.js","_app/immutable/chunks/index.DGGgQIon.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CiqNVQju.js')),
			__memo(() => import('./chunks/1-gddHk_xc.js')),
			__memo(() => import('./chunks/2-DdNlEa6s.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/_api/custom_js",
				pattern: /^\/_api\/custom_js\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BD_5mXzP.js'))
			},
			{
				id: "/_api/get_all_themes",
				pattern: /^\/_api\/get_all_themes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-8havWqUx.js'))
			},
			{
				id: "/_api/get_calendar",
				pattern: /^\/_api\/get_calendar\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-uXxl1z96.js'))
			},
			{
				id: "/_api/get_docs",
				pattern: /^\/_api\/get_docs\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-spmjX-Ov.js'))
			},
			{
				id: "/_api/get_translation",
				pattern: /^\/_api\/get_translation\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B9YKhChD.js'))
			},
			{
				id: "/_api/list_languages",
				pattern: /^\/_api\/list_languages\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BLdr2KDV.js'))
			},
			{
				id: "/_api/load_theme",
				pattern: /^\/_api\/load_theme\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BBSu58Y-.js'))
			},
			{
				id: "/_api/log_backend",
				pattern: /^\/_api\/log_backend\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C1EORYGi.js'))
			},
			{
				id: "/_api/save_config",
				pattern: /^\/_api\/save_config\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B4XE3LeQ.js'))
			},
			{
				id: "/_api/save_dashboard",
				pattern: /^\/_api\/save_dashboard\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CtHCUq2l.js'))
			},
			{
				id: "/_api/version",
				pattern: /^\/_api\/version\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CObe2UPA.js'))
			},
			{
				id: "/_api/youtube",
				pattern: /^\/_api\/youtube\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CM2ewJ0W.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "/hacsfiles/ha-fusion";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
