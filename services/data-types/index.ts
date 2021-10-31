export interface CategoryTypes {
    _id: string,
    name: string,
    __v: number
}

export interface GameItemTypes {
    _id: string,
    name: string,
    thumbnail: string,
    category: CategoryTypes
}

export interface BankTypes {
    _id: string,
    name: string,
    bankName: string,
    noRekening: string
}

export interface PaymentTypes {
    _id: string,
    type: string,
    status: string,
    banks: BankTypes[]
}

export interface NominalTypes {
    _id: string,
    coinName: string,
    coinQuantity: number,
    price: number
}

export interface SignInTypes {
    email: string,
    password: string
}

export interface UserTypes {
    id: string,
    username: string,
    email: string,
    name: string,
    avatar: string
}

export interface JWTPayloadTypes {
    player: UserTypes,
    iat: string
}

export interface CheckoutTypes {
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountUser: string,
}

export interface HistoryVoucherTopUpTypes {
    gameName: string
    category: string
    coinQuantity: number
    coinName: string
    price: number
    thumbnail: string
}

export interface HistroyPaymentTypes {
    bankName: string
    name: string
    noRekening: string
    type: string
}

export interface HistroyTransactionTypes {
    _id: string
    historyVoucherTopUp: HistoryVoucherTopUpTypes
    value: number
    status: string
    accountUser: string
    tax: number
    name: string
    historyPayment: HistroyPaymentTypes
}

export interface TopUpCategoriesType {
    _id: string
    value: number
    name: string
}
