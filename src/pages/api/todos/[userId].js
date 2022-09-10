import dbPromise from "~/database/connection";

import { getUserById, updateUserById } from "~/controller/todos/todos-controller";

const handler = async (req, res) => {
	await dbPromise;
	const { method } = req;
	switch (method) {
		case "GET":
			await getUserById(req, res);
			break;
		case "PUT":
			await updateUserById(req, res);
			break;
		default:
			break;
	}
};

export default handler;
