const env = process.env;

module.exports = {
  HOST: "cluster0.yeelm.gcp.mongodb.net",
  PORT: 27017,
  DB: "web_auth",
  USER: env.REACT_APP_USER,
  PASSWORD: env.REACT_APP_PASSWORD,
};