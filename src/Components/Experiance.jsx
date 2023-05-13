import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from '../Data/Data'

const Experiance = () => {

  return (
    <section id='Journey' className="w-full flex items-center justify-center md:mt-10 xs:mt-16">
      <VerticalTimeline lineColor='linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%) ' >
        {Experience &&
          Experience.map((data) => (
            <VerticalTimelineElement
              key={data.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(21, 24, 31)",
                color: "#888",
                boxShadow: '0 3px 0  #33ccff  '
              }}
              contentClassName='dark:bg-white'
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21, 24, 31)",
              }}
              date={data.date}
              dateClassName='dark:text-slate-500 '
              iconStyle={{ background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)", color: "black" }}
              icon={data.iconsSrc}
            >
              <h3 className="vertical-timeline-element-title text-xl text-slate-300 dark:text-slate-50">
                {data.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {data.location}
              </h4>
              <p className=''>{data.description || data.marks}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experiance