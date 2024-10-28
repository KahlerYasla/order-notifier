import { Order } from "./order"
import { Notification } from "./notification"
import { Product } from "./product"

type ItemList<T> = T[]

export type OrderList = ItemList<Order>
export type NotificationList = ItemList<Notification>
export type ProductList = ItemList<Product>
