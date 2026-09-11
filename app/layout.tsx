@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --papel: #f7f5f0;
  --tinta: #1c2521;
  --tinta-suave: #4a5550;
  --linha: #d8d3c4;
  --linha-forte: #b8b19c;
  --selo: #2f4d3f;
  --selo-hover: #24382e;
  --selo-fraco: #e5ebe6;
  --alerta: #9c5a2e;
  --alerta-fraco: #f3e6da;
  --risco: #8a2f2f;
  --risco-fraco: #f4e1e1;
  --dourado: #a9822f;
  --dourado-fraco: #f2ead4;
}

body {
  background: var(--papel);
  color: var(--tinta);
}

.tabular {
  font-variant-numeric: tabular-nums;
}

.font-editorial {
  font-family: Georgia, 'Times New Roman', serif;
}

.font-dados {
  font-family: 'Courier New', Courier, monospace;
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Análise de Valuation — Preço justo de ações da B3",
    template: "%s — Análise de Valuation",
  },
  description:
    "Calcule o valor justo de qualquer ação da B3 com metodologia fundamentalista: Graham, Bazin, DCF e P/L, com indicadores e parecer detalhado.",
};

function Header() {
  return (
    <header className="border-b border-linha bg-papel sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-2.5 h-2.5 bg-selo inline-block" />
          <span className="font-editorial text-[19px] leading-none">
            Análise de Valuation
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-5 text-[13px] text-tinta-suave shrink-0">
          <a href="/o-que-e-valuation" className="hover:text-tinta transition-colors">Metodologia</a>
          <a href="/formula-de-graham" className="hover:text-tinta transition-colors">Fórmulas</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-linha mt-16">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="grid sm:grid-cols-3 gap-8 text-[13px]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-selo inline-block" />
              <span className="font-editorial text-[16px]">Análise de Valuation</span>
            </div>
            <p className="text-tinta-suave leading-relaxed max-w-xs">
              Valuation fundamentalista de ações da B3, calculado a partir de dados públicos de mercado.
            </p>
          </div>
          <div>
            <p className="text-tinta-suave uppercase tracking-wide text-[11px] mb-3">Metodologia</p>
            <ul className="space-y-2 text-tinta-suave">
              <li><a href="/o-que-e-valuation" className="hover:text-selo transition-colors">O que é valuation</a></li>
              <li><a href="/formula-de-graham" className="hover:text-selo transition-colors">Fórmula de Graham</a></li>
              <li><a href="/metodo-bazin" className="hover:text-selo transition-colors">Método de Bazin</a></li>
            </ul>
          </div>
          <div>
            <p className="text-tinta-suave uppercase tracking-wide text-[11px] mb-3">Institucional</p>
            <ul className="space-y-2 text-tinta-suave">
              <li><a href="/politica-de-privacidade" className="hover:text-selo transition-colors">Política de privacidade</a></li>
              <li><a href="/termos-de-uso" className="hover:text-selo transition-colors">Termos de uso</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-linha mt-8 pt-6">
          <p className="text-[11.5px] text-tinta-suave leading-relaxed max-w-3xl">
            As informações apresentadas têm caráter exclusivamente informativo e educacional.
            Não constituem recomendação de compra ou venda de nenhum ativo.
          </p>
          <p className="text-[11.5px] text-tinta-suave mt-3">© 2026 Análise de Valuation.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-papel text-tinta">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="mb-8">
        <p className="text-[64px] font-medium text-linha mb-2">404</p>
        <h1 className="font-editorial text-[32px] sm:text-[40px] mb-3">Página não encontrada</h1>
        <p className="text-[16px] text-tinta-suave max-w-md mx-auto leading-relaxed">
          A página que você está procurando não existe ou foi movida. Vamos voltar ao início?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <a href="/" className="text-[14px] px-6 py-3 bg-selo text-white hover:bg-selo-hover transition-colors">
          Voltar ao início
        </a>
        <form action="" onSubmit={(e) => {
          e.preventDefault();
          const input = (e.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
          const ticker = input.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
          if (ticker.length >= 4) window.location.href = `/acao/${ticker}`;
        }} className="flex gap-2">
          <input
            type="text"
            placeholder="Digite um ticker..."
            maxLength={7}
            className="text-[13px] px-4 py-3 border border-linha-forte focus:outline-none focus:border-selo tabular"
          />
          <button type="submit" className="text-[13px] px-4 py-3 bg-papel border border-linha text-tinta-suave hover:border-selo transition-colors whitespace-nowrap">
            Analisar
          </button>
        </form>
      </div>

      <div className="mt-12 pt-8 border-t border-linha">
        <p className="text-[12px] uppercase tracking-wide text-tinta-suave mb-4">Conteúdo popular</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <a href="/o-que-e-valuation" className="text-[13px] text-tinta-suave hover:text-selo transition-colors">
            → O que é valuation
          </a>
          <a href="/formula-de-graham" className="text-[13px] text-tinta-suave hover:text-selo transition-colors">
            → Fórmula de Graham
          </a>
          <a href="/metodo-bazin" className="text-[13px] text-tinta-suave hover:text-selo transition-colors">
            → Método de Bazin
          </a>
          <a href="/politica-de-privacidade" className="text-[13px] text-tinta-suave hover:text-selo transition-colors">
            → Política de privacidade
          </a>
        </div>
      </div>
    </div>
  );
}
"use client";
export default function HomePage() {
  return (
    <div>
      <section className="border-b border-linha">
        <div className="max-w-5xl mx-auto px-5 pt-14 pb-12">
          <p className="text-[12px] tabular uppercase tracking-wide text-selo mb-4">
            Metodologia fundamentalista · Dados públicos da B3
          </p>
          <h1 className="font-editorial text-[34px] sm:text-[42px] leading-[1.15] max-w-2xl mb-5">
            Descubra o preço justo de qualquer ação da bolsa
          </h1>
          <p className="text-[16px] text-tinta-suave max-w-xl leading-relaxed mb-8">
            Digite um ticker e receba, em segundos, um valuation completo:
            Graham, Bazin, DCF e P/L de referência — combinados em um parecer único.
          </p>
          <form action="" onSubmit={(e) => {
            e.preventDefault();
            const input = (e.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
            const ticker = input.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
            if (ticker.length >= 4) window.location.href = `/acao/${ticker}`;
          }} className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
            <input
              type="text"
              placeholder="Digite o ticker — ex: PETR4"
              maxLength={7}
              autoFocus
              className="flex-1 text-[16px] px-4 py-3 bg-white border border-linha-forte focus:outline-none focus:border-selo tabular"
            />
            <button type="submit" className="text-[14px] font-medium px-6 py-3 bg-selo text-white hover:bg-selo-hover transition-colors whitespace-nowrap">
              Analisar ação
            </button>
          </form>
          <div className="flex flex-wrap gap-2 mt-4">
            {["PETR4","VALE3","ITUB4","WEGE3","BBAS3"].map((t) => (
              <a key={t} href={`/acao/${t}`}
                className="text-[12px] tabular px-2.5 py-1 border border-linha text-tinta-suave hover:border-selo hover:text-selo transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-8">
        <div className="border border-dashed border-linha-forte flex items-center justify-center text-[11px] text-tinta-suave uppercase tracking-wide" style={{minHeight:"90px"}}>
          Publicidade
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-6">
        <p className="text-[12px] uppercase tracking-wide text-tinta-suave mb-6">Como a análise é montada</p>
        <div className="grid sm:grid-cols-3 gap-px bg-linha border border-linha">
          {[
            { n:"01", t:"Dados de mercado", d:"Preço, LPA, VPA e indicadores buscados em tempo real a partir de fontes públicas da B3." },
            { n:"02", t:"Quatro metodologias", d:"Graham, Bazin, DCF simplificado e P/L de referência calculados de forma independente." },
            { n:"03", t:"Parecer consolidado", d:"Os resultados viram um parecer em linguagem clara, com pontos fortes e de atenção." },
          ].map((item) => (
            <div key={item.n} className="bg-papel p-6">
              <p className="font-editorial text-[22px] text-selo mb-2 tabular">{item.n}</p>
              <p className="text-[14px] font-medium mb-1.5">{item.t}</p>
              <p className="text-[13px] text-tinta-suave leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-10">
        <p className="text-[12px] uppercase tracking-wide text-tinta-suave mb-5">Para entender melhor</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { href:"/o-que-e-valuation", t:"O que é valuation", d:"Entenda o conceito por trás de calcular o valor justo de uma empresa negociada em bolsa." },
            { href:"/formula-de-graham", t:"Fórmula de Graham", d:"A fórmula clássica de Benjamin Graham para valor intrínseco, explicada passo a passo." },
            { href:"/metodo-bazin", t:"Método de Bazin", d:"Como o preço-teto de Décio Bazin ajuda investidores de dividendos." },
          ].map((item) => (
            <a key={item.href} href={item.href} className="group border border-linha hover:border-selo transition-colors p-5">
              <p className="text-[14px] font-medium mb-1 group-hover:text-selo transition-colors">{item.t}</p>
              <p className="text-[13px] text-tinta-suave leading-relaxed">{item.d}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
