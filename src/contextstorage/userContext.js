import React, { useContext } from "react";
const UserContext = React.createContext();

const Auth = ({ children }) => {
	const currentUser = () => JSON.parse(localStorage.getItem("loginInfo"));

	const register = (email, pass) => {
		localStorage.setItem("loginInfo", JSON.stringify({ email, pass }));
		return true;
	};

	const login = (email, pass) => {
		if (!currentUser()) {
			return false;
		}
		if (currentUser().email === email && currentUser().pass === pass) {
			localStorage.setItem(
				"loginInfo",
				JSON.stringify({ ...currentUser(), isLoggedIn: true })
			);
			return true;
		}
		return false;
	};

	const logOut = () =>
		localStorage.setItem(
			"loginInfo",
			JSON.stringify({ ...currentUser(), isLoggedIn: false })
		);

	const changePassword = (pass) =>
		localStorage.setItem(
			"loginInfo",
			JSON.stringify({ ...currentUser(), pass: pass })
		);

	const value = {
		currentUser,
		register,
		login,
		logOut,
		changePassword,
	};

	return (
		<div>
			<UserContext.Provider value={value}>{children}</UserContext.Provider>
		</div>
	);
};

export const useAuth = () => useContext(UserContext);

export default Auth;
 