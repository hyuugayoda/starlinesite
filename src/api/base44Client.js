// Standalone stub — no Base44 backend required
export const base44 = {
  auth: {
    me: () => Promise.reject({ status: 401, message: 'No auth backend' }),
    logout: () => {},
    redirectToLogin: () => {},
  },
  appLogs: {
    logUserInApp: () => Promise.resolve(),
  },
};
