import React from "react";

const testimonials = [
  {
    name: "João Silva",
    text: "O Método Atlas revolucionou nossas vendas sem aumentar a equipe!",
  },
  {
    name: "Maria Oliveira",
    text: "Nunca imaginei vender tanto para minha própria base. Simples e eficiente!",
  },
  {
    name: "Carlos Souza",
    text: "A Thayzzi realmente entende do assunto. Resultados reais!",
  },
];

const steps = [
  {
    title: "Diagnóstico Personalizado",
    desc: "Analisamos sua operação e identificamos oportunidades ocultas na sua base de clientes.",
  },
  {
    title: "Implementação Estratégica",
    desc: "Aplicamos o Método Atlas com processos otimizados e tecnologia sob medida.",
  },
  {
    title: "Acompanhamento e Escala",
    desc: "Monitoramos resultados e ajustamos para maximizar vendas e lucros continuamente.",
  },
];

function App() {
  return (
    <div className="font-sans bg-tivo-black text-tivo-white min-h-screen">
      {/* HERO */}
      <section id="hero" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-12 gap-8 max-w-6xl mx-auto">
        <div className="flex-1 w-full max-w-xl">
          <div className="aspect-w-16 aspect-h-9 bg-tivo-dark rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="VSL Método Atlas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col items-center md:items-start gap-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-tivo-white">Método Atlas – Mais lucro, mais tempo e mais vendas da sua própria base.</h1>
          <p className="text-lg md:text-2xl text-tivo-light">Transformamos sua operação para que ela venda mais aos clientes que já estão com você — sem contratar novos funcionários ou buscar leads desesperadamente.</p>
          <a href="#cta-final" className="mt-4 px-8 py-4 rounded-lg text-lg font-semibold bg-tivo-orange hover:bg-tivo-gold text-tivo-white shadow-lg transition">Quero vender mais com o Método Atlas</a>
        </div>
      </section>

      {/* Dores + Autoridade */}
      <section id="dores" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-tivo-white">Você sente que sua equipe poderia vender mais, mas não sabe como destravar esse potencial?</h2>
        <p className="text-lg md:text-xl mb-4 text-tivo-light">Cansado de depender de novos leads, promoções agressivas ou aumentar o time para crescer?</p>
        <p className="text-lg md:text-xl mb-8 text-tivo-light">O <span className="font-bold text-tivo-orange">Método Atlas</span> foi criado por <span className="font-bold text-tivo-gold">Thayzzi</span>, especialista em vendas e operações, para transformar resultados de dentro para fora — usando o que você já tem.</p>
        <a href="#cta-final" className="inline-block mt-4 px-8 py-4 rounded-lg text-lg font-semibold bg-tivo-orange hover:bg-tivo-gold text-tivo-white shadow-lg transition">Quero vender mais com o Método Atlas</a>
      </section>

      {/* Método Atlas em 3 etapas */}
      <section id="metodo" className="py-16 px-4 bg-tivo-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-tivo-white">Como funciona o Método Atlas?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-tivo-light rounded-xl shadow-md p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-tivo-orange text-2xl font-bold mb-4 text-tivo-white">{i + 1}</div>
                <h3 className="text-xl font-semibold mb-2 text-tivo-dark">{step.title}</h3>
                <p className="text-tivo-dark">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a href="#cta-final" className="px-8 py-4 rounded-lg text-lg font-semibold bg-tivo-orange hover:bg-tivo-gold text-tivo-white shadow-lg transition">Quero vender mais com o Método Atlas</a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-tivo-white">Quem já aplicou recomenda</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-tivo-light rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-tivo-orange flex items-center justify-center text-tivo-white font-bold text-xl mb-2">{t.name[0]}</div>
              <p className="italic mb-2 text-tivo-dark">“{t.text}”</p>
              <span className="font-semibold text-tivo-dark">{t.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="#cta-final" className="px-8 py-4 rounded-lg text-lg font-semibold bg-tivo-orange hover:bg-tivo-gold text-tivo-white shadow-lg transition">Quero vender mais com o Método Atlas</a>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-16 px-4 bg-tivo-dark flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-tivo-white">Pronto para transformar sua operação?</h2>
        <p className="text-lg md:text-xl text-center mb-8 text-tivo-light">Aplique o Método Atlas e veja sua base de clientes render muito mais, sem complicação.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#hero" className="px-8 py-4 rounded-lg text-lg font-semibold bg-tivo-orange hover:bg-tivo-gold text-tivo-white shadow-lg transition">Quero vender mais com o Método Atlas</a>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg text-lg font-semibold bg-tivo-gold hover:bg-tivo-orange text-tivo-white shadow-lg transition">Falar com especialista</a>
        </div>
      </section>

      {/* Navegação fixa para mobile (opcional) */}
      <nav className="fixed bottom-4 left-0 right-0 flex justify-center md:hidden z-50">
        <a href="#cta-final" className="px-6 py-3 rounded-full bg-tivo-orange text-tivo-white font-bold shadow-lg">Quero vender mais</a>
      </nav>
    </div>
  );
}

export default App;
