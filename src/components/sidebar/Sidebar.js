import Routes from './Routes'

export default function Sidebar() {
  return (
    <div className="hidden lg:block shrink-0 w-56 xl:w-72 2xl:w-[385px] mr-7 ml-7 xl:mr-8 xl:ml-8">
      <nav className="flex flex-col pb-2 md:pb-6 border border-border-base rounded-md overflow-hidden">
        <Routes />
      </nav>
    </div>
  )
}
