import React, {Component} from 'react';
import styled from 'styled-components';
import {H5} from '../common/Type';
// const Heading = styled.h5`
//   font-size: 64px;
// `;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;
class SectionHeading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {module} = this.props;
    const text = module.primary.section_heading.text;
    return(
      <Row className="section-heading">
        <H5>{text}</H5>
      </Row>
    )
  }
};

export default SectionHeading;