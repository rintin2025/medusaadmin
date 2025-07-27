const { Medusa } = require("@medusajs/medusa");

async function createAdmin() {
  const medusa = await Medusa({ directory: process.cwd() });

  await medusa.bootstrap();

  const userService = medusa.resolve("userService");

  await userService.create({
    email: "gaston@rintin.co",
    password: "Rintin2025!",
    role: "admin",
  });

  console.log("✅ Admin creado exitosamente");
  process.exit();
}

createAdmin().catch((err) => {
  console.error("❌ Error al crear admin:", err);
  process.exit(1);
});
