function getIssues() {
  fetch('https://api.github/com/repos/TorreJohnson/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issueList = `<ul>${json.map(i => '<li>' + i.name + '</li>').join('')}</ul>`
  document.getElementById('issues').innerHTML = issueList;
}

function createIssue() {
  fetch('https://api.github/com/repos/TorreJohnson/javascript-fetch-lab/issues', {
    method: 'post',
    title: `${document.getElementById('title').value}`,
    body: `${document.getElementById('body').value}`,
    headers: {
      Authorization: `token ${getToken()}`
    }
  });
  getIssues();
}

function showResults(json) {
  document.getElementById('results').innerHTML = "<a href=" + `${json.html_url}` + ">Repo Link</a>";
  console.log(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch('https://api.github.com/repos/' + `${repo}` + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
