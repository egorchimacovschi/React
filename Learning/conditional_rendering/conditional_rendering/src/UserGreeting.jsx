function UserGreeting(props){
    const userPrompt = <h2 className="wellcome-message">Welcome {props.name}</h2> ;
    const logginPrompt = <h2 className="loggin-prompt">Please log in</h2>;
    if(props.isLoggedIn){
        return (props.isLoggedIn ? userPrompt : logginPrompt);
    }
}

export default UserGreeting