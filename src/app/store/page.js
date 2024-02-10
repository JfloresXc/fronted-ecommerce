export default function IndexPage() {
  return (
    <div className="w-full">
      {/* <Image
        src="/storage/hero-socoro1.jpg"
        alt="Hero Image"
        width={1200}
        height={300}
        className="object-cover w-full h-full"
      /> */}

      <div class="lg:min-h-[600px] 2xl:min-h-[455px] w-full lg:py-0 h-auto pt-10 md:pt-14 pb-20 md:pb-24  bg-cover lg:bg-cover sm:bg-top lg:bg-center bg-no-repeat border-t border-border-base bg-[url('/storage/hero-socoro1.jpg')] py-5 flex flex-col gap-10 items-center justify-center">
        <h1 class="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl text-white">
          Socoro Home
        </h1>
        <p class="text-sm text-heading lg:text-base xl:text-lg text-white">
          Get your healthy foods &amp; snacks delivered at your doorsteps all
          day everyday
        </p>
      </div>
    </div>
  )
}
