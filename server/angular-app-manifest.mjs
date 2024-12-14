
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/add-employee"
  },
  {
    "renderMode": 2,
    "route": "/emp-list"
  },
  {
    "renderMode": 2,
    "route": "/databinding"
  },
  {
    "renderMode": 2,
    "route": "/struct"
  },
  {
    "renderMode": 2,
    "route": "/if-else"
  },
  {
    "renderMode": 2,
    "route": "/for"
  },
  {
    "renderMode": 2,
    "route": "/switch-case"
  },
  {
    "renderMode": 2,
    "route": "/pipe"
  },
  {
    "renderMode": 2,
    "route": "/template-form"
  },
  {
    "renderMode": 2,
    "route": "/reactive-form"
  },
  {
    "renderMode": 2,
    "route": "/http-client"
  },
  {
    "renderMode": 2,
    "route": "/ngtemplate"
  },
  {
    "renderMode": 2,
    "route": "/ngcontainer"
  },
  {
    "renderMode": 2,
    "route": "/view"
  },
  {
    "renderMode": 2,
    "route": "/materail"
  }
],
  assets: {
    'index.csr.html': {size: 14601, hash: '698ce875a39380ae9462b65d1d54e5217639bd468aff3db6217bac310642cc11', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8175, hash: '756e02d8b14efe03d60218e59601405b87dc69f74a69a857936fe962be6f920b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 17986, hash: '5d3fead7f233f14abb239cb2b6fbb8b4bed8f099e944119e3af54deb8c9f94d9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 17986, hash: '5d3fead7f233f14abb239cb2b6fbb8b4bed8f099e944119e3af54deb8c9f94d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'emp-list/index.html': {size: 18572, hash: '7015e7753996fdc7fa8c801692280e9f9625e20e381c2fb0c87665ec77acd87d', text: () => import('./assets-chunks/emp-list_index_html.mjs').then(m => m.default)},
    'databinding/index.html': {size: 17986, hash: '5d3fead7f233f14abb239cb2b6fbb8b4bed8f099e944119e3af54deb8c9f94d9', text: () => import('./assets-chunks/databinding_index_html.mjs').then(m => m.default)},
    'if-else/index.html': {size: 19125, hash: '999f60c3c0792ff32b3ff9731ea554a44e592fedbc4dfd5e1754127639c25121', text: () => import('./assets-chunks/if-else_index_html.mjs').then(m => m.default)},
    'struct/index.html': {size: 21811, hash: 'c3f05bd877ab5386689a05b12d8edb0e5ad0e5732a8a4381c91d9e3e5b47f6e5', text: () => import('./assets-chunks/struct_index_html.mjs').then(m => m.default)},
    'pipe/index.html': {size: 18667, hash: 'c118e1939f49683012ef38343d45c95f631bc794afc1a16e2ec242b65e8e19eb', text: () => import('./assets-chunks/pipe_index_html.mjs').then(m => m.default)},
    'switch-case/index.html': {size: 18552, hash: '39085e9b5a77a922d7668976c7181a298048b3b89a491c211b109f440487a20a', text: () => import('./assets-chunks/switch-case_index_html.mjs').then(m => m.default)},
    'template-form/index.html': {size: 22358, hash: 'd31673547440364f87ac5a70c20462eff97fca48b114f82d4188db9514b3911b', text: () => import('./assets-chunks/template-form_index_html.mjs').then(m => m.default)},
    'reactive-form/index.html': {size: 22673, hash: 'faec0c2dabfbc0d08e90c36c0946945f4680c41751a87b6af73de1dbd4a14e26', text: () => import('./assets-chunks/reactive-form_index_html.mjs').then(m => m.default)},
    'add-employee/index.html': {size: 18586, hash: '0e1e9469311a0ad54031731a64059abcb09e68c3b3a904cea4d5919ba6cd86f1', text: () => import('./assets-chunks/add-employee_index_html.mjs').then(m => m.default)},
    'ngtemplate/index.html': {size: 19058, hash: 'da556c7a7302dfe37a2f9bfd52bf82819e22d597f41b57f241148fa56f7f6566', text: () => import('./assets-chunks/ngtemplate_index_html.mjs').then(m => m.default)},
    'ngcontainer/index.html': {size: 18717, hash: 'dd8b4018dfc01d3c8d0431dcc64bc9a30cb1a9eeadb289bb4e8a5886b2de9238', text: () => import('./assets-chunks/ngcontainer_index_html.mjs').then(m => m.default)},
    'view/index.html': {size: 18819, hash: '5da94affca384512243028d41420a3b847a1bd4f1273e6a8aa3eed91d417a766', text: () => import('./assets-chunks/view_index_html.mjs').then(m => m.default)},
    'materail/index.html': {size: 162519, hash: 'fc716262a35090d6df31c978164425a6c2b472a5f5a643db19815186112e7125', text: () => import('./assets-chunks/materail_index_html.mjs').then(m => m.default)},
    'for/index.html': {size: 18543, hash: 'bf34418ee3a35a4c8b7ec4767c01a22712710de634077507f1f111a814614497', text: () => import('./assets-chunks/for_index_html.mjs').then(m => m.default)},
    'http-client/index.html': {size: 25599, hash: '874c30a49afda1e3d8c3bb360de1c4750973710b8d74ab43c8ba7c50275b85ed', text: () => import('./assets-chunks/http-client_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
