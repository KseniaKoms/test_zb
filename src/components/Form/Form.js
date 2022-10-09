const Form = () => {
    return <form>
        <input 
        type="text" 
        name="name"  
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
        placeholder="Your name*"/>
        <input 
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
        title="Invalid e-mail address"
        required
        autoComplete="off"
        placeholder="Your email*"/>
        <textarea 
        rows="4" 
        cols="50" 
        name="message" 
        placeholder="Your message*"
        required/>
        <button type="submit">Send message</button>

    </form>
}

export default Form;