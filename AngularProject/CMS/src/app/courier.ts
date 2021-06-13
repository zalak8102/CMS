export interface ICourier{
    _id: string,
    id: string,
    userid:string,
    source: string,
    destination: number,
    date: string,
    cost: number,
    delivered:boolean,
    deliveryboyid:string,
    weight:number,
    height:number,
    width:number,
    length:number
}
