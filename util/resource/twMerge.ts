
// todo: customize clsx
import clsx from "clsx"
import { twMerge } from "tailwind-merge"
const tw = (initial: string, mergeWith: any) => {
    return twMerge(initial, clsx(mergeWith))

}


export default tw