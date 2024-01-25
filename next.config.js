/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.africa-newsroom.com',
            port: '1',
            pathname: 'https://www.africa-newsroom.com/files/large/be9bb20d039eef4',
          },
        ],
      },
}
