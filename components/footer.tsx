export const Footer = () => {
    return (
        <footer className="w-4/5 md:w-3/5 text-default font-sora py-5 mt-auto flex flex-col items-center justify-center text-[10px] gap-1 md:text-xl font-normal">
            <p>Built using <span className="font-semibold">Next.js</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">Tailwind</span>.</p>
            <div className="flex gap-2">
                <p>&copy;</p>
                <p>{ new Date().getFullYear() }</p>
                <p>John Octavio.</p>
            </div>
        </footer>
    )
}