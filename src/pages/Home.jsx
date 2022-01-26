// process.env.REACT_APP_GITHUB_TOKEN
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
