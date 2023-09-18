FROM node:18-alpine
RUN mkdir -p /var/www/Accountserver
WORKDIR /var/www/Accountserver
COPY package.json ./
RUN npm install
COPY ./ ./
EXPOSE 7010
CMD ["npm", "start"]