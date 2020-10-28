#install
<ul>
  <li>run php artisan key:generate</li>
  <li>Configure your database connection like .env.example</li>
  <li>run php artisan migrate</li>
</ul>

#Routes
<ul>
    <li>POST - /api/login</li>
    <p>Responsavel por realizar o login e recuperar o JWT para aplicação</p>
    <p>application/json <br>
      Corpo da requisição esperado:
      {
        	"email" : "thiagomarcato@gmail.com",
        	"password" : "@123password",
        	"device_name": "Website"
      }
    </p>
    <li>GET - /api/user_profile</li>
    <p>Responsavel por receber o JWT retornado pela rota acima e retornar o profile do usuario</p>
</ul>