
k=['white','yellow','red','blue','black']
s=['|','Memorize!','Digite!']
e=['Acertou!','Errou!','Resposta']
function ig(a){return document.getElementById(a)}
function ie(a){return document.createElement(a)}
function ii(a,b){a.id=b}
function ic(a,b){a.classList.add(b)}
function it(a,b){a.textContent=b}
function itc(a,b){a.textContent+=b}
function ap(a,b){a.appendChild(b)}

function c0(a,b){a.style.backgroundColor=b}
function c1(a,b){a.style.color=b}

function frn(a,b){
    for(let i=0;i<a;i++)b[i]=mat(10,0)
}
function frv(a0,a1,a2,a3){
    for(let i=0;i<a0;i++)a1[i]=mat(a2,a3)
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

function bs(q,n,t,y,c,f){
    for(let i=0;i<q;i++){
        n[i]=ie(t)
        ii(n[i],y+i)
        ic(n[i],c)
        it(n[i],i)
        ap(f,n[i])
    }
}

function nm(q,n,a,b0,b1){
    for(let i=0;i<q;i++){
        n[i]=mat(b0,b1)
        if(i<2)a[0]+=n[i]+'+'
        else if(i<3)a[0]+=n[i]+'-'
        else if(i<4)a[0]+=n[i]+'*'
        else if(i<5)a[0]+=n[i]+'+'
        else if(i<6)a[0]+=n[i]+'/'
        else if(i<7)a[0]+=n[i]+'-'
        else a[0]+=n[i]+'='

        if(i<3)a[1]+=n[i]
        else if(i<4)a[1]-=n[i]
        else if(i<5)a[1]*=n[i]
        else if(i<6)a[1]+=n[i]
        else if(i<7){
            a[1]/=n[i]
            let re=parseInt(a[1])
            a[1]=re
        }else a[1]-=n[i]

        cn(a[1]) 
    }
}
function st(a){
    a.sort(()=>Math.random()-.5)
}


