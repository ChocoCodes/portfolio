import { IconType } from "react-icons"

interface TagProps {
    icon?: IconType;
    text: string;
}

export const Tag = ({ icon: Icon, text }: TagProps) => {
    return (
        <div className="flex items-center justify-center gap-2 px-4 py-2 border border-default text-default rounded-md shadow-md shadow-default/20">
            { Icon && <Icon /> }
            <p>{ text }</p>
        </div>
    )
}