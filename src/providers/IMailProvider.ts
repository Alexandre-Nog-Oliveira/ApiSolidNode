
interface IAddress{
    email: string
    name: string
}

export interface IMessagem{
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string
}



export interface IMailProvider {
    sendMail(message: IMessagem) : Promise<void>
}