import {connectDB} from "config/ConnectDb"
import Task from "models/Task"

connectDB()

export default async function handler (req, res ) {
    const {method, body} = req
    switch(method){
        case "GET":
            try {
                const tasks = await Task.find()
                return res.status(200).json(tasks)
            } catch(err) {
                console.error(err)
            }
        case "POST":
            try {
                const newTask = await new Task(body) 
                const saveTask = await newTask.save()
                return res.status(201).json(saveTask)
            } catch(err) {
                console.error(err)
            }
        default: 
            return res.status(400).json({msg: "This method is not supported"})
    }
}
  