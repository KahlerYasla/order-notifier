import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LayoutContainer } from './modules/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutContainer />}>
                        <Route path="" element={<HomeContainer />} />
                        <Route path="about" element={<AboutContainer />} />
                        <Route
                            path="products"
                            element={<ProductsContainer />}
                        />
                        <Route path="cart" element={<CartContainer />} />
                        <Route path="admin" element={<AdminContainer />} />
                        <Route path="*" element={<NotFoundContainer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
  </React.StrictMode>
)
