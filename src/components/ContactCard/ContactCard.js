import './ContactCard.css'

const ContactCard = () => {
  return (
    <div className='contact-card'>
        <h2 className='title'>Contact Us</h2>
        <form>
            <div className='form-list'>
                <p className='label'>First Name</p>
                <input type='text' className='form-inp'/>
            </div>
            <div className='form-list'>
                <p className='label'>Last Name</p>
                <input type='text' className='form-inp'/>
            </div>
            <div className='form-list'>
                <p className='label'>Your Message</p>
                <input type='text' className='form-inp'/>
            </div>
            <input type={"submit"} className="submit"/>
        </form>
    </div>
  )
}

export default ContactCard