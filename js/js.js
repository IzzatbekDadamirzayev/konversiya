const   uzs = document.querySelector('[name="uzs"]'),
        usd = document.querySelector('[name="usd"]'),
        rub = document.querySelector('[name="rub"]'),
        euro = document.querySelector('[name="euro"]'),
        pound = document.querySelector('[name="pound"]'),
        ein = document.querySelector('[name="ein"]'),
        yuan = document.querySelector('[name="yuan"]');
        console.log

usd.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'js/json.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            uzs.value =+ usd.value * data.valuta.usd;
        }
        else{
            uzs.value = "Bazaga ulanishda mmuammo mavjud";
        }
    });
});

rub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'js/json.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            uzs.value =+ rub.value * data.valuta.rub;
        }
        else{
            uzs.value = "Bazaga ulanishda mmuammo mavjud";
        }
    });
});

euro.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'js/json.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            uzs.value =+ euro.value * data.valuta.euro;
        }
        else{
            uzs.value = "Bazaga ulanishda mmuammo mavjud";
        }
    });
});

pound.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'js/json.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            uzs.value =+ pound.value * data.valuta.pound;
        }
        else{
            uzs.value = "Bazaga ulanishda mmuammo mavjud";
        }
    });
});

ein.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'js/json.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            uzs.value =+ ein.value * data.valuta.ein;
        }
        else{
            uzs.value = "Bazaga ulanishda mmuammo mavjud";
        }
    });
});

yuan.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", 'js/json.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            uzs.value =+ yuan.value * data.valuta.yuan;
        }
        else{
            uzs.value = "Bazaga ulanishda mmuammo mavjud";
        }
    });
});