import React from "react";

const obileLangScopesArea: React.FC = () => {
    const handleLocalizationOpen = () => {
        console.log("Localization modal opened");
    };

    const handleScopesOpen = () => {
        // Trigger the scopes::open event
        console.log("Scopes modal opened");
        // You can replace this with actual functionality as needed
    };

    return (
        <div className="md:hidden  flex lg:hidden border-t m-4 py-4 w-[calc(100%-32px)] rtl:space-x-reverse space-x-2">
            {/* Localization Button */}
            <button
                type="button"
                onClick={handleLocalizationOpen}
                className="btn--link flex items-center"
            >
                <span className="h-4 flex items-center">
                    <span className="flag iti__flag iti__sa rounded-sm inline-block"></span>
                    <span className="rtl:mr-1 ltr:ml-1">العربية</span>
                </span>
                <span className="rtl:pr-[9px] ltr:pl-[9px] rtl:border-r ltr:border-l dark:border-white/30 leading-none rtl:mr-2 ltr:ml-2">
                    ر.س
                </span>
            </button>

            {/* Scopes Button */}
            <button
                type="button"
                onClick={handleScopesOpen}
                className="btn--link h-full max-w-[calc(100%-100px)] justify-center overflow-hidden flex items-center"
            >
                <i className="sicon-location"></i>
                <span className="rtl:mr-1.5 ltr:ml-1.5 text-ellipsis whitespace-nowrap overflow-hidden max-w-[120px]">
                    الفرع الرئيسي
                </span>
            </button>
        </div>
    );
};

export default MobileLangScopesArea;
