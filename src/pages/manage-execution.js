import React  from 'react';
import { useNavigate} from 'react-router-dom';

const ManageExecution = () => {
   const history = useNavigate()
    //насколько я понимаю yes/no должны откуда-то подгружаться, но я хз откуда
    return (
        <div className='flex text-center mx-auto max-w-6xl mt-12'>
            <div className="font-tahoma mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>&nbsp;&nbsp;&nbsp;Teams alloceted</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button onClick={() => history("/allocate-teams")} className="bg-mustard hover:bg-bear text-black font-bold py-2 min-w-full flex-1">Allocate Teams to Groups...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></td>
                            <td><p>yes</p></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Finish
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button onClick={() => history('/manage-games')} className="bg-mustard hover:bg-bear text-black font-bold py-2 min-w-full flex-1">Manage Groups Stage Games...</button></td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    yes
                                </p>
                            </td>
                        </tr>  
                        <tr>
                            <td><button className="bg-mustard hover:bg-bear text-black font-bold py-2 min-w-full flex-1">Manage Round of 16 Games...</button></td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    yes
                                </p>
                            </td>
                        </tr>  
                        <tr>
                            <td><button className="bg-mustard hover:bg-bear text-black font-bold py-2 min-w-full flex-1">Manage Quarter-Final Games...</button></td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    yes
                                </p>
                            </td>
                        </tr>  
                        <tr>
                            <td><button className="bg-mustard hover:bg-bear text-black font-bold py-2 min-w-full flex-1">Manage Semi-Final Games...</button></td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    yes
                                </p>
                            </td>
                        </tr>  
                        <tr>
                            <td><button className="bg-mustard hover:bg-bear text-black font-bold py-2 min-w-full flex-1">Manage Final Games...</button></td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    yes
                                </p>
                            </td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageExecution;