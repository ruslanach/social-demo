export type PostDataType = {
    id: number
    post: string
    likesCount: number
}


export type ContactsType = {
    github?: string
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string

}
export type PhotosType = {
    small?: string | null |undefined
    large?: string | null | undefined
}
export type ProfileType = {
    userId: number|null
    lookingForAJob: boolean | null
    lookingForAJobDescription?: string  | null
    fullName: string  | null
    contacts: ContactsType
    photos?: PhotosType
    aboutMe?: string  | null
}
export type ProfileChangeType = {
    userId: number|null
    lookingForAJob: boolean | null
    lookingForAJobDescription?: string  | null
    fullName: string  | null
    contacts: ContactsType
    aboutMe?: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type MessageType = {
    id: number
    idUser: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type SideBarDataType = {
    id: number
    sideBarName: string
    sideBarPath: string
}
export type ProfileFormType = {
    userId: number
    fullName: string | null
    aboutMe?: string  | null
    lookingForAJob: boolean | null
    lookingForAJobDescription?: string  | null
    facebook?:string
    github?:string
    twitter?:string
    instagram?:string
    youtube?:string
}

