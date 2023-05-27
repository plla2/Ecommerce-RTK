export const formatPrice = (price) => {
  return new Intl.NumberFormat('ko', {
    style: 'currency',
    currency: "KRW"
  }).format(price * 1000)
}