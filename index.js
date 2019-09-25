const fork = 'feihafferkamp/javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    headers: { Authorization: `token ${getToken()}` }
  })
  .then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issueList = `<ul>${json.map(issue => '<li>' + issue.name + '</li>').join('')}</ul>`
  document.getElementById('issues').innerHTML = issueList;
}

function createIssue() {
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'post',
    headers: { Authorization: `token ${getToken()}` },
    body: JSON.stringify(document.getElementById('body').value)
  });
  getIssues();
}

function showResults(json) {
  let element = `<a href=${json.html_url}>Repo Link</a>`
  document.getElementById('results').innerHTML = element;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: { Authorization: `token ${getToken()}` }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  return '';
}
