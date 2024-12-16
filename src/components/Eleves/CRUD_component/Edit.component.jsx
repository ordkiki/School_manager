import { FaEdit } from 'react-icons/fa'
import edit_img from "../../../assets/images/edit.png"

function Edit() {
    return (
        <div className='fixed top-0 bg-[rgba(0,0,0,0.7)] left-0 flex justify-center items-center h-screen w-[100vw] transition-all'>
            
            <div className='relative lg:flex lg:justify-between  w-[90vw] lg:w-[70vw] h-[80vh] bg-gray-100 p-5 rounded-lg'>
            <span className='text-3xl cursor-pointer absolute p-1 rounded-full -top-4 size-8 items-center justify-center flex -right-2 bg-[rgba(255,255,255,0.1)] font-bold'>&times;</span>
                <div className='bg-purple-500'>
                    <img src={edit_img} className='object-cover w-[32vw] bg-purple-500' alt="image" />

                </div>

                <div>
                    <h3>
                        <FaEdit className='text-4xl'></FaEdit>
                        The best way to edit your student
                    </h3>
                    <form action="" className='w-full lg:w-[30vw] my-5 flex-col flex-wrap' method="post">
                        <div className='flex justify-between'>

                            <div className='mr-5'>
                                <label htmlFor="Nom" className='text-[12px]'>Nom* :</label>
                                <input type="text" name='Nom'  />
                            </div>
                            <div className='ml-5'>
                                <label htmlFor="Prenom" className='text-[12px]'>Prenom* :</label>
                                <input type="text" name='Prenom'  />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Classe" className='text-[12px]'>Classe* :</label>
                            <input type="text" name='Classe'  />
                        </div>
                        <div>
                            <label htmlFor="Cout_annuel" className='text-[12px]'>Cout_annuel* (en Ariary) :</label>
                            <input type="text" name='Clasee'/>
                        </div>
                        <div>
                            <label htmlFor="Ville_naiss" className='text-[12px]'>Ville_naissance* :</label>
                            <input type="text" name='Ville_naiss'/>
                        </div>
                        <div>
                            <label htmlFor="Tel" className='text-[12px]'>Telephone* :</label>
                            <input type="number" name='Tel' />
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <label htmlFor="Sexes" className='text-[14px] font-medium mx-2'>masculin</label>
                                <input type="radio" name="masculin" id="" />
                            </div>
                            <div>
                                <input type="radio" name="masculin" id="" />
                                <label htmlFor="Sexes" className='text-[14px] font-medium mx-2' >feminin</label>
                            </div>
                        </div>
                        <button className='p-1 bg-blue-600 text-white w-full my-4'>
                            Editer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit