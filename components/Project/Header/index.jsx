import { useRouter } from 'next/router';

export const Header = ({ title }) => {

  const router = useRouter();
  const { locale } = router;
  // const t = locale === 'en' ? en : es;

  console.log(router.pathname);

  return (
    <div className="flex flex-col-reverse space-y-reverse space-y-4 lg:space-y-0 lg:flex-row w-full px-2 lg:px-16 py-10 mx-auto max-w-5xl 2xl:max-w-6xl">
      <div className="flex flex-col justify-center flex-none space-y-10">
        <div className="flex flex-col justify-center space-y-1 lg:space-y-2.5 text-center lg:text-left">
          <p className="text-3xl lg:text-4xl font-semibold dark:text-white text-stone-700">{title}</p>
        </div>
      </div>
    </div>
  )
}
