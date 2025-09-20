import React, { useRef, useState } from "react";

export default function ImageSelector({ cameraImgSvg }) {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    return (
        <div
            className='relative w-full 2xl:max-w-[502px] md:max-w-[300px] flex items-center justify-center bg-fadedWhite rounded-[34px] py-[60px] cursor-pointer overflow-hidden'
            onClick={handleClick}
        >
            {preview ? (
                <>
                    <img
                        src={preview}
                        alt='Preview'
                        className='object-cover blur-md absolute w-full h-full rounded-[34px] inset-0 z-[1]'
                    />

                    <img
                        src={preview}
                        alt='Preview'
                        className='object-contain absolute w-full h-full rounded-[34px] inset-0 z-[2]'
                    />
                </>
            ) : (
                cameraImgSvg
            )}

            {/* Hidden input */}
            <input
                ref={fileInputRef}
                type='file'
                accept='image/*'
                className='hidden'
                onChange={handleFileChange}
            />
        </div>
    );
}
