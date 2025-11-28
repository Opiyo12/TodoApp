
const Modal=({ isOpen, onClose, children })=> {

return(

    <>
    {
        isOpen &&(

           <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white w-sm  shadow-lg rounded-lg relative">
                <button onClick={onClose} 
                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                   ✕
                </button>
               {children}
            </div>
          
           </div> 
        )
    }
    </>
)



}
export default Modal;