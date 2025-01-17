import { Layout } from "src/components";

export function ProfileCard() {
    return (
        <Layout title="Profile card" className="bg-indigo-100  text-center">
            {/* card start */}
            <div className="bg-white sm:w-96 w-full mx-auto h-auto border rounded-md text-center">
                <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                        {/* image section start */}
                        <div className="h-40 w-40 rounded-full border-white  mx-auto my-4 overflow-hidden">
                            <img src="/14.jpg" alt="user" />
                        </div>
                        {/* image section end */}
                        {/* identify section start */}
                        <div className="py-2">
                            <h2 className="font-bold text-2xl text-gray-800  mb-1">
                                ASHRAFUL ALAM
                            </h2>
                            <h3 className="font-semibold text-lg text-gray-600 my-2">
                                (Sofware Engineer)
                            </h3>
                            <div className="inline-flex text-gray-700  items-center">
                                <svg
                                    className=" text-gray-400 mr-1"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path
                                        className=""
                                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                    />
                                </svg>
                                DHAKA, BANGLADESH.
                            </div>
                        </div>
                        {/* identify section end */}
                    </div>
                    {/* actions section start */}
                    <div className="flex justify-center gap-2 mx-auto px-auto">
                        <button className="flex-1 rounded-full bg-blue-600 text-white px-4 py-2">
                            Follow
                        </button>
                        <button className="flex-1 bg-gray-200 rounded-full border-2 border-gray-800 px-4 py-2">
                            Message
                        </button>
                    </div>
                    {/* actions section end */}
                </div>
                {/* footer section start */}
                <div className="mx-auto px-5 items-center">
                    <div className=" mb-4 items-center text-gray-800 ">
                        <span className="">
                            <strong className="text-black ">12</strong>{" "}
                            Followers you know
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex justify-center mx-auto pb-3">
                            <img
                                className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt=""
                            ></img>
                            <img
                                className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                src="https://randomuser.me/api/portraits/women/31.jpg"
                                alt=""
                            ></img>
                            <img
                                className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                src="https://randomuser.me/api/portraits/men/33.jpg"
                                alt=""
                            ></img>
                            <img
                                className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                src="https://randomuser.me/api/portraits/women/32.jpg"
                                alt=""
                            ></img>
                            <img
                                className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                src="https://randomuser.me/api/portraits/men/44.jpg"
                                alt=""
                            ></img>
                            <img
                                className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                src="https://randomuser.me/api/portraits/women/42.jpg"
                                alt=""
                            ></img>
                            <span className="flex items-center justify-center bg-white  rounded-full h-10 w-10">
                                +999
                            </span>
                        </div>
                    </div>
                </div>
                {/* footer section end */}
            </div>
            {/* card end */}
        </Layout>
    );
}
