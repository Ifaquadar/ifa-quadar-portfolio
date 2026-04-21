
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ifaquadarportfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ifaquadarportfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1425, hash: '1dfdd390274ffe293fd9e9924424ea9fa780d4eac6c4da28e3842b33ef731a3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1784, hash: '2af90580405392763d49e33a9599415165826f79c75ceca5c62c91f3336b366d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80394, hash: '8b5aab863bfcd7f40fa9ce35bbd7954fb98cac066826ab0b48c6fb04dabc8dbd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OXW2MAEB.css': {size: 29, hash: 'fxngjyxXs5g', text: () => import('./assets-chunks/styles-OXW2MAEB_css.mjs').then(m => m.default)}
  },
};
