function palindromeRearranging(cadena ){
  t=cadena.length;
  if(t==0){
    console.log('falso');
  }
  impar=0;
  for( var i=0;i<t;i++){
    con=0;
    for (var j=0; j<t;j++){
      if(cadena[i]==cadena[j]){
        con++;
      }
    }
    if(con%2!=0){
      impar++;
    }
    if(impar>1){
      break;
    }
  }
  if(impar>1){
    console.log('falso');
  }
  else{
    console.log('verdadero');
  }
}
inputString= 'aabb';

palindromeRearranging(inputString);
palindromeRearranging('rreet');
palindromeRearranging('rreetg');
palindromeRearranging('erer');