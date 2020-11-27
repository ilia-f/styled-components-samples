import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../componets/buttons';
import { Form, Input, Textarea, Label, Checkbox } from '../componets/inputs';
import { Title, Flex } from '../componets/general';
import { invertTheme } from '../themes/theme-context';

export default function FromCss (){
  const [isAgree, setIsAgree] = useState(true);
  
  const handleCheck = (event) => {
    setIsAgree(event.target.checked)
  }

  return (
        <>
          <Title>Themes</Title>
          <Form>
                <Label>
                    Name:
                    <Input name="name" autoFocus/>
                </Label>
                <ThemeProvider theme={invertTheme}>
                <Label>
                    About you:
                    <Textarea name="about"/>
                </Label>
                <Label>
                    Your bio:
                    <Textarea large name="bio"/>
                </Label>
                </ThemeProvider>
                <Label horizontal justifyContent="space-between">
                  Agree:
                  <Checkbox
                    name="isAgree"
                    checked={isAgree}
                    onChange={handleCheck} />
                </Label>
                
                <Flex style={{marginTop:'3em'}}>
                  <Button large >Clear</Button>
                  <Button theme={{ primary: "royalblue", radiusS: '10px', borderWidth: '4px' }} large primary type='submit'>Submit</Button>
                </Flex>
            </Form>
        </>
  )
}