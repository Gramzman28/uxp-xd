(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{FICI:function(e,n,t){e.exports=t.p+"static/react-hello-xd-6c1ae8268e0375e78b7c99420857fc6c.png"},"h/bP":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return d}));var a=t("wx14"),i=t("zLVn"),o=(t("q1tI"),t("7ljp")),l=t("ndZU"),r=(t("qKvR"),{}),m={_frontmatter:r},c=l.a;function d(e){var n=e.components,l=Object(i.a)(e,["components"]);return Object(o.mdx)(c,Object(a.a)({},m,l,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"quick-start---react-make-your-first-xd-plugin-with-react"},"Quick Start - React: Make your first XD plugin with React"),Object(o.mdx)("p",null,"While there are many choices when it comes to picking a JavaScript framework to build an XD plugin, we want to cover one of the most popular frameworks, React, first."),Object(o.mdx)("p",null,"Once you're done, you'll have a solid grasp of the steps to take when starting to create your own XD plugin with React."),Object(o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, JavaScript, and React"),Object(o.mdx)("li",{parentName:"ul"},"A text editor to write your code in (like VSCode, Sublime Text, Brackets, Atom, etc)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/quick-start/index/"}),"Quick Start tutorial")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"node")," and ",Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")," installed")),Object(o.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/quick-start-react"}),"on GitHub"),".")),Object(o.mdx)("h3",{id:"0-folder-structure"},"0. Folder structure"),Object(o.mdx)("p",null,"Note that we are going to use ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack")," to bundle JavaScript files for usage in XD and the ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"yarn")," package manager to install dependencies. When you have the right structure, it will look like this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),"my-plugin-folder\n└── src\n    └── main.jsx\n    └── HelloForm.jsx\n    └── react-shim.js\n└── manifest.json\n└── package.json\n└── webpack.config.js\n")),Object(o.mdx)("h3",{id:"1-install-dependencies"},"1. Install dependencies"),Object(o.mdx)("p",null,"In order to correctly use React in XD, you will have to install dependencies correctly. Follow the steps below:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"List the required dependencies in ",Object(o.mdx)("inlineCode",{parentName:"li"},"package.json"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "name": "helllo_react_jsx",\n  "version": "1.0.0",\n  "main": "main.js",\n  "scripts": {\n    "watch": "nodemon -w src -e js,jsx,css -w webpack.config.js -x yarn build",\n    "build": "webpack --mode development"\n  },\n  "license": "none",\n  "private": true,\n  "devDependencies": {\n    "nodemon": "^1.18.7",\n    "webpack": "^4.16.4",\n    "webpack-cli": "^3.1.0"\n  },\n  "dependencies": {\n    "babel-core": "^6.26.3",\n    "babel-loader": "^7.1.5",\n    "babel-plugin-transform-react-jsx": "^6.24.1",\n    "css-loader": "^1.0.0",\n    "react": "^16.4.2",\n    "react-dom": "^16.4.2",\n    "style-loader": "^0.22.0",\n    "yarn": "^1.12.3"\n  }\n}\n')),Object(o.mdx)("ol",{start:2},Object(o.mdx)("li",{parentName:"ol"},"List the webpack configurations in ",Object(o.mdx)("inlineCode",{parentName:"li"},"webpack.config.js"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  entry: "./src/main.jsx",\n  output: {\n    path: __dirname,\n    filename: "main.js",\n    libraryTarget: "commonjs2",\n  },\n  devtool: "none",\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        exclude: /node_modules/,\n        loader: "babel-loader",\n        options: {\n          plugins: ["transform-react-jsx"],\n        },\n      },\n      {\n        test: /\\.css$/,\n        use: ["style-loader", "css-loader"],\n      },\n    ],\n  },\n  externals: {\n    scenegraph: "scenegraph",\n  },\n};\n')),Object(o.mdx)("p",null,"As per ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/externals/"}),"webpack's documentation"),","),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"externals")," configuration option provides a way of excluding dependencies from the output bundles. Instead, the created bundle relies on that dependency to be present in the consumer's environment.")),Object(o.mdx)("p",null,"Note that, in this example, we are excluding the ",Object(o.mdx)("inlineCode",{parentName:"p"},"scenegraph")," API from the output bundles since this dependency is present in the XD environment."),Object(o.mdx)("ol",{start:3},Object(o.mdx)("li",{parentName:"ol"},"Install yarn, if needed")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),"npm install -g yarn\n")),Object(o.mdx)("ol",{start:4},Object(o.mdx)("li",{parentName:"ol"},"Install dependencies")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),"yarn install\n")),Object(o.mdx)("p",null,"All dependencies are installed and we are good to go!"),Object(o.mdx)("h3",{id:"2-create-your-main-files"},"2. Create your main files"),Object(o.mdx)("p",null,"Now, let's create your plugin files. Open your favorite text editor and create the following files and folders (we'll add code to them in later steps):"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"manifest.json")," is your plugin’s manifest. This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on. ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/structure/manifest/"}),"Learn about the manifest here"),".")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("inlineCode",{parentName:"p"},"src")," is your plugin's folder that contains all JavaScript files that are going to be compiled"),Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"main.jsx")," is the main file for the plugin"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"HelloForm.jsx")," is the file that contains the only React component we are going to use. Note that you can have multiple ",Object(o.mdx)("inlineCode",{parentName:"li"},".jsx")," files if needed"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"react-shim.js")," is a JavaScript file that helps React run smoothly in XD's environment. Further details to follow in a later section")))),Object(o.mdx)("h3",{id:"3-edit-your-plugins-manifest"},"3. Edit your plugin’s manifest"),Object(o.mdx)("p",null,"In the previous step, you created a file named ",Object(o.mdx)("inlineCode",{parentName:"p"},"manifest.json"),". Open that file and paste in this JSON object:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "QUICKSTART_REACT",\n  "name": "Quick Start - React",\n  "version": "1.0.0",\n  "description": "Description of your plugin.",\n  "summary": "Summary of your plugin",\n  "languages": ["en"],\n  "author": "Your Name",\n  "helpUrl": "https://mywebsite.com/help",\n  "host": {\n    "app": "XD",\n    "minVersion": "13.0"\n  },\n  "uiEntryPoints": [\n    {\n      "type": "menu",\n      "label": "Quick Start - React",\n      "commandId": "main"\n    }\n  ]\n}\n')),Object(o.mdx)("p",null,"Be sure to replace the ",Object(o.mdx)("inlineCode",{parentName:"p"},"id")," value with the unique plugin ID you get from the Adobe Developer Console."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"id": "1234ABCD",\n')),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nMake sure to read ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/index/"}),"Quick Start tutorial")," to learn how to get your unique plugin ID from the Adobe Developer Console.")),Object(o.mdx)("p",null,"If you're curious about what each entry in the manifest means, ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(o.mdx)("p",null,"The value of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"commandId")," property may be any string; in this case, it's ",Object(o.mdx)("inlineCode",{parentName:"p"},"main"),". In the next section, we will see how this string is associated with the code for our plugin."),Object(o.mdx)("h3",{id:"4-create-your-plugins-code"},"4. Create your plugin’s code"),Object(o.mdx)("p",null,"Next, we need to create the JavaScript code for our plugin. As noted in the ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/index/"}),"Quick Start tutorial"),", the code lives in a file named ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js"),". This file will be automatically created when Webpack compiles all JavaScript files in your ",Object(o.mdx)("inlineCode",{parentName:"p"},"src")," folder."),Object(o.mdx)("p",null,"In this tutorial, the ",Object(o.mdx)("inlineCode",{parentName:"p"},"src")," folder will contain the following:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),"src\n└── main.jsx\n└── HelloForm.jsx\n└── react-shim.js\n")),Object(o.mdx)("p",null,"Now, lets start writing code in these JavaScript files."),Object(o.mdx)("p",null,"First of all, as noted earlier, we need ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-shim.js")," file to make React run without any issue in the XD environment. Paste this code into ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-shim.js"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'if (window.setTimeout == null) {\n  window.setTimeout = function (fn) {\n    fn();\n  };\n}\n\nif (window.clearTimeout == null) {\n  window.clearTimeout = function () {};\n}\n\nif (window.cancelAnimationFrame == null) {\n  window.cancelAnimationFrame = function () {};\n}\nif (window.requestAnimationFrame == null) {\n  window.requestAnimationFrame = function () {\n    console.log("requestAnimationFrame is not supported yet");\n  };\n}\nif (window.HTMLIFrameElement == null) {\n  window.HTMLIFrameElement = class HTMLIFrameElement {};\n}\n')),Object(o.mdx)("p",null,"Since XD currently does not currently support ",Object(o.mdx)("inlineCode",{parentName:"p"},"cancelAnimationFrame"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"requestAnimationFrame"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"HTMLIFrameElement"),", we create these empty functions and classes to prevent your plugin from crashing."),Object(o.mdx)("p",null,"As of XD 16, ",Object(o.mdx)("inlineCode",{parentName:"p"},"setTimeout")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"clearTimeout")," are ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/changes.html#xd-release-16012-february-2019"}),"supported in the XD plugin API"),", but are still included in the shim for compatibility with older versions of XD."),Object(o.mdx)("p",null,"Next, let's create a React component. Paste the following code in ",Object(o.mdx)("inlineCode",{parentName:"p"},"HelloForm.jsx"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// [1]\nconst React = require("react");\n// [2]\nconst { Text, Color } = require("scenegraph");\n\n// [3]\nclass HelloForm extends React.Component {\n  // [4]\n  constructor(props) {\n    super(props);\n    this.state = { name: "" }; // [5]\n\n    // [6]\n    this.onInputChange = (e) => {\n      this.setState({ name: e.target.value });\n    };\n\n    // [7]\n    this.onDoneClick = (e) => {\n      // [8]\n      const selection = this.props.selection;\n      // [9]\n      const newText = new Text();\n      newText.text = this.state.name;\n      // [10]\n      newText.styleRanges = [\n        {\n          length: newText.text.length,\n          fill: new Color("#00F"),\n          fontSize: 50,\n        },\n      ];\n\n      // [11]\n      selection.insertionParent.addChild(newText);\n      // [12]\n      newText.moveInParentCoordinates(100, 100);\n      // [13]\n      props.dialog.close();\n    };\n  }\n\n  // [14]\n  render() {\n    return (\n      <form style={{ width: 300 }} onSubmit={this.onDoneClick}>\n        <h1>React with JSX Components</h1>\n        <label>\n          <span>What is your name?</span>\n          <input onChange={this.onInputChange} />\n        </label>\n        <p>{`Hello ${this.state.name}`}</p>\n        <footer>\n          <button type="submit" uxp-variant="cta">\n            Done\n          </button>\n        </footer>\n      </form>\n    );\n  }\n}\n\nmodule.exports = HelloForm;\n')),Object(o.mdx)("p",null,"This code does the following:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Gets reference to ",Object(o.mdx)("inlineCode",{parentName:"li"},"react")," module installed in an earlier step"),Object(o.mdx)("li",{parentName:"ol"},"Gets references to the ",Object(o.mdx)("inlineCode",{parentName:"li"},"Text")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"Color")," classes from XD’s ",Object(o.mdx)("inlineCode",{parentName:"li"},"scenegraph")," module. There are several different ",Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/reference/core/apis.html"}),"API modules you can load using ",Object(o.mdx)("inlineCode",{parentName:"a"},"require()")),"."),Object(o.mdx)("li",{parentName:"ol"},"Creates a react component called ",Object(o.mdx)("inlineCode",{parentName:"li"},"HelloForm")),Object(o.mdx)("li",{parentName:"ol"},"Since you are going to initialize state and bind methods, implements a constructor for this React component and calls ",Object(o.mdx)("inlineCode",{parentName:"li"},"super(props)")," to use props passed down from the parent"),Object(o.mdx)("li",{parentName:"ol"},"Initializes a state property called ",Object(o.mdx)("inlineCode",{parentName:"li"},"name")," with an empty string"),Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("inlineCode",{parentName:"li"},"onInputChange")," method sets the ",Object(o.mdx)("inlineCode",{parentName:"li"},"name")," state with the string value passed from the input field"),Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("inlineCode",{parentName:"li"},"onDoneClick")," is triggered after the submission happens and manipulates XD objects"),Object(o.mdx)("li",{parentName:"ol"},"Creates a reference to ",Object(o.mdx)("inlineCode",{parentName:"li"},"selection")," passed down as a prop"),Object(o.mdx)("li",{parentName:"ol"},"Creates a ",Object(o.mdx)("inlineCode",{parentName:"li"},"Text")," instance and sets the ",Object(o.mdx)("inlineCode",{parentName:"li"},"text")," value as the input stored in the ",Object(o.mdx)("inlineCode",{parentName:"li"},"name")," state"),Object(o.mdx)("li",{parentName:"ol"},"Styles the text. More info on styling text can be found in ",Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/how-to-style-text"}),Object(o.mdx)("inlineCode",{parentName:"a"},"how-to-style-text")," tutorial")),Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("inlineCode",{parentName:"li"},"addChild")," method inserts the created text into the ideal insertion point determined by the ",Object(o.mdx)("inlineCode",{parentName:"li"},"insertionParent")," property of the ",Object(o.mdx)("inlineCode",{parentName:"li"},"selection")," object"),Object(o.mdx)("li",{parentName:"ol"},"Moves the added text ",Object(o.mdx)("inlineCode",{parentName:"li"},"100")," pixels from the top and ",Object(o.mdx)("inlineCode",{parentName:"li"},"100")," pixels from the left of the insertion point"),Object(o.mdx)("li",{parentName:"ol"},"Closes the dialog"),Object(o.mdx)("li",{parentName:"ol"},"Renders the component. Note that there is an input field to accept user's input and a button for the submission of the input")),Object(o.mdx)("p",null,"Lastly, let's create the main ",Object(o.mdx)("inlineCode",{parentName:"p"},"jsx")," file, ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.jsx"),". Paste the following code into ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.jsx"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// [1]\nconst reactShim = require("./react-shim");\n// [2]\nconst React = require("react");\nconst ReactDOM = require("react-dom");\n// [3]\nconst App = require("./HelloForm.jsx");\n\nfunction main(selection) {\n  let dialog;\n\n  function getDialog() {\n    if (dialog == null) {\n      // [4]\n      dialog = document.createElement("dialog");\n      // [5]\n      ReactDOM.render(<App dialog={dialog} selection={selection} />, dialog);\n    }\n    return dialog;\n  }\n\n  // [6]\n  return document.body.appendChild(getDialog()).showModal();\n}\n\n// [7]\nmodule.exports = {\n  commands: {\n    main,\n  },\n};\n')),Object(o.mdx)("p",null,"This code does the following:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Loads ",Object(o.mdx)("inlineCode",{parentName:"li"},"react-shim.js")," to make React run in the XD environment"),Object(o.mdx)("li",{parentName:"ol"},"Gets reference to ",Object(o.mdx)("inlineCode",{parentName:"li"},"react")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"react-dom")," modules installed earlier in the steps"),Object(o.mdx)("li",{parentName:"ol"},"Imports our ",Object(o.mdx)("inlineCode",{parentName:"li"},"HelloForm")," component"),Object(o.mdx)("li",{parentName:"ol"},"Creates a ",Object(o.mdx)("inlineCode",{parentName:"li"},"dialog")," element in the document"),Object(o.mdx)("li",{parentName:"ol"},"Renders the imported ",Object(o.mdx)("inlineCode",{parentName:"li"},"HelloForm")," component and passes ",Object(o.mdx)("inlineCode",{parentName:"li"},"dialog")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"selection")," objects as props. Note that the dialog is reused, so it gets rendered only once."),Object(o.mdx)("li",{parentName:"ol"},"Loads the modal inside the XD document"),Object(o.mdx)("li",{parentName:"ol"},"Exports an object, with a ",Object(o.mdx)("inlineCode",{parentName:"li"},"commands")," property. The value of ",Object(o.mdx)("inlineCode",{parentName:"li"},"commands")," is an object which associates the JavaScript handler function (",Object(o.mdx)("inlineCode",{parentName:"li"},"main"),") with your manifest's ",Object(o.mdx)("inlineCode",{parentName:"li"},"commandId")," property. The command ID property name (here, ",Object(o.mdx)("inlineCode",{parentName:"li"},"main"),") must match the ",Object(o.mdx)("inlineCode",{parentName:"li"},"commandId")," value declared in your manifest exactly.")),Object(o.mdx)("h3",{id:"5-compile-the-code"},"5. Compile the code"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Developement")," - Run ",Object(o.mdx)("inlineCode",{parentName:"p"},"yarn watch")," to compile the code and watch for changes. This process will create the ",Object(o.mdx)("inlineCode",{parentName:"p"},"main.js")," file to be read by Adobe XD."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Production")," - Run ",Object(o.mdx)("inlineCode",{parentName:"p"},"yarn build")," to build the final version of your plugin."),Object(o.mdx)("h3",{id:"5-run-your-plugin"},"5. Run your plugin"),Object(o.mdx)("p",null,"So you’ve written a plugin using React! How do we run it?"),Object(o.mdx)("p",null,"If you haven’t already done so, launch XD and open a new document. Then navigate to the ",Object(o.mdx)("em",{parentName:"p"},"Plugins > Quick Start - React")," menu item."),Object(o.mdx)("p",null,"Alternatively, if XD was already open, select ",Object(o.mdx)("em",{parentName:"p"},"Plugins > Development > Reload Plugins"),"."),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"XD dialog drops down",src:t("FICI")})),Object(o.mdx)("p",null,"Congratulations! You’ve built your first plugin using React!"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-quick-start-react-index-md-9ed27c83b97c3fae0542.js.map