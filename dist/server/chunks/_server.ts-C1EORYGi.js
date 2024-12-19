const POST = async ({ request }) => {
  const { message, data } = await request.json();
  console.log(message, data);
  return new Response(JSON.stringify({ status: "Logged" }), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200
  });
};

export { POST };
//# sourceMappingURL=_server.ts-C1EORYGi.js.map
