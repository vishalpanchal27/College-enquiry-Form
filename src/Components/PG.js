import React,{useState} from "react"
// import {Link} from "react-router-dom"
export default function PG(props) {
    const [totalMarks,setTotalMarks]=useState("")
    const [obtainedMarks,setObtainedMarks]=useState("")
    const [selectUniversity,setSelectUniversity]=useState("")
    const [universityNamePlaceholder,setUniversityNamePlaceholder]=useState("Enter Name of your Graduation University")
    const [age,setAge]=useState("")
    const [graduationCourse,setGraduationCourse]=useState("")
    const [marksSystem,setMarksSystem]=useState("Percentage")
    const [gender,setGender]=useState("")
    const handleGender=(event)=>{
        setGender(event.target.value)
    }
    const handleGraduationCourse=(event)=>{
        setGraduationCourse(event.target.value)
    }
    const handleUniversityNamePlaceholder=(event)=>{
        setUniversityNamePlaceholder(event.target.value);
        setMarksSystem(event.target.value);
    }
    const handleSelectUniversity=(event)=>{
        setSelectUniversity(event.target.value)
    }
    const handleAge=(event)=>{
        setAge(event.target.value)
    } 
    const handleTotal=(event)=>{
        setTotalMarks(event.target.value)
    }
    const handleObtained=(event)=>{
        setObtainedMarks(event.target.value)
    }

    const toggleSelectUniversity=()=>{
        if(selectUniversity==="DAVV University")
        {
            setUniversityNamePlaceholder(selectUniversity)
            setMarksSystem("Percentage")
            setTotalMarks("")
        }
        else if(selectUniversity==="RGPV University")
        {
            setUniversityNamePlaceholder(selectUniversity)
            setMarksSystem("SGPA")
            setTotalMarks("10")
        }
        else{
            setUniversityNamePlaceholder("Enter Name of your Graduation University")
            setMarksSystem("Percentage")
            setTotalMarks("")
        }
    }

    const toggleSubmit=()=>{
        if(age==="")
        {
            setAge("")
        }
        else if(age<=21||age>=30)
        {
            alert("Your age must be between 21 to 30")
        }
        if(gender==="")
        {
            alert("Yor Forget To Fill Your Gender Information")
        }
        if(selectUniversity==="RGPV University")
        {
            if(obtainedMarks==="")
            {
                setObtainedMarks("");
            }
            else if(obtainedMarks<3.5||obtainedMarks>10)
            {
                alert("your SGPA must be between 3 to 10")
            }
        }
        if(selectUniversity==="DAVV University"||selectUniversity==="Other University")
        {
            if(obtainedMarks===""&&totalMarks==="")
            {
                setTotalMarks("")
                setObtainedMarks("")
            }
            else if(totalMarks<=obtainedMarks)
            {
                alert("You Entered obtained marks greated then your total marks")
            }
        }
    }
    return (
        <>
            <div className="container">
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

                            <input type="text"  onChange={handleAge} value={age} className="form-control no-spinners" placeholder="Age" aria-label="First name"/>
                        </div>
                        <div className="col float-start my-3">
                            <p className="fs-5">Gender <span style={{ color: "red" }}>*</span></p>
                            <div className="form-check" value={gender} onChange={handleGender} >
                                <label className="form-check-label mx-4" htmlFor="flexRadioDefaultMale">
                                    <input className="form-check-input" value="male"  type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
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

                    <div className="row fs-9 float-end my-4" id="SelectBoard" >
                        <div className="colalign-items-center">
                            <p className="m-0">Select Your Under Graduation University <span style={{ color: "red" }}>*</span></p>
                            <select name="Board" className="float-end fs-6 ms-3" onClick={toggleSelectUniversity} value={selectUniversity} onChange={handleSelectUniversity}>
                                <option value="Select">Select your University</option>
                                <option value="DAVV University">DAVV University</option>
                                <option value="RGPV University">RGPV University</option>
                                <option value="Other University">Other University</option>
                            </select>
                        </div>
                    </div>

                    <div className="clearfix" style={{ width: "250", margin: "0" }}>
                        <div className={`row col-1 col-md-9 float-start my-4`}>
                            <div className={`col `}>
                                <p className="float-end"  >University<span style={{ color: "red" }}>*</span></p>
                                <input type="text" className="form-control" disabled={selectUniversity==="DAVV University"||selectUniversity==="RGPV University"} onChange={handleUniversityNamePlaceholder} placeholder={universityNamePlaceholder} aria-label="First name" />
                            </div>

                            <div className="col">
                                <p className="float-end w-100 text-end">Select your Course Name <span style={{ color: "red" }}>*</span></p>
                                <select name="Board" className="float-end fs-6" value={graduationCourse} onChange={handleGraduationCourse} >
                                    <option value="">Select your Course Name</option>
                                    <option value="B.tech">B.tech</option>
                                    <option value="B.E">B.E</option>
                                    <option value="B.Com">B.Com</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Sc">B.Sc</option>
                                    <option value="Arts">Arts</option>
                                    <option value="B.pharma">B.pharma</option>
                                    <option value="B.pharmacy">B.pharmacy</option>
                                    <option value="BBA">BBA</option>
                                    <option value="BFA">BFA</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="float-end" >Total {marksSystem}<span style={{ color: "red" }}>*</span></p>
                            <input type="text" disabled={selectUniversity==="RGPV University"} value={totalMarks} onChange={handleTotal} className="form-control" placeholder={`Enter your ${graduationCourse} total ${marksSystem}`} aria-label="First name" />
                        </div>
                        <div className="col">
                            <p className="float-end" >Obtained {marksSystem} <span style={{ color: "red" }}>*</span></p>
                            <input type="text" value={obtainedMarks} onChange={handleObtained} className="form-control"  placeholder={`Enter your ${graduationCourse} Obtained ${marksSystem}`} aria-label="First name" />
                        </div>
                    </div>

                    <div>
                        <p className="float-end my-3">Select Course <span style={{ color: "red" }}>*</span></p>
                        <select className="form-select" aria-label="Default select example">
                            <option>Select your intersted course</option>
                            <option value="1">M.tech</option>
                            <option value="2">M.E</option>
                            <option value="3">M.Com</option>
                            <option value="4">BCA</option>
                            <option value="5">M.Sc</option>
                            <option value="6">Arts</option>
                            <option value="7">M.pharma</option>
                            <option value="8">M.pharmacy</option>
                            <option value="9">MBA</option>
                            <option value="0">MFA</option>
                        </select>
                    </div>

                    {/* <Link to="/Submit" >  */}
                    <button style={{background:"linear-gradient(to right,blue,red)",transform:"scale(x)"}}  onClick={toggleSubmit} id="element"  type="button" className="btn btn-primary my-5">Submit</button>
                    {/* </Link> */}
                </div>

            </div>
        </>
    )
}