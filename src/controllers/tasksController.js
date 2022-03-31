import Task from '../models/Task'

export default class TasksController {
    async list(request, response) {
        try {
            const data = await Task.find({});
            return response.status(200).json({ data });
        } catch (error) {
            return response.status(200).json({ error });
        }
    }

    async create(request, response) {
        try {
            const task = await Task.create(request.body);
            return response.status(201).json({ task });
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}