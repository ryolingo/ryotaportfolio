import { About } from "@/app/data/AbouList";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // スタイルをインポート

type Tprops = {
  AboutList: About[];
};

const TimeLine: React.FC<Tprops> = ({ AboutList }) => {
  return (
    <>
      <VerticalTimeline>
        {AboutList.map((about, index) => (
          <VerticalTimelineElement
            date={about.title}
            className="vertical-timeline-element--work"
            iconClassName="vertical-timeline-icon"
            key={about.title}
          >
            <h3 className="vertical-timeline-element-title">{about.title}</h3>
            <p>{about.subtitle}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default TimeLine;
