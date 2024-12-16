import React from 'react'
import { FaEdit } from 'react-icons/fa'

function Edit() {
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center h-screen w-[100vw]'>
        <div className='w-[70vw] h-[80vh] bg-white p-4'>
            <h3>
                <FaEdit className='text-4xl'></FaEdit>
                The best way to edit your student
            </h3>
            <form action="" className='w-[30vw] my-10 flex-col flex-wrap' method="post">
                <div className='flex justify-between'>

                    <div className='mr-5'>
                        <label htmlFor="Nom" className='text-[12px]'>Nom* :</label>
                        <input type="text" name='Nom' placeholder="Nom d'eleve "/>
                    </div>
                    <div className='ml-5'>
                        <label htmlFor="Prenom" className='text-[12px]'>Prenom* :</label>
                        <input type="text" name='Prenom' placeholder="Prenom d'eleve "/>
                    </div>
                </div>
                <div>
                    <label htmlFor="Classe" className='text-[12px]'>Classe* :</label>
                    <input type="text" name='Clasee' placeholder="Classe d'eleve "/>
                </div>
                <div>
                    <label htmlFor="Cout_annuel" className='text-[12px]'>Cout_annuel* (en Ariary) :</label>
                    <input type="text" name='Clasee' placeholder="Cout_annuel"/>
                </div>
                <div>
                    <label htmlFor="Ville_naiss" className='text-[12px]'>Ville_naissance* :</label>
                    <input type="text" name='Ville_naiss' placeholder="Ville_de_naissance "/>
                </div>
                <div>
                    <label htmlFor="Tel" className='text-[12px]'>Telephone* :</label>
                    <input type="number" name='Tel' placeholder="Numero telephone "/>
                </div>
                <div className='flex justify-between'>
                <div>
                    <label htmlFor="Sexes">masculin</label>
                    <input type="radio" name="masculin" id="" />
                </div>
                    <div>
                        <input type="radio" name="masculin" id="" />
                        <label htmlFor="Sexes">feminin</label>
                    </div>
                </div>
                <button className='p-1 bg-blue-600 text-white w-full my-4'>
                    Editer
                </button>
            </form>
        </div>
    </div>
  )
}

export default Edit