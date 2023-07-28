import React, { useState } from "react"
// import {Link} from "react-router-dom"
export default function UG(props) {
    const [age, setAge] = useState("") // value={age}
    const [Board, setBoard] = useState("Select") // value={Board}
    const [marks, setMarks] = useState("Percentage"); // value={marks}
    const [placeholder, setPlaceholder] = useState("Enter Your 12th Percentage"); // placeholder
    const [boardPlaceholder,setBoardPlaceholder]=useState("Enter Name of 12th Board") //boardPlaceholder
    const [compPlaceholder, setCompPlaceholder]=useState("percentile") // 
    const [percent,setPercent]=useState("")// value={percent}
    const [percentile,setPercentile]=useState("") // value={percentile}
    const [selectCourse,setSelectCourse]=useState("Select your interested Course") // value
    const [enterBoardName,setEnterBoardName]=useState("") // value
    const [gender,setGender]=useState("") // value
    const handleGender=(event)=>{
        setGender(event.target.value)
    }
    const handleEnterBoardName=(event)=>{
        if(Board==="MP Board"||Board==="CBSE Board")
        {
            return 0;
        }
        setEnterBoardName(event.target.value)
    }
    const handleSelectCourse=(event)=>{
        setSelectCourse(event.target.value)
    }
    const handlePercent=(event)=>{
        setPercent(event.target.value)
    }
    const handleOnChange = (event) => {
        setAge(event.target.value);
    }
    const handleOnChangeBoard = (board) => {
        setBoard(board.target.value);
    }
    const handleMarks = (m) => {
        setMarks(m.target.value);
    }
   const handleCompPercentile=(e)=>{
        setCompPlaceholder(e.target.value)
        setPercentile(e.target.value)
    } 
    const toggleSelect = () => {
        if (Board === "MP Board") {
            setMarks("Percentage")
            setPlaceholder("Enter your 12th Percentage");
            setBoardPlaceholder("MP Board")
            // return true;
        }
        else if (Board === "CBSE Board") {
            setMarks("CGPA")
            setPlaceholder("Enter your 12th CGPA")
            setBoardPlaceholder("CBSE Board")
            // return true;
        }
        else {
            setMarks("Percentage")
            setPlaceholder("Enter your 12th Percentage")
            setBoardPlaceholder("Enter Name of 12th Board");
            // return false;
        }

    }
    const toggleSelectComp=(event)=>{
        switch(event.target.value){
            case "JEE":
                 setCompPlaceholder("Enter Your JEE Percentile");
            break;
            case "NEET" : 
            setCompPlaceholder("Enter Your NEET Percentile");
            break;
            case "None" :
                 setCompPlaceholder("None");
            break;
            default : 
                setCompPlaceholder("None");
            break;
        }
    }

    // const handleClick = (event) => {
    //     if (event.target.value === "JEE") {
    //       setPlaceholderText("Enter your JEE details");
    //     } else if (event.target.value === "NEET") {
    //       setPlaceholderText("Enter your NEET details");
    //     } else {
    //       setPlaceholderText("");
    //     }
    //   } it is easy with the help switch as compare to if else

    
   
    const toggleSubmit = () => {
        
        if(age==="")
        {
            setAge("")
        }
        else if (age >= 25 || age <= 17 ) {
            let age = "";
            alert("Age must be between 17-25");
            setAge(age);
        }
        if(gender==="")
        {
            alert("You Forget To Fill Your Gender Information")
        }        
        if(marks==="Percentage")
        {
            if(percent==="")
            {
                setPercent("")
            }
          else if(percent<=33||percent>=100||percent==="")
            {
                setPercent("");
                setPlaceholder("Enter Valid Percentage");
                alert("percentage must be between 33-100");
            }
        }
        if(marks==="CGPA")
        {
           if(percent==="")
           {
            setPercent("")
           }
           else if(percent<=3||percent>=10)
            {
                setPercent("")
                setPlaceholder("Enter valid CGPA");
                alert("CGPA must be between 3-10")
            }
        }

            if(percentile==="")
            {
                setPercentile("")
            }
           else if(percentile<=33||percentile>=100)
            {
                
                alert("Your Compititive percentile should be between 33-100")
            
            }
}

    return (
        <>
            <div className="container my-5" id="mainContainer">
                <h1 className="mb-5" >College Allotment Form</h1>
                <div className="row gx-5">
                    <div className="col">
                        <p className="float-end">Name <span style={{ color: "red" }}>*</span></p>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                        <p className="float-end">Middle Name <span style={{ color: "red" }}>*</span></p>
                        <input type="text" className="form-control" placeholder="Middle Name" aria-label="First name" />
                    </div>
                    <div className="col">
                        <p className="float-end">Surname <span style={{ color: "red" }}>*</span></p>
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col my-2">
                        <p className="float-end">Age <span style={{ color: "red" }}>*</span></p>

                        <input type="text" className="form-control" placeholder="Age" aria-label="First name" value={age} onChange={handleOnChange} />
                    </div>
                    <div className="col float-start my-2">
                        <p className="fs-5">Gender <span style={{ color: "red" }}>*</span></p>
                        <div className="form-check" value={gender} onChange={handleGender} >
                            <label className="form-check-label mx-4" htmlFor="flexRadioDefaultMale">
                                <input className="form-check-input" value="male" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                Male
                            </label>
                            <label className="form-check-label mx-4" htmlFor="flexRadioDefaultFemale">
                                <input className="form-check-input" value="female" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                Female
                            </label>
                            <label className="form-check-label mx-4" htmlFor="flexRadioDefaultOther">
                                <input className="form-check-input" value="other" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                Other
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row fs-5 float-end my-4" id="SelectBoard" >
                    <div className="col">
                        <p>  Select Your 12<sup>th</sup> Board <span style={{ color: "red" }}>*</span></p>
                        <select name="Board" onClick={toggleSelect} value={Board} onChange={handleOnChangeBoard} className="float-end fs-6">
                            <option value="Select">Select</option>
                            <option value="MP Board">MP Board</option>
                            <option value="CBSE Board">CBSE Board</option>
                            <option value="Other Board">Other Board</option>
                        </select>
                    </div>
                </div>
                <div className="clearfix" style={{ width: "250", margin: "0" }}>
                    <div className={`row col-1 col-md-9 float-start my-4`}>
                        <div className={`col` }  > 
                            <p className="float-end" value={enterBoardName} onChange={handleEnterBoardName} >Board<span style={{ color: "red" }}>*</span></p>
                            <input type="text"  disabled={Board==="MP Board"||Board==="CBSE Board"}  className="form-control" placeholder={boardPlaceholder} aria-label="First name" />
                        </div>
                        <div className="col">
                            <p className="float-end" value={marks} onChange={handleMarks}>{marks}<span style={{ color: "red" }}>*</span></p>
                            <input type="text" className="form-control"  onChange={handlePercent} value={percent}  placeholder={placeholder} aria-label="First name" />
                        </div>
                    </div>
                </div>

                <div className="form-check my-4 float-end">
                    <p className="fs-5">Select Your Compititive Exam <span style={{ color: "red" }}>*</span></p>
                    <label className="form-check-label mx-4" htmlFor="flexRadioDefaultJEE">
                        <input className="form-check-input" type="radio" value="JEE" onClick={toggleSelectComp} name="CompititiveExam" id="flexRadioDefault1"  />
                        JEE
                    </label>
                    <label className="form-check-label mx-4" htmlFor="flexRadioDefaultNEET">
                        <input className="form-check-input" type="radio" value="NEET" onClick={toggleSelectComp} name="CompititiveExam" id="flexRadioDefault2" />
                        NEET
                    </label>
                    <label className="form-check-label mx-4" htmlFor="flexRadioDefaultNone">
                        <input className="form-check-input" type="radio" value="None" onClick={toggleSelectComp} name="CompititiveExam" id="flexRadioDefault3" />
                        None
                    </label>
                </div>

                <div className={`clearfix `}  style={{ width: "250", margin: "0"  }}>
                    <div className="row col-1 col-md-9 float-start my-4"  >
                        <div className="col">
                            <p className={`float-end `}>Percentile<span style={{ color: "red" }}>*</span></p>
                            <input type="text" disabled={compPlaceholder==="None"} className="form-control"  placeholder={compPlaceholder} value={percentile} onChange={handleCompPercentile} aria-label="First name" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="float-end">Select Course <span style={{ color: "red" }}>*</span></p>
                    <select className="form-select" value={selectCourse} onChange={handleSelectCourse} aria-label="Default select example">
                        <option>Select your intersted course</option>
                        <option value="B.tech">B.tech</option>
                        <option value="B.E">B.E</option>
                        <option value="B.Com">B.Com</option>
                        <option value="BCA">BCA</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="Arts">Arts</option>
                        <option value="B.pharma">B.pharma</option>
                        <option value="B.pharmacy">B.pharmacy</option>
                        <option value="BBA9">BBA</option>
                        <option value="BFA">BFA</option>
                    </select>
                </div>


                {/* <Link to="/Submit" >  */}
                    <button style={{background:"linear-gradient(to right,blue,red)" ,transform:"scale(x)"}}  onClick={toggleSubmit} id="element"  type="button" className="btn btn-primary my-5">Submit</button>
                    {/* </Link> */}
            </div>
        </>
    )
}