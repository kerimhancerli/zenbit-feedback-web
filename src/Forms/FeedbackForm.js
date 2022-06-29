import React, { useState } from 'react'
import { Button, Form, H1, Input, Textarea } from '../Compponents/Styleds'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { sendFeedback } from '../Store/Feedback/action'

const FeedbackForm = () => {
  const { status } = useSelector(state => state.Feedback);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  })
  const submit = (e) => {
    e.preventDefault();
    dispatch(sendFeedback(formValues));
    setFormValues({
      name: "",
      email: "",
      message: ""
    })
  }
  const onChange = (key, value) => {
    setFormValues(prevFormValues => ({...prevFormValues, [key]: value }))
  }
  return (
    <Form onSubmit={submit} style={{ marginLeft: 150, marginTop: 150, minHeight: 750 }}>
      <H1>Reach out to us!</H1>
      <Input value={formValues.name} onChange={(event) => onChange("name", event.target.value)} placeholder='Your name*' />
      <Input type="email" value={formValues.email} onChange={(event) => onChange("email", event.target.value)}  placeholder='Your e-mail*' />
      <Textarea  value={formValues.message} onChange={(event) => onChange("message", event.target.value)}  rows={5} placeholder="Your message*" />
      <div style={{ marginTop: 15 }}>
        <Button type='submit'>Send message</Button>
      </div>
      {
        status === 'Fulfilled' &&
        <h3>Thank you for your feedback!</h3>
      }
    </Form>
  )
}



export default FeedbackForm