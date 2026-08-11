<div align="center">

```text

          █████        █████         ██████          ██████████████      █████████████      ██████████████          
          ██████      ██████        ████████         ███████████████     ███████████████    ██████████████          
          ████████  ████████       ██████████        █████     ██████    ████      █████    █████                   
          ██████████████████       █████ █████       ████████████████    ████       ████    ████████████            
          ██████████████████      █████  ██████      ███████████████     ████       ████    ████████████            
          █████ ██████ █████     ███████████████     █████████████       ████      █████    █████                   
          █████  ████  █████    █████████████████    █████   ██████      ███████████████    ██████████████          
          █████        █████   ██████       ██████   █████     ██████    █████████████      ██████████████



                                █████                                            █████                              
                      █████████ █████  █████████                      ██████████ █████  █████████                   
                     ████████████████████████████                     ███████████████████████████                   
                            ██  █████  ███           ████████████            ██  █████  ██                          
                               ████████            ████████████████            ████████                             
                               ███████████████    ██████████████████     ██████████████                             
                               ████████████████████████████████████████████████████████                             
                               ██████ ██████████████████████████████████████████ ██████                             
                                █████ ██████████████████████████████████████████ ██████                             
                                            ██████████████████████████████                                          
                                           █████████ ██████████████████████                                         
                                         █████████    ███████████   █████████                                       
                                        ████████        ██  ██        █████████                                     
                                       ████ ███       ████  ████       ███  ███                                     
                                       ████ ███      ███      ███       ██  ███                                     
                                       ████ ██      ███        ███      ██  ███                                     
                                        ██     ████████████████████████     ██                                      
                                               ████████████████████████                                             
                                               ███████████  ███████████                                             
                                               ███████████  ███████████                                             
                                               ████████        ████████                                             
                                               ███████████  ███████████                                             
                                               ███████████  ███████████                                             
                                               ████████████████████████                                             
                                               ████████████████████████

```


# Response Starts Before Arrival.

**Autonomous first-response systems — in development.**

[![Website](https://img.shields.io/badge/website-mardeinc.com-0b1f33?style=for-the-badge)](https://mardeinc.com)
[![Deploy MARDE to GitHub Pages](https://github.com/Nandish-GH/marde/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Nandish-GH/marde/actions/workflows/deploy-pages.yml)
![Next.js](https://img.shields.io/badge/Next.js-static_export-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-app-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/hosted_on-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

</div>

<div align="center">

### Building toward an earlier first response.

MARDE is developing autonomous first-response systems intended to help shorten the gap between an emergency and the arrival of professional responders.

[Website](https://mardeinc.com) · [Technology](https://mardeinc.com/technology/) · [Mission](https://mardeinc.com/mission/) · [Team](https://mardeinc.com/team/) · [Support](https://mardeinc.com/support/)

</div>

---

## 01 / About MARDE

MARDE is exploring complementary aerial and ground systems for emergency-response use.

- **MARDE Air** — an autonomous aerial first-response concept being designed to help bring critical equipment toward an emergency scene.
- **MARDE Ground** — a modular autonomous ground-response concept designed around adaptable payload modules.

> [!IMPORTANT]
> MARDE is currently in **design and development**. MARDE Air and MARDE Ground are not finished, tested, or deployed emergency-response products.

The goal is to complement professional emergency response — not replace EMS, clinicians, or established emergency systems.

---

## 02 / Website

| Route | Purpose |
|---|---|
| [`/`](https://mardeinc.com/) | Home |
| [`/technology/`](https://mardeinc.com/technology/) | MARDE Air, MARDE Ground, roadmap, and regulatory context |
| [`/team/`](https://mardeinc.com/team/) | People behind MARDE |
| [`/mission/`](https://mardeinc.com/mission/) | Why MARDE is being developed |
| [`/support/`](https://mardeinc.com/support/) | Donations, contact, and updates |
| [`/faq/`](https://mardeinc.com/faq/) | Current-stage questions and answers |
| [`/privacy/`](https://mardeinc.com/privacy/) | Privacy policy |

The site also includes a custom `404.html`, static `robots.txt`, static `sitemap.xml`, and a `noindex` thank-you route for successful form submissions.

---

## 03 / Stack

```text
Next.js App Router
        ↓
React + TypeScript
        ↓
Static export (`out/`)
        ↓
GitHub Actions
        ↓
GitHub Pages
        ↓
Cloudflare DNS
        ↓
mardeinc.com
```

**Frontend**
- Next.js App Router
- React
- TypeScript
- Tailwind CSS + MARDE's custom CSS design system

**Services**
- Formspree — contact and update forms
- Stripe — external donation processing
- GitHub Actions — production build and deployment
- GitHub Pages — static hosting
- Cloudflare — DNS and domain management

No SSR, application API routes, or production Node server are required.

---

## 04 / Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/Nandish-GH/marde.git
cd marde
npm ci
```

Start the development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Quality checks:

```bash
npm run lint
npx tsc --noEmit
```

---

## 05 / Static Export

The project is intentionally configured for GitHub Pages:

```ts
output: "export"
```

A production build generates the deployable website in:

```text
out/
```

The GitHub Pages workflow uploads that directory as the Pages artifact.

---

## 06 / Deployment

Pushes to `main` trigger:

```text
.github/workflows/deploy-pages.yml
```

Deployment flow:

```text
main
  └─ GitHub Actions
       ├─ Node.js 22
       ├─ npm ci
       ├─ npm run build
       ├─ upload ./out
       └─ GitHub Pages
              ↓
       https://mardeinc.com
```

---

## 07 / Forms & Support

MARDE's website forms use Formspree's React integration.

Successful submissions navigate client-side to:

```text
/thank-you/
```

Donations are processed externally through Stripe. Payment-card data is not processed by this repository or by GitHub Pages.

---

## 08 / Search & Discovery

The production site includes:

- `robots.txt`
- `sitemap.xml`
- canonical URLs
- page-specific metadata
- Open Graph metadata
- social-sharing metadata
- Organization structured data
- custom 404 handling

Sitemap:

**https://mardeinc.com/sitemap.xml**

---

## 09 / Project Status

MARDE's public website deliberately distinguishes **future goals** from **current capabilities**.

Development is ongoing. As the engineering work progresses, future public updates may include:

- CAD renders
- design iterations
- engineering visuals
- development milestones
- prototype imagery when appropriate
- verified testing progress

Sensitive or proprietary engineering details may remain private.

---

## 10 / Contact

<div align="center">

**General** · [hello@mardeinc.com](mailto:hello@mardeinc.com)  
**Contact** · [contact@mardeinc.com](mailto:contact@mardeinc.com)  
**Team** · [team@mardeinc.com](mailto:team@mardeinc.com)  

[Instagram](https://instagram.com/marde.inc) · [Website](https://mardeinc.com)

</div>

---

<div align="center">

### MARDE

**Response Starts Before Arrival.**

<sub>Built as a static Next.js site and deployed through GitHub Pages.</sub>

</div>
