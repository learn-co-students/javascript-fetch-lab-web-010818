

// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${getToken()}`
//   }
// }).then(res => res.json()).then(json => console.log(json));
const resultsDiv = document.getElementById('results')
const issueDiv = document.getElementById('issues')

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return TOKEN
  return ''
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function showResults(json) {
  let url = json.clone_url
  let h3 = document.createElement('h3')
  h3.innerHTML = 'Fork Created:'
  let link = document.createElement('a')
  link.setAttribute('href', url)
  link.innerHTML = url
  h3.append(link)
  resultsDiv.append(h3)
}

function createIssue() {
  const repo = 'javascript-fetch-lab'
  const owner = 'GuttermanA'
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title:issueTitle, body:issueBody}
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  })
    .then(res => getIssues())
}

function getIssues() {
  const repo = 'javascript-fetch-lab'
  const owner = 'GuttermanA'
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
    .then(res => res.json())
    .then(json => showIssues(json))

}

function showIssues(json) {
  let issueData = json.map(issue => Object.assign({},{title: issue.title}, {body:issue.body}, {url: issue.url}))
  for(let e of issueData) {
    let a = document.createElement('a')
    a.setAttribute('href', e.url)
    a.innerText = `Title: ${e.title} Body: ${e.body}`
    issueDiv.append(a)
  }
}
