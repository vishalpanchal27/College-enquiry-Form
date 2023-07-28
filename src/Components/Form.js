import React from "react"
import SwitchUGPG from "./SwitchUGPG"
// import Nope from "./Nope"
import UG from "./UG"
import PG from "./PG"
// import Submit from "./Submit"
import { BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"


export default function Form(props) {
   

        return (
        <>
        <Router>
          <div>
                <SwitchUGPG  />
            <Routes>
              <Route exact path="/UG" element={<>
                <UG />
              </>} />
              <Route exact path="/PG" element={<>
                {/* <SwitchUGPG /> */}
                <PG />
              </>} />
              {/* <Route exact path="/Submit" element={<Submit  />}  /> */}
            </Routes>
          </div>
        </Router>
      </>
      
    )
}