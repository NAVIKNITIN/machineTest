import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "../component/info";
import DropDown from "../component/Dropdown";
import Loader from "../component/layouts/Loader";
import { Alert } from "react-bootstrap";

const HomePage = () => {
	const [data, setdata] = useState([]);
	const [text, settext] = useState("");
	const [err, seterr] = useState("");
	const [loading, setloading] = useState(true);

	useEffect(() => {
		axios
			.get("http://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				setdata(res.data.slice(0, 10));
				setloading(false);
			})
			.catch((err) => {
				err.response && err.response.data.message
					? seterr(err.response.data.message)
					: seterr(err.message);

				setloading(false);
			});
	}, []);

	return (
		<div className="container">
			<br />
			{loading && <Loader />}
			{err && <Alert variant="danger">{err}</Alert>}
			<br />
			<DropDown data={data} settext={settext} />
			<br />
			<br />
			<br />
			<Info text={text ? text : "Select From DropDown To Display Text"} />
		</div>
	);
};

export default HomePage;
 