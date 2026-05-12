export default {
  async fetch(request) {
    const url = new URL(request.url)

    // GET /
    if (url.pathname === "/") {
      return Response.json({
        success: true,
        message: "api online"
      })
    }

    // GET /ping
    if (url.pathname === "/ping") {
      return new Response("pong")
    }

    // POST /echo
    if (url.pathname === "/echo" && request.method === "POST") {
      const body = await request.json()

      return Response.json({
        you_sent: body
      })
    }

    return new Response("Not Found", {
      status: 404
    })
  }
}
