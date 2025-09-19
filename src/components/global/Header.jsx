import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='px-4'>
            <div className='xl:px-4 sm:pt-10 pt-[72px] flex items-center justify-between gap-10'>
                <Link to={"/"}>
                    <img
                        className='lg:w-[240px] w-[176px]'
                        src='/logo.png'
                        alt=''
                    />
                </Link>

                <div className='flex-1 flex justify-end items-center gap-10'>
                    {/* this will toggle the switch button active and inactive 
            for path name = 'articles' or 'create-article' ativate articles
            for path name = 'users' or 'create-user' ativate users
             */}
                    <div className='h-[68px] lg:flex hidden items-stretch bg-white box-shadow p-1 rounded-full gap-2 2xl:max-w-[800px] max-w-[460px] flex-1'>
                        <div className='h-[59px] px-10 bg-darkblue/20 text-[20px] font-semibold text-darkblue rounded-full flex justify-center items-center text-center cursor-pointer flex-1'>
                            Articles
                        </div>

                        <div className='h-[59px] px-10 text-[20px] rounded-full flex justify-center items-center text-center cursor-pointer flex-1'>
                            Users
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='text-right hidden sm:block'>
                            <p className='text-2xl font-medium leading-normal '>
                                Marco Carlos
                            </p>
                            <p className='text-lg text-black1/55 leading-normal -mt-[0.1em]'>
                                Lorem ipsume
                            </p>
                        </div>

                        <img
                            className='sm:size-[68px] sm:min-w-[68px] size-[72px] rounded-full box-shadow'
                            src='user.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>

            <div className='lg:mt-[68px] md:mt-14 mt-7 max-w-[1692px] mx-auto flex xl:gap-3 gap-2'>
                <div className='bg-white box-shadow rounded-full relative flex items-center flex-1'>
                    <div className='flex items-center gap-4 absolute left-[26px]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                        >
                            <path
                                d='M19.8333 19.8333L24.4999 24.5'
                                stroke='#191919'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M22.1667 12.8333C22.1667 7.67867 17.988 3.5 12.8333 3.5C7.67867 3.5 3.5 7.67867 3.5 12.8333C3.5 17.988 7.67867 22.1667 12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333Z'
                                stroke='#191919'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>

                        <div className='h-[32px] w-[1.5px] bg-black1/20'></div>
                    </div>

                    <input
                        type='Search'
                        id='Search-id'
                        className=' 2xl:h-[80px] h-[72px] w-full rounded-full px-6 pl-[86px] placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50 '
                        placeholder='Search'
                    />
                </div>

                <div className='md:p-4 p-3.5 flex items-center justify-center bg-skyblue rounded-full cursor-pointer box-shadow'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        viewBox='0 0 28 28'
                        fill='none'
                        className='xl:size-[28px] size-6'
                    >
                        <path
                            d='M10.3337 14.5904C7.43051 12.4199 5.36158 10.0323 4.2319 8.69011C3.8822 8.27462 3.76761 7.97055 3.69872 7.43493C3.4628 5.60093 3.34485 4.68393 3.88261 4.09197C4.42038 3.5 5.37138 3.5 7.27339 3.5H20.7266C22.6287 3.5 23.5796 3.5 24.1173 4.09197C24.6552 4.68393 24.5372 5.60093 24.3013 7.43494C24.2324 7.97056 24.1178 8.27463 23.768 8.69011C22.6368 10.0341 20.5638 12.4258 17.6547 14.5991C17.3915 14.7958 17.218 15.1161 17.1858 15.4716C16.8977 18.6573 16.6319 20.4022 16.4665 21.2849C16.1995 22.71 14.1787 23.5674 13.097 24.3323C12.4531 24.7877 11.6717 24.2457 11.5882 23.5408C11.4292 22.1971 11.1295 19.4675 10.8025 15.4716C10.7731 15.1129 10.599 14.7888 10.3337 14.5904Z'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>

                <div className='md:p-4 p-3.5 flex items-center justify-center bg-pink1 rounded-full cursor-pointer box-shadow'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        viewBox='0 0 28 28'
                        fill='none'
                        className='xl:size-[28px] size-6'
                    >
                        <path
                            d='M14.0012 5.83337V22.169'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M22.1689 14.0023H5.83325'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            </div>

            {/* this will toggle the switch button active and inactive 
            for path name = 'articles' or 'create-article' ativate articles
            for path name = 'users' or 'create-user' ativate users
             */}
            <div className='h-[67px] flex lg:hidden items-stretch bg-white box-shadow p-1 rounded-full gap-2 flex-1 mt-[28px]'>
                <div className='h-[59px] px-10 bg-darkblue/20 text-lg leading-normal font-semibold text-darkblue rounded-full flex justify-center items-center text-center cursor-pointer flex-1'>
                    Articles
                </div>

                <div className='h-[59px] px-10 text-lg leading-normal rounded-full flex justify-center items-center text-center cursor-pointer flex-1'>
                    Users
                </div>
            </div>
        </header>
    );
}
