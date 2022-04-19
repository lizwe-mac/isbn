//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.bookList').innerText=localStorage.getItem('book')
//9780099590088
function getFetch(){
  const isbn = document.querySelector('input').value
  document.querySelector('h6').innerText = ''
  if(!isbn) return (document.querySelector('h6').innerText = 'Enter valid ISBN')
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // let hr = document.createElement('hr')
        if(!localStorage.getItem('book')){
          localStorage.setItem('book',`Title: ${data.title} - ${data.subtitle}\nYear published: ${data.publish_date}`)
        }else{
          let book = localStorage.getItem('book') +'\n\n'+`Title: ${data.title} - ${data.subtitle}\nYear published: ${data.publish_date}`
        localStorage.setItem('book',book)
        }
        
        document.querySelector('.title').innerText=`Title: ${data.title} - ${data.subtitle}\nYear published: ${data.publish_date}`
        // document.querySelector('.subtitle').innerText=`${data.subtitle}`
        // document.querySelector('.date_published').innerText=`Year published: ${data.publish_date}`
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h6').innerText = `ISBN ${isbn} does not exist!`
      });
}

