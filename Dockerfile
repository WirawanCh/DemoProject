FROM node:18-alpine

RUN mkdir -p /var/www/client
WORKDIR /var/www/client
COPY package*.json ./
RUN yarn install
COPY ./ ./

RUN yarn run build

CMD ["npx", "serve" ,"dist"]


FROM nginx

EXPOSE 80
COPY dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf