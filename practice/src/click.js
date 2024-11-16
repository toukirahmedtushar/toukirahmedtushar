
function Football(){
    const short = () =>{
        alert('Great short');
    }
    const lathi = (a) =>{
        alert(a);
    }
    return(
        <div>
            <button onClick={short}>Take short</button>
            <button onClick={(a)=>lathi(["pasai",'jsdhdjshd'])}>lathi</button>
        </div>
    
    );
}

export default Football;