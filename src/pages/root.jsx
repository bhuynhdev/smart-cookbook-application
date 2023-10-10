import '../styles/root.css'

export default function Root() {

  return (
    <div className='layout'>
      <div className='frame'>
        <nav>
          <ul>
            <li>Profile</li>
          </ul>
        </nav>
        <form>
          <input type="text" name="search" id="search" />
        </form>
      </div>
      <div className="instructions">
        Instructions
      </div>
    </div>
  )
}
