import { IconType } from "react-icons"

interface TagProps {
    icon?: IconType;
    text: string;
    bordered?: boolean;
}

export const Tag = ({ icon: Icon, text, bordered = true }: TagProps) => {
    return (
        <div className={`flex hover:bg-default hover:text-surface transition-colors duration-300 hover:cursor-pointer items-center justify-center gap-2 px-3 py-2 text-xs md:text-base bg-surface text-default rounded-md ${ bordered ? 'border border-default shadow-md shadow-default/40' : '' }`}>
            { Icon && <Icon /> }
            <p>{ text }</p>
        </div>
    )
}