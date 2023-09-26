document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const assunto = document.getElementById('assunto').value;
      const telefone = document.getElementById('telefone').value;
      const mensagem = document.getElementById('mensagem').value;
  
      /*Aqui seria para inserir a lógica para enviar os dados do formulário para o servidor*/
      console.log('Nome:', nome);
      console.log('Assunto:', assunto);
      console.log('Telefone:', telefone);
      console.log('Mensagem:', mensagem);
  
      form.reset(); /*limpa os camposs do formulario apos o envio*/
    });
  });
  
    const botaoEnviar = document.getElementById('botao-enviar');

botaoEnviar.addEventListener('mouseover', function() {
  botaoEnviar.style.transform = 'scale(1.20)'; /*Aumenta o tamanho do botão*/
});

botaoEnviar.addEventListener('mouseout', function() {
  botaoEnviar.style.transform = 'scale(1)'; /*Restaura o tamanho original do botão*/
});
