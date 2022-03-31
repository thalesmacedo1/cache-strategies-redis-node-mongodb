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

    async show(request, response) {
        try {
            const { id } = request.params;
            if (!id) return response.status(400).json({ error: 'Invalid parameter'});

            const data = await Task.findById(id);
            return response.status(200).json({ data });
        } catch (error) {
            return response.status(200).json({ error });
        }
    }

    async update(request, response) {
        try {
            const { id } = request.params;
            if (!id) return response.status(400).json({ error: 'Invalid parameter'});

            const { title, done } = request.body;
            await Task.findByIdAndUpdate(id, request.body);
            return response.status(204).end();
        } catch (error) {
            return response.status(500).json({ error });
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            if (!id) return response.status(400).json({ error: 'Invalid parameter'});
            
            await Task.findByIdAndRemove(id);
            return response.status(204).end();
        } catch (error) {
            return response.status(500).json({ error });
        }
    }
}