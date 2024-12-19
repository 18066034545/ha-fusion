import { readdir, readFile } from 'fs/promises';
import { d as dev } from './index3-BwfcJtHW.js';
import { j as json, e as error } from './index-CvuFLVuQ.js';
import { marked } from 'marked';
import './false-CRHihH2U.js';

const GET = async ({ setHeaders }) => {
  try {
    const dir = dev ? "./static/documentation" : "./build/client/documentation";
    const files = await readdir(dir);
    const mdFiles = files.filter((file) => file.endsWith(".md"));
    const results = await Promise.all(
      mdFiles.map(async (file) => {
        const path = `${dir}/${file}`;
        const data = await readFile(path, "utf-8");
        const parsed = marked.parse(data);
        return [file.replace(".md", ""), parsed];
      })
    );
    setHeaders({ "Cache-Control": "max-age=0" });
    return json(Object.fromEntries(results));
  } catch (err) {
    error(500, err.message);
  }
};

export { GET };
//# sourceMappingURL=_server.ts-spmjX-Ov.js.map
