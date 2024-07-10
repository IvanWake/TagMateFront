/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/auth',
                destination: '/auth/welcome',
                permanent: true,
            },
        ]
    },

};

export default nextConfig;