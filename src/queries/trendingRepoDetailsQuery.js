import gql from 'graphql-tag'
export const TRENDING_REPO_DETAILS_QUERY = gql`
query TrendingRepoDetailQuery($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
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