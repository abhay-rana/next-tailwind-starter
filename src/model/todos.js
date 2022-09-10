import { Schema, models, model } from "mongoose";

const todosSchema = new Schema({
	title: String,
	description: String,
	status: Boolean,
});

const Todo = models.Todos || model("Todos", todosSchema);

export default Todo;
