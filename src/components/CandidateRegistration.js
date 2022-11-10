import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Biography from "./Biography";
import Education from "./Education";
import Resume from "./Resume"; 
import Project from "./Project"; 

import './styles.css'; 


const CandidateRegistration = () => {
    
    const [activeStep, setActiveStep]= useState(0); 
    
    function getSteps() {
        return ["Biography", "Education", "Resume", "Project" ];
    }

    const handleNext = () => {
        setActiveStep(activeStep => activeStep+1); 
    }

    const steps = getSteps(); 
    // const useStyles = makeStyles({
    //     root: {
    //         width: "50%",
    //         margin: "6rem auto",
    //         border: "1px solid #999", 
    //     }
    // }); 

    function getStepsContent(stepsindex){
        switch(stepsindex){
            case 0:
                return <Biography/>
            case 1:
                return <Education/>
            case 2:
                return <Resume/>
            case 3:
                return <Project /> 
            case "default" : 
                return "Unknown Steps"
            
        }
    }

    return (
        <div className="container">
            <h2>Candidate Onboarding</h2>
            <Stepper alternativeLabel activeStep={activeStep}> 
                {
                    steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            {activeStep === steps.length ? "Onboarding Completed" : (
                <>
                {getStepsContent(activeStep)}
                <Button onClick={handleNext}>
                    {activeStep === steps.length ? "Finish": "Next"}
                </Button>
                </>
            )}
            
        </div>
    )
}

export default CandidateRegistration; 
