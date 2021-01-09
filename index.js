console.log('hello there')

setInterval(()=>{
/* getting the date */
d=new Date();
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
minuteRotation=6*mtime;
hourRotation=30*htime + mtime/2;
secondRotation=6*stime;

document.getElementById('hour').style.transform=`rotate(${hourRotation}deg)`;
document.getElementById('minute').style.transform=`rotate(${minuteRotation}deg)`;
document.getElementById('second').style.transform=`rotate(${secondRotation}deg)`;

},1000)


