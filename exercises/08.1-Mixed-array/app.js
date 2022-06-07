var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var newarray= []

function type ()  {
   for (var i=0; i< mix.length; i++) {
       
        newarray.push(typeof mix[i])
        

    }
        console.log(newarray)
}

        type()