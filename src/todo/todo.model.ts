import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
});

export interface Todo extends mongoose.Document {
  name: string;
  desc: string;
}
