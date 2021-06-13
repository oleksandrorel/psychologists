import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../index';
import './Form.scss';
import classnames from 'classnames';

// validation regular expressions
const EMAIL_REGEXP = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;
const NAME_REGEXP = /^[A-ZА-Я][a-zA-Zа-яА-Я]{3,}(?: [A-ZА-Я][a-zA-Zа-яА-Я]*){0,2}$/;

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [typeValid, setTypeValid] = useState(true);
  const buttonValidation = !nameValid || !emailValid || !typeValid || !name || !email || !type;

  const { docRef } = useContext(Context);
  const [users, setUsers] = useState();

  useEffect(() => {
    docRef.get()
      .then(result => (setUsers(result.data().psychologists)));
  }, [docRef]);

  const  addUser = () => {
    const newPsychologist = {
      name,
      email,
      type,
      photo: null,
    };

    const psychologists = [...users, newPsychologist];

    docRef.set({
      psychologists
    });
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'full name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'type':
        setType(value);
        break;
    
      default:
        break;
    }
  }

  const validate = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'full name':
        return setNameValid(!!value.match(NAME_REGEXP));

      case 'email':
        return setEmailValid(!!value.match(EMAIL_REGEXP));

      case 'type':
        return setTypeValid(!!value);

      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser()
    console.log('happened');
    setName('');
    setEmail('');
    setType('');
  }

  return (
    <div class="wrapper">
      <div className="Form">
        <h1 className="Form-Header">Add new psychologist</h1>
        <form
          onSubmit={handleSubmit}
        >
          <div className="Form-InputBlock">
            <p>Full name: </p>
            <input
              type="text"
              name="full name"
              placeholder="Add a full name"
              className={classnames('Form-Input', {
                'Form-Warning': !nameValid,
              })}
              value={name}
              onChange={handleChange}
              onBlur={validate}
            />
            {!nameValid
            && <p className="Form-Error">The name is not valid</p>}
          </div>

          <div className="Form-InputBlock">
            <p>Email: </p>
            <input
              type="text"
              name="email"
              placeholder="Add an email"
              className={classnames('Form-Input', {
                'Form-Warning': !emailValid,
              })}
              value={email}
              onChange={handleChange}
              onBlur={validate}
            />
            {!emailValid
            && <p className="Form-Error">The email is not valid</p>}
          </div>

          <div className="Form-InputBlock">
            <p>Type: </p>
            <select
              value={type}
              name="type"
              className='Form-Input'
              onChange={handleChange}
              onBlur={validate}
            >
              <option value="">Choose psychologist type</option>
              <option value="Психолог">Психолог</option>
              <option value="Психиатр">Психиатр</option>
              <option value="Психотерапевт">Психотерапевт</option>
            </select>
            {!typeValid
            && <p className="Form-Error">Choose type of psychologist</p>}
          </div>

          <button
            type="submit"
            className="Form-Submit"
            disabled={buttonValidation}
          >
            Add new psychologist
          </button>
        </form>
      </div>
    </div>

  );
}
