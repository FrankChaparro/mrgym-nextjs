"use client"
import React from 'react';
import Html5QrcodePlugin from './Html5QrcodeScannerPlugin'


function Asistencia() {

    const onNewScanResult = (decodedText: string, decodedResult: unknown) => {
        console.log("Decoded text:", decodedText);
        console.log("DecodedResult text:", decodedResult);

        if(decodedText){
          alert("se encontro el codigo")
        }
    };
    
  return (
    <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
          asistencia
        </div>
        <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
      </div>
  )
}

export default Asistencia
