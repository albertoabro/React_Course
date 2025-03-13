

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 2
    }).format(amount)
};