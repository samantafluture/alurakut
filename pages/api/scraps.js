import { SiteClient } from "datocms-client";

export default async function recebedorDeScraps(request, response) {
  if (request.method === "POST") {
    const TOKEN = "318d72a71b4a0a4a23f4c94c86d245";
    const client = new SiteClient(TOKEN);

    // No futuro, cabe validar essa inclusão de dados
    const registroCriado = await client.items.create({
      itemType: "998150", // Model ID
      ...request.body,
    });

    response.json({
      registroCriado: registroCriado,
    });

    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
