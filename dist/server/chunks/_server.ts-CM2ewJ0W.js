import { unlinkSync, writeFileSync, readFileSync } from 'fs';
import { Innertube, UniversalCache } from 'youtubei.js';
import { j as json, e as error } from './index-CvuFLVuQ.js';
import yaml from 'js-yaml';

let youtube;
let event;
const credentialsFilePath = "./data/youtube_credentials.json";
const POST = async ({ request }) => {
  const response = await request.json();
  const message = response?.message;
  if (message === "poll") {
    return json(event || {});
  } else if (message === "logout") {
    try {
      try {
        await youtube?.session.signOut();
      } catch (err) {
        console.error(err);
      }
      unlinkSync(credentialsFilePath);
      const configFilePath = "./data/configuration.yaml";
      let config = await loadFile(configFilePath);
      if (config?.addons?.youtube) {
        delete config.addons.youtube;
        config = yaml.dump(config);
        writeFileSync(configFilePath, config);
      }
      return json({
        message: "success"
      });
    } catch (err) {
      return error(500, err?.message);
    }
  } else if (message === "history") {
    try {
      youtube = await Innertube.create({
        cache: new UniversalCache(false)
      });
      const events = new Promise((resolve) => {
        if (!youtube) return;
        youtube.session.on("auth-pending", () => {
          console.error(
            "YouTube credentials have expired, please sign in again or turn off add-on."
          );
          resolve();
        });
        youtube.session.on("auth", async ({ credentials }) => {
          await saveFile(credentials);
          resolve();
        });
        youtube.session.on("update-credentials", async ({ credentials }) => {
          await saveFile(credentials);
          resolve();
        });
        youtube.session.on("auth-error", (error2) => {
          console.error("YouTube add-on:", error2);
          resolve();
        });
      });
      const auth = await loadFile(credentialsFilePath);
      await youtube.session.signIn(auth);
      await events;
      const library = await youtube.getLibrary();
      const history = library?.sections?.find((section) => section?.title?.text === "History");
      const video = history?.contents.find((video2) => {
        return video2.author?.name === response?.media_artist && video2.title?.text === response?.media_title;
      });
      const { author, title, id, thumbnails } = video;
      const getThumbnail = async (id2) => {
        const url = `https://img.youtube.com/vi/${id2}/maxresdefault.jpg`;
        const response2 = await fetch(url, { method: "HEAD" });
        if (response2.ok) return url;
      };
      const maxres = await getThumbnail(id);
      return json({
        media_artist: author?.name,
        media_title: title?.text,
        entity_picture: maxres || thumbnails?.[0]?.url
      });
    } catch (err) {
      error(500, err?.message);
    }
  }
  return json({
    message: "error",
    error: "Unhandled post request"
  });
};
const GET = async () => {
  try {
    youtube = await Innertube.create({
      cache: new UniversalCache(false)
    });
    youtube.session.on("auth-pending", (data2) => {
      event = {
        message: "auth-pending",
        verification_url: data2?.verification_url,
        user_code: data2?.user_code,
        timestamp: (/* @__PURE__ */ new Date()).getTime()
      };
    });
    youtube.session.on("auth", async ({ credentials }) => {
      event = { message: "auth" };
      await saveFile(credentials);
    });
    youtube.session.on("update-credentials", async ({ credentials }) => {
      event = { message: "update-credentials" };
      await saveFile(credentials);
    });
    youtube.session.on("auth-error", (error2) => {
      event = {
        message: "auth-error",
        error: error2
      };
    });
    let auth = await loadFile(credentialsFilePath);
    if (!Object.keys(auth)?.length) auth = void 0;
    await youtube.session.signIn(auth);
    const data = await youtube.account.getInfo();
    event = void 0;
    return json(data);
  } catch (err) {
    console.error(err);
    return error(500, err.message);
  }
};
async function loadFile(filePath) {
  try {
    const data = readFileSync(filePath, "utf8");
    if (!data.trim()) {
      return {};
    } else {
      return filePath.endsWith(".yaml") ? yaml.load(data) : JSON.parse(data);
    }
  } catch (err) {
    if (err?.code === "ENOENT") ;
    else {
      console.error(`Error reading or parsing ${filePath}:`, err);
    }
    return {};
  }
}
async function saveFile(credentials) {
  try {
    const data = JSON.stringify(credentials, null, "	") + "\n";
    writeFileSync(credentialsFilePath, data);
  } catch (err) {
    console.error("Failed to save credentials:", err);
  }
}

export { GET, POST };
//# sourceMappingURL=_server.ts-CM2ewJ0W.js.map
