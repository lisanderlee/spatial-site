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

export default function Example() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">Todo lo que necesitas</h2>
          <p className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">en una solo plataforma.</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-blue-900">
          Además de digitalizar tu stock te ofrecemos una solución integral a todas tus necesidades en un solo producto.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          {/* <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-blue-100 pt-[7%]" />
          </div> */}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-blue-900 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-blue-900">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
