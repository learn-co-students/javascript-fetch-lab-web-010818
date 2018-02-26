function getIssues() {
  fetch('https://api.github.com/repos/matjack9/javascript-fetch-lab/issues')
    .then(res => res.json())
    .then(json => {
      for (let i = 0; i < json.length; i++){
        showIssues(json[i]);
      }
    })
}

function showIssues(json) {
  const issues = document.getElementById('issues');
  const jsonIssue = document.createElement('p');
  jsonIssue.innerText = `${json.title}: ${json.body}`
  issues.appendChild(jsonIssue);
}

function createIssue() {
  const issue = {
    title: `${document.getElementById('title').value}`,
    body: `${document.getElementById('body').value}`
  }

  fetch('https://api.github.com/repos/matjack9/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(issue)
  })
    .then(res => res.json())
    .then(getIssues())
}

function showResults(json) {
  const results = document.getElementById('results');
  results.innerText = json.html_url;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  return token;
}
