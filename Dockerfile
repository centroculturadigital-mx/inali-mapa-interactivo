FROM nginx:alpine

COPY ./__sapper__/export /usr/share/nginx/html
EXPOSE 80
