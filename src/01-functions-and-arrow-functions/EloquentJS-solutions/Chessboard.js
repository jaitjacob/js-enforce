let size = 8;
let toggle = " ";
let rowString = "";
for(i=0;i<size;i++){
  for(j=0;j<size;j++){
    rowString = rowString + toggle;
	toggle = (toggle===" ")?"#":" ";
  }
  console.log(rowString);
  toggle = (toggle===" ")?"#":" ";
  rowString = "";
}