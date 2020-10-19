// icons
const externalIcon = `
<span aria-hidden="true" style="display: inline-block; position: relative; top: 2px">
<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" 
stroke-linejoin="round" width="16" height="16" role="img" 
aria-labelledby="title-6093466147672735" xmlns="http://www.w3.org/2000/svg">
<title id="title-6093466147672735">External link icon</title>
<path d="M6.75,1.75h-5v12.5h12.5v-5m0,-4v-3.5h-3.5M8,8l5.5-5.5"></path></svg>
</span>
`

const cloudflareIcon = `
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Cloudflare icon</title>
<path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"/></svg>
`

const githubIcon = `
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title>
<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
`

const linkedinIcon = `
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title>
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
`

// base links
const LINKS = [
  { 'name': 'DC Comics', 'url': 'https://www.dccomics.com/comics' },
  { 'name': 'Marvel Comics', 'url': 'https://www.marvel.com/comics' },
  { 'name': 'Los Angeles Dodgers', 'url': 'https://www.mlb.com/dodgers' },
  { 'name': 'Los Angeles Lakers', 'url': 'https://www.nba.com/lakers/' }
]

// social media links
const SM_LINKS = [
  { 'name': 'GitHub Profile', 'url': 'https://linkedin.com/in/iandebie', 'icon': githubIcon },
  { 'name': 'LinkedIn Profile', 'url': 'https://github.com/luckyguy73', 'icon': linkedinIcon }
]

// append links to #links div
const addBaseLinks = () => ({
  element: links => {
    let html = ''
    LINKS.forEach(link => html += `<a href="${link.url}" target="_blank">${link.name}${externalIcon}</a>`)
    links.append(html, { html: true })
  }
})

// append social media links to #social div
const addSocialMediaLinks = () => ({
  element: links => {
    let html = ''
    SM_LINKS.forEach(link => html += `<a href="${link.url}" target="_blank">${link.icon}</a>`)
    links.append(html, { html: true })
  }
})

// remove style attribute setting display to none
const updateDisplay = () => ({
  element: el => el.removeAttribute('style')
})

// set profile image
const setProfileImgSrc = () => ({
  element: el => el.setAttribute('src', 'https://lh3.googleusercontent.com/a-/AOh14GgQ5irwrqQqoplnvEKQZ1UhdHEkL-FLIhOCsr3Z=s96-c')
})

// set profile username
const setProfileUsername = () => ({
  element: el => el.setInnerContent('iandebie')
})

// update title
const updateTitle = () => ({
  element: el => el.setInnerContent('Ian De Bie')
})

// change background color
const changeBackgroundColor = () => ({
  element: el => {
    el.removeAttribute('class')
    el.setAttribute('class', 'bg-gray-600')
  }
})

// fetch event listener
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to /links pathname with JSON API, else serve static HTML page
 * @param {Request} request
 */
async function handleRequest(request) {
  // create a URL object to easily access pathname for comparison
  const url = new URL(request.url)

  // check if request is for /links
  if (url.pathname.toLowerCase() === '/links') {
    return new Response(JSON.stringify(LINKS), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // fetch static html
  const res = await fetch('https://static-links-page.signalnerve.workers.dev')

  // return HTMLRewriter object with transformations
  return new HTMLRewriter()
    .on('body', changeBackgroundColor())
    .on('#links', addBaseLinks())
    .on('#avatar', setProfileImgSrc())
    .on('#name', setProfileUsername())
    .on('title', updateTitle())
    .on('#social', addSocialMediaLinks())
    .on('#social', updateDisplay())
    .on('#profile', updateDisplay()).transform(res)

}


