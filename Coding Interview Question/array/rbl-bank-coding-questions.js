

function countFruits(arr){
    let obj = {}
    arr.map((item)=>{
        for(key in item){
               if(obj.hasOwnProperty(key)){
               obj[key] +=item[key]
               }
               else{
                    obj[key] =item[key]
               }
        }
    })
    console.log(obj)
}

countFruits([{'apple': 49, 'mango': 50}, {'mango': 49, 'apple': 1}, {'orange': 40, 'apple': 1}])