import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "O que é a consultoria SAP?",
    answers: [
      "A consultoria SAP é um serviço prestado por especialistas que ajudam as empresas a implementar e maximizar o uso de sistemas SAP (Systems, Applications, and Products). A consultoria pode incluir desde a instalação e configuração do software até a implantação de soluções de negócios personalizadas e o treinamento dos usuários.",
    ]
  },
  {
    question: "Quais são os benefícios da contratação de uma consultoria SAP?",
    answers: [
      `Melhor aproveitamento do software SAP`,
      `Redução de erros e problemas técnicos`,
      `Aumento da eficiência e da eficácia do negócio`,
      `Implantação mais rápida e eficiente de soluções de negócios personalizadas`,
      `Melhoria na gestão de dados e informações`,
    ]
  },
  {
    question: "A empresa oferece treinamento para usuários finais?",
    answers: [
      `Sim, oferecemos treinamento para usuários finais para ajudá-los a aproveitar ao máximo o software SAP e aplicar as soluções de negócios de maneira eficiente.`,
    ]
  },
  {
    question: "Como posso solicitar uma consultoria SAP?",
    answers: [
      `Você pode entrar em contato conosco através de nossa página de contato, fornecendo detalhes sobre suas necessidades e solicitando uma proposta. Nossa equipe de consultores entrará em contato com você em breve.`,

    ]
  },
  {
    question: "Qual é o custo de uma consultoria SAP?",
    answers: [
      `O custo da consultoria SAP varia de acordo com as necessidades específicas de cada empresa e o escopo do projeto. Entre em contato conosco para obter uma proposta personalizada.`,

    ]
  },
]

export default function FAQ() {
  return (
    <div id="FAQ" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      {
                        faq.answers.map((answer, i) =>
                          <p key={i} className="text-base leading-7 text-gray-600">{answer}</p>)
                      }
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
