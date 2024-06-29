/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
    /* config options here */
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...nextConfig,
    ...withVideos(),
};