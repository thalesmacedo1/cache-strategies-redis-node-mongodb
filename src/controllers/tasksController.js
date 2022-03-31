import Task from '../models/Task'

export default class TasksController {
    async create(request, response) {
        try {
            const task = await Task.create(request.body);
            return response.status(201).json({ task });
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}