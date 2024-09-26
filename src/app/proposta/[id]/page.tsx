import { Budget } from '@/components/budget'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from '@/app/get-query-client'
import { proposalsOptios } from '../proposalsOptions'
import { ResponsiveScale } from './ResponsiveScale'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proposta | Luminisol'
}

export default function BudgetView({ params }: { params: { id: string } }) {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(proposalsOptios(params.id))

  return (
    <main className="flex h-full justify-center py-5 print:py-0">
      {/* <ResponsiveScale> */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Budget id={params.id} />
      </HydrationBoundary>
      {/* </ResponsiveScale> */}
    </main>
  )
}
