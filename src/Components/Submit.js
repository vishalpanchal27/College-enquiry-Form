import React from "react"
export default function Submit(props) {
    return (
        <>
            <div className="Container my-5 ">
                <p className="fs-2">The top 10 college's are</p>
                <ul className="list-group">
                    {/* <li className="list-group-item disabled" aria-disabled="true">A disabled item</li> */}
                    <li className="list-group-item">college on Number 1 for </li>
                    <li className="list-group-item">college on Number 2 for </li>
                    <li className="list-group-item">college on Number 3 for </li>
                    <li className="list-group-item">college on Number 4 for </li>
                    <li className="list-group-item">college on Number 5 for </li>
                    <li className="list-group-item">college on Number 6 for </li>
                    <li className="list-group-item">college on Number 7 for </li>
                    <li className="list-group-item">college on Number 8 for </li>
                    <li className="list-group-item">college on Number 9 for </li>
                    <li className="list-group-item">college on Number 10 for </li>
                </ul>

            </div>
        </>
    )
}