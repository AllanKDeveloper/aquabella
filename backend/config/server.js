module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3001),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "4f07224e799815a8e48441cc732f97f9"),
    },
  },
});
