"use client";
import React from 'react';
import {BiUserPlus} from "react-icons/bi";
import MenuCard from '@/components/menucard';
import NewMenuForm from "@/components/menuform/newmenuform";
import UpdateMenuForm from "@/components/menuform/updatemenuform";
import { useState } from 'react';
import mytoast from '@/components/toast/toast';
import { selectData, deleteData } from "@/apiservices/menuapiservices"

function MenuPage(props) {

    const[visible, setVisible] = useState(false);
    const[flag, setFlag] = useState(true);
    const[idValue, setId]= useState("");
    const[modifieddata, setmodifieddata]= useState();
    const[aftermodifieddata, setaftermodifieddata]= useState(null);

    const cardstateupdateHandler = async () => {
        const afterpayload = await selectData(null,null);
        setaftermodifieddata(afterpayload);
    }
    const onclickhandler =()=>{
        setVisible(!visible);
        setFlag(true);
    }
    const updateHandler =async(id, data)=>{
        setFlag(false);
        setVisible(true);
        setId(id);

        const modified = data.data.find(item => item._id == id);

        setmodifieddata(modified);


        mytoast.info(`item ${id} selected for update`);

        

    }
    const deleteHandler =(id) =>{
        deleteData(id);
        mytoast.danger(`item ${id} is deleted`);
        const updatedData = aftermodifieddata.data.filter(item => item._id !== id);
        const constructeddata = {
            status: "Alhamdulillah",
            data: updatedData
        }
        setaftermodifieddata(constructeddata);
    }





    return (
        <div className='main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10'>
            <h1 className='animate__animated animate__backInDown text-xl  md:text-5xl font-bold py-10  text-center'> Menus Management </h1>
            <div className='container mx-auto flex justify-between py-5 border-b'>
                <div className='left flex gap-3'>
                    <button onClick={onclickhandler} className='flex allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white'>Add New Menu <span className='px-1'><BiUserPlus size={23}/></span></button>
                </div>
            </div>

            {
                flag
                    ?
                    <div className='container mx-auto'>
                        { visible ? <NewMenuForm statechanger={cardstateupdateHandler}/> : <></>}
                    </div>
                    :
                    <div className='container mx-auto'>
                        { visible ? <UpdateMenuForm data={idValue} payload={modifieddata} statechanger={cardstateupdateHandler} /> : <></>}
                    </div>

            }
 
            <div className='container mx-auto'>
                <MenuCard updateHandler={updateHandler} fromupdateform={aftermodifieddata} deleteHandler={deleteHandler}/>
            </div>
            
        </div>
    );
}

export default MenuPage;