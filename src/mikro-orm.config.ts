import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Post } from "./entities/Post";

if (!__prod__) require("dotenv").config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: process.env.DB_DATABASE,
  type: "postgresql",
  debug: !__prod__,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
} as Parameters<typeof MikroORM.init>[0];
