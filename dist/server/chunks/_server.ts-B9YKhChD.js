import { readFile } from 'fs/promises';
import { j as json, e as error } from './index-CvuFLVuQ.js';
import { d as dev } from './index3-BwfcJtHW.js';
import './false-CRHihH2U.js';

const POST = async ({ request, setHeaders }) => {
  try {
    const body = await request.json();
    if (!body.locale || typeof body.locale !== "string") {
      throw new Error("Invalid locale");
    }
    const dir = dev ? "./static/translations" : "./build/client/translations";
    const [en, locale] = await Promise.all([
      readFile(`${dir}/en.json`, "utf8"),
      body.locale && body.locale !== "en" ? readFile(`${dir}/${body.locale}.json`, "utf8") : void 0
    ]);
    const translations = locale ? { ...JSON.parse(locale), _default: JSON.parse(en) } : JSON.parse(en);
    setHeaders({ "Cache-Control": "max-age=0" });
    return json(translations);
  } catch (err) {
    error(500, err.message);
  }
};

export { POST };
//# sourceMappingURL=_server.ts-B9YKhChD.js.map
