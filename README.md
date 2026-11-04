# .Analyze website

A promotional website for .Analyze, which provides investigative support to the Emergency Response: Liberty County (ER:LC) community. This project uses the Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev       # Start the local development server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript without emitting files
npm run build     # Create the production build
npm run start     # Serve the production build locally
```

To check the production build locally:

```bash
npm run build
npm run start
```

## Routes

- `/` — Home
- `/about` — About .Analyze
- `/services` — Investigative services
- `/methodology` — Review methodology
- `/team` — Leadership and team roles
- `/partnerships` — Partnership opportunities
- `/contact` — Inquiry information

## Environment variables

The site currently does not require environment variables, API keys, or external credentials. Do not commit `.env` files or secrets. If environment variables are added later, configure them in Vercel's project settings and keep local values in an ignored `.env.local` file.

## Deploy to Vercel through GitHub

1. Create a GitHub repository for this project. If GitHub offers to add a README, `.gitignore`, or license, leave those unchecked because this project already has its own files.
2. From this project directory, connect the repository and push the current branch. For a new GitHub repository, GitHub provides the repository URL; use it in place of `<github-repository-url>` below:

   ```bash
   git add .
   git commit -m "Prepare .Analyze website for deployment"
   git remote add origin <github-repository-url>
   git push -u origin main
   ```

   If an `origin` remote already exists, update it with `git remote set-url origin <github-repository-url>` instead of adding it again. Do not put credentials in the remote URL.
3. Sign in to Vercel, choose **Add New → Project**, and import the GitHub repository. Authorize Vercel to access the repository when prompted.
4. Keep the detected framework as **Next.js** and the project root as the repository root. The default build command (`npm run build`) and output settings are appropriate; no `vercel.json` or environment variables are required.
5. Choose **Deploy**. Vercel will build the project and provide a deployment URL. Subsequent pushes to the connected GitHub branch trigger new deployments; pull requests can receive preview deployments.
6. When .Analyze has a production domain, add it in the Vercel project's **Settings → Domains** and update DNS using the values Vercel provides. Do not guess DNS records.

No paid service, API, or credential is required by the application. Vercel and GitHub account and plan features are controlled by their respective providers.
