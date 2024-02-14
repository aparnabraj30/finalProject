import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import SignIn from "./components/login/Login"


function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/login' component={SignIn} />
        {/* </Switch> */}
      </Router>
    </>
  )
}


export default App
