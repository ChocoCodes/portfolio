import { TechStack } from "@/utils/types";

export const StackTile = ({ icon: Icon, name, type }: TechStack) => {
    return (
        <div className="w-full min-w-0 flex flex-col items-center border border-default px-3 py-5 gap-5 font-sora rounded-sm hover:bg-accent hover:border-accent hover:text-background shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <Icon size={ 56 } />
            <div className="w-full min-w-0 text-center">
                <p className="font-medium text-xs lg:text-lg text-center">{ name }</p>
                <p className="text-secondary text-[10px] lg:text-base wrap-break-word">{ type }</p>
            </div>
        </div>
    )
}