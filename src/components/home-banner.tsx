import { MagicWindSvg } from "./misc/magic-wind";

export function HomeBanner() {
    return (
        <section className="bg-white rounded-md container mx-auto lg:mt-20 transform duration-500 p-10 sm:mt-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center from-cyan-400 to-cyan-900 mb-8">
                <MagicWindSvg />
            </div>
            <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-cyan-600 mb-3">
                Tailwind CSS
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mt-4 mb-4 md:mt-8 md:mb-8">
                100 React UI Designs
            </h1>
            <p className="max-w-5xl text-lg sm:text-2xl sm:leading-10 space-y-6 mb-6 text-gray-700">
                A growing collection of responsive text/image cards you can
                use/copy-paste in your tailwind css projects. Some of these
                cards have animated hover effects, scroll down to find them out.
            </p>
            <p className="italic font-normal">
                Download From
                <a
                    className="github-button text-cyan-700 mx-1"
                    href="https://github.com/ashraful-raju/100-react-ui"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star ashraful-raju/100-react-ui on GitHub"
                >
                    Github
                </a>
                <span>&nbsp;&nbsp;</span>
                Follow
                <a
                    className="github-button text-cyan-700 mx-1"
                    href="https://github.com/ashraful-raju"
                    data-size="large"
                    aria-label="Follow @HasinHayder on GitHub"
                >
                    @Ashraful-raju
                </a>
            </p>
        </section>
    );
}
