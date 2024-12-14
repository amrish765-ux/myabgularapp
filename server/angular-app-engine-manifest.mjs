
export default {
  basePath: '/myabgularapp/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
