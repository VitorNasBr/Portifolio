'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { useRef, useState } from 'react';
import { TabItem } from './tabItem';

interface HeaderTabsProps {
    initialRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    expirenceRef: React.RefObject<HTMLElement>;
}

export function HeaderTabs( props : HeaderTabsProps ) {
    const [currentTab, setCurrentTab] = useState('initial')


    return(
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tabs.List className='flex flex-col lg:flex-row gap-5'>
                <TabItem value={'initial'} name={'Inicial'} isSelected={currentTab === 'initial'} scrollBarRef={props.initialRef}/>
                <TabItem value={'aboutMe'} name={'Sobre mim'} isSelected={currentTab === 'aboutMe'} scrollBarRef={props.aboutRef}/>
                <TabItem value={'skils'} name={'Habilidades'} isSelected={currentTab === 'skils'} scrollBarRef={props.skillsRef}/>
                <TabItem value={'project'} name={'Projetos'} isSelected={currentTab === 'project'} scrollBarRef={props.projectsRef}/>
                <TabItem value={'expirence'} name={'Expriência Profissional'} isSelected={currentTab === 'expirence'} scrollBarRef={props.expirenceRef}/>
                <TabItem value={'contact'} name={'Contato'} isSelected={currentTab === 'contact'} scrollBarRef={props.contactRef}/>
            </Tabs.List>
        </Tabs.Root>
    )
}