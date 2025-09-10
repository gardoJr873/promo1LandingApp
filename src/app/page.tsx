import CallToAction from "@/components/(features)/CallToAction";
import Footer from "@/components/(features)/Footer";
import IntroContent from "@/components/(features)/IntroContent";


export default function Main() {
  return (
      <>
        <br/>
        {/* Be sure to use this with a layout container that is full-width on mobile */}
        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
          <div className="px-4 py-5 sm:p-6">
            <IntroContent />
          </div>
        </div>
        <br/>
        {/* Be sure to use this with a layout container that is full-width on mobile */}
        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
          <div className="px-4 py-5 sm:p-6">Body</div>
        </div>
        <br/>
        {/* Be sure to use this with a layout container that is full-width on mobile */}
        <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
          <div className="px-4 py-5 sm:p-6">Body</div>
        </div>
        <br/>
        {/* Be sure to use this with a layout container that is full-width on mobile */}
        <div className="overflow-hidden bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
          <div className="px-4 py-5 sm:p-6">
            <CallToAction />
          </div>
          <div className="px-4 py-4 sm:px-6">
            <Footer />
          </div>
        </div>
      </>
    )
  };
