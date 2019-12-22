import React from "react";
import "../index.scss";
import styles from "./ATemplate2.module.scss";

export default function ATemplate2() {
  return (
    <div id={styles.container} className="templateWrapper">
      <div className={styles.menu}>
        <button className={styles.menuBtn}>></button>
        <div className={styles.menuContent}>
          <a href="mailto:andrew.obiano@gmail.com?subject=Hello Andrew!&body=Hello%Andrew!">
            Contact Me
          </a>
          <a href="https://github.com/AndrewObiano">GitHub</a>
        </div>
      </div>

      <div className={styles.slider} id="scroll">
        <div className={styles.slide} id={styles.slide1}>
          <h1>Hi, my name is Andrew.</h1>
          <p>
            I'm a software engineer, classically trained in mechanical
            engineering, currently on the pursuit for experience and growth in
            the industry of software programming.
          </p>
        </div>
        <div className={styles.slide} id={styles.slide2}>
          <h1>Work Experience</h1>
          <p>
            My most recent experience consisted of being a Mechanical Engineer
            at Pearl Harbor Naval Shipyard & IMF for 15 months. I was
            responsible for acquiring, maintaining, and repairing valve
            components. To fulfill my responsibilities, I had to work in harmony
            with a team of 12+ mechanics while providing instructions to meet
            engineering requirements. I was also involved with a technological
            sprint by spearheading a group of 10-15 engineers and authorities to
            establish new shipyard repair processes.
          </p>
          <p>
            Before Pearl Harbor, I was a Senior Quality Control Technician at a
            local camera shop in Kaimuki called Hawaii Camera. I primarily had
            to manage daily quality control operations to meet company
            standards. Maintaining rental photo/video equipment required an
            attention to detail and a drive for integrity to give customers
            products that are trustworthy regardless of its prior use. I also
            acted as technical support for customers over the phone and to
            demonstrate proper usage when in the shop.
          </p>
          <p>
            In 2013, I was a summer intern for County of Kauai's IT department
            during their Summer Employment Program. Providing technical
            assistance to county personnel through helpdesk and
            distributing/installing IT equipment across various county
            departments would be the typical day. The highlight however, was
            setting up the workstations for the county's new emergency backup
            dispatch station.
          </p>
        </div>
        <div className={styles.slide} id={styles.slide3}>
          <h1>Education</h1>
          <p>B.S. Mechanical Engineering University of Hawaii at Manoa 2018</p>
          <p>JavaScript Web Engineering - DevLeague 2019</p>
        </div>
        <div className={styles.slide} id={styles.slide4}>
          <h1>Software Skills</h1>

          <div className={styles.skills}>
            <ul>
              <p>
                <li>Microsoft Office Suite</li>
                <li>Google G Suite</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>SolidWorks</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
                <li>SASS</li>
                <li>Gulp</li>
                <li>CRUD</li>
                <li>ReactJS</li>
                <li>React Redux</li>
                <li>Redux-thunk</li>
                <li>React-router</li>
                <li>Angular</li>
                <li>Express.js</li>
                <li>Axios</li>
              </p>
              <p>
                <li>Knex.js</li>
                <li>BookshelfJS</li>
                <li>Handlebars.js</li>
                <li>Moment.js</li>
                <li>Bash/Zsh</li>
                <li>Trello</li>
                <li>GitHub</li>
                <li>Git</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>Mocha/Chai</li>
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Docker Machine</li>
                <li>Redis</li>
                <li>Bcrypt</li>
                <li>Passport.js</li>
                <li>AWS (S3, EC2, Route53, Cloudfront)</li>
              </p>
            </ul>
          </div>
        </div>
        <div className={styles.slide} id={styles.slide5}>
          <h1>Projects</h1>
          <div className={styles.slide5container}>
            <p>
              Blurange is a student-driven capstone project to DevLeague’s
              JavaScript cohort. The web application provides software
              developers with a quick and easy solution for a website portfolio
              through GitHub or LinkedIn.
            </p>
            <p>
              UH Manoa's Human Powered Vehicle project pushed my team to pitch
              and seek out sponsorships for funding, emphasize collaborative
              design and manufacturing. Upon completion, we were responsible for
              presenting and competing at the 2018 ASME HPV Challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
