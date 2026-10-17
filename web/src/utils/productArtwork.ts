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

export function createProductArtwork(
  name: string,
  category: ProductCategory,
  accent: string,
): string {
  const safeName = escapeXml(name)
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
    ${artwork}
    <text x="350" y="485" text-anchor="middle" class="detail">MADE WITH CARE • U&amp;M</text>
  </svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
