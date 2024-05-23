import React, { useState } from "react"
import TextField from "../component/atom/TextField";
import Button from "../component/atom/Button"
import image from "../assets/image/kakao_login.png"

function LoginPage(): JSX.Element {
  const { naver }: any = window;
  const KakaoUrl = process.env.REACT_APP_KAKAO_AUTH_URL;
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
      const onClick=()=>{
        if(KakaoUrl)
        {
          window.location.href=KakaoUrl
        }
      }

    
    return (
        <div style={{position : 'absolute',left : '50%',top: '50%',transform: 'translate(-50%,-50%)'}} >
            <h1>loginPage</h1>
            <div style={{}}>
                <TextField label='ID' onChange={onChange} onKeyPress={onkeypress} type='text' value={id} variant='outlined' />
                <TextField label='Password' onChange={onChange} onKeyPress={onkeypress} type='password' value={password} variant='outlined'/>
                <div>
                  <Button ButtonType="iconButton">
                    <img src={image} alt="kakaoImage" onClick={onClick} />
                  </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
