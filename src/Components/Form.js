
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Form.css';

function Form({ formSubb }) {
  const { register,
    handleSubmit,
    formState: { errors },
    reset } = useForm();

  const onSubmit = (data) => {
    data.id = Date.now();
    data.fav = false;
    formSubb(data);
    // console.log(data);
    reset();

  };
  return (
    <div className='col-sm-4 contact-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-head">
          <h3>Add Contact</h3>
        </div>
        <div className="form-group">
          <label htmlFor="name" >Name :</label>
          <input type='text' className='form-control' {...register("name", { required: "Name is Required..." })} />
          {errors.name && (<span className='alert-msg'>{errors.name.message}</span>)}
        </div>
        <div className="form-group">
          <label htmlFor="email" >Email :</label>
          <input type='text' className='form-control' {...register("email", { required: "Email is Required...", pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, message: "Invalid email" } })} />
          {errors.email && (<span className='alert-msg'>{errors.email.message}</span>)}
        </div>
        <div className="form-group">
          <label htmlFor="phone" >Phone :</label>
          <input type='text' className='form-control' {...register("phone", { required: "Phone Number is Required...", pattern: { value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, message: "Invalid phone number" } })} />
          {errors.phone && (<span className='alert-msg'>{errors.phone.message}</span>)}
        </div>
        <div className="form-button">
          <Button type='submit'>Add Contact</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
