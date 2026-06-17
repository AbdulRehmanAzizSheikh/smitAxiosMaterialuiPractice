import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar />
      <div className='flex gap-5 flex-wrap justify-around'>
        <Card image='https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg'/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
