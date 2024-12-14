
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/myabgularapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/myabgularapp"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/login"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/add-employee"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/emp-list"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/databinding"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/struct"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/if-else"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/for"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/switch-case"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/pipe"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/template-form"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/reactive-form"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/http-client"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/ngtemplate"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/ngcontainer"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/view"
  },
  {
    "renderMode": 2,
    "route": "/myabgularapp/materail"
  }
],
  assets: {
    'index.csr.html': {size: 14614, hash: 'dbc488a9483b0b69a93e4e99d4834c6a5921ef2d28a7f6da1f504448a6c8c85c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8188, hash: '6754c56d622aa0dfcc677d876e9111b856529ade2a3a54da8ee41601f9e6cd77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 17999, hash: 'b997ac420fcc147038cd657c0682e6ad6cd1f0cc54091ed07c7f46a2fa837a5d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'add-employee/index.html': {size: 18729, hash: '4f93972e510a29cf069164cc29d84c9fe7231dc8e15f2c57bba08e3a1a371be3', text: () => import('./assets-chunks/add-employee_index_html.mjs').then(m => m.default)},
    'emp-list/index.html': {size: 18715, hash: '531032af1546d29af013bac2047d6767c8d6ef915317ad10aa81160515aa2b5d', text: () => import('./assets-chunks/emp-list_index_html.mjs').then(m => m.default)},
    'index.html': {size: 17999, hash: 'b997ac420fcc147038cd657c0682e6ad6cd1f0cc54091ed07c7f46a2fa837a5d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'databinding/index.html': {size: 17999, hash: 'b997ac420fcc147038cd657c0682e6ad6cd1f0cc54091ed07c7f46a2fa837a5d', text: () => import('./assets-chunks/databinding_index_html.mjs').then(m => m.default)},
    'if-else/index.html': {size: 19268, hash: '88d796a96ba47ffc1f74d2cdd1ffe92065737a95e6642ade4e14dcc9ca96cd6d', text: () => import('./assets-chunks/if-else_index_html.mjs').then(m => m.default)},
    'for/index.html': {size: 18686, hash: '72526b8ba299a831059ed077ead6929973df48874703db046ff2c2d323fd8c8c', text: () => import('./assets-chunks/for_index_html.mjs').then(m => m.default)},
    'struct/index.html': {size: 21954, hash: 'd262acc76492eadfb9ee2af5ba743b91c73bb635756c6d58d3ccc5efaa5b2158', text: () => import('./assets-chunks/struct_index_html.mjs').then(m => m.default)},
    'pipe/index.html': {size: 18810, hash: '7d48c30272d2a7050f2a4d66220dbf34e159183a934ebc737094433e39ae5ab0', text: () => import('./assets-chunks/pipe_index_html.mjs').then(m => m.default)},
    'switch-case/index.html': {size: 18695, hash: 'ea8b8d76803d988e5129793ba3f4f2f7e7e7b060fe39f35ea414507f98d9afea', text: () => import('./assets-chunks/switch-case_index_html.mjs').then(m => m.default)},
    'template-form/index.html': {size: 22501, hash: '66934314ab219f48d5b1e62ee827cdca4faac5f80f425d6eb7a9698a24e6a289', text: () => import('./assets-chunks/template-form_index_html.mjs').then(m => m.default)},
    'reactive-form/index.html': {size: 22816, hash: 'f649580d30fcf1fb9a07f13278916984ea3af502d5c1579b4ac1daa5b83b2742', text: () => import('./assets-chunks/reactive-form_index_html.mjs').then(m => m.default)},
    'ngtemplate/index.html': {size: 19203, hash: '6844d9fcaa9c8cf4642a9c91eca26cece0eaaae01687c56c7a1b8b6468ff2098', text: () => import('./assets-chunks/ngtemplate_index_html.mjs').then(m => m.default)},
    'ngcontainer/index.html': {size: 18860, hash: 'caf58787d5d8ba6568275f694abb9031a138500a4c81f9e7ce8c5702b12a34d8', text: () => import('./assets-chunks/ngcontainer_index_html.mjs').then(m => m.default)},
    'view/index.html': {size: 18962, hash: '07836375dd313f8dbae156a722e583417bf5bcebf8c13653c5cb1e21951a62aa', text: () => import('./assets-chunks/view_index_html.mjs').then(m => m.default)},
    'materail/index.html': {size: 162665, hash: '7d92757fd555e8a09b12a785b77ce4b46b5169fa173045848e2d2545e6e8df3a', text: () => import('./assets-chunks/materail_index_html.mjs').then(m => m.default)},
    'http-client/index.html': {size: 25742, hash: 'ff96d536476ddd6401292037676d04900577378c805d8268bff0a3dd87f70be4', text: () => import('./assets-chunks/http-client_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
