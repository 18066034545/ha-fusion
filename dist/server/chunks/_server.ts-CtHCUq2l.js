import { writeFile } from 'fs/promises';
import { e as error, j as json } from './index-CvuFLVuQ.js';
import yaml from 'js-yaml';

const POST = async ({ request }) => {
  const body = await request.json();
  let data;
  try {
    data = yaml.dump(body);
  } catch (err) {
    error(500, err.message);
  }
  try {
    await writeFile("./data/dashboard.yaml", data);
    return json({ message: "saved" });
  } catch (err) {
    error(500, err.message);
  }
};

export { POST };
//# sourceMappingURL=_server.ts-CtHCUq2l.js.map
