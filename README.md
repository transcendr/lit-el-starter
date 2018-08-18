# Lit EL Starter

A research project starting from the most basic implementation building a full production-ready PWA with production build and dev environment, Typescript and more.

---

## Get Started

Clone the repo and cd into the project root directory. Choose a branch (from the list below) and checkout into the desired branch. To start the application in the branch's state, open a terminal in split panel (or two separate terminals if you're a loser!) and then run one of the two following commands in each of them:

`npm run serve`

`npm run proxy`

**serve** creates spins up a server using polymer CLI with flag `module-resolution` set to node in order to properly handle imported module paths, and **proxy** spins up a browser-sync instance to at port 3000, proxying the polymer server running on port 4444 for live dev reload. Edit package.json to modify the ports used.

---

## Branches

To use the following list, run `git checkout <branch-name>`

- **feature/test-component** - Implements the minimal example from the [Polymer docs](https://github.com/Polymer/lit-element#minimal-example)
