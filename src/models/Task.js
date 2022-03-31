import mongoose from 'mongoose';

const Task = new mongoose.Schema({
    title: String,
    done: Boolean
});

export default mongoose.model('Task', Task);