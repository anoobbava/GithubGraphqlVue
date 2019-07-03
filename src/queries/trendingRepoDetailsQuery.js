import gql from 'graphql-tag'
export const trendingRepoDetails = gql`
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
}
`
