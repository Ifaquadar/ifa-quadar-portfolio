
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ifa-quadar-portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ifa-quadar-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1426, hash: '80b6a978bb15f5bf1249bff538a3075520ba2be37ca41af9557144912d2f0089', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1785, hash: '03abdae520bd9f85d437fe26b7d3fc7c71baf16231e389d1c346a2d3246f968c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80472, hash: 'c6d39a126108d233f1ba851cf02c2f23b44d47b9375f6ec0c7329925c18827df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OXW2MAEB.css': {size: 29, hash: 'fxngjyxXs5g', text: () => import('./assets-chunks/styles-OXW2MAEB_css.mjs').then(m => m.default)}
  },
};
