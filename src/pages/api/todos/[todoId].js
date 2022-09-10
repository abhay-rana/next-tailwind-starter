import dbPromise from "~/database/connection";

import { getUserById } from "~/controller/todos/todos-controller";

const handler = async (req, res) => {
	await dbPromise;
	const { method } = req;
	switch (method) {
		case "GET":
			getUserById(req, res);
			break;
	}
};

export default handler;
