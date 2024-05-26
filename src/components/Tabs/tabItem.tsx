import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

interface TabItemProps {
    value: string;
    name: string;
    isSelected?: boolean;
}

export function TabItem( {value, name, isSelected = false} : TabItemProps ) {
    return(
        <Tabs.Trigger value={value} className="group relative px-1 pb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-800 dark:hover:text-zinc-100 outline-none data-[state=active]:text-violet-600 dark:data-[state=active]:text-violet-200">
            <span className='font-medium text-md'>
                {name}
            </span>

            {isSelected && (
                <motion.div layoutId='activeTab' className="lg:absolute lg:left-0 lg:right-0 lg:h-0.5 lg:bg-violet-600 lg:dark:bg-violet-200 lg:-bottom-4" />
            )}
        </Tabs.Trigger>
    )
}