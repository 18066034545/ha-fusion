import { readFile } from 'fs/promises';
import { j as json, e as error } from './index-CvuFLVuQ.js';
import { d as dev } from './index3-BwfcJtHW.js';
import yaml from 'js-yaml';
import './false-CRHihH2U.js';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const file = await readFile(
      `${dev ? "static" : "build/client"}/themes/${body?.theme}.yaml`,
      "utf8"
    );
    const content = yaml.load(file);
    return json(content);
  } catch (err) {
    error(500, err.message);
  }
};

export { POST };
//# sourceMappingURL=_server.ts-BBSu58Y-.js.map
