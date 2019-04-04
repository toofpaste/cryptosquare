$(function(){
function prepSent(str){
  var reg = /[ !,@#$%^'"&*()><0123456789]/g;
  return str.toLowerCase().replace(reg, '');
}

function strCol(string){

  return Math.ceil(Math.sqrt(string.length));

}

// function strLength(str){
//   return str.length;
// };

function crypt(letters){
  var size = strCol(letters)
  var result ='';
  console.log(size);
  console.log(letters);
    for(var x = 0; x < size; x++){

      for(var y = 0; y < size; y++){
        result += letters[x + (y * size)]

      }

    }
    return result;

}






  $('#formOne').submit(function(event){
    event.preventDefault();
    var sentence = $('#sentence').val();
    console.log(sentence);
    var sen = prepSent(sentence);
    sen = sen.split("");
    console.log(sen);

    console.log(sen.length);
    var left = ((Math.ceil(Math.sqrt(sen.length)))*(Math.ceil(Math.sqrt(sen.length)))) - sen.length;
    for(var i = 0; i < left; i++){
      sen.push(" ");
    };
    sen = crypt(sen);
    sen = prepSent(sen);
    var holdSen = "";
    for(var p = 1; p <= sen.length; p += 1){
      if(p % 5 === 0 && p !== 0){
        holdSen += sen[p-1];
        holdSen += " ";
      }else holdSen += sen[p-1];
    };

    console.log(holdSen);


  })
})
