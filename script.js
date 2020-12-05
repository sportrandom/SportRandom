function MyCopyText() {

var target_text = window.getSelection(),
add_text = '<br><br> Источник: ' + document.location.href,
out_text = target_text + add_text,
fake = document.createElement('div');

fake.style.position = 'absolute';
fake.style.left = '-99999px';

document.body.appendChild(fake);
fake.innerHTML = out_text;
target_text.selectAllChildren(fake);

window.setTimeout(function() {
document.body.removeChild(fake);
}, 100);

}

document.addEventListener('copy', MyCopyText);