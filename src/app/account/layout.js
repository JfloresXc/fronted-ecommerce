import Section from '@/components/secction'
import Sidebar from '@/components/sidebar/Sidebar'
import SidebarHidden from '@/components/sidebar/SidebarHidden'

export default function layout({ children }) {
  return (
    <div className="border-t border-b border-border-base">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
        <div className="pt-10 2xl:pt-12 pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 xl:max-w-screen-xl 2xl:max-w-[1300px] mx-auto">
          <div className="flex flex-col w-full lg:flex-row">
            <SidebarHidden />
            <Sidebar />
            <div className="w-full p-4 mt-4 border rounded-md lg:mt-0 border-border-base sm:p-5 lg:py-8 2xl:py-10 lg:px-7 2xl:px-12 overflow-x-auto">
              <Section>{children}</Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
