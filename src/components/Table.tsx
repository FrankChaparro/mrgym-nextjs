import React from 'react'

interface Client {
    nombre_cliente: string;
    apellido_cliente: string;
    telefono_cliente: string;
    dni_cliente: string;
    email: string;
    miembro: boolean;
}

function Table({data}: {data: Client[];}) {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apellido
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Teléfono
                        </th>
                        <th scope="col" className="px-6 py-3">
                            DNI
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Miembro
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((client, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {client.nombre_cliente}
                            </td>
                            <td className="px-6 py-4">{client.apellido_cliente}</td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {client.telefono_cliente}
                            </td>
                            <td className="px-6 py-4">{client.dni_cliente}</td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {client.email}
                            </td>
                            <td className="px-6 py-4">{client.miembro ? 'Sí' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table
