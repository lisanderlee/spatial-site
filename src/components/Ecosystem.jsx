/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image"
import Tag from "@/images/tag.svg"
import Box from "@/images/Box.svg"
import Gun from "@/images/Gun.svg"
import Mirror from "@/images/Mirror.svg"
import POS from "@/images/POS.svg"
const features = [
  {
    name: 'Etiqueta Inteligente',
    description:
      'Nuestro Sensor de Caja RFID permite a los empresas escanear rápidamente el contenido de cajas cerradas, identificando cada prenda etiquetada con RFID sin necesidad de abrir la caja. Esta solución es ideal para la verificación de inventarios y la gestión eficiente de la recepción de mercancías, asegurando precisión y ahorro de tiempo en el manejo de stock.',
    imageSrc: Tag,
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Sensor de Contenido',
    description:
      'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
    imageSrc: Box,
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'Sensor Pistola',
    description:
      'La Sensor Pistola RFID de Spatial es una herramienta poderosa para la lectura rápida y eficiente de grandes volúmenes de prendas. Diseñada para la agilidad, esta solución permite a los usuarios escanear rápidamente múltiples artículos, ideal para auditorías de inventario y seguimiento rápido en almacenes o áreas de almacenamiento.',
    imageSrc: Gun,
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'SMART Mirror',
    description:
      'El Smart Mirror transforma la experiencia de compra en el punto de venta, agilizando la atención y proporcionando información detallada de las prendas probadas por el cliente, mejorando así la interacción y satisfacción en la tienda.', imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    imageSrc: Mirror,
  },
  {
    name: 'POS Retail',
    description:
      'El sistema POS Retail de Spatial, integrado con tecnología RFID, transforma la experiencia de venta al por menor. Permite un seguimiento detallado de las prendas en la tienda, facilitando una gestión de inventario en tiempo real y una experiencia de compra más rápida y eficiente para el cliente. Además, ayuda en la prevención de pérdidas y mejora la precisión en las transacciones.',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    imageSrc: POS,
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Ecosystem() {
  return (
    <div id="solucion" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl   font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro ecosistema integral ofrece herramientas para cada fase del proceso empresarial.        </h2>
          <p className="mt-6 text-base leading-7 mb-5 text-gray-600">
            Desde la incorporación de etiquetas RFID en la producción hasta la eficiente gestión en el punto de venta. Garantizamos una gestión integral y eficaz, optimizando la cadena de suministro y mejorando la experiencia del cliente.
          </p>
          <a href="#" className="font-semibold   text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Ver video<span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div key={feature.name} className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24 ">
              
              <div className="flex rounded-2xl bg-gray-900 p-8  w-96   h-96 ">
                <div className=" xy-auto mx-auto">
                  <Image className="" 
                  width={300}
                  height={300} 
                  src={feature.imageSrc} />
                </div>
              </div>

              <div className="flex flex-1 mt-10  w-96  lg:mt-0">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-md text-gray-500">{feature.description}</p>
                </div>
              </div>
   
          
            </div>


          ))}
        </div>
      </div>
    </div>
  )
}
