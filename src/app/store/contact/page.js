import FormContact from '@/components/form/FormContact'

export default function page() {
  return (
    <div>
      <div class="lg:min-h-[370px] 2xl:min-h-[455px] lg:py-0 h-auto pt-10 md:pt-14 pb-20 md:pb-24 flex lg:items-center bg-cover lg:bg-cover bg-left sm:bg-top lg:bg-center bg-no-repeat border-t border-border-base bg-[url('/storage/contact-page-banner.png')] max-w-7xl px-3 sm:px-6 lg:px-5 py-5">
        <div class="w-full max-w-[1484px] mx-auto px-4 md:px-6 lg:px-8">
          <div class="sm:max-w-xs md:max-w-sm lg:max-w-xl lg:pb-5">
            <h2 class="font-manrope font-extrabold text-xl leading-7 md:leading-snug lg:leading-snug sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-snug text-brand-dark tracking-tight mb-2.5 md:pr-6 md:pl-6 lg:pr-36 3xl:pr-0 3xl:pl-0">
              ¿Necesitas apoyo? Nuestro equipo está listo para ayudar
            </h2>
            <p class="text-15px lg:text-base xl:text-[17px] leading-7 lg:leading-8 xl:leading-9 text-brand-dark text-opacity-60 lg:pr-28 md:pl-6">
              Nos apasiona la construcción de productos cuidadosamente pensados
              para ti que mejorarán tu espacio en la cocina.
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-[1420px] mx-auto mt-24">
        <div class="flex flex-wrap w-full p-5 md:p-7 lg:p-10 xl:p-16 3xl:px-[70px] xl:py-12 rounded-md -mt-8 relative">
          <div class="w-full md:w-[53%] xl:w-[60%] md:pr-8 md:pl-8 lg:pr-0 lg:pl-0 2xl:pr-24 2xl:pl-24 lg:mb-0 mb-8">
            <div class="mb-0 3xl:pr-5 3xl:pl-5">
              <h2 class="text-brand-dark text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold font-manrope mb-3 lg:mb-4 xl:mb-5">
                Tu comodidad es nuestra principal prioridad
              </h2>
              <p class="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px xl:leading-8">
                Nos enorgullece ofrecerte una amplia selección de los mejores
                utensilios de cocina, diseñados para elevar tu experiencia
                culinaria. En Socoro Home, entendemos que la cocina es el
                corazón del hogar, y es por eso que nos esforzamos por
                proporcionarte productos de alta calidad que hacen que cocinar
                sea más fácil, eficiente y, sobre todo, divertido. Descubre la
                excelencia en cada detalle con nuestra gama de utensilios
                cuidadosamente seleccionados. ¡Explora nuestro catálogo y
                descubre cómo podemos mejorar tu comodidad en la cocina hoy
                mismo!
              </p>
            </div>
          </div>
          <div class="w-full md:w-[47%] xl:w-[40%] pb-0.5 lg:pl-12 lg:pr-12 pt-1.5">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  )
}
