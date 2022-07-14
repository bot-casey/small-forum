FROM node:latest as dev

WORKDIR /usr/src/app
ENV NODE_PATH=/usr/src/app

COPY package.json package-lock.json tsconfig.json tslint.json ./ 
COPY ./src ./src
RUN npm ci
RUN npm run build
EXPOSE 5000

CMD ["npm", "run", "start"]



FROM node:latest as prod

WORKDIR /usr/src/app
ENV NODE_PATH=/usr/src/app

COPY package.json package-lock.json tsconfig.json tslint.json ./ 
COPY --from=dev /usr/src/app/dist ./dist
RUN npm ci --production
EXPOSE 5000

CMD ["node", "."]