import { TechStack } from "@/utils/types";

export const StackTile = ({ icon: Icon, name, type }: TechStack) => {
    return (
        <div className="flex flex-col items-center border border-default px-3 py-5 gap-5 font-sora rounded-sm hover:bg-accent hover:border-accent hover:text-background shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <Icon size={ 56 } />
            <div className="">
                <p className="font-medium">{ name }</p>
                <p>{ type }</p>
            </div>
        </div>
    )
}