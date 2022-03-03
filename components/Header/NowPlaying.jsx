import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

export const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="flex flex-row-reverse items-center sm:flex-row mb-2 space-x-0 sm:space-x-2 w-full dark:bg-white dark:bg-opacity-5 p-2 rounded-xl">
      {
        !data?.songUrl ? (
          <div className='flex items-center space-x-2'>
            <FaSpotify className='text-[#1ED760] h-8 w-8'/>
            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              Not Playing
            </p>
          </div>
        ) : (
          <div className="flex items-start space-x-2.5 w-full">
            <div className='w-16 h-16 flex-none rounded-xl overflow-hidden relative'>
              <Image src={data.albumImageUrl} layout='fill' alt='image'className='w-full' priority/>
            </div>
            <div className="flex flex-col justify-end min-w-0 space-y-0.5 font-medium pr-0.5">
              <p className="text-xs text-pink-400 truncate">
                {data.album}
              </p>
              <h2 className="text-xs truncate text-stone-400">
                {data.artist}
              </h2>
              <p className="text-sm text-slate-50 truncate">
                <a
                  className="font-semibold max-w-max"
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.title}
                </a>
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
}