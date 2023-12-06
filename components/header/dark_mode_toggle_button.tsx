
import { useTheme } from 'next-themes'

export default function DarkModeToggleButton() {

  // theme : 현재 값 가져오기 getter , setTheme : 현재 값 바꾸기 setter
  const { theme, setTheme } = useTheme()  

  return (
      <button className="flex items-center justify-center border-0 py-1 px-2 md:px-4 focus:outline-none cursor-pointer
         bg-gray-100 dark:bg-slate-600
         text-orange-500 dark:text-yellow-200
         hover:bg-gray-200 dark:hover:bg-slate-700
         rounded text-base"
        type="button"
        onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark' )}>     
        {/* light mode */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
          className="visible dark:invisible w-5 h-5">
          <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
        </svg>
        {/* dark mode */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
          className="invisible dark:visible w-5 h-5">
          <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
        </svg>
      </button>
  );
}
