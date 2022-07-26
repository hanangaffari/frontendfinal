import { useState } from 'react';
import { useField } from 'formik';

import{
    StyledInput,
    StyledLabel,
    StyledIcon,
    StyledImg,
    ErrorMsg
}from "./Styles.js";

import {IoMdEyeOff, IoMdEye} from 'react-icons/io';


export const TextInput = ({icon,...props}) => {
    const [field, meta] = useField(props);
    const [show,setShow] = useState(false);

    return(
        <div style={{position :"relative"}}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            
            {props.type !=="password" && 
            <StyledInput
            invalid={meta.touched && meta.error}
            {...field}
            {...props}
            />
            }
            {props.type === "password" && (
                <StyledInput
                invalid={meta.touched && meta.error}
                {...field}{...props}
                type={show ? "text" : "password"}
                />
            )}

            <StyledIcon>{icon}</StyledIcon>
            {
                props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <IoMdEye/> }
                    {!show && <IoMdEyeOff/> }
                </StyledIcon>
                )}
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visibility:"hidden"}}></ErrorMsg>
            )}
        </div>
    )
}

