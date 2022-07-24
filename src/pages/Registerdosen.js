import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledFormBtn,
    StyledRegBtn,
    Wave,
    TextLink,
    StyledLabel,StyledTitle,colors,Avatar,Bgr,
ButtonGroup,
ExtraText,
StyledButton,
Styledguru,
Styledmurid,
Styledexit,
Styledreg,
Styledreg2,
StyledFormBtn2


} from '../components/Styles.js'

import Logo from './../assets/favicon.png';
import { Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib.js';
import {BsLadder, BsPersonSquare} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';
import * as Yup from 'yup';
import {InfinitySpin} from 'react-loader-spinner';

import { connect } from 'react-redux';
import { loginpengguna } from '../auth/actions/userActions.js';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useTransition,animated } from 'react-spring';
import { motion ,AnimatePresence} from 'framer-motion';

//normal
import folder1z from './../assets/folder1.svg'
import personhand from './../assets/personhand.svg'
import circle from './../assets/circle.svg'
import person from './../assets/person.svg';
import grass from './../assets/grass.svg';
//invert
import folder1zI from './../assets/invert/folder1.svg'
import personhandI from './../assets/invert/personhand.svg'
import circleI from './../assets/invert/circle.svg'
import personI from './../assets/invert/person.svg';
import grassI from './../assets/invert/grass.svg';
import cancel from './../assets/cancel.svg';

//left choice
import personG from './../assets/guru/person.svg';
import lhandG from './../assets/guru/lhand.svg';
import lhandinG from './../assets/guru/lhandin.svg';
import rhandinG from './../assets/guru/rhandin.svg';
import laptopG from './../assets/guru/laptop.svg';
import lheadG from './../assets/guru/head.svg';
import lhairG from './../assets/guru/hair1.svg';
//right choice
import murid from './../assets/mahasiswa/murid.svg';
import personJ from './../assets/mahasiswa/fullperson.svg';
import body2J from './../assets/mahasiswa/body2.svg';
import body3J from './../assets/mahasiswa/body3.svg';
import headJ from './../assets/mahasiswa/head.svg';
import handJ from './../assets/mahasiswa/hand.svg';
import inhandJ from './../assets/mahasiswa/inhand.svg';
import pencilJ from './../assets/mahasiswa/pencil.svg';
import rhandJ from './../assets/mahasiswa/rhand.svg';
import rhandinJ from './../assets/mahasiswa/rhandin.svg';


const Register = ({loginpengguna}) => {
    const navigate = useNavigate();
    const [isVisible,setIsVisible] = useState(true);
    /*setTimeout(() => {
        setIsVisible(false);
    },50)
    */
   
    return(
        <div style={{width:"100%",position:"fixed"}}>
        <motion.div animate={{ y:20 }} initial={{y:20}} 
        style={{width:"100%",top:"0%",
          height:"100vh",backgroundColor:null,overflowY:"scroll",paddingRight:"17px",
          boxSizing:"content-box",justifyContent:"center",display:"flex",paddingBottom:"40px"
        }}>            
        <StyledForm style={{width:"40%",height:"130vh",
        
        }}>
            
            <Avatar image={Logo}></Avatar>
            <StyledTitle size={60} style={{fontWeight:"bold",color:"red"}}>Daftar</StyledTitle>
            <Formik
            initialValues={{
                username:"",
                password:"",
            }}
            validationSchema={
                Yup.object({
                    username: Yup.string().required("tidak bisa kosong"),
                    password: Yup.string().required("tidak bisa kosong")
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
                        name="username"
                        type="text"
                        label="nama dosen"
                        placeholder="masukan nama"
                        icon={<BsPersonSquare/>}                        
                        />
                        <TextInput
                        name="email"
                        type="text"
                        label="email"
                        placeholder="masukan email"
                        icon={<BsPersonSquare/>}                        
                        />

                        <TextInput
                        name="id_class"
                        type="text"
                        label="id class"
                        placeholder="masukan id kelas"
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
                        name="repassword"
                        type="password"
                        label="confirm password "
                        placeholder="masukan password"
                        icon={<HiLockClosed/>}
                        />
                        <ButtonGroup >
                            {!isSubmitting && (
                            <StyledFormBtn type='submit' style={{position:"absolute"}}>
                                Daftar
                            </StyledFormBtn>
                            )}                                                                                

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
            
        </motion.div>
        <div>
        <AnimatePresence >

        {isVisible ? (   
            <div style={{left:"0%",width:"80%",pointerEvents:"none",backgroundColor:colors.red}}>                
                <motion.div 
                style={{
                        position:"absolute",
                        backgroundColor:colors.dark1,
                        left:"28%",                        
                        top:"-7%",
                        borderRadius:"30px 30px 0% 0% ",
                        width:"40%",
                        zIndex:"9"
                        }}
                        animate={{ y:-1000 }} initial={{y:0}} exit={{y:-1000}} 
                        transition={{duration:0.5}}                                                                        
                        >
                        <StyledTitle>daftar sebagai :</StyledTitle>
                    </motion.div>
                <motion.div 
                style={{width:"80%",height:"100%",
                position:"fixed",
                zIndex:"10",backgroundColor:colors.white,
                borderRadius:"30px",height:"80%",marginLeft:"10%"
                                
                }}
                animate={{ y:0 }} initial={{y:-700}} transition={{duration:0.5}}
                >
                <motion.div style={{width:"4%",marginTop:"-1%",marginLeft:"-1.5%"}}>
                    <motion.img src={cancel} onClick={() => {
                        
                           
                        
                                    
                                }}/>
                    </motion.div>   
                    
                    <div style={{width:"100%",height:"90%",backgroundColor:null,
                    display:"flex",}}>
                        
                    <div style={{width:"43%",height:"100%",margin:"auto"}}
                    onClick={() => {
                       
                    }}
                    >
                        
                    <motion.div style={{height:"8%",
                    position:"absolute",backgroundColor:null,left:"22%",
                    zIndex:"-1"
                    }}>
                        <StyledTitle style={{color:colors.dark2,fontWeight:"bolder"}}>
                            dosen</StyledTitle>
                    </motion.div>
                    <motion.div 
                    style={{backgroundColor:colors.dark2,
                    width:"100%",height:"100%",borderRadius:"5%",marginTop:"10%"}} 
                    whileHover={{                        
                        backgroundColor:colors.dark2,
                        marginTop:"10%"
                    }}
                   
                    >
                        
                    <motion.img 
                    style={{position:"absolute",backgroundColor:null
                    ,width:"60%",left:"4%",bottom:"24%",pointerEvents:"none"}}
                    animate={{ rotate:[0,0,2,0]}} 
                    transition={{yoyo:Infinity,duration:5}}
                    src={rhandinG}
                    />
                    
                    <motion.img 
                    style={{position:"absolute",left:"13%",top:"44%"}}
                    src={personG}
                    />
                    
                    <motion.img 
                    style={{position:"absolute",backgroundColor:null,
                    width:"40%",left:"23%",bottom:"7%",pointerEvents:"none"}}
                    animate={{ rotate:[3,1,2,0]}} 
                    transition={{yoyo:Infinity,duration:5}}
                    src={lhandinG}
                    />
                    <motion.img 
                    style={{position:"absolute",width:"22%",top:"10%",left:"30%",pointerEvents:"none"}}
                    animate={{ rotate:[3,1,2,0]}} 
                    transition={{yoyo:Infinity,duration:5}}
                    src={lhandG}
                    />
                    <motion.img 
                    style={{position:"absolute",background:null,top:"6.5%",left:"00%",pointerEvents:"none"}}
                    
                    src={laptopG}
                    />

                    <motion.img 
                    style={{position:"absolute",background:null,top:"8.5%",left:"0%",pointerEvents:"none"}}
                    animate={{ rotate:[0,0,0,0,0,3,3,0,0,0]}} 
                    transition={{yoyo:Infinity,duration:12}}
                    src={lheadG}
                    />
                    <motion.img 
                    style={{position:"absolute",background:null,top:"8.5%",left:"1%",pointerEvents:"none"}}
                    animate={{ rotate:[0,0,0,0,0,3,2,0,0,0]}} 
                    transition={{yoyo:Infinity,duration:12}}
                    src={lhairG}
                    />
                    
                </motion.div>
                
                </div>
                <div style={{width:"43%",height:"100%",margin:"auto"}}>
                    <motion.div style={{height:"8%",
                    position:"absolute",backgroundColor:null,left:"69%",
                    zIndex:"-1"
                    }}>
                        <StyledTitle 
                        style={{color:colors.dark2,fontWeight:"bolder"}}>
                            mahasiswa
                            </StyledTitle>
                    </motion.div>

                <motion.div 
                    style={{backgroundColor:colors.dark1,
                    width:"100%",height:"100%",borderRadius:"5%"
                                        
                    }}
                    whileHover={{                        
                        backgroundColor:colors.dark2,
                        marginTop:"10%"
                    }}>
                    
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"30%",top:"67.5%",
                    right:"3%",position:"absolute",pointerEvents:"none"}}
                    animate={{ x:[0,1,9,1]}} 
                    transition={{yoyo:Infinity,duration:3}}
                    src={inhandJ}
                    />

                    <motion.img 
                    style={{backgroundColor:null,
                    width:"50%",top:"48%",
                    right:"11%",position:"absolute",pointerEvents:"none"}}
                    animate={{ x:[0,1,6,1]}} 
                    transition={{yoyo:Infinity,duration:3}}
                    src={handJ}
                    />
                    
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"60%",top:"39%",
                    right:"-10%",position:"absolute",pointerEvents:"none"}}
                    src={body3J}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"70%",top:"-27%",
                    right:"-16%",position:"absolute",pointerEvents:"none"}}
                    animate={{ rotate:[0,1.2,1,0,1,2,1,1,2,1,1,2,1]}} 
                    transition={{yoyo:Infinity,duration:12}}
                    src={headJ}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"10%",bottom:"20%",
                    right:"3%",position:"absolute",pointerEvents:"none"}}
                    animate={{ 
                        x:[0,1,9,1],
                        rotate:[3,2,1,0,3,2,1,0]
                    }} 
                    transition={{yoyo:Infinity,duration:3}}
                    src={pencilJ}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"46%",bottom:"9%",
                    right:"4%",position:"absolute",pointerEvents:"none"}}
                    animate={{x:[0,1,2,4,1,2,1,3,1,0,1]}}
                    transition={{yoyo:Infinity,duration:10}}
                    src={rhandinJ}
                    />
                    <motion.img 
                    style={{backgroundColor:null,
                    width:"46%",bottom:"14%",
                    right:"17%",position:"absolute",pointerEvents:"none"}}
                    
                    transition={{yoyo:Infinity,duration:3}}
                    src={rhandJ}
                    />
                    
                </motion.div>
                </div>
                </div>             
                </motion.div>
                </div>
                
            
                ): ''
            }
            </AnimatePresence>                    
            </div>     
            </div>
         
    )
}

export default  connect(null,{loginpengguna})(Register);