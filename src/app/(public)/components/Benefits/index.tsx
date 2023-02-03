import {
  CurrencyDollarIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Benefits() {
  return (
    <div id="benefits" className="relative overflow-hidden pt-16 pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-300">
                  <CurrencyDollarIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Custos e prazos previamente definidos
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Ter custos e prazos definidos é fundamental para o sucesso de qualquer empreendimento, 
                  seja ele grande ou pequeno. Isso permite que as pessoas envolvidas tenham clareza sobre 
                  os recursos disponíveis e o tempo necessário para realizar as tarefas, ajudando a garantir
                   a eficiência e a qualidade do trabalho.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  A Prestativ entrega as vantagens de ter um <strong>planejamento eficiente</strong>, <strong>controle de recursos</strong>, <strong>tomada de decisão</strong> e <strong>comunicação clara</strong>.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact_us"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-500"
                  >
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo; ter custos e prazos definidos é fundamental para o sucesso de qualquer empreendimento, ajudando a garantir a eficiência, a qualidade e a comunicação clara entre as pessoas envolvidas.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/landing/time-money.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-300">
                  <UserGroupIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Contratação de serviço sob demanda
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  A contratação de serviços sob demanda é uma solução cada vez mais popular 
                  para empresas que precisam de acesso a serviços especializados, mas sem o compromisso 
                  de uma contratação a longo prazo ou a necessidade de manter uma equipe interna. Nesta
                   modalidade, as empresas contratam os serviços de forma flexível, de acordo com suas 
                   necessidades e demandas.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact_us"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-500"
                  >
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-300">
                  <AdjustmentsHorizontalIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Flexibilidade no dimensionamento da equipe
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  A flexibilidade no dimensionamento da equipe é uma característica fundamental 
                  para empresas que precisam se adaptar rapidamente às mudanças no mercado ou a 
                  novas demandas de seus clientes. Ter a capacidade de aumentar ou reduzir o tamanho 
                  da equipe de acordo com as necessidades do projeto ou do cliente pode ser uma 
                  vantagem competitiva significativa, permitindo a maximização do uso dos recursos 
                  disponíveis em situações como: <strong>Projetos de curto prazo</strong>, <strong>Flutuações na demanda</strong> e <strong>Projetos urgentes</strong>.
                </p>

                <p className="mt-6 text-lg text-gray-500">
                Além disso, a flexibilidade no dimensionamento da equipe também pode trazer benefícios financeiros para a empresa, pois permite reduzir os custos com salários, benefícios e outras despesas relacionadas à equipe quando não há demanda suficiente para justificar a manutenção de uma equipe completa.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact_us"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-500"
                  >
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/landing/flex-team.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-300">
                  <UserGroupIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Economia de custo em com espaço físico, infraestrutura, RH e gestão
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Não se preocupar com os custos de espaço físico, infraestrutura, 
                  Recursos Humanos e gestão, pode fazer sua empresa se concentrar exclusivamente em suas atividades principais,
                   o que pode aumentar a eficiência e a produtividade da empresa. Além disso, a eliminação desses
                    gastos pode liberar recursos financeiros que podem ser destinados a outras áreas importantes da 
                    empresa, como a pesquisa e desenvolvimento, a aquisição de novos clientes ou a expansão do negócio.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact_us"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-500"
                  >
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/landing/office.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-300">
                  <ArrowTrendingUpIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Métricas de esforço
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Métricas de esforço <strong>realizadas e homologadas</strong> junto ao cliente para garantir transparência,
                   alinhamento de expectativas, eficiência na gestão de projetos e comunicação clara aumentando as chances 
                   de sucesso do projeto e fortalecendo a relações.
                </p>

                <div className="mt-6">
                  <a
                    href="#contact_us"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-500"
                  >
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/landing/metrics.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-300">
                  <DocumentChartBarIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Status report
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  O controle de status do desenvolvimento de projetos com relatórios periódicos é uma prática 
                  essencial para garantir o sucesso do projeto. Ele permite ao gestor ter uma  visão geral do progresso
                   do projeto, permitindo o acompanhamento do avanço em relação aos prazos, orçamentos e objetivos 
                   estabelecidos.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact_us"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-500"
                  >
                    Comece agora
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/landing/status-report.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
