import React,{ useState } from "react";

function App() {

  const [user,setUser]=useState("");
  const [pwd,setPwd]=useState("");
  const [msg,setMsg]=useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!user || !pwd){
      alert("Please fill out this field");
    }else if(user ==="user" && pwd==="password"){
        setMsg("Welcome, user")
    }else if(user !=="user" || pwd !== "password"){
      setMsg("Invalid username or password")
    }

  }

  return (
    <div className="App">
        <h1>Login Page</h1>
        {msg===""?
        (<form>
        <label>Username</label>
        <input type="text" value={user}
        onChange={(e)=> setUser(e.target.value)}/>
        <br/>
        <label>Password</label>
        <input type="password" value={pwd}
        onChange={(e)=> setPwd(e.target.value)}/>
        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>) :
         (<h4>{msg}</h4>)}
        
    </div>
  );
}

export default App;
