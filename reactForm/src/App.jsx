import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)
const { register, handleSubmit, formState: { errors , isSubmitting} } = useForm();
   const submitFunction = (data) => {
    // simulate the api as api take some time to get data stop the button submission because it can trigger even if one process is going on 
  console.log(data);
};
  return (
    <>
      <form onSubmit = { handleSubmit(submitFunction) }>
         <div>

          {/* register expects two things name and validation rule like ...register(name,validationRule) */}
          <label>Name</label>
          <input {...register('nAme',{required:true,
            minLength:{
              value:5,
              message:"write more than 4"
            }
            })}/>
            {/*  if there is some error in name the do this */}
            {errors.nAme && <p>{errors.nAme.message}</p>}
         </div>
         <input type="submit" disable={isSubmitting}/>
      </form>
    </>
  )
}

export default App
