import React, { useEffect } from "react";

const HomePage = () => {
	useEffect(() => {
		fetch("http://localhost:3000/api/todos")
			.then((res) => (res.ok ? res.json() : Promise.reject()))
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
		return () => {};
	}, []);

	return (
		<>
			<div>hello</div>
		</>
	);
};

export default HomePage;
