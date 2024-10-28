import React from "react"

// react-router v6
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"

// components
import { LayoutContainer, NotFoundContainer } from "./modules/layout"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutContainer />}>
                    <Route path="admin" element={<AuthContainer />} />
                    <Route path="products" element={<ProductsContainer />} />
                    <Route path="*" element={<NotFoundContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
