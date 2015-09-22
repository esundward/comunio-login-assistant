accountbalance = document.getElementById('userbudget').childNodes[3].children[0].nextSibling.textContent;
accountbalance = accountbalance.substring(0, accountbalance.length - 1).trim();
accountbalance = parseInt(accountbalance.replace('.', '', 'g'));


function numtocom(numval) {
  comval = '';
  numval=numval.toString();
  for (i = 0; i<numval.length; i++) {
    pos=numval.length-i-1;
    if (i % 3 == 0 &&  i!=0 && numval[pos]!='-') {
      comval += '.';
    }
    comval += numval[pos];
  }
  comval = comval.split('').reverse().join('');
  return comval;
}


rowsbid = document.getElementsByClassName('tablecontent03') [1].rows;
bidsum = 0;
for (i = 1; i < rowsbid.length; i++) {
  if (rowsbid[i].cells[6].innerHTML == 'Pending') {
    bidsum += parseInt(rowsbid[i].cells[3].innerHTML.replace('.','','g'));
  }
}
//console.log('string'+(accountbalance-bidsum).toString());
balancebids=numtocom(accountbalance-bidsum);
clearelement=document.createElement('div');
clearelement.className='clear';
valelement=document.createElement('div');
valelement.innerHTML = '<div id="balancebids">\t<div class="icon mi mi_userbudget"></div><p><strong>Account balance after processing all bids:</strong>&nbsp;'+balancebids+'&nbsp;€</p></div>';
document.getElementById('manager').appendChild(clearelement);
document.getElementById('manager').appendChild(valelement);

