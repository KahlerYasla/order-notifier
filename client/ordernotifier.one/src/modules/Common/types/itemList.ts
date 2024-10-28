import { Order } from "../../order"
import { Product } from "../../product"
import { Notification } from "../../notification"

type ItemList<T> = T[]

export type OrderList = ItemList<Order>
export type NotificationList = ItemList<Notification>
export type ProductList = ItemList<Product>
