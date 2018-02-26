function getIssues() {
  fetch('https://api.github.com/repos/katycarr/javascript-fetch-lab/issues', {
    method:'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issues = document.getElementById('issues')
  for (let i = 0; i < json.length; i++) {
    const newIssue = document.createElement('p')
    newIssue.innerHTML = `<strong>${json[i].title}</strong> - ${json[i].body}`
    issues.appendChild(newIssue)
  }
}

function createIssue() {
  const titleInput = document.getElementById('title').value
  const bodyInput = document.getElementById('body').value
  const postData = {
    title:titleInput,
    body:bodyInput
  }
  fetch('https://api.github.com/repos/katycarr/javascript-fetch-lab/issues', {
    method:/post/,
    body: JSON.stringify(postData),
    headers: {
      Authorization:`token ${getToken()}`
    }
  }).then(res => console.log(res))
  getIssues();
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href='${json.html_url}'> ${json.name}</a>`

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method:/post/,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
