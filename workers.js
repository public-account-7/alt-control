export default {
  async fetch(request) {
    const url = new URL(request.url)

    // basic route
    if (url.pathname === "/") {
      return new Response("hello from cloudflare worker", {
        status: 200,
        headers: {
          "content-type": "text/plain"
        }
      })
    }

    // json route
    if (url.pathname === "/api") {
      return Response.json({
        success: true,
        message: "worker running"
      })
    }

    // 404
    return new Response("not found", {
      status: 404
    })
  }
}
