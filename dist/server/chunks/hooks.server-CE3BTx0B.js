async function handle({ event, resolve }) {
  const response = await resolve(event);
  response.headers.delete("link");
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-CE3BTx0B.js.map
