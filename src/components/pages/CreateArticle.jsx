import Button from "../global/Button";
import CategorySelect from "../global/CategorySelect";
import Header from "../global/Header";

import { Link, useNavigate } from "react-router-dom";
import ImageSelector from "../global/ImageSelector";

const cameraImgSvg = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='60'
        height='60'
        viewBox='0 0 60 60'
        fill='none'
        className='sm:size-[60px] size-10'
    >
        <path
            opacity='0.28'
            d='M55.0005 22.4993V37.4992C55.0005 44.5705 55.0005 48.106 52.8038 50.3027C50.607 52.4992 47.0715 52.4992 40.0005 52.4992H20.0005C12.9294 52.4992 9.39389 52.4992 7.19719 50.3027C5.00049 48.106 5.00049 44.5705 5.00049 37.4992V27.6335C5.00049 25.1835 5.00049 23.9583 5.28404 22.9566C5.99339 20.4507 7.95189 18.4922 10.4577 17.7829C11.4594 17.4993 12.6845 17.4993 15.1347 17.4993C16.0497 17.4993 16.5071 17.4993 16.9333 17.4251C17.9891 17.241 18.9579 16.7225 19.6967 15.9461C19.9949 15.6327 20.743 14.5106 21.2505 13.7493C22.2414 12.2629 22.7369 11.5197 23.4142 11.0085C23.8279 10.6963 24.2875 10.4503 24.7767 10.2793C25.5778 9.99933 26.471 9.99933 28.2575 9.99933H32.5005'
            stroke='#191919'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            opacity='0.28'
            d='M40.0005 33.7492C40.0005 39.2722 35.5233 43.7492 30.0005 43.7492C24.4776 43.7492 20.0005 39.2722 20.0005 33.7492C20.0005 28.2265 24.4776 23.7493 30.0005 23.7493C35.5233 23.7493 40.0005 28.2265 40.0005 33.7492Z'
            stroke='#191919'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            opacity='0.28'
            d='M40.0005 13.7493H52.5005M46.2505 19.9993V7.49933'
            stroke='#191919'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default function CreateArticle() {
    const navigation = useNavigate();
    return (
        <div className='bg-fadedWhite min-h-screen'>
            <Header />
            <main className='sm:pt-[52px] pt-8 pb-[68px] px-4'>
                <section className='max-w-[1692px] mx-auto lg:pt-[30px] lg:p-10 md:p-8 sm:p-6 p-4 bg-white box-shadow rounded-[40px] '>
                    <div className=' flex flex-col sm:flex-row sm:items-center items-start gap-10'>
                        <Link
                            to={"/articles"}
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
                        <ImageSelector cameraImgSvg={cameraImgSvg} />

                        <div className='grid grid-cols-2 gap-x-4 sm:gap-y-7 gap-y-6 flex-1'>
                            <div className='sm:col-span-1 col-span-2'>
                                <label
                                    className='xl:text-lg leading-normal text-black1/65'
                                    htmlFor='title-id'
                                >
                                    Title
                                </label>
                                <input
                                    type='text'
                                    id='title-id'
                                    className='mt-1.5 h-[60px] w-full bg-fadedWhite rounded-full px-6 placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50 text-base'
                                    placeholder='Enter title'
                                />
                            </div>

                            <div className='sm:col-span-1 col-span-2'>
                                <label
                                    className='xl:text-lg leading-normal text-black1/65'
                                    htmlFor='category-id'
                                >
                                    Category
                                </label>

                                <CategorySelect />
                            </div>

                            <div className='col-span-2'>
                                <label
                                    className='xl:text-lg leading-normal text-black1/65'
                                    htmlFor='description-id'
                                >
                                    Description
                                </label>
                                <input
                                    type='text'
                                    id='description-id'
                                    className='mt-1.5 h-[60px] w-full bg-fadedWhite rounded-full px-6 placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50 text-base'
                                    placeholder='Enter description'
                                />
                            </div>

                            <div className='col-span-2'>
                                <label
                                    className='xl:text-lg leading-normal text-black1/65'
                                    htmlFor='content-id'
                                >
                                    Content
                                </label>
                                <textarea
                                    type='text'
                                    id='content-id'
                                    className=' mt-1.5 h-[280px] w-full bg-fadedWhite rounded-[30px] py-5 px-6 placeholder:text-black1/[0.32] text-black1 focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50 text-base'
                                    placeholder='Enter content'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end sm:gap-4 gap-2 md:mt-10 mt-6'>
                        <Button
                            variant='outline'
                            className='sm:max-w-[129px] 2xl:text-[20px] md:text-lg text-base'
                            onClick={() => navigation("/articles")}
                        >
                            Cancel
                        </Button>

                        <Button
                            className='sm:max-w-[128px] 2xl:text-[20px] md:text-lg text-base'
                            onClick={() => navigation("/articles")}
                        >
                            Create
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
