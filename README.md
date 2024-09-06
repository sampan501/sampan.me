# sampan.me

Source code for [sampan.me](https://sampan.me), my personal website, built with [Eleventy](https://www.11ty.dev/).

## Initial setup

- Make sure [node is installed locally via nvm](https://www.tempertemper.net/blog/using-nvm-on-macos)
- Run `nvm use` in the project root directory, to ensure the correct npm version is running
- Run `npm install` (or `npm i` if you're feeling flashy) in the project root to install the npm packages

## Development environment

To work on the site locally you need to do the following:

- Run `npm start` to generate your site and its styling
- Go to http://localhost:3000/ in your browser

Any changes you make will automatically appear in your browser. Note: any configuration changes (for example, changes to the .eleventy.js file) will require you to stop the process (`⌃` + `c`) and start it again (`npm start`).

When you're finished, `⌃` + `c` stops your dev environment running.

## Site build

- Run `npm run build` to build the site out into the /dist/ directory. This doesn't run a local development server or watch the /src/ directory for any SCSS or Eleventy changes
- `npm run staging` does a very similar thing to `npm run build`, the only difference being it overwrites the robots.txt file so that search engines won't index the site.

## Updating dependencies

Do this with caution.

- Run `npm update` in the project root

### HTML

Your site's pages live in `/src/site/`. There's an index.html file in there that you'll probably edit with the contents of your homepage. There's also an about.html page that is linked to from index.html; you'll probably want to delete this, but it's useful as an example.

Each page starts with <i>front matter</i> – that's the stuff between the two `---` bits at the very start of the document. Front matter is written in YAML, which is easy to read and easy to write: a key (e.g. `title`), a colon (`:`) and a value (`Hello world`).

Every page needs a `title` and a `permalink` set in front matter.

## License

This is my personal website. I use a lot of code fragments that smarter people than me have come up with, so it's only right to release my code open source as well. You're free to re-use **parts of this codebase** in your own site. Just **don't copy the entire thing**, replace the content and publish it. You know - be nice about it.

## Acknowledgements

The content and design for this website was inspired by a number of people:

- [tempertemper.net](https://www.tempertemper.net/)
- [jonbarron.info](https://jonbarron.info/)
- [stefanzweifel.dev/](https://stefanzweifel.dev/)
- [bdpedigo.github.io](https://bdpedigo.github.io/)
- [neurodata.io/about/jovo/](https://neurodata.io/about/jovo/)

and the following tools/packages:

- [11ty](https://www.11ty.dev/)
- [Cloudflare](https://www.cloudflare.com/)
- [Simple Icons](https://simpleicons.org/)
- [twemoji](https://github.com/twitter/twemoji)
