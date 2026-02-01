/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

export function up(pgm) {
  pgm.createTable('albums', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      notNull: true,
    },
  });
}

export function down(pgm) {
  pgm.dropTable('albums');
}
