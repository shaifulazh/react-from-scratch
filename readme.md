This is react with type script with Flask as backend as backend. Build by me. Please to share this to humans..hehe
Ignore the npm install below unless you know what you doing. To compile this react app, use "npm install && npm run build". Compile files
will be inside the "dist" folder.
 


npm install react react-dom
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin --save-dev
npm install --save-dev clean-webpack-plugin
npm install webpack webpack-cli webpack-dev-server --save-dev

npm install @babel/core babel-loader --save-dev



npm install @babel/preset-env @babel/preset-react --save-dev


"scripts": {
  "dev": "webpack serve",
  "build": "webpack",
  ...
}

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

npm install --save-dev typescript ts-loader @types/react @types/react-dom


