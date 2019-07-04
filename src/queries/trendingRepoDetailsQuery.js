import gql from 'graphql-tag'
export const TRENDING_REPO_DETAILS_QUERY = gql`
query SearchMostTop10Star($queryString: String!) {
  search(query: $queryString, type: REPOSITORY, first: 40) {
    edges {
      node {
        ... on Repository {
          owner {
            avatarUrl
            url
          }
          name
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
}
`
