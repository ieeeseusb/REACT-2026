import React, { useState } from 'react';

interface DriveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  fallbackSubtext?: string;
}

export function extractDriveId(url: string): string | null {
  if (!url) return null;
  const matchD = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchD && matchD[1]) return matchD[1];

  const matchId = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchId && matchId[1]) return matchId[1];

  return null;
}

export function getDriveImageUrls(rawUrl: string): string[] {
  const driveId = extractDriveId(rawUrl);
  if (driveId) {
    return [
      `https://lh3.googleusercontent.com/d/${driveId}`,
      `https://drive.google.com/uc?export=view&id=${driveId}`,
      `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`,
      rawUrl
    ];
  }
  return [rawUrl];
}

export const DriveImage: React.FC<DriveImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackSubtext
}) => {
  const urls = getDriveImageUrls(src);
  const [urlIndex, setUrlIndex] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (urlIndex < urls.length - 1) {
      setUrlIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-gray-900 to-black text-white border border-[#FF7700]/30 text-center shadow-md ${className}`}
        title={alt}
      >
        <div className="w-8 h-8 rounded-lg bg-[#FF7700]/20 flex items-center justify-center text-[#FF7700] font-black text-sm mb-1 border border-[#FF7700]/40">
          {(fallbackText || alt || 'R')[0].toUpperCase()}
        </div>
        <span className="text-xs font-bold text-white tracking-wider uppercase leading-tight">
          {fallbackText || alt}
        </span>
        {fallbackSubtext && (
          <span className="text-[10px] text-[#FF7700] font-medium mt-0.5">
            {fallbackSubtext}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={urls[urlIndex]}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
};
