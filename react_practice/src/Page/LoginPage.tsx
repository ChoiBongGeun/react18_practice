import React, { useState } from "react"
import TextField from "../component/atom/TextField";

function LoginPage(): JSX.Element {
    const [form, setForm] = useState({
        id: '',
        password: ''
      });

      const { id, password } = form;

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //input창에 작성할때 변수에 맞게 바로 작성
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
      };
      const onkeypress=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
        
        }

      }

    
    return (
        <div style={{position : 'absolute',left : '50%',top: '50%',transform: 'translate(-50%,-50%)'}} >
            <h1>loginPage</h1>
            <div style={{}}>
                <TextField label='ID' onChange={onChange} onKeyPress={onkeypress} type='text' value={id} variant='outlined' />
                <TextField label='Password' onChange={onChange} onKeyPress={onkeypress} type='password' value={password} variant='outlined'/>
            </div>
        </div>
    )
}

export default LoginPage;
