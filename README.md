# Headless CMS JAMstack

CSS | Front-end | Headless CMS | Hosting | API
---|---|---|---|---|
HeadlessUI + Tailwind CSS | Gatsby 4 | DatoCMS | Netlify | GraphQL

## Sitemap
    ├── Landing Page
    │   │
    │   ├── The Firm
    │   │   │
    │   │   └── Attorneys
    │   │   │   │ 
    │   │   │   └── Tempo
    │   │   │   └── Don Chezina
    │   │   │   └── DJ Playero
    │   │   │   └── DJ Negro
    │   │   │   └── Ivy Queen
    │   │   │
    │   │   └── Testimonial
    │   │
    │   ├── Practice Areas
    │   │   │
    │   │   └── Personal Injury
    │   │   └── Medical Malpractice
    │   │   └── Spinal Cord & Brain Injury
    │   │  
    │   └── Case Results
    │   │   │
    │   │   └── $17,000,000
    │   │   └── $3,900,000
    │   │   └── $2,250,000
    │   │   └── $1,610,000
    │   │   └── $1,300,000
    │   │
    │   ├── FAQs
    │   │
    │   ├── Contact
    │   │   │
    │   │   └── Consultation
    │   │
    │   └── Blog
    │       │
    │       └── Tampa Preventing Deadly Skylight Falls
    │ 
    └── 404 Pages
    │  
    └── Components
        │
        └── TopNav
        └── Footer

## Quick start

1.  **First, install the dependencies of this project:**

    Use the yarn to install all the Gatsby dependencies.

    ```shell
    yarn install
    ```

2.  **Add an `.env` file containing the read-only API token of your DatoCMS site:**

    Keep the file hidden to the cloud.
    ```shell
    echo 'DATO_API_TOKEN=abc123' >> .env
    ```

3.  **Then, to run this website in development mode (with live-reload):**

    Start it up.
    ```shell
    yarn develop
    ```

4.  **Your site is now running at:**

    http://localhost:8000!


5.  **To build the final, production ready static website:**

    ```shell
    yarn build
    ```
