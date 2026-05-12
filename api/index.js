export default function handler(req, res) {

  const hora = new Date().getHours();

  let destino = "";

  // 08h às 12h
  if (hora >= 8 && hora < 12) {
    destino = "https://www.sympla.com.br/evento/1-encontro-de-biomedicina-da-nova-alta-paulista/3418441?share_id=whatsapp";
  }

  // 12h às 18h
  else if (hora >= 12 && hora < 18) {
    destino = "https://www.sympla.com.br/evento/1-encontro-de-biomedicina-da-nova-alta-paulista/3418441?share_id=whatsapp";
  }

  // 18h às 23h
  else {
    destino = "www.google.com/";
  }

  res.writeHead(302, {
    Location: destino
  });

  res.end();
}