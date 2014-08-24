function ChangeTab(tabname) {
   document.getElementById('home').style.display = 'none';
   document.getElementById('about').style.display = 'none';
   document.getElementById('product').style.display = 'none';
   document.getElementById('contact').style.display = 'none';
   
   document.getElementById(tabname).style.display = 'block';
}