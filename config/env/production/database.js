
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'strapi-demo-do-user-15423972-0.c.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'defaultdb'),
        user: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'AVNS_jYJu8Kc9yaS6aqzo4J9'),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
        },
      },
      debug: false,
    },
  });