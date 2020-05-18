function allLongestString (inputarray){
  var may=0;
  for(var i=0;i<inputarray.length;i++ ){
    if(inputarray[i].length>may){
      may=inputarray[i].length;
    }
  }
  var out=[];
  var pos=0;
  for (var i=0;i<inputarray.length;i++){
    if(inputarray[i].length== may){
      out[pos]=inputarray[i];
      pos++;
    }
  }
  console.log(out);
}
inputarray=['enyky','benyky','yely','varennyky'];
//inputarray=['aba','aa','ad','vcd','aba'];
res= allLongestString(inputarray);

