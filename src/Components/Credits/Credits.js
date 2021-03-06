import React from 'react'
import ReactPlayer from 'react-player'
import { Button, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './credits.css'

const Credits = () => {
  return (
    <div className="credits-body">
      <ReactPlayer
        style={{ display: 'none' }}
        url="https://www.youtube.com/watch?v=jbUg8lEKOBs"
        playing
        loop
      />
      <div className="container">
        <div className="credits">
          <h1>Created by KDCK</h1>
          <span>
            Kathleen Lopez, Daniel Howard, Chris Ardeljan, Kenneth Zhu
          </span>
          <h1>This game is not for commercial use, all art and music is meant as a place holder for our student project. Please see the following links for more information about the artists we've included in our project:</h1>
          <List>
            <List.Item>
              <List.Icon name="male" />
              <List.Content>Denecastre</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://www.reddit.com/user/Denecastre">
                  https://www.reddit.com/user/Denecastre
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="male" />
              <List.Content>Nate Kling</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://imgur.com/r/PixelArt/ijWjGah">
                  https://imgur.com/r/PixelArt/ijWjGah
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://imgur.com/k7ksNbK">
                  https://imgur.com/k7ksNbK
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="male" />
              <List.Content>Michael Meyers</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://www.behance.net/gallery/17281817/Transistor-fanart">
                  https://www.behance.net/gallery/17281817/Transistor-fanart
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>Pixel Art Sprites</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://twitter.com/PixelArtSprites/media">
                  https://twitter.com/PixelArtSprites/media
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>Unknown Artist(s)</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="http://www.canbum.net/cdn/27/1993/384/">
                  http://www.canbum.net/cdn/27/1993/384/
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="male" />
              <List.Content>kirokaze</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://www.deviantart.com/kirokaze/art/Last-ones-592421829">
                  https://www.deviantart.com/kirokaze/art/Last-ones-592421829
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="male" />
              <List.Content>faxdoc</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://www.deviantart.com/faxdoc/">
                  https://www.deviantart.com/faxdoc/
                </a>
              </List.Content>
            </List.Item>
          </List>

          <Link to="/home">
            <Button color="red" className="home-button-deck" waves="purple">
              Back to Kata Cards
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Credits
