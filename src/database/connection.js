import mongoose from "mongoose";

//returns a promise so where are you importing this promise use the await so you can get the object
let dbPromise;
if (process.env.NODE_ENV === "development") {
	if (!process.env.DATABASE_URL) {
		throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
	}
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		console.log("database result is cached");
		global._mongoClientPromise = mongoose.connect(process.env.DATABASE_URL); //returns  promise
	}
	dbPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	dbPromise = mongoose.connect(process.env.DATABASE_URL);
}

export default dbPromise;
