import { IconType } from "react-icons"

interface TagProps {
    icon?: IconType;
    text: string;
    extendedClass: string;
    bordered?: boolean;
}

export const Tag = ({ icon: Icon, text, extendedClass, bordered = true }: TagProps) => {
    return (
        <div className={`${ bordered ? 'border border-default' : '' } ${ extendedClass } flex hover:bg-default hover:text-surface transition-colors duration-300 hover:cursor-pointer items-center justify-center gap-2 bg-surface text-default rounded-md`}>
            { Icon && <Icon /> }
            <p>{ text }</p>
        </div>
    )
}