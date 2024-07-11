import { HomeBanner, UiLists } from "src/components";

export function Home() {
    return (
        <main className="min-h-screen">
            <section
                className={`mx-auto w-full h-min-screen relative overflow-hidden`}
            >
                <HomeBanner />

                <UiLists />
            </section>
        </main>
    );
}
