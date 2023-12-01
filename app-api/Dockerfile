FROM alpine
LABEL maintainer = "ferreira.h@aluno.edu.ifsp.br"
RUN apk add --update nodejs
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 3333
ENTRYPOINT ["node", "./server.js"]
