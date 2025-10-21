(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    //TODO
    answer.innerHTML = "<p>Loading...</p>";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        setTimeout(() => {
          let html = '';
          array.forEach(function(item) {
            html += `<div>${item.title}</div>`;
          });
          html += `<div>Total: ${array.length}</div>`;
          answer.innerHTML = html;
          fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(post => {
              answer.innerHTML += `<div>${post.title}</div>`;
            })
          setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: 'New post',
                body: 'Text',
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then(response => response.json())
              .then(data => {
                answer.innerHTML = `<p> Dodano nowy post o ID = ${data.id}</p>`;
              })
          }, 5000)

            .catch(error => {
              console.error('Error:', error);
            })
        }, 2000);
        return array;
      })
      .catch(error => {
        console.error('Error:', error);
      })
  });

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
