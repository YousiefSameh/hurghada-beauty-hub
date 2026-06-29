import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'src/prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL') || 'postgresql://postgres:postgres@localhost:5432/beauty_hub_db?schema=public',
  },
});
