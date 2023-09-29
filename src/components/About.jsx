import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: '¿Quiénes Somos?',
    description: ' Spatial, con más de 20 años en el panorama del desarrollo de software, se erige como un faro de innovación. Nuestro legado se basa en ofrecer soluciones de calidad y fomentar relaciones duraderas con nuestra diversa clientela',
    icon: PhoneIcon,
  },
  {
    name: 'Nuestra Misión',
    description: 'Estamos comprometidos en impulsar a las pequeñas y medianas empresas hacia la era digital. Al aprovechar el poder transformador de la tecnología RFID, Spatial ofrece soluciones personalizadas para agilizar los procesos de inventario y logística.',
    icon: LifebuoyIcon,
  },
  {
    name: 'La Diferencia',
    description: 'Mientras muchos ofrecen tecnología, Spatial la democratiza. Proporcionamos a las PYMES soluciones de primer nivel, similares a las utilizadas por grandes corporaciones, pero sin los costos exorbitantes. Nuestro enfoque está en entregar valor, asegurando un retorno óptimo de la inversión.',
    icon: NewspaperIcon,
  },
]

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
   
      
  
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">Sobre Spatial</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
           
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl  bg-slate-100 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-blue-900">{card.name}</h3>
                <p className="mt-2 text-blue-900">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
