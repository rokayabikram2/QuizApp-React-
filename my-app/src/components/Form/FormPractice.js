import { Button, FormControl, FormControlLabel, RadioGroup,TextField ,FormLabel,Radio,Checkbox,Select,MenuItem,Rating,Typography} from '@mui/material'
import React, {  useState } from "react";
import Joi from "joi";

function FormPractice() {

  const[data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    gender:"",
    Faculty:"",
    rating: 0,
    options: [], 
});

const[errorData,setErrorData]=useState({
  name:"",
  email:"",
  phone:"",
  gender:"",
  Faculty:"",
  rating: 0,
  options: [], 
});




const validatorScheme = Joi.object({
    name:Joi.string().min(10).max(50).required(),
    email:Joi.string().email({tlds:{allow:false} }).required(),
    phone:Joi.number().required(),
    gender:Joi.string().required(),
    country:Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    options: Joi.array().required(),
});

const validateData = () =>{
    const {error} = validatorScheme.validate(data);
    if(!error){
      setErrorData({
        name:"",
        email:"",
        phone:"",
        gender:"",
        Faculty:"",
        rating: 0,
        options: [],
      })
      
      return true;

    }else{
      for (let item of error.details){
        let updatedError = {...errorData};
        updatedError[item.path[0]]=item.message;
        setErrorData(updatedError);
        
      }
      return false;
}

    

}

const save = () =>{
    const validate=validateData();
    if(validate){
      alert("form is success");
    }
}

const handleChange=(event)=>{
    let updatedData={...data};
    if (event.target.type === "checkbox") {
        const selectedOptions = event.target.name;
        updatedData.options = updatedData.options.includes(selectedOptions)
          ? updatedData.options.filter((option) => option !== selectedOptions)
          : [...updatedData.options, selectedOptions];
      } else {
        updatedData[event.target.name] = event.target.value;
      }
      setData(updatedData);
}    
return(
<div className="container" style={{padding:12}}>
    
    <TextField required style={{width:'100%',marginTop:12}} id="filled-basic"
    name="name" value={data.name} onChange={handleChange}
    label="Name" variant="filled" />
    <TextField required style={{width:'100%',marginTop:12}} id="filled-basic"
     name="email" value={data.email}  onChange={handleChange}
    label="Email" variant="filled" />
    <TextField required type="number" style={{width:'100%',marginTop:12}} id="filled-basic"
     name="phone" value={data.phone}  onChange={handleChange}
    label="Phone Number" variant="filled" />

    
    <FormControl style={{marginTop:12}}>
        <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
    
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
         
            name="gender" value={data.gender}  onChange={handleChange}>
               <div style={{display:'flex'}}>
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                <FormControlLabel value="other" control={<Radio/>} label="Others"/>
                </div>
            </RadioGroup>
           
    </FormControl>


  
    <FormControl style={{ width: "100%", marginTop: 12 }}>
    <FormLabel>Faculty</FormLabel>
        <Select
            name="Faculty" value={data.Faculty} onChange={handleChange} label="Faculty"
        >
            <MenuItem value="Faculty">BIT</MenuItem>
            <MenuItem value="Faculty">BCS</MenuItem>
            <MenuItem value="Faculty">BBA</MenuItem>
        </Select>
  </FormControl>

  <FormControl style={{ marginTop: 12 }}>
    <FormLabel>Select your choice of interest</FormLabel>
    <FormControlLabel
      control={
        <Checkbox
          name="Python"
          checked={data.options.includes("Python")}
          onChange={handleChange}
        />
      }
      label="Python"
    />
    <FormControlLabel
      control={
        <Checkbox
          name="React"
          checked={data.options.includes("React")}
          onChange={handleChange}
        />
      }
      label="React"
    />
    <FormControlLabel
      control={
        <Checkbox
          name="Java"
          checked={data.options.includes("Java")}
          onChange={handleChange}
        />
      }
      label="Java"
    />
  </FormControl>

  

    <div style={{ marginTop: 12 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
            name="rating"
            value={data.rating}
            onChange={(_, newValue) => handleChange({ target: { name: "rating", value: newValue } })}
        />
    </div>
    
    <div style={{marginTop:12}}>
        <Button variant="contained" onClick={save}>Submit</Button>
        <Button>Reset</Button>
    </div>
    {JSON.stringify(data)}
</div>
);
}


export default FormPractice
