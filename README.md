# Setup
* Install nvm and install node version 14 (reference: https://github.com/nvm-sh/nvm#installing-and-updating)
* Install ```ts-node```, via ```npm install -g typescript ts-node```

# Filesystem
This is how the files of the framework are organized.

* ```code_templates``` - Where the code template is stored
* ```artisan.ts``` - Helper bash script to generate code template

# Commands

## Artisan Commands
These are the commands that can help automate the generation of the files of the framework.
* ```ts-node artisan.ts swagger:request <name>``` - Generate a swagger request definition file
* ```ts-node artisan.ts swagger:response <name>``` - Generate a swagger response definition file
* ```ts-node artisan.ts swagger:path <name>``` - Generate a swagger path file

## NPM Commands
These are some base npm commands that you can use on each project, you can add more custom commands through the package.json.
* ```npm run swagger:build``` - Build the swagger documentation