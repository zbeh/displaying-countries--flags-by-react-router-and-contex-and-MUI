import React, { useContext,useState,useEffect} from "react";
import { Paper,Input, InputLabel,TextField,MenuItem,Button } from "@mui/material"; 
import { SkillContext } from "../Context/SkillProvider";
export default function Item() {
  const { skill ,setSkill } = useContext(SkillContext);
  const {editItem}=useContext(SkillContext);
  console.log(editItem);
  const [description,setDescription]=useState()
  const [info,setInfo]= useState()
    const handleChange = (e)=>{
        const value=e.target.value;  
        setInfo({...info,[e.target.name]:value})
        const findTitle = skill.find((t)=>t.title === value)
        console.log(findTitle);
        setDescription(findTitle)
    }
    const handleSubmit = ()=>{
       const newItems=[...skill,info]
       console.log(newItems);
        setSkill(newItems)
    }
   console.log(description);
   console.log(info);
   const[skills, setSkills] = useState([])
   console.log(skills);
  
    useEffect(()=>{
     skill.map(s=>setSkills(skills=>[...skills, s.skills]))
    },[])
  let uniqueSkills = [...new Set(skills)];
  console.log(uniqueSkills);



  return (
        <div>
            <InputLabel>Title</InputLabel>
            <Input text name="title"  defaultValue={editItem.title} sx={{marginBottom:"1rem"}} onChange={handleChange}/>
            <InputLabel>Skills</InputLabel>
            <TextField name="skills" select defaultValue={editItem.skills}  onChange={handleChange}  variant="standard" sx={{width:"200px",marginBottom:"1rem"}}>
                {uniqueSkills.map((option) => (
                    <MenuItem key={option.id} value={option} >
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <InputLabel>Description</InputLabel>
            {description?
                <Input   defaultValue={description.description} sx={{marginBottom:"1rem",wordBreak:"break-all" , width:"200px"}} />
                :<Input value={editItem.description} sx={{marginBottom:"1rem",wordBreak:"break-all" , width:"200px"}} />
            }
             <div>
                <Button variant="text" sx={{fontWeight:"bold"}} onClick={handleSubmit} >Edit</Button> 
            </div>
                 
               
        </div>
    )
}






