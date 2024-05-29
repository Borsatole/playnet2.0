
var cidade = "bauru - sp";
var anoAtual = new Date();


var title = document.querySelector("title");
var h1 = document.querySelector("#h1_principal");


var revendedor = document.querySelector("#revendedor");
var revendedor_h1 = document.querySelector("#revendedor_h1");

title.innerText = `Teste IPTV 3 Horas + Sistema ANTI-TRAVA A Melhor Lista de ${cidade.toUpperCase()} ${anoAtual.getFullYear()}`

h1.innerText = `
Teste IPTV Grátis, Teste IPTV 3 horas, A Melhor Lista IPTV de ${cidade.toUpperCase()}
`

revendedor.innerText =`
REVENDA EM ${cidade.toUpperCase()} ! TEM INTERESSE?
`
revendedor_h1.innerHTML =`
<p>Você está procurando um negocio muito lucrativo para trabalhar em ${cidade.toUpperCase()} ?</p>

<p>Temos a solução perfeita para você! Apresentamos a melhor plataforma de streaming com o melhor preço do mercado.</br>
 E o melhor de tudo, estamos aqui para ajudar do zero você a se tornar um revendedor de sucesso em ${cidade.toUpperCase()}! </br> 
 </br>
 <strong>E outros benefecios como:</strong> <ul style="list-style:none;">

 <li><strong>TRABALHO FLEXIVEL:</strong><br> Você faz seu horario, dia de trabalho e onde vai trabalhar, <br> se é de porta em porta ou no conforto da sua casa! Sem patrão sem pressão.</li><br>

 <li><strong>TRABALHO LUCRATIVO:</strong><br> A Lucratividade é muito alta, podendo ganhar facil entre R$200 e R$800 reais por dia em ${cidade}. <br>Tudo depende do seu esforço.</li><br>

 <li><strong>JA É UM VENDEDOR?</strong><br> 
 Junte-se a nós e aumente ainda mais seus lucros! <br> Oferecemos suporte personalizado e te ajudamos a alcançar seus objetivos.<br>

 Não perca tempo! Essa oportunidade única pode ser sua. <br>Entre em contato conosco agora mesmo e saiba mais! 
 </li><br>
 




`