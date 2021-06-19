import React, { useState, useEffect } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import axios from "axios";
import ADD from "./add";
import Loader from "../component/layouts/Loader";

const Task = () => {
	const [err, seterr] = useState("");
	const [loading, setloading] = useState(true);

	//rerender flag
	const [value, setValue] = useState(0);

	//for Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//on Submitting(Adding Via Modal) task
	const handleSubmit = (e, task) => {
		e.preventDefault();
		task = task.trim();
		let taskData = JSON.parse(localStorage.getItem("tasks"))
			? JSON.parse(localStorage.getItem("tasks"))
			: [];
		let tasks = [];
		if (taskData) {
			tasks = [...taskData];
		}
		tasks.push({
			completed: false,
			title: task,
			id: Math.floor(Math.random() * 200 + 10),
		});

		//set tasks in local storage
		localStorage.setItem("tasks", JSON.stringify(tasks));
		handleClose();

		//set rerender
		setValue((value) => value + 1);
	};

	const deleteTask = (id) => {
		if (window.confirm("Are you sure?")) {
			let taskData = JSON.parse(localStorage.getItem("tasks"))
				? JSON.parse(localStorage.getItem("tasks"))
				: [];
			//filter out
			taskData = taskData.filter(
				(tdata) => tdata.id !== id
			);
			//set tasks in local storage
			localStorage.setItem("tasks", JSON.stringify(taskData));
			alert("Task Deleted!");

			//set rerender
			setValue((value) => value + 1);
		}
	};

	useEffect(() => {
		//if local storage has no data then
		if (
			!JSON.parse(localStorage.getItem("tasks")) ||
			!JSON.parse(localStorage.getItem("tasks")).length
		) {
			axios
				.get("http://jsonplaceholder.typicode.com/todos")
				.then((res) => {
					localStorage.setItem("tasks", JSON.stringify(res.data.slice(0, 10)));
					setloading(false);
				})
				.catch((err) => {
					err.response && err.response.data.message
						? seterr(err.response.data.message)
						: seterr(err.message);

					setloading(false);
				});
		}
		setloading(false);
	}, [value]);

	return (
		<div className="w-100" style={{ maxWidth: "1000px" }}>
			{loading && <Loader />}
			{err && <Alert variant="danger">{err}</Alert>}
			<Table hover>
				<tbody>
					{JSON.parse(localStorage.getItem("tasks")) &&
					JSON.parse(localStorage.getItem("tasks")).length ? (
						JSON.parse(localStorage.getItem("tasks")).map((item) => (
							
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.completed.toString()}</td>
								<td>
									<Button variant="danger" onClick={() => deleteTask(item.id)}>
										Delete
									</Button>
								</td>
							</tr>
						))
					) : (
						<tr colSpan={4}>
							<td>No Data Found!</td>
						</tr>
					)}
				</tbody>
			</Table>
			<Button onClick={handleShow} variant="primary">
				Add Task
			</Button>
			<ADD
				show={show}
				handleClose={handleClose}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default Task;
