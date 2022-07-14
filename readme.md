<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Reddit Clone</h3>

  <p align="center">
    Exploring full stack development and operations
    <br />
    <a href="hhttps://github.com/Bot-Casey/noddit/readme.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/Bot-Casey/noddit/issues">Report Bug</a>
    ·
    <a href="https://github.com/Bot-Casey/noddit/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

To understand a microservice architecutre, I have started to create a forum app in the simular style to that of Reddit. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Vue][Vue.js]][Vue-url]
* [![Express][Express.js]][Express-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Docker][Docker]][Docker-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

<ol>
    <li> Docker, docker-compose: 
        <ul><a href=https://docs.docker.com/get-docker>Installing Docker</a></ul>
        <ul><a href=https://docs.docker.com/compose/install>Installing Docker-compose</a></ul>
    </li>
    <li> Created with Node v18.4.0: 
        <ul><a href=https://nodejs.org/en/download>NodeJS</a></ul>
    </li>
    <li>
        Postgres is a Docker image, no setup required. 
    </li>
    <li>
        pgAdmin is recommended but not required. 
    </li>
</ol>


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Bot-Casey/noddit.git;
   cd ./noddit
   ```
2. Comment out the application in the compose.yml that you would like to work on. Example:
    ```
      posts:
        depends_on:
          - posts-db
        build: 
          context: ./backend/service-posts
          target: dev
        hostname: posts
        ports:
          - '5000:5000'
3. Start the dev env
    ```sh
    docker-compose build;
    docker-compose up;
    ```
4. Install NPM packages
   ```sh
   cd ./noddit/backend/service-posts;
   npm install;
   ```
5. Build and start app you are developing
    ```sh
    npm run start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Finish dev environment
    - [ ] Secrets generator for compose.yml
    - [ ] Figure out PostgreSQL initial setup
- [ ] Finish posts api
- [ ] Create comments api
- [ ] Create votes api
- [ ] Create users api
- [ ] Create frontend
- [ ] Integrate with ODIC providor (Google?)

See the [open issues](https://github.com/Bot-Casey/noddit/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Bot-Casey/noddit?style=for-the-badge
[contributors-url]: https://github.com/Bot-Casey/noddit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Bot-Casey/noddit?style=for-the-badge
[forks-url]: https://github.com/Bot-Casey/noddit/network/members
[stars-shield]: https://img.shields.io/github/stars/Bot-Casey/noddit?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Bot-Casey/noddit/stargazers
[issues-shield]: https://img.shields.io/github/issues/Bot-Casey/noddit?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/caseystadick
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Express.js]: https://img.shields.io/badge/-ExpressJS-grey
[Express-url]: https://expressjs.com/
[TypeScript]: https://img.shields.io/badge/-TypeScript-blue
[TypeScript-url]: https://www.npmjs.com/package/typescript
[PostgreSQL]: https://img.shields.io/badge/-Postgres-darkblue
[PostgreSQL-url]: https://www.postgresql.org/
[Docker]: https://img.shields.io/badge/-Docker-white
[Docker-url]: https://www.docker.com/
