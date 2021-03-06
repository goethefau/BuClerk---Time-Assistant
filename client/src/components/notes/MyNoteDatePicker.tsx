import React from 'react';
import {DateTimePicker, DateTimePickerProps} from '@mui/lab';
import {InputAdornment, TextField, TextFieldProps, ThemeOptions} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useMyMenuStyles} from "../menu/MyMenuStyles";

const useDatePickerTextFieldStyles = makeStyles<ThemeOptions>((theme) => ({
    root: {
        '& label.Mui-focused': {},
        '& .MuiInput-underline:after': {},
        '& .MuiOutlinedInput-root': {
            height: 36,
            '& fieldset': {
                transition: "all 200ms",
                border: `1px solid ${theme.my.text_300}`
            },

            "&:hover fieldset": {
                border: `1px solid ${theme.my.accent}`
            },

            '&.Mui-focused fieldset': {
                border: `1px solid ${theme.my.accent}`
            },
        },
        "& .MuiOutlinedInput-input": {
            color: theme.my.text_500,
            fontFamily: "Rubik-Medium",
            fontSize:14,
            paddingTop: "12.5px",
            paddingBottom: "12.5px",
            paddingLeft: "14px",
            "&::placeholder": {
                color: theme.my.text_500,
            },
        },
    }
}))

const DatePickerTextField: React.FC<TextFieldProps> = (props) => {
    const classes = useDatePickerTextFieldStyles()

    return (
        <TextField {...props} classes={classes}/>
    )
}

interface Props extends Omit<DateTimePickerProps, "renderInput"> {

}

export const MyNoteDatePickerIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 4.01833C6.46047 4.04114 6.07192 4.09237 5.72883 4.20736C4.53947 4.60599 3.60599 5.53947 3.20736 6.72883C3 7.3475 3 8.11402 3 9.64706C3 9.74287 3 9.79078 3.01296 9.82945C3.03787 9.90378 3.09622 9.96213 3.17055 9.98704C3.20922 10 3.25713 10 3.35294 10H20.6471C20.7429 10 20.7908 10 20.8294 9.98704C20.9038 9.96213 20.9621 9.90378 20.987 9.82945C21 9.79078 21 9.74287 21 9.64706C21 8.11402 21 7.3475 20.7926 6.72883C20.394 5.53947 19.4605 4.60599 18.2712 4.20736C17.9281 4.09237 17.5395 4.04114 17 4.01833L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4H10L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.01833Z" fill="#7A8291"/>
            <path d="M3 11.5C3 11.2643 3 11.1464 3.07322 11.0732C3.14645 11 3.2643 11 3.5 11H20.5C20.7357 11 20.8536 11 20.9268 11.0732C21 11.1464 21 11.2643 21 11.5V12C21 15.7712 21 17.6569 19.8284 18.8284C18.6569 20 16.7712 20 13 20H11C7.22876 20 5.34315 20 4.17157 18.8284C3 17.6569 3 15.7712 3 12V11.5Z" fill="#7A8291" fillOpacity="0.25"/>
            <path d="M8.5 2.5L8.5 6.5" stroke="#7A8291" strokeLinecap="round"/>
            <path d="M15.5 2.5L15.5 6.5" stroke="#7A8291" strokeLinecap="round"/>
        </svg>
    )
}

const MyNoteDatePicker: React.FC<Props> = (props) => {
    return (
        <DateTimePicker
            {...props}
            components={{
                OpenPickerIcon: MyNoteDatePickerIcon
            }}
            renderInput={(params) => <DatePickerTextField {...params} />}
        />
    );
};

export default MyNoteDatePicker;