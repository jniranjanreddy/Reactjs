## Important plugins fir VSCode
  1. prettier - Code Formatter
  2. format document
  3. babel ecma - Michael McDermott
  4. code runner - jun Han
  5. ES7+ React/Redux/React-Native snippets v4.4.3 -  dsznajder
  
## Important modules
1. MobX
2. 


JSX - JavaScript XML
DOM - Document Object Model

D = Html Document
O = elements like h1, head, body, label
M = Complete Document means complete html document

```
Important Nodes
1. components - its a function
2. props - reuse of functions

Importanat URLs
1. https://jsbin.com/ # for online coding


* FLOW
App.js --> index.js --> index.html


Compositions:

Event Handlers
1. on click event Handler
2. On Change event Handler
3. On Submit Handler

Hooks:
1. useState
2. useEffect

Database: https://firebase.google.com/

```
# Redux
root@minikube01 /jnr/Reactjs (main) # npm install redux -g

root@minikube01 /jnr/Reactjs (main) # npm install react-redux -g

root@minikube01 /jnr/Reactjs (main) # npm install redux-thunk -g

root@minikube01 /jnr/Reactjs (main) # npm install redux-devtools-extension



```


How to create ReactJS App...

[root@minikube01 ~]# npm --version
6.14.15

[root@minikube01 ~]# node --version
v14.18.1

[root@minikube01 ~]# mkdir reactJS
[root@minikube01 ~]# cd  reactJS

[root@minikube01 reactJS]# npx create-react-app my-app
npx: installed 67 in 29.548s

Creating a new React app in /myworkspace/reactJS/my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> core-js@3.20.2 postinstall /myworkspace/reactJS/my-app/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.20.2 postinstall /myworkspace/reactJS/my-app/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ react-dom@17.0.2
+ react@17.0.2
+ cra-template@1.1.3
+ react-scripts@5.0.0
added 1368 packages from 618 contributors in 183.549s

166 packages are looking for funding
  run `npm fund` for details


Initialized a git repository.

Installing template dependencies using npm...
npm WARN @apideck/better-ajv-errors@0.3.2 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.0 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @testing-library/react@12.1.2
+ @testing-library/jest-dom@5.16.1
+ web-vitals@2.1.3
+ @testing-library/user-event@13.5.0
added 33 packages from 81 contributors in 37.116s

166 packages are looking for funding
  run `npm fund` for details

Removing template package using npm...

npm WARN @apideck/better-ajv-errors@0.3.2 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.0 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

removed 1 package and audited 1401 packages in 21.588s

166 packages are looking for funding
  run `npm fund` for details

found 2 moderate severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Created git commit.

Success! Created my-app at /myworkspace/reactJS/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
[root@minikube01 reactJS]#

```
