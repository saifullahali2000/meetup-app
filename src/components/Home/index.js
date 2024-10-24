import {Link} from 'react-router-dom'

import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeContainer,
  Name,
  Topic,
  Image,
  HomeHeading,
  HomePara,
  Button,
} from './style'

// Assuming topicsList is available in this file or imported
const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business'},
  {id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning'},
  {id: 'FASHION_AND_BEAUTY', displayText: 'Fashion and Beauty'},
  {id: 'GAMES', displayText: 'Games'},
]

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        const selectedTopic = topicsList.find(
          each => each.displayText === topic,
        )

        return (
          <div>
            <Header />
            {isRegistered ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>
                  Welcome to {selectedTopic ? selectedTopic.displayText : ''}
                </Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <Button type="button" onClick={onRegister}>
                    Register
                  </Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
