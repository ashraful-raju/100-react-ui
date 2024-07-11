import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { routes } from "src/routes";

export function UiLists() {
    return (
        <div className="rounded-md container max-w-3xl mx-auto lg:mt-20 transform duration-500 p-10 sm:mt-10 mb-20">
            <section className="rounded-md container mx-auto lg:mt-20 transform duration-500 mt-10">
                <h1 className="my-5 text-4xl text-center text-slate-800 font-bold">
                    UI Lists
                </h1>
            </section>
            <ol className="list-decimal text-cyan-800 font-bold">
                {routes.map((item) => (
                    <Fragment key={item.path}>
                        <li className="py-2">
                            <Link
                                className="font-medium font-mono text-cyan-900"
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        </li>
                        <hr className="-ml-8 border-slate-300" />
                    </Fragment>
                ))}
            </ol>
        </div>
    );
}
