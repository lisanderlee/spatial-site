const stats = [
  { id: 1, name: 'Stocks digitalizados', value: '+1000' },
  { id: 2, name: 'Operaciones exitosas', value: '+800000' },
  { id: 3, name: 'Usuarios satisfechos', value: '+1200' },
  { id: 4, name: 'Horas de Soporte ', value: '+4635' }
]

export default function Example() {
  return (

    <div className="mx-auto max-w-7xl  sm:mt-56 lg:mb-40 sm:px-6 lg:px-8">
          <div className="relative isolate bg-blue-600 overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="font-display text-center mb-14 text-4xl font-medium tracking-tighter text-white sm:text-5xl">
              Increibles resultados
            </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
   
              <dt className="text-base leading-7 text-blue-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
          </div>
      








  
  )
}
