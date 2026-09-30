import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  if ((await prisma.item.count()) > 0) {
    console.log('DB già popolato, seed saltato');
    return;
  }

  await prisma.item.createMany({
    data: [
      { title: 'Primo item', description: 'Dato di prova' },
      { title: 'Secondo item', description: 'Altro dato di prova' },
      { title: 'Terzo item' },
    ],
  });
  console.log('Seed completato');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
