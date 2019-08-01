import React, {Component} from 'react';
import styled from 'styled-components';
import {H6} from '../common/Type';
import media from '../common/mediaQuery';
import moment from 'moment';
const toShortFormat = function () {

  var month_names = ["Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];

  var day = this.getDate();
  var month_index = this.getMonth();
  var year = this.getFullYear();

  return "" + day + "-" + month_names[month_index] + "-" + year;
}
const EventTable = styled.div`
  padding: 20px;
  padding-top: 0;
  ${media.tablet`
    padding: 40px;
  `}
`;
const HeadingRow = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #0d140d;
  ${media.tablet`
    display: flex;
  `}
  p {
    flex: 1 0 33.333%;
    font-size: 21px;

  }
`;

const EventsWrapper = styled.div``;
const Event = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${media.tablet`
  
    flex-direction: row;
  `}

  h6 {
    margin-bottom: 12px;
  }
  
`;
const EventColumn = styled.div`
  max-width: none;
  width: 100%;
  padding-right: 0;
  padding-top: 20px;
  &:first-of-type {
    padding-top: 20px;
    ${media.tablet`
    `}
  }
  ${media.tablet`
    padding-top: 40px;
    padding-right: 60px;
    flex: 1 0 33.333%;
    max-width: 33.333%;
  `}
  &:last-of-type {
    padding-right: 0;
  }
`;
const Copy = styled.div`
  font-size: 21px;
  line-height: 1.33;
  color: #0d140d;
`;

const Links = styled.a`
  margin-top: 20px;
`;

class Events extends Component {
  render() {
    const {module} = this.props;
    const {items} = module;
    return (
      <EventTable>
        <HeadingRow>
          <p>Event</p>
          <p>Date & Time </p>
          <p>Location</p>
        </HeadingRow>
        <EventsWrapper>
          {items.map((item, idx) => (
            <Event key={idx}>
              <EventColumn>
                <H6>{item.event_name.text}</H6>
                <Copy>{item.event_description.text}</Copy>
              </EventColumn>
              <EventColumn>
                <Copy>{moment(item.event_date).format("MMM Do, YYYY")}</Copy>
                <Copy>{item.event_time.text}</Copy>
              </EventColumn>
              <EventColumn>
                <Copy>{item.event_address.text}</Copy>
                {item.event_url && item.event_url.url && (

                  <Links href={item.event_url.url} className={"site-link"}>
                    RSVP
                  </Links>
                )}
              </EventColumn>
            </Event>
          ))}
        </EventsWrapper>
      </EventTable>
    );
  }
}

export default Events;