export default function App() {
  return (
    
     <div className="min-h-full min-w-full flex justify-center flex-col">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg flex flex-col justify-center items-center gap-3">
        <input type="text" name="txt" id="txt" placeholder="Name" />
        <input type="email" name="mail" id="mail"   />
        <input type="password" name="pass" id="pass" />
        <input type="tel" name="tel" id="tel" />
        <button type="submit">Submit</button>
      </div> 
     </div>
  )
}
