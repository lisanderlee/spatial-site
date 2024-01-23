import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'






const features = [
  {
    name: 'Logística e Inventario',
    description: 'Gestión del stock de almacenes por radiofrecuencia (RFID), control del canal de distribución, entrega del producto al cliente y puntos de venta, etc.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Producción',
    description: 'Programación de la producción, planificación de las necesidades de material, lanzamiento y control de órdenes de fabricación, seguimiento de indicadores, etc.',
    icon: LockClosedIcon,
 

  },
  {
    name: 'E-Commerce + Integraciones',
    description: 'Conecta tu tienda online a diversas plataformas para potenciar su funcionalidad, automatizando la gestión de pedidos, inventario y comunicación con clientes.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Administrativo / Contable',
    description: 'Llevá un registro de las transacciones financieras de tu empresa y realizá tareas administrativas diarias. Automatizá tus procesos de negocio y a obtené una visión más completa de tus operaciones.',
    icon: FingerPrintIcon,
  },
  

  {
    name: 'Punto de venta (POS)',
    description: 'Usa nuestro software para gestionar ventas, pagos e inventario en tus tiendas. Mejora la eficiencia del inventario y acelera las transacciones con tecnología RFID, impactando positivamente en las ventas y satisfacción del cliente.',
    icon: Cog6ToothIcon,
  },


  {
    name: 'Reportes de Power BI',
    description: 'La interfaz de Power BI te permitirá visualizar y comprender los datos de manera más eficaz. Nuestros reportes atienden diferentes necesidades y requerimientos.',
    icon: ServerIcon,
  },


  {
    name: '  Automatización Administrativa.',
    description: 'Simplifica las tareas diarias, automatiza los procesos empresariales y obtén una visión integral de tus operaciones.',
    icon: FingerPrintIcon,
  },


  {
    name: ' Visualización de Datos.',
    description: 'Aprovecha las capacidades de Power BI para visualizar, interpretar y actuar sobre tus datos de manera más efectiva.',
    icon: Cog6ToothIcon,
  },

  {
    name: 'Mobile App',
    description: 'Llevar un óptimo control de inventario es esencial para la rentabilidad de tu negocio y nuestra app te facilita la tarea: tomá el inventario de tus prendas etiquetadas con tags RFID en minutos. Reducí tiempos y costos en tus tiendas y depósitos.',
    icon: ServerIcon,
  },
]



import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'



export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Integración 
Total con la Nube         </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Además de la digitalizacion de stock ofrecemos una solución integral a todas las necesidades en un solo producto. Integración total con la nube permite el acceso y la gestión en tiempo real.

          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
           
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
