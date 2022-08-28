import mongoose from "mongoose";

let client;
export let dbPromise;

const connectDb = async () => {
	try {
		if (process.env.NODE_ENV === "development") {
			// In development mode, use a global variable so that the value
			// is preserved across module reloads caused by HMR (Hot Module Replacement).
			if (!global._mongoClientPromise) {
				console.log("database result is cached");
				client = await mongoose.connect(process.env.DATABASE_URL);
				global._mongoClientPromise = client;
			}
			dbPromise = global._mongoClientPromise;
		} else {
			// In production mode, it's best to not use a global variable.
			client = await mongoose.connect(process.env.DATABASE_URL);
			dbPromise = client;
		}
		console.log("database is connected successfully");
		return dbPromise;
	} catch (err) {
		console.log("error", err);
	}
};

export default connectDb;

//if you are using native mongodb client

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
// 	useUnifiedTopology: true,
// 	useNewUrlParser: true,
// };

// let client;
// let dbPromise;

// if (!process.env.MONGODB_URI) {
// 	throw new Error("Please add your Mongo URI to envs");
// }

// if (process.env.NODE_ENV === "development") {
// 	// In development mode, use a global variable so that the value
// 	// is preserved across module reloads caused by HMR (Hot Module Replacement).
// 	if (!global._mongoClientPromise) {
// 		client = new MongoClient(uri, options);
// 		global._mongoClientPromise = client.connect();
// 	}
// 	dbPromise = global._mongoClientPromise;
// } else {
// 	// In production mode, it's best to not use a global variable.
// 	client = new MongoClient(uri, options);
// 	dbPromise = client.connect();
// }

// export function jsonify(val) {
// 	return JSON.parse(JSON.stringify(val));
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default dbPromise;
