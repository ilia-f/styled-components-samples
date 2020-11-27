import React from 'react';
import { Title, Flex } from '../componets/general.js';

import { form, header2, label, input, button } from './styles.module.scss'

import { Form, Header2, Label, Input, Textarea, Button } from '../componets/from-css-comps';

export default function FromCss (){
    return (
        <>
        <Title>Coming from CSS</Title>
        <Flex style={{width:'100%'}}>
            <form className={form}>
                <h2 className={header2}>CSS style</h2>
                <label className={label}>
                    Name:
                    <input className={input} name="name" />
                </label>
                <label className={label}>
                    About you:
                    <textarea className={input} name="about"/>
                </label>
                <button className={button} type='submit'>Submit</button>
            </form>
            <Form >
                <Header2>Styled componets</Header2>
                <Label>
                    Name:
                    <Input name="name"/>
                </Label>
                <Label>
                    About you:
                    <Textarea name="about"/>
                </Label>
                <Button type='submit'>Submit</Button>
            </Form>
        </Flex>
        </>
    )
}