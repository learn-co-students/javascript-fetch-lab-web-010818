// NODE_DEBUG=http node;
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${getToken()}`
//   }
// }).then(res => res.json()).then(json => console.log(json));
function getIssues() {
  // GET /repos/:owner/:repo/issues
  const repo = 'cnlucke/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/issues`

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then( json => showIssues(json) );
}

function showIssues(json) {
  console.log(json);
}


function createIssue() {
  // POST /repos/:owner/:repo/issues
  const repo = 'cnlucke/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/issues`
  const title = document.getElementById('title')
  const body = document.getElementById('body')
  // title.innerText.value = ""
  // body.innerText.value = ""

  const postData = {"title": title.value, "body": body.value}
  fetch(url, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then( json => showIssues(json) );

}

function showForkedRepo() {
   // display the repo information in the browser by appending html with a link to the repository url to the DOM.
}

// const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
// document.getElementById("repositories").innerHTML = repoList
// `<li><a href="${json["html_url"]}">${json["name"]}</a></li>'

function showResults(json) {
  const results = document.getElementById('results');
  const resultsTag = document.createElement('p');
  const repoLink = `<a href="${json["html_url"]}" target="_blank">${json["name"]}</a>`;
  resultsTag.innerHTML = repoLink;
  results.appendChild(resultsTag);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/forks`

  fetch(url, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then( json => showResults(json) );
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '4b81a8a698743651425641563c3ac04d2cd33c3a'
  return ''
}
