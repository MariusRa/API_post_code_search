const form = document.querySelector('form');
const city = document.querySelector('.inputCity');
const street = document.querySelector('.inputStreet');
const search = document.querySelector('.search');
const inputPostC = document.querySelector('.inputPostC')


search.addEventListener('click', searchCode);

async function searchCode() {
    let url = `https://api.postit.lt/v2/?city=${city.value}&address=${street.value}&key=8UCyLEsww8yMvtaQw15Q`;
    fetch(url)  //issiunciu uzklausą;
        .then(response => response.json()) // duomenis gaunu;
        .then(result => {
            console.log(result.status)
            if (result.status === 'success') {
                const getInfo = result.data // atfiltruoja data su reikiama info;
                for (let i = 0; i < getInfo.length; i++) {
                    console.log(getInfo[i].post_code) // is atrinktos datos pasiimamas postCode'as;
                    inputPostC.value = getInfo[i].post_code;
                    inputPostC.style.color = '#000'
                }
            } else {
                    inputPostC.value = 'Klaida! Patikslinkite įvestą miestą ir gatvę!';
                    inputPostC.style.color = '#f22213'
            }
        });
}
form.onsubmit = function (e) {
    e.preventDefault();
}
