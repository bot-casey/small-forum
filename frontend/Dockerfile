FROM node:latest as dev

WORKDIR /usr/src/app
ENV NODE_PATH=/usr/src/app

COPY babel.config.js package.json package-lock.json vue.config.js ./ 
COPY ./src ./src
RUN npm ci
EXPOSE 8080

CMD ["npm", "run", "serve"]



FROM node:latest as build

WORKDIR /usr/src/app
ENV NODE_PATH=/usr/src/app

COPY babel.config.js package.json package-lock.json vue.config.js ./ 
COPY ./src ./src

RUN npm ci
RUN ["npm", "run", "build"]



FROM nginx:latest as prod

COPY --from=build /usr/src/app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]