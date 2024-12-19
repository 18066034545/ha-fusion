import { readdir } from 'fs/promises';
import { j as json, e as error } from './index-CvuFLVuQ.js';
import { d as dev } from './index3-BwfcJtHW.js';
import path from 'path';
import './false-CRHihH2U.js';

const GET = async ({ setHeaders }) => {
  try {
    const dir = dev ? "./static/translations" : "./build/client/translations";
    const files = await readdir(dir);
    const languages = files.filter((file) => path.extname(file) === ".json").map((file) => file.split(".")[0]);
    setHeaders({ "Cache-Control": "max-age=0" });
    return json(languages);
  } catch (err) {
    error(500, err.message);
  }
};

export { GET };
//# sourceMappingURL=_server.ts-BLdr2KDV.js.map
