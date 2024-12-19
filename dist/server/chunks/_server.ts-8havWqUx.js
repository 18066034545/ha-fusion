import { readdir, readFile } from 'fs/promises';
import { d as dev } from './index3-BwfcJtHW.js';
import { j as json, e as error } from './index-CvuFLVuQ.js';
import yaml from 'js-yaml';
import path from 'path';
import './false-CRHihH2U.js';

const GET = async ({ setHeaders }) => {
  try {
    const dir = dev ? "./static/themes" : "./build/client/themes";
    const files = await readdir(dir);
    const yamlFiles = files.filter((file) => file.endsWith(".yaml"));
    const themes = await Promise.all(
      yamlFiles.map(async (file) => {
        const filePath = `${dir}/${file}`;
        const data = await readFile(filePath, "utf-8");
        const themeData = yaml.load(data);
        if (path.parse(file).name !== themeData?.title) {
          return null;
        }
        return {
          file,
          title: themeData?.title,
          author: themeData?.author,
          attribution: themeData?.attribution,
          theme: themeData?.theme
        };
      })
    );
    const validate = themes.filter(Boolean);
    setHeaders({ "Cache-Control": "max-age=0" });
    return json(validate);
  } catch (err) {
    error(500, err.message);
  }
};

export { GET };
//# sourceMappingURL=_server.ts-8havWqUx.js.map
