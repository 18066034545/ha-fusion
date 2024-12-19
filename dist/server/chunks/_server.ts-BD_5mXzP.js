import { readFile, writeFile } from 'fs/promises';
import { e as error, j as json } from './index-CvuFLVuQ.js';

const GET = async ({ setHeaders }) => {
  let file;
  const path = "./data/custom_javascript.js";
  try {
    file = await readFile(path, "utf-8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`File not found... creating ${path}`);
      const content = `console.debug('🎉 Custom JavaScript file loaded!');
`;
      await writeFile(path, `console.debug('🎉 Custom JavaScript file loaded!');
`, "utf-8");
      file = content;
    } else {
      error(500, err.message);
    }
  }
  setHeaders({ "Cache-Control": "max-age=0" });
  return json(file);
};

export { GET };
//# sourceMappingURL=_server.ts-BD_5mXzP.js.map
