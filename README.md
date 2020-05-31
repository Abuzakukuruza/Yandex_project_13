# Яндекс.Практикум
 

## Проектная работа 13_v1.0.1
 

## MongoDB

   

### Краткая информация о проекте 

Изучение серверной разработки на MongoDB.  
В работе применяются базы данных MongoDB для разработки бэкенда проекта Mesto и разработки API, согласно принципам REST.


### ПО для выполнения задания:

<li>
Git
<li>
Node.js
<li>
MongoDB
<li>
MongoDB Compass Community
<li>
NPM-пакеты: 
eslint, eslint-config-airbnb-base, eslint-plugin-import, express, mongoose, body-parser, validator

  
  

### Инструкция по сборке:
- сервер запускается командой **npm run start** по адресу **localhost:3000**
- Node.js приложение подключается к серверу Mongo по адресу **mongodb://localhost:27017/mestodb**
- запрос на  **GET/users** возвращает всех пользователей из базы
- запрос **GET/users/:userId** возвращает конкретного пользователя
- запрос **POST/users** создаёт пользователя. В теле POST-запроса на создание пользователя передается JSON-объект с тремя полями: **name**, **about** и **avatar**.

