import Todo from "~/model/todos";

//get request -> to read all the records
export const getUser = async (req, res) => {
	const all_todo = await Todo.find({});
	return res.status(200).json({ all_todo });
};

export const getUserById = async (req, res) => {
	try {
		const { userId } = req.query;

		if (userId) {
			const user = await Todo.findById(userId);
			return res.status(200).json(user);
		} else {
			return res.status(404).json({ error: "User not selected" });
		}
	} catch (error) {
		return res.status(404).send("User not selected");
	}
};

//post request -> To Create A New Record
export const postUser = async (req, res) => {
	try {
		const formData = JSON.parse(req.body);

		if (!formData) return res.status(404).json({ error: "Form data not set" });
		await Todo.create(formData, (err, data) => {
			return res.status(200).json(data);
		});
	} catch (err) {
		console.log(err);
	}
};

//put request -> to update a new record
//to update a particular record we need a id to be updated
//here we are taking the id with the help of the query or params
//we can also get the id from the help of the req.body
export const putUser = async (req, res) => {
	try {
		const { userId } = req.query;
		const formData = JSON.parse(req.body);

		if (userId && formData) {
			const user = await Todo.findByIdAndUpdate(userId, formData, { new: true }); //we have to give the new:true so we will get the updated object
			return res.status(200).json(user);
		} else {
			return res.status(404).json({ json: "User id is not selected" });
		}
	} catch (err) {
		console.log(err);
		return res.status(404).json({ error: "Error while updating the data ..." });
	}
};

//update user by id
export const updateUserById = async (req, res) => {
	try {
		const { userId } = req.query;
		const formData = JSON.parse(req.body);
		await Todo.findByIdAndUpdate(userId, formData);
		return res.status(200).send("user is successfully updated");
	} catch (err) {
		return res.status(400).send("cant get the user");
	}
};

//delete request -> for delete the user we need the id only
export const deleteUser = async (req, res) => {
	try {
		const { userId } = req.query;
		if (userId) {
			await Todo.findByIdAndDelete(userId);
			return res.status(200).json({ deleted: userId });
		} else {
			return res.status(404).json({ error: "User is not selected" });
		}
	} catch (err) {
		return res.status(404).json({ error: "Error while deleting the user" });
	}
};
