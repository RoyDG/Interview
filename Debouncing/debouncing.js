//debouncing in javascript

let count = 0;

const getData = () => {
    //calls an api and get data
    console.log ("fetching data..", count++);
}

const debounce =  function (fn, d) {

    let timer;

    return () => {

        let context = this,
            args = arguments;
        
        clearTimeout (timer);
        timer = setTimeout(() => {
            getData.apply(context,arguments);
        }, d);  
    }
}

const optimiseMethod = debounce (getData, 300);