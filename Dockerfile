FROM node:20
WORKDIR /usr/src/app
COPY  package*.
RUN npm install
COPY  . . 
EXPOSE 5000
CMD ["NODE", "INDEX.HTML"]
