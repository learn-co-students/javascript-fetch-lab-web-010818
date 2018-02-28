document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded');
});
const user = 'feihafferkamp';
const baseApi = 'https://api.github.com'
const repo = 'javascript-fetch-lab'

function getIssues() {
  fetch(`${baseApi}/repos/${user}/${repo}/issues`, {
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(data) {
  console.log(data)
  let issuesHtml = '';
  data.forEach((issue) => {issuesHtml += `
    <strong>${issue.title}</strong>
    <ul>
      <li>description: ${issue.body}</li>
      <li>state: ${issue.state}</li>
      <li>created at: ${issue.created_at}</li>
    </ul>`
  })
  const issuesDiv = document.getElementById('issues');
  issuesDiv.innerHTML = issuesHtml;
}

function createIssue() {
  const issueData = {title:document.getElementById('title').value, body: document.getElementById('body').value}

  fetch(`${baseApi}/repos/${user}/${repo}/issues`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`},
    body: JSON.stringify(issueData)
  })
  .then(console.log('issue successfully submitted.'))
  .then(getIssues())
  // .then(res => res.json())
  // .then(json => showIssues(json))
}

function forkRepo() {
  fetch(`${baseApi}/repos/learn-co-curriculum/${repo}/forks`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showForkedRepo(json))
}

function showForkedRepo(data) {
  const resultsDiv = document.getElementById('results');
  let infoHtml = `
  <strong>some random repo info:</strong>
  <ul>
    <li>${data.name}</li>
    <li>clone url: ${data.clone_url}</li>
    <li>default branch: ${data.default_branch}
  </ul>`
  resultsDiv.innerHTML = infoHtml;
}

function getToken() {
  return ''
}
