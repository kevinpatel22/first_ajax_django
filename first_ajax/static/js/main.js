document.addEventListener("DOMContentLoaded", function() {
    const btn12 = document.querySelector('.ot button');
    const btn3456 = document.querySelector('.tffs  button');
    const sec3456 = document.querySelector('.tffs');
    const btn7 = document.querySelector('.s button');
    const sec7 = document.querySelector('.s');
    const btn8 = document.querySelector('.e button');
    const sec8 = document.querySelector('.e');
    const btn9 = document.querySelector('.n button');
    const sec9 = document.querySelector('.n');

    btn12.addEventListener('click', () => {
        axios.get('https://intro-ajax-api.herokuapp.com/')
        .then(response => {
            console.log(response);
        })
    })

    btn3456.addEventListener('click', () => {
        axios.get('https://intro-ajax-api.herokuapp.com/ping')
        .then(response => {
            console.log(response.data);
            console.log('Yay we did it!');
            const data = document.createElement('p');
            data.innerText = response.data;
            sec3456.appendChild(data);
        })
        .catch(error => { 
            console.log(error.response.data);
            console.log("That didn't go as expected!");
            const msg = document.createElement('p');
            msg.innerText = ("Sorry, I'll try harder next time");
            sec3456.appendChild(msg);
        })
        .then(response => {
            console.log('Hey, the request finished!')
        })
    })

    btn7.addEventListener('click', () => {
        axios.get("https://intro-ajax-api.herokuapp.com/count")
        .then(response => {
            console.log('Total visiters:', response.data);
            const count = document.createElement('p');
            count.innerText = response.data;
            sec7.appendChild(count);
        })
    })

    btn8.addEventListener('click', () => {
        axios.get("https://intro-ajax-api.herokuapp.com/time", {params: {timezone: 'Asia/Kolkata'},})
        .then(response => {
            console.log('Time now:',response.data)
            const time = document.createElement('p');
            time.innerText = response.data;
            sec8.appendChild(time);
        })
    })

    btn9.addEventListener('click', () => {
        axios.get("https://intro-ajax-api.herokuapp.com/a_car")
        .then(response => {
            console.log(response.data)
            const ul = document.createElement('ul');
            ul.setAttribute("id", "unordered_list");
            ul.innerHTML = response.data;
            sec9.appendChild(ul); 
        })
    })
});