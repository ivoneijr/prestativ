const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];

export default function Who() {
  return (
    <div id="quem-somos" className="relative bg-orange-600">
    <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
      <div className="h-full w-full xl:grid xl:grid-cols-2">
        <div className="h-full xl:relative xl:col-start-2">
          <img
            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
            src="landing/team.jpg"
            alt="Pessoas felizes no por do sol"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-600 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          />
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 className="text-base font-semibold">
          <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
            Sobre a
          </span>
        </h2>
        <p className="mt-3 text-3xl font-bold tracking-tight text-white">
          Prestativ
        </p>
        <p className="mt-5 text-lg text-gray-300">
        Somos uma equipe altamente capacitada e comprometida em atender às necessidades e exigências de nossos clientes, seguindo rigorosos padrões de desenvolvimento. Como empresa de consultoria SAP, lidamos com desafios desde os mais simples até os mais complexos, sempre visando construir parcerias duradouras. Oferecemos comprometimento, segurança, confiabilidade, disponibilidade e custos atrativos. Utilizamos métodos testados e aprimorados e mantemos nossos clientes continuamente informados sobre o andamento de seus projetos.
        </p>
        {/* <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          {metrics.map((item) => (
            <p key={item.id}>
              <span className="block text-2xl font-bold text-white">
                {item.stat}
              </span>
              <span className="mt-1 block text-base text-gray-300">
                <span className="font-medium text-white">
                  {item.emphasis}
                </span>{" "}
                {item.rest}
              </span>
            </p>
          ))}
        </div> */}
      </div>
    </div>
  </div>
  );
}
