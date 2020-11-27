import React, { useState } from 'react';

import { Button } from '../componets/buttons.js';
import { Form, Input, Textarea, Label, Checkbox } from '../componets/inputs.js';
import { Title, Flex } from '../componets/general.js';


export default function FromCss (){
  const [isAgree, setIsAgree] = useState(true);
  
  const handleCheck = (event) => {
    setIsAgree(event.target.checked)
  }

  return (
        <>
          <Title>Attrs</Title>
          <Form>
                <Label>
                    Name:
                    <Input name="name" autoFocus/>
                </Label>
                <Label>
                    About you:
                    <Textarea name="about"/>
                </Label>
                <Label>
                    Your bio:
                    <Textarea large name="bio"/>
                </Label>
                <Label horizontal justifyContent="space-between">
                  Agree:
                  <Checkbox
                    name="isAgree"
                    checked={isAgree}
                    onChange={handleCheck} />
                </Label>
                <Flex style={{marginTop:'3em'}}>
                  <Button large >Clear</Button>
                  <Button large primary type='submit'>Submit</Button>
                </Flex>
            </Form>
        </>
  )
}