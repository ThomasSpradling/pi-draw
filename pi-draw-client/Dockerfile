# stage 1
FROM node:20.0
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/pi-draw-client /usr/share/nginx/html
