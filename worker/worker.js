export default {
  async fetch(request) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      })
    }

    // Proxy to SiliconFlow API
    const url = new URL(request.url)
    const targetUrl = 'https://api.siliconflow.cn' + url.pathname + url.search

    const modifiedHeaders = new Headers(request.headers)
    // Remove origin/referer that might trigger WAF blocking
    modifiedHeaders.delete('Origin')
    modifiedHeaders.delete('Referer')

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: modifiedHeaders,
      body: request.body,
    })

    // Return response with CORS headers (streaming supported)
    const newResponse = new Response(response.body, response)
    newResponse.headers.set('Access-Control-Allow-Origin', '*')
    newResponse.headers.set('Access-Control-Expose-Headers', '*')
    return newResponse
  },
}
