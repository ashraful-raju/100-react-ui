import { Link } from "react-router-dom";

export function Layout({
    children,
    className,
    title,
    description,
}: {
    title: string;
    description?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <section
                className={`mx-auto w-full h-min-screen relative overflow-hidden ${className}`}
            >
                <div className="mt-4">
                    <div className="flex pl-4 items-center gap-1 text-xs font-light">
                        <Link to="/" className="underline">
                            Back to Home
                        </Link>
                        <span>|</span>
                        <a
                            target="_blank"
                            href="https://github.com/ashraful-raju/100-react-ui"
                            className="underline"
                        >
                            Get the code
                        </a>
                    </div>
                </div>
                <div className="pt-10 pb-20 w-full mx-auto items-center flex flex-col justify-center relative">
                    <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl mb-6 mx-auto">
                        <div>
                            <h1>{title}</h1>
                            {description && <p>{description}</p>}
                        </div>
                    </div>

                    {children}
                </div>
            </section>
        </main>
    );
}
