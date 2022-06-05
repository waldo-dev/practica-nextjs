import { Schema, model, models } from "mongoose"

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
    },
    description: {
        type: String,
        required: [true, 'price is required'],
    },

}, { timestamps: true });


export default models.Task || model('Task', taskSchema)