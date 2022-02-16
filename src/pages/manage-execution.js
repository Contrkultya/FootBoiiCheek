import React  from 'react';
import { useNavigate} from 'react-router-dom';

const ManageExecution = () => {
   const history = useNavigate()
    //насколько я понимаю yes/no должны откуда-то подгружаться, но я хз откуда
    return (
        <div className='flex items-center flex-col text-center'>
            <div className=" mr-28 ml-28 font-tahoma">
                <div className="flex flex-row justify-between mt-28 space-y-18">
                    <div className="flex flex-col space-x-3">
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Allocate Teams to Groups...</button>
                    </div>
                    <div className="flex flex-col">
                        <p className='font-tahoma font-bold'>Teams alloceted</p>
                        <p>yes</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-12 space-y-8">
                    <div className="flex flex-col">
                        <button onClick={() => history('/manage-games')} className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Manage Groups Stage Games...</button>
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Manage Round of 16 Games...</button>
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Manage Quarter-Final Games...</button>
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Manage Semi-Final Games...</button>
                        <button className="bg-mustard hover:bg-bear text-black font-bold py-2 flex-1">Manage Final Games...</button>
                    </div>
                    <div className="flex flex-col">
                        <p className='font-tahoma font-bold'>Finished</p>
                        <p>yes</p>
                        <p>no</p>
                        <p>no</p>
                        <p>no</p>
                        <p>no</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageExecution;