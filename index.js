const results = document.getElementById('results')
const fork = 'morgannegagne/javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`,{
      headers: {
        Authorization: `token ${getToken()}`
      }
  }).then(resp => resp.json())
}

function showIssues(json) {

}

function getIssue(){
  return {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
}

function createIssue() {
  let issue = getIssue();
  console.log(issue)
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${getToken()}`
    },
    method: 'post'
  })
}
//  https://api.github.com/repos/morgannegagne/javascript-fetch-lab/issues

function showResults(json) {
  forkRepo().then(resp => {
    let element = document.createElement('p')
    element.innerText = JSON.stringify(resp)
    results.appendChild(element)
  })
}

function showForkedRepo(){
  let fork = forkRepo()
  fork.then(resp => {
    let element = document.createElement('a')
    element.innerHTML = "Forked Repository"
    element.href = resp.html_url
    results.appendChild(element)
  })
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  return fetch(`https://api.github.com/repos/${repo}/forks`, {
      headers: {
        Authorization: `token ${getToken()}`
      },
      method: 'post' // *GET, PUT, DELETE, etc.
    })
    .then(res => res.json()) // parses response to JSON
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
