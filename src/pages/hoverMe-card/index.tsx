import { Layout } from "src/components";

export function HoverMe() {
    return (
        <Layout title="Hover me card">
            <div className="flex flex-col gap-4 group/items transition-shadow">
                <div className="bg-red-600 text-white text-center h-28 w-64 cursor-pointer rounded-lg transition-all duration-500 hover:!scale-110 group-hover/items:scale-90 group-hover/items:blur-sm hover:!blur-none">
                    <p className="font-bold text-4xl pt-4">Hover Me</p>
                    <p className="text-xl">Lorem Ipsum</p>
                </div>
                <div className="bg-blue-600 text-white text-center h-28 w-64 cursor-pointer rounded-lg transition-all duration-500 hover:!scale-110 group-hover/items:scale-90 group-hover/items:blur-sm hover:!blur-none">
                    <p className="font-bold text-4xl pt-4">Hover Me</p>
                    <p className="text-xl">Lorem Ipsum</p>
                </div>
                <div className="bg-green-600 text-white text-center h-28 w-64 cursor-pointer rounded-lg transition-all duration-500 hover:!scale-110 group-hover/items:scale-90 group-hover/items:blur-sm hover:!blur-none">
                    <p className="font-bold text-4xl pt-4">Hover Me</p>
                    <p className="text-xl">Lorem Ipsum</p>
                </div>
            </div>
        </Layout>
    );
}
