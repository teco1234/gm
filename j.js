
k=['white','yellow','red','blue','black']
s=['|','Memorize!','Digite!']
e=['Acertou!','Errou!','Resposta']
function ig(a){return document.getElementById(a)}
function ie(a){return document.createElement(a)}
function ii(a,b){a.id=b}
function ic(a,b){a.classList.add(b)}
function it(a,b){a.textContent=b}
function ap(a,b){a.appendChild(b)}

function c0(a,b){a.style.backgroundColor=b}
function c1(a,b){a.style.color=b}

function frn(a,b){
    for(let i=0;i<a;i++)b[i]=mat(10,0)
}
function frm(a){
    for(i=0;i<a.length;i++)cn(a[i])
}
function frj(a){
    res=''
    for(let i=0;i<a.length;i++)res+=a[i]
    return res
}

function al(a){alert(a)}
function cn(a){console.log(a)}

function mat(a,b){return Math.floor(Math.random()*a)+b}

function dpn(a){a.style.display='none'}
function dpb(a){a.style.display='block'}
function dpi(a){a.style.display='inline'}
