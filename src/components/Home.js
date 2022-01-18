
import React from 'react';
import Connectivity from './Connectivity/Connectivity';
import Display from './Display/Display';
import Explore from './Explore/Explore';
import MetalicShow from './MetalicShow/MetalicShow';
import Processor from './Processor/Processor';
// import SpecificationMenu from './SpecificationMenu/SpecificationMenu';
import TopMenu from './TopMenu/TopMenu';

const Home = () => {
    return (
        <>
            <TopMenu></TopMenu>
            {/* <SpecificationMenu></SpecificationMenu> */}
            <Explore></Explore>
            <MetalicShow></MetalicShow>
            <Processor></Processor>
            <Display></Display>
            <Connectivity></Connectivity>
        </>
    );
};

export default Home;