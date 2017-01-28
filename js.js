var computer = {
  model: '2016',
  type: 'Laptop',
  ram: '8GB',
  hdd: '600GB'
};

var mobile = new Object ();
    mobile.model = '2016';
    mobile.type = 'Touchpad';

document.write('I am buying a  '+computer.model+' model Computer with '+computer.ram+' and '+computer.hdd);
document.write('<br>');
document.write('I have a '+mobile.model+ ' mobile, with a  '+mobile.type );
document.write('<br>');
computer.model = '2017';
document.write('I am buying a  '+computer.model+' model Computer with '+computer.ram+' and '+computer.hdd);
