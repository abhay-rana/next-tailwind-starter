import dbPromise from "~/database/connection";

import { deleteUser, getUser, postUser, putUser } from "~/controller/todos/todos-controller";

const handler = async (req, res) => {
	await dbPromise;
	const { method } = req;
	switch (method) {
		case "GET":
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
	}
};

export default handler;
