[![React](https://img.shields.io/badge/-React-555.svg?logo=react&style=flat)](https://reactjs.org/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/takanassyi/react-ts-dev/main?label=main)](https://github.com/takanassyi/react-ts-dev/commits/main)
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/takanassyi/react-ts-dev/feature/material-ui-v4.11.1?label=feature%2Fmaterial-ui-v4.11.1)
](https://github.com/takanassyi/react-ts-dev/commits/feature/material-ui-v4.11.1)
# react-ts-dev

## System Requirements

- Host OS
  - ProductName:    Mac OS X
  - ProductVersion: 10.15.7
  - BuildVersion:   19H1030

- Docker Desktop
  - Version: 3.3.1(63152)
  - Engine: 20.10.5
  - Compose: 1.29.0

- Visual Studio Code (Recommend)
  - Version: 1.55.2
  
## How to build

### (Initial Setup)

```bash
$ docker compose build
$ docker compose run --rm frontend sh -c 'cd frontend && yarn install'
```

### Setup

```bash
$ docker compose up
```
