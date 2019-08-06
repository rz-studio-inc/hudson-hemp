import React from "react";
import styled from 'styled-components';
import Layout from "../layout/index";
import {H1,H5} from '../common/Type';
import media from '../common/mediaQuery';
const Form = styled.form`
  display: flex;
  flex-direction: column;

  .check-wrapper input[type="checkbox"] {
      opacity: 0;
  }
  .check-wrapper label::before{
    content: "";
    display: inline-block;
    
    height: 16px;
    width: 16px;
    
    border: 1px solid;   
  }
  .check-wrapper label::after {
    content: "";
    display: inline-block;
    height: 6px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    
    transform: rotate(-45deg);
  }
  .check-wrapper label {
    position: relative;
    display: inline-block;
  }
  /* .check-wrapper label::before,
  .check-wrapper label::after {
      position: absolute;
  } */
  /*Outer-box*/
  .check-wrapper label::before {
    position: relative;
    margin-right: 20px;
    /* top: 3px; */
  }
  /*Checkmark*/
  .check-wrapper label::after {
    position: absolute;
    width: 12px;
    height: 12px;
    top: calc(50% - 9px);
    left: 2px;
    opacity: 0;
    background: #000;
    border-radius: 50%;
  }
  /*Hide the checkmark by default*/
  .check-wrapper input[type="checkbox"] + label::after {
      /* content: none; */
  }
  /*Unhide the checkmark on the checked state*/
  .check-wrapper input[type="checkbox"]:checked + label::after {
      opacity: 1;
      transition: opacity .4s ease-in-out;
  }
    /*Adding focus styles on the outer-box of the fake checkbox*/
  .check-wrapper input[type="checkbox"]:focus + label::before {
      /* outline: rgb(59, 153, 252) auto 5px; */
  }

`;
const Submit = styled.input `
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
  font-family: 'Times New Roman';
  cursor: pointer;
  &:hover {
    background: #0d140d;
    color: #fff;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
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
  font-family: 'Times New Roman';
  transition: background .3s ease-in-out;
  &:focus {
    background: #fff;
    transition: background .3s ease-in-out;
  }
  
`;
const Label = styled.label`
  display: block;
`;


const RailWrapper = styled.div`
  display: block;
  top: 80px;
  position: relative;
  padding: 60px 40px 80px;
  background: #f8f5f5;
  ${media.tablet`
    display: flex;
    flex-direction: row;

  `}

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
  max-width: none;
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 50%;
  `}
  
  
  
`;
const RightRail = styled.div`
  
  max-width: none;
  ${media.tablet`
    flex: 1 0 auto;
    max-width: 50%;

  `}
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
  max-width: 560px;
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
  max-width: 560px;
  border: none;
  border-radius: 0;
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
  font-size: 21px;
  line-height: 1;
  font-family: "Times New Roman",Times,serif;
  margin-bottom: 12px;
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
            <H5s>1.Company Information</H5s>
            <Section>

              <label htmlFor="company">Company Name</label><Input  id="company" maxlength="40" name="company" size="20" type="text" />

              <label htmlFor="URL">Company Website</label><Input  id="URL" maxlength="80" name="URL" size="20" type="text" />
              <label htmlFor="description">Description</label><Input name="description"></Input>
              <label for="industry">Industry</label>
              <Dropdown id="industry" name="industry">
                <option value="">--None--</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Apparel">Apparel</option>
                <option value="Banking">Banking</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Chemicals">Chemicals</option>
                <option value="Consulting">Consulting</option>
                <option value="Education">Education</option>
                <option value="Electronics">Electronics</option>
                <option value="Energy">Energy</option>
                <option value="Engineering">Engineering</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Environmental">Environmental</option>
                <option value="Finance">Finance</option>
                <option value="Food &amp; Beverage">Food &amp; Beverage</option>
                <option value="Government">Government</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Insurance">Insurance</option>
                <option value="Machinery">Machinery</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Media">Media</option>
                <option value="Not For Profit">Not For Profit</option>
                <option value="Other">Other</option>
                <option value="Recreation">Recreation</option>
                <option value="Retail">Retail</option>
                <option value="Shipping">Shipping</option>
                <option value="Technology">Technology</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Transportation">Transportation</option>
                <option value="Utilities">Utilities</option>
                <option value="Wellness">Wellness</option>
                <option value="Beauty">Beauty</option>
                <option value="Edibles">Edibles</option>
                <option value="Home Goods">Home Goods</option>
                <option value="Textiles">Textiles</option>
                <option value="Paper">Paper</option>
                <option value="Agriculture– Cannabis">Agriculture– Cannabis</option>
              </Dropdown>
              Government Document:
              <Input id="00Nf400000UIuGW" maxlength="155" name="00Nf400000UIuGW" size="20" type="text" />
              <label htmlFor="revenue">Annual Revenue</label>
              <Input id="revenue" name="revenue" size="20" type="text" />
              
            </Section>
            <H5s>2.Primary Contact</H5s>
            <Section>
              <InputWrapper>
                <label htmlFor="first_name">First Name</label><Input id="first_name" maxlength="40" name="first_name" size="20" type="text" />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="last_name">Last Name</label><Input id="last_name" maxlength="80" name="last_name" size="20" type="text" />
              </InputWrapper>

              <label htmlFor="title">Title</label><Input id="title" maxlength="40" name="title" size="20" type="text" />

              <label htmlFor="email">Email</label><Input id="email" maxlength="80" name="email" size="20" type="text" />
              <label htmlFor="phone">Phone</label><Input id="phone" maxlength="40" name="phone" size="20" type="text" />
            </Section>

            <H5s>3.Shipping Information</H5s>
            <Section className="row">
              <InputWrapper className="input-half">
                <label htmlFor="street">Street</label><Input name="street"></Input>
              </InputWrapper>
              <InputWrapper className="input-half">
                <label htmlFor="city">City</label><Input  id="city" maxlength="40" name="city" size="20" type="text" />
              </InputWrapper>
              <InputWrapper className="input-half">
                <label htmlFor="state">State/Province</label><Input  id="state" maxlength="20" name="state" size="20" type="text" />
              </InputWrapper>
              <InputWrapper className="input-half">
                <label htmlFor="zip">Zip</label><Input  id="zip" maxlength="20" name="zip" size="20" type="text" />
              </InputWrapper>
            </Section>
       
            <H5s>4.Product Information</H5s>
            <Section>

              Which product are you interested in?:
              <Dropdown  id="00Nf400000UIuGb" name="00Nf400000UIuGb" title="Which product are you interested in?">
                <option value="">--None--</option>
                <option value="Isolate">Isolate</option>
                <option value="Distillate">Distillate</option>
                <option value="Both">Both</option>
              </Dropdown>

                The attributes of products:

                <div className="check-wrapper">
                  <input id="00Nf400000UJY2e" name="00Nf400000UJY2e" type="checkbox" value="1" />
                  <label htmlFor="00Nf400000UJY2e">USDA Organic:</label>
                </div>
                <div className="check-wrapper">
                  <input id="00Nf400000UJY2j" name="00Nf400000UJY2j" type="checkbox" value="1" />
                  <label htmlFor="00Nf400000UJY2j">Non-GMO:</label>
                </div>
                <div className="check-wrapper">
                  <input id="00Nf400000UJY2o" name="00Nf400000UJY2o" type="checkbox" value="1" />
                  <label htmlFor="00Nf400000UJY2o">Vegan:</label>
                </div>
                <div className="check-wrapper">
                  <input id="00Nf400000UJY2t" name="00Nf400000UJY2t" type="checkbox" value="1" />
                  <label htmlFor="00Nf400000UJY2t">Other:</label>
                </div>
              



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

              Is your product labeled and packaged for sale pursuant to FDA regulations for dietary supplements?:
              <Dropdown  id="00Nf400000UIuHU" name="00Nf400000UIuHU" title="Does the product meet FDA regulations?">
                <option value="">--None--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Dropdown>

            </Section>

            

            <Submit type="submit" name="submit" class="site-link" />

            </Form>
        </RightRail>
      </RailWrapper>
    </Layout>
  )
}