# Baseline Dynamic Session for Google I/O 2025

This repository hosts the code for a dynamic (live coding) session of [Baseline](https://web.dev/baseline) features and tooling to be shown at Google I/O and Google I/O Connect.

## How to start this demo

To start this demo, start by cloning the repo and doing the following:

```bash
git clone git@github.com:malchata/baseline-io-dynamic-session.git
cd baseline-io-dynamic-session
nvm install
nvm use
npm install
npm run dev
```

_**Note:** This demo uses nvm to make using Node in your local environment easier. If you don't wish to use nvm, the demo was developed with Node v22.14.0_

Once the local development server starts, Vite will tell you the URL you can navigate to in order to see it.

## List of Baseline features used in this demo

Baseline categorizes features into three buckets, based on three levels of compatibility across browsers.

### Widely available

Baseline Widely available features are those that have been implemented in all major modern browsers (Chrome, Edge, Safari, and Firefox) **30 or more months ago**.

The Widely available features used in this demo are:

- TODO

### Newly available

Baseline Newly available features are those that have been implemented in all major modern browsers **within the last 30 months**.

The Newly available features used in this demo are:

- TODO

### Limited availability

Limited availability features are those that **have not been implemented** in all major modern browser engines. For example, a feature that has Limited availability may be only available in any combination of the major modern browsers available, but not all of them.

This demo uses some Limited availability features for illustrative purposes, mainly so that tooling used in the demo will complain. They are:

- TODO

_**Note:** These features were all Limited availability at the time of this demo's creation, so this list might not be 1:1 with what tooling reports._
