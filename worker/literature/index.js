addEventListener('fetch', event => {
  const request = event.request
  if (request.method === 'OPTIONS') {
    // Handle CORS preflight requests
    event.respondWith(handleOptions(request))
  } else if (
    request.method === 'GET' ||
    request.method === 'HEAD' ||
    request.method === 'POST'
  ) {
    // Handle requests to the API server
    event.respondWith(handleRequest(request))
  } else {
    event.respondWith(
      new Response(null, {
        status: 405,
        statusText: 'Method Not Allowed',
      }),
    )
  }
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
}

function handleOptions(request) {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  let headers = request.headers
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    // If you want to check or reject the requested method + headers
    // you can do that here.
    let respHeaders = {
      ...corsHeaders,
      // Allow all future content Request headers to go back to browser
      // such as Authorization (Bearer) or X-Client-Name-Version
      'Access-Control-Allow-Headers': request.headers.get(
        'Access-Control-Request-Headers',
      ),
    }

    return new Response(null, {
      headers: respHeaders,
    })
  } else {
    // Handle standard OPTIONS request.
    // If you want to allow other HTTP Methods, you can do that here.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS',
      },
    })
  }
}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const { input, category } = await request.json()

  if (!input || !category)
    return new Response('No input/category provided', { status: 400 })

  console.log('Processing category: ' + category)

  const blob = new Blob([input], {
    type: 'text/plain',
  })

  // Construct form data
  const form = new FormData()
  form.append('userfile', blob, 'Input.txt')
  form.append('MAX_FILE_SIZE', 52428800)
  form.append('filetype', 'bib')
  const uploadResponse = await fetch(
    'https://www.rhrk.uni-kl.de/webtools/converttomods/index.php',
    {
      method: 'POST',
      body: form,
    },
  )

  console.log('Got category', category)

  return new Response(uploadResponse.body, {
    status: 200,
    headers: corsHeaders,
  })
}
