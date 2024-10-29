/* eslint-disable no-unused-vars */
import React, {FunctionComponent, useEffect, useState} from 'react';
import { Input } from '../components/ui/input';
import { BudgetOptions, SelectTravelsList } from '../constants/Options';

import { Button } from "../components/ui/button"
import { toast } from 'sonner';
import { AI_PROMPT } from '../constants/Options';
import { chatSession } from '../service/Aimodel.jsx';

const CreateTrip = () => {

  const [formData,setFormData]=useState([]);

  const handleInputChange=(name,value)=>{

    setFormData({
      ...formData,
      [name]:value
    })
  }


  useEffect(()=>{
    console.log(formData);
  },[formData])


  const onGenerateTrip=async()=>{
    if(formData?.noOfDays>7 && !formData?.location || !formData?.budget || !formData?.traveler){
      toast("Please Fill all details")
      return ;
    }

    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',formData?.location)
    .replace('{noOfDays}',formData?.noOfDays)
    .replace('{traveler}',formData?.traveler)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)

    console.log(FINAL_PROMPT);

    const result=await chatSession.sendMessage(FINAL_PROMPT)

    console.log(result?.response?.text());
  }


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>

        <h2 className='font-bold text-3xl'>Tell us your travel Preferences 🏕️</h2>
        <p className="mt-3 text-grey-500 text-xl">Just provide some basic details and our AI planner will generate each suitable things you need for your trip</p>

        <div className='mt-20 flex flex-col gap-10'>
            <div>
                <h2 className='my-3 text-xl font-medium'>What is Your Destination?</h2>
                <Input placeholder={'Delhi, India'} type="string"
                  onChange={(e)=>handleInputChange('location',e.target.value)}
                />
                
            </div>

            <div>

            <h2 className='my-3 text-xl font-medium'>How many days are you planning for trip?</h2>
            <Input placeholder={'Ex.3'} type="number"
              onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
            />
            </div>


        </div>

        <div className='mt-10'>
        <h2 className='my-3 text-xl font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {BudgetOptions.map((item,index) => (
            
            <div key={index} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&'shadow-xl border-black'}`}
              onClick={()=>handleInputChange('budget',item.title)}
            >
              
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
        </div>

        <div className='mt-10'>
        <h2 className='my-3 text-xl font-medium'>With who do you plan to travel your next Adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item,index) => (
            
            <div key={index} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveler==item.people&&'shadow-xl border-black'}`}
             onClick={()=>handleInputChange('traveler',item.people)}
            >
              
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
              
            </div>
          ))}
        </div>
        </div>

        <div className='flex justify-end my-10'>
          <Button onClick={onGenerateTrip}>Create Trip</Button>
        </div>

    </div>
  )
}

export default CreateTrip
