import React from 'react'
import Controls from './Controls'
import Graph from './Graph'
import Header from './Header'


const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Graph />
            <Controls />
        </React.Fragment>
    )
}

export default Home;