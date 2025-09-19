import React from "react";
import Header from "../global/Header";
import Button from "../global/Button";

const data = [
    {
        heading: "Lorem Ipsum Dolor Sit Amet",
        txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.`,
    },
    {
        heading: "Consectetur Adipiscing Elit Sed",
        txt: `Suspendisse potenti. Nullam vehicula, sapien sit amet fring
              illa consequat, enim dui elementum magna, at malesuada
              neque nisl eget lorem.`,
    },
    {
        heading: "Duis Aute Irure Dolor in Reprehenderit",
        txt: (
            <>
                Nulla facilisi. Mauris vitae facilisis turpis. Proin dignis sim
                tincidunt lorem, in luctus nulla mattis nec. Sed tristique{" "}
                <br /> sem nec risus tincidunt.
            </>
        ),
    },
    {
        heading: "Ut Enim Ad Minim Veniam Quis",
        txt: `Cras eget dictum nunc, vel ultrices nunc. Sed in felis a ligula
              dignissim elementum. laoreet fermentum lectus nec
              vehicula.mauris id justo volutpat.`,
    },
    {
        heading: "Pellentesque habitant morbi tristique",
        txt: (
            <span className='max-w-[356px] inline-block'>
                Malesuada fames ac turpis egestas. Donec tristique nunc in purus
                dictum, a suscipit risus malesuada. Integer sit amet massa a
                erat vehicula aliquam.
            </span>
        ),
    },
    {
        heading: "Vitae euismod mi lectus nec purus.",
        txt: (
            <span className='max-w-[362px] inline-block'>
                In sodales tortor euismod, euismod nulla id, rhoncus ligula. Sed
                interdum felis vel nibh viverra, at gravida nisl <br />
                suscipit. et lacinia lorem orci vel urna
            </span>
        ),
    },
    {
        heading: "Feugiat libero nec elementum.",
        txt: (
            <span className='max-w-[355px] inline-block'>
                Ut volutpat, eros et lacinia finibus, justo libero imperdiet
                nunc, vitae sodales lectus erat non eros. Morbi a tristique
                ipsum. Aliquam pharetra suscipit nibh.
            </span>
        ),
    },
];

const binIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
    >
        <path
            d='M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5'
            stroke='#FF4757'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <path
            d='M21 5.5H3'
            stroke='#FF4757'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <path
            d='M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5'
            stroke='#FF4757'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <path
            opacity='0.4'
            d='M9.5 16.5V10.5'
            stroke='#FF4757'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <path
            opacity='0.4'
            d='M14.5 16.5V10.5'
            stroke='#FF4757'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
    </svg>
);

const penIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        className='text-darkblue sm:text-skyblue'
    >
        <path
            d='M13.8663 4.6969C14.537 3.97027 14.8723 3.60696 15.2287 3.39504C16.0884 2.88368 17.1472 2.86778 18.0214 3.35309C18.3836 3.55422 18.7292 3.90731 19.4205 4.61348C20.1118 5.31966 20.4575 5.67275 20.6543 6.04284C21.1294 6.93581 21.1138 8.01731 20.6133 8.89563C20.4058 9.25964 20.0501 9.6022 19.3389 10.2873L10.8755 18.4389C9.52759 19.7372 8.8536 20.3864 8.01125 20.7153C7.16891 21.0444 6.24288 21.0202 4.39082 20.9717L4.13884 20.9652C3.57502 20.9504 3.2931 20.943 3.12923 20.757C2.96535 20.5711 2.98773 20.2839 3.03247 19.7096L3.05677 19.3977C3.18271 17.7811 3.24567 16.9729 3.56134 16.2464C3.877 15.5198 4.4215 14.9299 5.51049 13.75L13.8663 4.6969Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinejoin='round'
        />
        <path
            d='M12.8999 4.80005L19.1999 11.1'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinejoin='round'
        />
        <path
            opacity='0.4'
            d='M13.8 21H21'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default function Articles() {
    return (
        <div className='bg-fadedWhite min-h-screen px-4'>
            <Header />
            <main className='sm:pt-[52px] pt-8 pb-[68px]'>
                <section className='max-w-[1692px] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-5 gap-4 '>
                    {data.map((cur, i) => (
                        <div
                            className='bg-white p-2 rounded-[40px] box-shadow flex flex-col'
                            key={i}
                        >
                            <img
                                src={`/article/${i + 1}.jpg`}
                                alt={cur.heading}
                                className='rounded-[34px] w-full'
                            />

                            <div className='p-2 flex flex-col flex-1'>
                                <h2 className='mt-4 text-[20px] font-medium leading-normal'>
                                    {cur.heading}
                                </h2>

                                <p className='mt-3 mb-5 text-black1/55 text-sm leading-[20px]'>
                                    {cur.txt}
                                </p>

                                <div className='mt-auto'>
                                    <div className='flex items-stretch gap-2 '>
                                        <div className='p-3.5 flex items-center justify-center bg-fadedWhite rounded-full cursor-pointer '>
                                            {binIcon}
                                        </div>

                                        <div className='p-3.5 flex items-center justify-center bg-fadedWhite rounded-full cursor-pointer '>
                                            {penIcon}
                                        </div>

                                        <Button className='whitespace-nowrap'>
                                            View More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
