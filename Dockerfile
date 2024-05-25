FROM node:20.13.1

WORKDIR /app

COPY ./src/package.json ./src/package-lock.json ./
RUN if [ -f package-lock.json ]; then npm ci; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && npm install; \
    fi
