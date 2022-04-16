import React from 'react';
import { useState } from 'react';
import { LocalizationProvider,DatePicker,MobileDatePicker } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Container, Stack,MenuItem,FormControl,Select,InputLabel, Typography, Button } from '@mui/material';
import { Box, height, width } from '@mui/system';
import { TextField } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';




const Namefield = () => {
  const [value, setValue] = React.useState(null);
  const [values, setValues] = React.useState(new Date());
  const [age, setAge] = React.useState('');
 
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      password: data.get('password'),
    });
  };

const Box1 ={

width:'80%',
height:'370px',
backgroundColor:'red'

}

    return (
        <>
        <Container >
          <Box sx={{display:'flex'}}>
        <Box style={Box1} name="1st box">


        </Box>

        <Box style={{height:"Box1.height",width:"20%",backgroundColor:"blue",flex:""}}  name="2nd box">


        </Box >

        
        </Box>

        {/* passanger details */}

        <Box  sx={{height:"684px",width:"80%",bgcolor:'green',display:'flex',flexDirection:'column'}}>

          <Stack direction="row"
  
  alignItems="center"
  spacing={2} name="1st stack" sx={{height:'56px',width:'100%',bgcolor:'#E5E5E5'}}>
        <BadgeIcon sx={{color:'rgba(0, 0, 0, 0.7)'}}/>
        <Typography variant='h6'
        style={{
          fontFamily:'Rubik',
          fontWeight:'bold',
          fontSize:'14px',
          color:'rgba(0, 0, 0, 0.7)'
          }}>Passenger Details
          </Typography>

        <Typography style={{
          color:'rgba(216, 70, 56, 0.7)',
          marginLeft:'30px',fontFamily:'Rubik',
          fontStyle:'italic',fontWeight:'bold',
          fontSize:'12px'}}
          >Specify the details as per the passport
          </Typography>


          </Stack>

          <Stack alignItems="center" direction="row" name="2nd stack" sx={{height:'60px',width:'100%',bgcolor:'yellow'}}>
        <h2 style={{size:'18px',fontFamily:'Rubik',fontWeight:'bold',padding:'10px'}}>Adult 1</h2>

    <Box sx={{display:'flex',alignItems:'center',marginLeft:'150px'}}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" label="Search traveller to autofill" variant="standard" />

    </Box>


    <TextField  id="standard-basic" label="Search traveller" variant="standard" />
    </Box>
          </Stack>

          <Stack sx={{minHeight:'566px',width:'678px',bgcolor:'yellowgreen',alignSelf:'end'}}>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <form action="" onSubmit={handleSubmit}>
            <Box
             
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="filled-textarea"
          label="First/Given name"
          placeholder="Type your first name"
          multiline
          variant="filled"
          name='firstName'
        />

<Button 
        variant='contained'
        type="submit" >
          SUBMIT
        </Button>
      
      </Box>
      </form>

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="filled-textarea"
          label="Last or sure name"
          placeholder="Type your last name"
          multiline
          variant="filled"
        />
      
      </Box>


            </Box>


            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <FormControl   variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          
        </Select>
      </FormControl>
      
{/* input date */}
      <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>

        <Stack component="form" spacing={4} sx={{width:'223px'}}>
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="day"
          views={['day', 'month', 'year']}
          value={values}
          onChange={(newValue) => {
            setValues(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>

      </LocalizationProvider>
      
      </Box>


            </Box>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="filled-textarea"
          label="First/Given name"
          placeholder="Type your first name"
          multiline
          variant="filled"
        />
      
      </Box>

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="filled-textarea"
          label="Last or sure name"
          placeholder="Type your last name"
          multiline
          variant="filled"
        />
        
      
      </Box>


            </Box>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="filled-textarea"
          label="First/Given name"
          placeholder="Type your first name"
          multiline
          variant="filled"
        />
      
      </Box>

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="filled-textarea"
          label="Last or sure name"
          placeholder="Type your last name"
          multiline
          variant="filled"
        />
      
      </Box>


            </Box>


          </Stack>


        </Box>
        

        </Container>
        
        </>
    );
}

export default Namefield;
