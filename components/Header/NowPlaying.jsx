import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

export const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="flex flex-row-reverse items-center sm:flex-row mb-2 space-x-0 sm:space-x-2 w-full dark:bg-white dark:bg-opacity-5 p-3 rounded-xl relative">
      {
        !data?.songUrl ? (
          <div className='flex items-center justify-center space-x-2 w-full cursor-default'>
            <FaSpotify className='text-[#1ED760] h-7 w-7'/>
            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              Not Playing
            </p>
            <span className="absolute flex w-4 h-4 -top-1 -right-1">
              <span className="relative inline-flex w-4 h-4 bg-gray-600 rounded-full"></span>
            </span>
          </div>
        ) : (
          <div className="flex items-start space-x-1.5 lg:space-x-2.5 w-full">
            <div className='w-14 h-14 lg:w-16 lg:h-16 flex-none rounded-xl overflow-hidden relative'>
              <Image src={data.albumImageUrl} layout='fill' alt='image'className='w-full' priority/>
            </div>
            <div className="flex flex-col justify-end min-w-0 font-medium pr-0.5">
              <p className="text-xs text-green-600 truncate">
                {data.album}
              </p>
              <h2 className="text-xs lg:text-sm truncate text-stone-400">
                {data.artist}
              </h2>
              <p className="text-base lg:text-lg text-slate-50 truncate">
                <a
                  className="font-medium max-w-max"
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.title}
                </a>
              </p>
            </div>
            <span className="absolute flex w-4 h-4 -top-1 -right-1">
              <span className="absolute inline-flex w-full h-full bg-red-500 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-4 h-4 bg-red-500 rounded-full"></span>
            </span>
          </div>
        )
      }
    </div>
  );
}