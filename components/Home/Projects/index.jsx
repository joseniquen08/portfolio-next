import { useRouter } from "next/router";
import en from '../../../public/locales/en/projects';
import es from '../../../public/locales/es/projects';
import { CardProject } from "./CardProject";

export const Projects = ({ projects }) => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  // const projects = [
  //   {
  //     id: v4(),
  //     name: "Licius (Social Network)",
  //     github: "https://github.com/joseniquen08/licius-react",
  //     href: "https://licius-react.vercel.app/",
  //     image: "/images/licius_template.png",
  //     alert: t.db.progress,
  //   },
  //   {
  //     id: v4(),
  //     name: "Edullka (Landing)",
  //     github: "https://github.com/edullka/edullka-react",
  //     href: "https://edullka.com/",
  //     image: "/images/edullka_template.png",
  //     alert: "",
  //   },
  //   {
  //     id: v4(),
  //     name: "BootcamPe (E-commerce)",
  //     github: "https://github.com/joseniquen08/bootcampe_niquen",
  //     href: "https://react-coder-988f2.web.app/",
  //     image: "/images/bootcampe_template.png",
  //     alert: t.db.alert,
  //   },
  //   {
  //     id: v4(),
  //     name: "Portfolio",
  //     github: "https://github.com/joseniquen08/portfolio-react",
  //     href: "https://joseniquen.me/",
  //     image: "/images/portfolio_template.png",
  //     alert: "",
  //   },
  //   {
  //     id: v4(),
  //     name: "Music Player",
  //     github: "https://github.com/joseniquen08/music-player-react",
  //     href: "https://music-player-react-nine.vercel.app/",
  //     image: "/images/music_player_template.png",
  //     alert: t.db.message,
  //   }
  // ];

  return (
    <div id="projects" className="px-5 pt-24 pb-12 mx-auto sm:px-8 lg:px-16 max-w-5xl 2xl:max-w-6xl dark:text-white">
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="flex justify-center md:justify-start">
            <p className="text-4xl py-1 font-bold tracking-tight text-center text-transparent md:text-5xl w-max md:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500 italic">{t.title}</p>
          </div>
          <div className="hidden md:block w-8 h-[1px] bg-stone-500 dark:bg-white"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {
            projects.map(({id, title, image, web, description, github}) => (
              <CardProject
                key={id}
                id={id}
                title={title}
                image={image}
                web={web}
                description={description}
                github={github}
                locale={locale}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
