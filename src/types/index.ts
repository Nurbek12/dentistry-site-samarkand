export interface Review {
    id?: number
    firstname: string
    lastname: string
    phone?: string
    email?: string
    message: string
    created_at: string
    publish?: boolean
}

export interface Doctor {
    id?: number
    image?: string
    name: string
    specialty: string
    experience: string
    education: string
    languages?: string[]
    tg?: string
    inst?: string
    fb?: string
    in?: string
}

export interface Service {
    id?: number
    icon?: string
    title: string
    description: string
    price?: string
}

export interface FAQs {
    id?: number
    title: string
    content: string
    publish?: boolean
}

export interface Appointment {
    id?: number
    name: string
    phone: string
    doctor?: number | string
    checked: boolean
    created_at: string
}