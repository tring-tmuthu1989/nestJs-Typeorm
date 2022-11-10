export default () => {
  const envPrefix = process.env.NODE_ENV === 'test' ? 'TEST_' : '';
  return {
    host: process.env[`${envPrefix}DB_HOST`],
    username: process.env[`${envPrefix}DB_USERNAME`],
    password: process.env[`${envPrefix}DB_PASSWORD`],
    dbName: process.env[`${envPrefix}DB_NAME`],
    port: process.env[`${envPrefix}DB_PORT`],
    extra: {
      connectionTimeoutMillis: 60000,
      waitForAvailableConnectionTimeoutMillis: 65000,
      idleTimeoutMillis: 300000,
      poolSize: 80,
    }
  };
};
