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
import integration from "@/images/integrations.svg"
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

        <div className="mx-auto max-w-2xl lg:mx-0 mb-32 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Partners de Integraciones
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Stock Inteligente está integrado con las soluciones y apps más
            utilizadas
          </p>
        </div>
        <Image src={integration} />
      </Container>
    </section>
  )
}
