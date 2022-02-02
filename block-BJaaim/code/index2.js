class MyArray{
    constructor(list){

    }

}


function overAll(){
    let count = 0;
    return {
        getCount:function(){
            return count;
        },
        incrementCount:function(){
            count = count + 1;
            return count;
        },
        decrementCount:function(){
            count = count - 1;
            return count;
        }
    }
}
function overAll(){
    let count = 0;
    function changeBy(val){
        count += val;
    }
    return {
        getCount:function(){
            return count;
        },
        incrementCount:function(){
            return changeBy(1);
        },
        decrementCount:function(){
            return changeBy(-1);
        }
    }
}


function getCount() {
  return count;
}
function incrementCount() {
  count = count + 1;
  return count;
}
function decrementCount() {
  count = count + 1;
  return count;
}