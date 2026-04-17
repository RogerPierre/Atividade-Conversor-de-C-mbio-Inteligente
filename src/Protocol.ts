

interface IAPIreq{
    
    "USDBRL": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro",
        "high": number,
        "low": number,
        "varBid": number,
        "pctChange": number,
        "bid": number,
        "ask": number,
        "timestamp": EpochTimeStamp,
        "create_date": Date
    },
    "EURBRL": {
        "code": "EUR",
        "codein": "BRL",
        "name": "Euro/Real Brasileiro",
        "high": number,
        "low": number,
        "varBid": number,
        "pctChange": number,
        "bid": number,
        "ask": number,
        "timestamp": EpochTimeStamp,
        "create_date": Date
    },
    "BTCBRL": {
        "code": "BTC",
        "codein": "BRL",
        "name": "Bitcoin/Real Brasileiro",
        "high": number,
        "low": number,
        "varBid": number,
        "pctChange": number,
        "bid": number,
        "ask": number,
        "timestamp": EpochTimeStamp,
        "create_date": Date
    }
}


export class APIreq{
    constructor(
    public code: string,
    public codein: string,
    public name: string,
    public high: number,
    public timestamp: EpochTimeStamp
    ){}
    public static async apiFetch():Promise<APIreq[]>{
        const res= await fetch(' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL') as Response;
        const data = await res.json() as IAPIreq;
        return [
            new APIreq(data["USDBRL"]['code'], data["USDBRL"]['codein'], data["USDBRL"]['name'], Number(data["USDBRL"]['high']), data["USDBRL"]['timestamp']),
            new APIreq(data["EURBRL"]['code'], data["EURBRL"]['codein'], data["EURBRL"]['name'], Number(data["EURBRL"]['high']), data["EURBRL"]['timestamp']),
            new APIreq(data["BTCBRL"]['code'], data["BTCBRL"]['codein'], data["BTCBRL"]['name'], Number(data["BTCBRL"]['high']), data["BTCBRL"]['timestamp'])
        ]
    }

}