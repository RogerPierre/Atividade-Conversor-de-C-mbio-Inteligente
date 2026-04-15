

const typeAREA: HTMLInputElement= document.getElementById('typeAREA') as HTMLInputElement
const MoneyConteiner: HTMLDivElement= document.getElementById('GRID-container-money') as HTMLDivElement;
MoneyConteiner.innerHTML=`
            <div class="moneyOutput" id="Output-dollar">
                <h2 class='money-name' >DOLLAR</h2>
                <p class="value-output">
                    U$20.00
                </p>
            </div>
            <div class="moneyOutput" id="Output-eur">
                <h2 class='money-name'>EURO</h2>
                <p class="value-output">
                    EU$20.00
                </p>
            </div>
            <div class="moneyOutput" id="Output-BTC">
                <h2 class='money-name'>BITCOIN</h2>
                <p class="value-output">
                    BTC$20.00
                </p>
            </div>
`
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
    MoneyConteiner.innerHTML=`
            <div class="moneyOutput" id="Output-dollar">
                <h2 class='money-name' >DOLLAR</h2>
                <p class="value-output">
                    U$${valueInput*Number(res.USDBRL.high)}
                </p>
            </div>
            <div class="moneyOutput" id="Output-eur">
                <h2 class='money-name'>EURO</h2>
                <p class="value-output">
                    EU$${valueInput*Number(res.EURBRL.high)}
                </p>
            </div>
            <div class="moneyOutput" id="Output-BTC">
                <h2 class='money-name'>BITCOIN</h2>
                <p class="value-output">
                    BTC$${valueInput*Number(res.BTCBRL.high)}
                </p>
            </div>
`
})