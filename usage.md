# RRF-SSR-Template Usage Guide

This repository contains a template for React Router with Server-Side Rendering. Follow the instructions below to use
these files in your project.

## Quick Start

To add these files to your current directory, run:

```bash
git clone --depth 1 https://github.com/ElindiOwl/RRF-SSR-Template.git . && rm -rf .git
```

This command:

- Clones the repository into your current directory (note the `.` at the end of the clone command)
- Creates a shallow clone with only the most recent commit (--depth 1)
- Removes the .git directory so you can initialize your own git repository

## Alternative: Clone to a Subdirectory

If you prefer to clone into a subdirectory, use:

```bash
mkdir -p <directory-name> && git clone --depth 1 https://github.com/ElindiOwl/RRF-SSR-Template.git <directory-name> && rm -rf <directory-name>/.git
```

Replace `<directory-name>` with your preferred directory name.

## Next Steps

After cloning:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. For production build:
   ```bash
   npm run build
   ```