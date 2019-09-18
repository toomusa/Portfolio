import React from "react";
import Barbeque from "../assets/images/Barbeque.jpg";
import Einstein from "../assets/images/Einstein.jpg";
import Yosemite from "../assets/images/Yosemite.jpg";


export default function About() {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12" id="storyTitleDiv">
            <h5 className="storyTitle">My Story</h5>
          </div>
        <div className="col-md-8 col-sm-8 col-xs-8">
          <div id="myStory">

            <p>By the time I graduated from UC Davis, I realized I could be successful at anything I set my mind to. 
              I spent the next year traveling across the states, lived and worked in Panama, then moved to NY to 
              pursue an idea larger than life. I wanted to modernize academic peer review and publishing and make 
              factual information accessible and sensible to everyone. Bad timing and poor execution on my part 
              landed me full-circle back in CA, after realizing that change happens from within.</p>

            <p>I wanted to find out where I can leverage my best skills and interests. That’s when I got into 
              executive search and worked first-hand with leadership of top companies across several industries. 
              As a generalist firm, we recruited for almost every department and, in the process, learned from some 
              of the top candidates in their respective fields. After 3.5 years I knew I wanted to be at the 
              cutting-edge of the tech industry and direly needed complexity in my work life.</p>
                
            <p>That’s when I became a technical recruiter and worked with Bay Area startups. After interviewing 
              200+ engineers and over a dozen hiring managers, I was inspired to take the leap and try my hand 
              at web development. I received my certification in Full Stack Development from UC Berkeley Extension 
              and my only regret is not having done it sooner. Things made sense naturally and I pushed myself 
              well beyond the curriculum out of sheer interest, knowing there’s no limit to how much there is to 
              know in software engineering. Now I code everyday and enjoy every bit of it.</p>

            <p>As a next step, I’m looking for a Full Stack Developer role with a quality-driven company where 
              I can leverage my strong interpersonal skills and business acumen to help build products that 
              make users go “Damn, these people thought of everything!”</p>

          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4" id="storyImagesDiv">
          <div><img alt="Musa Akbari" src={Einstein} id="einstein"></img></div>
          <div><img alt="Musa Akbari" src={Yosemite} id="yosemite"></img></div>
          <div><img alt="Musa Akbari" src={Barbeque} id="barbeque"></img></div>
        </div>
      </div>
    </div>
  );
}
