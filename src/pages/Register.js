import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledregFormBtn,
    StyledRegBtn,
    Wave,
    TextLink,
    StyledLabel,StyledTitle,colors,Avatar,Bgr,
ButtonGroup,
ExtraText,
Styledguru,
Styledmurid,
Styledexit
} from './../components/Styles.js'

import Logo from './../assets/favicon.png';
import { Formik, Form} from 'formik';
import { TextInput } from './../components/FormLib.js';
import {BsPersonSquare} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';
import * as Yup from 'yup';
import {InfinitySpin} from 'react-loader-spinner';

//
import {RiLockPasswordFill} from 'react-icons/ri';
import {RiLockPasswordLine} from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUserPin} from 'react-icons/bi'

import { connect } from 'react-redux';
import { loginpengguna } from '../auth/actions/userActions.js';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useTransition,animated } from 'react-spring';


const Register = ({loginpengguna}) => {
    const navigate = useNavigate();
    const [isVisible,setIsVisible] = useState(false);
    const transition = useTransition(isVisible,{
        from:{x: 0 ,y:0,opacity:1},
        enter:{ x: 0 ,y:1000,opacity:1, 
        backgroundColor:colors.dark1,
        width:"100%",
        height:"100%",
        position:"fixed",
        top:"0%"},                
        leave:{ x: 0 ,y:1000,opacity:1}
    });
    return(
        <div style={{width:"100%"}}>
        <StyledForm style={{width:"40%",height:"950px",margin:"auto"}}>

            <Avatar image={Logo}></Avatar>

            <StyledTitle size={60} style={{fontWeight:"bold",color:"red"}}>Register</StyledTitle>
            <Formik
            initialValues={{
                Role:"",
                Nim:"",
                nama:"",
                password:"",
                confpassword:"",
            }}
            validationSchema={
                Yup.object({
                    nama: Yup.string()
                    .required("tidak bisa kosong").max(30,'maksimal 30 huruf').matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                    .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar'),                    
                    Password : Yup.string().min(8, "kata sandi terlalu pendek")
                    .required("tidak bisa kosong")
                    .matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                    .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar')
                    .matches(/^(?=.*[0-9])/, 'Harus mengandung setidaknya satu nomor')
                    .matches(/^(?=.*[!@#\$%\^&\_=()*])/, 'Harus mengandung setidaknya satu karakter khusus'),
                    NIM: Yup.string().required("tidak bisa kosong").max(10,'maksimal 10 angka'),
                    confpassword: Yup.string().required("tidak bisa kosong").
                    oneOf([Yup.ref("Password")],"Password tidak sama"),
                    FotoMahasiswa: Yup.mixed().required("tidak bisa kosong"),
                    Foto64 : Yup.string(),                       
                })
            }
            onSubmit={(values,{setSubmitting,setFieldError}) => {
                console.log(values);
                loginpengguna(values,navigate,setFieldError,setSubmitting);
            }}
            >
                {({isSubmitting}) => (
                    <Form>

                        <TextInput 
                           name="NIM" 
                           type="number" 
                           label="Nomor Induk Mahasiswa"
                           placeholder="nomor induk mahasiswa"
                           onKeyDown={ 
                            (evt) => evt.key === 'e' && evt.preventDefault()
                           ||evt.key === '.' && evt.preventDefault() || evt.key === ',' && evt.preventDefault() }
                           icon={<BsBookmarkCheck/>}/>

                        <TextInput
                        name="username"
                        type="text"
                        label="Username"
                        placeholder="masukan nama"
                        icon={<BsPersonSquare/>}
                        
                        />
                        <TextInput
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="masukan password"
                        icon={<HiLockClosed/>}
                        />

                        <TextInput
                           name="repeatpassword" 
                           type="password" 
                           label="repeat password"
                           placeholder="repeat password"
                           icon={<RiLockPasswordFill/>}/>

                        <ButtonGroup >
                            {!isSubmitting && (
                            <StyledregFormBtn type='submit'>
                                Register
                            </StyledregFormBtn>
                            )}
                            <ExtraText style={{position:"absolute",bottom:"-15%"}}>
                                sudah punya akun?<TextLink to="/login">
                                   Login</TextLink></ExtraText>

                            {isSubmitting && (
                                <InfinitySpin 
                                color= {colors.red}                                
                                />
                            )}                   
                        </ButtonGroup>
                    </Form>     
                )}
            </Formik>         
        </StyledForm>
        
        <div >
        {transition((style,item) => 
           <animated.div  
            style={style}                                               
                
                >
                    <Styledexit style={{width:"14%",position:"absolute",zIndex:"1"}} type='StyledregFormBtn' 
                    onClick={() => {setIsVisible(v => !v);}}>close</Styledexit>
                    <div style={{width:"50%",height:"100%",maxWidth:"50%",float:"left"}}>
                    <Styledguru style={{width:"50%",height:"100%",position:"absolute"}}>  
                    </Styledguru>
                    <StyledTitle style={{position:"absolute",top:"85%",left:"15%"}}>
                        daftar sebagai admin</StyledTitle>
                    </div>
                    <div style={{width:"50%",height:"100%",maxWidth:"50%"}}>
                    <Styledmurid style={{width:"50%",height:"100%",position:"absolute"}} to="/register">  
                    </Styledmurid>
                    <StyledTitle style={{position:"absolute",top:"85%",right:"15%"}}>
                        daftar sebagai mahasiswa</StyledTitle>
                    </div>
            </animated.div>
        )}
        </div>
        </div>
    )
}

export default  connect(null,{loginpengguna})(Register);