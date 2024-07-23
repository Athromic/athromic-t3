import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "vercel.com", "images.unsplash.com", "assets.aceternity.com", "api.microlink.io","pbs.twimg.com","ucarecdn.com"],
  },
}

export default withPayload(nextConfig)