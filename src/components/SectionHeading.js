import React, {Component} from 'react';
import styled from 'styled-components';
import {H5,Type} from '../common/Type';
// const Heading = styled.h5`
//   font-size: 64px;
// `;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 80px;
  padding: 0 20px;
`;
const Types = styled(Type)`
  padding-bottom: 40px;
  margin-top: 20px;
`;
class SectionHeading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {module} = this.props;
    const text = module.primary.section_heading.text;
    const description = module.primary.section_description.text;
    return(
      <Row className="section-heading">
        <H5>{text}</H5>
        {description && <Types>{description}</Types>}
        
      </Row>
    )
  }
};

export default SectionHeading;