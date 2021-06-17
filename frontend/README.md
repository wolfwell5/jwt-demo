# yarn add, npm install 等安装依赖

### 教程地址 https://zellwk.com/blog/local-mongodb/

#1. 启动 mongodb
brew services start mongodb-community@4.2
###### brew services list
###### brew services stop mongodb-community@4.2
###### brew services restart mongodb

###### $ brew install mongodb-database-tools
#### 运行 mongo 必备：
###### brew install mongodb-community-shell

##### MongoDB Compass gives you another way to access MongoDB. It’s an app that makes checking (and editing) databases easier if you’re not a fan of the command line.
###### brew install --cask mongodb-compass

#2 backend  start up
node app.js

#3 frontend  start up
cd frontend
yarn start
