import React from "react";
import styled from 'styled-components';
import Layout from "../layout/index";
import {H1,H5} from '../common/Type';
const Form = styled.form`
  display: flex;
  flex-direction: column;

`;
const Input = styled.input`
  display: block;
  max-width: 560px;
  width: 100%;
  max-height: 40px;
  background: #f8f5f5;
  -webkit-appearance: none;
  outline: none;
  border: none;
  border: solid 1px #0d140d;
  text-align: center;
  padding: 10px 0 11px 0;
  font-size: 21px;
  line-height: 1;
  min-width: 180px;
  margin-bottom: 12px;
`;
const Label = styled.label`
  display: block;
`;


const RailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  top: 70px;
  position: relative;
  padding: 60px 40px 80px;

`;
const Inner = styled.div`
  position: sticky; 
  top: 73%;
  h1 {
    text-transform: uppercase;
    text-align: center;
    padding-right: 40px;
  }
`;
const LeftRail = styled.div`
  max-width: 50%;
  flex: 1 0 auto;
  
  
  
`;
const RightRail = styled.div`
  max-width: 50%;
  /* margin-left: auto; */
  */flex: 1 0 auto;
  border-bottom: 1px solid #0d140d;
  em {
    font-size: 32px;
    line-height: 1.5;
    font-style: italic;
  }
  p {
    font-size: 21px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    padding-bottom: 40px;
    color: #0d140d;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  &.row {
    flex-wrap: wrap;
    margin: 0 -10px;
    flex-direction: row;

  }
  .input-half {
    max-width: 50%;
    flex: 1 0 50%;
    padding: 0 10px;
  }

`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const H5s = styled(H5)`
  padding-bottom: 20px;
  padding-top: 20px;
`;
const Dropdown = styled.select`
  -webkit-appearance: none;
  border: none;
    background: #f8f5f5;
  -webkit-appearance: none;
  outline: none;
  border: none;
  border: solid 1px #0d140d;
  text-align: center;
  padding: 10px 0 11px 16px;
  background-image: url('/down-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 20px center;
`;
export default ({data}) => {

  return (
    <Layout>
      <RailWrapper>
        <LeftRail>
          <Inner>
            <H1>Wholesale Application</H1>
          </Inner>
        </LeftRail>
        <RightRail>

          <Form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

            <Input type="hidden" name="oid" value="00Df4000004jvuN" />
            <Input type="hidden" name="retURL" value="http://www.hudsonhemp.com/wholesale" />
            <H5s>Company Information</H5s>
            <Section>

              <label for="company">Company Name</label><Input  id="company" maxlength="40" name="company" size="20" type="text" />

              <label for="URL">Company Website</label><Input  id="URL" maxlength="80" name="URL" size="20" type="text" />

              <label for="phone">Phone</label><Input  id="phone" maxlength="40" name="phone" size="20" type="text" />
            </Section>

            <H5s>Shipping Address</H5s>
            <Section className="row">
              <InputWrapper className="input-half">
                <label for="street">Street</label><Input name="street"></Input>
              </InputWrapper>
              <InputWrapper className="input-half">
                <label for="city">City</label><Input  id="city" maxlength="40" name="city" size="20" type="text" />
              </InputWrapper>
              <InputWrapper className="input-half">
                <label for="state">State/Province</label><Input  id="state" maxlength="20" name="state" size="20" type="text" />
              </InputWrapper>
              <InputWrapper className="input-half">
                <label for="zip">Zip</label><Input  id="zip" maxlength="20" name="zip" size="20" type="text" />
              </InputWrapper>
            </Section>
            <H5s>Primary Contact</H5s>
            <Section>
              <InputWrapper>
                <label for="first_name">First Name</label><Input  id="first_name" maxlength="40" name="first_name" size="20" type="text" />
              </InputWrapper>
              <InputWrapper>
                <label for="last_name">Last Name</label><Input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />
              </InputWrapper>
            </Section>



            <label for="title">Title</label><Input  id="title" maxlength="40" name="title" size="20" type="text" />

            <label for="email">Email</label><Input  id="email" maxlength="80" name="email" size="20" type="text" />

            <label for="description">Description</label><Input name="description"></Input>

            Government Document:<Input  id="00Nf400000UIuGW" maxlength="155" name="00Nf400000UIuGW" size="20" type="text" />

            <label for="revenue">Annual Revenue</label><Input  id="revenue" name="revenue" size="20" type="text" />
            <H5s>Product Information</H5s>
            <Section>

              Which product are you interested in?:
              <Dropdown  id="00Nf400000UIuGb" name="00Nf400000UIuGb" title="Which product are you interested in?">
                <option value="">--None--</option>
                <option value="Isolate">Isolate</option>
                <option value="Distillate">Distillate</option>
                <option value="Both">Both</option>
              </Dropdown>

              The attributes of products:
              <select  id="00Nf400000UIuGl" multiple="multiple" name="00Nf400000UIuGl" title="The attributes of products">
                <option value="USDA Organic">USDA Organic</option>
                <option value="Non-GMO">Non-GMO</option>
                <option value="Vegan">Vegan</option>
                <option value="Other">Other</option>
              </select>
            </Section>
            <H5s>Compliance Information</H5s>
            <Section>
              Do you work with a third party to verify your product?:
              <Dropdown  id="00Nf400000UIuGq" name="00Nf400000UIuGq" title="Does a third party verify your product?">
                <option value="">--None--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Dropdown>

              If yes, which lab?:<Input  id="00Nf400000UIuGv" maxlength="255" name="00Nf400000UIuGv" size="20" type="text" />

              Is your product labeled and packaged for sale pursuant to FDA regulations for dietary supplemtns?:
              <Dropdown  id="00Nf400000UIuHU" name="00Nf400000UIuHU" title="Does the product meet FDA regulations?">
                <option value="">--None--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Dropdown>

            </Section>

            Source Comment:<Input  id="00Nf400000SmARU" name="00Nf400000SmARU" type="text" wrap="soft"></Input>

            <Input type="submit" name="submit" />

            </Form>
        </RightRail>
      </RailWrapper>
    </Layout>
  )
}