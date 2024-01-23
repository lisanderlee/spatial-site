export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl  sm:mt-56 sm:px-6 lg:mb-40 lg:px-8">
      <div className="relative isolate flex flex-col overflow-hidden bg-blue-600 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mb-14 text-center font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
          Contactate con Nosotros.
        </h2>
        <form className="flex flex-col">
          <div className="flex w-full  flex-row">
            <div className="grow">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Name"
                autoComplete="given-name"
                className="  h-12 w-full rounded-3xl border-0 bg-white py-2"
              />
            </div>
            <div className="ml-5 grow">
              <input
                placeholder="Last Name"
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="  h-12 w-full rounded-3xl border-0 bg-white py-2"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-row">
            <div className="grow">
              <input
                placeholder="Company"
                id="company"
                name="company"
                type="text"
                autoComplete="company"
                className="  h-12 w-full rounded-3xl border-0 bg-white py-2"
              />
            </div>
            <div className="ml-5 grow">
              <input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="  h-12 w-full rounded-3xl border-0 bg-white py-2"
              />
            </div>
          </div>
          <div className="mt-10 flex">
            <div className="grow">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="  h-48 w-full rounded-3xl border-0 bg-white py-2"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="flex flex-row sm:flex-col">
       
            <button
              type="submit"
              className="rounded-3xl bg-blue-900 px-3 py-2 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
