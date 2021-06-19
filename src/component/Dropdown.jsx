import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = ({ data, settext }) => {
	// console.log(data)
	// console.log(settext)
	const onClickHandler = (text) => {
		settext(text);
	};

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic" >
				Select to display title any title in the list
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{data.length &&
					data.map((item) => (
						<Dropdown.Item
							key={item.id}
							onClick={() => onClickHandler(item.title)}>
							{item.title}
						</Dropdown.Item>
					))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropDown;
