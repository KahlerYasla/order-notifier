import React from "react"

// react-router v6
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// essential for tailwindcss to work
import "./index.css"

// types
import { Product } from "./modules/product/types/product"
import { Notification } from "./modules/notification/types/notification"

// components
import { LayoutContainer, NotFoundContainer } from "./modules/layout"
import { AuthContainer } from "./modules/auth"
import { NotificationContainer } from "./modules/notification/containers/NotificationContainer"
import { ProductContainer } from "./modules/product/containers/ProductContainer"
import CartContainer from "./modules/cart/containers/CartContainer"
import { OrderContainer } from "./modules/order"

// create fake data
const getProducts = (): Product[] => {
    return [
        {
            id: "1",
            name: "product 1",
            description: "description 1",
            price: 100,
            stock: 10,
        },
        {
            id: "2",
            name: "product 2",
            description: "description 2",
            price: 200,
            stock: 0,
        },
        {
            id: "3",
            name: "product 3",
            description: "description 3",
            price: 300,
            stock: 5,
        },
        {
            id: "4",
            name: "product 4",
            description: "description 4",
            price: 400,
            stock: 20,
        },
    ]
}

const getNotifications = (): Notification[] => {
    return [
        {
            id: "1",
            isRead: false,
            message: "Notification 1",
            orderId: "1",
            timestamp: new Date(),
            type: "success",
        },
        {
            id: "2",
            isRead: false,
            message: "Notification 2",
            orderId: "2",
            timestamp: new Date(),
            type: "error",
        },
        {
            id: "3",
            isRead: false,
            message: "Notification 3",
            orderId: "3",
            timestamp: new Date(),
            type: "error",
        },
    ]
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutContainer />}>
                    <Route
                        path=""
                        element={
                            <ProductContainer
                                onProductClick={() => {}}
                                productList={getProducts()}
                            />
                        }
                    />
                    <Route
                        path="notification"
                        element={
                            <NotificationContainer
                                notifications={getNotifications()}
                                removeNotification={() => {}}
                            />
                        }
                    />
                    <Route path="auth" element={<AuthContainer />} />
                    <Route path="order" element={<OrderContainer />} />
                    <Route path="cart" element={<CartContainer />} />
                    <Route path="*" element={<NotFoundContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
