import dbPromise from "~/database/connection";

import { deleteUser, getUser, postUser, putUSer } from "~/controller/todos/todos-controller";

const handler = async (req, res) => {
	await dbPromise;
	const { method } = req;
	switch (method) {
		case "GET":
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
	}
};

export default handler;
