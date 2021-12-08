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
package.json content 
```
{
  "name": "typescript-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "Hai",
  "license": "ISC",
  "dependencies": {
    "@chakra-ui/icons": "^1.1.1",
    "@chakra-ui/react": "^1.7.2",
    "@emotion/react": "^11.7.0",
    "@emotion/styled": "^11.6.0",
    "framer-motion": "^5.4.3",
    "next": "^12.0.7",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-table": "^7.7.0"
  },
  "devDependencies": {
    "eslint": "^8.4.1",
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
