# CareerBuddy

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-in%20development-orange.svg)
![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)

CareerBuddy is an AI-powered career intelligence web app that helps users discover job opportunities, estimate AI disruption risk, and get guided career advice.

## Quick Start

### Clone repository

```bash
git clone https://github.com/ali-ezz/CareerBuddy.git
cd CareerBuddy
```

### Install dependencies

```bash
npm install
```

### Configure environment

Create a `.env` file in the repo root with your API key(s):

```env
GROK_API_KEY=your-groq-api-key
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown by the development server.

### Deploy

This project is designed to run on Vercel with serverless functions in `api/`.

```bash
npx vercel login
npx vercel
```

## Features

- AI-powered job risk scoring for AI disruption
- Personalized career guidance and insights
- Job search filters for title, skills, location, and remote work
- Trending job discovery and role relevance scoring
- Responsive, accessible vanilla HTML/CSS/JS frontend

## Project Structure

```text
/
├── api/
│   ├── grok.js         # Groq AI risk analysis API route
│   └── jobFetcher.js   # Job data fetching API route
├── .github/           # GitHub metadata and issue templates
├── app.js             # Frontend application logic
├── index.html         # Main page
├── script.js          # Client-side interaction logic
├── style.css          # Application styling
├── package.json       # Dependencies and scripts
├── LICENSE            # Project license
├── CONTRIBUTING.md    # Contribution guidelines
├── CODE_OF_CONDUCT.md # Expected contributor behavior
├── SECURITY.md        # Vulnerability reporting guidance
└── README.md          # Project overview and setup
```

## Usage

1. Open the app in the browser.
2. Browse job listings and view AI disruption risk scores.
3. Ask the career assistant for job, skill, and resume guidance.

## Contribution

Contributions are welcome. See `CONTRIBUTING.md` for issue reporting, pull request guidance, and branch naming.

## License

This project is licensed under the MIT License. See `LICENSE`.
