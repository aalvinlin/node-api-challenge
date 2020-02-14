import React, {useState, useEffect} from "react";
import axios from "axios";

const App = () => {

  const [allProjects, setAllProjects] = useState([]);
  const [allActions, setAllActions] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/actions")
      .then(response => {
        setAllActions(response.data);
      })
      .catch(error => {
        console.log("error geting all actions", error)
      });

    axios.get("http://localhost:5000/api/projects")
      .then(response => {
        setAllProjects(response.data);
      })
      .catch(error => {
        console.log("error geting all projects", error)
      })


  }, [])

  return (
    <>
      <h1>React Project and Action database</h1>

      <div style={{display: "flex"}}>
        <div style={{width: "48%"}}>
          <h2>{allProjects.length} Projects</h2>
          {allProjects.map(project => {

            console.log(project);

            return (

              <div key={project.id}>
                <h3>#{project.id}: {project.name} ({project.completed ? "completed" : "not complete"})</h3>
                <p>{project.description}</p>
                {project.actions && project.actions.length > 0 ?
                  <div>
                    <h3>{project.actions.length} actions</h3>

                    
                  </div>
                  : "" }
                <hr />
              </div>

            )
          })}
        </div>
        <div style={{width: "48%"}}>
          <h2>{allActions.length} Actions</h2>

          {allActions.map(action => {
            
            return (
              <div key={"action" + action.id}>

                <h3>{action.description} ({action.completed ? "completed" : "not complete"})</h3>
                <p>{action.notes}</p>
                <hr />

              </div>
            )
            })}
        </div>
      </div>
    </>
  );

}

export default App;