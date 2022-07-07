import React, { ChangeEventHandler, KeyboardEventHandler } from "react"
import MuiTextField from '@mui/material/TextField';

interface ITextField
{
    autoComplete? : string
    variant?: 'outlined' | 'filled' | 'standard';
    label? : string 
    type?: string 
    value? : string
    onChange? : ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onKeyPress? : KeyboardEventHandler<HTMLDivElement>
    name? :string 
    className?:string
    defaultValue?: 'Small' | 'Normal'
    error? : boolean

}

function TextField(props: ITextField): JSX.Element {
  
  const {variant,label,type,value,onChange,onKeyPress,...style } = props;

  return (
    <MuiTextField variant={props.variant} 
                  label={props.label} 
                  type={props.type} 
                  value={props.value} 
                  onChange={props.onChange} 
                  onKeyPress={props.onKeyPress}
                  {...style}
                  autoComplete={'off'} />
  )
}

export default TextField;