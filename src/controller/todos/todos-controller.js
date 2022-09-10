import Todo from "~/model/todos";

//get request -> to read all the records
export const getUser = async (req, res) => {
	const all_todo = await Todo.find({});
	res.status(200).json({ all_todo });
};

export const getUserById = async (req, res) => {
	try {
		const { userId } = req.query;
		if (userId) {
			const user = await Todo.findById(userId);
			res.status(200).json(user);
		}
		res.status(404).json({ error: "User not selected" });
	} catch (error) {
		res.status(404).json({ error: "cannot ge the user" });
	}
};

//post request -> to create a new record
export const postUser = async (req, res) => {
	try {
		const formData = req.body;
		console.log({ formData });
		if (!formData) return res.status(404).json({ error: "Form data not set" });
		Todo.create(formData, (err, data) => {
			console.log("hello", data);
			console.log("err", err);
			res.json(data);
		});
	} catch (err) {
		console.log(err);
	}
};

//put request -> to update a new record
//to update a particular record we need a id to be updated
//here we are taking the id with the help of the query or params
//we can also get the id from the help of the req.body

export const putUSer = async (req, res) => {
	try {
		const { userId } = req.query;
		const formData = req.body;
		if (userId && formData) {
			const user = Todo.findByIdAndUpdate(userId, formData);
			res.status(200).json(user);
		}
		res.status(404).json({ json: "User id is not selected" });
	} catch (err) {
		res.status(404).json({ error: "Error while updating the data ..." });
	}
};

//delete request -> for delete the user we need the id only
export const deleteUser = async (req, res) => {
	try {
		const { userId } = req.query;
		if (userId) {
			await Todo.findByIdAndDelete(userId);
			return res.status(200).json({ deleted: userId });
		}
		res.status(404).json({ error: "User is not selected" });
	} catch (err) {
		res.status(404).json({ error: "Error while deleting the user" });
	}
};
