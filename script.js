
document.getElementById('root').innerHTML = `
  <header class="bg-white shadow p-4 flex flex-col items-center">
    <img src="logo-consultoria.jpg" alt="Logo da Consultoria" class="h-24 mb-2"/>
    <h1 class="text-2xl font-bold">Consultoria Acadêmica TSO</h1>
    <p class="text-sm text-gray-600">Apoio completo para sua trajetória universitária</p>
  </header>
  <section class="p-6 bg-teal-50">
    <h2 class="text-xl font-semibold mb-2">Sobre a Consultoria</h2>
    <p>Oferecemos serviços personalizados para estudantes e pesquisadores com cuidado e excelência acadêmica.</p>
  </section>
  <section class="p-6">
    <h2 class="text-xl font-semibold mb-4">Nossos Serviços</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white p-4 shadow rounded-2xl"><h3 class="font-bold">Leitura Crítica</h3><p>Avaliação e parecer em PDF</p></div>
      <div class="bg-white p-4 shadow rounded-2xl"><h3 class="font-bold">Orientação Acadêmica</h3><p>Encontros online e apoio contínuo</p></div>
      <div class="bg-white p-4 shadow rounded-2xl"><h3 class="font-bold">Revisão e Formatação</h3><p>Correção linguística e normas</p></div>
      <div class="bg-white p-4 shadow rounded-2xl"><h3 class="font-bold">Transcrição</h3><p>Texto a partir de áudios</p></div>
    </div>
  </section>
  <section class="p-6 bg-teal-50">
    <h2 class="text-xl font-semibold mb-4">Avaliações dos Clientes</h2>
    <blockquote class="bg-white p-4 shadow rounded-xl italic">"Fiquei muito satisfeita com o serviço!" — Ana P.</blockquote>
  </section>
  <section class="p-6 bg-gray-200">
    <h2 class="text-xl font-semibold mb-4">Solicite um Orçamento</h2>
    <form action="mailto:atendimentotso@gmail.com" method="POST" encType="text/plain" class="space-y-4 max-w-xl mx-auto">
      <input type="text" name="nome" placeholder="Seu nome" class="w-full p-2 border rounded"/>
      <input type="email" name="email" placeholder="Seu e-mail" class="w-full p-2 border rounded"/>
      <select name="servico" class="w-full p-2 border rounded">
        <option>Selecione um serviço</option>
        <option>Leitura Crítica</option>
        <option>Orientação Acadêmica</option>
        <option>Revisão</option>
        <option>Formatação</option>
        <option>Transcrição</option>
      </select>
      <textarea name="mensagem" placeholder="Descreva sua necessidade" class="w-full p-2 border rounded h-32"></textarea>
      <button class="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Enviar Solicitação</button>
    </form>
  </section>
  <footer class="p-4 text-center text-sm text-gray-500">
    <p>&copy; 2025 Consultoria Acadêmica TSO. Todos os direitos reservados.</p>
    <p>Site desenvolvido com apoio do ChatGPT</p>
  </footer>
`;
