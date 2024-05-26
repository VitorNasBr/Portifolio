'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { TabItem } from './tabItem';

export function HeaderTabs() {
    const [currentTab, setCurrentTab] = useState('initial')

    return(
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tabs.List className='flex flex-col lg:flex-row gap-5'>
                <TabItem value={'initial'} name={'Inicial'} isSelected={currentTab === 'initial'}/>
                <TabItem value={'project'} name={'Projetos'} isSelected={currentTab === 'project'}/>
                <TabItem value={'skils'} name={'Habilidades'} isSelected={currentTab === 'skils'}/>
                <TabItem value={'contact'} name={'Contato'} isSelected={currentTab === 'contact'}/>
                <TabItem value={'aboutMe'} name={'Sobre mim'} isSelected={currentTab === 'aboutMe'}/>
            </Tabs.List>
        </Tabs.Root>
    )
}