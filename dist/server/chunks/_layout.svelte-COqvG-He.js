import { c as create_ssr_component, a as subscribe, v as validate_component, e as each, i as is_promise, n as noop, m as missing_component } from './ssr-Bh_61xEy.js';
import { m as motion, a as modals, t as transitioning, e as exitBeforeEnter } from './Loader.svelte_svelte_type_style_lang-U2zQ255S.js';
import './index2-CvWiVFGl.js';

function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``} ${slots.default ? slots.default({}) : ` ${each($modals, (modal, i) => {
    return ` ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` ${slots.loading ? slots.loading({}) : ``} `;
      }
      return function(component) {
        return ` ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {},
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )} `;
      }(__value);
    }(getComponent(modal.component))}` : ` ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })} `}`;
});
const css$1 = {
  code: "div.svelte-1254tw9{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:3}svg.svelte-1254tw9{-webkit-animation:svelte-1254tw9-rotate 2s linear infinite;animation:svelte-1254tw9-rotate 2s linear infinite;z-index:2;width:8em;height:8em;fill:none;stroke-width:3}circle.svelte-1254tw9{stroke:white;stroke-linecap:round;-webkit-animation:svelte-1254tw9-dash 1.5s ease-in-out infinite;animation:svelte-1254tw9-dash 1.5s ease-in-out infinite}@keyframes svelte-1254tw9-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1254tw9-dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}",
  map: '{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { motion } from \\"$lib/Stores\\";\\nimport { onMount } from \\"svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nlet mounted = false;\\nonMount(() => {\\n  mounted = true;\\n});\\n<\/script>\\r\\n\\r\\n{#if mounted}\\r\\n\\t<div in:fade={{ duration: $motion, delay: $motion }}>\\r\\n\\t\\t<svg viewBox=\\"0 0 50 50\\">\\r\\n\\t\\t\\t<circle cx=\\"25\\" cy=\\"25\\" r=\\"20\\" />\\r\\n\\t\\t</svg>\\r\\n\\t</div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\tdiv {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 50%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translate(-50%, -50%);\\r\\n\\t\\tz-index: 3;\\r\\n\\t}\\r\\n\\r\\n\\tsvg {\\r\\n\\t\\t-webkit-animation: rotate 2s linear infinite;\\r\\n\\t\\tanimation: rotate 2s linear infinite;\\r\\n\\t\\tz-index: 2;\\r\\n\\t\\twidth: 8em;\\r\\n\\t\\theight: 8em;\\r\\n\\t\\tfill: none;\\r\\n\\t\\tstroke-width: 3;\\r\\n\\t}\\r\\n\\r\\n\\tcircle {\\r\\n\\t\\tstroke: white;\\r\\n\\t\\tstroke-linecap: round;\\r\\n\\t\\t-webkit-animation: dash 1.5s ease-in-out infinite;\\r\\n\\t\\tanimation: dash 1.5s ease-in-out infinite;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes rotate {\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: rotate(360deg);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes dash {\\r\\n\\t\\t0% {\\r\\n\\t\\t\\tstroke-dasharray: 1, 150;\\r\\n\\t\\t\\tstroke-dashoffset: 0;\\r\\n\\t\\t}\\r\\n\\t\\t50% {\\r\\n\\t\\t\\tstroke-dasharray: 90, 150;\\r\\n\\t\\t\\tstroke-dashoffset: -35;\\r\\n\\t\\t}\\r\\n\\t\\t100% {\\r\\n\\t\\t\\tstroke-dasharray: 90, 150;\\r\\n\\t\\t\\tstroke-dashoffset: -124;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkBC,kBAAI,CACH,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,OAAO,CAAE,CACV,CAEA,kBAAI,CACH,iBAAiB,CAAE,qBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAAQ,CAC5C,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAAQ,CACpC,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,IAAI,CACV,YAAY,CAAE,CACf,CAEA,qBAAO,CACN,MAAM,CAAE,KAAK,CACb,cAAc,CAAE,KAAK,CACrB,iBAAiB,CAAE,mBAAI,CAAC,IAAI,CAAC,WAAW,CAAC,QAAQ,CACjD,SAAS,CAAE,mBAAI,CAAC,IAAI,CAAC,WAAW,CAAC,QAClC,CAEA,WAAW,qBAAO,CACjB,IAAK,CACJ,SAAS,CAAE,OAAO,MAAM,CACzB,CACD,CAEA,WAAW,mBAAK,CACf,EAAG,CACF,gBAAgB,CAAE,CAAC,CAAC,CAAC,GAAG,CACxB,iBAAiB,CAAE,CACpB,CACA,GAAI,CACH,gBAAgB,CAAE,EAAE,CAAC,CAAC,GAAG,CACzB,iBAAiB,CAAE,GACpB,CACA,IAAK,CACJ,gBAAgB,CAAE,EAAE,CAAC,CAAC,GAAG,CACzB,iBAAiB,CAAE,IACpB,CACD"}'
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_motion;
  $$unsubscribe_motion = subscribe(motion, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_motion();
  return `${``}`;
});
const css = {
  code: "body, html{margin:0;padding:0;-webkit-tap-highlight-color:transparent;box-sizing:border-box}html{background-color:var(--theme-colors-background, initial);color:var(--theme-colors-text, initial);font-size:100%}body{background:black;font-family:var(--theme-font-family);user-select:none;-webkit-user-select:none;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;transition:background-image 100ms ease}*, *::before, *::after, *:focus{box-sizing:inherit}.backdrop.svelte-yzn0qr{position:fixed;top:0;bottom:0;right:0;left:0;z-index:2;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;transition:opacity 100ms ease-out}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { motion } from \\"$lib/Stores\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { Modals, closeModal } from \\"svelte-modals\\";\\nimport Loader from \\"$lib/Components/Loader.svelte\\";\\nimport \\"@fontsource-variable/inter\\";\\nimport { expoOut } from \\"svelte/easing\\";\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>FUSION</title>\\r\\n\\t<meta name=\\"description\\" content=\\"fusion\\" />\\r\\n\\t<meta charset=\\"utf-8\\" />\\r\\n</svelte:head>\\r\\n\\r\\n<Modals>\\r\\n\\t<div\\r\\n\\t\\tslot=\\"backdrop\\"\\r\\n\\t\\tclass=\\"backdrop\\"\\r\\n\\t\\ton:click={() => {\\r\\n\\t\\t\\tcloseModal();\\r\\n\\t\\t}}\\r\\n\\t\\tin:fade={{\\r\\n\\t\\t\\tduration: $motion,\\r\\n\\t\\t\\teasing: expoOut\\r\\n\\t\\t}}\\r\\n\\t\\tout:fade={{ duration: $motion / 2 }}\\r\\n\\t\\ton:keydown\\r\\n\\t\\trole=\\"button\\"\\r\\n\\t\\ttabindex=\\"0\\"\\r\\n\\t></div>\\r\\n\\r\\n\\t<div slot=\\"loading\\">\\r\\n\\t\\t<Loader />\\r\\n\\t</div>\\r\\n</Modals>\\r\\n\\r\\n<slot />\\r\\n\\r\\n<style>\\r\\n\\t:global(body, html) {\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\t-webkit-tap-highlight-color: transparent;\\r\\n\\t\\tbox-sizing: border-box;\\r\\n\\t}\\r\\n\\r\\n\\t:global(html) {\\r\\n\\t\\tbackground-color: var(--theme-colors-background, initial);\\r\\n\\t\\tcolor: var(--theme-colors-text, initial);\\r\\n\\t\\tfont-size: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t:global(body) {\\r\\n\\t\\tbackground: black;\\r\\n\\t\\tfont-family: var(--theme-font-family);\\r\\n\\t\\tuser-select: none;\\r\\n\\t\\t-webkit-user-select: none;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-attachment: fixed;\\r\\n\\t\\ttransition: background-image 100ms ease;\\r\\n\\t}\\r\\n\\r\\n\\t:global(*, *::before, *::after, *:focus) {\\r\\n\\t\\tbox-sizing: inherit;\\r\\n\\t}\\r\\n\\r\\n\\t.backdrop {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tbottom: 0;\\r\\n\\t\\tright: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\tz-index: 2;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-attachment: fixed;\\r\\n\\t\\ttransition: opacity 100ms ease-out;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuCS,UAAY,CACnB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,2BAA2B,CAAE,WAAW,CACxC,UAAU,CAAE,UACb,CAEQ,IAAM,CACb,gBAAgB,CAAE,IAAI,yBAAyB,CAAC,QAAQ,CAAC,CACzD,KAAK,CAAE,IAAI,mBAAmB,CAAC,QAAQ,CAAC,CACxC,SAAS,CAAE,IACZ,CAEQ,IAAM,CACb,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,IAAI,mBAAmB,CAAC,CACrC,WAAW,CAAE,IAAI,CACjB,mBAAmB,CAAE,IAAI,CACzB,eAAe,CAAE,KAAK,CACtB,iBAAiB,CAAE,SAAS,CAC5B,qBAAqB,CAAE,KAAK,CAC5B,UAAU,CAAE,gBAAgB,CAAC,KAAK,CAAC,IACpC,CAEQ,+BAAiC,CACxC,UAAU,CAAE,OACb,CAEA,uBAAU,CACT,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,KAAK,CACtB,iBAAiB,CAAE,SAAS,CAC5B,qBAAqB,CAAE,KAAK,CAC5B,UAAU,CAAE,OAAO,CAAC,KAAK,CAAC,QAC3B"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_motion;
  $$unsubscribe_motion = subscribe(motion, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_motion();
  return `${$$result.head += `<!-- HEAD_svelte-1f0udsr_START -->${$$result.title = `<title>FUSION</title>`, ""}<meta name="description" content="fusion"><meta charset="utf-8"><!-- HEAD_svelte-1f0udsr_END -->`, ""} ${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    loading: () => {
      return `<div slot="loading">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>`;
    },
    backdrop: () => {
      return `<div slot="backdrop" class="backdrop svelte-yzn0qr" role="button" tabindex="0"></div>`;
    }
  })} ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-COqvG-He.js.map
