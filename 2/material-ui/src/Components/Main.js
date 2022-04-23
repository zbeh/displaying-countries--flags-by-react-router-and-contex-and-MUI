import React, { useContext, useEffect, useState } from "react";
import { SkillContext } from "../Context/SkillProvider";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tab,
  Box,
} from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Item from "./Item";
export default function Main() {
  let arr;
  const { skill, setSkill } = useContext(SkillContext);
  const { editItem, setEditItem } = useContext(SkillContext);
  const [value, setValue] = useState("All");
  console.log(skill);
  const [edit, setEdit] = useState(false);
  console.log(skill);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  if (value === "Web Design") {
    arr = skill.filter((i) => i.skills === value);
  }
  if (value === "Front-End") {
    arr = skill.filter((i) => i.skills === value);
  }
  if (value === "Back-End") {
    arr = skill.filter((i) => i.skills === value);
  }
  console.log(value);
  console.log(arr);

  return (
    <div style={{ marginTop: "5rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <Paper sx={{ padding: "1rem" }}>
            {value === "All"
              ? skill?.map((item) => (
                  <div>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "balck",
                        fontWeight: "bolder",
                        fontSize: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      {item.skills}
                    </Typography>
                    <List
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItem>
                        <ListItemText primary={item.title} />
                      </ListItem>
                      <EditIcon
                        onClick={() => {
                          const isEdit = skill.find((i) => i.id == item.id);
                          setEditItem(isEdit);
                          setEdit(true);
                          const editting = skill.filter(
                            (i) => i.id !== item.id
                          );
                          setSkill(editting);
                        }}
                      />
                      <DeleteIcon
                        onClick={() => {
                          const filteredItems = skill.filter(
                            (x) => x.id !== item.id
                          );
                          setSkill([...filteredItems]);
                        }}
                      />
                    </List>
                  </div>
                ))
              : arr.map((item) => (
                  <div>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "balck",
                        fontWeight: "bolder",
                        fontSize: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      {item.skills}
                    </Typography>
                    <List
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItem>
                        <ListItemText primary={item.title} />
                      </ListItem>
                      {/* <EditIcon onClick={()=>{
                                        const isEdit  = skill.find((i)=>i.id==item.id)
                                        setEditItem(isEdit);
                                        setEdit(true)
                                        const editting = skill.filter(i=>i.id!==item.id)
                                        setSkill(editting)
                                    }}/>
                                    <DeleteIcon  onClick={() => {
                                        const filteredItems = skill.filter((x) => x.id !==item.id);
                                        setSkill([...filteredItems]);
                                    }}/> */}
                    </List>
                  </div>
                ))}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ padding: "1rem", height: "85vh", textAlign: "center" }}>
            {edit ? (
              <Item />
            ) : (
              <Typography
                variant="h4"
                sx={{
                  color: "balck",
                  fontWeight: "bolder",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "4rem",
                }}
              >
                Welcome!
                <Typography>
                  Please select an exercise from the list on the left side.
                </Typography>
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
      <div
        style={{
          width: "40%",
          margin: "auto",
          textAlign: "center",
          paddingBottom: "2rem",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="All" value="All" />
              <Tab label="Web Design" value="Web Design" />
              <Tab label="Front-End" value="Front-End" />
              <Tab label="Back-End" value="Back-End" />
            </TabList>
          </Box>
        </TabContext>
      </div>
    </div>
  );
}
