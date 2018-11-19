# nodejs-typescript-demo1

Author: Anthony Leotta

Date: Nov. 16, 2018

Reference: https://www.youtube.com/watch?v=2ToXwB9NqZY&t=1028s

## Intro

This project was created from scratch based om Manuel Rauber's talk at the 
International JavaScript Conference.  I tried the githun repo located at https://github.com/thinktecture/javascript-conference-2017-nodejs-typescript.git but I got build errors.  So rather than debug the errors, I decided to just build by own project demo from scratch and then if I encounter any issues, I will resolve them in a more organized fashion.

The idea is to use Manuel Rauber's no nonsense approach to create a Dockerized Web API using node.js written in TypeScript.  I will deploy on Azure or AWS, or both.  Once the basic framework is created, I will dig deeper into the TypeORM and create more end-points for the API.  I'm not sure where or when this project will end.   I consider this project to be a Rabbit Hole with no visible bottom.  

## Why

Now that Angular is stable and moving fast with multiple releases per year, using Typescript for both client and server source code has clear advantages.  This project will be used to explore the effectiveness of using Typescript on the back-end rather than vanilla Javascript.   

## Step 1 : Install npm modules

Install the follow npm modules.

```
npm i typescript --save
npm i ts-node  --save
npm i nodemon  --save
npm i restify
npm i @types/restify --save
npm i typeorm --save
npm i pg --save
npm i rimraf --save
```

```
npm i typescript ts-node nodemon restify @types/restify typeorm pg rimraf --save
```


