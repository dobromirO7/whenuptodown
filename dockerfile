FROM node:20.3.1
WORKDIR /app
RUN echo "file test content" > ./test.txt
COPY package.json .
CMD cat ./test.txt && ls -la && sleep 20

