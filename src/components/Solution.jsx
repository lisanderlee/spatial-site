'use client'
import Spline from '@splinetool/react-spline';

import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

import Testimonials from './Testimonials'

const features = [
  {
    name: 'Smart-Tag',
    summary: 'Desde producción hasta el consumidor, etiquetas que rastrean cada prenda.',
    description:
      'Te proporcionamos etiquetas inteligentes, diseñadas a medida, para rastrear cada prenda desde su creación hasta su destino final.',
    image: "https://prod.spline.design/wUx6g6jnFDEay078/scene.splinecode",
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
         <rect width="37" height="37" rx="7" fill="#2463EB"/>
<path d="M7.00049 8.95541C7.02741 8.8815 7.05874 8.80858 7.08028 8.7332C7.37596 7.69268 8.27327 7.00356 9.35171 7.00258C12.0627 7.00013 14.7738 6.99769 17.4848 7.00405C18.4653 7.00649 19.3137 7.36525 20.0059 8.05583C23.0669 11.1084 26.1216 14.1669 29.1788 17.2233C29.8636 17.9086 30.5509 18.5913 31.2328 19.2794C32.2491 20.3048 32.2604 21.7104 31.2387 22.7358C28.4117 25.573 25.5787 28.4049 22.7419 31.2323C21.7075 32.263 20.2996 32.2523 19.2687 31.2215C15.5492 27.5038 11.8322 23.7832 8.11026 20.0674C7.54436 19.5026 7.19826 18.8311 7.04748 18.052C7.04014 18.0148 7.01615 17.981 7 17.9457C7 14.949 7 11.9522 7 8.95541H7.00049ZM8.56308 13.4513C8.56308 14.762 8.56161 16.0727 8.56357 17.3834C8.56455 17.9888 8.77651 18.5106 9.20632 18.9403C12.9366 22.6707 16.6668 26.4011 20.3975 30.1306C20.7887 30.5212 21.2278 30.5226 21.6194 30.1316C24.4587 27.2948 27.2965 24.4566 30.1338 21.6179C30.5201 21.2313 30.5191 20.7854 30.1294 20.3953C26.3943 16.6585 22.6582 12.9227 18.9206 9.18789C18.504 8.77187 17.991 8.56631 17.4045 8.56533C14.7669 8.5619 12.1288 8.56337 9.49123 8.56435C8.86806 8.56435 8.56406 8.87024 8.56308 9.49525C8.5621 10.8143 8.56308 12.1328 8.56308 13.4518V13.4513Z" fill="white"/>
<path d="M12.5088 11C13.3353 11.0014 14.0009 11.6727 14 12.5045C13.9991 13.3327 13.3295 14 12.4993 14C11.6638 14 10.9968 13.3273 11 12.4873C11.0032 11.6618 11.6755 10.9986 12.5088 11ZM13.2229 12.4986C13.2229 12.1129 12.8847 11.7756 12.4989 11.7765C12.114 11.7774 11.7762 12.116 11.7766 12.5009C11.7771 12.8867 12.1158 13.2239 12.5011 13.223C12.8888 13.2221 13.2234 12.8862 13.2229 12.4986Z" fill="white"/>

        </>
      )
    },
  },
  {
    name: 'Smart-Tunnel',
    summary:
      'Captura instantánea de contenidos, eliminando conteos manuales.',
    description:
      'Con Smart Tunnels estratégicamente ubicados, los datos son siempre precisos y verificables, asegurando un rastreo exacto en cada punto.',
    image: "https://prod.spline.design/DXLZIE-1ZersKd1h/scene.splinecode",
    icon: function InventoryIcon() {
      return (
        <>
      <rect width="37" height="37" rx="7" fill="#2463EB"/>
<rect x="7" y="7" width="23" height="23" rx="2" stroke="white" stroke-width="3"/>
        </>
      )
    },
  },
  {
    name: 'Smart-Reader',
    summary:
      'Rastreo completo desde almacén hasta punto de venta.',
    description:  
      'Los Smart Readers son esenciales en los puntos de venta, acelerando la verificación de ítems y optimizando los Puntos de Venta (POS) mediante una rápida confirmación de productos.',
    image: "https://prod.spline.design/MQJh3m6JF9ceb9Iq/scene.splinecode",
    icon: function ContactsIcon() {
      return (
        <>
      <rect width="37" height="37" rx="7" fill="#2463EB"/>
<path d="M23.6986 16.0516C24.2941 16.2223 24.8808 16.4236 25.4849 16.5592C26.2803 16.743 26.8757 17.2287 27.4668 17.7494C27.7798 18.0251 28.1666 18.2176 28.5925 18.4977C28.6273 18.1476 28.649 17.9463 28.6751 17.6969H32V18.4845H29.527V26.5533H31.987V27.389H28.6751C28.6534 27.1221 28.6316 26.8858 28.6099 26.5839C27.758 26.632 26.9149 26.4133 26.1065 26.9471C25.6762 27.2315 25.1068 27.3059 24.5331 27.4984C24.5635 27.4547 24.5331 27.4809 24.5288 27.5072C24.4114 28.9905 23.3031 30.102 21.5124 29.9926C20.9431 29.9576 20.3694 29.9926 19.7957 29.9838C18.896 29.9707 18.5657 29.4237 18.9003 28.5924C19.0394 28.251 19.0611 27.8616 19.1481 27.424C18.2658 27.424 17.5095 27.4984 16.9923 26.8202C16.5012 26.1726 16.5229 25.5031 16.9271 24.7943C16.1231 24.1379 15.8884 23.3459 16.3578 22.5014C16.097 22.007 15.7406 21.5956 15.6711 21.1406C15.6059 20.6855 15.8319 20.191 15.9536 19.6047C15.0713 18.5239 15.6015 16.9355 17.3313 16.7561C17.4313 15.9948 17.3922 15.9554 16.6533 15.9554C15.4929 15.9554 15.445 15.9948 15.1147 17.1368C14.9757 17.6225 14.8583 18.117 14.6845 18.5895C14.6323 18.7296 14.4324 18.8696 14.2759 18.909C14.0629 18.9659 13.8282 18.9352 13.6022 18.9221C13.1893 18.8915 12.8807 18.9527 12.5982 19.3509C12.1723 19.946 11.4726 19.8366 10.8684 19.7185C9.95136 19.5391 9.05168 19.2721 8.14766 19.0402C7.64784 18.9133 7.33056 18.5939 7.18713 18.1082C6.48304 15.741 5.77459 13.3737 5.07919 10.9977C4.83145 10.1532 5.14873 9.69378 6.26138 9.21246C6.26138 8.97179 6.25703 8.70925 6.26138 8.45109C6.28311 7.75536 6.59169 7.45343 7.30883 7.44906C8.86914 7.44468 10.4295 7.45781 11.9898 7.44031C12.2462 7.44031 12.5157 7.33091 12.7591 7.23027C13.5023 6.9196 14.2324 6.92835 14.9757 7.2259C15.2234 7.32216 15.4842 7.44031 15.7406 7.44468C18.896 7.45781 22.0514 7.45781 25.2068 7.45343C25.737 7.45343 26.2847 7.41405 26.502 8.05728C26.7541 8.80114 26.515 9.61502 26.076 9.92569C26.0934 10.9934 26.1108 11.9779 26.1195 12.9624C26.1238 13.365 26.1238 13.7632 26.1195 14.1657C26.1065 15.2421 25.4415 15.9248 24.3723 15.9641C24.1506 15.9729 23.9246 15.9641 23.703 15.9641C23.703 15.9948 23.703 16.021 23.703 16.0516H23.6986ZM25.2024 13.8025H14.7583V11.2603H25.2242C25.3459 10.3633 25.046 10.0088 24.1984 10.0088C19.8348 10.0088 15.4668 10.0088 11.1031 10.0088C10.9423 10.0088 10.7815 10.0307 10.5685 10.0438C11.3291 12.678 12.0723 15.2553 12.8242 17.8238C12.8547 17.9244 12.9894 18.047 13.0981 18.0645C13.8065 18.2045 13.963 18.0995 14.1586 17.4212C14.2455 17.1193 14.3324 16.8218 14.4237 16.5198C14.7236 15.5003 15.2495 15.1021 16.3187 15.1021C18.9525 15.0977 21.5863 15.1021 24.2202 15.0934C25.0547 15.0934 25.3676 14.6996 25.2024 13.7982V13.8025ZM24.4071 26.5227C25.7935 26.492 26.7062 25.7832 27.1583 24.4048C27.3973 24.4442 27.645 24.4836 27.958 24.5317C27.8493 24.9605 27.7537 25.3237 27.6624 25.6913H28.6229V19.294C27.5233 18.9527 27.532 18.9396 26.641 18.1695C26.3194 17.8894 25.95 17.605 25.5545 17.4825C24.3288 17.1106 23.0858 16.8086 21.8428 16.498C21.695 16.463 21.4907 16.4761 21.369 16.5549C20.6997 16.988 20.0434 17.4431 19.3958 17.9069C19.1481 18.082 18.9829 18.292 19.0698 18.6552C19.2524 19.434 19.3915 20.2217 19.5349 21.0093C19.6349 21.5738 19.9087 21.7357 20.3563 21.39C20.5823 21.215 20.7518 20.8693 20.791 20.5761C20.8605 20.0466 20.8083 19.5041 20.8083 18.9659C21.4473 18.8083 22.0297 18.6639 22.6121 18.5239C23.6204 20.1385 24.707 21.5913 26.8106 21.5694V22.357C25.5762 22.5102 24.594 21.9807 23.6073 21.2193C23.8855 23.0702 24.1506 24.803 24.4114 26.527L24.4071 26.5227ZM21.1865 21.8538C22.2644 22.8821 22.2904 23.5209 21.3429 24.768C22.1122 26.0588 21.4125 27.3147 20.0347 27.4853C19.9347 28.041 19.8348 28.5661 19.7392 29.0999C20.5476 29.0999 21.3951 29.1306 22.2383 29.0868C22.7251 29.0606 23.1206 28.8024 23.4074 28.2423H21.8862C21.9036 27.936 21.9166 27.6866 21.9297 27.389H23.6378C23.6204 27.1746 23.6204 27.0171 23.5943 26.864C23.2988 24.9168 23.0032 22.974 22.7033 21.0312C22.6468 20.6549 22.599 20.2654 22.4599 19.9198C22.3947 19.7579 22.1209 19.5916 21.934 19.5784C21.5689 19.5522 21.6385 19.8804 21.6428 20.1123C21.6559 20.7293 21.6689 21.3418 21.1778 21.8494L21.1865 21.8538ZM10.1339 18.6639C9.30377 15.916 8.51275 13.2862 7.72172 10.6521C7.51745 9.97383 7.3436 9.87319 6.65254 10.0307C6.53519 10.057 6.41784 10.0963 6.30484 10.1314C5.93975 10.232 5.79632 10.442 5.91367 10.8315C6.60908 13.1462 7.29579 15.4653 7.99989 17.78C8.04769 17.9376 8.19547 18.1388 8.34324 18.187C8.89522 18.3664 9.46893 18.4933 10.1426 18.6639H10.1339ZM8.42582 10.0482C9.29942 12.9449 10.1556 15.8066 11.0292 18.6639C11.064 18.7733 11.2248 18.9002 11.3422 18.9177C11.9854 19.014 12.194 18.7471 12.0071 18.1038C11.3248 15.7322 10.6381 13.3606 9.95136 10.989C9.64712 9.94757 9.64712 9.94757 8.42582 10.0526V10.0482ZM15.5972 9.11619H25.6588V8.35045H15.5972V9.11619ZM23.5639 12.1573H15.6102V12.9318H23.5639V12.1573ZM19.0568 24.1467C19.2654 24.1467 19.474 24.1467 19.6783 24.1467C19.8869 24.1467 20.0956 24.151 20.2998 24.1467C20.817 24.1248 21.1517 23.8141 21.1561 23.3634C21.1604 22.904 20.8344 22.5802 20.3172 22.5758C19.4871 22.5627 18.6569 22.5627 17.8268 22.5758C17.34 22.5845 17.0054 22.8952 16.988 23.324C16.9662 23.766 17.3139 24.1292 17.8138 24.151C18.2267 24.1685 18.6439 24.151 19.0611 24.151L19.0568 24.1467ZM19.0916 26.5752C19.4175 26.5752 19.7479 26.597 20.0738 26.5708C20.5171 26.5358 20.8127 26.1901 20.8083 25.7744C20.7997 25.3587 20.4911 25.0262 20.0478 25.0087C19.4436 24.9868 18.8395 24.9868 18.2354 25.0087C17.792 25.0262 17.4878 25.3631 17.4791 25.7788C17.4748 26.2164 17.7877 26.5445 18.2658 26.5752C18.5396 26.5927 18.8178 26.5752 19.0959 26.5752H19.0916ZM7.1654 8.33295V9.12932H12.1419V8.33295H7.1654ZM18.7308 21.6875C18.7308 21.5781 18.7352 21.5081 18.7308 21.4425C18.6323 20.5615 18.1426 20.1327 17.2618 20.156C16.8141 20.1692 16.4751 20.458 16.4795 20.8736C16.4795 21.3025 16.6968 21.635 17.1357 21.6744C17.6573 21.7225 18.1919 21.6875 18.7352 21.6875H18.7308ZM18.2354 17.7319C17.8703 17.7319 17.4704 17.6969 17.0792 17.7407C16.6707 17.7888 16.436 18.0776 16.436 18.4977C16.436 18.9177 16.6664 19.2109 17.0706 19.2634C17.4704 19.3159 17.8833 19.2765 18.2354 19.2765V17.7363V17.7319ZM14.7931 9.12932C14.6845 8.69613 14.7018 8.13166 14.4671 7.99602C14.1542 7.81224 13.5631 7.81661 13.2502 8.00477C13.0198 8.14479 13.0503 8.70925 12.9503 9.12932H14.7931ZM18.3049 16.7824C19.2567 17.0712 19.9 16.603 20.565 16.0035H18.1702C18.2223 16.3011 18.2658 16.5549 18.3049 16.7824ZM25.2372 12.9405V12.1617H24.4723V12.9405H25.2372Z" fill="white"/>

        </>
      )
    },
  },
  
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-50 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-gray-400',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-blue-900">{feature.summary}</p>
      <p className="mt-4 text-sm text-blue-900">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              {/* <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              /> */}
              <Spline  className="w-full" scene={feature.image} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-900 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    {/* <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    /> */}
                    <Spline  className="w-full" scene={feature.image} />

                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function Solution() {
  return (
    <section
      id="solution"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 "
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          Una Solution Completa
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-blue-900">
          Spatial te ofrece todas las herramientas necesarias para optimizar cada paso del proceso.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className=" -z-10 -bottom-32 -top-40" />
        <Container className="relative">
          <FeaturesMobile />
          <FeaturesDesktop />
        </Container>
      </div>
    </section>
  )
}
