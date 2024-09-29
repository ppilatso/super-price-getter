module.exports = {
  mongodb: {
    server: 'mongo',
    port: 27017,
    admin: false,
    auth: [
    ],
  },
  site: {
    baseUrl: '/',
    cookieKeyName: 'mongo-express',
    cookieSecret: 'someSecret',
  },
  options: {
    documentsPerPage: 10,
    editorTheme: 'default',
    cmdType: 'eval',
    readOnly: false,
    collapsibleJSON: true,
  },
};
