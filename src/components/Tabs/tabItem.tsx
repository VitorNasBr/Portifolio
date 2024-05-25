import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

interface TabItemProps {
    value: string;
    name: string;
    isSelected?: boolean;
}

export function TabItem( {value, name, isSelected = false} : TabItemProps ) {
    return(
        <Tabs.Trigger value={value} className="group relative px-1 pb-1 text-sm font-medium text-zinc-900 hover:text-zinc-800 outline-none data-[state=active]:text-violet-600">
            <span className='font-medium text-md'>
                {name}
            </span>

            {isSelected && (
                <motion.div layoutId='activeTab' className="absolute left-0 right-0 h-0.5 bg-violet-600 -bottom-4" />
            )}
        </Tabs.Trigger>
    )
}