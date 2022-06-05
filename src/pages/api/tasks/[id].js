import { connectDB } from "config/ConnectDb"
import Task from "models/Task"

connectDB()

export default async (req, res) => {
    const {body, query: {id}, method} = req
    switch(method){
        case "GET": try {
            const task = await Task.findById(id)
            if(!task) return res.status(404).json({ msg:"Task not found"})
            return res.status(200).json(task)
        } catch (err) {
            console.error(err)
        }
        case "PUT": try {
            const task = await Task.findByIdAndUpdate(id, body, {
                new:true
            })
            return res.status(200).json(task)
        } catch (err) {
            console.error(err)
        }
        case "DELETE": try {
            const task = await Task.findByIdAndDelete(id)
            return res.status(200).json(task)
        } catch (err) {
            console.error(err)
        }
        default: 
            return res.status(400).json({msg: "This method is not supported"})
    }
}