import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import dotenv from 'dotenv';

dotenv.config();
async function loadFile(file) {
  try {
    const data = await readFile(file, "utf8");
    if (!data.trim()) {
      return {};
    } else {
      return file.endsWith(".yaml") ? yaml.load(data) : JSON.parse(data);
    }
  } catch (error) {
    if (error?.code === "ENOENT") ;
    else {
      console.error(`Error reading or parsing ${file}:`, error);
    }
    return {};
  }
}
async function load({ request }) {
  const [configuration, dashboard] = await Promise.all([
    loadFile("./data/configuration.yaml"),
    loadFile("./data/dashboard.yaml")
  ]);
  configuration.hassUrl = process.env.HASS_URL || request.headers.get("X-Proxy-Target");
  dashboard.views = dashboard.views || [];
  dashboard.sidebar = dashboard.sidebar || [];
  const dir = "./build/client";
  const [theme, en, locale] = await Promise.all([
    loadFile(`${dir}/themes/${dashboard.theme || "godis"}.yaml`),
    loadFile(`${dir}/translations/en.json`),
    configuration?.locale && configuration.locale !== "en" ? loadFile(`${dir}/translations/${configuration.locale}.json`) : void 0
  ]);
  return {
    configuration,
    dashboard,
    theme,
    translations: locale ? { ...locale, _default: en } : en
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CSf4M5wb.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.Cl-7clUW.js","_app/immutable/chunks/2.dCG7GHcU.js","_app/immutable/chunks/scheduler.BGjPv-1J.js","_app/immutable/chunks/index.DGGgQIon.js","_app/immutable/chunks/Loader.DbTsSYa5.js","_app/immutable/chunks/index.DqLi_Cxs.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/paths.BK9v0FUF.js"];
const stylesheets = ["_app/immutable/assets/2.BEBHPzQ1.css","_app/immutable/assets/Loader.DeBCdSMJ.css","_app/immutable/assets/TokenModal.CqZwqeWU.css","_app/immutable/assets/Index.CEpaCELK.css","_app/immutable/assets/CodeEditor.BoIIWk_I.css","_app/immutable/assets/Settings.Dk91gX0C.css","_app/immutable/assets/TemplateSelector.2FRfya3c.css","_app/immutable/assets/Marquee.7irI90dt.css","_app/immutable/assets/ButtonConfig.pk2VxA4U.css","_app/immutable/assets/Select.Bt5VWOIU.css","_app/immutable/assets/InputClear.fG235E0J.css","_app/immutable/assets/ConfigButtons.uku1tO0-.css","_app/immutable/assets/SidebarItemConfig.DfwuspEb.css","_app/immutable/assets/Date.DuuaKUw4.css","_app/immutable/assets/Timer.BsJ9Lxc7.css","_app/immutable/assets/DateConfig.ClN2ZpS5.css","_app/immutable/assets/DividerConfig.BuOGxzF3.css","_app/immutable/assets/CameraConfig.BuQIGDle.css","_app/immutable/assets/ImageConfig.CX8aSDL2.css","_app/immutable/assets/BarConfig.pmEbgee-.css","_app/immutable/assets/GraphConfig.YPDeJ3TH.css","_app/immutable/assets/TemplateConfig.DnQ6o7Y5.css","_app/immutable/assets/CodeEditor.Dl9u9MX9.css","_app/immutable/assets/MainItemConfig.C7SvZSoA.css","_app/immutable/assets/ConditionalMediaConfig.BNjfd-0g.css","_app/immutable/assets/PictureElementsConfig.CcPPMLRd.css","_app/immutable/assets/EmptyConfig.Cy-kmlyA.css","_app/immutable/assets/Templater.DP5ZWvlC.css","_app/immutable/assets/LightModal.BGUF2bdt.css","_app/immutable/assets/RangeSlider.MkjvyHY1.css","_app/immutable/assets/Toggle.AbOki5xc.css","_app/immutable/assets/ScriptModal.zV1Dun0H.css","_app/immutable/assets/AutomationModal.CGp51e5D.css","_app/immutable/assets/CalendarModal.GXm6kUEj.css","_app/immutable/assets/CalendarEventModal.jM-dlw14.css","_app/immutable/assets/UpdateModal.a-hWyER-.css","_app/immutable/assets/InputNumberModal.Dy-onWA-.css","_app/immutable/assets/InputDateModal.ClrSFP0J.css","_app/immutable/assets/InputTextModal.JDSLdPiv.css","_app/immutable/assets/TimerModal.CeHhjxds.css","_app/immutable/assets/VacuumModal.f_8uoapC.css","_app/immutable/assets/ImageModal.CmX70tfF.css","_app/immutable/assets/TodoModal.C_c7us0n.css","_app/immutable/assets/CounterModal.Dr2bS5KV.css","_app/immutable/assets/AlarmControlPanelModal.CqJc4weU.css","_app/immutable/assets/LockModal.LjaTjC7e.css","_app/immutable/assets/ClimateModal.B_O7wQQ_.css","_app/immutable/assets/CameraModal.BwAPn6PC.css","_app/immutable/assets/MediaPlayer.D7t3lt1m.css","_app/immutable/assets/DeviceTrackerModal.Muk_WLdG.css","_app/immutable/assets/CoverModal.CS6OlmSQ.css","_app/immutable/assets/Unknown.BY3KI_YY.css","_app/immutable/assets/WebRTC.DNAfJcq6.css","_app/immutable/assets/Info.DkzYOnsE.css","_app/immutable/assets/Proxy.BZynoCZR.css","_app/immutable/assets/Index.19SebdtR.css","_app/immutable/assets/ScenesConfig.CYexowSu.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-DdNlEa6s.js.map
