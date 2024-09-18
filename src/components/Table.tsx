import { ReactNode } from 'react'

type TableProps = {
  data: { titles: ReactNode[]; rows: ReactNode[][] }
  className?: string
}

export function Table({ data }: TableProps) {
  return (
    <table className="border-collapse">
      <thead className="bg-[#27761E] print:bg-[#27761E]">
        <tr className="border border-[#27761E]">
          {data.titles.map((title, index) => (
            <th key={index} className="p-1 text-sm font-medium text-white">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&>tr:nth-child(even)]:bg-white [&>tr:nth-child(odd)]:bg-[#EBF3D9]">
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border border-[#27761E]">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-1 py-[2px] text-left text-sm text-[#27761E] [&:nth-child(even)]:text-right"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
