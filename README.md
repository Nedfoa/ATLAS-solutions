# ATLAS Solutions — versão com destaque para o Portal Orelha

## Arquivos
- `index.html`: estrutura da página.
- `style.css`: estilos gerais da ATLAS e estilos específicos da área do Orelha.
- `script.js`: menu responsivo, navegação ativa, animações e formulário demonstrativo.
- `assets/logo.png`: logo da ATLAS Solutions.
- `assets/orelha-portal.png`: referência visual do portal de adoção.
- `assets/orelha-listagem.png`: captura adicional da listagem de pets recebida.

## Como visualizar
Abra `index.html` no navegador. Para manter o funcionamento dos links e das imagens, deixe a pasta `assets` junto dos arquivos HTML, CSS e JavaScript.

O botão do Orelha direciona para https://portalorelhafront.vercel.app/ em uma nova aba. O formulário de contato ainda precisa ser conectado ao backend ou a um serviço de envio de e-mail.


## Como adicionar imagens ao carrossel do Orelha

1. Coloque cada nova imagem dentro da pasta `assets`.
2. Abra `index.html` e procure o comentário `ADICIONE MAIS IMAGENS AQUI`.
3. Copie um bloco `<div class="orelha-slide"> ... </div>` já existente e cole abaixo.
4. Altere o caminho do `src` para o nome do arquivo, por exemplo `assets/orelha-perfil-pet.png`, e atualize o texto `alt`.
5. Salve. Os indicadores do carrossel são criados automaticamente conforme a quantidade de imagens.

Não é necessário alterar o JavaScript ao adicionar imagens.
