# Static website template (Eleventy, tailwindcss, postcss)

A simple static website starter, compiled by [Eleventy](https://www.11ty.dev/) with [nunjucks](https://mozilla.github.io/nunjucks/) and with [Tailwind CSS](https://tailwindcss.com) (in just-in-time mode) as a PostCSS plugin with [autoprefixer](https://github.com/postcss/autoprefixer).

## Getting started

1. Make sure you have [Node.js](https://nodejs.org/en/) installed.

2. You can either clone the repo, fork it, [download](/archive/refs/heads/main.zip) it or [use it as a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
3. 
    Then, in the root folder, run:

    ```shell
    npm install
    ```

    which will install all the dependencies.

4. To build the site, run:

    ```shell
    npm run dev
    ```

5. Go to <http://localhost:8080/> (or whatever Browsersync gives you as the local access URL). Hopefully you should now see a functioning website.

6. Work your magic! build something cool, then...

7. when you're ready to deploy somewhere, run:

    ```shell
    npm run deploy
    ```

    which will minify everything.

8. Optionally, deploy to [Netlify](https://www.netlify.com/) - the config file is included in this project

PS: There's also `npm run purge` to remove all the build files.
