import type { ProductCategory } from '../types/product'

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

function productMotif(name: string): string {
  const product = name.toLowerCase()

  if (product.includes('rosemary')) {
    return `<g fill="none" stroke="#71836a" stroke-linecap="round" stroke-linejoin="round">
      <path d="M145 335c25-55 35-103 38-168M158 291l-34-24m43-12-31-25m46-5-31-26m12 63 31-24m-39-19 28-24m-33-19 25-22" stroke-width="5"/>
      <path d="M124 267c-2-16 9-22 25-16m-9-33c-1-16 10-21 25-15m-3-33c2-15 13-20 27-12m-4 78c6-15 18-17 30-8m-35-39c7-14 19-15 30-5m-37-38c9-12 20-12 30-1" stroke-width="3"/>
    </g>`
  }

  if (product.includes('lemon') || product.includes('orange')) {
    const fruit = product.includes('lemon') ? '#d4b83e' : '#d68a45'
    return `<g transform="translate(155 245)">
      <circle r="53" fill="${fruit}" opacity=".18"/>
      <circle r="37" fill="${fruit}" opacity=".42" stroke="${fruit}" stroke-width="4"/>
      <circle r="7" fill="#fff8e9"/>
      <path d="M0-7v-22m6 29 20-12M7 6l20 12M0 7v23m-6-30-20-12m19 25-20 12" stroke="#fff8e9" stroke-width="3" stroke-linecap="round"/>
      <path d="M13-42c14-19 32-16 39-6-13 12-28 14-39 6Z" fill="#71836a"/>
    </g>`
  }

  if (product.includes('coffee')) {
    return `<g fill="#8b654e">
      <ellipse cx="131" cy="231" rx="17" ry="27" transform="rotate(-32 131 231)"/>
      <path d="M123 208c13 10 17 32 8 46" fill="none" stroke="#f4e8da" stroke-width="3"/>
      <ellipse cx="180" cy="265" rx="17" ry="27" transform="rotate(28 180 265)"/>
      <path d="M172 241c-5 15-1 35 9 47" fill="none" stroke="#f4e8da" stroke-width="3"/>
      <ellipse cx="128" cy="312" rx="14" ry="22" transform="rotate(26 128 312)" opacity=".72"/>
      <path d="M121 293c7 8 9 21 5 36" fill="none" stroke="#f4e8da" stroke-width="2.5"/>
    </g>`
  }

  if (product.includes('rice')) {
    return `<g fill="#d8c8ac" stroke="#b7a489" stroke-width="2">
      <ellipse cx="132" cy="224" rx="7" ry="19" transform="rotate(-38 132 224)"/>
      <ellipse cx="167" cy="236" rx="7" ry="19" transform="rotate(24 167 236)"/>
      <ellipse cx="119" cy="267" rx="7" ry="19" transform="rotate(19 119 267)"/>
      <ellipse cx="158" cy="282" rx="7" ry="19" transform="rotate(-35 158 282)"/>
      <ellipse cx="188" cy="300" rx="7" ry="19" transform="rotate(39 188 300)"/>
      <ellipse cx="128" cy="322" rx="7" ry="19" transform="rotate(-17 128 322)"/>
    </g>`
  }

  if (product.includes('charcoal')) {
    return `<g fill="#62605d">
      <path d="m111 271 17-38 32 5 13 29-17 30-34-1z"/>
      <path d="m163 313 13-24 25 5 10 23-18 20-23-5z" opacity=".75"/>
      <path d="m109 330 9-17 18 2 8 17-12 16-18-4z" opacity=".55"/>
      <path d="m124 245 20-7 16 10-29 2z" fill="#a6a39d" opacity=".5"/>
    </g>`
  }

  if (product.includes('multani') || product.includes('ubtan')) {
    const powder = product.includes('ubtan') ? '#c39a54' : '#b99475'
    return `<g>
      <ellipse cx="157" cy="306" rx="55" ry="24" fill="#d7c3ad"/>
      <path d="M104 299h106l-10 43c-19 17-66 17-86 0z" fill="#b7977c"/>
      <ellipse cx="157" cy="298" rx="53" ry="18" fill="${powder}"/>
      <ellipse cx="157" cy="294" rx="34" ry="9" fill="#f0d9b4" opacity=".72"/>
      <path d="M133 289c11-9 32-11 47-2" fill="none" stroke="#fff4df" stroke-width="3" stroke-linecap="round"/>
    </g>`
  }

  if (product.includes('hair oil')) {
    return `<g fill="none" stroke="#71836a" stroke-linecap="round" stroke-linejoin="round">
      <path d="M127 337c15-43 32-91 38-151m-27 111-25-17m35-13-27-18m39-9-26-20m11 62 28-20m-35-18 26-20" stroke-width="4"/>
      <path d="M155 186c-14-13-13-26-1-34 13 9 14 22 1 34Zm-42 94c-17-2-23-13-16-26 16 1 24 11 16 26Zm63-41c4-16 16-21 29-13-3 16-14 22-29 13Z" fill="#91a184" stroke="none"/>
      <path d="M196 327c12-15 29-14 37-2-10 13-25 16-37 2Z" fill="#d6c299" stroke="none"/>
      <path d="M207 324c3-8 9-13 17-15" stroke="#a7824e" stroke-width="2"/>
    </g>`
  }

  if (product.includes('coconut')) {
    return `<g>
      <circle cx="144" cy="269" r="37" fill="#79614d"/>
      <circle cx="144" cy="269" r="27" fill="#f4eadb"/>
      <circle cx="144" cy="269" r="19" fill="#fffaf1"/>
      <path d="M144 242c-8 7-13 16-14 27m14-27c8 7 13 16 14 27m-28 0c7 7 17 11 28 11" fill="none" stroke="#dbcbb4" stroke-width="2"/>
      <path d="M178 313c7-10 17-16 30-17m-23 26c8-9 19-13 31-12" fill="none" stroke="#71836a" stroke-width="4" stroke-linecap="round"/>
    </g>`
  }

  return `<g fill="none" stroke="#78836d" stroke-linecap="round" stroke-linejoin="round" opacity=".75">
    <path d="M126 334c14-44 22-89 21-137m-13 102-26-20m34-13-27-21m31-12-24-19m17 61 25-22m-28-13 24-19" stroke-width="4"/>
    <path d="M108 316c-20-2-26-15-18-30 19 1 28 13 18 30Zm52-91c5-18 19-23 33-14-4 18-17 24-33 14Z" fill="#91a184" stroke="none"/>
  </g>`
}

export function createProductArtwork(
  name: string,
  category: ProductCategory,
  accent: string,
): string {
  const safeName = escapeXml(name)
  const motif = productMotif(name)
  const isOil = category === 'oils'
  const artwork = isOil
    ? `<ellipse cx="350" cy="425" rx="135" ry="24" fill="#342e2a" opacity=".12"/>
       <rect x="287" y="110" width="126" height="72" rx="12" fill="#4b3832"/>
       <rect x="270" y="168" width="160" height="260" rx="42" fill="url(#glass)" stroke="#fff" stroke-opacity=".55" stroke-width="5"/>
       <path d="M288 207c0-12 10-22 22-22h8v210h-8c-12 0-22-10-22-22z" fill="#fff" opacity=".2"/>
       <rect x="286" y="265" width="128" height="112" rx="5" fill="#fbf7f0"/>
       <path d="M303 282h94" stroke="${accent}" stroke-width="3"/>
       <text x="350" y="306" text-anchor="middle" class="brand">U&amp;M BOTANICALS</text>
       <text x="350" y="333" text-anchor="middle" class="name">${safeName}</text>
       <text x="350" y="354" text-anchor="middle" class="detail">NATURAL OIL</text>`
    : `<ellipse cx="350" cy="421" rx="165" ry="24" fill="#342e2a" opacity=".12"/>
       <g transform="rotate(-11 350 280)">
         <rect x="235" y="154" width="208" height="248" rx="30" fill="${accent}" opacity=".45"/>
         <path d="M255 166h168a20 20 0 0 1 20 20v20H235v-30a20 20 0 0 1 20-10z" fill="#fff" opacity=".27"/>
       </g>
       <rect x="264" y="188" width="172" height="208" rx="28" fill="${accent}" stroke="#fff" stroke-opacity=".7" stroke-width="5"/>
       <path d="M282 207h136a14 14 0 0 1 14 14v14H268v-14a14 14 0 0 1 14-14z" fill="#fff" opacity=".25"/>
       <rect x="282" y="258" width="136" height="100" rx="4" fill="#fbf7f0"/>
       <path d="M301 276h98" stroke="${accent}" stroke-width="3"/>
       <text x="350" y="297" text-anchor="middle" class="brand">U&amp;M HANDMADE</text>
       <text x="350" y="322" text-anchor="middle" class="name">${safeName}</text>
       <text x="350" y="342" text-anchor="middle" class="detail">BOTANICAL SOAP</text>`

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 520">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#fffaf4"/><stop offset="1" stop-color="#e9dfd3"/>
      </linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="${accent}"/><stop offset=".48" stop-color="#b97a50"/><stop offset="1" stop-color="${accent}"/>
      </linearGradient>
      <style>
        .brand{font:600 10px Arial,sans-serif;letter-spacing:2px;fill:#78624e}
        .name{font:600 15px Georgia,serif;fill:#3f3831}
        .detail{font:600 8px Arial,sans-serif;letter-spacing:2px;fill:#95816d}
      </style>
    </defs>
    <rect width="700" height="520" fill="url(#background)"/>
    <circle cx="105" cy="86" r="112" fill="${accent}" opacity=".10"/>
    <circle cx="605" cy="430" r="155" fill="#a27c5c" opacity=".08"/>
    <path d="M66 401c68-22 87-85 100-148 9 70-2 122-58 165m491-227c-66 6-95-32-125-84 19 62 46 103 113 111" fill="none" stroke="#78836d" stroke-linecap="round" stroke-width="5" opacity=".45"/>
    <circle cx="124" cy="273" r="5" fill="#a98d70" opacity=".55"/>
    <circle cx="554" cy="145" r="7" fill="${accent}" opacity=".35"/>
    ${motif}
    ${artwork}
    <text x="350" y="485" text-anchor="middle" class="detail">MADE WITH CARE • U&amp;M</text>
  </svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
