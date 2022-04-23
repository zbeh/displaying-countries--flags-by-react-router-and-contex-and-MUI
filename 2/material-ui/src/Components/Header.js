import React, { useContext ,useState,useEffect} from "react";
import {AppBar,Toolbar,Typography,IconButton,Fab,Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { SkillContext } from "../Context/SkillProvider";
export default function Header() {
    const {user} = useContext(AuthContext)
    const { skill ,setSkill } = useContext(SkillContext);
    const length = skill.length+1
    console.log(length);
    const [open, setOpen] = useState(false);
    const [skills,setSkills]= useState([])
    const [newSkill,setNewSkill]= useState({
      id:length
    })
   
    const uniqueSkills =['Web Design','Front-end','Beack-end']

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSkill(pre=>([...pre,newSkill]))
    };
    console.log(skill);
    const handleChange = (e) =>{
      const value = e.target.value
      setNewSkill({...newSkill,[e.target.name]:value})
    }
    console.log(newSkill);
  return (
      <>
      <div>
        <AppBar >
            <Toolbar sx={{display:"flex" ,justifyContent:"space-between"}}>
                <IconButton>
                    <MenuIcon  sx={{color:"white"}}/>
                </IconButton>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                    <Typography>my skills within</Typography>
                    Material UI
                </Typography>
                 <div>
                 <NavLink style={{textDecoration:"none" , color:"inherit" , padding:"0 1rem"}} to="/dashboard"> 
                    Dashboard
                 </NavLink>
                  {!user && 
                      <NavLink style={{textDecoration:"none" , color:"inherit",padding:"0 1rem"}} to="/login"> 
                          Login
                      </NavLink>
                    }
                  <Fab sx={{backgroundColor:'orange'}}aria-label="add" onClick={handleClickOpen}>
                    <AddIcon/>
                  </Fab>
                 </div>
                
            </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a New Skills</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please fill out the form below.
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Title"
            type="text"
            variant="standard"
            onChange={handleChange}
            name="title"
          />
          <br/>
          <TextField name="skills" select  defaultValue={uniqueSkills}  variant="standard" sx={{width:"200px" , marginTop:"1rem"}} label="skills" onChange={handleChange} >
                {uniqueSkills.map((option) => (
                    <MenuItem key={option.id} value={option} >
                        {option}
                    </MenuItem>
                ))}
          </TextField>
          <br/>

          <TextField
            autoFocus
            id="name"
            label="Description"
            type="text"
            name="description"
            variant="standard"
            sx={{padding:"3rem 0", marginTop:".5rem"}}
            onChange={handleChange}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{marginRight:"10rem"}}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
    <Outlet />
      </>
    
  )
}
