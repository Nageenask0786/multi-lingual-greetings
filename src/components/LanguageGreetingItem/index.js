import {Button, Li} from './styledComponents'

const LanguageGreetingItem = props => {
  const {Details, getActiveButtonId, activeButtonId} = props

  const {buttonText, id} = Details
  const onClickOfButton = () => {
    getActiveButtonId(id)
  }
  const bgColor = activeButtonId === id ? '#db1c48' : '#ffffff'
  const fontColor = activeButtonId === id ? '#ffffff' : '#db1c48'
  return (
    <Li>
      <Button
        type="button"
        onClick={onClickOfButton}
        color={bgColor}
        fontColor={fontColor}
      >
        {buttonText}
      </Button>
    </Li>
  )
}

export default LanguageGreetingItem
