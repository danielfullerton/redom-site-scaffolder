# redom-site-scaffolder

Scaffolds a project that will use redom, Typescript, SASS and Webpack in order to serve a static website using hot-reload.
Great for prototyping JavaScript games, UI tools, or other static applications.

---

## Install

    $ npm i -g redom-site-scaffolder

## Usage

Navigate in your terminal to the working directory where you wish to create a new project. The tool will automatically create the project
folder for you, so you do not need to create one yourself.

For example, let's create a new project called "My New Project":

    $ rsc
    Please fill the following values…
    Replace: name:  My New Project
    Replace: version:  1.0.0
    Replace: description:  "This is a sample project"
    Replace: author:  "Bob Smith"
    Replace: license:  "MIT"

Now hit enter, and you should see the following output:

    Copying files…
    ✔ The files have been copied!
    ✔ Success! Please make sure to run `npm install` and `tsc` before beginning. Then just start by using `npm run start:dev`!

In your working directory, you would now have a project folder "my-new-project". Open this folder in your IDE or code editor and run the following commands (in order):

    $ npm install
   
    $ npm run start:dev
    
This will start your scaffolded project on http://localhost:4200. The project supports hot reload, so as you make changes, your browser will update in real-time.

## Built With

* [Redom](https://redom.js.org/)
* [Caporal](https://github.com/mattallty/Caporal.js?)
* [Typescript](https://www.typescriptlang.org/)

## Authors

* **Daniel Fullerton** - [GitHub Page](https://github.com/danielfullerton)

## License

This project is licensed under the MIT License.
