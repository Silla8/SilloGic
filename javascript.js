let x=0;
function mode()
{
	if(x==0)
	{
		document.getElementById('b').style.backgroundColor="#252524";
		x=1;
		let ah=document.getElementsByTagName('a');
		for(let i=0; i<ah.length; i++)
		{
			ah[i].style.color="white";
			ah[i].style.textDecoration="none";
		}
	}
	else
	{
		document.getElementById('b').style.backgroundColor= 'white';
		x=0;
		let ah=document.getElementsByTagName('a');
		for(let i=0; i<ah.length; i++)
		{
			ah[i].style.color="black";
			ah[i].style.textDecoration="none";
		}
	}

}
	