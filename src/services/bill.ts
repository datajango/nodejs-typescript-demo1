import {Bill} from '../models/bill';
import {DatabaseProvider} from '../database/index';
import {Customer} from '../models/customer';

export class BillService {
    public async list(customerId: number): Promise<Bill[]> {
        const connection = await DatabaseProvider.getConnection();
        return connection.getRepository(Bill).find({
            where: {
                customer: customerId
            }
        });
    }

    public async create(customerId: number, bill: Bill): Promise<Bill> {
        const connection = await DatabaseProvider.getConnection();

        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newBill = new Bill();
        newBill.title = bill.title;
        newBill.sum = bill.sum;

        const customer = await connection.getRepository(Customer).findOne(customerId);

        if (!customer) {
            return;
        }

        newBill.customer = customer;

        return await connection.getRepository(Bill).save(newBill);
    }

    public async getById(id: number): Promise<Bill> {
        const connection = await DatabaseProvider.getConnection();
        return connection.getRepository(Bill).findOne(id);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        //let obj = await connection.getRepository(Bill).findOne(id);
        //return await connection.getRepository(Bill).remove(obj);
    }
}

export const billService = new BillService();
