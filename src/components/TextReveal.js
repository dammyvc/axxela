import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ApprovalIcon from '@mui/icons-material/Approval';
import Co2Icon from '@mui/icons-material/Co2';
import GradeIcon from '@mui/icons-material/Grade';
import DrawIcon from '@mui/icons-material/Draw';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HubIcon from '@mui/icons-material/Hub';
import PolylineIcon from '@mui/icons-material/Polyline';

const TextReveal = () => {
  return (
    <div>
      <VerticalTimeline lineColor={'rgb(245, 208, 0)'}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work pr-20"
          contentStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(108,175,199)',
          }}
          iconStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          icon={<WatchLaterIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Achieved 7.7 million LTI free man-hours
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pl-20 md:pl-0"
          contentStyle={{ background: 'rgb(199,213,34)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(199,213,34)',
          }}
          iconStyle={{ background: 'rgb(199,213,34)', color: '#fff' }}
          icon={<ApprovalIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Successful recertification of our Integrated Management System
            &#40;ISO 9001:2015, 14001:2015 and 45001:2018&#41;
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pr-20"
          contentStyle={{ background: 'rgb(118,119,122)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(118,119,122)',
          }}
          iconStyle={{ background: 'rgb(118,119,122)', color: '#fff' }}
          icon={<Co2Icon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            703,335 tonnes of CO<sub>2</sub> saved from customer locations,
            marking a 30.46% reduction
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pl-20 md:pl-0"
          contentStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(108,175,199)',
          }}
          iconStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          icon={<GradeIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Upgrade of EcoVadis Sustainability Ratings from Bronze to Silver
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pr-20"
          contentStyle={{ background: 'rgb(199,213,34)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(199,213,34)',
          }}
          iconStyle={{ background: 'rgb(199,213,34)', color: '#fff' }}
          icon={<DrawIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Successful registration of Axxela with UN Global Compact
            &#40;UNGC&#41;
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pl-20 md:pl-0"
          contentStyle={{ background: 'rgb(118,119,122)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(118,119,122)',
          }}
          iconStyle={{ background: 'rgb(118,119,122)', color: '#fff' }}
          icon={<VerifiedUserIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Achieved GCR long-term and short-term Issuer ratings of
            A-&#40;NG&#41; and A2&#40;NG&#41;, respectively, with a stable
            outlook
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pr-20"
          contentStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(108,175,199)',
          }}
          iconStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          icon={<LocationCityIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Commissioned 150MMSCFD Natural Gas City Gate at Ibefun, Ogun State
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pl-20 md:pl-0"
          contentStyle={{ background: 'rgb(199,213,34)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(199,213,34)',
          }}
          iconStyle={{ background: 'rgb(199,213,34)', color: '#fff' }}
          icon={<GasMeterIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Completed construction of 50MMSCFD Natural Gas facility at Port
            Harcourt, Rivers State
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pr-20"
          contentStyle={{ background: 'rgb(118,119,122)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(118,119,122)',
          }}
          iconStyle={{ background: 'rgb(118,119,122)', color: '#fff' }}
          icon={<PolylineIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Commissioning of 7.7km GL5 Pipeline Network towards Lagos Badagry
            Expressway
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work pl-20 md:pl-0"
          contentStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(108,175,199)',
          }}
          iconStyle={{ background: 'rgb(108,175,199)', color: '#fff' }}
          icon={<HubIcon />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">
            Commissioning of 5km Natural Gas Pipeline Network into
            Victoria-Island, Lagos
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TextReveal;
