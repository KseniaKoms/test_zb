import { useEffect, useState} from "react";
import { useAddFeedbackMutation } from "../../redux";
import {Input, Textarea, Button, FormBox} from "./Form.styled";

import { Notify } from "notiflix";

const Form = () => {
const [name, setName] = useState();
const [email, setEmail] = useState();
const [message, setMessage] = useState();

const [feedback, {isLoading: isSuccess}] = useAddFeedbackMutation();

useEffect(()=> {
  if(isSuccess) {
    Notify.success('Thanks for your feedback!')
  }
}, [isSuccess])

const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
        case 'message':
        setMessage(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, message};
    feedback(credentials);
    e.target.reset();
  };

    return <FormBox onSubmit={handleSubmit}>
        <Input
        onChange={handleChange}
        type="text" 
        name="name"  
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
        placeholder="Your name*"
        size="18px"/>
        <Input 
        onChange={handleChange}
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
        title="Invalid e-mail address"
        required
        autoComplete="off"
        placeholder="Your email*"
        size="18px"/>
        <Textarea 
        onChange={handleChange}
        rows="4" 
        cols="50" 
        name="message" 
        placeholder="Your message*"
        required/>
        <Button type="submit">Send message</Button>

    </FormBox>
}

export default Form;