FROM node:18-alpine
RUN mkdir -p /var/www/Authserver
WORKDIR /var/www/Authserver
COPY package.json ./
RUN npm install
COPY ./ ./
EXPOSE 8000
CMD ["npm", "start"]