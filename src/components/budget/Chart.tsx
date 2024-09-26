import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

type ChartProps = {
  data: { name: string; consumption: number; generation: number }[]
}

export function Chart({ data }: ChartProps) {
  return (
    <div style={{ width: '100%', height: '350px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickLine={false} color="#27761E" />
          <YAxis
            label={{
              value: 'kWh',
              angle: -90,
              position: 'insideLeft'
            }}
            axisLine={false}
            tickLine={false}
            tickCount={11}
          />
          <Legend
            payload={[
              { value: 'Geração', type: 'rect', color: '#d4a028' },
              { value: 'Consumo', type: 'rect', color: '#27761E' }
            ]}
          />
          <Bar dataKey="consumption" fill="#27761E" barSize={12} />
          <Bar dataKey="generation" fill="#d4a028" barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
