import { useState } from "react" ;

function DisplayName() {

    const [firstName , setFirstName] = useState('') ;
    const [lastName , setLastName] = useState('') ;
    const [combinedWord , setCombinedWord] = useState('') ;

    const handleFirstName = (event) => {
        setFirstName(event.target.value) ;
    }

    const handleLastName = (event) => {
        setLastName(event.target.value) ;
    }

    const handleSubmit = (event) => {
        event.preventDefault() ;
        setCombinedWord(`${firstName} ${lastName}`) ;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Full Name Display</h1>
                <label style={{display: "block", fontWeight: "bold"}}>First Name:
                    <input required value={firstName} onChange={handleFirstName} />
                </label>
                <label style={{display: "block" , fontWeight: "bold"}}>Last Name:
                    <input required value={lastName} onChange={handleLastName} />
                </label>
                <button>Submit</button>
            </form> 
            <p>Full Name: {combinedWord}</p>
        </div>
    ) ;
} ;

export default DisplayName ;