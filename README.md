# ScamShield — Scam Awareness Toolkit

A free, responsive educational website that helps people recognize common online scams, practice spotting phishing, check suspicious messages and websites, and take practical steps after a suspected scam.

**Built with:** HTML, CSS, and vanilla JavaScript. No framework, package installation, backend, database, or API key is required.

## Features

- Responsive layout for mobile, tablet, and desktop.
- Common scam warning signs.
- Fictional suspicious-message examples with explanations.
- Five-question interactive phishing and scam-awareness quiz with feedback and score.
- Interactive website/payment safety checklist.
- Steps to take after being scammed.
- Mobile navigation and native share support where available.
- Accessibility basics: semantic landmarks, keyboard focus styles, skip link, and reduced-motion support.
- No account, tracking code, or form that sends personal information to a server.

## Project structure

```text
scam-awareness-toolkit/
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE
```

## Run it locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

Optional: use Visual Studio Code with the Live Server extension to preview changes while editing. The site does not require a build step.

## Publish with GitHub Pages

1. Sign in to [GitHub](https://github.com/).
2. Select **New repository**.
3. Name it `scam-awareness-toolkit`.
4. Choose **Public** if you want anyone to view it.
5. Create the repository.
6. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and `LICENSE` to the repository root. You can use **Add file → Upload files**, or push them using Git.
7. Open the repository's **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**.
9. Choose the `main` branch and `/ (root)` folder, then save.
10. Wait for GitHub Pages to finish deploying. Your website will normally be available at:

   `https://YOUR-GITHUB-USERNAME.github.io/scam-awareness-toolkit/`

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. GitHub will show the published address in **Settings → Pages**.

### Optional Git command-line publishing

Run these commands from inside the project folder after creating an empty GitHub repository. Replace the URL with your own repository URL.

```bash
git init
git add .
git commit -m "Build ScamShield scam awareness toolkit"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/scam-awareness-toolkit.git
git push -u origin main
```

If Git is not installed, use GitHub's browser upload flow instead.

## Customize it

- Edit page content in `index.html`.
- Change colors, spacing, and responsive layout in `styles.css`.
- Update quiz questions and behavior in `script.js`.
- Keep examples fictional, avoid including real victims' private data, and verify any local reporting links before adding them.

## Important safety notes

This project is educational. It does not automatically scan a website, determine whether a sender is genuine, report crimes, or recover funds. A warning sign is not definitive proof of fraud, and the absence of warning signs does not guarantee safety.

If someone suspects fraud, they should contact their bank or payment provider using an official channel as soon as possible, preserve evidence, secure affected accounts, and report through appropriate official services. Never pay a person who guarantees recovery of lost money.

## Privacy

The current project runs in the visitor's browser. It does not send quiz answers or checklist selections to a server. The share feature may open the visitor's device share sheet, or copy the current page URL when browser support permits.

## Contributing

Contributions are welcome. Please:
1. Keep advice clear, practical, and non-judgmental.
2. Avoid unverified claims or guaranteed scam detection.
3. Do not add tracking or collect personal data without transparent disclosure.
4. Test mobile layout and keyboard accessibility.

## License

Released under the MIT License. See [`LICENSE`](LICENSE).
