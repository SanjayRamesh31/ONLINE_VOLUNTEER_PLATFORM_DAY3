// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./Register.css";

// function RegistrationForm() {
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const navigate = useNavigate();

//   const loginHandler = (e) => { 
//     e.preventDefault();
//     navigate('/Navbar');
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setFirstname('');
//     setLastname('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div className='registration-page'>

//     <form className="form" onSubmit={handleSubmit}>
//       <p className="title">Register</p>
//       <p className="message">Signup now and get full access to our app.</p>
//       <div className="flex">
//         <label>
//           <input
//             required
//             placeholder="Firstname"
//             type="text"
//             className="input"
//             value={firstname}
//             onChange={(event) => setFirstname(event.target.value)}
//           />
//         </label>

//         <label>
//           <input
//             required
//             placeholder="Lastname"
//             type="text"
//             className="input-1"
//             value={lastname}
//             onChange={(event) => setLastname(event.target.value)}
//           />
//         </label>
//       </div>

//       <label>
//         <input
//           required
//           placeholder="Email"
//           type="email"
//           className="input"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </label>

//       <label>
//         <input
//           required
//           placeholder="Password"
//           type="password"
//           className="input"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>

//       <label>
//         <input
//           required
//           placeholder="Confirm Password"
//           type="password"
//           className="input"
//           value={confirmPassword}
//           onChange={(event) => setConfirmPassword(event.target.value)}
//         />
//       </label>
//       <Link to="/Home">

//       <button type="submit" className="bo" id='bo'>
//                     <span className="xo">
//                         Submit
//                     </span>
//                 </button>

//       </Link>
//       <Link to="/">Already have an Account? Sign In</Link>
//     </form>
//     </div>
//   );
// }

// export default RegistrationForm;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Register.css';

function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
    navigate('/Navbar');
  };

  return (
    <div className="registration-page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input
              {...register('firstname', { required: 'Firstname is required' })}
              placeholder="Firstname"
              type="text"
              className="input"
            />
          </label>

          <label>
            <input
              {...register('lastname', { required: 'Lastname is required' })}
              placeholder="Lastname"
              type="text"
              className="input-1"
            />
          </label>
        </div>
        {errors.firstname && (
          <span style={{ color: 'red' }}>{errors.firstname.message}</span>
        )}
        {errors.lastname && (
          <span style={{ color: 'red' }}>{errors.lastname.message}</span>
        )}

        <label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
            type="email"
            className="input"
          />
        </label>
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

        <label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            placeholder="Password"
            type="password"
            className="input"
          />
        </label>
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password.message}</span>
        )}

        <label>
          <input
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === document.querySelector('input[name="password"]').value ||
                'Passwords do not match',
            })}
            placeholder="Confirm Password"
            type="password"
            className="input"
          />
        </label>
        {errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>
        )}

        <Link to="/Home">
          <button type="submit" className="bo" id="bo">
            <span className="xo">Submit</span>
          </button>
        </Link>
        <Link to="/">Already have an Account? Sign In</Link>
      </form>
    </div>
  );
}

export default RegistrationForm;
