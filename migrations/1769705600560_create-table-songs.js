/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

export function up(pgm) {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      notNull: true,
    },
    genre: {
      type: 'TEXT',
      notNull: true,
    },
    performer: {
      type: 'TEXT',
      notNull: true,
    },
    duration: {
      type: 'INTEGER',
    },
    album_id: {
      type: 'VARCHAR(50)',
      references: 'albums(id)', // jelas kolom yang direferensi
      onDelete: 'SET NULL',     // jika album dihapus, album_id di songs jadi null
      notNull: false,           // harus nullable supaya SET NULL bisa bekerja
    },
  });
}

export function down(pgm) {
  pgm.dropTable('songs');
}
