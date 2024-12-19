import { readFile, writeFile } from 'fs/promises';
import { j as json, e as error } from './index-CvuFLVuQ.js';

const GET = async () => {
  try {
    const [packageFile, versionFile] = await Promise.all([
      readFile("./package.json", "utf8").catch(() => "{}"),
      readFile("./data/version.json", "utf8").catch(() => "{}")
    ]);
    const packageData = JSON.parse(packageFile);
    const versionData = JSON.parse(versionFile);
    return json({
      installed: packageData?.version,
      latest: versionData?.latest,
      last_updated: versionData?.last_updated
    });
  } catch (err) {
    error(500, err);
  }
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const data = JSON.stringify(body, null, "	") + "\n";
    await writeFile("./data/version.json", data);
    return json({ message: "success" });
  } catch (err) {
    return error(500, err);
  }
};

export { GET, POST };
//# sourceMappingURL=_server.ts-CObe2UPA.js.map
