export default function handler(req, res) {

  // Hora do Brasil
  const agora = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo"
    })
  );

  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  // Converte tudo para minutos
  const horarioAtual = hora * 60 + minuto;

  // Horários permitidos
  const acessoLiberado =
    (horarioAtual >= (21 * 60 + 50) &&
     horarioAtual < (22 * 60 + 30)) ||

    (horarioAtual >= (11 * 60 + 50) &&
     horarioAtual < (12 * 60 + 50)) ||

    (horarioAtual >= (17 * 60 + 30) &&
     horarioAtual < (18 * 60 + 30));

  if (acessoLiberado) {

    res.writeHead(302, {
      Location: "https://google.com"
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
            Sexta-feira:
            <br>
            das 21:50h às 22:30h
            <br>
            Sábado:
            <br>
            das 11:50h às 12:50h e das 17:30h às 18:30h
          </p>
        </div>
      </body>
      </html>
    `);

  }
}
