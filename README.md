# kalispell-software-crafters.github.io

This repo is for the [Kalispell Software Crafters](https://www.meetup.com/Kalispell-Software-Crafters/?_cookie-check=sxpVAdBIg_9IbdIE) official site. 

Check out the web page here: https://kalispell-software-crafters.github.io/index.html

This gives our Meetup group a small project that we can work on together as we have time. It's also a great place for beginners to learn the basics of branching and pull requests during events like Hacktoberfest.

## Contents

- [Contributing](#contributing)
- [Branching and Merging Strategy](#branching-and-merging-strategy)
- [Deployment](#deployment)


## Contributing

If you would like to contribute to this repo take a look at the [Issues](https://github.com/kalispell-software-crafters/kalispell-software-crafters.github.io/issues) tab and assign yourself an issue to complete.

## Branching and Merging Strategy

When updating the repo create a feature branch off of `develop`. When complete submit a pull request to merge the changes back into `develop`. Squash merge these changes when completing the PR.

When we merge `develop` to `production` do NOT squash merge. Instead complete a regular merge.

## Deployment

We host our site on GitHub Pages and use the GitHub Pages Deploy Action to deploy. Once we complete a merge from `develop` to the `production` branch the site will be deployed automatically.

- GitHub Pages: https://pages.github.com/
- GitHub Pages Deploy Action: https://github.com/marketplace/actions/deploy-to-github-pages
