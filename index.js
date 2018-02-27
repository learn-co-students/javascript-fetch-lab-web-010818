document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded');
});
const user = 'feihafferkamp';
const baseApi = 'https://api.github.com'
const repo = 'javascript-fetch-lab'

function getIssues() {

}

function showIssues(json) {

}

function createIssue() {
  const issueData = {title:document.getElementById('title').value, body: document.getElementById('body').value}

  fetch(`${baseApi}/repos/${user}/${repo}/issues`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`},
    body: JSON.stringify(issueData)
  })
  .then(res => console.log(res))
  // .then(res => res.json())
  // .then(json => console.log(json))
}

function forkRepo() {
  fetch(`${baseApi}/repos/learn-co-curriculum/${repo}/forks`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}
  })
  .then()
  // .then(json => showForkedRepo(json))
}

function showForkedRepo(data) {
  const results = document.getElementById('results');
  let infoHtml = `
  <strong>some random repo info:</strong>
  <ul>
    <li>${data.name}</li>
    <li>clone url: ${data.clone_url}</li>
    <li>default branch: ${data.default_branch}
  </ul>`
  results.innerHTML = infoHtml;
}

function getToken() {
  return '54ac755d89a3c7b7c31cf089464b901113aa59b5'
}
