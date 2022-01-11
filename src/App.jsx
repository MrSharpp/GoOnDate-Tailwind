

function App() {
  

  return (
    <>
   <nav className="sm:px-16 px-4 py-6 shadow-sm w-full flex justify-between" > 
     <div className="" >
     GO On Date   
     </div>

     <div className="flex">
       <div className="px-4" > About </div>
       <div className="px-4" > Contact </div>
     </div>
      </nav>
      

      <section className="py-8 px-20 h-1/2 mt-8" style={{minHeight: '400px'}} >
        <div className="text-center py-24 rounded-xl flex items-center flex-col bg-blue-500 text-white">
          <h2 className="text-5xl mb-5" >Go On A Good Date! </h2>
          <p className="text-sm mb-14">Grab hold of the dates close to your heart</p>
       
          <button className="px-4 py-2 bg-blue-900 rounded-lg hover:shadow-md">Buy Now</button>
        </div>
      </section>
      
      </>
  )
}

export default App
