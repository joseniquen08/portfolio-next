
export const Skill = ({ image, name }) => {
  return (
    <div className="flex items-center space-x-2 hover:bg-stone-500 hover:bg-opacity-10 dark:hover:bg-white px-2 py-1.5 dark:hover:bg-opacity-10 rounded-lg cursor-default">
      <div
        className="flex flex-col items-center justify-center text-center lg:space-y-1 w-7 h-7 overflow-hidden"
      >
        <div className='relative w-full h-full bg-center bg-cover' style={{ backgroundImage: `url(icons/${image}.png)` }}></div>
      </div>
      <p className="text-stone-600 dark:text-stone-200 tracking-normal">{name}</p>
    </div>
  )
}
