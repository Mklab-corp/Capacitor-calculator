# Capacitor Charge & Time Constant Calculator

A simple, offline‑capable web tool that calculates the **charge (Q)**, **energy (E)**, and **RC time constant (τ)** of a capacitor based on user‑provided capacitance, voltage, and resistance. Built with pure HTML, CSS, and JavaScript – no frameworks, no backend.

## Problem Statement

Students, hobbyists, and electronics engineers often need to quickly compute:
- How much charge a capacitor stores at a given voltage.
- The energy stored in a capacitor.
- The RC time constant, which indicates how fast the capacitor charges/discharges through a resistor.

Instead of switching between multiple calculators or doing manual unit conversions, this single tool provides all three values instantly, with intelligent unit formatting (e.g., 10 µF → 10.0 µF, 0.005 s → 5.00 ms).

## Target Google Keywords

- Primary: **capacitor charge time constant calculator**
- Secondary: capacitor charge calculator, RC time constant calculator, capacitor energy calculator, electronics calculator

These keywords have **low competition** and **high user intent** – people searching for them want exactly this kind of tool. The page is fully optimized with semantic HTML, a descriptive title, meta description, and heading structure to rank well.

## How the Project Works

1. The user enters:
   - Capacitance (with unit: F, mF, µF, nF, pF)
   - Voltage (in volts)
   - Resistance (with unit: Ω, kΩ, MΩ)
2. On every input change, the JavaScript:
   - Converts all values to base units (farads, ohms, volts).
   - Computes:
     - **Charge** Q = C × V (coulombs)
     - **Energy** E = ½ × C × V² (joules)
     - **Time constant** τ = R × C (seconds)
   - Formats the results with appropriate metric prefixes (e.g., 0.001 s → 1.00 ms).
3. Results are displayed instantly, with clear labels and units.

## How to Run Locally

1. Clone this repository or download the ZIP.
2. Ensure you have the following three files in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
4. Start entering values – the results update automatically.

No server or build step required.

## How to Host on GitHub Pages (Step‑by‑Step)

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and sign in.
   - Click the **+** icon in the top right and select **New repository**.
   - Name it, for example, `capacitor-calculator`.
   - Set it to **Public** (GitHub Pages is free for public repos).
   - Do **not** initialize with a README (we already have one).
   - Click **Create repository**.

2. **Upload the files**
   - On the new repository page, click **Add file** → **Upload files**.
   - Drag and drop `index.html`, `style.css`, `script.js`, and `README.md`.
   - In the commit message, type “Initial commit” and click **Commit changes**.

3. **Enable GitHub Pages**
   - Go to the repository **Settings** (tab near the top right).
   - In the left sidebar, click **Pages** (under “Code and automation”).
   - Under **Branch**, select `main` (or `master`) and the folder `/root`.
   - Click **Save**.
   - After a minute or two, refresh the page. You will see a message like:
     > Your site is published at `https://yourusername.github.io/capacitor-calculator/`

4. **Access your live URL**
   - Visit the URL shown above. The calculator is now live and accessible to anyone.

## What Was Learned

- **SEO fundamentals**: How to choose a low‑competition keyword and integrate it naturally into title, meta description, headings, and content.
- **Semantic HTML**: Using `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` improves accessibility and search engine understanding.
- **Pure JavaScript unit conversion**: Handling different metric prefixes (µF, kΩ, etc.) and dynamically formatting results with appropriate units.
- **Responsive design**: Making the layout mobile‑friendly with CSS media queries.
- **GitHub Pages deployment**: A simple, free way to host static sites directly from a repository.

## Future Improvements

- Add a **discharge time** calculator (time to reach a certain percentage of final voltage).
- Include a **capacitor colour code decoder** for through‑hole capacitors.
- Allow **custom units** for voltage (mV, kV) to match more use cases.
- Provide a **graphical representation** of the charging curve.
- Add **dark mode** toggle for better user experience.

---

**Powered by MKLAB Corporation**