(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[17272],{42085:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(22122),i=t(19756),o=(t(15007),t(64983)),l=t(99536),r=["components"],m={},d={_frontmatter:m},s=l.Z;function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)(s,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"quick-start---react-make-your-first-xd-plugin-with-react"},"Quick Start - React: Make your first XD plugin with React"),(0,o.mdx)("p",null,"While there are many choices when it comes to picking a JavaScript framework to build an XD plugin, we want to cover one of the most popular frameworks, React, first."),(0,o.mdx)("p",null,"Once you're done, you'll have a solid grasp of the steps to take when starting to create your own XD plugin with React."),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, JavaScript, and React"),(0,o.mdx)("li",{parentName:"ul"},"A text editor to write your code in (like VSCode, Sublime Text, Brackets, Atom, etc)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start tutorial")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/"},"node")," and ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm")," installed")),(0,o.mdx)("h2",{id:"development-steps"},"Development Steps"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/quick-start-react"},"on GitHub"),".")),(0,o.mdx)("h3",{id:"0-folder-structure"},"0. Folder structure"),(0,o.mdx)("p",null,"Note that we are going to use ",(0,o.mdx)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," to bundle JavaScript files for usage in XD and the ",(0,o.mdx)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"yarn")," package manager to install dependencies. When you have the right structure, it will look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"my-plugin-folder\n└── src\n    └── main.jsx\n    └── HelloForm.jsx\n    └── react-shim.js\n└── manifest.json\n└── package.json\n└── webpack.config.js\n")),(0,o.mdx)("h3",{id:"1-install-dependencies"},"1. Install dependencies"),(0,o.mdx)("p",null,"In order to correctly use React in XD, you will have to install dependencies correctly. Follow the steps below:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"List the required dependencies in ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'{\n  "name": "helllo_react_jsx",\n  "version": "1.0.0",\n  "main": "main.js",\n  "scripts": {\n    "watch": "nodemon -w src -e js,jsx,css -w webpack.config.js -x yarn build",\n    "build": "webpack --mode development"\n  },\n  "license": "none",\n  "private": true,\n  "devDependencies": {\n    "nodemon": "^1.18.7",\n    "webpack": "^4.16.4",\n    "webpack-cli": "^3.1.0"\n  },\n  "dependencies": {\n    "babel-core": "^6.26.3",\n    "babel-loader": "^7.1.5",\n    "babel-plugin-transform-react-jsx": "^6.24.1",\n    "css-loader": "^1.0.0",\n    "react": "^16.4.2",\n    "react-dom": "^16.4.2",\n    "style-loader": "^0.22.0",\n    "yarn": "^1.12.3"\n  }\n}\n')),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"List the webpack configurations in ",(0,o.mdx)("inlineCode",{parentName:"li"},"webpack.config.js"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  entry: "./src/main.jsx",\n  output: {\n    path: __dirname,\n    filename: "main.js",\n    libraryTarget: "commonjs2",\n  },\n  devtool: "none",\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        exclude: /node_modules/,\n        loader: "babel-loader",\n        options: {\n          plugins: ["transform-react-jsx"],\n        },\n      },\n      {\n        test: /\\.css$/,\n        use: ["style-loader", "css-loader"],\n      },\n    ],\n  },\n  externals: {\n    scenegraph: "scenegraph",\n  },\n};\n')),(0,o.mdx)("p",null,"As per ",(0,o.mdx)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"webpack's documentation"),","),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"externals")," configuration option provides a way of excluding dependencies from the output bundles. Instead, the created bundle relies on that dependency to be present in the consumer's environment.")),(0,o.mdx)("p",null,"Note that, in this example, we are excluding the ",(0,o.mdx)("inlineCode",{parentName:"p"},"scenegraph")," API from the output bundles since this dependency is present in the XD environment."),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"Install yarn, if needed")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"npm install -g yarn\n")),(0,o.mdx)("ol",{start:4},(0,o.mdx)("li",{parentName:"ol"},"Install dependencies")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"yarn install\n")),(0,o.mdx)("p",null,"All dependencies are installed and we are good to go!"),(0,o.mdx)("h3",{id:"2-create-your-main-files"},"2. Create your main files"),(0,o.mdx)("p",null,"Now, let's create your plugin files. Open your favorite text editor and create the following files and folders (we'll add code to them in later steps):"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.json")," is your plugin’s manifest. This file includes information about the plugin, such as its name, the menu item(s) it adds to XD, and so on. ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},"Learn about the manifest here"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"src")," is your plugin's folder that contains all JavaScript files that are going to be compiled"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"main.jsx")," is the main file for the plugin"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"HelloForm.jsx")," is the file that contains the only React component we are going to use. Note that you can have multiple ",(0,o.mdx)("inlineCode",{parentName:"li"},".jsx")," files if needed"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"react-shim.js")," is a JavaScript file that helps React run smoothly in XD's environment. Further details to follow in a later section")))),(0,o.mdx)("h3",{id:"3-edit-your-plugins-manifest"},"3. Edit your plugin’s manifest"),(0,o.mdx)("p",null,"In the previous step, you created a file named ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.json"),". Open that file and paste in this JSON object:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QUICKSTART_REACT",\n  "name": "Quick Start - React",\n  "version": "1.0.0",\n  "description": "Description of your plugin.",\n  "summary": "Summary of your plugin",\n  "languages": ["en"],\n  "author": "Your Name",\n  "helpUrl": "https://mywebsite.com/help",\n  "host": {\n    "app": "XD",\n    "minVersion": "13.0"\n  },\n  "uiEntryPoints": [\n    {\n      "type": "menu",\n      "label": "Quick Start - React",\n      "commandId": "main"\n    }\n  ]\n}\n')),(0,o.mdx)("p",null,"Be sure to replace the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," value with the unique plugin ID you get from the Adobe Developer Console."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"id": "1234ABCD",\n')),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("strong",{parentName:"p"},"Info"),"\nMake sure to read ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start tutorial")," to learn how to get your unique plugin ID from the Adobe Developer Console.")),(0,o.mdx)("p",null,"If you're curious about what each entry in the manifest means, ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),(0,o.mdx)("p",null,"The value of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"commandId")," property may be any string; in this case, it's ",(0,o.mdx)("inlineCode",{parentName:"p"},"main"),". In the next section, we will see how this string is associated with the code for our plugin."),(0,o.mdx)("h3",{id:"4-create-your-plugins-code"},"4. Create your plugin’s code"),(0,o.mdx)("p",null,"Next, we need to create the JavaScript code for our plugin. As noted in the ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start tutorial"),", the code lives in a file named ",(0,o.mdx)("inlineCode",{parentName:"p"},"main.js"),". This file will be automatically created when Webpack compiles all JavaScript files in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"src")," folder."),(0,o.mdx)("p",null,"In this tutorial, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"src")," folder will contain the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"src\n└── main.jsx\n└── HelloForm.jsx\n└── react-shim.js\n")),(0,o.mdx)("p",null,"Now, lets start writing code in these JavaScript files."),(0,o.mdx)("p",null,"First of all, as noted earlier, we need ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-shim.js")," file to make React run without any issue in the XD environment. Paste this code into ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-shim.js"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'if (window.setTimeout == null) {\n  window.setTimeout = function (fn) {\n    fn();\n  };\n}\n\nif (window.clearTimeout == null) {\n  window.clearTimeout = function () {};\n}\n\nif (window.cancelAnimationFrame == null) {\n  window.cancelAnimationFrame = function () {};\n}\nif (window.requestAnimationFrame == null) {\n  window.requestAnimationFrame = function () {\n    console.log("requestAnimationFrame is not supported yet");\n  };\n}\nif (window.HTMLIFrameElement == null) {\n  window.HTMLIFrameElement = class HTMLIFrameElement {};\n}\n')),(0,o.mdx)("p",null,"Since XD currently does not currently support ",(0,o.mdx)("inlineCode",{parentName:"p"},"cancelAnimationFrame"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"requestAnimationFrame"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"HTMLIFrameElement"),", we create these empty functions and classes to prevent your plugin from crashing."),(0,o.mdx)("p",null,"As of XD 16, ",(0,o.mdx)("inlineCode",{parentName:"p"},"setTimeout")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"clearTimeout")," are ",(0,o.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/changelog/#xd-release-16012-february-2019"},"supported in the XD plugin API"),", but are still included in the shim for compatibility with older versions of XD."),(0,o.mdx)("p",null,"Next, let's create a React component. Paste the following code in ",(0,o.mdx)("inlineCode",{parentName:"p"},"HelloForm.jsx"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// [1]\nconst React = require("react");\n// [2]\nconst { Text, Color } = require("scenegraph");\n\n// [3]\nclass HelloForm extends React.Component {\n  // [4]\n  constructor(props) {\n    super(props);\n    this.state = { name: "" }; // [5]\n\n    // [6]\n    this.onInputChange = (e) => {\n      this.setState({ name: e.target.value });\n    };\n\n    // [7]\n    this.onDoneClick = (e) => {\n      // [8]\n      const selection = this.props.selection;\n      // [9]\n      const newText = new Text();\n      newText.text = this.state.name;\n      // [10]\n      newText.styleRanges = [\n        {\n          length: newText.text.length,\n          fill: new Color("#00F"),\n          fontSize: 50,\n        },\n      ];\n\n      // [11]\n      selection.insertionParent.addChild(newText);\n      // [12]\n      newText.moveInParentCoordinates(100, 100);\n      // [13]\n      props.dialog.close();\n    };\n  }\n\n  // [14]\n  render() {\n    return (\n      <form style={{ width: 300 }} onSubmit={this.onDoneClick}>\n        <h1>React with JSX Components</h1>\n        <label>\n          <span>What is your name?</span>\n          <input onChange={this.onInputChange} />\n        </label>\n        <p>{`Hello ${this.state.name}`}</p>\n        <footer>\n          <button type="submit" uxp-variant="cta">\n            Done\n          </button>\n        </footer>\n      </form>\n    );\n  }\n}\n\nmodule.exports = HelloForm;\n')),(0,o.mdx)("p",null,"This code does the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Gets reference to ",(0,o.mdx)("inlineCode",{parentName:"li"},"react")," module installed in an earlier step"),(0,o.mdx)("li",{parentName:"ol"},"Gets references to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Text")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"Color")," classes from XD’s ",(0,o.mdx)("inlineCode",{parentName:"li"},"scenegraph")," module. There are several different ",(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/plugin-development/xd-concepts/apis"},"API modules you can load using ",(0,o.mdx)("inlineCode",{parentName:"a"},"require()")),"."),(0,o.mdx)("li",{parentName:"ol"},"Creates a react component called ",(0,o.mdx)("inlineCode",{parentName:"li"},"HelloForm")),(0,o.mdx)("li",{parentName:"ol"},"Since you are going to initialize state and bind methods, implements a constructor for this React component and calls ",(0,o.mdx)("inlineCode",{parentName:"li"},"super(props)")," to use props passed down from the parent"),(0,o.mdx)("li",{parentName:"ol"},"Initializes a state property called ",(0,o.mdx)("inlineCode",{parentName:"li"},"name")," with an empty string"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"onInputChange")," method sets the ",(0,o.mdx)("inlineCode",{parentName:"li"},"name")," state with the string value passed from the input field"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"onDoneClick")," is triggered after the submission happens and manipulates XD objects"),(0,o.mdx)("li",{parentName:"ol"},"Creates a reference to ",(0,o.mdx)("inlineCode",{parentName:"li"},"selection")," passed down as a prop"),(0,o.mdx)("li",{parentName:"ol"},"Creates a ",(0,o.mdx)("inlineCode",{parentName:"li"},"Text")," instance and sets the ",(0,o.mdx)("inlineCode",{parentName:"li"},"text")," value as the input stored in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"name")," state"),(0,o.mdx)("li",{parentName:"ol"},"Styles the text. More info on styling text can be found in ",(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/how-to-style-text"},(0,o.mdx)("inlineCode",{parentName:"a"},"how-to-style-text")," tutorial")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"addChild")," method inserts the created text into the ideal insertion point determined by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"insertionParent")," property of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"selection")," object"),(0,o.mdx)("li",{parentName:"ol"},"Moves the added text ",(0,o.mdx)("inlineCode",{parentName:"li"},"100")," pixels from the top and ",(0,o.mdx)("inlineCode",{parentName:"li"},"100")," pixels from the left of the insertion point"),(0,o.mdx)("li",{parentName:"ol"},"Closes the dialog"),(0,o.mdx)("li",{parentName:"ol"},"Renders the component. Note that there is an input field to accept user's input and a button for the submission of the input")),(0,o.mdx)("p",null,"Lastly, let's create the main ",(0,o.mdx)("inlineCode",{parentName:"p"},"jsx")," file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"main.jsx"),". Paste the following code into ",(0,o.mdx)("inlineCode",{parentName:"p"},"main.jsx"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// [1]\nconst reactShim = require("./react-shim");\n// [2]\nconst React = require("react");\nconst ReactDOM = require("react-dom");\n// [3]\nconst App = require("./HelloForm.jsx");\n\nfunction main(selection) {\n  let dialog;\n\n  function getDialog() {\n    if (dialog == null) {\n      // [4]\n      dialog = document.createElement("dialog");\n      // [5]\n      ReactDOM.render(<App dialog={dialog} selection={selection} />, dialog);\n    }\n    return dialog;\n  }\n\n  // [6]\n  return document.body.appendChild(getDialog()).showModal();\n}\n\n// [7]\nmodule.exports = {\n  commands: {\n    main,\n  },\n};\n')),(0,o.mdx)("p",null,"This code does the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Loads ",(0,o.mdx)("inlineCode",{parentName:"li"},"react-shim.js")," to make React run in the XD environment"),(0,o.mdx)("li",{parentName:"ol"},"Gets reference to ",(0,o.mdx)("inlineCode",{parentName:"li"},"react")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"react-dom")," modules installed earlier in the steps"),(0,o.mdx)("li",{parentName:"ol"},"Imports our ",(0,o.mdx)("inlineCode",{parentName:"li"},"HelloForm")," component"),(0,o.mdx)("li",{parentName:"ol"},"Creates a ",(0,o.mdx)("inlineCode",{parentName:"li"},"dialog")," element in the document"),(0,o.mdx)("li",{parentName:"ol"},"Renders the imported ",(0,o.mdx)("inlineCode",{parentName:"li"},"HelloForm")," component and passes ",(0,o.mdx)("inlineCode",{parentName:"li"},"dialog")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"selection")," objects as props. Note that the dialog is reused, so it gets rendered only once."),(0,o.mdx)("li",{parentName:"ol"},"Loads the modal inside the XD document"),(0,o.mdx)("li",{parentName:"ol"},"Exports an object, with a ",(0,o.mdx)("inlineCode",{parentName:"li"},"commands")," property. The value of ",(0,o.mdx)("inlineCode",{parentName:"li"},"commands")," is an object which associates the JavaScript handler function (",(0,o.mdx)("inlineCode",{parentName:"li"},"main"),") with your manifest's ",(0,o.mdx)("inlineCode",{parentName:"li"},"commandId")," property. The command ID property name (here, ",(0,o.mdx)("inlineCode",{parentName:"li"},"main"),") must match the ",(0,o.mdx)("inlineCode",{parentName:"li"},"commandId")," value declared in your manifest exactly.")),(0,o.mdx)("h3",{id:"5-compile-the-code"},"5. Compile the code"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Developement")," - Run ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn watch")," to compile the code and watch for changes. This process will create the ",(0,o.mdx)("inlineCode",{parentName:"p"},"main.js")," file to be read by Adobe XD."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Production")," - Run ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn build")," to build the final version of your plugin."),(0,o.mdx)("h3",{id:"5-run-your-plugin"},"5. Run your plugin"),(0,o.mdx)("p",null,"So you’ve written a plugin using React! How do we run it?"),(0,o.mdx)("p",null,"If you haven’t already done so, launch XD and open a new document. Then navigate to the ",(0,o.mdx)("em",{parentName:"p"},"Plugins > Quick Start - React")," menu item."),(0,o.mdx)("p",null,"Alternatively, if XD was already open, select ",(0,o.mdx)("em",{parentName:"p"},"Plugins > Development > Reload Plugins"),"."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"736px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/cb523/react-hello-xd.webp 320w","/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/797b9/react-hello-xd.webp 640w","/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/346f6/react-hello-xd.webp 736w"],sizes:"(max-width: 736px) 100vw, 736px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/72799/react-hello-xd.png 320w","/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/6af66/react-hello-xd.png 640w","/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/f941f/react-hello-xd.png 736w"],sizes:"(max-width: 736px) 100vw, 736px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/6c1ae8268e0375e78b7c99420857fc6c/f941f/react-hello-xd.png",alt:"XD dialog drops down",title:"XD dialog drops down",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Congratulations! You’ve built your first plugin using React!"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-quick-start-react-index-md-249f3370794b293d634a.js.map