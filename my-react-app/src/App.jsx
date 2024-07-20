import Card from './Card.jsx'


import {image1} from './assets/image.jsx'
import {image2} from './assets/image.jsx'
import {image3} from './assets/image.jsx'
import {image4} from './assets/image.jsx'
import {image5} from './assets/image.jsx'
import {image6} from './assets/image.jsx'
import {image7} from './assets/image.jsx'
import {image8} from './assets/image.jsx'

const data = [
  {
    image_url: image1,
    name: 'Chicken Briyani',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
  {
    image_url: image2,
    name: 'Veg briyani',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
  {
    image_url: image3,
    name: 'Kothu paroota',
    title: 'egg fluged kothu paroota'
  },
  {
    image_url: image4,
    name: 'Chicken fried rice',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
  {
    image_url: image5,
    name: 'Parotta',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
  {
    image_url: image6,
    name: 'Veg fried rice',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
  {
    image_url: image7,
    name: 'Fried chicken',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
  {
    image_url: image8,
    name: 'Soup',
    title: 'Chetinadu style Spicy Mutton Biriyani'
  },
]

function Header() {
  return (
    <div className="header">
      <h1>Food Pirate</h1>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <h1>&copy;2024 copyrights--company FOOD PIRATE</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />

      {
        data.map((e) => {
          return (
            <Card name={e.name} title={e.title} image_url={e.image_url} />
            
          )
        })
      }
      <Footer />
    </>
  );
}


export default App
