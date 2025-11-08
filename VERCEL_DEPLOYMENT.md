# Vercel Deployment Guide

This repository is configured for deployment on Vercel.

## Framework Preset

**Framework**: Next.js  
**Version**: 16.0.1

## Vercel Deployment Settings

When setting up your project on Vercel:

1. **Import your GitHub repository** to Vercel
2. **Framework Preset**: Select **"Next.js"** (should auto-detect)
3. **Root Directory**: Set to `website`
4. **Build Command**: `yarn build` (or leave default - Vercel will auto-detect)
5. **Output Directory**: `.next` (or leave default - Vercel will auto-detect)
6. **Install Command**: `yarn install` (or leave default)

## Configuration Files

- `vercel.json` - Vercel configuration (root directory)
- `website/next.config.mjs` - Next.js configuration
- `website/package.json` - Dependencies and scripts

## Automatic Configuration

Vercel will automatically:
- Detect Next.js framework
- Set up build and output directories
- Configure environment variables
- Handle serverless functions
- Enable image optimization
- Set up edge functions if needed

## Manual Configuration (if needed)

If Vercel doesn't auto-detect, use these settings:

- **Framework Preset**: Next.js
- **Root Directory**: `website`
- **Build Command**: `yarn build`
- **Output Directory**: `.next`
- **Install Command**: `yarn install`
- **Node Version**: 20.x

## Environment Variables

No special environment variables needed for basic deployment. Vercel handles Next.js runtime configuration automatically.

## Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js and configure everything
3. Deploy - it should work out of the box!

## Advantages of Vercel for Next.js

- Native Next.js support (made by the same team)
- Zero configuration needed
- Automatic optimizations
- Edge functions support
- Image optimization built-in
- Fast global CDN

