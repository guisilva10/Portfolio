import { useState } from 'react';
import useValidation from 'src/hooks/useValidation';
import Box from '../UI/Box';
import client from 'src/sanity';
import InputField from '../UI/InputField';
import Spinner from '../UI/Spinner';
import styles from './Footer.module.scss';

const Footer = ({ footer }) => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ isDataSent, setIsDataSent ] = useState(false);
  const [ hasError, setHasError ] = useState(false);

  const { title, copy } = footer;


  const {
    value: name,
    isTouched: isNameTouched,
    setValue: setName,
    setIsTouched: setIsNameTouched,
    inputHasError: nameHasError,

  } = useValidation((value) => value !== '');

  const {
    value: message,
    isTouched: isMessageTouched,
    setValue: setMessage,
    setIsTouched: setIsMessageTouched,
    inputHasError: messageHasError,

  } = useValidation((value) => value.length >= 30);

  const {
    value: email,
    isTouched: isEmailTouched,
    setValue: setEmail,
    setIsTouched: setIsEmailTouched,
    inputHasError: emailHasError,

  } = useValidation((value) => value.includes('@') && value.includes('.'));


  const isFormTouched = isNameTouched && isEmailTouched && isMessageTouched;

  const isFormValid = !nameHasError && !emailHasError && !messageHasError && isFormTouched && !isLoading;


  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const contactData = {
      _type : 'contact',
      name,
      email,
      message,
    };

    try {
      await client.create(contactData);
      setIsLoading(false);
      setIsDataSent(true);
    } catch {
      setIsLoading(false);
      setHasError(true);
    }


   
  
  };

  

  return (
    <footer className={styles['footer-wrapper']} id='footer'> 
      <div className={styles.footer}>
        <div className={styles.box}>
          <Box text='contato'/>
        </div>
        <h2>{title}</h2>
          {!isDataSent ? (
            <form onSubmit={submitForm}>
            <InputField 
            id='name' 
            onChange={setName} 
            hasError={nameHasError} 
            onBlur={setIsNameTouched} 
            label='Qual seu nome ?'
            />
            <InputField 
            id='email' 
            onChange={setEmail} 
            hasError={emailHasError} 
            onBlur={setIsEmailTouched} 
            label='E seu email ?'
            />
            <InputField 
            id='message' 
            onChange={setMessage} 
            hasError={messageHasError} 
            onBlur={setIsMessageTouched} 
            label='Escreva uma mensagem 😊 !'
            isTextarea={true}
            />
            <button className='btn btn-primary' disabled={!isFormValid}>
              { isLoading ? <Spinner/>  : 'Enviar' }
            </button>
            {hasError && (
              <span className='error'>Ops!, Alguma coisa deu errado, tente novamente !</span>
            )}
          </form>
          ) : (
            <h3 className='sucess'>Obrigado por entrar em contato !</h3>
          )}
        <span className={styles.copy}>{copy}</span>
      </div>
    </footer>
  )
}

export default Footer;