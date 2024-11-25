import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite', // Par exemple, utilisez SQLite pour simplifier
  database: 'db.sqlite', // Nom du fichier SQLite
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Localisation des entités
  synchronize: true, // Synchronisation automatique (ne pas utiliser en production)
});
