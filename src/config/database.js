module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gym',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
