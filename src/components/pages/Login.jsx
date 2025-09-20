import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../global/Button";

const closeEyeSvg = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
    >
        <path
            opacity='0.4'
            d='M1.20455 5.97336C1.58748 5.71806 2.10487 5.82155 2.36017 6.20449C2.38201 6.23569 2.44416 6.32424 2.49026 6.3867C2.58254 6.51171 2.7222 6.69401 2.90594 6.9145C3.27434 7.35658 3.81491 7.94613 4.50079 8.53398C5.88567 9.72106 7.78172 10.8334 10.0001 10.8334C12.2185 10.8334 14.1143 9.72106 15.4992 8.53398C16.185 7.94613 16.7256 7.35658 17.094 6.9145C17.2778 6.69401 17.4175 6.51171 17.5097 6.3867C17.5558 6.32424 17.618 6.23569 17.6398 6.20449C17.8951 5.82155 18.4125 5.71806 18.7955 5.97336C19.1784 6.22865 19.2819 6.74605 19.0265 7.12899L19.0219 7.13566C18.9884 7.18354 18.9029 7.30578 18.8507 7.37645C18.7411 7.52488 18.5813 7.7332 18.3745 7.98147C17.9615 8.4769 17.3563 9.13731 16.5839 9.79948C15.052 11.1124 12.7817 12.5001 10.0001 12.5001C7.21854 12.5001 4.94792 11.1124 3.41613 9.79948C2.64367 9.13731 2.03842 8.4769 1.62557 7.98147C1.41868 7.7332 1.25886 7.52488 1.14931 7.37645C1.09451 7.3022 1.00285 7.17103 0.973423 7.12899C0.718126 6.74605 0.821604 6.22865 1.20455 5.97336Z'
            fill='#191919'
        />
        <path
            d='M2.439 8.88348L1.07745 10.2451C0.752015 10.5705 0.752015 11.0982 1.07745 11.4236C1.40289 11.749 1.93052 11.749 2.25597 11.4236L3.6681 10.0114C3.58202 9.94098 3.49802 9.87065 3.41613 9.8004C3.05249 9.48873 2.7259 9.1774 2.439 8.88348Z'
            fill='#191919'
        />
        <path
            d='M6.2813 11.6624L5.53539 12.9056C5.2986 13.3003 5.42656 13.8121 5.82121 14.0489C6.21586 14.2857 6.72775 14.1577 6.96454 13.7631L7.88344 12.2316C7.3192 12.0873 6.78427 11.8919 6.2813 11.6624Z'
            fill='#191919'
        />
        <path
            d='M12.1166 12.2316L13.0354 13.7631C13.2722 14.1577 13.7841 14.2857 14.1787 14.0489C14.5734 13.8121 14.7013 13.3002 14.4646 12.9056L13.7187 11.6624C13.2157 11.8919 12.6807 12.0873 12.1166 12.2316Z'
            fill='#191919'
        />
        <path
            d='M16.3319 10.0114L17.7441 11.4236C18.0695 11.749 18.5972 11.749 18.9226 11.4236C19.248 11.0982 19.248 10.5705 18.9226 10.2451L17.561 8.88348C17.2741 9.1774 16.9475 9.48873 16.5838 9.8004C16.5019 9.87057 16.418 9.94098 16.3319 10.0114Z'
            fill='#191919'
        />
    </svg>
);

const openEyeIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        width={22}
        height={22}
        fill='currentColor'
    >
        <path d='M468.164 251.629c-14.616-39.158-43.876-71.463-84.618-93.421-36.933-19.904-81.037-30.426-127.545-30.426H256c-46.505 0-90.613 10.522-127.545 30.426-40.742 21.958-70.003 54.262-84.619 93.421a12.502 12.502 0 0 0 0 8.742c14.616 39.159 43.877 71.463 84.619 93.421 36.934 19.904 81.038 30.426 127.546 30.426s90.612-10.521 127.545-30.426c40.742-21.958 70.002-54.263 84.618-93.421a12.502 12.502 0 0 0 0-8.742zM256.001 359.218c-88.234 0-161.012-40.353-187.023-103.218 26.012-62.865 98.789-103.218 187.023-103.218S417.011 193.136 443.022 256c-26.011 62.864-98.787 103.218-187.021 103.218zM256 172.182c-46.218 0-83.818 37.601-83.818 83.818s37.601 83.819 83.818 83.819 83.819-37.602 83.819-83.819-37.601-83.818-83.819-83.818zm0 142.637c-32.433 0-58.818-26.386-58.818-58.819s26.386-58.818 58.818-58.818c32.434 0 58.819 26.386 58.819 58.818 0 32.434-26.385 58.819-58.819 58.819zM243.5 80.363V31c0-6.903 5.597-12.5 12.5-12.5s12.5 5.597 12.5 12.5v49.363c0 6.903-5.597 12.5-12.5 12.5s-12.5-5.596-12.5-12.5zM78.369 77.342c-3.452-5.979-1.403-13.623 4.575-17.075 5.977-3.455 13.622-1.404 17.075 4.575l24.682 42.749c3.452 5.979 1.403 13.623-4.575 17.075a12.494 12.494 0 0 1-17.075-4.575zm308.93 30.25 24.682-42.75c3.451-5.979 11.095-8.027 17.075-4.575 5.979 3.451 8.027 11.097 4.575 17.075l-24.682 42.75a12.495 12.495 0 0 1-17.075 4.575c-5.978-3.452-8.027-11.097-4.575-17.075zm46.332 327.066c3.452 5.979 1.403 13.623-4.575 17.075a12.494 12.494 0 0 1-17.075-4.575l-24.682-42.749c-3.452-5.979-1.403-13.623 4.575-17.075 5.978-3.455 13.623-1.404 17.075 4.575zm-308.93-30.249-24.682 42.749a12.495 12.495 0 0 1-17.075 4.575c-5.979-3.452-8.027-11.097-4.575-17.075l24.682-42.749c3.451-5.979 11.095-8.027 17.075-4.575 5.978 3.452 8.027 11.097 4.575 17.075zM268.5 431.638V481c0 6.903-5.597 12.5-12.5 12.5s-12.5-5.597-12.5-12.5v-49.362c0-6.903 5.597-12.5 12.5-12.5s12.5 5.596 12.5 12.5z' />
    </svg>
);
export default function Login() {
    const [showPass, setShowPass] = useState(false);
    const [pass, setPass] = useState("");
    return (
        <div className='flex flex-col min-h-screen '>
            <main className='relative overflow-hidden text-black1 min-h-[980px] 2xl:min-h-[1080px] py-10 flex items-center px-4 bg-fadedWhite flex-1'>
                <section className='flex flex-col lg:flex-row items-center justify-between gap-[72px] 2xl:max-w-[1472px] max-w-[1170px] mx-auto w-full relative z-10'>
                    <Link className='2xl:pl-[172px]' to={"/"}>
                        <img
                            src='/login-logo.png'
                            className='2xl:w-[392px] xl:w-[300px] w-[224px]'
                        />
                    </Link>

                    <form
                        className='rounded-[40px] bg-white box-shadow
                 xl:p-10 sm:p-6 p-[24px_16px] w-full max-w-[512px] '
                    >
                        <h1 className='text-black1 lg:text-[36px] text-2xl leading-normal lg:leading-[38px] sm:font-semibold font-medium text-center'>
                            Log In
                        </h1>
                        <p className='text-black1/55 lg:mt-3.5 mt-2.5 xl:text-[20px] leading-normal text-center'>
                            Welcome back, your journey continues here.
                        </p>

                        <div className='lg:mt-9 mt-10'>
                            <label
                                className='xl:text-lg leading-normal text-black1/65'
                                htmlFor='email-id'
                            >
                                E-Mail
                            </label>
                            <input
                                type='email'
                                id='email-id'
                                className='lg:mt-2.5 mt-2 h-[60px] w-full bg-fadedWhite rounded-full px-6 placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50'
                                placeholder='Enter email'
                            />
                        </div>

                        <div className='mt-5'>
                            <label
                                className='xl:text-lg leading-normal text-black1/65'
                                htmlFor='password-id'
                            >
                                Password
                            </label>
                            <div className='lg:mt-2.5 mt-2 relative flex items-center'>
                                <input
                                    type={showPass ? "text" : "password"}
                                    id='password-id'
                                    value={pass}
                                    onChange={(e) => {
                                        setPass(e.target.value);
                                    }}
                                    className='h-[60px] w-full bg-fadedWhite rounded-full px-6 placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50'
                                    placeholder='Enter password'
                                />

                                <div
                                    className='size-5 absolute right-6 cursor-pointer'
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ? openEyeIcon : closeEyeSvg}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end mt-4'>
                            <Link
                                to={""}
                                className='text-darkblue text-right inline-block uppercase font-medium text-sm '
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button className='lg:mt-8 mt-10'>Log In</Button>

                        <p className='text-black1/55 text-base text-center mt-8'>
                            Don’t have an account?{" "}
                            <Link
                                to={""}
                                className='font-semibold uppercase text-darkblue'
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </section>

                <img
                    className='2xl:w-[1100px] xl:w-[700px] w-[500px] max-w-none absolute 2xl:-top-[736px] xl:-top-[450px] -top-[308px] xl:left-1/2 -left-[168px] xl:-translate-x-1/2 '
                    src='login-up-circle.svg'
                    alt=''
                />

                <img
                    className='2xl:w-[1100px] xl:w-[800px] w-[500px] max-w-none absolute 2xl:-bottom-[845px] xl:-bottom-[600px] -bottom-[410px] 2xl:-right-[502px] -right-[240px]'
                    src='login-down-circle.svg'
                    alt=''
                />
            </main>
        </div>
    );
}
