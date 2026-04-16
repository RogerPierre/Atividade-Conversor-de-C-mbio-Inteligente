

const typeAREA: HTMLInputElement= document.getElementById('typeAREA') as HTMLInputElement
const MoneyConteiner: HTMLDivElement= document.getElementById('GRID-container-money') as HTMLDivElement;

interface RESmoedas{
    "USDBRL": resAPi,
    "EURBRL": resAPi,
    "BTCBRL": resAPi
}
interface resAPi {
    
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string
    
}
async function requestAPIEconomic():Promise<RESmoedas>{
    const res: Promise<RESmoedas>=(await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')).json() as Promise<RESmoedas>;
    if(!res) throw new Error('NOT FOUND');
    return res;
}

typeAREA?.addEventListener('input',(ev:InputEvent)=>{
    let valueInput= Number(typeAREA.value);
    let res: RESmoedas= requestAPIEconomic() as unknown as RESmoedas;
});