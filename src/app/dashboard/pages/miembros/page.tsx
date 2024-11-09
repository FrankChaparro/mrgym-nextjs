"use client"

import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code'
import Table from '@/components/Table'
import { Client } from '@/Interface/Client'
import Register from '@/components/Register'
import Swal from 'sweetalert2';


function Miembros() {


  const [clients, setClients] = useState<Client[]>([]);
  const [qrDniCliente, setQrDniCliente] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('https://mrgymbackendspringboot-production-2dcf.up.railway.app/cliente/listar', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {

            throw new Error('Error en la solicitud');
          }

          const data = await response.json();
          console.log(data)
          setClients(data);

        } catch (error) {
          console.log('Error al obtener los datos', error);
        }
      } else {
        console.log('Token no encontrado');
      }
    };

    fetchData();
  }, []);

  const RegistrarCliente = async (data: Client) => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const response = await fetch('https://mrgymbackendspringboot-production-2dcf.up.railway.app/cliente/agregar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          console.log(JSON.stringify(data))
          Swal.fire({
            title: "Error 403!",
            text: "formato de datos incorrectos!",
            icon: "error"
          });
          throw new Error('Error en la solicitud');
        }

        const newClient = await response.json();
        Swal.fire({
          title: "Buen Trabajo!",
          text: "Cliente registrado con exito!",
          icon: "success"
        });
        console.log('Cliente registrado con éxito:', newClient);

        setQrDniCliente(newClient.dni_cliente);

        //actualizar la lista de clientes
        setClients((prevClients) => [...prevClients, newClient]);

      } catch (error) {
        console.error('Error al registrar el cliente:', error);
      }
    } else {
      console.log('Token no encontrado');
    }
  };


  return (
    <div className="p-4 sm:ml-64">
      <div className=" border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">

        <div className='border rounded-lg border-gray-950 p-4 flex-auto space-y-2'>


          <Register onFormSubmit={RegistrarCliente}></Register>

          <Table data={clients}></Table>

          {qrDniCliente && (
            <div className="mt-4 flex justify-center">
              <QRCode value={qrDniCliente} size={256} bgColor="#282c34" fgColor="#fff" level="H" />
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default Miembros
