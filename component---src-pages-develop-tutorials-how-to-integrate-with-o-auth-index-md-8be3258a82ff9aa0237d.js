(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{"0vWu":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("ndZU"),l=(n("qKvR"),{}),s={_frontmatter:l},c=i.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)(c,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"how-to-integrate-with-oauth"},"How to Integrate with OAuth"),Object(r.mdx)("p",null,"This tutorial will show you how to implement the OAuth workflow in an XD plugin, using the Dropbox API as an example."),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},Object(r.mdx)("strong",{parentName:"p"},"info"),"\nAuth workflows are necessarily complex, so this tutorial will be on the longer side and make use of some advanced concepts. Please read the each section carefully, especially the Prerequisites and Configuration sections.")),Object(r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Basic knowledge of HTML, CSS, and JavaScript.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/debugging/"}),"Debugging Tutorial"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Familiarity with your OS's command line application")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Familiarity with ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://oauth.net/2/"}),"OAuth"))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.dropbox.com/developers/apps/create"}),"A registered app on Dropbox")," with the following settings:"),Object(r.mdx)("ol",{parentName:"li"},Object(r.mdx)("li",{parentName:"ol"},'Choose "Dropbox API"'),Object(r.mdx)("li",{parentName:"ol"},'Choose "Full Dropbox" for the access type'),Object(r.mdx)("li",{parentName:"ol"},"In ",Object(r.mdx)("inlineCode",{parentName:"li"},"Redirect URIs"),", add your own ",Object(r.mdx)("inlineCode",{parentName:"li"},"https")," ",Object(r.mdx)("inlineCode",{parentName:"li"},"ngrok"),' URL (example: "',Object(r.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://476322de.ngrok.io/callback%22"}),'https://476322de.ngrok.io/callback"'),") or a secure public URL if you have one")))),Object(r.mdx)("h2",{id:"technology-used"},"Technology Used"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"[Install required][Node.js]","(",Object(r.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"https://nodejs.org/en/"),") and the ",Object(r.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com"}),Object(r.mdx)("inlineCode",{parentName:"a"},"npm")," package manager")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://oauth.net/2/"}),"OAuth")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://ngrok.com/"}),"ngrok")),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://www.dropbox.com/developers/documentation/http/overview"}),"Dropbox API"))),Object(r.mdx)("h2",{id:"overview-of-the-oauth-workflow"},"Overview of the OAuth workflow"),Object(r.mdx)("p",null,"There are three parts of this workflow:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Your XD plugin"),Object(r.mdx)("li",{parentName:"ul"},"Your server endpoints (for this development example, we'll create a local Node.js server)"),Object(r.mdx)("li",{parentName:"ul"},"The service providers OAuth endpoints (for this example, the Dropbox API)")),Object(r.mdx)("p",null,"The high-level workflow is as follows:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"The XD plugin pings the server to get the session ID"),Object(r.mdx)("li",{parentName:"ol"},"The server returns a unique ID for the user's XD session"),Object(r.mdx)("li",{parentName:"ol"},"Plugin opens a tab in user's default browser with a URL pointing to an endpoint on the server"),Object(r.mdx)("li",{parentName:"ol"},"The server handles the entire OAuth code grant workflow"),Object(r.mdx)("li",{parentName:"ol"},"The user gives necessary permissions to the plugin"),Object(r.mdx)("li",{parentName:"ol"},"The server saves the access token paired with the session ID"),Object(r.mdx)("li",{parentName:"ol"},"The plugin polls the server to check if the access token is available for the session ID. If the token is available, the server sends the access token back"),Object(r.mdx)("li",{parentName:"ol"},"The plugin uses the access token to make API calls to the service API")),Object(r.mdx)("h2",{id:"configuration"},"Configuration"),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},Object(r.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-integrate-with-OAuth"}),"on GitHub"),".")),Object(r.mdx)("p",null,"The following steps will help you get the sample code from our GitHub repo up and running."),Object(r.mdx)("h3",{id:"1-install-nodejs-packages"},"1. Install Node.js packages"),Object(r.mdx)("p",null,"Inside the sample repo's ",Object(r.mdx)("inlineCode",{parentName:"p"},"server")," folder, there is a ",Object(r.mdx)("inlineCode",{parentName:"p"},"package.json")," file that contains a list of dependencies. Run the following command from the top level directory of the repo to install the dependencies:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd server\n$ npm install\n")),Object(r.mdx)("h3",{id:"2-use-ngrok-to-create-a-public-ssl-url"},"2. Use ",Object(r.mdx)("inlineCode",{parentName:"h3"},"ngrok")," to create a public SSL URL"),Object(r.mdx)("p",null,"You can use either ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://ngrok.com/"}),"ngrok")," to create a public SSL endpoint, or use your own public URL."),Object(r.mdx)("p",null,"To use ",Object(r.mdx)("inlineCode",{parentName:"p"},"ngrok"),", first ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://ngrok.com/download"}),"download it to your machine"),"."),Object(r.mdx)("p",null,"You can run ",Object(r.mdx)("inlineCode",{parentName:"p"},"ngrok")," from anywhere on your machine, but since we're already in the ",Object(r.mdx)("inlineCode",{parentName:"p"},"server")," folder, we'll move ",Object(r.mdx)("inlineCode",{parentName:"p"},"ngrok")," there for convenience."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mv ~/Downloads/ngrok ./\n")),Object(r.mdx)("p",null,"Then we run it:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./ngrok http 8000\n")),Object(r.mdx)("p",null,"Now ",Object(r.mdx)("inlineCode",{parentName:"p"},"ngrok")," is forwarding all HTTP requests from port ",Object(r.mdx)("inlineCode",{parentName:"p"},"8000")," to a public SSL endpoint."),Object(r.mdx)("p",null,"You can see the forwarding endpoint currently being used in the ",Object(r.mdx)("inlineCode",{parentName:"p"},"ngrok")," terminal output. Note the forwarding endpoint; we'll use it in the next step."),Object(r.mdx)("h3",{id:"3-set-your-api-credentials-and-public-url"},"3. Set your API credentials and public URL"),Object(r.mdx)("p",null,"Enter the required credentials in ",Object(r.mdx)("inlineCode",{parentName:"p"},"public/config.js"),". You'll need:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Your Dropbox API key"),Object(r.mdx)("li",{parentName:"ul"},"Your Dropbox API secret"),Object(r.mdx)("li",{parentName:"ul"},"Your ",Object(r.mdx)("inlineCode",{parentName:"li"},"ngrok")," public URL")),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const dropboxApiKey = "YOUR-DROPBOX-API-KEY";\nconst dropboxApiSecret = "YOUR-DROPBOX-SECRET";\nconst publicUrl = "YOUR-PUBLIC-URL"; // e.g. https://476322de.ngrok.io/\n\ntry {\n  if (module) {\n    module.exports = {\n      dropboxApiKey: dropboxApiKey,\n      dropboxApiSecret: dropboxApiSecret,\n      publicUrl: publicUrl,\n    };\n  }\n} catch (err) {\n  console.log(err);\n}\n')),Object(r.mdx)("p",null,"Our server will make use of these settings in a later step."),Object(r.mdx)("h3",{id:"4-start-the-server"},"4. Start the server"),Object(r.mdx)("p",null,"After completing the configuration steps, start the server from the ",Object(r.mdx)("inlineCode",{parentName:"p"},"server")," folder:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{}),"$ npm start\n")),Object(r.mdx)("p",null,"Now you have a running server with an HTTPS endpoint and your Dropbox credentials ready to go."),Object(r.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(r.mdx)("p",null,"Now we can get back to the XD plugin side of things!"),Object(r.mdx)("h3",{id:"1-create-plugin-scaffold"},"1. Create plugin scaffold"),Object(r.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start"}),"Quick Start Tutorial"),"."),Object(r.mdx)("p",null,"Replace the ",Object(r.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n        {\n                "type": "menu",\n                "label": "How to Integrate with OAuth (Must run Server first)",\n                "commandId": "launchOAuth"\n        }\n]\n')),Object(r.mdx)("p",null,"If you're curious about what each entry means, ",Object(r.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(r.mdx)("p",null,"Then, update your ",Object(r.mdx)("inlineCode",{parentName:"p"},"main.js")," file, mapping the manifest's ",Object(r.mdx)("inlineCode",{parentName:"p"},"commandId")," to a handler function."),Object(r.mdx)("p",null,"Replace the content of your ",Object(r.mdx)("inlineCode",{parentName:"p"},"main.js")," file with the following code (note the presence of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"async")," keyword, which we'll look at in a later step):"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function launchOAuth(selection) {\n  // The body of this function is added later\n}\n\nmodule.exports = {\n  commands: {\n    launchOAuth,\n  },\n};\n")),Object(r.mdx)("p",null,"The remaining steps in this tutorial describe additional edits to the ",Object(r.mdx)("inlineCode",{parentName:"p"},"main.js")," file."),Object(r.mdx)("h3",{id:"2-require-in-xd-api-dependencies"},"2. Require in XD API dependencies"),Object(r.mdx)("p",null,"For this tutorial, we just need access to two XD scenegraph classes."),Object(r.mdx)("p",null,"Add the following lines to the top of your plugin's top-level ",Object(r.mdx)("inlineCode",{parentName:"p"},"main.js")," file:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { Text, Color } = require("scenegraph");\n')),Object(r.mdx)("p",null,"Now the ",Object(r.mdx)("inlineCode",{parentName:"p"},"Text")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"Color")," classes are required in and ready to be used."),Object(r.mdx)("h3",{id:"3-store-the-public-url"},"3. Store the public URL"),Object(r.mdx)("p",null,"Your plugin will also need to know your public URL. Since we used ",Object(r.mdx)("inlineCode",{parentName:"p"},"ngrok")," earlier, we'll make a constant with that URL:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const publicUrl = "YOUR-PUBLIC-URL"; // e.g. https://476322de.ngrok.io/\n')),Object(r.mdx)("p",null,"This url will be used to send requests to your server."),Object(r.mdx)("h3",{id:"4-create-a-variable-to-store-the-access-token"},"4. Create a variable to store the access token"),Object(r.mdx)("p",null,"Once you receive the access token from your server, you can use the token for API calls as long as the token is stored in memory and the XD session is alive."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let accessToken;\n")),Object(r.mdx)("p",null,"We'll assign the value later."),Object(r.mdx)("h3",{id:"5-write-a-helper-function-for-xhr-requests"},"5. Write a helper function for XHR requests"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// XHR helper function\nfunction xhrRequest(url, method) {\n  return new Promise((resolve, reject) => {\n    // [1]\n    const req = new XMLHttpRequest();\n    req.timeout = 6000; // [2]\n    req.onload = () => {\n      if (req.status === 200) {\n        try {\n          resolve(req.response); // [3]\n        } catch (err) {\n          reject(`Couldn\'t parse response. ${err.message}, ${req.response}`);\n        }\n      } else {\n        reject(`Request had an error: ${req.status}`);\n      }\n    };\n    req.ontimeout = () => {\n      console.log("polling.."); // [4]\n      resolve(xhrRequest(url, method));\n    };\n    req.onerror = (err) => {\n      console.log(err);\n      reject(err);\n    };\n    req.open(method, url, true); // [5]\n    req.responseType = "json";\n    req.send();\n  });\n}\n')),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"This helper function returns a promise object"),Object(r.mdx)("li",{parentName:"ol"},"Request timeout is set to 6000 miliseconds"),Object(r.mdx)("li",{parentName:"ol"},"On a successful request, the promise is resolved with ",Object(r.mdx)("inlineCode",{parentName:"li"},"req.response"),". In any other scenarios, the promise is rejected"),Object(r.mdx)("li",{parentName:"ol"},"If the request was timed out after 6000 miliseconds, the function loops and keeps sending XHR request until the response is received"),Object(r.mdx)("li",{parentName:"ol"},"The function sends the request to the specified ",Object(r.mdx)("inlineCode",{parentName:"li"},"url")," with the specified ",Object(r.mdx)("inlineCode",{parentName:"li"},"method"))),Object(r.mdx)("h3",{id:"6-get-the-session-id"},"6. Get the session ID"),Object(r.mdx)("p",null,"We'll make an XHR request."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const rid = await xhrRequest(`${publicUrl}/getRequestId`, "GET").then(\n  (response) => {\n    return response.id;\n  }\n);\n')),Object(r.mdx)("p",null,"This part of the function sends a ",Object(r.mdx)("inlineCode",{parentName:"p"},"GET")," request to your server's ",Object(r.mdx)("inlineCode",{parentName:"p"},"getRequestId")," endpoint and returns ",Object(r.mdx)("inlineCode",{parentName:"p"},"response.id"),"."),Object(r.mdx)("p",null,"Let's take a look at the code on the server side:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* Authorized Request IDs (simulating database) */\nconst requestIds = {}; // [1]\n\napp.get("/getRequestId", function (req, res) {\n  /* Simulating writing to a database */\n  for (let i = 1; i < 100; i++) {\n    // [2]\n    if (!(i in requestIds)) {\n      requestIds[i] = {};\n      console.log(i);\n      res.json({ id: i });\n      break;\n    }\n  }\n});\n')),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Note that there is a global variable, ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestIDs"),", which is an empty JavaScript object. For the sake of simplicity, we are using this object to simulate a database"),Object(r.mdx)("li",{parentName:"ol"},"This loop function simulates writing to a database by creating a new id, save the id in the global object, and ",Object(r.mdx)("inlineCode",{parentName:"li"},"res.json")," with the id")),Object(r.mdx)("h3",{id:"7-open-the-default-browser-with-the-url-pointing-to-your-server"},"7. Open the default browser with the URL pointing to your server"),Object(r.mdx)("p",null,"To open the machine's default browser from an XD plugin, we can use UXP's ",Object(r.mdx)("inlineCode",{parentName:"p"},"shell")," module:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'require("uxp").shell.openExternal(`${publicUrl}/login?requestId=${rid}`);\n')),Object(r.mdx)("p",null,"This will open the browser with the url pointing to an endpoint on your server."),Object(r.mdx)("p",null,"Let's take a look at the code on the server side."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/login", function (req, res) {\n  let requestId = req.query.requestId; // [1]\n  /* This will prompt user with the Dropbox auth screen */\n  res.redirect(\n    `https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=${dropboxApiKey}&redirect_uri=${publicUrl}/callback&state=${requestId}`\n  ); // [2]\n});\n\napp.get("/callback", function (req, res) {\n  /* Retrieve authorization code from request */\n  let code = req.query.code; // [3]\n  let requestId = req.query.state;\n\n  /* Set options with required paramters */\n  let requestOptions = {\n    // [4]\n    uri: `https://api.dropboxapi.com/oauth2/token?grant_type=authorization_code&code=${code}&client_id=${dropboxApiKey}&client_secret=${dropboxApiSecret}&redirect_uri=${publicUrl}/callback`,\n    method: "POST",\n    json: true,\n  };\n\n  /* Send a POST request using the request library */\n  request(requestOptions) // [5]\n    .then(function (response) {\n      /* Store the token in req.session.token */\n      req.session.token = response.access_token; // [6]\n\n      /* Simulating writing to a database */\n      requestIds[requestId]["accessToken"] = response.access_token; // [7]\n      res.end();\n    })\n    .catch(function (error) {\n      res.json({ response: "Log in failed!" });\n    });\n});\n')),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},"/login")," route grabs the ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestId")," from the query parameter"),Object(r.mdx)("li",{parentName:"ol"},"and redirects to the Dropbox's ",Object(r.mdx)("inlineCode",{parentName:"li"},"authorize")," endpoint and pass the ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestId")," to the optional parameter, ",Object(r.mdx)("inlineCode",{parentName:"li"},"state"),". This redirect will prompt the login screen on the user's browser"),Object(r.mdx)("li",{parentName:"ol"},"Once the dropbox API returns the ",Object(r.mdx)("inlineCode",{parentName:"li"},"code")," to the specified callback endpoint, ",Object(r.mdx)("inlineCode",{parentName:"li"},"/callback"),", which then parses the ",Object(r.mdx)("inlineCode",{parentName:"li"},"code")," and the ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestId")),Object(r.mdx)("li",{parentName:"ol"},"Set ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestOptions")," object with Dropbox's token URI"),Object(r.mdx)("li",{parentName:"ol"},"Use the ",Object(r.mdx)("inlineCode",{parentName:"li"},"request")," library to send the ",Object(r.mdx)("inlineCode",{parentName:"li"},"POST")," request"),Object(r.mdx)("li",{parentName:"ol"},"Store the access token received from Dropbox in the session object"),Object(r.mdx)("li",{parentName:"ol"},"Simulate writing to a database by paring the access token with ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestId")," and storing it to ",Object(r.mdx)("inlineCode",{parentName:"li"},"requestIds")," global object")),Object(r.mdx)("h3",{id:"8-poll-the-server-until-access-token-is-received"},"8. Poll the server until access token is received"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'accessToken = await xhrRequest(\n  `${publicUrl}/getCredentials?requestId=${rid}`,\n  "GET"\n).then((tokenResponse) => {\n  return tokenResponse.accessToken;\n});\n')),Object(r.mdx)("p",null,"As noted in step #4, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"xhrRequest")," helper function is designed to poll the server if the initial request is not responded in 6000 miliseconds. Once the user completes the OAuth workflow in the browser, polling should stop and this request should be returned with the access token."),Object(r.mdx)("h3",{id:"9-show-a-dialog-indicating-the-token-has-been-received"},"9. Show a dialog indicating the token has been received"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// create the dialog\nlet dialog = document.createElement("dialog"); // [1]\n\n// main container\nlet container = document.createElement("div"); // [2]\ncontainer.style.minWidth = 400;\ncontainer.style.padding = 40;\n\n// add content\nlet title = document.createElement("h3"); // [3]\ntitle.style.padding = 20;\ntitle.textContent = `XD and Dropbox are now connected`;\ncontainer.appendChild(title);\n\n// close button\nlet closeButton = document.createElement("button"); // [4]\ncloseButton.textContent = "Got it!";\ncontainer.appendChild(closeButton);\n\ncloseButton.onclick = (e) => {\n  // [5]\n  dialog.close();\n};\n\ndocument.body.appendChild(dialog); // [6]\ndialog.appendChild(container);\ndialog.showModal();\n')),Object(r.mdx)("p",null,"Just like HTML DOM APIs, you can use ",Object(r.mdx)("inlineCode",{parentName:"p"},"document.createElement")," method to create UI objects. Elements have the ",Object(r.mdx)("inlineCode",{parentName:"p"},"style")," property which contains metrics properties you can set"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"The ",Object(r.mdx)("inlineCode",{parentName:"li"},"dialog")," element is the modal window that pops down in XD"),Object(r.mdx)("li",{parentName:"ol"},"Create a container ",Object(r.mdx)("inlineCode",{parentName:"li"},"div")," element"),Object(r.mdx)("li",{parentName:"ol"},"Create a ",Object(r.mdx)("inlineCode",{parentName:"li"},"h3")," element to let the user know the auth workflow has been completed"),Object(r.mdx)("li",{parentName:"ol"},"You need at least one exit point. Create a close button and add it to the container"),Object(r.mdx)("li",{parentName:"ol"},"Create a listener for the click event and close the dialog"),Object(r.mdx)("li",{parentName:"ol"},"Attach the dialog to the document, add the container, and use ",Object(r.mdx)("inlineCode",{parentName:"li"},"showModal")," method to show the modal")),Object(r.mdx)("h3",{id:"10-make-an-api-call-to-dropbox"},"10. Make an API call to Dropbox"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const dropboxProfileUrl = `https://api.dropboxapi.com/2/users/get_current_account?authorization=Bearer%20${accessToken}`; // [1]\nconst dropboxProfile = await xhrRequest(dropboxProfileUrl, "POST"); // [2]\n')),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Note that received ",Object(r.mdx)("inlineCode",{parentName:"li"},"accessToken")," is included in this Dropbox API call to retrieve the current account's profile"),Object(r.mdx)("li",{parentName:"ol"},Object(r.mdx)("inlineCode",{parentName:"li"},"xhrRequest")," helper function is used again to make this ",Object(r.mdx)("inlineCode",{parentName:"li"},"POST")," call")),Object(r.mdx)("h3",{id:"10-create-a-text-element-to-show-the-profile-information-inside-the-current-artboard"},"10. Create a text element to show the profile information inside the current artboard"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const text = new Text(); // [1]\ntext.text = JSON.stringify(dropboxProfile); // [2]\ntext.styleRanges = [\n  // [3]\n  {\n    length: text.text.length,\n    fill: new Color("#0000ff"),\n    fontSize: 10,\n  },\n];\nselection.insertionParent.addChild(text); // [4]\ntext.moveInParentCoordinates(100, 100); // [5]\n')),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Create a new ",Object(r.mdx)("inlineCode",{parentName:"li"},"Text")," instance in XD"),Object(r.mdx)("li",{parentName:"ol"},"Populate the text with the stringified version of the profile ",Object(r.mdx)("inlineCode",{parentName:"li"},"json")," object"),Object(r.mdx)("li",{parentName:"ol"},"Add the ",Object(r.mdx)("inlineCode",{parentName:"li"},"styleRanges")," for the text"),Object(r.mdx)("li",{parentName:"ol"},"Insert the text"),Object(r.mdx)("li",{parentName:"ol"},"Move the text inside the artboard to make it visible")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-integrate-with-o-auth-index-md-8be3258a82ff9aa0237d.js.map