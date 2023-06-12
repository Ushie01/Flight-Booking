/** @type {import('next').NextConfig} */
// import { NextConfig } from 'next';

module.exports = {
  reactStrictMode: true,
  env: {
    AIRPORTS_ACCESS_KEY: process.env.AIRPORTS_ACCESS_KEY,
    // Add more environment variables here if needed
  },
};


