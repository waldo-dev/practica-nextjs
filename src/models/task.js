import { Schema, model, models } from "mongoose"

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    description: {
        type: String,
        required: [true, 'price is required'],
    },

}, { timestamps: true });


export default models.Task || model('Task', taskSchema)