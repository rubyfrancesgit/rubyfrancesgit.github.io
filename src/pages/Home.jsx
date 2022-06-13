import React from 'react'
import ArcadeIntro from '../components/ArcadeIntro'
import Landing from '../components/Landing'
import PersonalProjects from '../components/PersonalProjects'
import ProgrammingToolbelt from '../components/ProgrammingToolbelt'
import SchoolProjects from '../components/SchoolProjects'

function Home() {
    return (
        <>
            <Landing />
            <ProgrammingToolbelt />
            <PersonalProjects />
            <SchoolProjects />
            <ArcadeIntro />
        </>
    )
}

export default Home
