import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import fetcher from '../../../lib/fetcher';

export const NowPlaying = () => {

  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <motion.div whileTap={{ scale: 0.95, overflow: 'visible' }} className="mb-2 w-full overflow-hidden">
      {
        !data?.songUrl ? (
          <div className='flex items-center justify-center space-x-2 w-full rounded-xl cursor-default dark:bg-white dark:bg-opacity-5 bg-slate-900 bg-opacity-5 p-3'>
            <FaSpotify className='text-[#1ED760] h-7 w-7'/>
            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              Not Playing
            </p>
            <span className="absolute flex w-4 h-4 -top-1 -right-1">
              <span className="relative inline-flex w-4 h-4 dark:bg-gray-600 bg-gray-300 rounded-full"></span>
            </span>
          </div>
        ) : (
          <a
            href={data.songUrl}
            className="flex items-start space-x-1.5 lg:space-x-2.5 w-full rounded-xl dark:bg-white dark:bg-opacity-5 bg-slate-900 bg-opacity-5 p-3 hover:bg-opacity-10 dark:hover:bg-opacity-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className='w-14 h-14 lg:w-16 lg:h-16 flex-none rounded-xl overflow-hidden relative'>
              <Image src={data.albumImageUrl} layout='fill' alt='image'className='w-full' priority/>
            </div>
            <div className="flex flex-col justify-end min-w-0 font-semibold dark:font-medium pr-0.5">
              <p className="text-xs text-[#1ED760] truncate">
                {data.album}
              </p>
              <h2 className="text-xs lg:text-sm truncate text-stone-400">
                {data.artist}
              </h2>
              <p className="text-base lg:text-lg text-stone-600 dark:text-slate-50 truncate max-w-max">
                {data.title}
              </p>
            </div>
            <span className="absolute flex w-5 h-5 lg:w-[1.6rem] lg:h-[1.6rem] -top-[0.4rem] -right-[0.4rem]">
              <span className="absolute inline-flex w-full h-full bg-[#1ED760] rounded-full opacity-75 animate-ping"></span>
              <FaSpotify className='text-[#1ED760] w-5 h-5 lg:w-[1.6rem] lg:h-[1.6rem]'/>
            </span>
          </a>
        )
      }
    </motion.div>
  );
}