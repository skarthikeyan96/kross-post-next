import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex w-full bg-white p-8 justify-between items-center shadow-sm">
        <div>
          <h2 className="font-bold text-2xl capitalize"> Kross post</h2>
        </div>
        <div>
          <button className="rounded border-2 border-black mr-2 px-8 py-2">
            {' '}
            Login{' '}
          </button>
          <button className="rounded border-2 border-black mr-2 px-8 py-2">
            {' '}
            Register{' '}
          </button>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: `calc(100vh - 200px)` }}
      >
        <h1 className="text-6xl font-bold pb-4">
          {' '}
          <span className=" text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
            Cross posting{' '}
          </span>{' '}
          made Easy !!!{' '}
        </h1>
        <p>
          {' '}
          Share your content across Dev.to, Medium and Hashnode with one click.{' '}
        </p>
      </div>
    </>
  )
}

export default Home
