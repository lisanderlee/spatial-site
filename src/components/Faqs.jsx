import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "¿Qué es un stock digitalizado?",
    answer:
      "Un stock digitalizado es un inventario de productos o materiales que se mantiene en formato digital, en lugar de en un almacén físico.",
  },
  {
    question: "¿Cómo se utiliza un stock digitalizado?",
    answer:
      "Un stock digitalizado se utiliza para llevar un registro de los productos o materiales disponibles, su cantidad y su ubicación. También se puede utilizar para realizar seguimiento de las entradas y salidas de inventario, generar informes y hacer pedidos automáticamente.",
  },
  {
    question: "¿Qué ventajas tiene un stock digitalizado?",
    answer:
      "Un stock digitalizado ofrece varias ventajas, como la reducción de errores humanos, la capacidad de realizar un seguimiento en tiempo real del inventario, la automatización de procesos y la capacidad de generar informes y análisis. También puede ayudar a reducir los costos de almacenamiento y mejorar la eficiencia en la gestión del inventario.",
  },
  {
    question: "¿Qué herramientas se utilizan para digitalizar un stock?",
    answer:
      "Para digitalizar un stock se utilizan herramientas de software específicas, como sistemas de gestión de inventario (ERP), software de automatización de almacenes (WMS) y software de seguimiento de inventario (ICS). Estas herramientas pueden ser utilizadas en conjunto o independientemente para adaptarse a las necesidades de cada empresa.",
  },
  {
    question: "¿Que es la tecnología RFID?",
    answer:
      "RFID (Radio Frequency Identification) es una tecnología de comunicación inalámbrica que utiliza radiofrecuencias para transmitir la información entre un dispositivo llamado etiqueta RFID (que lleva el dato) y un dispositivo receptor llamado lector RFID. Esta tecnología se utiliza en una amplia variedad de aplicaciones, como la identificación automática de objetos, el seguimiento de activos, el control de acceso y la gestión de inventarios.",
  },
  {
    question: "¿Que beneficios brinda la tecnología RFID?",
    answer:
      "Los beneficios de la tecnología RFID incluyen una mayor eficiencia en la recopilación de datos, una mayor precisión en el seguimiento de inventarios, una mejor capacidad para realizar seguimientos en tiempo real, una mayor automatización en los procesos de seguimiento y una reducción de costos. Además, también puede mejorar la seguridad al permitir una mejor gestión de acceso y control de acceso a áreas y activos importantes.",
  },
  {
    question: "¿Que dispositivos se utilizan en RFID?",
    answer:
      "Etiquetas RFID: son dispositivos pasivos que contienen un chip y una antena y se colocan en los objetos que se desean rastrear. Lectores RFID son dispositivos activos que emiten una señal para leer la información almacenada en las etiquetas RFID. Impresoras RFID son dispositivos que se utilizan para escribir información en las etiquetas RFID. Antenas RFID son dispositivos que se utilizan para transmitir y recibir señales RFID. Sistemas RFID son sistemas completos que incluyen lectores, escritores y software para recopilar, almacenar y analizar datos RFID.",
  },
  // More questions...
]

export default function Faqs() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-blue-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-blue-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y  divide-blue-900 divide-blue-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-blue-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-blue-900">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
