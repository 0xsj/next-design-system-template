/** @type {import('next').NextConfig} */

import stylexPlugin from "@stylexjs/nextjs-plugin";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  transpilePackages: [],
};

export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
