import { queryOptions } from '@tanstack/react-query'

export type ProposalsType = {
  id: string
  clientName: string
  desiredGeneration: number
  moduleManufacturer: string
  modulePower: number
  moduleAmount: number
  efficiencyModuleWarranty: number
  manufacturingDefectModuleWarranty: number
  inverterType: string
  inverterManufacturer: string
  inverterAmount: number
  inverterPower: number
  inverterWarranty: number
  extructureType: string
  systemPower: number
  totalInverterPowerCapacity: number
  estimatedAverageMonthlyGeneration: number
  estimatedMonthlyGeneration: number[]
  estimatedAverageMonthlyGenerationWithTotalInverterPowerCapacity: number
  estimatedMonthlyGenerationWithTotalInverterPowerCapacity: number[]
  requiredArea: number
  requiredAreaWithTotalInverterPowerCapacity: number
  consumpitionPerMonth: number[]
  proposalPrice: number
  paymentConditions: {
    cash: {
      entry: number
      finally: number
    }
    creditCard: { [key: number]: { total: number; parcel: number } }
  }
  createdAt: string
}

export const proposalsOptios = (id: string) => {
  return queryOptions({
    queryKey: ['proposal', id],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/proposals/view/${id}`,
        { cache: 'no-cache' }
      )

      const proposal = (await response.json()) as ProposalsType

      console.log(proposal)

      return proposal
    },
    staleTime: 0
  })
}
