// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbPromise } from "~/database/connection";


const handler = async (req, res) => {
	console.log(await dbPromise);
	res.send("hello");
};

export default handler;
