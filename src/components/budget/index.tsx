'use client'

import React from 'react'
import { Page } from './Page'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import logo from './assets/logo.png'
import { Table } from '../Table'
import { Chart } from './Chart'

import { useSuspenseQuery } from '@tanstack/react-query'
import { proposalsOptios } from '@/app/proposta/proposalsOptions'

type BudgetProps = {
  id: string
}

const montserrant = Montserrat({
  subsets: ['latin'],
  weight: ['700']
})

export function Budget({ id }: BudgetProps) {
  const {
    data: {
      systemPower,
      inverterAmount,
      inverterPower,
      totalInverterPowerCapacity,
      estimatedAverageMonthlyGeneration,
      estimatedAverageMonthlyGenerationWithTotalInverterPowerCapacity,
      requiredArea,
      requiredAreaWithTotalInverterPowerCapacity,
      consumpitionPerMonth,
      estimatedMonthlyGeneration,
      moduleManufacturer,
      modulePower,
      moduleAmount,
      inverterType,
      inverterManufacturer,
      extructureType,
      clientName,
      proposalPrice,
      manufacturingDefectModuleWarranty,
      efficiencyModuleWarranty,
      inverterWarranty,
      paymentConditions,
      createdAt
    }
  } = useSuspenseQuery(proposalsOptios(id))

  const systemCharacteristicsTableData = {
    titles: ['DESCRIÇÃO', 'QUANT.', 'UNIDADE'],
    rows: [
      [
        'Potência total de módulos',
        `${systemPower.toLocaleString('pt-br', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}`,
        'kW'
      ],
      [
        'Potência total de inversor',
        `${inverterPower.toLocaleString('pt-br', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}`,
        'kW'
      ],
      [
        'Capacidade de ampliação da potência de módulos',
        `${totalInverterPowerCapacity.toLocaleString('pt-br', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}`,
        'kW'
      ],
      [
        'Geração média mensal estimada',
        `${estimatedAverageMonthlyGeneration.toLocaleString('pt-br', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}`,
        'kWh/mês'
      ],
      [
        'Geração média mensal estimada com a ampliação máxima',
        `${estimatedAverageMonthlyGenerationWithTotalInverterPowerCapacity.toLocaleString(
          'pt-br',
          {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          }
        )}`,
        'kWh/mês'
      ],
      [
        'Área útil total necessária para a instalação dos módulos',
        `${requiredArea.toLocaleString('pt-br', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}`,
        'm²'
      ],
      [
        'Área útil total necessária para a ampliação máxima',
        `${requiredAreaWithTotalInverterPowerCapacity.toLocaleString('pt-br', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}`,
        'm²'
      ]
    ]
  }

  // const MONTHS = {
  //   0: {
  //     abreviateion: 'JAN',
  //     full: 'JANEIRO'
  //   },
  //   1: {
  //     abreviateion: 'FEV',
  //     full: 'FEVEREIRO'
  //   },
  //   2: {
  //     abreviateion: 'MAR',
  //     full: 'MARÇO'
  //   },
  //   3: {
  //     abreviateion: 'ABR',
  //     full: 'ABRIL'
  //   },
  //   4: {
  //     abreviateion: 'MAI',
  //     full: 'MAIO'
  //   },
  //   5: {
  //     abreviateion: 'JUN',
  //     full: 'JUNHO'
  //   },
  //   6: {
  //     abreviateion: 'JUL',
  //     full: 'JULHO'
  //   },
  //   7: {
  //     abreviateion: 'AGO',
  //     full: 'AGOSTO'
  //   },
  //   8: {
  //     abreviateion: 'SET',
  //     full: 'SETEMBRO'
  //   },
  //   9: {
  //     abreviateion: 'OUT',
  //     full: 'OUTUBRO'
  //   },
  //   10: {
  //     abreviateion: 'NOV',
  //     full: 'NOVEMBRO'
  //   },
  //   11: {
  //     abreviateion: 'DEZ',
  //     full: 'DEZEMBRO'
  //   }
  // }

  const MONTHS = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
  ]

  const MONTHS_FULL = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO'
  ]

  const data = MONTHS.map((month, index) => {
    return {
      name: month,
      consumption: consumpitionPerMonth[index],
      generation: estimatedMonthlyGeneration[index]
    }
  })

  const servicesAndaterialsTableData = {
    titles: ['DESCRIÇÃO', 'QUANT.', 'UNIDADE'],
    rows: [
      [
        `Módulo fotovoltaico ${moduleManufacturer} ${modulePower * 1000} W`,
        `${moduleAmount}`,
        'unidade'
      ],
      [
        `Inversor ${inverterType} ${inverterManufacturer} ${inverterPower} kW`,
        `${inverterAmount}`,
        'unidade'
      ],
      [
        `Estrutura para ${extructureType}`,
        `${Math.ceil(moduleAmount / 4)}`,
        'kit'
      ],
      ['Material elétrico complementar', '1', 'kit'],
      ['Vistoria técnica', '1', 'serviço'],
      ['Elaboração e homomlogação do projeto', '1', 'serviço'],
      ['Anotação de responsabilidade técnica', '1', 'serviço'],
      ['Instalação do sistema fotovoltaico', '1', 'serviço'],
      ['Gestão, supervisão e fiscalização da instalação', '1', 'serviço']
    ]
  }

  const afterSalesTableData = {
    titles: ['DESCRIÇÂO', 'QUANT.', 'UNIDADE'],
    rows: [
      ['Acompanhamento on-line diário do sistema gerador**', '1', 'ano'],
      [
        'Suporte técnico junto ao fabricante dos equipamentos para a resolução de problemas ou entrada em garantia',
        '1',
        'ano'
      ],
      ['Análise e correção de faturas de energia elétrica', '1', 'ano'],
      [
        'Manutenções corretivas (para problemas provenientes de erros na execução da instalação)',
        '1',
        'ano'
      ]
    ]
  }

  const warrantyTableData = {
    titles: ['DESCRIÇÂO', 'QUANT.', 'UNIDADE'],
    rows: [
      [
        'Garantia dos módulos fotovoltaicos (contra defeito de fabricação)***',
        `${manufacturingDefectModuleWarranty}`,
        'anos'
      ],
      [
        'Garantia dos módulos fotovoltaicos (diminuição de até 20% da eficiência)***',
        `${efficiencyModuleWarranty}`,
        'anos'
      ],
      ['Garantia do inversor***', `${inverterWarranty}`, 'anos'],
      ['Garantia da instalação', '6', 'meses']
    ]
  }

  const generateCreditCardInfo = (creditCard: {
    [key: number]: { total: number; parcel: number }
  }) => {
    const creditCardInfo = []

    for (let i = 1; i <= 12; i++) {
      const { total, parcel } = creditCard[i]
      creditCardInfo.push([
        <div key={i} className="w-full text-center">
          {i}x
        </div>,
        <div key={parcel} className="flex justify-between px-4">
          <p>R$</p>{' '}
          <p>
            {parcel.toLocaleString('pt-br', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
          </p>
        </div>,
        <div key={total} className="flex justify-between px-4">
          <p>R$</p>{' '}
          <p>
            {total.toLocaleString('pt-br', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
          </p>
        </div>
      ])
    }

    return creditCardInfo
  }

  const creditCardTableData = {
    titles: ['QUANTIDADE DE PARCELAS', 'VALOR DA PARCELA', 'VALOR TOTAL'],
    rows: generateCreditCardInfo(paymentConditions.creditCard)
  }

  return (
    <div className="flex flex-col gap-3 bg-white print:gap-0">
      <Page
        backgroundContent={
          <>
            <div className="triangle-top-front"></div>
            <div className="triangle-bottom-front"></div>
            <Image
              className="absolute right-4 top-4 w-96"
              src={logo}
              alt="Logo"
            />

            <div className="absolute top-[350px] h-4 w-96 bg-[#72b62b]"></div>
          </>
        }
        contentStyle={{ marginLeft: '85px' }}
      >
        <div className="flex">
          <div className="absolute top-[400px]">
            <h3 className={'text-7xl text-[#72B62B] ' + montserrant.className}>
              PROPOSTA{' '}
            </h3>
            <h3 className={'text-7xl text-[#72B62B] ' + montserrant.className}>
              COMERCIAL
            </h3>
          </div>
          <div className="absolute bottom-[400px] flex flex-col gap-[12px]">
            <h3 className="text-md text-2xl font-bold text-[#72B62B]">
              PROPOSTO A
            </h3>
            <div className="h-[12px] w-[38px] bg-[#72B62B]"></div>
            <h3 id="client" className="text-2xl font-bold text-[#72B62B]">
              {clientName}
            </h3>
          </div>
          <h3
            id="month-of-the-year"
            className="absolute bottom-20 text-lg text-[#72B62B]"
          >
            {MONTHS_FULL[Number(createdAt.split('-')[1])]} {'DE '}
            {createdAt.split('-')[0]}
          </h3>
        </div>
      </Page>
      <Page
        backgroundContent={
          <div className="h-full w-full bg-[#72BC2B]">
            <div className="absolute top-[75px] h-4 w-96 bg-white"></div>
            <div className="triangle-top-presentation"></div>
            <div className="triangle-bottom-presentation"></div>
          </div>
        }
        contentStyle={{ marginLeft: '85px', marginRight: '85px' }}
      >
        <h3
          className={'mb-4 mt-28 text-5xl text-white ' + montserrant.className}
        >
          NOSSA EMPRESA
        </h3>
        <h3 className="mb-10 text-lg text-white">
          Atuando no mercacdo de energia solar desde 2018, a Luminisol surgiu da
          visão de proporcionar soluções sustentáveis de energia solar para
          residências e empresas. Desde então, temos crescido constantemente,
          expandindo nossa presença para atender a diversas regiões.
        </h3>
        <div className="flex h-96 w-full gap-8">
          <div className="flex h-full flex-1 flex-col gap-8">
            <div>
              <div className="mb-3 bg-white px-2">
                <h3
                  className={
                    'text-2xl font-medium text-[#72BC2B] ' +
                    montserrant.className
                  }
                >
                  QUALIDADE
                </h3>
              </div>
              <p className="text-lg text-white">
                Nosso compromisso com a qualidade é evidenciado por nossa
                política de garantia abrangente, garantindo o desempenho
                contínuo dos sistemas. Realizamos rigorosos controles de
                qualidade para garantir a satisfação duradoura dos clientes.
              </p>
            </div>
            <div>
              <div className="mb-3 bg-white px-2">
                <h3
                  className={
                    'text-2xl font-medium text-[#72BC2B] ' +
                    montserrant.className
                  }
                >
                  VALORES
                </h3>
              </div>
              <p className="text-lg text-white">
                Nossos valores fundamentais incluem integridade, inovação e
                compromisso com a excelência. Estamos dedicados a operar de
                maneira ética, buscando constantemente novas formas de
                impulsionar o avanço tecnológico em energia solar.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-8">
            <div>
              <div className="mb-3 bg-white px-2">
                <h3
                  className={
                    'text-2xl font-medium text-[#72BC2B] ' +
                    montserrant.className
                  }
                >
                  EQUIPE
                </h3>
              </div>
              <p className="text-lg text-white">
                Nossa equipe é altamente qualificada com vários anos atuando na
                indústria solar. Contamos com especialistas em instalação,
                garantindo a entrega de soluções de alta qualidade.
              </p>
            </div>
            <div>
              <div className="mb-3 bg-white px-2">
                <h3
                  className={
                    'text-2xl font-medium text-[#72BC2B] ' +
                    montserrant.className
                  }
                >
                  TECNOLOGIA
                </h3>
              </div>
              <p className="text-lg text-white">
                Utilizamos tecnologia de ponta, incluindo painéis solares de
                última geração e inversores de eficiência comprovada. Mantemos
                parcerias estratégicas com fabricantes líderes para garantir a
                confiabilidade de nossos sistemas.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 bottom-10">
          <h3
            className={
              'text-2xl font-medium text-white ' + montserrant.className
            }
          >
            CONTATOS
          </h3>
          <p className="text-lg text-white">(82) 93618-6347</p>
          <p className="text-lg text-white">contato@luminisol.com.br</p>
          <p className="text-lg text-white">www.luminisol.com.br</p>
          <p className="text-lg text-white">@luminisol</p>
        </div>
      </Page>
      <Page
        backgroundContent={
          <>
            <div className="triangle-top-content"></div>
            <div className="triangle-bottom-content"></div>
          </>
        }
        contentStyle={{ marginLeft: '85px', marginRight: '85px' }}
      >
        <div className="flex-1">
          <div className="py-[40px] text-[#27761E]">
            <h3>LUMINISOL - 52.746.541/0001-67</h3>
          </div>
          <h3 className="text-4xl text-[#27761E]">ESPECIFICAÇÕES DO SISTEMA</h3>
          <section className="mt-[30px] flex w-full flex-col gap-[10px]">
            <h3 className="text-2xl text-[#27761E]">
              CARACTERÍSTICAS DO SISTEMA
            </h3>
            <Table data={systemCharacteristicsTableData}></Table>
          </section>
          <section className="mt-[30px] flex w-full flex-col gap-[10px]">
            <h3 className="text-2xl text-[#27761E]">GERAÇÃO X CONSUMO</h3>
            <Chart data={data} />
          </section>
          <section className="mt-[30px] flex w-full flex-col items-center gap-[10px]">
            <h3 className="text-3xl text-[#27761E]">
              GERAÇÃO MÉDIA MENSAL ESTIMADA
            </h3>
            <h3
              id="average-system-generation"
              className="text-3xl text-[#27761E]"
            >
              {estimatedAverageMonthlyGeneration} kWh/mês
            </h3>
          </section>
        </div>
      </Page>
      <Page
        backgroundContent={
          <>
            <div className="triangle-top-content"></div>
            <div className="triangle-bottom-content"></div>
          </>
        }
        contentStyle={{ marginLeft: '85px', marginRight: '85px' }}
      >
        <div className="py-[40px] text-[#27761E]">
          <h3>LUMINISOL - 52.746.541/0001-67</h3>
        </div>
        <h3 className="text-4xl text-[#27761E]">DETALAMENTO DA PROPOSTA</h3>
        <section className="mt-[30px] flex w-full flex-col gap-[10px]">
          <h3 className="text-2xl text-[#27761E]">SERVIÇOS E MATERIAIS</h3>
          <Table data={servicesAndaterialsTableData}></Table>
        </section>
        <section className="mt-[30px] flex w-full flex-col gap-[10px]">
          <h3 className="text-2xl text-[#27761E]">PÓS-VENDA</h3>
          <Table data={afterSalesTableData}></Table>
        </section>
        <section className="mt-[30px] flex w-full flex-col gap-[10px]">
          <h3 className="text-2xl text-[#27761E]">GARANTIAS</h3>
          <Table data={warrantyTableData}></Table>
        </section>
        <section className="mt-[30px] flex w-full flex-col items-center gap-[10px]">
          <h3 className="text-3xl text-[#27761E]">VALOR DA PROPOSTA</h3>
          <h3 id="total" className="text-3xl text-[#27761E]">
            R${' '}
            {proposalPrice.toLocaleString('pt-br', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
          </h3>
        </section>
      </Page>
      <Page
        backgroundContent={
          <>
            <div className="triangle-top-content"></div>
            <div className="triangle-bottom-content"></div>
          </>
        }
        contentStyle={{ marginLeft: '85px', marginRight: '85px' }}
      >
        <div className="py-[40px] text-[#27761E]">
          <h3>LUMINISOL - 52.746.541/0001-67</h3>
        </div>
        <h3 className="text-4xl text-[#27761E]">FORMAS DE PAGAMENTO</h3>
        <section className="mt-[30px] flex w-full flex-col gap-[10px]">
          <h3 className="text-2xl text-[#27761E]">À VISTA</h3>
          <h3 className="text-justify text-[#27761E]">
            R${' '}
            {proposalPrice.toLocaleString('pt-br', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
            . 80% (R${' '}
            {(proposalPrice * 0.8).toLocaleString('pt-br', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
            ) pago na assinatura do contrato e 20% (R${' '}
            {(proposalPrice * 0.2).toLocaleString('pt-br', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
            {') '}
            pago após liberação para geração.
          </h3>
        </section>
        <section className="mt-[30px] flex w-full flex-col gap-[10px]">
          <h3 className="text-2xl text-[#27761E]">CARTÃO DE CRÉDITO</h3>
          <Table data={creditCardTableData}></Table>
        </section>
      </Page>
    </div>
  )
}
