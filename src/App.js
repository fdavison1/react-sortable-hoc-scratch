import React from 'react'
import './App.css'
import ImgContainer from './ImgContainer'
import  arrayMove  from 'array-move'

export default class App extends React.Component {
  state = {
    images: ['https://previews.123rf.com/images/tomwang/tomwang1507/tomwang150700058/42561850-successful-young-business-people-working-in-the-office.jpg',
      'https://previews.123rf.com/images/tomwang/tomwang1609/tomwang160900052/63240267-happy-young-business-people-working-in-office.jpg',
      'https://previews.123rf.com/images/ivankoivanko/ivankoivanko1608/ivankoivanko160800151/61291636-successful-team-of-young-business-people-a-group-of-creative-professionals-working-together-on-a-new.jpg',
      'https://ak1.picdn.net/shutterstock/videos/5916011/thumb/1.jpg']
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({ images: arrayMove(this.state.images, oldIndex, newIndex) })
  }
  render() {
    return (
      <div>
        <ImgContainer images={this.state.images} onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}