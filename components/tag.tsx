import { IconType } from "react-icons"

interface TagProps {
    icon?: IconType;
    text: string;
}

export const Tag = ({ icon: Icon, text }: TagProps) => {
    return (
        <div className="flex items-center justify-center gap-2 px-3 py-2 text-xs md:text-base border border-default text-default rounded-md shadow-md shadow-default/40">
            { Icon && <Icon /> }
            <p>{ text }</p>
        </div>
    )
}