# NestJS + Prisma + PostgreSQL + Next.js + Tailwind

Monorepo pnpm:

    apps/api   NestJS 11 + Prisma 6        -> http://localhost:3001/api
    apps/web   Next.js 15 + Tailwind 4     -> http://localhost:3000
    docker-compose.yml  Postgres 17 + pgvector

## Avvio

    cp apps/api/.env.example apps/api/.env
    cp apps/web/.env.example apps/web/.env.local
    pnpm install
    pnpm db:up
    pnpm db:migrate --name init
    pnpm dev

## Test API

    curl -X POST localhost:3001/api/items -H 'Content-Type: application/json' \
      -d '{"title":"Primo","description":"ciao"}'
    curl localhost:3001/api/items

## Nuovo modulo

    cd apps/api && npx nest g resource <nome> --no-spec

Poi aggiungi il model in prisma/schema.prisma e lancia `pnpm db:migrate --name <nome>`.
