import React from 'react'
import UnderHeader from "../components/UnderHeader";
import Benefit from "../components/Benefit";
import Rectangle from "../components/Rectangle";
import CourseDirections from "../components/CourseDirections";
import FooterPage from "../components/FooterPage";
import CourseItem from "../components/CourseItem";

const Home = () => {
  return (
            <div>
                <UnderHeader/>
                <Benefit/>
                <Rectangle/>
                <CourseDirections/>
                <FooterPage/>
            </div>
  );
};

export default Home