import express from "express";import {	getAllEmployee,	registerEmployee,	loginEmployee,	deleteByUserId,	getUserById,} from "../repositories/employeeRepository";import { Request, Response } from "express";import {Prisma} from "@prisma/client";const employeeRouter = express.Router();employeeRouter.get('/', async (req: Request, res: Response) => {	try {		const employee = await getAllEmployee();		res.status(200).json(employee);	} catch (error) {		console.error('Error fetching employee:', error);		res.status(500).json({ error: 'Internal Server Error' });	}});employeeRouter.get('/:userId', async (req: Request, res: Response) => {	try {		const userId = req.params.userId;		const employee = await getUserById(userId);		if (employee) {			res.status(200).json(employee);		} else {			res.status(404).json({ error: 'Employee not found' });		}	} catch (error) {		console.error('Error fetching employee by ID:', error);		res.status(500).json({ error: 'Internal Server Error' });	}});employeeRouter.post('/register', async (req: Request, res: Response) => {	try {		const { email, password, firstName, lastName } = req.body;		const newEmployee = await registerEmployee(email, password, firstName, lastName);		res.status(201).json(newEmployee);	} catch (error) {		console.error('Error registering employee:', error);		if (error instanceof Prisma.PrismaClientKnownRequestError) {			if (error.code === 'P2002') {				res.status(409).json({ error: 'Email already exists' });			} else {				res.status(400).json({ error: 'Bad request' });			}		} else {			res.status(500).json({ error: 'Internal Server Error' });		}	}});employeeRouter.post('/login', async (req: Request, res: Response) => {	try {		const { email, password } = req.body;		const employee = await loginEmployee(email, password);		if (employee) {			res.status(200).json({ userId: employee.id });		} else {			res.status(401).json({ error: 'Invalid email or password' });		}	} catch (error) {		console.error('Error logging in employee:', error);		res.status(500).json({ error: 'Internal Server Error' });	}});employeeRouter.delete('/:userId', async (req: Request, res: Response) => {	try {		const userId = req.params.userId;		const deletedEmployee = await deleteByUserId(userId);		if (deletedEmployee) {			res.status(200).json({ message: 'Employee deleted successfully' });		} else {			res.status(404).json({ error: 'Employee not found' });		}	} catch (error) {		console.error('Error deleting employee:', error);		res.status(500).json({ error: 'Internal Server Error' });	}});export default employeeRouter;