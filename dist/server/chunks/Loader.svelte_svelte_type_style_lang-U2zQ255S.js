import { w as writable, d as derived, r as readable } from './index2-CvWiVFGl.js';

function getName(sel, entity, sectionName = void 0) {
  const name = sel?.name || entity?.attributes?.friendly_name || entity?.entity_id?.split(".")?.[1];
  return !sel?.name && sectionName && name?.startsWith(sectionName + " ") ? name?.substring(sectionName?.length + 1) : name;
}
const interfaceMode = writable(
  typeof localStorage !== "undefined" && localStorage.getItem("ha-fusion-interface") || "template"
);
const states = writable();
const configuration = writable();
const dashboard = writable();
const customJs = writable();
readable([
  "active",
  "auto",
  "cool",
  "dry",
  "fan_only",
  "heat",
  "heat_cool",
  "heating",
  "home",
  "on",
  "open",
  "playing",
  "unlocking",
  "unlocked",
  // vacuum
  "cleaning",
  "returning",
  // water_heater
  "eco",
  "electric",
  "performance",
  "high_demand",
  "heat_pump",
  "gas"
]);
readable({
  cooling: "cool",
  drying: "dry",
  fan: "fan_only",
  preheating: "heat",
  heating: "heat",
  idle: "off",
  off: "off"
});
const drawerSearch = writable();
const focusSearch = writable(false);
const filterDashboard = writable({});
const disableMenuButton = writable(false);
const clickOriginatedFromMenu = writable(false);
const editMode = writable(false);
const showDrawer = writable(false);
const motion = writable(190);
readable(61.35);
const translation = writable({});
const selectedLanguage = writable();
derived(
  translation,
  (obj) => (key) => obj[key] || obj._default?.[key] || key
);
const currentViewId = writable();
const youtubeAddon = writable();
readable(/* @__PURE__ */ new Date(), function start(set) {
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 1e3);
  set(/* @__PURE__ */ new Date());
  return function stop() {
    clearInterval(interval);
  };
});
readable({
  color: "rgba(255, 255, 255, 0.15)",
  opacity: 0.5,
  spreadingDuration: "300ms",
  spreadingTimingFunction: "ease-in-out",
  clearingDuration: "350ms",
  clearingTimingFunction: "ease-in-out"
});
derived(states, ($states) => Object.keys($states));
derived(
  states,
  ($states) => (filter) => Object.keys($states)?.filter((key) => filter.length > 0 ? key.startsWith(`${filter}.`) : true)?.sort()?.map((key) => {
    const name = getName(void 0, $states?.[key]);
    return {
      id: key,
      label: name ?? key,
      hint: name === key ? void 0 : key
    };
  })
);
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);

export { modals as a, translation as b, configuration as c, dashboard as d, exitBeforeEnter as e, customJs as f, currentViewId as g, drawerSearch as h, focusSearch as i, editMode as j, showDrawer as k, disableMenuButton as l, motion as m, clickOriginatedFromMenu as n, filterDashboard as o, interfaceMode as p, selectedLanguage as s, transitioning as t, youtubeAddon as y };
//# sourceMappingURL=Loader.svelte_svelte_type_style_lang-U2zQ255S.js.map
