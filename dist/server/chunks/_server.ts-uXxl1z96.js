import { j as json, e as error } from './index-CvuFLVuQ.js';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { url, token } = body;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    if (response.ok) {
      return json(data);
    }
  } catch (err) {
    error(500, err.message);
  }
};

export { POST };
//# sourceMappingURL=_server.ts-uXxl1z96.js.map
