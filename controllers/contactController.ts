import { Request, Response } from 'express';
import Contact from '../models/contact';

export const allContacts = (req: Request, res: Response) => {
    const contacts = Contact.find((err: any, contacts: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(contacts);
        }
    });
};

export const showContact = (req: Request, res: Response) => {
    const contact = Contact.findById(
        req.params.id, (err: any, contact: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(contact);
        }
    });
};

export const addContact = (req: Request, res: Response) => {
    const contact = new Contact(req.body);
    contact.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(contact);
        }
    });
}

export const updateContact = (req: Request, res: Response) => {
    const contact = Contact.findByIdAndUpdate(
        req.params.id,
        req.body, 
        (err: any, contact: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(contact);
        }
    });
};

export const deleteContact = (req: Request, res: Response) => {
    const contact = Contact.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Contact deleted from database");
        }
    });
};