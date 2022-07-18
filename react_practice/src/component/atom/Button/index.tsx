import React, { ChangeEventHandler, Children, KeyboardEventHandler, MouseEventHandler } from "react"
import MuiButton from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';



interface IButton {
    variant?: 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
    onClick? : MouseEventHandler<HTMLButtonElement>;
    onKeyPress? : KeyboardEventHandler<HTMLButtonElement>;
    children? : React.ReactNode;
    label?:String;
    startIcon? : React.ReactNode;
    endIcon? : React.ReactNode;

}

function Button(props: IButton): JSX.Element {
  
  const {variant,size,color,onClick,onKeyPress,children,label,startIcon,endIcon} = props;
  const ButtonType ="button" ;

  return (
    <>
    {
        {
            button :<MuiButton variant={variant} 
                                size = {size}
                                color = {color}
                                onClick = {onClick}
                                onKeyPress={onKeyPress}
                                startIcon = {startIcon}
                                endIcon = {endIcon}>
                        {label}
                    </MuiButton>,
            iconButton :<IconButton size = {size}>
                            {children}
                        </IconButton>,
            lodingButton :  <LoadingButton loading
                                            startIcon = {startIcon}
                                            endIcon = {endIcon}>
s
                            </LoadingButton>
        }[ButtonType]
    }
    </>
  )
}

export default Button;