var fruit="banana";
character="a";
count=0;
for(var i=0;i<fruit.length;i++){
    if(character==fruit[i]){
        count=count+1;
    }
}
console.log(`The character ${character} appears ${count} times in ${fruit}`);