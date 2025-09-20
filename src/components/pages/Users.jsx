import React, { useState } from "react";
import Header from "../global/Header";
const rows = [
    {
        firstName: "Sofia",
        lastName: "Müller",
        email: "sofia.mueller@example.com",
    },
    {
        firstName: "Yara",
        lastName: "Haddad",
        email: "yara.haddad@example.com",
    },
    {
        firstName: "Viktor",
        lastName: "Petrov",
        email: "viktor.petrov@example.com",
    },
    {
        firstName: "Kenji",
        lastName: "Takahashi",
        email: "kenji.takahashi@example.com",
    },
    {
        firstName: "Isabella",
        lastName: "Conti",
        email: "isabella.conti@example.com",
    },
];

export default function Users() {
    // dynamic columns
    const columns = ["First Name", "Last Name", "Email Address", "Delete"];

    // dynamic rows
    const [data, setData] = useState(rows);
    const [searchData, setSearchData] = useState();

    const visible = searchData || data;

    return (
        <div className='bg-fadedWhite min-h-screen'>
            <Header array={data} setArray={setSearchData} />
            <main className='sm:pt-[52px] pt-8 pb-[68px] px-4'>
                <section className='max-w-[1692px] mx-auto p-2 bg-white box-shadow rounded-[40px] pb-[140px] lg:block hidden'>
                    <div className='overflow-hidden rounded-t-[34px] relative '>
                        <table className='w-full 2xl:table-fixed '>
                            <thead className='bg-fadedWhite'>
                                <tr>
                                    {columns.map((col, i) => (
                                        <th
                                            key={col}
                                            className={`text-black1/65 text-lg font-normal leading-normal p-[22px_0px_24px_48px] text-left 
                                            ${i === 0 ? "2xl:w-[400px] " : ""} 
                                            ${i === 1 ? "2xl:w-[400px] " : ""} 
                                            ${
                                                i === columns.length - 1
                                                    ? "2xl:w-[265px] "
                                                    : ""
                                            }
                                          `}
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className=''>
                                {visible.length === 0 ? (
                                    <tr className='lg:text-2xl text-xl text-black1/70 text-center'>
                                        <td className="pt-10" colSpan={columns.length}>No Item Found</td>
                                    </tr>
                                ) : (
                                    visible.map((row, idx) => (
                                        <tr
                                            key={idx}
                                            className='text-[20px] font-normal text-black1 leading-none border-b border-black1/[0.12] mx-2'
                                        >
                                            <td className='p-[20px_0px_22px_48px] 2xl:w-[400px]'>
                                                {row.firstName}
                                            </td>
                                            <td className='p-[20px_0px_22px_48px] 2xl:w-[400px]'>
                                                {row.lastName}
                                            </td>
                                            <td className='p-[20px_0px_22px_48px]'>
                                                {row.email}
                                            </td>
                                            <td className='p-[20px_0px_22px_48px] 2xl:w-[265px] text-center'>
                                                {/* <-- right column resized */}
                                                <button
                                                    className='h-14 rounded-full bg-fadedWhite max-w-[165px] w-full px-8 py-5 flex items-center justify-center text-base font-semibold leading-normal text-[#FF4757] hover:bg-[#FF4757] hover:text-white transition-colors duration-300 ease-in-out'
                                                    onClick={() =>
                                                        setData((prev) =>
                                                            prev.filter(
                                                                (item) =>
                                                                    item !== row
                                                            )
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        <div className='w-2 top-24 bottom-0 left-0 absolute bg-white'></div>
                        <div className='w-2 top-24 bottom-0 right-0 absolute bg-white'></div>
                    </div>
                </section>

                <div className='lg:hidden flex flex-col gap-4'>
                    {visible.length === 0 ? (
                        <div className='lg:text-2xl text-xl text-black1/70 text-center'>
                            No Item Found
                        </div>
                    ) : (
                        visible.map((cur, i) => (
                            <div
                                key={i}
                                className='p-2 rounded-[40px] bg-white box-shadow'
                            >
                                <div className='py-8 px-4 bg-[#FBFBFB] rounded-[34px] grid xs:grid-cols-[auto_1fr] gap-x-3 gap-y-6'>
                                    <div className='text-black1/55 text-lg leading-normal'>
                                        First Name :
                                    </div>
                                    <div className='text-lg font-medium leading-normal'>
                                        {cur.firstName}
                                    </div>
                                    <div className='text-black1/55 text-lg leading-normal'>
                                        Last Name :
                                    </div>
                                    <div className='text-lg font-medium leading-normal'>
                                        {cur.lastName}
                                    </div>
                                    <div className='text-black1/55 text-lg leading-normal'>
                                        Email Adrres :
                                    </div>
                                    <div className='text-lg font-medium leading-normal'>
                                        {cur.email}
                                    </div>
                                </div>

                                <button
                                    className='text-[#FF4757] text-base leading-normal font-semibold text-center w-full h-[68px] rounded-full bg-fadedWhite mt-4 hover:bg-[#FF4757] hover:text-white transition-colors duration-300 ease-in-out'
                                    onClick={() =>
                                        setData((prev) =>
                                            prev.filter((item) => item !== cur)
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
