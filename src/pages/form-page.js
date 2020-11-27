import React from 'react';

import { Button, CyanButton, SLink, ButtonLink, ReversedButton } from '../componets/buttons.js';
import { SForm, SInput, SSelect, STextarea, PasswordInput, SLabel, SCheckbox } from '../componets/inputs.js';
import { Title, SSpan, Wrapper, PageContent, PageHeader, PageInner, PageWrapper, SFlex } from '../componets/general.js';

export default class Form extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
      isAgree: true,
      name: '',
      about: 'Some info',
      taste: 'grapefruit'

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    alert('Sent successfully!');
    event.preventDefault();
  }

  render() {
    return (
        <>
        <Title>Form</Title>
      <SForm onSubmit={this.handleSubmit}>
          <SLabel>
          Name:
          <SInput
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </SLabel>
        
        <SLabel>
        About you:
          <STextarea 
            name="about"
            value={this.state.about}
            onChange={this.handleInputChange} />
        </SLabel>
          <SLabel>
            Favorite taste:
            <SSelect
            name="taste"
            value={this.state.taste}
            onChange={this.handleInputChange}>
              <option value="grapefruit">grapefruit</option>
              <option value="lime">lime</option>
              <option value="coconut">coconut</option>
              <option value="mango">mango</option>
            </SSelect>
          </SLabel>
          <SLabel horizontal justifyContent="space-between">
          Agree:
          <SCheckbox
            name="isAgree"
            checked={this.state.isAgree}
            onChange={this.handleInputChange} />
        </SLabel>
          <Button type='submit'>Submit</Button>
      </SForm>
      </>
    );
  }
  }