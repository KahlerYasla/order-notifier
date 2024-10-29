import { Request, Response } from "express"
import { ProductRepo } from "../repos/product.repo"
import { Product } from "../models/product"

const productRepo = new ProductRepo()

export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const products = await productRepo.getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const getProductById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        const product = await productRepo.getProductById(parseInt(id))
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).send("Product not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const createProduct = async (
    req: Request,
    res: Response
): Promise<void> => {
    const newProduct: Product = req.body
    try {
        const createdProduct = await productRepo.createProduct(newProduct)
        res.status(201).json(createdProduct)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const updateProduct = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    const productUpdates: Partial<Product> = req.body
    try {
        const updatedProduct = await productRepo.updateProduct(
            parseInt(id),
            productUpdates
        )
        if (updatedProduct) {
            res.status(200).json(updatedProduct)
        } else {
            res.status(404).send("Product not found")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const deleteProduct = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params
    try {
        await productRepo.deleteProduct(parseInt(id))
        res.status(204).send()
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}
