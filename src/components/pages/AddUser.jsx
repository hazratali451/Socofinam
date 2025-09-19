import React from "react";
import Header from "../global/Header";
import { Link, useNavigate } from "react-router-dom";
import Button from "../global/Button";

const fields = [
    {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter first name",
    },
    {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter last name",
    },
    { id: "email", label: "E-mail", type: "email", placeholder: "Enter email" },

    {
        id: "address",
        label: "Address",
        type: "text",
        placeholder: "Enter address",
    },
    {
        id: "number",
        label: "Number",
        type: "text",
        placeholder: "Enter number",
    },
    { id: "block", label: "Block", type: "text", placeholder: "Enter block" },

    { id: "city", label: "City", type: "text", placeholder: "Enter city" },
    {
        id: "enterprise",
        label: "Enterprise",
        type: "text",
        placeholder: "Enter enterprise",
    },
    {
        id: "mobile",
        label: "Mobile Number",
        type: "tel",
        placeholder: "Enter mobile number",
    },
];

export default function AddUser() {
    const navigation = useNavigate();
    return (
        <div className='bg-fadedWhite min-h-screen'>
            <Header />
            <main className='sm:pt-[52px] pt-8 pb-[68px] px-4'>
                <section className='max-w-[1692px] mx-auto lg:pt-[30px] lg:p-10 md:p-8 sm:p-6 p-4 bg-white box-shadow rounded-[40px] '>
                    <div className=' flex flex-col sm:flex-row sm:items-center items-start gap-10'>
                        <Link
                            to={"/users"}
                            className='inline-flex items-center gap-3 2xl:h-20 h-[68px] 2xl:px-8 px-6 rounded-full bg-fadedWhite'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='28'
                                height='28'
                                viewBox='0 0 28 28'
                                fill='none'
                            >
                                <path
                                    d='M12.8332 21L18.0832 21C20.9827 21 23.3332 18.6495 23.3332 15.75C23.3332 12.8505 20.9827 10.5 18.0832 10.5L4.6665 10.5'
                                    stroke='#191919'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M8.16648 7C8.16648 7 4.66652 9.57775 4.6665 10.5C4.66649 11.4224 8.1665 14 8.1665 14'
                                    stroke='#191919'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            <div className='2xl:text-2xl text-[20px] leading-[38px] font-medium'>
                                Back
                            </div>
                        </Link>

                        <h1 className='flex-1 w-full sm:w-auto text-center xl:text-4xl lg:text-3xl md:text-2xl text-[22px] xl:font-semibold font-medium md:leading-[38px] leading-normal'>
                            Create an article
                        </h1>

                        <div className='md:w-[156px] w-[132px] md:block hidden'></div>
                    </div>

                    <div className='mt-8 flex flex-col md:flex-row sm:gap-10 gap-6 justify-stretch'>
                        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-x-4 sm:gap-y-7 gap-y-6 flex-1'>
                            {fields.map((f) => (
                                <InputField
                                    key={f.id}
                                    id={f.id}
                                    label={f.label}
                                    type={f.type}
                                    placeholder={f.placeholder}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-end sm:gap-4 gap-2 2xl:mt-[260px] md:mt-20 mt-6'>
                        <Button
                            variant='outline'
                            className='sm:max-w-[129px] 2xl:text-[20px] md:text-lg text-base'
                            onClick={() => navigation("/users")}
                        >
                            Cancel
                        </Button>

                        <Button
                            className='sm:max-w-[128px] 2xl:text-[20px] md:text-lg text-base'
                            onClick={() => navigation("/users")}
                        >
                            Add
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}

function InputField({
    id,
    label,
    type = "text",
    placeholder = "",
    className = "",
    ...props
}) {
    return (
        <div className=''>
            <label
                className='xl:text-lg leading-normal text-black1/65'
                htmlFor={id}
            >
                {label}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                className={`mt-1.5 h-[60px] w-full bg-fadedWhite rounded-full px-6 placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50 text-base ${className}`}
                {...props}
            />
        </div>
    );
}
