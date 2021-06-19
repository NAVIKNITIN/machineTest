import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing Components
// 
import HomePage from "./component/Home";
import NavBar from "./component/Navbar";
import PrivateRoute from "./component/PrivateRoute";
import UserContext from "./contextstorage/userContext";
import Login from "./component/Login";
import SignUp from "./component/Register";
import Task from "./component/task";
import User from "./component/user";
// 

function App() {
	return (
		<UserContext>
			<Router>
				<NavBar />
				<Container>
					<Switch>
						<PrivateRoute exact path="/" component={HomePage} />
						<PrivateRoute path="/tasks" component={Task} />
						<PrivateRoute path="/user" component={User} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} /> 
					</Switch>
				</Container>
			</Router>
		</UserContext>
	);
}

export default App;
