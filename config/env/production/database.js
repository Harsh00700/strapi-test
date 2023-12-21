
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi-demo'),
        user: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'AVNS_jYJu8Kc9yaS6aqzo4J9'),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
        },
      },
      debug: false,
    },
  });