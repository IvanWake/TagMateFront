export type UserItemSearch<T> = {
    serviceId: string
    name: string,
    lastName: string,
    city: T,
    avatar: string,
    birthDay: Date
}