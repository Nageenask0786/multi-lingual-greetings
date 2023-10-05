import {Component} from 'react'

import LanguageGreetingItem from '../LanguageGreetingItem'

import {Container, Ul, Image, Heading} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLingualGreetings extends Component {
  state = {activeButtonId: languageGreetingsList[0].id}

  getActiveButtonId = id => {
    this.setState({activeButtonId: id})
  }

  getActiveIndexData = () => {
    const {activeButtonId} = this.state
    const activeResults = languageGreetingsList.filter(
      each => each.id === activeButtonId,
    )
    return activeResults
  }

  render() {
    const {activeButtonId} = this.state
    const activeImageResults = this.getActiveIndexData()
    const {imageUrl, imageAltText} = activeImageResults[0]
    console.log(activeImageResults)
    return (
      <Container>
        <Heading>Multilingual Greetings</Heading>
        <Ul>
          {languageGreetingsList.map(each => (
            <LanguageGreetingItem
              Details={each}
              key={each.id}
              activeButtonId={activeButtonId}
              getActiveButtonId={this.getActiveButtonId}
            />
          ))}
        </Ul>
        <Image src={imageUrl} alt={imageAltText} />
      </Container>
    )
  }
}

export default MultiLingualGreetings
