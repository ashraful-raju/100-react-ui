export function UiLayout({
    children,
    className,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <section
            className={`mx-auto px-2 sm:px-10 py-16 w-full h-min-screen d-flex justify-center items-center ${className}`}
        >
            {children}
        </section>
    );
}
