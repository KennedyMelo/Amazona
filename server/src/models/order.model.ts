import BaseModel from './base.model';
import OrderStatusModel from './order-status.model';
import ProductModel from './product.model';

class OrderModel extends BaseModel {
  userId: string;
  totalValue: string;
  purchaseDate: string;
  statusHistory: {id: string, status: OrderStatusModel, date: string }[]
  products: ProductModel[];
  address: string;
  payment: string;

  constructor({
    id,
    userId,
    totalValue,
    purchaseDate,
    statusHistory,
    products,
    address,
    payment
  }: {
    id: string;
    userId: string;
    totalValue: string;
    purchaseDate: string;
    statusHistory: {id: string, status: OrderStatusModel, date: string }[]
    products: ProductModel[];
    address: string;
    payment: string;
  }) {
    super(id);
    this.userId = userId;
    this.totalValue = totalValue;
    this.purchaseDate = purchaseDate;
    this.statusHistory = statusHistory;
    this.products = products;
    this.address = address;
    this.payment = payment;
  }
}

export default OrderModel;
