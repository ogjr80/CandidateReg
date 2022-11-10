import React from 'react'; 
import './styles.css'; 
import {
    Typography, 
    Button, 
    Grid,
    Checkbox,
    TextField, 
    OutlineInput, 
    FormControl,
    InputLabel
} from '@mui/material';


const Biography = ()=> {
    return (
        <div className=".bioContainer">
            <h2>Biography</h2>
            <div className=".bioForm"> 
                <form>
                    <TextField 
                    // style={{width:"100%", margin: "1rem 0"}}
                    label="Title"
                    variant="outlined"
                    />
                    <br/> 
                    <br /> 
                    <TextField
                    label="First Name"
                    variant="outlined"
                    /> 
                    <br />
                    <br /> 
                    <TextField
                    label="Last Name"
                    variant="outlined"
                    /> 
                    <br />
                    <br /> 
                    <TextField
                    label="Middle Name"
                    variant="outlined"
                    /> 
                    <br />
                    <br /> 
                    <TextField
                    label="Date Of Birth"
                    variant="outlined"
                    /> 
                </form>
            </div>
        </div> 
    )
}

export default Biography; 
