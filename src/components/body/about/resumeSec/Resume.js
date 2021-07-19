import React from 'react'
import EduWorInfo from './EduWorInfo'
import PersonalInfo from './PersonalInfo'
import './Resume.css'
function Resume() {

    const jpBulletPtr = () => {
        return (
            <ul>
                <li>Helped with backend implementation of Chase web services use Restful endpoints and Python to retrieve the data from the server application and generated the customized response object</li>
                <li>Translated Figma design into reusable and responsive React Component, Fixed existing issues and style in React component and refactor the code to be more readable and concise</li>
            </ul>
        )
    }
    const ubBulletPtr = () => {
        return (
            <ul>
                <li>Make sure of Agile development cycle to lead a developer team (5) to design and build an Android application from scratch in four sprints. General responsibilities include holding weekly scrum meetings, adding user stories, designing user interfaces, documenting new features, and submitting the weekly report to the team manager.</li>
                <li>Handled user authentication, migrated backend, Parse server to AWSserverless computing using Restful API gateway and MongoDB</li>
                <li>Guided teammate on code change based on the frontend design and implementation of each new feature, assisted the team to conducted A|B test, make changes to the code based on the result of User feedback.</li>
            </ul>
        )
    }
    const iotSandBoxPtr = () => {
        return (
            <ul>
                <li>Using Django and Restful API to build a backend web application that allows the hardware team to observe and change data of front-end devices.</li>
                <li>Utilized backend page to perform scenarios test to run against our IoT sensor to verify that the end-to-end scenarios are functioning correctly.</li>
            </ul>
        )
    }


    return (
        <div id="resume">
            <div className="resume__title titleFont">
                <h2>Resume</h2>
                <hr />
                <p className="pFont">
                </p>
            </div>
            <div className="resume__detail">
                <div className="resume__detailLeft">
                    <PersonalInfo secType={"Summary"} name={"Eric Wang"}
                        description={`hands-on experience in developing and implementing web-based 
                        and Object-Oriented Programming applications using Core Java and React.`} />


                    <EduWorInfo secType={"Education"} title={"Bachelor of Science in Computer Science"}
                        duration={"08/2016 - 12/2019"} location={"University at Buffalo, Buffalo, NY"} />
                    <EduWorInfo title={"Software Engineer Intern"}
                        duration={"05/2019 - 08/2019"} location={"UB SMART Automation Sandbox, Buffalo, New York"}
                        description={iotSandBoxPtr()} />
                   
                </div>
                <div className="resume__detailRight">
                    <EduWorInfo secType={"Working Experience"}
                        title={"Software Engineer Virtual Intern"}
                        duration={"06/2020 - 07/2020"}
                        location={"JP Morgan Chase & Co, Remote"}
                        description={jpBulletPtr()} />
                    <EduWorInfo title={"Software Engineer Intern"}
                        duration={"08/2019 - 12/2019"} location={"UB, Buffalo, New York"}
                        description={ubBulletPtr()} />

                </div>
            </div>
        </div>
    )
}

export default Resume
