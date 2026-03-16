# PetraSpark Website

Factory-direct packaging for CPG brands. Two-page dark mode site with glassmorphism UI.

- `/` — Homepage (manufacturing/savings offer)
- `/design` — Design Services ($4,000 flat rate)

## Deploy to Railway

### Option A: GitHub → Railway (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create petraspark-site --private --push
   ```

2. **Connect to Railway:**
   - Go to [railway.app](https://railway.app) and sign in
   - Click **"New Project"** → **"Deploy from GitHub Repo"**
   - Select your `petraspark-site` repo
   - Railway auto-detects the build config — no setup needed
   - It will run `npm install` → `npm run build` → `serve dist`
   - Click **"Generate Domain"** in Settings → Networking to get your public URL

### Option B: Railway CLI

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

3. **Generate a public domain:**
   ```bash
   railway domain
   ```

## Custom Domain

1. In Railway dashboard → your project → **Settings** → **Networking**
2. Click **"Custom Domain"**
3. Enter your domain (e.g. `petraspark.com`)
4. Add the CNAME record Railway gives you to your DNS provider
5. SSL is automatic

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

## Tech Stack

- React 18 + React Router
- Vite (build)
- Serve (production static server)
- No external UI libraries — all custom CSS
