export default function handler(req, res) {

  // Hora do Brasil
  const agora = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo"
    })
  );

  const hora = agora.getHours();

  // Horários permitidos:
  // 10h às 11h
  // 14h às 15h

  const acessoLiberado =
    (hora >= 10 && hora < 11) ||
    (hora >= 14 && hora < 15);

  if (acessoLiberado) {

    res.writeHead(302, {
      Location: "https://SEU-LINK-AQUI.com"
    });

    res.end();

  } else {

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Acesso Encerrado</title>

        <style>
          body{
            margin:0;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#111;
            color:white;
            font-family:Arial;
            text-align:center;
          }

          .box{
            padding:40px;
          }

          h1{
            font-size:42px;
            margin-bottom:20px;
            color:#ff4d4d;
          }

          p{
            font-size:20px;
            color:#ddd;
          }
        </style>
      </head>

      <body>
        <div class="box">
          <h1>Prazo encerrado</h1>

          <p>
            Você perdeu o horário de acesso.
          </p>

          <p>
            Horários válidos:
            <br><br>
            10h às 11h
            <br>
            14h às 15h
          </p>
        </div>
      </body>
      </html>
    `);

  }
}