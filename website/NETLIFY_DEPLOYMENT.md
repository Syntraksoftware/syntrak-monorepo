# Netlify Deployment Guide

This repository is configured for deployment on Netlify.

## Netlify Build Settings

When setting up your site on Netlify, use these settings:

- **Base directory**: `website`
- **Build command**: `yarn build` (or leave empty - netlify.toml handles it)
- **Publish directory**: Leave empty (the Netlify Next.js plugin handles this automatically)
- **Functions directory**: `netlify/functions` (default)

## Required Configuration

1. **Netlify Next.js Plugin**: Already installed (`@netlify/plugin-nextjs`)
2. **Node Version**: 20 (specified in netlify.toml and .nvmrc)
3. **Build Tool**: Yarn (version 1.22.22)

## Files Included

- `netlify.toml` - Netlify configuration file
- `.nvmrc` - Node version specification
- `next.config.mjs` - Next.js configuration optimized for Netlify
- `package.json` - Includes all necessary dependencies

## Environment Variables

The following environment variables are set in netlify.toml:
- `NODE_VERSION=20`
- `NEXT_TELEMETRY_DISABLED=1`
- `NEXT_PUBLIC_VERCEL=0`

## Deployment

1. Connect your GitHub repository to Netlify
2. Set the base directory to `website` in Netlify settings
3. Deploy - Netlify will automatically detect and use the netlify.toml configuration

## Troubleshooting

If you encounter "Cannot read properties of undefined (reading 'get')" error:
- Ensure `@netlify/plugin-nextjs` is installed (already included)
- Verify base directory is set to `website`
- Check that publish directory is left empty

