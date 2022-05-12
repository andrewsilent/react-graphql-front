import { gql, useQuery } from '@apollo/client';

const ExamplePage = props => {
  const getUserWithChannels = gql`
    query getUserWithChannels($userId: ID!) {
      userWithChannels(userId: $userId) {
        user {
          id
          email
          screenName
          isStaff
          channel {
            id
            name
          }
        }
      }
    }
  `;

  const { loading, error, data: userData } = useQuery(getUserWithChannels, { variables: { userId: 2349 } });

  return (
    <div>
      <header>
        <h1>Hello world</h1>
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          <pre>{userData && JSON.stringify(userData, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
};

export default ExamplePage;
