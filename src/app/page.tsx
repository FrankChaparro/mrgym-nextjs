"use client"
import { useState,FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

function Page() {

    const [usuario, setusuario] = useState<string>('');
    const [contrasenia, setcontrasenia] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasenia);

        try {
            
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usuario,
                    password: contrasenia,
                }),
            });

           
            if (!response.ok) {
                Swal.fire({
                    title: "Error!",
                    text: "credenciales incorrectas!",
                    icon: "error"
                });
                throw new Error('Hubo un problema con la autenticación');
            }else{
                
                Swal.fire({
                    title: "Buen Trabajo!",
                    text: "credenciales correctas!",
                    icon: "success"
                  });
                const data = await response.json();
                console.log('Respuesta del servidor:', data);

                localStorage.setItem('token', data.token);
                router.push('/dashboard');

            }


            
        } catch (error) {
            console.log(error , 'Algo salió mal');
        }
    }

    return (
        <div className="bg-red-500">

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Ingresa tu cuenta 
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user" 
                                    onChange={(e) => setusuario(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input type="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => setcontrasenia(e.target.value)}
                                    />
                                </div>
                               
                                <button type="submit" className="w-full text-white bg-slate-800 border hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
