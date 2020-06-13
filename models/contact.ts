import mongoose, { Schema, Document } from 'mongoose';

export interface ContactInferface extends Document {
    name: string;
    email: string;
    whatsapp: string;
    createdAt: Date;
}

const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model<ContactInferface>("Contact", ContactSchema);

export default Contact;