import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import timelineElements from './presentation_timeline'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';

function Presentation() {

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Presentations
                </h1>

                <VerticalTimeline>
                    {timelineElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                animate='true'
                                iconStyle={{
                                    background: "#6c9a8b",
                                    color: "#fff",
                                    paddingLeft: "5px",
                                }}
                            >
                                <h3 style={{color: 'purple'}} className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 style={{color: 'black'}} className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <a href={element.link}>{element.link_description}</a>
                                <p style={{color: 'black'}} id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>

            </Container>
        </Container>
    );
}

export default Presentation;