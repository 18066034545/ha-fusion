import { c as create_ssr_component, a as subscribe, d as set_store_value, o as onDestroy, v as validate_component, f as add_attribute } from './ssr-Bh_61xEy.js';
import { c as configuration, d as dashboard, b as translation, s as selectedLanguage, f as customJs, y as youtubeAddon, g as currentViewId, h as drawerSearch, i as focusSearch, j as editMode, k as showDrawer, l as disableMenuButton, a as modals, n as clickOriginatedFromMenu, o as filterDashboard, m as motion, p as interfaceMode } from './Loader.svelte_svelte_type_style_lang-U2zQ255S.js';
import { b as base } from './paths-BkYGCvft.js';
import 'marked';
import 'js-yaml';
import './index2-CvWiVFGl.js';

const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dashboard, $$unsubscribe_dashboard;
  $$unsubscribe_dashboard = subscribe(dashboard, (value) => $dashboard = value);
  let { initial } = $$props;
  let css2;
  async function loadTheme(name) {
    try {
      const response = await fetch(`${base}/_api/load_theme`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: name })
      });
      const data = await response.json();
      if (response.ok) {
        initial = data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
  if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0) $$bindings.initial(initial);
  {
    {
      css2 = Object.entries(initial?.theme || {}).map(([key, value]) => {
        if (typeof value === "string" && value.includes("/themes/")) {
          value = value.replace("/", `${base}/`);
        }
        return `--theme-${key}: ${value};`;
      }).join(" ");
      if ($dashboard?.theme && false) {
        if (initial?.title !== $dashboard.theme) {
          loadTheme($dashboard.theme);
        }
      }
    }
  }
  $$unsubscribe_dashboard();
  return `${$$result.head += `<!-- HEAD_svelte-560nv2_START --><!-- HTML_TAG_START -->${`<style>:root {${css2}}</style>`}<!-- HTML_TAG_END --><meta name="theme-color"${add_attribute("content", initial?.theme?.["app-color"], 0)}><!-- HEAD_svelte-560nv2_END -->`, ""}`;
});
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
  // Check name: cannot be empty
  ((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (
      // Name cannot be empty
      !name || // Must have body
      typeof icon.body !== "string" || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (
      // Name cannot be empty
      !name || // Parent must be set and point to existing icon
      typeof parent !== "string" || !icons[parent] && !aliases[parent] || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  {
    simpleNames = allow;
  }
  return simpleNames;
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  if (data) {
    return addIconToStorage(storage2, icon.name, data);
  } else {
    storage2.missing.add(icon.name);
    return true;
  }
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
"IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
({
  ...defaultIconCustomisations,
  inline: false
});
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FEATURE_FLAG_NAMES = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
_defineProperty({}, FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, false);
var _ID_TO_INSTRUCTION;
var INSTRUCTION_IDs$1 = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
_ID_TO_INSTRUCTION = {}, _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs$1.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs$1.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const css = {
  code: "body{margin:0;padding:0;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import {\\n  dashboard,\\n  configuration,\\n  editMode,\\n  motion,\\n  showDrawer,\\n  translation,\\n  drawerSearch,\\n  focusSearch,\\n  currentViewId,\\n  selectedLanguage,\\n  customJs,\\n  filterDashboard,\\n  disableMenuButton,\\n  clickOriginatedFromMenu,\\n  connection,\\n  youtubeAddon\\n} from \\"$lib/Stores\\";\\nimport { authentication } from \\"$lib/Socket\\";\\nimport { onDestroy, onMount } from \\"svelte\\";\\nimport { browser } from \\"$app/environment\\";\\nimport { modals } from \\"svelte-modals\\";\\nimport Theme from \\"$lib/Components/Theme.svelte\\";\\nimport { interfaceMode } from \\"$lib/Stores\\";\\nimport TemplateView from \\"$lib/Views/TemplateView.svelte\\";\\nimport NativeView from \\"$lib/Views/NativeView.svelte\\";\\nexport let data;\\nlet altKeyPressed = false;\\n$configuration = data?.configuration;\\n$dashboard = data?.dashboard;\\n$translation = data?.translations;\\n$selectedLanguage = data?.configuration?.locale || \\"en\\";\\n$customJs = data?.configuration?.custom_js;\\n$youtubeAddon = data?.configuration?.addons?.youtube;\\n$currentViewId = $dashboard?.views?.[0]?.id;\\nconst _motion = data?.configuration?.motion;\\n$motion = _motion === void 0 || _motion === true ? $motion : 0;\\n$: view = $drawerSearch ? $filterDashboard : $dashboard?.views?.find((view2) => view2?.id === $currentViewId) || $dashboard?.views?.find((view2) => view2?.isDndShadowItem);\\nlet isConnecting = false;\\nlet retryInterval;\\nif (browser) {\\n  document.documentElement.lang = $selectedLanguage || \\"en\\";\\n  connect();\\n  retryInterval = setInterval(connect, 3e3);\\n}\\nasync function connect() {\\n  if (isConnecting) return;\\n  isConnecting = true;\\n  console.debug(\\"authenticating...\\");\\n  try {\\n    await authentication($configuration);\\n    console.debug(\\"authenticated.\\");\\n    clearInterval(retryInterval);\\n  } catch {\\n  } finally {\\n    isConnecting = false;\\n  }\\n}\\n$: if ($configuration?.token) updateConnection();\\nfunction updateConnection() {\\n  if (isConnecting || !browser) return;\\n  clearInterval(retryInterval);\\n  connect();\\n  retryInterval = setInterval(connect, 3e3);\\n}\\nonDestroy(() => clearInterval(retryInterval));\\nonMount(async () => {\\n  const menuParam = new URLSearchParams(window.location.search).get(\\"menu\\");\\n  $disableMenuButton = menuParam === \\"false\\";\\n  if (\\"serviceWorker\\" in navigator) {\\n    try {\\n      const registrations = await navigator.serviceWorker.getRegistrations();\\n      for (const registration of registrations) {\\n        await registration.unregister();\\n      }\\n    } catch (error) {\\n      console.error(\\"Error during service worker unregistration:\\", error);\\n    }\\n  }\\n});\\nfunction toggleDrawer() {\\n  $showDrawer = !$showDrawer;\\n  $clickOriginatedFromMenu = false;\\n}\\nfunction handleClick() {\\n  if ($editMode) {\\n    $clickOriginatedFromMenu = true;\\n    const button = document.querySelector(\\"#editmode\\");\\n    button?.click();\\n  } else {\\n    toggleDrawer();\\n  }\\n}\\nfunction handleKeydown(event) {\\n  if ($modals.length) return;\\n  if (event.key === \\"Escape\\" && !$editMode && document.activeElement) {\\n    document.activeElement.blur();\\n  }\\n  if (event.key === \\"Alt\\") {\\n    altKeyPressed = true;\\n  }\\n  if (event.key === \\"f\\" && !$disableMenuButton) {\\n    if (!$showDrawer || !$focusSearch) {\\n      $focusSearch = true;\\n      if (!$showDrawer) $showDrawer = true;\\n      event.preventDefault();\\n    }\\n  } else if (event.key === \\"Escape\\" && $showDrawer && !$editMode) {\\n    $focusSearch = false;\\n    if (!$drawerSearch) handleClick();\\n    $drawerSearch = void 0;\\n  }\\n}\\nfunction handleKeyup(event) {\\n  if (event.key === \\"Alt\\") {\\n    altKeyPressed = false;\\n  }\\n}\\nlet mounted = false;\\nonMount(() => {\\n  mounted = true;\\n});\\n<\/script>\\r\\n\\r\\n<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />\\r\\n\\r\\n<!-- theme -->\\r\\n<Theme initial={data?.theme} />\\r\\n\\r\\n{#if mounted}\\r\\n\\t{#if $interfaceMode === 'template'}\\r\\n\\t\\t<TemplateView />\\r\\n\\t{:else}\\r\\n\\t\\t<NativeView />\\r\\n\\t{/if}\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t:global(body) {\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0IS,IAAM,CACb,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,SAAS,CAAC,CAAC,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAC1I"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $drawerSearch, $$unsubscribe_drawerSearch;
  let $$unsubscribe_focusSearch;
  let $$unsubscribe_editMode;
  let $$unsubscribe_showDrawer;
  let $$unsubscribe_disableMenuButton;
  let $$unsubscribe_modals;
  let $$unsubscribe_clickOriginatedFromMenu;
  let $configuration, $$unsubscribe_configuration;
  let $selectedLanguage, $$unsubscribe_selectedLanguage;
  let $dashboard, $$unsubscribe_dashboard;
  let $currentViewId, $$unsubscribe_currentViewId;
  let $filterDashboard, $$unsubscribe_filterDashboard;
  let $motion, $$unsubscribe_motion;
  let $youtubeAddon, $$unsubscribe_youtubeAddon;
  let $customJs, $$unsubscribe_customJs;
  let $translation, $$unsubscribe_translation;
  let $$unsubscribe_interfaceMode;
  $$unsubscribe_drawerSearch = subscribe(drawerSearch, (value) => $drawerSearch = value);
  $$unsubscribe_focusSearch = subscribe(focusSearch, (value) => value);
  $$unsubscribe_editMode = subscribe(editMode, (value) => value);
  $$unsubscribe_showDrawer = subscribe(showDrawer, (value) => value);
  $$unsubscribe_disableMenuButton = subscribe(disableMenuButton, (value) => value);
  $$unsubscribe_modals = subscribe(modals, (value) => value);
  $$unsubscribe_clickOriginatedFromMenu = subscribe(clickOriginatedFromMenu, (value) => value);
  $$unsubscribe_configuration = subscribe(configuration, (value) => $configuration = value);
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => $selectedLanguage = value);
  $$unsubscribe_dashboard = subscribe(dashboard, (value) => $dashboard = value);
  $$unsubscribe_currentViewId = subscribe(currentViewId, (value) => $currentViewId = value);
  $$unsubscribe_filterDashboard = subscribe(filterDashboard, (value) => $filterDashboard = value);
  $$unsubscribe_motion = subscribe(motion, (value) => $motion = value);
  $$unsubscribe_youtubeAddon = subscribe(youtubeAddon, (value) => $youtubeAddon = value);
  $$unsubscribe_customJs = subscribe(customJs, (value) => $customJs = value);
  $$unsubscribe_translation = subscribe(translation, (value) => $translation = value);
  $$unsubscribe_interfaceMode = subscribe(interfaceMode, (value) => value);
  let { data } = $$props;
  set_store_value(configuration, $configuration = data?.configuration, $configuration);
  set_store_value(dashboard, $dashboard = data?.dashboard, $dashboard);
  set_store_value(translation, $translation = data?.translations, $translation);
  set_store_value(selectedLanguage, $selectedLanguage = data?.configuration?.locale || "en", $selectedLanguage);
  set_store_value(customJs, $customJs = data?.configuration?.custom_js, $customJs);
  set_store_value(youtubeAddon, $youtubeAddon = data?.configuration?.addons?.youtube, $youtubeAddon);
  set_store_value(currentViewId, $currentViewId = $dashboard?.views?.[0]?.id, $currentViewId);
  const _motion = data?.configuration?.motion;
  set_store_value(motion, $motion = _motion === void 0 || _motion === true ? $motion : 0, $motion);
  let retryInterval;
  onDestroy(() => clearInterval(retryInterval));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $drawerSearch ? $filterDashboard : $dashboard?.views?.find((view2) => view2?.id === $currentViewId) || $dashboard?.views?.find((view2) => view2?.isDndShadowItem);
  {
    if ($configuration?.token) ;
  }
  $$unsubscribe_drawerSearch();
  $$unsubscribe_focusSearch();
  $$unsubscribe_editMode();
  $$unsubscribe_showDrawer();
  $$unsubscribe_disableMenuButton();
  $$unsubscribe_modals();
  $$unsubscribe_clickOriginatedFromMenu();
  $$unsubscribe_configuration();
  $$unsubscribe_selectedLanguage();
  $$unsubscribe_dashboard();
  $$unsubscribe_currentViewId();
  $$unsubscribe_filterDashboard();
  $$unsubscribe_motion();
  $$unsubscribe_youtubeAddon();
  $$unsubscribe_customJs();
  $$unsubscribe_translation();
  $$unsubscribe_interfaceMode();
  return `  ${validate_component(Theme, "Theme").$$render($$result, { initial: data?.theme }, {}, {})} ${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CSf4M5wb.js.map
