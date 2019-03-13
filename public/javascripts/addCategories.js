let url = '';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => { throw err });