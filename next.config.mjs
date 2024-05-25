/** @type {import('next').NextConfig} */
const nextConfig = {
	  reactStrictMode: true,
  async redirects() {
	return [
	  {
		source: '/',
		destination: '/dashboard',
		permanent: true,
		basePath: false
	  },
	];
  },
};

export default nextConfig;
