# This is ToDoList app
# todolist is the app that i create from ebook of essential typescript
# Init this project you need some to get started
Step 1: Install Node.js 
official website: https://nodejs.org/
check version
node --version
npm --version

Step 2: Install Git
Official website: from https://git-scm.com/ downloads.

git --version

Step 3: Intall TypeScript

npm install --global typescript@3.5.1

tsc --version

Step 4: Install a Programmer's Editor
https://code.visualstudio.com.

Getting Start Project
Create a folder Example todo
cd todo

npm init --yes

Creating the Compliler Configuration file
Content of the file tsconfig.json file in the todo folder
===========
{ 
  "compilerOptions": { 
    "target": "es2018", 
    "outDir": 
    "./dist", 
    "rootDir": 
    "./src", 
    "module": "commonjs" 
  } 
}
===========

Start Codding
