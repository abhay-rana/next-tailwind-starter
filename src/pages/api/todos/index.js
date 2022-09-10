import dbPromise from "~/database/connection";

<<<<<<< HEAD
import { deleteUser, getUser, postUser, putUser } from "~/controller/todos/todos-controller";
=======
import { deleteUser, getUser, postUser, putUSer } from "~/controller/todos/todos-controller";
>>>>>>> 86e7dada1c18c686fe2ba1ba6d6a50ba43adf716

const handler = async (req, res) => {
	await dbPromise;
	const { method } = req;
	switch (method) {
		case "GET":
<<<<<<< HEAD
			await getUser(req, res);
			break;
		case "POST":
			await postUser(req, res);
			break;
		case "PUT":
			await putUser(req, res);
			break;
		case "DELETE":
			await deleteUser(req, res);
			break;
		default:
			return res.status(400).json({ method, name: "invalid request" });
=======
			getUser(req, res);
			break;
		case "POST":
			postUser(req, res);
			break;
		case "PUT":
			putUSer(req, res);
			break;
		case "DELETE":
			deleteUser(req, res);
			break;
		default:
			res.status(400).json({ method, name: "invalid request" });
			break;
>>>>>>> 86e7dada1c18c686fe2ba1ba6d6a50ba43adf716
	}
};

export default handler;
