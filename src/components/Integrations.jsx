import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/partner-1.png'
import logoMirage from '@/images/logos/partner-2.png'
import logoStatamic from '@/images/logos/partner-3.png'
import logoStaticKit from '@/images/logos/partner-4.png'
import logoTransistor from '@/images/logos/partner-5.png'
import logoTuple from '@/images/logos/partner-6.png'
import partner7 from '@/images/logos/partner-7.png'
import partner8 from '@/images/logos/partner-8.png'


const sponsors = [
  { name: 'Transistor', logo: logoTransistor },
  { name: 'Tuple', logo: logoTuple },
  { name: 'StaticKit', logo: logoStaticKit },
  { name: 'Mirage', logo: logoMirage },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'Statamic', logo: logoStatamic },
  { name: 'Laaravel', logo: partner7 },
  { name: 'Stataamic', logo: partner8 },
]

export function Integrations() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="  mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl ">
          Partners de Integraciones
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center  text-lg tracking-tight text-blue-900">
          Stock Inteligente está integrado con las soluciones y apps más
          utilizadas
        </p>
        <ul
          role="list"
          className="mt-20 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
              { name: 'partner7', logo: partner8 },
              
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
              { name: 'partner8', logo: partner7 },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized height={56} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
