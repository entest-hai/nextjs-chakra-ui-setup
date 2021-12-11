# Setup NextJS with Typescript and ChakraUI 
**07 DEC 2021**
### Init project with npm 
This will create package.json
```
npm init -y
```
### Update package.json 
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion next react react-dom react-table react-icons @chakra-ui/icons
```
To support typescript 
```
npm i -D typescript
```
package.json content ** "eslint": "^7.32.0"**
```
{
  "name": "aws-amplify-nextjs-demo",
  "version": "1.0.0",
  "description": "demo aws amplify, nextjs, and chakra ui",
  "main": "prettier.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tranminhhaifet/aws-amplify-nextjs-demo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/tranminhhaifet/aws-amplify-nextjs-demo/issues"
  },
  "homepage": "https://github.com/tranminhhaifet/aws-amplify-nextjs-demo#readme",
  "dependencies": {
    "@aws-amplify/ui-react": "^2.1.3",
    "@chakra-ui/icons": "^1.1.1",
    "@chakra-ui/react": "^1.7.2",
    "@emotion/react": "^11.7.0",
    "@emotion/styled": "^11.6.0",
    "aws-amplify": "^4.3.10",
    "framer-motion": "^5.4.4",
    "next": "^12.0.7",
    "package.json": "^2.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-table": "^7.7.0"
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-next": "^12.0.7",
    "prettier": "^2.5.1",
    "typescript": "^4.5.2"
  }
}
```
### First page 
```
./pages/index.js 
```
```
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

### Eslint and prettier configuration 
```
npm i -D eslint eslint-config-next prettier 
```
.eslintrc.json
```
{
    "root": true,
    "extends": "next",
    "rules": {
      "quotes":[
        "error",
        "single"
      ],
      "indent":[
        "error",
        2
      ],
      "no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "react/display-name": 0
    }
  }
```
prettier.config.js
```
const options = {
    arrowParens: 'avoid',
    singleQuote: true,
    bracketSpacing: true,
    endOfLine: 'lf',
    semi: false,
    tabWidth: 2,
    trailingComma: 'none'
  }
  
  module.exports = options
```
