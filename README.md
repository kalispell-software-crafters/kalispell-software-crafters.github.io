# kalispell-software-crafters.github.io

This repo is for the [Kalispell Software Crafters](https://www.meetup.com/Kalispell-Software-Crafters/?_cookie-check=sxpVAdBIg_9IbdIE) official site. 

Check out the web page here: https://kalispell-software-crafters.github.io/index.html

This gives our Meetup group a small project that we can work on together as we have time. It's also a great place for beginners to learn the basics of branching and pull requests during events like Hacktoberfest.

## Contents

- [Installation](#installation)
- [Contributing](#contributing)
- [Branching and Merging Strategy](#branching-and-merging-strategy)
- [Deployment](#deployment)


## Installation

Be sure to install Node and npm. Check that you have those with the following commands. Otherwise you can download them following the linked [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-node-js-and-npm).

- `node -v`
- `npm -v`

From the project directory run `npm i`. This will stall the project dependencies.

You can then build the project with `npm run build`. You can then start the project with `npm run start`.

## Contributing

If you would like to contribute to this repo take a look at the [Issues](https://github.com/kalispell-software-crafters/kalispell-software-crafters.github.io/issues) tab and assign yourself an issue to complete.

You can fork the repo into your own account, make the updates, and submit a pull request to merge your fork back to our `develop` branch.

[Forking documentation](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

## Branching and Merging Strategy

When updating the repo directly create a feature branch off of `develop`. When complete submit a pull request to merge the changes back into `develop`. Squash merge these changes when completing the PR.

When we merge `develop` to `production` do NOT squash merge. Instead complete a regular merge.

## Deployment

We host our site on GitHub Pages and use the GitHub Pages Deploy Action to deploy. Once we complete a merge from `develop` to the `production` branch the site will be deployed automatically.

- GitHub Pages: https://pages.github.com/
- GitHub Pages Deploy Action: https://github.com/marketplace/actions/deploy-to-github-pages
