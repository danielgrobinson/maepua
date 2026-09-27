// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPage = repository?.endsWith('.github.io');
const owner = process.env.GITHUB_REPOSITORY_OWNER;

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321'),
	base: process.env.PUBLIC_BASE_PATH ?? (repository && !isUserPage ? `/${repository}` : undefined),
	trailingSlash: 'always',
});
