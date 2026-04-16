import { APIreq } from "./Protocol";
const typeAREA: HTMLInputElement= document.getElementById('typeAREA') as HTMLInputElement
const [BitcoinDiv,DOLLARdiv,EUROdiv]=[
    document.getElementById('Output-BTC') as HTMLDivElement,
    document.getElementById('Output-dollar') as HTMLDivElement,
    document.getElementById('Output-eur') as HTMLDivElement
]
const ReS:APIreq[]=APIreq.apiFetch() as unknown as APIreq[];
BitcoinDiv.innerHTML=`
    <div class="moneyOutput" id="Output-${ReS[0]?.code}">
                <h2 class='money-name'>${ReS[0]?.code}</h2>
                <p class="value-output">
                    €0.00
                </p>
            </div>
`;
console.log(ReS)
typeAREA?.addEventListener('input',(ev:InputEvent)=>{
    const input = ev.target as HTMLInputElement;
    let value= Number(input.value);
    if(isNaN(value)) throw new Error('Invalid value.')
    

});