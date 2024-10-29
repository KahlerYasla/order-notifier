export type ValidateResponse = {
    data: {
        isValid: boolean
        message: string
        errors?: string[]
    }
}
