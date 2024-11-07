"use client"
import React from 'react';
import QRCode from 'react-qr-code'


function Miembros() {



  return (
    <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
            <div className='border rounded-lg border-gray-950 p-4 flex-auto w-1/4'>
              <QRCode value="HSDF234" size={256} bgColor="#282c34" fgColor="#fff" level="H" />
            </div>
           
        </div>
      </div>
  )
}

export default Miembros
