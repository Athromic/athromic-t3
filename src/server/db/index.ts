const { config } = require('dotenv');
const { drizzle } = require('drizzle-orm/libsql');
const { createClient } = require('@libsql/client');

config({ path: '.env' });

try {
  const client = createClient({
    url: process.env.TURSO_CONNECTION_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  module.exports = { db: drizzle(client) };
} catch (error) {
  console.error('Error creating client or initializing database:', error);
}
