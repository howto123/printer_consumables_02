/** @type {import('next').NextConfig} */
const nextConfig = {
	// ... rest of the configuration.
	output: 'standalone',
	staticDirs: [{from: '..public', to: '/public'}]
}

module.exports = nextConfig