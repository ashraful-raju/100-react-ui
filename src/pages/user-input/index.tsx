import { Layout } from "src/components";

export function UserInput() {
    return (
        <Layout title="Mobile Navigation">
            <div className="flex flex-col-reverse max-w-sm w-full  pt-24 mx-auto border-t">
                <input
                    placeholder="Email Adress"
                    className="peer outline-none ring px-4 py-1 h-12 border-0 rounded-lg ring-gray-200 duration-500 focus:ring-2 focus:border-gray-100 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 text-xs shadow-xl shadow-gray-400/10 focus:shadow-none focus:rounded-md focus:ring-blue-600 placeholder:text-gray-400"
                    type="text"
                />
                <span className="duration-500 opacity-0 mb-2 peer-focus:opacity-100 text-gray-500 text-xs -translate-y-12 peer-focus:translate-y-0">
                    Email Adress
                </span>
            </div>
        </Layout>
    );
}
