import { APIreq } from "./Protocol";
const typeAREA: HTMLInputElement= document.getElementById('typeAREA') as HTMLInputElement
const [BitcoinDiv,DOLLARdiv,EUROdiv]=[
    document.getElementById('Output-BTC') as HTMLDivElement,
    document.getElementById('Output-dollar') as HTMLDivElement,
    document.getElementById('Output-eur') as HTMLDivElement
]

   
typeAREA?.addEventListener('input',(ev:InputEvent)=>{
    const input = ev.target as HTMLInputElement;
    const value= Number(input.value);
    if(isNaN(value)) throw new Error('Invalid value.')
    const res= APIreq.apiFetch();
    res.then((data)=>{
        BitcoinDiv.innerHTML= `
            <h2 class='money-name' >${data[2]!.code}</h2>
                <p class="value-output">
                    ${data[2]!.codein+((data[2]!.high)*value).toFixed(2)}
                </p>
        `
        EUROdiv.innerHTML= `
            <h2 class='money-name' >${data[1]!.code}</h2>
                <p class="value-output">
                    ${data[1]!.codein+((data[2]!.high)*value)}
                </p>
        `
        DOLLARdiv.innerHTML= `
            <h2 class='money-name' >${data[0]!.code}</h2>
                <p class="value-output">
                    ${data[0]!.codein+((data[0]!.high)*value)}
                </p>
        `
    }
    ).catch((err)=>{
        console.error(err);
    })})
    