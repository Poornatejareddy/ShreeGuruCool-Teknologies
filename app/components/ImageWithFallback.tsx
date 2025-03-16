'use client';

import Image from 'next/image';
import { UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ImageWithFallback = ({ src, alt, width, height, className }: any) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/fallback-avatar.png'); // or use a default icon here
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
