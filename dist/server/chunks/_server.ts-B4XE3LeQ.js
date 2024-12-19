import { writeFile } from 'fs/promises';
import { j as json } from './index-CvuFLVuQ.js';
import yaml from 'js-yaml';

const POST = async ({ request }) => {
  const body = await request.json();
  let data;
  try {
    data = yaml.dump(body);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON - cannot convert to YAML" }), {
      status: 400
    });
  }
  try {
    await writeFile("data/configuration.yaml", data);
    return json({ action: "saved" });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 400
    });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-B4XE3LeQ.js.map
